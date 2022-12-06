import { z } from 'zod';

const userMediaZodSchema = z.object({
  instagram: z.string(),
  amino: z.string(),
  tiktok: z.string(),
});

const userAnimesZodSchema = z.object({
  external_id: z.string(),
  internal_id: z.string(),
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
  socialMedia: z.array(userMediaZodSchema).optional(),
  anime_list: z.array(userAnimesZodSchema).optional(),
  achievements: z.string().array(),
  memberSince: z.date(),
});

export type IUser = z.infer<typeof userZodSchema>;
export default userZodSchema;
