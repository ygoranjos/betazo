import { BadRequestException, NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '@betazo/database';
import { KafkaProducerService, KAFKA_TOPICS } from '@betazo/kafka-client';
import { WalletTransactionService } from './wallet-transaction.service';
import { PlaceBetDto } from './dto/place-bet.dto';

const USER_ID = 'a1b2c3d4-e5f6-7890-abcd-ef1234567890';
const WALLET_ID = 'b2c3d4e5-f6a7-8901-bcde-f12345678901';
const BET_ID = 'c3d4e5f6-a7b8-9012-cdef-123456789012';

const mockTx = {
  $queryRaw: jest.fn(),
  wallet: { update: jest.fn() },
  bet: { create: jest.fn() },
};

const mockPrisma = {
  $transaction: jest.fn(),
};

const mockKafkaProducer = {
  publish: jest.fn(),
};

function makeDto(
  stake: number,
  selections: { eventId: string; marketKey: string; selectionId: string; price: number }[],
): PlaceBetDto {
  const dto = new PlaceBetDto();
  dto.stake = stake;
  dto.selections = selections.map((s) =>
    Object.assign(Object.create(null) as object, s),
  ) as PlaceBetDto['selections'];
  return dto;
}

function walletRow(balance: string) {
  return [{ id: WALLET_ID, balance, user_id: USER_ID }];
}

function makeBet(overrides: object = {}) {
  return {
    id: BET_ID,
    userId: USER_ID,
    stake: 50,
    combinedOdds: 2.15,
    potentialPayout: 107.5,
    status: 'PENDING',
    selections: [],
    createdAt: new Date(),
    updatedAt: new Date(),
    ...overrides,
  };
}

describe('WalletTransactionService', () => {
  let service: WalletTransactionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        WalletTransactionService,
        { provide: PrismaService, useValue: mockPrisma },
        { provide: KafkaProducerService, useValue: mockKafkaProducer },
      ],
    }).compile();

    service = module.get<WalletTransactionService>(WalletTransactionService);
    jest.clearAllMocks();

    mockPrisma.$transaction.mockImplementation(
      async (callback: (tx: typeof mockTx) => Promise<unknown>) => callback(mockTx),
    );
    mockKafkaProducer.publish.mockResolvedValue(undefined);
  });

  // --- caminho feliz ---

  it('debita saldo, cria aposta e publica no Kafka quando saldo é suficiente', async () => {
    const bet = makeBet();
    mockTx.$queryRaw.mockResolvedValue(walletRow('500.00'));
    mockTx.wallet.update.mockResolvedValue({});
    mockTx.bet.create.mockResolvedValue(bet);

    const result = await service.placeBet(
      makeDto(50, [{ eventId: 'EVT-001', marketKey: 'h2h', selectionId: 'SEL-home', price: 2.15 }]),
      USER_ID,
    );

    expect(result).toBe(bet);
    expect(mockTx.wallet.update).toHaveBeenCalledWith({
      where: { id: WALLET_ID },
      data: { balance: { decrement: 50 } },
    });
    expect(mockTx.bet.create).toHaveBeenCalledWith({
      data: expect.objectContaining({ userId: USER_ID, stake: 50, status: 'PENDING' }),
    });
    expect(mockKafkaProducer.publish).toHaveBeenCalledTimes(1);
  });

  it('publica no tópico BET_PLACED com o payload correto', async () => {
    mockTx.$queryRaw.mockResolvedValue(walletRow('500.00'));
    mockTx.wallet.update.mockResolvedValue({});
    mockTx.bet.create.mockResolvedValue(makeBet({ id: BET_ID }));

    await service.placeBet(
      makeDto(50, [{ eventId: 'EVT-001', marketKey: 'h2h', selectionId: 'SEL-home', price: 2.15 }]),
      USER_ID,
    );

    expect(mockKafkaProducer.publish).toHaveBeenCalledWith(
      KAFKA_TOPICS.BET_PLACED,
      expect.objectContaining({
        betId: BET_ID,
        userId: USER_ID,
        stake: 50,
        totalOdd: 2.15,
        selections: [{ eventId: 'EVT-001', marketKey: 'h2h', selectionId: 'SEL-home', price: 2.15 }],
      }),
    );
  });

  it('calcula totalOdd corretamente para múltiplas seleções', async () => {
    // 2.0 × 1.5 × 3.0 = 9.0
    mockTx.$queryRaw.mockResolvedValue(walletRow('1000.00'));
    mockTx.wallet.update.mockResolvedValue({});
    mockTx.bet.create.mockResolvedValue(makeBet());

    await service.placeBet(
      makeDto(100, [
        { eventId: 'EVT-001', marketKey: 'h2h', selectionId: 'SEL-1', price: 2.0 },
        { eventId: 'EVT-002', marketKey: 'h2h', selectionId: 'SEL-2', price: 1.5 },
        { eventId: 'EVT-003', marketKey: 'h2h', selectionId: 'SEL-3', price: 3.0 },
      ]),
      USER_ID,
    );

    expect(mockKafkaProducer.publish).toHaveBeenCalledWith(
      KAFKA_TOPICS.BET_PLACED,
      expect.objectContaining({ totalOdd: 9.0 }),
    );
  });

  // --- ordem: DB commit antes do Kafka ---

  it('publica no Kafka APÓS o commit do banco', async () => {
    const callOrder: string[] = [];

    mockTx.$queryRaw.mockResolvedValue(walletRow('500.00'));
    mockTx.wallet.update.mockImplementation(() => { callOrder.push('wallet.update'); return Promise.resolve({}); });
    mockTx.bet.create.mockImplementation(() => { callOrder.push('bet.create'); return Promise.resolve(makeBet()); });
    mockKafkaProducer.publish.mockImplementation(() => { callOrder.push('kafka.publish'); return Promise.resolve(); });

    await service.placeBet(
      makeDto(50, [{ eventId: 'EVT-001', marketKey: 'h2h', selectionId: 'SEL-home', price: 2.0 }]),
      USER_ID,
    );

    expect(callOrder).toEqual(['wallet.update', 'bet.create', 'kafka.publish']);
  });

  // --- saldo insuficiente ---

  it('lança BadRequestException quando saldo é insuficiente', async () => {
    mockTx.$queryRaw.mockResolvedValue(walletRow('30.00'));

    await expect(
      service.placeBet(
        makeDto(50, [{ eventId: 'EVT-001', marketKey: 'h2h', selectionId: 'SEL-home', price: 2.0 }]),
        USER_ID,
      ),
    ).rejects.toThrow(BadRequestException);
  });

  it('NÃO publica no Kafka quando saldo é insuficiente', async () => {
    mockTx.$queryRaw.mockResolvedValue(walletRow('10.00'));

    await expect(
      service.placeBet(
        makeDto(50, [{ eventId: 'EVT-001', marketKey: 'h2h', selectionId: 'SEL-home', price: 2.0 }]),
        USER_ID,
      ),
    ).rejects.toThrow(BadRequestException);

    expect(mockKafkaProducer.publish).not.toHaveBeenCalled();
  });

  it('aceita stake exatamente igual ao saldo disponível', async () => {
    mockTx.$queryRaw.mockResolvedValue(walletRow('50.00'));
    mockTx.wallet.update.mockResolvedValue({});
    mockTx.bet.create.mockResolvedValue(makeBet());

    await expect(
      service.placeBet(
        makeDto(50, [{ eventId: 'EVT-001', marketKey: 'h2h', selectionId: 'SEL-home', price: 1.5 }]),
        USER_ID,
      ),
    ).resolves.not.toThrow();
  });

  // --- carteira não encontrada ---

  it('lança NotFoundException quando carteira não existe', async () => {
    mockTx.$queryRaw.mockResolvedValue([]);

    await expect(
      service.placeBet(
        makeDto(10, [{ eventId: 'EVT-001', marketKey: 'h2h', selectionId: 'SEL-home', price: 2.0 }]),
        USER_ID,
      ),
    ).rejects.toThrow(NotFoundException);
  });

  it('NÃO publica no Kafka quando carteira não existe', async () => {
    mockTx.$queryRaw.mockResolvedValue([]);

    await expect(
      service.placeBet(
        makeDto(10, [{ eventId: 'EVT-001', marketKey: 'h2h', selectionId: 'SEL-home', price: 2.0 }]),
        USER_ID,
      ),
    ).rejects.toThrow(NotFoundException);

    expect(mockKafkaProducer.publish).not.toHaveBeenCalled();
  });

  // --- atomicidade ---

  it('propaga erro do bet.create e NÃO publica no Kafka', async () => {
    mockTx.$queryRaw.mockResolvedValue(walletRow('500.00'));
    mockTx.wallet.update.mockResolvedValue({});
    mockTx.bet.create.mockRejectedValue(new Error('DB connection lost'));

    await expect(
      service.placeBet(
        makeDto(100, [{ eventId: 'EVT-001', marketKey: 'h2h', selectionId: 'SEL-home', price: 2.0 }]),
        USER_ID,
      ),
    ).rejects.toThrow('DB connection lost');

    expect(mockKafkaProducer.publish).not.toHaveBeenCalled();
  });

  it('propaga erro do Kafka e mantém a aposta criada no banco', async () => {
    mockTx.$queryRaw.mockResolvedValue(walletRow('500.00'));
    mockTx.wallet.update.mockResolvedValue({});
    mockTx.bet.create.mockResolvedValue(makeBet());
    mockKafkaProducer.publish.mockRejectedValue(new Error('Kafka broker unavailable'));

    await expect(
      service.placeBet(
        makeDto(50, [{ eventId: 'EVT-001', marketKey: 'h2h', selectionId: 'SEL-home', price: 2.0 }]),
        USER_ID,
      ),
    ).rejects.toThrow('Kafka broker unavailable');

    expect(mockTx.bet.create).toHaveBeenCalledTimes(1);
  });

  // --- verificação estrutural ---

  it('usa $transaction e KafkaProducerService em todas as operações', async () => {
    mockTx.$queryRaw.mockResolvedValue(walletRow('200.00'));
    mockTx.wallet.update.mockResolvedValue({});
    mockTx.bet.create.mockResolvedValue(makeBet());

    await service.placeBet(
      makeDto(50, [{ eventId: 'EVT-001', marketKey: 'h2h', selectionId: 'SEL-home', price: 2.0 }]),
      USER_ID,
    );

    expect(mockPrisma.$transaction).toHaveBeenCalledTimes(1);
    expect(mockTx.$queryRaw).toHaveBeenCalledTimes(1);
    expect(mockTx.wallet.update).toHaveBeenCalledTimes(1);
    expect(mockTx.bet.create).toHaveBeenCalledTimes(1);
    expect(mockKafkaProducer.publish).toHaveBeenCalledTimes(1);
  });
});
