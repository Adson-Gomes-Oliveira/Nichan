import { IUser } from './../interfaces/user.interface';
import bcrypt from 'bcrypt';
import loginZodSchema, { ILogin } from './../interfaces/login.interface';
import JSONWebToken from '../helpers/JSONWebToken';
import HttpStatus from '../helpers/HttpStatus';
import UsersModel from '../models/users.model';
import ErrorMessages from '../helpers/ErrorMessages';

class LoginServices {
  constructor(private _model: UsersModel) {}

  public async SignIn(loginInfos: ILogin): Promise<unknown> {
    const validation = loginZodSchema.safeParse(loginInfos);
    if (!validation.success) {
      const err = new Error(validation.error.message);
      err.name = ErrorMessages.PAYLOAD_INCORRECT;
      err.stack = HttpStatus.BAD_REQUEST.toString();
      throw err;
    }

    const { email } = loginInfos;
    
    const userToLogin = await this._model.read({ email });
    
    if (userToLogin.length === 0) {
      const err = new Error(ErrorMessages.NO_USER);
      err.name = 'NO_USER';
      err.stack = HttpStatus.BAD_REQUEST.toString();
      throw err;
    }

    const verifyPassword = await bcrypt.compare(loginInfos.password, userToLogin[0].password);
    if (!verifyPassword) {
      const err = new Error(ErrorMessages.WRONG_PASSWORD);
      err.name = 'WRONG_PASSWORD';
      err.stack = HttpStatus.BAD_REQUEST.toString();
      throw err;
    }

    const { password, ...noPasswordUser } = userToLogin[0];
    
    const token = JSONWebToken.createToken(noPasswordUser as IUser);
    return {
      data: noPasswordUser,
      token,
    };
  }
}

export default LoginServices;
