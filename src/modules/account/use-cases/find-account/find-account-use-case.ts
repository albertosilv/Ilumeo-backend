import {  inject, injectable } from 'tsyringe';
import { AppError } from '~shared/errors/AppError';

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
            throw new AppError('User not found');
          }
    
        return accountExists;
      }
}

export { FindAccountUseCase };