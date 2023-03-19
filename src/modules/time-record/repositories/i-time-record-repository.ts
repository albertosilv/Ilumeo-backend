import {
    TimeRecord,
} from '@prisma/client';

import { ICreateTimeRecordDTO } from '~modules/time-record/dtos/i-create-time-record-dto';

interface TimeRecordProps extends TimeRecord {
}

interface ITimeRecordPropsRepository {
    create(data: ICreateTimeRecordDTO): Promise<TimeRecordProps>;
    getAllByUserId(id: String): Promise<TimeRecordProps[]>;
}

export { ITimeRecordPropsRepository, TimeRecordProps };