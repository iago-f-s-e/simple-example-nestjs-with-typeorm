import { MyUserRepository } from '@src/modules/app/repositories/user';
import { IUser } from '@src/modules/database/interfaces/user';
import { WriteServiceDTO } from '../dtos/write-service';

export class WriteService implements WriteServiceDTO {
  constructor(private readonly repository: MyUserRepository) {}

  public async create(data: IUser): Promise<IUser> {
    return this.repository.insert(data);
  }
}
