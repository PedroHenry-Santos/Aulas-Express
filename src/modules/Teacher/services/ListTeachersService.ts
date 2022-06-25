import { ITeacherRepository } from "../domain/repositoriesModels/ITeacherRepository";

export default class ListTeachersService {
  constructor(private repository: ITeacherRepository) {}

  public async execute() {
    const teachers = await this.repository.findAll();
    return teachers;
  }
}