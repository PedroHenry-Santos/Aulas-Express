import { IStudentRepository } from "../domain/repositoriesModels/IStudentRepository";
import { ICreateStudent } from "../domain/service-models/ICreateStudent";
import { createHash } from 'crypto';

export default class CreateStudentService {
  constructor(private repository: IStudentRepository) {}

  public async execute(data: ICreateStudent) {
    const hash = createHash('sha256').digest('hex');
    const createStudent = this.repository.create({...data, hash})
    const student = await this.repository.save(createStudent);
    return student;
  }
}