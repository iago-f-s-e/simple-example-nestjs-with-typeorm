import { User } from '@src/modules/database/entities/user';
import { IUser } from '@src/modules/database/interfaces/user';
import { Repository } from 'typeorm';
import { WriteRepositoryDTO } from '../dtos/write-repository';
import { ReadRepository } from './read-repository';

export class WriteRepository extends ReadRepository implements WriteRepositoryDTO {
  constructor(repository: Repository<User>) {
    super(repository);
  }

  private create(data: IUser): User {
    return this.repository.create(data);
  }

  public insert(data: IUser): Promise<IUser> {
    return this.repository.save(this.create(data));
  }
}
