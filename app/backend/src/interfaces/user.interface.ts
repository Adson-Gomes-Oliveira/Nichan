import { z } from 'zod';

const userZodSchema = z.object({
  nickName: z.string().min(3).max(16),
  fullName: z.string().min(3),
  birthDate: z.string(),
  email: z.string(),
  password: z.string().min(8),
  gender: z.enum(['male', 'female', 'transgender', 'non-binary']),
  user_animes_list: z.string().min(24).max(24).array().optional(),
});

export type IUser = z.infer<typeof userZodSchema>;
export default userZodSchema;
