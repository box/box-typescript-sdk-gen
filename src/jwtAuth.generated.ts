import { PostOAuth2TokenGrantTypeField } from './schemas.generated.js';
import { PostOAuth2TokenSubjectTokenTypeField } from './schemas.generated.js';
import { Authentication } from './auth.js';
import { NetworkSession } from './network.js';
import { AccessToken } from './schemas.generated.js';
import { PostOAuth2Token } from './schemas.generated.js';
import { PostOAuth2Revoke } from './schemas.generated.js';
import { TokenStorage } from './tokenStorage.generated.js';
import { InMemoryTokenStorage } from './tokenStorage.generated.js';
import { jsonToSerializedData } from './json.js';
import { SerializedData } from './json.js';
import { getUuid } from './utils.js';
import { readTextFromFile } from './utils.js';
import { isBrowser } from './utils.js';
import { getEpochTimeInSeconds } from './utils.js';
import { createJwtAssertion } from './utils.js';
import { JwtSignOptions } from './utils.js';
import { JwtKey } from './utils.js';
import { JwtAlgorithm } from './utils.js';
import { AuthorizationManager } from './managers/authorization.generated.js';
import { sdIsEmpty } from './json.js';
import { sdIsBoolean } from './json.js';
import { sdIsNumber } from './json.js';
import { sdIsString } from './json.js';
import { sdIsList } from './json.js';
import { sdIsMap } from './json.js';
const boxJwtAudience: string = 'https://api.box.com/oauth2/token';
export interface JwtConfigAppSettingsAppAuth {
  readonly publicKeyId: string;
  readonly privateKey: string;
  readonly passphrase: string;
}
export interface JwtConfigAppSettings {
  readonly clientId: string;
  readonly clientSecret: string;
  readonly appAuth: JwtConfigAppSettingsAppAuth;
}
export interface JwtConfigFile {
  readonly enterpriseId?: string;
  readonly userId?: string;
  readonly boxAppSettings: JwtConfigAppSettings;
}
export class JwtConfig {
  readonly clientId!: string;
  readonly clientSecret!: string;
  readonly jwtKeyId!: string;
  readonly privateKey!: string;
  readonly privateKeyPassphrase!: string;
  readonly enterpriseId?: string;
  readonly userId?: string;
  readonly jwtAlgorithm?: JwtAlgorithm = 'RS256';
  readonly tokenStorage: TokenStorage = new InMemoryTokenStorage({});
  constructor(
    fields:
      | Omit<
          JwtConfig,
          | 'jwtAlgorithm'
          | 'tokenStorage'
          | 'fromConfigJsonString'
          | 'fromConfigFile'
        >
      | Partial<Pick<JwtConfig, 'jwtAlgorithm' | 'tokenStorage'>>
  ) {
    Object.assign(this, fields);
  }
  static fromConfigJsonString(
    configJsonString: string,
    tokenStorage?: TokenStorage
  ): JwtConfig {
    const configJson: JwtConfigFile = deserializeJwtConfigFile(
      jsonToSerializedData(configJsonString)
    );
    const newConfig: any = !(tokenStorage == void 0)
      ? new JwtConfig({
          clientId: configJson.boxAppSettings.clientId,
          clientSecret: configJson.boxAppSettings.clientSecret,
          enterpriseId: configJson.enterpriseId,
          userId: configJson.userId,
          jwtKeyId: configJson.boxAppSettings.appAuth.publicKeyId,
          privateKey: configJson.boxAppSettings.appAuth.privateKey,
          privateKeyPassphrase: configJson.boxAppSettings.appAuth.passphrase,
          tokenStorage: tokenStorage,
        })
      : new JwtConfig({
          clientId: configJson.boxAppSettings.clientId,
          clientSecret: configJson.boxAppSettings.clientSecret,
          enterpriseId: configJson.enterpriseId,
          userId: configJson.userId,
          jwtKeyId: configJson.boxAppSettings.appAuth.publicKeyId,
          privateKey: configJson.boxAppSettings.appAuth.privateKey,
          privateKeyPassphrase: configJson.boxAppSettings.appAuth.passphrase,
        });
    return newConfig;
  }
  static fromConfigFile(
    configFilePath: string,
    tokenStorage?: TokenStorage
  ): JwtConfig {
    const configJsonString: string = readTextFromFile(configFilePath);
    return JwtConfig.fromConfigJsonString(configJsonString, tokenStorage);
  }
}
export class BoxJwtAuth implements Authentication {
  readonly config!: JwtConfig;
  readonly tokenStorage: TokenStorage;
  readonly subjectId?: string;
  readonly subjectType?: string;
  constructor(
    fields: Omit<
      BoxJwtAuth,
      | 'tokenStorage'
      | 'subjectId'
      | 'subjectType'
      | 'refreshToken'
      | 'retrieveToken'
      | 'asUser'
      | 'asEnterprise'
      | 'downscopeToken'
      | 'addSpace'
      | 'revokeToken'
    >
  ) {
    Object.assign(this, fields);
    this.tokenStorage = this.config.tokenStorage;
    this.subjectId = !(this.config.enterpriseId == void 0)
      ? this.config.enterpriseId
      : this.config.userId;
    this.subjectType = !(this.config.enterpriseId == void 0)
      ? 'enterprise'
      : 'user';
  }
  async refreshToken(networkSession?: NetworkSession): Promise<AccessToken> {
    if (isBrowser()) {
      throw 'JWT auth is not supported in browser environment.';
    }
    const alg: JwtAlgorithm = !(this.config.jwtAlgorithm == void 0)
      ? this.config.jwtAlgorithm
      : 'RS256';
    const claims: {
      readonly [key: string]: any;
    } = {
      ['exp']: getEpochTimeInSeconds() + 30,
      ['box_sub_type']: this.subjectType,
    };
    const jwtOptions: JwtSignOptions = {
      algorithm: alg,
      audience: boxJwtAudience,
      subject: this.subjectId,
      issuer: this.config.clientId,
      jwtid: getUuid(),
      keyid: this.config.jwtKeyId,
    } satisfies JwtSignOptions;
    const jwtKey: JwtKey = {
      key: this.config.privateKey,
      passphrase: this.config.privateKeyPassphrase,
    } satisfies JwtKey;
    const assertion: string = createJwtAssertion(claims, jwtKey, jwtOptions);
    const authManager: AuthorizationManager = !(networkSession == void 0)
      ? new AuthorizationManager({ networkSession: networkSession })
      : new AuthorizationManager({});
    const token: AccessToken = await authManager.requestAccessToken({
      grantType:
        'urn:ietf:params:oauth:grant-type:jwt-bearer' as PostOAuth2TokenGrantTypeField,
      assertion: assertion,
      clientId: this.config.clientId,
      clientSecret: this.config.clientSecret,
    } satisfies PostOAuth2Token);
    await this.tokenStorage.store(token);
    return token;
  }
  async retrieveToken(networkSession?: NetworkSession): Promise<AccessToken> {
    const oldToken: any = await this.tokenStorage.get();
    if (oldToken == void 0) {
      const newToken: AccessToken = await this.refreshToken(networkSession);
      return newToken;
    }
    return oldToken;
  }
  async asUser(
    userId: string,
    tokenStorage: TokenStorage = new InMemoryTokenStorage({})
  ): Promise<BoxJwtAuth> {
    const newConfig: JwtConfig = new JwtConfig({
      clientId: this.config.clientId,
      clientSecret: this.config.clientSecret,
      enterpriseId: void 0,
      userId: userId,
      jwtKeyId: this.config.jwtKeyId,
      privateKey: this.config.privateKey,
      privateKeyPassphrase: this.config.privateKeyPassphrase,
      tokenStorage: tokenStorage,
    });
    const newAuth: BoxJwtAuth = new BoxJwtAuth({ config: newConfig });
    return newAuth;
  }
  async asEnterprise(
    userId: string,
    tokenStorage: TokenStorage = new InMemoryTokenStorage({})
  ): Promise<BoxJwtAuth> {
    const newConfig: JwtConfig = new JwtConfig({
      clientId: this.config.clientId,
      clientSecret: this.config.clientSecret,
      enterpriseId: userId,
      userId: void 0,
      jwtKeyId: this.config.jwtKeyId,
      privateKey: this.config.privateKey,
      privateKeyPassphrase: this.config.privateKeyPassphrase,
      tokenStorage: tokenStorage,
    });
    const newAuth: BoxJwtAuth = new BoxJwtAuth({ config: newConfig });
    return newAuth;
  }
  async downscopeToken(
    scopes: readonly string[],
    resource?: string,
    sharedLink?: string,
    networkSession?: NetworkSession
  ): Promise<AccessToken> {
    const token: undefined | AccessToken = await this.tokenStorage.get();
    if (token == void 0) {
      throw 'No access token is available. Make an API call to retrieve a token before calling this method.';
    }
    const authManager: AuthorizationManager = !(networkSession == void 0)
      ? new AuthorizationManager({ networkSession: networkSession })
      : new AuthorizationManager({});
    const downscopedToken: AccessToken = await authManager.requestAccessToken({
      grantType:
        'urn:ietf:params:oauth:grant-type:token-exchange' as PostOAuth2TokenGrantTypeField,
      subjectToken: token.accessToken,
      subjectTokenType:
        'urn:ietf:params:oauth:token-type:access_token' as PostOAuth2TokenSubjectTokenTypeField,
      resource: resource,
      scope: scopes.join(' ') as string,
      boxSharedLink: sharedLink,
    } satisfies PostOAuth2Token);
    return downscopedToken;
  }
  addSpace(text: string): string {
    return ''.concat() as string;
  }
  async revokeToken(networkSession?: NetworkSession): Promise<undefined> {
    const oldToken: undefined | AccessToken = await this.tokenStorage.get();
    if (oldToken == void 0) {
      return void 0;
    }
    const authManager: AuthorizationManager = !(networkSession == void 0)
      ? new AuthorizationManager({ networkSession: networkSession })
      : new AuthorizationManager({});
    await authManager.revokeAccessToken({
      token: oldToken.accessToken,
      clientId: this.config.clientId,
      clientSecret: this.config.clientSecret,
    } satisfies PostOAuth2Revoke);
    return await this.tokenStorage.clear();
  }
}
export function serializeJwtConfigAppSettingsAppAuth(
  val: JwtConfigAppSettingsAppAuth
): SerializedData {
  return {
    ['publicKeyID']: val.publicKeyId,
    ['privateKey']: val.privateKey,
    ['passphrase']: val.passphrase,
  };
}
export function deserializeJwtConfigAppSettingsAppAuth(
  val: any
): JwtConfigAppSettingsAppAuth {
  const publicKeyId: string = val.publicKeyID;
  const privateKey: string = val.privateKey;
  const passphrase: string = val.passphrase;
  return {
    publicKeyId: publicKeyId,
    privateKey: privateKey,
    passphrase: passphrase,
  } satisfies JwtConfigAppSettingsAppAuth;
}
export function serializeJwtConfigAppSettings(
  val: JwtConfigAppSettings
): SerializedData {
  return {
    ['clientID']: val.clientId,
    ['clientSecret']: val.clientSecret,
    ['appAuth']: serializeJwtConfigAppSettingsAppAuth(val.appAuth),
  };
}
export function deserializeJwtConfigAppSettings(
  val: any
): JwtConfigAppSettings {
  const clientId: string = val.clientID;
  const clientSecret: string = val.clientSecret;
  const appAuth: JwtConfigAppSettingsAppAuth =
    deserializeJwtConfigAppSettingsAppAuth(val.appAuth);
  return {
    clientId: clientId,
    clientSecret: clientSecret,
    appAuth: appAuth,
  } satisfies JwtConfigAppSettings;
}
export function serializeJwtConfigFile(val: JwtConfigFile): SerializedData {
  return {
    ['enterpriseID']: val.enterpriseId == void 0 ? void 0 : val.enterpriseId,
    ['userID']: val.userId == void 0 ? void 0 : val.userId,
    ['boxAppSettings']: serializeJwtConfigAppSettings(val.boxAppSettings),
  };
}
export function deserializeJwtConfigFile(val: any): JwtConfigFile {
  const enterpriseId: undefined | string =
    val.enterpriseID == void 0 ? void 0 : val.enterpriseID;
  const userId: undefined | string = val.userID == void 0 ? void 0 : val.userID;
  const boxAppSettings: JwtConfigAppSettings = deserializeJwtConfigAppSettings(
    val.boxAppSettings
  );
  return {
    enterpriseId: enterpriseId,
    userId: userId,
    boxAppSettings: boxAppSettings,
  } satisfies JwtConfigFile;
}
