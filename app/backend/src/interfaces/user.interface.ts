import { z } from 'zod';
import userAnimeZodSchema from './userAnimes.interface';

const userZodSchema = z.object({
  nickName: z.string().min(3).max(16),
  fullName: z.string().min(3),
  email: z.string().regex(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i),
  password: z.string().min(8),
  gender: z.enum(['male', 'female', 'transgender', 'non-binary']),
  user_animes_list: z.array(userAnimeZodSchema).optional(),
});

export type IUser = z.infer<typeof userZodSchema>;
export default userZodSchema;
