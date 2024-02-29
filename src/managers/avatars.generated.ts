import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { serializeUserAvatar } from '../schemas.generated.js';
import { deserializeUserAvatar } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { UserAvatar } from '../schemas.generated.js';
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
export class GetUserAvatarHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetUserAvatarHeaders, 'extraHeaders'>
      | Partial<Pick<GetUserAvatarHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface CreateUserAvatarRequestBody {
  readonly pic: ByteStream;
  readonly picFileName?: string;
  readonly picContentType?: string;
}
export class CreateUserAvatarHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateUserAvatarHeaders, 'extraHeaders'>
      | Partial<Pick<CreateUserAvatarHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class DeleteUserAvatarHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<DeleteUserAvatarHeaders, 'extraHeaders'>
      | Partial<Pick<DeleteUserAvatarHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class AvatarsManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields:
      | Omit<
          AvatarsManager,
          | 'networkSession'
          | 'getUserAvatar'
          | 'createUserAvatar'
          | 'deleteUserAvatar'
        >
      | Partial<Pick<AvatarsManager, 'networkSession'>>
  ) {
    Object.assign(this, fields);
  }
  async getUserAvatar(
    userId: string,
    headers: GetUserAvatarHeaders = new GetUserAvatarHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<ByteStream> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/users/',
        toString(userId) as string,
        '/avatar'
      ) as string,
      {
        method: 'GET',
        headers: headersMap,
        responseFormat: 'binary',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return response.content;
  }
  async createUserAvatar(
    userId: string,
    requestBody: CreateUserAvatarRequestBody,
    headers: CreateUserAvatarHeaders = new CreateUserAvatarHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<UserAvatar> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/users/',
        toString(userId) as string,
        '/avatar'
      ) as string,
      {
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
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeUserAvatar(response.data);
  }
  async deleteUserAvatar(
    userId: string,
    headers: DeleteUserAvatarHeaders = new DeleteUserAvatarHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<undefined> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/users/',
        toString(userId) as string,
        '/avatar'
      ) as string,
      {
        method: 'DELETE',
        headers: headersMap,
        responseFormat: void 0,
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return void 0;
  }
}
