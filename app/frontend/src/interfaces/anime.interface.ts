import IComment from '../interfaces/comment.interface';

interface IEpisode {
  epNumber: number;
  title: string;
  duration: string;
  image: string;
}

interface IAnimeExternal {
  id: string;
  title: string;
  image: string;
  rating: string;
  releaseDate: string;
  type: string;
}

interface IAnime {
  anime_external_id: string;
  title: string;
  cover: string;
  genres: string[];
  status: string;
  description: string;
  episodes: IEpisode[];
  releaseDate: string;
  rating: number;
  comments: IComment[];
}

export type { IAnimeExternal }
export default IAnime;
