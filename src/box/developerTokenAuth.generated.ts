import { PostOAuth2TokenGrantTypeField } from '../schemas.generated.js';
import { PostOAuth2TokenSubjectTokenTypeField } from '../schemas.generated.js';
import { AccessToken } from '../schemas.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { BoxSdkError } from './errors.js';
import { TokenStorage } from './tokenStorage.generated.js';
import { InMemoryTokenStorage } from './tokenStorage.generated.js';
import { AuthorizationManager } from '../managers/authorization.generated.js';
import { PostOAuth2Token } from '../schemas.generated.js';
import { PostOAuth2Revoke } from '../schemas.generated.js';
export interface DeveloperTokenConfig {
  readonly clientId?: string;
  readonly clientSecret?: string;
}
export class BoxDeveloperTokenAuth implements Authentication {
  readonly token!: string;
  readonly config: DeveloperTokenConfig = {} satisfies DeveloperTokenConfig;
  readonly tokenStorage: TokenStorage;
  constructor(
    fields:
      | Omit<
          BoxDeveloperTokenAuth,
          | 'tokenStorage'
          | 'config'
          | 'retrieveToken'
          | 'refreshToken'
          | 'retrieveAuthorizationHeader'
          | 'revokeToken'
          | 'downscopeToken'
        >
      | Partial<Pick<BoxDeveloperTokenAuth, 'config'>>
  ) {
    Object.assign(this, fields);
    this.tokenStorage = new InMemoryTokenStorage({
      token: { accessToken: this.token } satisfies AccessToken,
    });
  }
  async retrieveToken(networkSession?: NetworkSession): Promise<AccessToken> {
    const token: undefined | AccessToken = await this.tokenStorage.get();
    if (token == void 0) {
      throw new BoxSdkError({ message: 'No access token is available.' });
    }
    return token!;
  }
  async refreshToken(networkSession?: NetworkSession): Promise<AccessToken> {
    throw new BoxSdkError({
      message: 'Developer token has expired. Please provide a new one.',
    });
  }
  async retrieveAuthorizationHeader(
    networkSession?: NetworkSession
  ): Promise<string> {
    const token: AccessToken = await this.retrieveToken(networkSession);
    return ''.concat('Bearer ', token.accessToken!) as string;
  }
  async revokeToken(networkSession?: NetworkSession): Promise<undefined> {
    const token: undefined | AccessToken = await this.tokenStorage.get();
    if (token == void 0) {
      return void 0;
    }
    const authManager: AuthorizationManager = new AuthorizationManager({
      networkSession: !(networkSession == void 0)
        ? networkSession!
        : new NetworkSession({}),
    });
    await authManager.revokeAccessToken({
      clientId: this.config.clientId,
      clientSecret: this.config.clientSecret,
      token: token!.accessToken,
    } satisfies PostOAuth2Revoke);
    await this.tokenStorage.clear();
    return void 0;
  }
  async downscopeToken(
    scopes: readonly string[],
    resource?: string,
    sharedLink?: string,
    networkSession?: NetworkSession
  ): Promise<AccessToken> {
    const token: undefined | AccessToken = await this.tokenStorage.get();
    if (token == void 0 || token!.accessToken == void 0) {
      throw new BoxSdkError({ message: 'No access token is available.' });
    }
    const authManager: AuthorizationManager = new AuthorizationManager({
      networkSession: !(networkSession == void 0)
        ? networkSession!
        : new NetworkSession({}),
    });
    const downscopedToken: AccessToken = await authManager.requestAccessToken({
      grantType:
        'urn:ietf:params:oauth:grant-type:token-exchange' as PostOAuth2TokenGrantTypeField,
      subjectToken: token!.accessToken,
      subjectTokenType:
        'urn:ietf:params:oauth:token-type:access_token' as PostOAuth2TokenSubjectTokenTypeField,
      scope: scopes.join(' ') as string,
      resource: resource,
      boxSharedLink: sharedLink,
    } satisfies PostOAuth2Token);
    return downscopedToken;
  }
}
