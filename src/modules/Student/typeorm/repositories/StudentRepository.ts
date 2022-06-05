import { IStudentRepository } from "../../domain/repositoriesModels/IStudentRepository";
import { ICreateStudentRepository } from "../../domain/service-models/ICreateStudentRepository";
import { Student } from "../entities/Student";

import { Repository } from 'typeorm'
import AppDataSource from "../../../../shared/typeorm";
import { IStudent } from "../../domain/service-models/IStudent";

export class StudentRepository implements IStudentRepository {
  private ormRepository: Repository<Student>
  
  constructor() {
    this.ormRepository = AppDataSource.getRepository(Student);
  }

  findAll(): Promise<Student[]> {
    return this.ormRepository.find();
  }
  findById(id: string): Promise<Student | null> {
    return this.ormRepository.findOne({
      where: {id}
    });
  }
  create(data: ICreateStudentRepository): Student {
    return this.ormRepository.create(data)
  }
  save(data: Student): Promise<Student> {
    return this.ormRepository.save(data);
  }
  async update(id: string, data: Partial<ICreateStudentRepository>): Promise<void> {
    await  this.ormRepository.update(id, data);
  }
  remove(data: IStudent): Promise<IStudent> {
    return this.ormRepository.remove(data);
  }
}