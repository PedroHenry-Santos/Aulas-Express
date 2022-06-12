import { AppError } from "../../../shared/errors/AppError";
import { IStudentRepository } from "../domain/repositoriesModels/IStudentRepository";

export default class ShowStudentService {
  constructor(private repository: IStudentRepository) {}

  public async execute(id: string) {
    const student = await this.repository.findById(id);
    if (!student) {
      throw new AppError('Estudante nao existe!', 404)
    }
    return student;
  }
}