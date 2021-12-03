import { ConnectionOptions } from 'typeorm';
import * as Settings from '@src/server/settings';

export const connectionOptions: ConnectionOptions = {
  type: 'postgres',
  host: Settings.DATABASE_HOST,
  port: Settings.DATABASE_PORT,
  database: Settings.DATABASE_NAME,
  username: Settings.DATABASE_USER,
  password: Settings.DATABASE_PASS
};
