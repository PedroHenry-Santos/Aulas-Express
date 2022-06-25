import { IRoomRepository } from "../domain/repositoriesModels/IRoomRepository";

export default class ListRoomsService {
  constructor(private repository: IRoomRepository) {}

  public async execute() {
    const rooms = await this.repository.findAll();
    return rooms;
  }
}