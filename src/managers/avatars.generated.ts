import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { serializeUserAvatar } from '../schemas.generated.js';
import { deserializeUserAvatar } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { UserAvatar } from '../schemas.generated.js';
import { Authentication } from '../auth.js';
import { NetworkSession } from '../network.js';
import { prepareParams } from '../utils.js';
import { toString } from '../utils.js';
import { ByteStream } from '../utils.js';
import { fetch } from '../fetch.js';
import { FetchOptions } from '../fetch.js';
import { FetchResponse } from '../fetch.js';
import { MultipartItem } from '../fetch.js';
import { deserializeJson } from '../json.js';
import { Json } from '../json.js';
export class GetUserAvatarHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetUserAvatarHeadersArg, 'extraHeaders'>
      | Partial<Pick<GetUserAvatarHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface CreateUserAvatarRequestBodyArg {
  readonly pic: ByteStream;
  readonly picFileName?: string;
  readonly picContentType?: string;
}
export class CreateUserAvatarHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateUserAvatarHeadersArg, 'extraHeaders'>
      | Partial<Pick<CreateUserAvatarHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class DeleteUserAvatarHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<DeleteUserAvatarHeadersArg, 'extraHeaders'>
      | Partial<Pick<DeleteUserAvatarHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class AvatarsManager {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
  constructor(
    fields: Omit<
      AvatarsManager,
      'getUserAvatar' | 'createUserAvatar' | 'deleteUserAvatar'
    >
  ) {
    Object.assign(this, fields);
  }
  async getUserAvatar(
    userId: string,
    headers: GetUserAvatarHeadersArg = new GetUserAvatarHeadersArg({})
  ): Promise<ByteStream> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/users/',
        toString(userId) as string,
        '/avatar'
      ) as string,
      {
        method: 'GET',
        headers: headersMap,
        responseFormat: 'binary',
        auth: this.auth,
        networkSession: this.networkSession,
      } satisfies FetchOptions
    )) as FetchResponse;
    return response.content;
  }
  async createUserAvatar(
    userId: string,
    requestBody: CreateUserAvatarRequestBodyArg,
    headers: CreateUserAvatarHeadersArg = new CreateUserAvatarHeadersArg({})
  ): Promise<UserAvatar> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/users/',
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
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeUserAvatar(deserializeJson(response.text));
  }
  async deleteUserAvatar(
    userId: string,
    headers: DeleteUserAvatarHeadersArg = new DeleteUserAvatarHeadersArg({})
  ): Promise<undefined> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/users/',
        toString(userId) as string,
        '/avatar'
      ) as string,
      {
        method: 'DELETE',
        headers: headersMap,
        responseFormat: void 0,
        auth: this.auth,
        networkSession: this.networkSession,
      } satisfies FetchOptions
    )) as FetchResponse;
    return void 0;
  }
}
