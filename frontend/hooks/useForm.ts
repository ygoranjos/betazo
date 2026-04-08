/**
 * Hook customizado para facilitar o uso de React Hook Form
 * Centraliza lógica comum de formulários
 */

import { useForm, UseFormReturn, FieldValues, UseFormProps } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

interface UseFormOptions<T extends FieldValues> extends UseFormProps<T> {
  schema?: z.ZodSchema<T>;
}

/**
 * Hook wrapper around react-hook-form with zod resolver
 *
 * @example
 * ```tsx
 * const { register, handleSubmit, formState, reset } = useAppForm({
 *   schema: loginSchema,
 *   defaultValues: { email: "", password: "" }
 * });
 * ```
 */
export function useAppForm<T extends FieldValues = FieldValues>(
  options?: UseFormOptions<T>
): UseFormReturn<T> {
  const { schema, ...formOptions } = options || {};

  return useForm<T>({
    resolver: schema ? zodResolver(schema) : undefined,
    mode: "onSubmit",
    ...formOptions,
  });
}

/**
 * Hook que combina React Hook Form com mutation do TanStack Query
 *
 * @example
 * ```tsx
 * const form = useFormMutation({
 *   schema: registerSchema,
 *   mutation: useRegister()
 * });
 *
 * <form onSubmit={form.handleSubmit}>
 *   <input {...form.register("email")} />
 *   <button type="submit">Submit</button>
 * </form>
 * ```
 */
export function useFormMutation<T extends FieldValues, R = unknown>(
  options: {
    schema?: z.ZodSchema<T>;
    mutation: {
      mutateAsync: (data: T) => Promise<R>;
      isPending: boolean;
    };
    defaultValues?: Partial<T>;
    onSuccess?: (data: R, form: UseFormReturn<T>) => void;
    onError?: (error: unknown, form: UseFormReturn<T>) => void;
  }
) {
  const { schema, mutation, defaultValues, onSuccess, onError } = options;

  const form = useForm<T>({
    resolver: schema ? zodResolver(schema) : undefined,
    mode: "onSubmit",
    defaultValues: defaultValues as T,
  });

  const handleSubmit = async (data: T) => {
    try {
      const result = await mutation.mutateAsync(data);
      onSuccess?.(result, form);
    } catch (error) {
      onError?.(error, form);
    }
  };

  return {
    ...form,
    handleSubmit,
    isLoading: mutation.isPending,
  };
}
