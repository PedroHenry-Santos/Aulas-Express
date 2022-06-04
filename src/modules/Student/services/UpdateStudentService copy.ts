import { IShowStudent } from "../domain/service-models/IShowStudent";

export default class UpdateStudentService {
  public async execute(id: number, data: IShowStudent) {
    return data;
  }
}