import { Router } from 'express';

import { CreateAccountController } from '~modules/account/use-cases/create-account/create-account-controller';

const accountRoutes = Router();

const createAccountController = new CreateAccountController();

accountRoutes.post(
  '/register',
  createAccountController.handle,
);

export { accountRoutes };
