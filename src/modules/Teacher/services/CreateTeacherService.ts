import { ITeacherRepository } from "../domain/repositoriesModels/ITeacherRepository";
import { ICreateTeacher } from "../domain/service-models/ICreateTeacher";
import { AppError } from "../../../shared/errors/AppError";

export default class CreateTeacherService {
  constructor(private repository: ITeacherRepository) {}

  public async execute({ age , name, formation}: ICreateTeacher) {
    const createTeacher = this.repository.create({age , name, formation})
    const teacher = await this.repository.save(createTeacher);
    return teacher;
  }
}