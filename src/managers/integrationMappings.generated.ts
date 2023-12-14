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
export type GetIntegrationMappingSlackQueryParamsPartnerItemTypeField =
  'channel';
export type GetIntegrationMappingSlackQueryParamsBoxItemTypeField = 'folder';
export interface GetIntegrationMappingSlackQueryParams {
  readonly marker?: string;
  readonly limit?: number;
  readonly partnerItemType?: GetIntegrationMappingSlackQueryParamsPartnerItemTypeField;
  readonly partnerItemId?: string;
  readonly boxItemId?: string;
  readonly boxItemType?: GetIntegrationMappingSlackQueryParamsBoxItemTypeField;
  readonly isManuallyCreated?: boolean;
}
export class GetIntegrationMappingSlackHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetIntegrationMappingSlackHeaders, 'extraHeaders'>
      | Partial<Pick<GetIntegrationMappingSlackHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class CreateIntegrationMappingSlackHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateIntegrationMappingSlackHeaders, 'extraHeaders'>
      | Partial<Pick<CreateIntegrationMappingSlackHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface UpdateIntegrationMappingSlackByIdRequestBody {
  readonly boxItem?: IntegrationMappingBoxItemSlack;
  readonly options?: IntegrationMappingSlackOptions;
}
export class UpdateIntegrationMappingSlackByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<UpdateIntegrationMappingSlackByIdHeaders, 'extraHeaders'>
      | Partial<Pick<UpdateIntegrationMappingSlackByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class DeleteIntegrationMappingSlackByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<DeleteIntegrationMappingSlackByIdHeaders, 'extraHeaders'>
      | Partial<Pick<DeleteIntegrationMappingSlackByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class IntegrationMappingsManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields:
      | Omit<
          IntegrationMappingsManager,
          | 'networkSession'
          | 'getIntegrationMappingSlack'
          | 'createIntegrationMappingSlack'
          | 'updateIntegrationMappingSlackById'
          | 'deleteIntegrationMappingSlackById'
        >
      | Partial<Pick<IntegrationMappingsManager, 'networkSession'>>
  ) {
    Object.assign(this, fields);
  }
  async getIntegrationMappingSlack(
    queryParams: GetIntegrationMappingSlackQueryParams = {} satisfies GetIntegrationMappingSlackQueryParams,
    headers: GetIntegrationMappingSlackHeaders = new GetIntegrationMappingSlackHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
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
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/integration_mappings/slack'
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
    return deserializeIntegrationMappings(response.data);
  }
  async createIntegrationMappingSlack(
    requestBody: IntegrationMappingSlackCreateRequest,
    headers: CreateIntegrationMappingSlackHeaders = new CreateIntegrationMappingSlackHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<IntegrationMapping> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/integration_mappings/slack'
      ) as string,
      {
        method: 'POST',
        headers: headersMap,
        data: serializeIntegrationMappingSlackCreateRequest(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeIntegrationMapping(response.data);
  }
  async updateIntegrationMappingSlackById(
    integrationMappingId: string,
    requestBody: UpdateIntegrationMappingSlackByIdRequestBody = {} satisfies UpdateIntegrationMappingSlackByIdRequestBody,
    headers: UpdateIntegrationMappingSlackByIdHeaders = new UpdateIntegrationMappingSlackByIdHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<IntegrationMapping> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/integration_mappings/slack/',
        toString(integrationMappingId) as string
      ) as string,
      {
        method: 'PUT',
        headers: headersMap,
        data: serializeUpdateIntegrationMappingSlackByIdRequestBody(
          requestBody
        ),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeIntegrationMapping(response.data);
  }
  async deleteIntegrationMappingSlackById(
    integrationMappingId: string,
    headers: DeleteIntegrationMappingSlackByIdHeaders = new DeleteIntegrationMappingSlackByIdHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<undefined> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/integration_mappings/slack/',
        toString(integrationMappingId) as string
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
export function serializeGetIntegrationMappingSlackQueryParamsPartnerItemTypeField(
  val: GetIntegrationMappingSlackQueryParamsPartnerItemTypeField
): SerializedData {
  return val;
}
export function deserializeGetIntegrationMappingSlackQueryParamsPartnerItemTypeField(
  val: any
): GetIntegrationMappingSlackQueryParamsPartnerItemTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "GetIntegrationMappingSlackQueryParamsPartnerItemTypeField"';
  }
  if (val == 'channel') {
    return 'channel';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeGetIntegrationMappingSlackQueryParamsBoxItemTypeField(
  val: GetIntegrationMappingSlackQueryParamsBoxItemTypeField
): SerializedData {
  return val;
}
export function deserializeGetIntegrationMappingSlackQueryParamsBoxItemTypeField(
  val: any
): GetIntegrationMappingSlackQueryParamsBoxItemTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "GetIntegrationMappingSlackQueryParamsBoxItemTypeField"';
  }
  if (val == 'folder') {
    return 'folder';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeUpdateIntegrationMappingSlackByIdRequestBody(
  val: UpdateIntegrationMappingSlackByIdRequestBody
): SerializedData {
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
export function deserializeUpdateIntegrationMappingSlackByIdRequestBody(
  val: any
): UpdateIntegrationMappingSlackByIdRequestBody {
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
  } satisfies UpdateIntegrationMappingSlackByIdRequestBody;
}
