import {  inject, injectable } from 'tsyringe';

import { ICreateAccountDTO } from '~modules/account/dtos/i-create-account-dto';
import { IAccountRepository } from '~modules/account/repositories/i-account-repository';


@injectable()
class FindAccountUseCase {
    constructor(
        @inject('AccountRepository')
        private accountRepository: IAccountRepository,
    ) { }

    async execute(userCode: string) {
        const accountExists = await this.accountRepository.findUserByUserCode(userCode);
    
        if (!accountExists) {
          throw new Error('User not found');
        }
    
        return accountExists;
      }
}

export { FindAccountUseCase };