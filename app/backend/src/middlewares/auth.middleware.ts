import { Request, Response, NextFunction } from 'express';
import ErrorMessages from '../helpers/ErrorMessages';
import HttpStatus from '../helpers/HttpStatus';
import JSONWebToken from '../helpers/JSONWebToken';

abstract class AuthMiddleware {
  public static verifyToken(req: Request, res: Response, next: NextFunction): void {
    const tokenAUTH = req.headers.authorization;
    if (!tokenAUTH) {
      const err = new Error(ErrorMessages.UNAUTHORIZED);
      err.name = 'UNAUTHORIZED'
      err.stack = HttpStatus.UNAUTHORIZED.toString();
    }

    const user = JSONWebToken.checkToken(tokenAUTH as string);
    res.locals.user = user;
    next();
  }
}

export default AuthMiddleware;