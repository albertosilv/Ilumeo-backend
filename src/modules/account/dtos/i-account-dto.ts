import {Account,User} from '@prisma/client';
export interface IAccountDTO extends User {
  account?: Account;
}