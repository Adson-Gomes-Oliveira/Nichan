import apiLocalServer, {
  setToken,
  animesAPI_Consumet,
  animesAPI_AnimeTV,
} from ".";
import { IAnimeExternal } from "../interfaces/anime.interface";
import IAnime from "../interfaces/anime.interface";

async function registerAnime(consumetAPI: any, animesTVAPI: any) {
  const imageURL = `https://cdn.appanimeplus.tk/img/${animesTVAPI.category_image}`;

  const newAnime: IAnime = {
    anime_id: animesTVAPI.id,
    title: animesTVAPI.category_name,
    image: imageURL,
    genres: animesTVAPI.category_genres,
    description: animesTVAPI.category_description,
    status: consumetAPI.releaseDate.split('\n').pop(),
    episodes: consumetAPI.episodes,
    releaseDate: consumetAPI.studios[1],
    rating: consumetAPI.rating,
    comments: [],
  };

  console.log(newAnime);
  

  await apiLocalServer.post('/animes/register', newAnime);
  return newAnime;
}

async function findExternalAnimes(query: string): Promise<IAnimeExternal[]> {
  const request = animesAPI_Consumet.get(`/${query}`)
    .then((response) => response.data)
    .then((response) => response.results);

  return request as unknown as IAnimeExternal[];
}

async function findOneExternalAnime(ID: string): Promise<IAnime> {
  setToken(JSON.parse(localStorage.getItem('user') as string)?.token);

  const requestConsumet = await animesAPI_Consumet.get(`/info/${ID}`)
    .then((response) => response.data);

  console.log(requestConsumet);
  

  // Removing special letters and white spaces for AnimeTV Unofficial API
  const noSpecialLetters = requestConsumet.title.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g,' ');
  const noWhiteSpaces = noSpecialLetters.replace(/ /g, '_').toLowerCase();
  console.log(noWhiteSpaces);
  

  const requestAnimeTV = await animesAPI_AnimeTV.get(`/play-api.php?search=${noWhiteSpaces}`)
    .then((response) => response.data[0].id)
    .then(async (response) => {
      const getAnimeDetails = await animesAPI_AnimeTV.get(`/play-api.php?info=${response}`)
        .then((response) => response.data);
      return getAnimeDetails;
    });

  const resultAnime = await registerAnime(requestConsumet, requestAnimeTV[0]);
  return resultAnime;
}

export { findOneExternalAnime }
export default findExternalAnimes;
