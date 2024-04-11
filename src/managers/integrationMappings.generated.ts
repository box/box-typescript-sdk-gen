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
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { ByteStream } from '../internal/utils.js';
import { CancellationToken } from '../internal/utils.js';
import { sdToJson } from '../serialization/json.js';
import { FetchOptions } from '../networking/fetch.js';
import { FetchResponse } from '../networking/fetch.js';
import { fetch } from '../networking/fetch.js';
import { SerializedData } from '../serialization/json.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type GetSlackIntegrationMappingQueryParamsPartnerItemTypeField =
  'channel';
export type GetSlackIntegrationMappingQueryParamsBoxItemTypeField = 'folder';
export interface GetSlackIntegrationMappingQueryParams {
  readonly marker?: string;
  readonly limit?: number;
  readonly partnerItemType?: GetSlackIntegrationMappingQueryParamsPartnerItemTypeField;
  readonly partnerItemId?: string;
  readonly boxItemId?: string;
  readonly boxItemType?: GetSlackIntegrationMappingQueryParamsBoxItemTypeField;
  readonly isManuallyCreated?: boolean;
}
export class GetSlackIntegrationMappingHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetSlackIntegrationMappingHeaders, 'extraHeaders'>
      | Partial<Pick<GetSlackIntegrationMappingHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface GetSlackIntegrationMappingHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class CreateSlackIntegrationMappingHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateSlackIntegrationMappingHeaders, 'extraHeaders'>
      | Partial<Pick<CreateSlackIntegrationMappingHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface CreateSlackIntegrationMappingHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export interface UpdateSlackIntegrationMappingByIdRequestBody {
  readonly boxItem?: IntegrationMappingBoxItemSlack;
  readonly options?: IntegrationMappingSlackOptions;
}
export class UpdateSlackIntegrationMappingByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<UpdateSlackIntegrationMappingByIdHeaders, 'extraHeaders'>
      | Partial<Pick<UpdateSlackIntegrationMappingByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface UpdateSlackIntegrationMappingByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class DeleteSlackIntegrationMappingByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<DeleteSlackIntegrationMappingByIdHeaders, 'extraHeaders'>
      | Partial<Pick<DeleteSlackIntegrationMappingByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface DeleteSlackIntegrationMappingByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class IntegrationMappingsManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields:
      | Omit<
          IntegrationMappingsManager,
          | 'networkSession'
          | 'getSlackIntegrationMapping'
          | 'createSlackIntegrationMapping'
          | 'updateSlackIntegrationMappingById'
          | 'deleteSlackIntegrationMappingById'
        >
      | Partial<Pick<IntegrationMappingsManager, 'networkSession'>>
  ) {
    Object.assign(this, fields);
  }
  async getSlackIntegrationMapping(
    queryParams: GetSlackIntegrationMappingQueryParams = {} satisfies GetSlackIntegrationMappingQueryParams,
    headersInput: GetSlackIntegrationMappingHeadersInput = new GetSlackIntegrationMappingHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<IntegrationMappings> {
    const headers: any = new GetSlackIntegrationMappingHeaders({
      extraHeaders: headersInput.extraHeaders,
    });
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
  async createSlackIntegrationMapping(
    requestBody: IntegrationMappingSlackCreateRequest,
    headersInput: CreateSlackIntegrationMappingHeadersInput = new CreateSlackIntegrationMappingHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<IntegrationMapping> {
    const headers: any = new CreateSlackIntegrationMappingHeaders({
      extraHeaders: headersInput.extraHeaders,
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
  async updateSlackIntegrationMappingById(
    integrationMappingId: string,
    requestBody: UpdateSlackIntegrationMappingByIdRequestBody = {} satisfies UpdateSlackIntegrationMappingByIdRequestBody,
    headersInput: UpdateSlackIntegrationMappingByIdHeadersInput = new UpdateSlackIntegrationMappingByIdHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<IntegrationMapping> {
    const headers: any = new UpdateSlackIntegrationMappingByIdHeaders({
      extraHeaders: headersInput.extraHeaders,
    });
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
        data: serializeUpdateSlackIntegrationMappingByIdRequestBody(
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
  async deleteSlackIntegrationMappingById(
    integrationMappingId: string,
    headersInput: DeleteSlackIntegrationMappingByIdHeadersInput = new DeleteSlackIntegrationMappingByIdHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<undefined> {
    const headers: any = new DeleteSlackIntegrationMappingByIdHeaders({
      extraHeaders: headersInput.extraHeaders,
    });
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
export interface IntegrationMappingsManagerInput {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
}
export function serializeGetSlackIntegrationMappingQueryParamsPartnerItemTypeField(
  val: any
): SerializedData {
  return val;
}
export function deserializeGetSlackIntegrationMappingQueryParamsPartnerItemTypeField(
  val: any
): GetSlackIntegrationMappingQueryParamsPartnerItemTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "GetSlackIntegrationMappingQueryParamsPartnerItemTypeField"',
    });
  }
  if (val == 'channel') {
    return 'channel';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeGetSlackIntegrationMappingQueryParamsBoxItemTypeField(
  val: any
): SerializedData {
  return val;
}
export function deserializeGetSlackIntegrationMappingQueryParamsBoxItemTypeField(
  val: any
): GetSlackIntegrationMappingQueryParamsBoxItemTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "GetSlackIntegrationMappingQueryParamsBoxItemTypeField"',
    });
  }
  if (val == 'folder') {
    return 'folder';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeUpdateSlackIntegrationMappingByIdRequestBody(
  val: any
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
export function deserializeUpdateSlackIntegrationMappingByIdRequestBody(
  val: any
): UpdateSlackIntegrationMappingByIdRequestBody {
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
  } satisfies UpdateSlackIntegrationMappingByIdRequestBody;
}
