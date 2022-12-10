import setToken, { animesExternalAPI, api } from ".";
import { IAnimeExternal } from "../interfaces/anime.interface";
import IAnime from "../interfaces/anime.interface";

async function findExternalAnimes(query: string): Promise<IAnimeExternal[]> {
  const request = animesExternalAPI.get(`/${query}`)
    .then((response) => response.data)
    .then((response) => response.results);

  return request as unknown as IAnimeExternal[];
}

async function findOneExternalAnime(ID: string): Promise<IAnime> {
  setToken(JSON.parse(localStorage.getItem('user') as string)?.token);

  const request = await animesExternalAPI.get(`/info/${ID}`)
    .then((response) => response.data);
  
  const newInternalAnime: IAnime = {
    anime_external_id: ID,
    title: request.title,
    cover: request.image,
    genres: request.genres,
    status: request.releaseDate.split('\n').pop(),
    description: request.description,
    episodes: request.episodes,
    releaseDate: request.studios[1],
    rating: 0,
    comments: [],
  };
  
  await api.post('/animes/register', newInternalAnime);
  return newInternalAnime;
}

export { findOneExternalAnime }
export default findExternalAnimes;
