import { AppError } from "../../../shared/errors/AppError";
import { ITeacherRepository } from "../domain/repositoriesModels/ITeacherRepository";

export default class DeleteTeacherService {
  constructor(private repository: ITeacherRepository) {}

  public async execute(id: string) {
    const teacher = await this.repository.findById(id);
    if (!teacher) {
      throw new AppError('Estudante nao existe!', 404)
    }
    await this.repository.remove(teacher);
    return teacher;
  }
}