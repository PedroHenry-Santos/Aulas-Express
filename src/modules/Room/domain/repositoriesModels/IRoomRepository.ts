import { ICreateRoomRepository } from "../service-models/ICreateRoomRepository";
import { IRoom } from "../service-models/IRoom";

export interface IRoomRepository {
  findAll(): Promise<IRoom[]>;
  findById(id: string): Promise<IRoom | null>;
  create(data: ICreateRoomRepository): IRoom;
  save(data: IRoom): Promise<IRoom>;
  update(id: string, data: Partial<ICreateRoomRepository>): Promise<void>
  remove(data: IRoom): Promise<IRoom>;
}