import { inject, injectable } from 'tsyringe';

import { IAccountRepository } from '~modules/account/repositories/i-account-repository';
import { AppError } from '~shared/errors/AppError';
import { createAccessToken } from '~utils/create-access-token';

interface ICreateSessionDTO {
    code: string;
}

@injectable()
class CreateSessionUseCase {
    constructor(
        @inject('AccountRepository')
        private accountRepository: IAccountRepository,
    ) { }

    async execute({ code }: ICreateSessionDTO) {
        const userExits = await this.accountRepository.findUserByUserCode(code);

        if (!userExits) {
            throw new AppError('Invalid code');
        }
        const accessToken = createAccessToken(userExits.id);

        return { user: userExits, access_token: accessToken };
    }
}

export { CreateSessionUseCase };