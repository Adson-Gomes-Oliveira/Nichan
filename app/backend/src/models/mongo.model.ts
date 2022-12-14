import { Model, isObjectIdOrHexString, UpdateQuery, QueryOptions } from 'mongoose';
import IModel from '../interfaces/model.interface';
import HttpStatus from '../helpers/HttpStatus';
import ErrorMessages from '../helpers/ErrorMessages';

abstract class MongoModel<T> implements IModel<T> {
  constructor(protected _model: Model<T>) {}

  public async create(payload: T): Promise<T> {
    return this._model.create({ ...payload });
  }

  public async read(query: QueryOptions): Promise<T[]> {
    return this._model.find(query).lean();
  }

  public async readOne(_id: string): Promise<T | null> {
    if (!isObjectIdOrHexString(_id)) {
      const err = new Error(ErrorMessages.INVALID_ID_ERROR);
      err.name = 'INVALID_ID';
      err.stack = HttpStatus.BAD_REQUEST.toString();
      throw err;
    }

    return this._model.findOne({ _id });
  }

  public async update(_id: string, payload: T): Promise<T | null> {
    if (!isObjectIdOrHexString(_id)) {
      const err = new Error(ErrorMessages.INVALID_ID_ERROR);
      err.name = 'INVALID_ID';
      err.stack = HttpStatus.BAD_REQUEST.toString();
      throw err;
    }

    return this._model.findByIdAndUpdate(
      { _id },
      { ...payload } as UpdateQuery<T>,
      { new: true }
    )
  }

  public async delete(_id: string): Promise<T | null> {
    if (!isObjectIdOrHexString(_id)) {
      const err = new Error(ErrorMessages.INVALID_ID_ERROR);
      err.name = 'INVALID_ID';
      err.stack = HttpStatus.BAD_REQUEST.toString();
      throw err;
    }

    return this._model.findByIdAndDelete({ _id });
  }
}

export default MongoModel;
