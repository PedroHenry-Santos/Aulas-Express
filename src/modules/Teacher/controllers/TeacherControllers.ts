import { Request, Response } from 'express';
import { TeacherRepository } from '../typeorm/repositories/TeacherRepository';
import CreateTeacherService from '../services/CreateTeacherService';
import DeleteTeacherService from '../services/DeleteTeacherService';
import ListTeachersService from '../services/ListTeachersService';
import ShowTeacherService from '../services/ShowTeacherService';
import UpdateTeacherService from '../services/UpdateTeacherService';

export default class TeachersController {
  public async index(request: Request, response: Response) {
    const teacherRepository = new TeacherRepository()

    const listTeachersService = new ListTeachersService(teacherRepository);

    const teachers = await listTeachersService.execute();

    return response.status(200).json(teachers);
  }

  public async show(request: Request, response: Response) {
    const { id } = request.params;

    const teacherRepository = new TeacherRepository()

    const showTeacherService = new ShowTeacherService(teacherRepository);

    const teacher = await showTeacherService.execute(id);

    return response.status(200).json(teacher);
  }

  public async create(request: Request, response: Response) {
    const { name, age } = request.body;

    const teacherRepository = new TeacherRepository()

    const createTeacherService = new CreateTeacherService(teacherRepository);

    const teacher = await createTeacherService.execute({ name, age })

    return response.status(201).json(teacher);
  }

  public async update(request: Request, response: Response) {
    const { id } = request.params;
    const { name, age } = request.body;

    const teacherRepository = new TeacherRepository()

    const updateTeacherService = new UpdateTeacherService(teacherRepository);

    const teacher = await updateTeacherService.execute(id, { name, age });

    return response.status(200).json(teacher);
  }

  public async delete(request: Request, response: Response) {
    const { id } = request.params;

    const teacherRepository = new TeacherRepository()


    const deleteTeacherService = new DeleteTeacherService(teacherRepository);

    const teacher = await deleteTeacherService.execute(id);

    return response.status(200).json(teacher);
  }
  
}