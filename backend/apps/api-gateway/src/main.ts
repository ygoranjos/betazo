import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.enableCors({
    origin: 'http://localhost:5000',
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
