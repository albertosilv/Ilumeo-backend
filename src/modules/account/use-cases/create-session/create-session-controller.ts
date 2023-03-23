import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateSessionUseCase } from './create-session-use-case';

class CreateSessionController {
    async handle(request: Request, response: Response): Promise<void> {
        const data = request.body;

        const createSessionUseCase = container.resolve(CreateSessionUseCase);
        const session = await createSessionUseCase.execute(data);

        response.status(201).json(session);
    }
}

export { CreateSessionController };