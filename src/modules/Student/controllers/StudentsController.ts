import { Request, Response } from 'express';
import CreateStudentService from '../services/CreateStudentService';
import DeleteStudentService from '../services/DeleteStudentService';
import ListStudentsService from '../services/ListStudentsService';
import ShowStudentService from '../services/ShowStudentService copy 2';
import UpdateStudentService from '../services/UpdateStudentService copy';

export default class StudentsController {
  public async index(request: Request, response: Response) {
    const listStudentsService = new ListStudentsService();

    const students = await listStudentsService.execute();

    return response.json(students);
  }

  public async show(request: Request, response: Response) {
    const { id } = request.params;

    const showStudentService = new ShowStudentService();

    const student = await showStudentService.execute(+id);

    return response.json(student);
  }

  public async create(request: Request, response: Response) {
    const { name, age } = request.body;

    const createStudentService = new CreateStudentService();

    const student = await createStudentService.execute({ name, age })

    return response.json(student);
  }

  public async update(request: Request, response: Response) {
    const { id } = request.params;
    const { name, age } = request.body;

    const updateStudentService = new UpdateStudentService();

    const student = await updateStudentService.execute(+id, { name, age });

    return response.json(student);
  }

  public async delete(request: Request, response: Response) {
    const { id } = request.params;

    const deleteStudentService = new DeleteStudentService();

    const student = await deleteStudentService.execute(+id);

    return response.json(student);
  }
  
}