import { ITeacherRepository } from "../domain/repositoriesModels/ITeacherRepository";
import { ICreateTeacher } from "../domain/service-models/ICreateTeacher";
import { createHash } from 'crypto';
import { AppError } from "../../../shared/errors/AppError";

export default class CreateTeacherService {
  constructor(private repository: ITeacherRepository) {}

  public async execute({ age , name}: ICreateTeacher) {
    const hash = createHash('sha256').digest('hex');
    const createTeacher = this.repository.create({age , name, hash})
    const teacher = await this.repository.save(createTeacher);
    return teacher;
  }
}