import { container, inject, injectable } from 'tsyringe';

import { ICreateAccountDTO } from '~modules/account/dtos/i-create-account-dto';
import { IAccountRepository } from '~modules/account/repositories/i-account-repository.ts';


@injectable()
class CreateAccountUseCase {
    constructor(
        @inject('AccountRepository')
        private accountRepository: IAccountRepository,
    ) { }

    async execute(data: ICreateAccountDTO) {

        const userCreated = await this.accountRepository.create({
            name: data.name,
            document: data.document,
            account: {
                ...data.account,
            },
        });

        return { userCreated: userCreated };
    }
}

export { CreateAccountUseCase };