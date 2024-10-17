import { serializeClientError } from '../schemas/clientError.generated.js';
import { deserializeClientError } from '../schemas/clientError.generated.js';
import { serializeUserAvatar } from '../schemas/userAvatar.generated.js';
import { deserializeUserAvatar } from '../schemas/userAvatar.generated.js';
import { ClientError } from '../schemas/clientError.generated.js';
import { UserAvatar } from '../schemas/userAvatar.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { ByteStream } from '../internal/utils.js';
import { CancellationToken } from '../internal/utils.js';
import { FetchOptions } from '../networking/fetch.js';
import { FetchResponse } from '../networking/fetch.js';
import { fetch } from '../networking/fetch.js';
import { sdToJson } from '../serialization/json.js';
import { MultipartItem } from '../networking/fetch.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class GetUserAvatarOptionals {
  readonly headers: GetUserAvatarHeaders = new GetUserAvatarHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<GetUserAvatarOptionals, 'headers' | 'cancellationToken'> &
      Partial<Pick<GetUserAvatarOptionals, 'headers' | 'cancellationToken'>>
  ) {
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface GetUserAvatarOptionalsInput {
  readonly headers?: GetUserAvatarHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class CreateUserAvatarOptionals {
  readonly headers: CreateUserAvatarHeaders = new CreateUserAvatarHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<CreateUserAvatarOptionals, 'headers' | 'cancellationToken'> &
      Partial<Pick<CreateUserAvatarOptionals, 'headers' | 'cancellationToken'>>
  ) {
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface CreateUserAvatarOptionalsInput {
  readonly headers?: CreateUserAvatarHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class DeleteUserAvatarOptionals {
  readonly headers: DeleteUserAvatarHeaders = new DeleteUserAvatarHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<DeleteUserAvatarOptionals, 'headers' | 'cancellationToken'> &
      Partial<Pick<DeleteUserAvatarOptionals, 'headers' | 'cancellationToken'>>
  ) {
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface DeleteUserAvatarOptionalsInput {
  readonly headers?: DeleteUserAvatarHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class GetUserAvatarHeaders {
  /**
   * Extra headers that will be included in the HTTP request. */
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<GetUserAvatarHeaders, 'extraHeaders'> &
      Partial<Pick<GetUserAvatarHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetUserAvatarHeadersInput {
  /**
   * Extra headers that will be included in the HTTP request. */
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export interface CreateUserAvatarRequestBody {
  /**
   * The image file to be uploaded to Box.
   * Accepted file extensions are `.jpg` or `.png`.
   * The maximum file size is 1MB. */
  readonly pic: ByteStream;
  readonly picFileName?: string;
  readonly picContentType?: string;
}
export class CreateUserAvatarHeaders {
  /**
   * Extra headers that will be included in the HTTP request. */
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<CreateUserAvatarHeaders, 'extraHeaders'> &
      Partial<Pick<CreateUserAvatarHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface CreateUserAvatarHeadersInput {
  /**
   * Extra headers that will be included in the HTTP request. */
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class DeleteUserAvatarHeaders {
  /**
   * Extra headers that will be included in the HTTP request. */
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<DeleteUserAvatarHeaders, 'extraHeaders'> &
      Partial<Pick<DeleteUserAvatarHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface DeleteUserAvatarHeadersInput {
  /**
   * Extra headers that will be included in the HTTP request. */
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class AvatarsManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields: Omit<
      AvatarsManager,
      | 'networkSession'
      | 'getUserAvatar'
      | 'createUserAvatar'
      | 'deleteUserAvatar'
    > &
      Partial<Pick<AvatarsManager, 'networkSession'>>
  ) {
    if (fields.auth) {
      this.auth = fields.auth;
    }
    if (fields.networkSession) {
      this.networkSession = fields.networkSession;
    }
  }
  /**
     * Retrieves an image of a the user's avatar.
     * @param {string} userId The ID of the user.
    Example: "12345"
     * @param {GetUserAvatarOptionalsInput} optionalsInput
     * @returns {Promise<ByteStream>}
     */
  async getUserAvatar(
    userId: string,
    optionalsInput: GetUserAvatarOptionalsInput = {}
  ): Promise<ByteStream> {
    const optionals: GetUserAvatarOptionals = new GetUserAvatarOptionals({
      headers: optionalsInput.headers,
      cancellationToken: optionalsInput.cancellationToken,
    });
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch({
      url: ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/2.0/users/',
        toString(userId) as string,
        '/avatar'
      ) as string,
      method: 'GET',
      headers: headersMap,
      responseFormat: 'binary',
      auth: this.auth,
      networkSession: this.networkSession,
      cancellationToken: cancellationToken,
    } satisfies FetchOptions)) as FetchResponse;
    return response.content;
  }
  /**
     * Adds or updates a user avatar.
     * @param {string} userId The ID of the user.
    Example: "12345"
     * @param {CreateUserAvatarRequestBody} requestBody Request body of createUserAvatar method
     * @param {CreateUserAvatarOptionalsInput} optionalsInput
     * @returns {Promise<UserAvatar>}
     */
  async createUserAvatar(
    userId: string,
    requestBody: CreateUserAvatarRequestBody,
    optionalsInput: CreateUserAvatarOptionalsInput = {}
  ): Promise<UserAvatar> {
    const optionals: CreateUserAvatarOptionals = new CreateUserAvatarOptionals({
      headers: optionalsInput.headers,
      cancellationToken: optionalsInput.cancellationToken,
    });
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch({
      url: ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/2.0/users/',
        toString(userId) as string,
        '/avatar'
      ) as string,
      method: 'POST',
      headers: headersMap,
      multipartData: [
        {
          partName: 'pic',
          fileStream: requestBody.pic,
          fileName: requestBody.picFileName,
          contentType: requestBody.picContentType,
        } satisfies MultipartItem,
      ],
      contentType: 'multipart/form-data',
      responseFormat: 'json',
      auth: this.auth,
      networkSession: this.networkSession,
      cancellationToken: cancellationToken,
    } satisfies FetchOptions)) as FetchResponse;
    return {
      ...deserializeUserAvatar(response.data),
      rawData: response.data,
    };
  }
  /**
     * Removes an existing user avatar.
     * You cannot reverse this operation.
     * @param {string} userId The ID of the user.
    Example: "12345"
     * @param {DeleteUserAvatarOptionalsInput} optionalsInput
     * @returns {Promise<undefined>}
     */
  async deleteUserAvatar(
    userId: string,
    optionalsInput: DeleteUserAvatarOptionalsInput = {}
  ): Promise<undefined> {
    const optionals: DeleteUserAvatarOptionals = new DeleteUserAvatarOptionals({
      headers: optionalsInput.headers,
      cancellationToken: optionalsInput.cancellationToken,
    });
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch({
      url: ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/2.0/users/',
        toString(userId) as string,
        '/avatar'
      ) as string,
      method: 'DELETE',
      headers: headersMap,
      responseFormat: void 0,
      auth: this.auth,
      networkSession: this.networkSession,
      cancellationToken: cancellationToken,
    } satisfies FetchOptions)) as FetchResponse;
    return void 0;
  }
}
export interface AvatarsManagerInput {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
}
