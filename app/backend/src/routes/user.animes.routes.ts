import { Router } from 'express';
import UserAnimesModel from '../models/users.animes.model';
import UserAnimesServices from '../services/user.animes.services';
import UserAnimesController from '../controllers/user.animes.controller';

const router = Router();

const UserM = new UserAnimesModel();
const UserS = new UserAnimesServices(UserM);
const UserC = new UserAnimesController(UserS);

router.get('/', UserC.findAll);
router.get('/:id', UserC.findOne);
router.post('/register', UserC.create);
router.put('/edit/:id', UserC.update);
router.delete('/delete/:id', UserC.delete);

export default router;
