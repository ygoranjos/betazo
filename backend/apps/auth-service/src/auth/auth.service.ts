import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '@betazo/database';
import { Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

interface JwtPayload {
  sub: string;
  email: string;
  username: string;
}

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
  ) {}

  private generateTokens(payload: JwtPayload) {
    const accessToken = this.jwt.sign(payload);
    const refreshToken = this.jwt.sign(payload, {
      secret: process.env.JWT_REFRESH_SECRET,
      expiresIn: process.env.JWT_REFRESH_EXPIRES_IN ?? '7d',
    });
    return { accessToken, refreshToken };
  }

  async register(dto: RegisterDto) {
    const email = dto.email.toLowerCase();

    const [existingEmail, existingUsername] = await Promise.all([
      this.prisma.user.findUnique({ where: { email }, select: { id: true } }),
      this.prisma.user.findUnique({ where: { username: dto.username }, select: { id: true } }),
    ]);

    if (existingEmail || existingUsername) {
      throw new ConflictException('Email ou username já cadastrado');
    }

    const passwordHash = await bcrypt.hash(dto.password, 10);

    try {
      const user = await this.prisma.user.create({
        data: {
          email,
          username: dto.username,
          passwordHash,
          wallet: { create: { balance: 0 } },
        },
        select: {
          id: true,
          email: true,
          username: true,
          createdAt: true,
        },
      });

      const tokens = this.generateTokens({ sub: user.id, email: user.email, username: user.username });
      return { ...tokens, user };
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === 'P2002') {
        throw new ConflictException('Email ou username já cadastrado');
      }
      throw err;
    }
  }

  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email.toLowerCase() },
      select: { id: true, email: true, username: true, passwordHash: true },
    });

    // Always run bcrypt to prevent timing attacks
    const hash = user?.passwordHash ?? '$2b$10$invalidhashplaceholderfortiming00';
    const passwordMatch = await bcrypt.compare(dto.password, hash);

    if (!user || !passwordMatch) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    const { passwordHash: _, ...userWithoutPassword } = user;
    const tokens = this.generateTokens({ sub: user.id, email: user.email, username: user.username });

    return { ...tokens, user: userWithoutPassword };
  }

  async refresh(refreshToken: string) {
    if (!refreshToken) {
      throw new UnauthorizedException('Refresh token não encontrado');
    }

    try {
      const payload = this.jwt.verify<JwtPayload>(refreshToken, {
        secret: process.env.JWT_REFRESH_SECRET,
      });

      const user = await this.prisma.user.findUnique({
        where: { id: payload.sub },
        select: { id: true, email: true, username: true },
      });

      if (!user) {
        throw new UnauthorizedException('Usuário não encontrado');
      }

      const accessToken = this.jwt.sign({
        sub: user.id,
        email: user.email,
        username: user.username,
      });

      return { accessToken, user };
    } catch {
      throw new UnauthorizedException('Refresh token inválido ou expirado');
    }
  }
}
