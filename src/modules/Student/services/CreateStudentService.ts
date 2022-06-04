import { ICreateStudent } from "../domain/service-models/ICreateStudent";

export default class CreateStudentService {

  public async execute(data: ICreateStudent) {
    return data;
  }
}