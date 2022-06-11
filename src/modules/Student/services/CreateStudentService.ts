import { IStudentRepository } from "../domain/repositoriesModels/IStudentRepository";
import { ICreateStudent } from "../domain/service-models/ICreateStudent";
import { createHash } from 'crypto';
import { AppError } from "../../../shared/errors/AppError";

export default class CreateStudentService {
  constructor(private repository: IStudentRepository) {}

  public async execute({ age , name}: ICreateStudent) {
    if (!age || !name) {
      throw new AppError('Dados estão errados')
    }

    const hash = createHash('sha256').digest('hex');
    const createStudent = this.repository.create({age , name, hash})
    const student = await this.repository.save(createStudent);
    return student;
  }
}