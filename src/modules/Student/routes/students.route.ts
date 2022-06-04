import { Router } from 'express';
import StudentsController from '../controllers/StudentsController';

const routes = Router();
const studentsController = new StudentsController();

routes.post('/', studentsController.create)
routes.get('/', studentsController.index)
routes.get('/:id', studentsController.show)
routes.put('/:id', studentsController.update)
routes.delete('/:id', studentsController.delete)

export default routes;