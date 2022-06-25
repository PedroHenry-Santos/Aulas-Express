import { ICreateTeacherRepository } from "../service-models/ICreateTeacherRepository";
import { ITeacher } from "../service-models/ITeacher";

export interface ITeacherRepository {
  findAll(): Promise<ITeacher[]>;
  findById(id: string): Promise<ITeacher | null>;
  create(data: ICreateTeacherRepository): ITeacher;
  save(data: ITeacher): Promise<ITeacher>;
  update(id: string, data: Partial<ICreateTeacherRepository>): Promise<void>
  remove(data: ITeacher): Promise<ITeacher>;
}