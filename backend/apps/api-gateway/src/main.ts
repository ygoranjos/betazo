import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.enableCors({
    origin: (process.env.CORS_ORIGINS ?? 'http://localhost:5000').split(','),
    credentials: true,
  });

  const config = new DocumentBuilder()
    .setTitle('Betazo API Gateway')
    .setDescription('API Gateway for Betazo platform')
    .setVersion('1.0')
    .addTag('api-gateway')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.API_GATEWAY_PORT ?? 3001);
}
void bootstrap();
