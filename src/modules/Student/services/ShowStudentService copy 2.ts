import { IStudentRepository } from "../domain/repositoriesModels/IStudentRepository";

export default class ShowStudentService {
  constructor(private repository: IStudentRepository) {}

  public async execute(id: string) {
    const student = await this.repository.findById(id);

    if (!student) {
      throw new Error("Student not found");
    }

    return student;
  }
}