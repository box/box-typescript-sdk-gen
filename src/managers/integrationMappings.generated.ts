import { serializeIntegrationMappings } from '../schemas.generated.js';
import { deserializeIntegrationMappings } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { serializeIntegrationMapping } from '../schemas.generated.js';
import { deserializeIntegrationMapping } from '../schemas.generated.js';
import { serializeIntegrationMappingSlackCreateRequest } from '../schemas.generated.js';
import { deserializeIntegrationMappingSlackCreateRequest } from '../schemas.generated.js';
import { serializeIntegrationMappingBoxItemSlack } from '../schemas.generated.js';
import { deserializeIntegrationMappingBoxItemSlack } from '../schemas.generated.js';
import { serializeIntegrationMappingSlackOptions } from '../schemas.generated.js';
import { deserializeIntegrationMappingSlackOptions } from '../schemas.generated.js';
import { IntegrationMappings } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { IntegrationMapping } from '../schemas.generated.js';
import { IntegrationMappingSlackCreateRequest } from '../schemas.generated.js';
import { IntegrationMappingBoxItemSlack } from '../schemas.generated.js';
import { IntegrationMappingSlackOptions } from '../schemas.generated.js';
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
import { serializeJson } from '../json.js';
import { isJson } from '../json.js';
export type GetIntegrationMappingSlackQueryParamsArgPartnerItemTypeField =
  'channel';
export type GetIntegrationMappingSlackQueryParamsArgBoxItemTypeField = 'folder';
export interface GetIntegrationMappingSlackQueryParamsArg {
  readonly marker?: string;
  readonly limit?: number;
  readonly partnerItemType?: GetIntegrationMappingSlackQueryParamsArgPartnerItemTypeField;
  readonly partnerItemId?: string;
  readonly boxItemId?: string;
  readonly boxItemType?: GetIntegrationMappingSlackQueryParamsArgBoxItemTypeField;
  readonly isManuallyCreated?: boolean;
}
export class GetIntegrationMappingSlackHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetIntegrationMappingSlackHeadersArg, 'extraHeaders'>
      | Partial<Pick<GetIntegrationMappingSlackHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class CreateIntegrationMappingSlackHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateIntegrationMappingSlackHeadersArg, 'extraHeaders'>
      | Partial<Pick<CreateIntegrationMappingSlackHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface UpdateIntegrationMappingSlackByIdRequestBodyArg {
  readonly boxItem?: IntegrationMappingBoxItemSlack;
  readonly options?: IntegrationMappingSlackOptions;
}
export class UpdateIntegrationMappingSlackByIdHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<UpdateIntegrationMappingSlackByIdHeadersArg, 'extraHeaders'>
      | Partial<
          Pick<UpdateIntegrationMappingSlackByIdHeadersArg, 'extraHeaders'>
        >
  ) {
    Object.assign(this, fields);
  }
}
export class DeleteIntegrationMappingSlackByIdHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<DeleteIntegrationMappingSlackByIdHeadersArg, 'extraHeaders'>
      | Partial<
          Pick<DeleteIntegrationMappingSlackByIdHeadersArg, 'extraHeaders'>
        >
  ) {
    Object.assign(this, fields);
  }
}
export class IntegrationMappingsManager {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
  constructor(
    fields: Omit<
      IntegrationMappingsManager,
      | 'getIntegrationMappingSlack'
      | 'createIntegrationMappingSlack'
      | 'updateIntegrationMappingSlackById'
      | 'deleteIntegrationMappingSlackById'
    >
  ) {
    Object.assign(this, fields);
  }
  async getIntegrationMappingSlack(
    queryParams: GetIntegrationMappingSlackQueryParamsArg = {} satisfies GetIntegrationMappingSlackQueryParamsArg,
    headers: GetIntegrationMappingSlackHeadersArg = new GetIntegrationMappingSlackHeadersArg(
      {}
    )
  ): Promise<IntegrationMappings> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['marker']: toString(queryParams.marker) as string,
      ['limit']: toString(queryParams.limit) as string,
      ['partner_item_type']: toString(queryParams.partnerItemType) as string,
      ['partner_item_id']: toString(queryParams.partnerItemId) as string,
      ['box_item_id']: toString(queryParams.boxItemId) as string,
      ['box_item_type']: toString(queryParams.boxItemType) as string,
      ['is_manually_created']: toString(
        queryParams.isManuallyCreated
      ) as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat('https://api.box.com/2.0/integration_mappings/slack') as string,
      {
        method: 'GET',
        params: queryParamsMap,
        headers: headersMap,
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeIntegrationMappings(deserializeJson(response.text));
  }
  async createIntegrationMappingSlack(
    requestBody: IntegrationMappingSlackCreateRequest,
    headers: CreateIntegrationMappingSlackHeadersArg = new CreateIntegrationMappingSlackHeadersArg(
      {}
    )
  ): Promise<IntegrationMapping> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat('https://api.box.com/2.0/integration_mappings/slack') as string,
      {
        method: 'POST',
        headers: headersMap,
        body: serializeJson(
          serializeIntegrationMappingSlackCreateRequest(requestBody)
        ),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeIntegrationMapping(deserializeJson(response.text));
  }
  async updateIntegrationMappingSlackById(
    integrationMappingId: string,
    requestBody: UpdateIntegrationMappingSlackByIdRequestBodyArg = {} satisfies UpdateIntegrationMappingSlackByIdRequestBodyArg,
    headers: UpdateIntegrationMappingSlackByIdHeadersArg = new UpdateIntegrationMappingSlackByIdHeadersArg(
      {}
    )
  ): Promise<IntegrationMapping> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/integration_mappings/slack/',
        toString(integrationMappingId) as string
      ) as string,
      {
        method: 'PUT',
        headers: headersMap,
        body: serializeJson(
          serializeUpdateIntegrationMappingSlackByIdRequestBodyArg(requestBody)
        ),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeIntegrationMapping(deserializeJson(response.text));
  }
  async deleteIntegrationMappingSlackById(
    integrationMappingId: string,
    headers: DeleteIntegrationMappingSlackByIdHeadersArg = new DeleteIntegrationMappingSlackByIdHeadersArg(
      {}
    )
  ): Promise<undefined> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/integration_mappings/slack/',
        toString(integrationMappingId) as string
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
export function serializeGetIntegrationMappingSlackQueryParamsArgPartnerItemTypeField(
  val: GetIntegrationMappingSlackQueryParamsArgPartnerItemTypeField
): Json {
  return val;
}
export function deserializeGetIntegrationMappingSlackQueryParamsArgPartnerItemTypeField(
  val: any
): GetIntegrationMappingSlackQueryParamsArgPartnerItemTypeField {
  if (!isJson(val, 'string')) {
    throw 'Expecting a string for "GetIntegrationMappingSlackQueryParamsArgPartnerItemTypeField"';
  }
  if (val == 'channel') {
    return 'channel';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeGetIntegrationMappingSlackQueryParamsArgBoxItemTypeField(
  val: GetIntegrationMappingSlackQueryParamsArgBoxItemTypeField
): Json {
  return val;
}
export function deserializeGetIntegrationMappingSlackQueryParamsArgBoxItemTypeField(
  val: any
): GetIntegrationMappingSlackQueryParamsArgBoxItemTypeField {
  if (!isJson(val, 'string')) {
    throw 'Expecting a string for "GetIntegrationMappingSlackQueryParamsArgBoxItemTypeField"';
  }
  if (val == 'folder') {
    return 'folder';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeUpdateIntegrationMappingSlackByIdRequestBodyArg(
  val: UpdateIntegrationMappingSlackByIdRequestBodyArg
): Json {
  return {
    ['box_item']:
      val.boxItem == void 0
        ? void 0
        : serializeIntegrationMappingBoxItemSlack(val.boxItem),
    ['options']:
      val.options == void 0
        ? void 0
        : serializeIntegrationMappingSlackOptions(val.options),
  };
}
export function deserializeUpdateIntegrationMappingSlackByIdRequestBodyArg(
  val: any
): UpdateIntegrationMappingSlackByIdRequestBodyArg {
  const boxItem: undefined | IntegrationMappingBoxItemSlack =
    val.box_item == void 0
      ? void 0
      : deserializeIntegrationMappingBoxItemSlack(val.box_item);
  const options: undefined | IntegrationMappingSlackOptions =
    val.options == void 0
      ? void 0
      : deserializeIntegrationMappingSlackOptions(val.options);
  return {
    boxItem: boxItem,
    options: options,
  } satisfies UpdateIntegrationMappingSlackByIdRequestBodyArg;
}
