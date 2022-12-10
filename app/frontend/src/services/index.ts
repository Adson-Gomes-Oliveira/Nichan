import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

const animesExternalAPI = axios.create({
  baseURL: 'https://api.consumet.org/anime/animepahe',
});

async function setToken(token: string): Promise<void> {
  api.defaults.headers.common.Authorization = token;
}

export { api, animesExternalAPI };
export default setToken;
