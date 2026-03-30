import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { LiveOddsServiceModule } from './live-odds-service.module';

async function bootstrap() {
  const app = await NestFactory.create(LiveOddsServiceModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  await app.listen(process.env.LIVE_ODDS_PORT ?? 3002);
}
void bootstrap();
