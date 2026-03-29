import { ConflictException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '@betazo/database';
import { Prisma } from '@prisma/client';
import { AuthService } from './auth.service';

jest.mock('bcrypt', () => ({
  hash: jest.fn().mockResolvedValue('hashed_password'),
}));

// eslint-disable-next-line @typescript-eslint/no-require-imports
const bcrypt = require('bcrypt') as { hash: jest.Mock };

const mockPrisma = {
  user: {
    findFirst: jest.fn(),
    create: jest.fn(),
  },
};

const dto = { email: 'test@example.com', username: 'testuser', password: 'password123' };

const createdUser = {
  id: 'uuid-1',
  email: dto.email,
  username: dto.username,
  createdAt: new Date(),
  wallet: { id: 'wallet-1', balance: 0, createdAt: new Date() },
};

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService, { provide: PrismaService, useValue: mockPrisma }],
    }).compile();

    service = module.get<AuthService>(AuthService);
    jest.clearAllMocks();
  });

  describe('register', () => {
    it('deve lançar ConflictException se email ou username já existir', async () => {
      mockPrisma.user.findFirst.mockResolvedValue({ id: 'existing' });

      await expect(service.register(dto)).rejects.toThrow(ConflictException);
      expect(mockPrisma.user.create).not.toHaveBeenCalled();
    });

    it('deve criar usuário e carteira e retornar sem passwordHash', async () => {
      mockPrisma.user.findFirst.mockResolvedValue(null);
      mockPrisma.user.create.mockResolvedValue(createdUser);

      const result = await service.register(dto);

      expect(result).not.toHaveProperty('passwordHash');
      expect(result.email).toBe(dto.email);
      expect(result.wallet).toBeDefined();
    });

    it('deve passar wallet: { create: { balance: 0 } } ao criar usuário', async () => {
      mockPrisma.user.findFirst.mockResolvedValue(null);
      mockPrisma.user.create.mockResolvedValue(createdUser);

      await service.register(dto);

      expect(mockPrisma.user.create).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({
            wallet: { create: { balance: 0 } },
          }),
        }),
      );
    });

    it('deve fazer hash da senha antes de salvar', async () => {
      mockPrisma.user.findFirst.mockResolvedValue(null);
      mockPrisma.user.create.mockResolvedValue(createdUser);

      await service.register(dto);

      expect(bcrypt.hash).toHaveBeenCalledWith(dto.password, 10);
    });

    it('deve lançar ConflictException em caso de violação de constraint única no banco (P2002)', async () => {
      mockPrisma.user.findFirst.mockResolvedValue(null);
      const p2002 = new Prisma.PrismaClientKnownRequestError('Unique constraint failed', {
        code: 'P2002',
        clientVersion: '0.0.0',
      });
      mockPrisma.user.create.mockRejectedValue(p2002);

      await expect(service.register(dto)).rejects.toThrow(ConflictException);
    });
  });
});
