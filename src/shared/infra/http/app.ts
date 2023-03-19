import cors from 'cors';
import express from 'express';
import 'reflect-metadata';

import { routers } from './routes';

const app = express();

app.use(express.json());

app.use(cors());

app.use(routers);


export { app };