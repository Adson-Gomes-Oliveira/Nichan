import axios from 'axios';
import IUser from "../interfaces/user.interface";

async function loginUser(email: string, password: string): Promise<IUser> {
  const request: IUser = await axios.post('127.0.0.1:3001/login', {
    email,
    password,
  }).then((response) => response.data);

  return request;
}

export default loginUser;
