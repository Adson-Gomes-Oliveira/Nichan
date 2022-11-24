import userAnimesZodSchema, { IUserAnime } from './../interfaces/user.animes.interface';
import IServices from "../interfaces/services.interface";
import IModel from '../interfaces/model.interface';
import ErrorMessages from '../helpers/ErrorMessages';
import HttpStatus from '../helpers/HttpStatus';

class UserAnimesServices implements IServices<IUserAnime> {
  constructor(private _model: IModel<IUserAnime>) {};

  public async create(payload: IUserAnime): Promise<IUserAnime> {
    const validation = userAnimesZodSchema.safeParse(payload);
    if (!validation.success) {
      const err = new Error(validation.error.message);
      err.name = ErrorMessages.PAYLOAD_INCORRECT;
      err.stack = HttpStatus.BAD_REQUEST.toString();
      throw err;
    }

    const request = await this._model.create(payload);
    return request;
  };

  public async findAll(): Promise<IUserAnime[]> {
    const request = await this._model.read();
    return request;
  };

  public async findOne(_id: string): Promise<IUserAnime | null> {
    const request = await this._model.readOne(_id);

    if (!request) {
      const err = new Error('');
      err.name = ErrorMessages.OBJECT_NOT_EXIST;
      err.stack = HttpStatus.NOT_FOUND.toString();
      throw err;
    }

    return request;
  };

  public async update(_id: string, payload: IUserAnime): Promise<IUserAnime | null> {
    const validation = userAnimesZodSchema.safeParse(payload);
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

  public async delete(_id: string): Promise<IUserAnime | null> {
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

export default UserAnimesServices;
