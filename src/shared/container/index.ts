import { container } from 'tsyringe';

import { AccountRepository } from '~modules/account/infra/prisma/repositories/account-repository';
import { IAccountRepository } from '~modules/account/repositories/i-account-repository';


container.registerSingleton<IAccountRepository>(
  'AccountRepository',
  AccountRepository,
);