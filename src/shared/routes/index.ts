import { NextFunction, Request, Response, Router } from 'express';
import StudentRoutes from '../../modules/Student/routes/students.route';
import RoomRoutes from '../../modules/Room/routes/rooms.route';
import TeacherRoutes  from '../../modules/Teacher/routes/teachers.route';

const routes = Router();

routes.use('/students', StudentRoutes);
routes.use('/rooms', RoomRoutes);
routes.use('/teachers', TeacherRoutes);

export default routes;
