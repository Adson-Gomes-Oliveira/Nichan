import userZodSchema, { IUser } from './../interfaces/user.interface';
import IServices from "../interfaces/services.interface";
import IModel from '../interfaces/model.interface';
import ErrorMessages from '../helpers/ErrorMessages';
import HttpStatus from '../helpers/HttpStatus';
import bcrypt from 'bcrypt';

class UsersServices implements IServices<IUser> {
  constructor(private _model: IModel<IUser>) {};

  public async create(payload: IUser): Promise<IUser> {
    const validation = userZodSchema.safeParse(payload);
    if (!validation.success) {
      const err = new Error(validation.error.message);
      err.name = ErrorMessages.PAYLOAD_INCORRECT;
      err.stack = HttpStatus.BAD_REQUEST.toString();
      throw err;
    }

    const encryptedPassword = await bcrypt.hash(payload.password, 10);
    payload.password = encryptedPassword;

    const request = await this._model.create(payload);
    return request;
  };

  public async findAll(): Promise<IUser[]> {
    const request = await this._model.read();
    return request;
  };

  public async findOne(_id: string): Promise<IUser | null> {
    const request = this._model.readOne(_id);
    if (!request) {
      const err = new Error('');
      err.name = ErrorMessages.OBJECT_NOT_EXIST;
      err.stack = HttpStatus.NOT_FOUND.toString();
      throw err;
    }

    return request;
  };

  public async update(_id: string, payload: IUser): Promise<IUser | null> {
    const validation = userZodSchema.safeParse(payload);
    if (!validation.success) {
      const err = new Error(validation.error.message);
      err.name = ErrorMessages.PAYLOAD_INCORRECT;
      err.stack = HttpStatus.BAD_REQUEST.toString();
      throw err;
    }

    const request = await this._model.update(_id, payload);

    if (!request) {
      const err = new Error('');
      err.name = ErrorMessages.OBJECT_NOT_EXIST;
      err.stack = HttpStatus.NOT_FOUND.toString();
      throw err;
    }

    return request;
  };
  public async delete(_id: string): Promise<IUser | null> {
    const request = await this._model.delete(_id);

    if (!request) {
      const err = new Error('');
      err.name = ErrorMessages.OBJECT_NOT_EXIST;
      err.stack = HttpStatus.NOT_FOUND.toString();
      throw err;
    }

    return request;
  };
}

export default UsersServices;
