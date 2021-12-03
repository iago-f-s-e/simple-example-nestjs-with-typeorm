import { NestFactory } from '@nestjs/core';
import { DatabaseModule } from '@src/modules';
import * as Settings from '../settings';

export async function bootstrap() {
  const app = await NestFactory.create(DatabaseModule);

  await app.listen(Settings.PORT);

  console.log('******************************');
  console.log(`Server running on port: ${Settings.PORT}`);
  console.log('******************************');
}
