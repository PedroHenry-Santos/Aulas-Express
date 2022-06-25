import { IRoomRepository } from "../domain/repositoriesModels/IRoomRepository";
import { ICreateRoom } from "../domain/service-models/ICreateRoom";
import { createHash } from 'crypto';
import { AppError } from "../../../shared/errors/AppError";
import { ITeacherRepository } from "../../Teacher/domain/repositoriesModels/ITeacherRepository";

export default class CreateRoomService {
  constructor(
    private repository: IRoomRepository, 
    private readonly teacherRepository: ITeacherRepository
  ) {}

  public async execute({ teacherId , name}: ICreateRoom) {
    const teacher = await this.teacherRepository.findById(teacherId);

    if (!teacher) {
      throw new AppError('Professor nao existe!', 404)
    }

    const createRoom = this.repository.create({ teacherId , name })
    const room = await this.repository.save(createRoom);
    return room;
  }
}