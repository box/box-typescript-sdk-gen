export interface DeveloperTokenConfig {
  readonly token: string;
}

export class DeveloperTokenAuth {
  token: string;

  constructor(config: DeveloperTokenConfig) {
    this.token = config.token;
  }

  async retrieveToken() {
    return this.token;
  }

  async refreshToken() {
    throw Error('Developer token has expired. Please provide a new one.');
  }
}
