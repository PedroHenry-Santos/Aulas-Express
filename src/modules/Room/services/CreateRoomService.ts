import { IRoomRepository } from "../domain/repositoriesModels/IRoomRepository";
import { ICreateRoom } from "../domain/service-models/ICreateRoom";
import { createHash } from 'crypto';
import { AppError } from "../../../shared/errors/AppError";

export default class CreateRoomService {
  constructor(private repository: IRoomRepository) {}

  public async execute({ age , name}: ICreateRoom) {
    const hash = createHash('sha256').digest('hex');
    const createRoom = this.repository.create({age , name, hash})
    const room = await this.repository.save(createRoom);
    return room;
  }
}