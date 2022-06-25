import { AppError } from "../../../shared/errors/AppError";
import { ITeacherRepository } from "../../Teacher/domain/repositoriesModels/ITeacherRepository";
import { IRoomRepository } from "../domain/repositoriesModels/IRoomRepository";
import { IShowRoom } from "../domain/service-models/IShowRoom";

export default class UpdateRoomService {
  constructor(
    private repository: IRoomRepository, 
    private readonly teacherRepository: ITeacherRepository
  ) {}

  public async execute(id: string, data: IShowRoom) {
    if (data.teacherId) { 
    const teacher = await this.teacherRepository.findById(data.teacherId);

    if (!teacher) {
      throw new AppError('Professor nao existe!', 404)
    }
  }

    const room = await this.repository.findById(id);

    if (!room) {
      throw new AppError('Estudante nao existe!', 404)
    }
    await this.repository.update(id, data);
    return await this.repository.findById(id);
  }
}