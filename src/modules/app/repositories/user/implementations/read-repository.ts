import { User } from '@src/modules/database/entities/user';
import { IUser } from '@src/modules/database/interfaces/user';
import { Repository } from 'typeorm';
import { BaseRepository } from '../../base-repository';
import { ReadRepositoryDTO } from '../dtos/read-repository';

export class ReadRepository extends BaseRepository<User> implements ReadRepositoryDTO {
  constructor(repository: Repository<User>) {
    super(repository);
  }

  public findByEmail(email: string): Promise<IUser | undefined> {
    return this.repository.findOne(email);
  }
}
