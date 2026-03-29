import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from '@betazo/database';
import { Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async register(dto: RegisterDto) {
    const existing = await this.prisma.user.findFirst({
      where: { OR: [{ email: dto.email }, { username: dto.username }] },
    });

    if (existing) {
      throw new ConflictException('Email ou username já em uso');
    }

    const passwordHash = await bcrypt.hash(dto.password, 10);

    try {
      return await this.prisma.user.create({
        data: {
          email: dto.email,
          username: dto.username,
          passwordHash,
          wallet: { create: { balance: 0 } },
        },
        select: {
          id: true,
          email: true,
          username: true,
          createdAt: true,
          wallet: {
            select: { id: true, balance: true, createdAt: true },
          },
        },
      });
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === 'P2002') {
        throw new ConflictException('Erro ao cadastrar usuário');
      }
      throw err;
    }
  }
}
