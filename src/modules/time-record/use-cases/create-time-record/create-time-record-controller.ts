import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateTimeRecordUseCase } from './create-time-record-use-case';

class CreateTimeRecordController {
  async handle(request: Request, response: Response): Promise<void> {
    const data = request.body;

    const createTimeRecordUseCase = container.resolve(CreateTimeRecordUseCase);

    const userCreated = await createTimeRecordUseCase.execute(data);

    response.status(201).json(userCreated);
  }
}

export { CreateTimeRecordController };