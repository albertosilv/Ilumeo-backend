import { ICreateAccountDTO } from '~modules/account/dtos/i-create-account-dto';
import {
  IAccountRepository,
  UserProps,
} from '~modules/account/repositories/i-account-repository';
import { prismaClient } from '~shared/infra/http/database/prisma-cliente';

class AccountRepository implements IAccountRepository {
  private connection: typeof prismaClient.user;

  constructor() {
    this.connection = prismaClient.user;
  }


  async create(data: ICreateAccountDTO): Promise<UserProps> {
    const newUser = await this.connection.create({
      data: {
        name:data.name,
        document: data.document,
        ...(data.account && {
          account: {
            create: {
              email: data.account.email,
              code:data.account.code
            },
          },
        }),
      },
      select: {
        id: true,
        name:true,
        document:true,
        createdAt: true,
        updatedAt: true,
        account: true,
      },
    });

    return newUser;
  }

  async findUserByUserCode(code:string):Promise<UserProps>{
    const user = await this.connection.findFirst({
      where: {
        account: {
          code,
        },
      },
      select: {
        id: true,
        name:true,
        document:true,
        createdAt: true,
        updatedAt: true,
        account: true,
      },
    });

    return user;
  }

}

export { AccountRepository };