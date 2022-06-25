import { ITeacherRepository } from "../../domain/repositoriesModels/ITeacherRepository";
import { ICreateTeacherRepository } from "../../domain/service-models/ICreateTeacherRepository";
import { Teacher } from "../entities/Teacher";

import { Repository } from 'typeorm'
import AppDataSource from "../../../../shared/typeorm";
import { ITeacher } from "../../domain/service-models/ITeacher";

export class TeacherRepository implements ITeacherRepository {
  private ormRepository: Repository<Teacher>
  
  constructor() {
    this.ormRepository = AppDataSource.getRepository(Teacher);
  }

  findAll(): Promise<Teacher[]> {
    return this.ormRepository.find({
      relations: ['rooms']
    });
  }
  findById(id: string): Promise<Teacher | null> {
    return this.ormRepository.findOne({
      where: {id}
    });
  }
  create(data: ICreateTeacherRepository): Teacher {
    return this.ormRepository.create(data)
  }
  save(data: Teacher): Promise<Teacher> {
    return this.ormRepository.save(data);
  }
  async update(id: string, data: Partial<ICreateTeacherRepository>): Promise<void> {
    await  this.ormRepository.update(id, data);
  }
  remove(data: Teacher): Promise<ITeacher> {
    return this.ormRepository.remove(data);
  }
}