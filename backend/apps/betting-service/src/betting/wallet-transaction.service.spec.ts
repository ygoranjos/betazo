import { BadRequestException, NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '@betazo/database';
import { WalletTransactionService } from './wallet-transaction.service';
import { PlaceBetDto } from './dto/place-bet.dto';

const USER_ID = 'a1b2c3d4-e5f6-7890-abcd-ef1234567890';
const WALLET_ID = 'b2c3d4e5-f6a7-8901-bcde-f12345678901';

// Simula o cliente de transação do Prisma
const mockTx = {
  $queryRaw: jest.fn(),
  wallet: { update: jest.fn() },
  bet: { create: jest.fn() },
};

const mockPrisma = {
  $transaction: jest.fn(),
};

function makeDto(
  stake: number,
  selections: { eventId: string; marketKey: string; selectionId: string; price: number }[],
): PlaceBetDto {
  const dto = new PlaceBetDto();
  dto.userId = USER_ID;
  dto.stake = stake;
  dto.selections = selections.map((s) =>
    Object.assign(Object.create(null) as object, s),
  ) as PlaceBetDto['selections'];
  return dto;
}

function walletRow(balance: string) {
  return [{ id: WALLET_ID, balance, user_id: USER_ID }];
}

describe('WalletTransactionService', () => {
  let service: WalletTransactionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        WalletTransactionService,
        { provide: PrismaService, useValue: mockPrisma },
      ],
    }).compile();

    service = module.get<WalletTransactionService>(WalletTransactionService);
    jest.clearAllMocks();

    // Configura $transaction para executar o callback com mockTx
    mockPrisma.$transaction.mockImplementation(
      async (callback: (tx: typeof mockTx) => Promise<unknown>) => callback(mockTx),
    );
  });

  // --- caminho feliz ---

  it('debita o saldo e cria a aposta quando o saldo é suficiente', async () => {
    const expectedBet = {
      id: 'bet-uuid-1',
      userId: USER_ID,
      stake: 50,
      combinedOdds: 2.15,
      potentialPayout: 107.5,
      status: 'PENDING',
      selections: [],
    };
    mockTx.$queryRaw.mockResolvedValue(walletRow('500.00'));
    mockTx.wallet.update.mockResolvedValue({});
    mockTx.bet.create.mockResolvedValue(expectedBet);

    const result = await service.placeBet(
      makeDto(50, [{ eventId: 'EVT-001', marketKey: 'h2h', selectionId: 'SEL-home', price: 2.15 }]),
    );

    expect(result).toBe(expectedBet);
    expect(mockTx.wallet.update).toHaveBeenCalledWith({
      where: { id: WALLET_ID },
      data: { balance: { decrement: 50 } },
    });
    expect(mockTx.bet.create).toHaveBeenCalledWith({
      data: expect.objectContaining({
        userId: USER_ID,
        stake: 50,
        status: 'PENDING',
      }),
    });
  });

  it('calcula combinedOdds e potentialPayout corretamente para múltiplas seleções', async () => {
    // 2.0 × 1.5 × 3.0 = 9.0 → stake 100 → payout 900
    mockTx.$queryRaw.mockResolvedValue(walletRow('1000.00'));
    mockTx.wallet.update.mockResolvedValue({});
    mockTx.bet.create.mockResolvedValue({});

    await service.placeBet(
      makeDto(100, [
        { eventId: 'EVT-001', marketKey: 'h2h', selectionId: 'SEL-1', price: 2.0 },
        { eventId: 'EVT-002', marketKey: 'h2h', selectionId: 'SEL-2', price: 1.5 },
        { eventId: 'EVT-003', marketKey: 'h2h', selectionId: 'SEL-3', price: 3.0 },
      ]),
    );

    expect(mockTx.bet.create).toHaveBeenCalledWith({
      data: expect.objectContaining({
        combinedOdds: 9.0,
        potentialPayout: 900.0,
      }),
    });
  });

  it('serializa as seleções como objetos planos no registro da aposta', async () => {
    mockTx.$queryRaw.mockResolvedValue(walletRow('200.00'));
    mockTx.wallet.update.mockResolvedValue({});
    mockTx.bet.create.mockResolvedValue({});

    await service.placeBet(
      makeDto(10, [{ eventId: 'EVT-042', marketKey: 'totals', selectionId: 'SEL-over', price: 1.9 }]),
    );

    expect(mockTx.bet.create).toHaveBeenCalledWith({
      data: expect.objectContaining({
        selections: [
          { eventId: 'EVT-042', marketKey: 'totals', selectionId: 'SEL-over', price: 1.9 },
        ],
      }),
    });
  });

  // --- saldo insuficiente ---

  it('lança BadRequestException quando o saldo é insuficiente', async () => {
    mockTx.$queryRaw.mockResolvedValue(walletRow('30.00'));

    await expect(
      service.placeBet(
        makeDto(50, [{ eventId: 'EVT-001', marketKey: 'h2h', selectionId: 'SEL-home', price: 2.0 }]),
      ),
    ).rejects.toThrow(BadRequestException);
  });

  it('não chama wallet.update nem bet.create quando o saldo é insuficiente', async () => {
    mockTx.$queryRaw.mockResolvedValue(walletRow('10.00'));

    await expect(
      service.placeBet(
        makeDto(50, [{ eventId: 'EVT-001', marketKey: 'h2h', selectionId: 'SEL-home', price: 2.0 }]),
      ),
    ).rejects.toThrow(BadRequestException);

    expect(mockTx.wallet.update).not.toHaveBeenCalled();
    expect(mockTx.bet.create).not.toHaveBeenCalled();
  });

  it('aceita stake exatamente igual ao saldo disponível', async () => {
    mockTx.$queryRaw.mockResolvedValue(walletRow('50.00'));
    mockTx.wallet.update.mockResolvedValue({});
    mockTx.bet.create.mockResolvedValue({});

    await expect(
      service.placeBet(
        makeDto(50, [{ eventId: 'EVT-001', marketKey: 'h2h', selectionId: 'SEL-home', price: 1.5 }]),
      ),
    ).resolves.not.toThrow();
  });

  // --- carteira não encontrada ---

  it('lança NotFoundException quando a carteira não existe', async () => {
    mockTx.$queryRaw.mockResolvedValue([]);

    await expect(
      service.placeBet(
        makeDto(10, [{ eventId: 'EVT-001', marketKey: 'h2h', selectionId: 'SEL-home', price: 2.0 }]),
      ),
    ).rejects.toThrow(NotFoundException);
  });

  it('não chama wallet.update nem bet.create quando a carteira não existe', async () => {
    mockTx.$queryRaw.mockResolvedValue([]);

    await expect(
      service.placeBet(
        makeDto(10, [{ eventId: 'EVT-001', marketKey: 'h2h', selectionId: 'SEL-home', price: 2.0 }]),
      ),
    ).rejects.toThrow(NotFoundException);

    expect(mockTx.wallet.update).not.toHaveBeenCalled();
    expect(mockTx.bet.create).not.toHaveBeenCalled();
  });

  // --- atomicidade (garantia ACID) ---

  it('propaga erro do bet.create, garantindo que o $transaction faça rollback', async () => {
    mockTx.$queryRaw.mockResolvedValue(walletRow('500.00'));
    mockTx.wallet.update.mockResolvedValue({});
    mockTx.bet.create.mockRejectedValue(new Error('DB connection lost'));

    await expect(
      service.placeBet(
        makeDto(100, [{ eventId: 'EVT-001', marketKey: 'h2h', selectionId: 'SEL-home', price: 2.0 }]),
      ),
    ).rejects.toThrow('DB connection lost');
  });

  it('usa o $transaction do Prisma em todas as operações', async () => {
    mockTx.$queryRaw.mockResolvedValue(walletRow('200.00'));
    mockTx.wallet.update.mockResolvedValue({});
    mockTx.bet.create.mockResolvedValue({});

    await service.placeBet(
      makeDto(50, [{ eventId: 'EVT-001', marketKey: 'h2h', selectionId: 'SEL-home', price: 2.0 }]),
    );

    // Confirma que todas as operações foram feitas via tx (cliente de transação),
    // não diretamente no prisma — garantindo atomicidade
    expect(mockPrisma.$transaction).toHaveBeenCalledTimes(1);
    expect(mockTx.$queryRaw).toHaveBeenCalledTimes(1);
    expect(mockTx.wallet.update).toHaveBeenCalledTimes(1);
    expect(mockTx.bet.create).toHaveBeenCalledTimes(1);
  });
});
