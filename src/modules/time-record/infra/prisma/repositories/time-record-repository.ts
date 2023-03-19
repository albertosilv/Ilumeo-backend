import { ICreateTimeRecordDTO } from '~modules/time-record/dtos/i-create-time-record-dto';
import {
  ITimeRecordRepository,
  TimeRecordProps,
} from '~modules/time-record/repositories/i-time-record-repository';
import { prismaClient } from '~shared/infra/http/database/prisma-cliente';

class TimeRecordRepository implements ITimeRecordRepository {
  private connection: typeof prismaClient.timeRecord;

  constructor() {
    this.connection = prismaClient.timeRecord;
  }
  async create(data: ICreateTimeRecordDTO): Promise<TimeRecordProps> {
    const newUser = await this.connection.create({
      data: {
        userId:data.userId,
        endRecorde:data.endRecord,
        startRecord:data.startRecord
        },
      select: {
        id: true,
        endRecorde:true,
        startRecord:true,
        userId:true,
        createdAt:true
      },
    });

    return newUser;
  }

  async getAllByUserId(id:string):Promise<TimeRecordProps[]>{
    const timeRecords = await this.connection.findMany({
      where: {
        user: {
          id,
        },
      },
      select: {
        id: true,
        endRecorde:true,
        startRecord:true,
        userId:true,
        createdAt:true
      },
    });

    return timeRecords;
  }

}

export { TimeRecordRepository };