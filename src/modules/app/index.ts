import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../database/entities/user';
import { UserController } from './controllers/user.controller';
import { MyUserRepository } from './repositories/user';
import { UserServices } from './services/user';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserServices, MyUserRepository],
  controllers: [UserController]
})
export class AppModules {}
