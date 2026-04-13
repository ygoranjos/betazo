import { Injectable } from '@nestjs/common';
import { RedisService } from '@betazo/redis-cache';

@Injectable()
export class MatchesService {
  constructor(private readonly redis: RedisService) {}

  async getActiveMatches(): Promise<unknown[]> {
    const keys = await this.redis.keys('odds:match:*');
    if (keys.length === 0) return [];

    const snapshots = await this.redis.mget(keys);

    return snapshots
      .filter((s): s is string => s !== null)
      .map((s) => JSON.parse(s) as unknown);
  }
}
