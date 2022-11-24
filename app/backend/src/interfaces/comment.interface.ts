import { z } from 'zod';

const commentZodSchema = z.object({
  user_id: z.string(),
  anime_id: z.string(),
  episode: z.number().optional(),
  comment: z.string(),
  rating: z.number().min(1).max(5).optional(),
});

export type IComment = z.infer<typeof commentZodSchema>;
export default commentZodSchema;
