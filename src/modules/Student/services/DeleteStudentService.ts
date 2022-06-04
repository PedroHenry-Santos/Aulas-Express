import { IStudentRepository } from "../domain/repositoriesModels/IStudentRepository";

export default class DeleteStudentService {
  constructor(private repository: IStudentRepository) {}

  public async execute(id: string) {
    const student = await this.repository.remove(id);
    return student;
  }
}