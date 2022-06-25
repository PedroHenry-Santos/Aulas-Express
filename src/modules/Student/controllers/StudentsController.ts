import { Request, Response } from 'express';
import { StudentRepository } from '../typeorm/repositories/StudentRepository';
import CreateStudentService from '../services/CreateStudentService';
import DeleteStudentService from '../services/DeleteStudentService';
import ListStudentsService from '../services/ListStudentsService';
import ShowStudentService from '../services/ShowStudentService copy 2';
import UpdateStudentService from '../services/UpdateStudentService copy';

export default class StudentsController {
  public async index(request: Request, response: Response) {
    const studentRepository = new StudentRepository()

    const listStudentsService = new ListStudentsService(studentRepository);

    const students = await listStudentsService.execute();

    return response.status(200).json(students);
  }

  public async show(request: Request, response: Response) {
    const { id } = request.params;

    const studentRepository = new StudentRepository()

    const showStudentService = new ShowStudentService(studentRepository);

    const student = await showStudentService.execute(id);

    return response.status(200).json(student);
  }

  public async create(request: Request, response: Response) {
    const { name, age, roomId } = request.body;

    const studentRepository = new StudentRepository()

    const createStudentService = new CreateStudentService(studentRepository);

    const student = await createStudentService.execute({ name, age, roomId })

    return response.status(201).json(student);
  }

  public async update(request: Request, response: Response) {
    const { id } = request.params;
    const { name, age, roomId } = request.body;

    const studentRepository = new StudentRepository()

    const updateStudentService = new UpdateStudentService(studentRepository);

    const student = await updateStudentService.execute(id, { name, age, roomId });

    return response.status(200).json(student);
  }

  public async delete(request: Request, response: Response) {
    const { id } = request.params;

    const studentRepository = new StudentRepository()


    const deleteStudentService = new DeleteStudentService(studentRepository);

    const student = await deleteStudentService.execute(id);

    return response.status(200).json(student);
  }
  
}