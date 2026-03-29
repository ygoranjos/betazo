import { ConflictException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '@betazo/database';
import { Prisma } from '@prisma/client';
import { AuthService } from './auth.service';

jest.mock('bcrypt', () => ({
  hash: jest.fn().mockResolvedValue('hashed_password'),
  compare: jest.fn(),
}));

// eslint-disable-next-line @typescript-eslint/no-require-imports
const bcrypt = require('bcrypt') as { hash: jest.Mock; compare: jest.Mock };

const mockPrisma = {
  user: {
    findFirst: jest.fn(),
    findUnique: jest.fn(),
    create: jest.fn(),
  },
};

const mockJwt = {
  sign: jest.fn().mockReturnValue('jwt_token'),
};

const registerDto = { email: 'Test@Example.com', username: 'testuser', password: 'password123' };
const loginDto = { email: 'Test@Example.com', password: 'password123' };

const createdUser = {
  id: 'uuid-1',
  email: registerDto.email,
  username: registerDto.username,
  createdAt: new Date(),
  wallet: { id: 'wallet-1', balance: 0, createdAt: new Date() },
};

const dbUser = {
  id: 'uuid-1',
  email: loginDto.email,
  username: 'testuser',
  passwordHash: 'hashed_password',
};

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: PrismaService, useValue: mockPrisma },
        { provide: JwtService, useValue: mockJwt },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    jest.clearAllMocks();
    mockJwt.sign.mockReturnValue('jwt_token');
  });

  describe('register', () => {
    it('deve lançar ConflictException se email ou username já existir', async () => {
      mockPrisma.user.findFirst.mockResolvedValue({ id: 'existing' });

      await expect(service.register(registerDto)).rejects.toThrow(ConflictException);
      expect(mockPrisma.user.create).not.toHaveBeenCalled();
    });

    it('deve criar usuário e carteira e retornar sem passwordHash', async () => {
      mockPrisma.user.findFirst.mockResolvedValue(null);
      mockPrisma.user.create.mockResolvedValue(createdUser);

      const result = await service.register(registerDto);

      expect(result).not.toHaveProperty('passwordHash');
      expect(result.email).toBe(registerDto.email);
      expect(result.wallet).toBeDefined();
    });

    it('deve passar wallet: { create: { balance: 0 } } ao criar usuário', async () => {
      mockPrisma.user.findFirst.mockResolvedValue(null);
      mockPrisma.user.create.mockResolvedValue(createdUser);

      await service.register(registerDto);

      expect(mockPrisma.user.create).toHaveBeenCalledWith(
        expect.objectContaining({
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          data: expect.objectContaining({
            wallet: { create: { balance: 0 } },
          }),
        }),
      );
    });

    it('deve fazer hash da senha antes de salvar', async () => {
      mockPrisma.user.findFirst.mockResolvedValue(null);
      mockPrisma.user.create.mockResolvedValue(createdUser);

      await service.register(registerDto);

      expect(bcrypt.hash).toHaveBeenCalledWith(registerDto.password, 10);
    });

    it('deve normalizar o email para lowercase antes de salvar', async () => {
      mockPrisma.user.findFirst.mockResolvedValue(null);
      mockPrisma.user.create.mockResolvedValue(createdUser);

      await service.register(registerDto);

      expect(mockPrisma.user.create).toHaveBeenCalledWith(
        expect.objectContaining({
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          data: expect.objectContaining({ email: 'test@example.com' }),
        }),
      );
    });

    it('deve lançar ConflictException em caso de violação de constraint única no banco (P2002)', async () => {
      mockPrisma.user.findFirst.mockResolvedValue(null);
      const p2002 = new Prisma.PrismaClientKnownRequestError('Unique constraint failed', {
        code: 'P2002',
        clientVersion: '0.0.0',
      });
      mockPrisma.user.create.mockRejectedValue(p2002);

      await expect(service.register(registerDto)).rejects.toThrow(ConflictException);
    });
  });

  describe('login', () => {
    it('deve lançar UnauthorizedException se o usuário não existir', async () => {
      mockPrisma.user.findUnique.mockResolvedValue(null);

      await expect(service.login(loginDto)).rejects.toThrow(UnauthorizedException);
    });

    it('deve normalizar o email para lowercase na busca', async () => {
      mockPrisma.user.findUnique.mockResolvedValue(null);

      await service.login(loginDto).catch(() => null);

      expect(mockPrisma.user.findUnique).toHaveBeenCalledWith(
        expect.objectContaining({ where: { email: 'test@example.com' } }),
      );
    });

    it('deve lançar UnauthorizedException se a senha for inválida', async () => {
      mockPrisma.user.findUnique.mockResolvedValue(dbUser);
      bcrypt.compare.mockResolvedValue(false);

      await expect(service.login(loginDto)).rejects.toThrow(UnauthorizedException);
    });

    it('deve retornar accessToken com credenciais válidas', async () => {
      mockPrisma.user.findUnique.mockResolvedValue(dbUser);
      bcrypt.compare.mockResolvedValue(true);

      const result = await service.login(loginDto);

      expect(result).toEqual({ accessToken: 'jwt_token' });
    });

    it('deve assinar o JWT com id, email e username do usuário', async () => {
      mockPrisma.user.findUnique.mockResolvedValue(dbUser);
      bcrypt.compare.mockResolvedValue(true);

      await service.login(loginDto);

      expect(mockJwt.sign).toHaveBeenCalledWith({
        sub: dbUser.id,
        email: dbUser.email,
        username: dbUser.username,
      });
    });
  });
});
