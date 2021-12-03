import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '@src/modules/database/entities/user';
import { Repository } from 'typeorm';
import { UserRepositoryDTO } from './dtos/user-repository';
import { WriteRepository } from './implementations/write-repository';

@Injectable()
export class MyUserRepository extends WriteRepository implements UserRepositoryDTO {
  constructor(@InjectRepository(User) repository: Repository<User>) {
    super(repository);
  }
}
