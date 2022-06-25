import { Router } from 'express';
import RoomsController from '../controllers/RoomsController';
import {celebrate, Joi, Segments} from 'celebrate'

const routes = Router();
const roomsController = new RoomsController();

routes.post('/', celebrate({
  [Segments.BODY]: {
    name: Joi.string().required(),
    teacherId: Joi.string().uuid({
      version: 'uuidv4'
    }).required()
  }
}) , roomsController.create)
routes.get('/', roomsController.index)
routes.get('/:id', celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().uuid({
      version: 'uuidv4'
    }).required()
  }
}), roomsController.show)
routes.put('/:id', celebrate({
  [Segments.BODY]: {
    name: Joi.string().optional(),
    teacherId: Joi.string().uuid({
      version: 'uuidv4'
    }).required()
  },
  [Segments.PARAMS]: {
    id: Joi.string().uuid({
      version: 'uuidv4'
    }).required()
  }
}) , roomsController.update)
routes.delete('/:id', celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().uuid({
      version: 'uuidv4'
    }).required()
  }
}), roomsController.delete)

export default routes;