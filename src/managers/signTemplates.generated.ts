import { serializeSignTemplates } from '../schemas.generated.js';
import { deserializeSignTemplates } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { serializeSignTemplate } from '../schemas.generated.js';
import { deserializeSignTemplate } from '../schemas.generated.js';
import { SignTemplates } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { SignTemplate } from '../schemas.generated.js';
import { Authentication } from '../auth.js';
import { NetworkSession } from '../network.js';
import { prepareParams } from '../utils.js';
import { toString } from '../utils.js';
import { ByteStream } from '../utils.js';
import { CancellationToken } from '../utils.js';
import { sdToJson } from '../json.js';
import { fetch } from '../fetch.js';
import { FetchOptions } from '../fetch.js';
import { FetchResponse } from '../fetch.js';
import { SerializedData } from '../json.js';
import { sdIsEmpty } from '../json.js';
import { sdIsBoolean } from '../json.js';
import { sdIsNumber } from '../json.js';
import { sdIsString } from '../json.js';
import { sdIsList } from '../json.js';
import { sdIsMap } from '../json.js';
export interface GetSignTemplatesQueryParams {
  readonly marker?: string;
  readonly limit?: number;
}
export class GetSignTemplatesHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetSignTemplatesHeaders, 'extraHeaders'>
      | Partial<Pick<GetSignTemplatesHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class GetSignTemplateByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetSignTemplateByIdHeaders, 'extraHeaders'>
      | Partial<Pick<GetSignTemplateByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class SignTemplatesManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields:
      | Omit<
          SignTemplatesManager,
          'networkSession' | 'getSignTemplates' | 'getSignTemplateById'
        >
      | Partial<Pick<SignTemplatesManager, 'networkSession'>>
  ) {
    Object.assign(this, fields);
  }
  async getSignTemplates(
    queryParams: GetSignTemplatesQueryParams = {} satisfies GetSignTemplatesQueryParams,
    headers: GetSignTemplatesHeaders = new GetSignTemplatesHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<SignTemplates> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['marker']: toString(queryParams.marker) as string,
      ['limit']: toString(queryParams.limit) as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/sign_templates'
      ) as string,
      {
        method: 'GET',
        params: queryParamsMap,
        headers: headersMap,
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeSignTemplates(response.data);
  }
  async getSignTemplateById(
    templateId: string,
    headers: GetSignTemplateByIdHeaders = new GetSignTemplateByIdHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<SignTemplate> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/sign_templates/',
        toString(templateId) as string
      ) as string,
      {
        method: 'GET',
        headers: headersMap,
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeSignTemplate(response.data);
  }
}
