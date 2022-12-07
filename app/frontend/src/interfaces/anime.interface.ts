import IComment from '../interfaces/comment.interface';

interface IEpisode {
  epNumber: number,
  title: string,
  duration: string,
  image: string,
}

interface IAnime {
  anime_id: string,
  cover: string,
  genres: string[],
  studios: string[],
  status: string,
  description: string,
  totalEpisodes: number,
  episodes: IEpisode[],
  rating: number,
  comments: IComment[],
}

export default IAnime;
