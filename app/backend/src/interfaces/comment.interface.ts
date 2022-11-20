import { z } from 'zod';

const commentZodSchema = z.object({
  user_id: z.string(),
  anime_id: z.string(),
  episode: z.number().optional(),
  comment: z.string(),
  rate: z.number().min(1).max(5).optional(),
});

export default commentZodSchema;
