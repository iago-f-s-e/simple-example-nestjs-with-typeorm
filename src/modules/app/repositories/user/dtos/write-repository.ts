import { IUser } from '@src/modules/database/interfaces/user';

export interface WriteRepositoryDTO {
  insert: (data: IUser) => Promise<IUser>;
}
