import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindAccountUseCase } from './find-account-use-case';

class FindAccountController {
  async handle(request: Request, response: Response): Promise<void> {
    const code = request.params.code;

    const findAccountUseCase = container.resolve(FindAccountUseCase);

    const account = await findAccountUseCase.execute(code);

    response.status(201).json(account);
  }
}

export { FindAccountController };