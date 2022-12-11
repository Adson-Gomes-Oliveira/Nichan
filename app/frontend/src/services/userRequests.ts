import IUser from '../interfaces/user.interface';
import apiLocalServer from ".";

async function loginUser(email: string, password: string): Promise<IUser> {
  const { data } = await apiLocalServer.post('http://192.168.0.105:3001/login', {
    email,
    password,
  });

  return data as IUser;
}

export default loginUser;
