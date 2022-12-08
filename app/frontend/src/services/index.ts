import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

async function setToken(token: string): Promise<void> {
  api.defaults.headers.common.Authorization = token;
}

export { api }
export default setToken;
