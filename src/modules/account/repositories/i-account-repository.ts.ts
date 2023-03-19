import {
    Account,
} from '@prisma/client';

import { ICreateAccountDTO } from '../dtos/i-create-account-dto';

interface User {
    id: string;
    name: string;
    document:string;
    createdAt: Date;
    updatedAt: Date;
}

interface UserProps extends User {
    account: Account;
}

interface IAccountRepository {
    create(data: ICreateAccountDTO): Promise<UserProps>;
}

export { IAccountRepository, UserProps };