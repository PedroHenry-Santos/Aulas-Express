import express from 'express';
import Router from './routes';

const app = express();

app.use(express.json());
app.use(Router);

app.listen(3333, () => console.log('Example app listening on port 3333!'));

