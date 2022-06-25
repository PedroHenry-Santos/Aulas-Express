import { ICreateStudentRepository } from "../service-models/ICreateStudentRepository";
import { IStudent } from "../service-models/IStudent";

export interface IStudentRepository {
  findAll(): Promise<IStudent[]>;
  findById(id: string): Promise<IStudent | null>;
  create(data: ICreateStudentRepository): IStudent;
  save(data: IStudent): Promise<IStudent>;
  update(id: string, data: Partial<ICreateStudentRepository>): Promise<void>
  remove(data: IStudent): Promise<IStudent>;
}