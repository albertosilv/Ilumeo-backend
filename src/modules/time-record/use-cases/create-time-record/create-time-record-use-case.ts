import {  inject, injectable } from 'tsyringe';

import { ITimeRecordPropsRepository } from '~modules/time-record/repositories/i-time-record-repository';
import { ICreateTimeRecordDTO } from '../../dtos/i-create-time-record-dto';


@injectable()
class CreateTimeRecordUseCase {
    constructor(
        @inject('TimeRecordRepository')
        private timeRecordRepository: ITimeRecordPropsRepository,
      ) { }

    async execute(data: ICreateTimeRecordDTO) {

        const timeRecordCreated = await this.timeRecordRepository.create({
            startRecord:data.startRecord,
            endRecord:data.endRecord,
            userId:data.userId
        });

        return { timeRecordCreated: timeRecordCreated };
    }
}

export { CreateTimeRecordUseCase };