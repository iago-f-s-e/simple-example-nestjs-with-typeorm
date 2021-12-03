import { Body, Controller, Post } from '@nestjs/common';
import { IUser } from '@src/modules/database/interfaces/user';
import { UserServices } from '../services/user';

@Controller('user')
export class UserController {
  constructor(private readonly services: UserServices) {}

  @Post('')
  public create(@Body() data: IUser): Promise<IUser> {
    return this.services.create(data);
  }
}
