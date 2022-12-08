import IUser from '../interfaces/user.interface';
import { api } from ".";

async function loginUser(email: string, password: string): Promise<IUser> {
  const { data } = await api.post('http://localhost:3001/login', {
    email,
    password,
  });

  return data as IUser;
}

export default loginUser;
