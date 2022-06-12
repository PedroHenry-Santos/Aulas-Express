import { AppError } from "../../../shared/errors/AppError";
import { IStudentRepository } from "../domain/repositoriesModels/IStudentRepository";

export default class DeleteStudentService {
  constructor(private repository: IStudentRepository) {}

  public async execute(id: string) {
    const student = await this.repository.findById(id);
    if (!student) {
      throw new AppError('Estudante nao existe!')
    }
    await this.repository.remove(student);
    return student;
  }
}