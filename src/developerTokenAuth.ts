export class DeveloperTokenAuth {
  token: string;

  constructor(token: string) {
    this.token = token;
  }

  async retrieveToken() {
    return this.token;
  }

  async refreshToken() {
    throw Error('Developer token has expired. Please provide a new one.');
  }
}
