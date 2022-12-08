import { ILogin } from './../interfaces/login.interface';
import { Request, Response } from 'express';
import LoginServices from '../services/login.services';
import HttpStatus from '../helpers/HttpStatus';

class LoginController {
  constructor(private _services: LoginServices) {
    this.SignIn = this.SignIn.bind(this);
  }

  public async SignIn(req: Request, res: Response): Promise<Response> {
    const payload: ILogin = req.body;
    const result = await this._services.SignIn(payload);
    return res.status(HttpStatus.OK).json(result);
  }
}

export default LoginController;
