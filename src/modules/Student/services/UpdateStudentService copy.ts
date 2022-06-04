import { IStudentRepository } from "../domain/repositoriesModels/IStudentRepository";
import { IShowStudent } from "../domain/service-models/IShowStudent";

export default class UpdateStudentService {
  constructor(private repository: IStudentRepository) {}

  public async execute(id: string, data: IShowStudent) {
    const student = await this.repository.update(id, data);
    return student;
  }
}