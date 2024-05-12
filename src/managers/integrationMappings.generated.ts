import { serializeIntegrationMappings } from '../schemas/integrationMappings.generated.js';
import { deserializeIntegrationMappings } from '../schemas/integrationMappings.generated.js';
import { serializeClientError } from '../schemas/clientError.generated.js';
import { deserializeClientError } from '../schemas/clientError.generated.js';
import { serializeIntegrationMapping } from '../schemas/integrationMapping.generated.js';
import { deserializeIntegrationMapping } from '../schemas/integrationMapping.generated.js';
import { serializeIntegrationMappingSlackCreateRequest } from '../schemas/integrationMappingSlackCreateRequest.generated.js';
import { deserializeIntegrationMappingSlackCreateRequest } from '../schemas/integrationMappingSlackCreateRequest.generated.js';
import { serializeIntegrationMappingBoxItemSlack } from '../schemas/integrationMappingBoxItemSlack.generated.js';
import { deserializeIntegrationMappingBoxItemSlack } from '../schemas/integrationMappingBoxItemSlack.generated.js';
import { serializeIntegrationMappingSlackOptions } from '../schemas/integrationMappingSlackOptions.generated.js';
import { deserializeIntegrationMappingSlackOptions } from '../schemas/integrationMappingSlackOptions.generated.js';
import { IntegrationMappings } from '../schemas/integrationMappings.generated.js';
import { ClientError } from '../schemas/clientError.generated.js';
import { IntegrationMapping } from '../schemas/integrationMapping.generated.js';
import { IntegrationMappingSlackCreateRequest } from '../schemas/integrationMappingSlackCreateRequest.generated.js';
import { IntegrationMappingBoxItemSlack } from '../schemas/integrationMappingBoxItemSlack.generated.js';
import { IntegrationMappingSlackOptions } from '../schemas/integrationMappingSlackOptions.generated.js';
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
export class CreateSlackIntegrationMappingOptionals {
  readonly headers: CreateSlackIntegrationMappingHeaders =
    new CreateSlackIntegrationMappingHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      CreateSlackIntegrationMappingOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          CreateSlackIntegrationMappingOptionals,
          'headers' | 'cancellationToken'
        >
      >
  ) {
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface CreateSlackIntegrationMappingOptionalsInput {
  readonly headers?: CreateSlackIntegrationMappingHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class UpdateSlackIntegrationMappingByIdOptionals {
  readonly requestBody: UpdateSlackIntegrationMappingByIdRequestBody =
    {} satisfies UpdateSlackIntegrationMappingByIdRequestBody;
  readonly headers: UpdateSlackIntegrationMappingByIdHeaders =
    new UpdateSlackIntegrationMappingByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      UpdateSlackIntegrationMappingByIdOptionals,
      'requestBody' | 'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          UpdateSlackIntegrationMappingByIdOptionals,
          'requestBody' | 'headers' | 'cancellationToken'
        >
      >
  ) {
    if (fields.requestBody) {
      this.requestBody = fields.requestBody;
    }
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface UpdateSlackIntegrationMappingByIdOptionalsInput {
  readonly requestBody?: UpdateSlackIntegrationMappingByIdRequestBody;
  readonly headers?: UpdateSlackIntegrationMappingByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class DeleteSlackIntegrationMappingByIdOptionals {
  readonly headers: DeleteSlackIntegrationMappingByIdHeaders =
    new DeleteSlackIntegrationMappingByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      DeleteSlackIntegrationMappingByIdOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          DeleteSlackIntegrationMappingByIdOptionals,
          'headers' | 'cancellationToken'
        >
      >
  ) {
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface DeleteSlackIntegrationMappingByIdOptionalsInput {
  readonly headers?: DeleteSlackIntegrationMappingByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
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
    fields: Omit<GetSlackIntegrationMappingHeaders, 'extraHeaders'> &
      Partial<Pick<GetSlackIntegrationMappingHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
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
    fields: Omit<CreateSlackIntegrationMappingHeaders, 'extraHeaders'> &
      Partial<Pick<CreateSlackIntegrationMappingHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
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
    fields: Omit<UpdateSlackIntegrationMappingByIdHeaders, 'extraHeaders'> &
      Partial<Pick<UpdateSlackIntegrationMappingByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
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
    fields: Omit<DeleteSlackIntegrationMappingByIdHeaders, 'extraHeaders'> &
      Partial<Pick<DeleteSlackIntegrationMappingByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
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
    fields: Omit<
      IntegrationMappingsManager,
      | 'networkSession'
      | 'getSlackIntegrationMapping'
      | 'createSlackIntegrationMapping'
      | 'updateSlackIntegrationMappingById'
      | 'deleteSlackIntegrationMappingById'
    > &
      Partial<Pick<IntegrationMappingsManager, 'networkSession'>>
  ) {
    if (fields.auth) {
      this.auth = fields.auth;
    }
    if (fields.networkSession) {
      this.networkSession = fields.networkSession;
    }
  }
  async getSlackIntegrationMapping(
    queryParams: GetSlackIntegrationMappingQueryParams = {} satisfies GetSlackIntegrationMappingQueryParams,
    headersInput: GetSlackIntegrationMappingHeadersInput = new GetSlackIntegrationMappingHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<IntegrationMappings> {
    const headers: GetSlackIntegrationMappingHeaders =
      new GetSlackIntegrationMappingHeaders({
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
    optionalsInput: CreateSlackIntegrationMappingOptionalsInput = {}
  ): Promise<IntegrationMapping> {
    const optionals: CreateSlackIntegrationMappingOptionals =
      new CreateSlackIntegrationMappingOptionals({
        headers: optionalsInput.headers,
        cancellationToken: optionalsInput.cancellationToken,
      });
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
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
    optionalsInput: UpdateSlackIntegrationMappingByIdOptionalsInput = {}
  ): Promise<IntegrationMapping> {
    const optionals: UpdateSlackIntegrationMappingByIdOptionals =
      new UpdateSlackIntegrationMappingByIdOptionals({
        requestBody: optionalsInput.requestBody,
        headers: optionalsInput.headers,
        cancellationToken: optionalsInput.cancellationToken,
      });
    const requestBody: any = optionals.requestBody;
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
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
    optionalsInput: DeleteSlackIntegrationMappingByIdOptionalsInput = {}
  ): Promise<undefined> {
    const optionals: DeleteSlackIntegrationMappingByIdOptionals =
      new DeleteSlackIntegrationMappingByIdOptionals({
        headers: optionalsInput.headers,
        cancellationToken: optionalsInput.cancellationToken,
      });
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
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
  val: GetSlackIntegrationMappingQueryParamsPartnerItemTypeField
): SerializedData {
  return val;
}
export function deserializeGetSlackIntegrationMappingQueryParamsPartnerItemTypeField(
  val: SerializedData
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
  val: GetSlackIntegrationMappingQueryParamsBoxItemTypeField
): SerializedData {
  return val;
}
export function deserializeGetSlackIntegrationMappingQueryParamsBoxItemTypeField(
  val: SerializedData
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
  val: UpdateSlackIntegrationMappingByIdRequestBody
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
  val: SerializedData
): UpdateSlackIntegrationMappingByIdRequestBody {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a map for "UpdateSlackIntegrationMappingByIdRequestBody"',
    });
  }
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
