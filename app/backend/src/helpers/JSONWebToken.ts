import JWT, { Secret } from 'jsonwebtoken';
import { IUser } from '../interfaces/user.interface';

abstract class JSONWebToken {
  static createToken(user: IUser): string {
    console.log(process.env.JWT_SECRET);
    
    const token = JWT.sign({ data: user }, process.env.JWT_SECRET as Secret, {
      expiresIn: '1h',
      algorithm: 'HS256',
    });

    return token;
  }

  static checkToken(token: string): IUser {
    const { data } = JWT.verify(token, process.env.JWT_SECRET as Secret) as any;
    return data;
  }
}

export default JSONWebToken;
