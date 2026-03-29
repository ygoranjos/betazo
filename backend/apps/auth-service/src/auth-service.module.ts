import { Module } from '@nestjs/common';
import { DatabaseModule } from '@betazo/database';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [DatabaseModule, AuthModule],
})
export class AuthServiceModule {}
