import apiLocalServer, {
  setToken,
  animesAPI_AnimeTV,
} from ".";
import { IAnimeTV, IEpisode } from "../interfaces/anime.interface";
import IAnime from "../interfaces/anime.interface";

async function registerAnime(anime: IAnimeTV) {
  let episodeNumber = 0;
  const imageURL = `https://cdn.appanimeplus.tk/img/${anime.category_image}`;
  
  const animeEpisodes = await animesAPI_AnimeTV.get<IEpisode[]>(`/play-api.php?cat_id=${anime.id}`)
    .then((response) => response.data.map((ep) => {
      episodeNumber += 1;
      return {
        number: episodeNumber,
        title: ep.title,
      }
    }));

  const newAnime: IAnime = {
    _id: anime.id,
    title: anime.category_name,
    image: imageURL,
    genres: [anime.category_genres] as string[],
    description: anime.category_description as string,
    status: 'unknown',
    episodes: animeEpisodes,
    releaseDate: anime.ano as string,
    rating: 0,
    comments: [],
  };

  await apiLocalServer.post('/animes/register', newAnime);
  return newAnime;
}

async function findExternalAnimes(query: string): Promise<IAnimeTV[]> {
  const noSpecialLetters = query.replace(/[&/\\#,+()$~%.'":*?<>{}]/g,' ');
  const noWhiteSpaces = noSpecialLetters.replace(/ /g, '_').toLowerCase();

  const request = await animesAPI_AnimeTV.get<IAnimeTV[]>(`/play-api.php?search=${noWhiteSpaces}`)
    .then((response) => response.data);

  return request;
}

async function findOneExternalAnime(ID: string): Promise<IAnime> {
  setToken(JSON.parse(localStorage.getItem('user') as string)?.token);

  const requestAnimesTV = await animesAPI_AnimeTV.get<IAnimeTV[]>(`/play-api.php?info=${ID}`)
    .then((response) => response.data[0]);

  const resultAnime = await registerAnime(requestAnimesTV);
  return resultAnime;
}

export { findOneExternalAnime }
export default findExternalAnimes;
