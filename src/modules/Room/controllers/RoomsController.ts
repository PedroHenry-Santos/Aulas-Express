import { Request, Response } from 'express';
import { RoomRepository } from '../typeorm/repositories/RoomRepository';
import CreateRoomService from '../services/CreateRoomService';
import DeleteRoomService from '../services/DeleteRoomService';
import ListRoomsService from '../services/ListRoomsService';
import ShowRoomService from '../services/ShowRoomService';
import UpdateRoomService from '../services/UpdateRoomService';

export default class RoomsController {
  public async index(request: Request, response: Response) {
    const roomRepository = new  RoomRepository()

    const listRoomsService = new ListRoomsService( roomRepository);

    const rooms = await listRoomsService.execute();

    return response.status(200).json(rooms);
  }

  public async show(request: Request, response: Response) {
    const { id } = request.params;

    const roomRepository = new RoomRepository()

    const showRoomService = new ShowRoomService(roomRepository);

    const room = await showRoomService.execute(id);

    return response.status(200).json(room);
  }

  public async create(request: Request, response: Response) {
    const { name, age } = request.body;

    const roomRepository = new RoomRepository()

    const createRoomService = new CreateRoomService(roomRepository);

    const room = await createRoomService.execute({ name, age })

    return response.status(201).json(room);
  }

  public async update(request: Request, response: Response) {
    const { id } = request.params;
    const { name, age } = request.body;

    const roomRepository = new RoomRepository()

    const updateRoomService = new UpdateRoomService(roomRepository);

    const room = await updateRoomService.execute(id, { name, age });

    return response.status(200).json(room);
  }

  public async delete(request: Request, response: Response) {
    const { id } = request.params;

    const roomRepository = new RoomRepository()


    const deleteRoomService = new DeleteRoomService(roomRepository);

    const room = await deleteRoomService.execute(id);

    return response.status(200).json(room);
  }
  
}