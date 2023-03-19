import cors from 'cors';
import express from 'express';
import 'express-async-errors';
import 'reflect-metadata';
import '~shared/container';

import { routers } from './routes';
import { appError } from './middlewares/appError';

const app = express();

app.use(express.json());

app.use(cors());

app.use(routers);

app.use(appError);

export { app };