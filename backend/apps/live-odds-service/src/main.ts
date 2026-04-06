import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { LiveOddsServiceModule } from './live-odds-service.module';

async function bootstrap() {
  const app = await NestFactory.create(LiveOddsServiceModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.enableCors({
    origin: 'http://localhost:5000',
    credentials: true,
  });

  const config = new DocumentBuilder()
    .setTitle('Betazo Live Odds Service')
    .setDescription('Live odds service for Betazo platform')
    .setVersion('1.0')
    .addTag('live-odds')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.LIVE_ODDS_PORT ?? 3002);
}
void bootstrap();
