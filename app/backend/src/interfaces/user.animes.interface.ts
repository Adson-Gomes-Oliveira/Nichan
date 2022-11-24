import { z } from 'zod';
import episodeZodSchema from './episode.interface';

const userAnimeZodSchema = z.object({
  anime_id: z.string(),
  episodes: z.array(episodeZodSchema).optional(),
  watched_eps: z.number().int().array().optional(),
  favorite: z.boolean(),
  watching: z.boolean(),
  rating: z.number().int().lte(5),
  started_at: z.string(),
  finished_at: z.string(),
});

export type IUserAnime = z.infer<typeof userAnimeZodSchema>;
export default userAnimeZodSchema;