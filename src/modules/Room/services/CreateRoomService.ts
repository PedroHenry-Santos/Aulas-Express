import { IRoomRepository } from "../domain/repositoriesModels/IRoomRepository";
import { ICreateRoom } from "../domain/service-models/ICreateRoom";
import { createHash } from 'crypto';
import { AppError } from "../../../shared/errors/AppError";

export default class CreateRoomService {
  constructor(private repository: IRoomRepository) {}

  public async execute({ teacherId , name}: ICreateRoom) {
    const createRoom = this.repository.create({ teacherId , name })
    const room = await this.repository.save(createRoom);
    return room;
  }
}