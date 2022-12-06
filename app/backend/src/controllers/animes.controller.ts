import { IAnime } from '../interfaces/anime.interface';
import { Request, Response } from 'express';
import AnimesServices from '../services/animes.services';
import HttpStatus from '../helpers/HttpStatus';

class UserAnimesController {
  constructor(private _services: AnimesServices) {
    this.create = this.create.bind(this);
    this.findAll = this.findAll.bind(this);
    this.findOne = this.findOne.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  };

  public async create(req: Request, res: Response): Promise<Response> {
    const payload = req.body as IAnime
    const result = await this._services.create(payload);
    return res.status(HttpStatus.CREATED).json(result);
  }

  public async findAll(req: Request, res: Response): Promise<Response> {
    const result = await this._services.findAll();
    return res.status(HttpStatus.OK).json(result);
  }

  public async findOne(req: Request, res: Response): Promise<Response> {
    const result = await this._services.findOne(req.params.id);
    return res.status(HttpStatus.OK).json(result);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const payload = req.body as IAnime
    const result = await this._services.update(req.params.id, payload);
    return res.status(HttpStatus.CREATED).json(result);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const result = await this._services.delete(req.params.id);
    return res.status(HttpStatus.DELETED).json(result);
  }
}

export default UserAnimesController;
