import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../database/entities/user';
import { MyUserRepository } from './repositories/user';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [MyUserRepository]
})
export class AppModules {}
