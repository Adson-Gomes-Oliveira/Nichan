import { z } from 'zod';
import commentZodSchema from './comment.interface';

const episodeZodSchema = z.object({
  number: z.number().int(),
  title: z.string(),
});

const animeZodSchema = z.object({
  anime_id: z.string(),
  title: z.string(),
  image: z.string(),
  description: z.string(),
  genres: z.string().array(),
  releaseDate: z.string().optional(),
  status: z.enum(['ongoing', 'finished', 'hiatus']),
  episodes: z.array(episodeZodSchema).optional(),
  rating: z.number().int().lte(5),
  comments: z.array(commentZodSchema),
});

export type IAnime = z.infer<typeof animeZodSchema>;
export default animeZodSchema;
