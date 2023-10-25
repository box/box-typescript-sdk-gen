import { AccessToken } from './schemas.generated.js';
export interface TokenStorage {
  store(token: AccessToken): Promise<undefined>;
  get(): Promise<undefined | AccessToken>;
  clear(): Promise<undefined>;
}
export class InMemoryTokenStorage implements TokenStorage {
  accessToken?: AccessToken = void 0;
  constructor(
    fields:
      | Omit<InMemoryTokenStorage, 'accessToken' | 'store' | 'get' | 'clear'>
      | Partial<Pick<InMemoryTokenStorage, 'accessToken'>>
  ) {
    Object.assign(this, fields);
  }
  async store(token: AccessToken): Promise<undefined> {
    this.accessToken = token;
    return void 0;
  }
  async get(): Promise<undefined | AccessToken> {
    return this.accessToken;
  }
  async clear(): Promise<undefined> {
    this.accessToken = void 0;
    return void 0;
  }
}
