import { Router } from 'express';

import { CreateAccountController } from '~modules/account/use-cases/create-account/create-account-controller';
import {FindAccountController} from '~modules/account/use-cases/find-account/find-account-controller'
const accountRoutes = Router();

const createAccountController = new CreateAccountController();
const findAccountController = new FindAccountController()

accountRoutes.post(
  '/register',
  createAccountController.handle,
);

accountRoutes.get(
  '/:code',
  findAccountController.handle,
);


export { accountRoutes };
