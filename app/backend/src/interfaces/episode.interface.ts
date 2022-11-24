import { z } from 'zod';
import commentZodSchema from './comment.interface';

const episodeZodSchema = z.object({
  number: z.number().int(),
  duration: z.string(),
  image: z.string().optional(),
  comments: z.array(commentZodSchema),
});

export default episodeZodSchema;
