import { z } from 'zod';

const userAnimeZodSchema = z.object({
  anime_id: z.string(),
  watched_eps: z.number().int().array(),
  favorite: z.boolean(),
  watching: z.boolean(),
  started: z.date(),
  finished: z.date(),
});

export default userAnimeZodSchema;
