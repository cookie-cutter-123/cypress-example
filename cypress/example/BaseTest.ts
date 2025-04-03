import { ConfigLoader } from './utils/ConfigLoader';

export class BaseTest {
  public static configLoader: ConfigLoader = new ConfigLoader();

  public static before() {
    console.log('Before hook from the base test called. Put the actual code here...');
  }
}
