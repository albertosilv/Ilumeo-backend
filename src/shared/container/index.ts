import { container } from 'tsyringe';

import { AccountRepository } from '~modules/account/infra/prisma/repositories/account-repository';
import { IAccountRepository } from '~modules/account/repositories/i-account-repository';

import { TimeRecordRepository } from '../../modules/time-record/infra/prisma/repositories/time-record-repository';
import { ITimeRecordRepository } from '../../modules/time-record/repositories/i-time-record-repository';
container.registerSingleton<IAccountRepository>(
  'AccountRepository',
  AccountRepository,
);

container.registerSingleton<ITimeRecordRepository>(
  'TimeRecordRepository',
  TimeRecordRepository,
);