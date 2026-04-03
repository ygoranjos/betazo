import { Injectable } from '@nestjs/common';
import { PrismaService } from '@betazo/database';
import { RedisService } from '@betazo/redis-cache';
import { HouseConfigDto } from './dto/house-config.dto';

const CACHE_KEY = 'config:house';

const DEFAULTS = {
  minBetAmount: 1.0,
  maxPayoutPerTicket: 50000.0,
};

export interface HouseConfig {
  minBetAmount: number;
  maxPayoutPerTicket: number;
}

@Injectable()
export class ConfigService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly redis: RedisService,
  ) {}

  async getHouseConfig(): Promise<HouseConfig> {
    const cached = await this.redis.get(CACHE_KEY);
    if (cached !== null) {
      return JSON.parse(cached) as HouseConfig;
    }

    const record = await this.prisma.houseConfig.findFirst();

    if (record) {
      const config: HouseConfig = {
        minBetAmount: record.minBetAmount.toNumber(),
        maxPayoutPerTicket: record.maxPayoutPerTicket.toNumber(),
      };
      await this.redis.set(CACHE_KEY, JSON.stringify(config));
      return config;
    }

    await this.prisma.houseConfig.create({
      data: {
        minBetAmount: DEFAULTS.minBetAmount,
        maxPayoutPerTicket: DEFAULTS.maxPayoutPerTicket,
      },
    });

    await this.redis.set(CACHE_KEY, JSON.stringify(DEFAULTS));
    return DEFAULTS;
  }

  async updateHouseConfig(dto: HouseConfigDto): Promise<HouseConfig> {
    const existing = await this.prisma.houseConfig.findFirst();

    const record = await this.prisma.houseConfig.upsert({
      where: { id: existing?.id ?? '' },
      create: {
        minBetAmount: dto.minBetAmount,
        maxPayoutPerTicket: dto.maxPayoutPerTicket,
      },
      update: {
        minBetAmount: dto.minBetAmount,
        maxPayoutPerTicket: dto.maxPayoutPerTicket,
      },
    });

    const config: HouseConfig = {
      minBetAmount: record.minBetAmount.toNumber(),
      maxPayoutPerTicket: record.maxPayoutPerTicket.toNumber(),
    };

    await this.redis.del(CACHE_KEY);
    return config;
  }
}
