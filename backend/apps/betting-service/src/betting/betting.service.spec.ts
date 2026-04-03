import { Test, TestingModule } from '@nestjs/testing';
import { RedisService } from '@betazo/redis-cache';
import { BettingService } from './betting.service';
import { ValidateTicketDto } from './dto/validate-ticket.dto';

const mockRedis = { get: jest.fn() };

describe('BettingService', () => {
  let service: BettingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BettingService, { provide: RedisService, useValue: mockRedis }],
    }).compile();

    service = module.get<BettingService>(BettingService);
    jest.clearAllMocks();
  });

  function makeDto(
    selections: { eventId: string; marketKey: string; selectionId: string; price: number }[],
  ): ValidateTicketDto {
    const dto = new ValidateTicketDto();
    dto.selections = selections.map((s) =>
      Object.assign(Object.create(null) as object, s),
    ) as ValidateTicketDto['selections'];
    return dto;
  }

  function redisValue(price: number) {
    return JSON.stringify({ price, source: 'base+margin', updated_at: '2026-04-03T10:00:00Z' });
  }

  it('retorna valid: true quando todos os preços conferem', async () => {
    mockRedis.get.mockResolvedValue(redisValue(2.15));

    const result = await service.validateTicket(
      makeDto([{ eventId: 'EVT-001', marketKey: 'h2h', selectionId: 'SEL-home', price: 2.15 }]),
    );

    expect(result).toEqual({ valid: true });
  });

  it('retorna valid: false com changedSelections quando preço diverge', async () => {
    mockRedis.get.mockResolvedValue(redisValue(2.2));

    const result = await service.validateTicket(
      makeDto([{ eventId: 'EVT-001', marketKey: 'h2h', selectionId: 'SEL-home', price: 2.15 }]),
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
      .mockResolvedValueOnce(redisValue(1.9)) // SEL-home → igual
      .mockResolvedValueOnce(redisValue(3.5)) // SEL-draw → mudou (era 3.20)
      .mockResolvedValueOnce(redisValue(4.1)); // SEL-away → igual

    const result = await service.validateTicket(
      makeDto([
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
      makeDto([{ eventId: 'EVT-001', marketKey: 'h2h', selectionId: 'SEL-home', price: 2.15 }]),
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
      makeDto([
        { eventId: 'EVT-001', marketKey: 'h2h', selectionId: 'SEL-home', price: 2.1500099 },
      ]),
    );

    expect(result).toEqual({ valid: true });
  });

  it('consulta a chave Redis correta para cada seleção', async () => {
    mockRedis.get.mockResolvedValue(redisValue(1.8));

    await service.validateTicket(
      makeDto([{ eventId: 'EVT-042', marketKey: 'totals', selectionId: 'SEL-over', price: 1.8 }]),
    );

    expect(mockRedis.get).toHaveBeenCalledWith('odds:final:EVT-042:totals:SEL-over');
  });
});
