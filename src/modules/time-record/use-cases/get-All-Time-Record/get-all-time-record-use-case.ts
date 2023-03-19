import { inject, injectable } from 'tsyringe';

import { ITimeRecordPropsRepository } from '~modules/time-record/repositories/i-time-record-repository';


@injectable()
class GetAllTimeRecordUseCase {
  constructor(
    @inject('TimeRecordRepository')
    private timeRecordRepository: ITimeRecordPropsRepository,
  ) { }

  async execute(id: string) {
    const timeRecords = await this.timeRecordRepository.getAllByUserId(id);
    return timeRecords;
  }
}

export { GetAllTimeRecordUseCase };