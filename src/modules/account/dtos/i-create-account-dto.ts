export interface ICreateAccountDTO {
    name:string,
    document:string,
    account?: {
      email: string;
      code: string;
    };
  }