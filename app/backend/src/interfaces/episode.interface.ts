import { z } from 'zod';

const episodeZodSchema = z.object({
  number: z.number().int(),
  watched: z.boolean(),
  duration: z.string(),
});

export default episodeZodSchema;
