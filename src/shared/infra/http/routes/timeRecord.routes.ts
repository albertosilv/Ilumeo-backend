import { Router } from 'express';

import { CreateTimeRecordController } from '../../../../modules/time-record/use-cases/create-time-record/create-time-record-controller';
import { GetAllTimeRecordController } from '../../../../modules/time-record/use-cases/get-All-Time-Record/get-all-time-record-controller';

const timeRecordRoutes = Router();

const createTimeRecordController = new CreateTimeRecordController();
const getAllTimeRecordController = new GetAllTimeRecordController()

timeRecordRoutes.post(
  '/register',
  createTimeRecordController.handle,
);

timeRecordRoutes.get(
  '/:id',
  getAllTimeRecordController.handle,
);


export { timeRecordRoutes };
