import { DataSource } from 'typeorm'
import { Room } from '../../modules/Room/typeorm/entities/Room';
import { Student } from '../../modules/Student/typeorm/entities/Student';
import { Teacher } from '../../modules/Teacher/typeorm/entities/Teacher';

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "docker",
  database: "school",
  synchronize: true,
  logging: false,
  entities: [Student, Room, Teacher],
  subscribers: [],
  migrations: [],
}) 

export default AppDataSource;