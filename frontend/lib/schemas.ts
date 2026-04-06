/**
 * Schemas de validação Zod para formulários
 * Centraliza todas as validações frontend para facilitar manutenção
 */

import { z } from "zod";

// ==================== Auth Schemas ====================

export const loginSchema = z.object({
  email: z.string().min(1, "Email é obrigatório").email("Email inválido"),
  password: z.string().min(1, "Senha é obrigatória"),
});

export const registerSchema = z
  .object({
    email: z.string().email("Email inválido").min(1, "Email é obrigatório"),
    username: z
      .string()
      .min(3, "Username deve ter pelo menos 3 caracteres")
      .max(20, "Username deve ter no máximo 20 caracteres")
      .regex(/^[a-zA-Z0-9_]+$/, "Username pode conter apenas letras, números e _"),
    password: z.string().min(8, "Senha deve ter pelo menos 8 caracteres"),
    confirmPassword: z.string().min(1, "Confirme sua senha"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Senhas não conferem",
    path: ["confirmPassword"],
  });

export const forgotPasswordSchema = z.object({
  email: z.string().email("Email inválido").min(1, "Email é obrigatório"),
});

export const resetPasswordSchema = z
  .object({
    password: z.string().min(8, "Senha deve ter pelo menos 8 caracteres"),
    confirmPassword: z.string().min(1, "Confirme sua senha"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Senhas não conferem",
    path: ["confirmPassword"],
  });

// ==================== User Schemas ====================

export const updateProfileSchema = z.object({
  username: z
    .string()
    .min(3, "Username deve ter pelo menos 3 caracteres")
    .max(20, "Username deve ter no máximo 20 caracteres")
    .optional(),
  email: z.string().email("Email inválido").optional(),
});

export const changePasswordSchema = z
  .object({
    currentPassword: z.string().min(1, "Senha atual é obrigatória"),
    newPassword: z.string().min(8, "Nova senha deve ter pelo menos 8 caracteres"),
    confirmPassword: z.string().min(1, "Confirme sua nova senha"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Senhas não conferem",
    path: ["confirmPassword"],
  })
  .refine((data) => data.currentPassword !== data.newPassword, {
    message: "Nova senha deve ser diferente da atual",
    path: ["newPassword"],
  });

// ==================== Betting Schemas ====================

export const placeBetSchema = z.object({
  eventId: z.string().min(1, "Evento é obrigatório"),
  marketId: z.string().min(1, "Mercado é obrigatório"),
  selectionId: z.string().min(1, "Seleção é obrigatória"),
  odds: z.number().positive("Odd deve ser positiva"),
  stake: z
    .number()
    .positive("Valor da aposta deve ser positivo")
    .min(1, "Valor mínimo de aposta é 1")
    .max(10000, "Valor máximo de aposta é 10000"),
});

// ==================== Wallet Schemas ====================

export const depositSchema = z.object({
  amount: z
    .number()
    .positive("Valor deve ser positivo")
    .min(10, "Valor mínimo de depósito é 10")
    .max(10000, "Valor máximo de depósito é 10000"),
  paymentMethod: z.string().min(1, "Método de pagamento é obrigatório"),
});

export const withdrawSchema = z.object({
  amount: z
    .number()
    .positive("Valor deve ser positivo")
    .min(10, "Valor mínimo de saque é 10")
    .max(10000, "Valor máximo de saque é 10000"),
  paymentMethod: z.string().min(1, "Método de pagamento é obrigatório"),
  accountDetails: z.string().min(1, "Detalhes da conta são obrigatórios"),
});

// ==================== Type Exports ====================

export type LoginFormData = z.infer<typeof loginSchema>;
export type RegisterFormData = z.infer<typeof registerSchema>;
export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;
export type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;
export type UpdateProfileFormData = z.infer<typeof updateProfileSchema>;
export type ChangePasswordFormData = z.infer<typeof changePasswordSchema>;
export type PlaceBetFormData = z.infer<typeof placeBetSchema>;
export type DepositFormData = z.infer<typeof depositSchema>;
export type WithdrawFormData = z.infer<typeof withdrawSchema>;
