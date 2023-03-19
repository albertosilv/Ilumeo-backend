

import { Router } from 'express';

import { accountRoutes } from './account.routes';
import { timeRecordRoutes } from './timeRecord.routes';
const routers = Router();

routers.use('/account', accountRoutes);
routers.use('/time', timeRecordRoutes);


export { routers };