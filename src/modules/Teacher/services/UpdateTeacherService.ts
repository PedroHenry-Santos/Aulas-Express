import { AppError } from "../../../shared/errors/AppError";
import { ITeacherRepository } from "../domain/repositoriesModels/ITeacherRepository";
import { IShowTeacher } from "../domain/service-models/IShowTeacher";

export default class UpdateTeacherService {
  constructor(private repository: ITeacherRepository) {}

  public async execute(id: string, data: IShowTeacher) {
    const teacher = await this.repository.findById(id);
    if (!teacher) {
      throw new AppError('Estudante nao existe!', 404)
    }
    await this.repository.update(id, data);
    return await this.repository.findById(id);
  }
}