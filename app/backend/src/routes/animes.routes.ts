import { Router } from 'express';
import AnimesModel from '../models/animes.model';
import AnimesServices from '../services/animes.services';
import AnimesController from '../controllers/animes.controller';

const router = Router();

const AnimesM = new AnimesModel();
const AnimesS = new AnimesServices(AnimesM);
const AnimesC = new AnimesController(AnimesS);

router.get('/', AnimesC.findAll);
router.get('/:id', AnimesC.findOne);
router.post('/register', AnimesC.create);
router.put('/edit/:id', AnimesC.update);
router.delete('/delete/:id', AnimesC.delete);

export default router;
