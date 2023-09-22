import { AccessToken } from './schemas.generated.js';

export interface TokenStorage {
  store: (token: AccessToken) => void;
  get: () => Promise<AccessToken | undefined>;
  clear: () => void;
}

export class InMemoryTokenStorage implements TokenStorage {
  token?: AccessToken;

  constructor(fields: {}) {}

  async store(token: AccessToken) {
    this.token = token;
  }

  async get(): Promise<AccessToken | undefined> {
    return this.token;
  }

  async clear() {
    this.token = undefined;
  }
}
