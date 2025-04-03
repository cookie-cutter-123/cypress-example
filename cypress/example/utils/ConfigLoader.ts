/**
 * ConfigLoader Class
 *
 * - The ConfigLoader class is responsible for loading the appropriate
 * configuration file based on the 'configFile' environment variable passed to Cypress.
 * - It provides a unified way to manage environment-specific configurations
 * for Cypress tests, allowing for easy switching between different environments.
 *
 * Supported Environments:
 *   - 'it': loads the configuration from the 'it-data.ts' file
 *   - 'pta': loads the configuration from the 'pta-data.ts' file
 *   - if the 'configFile' environment variable is not set, it defaults to 'it'.
 *
 * Properties:
 *   - config: An object containing the loaded configuration properties.
 *     The structure of the config object depends on the configuration files
 *     being loaded (e.g., it-data.ts, pta-data.ts).
 *
 * Constructor:
 *   - The constructor takes no parameters. It reads the 'configFile' environment
 *   variable from Cypress and loads the corresponding configuration file.
 *
 * @example
 *   import { ConfigLoader } from './utils/ConfigLoader';
 *   const configLoader = new ConfigLoader();
 *   const baseUrl = configLoader.config.URLS.EXAMPLE_HOME;
 *
 */

import * as it from './it-data';
import * as pta from './pta-data';

const configs: Record<string, typeof it> = {
  it: it,
  pta: pta,
};

export class ConfigLoader {
  public config: typeof it;

  constructor() {
    const configFile = Cypress.env('configFile') || 'it';
    if (!configs[configFile]) {
      throw new Error(`Unknown config file: ${configFile}`);
    }
    this.config = configs[configFile];
  }
}
