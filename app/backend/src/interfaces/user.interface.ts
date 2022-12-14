import { z } from 'zod';

const userAnimesZodSchema = z.object({
  anime_id: z.string(),
  status: z.enum(['watching', 'finished', 'dropped']),
})

const userZodSchema = z.object({
  tag: z.string().min(3).max(16),
  fullName: z.string().min(3),
  birthDate: z.string(),
  picture: z.string().optional(),
  aboutMe: z.string().optional(),
  email: z.string(),
  password: z.string().min(8),
  gender: z.enum(['male', 'female', 'transgender', 'non-binary']),
  showFavorites: z.boolean(),
  socialMedia: z.object({
    instagram: z.string(),
    amino: z.string(),
    tiktok: z.string(),
  }).optional(),
  anime_list: z.array(userAnimesZodSchema).optional(),
  achievements: z.string().array(),
  memberSince: z.string(),
});

export type IUser = z.infer<typeof userZodSchema>;
export default userZodSchema;
