import { ICreateStudent } from "../service-models/ICreateStudent";
import { ICreateStudentRepository } from "../service-models/ICreateStudentRepository";
import { IStudent } from "../service-models/IStudent";

export interface IStudentRepository {
  findAll(): Promise<IStudent[]>;
  findById(id: string): Promise<IStudent | undefined>;
  create(data: ICreateStudentRepository): IStudent;
  save(data: IStudent): Promise<IStudent>;
  update(id: string, data: Partial<ICreateStudentRepository>): Promise<IStudent>
  remove(id: string): Promise<IStudent>;
}