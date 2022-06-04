import { Router } from 'express';
import StudentRoutes from '../../modules/Student/routes/students.route';

const routes = Router();

routes.use('/students', StudentRoutes);

export default routes;
