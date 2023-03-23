import { Router } from 'express';

import { CreateAccountController } from '~modules/account/use-cases/create-account/create-account-controller';
import { FindAccountController } from '~modules/account/use-cases/find-account/find-account-controller'
import { CreateSessionController } from '~modules/account/use-cases/create-session/create-session-controller';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const accountRoutes = Router();

const createAccountController = new CreateAccountController();
const createSessionController = new CreateSessionController();
const findAccountController = new FindAccountController()

accountRoutes.post(
  '/register',
  createAccountController.handle,
);


accountRoutes.post(
  '/session',
  createSessionController.handle,
);

accountRoutes.get(
  '/:id',
  ensureAuthenticated,
  findAccountController.handle,
);


export { accountRoutes };
