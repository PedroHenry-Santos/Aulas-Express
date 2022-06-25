import { AppError } from "../../../shared/errors/AppError";
import { IRoomRepository } from "../../Room/domain/repositoriesModels/IRoomRepository";
import { IStudentRepository } from "../domain/repositoriesModels/IStudentRepository";
import { IShowStudent } from "../domain/service-models/IShowStudent";

export default class UpdateStudentService {
  constructor(
    private repository: IStudentRepository,
    private readonly roomRepository: IRoomRepository
  ) {}

  public async execute(id: string, data: IShowStudent) {
    if (data.roomId) {
      const room = await this.roomRepository.findById(data.roomId);

      if (!room) {
        throw new AppError('Sala de aula nao existe!', 404)
      }
    }

    const student = await this.repository.findById(id);
    if (!student) {
      throw new AppError('Estudante nao existe!', 404)
    }
    await this.repository.update(id, data);
    return await this.repository.findById(id);
  }
}