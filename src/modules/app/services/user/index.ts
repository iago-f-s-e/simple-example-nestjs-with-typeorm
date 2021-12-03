import { Injectable } from '@nestjs/common';
import { MyUserRepository } from '../../repositories/user';
import { UserServiceDTO } from './dtos/user-service';
import { WriteService } from './implementations/write-service';

@Injectable()
export class UserServices extends WriteService implements UserServiceDTO {
  constructor(repository: MyUserRepository) {
    super(repository);
  }
}
