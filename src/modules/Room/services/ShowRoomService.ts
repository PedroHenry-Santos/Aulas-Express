import { AppError } from "../../../shared/errors/AppError";
import { IRoomRepository } from "../domain/repositoriesModels/IRoomRepository";

export default class ShowRoomService {
  constructor(private repository: IRoomRepository) {}

  public async execute(id: string) {
    const room = await this.repository.findById(id);
    if (!room) {
      throw new AppError('Estudante nao existe!', 404)
    }
    return room;
  }
}