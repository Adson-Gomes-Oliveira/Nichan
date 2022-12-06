import { Router } from 'express';
import AnimesModel from '../models/animes.model';
import AnimesServices from '../services/animes.services';
import AnimesController from '../controllers/animes.controller';

const router = Router();

const UserM = new AnimesModel();
const UserS = new AnimesServices(UserM);
const UserC = new AnimesController(UserS);

router.get('/', UserC.findAll);
router.get('/:id', UserC.findOne);
router.post('/register', UserC.create);
router.put('/edit/:id', UserC.update);
router.delete('/delete/:id', UserC.delete);

export default router;
