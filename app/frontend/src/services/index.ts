import axios from 'axios';

const apiLocalServer = axios.create({
  baseURL: 'http://localhost:3001',
});

const animesAPI_Consumet = axios.create({
  baseURL: 'https://api.consumet.org/anime/animepahe',
});

const animesAPI_AnimeTV = axios.create({
  baseURL: 'https://appanimeplus.tk/',
});


async function setToken(token: string): Promise<void> {
  apiLocalServer.defaults.headers.common.Authorization = token;
}

export { 
  setToken,
  animesAPI_Consumet,
  animesAPI_AnimeTV,
};
export default apiLocalServer;
