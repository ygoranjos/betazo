import { BadGatewayException, HttpException, Injectable } from '@nestjs/common';
import { PlaceBetDto } from './dto/place-bet.dto';

const BETTING_SERVICE_TIMEOUT_MS = 10_000;

@Injectable()
export class BetsService {
  private readonly bettingServiceUrl =
    process.env.BETTING_SERVICE_URL ?? 'http://localhost:3003';

  async placeBet(dto: PlaceBetDto, token: string): Promise<unknown> {
    const controller = new AbortController();
    const timeout = setTimeout(
      () => controller.abort(),
      BETTING_SERVICE_TIMEOUT_MS,
    );

    let response: Response;
    try {
      response = await fetch(`${this.bettingServiceUrl}/bets`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(dto),
        signal: controller.signal,
      });
    } catch {
      throw new BadGatewayException('Serviço de apostas indisponível');
    } finally {
      clearTimeout(timeout);
    }

    let data: unknown;
    try {
      data = await response.json();
    } catch {
      throw new BadGatewayException('Resposta inválida do serviço de apostas');
    }

    if (!response.ok) {
      throw new HttpException(data as Record<string, unknown>, response.status);
    }

    return data;
  }
}
