import { animesExternalAPI } from ".";
import { IAnimeExternal } from "../interfaces/anime.interface";

async function findExternalAnimes(query: string): Promise<IAnimeExternal[]> {
  const request = animesExternalAPI.get(`/${query}`)
    .then((response) => response.data)
    .then((response) => response.results);

  return request as unknown as IAnimeExternal[];
}

export default findExternalAnimes;
