import { ConnectionOptions } from 'typeorm';
import * as Settings from './src/server/settings';

const connectionOptions: ConnectionOptions = {
  type: 'postgres',
  host: Settings.DATABASE_HOST,
  port: Settings.DATABASE_PORT,
  database: Settings.DATABASE_NAME,
  username: Settings.DATABASE_USER,
  password: Settings.DATABASE_PASS,
  entities: [Settings.ENTITIES],
  migrations: [Settings.MIGRATIONS],
  cli: {
    migrationsDir: Settings.MIGRATIONS_DIR
  }
};

export default connectionOptions;
