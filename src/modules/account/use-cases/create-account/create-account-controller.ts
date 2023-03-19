import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateAccountUseCase } from './create-account-use-case';

class CreateAccountController {
  async handle(request: Request, response: Response): Promise<void> {
    const data = request.body;

    const createAccountUseCase = container.resolve(CreateAccountUseCase);

    const userCreated = await createAccountUseCase.execute(data);

    response.status(201).json(userCreated);
  }
}

export { CreateAccountController };