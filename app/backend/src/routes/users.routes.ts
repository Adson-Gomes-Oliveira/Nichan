import { Router } from 'express';
import UsersModel from '../models/users.model';
import UsersServices from '../services/users.services';
import UsersController from '../controllers/users.controller';
import AuthMiddleware from '../middlewares/auth.middleware';

const router = Router();

const UserM = new UsersModel();
const UserS = new UsersServices(UserM);
const UserC = new UsersController(UserS);

router.get('/', AuthMiddleware.verifyToken, UserC.findAll);
router.get('/:id', AuthMiddleware.verifyToken, UserC.findOne);
router.post('/register', UserC.create);
router.put('/edit/:id', AuthMiddleware.verifyToken, UserC.update);
router.delete('/delete/:id', AuthMiddleware.verifyToken, UserC.delete);

export default router;
