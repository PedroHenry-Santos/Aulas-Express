import { IStudentRepository } from "../domain/repositoriesModels/IStudentRepository";
import { ICreateStudent } from "../domain/service-models/ICreateStudent";
import { createHash } from 'crypto';
import { AppError } from "../../../shared/errors/AppError";
import { IRoomRepository } from "../../Room/domain/repositoriesModels/IRoomRepository";

export default class CreateStudentService {
  constructor(
    private repository: IStudentRepository,
    private readonly roomRepository: IRoomRepository
  ) {}

  public async execute({ age , name, roomId}: ICreateStudent) {
    const room = await this.roomRepository.findById(roomId);

    if (!room) {
      throw new AppError('Sala de aula nao existe!', 404)
    }

    const hash = createHash('sha256').digest('hex');
    const createStudent = this.repository.create({age , name, hash, roomId})
    const student = await this.repository.save(createStudent);
    return student;
  }
}