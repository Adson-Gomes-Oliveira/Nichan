import { z } from 'zod';
import commentZodSchema from './comment.interface';

const episodeZodSchema = z.object({
  number: z.number().int(),
  title: z.string(),
  duration: z.string(),
  image: z.string().optional(),
});

const animeZodSchema = z.object({
  anime_external_id: z.string(),
  title: z.string(),
  cover: z.string(),
  genres: z.string().array(),
  status: z.string(),
  description: z.string(),
  episodes: z.array(episodeZodSchema).optional(),
  releaseDate: z.string().optional(),
  rating: z.number().int().lte(5),
  comments: z.array(commentZodSchema),
});

export type IAnime = z.infer<typeof animeZodSchema>;
export default animeZodSchema;
