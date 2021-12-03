import { IUser } from '@src/modules/database/interfaces/user';

export interface WriteServiceDTO {
  create: (data: IUser) => Promise<IUser>;
}
