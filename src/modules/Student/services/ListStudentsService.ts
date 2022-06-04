import { IStudentRepository } from "../domain/repositoriesModels/IStudentRepository";

export default class ListStudentsService {
  constructor(private repository: IStudentRepository) {}

  public async execute() {
    const students = await this.repository.findAll();
    return students;
  }
}