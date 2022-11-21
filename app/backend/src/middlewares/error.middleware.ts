import { Request, Response, NextFunction } from 'express';

function errorMiddleware(err: Error, req: Request, res: Response, next: NextFunction) {
  return res.status(Number(err.stack) || 500).json({
    error: err.name,
    message: err.message,
    code: err.stack,
  });
}

export default errorMiddleware;
