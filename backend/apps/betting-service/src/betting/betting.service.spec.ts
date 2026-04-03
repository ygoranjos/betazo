import { Test, TestingModule } from '@nestjs/testing';
import { RedisService } from '@betazo/redis-cache';
import { BettingService } from './betting.service';
import { ConfigService } from '../config/config.service';
import { ValidateTicketDto } from './dto/validate-ticket.dto';

const mockRedis = { get: jest.fn() };
const mockConfig = { getHouseConfig: jest.fn() };

const DEFAULT_CONFIG = { minBetAmount: 1.0, maxPayoutPerTicket: 50000.0 };

describe('BettingService', () => {
  let service: BettingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BettingService,
        { provide: RedisService, useValue: mockRedis },
        { provide: ConfigService, useValue: mockConfig },
      ],
    }).compile();

    service = module.get<BettingService>(BettingService);
    jest.clearAllMocks();
    mockConfig.getHouseConfig.mockResolvedValue(DEFAULT_CONFIG);
  });

  function makeDto(
    stake: number,
    selections: { eventId: string; marketKey: string; selectionId: string; price: number }[],
  ): ValidateTicketDto {
    const dto = new ValidateTicketDto();
    dto.stake = stake;
    dto.selections = selections.map((s) =>
      Object.assign(Object.create(null) as object, s),
    ) as ValidateTicketDto['selections'];
    return dto;
  }

  function redisValue(price: number) {
    return JSON.stringify({ price, source: 'base+margin', updated_at: '2026-04-03T10:00:00Z' });
  }

  // --- validação de odds ---

  it('retorna valid: true quando todos os preços conferem e limites são respeitados', async () => {
    mockRedis.get.mockResolvedValue(redisValue(2.15));

    const result = await service.validateTicket(
      makeDto(10, [{ eventId: 'EVT-001', marketKey: 'h2h', selectionId: 'SEL-home', price: 2.15 }]),
    );

    expect(result).toEqual({ valid: true });
  });

  it('retorna valid: false com changedSelections quando preço diverge', async () => {
    mockRedis.get.mockResolvedValue(redisValue(2.2));

    const result = await service.validateTicket(
      makeDto(10, [{ eventId: 'EVT-001', marketKey: 'h2h', selectionId: 'SEL-home', price: 2.15 }]),
    );

    expect(result).toEqual({
      valid: false,
      changedSelections: [
        {
          eventId: 'EVT-001',
          marketKey: 'h2h',
          selectionId: 'SEL-home',
          requestedPrice: 2.15,
          currentPrice: 2.2,
        },
      ],
    });
  });

  it('lista apenas as seleções divergentes em um ticket com múltiplas seleções', async () => {
    mockRedis.get
      .mockResolvedValueOnce(redisValue(1.9))
      .mockResolvedValueOnce(redisValue(3.5))
      .mockResolvedValueOnce(redisValue(4.1));

    const result = await service.validateTicket(
      makeDto(10, [
        { eventId: 'EVT-001', marketKey: 'h2h', selectionId: 'SEL-home', price: 1.9 },
        { eventId: 'EVT-001', marketKey: 'h2h', selectionId: 'SEL-draw', price: 3.2 },
        { eventId: 'EVT-001', marketKey: 'h2h', selectionId: 'SEL-away', price: 4.1 },
      ]),
    );

    expect(result).toEqual({
      valid: false,
      changedSelections: [
        {
          eventId: 'EVT-001',
          marketKey: 'h2h',
          selectionId: 'SEL-draw',
          requestedPrice: 3.2,
          currentPrice: 3.5,
        },
      ],
    });
  });

  it('trata seleção não encontrada no Redis como divergente com currentPrice: null', async () => {
    mockRedis.get.mockResolvedValue(null);

    const result = await service.validateTicket(
      makeDto(10, [{ eventId: 'EVT-001', marketKey: 'h2h', selectionId: 'SEL-home', price: 2.15 }]),
    );

    expect(result).toEqual({
      valid: false,
      changedSelections: [
        {
          eventId: 'EVT-001',
          marketKey: 'h2h',
          selectionId: 'SEL-home',
          requestedPrice: 2.15,
          currentPrice: null,
        },
      ],
    });
  });

  it('considera igual diferença menor que a tolerância de float', async () => {
    mockRedis.get.mockResolvedValue(redisValue(2.15));

    const result = await service.validateTicket(
      makeDto(10, [
        { eventId: 'EVT-001', marketKey: 'h2h', selectionId: 'SEL-home', price: 2.1500099 },
      ]),
    );

    expect(result).toEqual({ valid: true });
  });

  it('consulta a chave Redis correta para cada seleção', async () => {
    mockRedis.get.mockResolvedValue(redisValue(1.8));

    await service.validateTicket(
      makeDto(10, [
        { eventId: 'EVT-042', marketKey: 'totals', selectionId: 'SEL-over', price: 1.8 },
      ]),
    );

    expect(mockRedis.get).toHaveBeenCalledWith('odds:final:EVT-042:totals:SEL-over');
  });

  // --- validação de limites ---

  it('rejeita stake abaixo do mínimo configurado', async () => {
    mockRedis.get.mockResolvedValue(redisValue(2.0));
    mockConfig.getHouseConfig.mockResolvedValue({ minBetAmount: 5.0, maxPayoutPerTicket: 50000.0 });

    const result = await service.validateTicket(
      makeDto(2, [{ eventId: 'EVT-001', marketKey: 'h2h', selectionId: 'SEL-home', price: 2.0 }]),
    );

    expect(result).toEqual({
      valid: false,
      limitViolations: {
        minBetAmount: { required: 5.0, provided: 2 },
      },
    });
  });

  it('rejeita payout acima do máximo configurado', async () => {
    mockRedis.get.mockResolvedValue(redisValue(15.0));
    mockConfig.getHouseConfig.mockResolvedValue({ minBetAmount: 1.0, maxPayoutPerTicket: 10000.0 });

    // stake 1000 × odds 15.0 = payout 15000 > 10000
    const result = await service.validateTicket(
      makeDto(1000, [
        { eventId: 'EVT-001', marketKey: 'h2h', selectionId: 'SEL-home', price: 15.0 },
      ]),
    );

    expect(result).toEqual({
      valid: false,
      limitViolations: {
        maxPayoutPerTicket: { limit: 10000.0, calculated: 15000.0 },
      },
    });
  });

  it('retorna odds alteradas e violação de limite simultaneamente', async () => {
    mockRedis.get.mockResolvedValue(redisValue(3.0));
    mockConfig.getHouseConfig.mockResolvedValue({ minBetAmount: 5.0, maxPayoutPerTicket: 50000.0 });

    // preço diferente (2.5 ≠ 3.0) e stake 2 < mínimo 5
    const result = await service.validateTicket(
      makeDto(2, [{ eventId: 'EVT-001', marketKey: 'h2h', selectionId: 'SEL-home', price: 2.5 }]),
    );

    expect(result).toEqual({
      valid: false,
      changedSelections: [expect.objectContaining({ selectionId: 'SEL-home' })],
      limitViolations: {
        minBetAmount: { required: 5.0, provided: 2 },
      },
    });
  });

  it('calcula odds compostas corretamente para parlay de 4 seleções com decimal.js', async () => {
    // 2.0 × 3.0 × 1.5 × 2.5 = 22.5 → stake 100 → payout 2250 < 50000 → válido
    mockRedis.get
      .mockResolvedValueOnce(redisValue(2.0))
      .mockResolvedValueOnce(redisValue(3.0))
      .mockResolvedValueOnce(redisValue(1.5))
      .mockResolvedValueOnce(redisValue(2.5));

    const result = await service.validateTicket(
      makeDto(100, [
        { eventId: 'EVT-001', marketKey: 'h2h', selectionId: 'SEL-1', price: 2.0 },
        { eventId: 'EVT-002', marketKey: 'h2h', selectionId: 'SEL-2', price: 3.0 },
        { eventId: 'EVT-003', marketKey: 'h2h', selectionId: 'SEL-3', price: 1.5 },
        { eventId: 'EVT-004', marketKey: 'h2h', selectionId: 'SEL-4', price: 2.5 },
      ]),
    );

    expect(result).toEqual({ valid: true });
  });
});
