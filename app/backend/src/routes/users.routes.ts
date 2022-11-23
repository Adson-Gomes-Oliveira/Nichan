import { Router } from 'express';
import UsersModel from '../models/users.model';
import UsersServices from '../services/users.services';
import UsersController from '../controllers/users.controller';

const router = Router();

const UserM = new UsersModel();
const UserS = new UsersServices(UserM);
const UserC = new UsersController(UserS);

router.get('/', UserC.findAll);
router.get('/:id', UserC.findOne);
router.post('/', UserC.create);
router.put('/:id', UserC.update);
router.delete('/:id', UserC.delete);

export default router;
