import "reflect-metadata"
import 'express-async-errors';
import express, { NextFunction, Request, Response } from 'express';
import Router from './routes';
import AppDataSource from './typeorm';
import { AppError } from './errors/AppError';


AppDataSource.initialize().then(() => {
  const app = express();

  app.use(express.json());
  app.use(Router);
  app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({
        message: error.message,
        statusCode: error.statusCode,
      })
    }

    return res.status(500).json({
      message: 'Internal server error',
      statusCode: 500
    })
  })
  
  app.listen(3333, () => console.log('Example app listening on port 3333!'));
}).catch(error => console.log(error));




