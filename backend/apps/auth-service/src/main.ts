import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import cookieParser from 'cookie-parser';
import { AuthServiceModule } from './auth-service.module';

async function bootstrap() {
  const app = await NestFactory.create(AuthServiceModule);
  app.use(cookieParser());
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.enableCors({
    origin: (process.env.CORS_ORIGINS ?? 'http://localhost:5000').split(','),
    credentials: true,
  });

  const config = new DocumentBuilder()
    .setTitle('Betazo Auth Service')
    .setDescription('Authentication service for Betazo platform')
    .setVersion('1.0')
    .addTag('auth')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.AUTH_SERVICE_PORT ?? 3000);
}
void bootstrap();
