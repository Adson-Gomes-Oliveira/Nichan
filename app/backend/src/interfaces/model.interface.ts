import { QueryOptions } from "mongoose";

interface IModel<T> {
  create(payload: T): Promise<T>;
  read(query: QueryOptions): Promise<T[]>;
  readOne(_id: string): Promise<T | null>;
  update(_id: string, payload: T): Promise<T | null>;
  delete(_id: string): Promise<T | null>;
}

export default IModel;
