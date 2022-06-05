import "reflect-metadata"
import express from 'express';
import Router from './routes';
import AppDataSource from './typeorm';


AppDataSource.initialize().then(() => {
  const app = express();

  app.use(express.json());
  app.use(Router);
  
  app.listen(3333, () => console.log('Example app listening on port 3333!'));
}).catch(error => console.log(error));




