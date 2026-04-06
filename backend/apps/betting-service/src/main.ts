import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { BettingServiceModule } from './betting-service.module';

async function bootstrap() {
  const app = await NestFactory.create(BettingServiceModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  await app.listen(process.env.BETTING_SERVICE_PORT ?? 3003);
}
void bootstrap();
