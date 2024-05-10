import { AccessToken } from '../schemas/accessToken.generated.js';
export interface TokenStorage {
  store(token: AccessToken): Promise<undefined>;
  get(): Promise<undefined | AccessToken>;
  clear(): Promise<undefined>;
}
export class InMemoryTokenStorage implements TokenStorage {
  token?: AccessToken = void 0;
  constructor(
    fields: Omit<InMemoryTokenStorage, 'token' | 'store' | 'get' | 'clear'> &
      Partial<Pick<InMemoryTokenStorage, 'token'>>
  ) {
    if (fields.token) {
      this.token = fields.token;
    }
  }
  async store(token: AccessToken): Promise<undefined> {
    this.token = token;
    return void 0;
  }
  async get(): Promise<undefined | AccessToken> {
    return this.token;
  }
  async clear(): Promise<undefined> {
    this.token = void 0;
    return void 0;
  }
}
