import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { GetAllTimeRecordUseCase } from './get-all-time-record-use-case';

class GetAllTimeRecordController {
  async handle(request: Request, response: Response): Promise<void> {
    const id = request.params.id;

    const getAllTimeRecordUseCase = container.resolve(GetAllTimeRecordUseCase);

    const timeRecords = await getAllTimeRecordUseCase.execute(id);

    response.status(201).json(timeRecords);
  }
}

export { GetAllTimeRecordController };