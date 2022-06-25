import { Repository } from 'typeorm'
import AppDataSource from "../../../../shared/typeorm";
import { Room } from "../entities/Room";
import { IRoomRepository } from "../../domain/repositoriesModels/IRoomRepository";
import { ICreateRoomRepository } from "../../domain/service-models/ICreateRoomRepository";

export class RoomRepository implements IRoomRepository {
  private ormRepository: Repository<Room>
  
  constructor() {
    this.ormRepository = AppDataSource.getRepository(Room);
  }

  findAll(): Promise<Room[]> {
    return this.ormRepository.find({
      relations: ['teacher', 'students']
    });
  }
  findById(id: string): Promise<Room | null> {
    return this.ormRepository.findOne({
      where: {id}
    });
  }
  create(data: ICreateRoomRepository): Room {
    return this.ormRepository.create(data)
  }
  save(data: Room): Promise<Room> {
    return this.ormRepository.save(data);
  }
  async update(id: string, data: Partial<ICreateRoomRepository>): Promise<void> {
    await  this.ormRepository.update(id, data);
  }
  remove(data: Room): Promise<Room> {
    return this.ormRepository.remove(data);
  }
}