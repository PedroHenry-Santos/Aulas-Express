import { AppError } from "../../../shared/errors/AppError";
import { ITeacherRepository } from "../domain/repositoriesModels/ITeacherRepository";

export default class ShowTeacherService {
  constructor(private repository: ITeacherRepository) {}

  public async execute(id: string) {
    const teacher = await this.repository.findById(id);
    if (!teacher) {
      throw new AppError('Estudante nao existe!', 404)
    }
    return teacher;
  }
}