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
import { fetch } from '../fetch.js';
import { FetchOptions } from '../fetch.js';
import { FetchResponse } from '../fetch.js';
import { deserializeJson } from '../json.js';
import { Json } from '../json.js';
export interface GetSignTemplatesQueryParamsArg {
  readonly marker?: string;
  readonly limit?: number;
}
export class GetSignTemplatesHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetSignTemplatesHeadersArg, 'extraHeaders'>
      | Partial<Pick<GetSignTemplatesHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class GetSignTemplateByIdHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetSignTemplateByIdHeadersArg, 'extraHeaders'>
      | Partial<Pick<GetSignTemplateByIdHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class SignTemplatesManager {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
  constructor(
    fields: Omit<
      SignTemplatesManager,
      'getSignTemplates' | 'getSignTemplateById'
    >
  ) {
    Object.assign(this, fields);
  }
  async getSignTemplates(
    queryParams: GetSignTemplatesQueryParamsArg = {} satisfies GetSignTemplatesQueryParamsArg,
    headers: GetSignTemplatesHeadersArg = new GetSignTemplatesHeadersArg({})
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
      ''.concat('https://api.box.com/2.0/sign_templates') as string,
      {
        method: 'GET',
        params: queryParamsMap,
        headers: headersMap,
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeSignTemplates(deserializeJson(response.text));
  }
  async getSignTemplateById(
    templateId: string,
    headers: GetSignTemplateByIdHeadersArg = new GetSignTemplateByIdHeadersArg(
      {}
    )
  ): Promise<SignTemplate> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/sign_templates/',
        toString(templateId) as string
      ) as string,
      {
        method: 'GET',
        headers: headersMap,
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeSignTemplate(deserializeJson(response.text));
  }
}
