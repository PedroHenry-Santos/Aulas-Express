import { Router } from 'express';
import StudentsController from '../controllers/StudentsController';
import {celebrate, Joi, Segments} from 'celebrate'

const routes = Router();
const studentsController = new StudentsController();

routes.post('/', celebrate({
  [Segments.BODY]: {
    name: Joi.string().required(),
    age: Joi.number().required()
  }
}) , studentsController.create)
routes.get('/', studentsController.index)
routes.get('/:id', celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().uuid({
      version: 'uuidv4'
    }).required()
  }
}), studentsController.show)
routes.put('/:id', celebrate({
  [Segments.BODY]: {
    name: Joi.string().optional(),
    age: Joi.number().optional()
  },
  [Segments.PARAMS]: {
    id: Joi.string().uuid({
      version: 'uuidv4'
    }).required()
  }
}) , studentsController.update)
routes.delete('/:id', celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().uuid({
      version: 'uuidv4'
    }).required()
  }
}), studentsController.delete)

export default routes;