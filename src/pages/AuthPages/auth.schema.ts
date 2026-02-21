import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email address'),

  password: z.string().min(1, 'Password is required').min(6, 'Minimum 6 characters'),
});

export const signUpSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email address'),

  username: z.string().min(1, 'Username is required').min(3, 'Minimum 3 characters'),

  password: z.string().min(1, 'Password is required').min(6, 'Minimum 6 characters'),
});

export type LoginFormData = z.infer<typeof loginSchema>;
export type SignUpFormData = z.infer<typeof signUpSchema>;
