import { z } from 'zod';
import episodeZodSchema from './episode.interface';

const animeZodSchema = z.object({
  title: z.string(),
  description: z.string(),
  thumbnail: z.string(),
  genres: z.string().array(),
  episodes: z.array(episodeZodSchema).optional(),
});

export default animeZodSchema;
