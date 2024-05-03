import { serializeAiResponse } from '../schemas.generated.js';
import { deserializeAiResponse } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { serializeAiAsk } from '../schemas.generated.js';
import { deserializeAiAsk } from '../schemas.generated.js';
import { serializeAiTextGen } from '../schemas.generated.js';
import { deserializeAiTextGen } from '../schemas.generated.js';
import { AiResponse } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { AiAsk } from '../schemas.generated.js';
import { AiTextGen } from '../schemas.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { ByteStream } from '../internal/utils.js';
import { CancellationToken } from '../internal/utils.js';
import { FetchOptions } from '../networking/fetch.js';
import { FetchResponse } from '../networking/fetch.js';
import { fetch } from '../networking/fetch.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class CreateAiAskOptionals {
  readonly headers: CreateAiAskHeaders = new CreateAiAskHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<CreateAiAskOptionals, 'headers' | 'cancellationToken'> &
      Partial<Pick<CreateAiAskOptionals, 'headers' | 'cancellationToken'>>
  ) {
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface CreateAiAskOptionalsInput {
  readonly headers?: CreateAiAskHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class CreateAiTextGenOptionals {
  readonly headers: CreateAiTextGenHeaders = new CreateAiTextGenHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<CreateAiTextGenOptionals, 'headers' | 'cancellationToken'> &
      Partial<Pick<CreateAiTextGenOptionals, 'headers' | 'cancellationToken'>>
  ) {
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface CreateAiTextGenOptionalsInput {
  readonly headers?: CreateAiTextGenHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class CreateAiAskHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<CreateAiAskHeaders, 'extraHeaders'> &
      Partial<Pick<CreateAiAskHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface CreateAiAskHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class CreateAiTextGenHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<CreateAiTextGenHeaders, 'extraHeaders'> &
      Partial<Pick<CreateAiTextGenHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface CreateAiTextGenHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class AiManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields: Omit<
      AiManager,
      'networkSession' | 'createAiAsk' | 'createAiTextGen'
    > &
      Partial<Pick<AiManager, 'networkSession'>>
  ) {
    if (fields.auth) {
      this.auth = fields.auth;
    }
    if (fields.networkSession) {
      this.networkSession = fields.networkSession;
    }
  }
  async createAiAsk(
    requestBody: AiAsk,
    optionalsInput: CreateAiAskOptionalsInput = {}
  ): Promise<AiResponse> {
    const optionals: CreateAiAskOptionals = new CreateAiAskOptionals({
      headers: optionalsInput.headers,
      cancellationToken: optionalsInput.cancellationToken,
    });
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(this.networkSession.baseUrls.baseUrl, '/ai/ask') as string,
      {
        method: 'POST',
        headers: headersMap,
        data: serializeAiAsk(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeAiResponse(response.data);
  }
  async createAiTextGen(
    requestBody: AiTextGen,
    optionalsInput: CreateAiTextGenOptionalsInput = {}
  ): Promise<AiResponse> {
    const optionals: CreateAiTextGenOptionals = new CreateAiTextGenOptionals({
      headers: optionalsInput.headers,
      cancellationToken: optionalsInput.cancellationToken,
    });
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(this.networkSession.baseUrls.baseUrl, '/ai/text_gen') as string,
      {
        method: 'POST',
        headers: headersMap,
        data: serializeAiTextGen(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeAiResponse(response.data);
  }
}
export interface AiManagerInput {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
}
