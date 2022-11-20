import { z } from 'zod';

const episodeZodSchema = z.object({
  number: z.number().int(),
  duration: z.string(),
  image: z.string().optional(),
  comments: z.string().array(),
});

export default episodeZodSchema;
