import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from './database';
import { AppModules } from './app';

@Module({
  imports: [TypeOrmModule.forRoot(), DatabaseModule, AppModules]
})
export class Modules {}
