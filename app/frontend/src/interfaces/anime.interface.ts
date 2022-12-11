import IComment from '../interfaces/comment.interface';

type StatusAnime = 'ongoing' | 'finished' | 'hiatus' | 'unknown';

interface IEpisodeTV {
  video_id: string;
  category_id: string;
  title: string;
}

interface IEpisode {
  number: number;
  title: string;
}

interface IAnimeTV {
  id: string;
  category_name: string;
  category_image: string;
  category_description?: string;
  category_genres?: string;
  ano?: string;
  count?: string;
  off?: string;
}

interface IAnime {
  _id: string;
  title: string;
  image: string;
  description: string;
  genres: string[];
  releaseDate: string;
  status: StatusAnime;
  episodes: IEpisode[];
  rating: number;
  comments: IComment[];
}

export type { IAnimeTV, IEpisodeTV, IEpisode }
export default IAnime;
