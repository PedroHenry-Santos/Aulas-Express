import { Router } from 'express';
import TeacherController from '../controllers/TeacherControllers';
import {celebrate, Joi, Segments} from 'celebrate'

const routes = Router();
const teacherController = new TeacherController();

routes.post('/', celebrate({
  [Segments.BODY]: {
    name: Joi.string().required(),
    age: Joi.number().required()
  }
}) , teacherController.create)
routes.get('/', teacherController.index)
routes.get('/:id', celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().uuid({
      version: 'uuidv4'
    }).required()
  }
}), teacherController.show)
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
}) , teacherController.update)
routes.delete('/:id', celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().uuid({
      version: 'uuidv4'
    }).required()
  }
}), teacherController.delete)

export default routes;