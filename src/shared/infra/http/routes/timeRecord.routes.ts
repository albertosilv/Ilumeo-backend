import { Router } from 'express';

import { CreateTimeRecordController } from '../../../../modules/time-record/use-cases/create-time-record/create-time-record-controller';
import { GetAllTimeRecordController } from '../../../../modules/time-record/use-cases/get-All-Time-Record/get-all-time-record-controller';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const timeRecordRoutes = Router();

const createTimeRecordController = new CreateTimeRecordController();
const getAllTimeRecordController = new GetAllTimeRecordController()

timeRecordRoutes.post(
  '/register',
  ensureAuthenticated,
  createTimeRecordController.handle,
);

timeRecordRoutes.get(
  '/:id',
  ensureAuthenticated,
  getAllTimeRecordController.handle,
);


export { timeRecordRoutes };
