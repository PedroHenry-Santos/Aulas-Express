import { DataSource } from 'typeorm'
import { Student } from '../../modules/Student/typeorm/entities/Student';

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "docker",
  database: "school",
  synchronize: true,
  logging: false,
  entities: [Student],
  subscribers: [],
  migrations: [],
}) 

export default AppDataSource;