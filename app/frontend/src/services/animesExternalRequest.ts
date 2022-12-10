import { animesExternalAPI, api } from ".";
import { IAnimeExternal } from "../interfaces/anime.interface";
import IAnime from "../interfaces/anime.interface";

async function findExternalAnimes(query: string): Promise<IAnimeExternal[]> {
  const request = animesExternalAPI.get(`/${query}`)
    .then((response) => response.data)
    .then((response) => response.results);

  return request as unknown as IAnimeExternal[];
}

async function findOneExternalAnime(ID: string): Promise<IAnime> {
  const request = await animesExternalAPI.get(`/info/${ID}`)
    .then((response) => response.data);
  
  const newInternalAnime: IAnime = {
    anime_external_id: request.id,
    title: request.title,
    cover: request.image,
    genres: request.genres,
    studios: request.studios,
    status: request.status,
    description: request.description,
    totalEpisodes: request.totalEpisodes,
    episodes: request.episodes,
    releaseDate: request.releaseDate,
    rating: 0,
    comments: [],
  };
  
  await api.post('/animes', newInternalAnime);
  return newInternalAnime;
}

findExternalAnimes('8ca83a7e-2ed3-5274-c812-10c56361c4df');

export { findOneExternalAnime }
export default findExternalAnimes;
