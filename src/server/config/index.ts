import * as Settings from '../settings';

export async function bootstrap() {
  console.log('******************************');
  console.log(`Server running on port: ${Settings.PORT}`);
  console.log('******************************');
}
