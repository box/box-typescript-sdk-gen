import { serializeHubItemsV2025R0 } from '../schemas/v2025R0/hubItemsV2025R0.generated';
import { deserializeHubItemsV2025R0 } from '../schemas/v2025R0/hubItemsV2025R0.generated';
import { serializeClientErrorV2025R0 } from '../schemas/v2025R0/clientErrorV2025R0.generated';
import { deserializeClientErrorV2025R0 } from '../schemas/v2025R0/clientErrorV2025R0.generated';
import { serializeBoxVersionHeaderV2025R0 } from '../parameters/v2025R0/boxVersionHeaderV2025R0.generated';
import { deserializeBoxVersionHeaderV2025R0 } from '../parameters/v2025R0/boxVersionHeaderV2025R0.generated';
import { serializeHubItemsManageResponseV2025R0 } from '../schemas/v2025R0/hubItemsManageResponseV2025R0.generated';
import { deserializeHubItemsManageResponseV2025R0 } from '../schemas/v2025R0/hubItemsManageResponseV2025R0.generated';
import { serializeHubItemsManageRequestV2025R0 } from '../schemas/v2025R0/hubItemsManageRequestV2025R0.generated';
import { deserializeHubItemsManageRequestV2025R0 } from '../schemas/v2025R0/hubItemsManageRequestV2025R0.generated';
import { ResponseFormat } from '../networking/fetchOptions.generated';
import { HubItemsV2025R0 } from '../schemas/v2025R0/hubItemsV2025R0.generated';
import { ClientErrorV2025R0 } from '../schemas/v2025R0/clientErrorV2025R0.generated';
import { BoxVersionHeaderV2025R0 } from '../parameters/v2025R0/boxVersionHeaderV2025R0.generated';
import { HubItemsManageResponseV2025R0 } from '../schemas/v2025R0/hubItemsManageResponseV2025R0.generated';
import { HubItemsManageRequestV2025R0 } from '../schemas/v2025R0/hubItemsManageRequestV2025R0.generated';
import { BoxSdkError } from '../box/errors';
import { Authentication } from '../networking/auth.generated';
import { NetworkSession } from '../networking/network.generated';
import { FetchOptions } from '../networking/fetchOptions.generated';
import { FetchResponse } from '../networking/fetchResponse.generated';
import { prepareParams } from '../internal/utils';
import { toString } from '../internal/utils';
import { ByteStream } from '../internal/utils';
import { CancellationToken } from '../internal/utils';
import { sdToJson } from '../serialization/json';
import { SerializedData } from '../serialization/json';
import { sdIsEmpty } from '../serialization/json';
import { sdIsBoolean } from '../serialization/json';
import { sdIsNumber } from '../serialization/json';
import { sdIsString } from '../serialization/json';
import { sdIsList } from '../serialization/json';
import { sdIsMap } from '../serialization/json';
export class GetHubItemsV2025R0Optionals {
  readonly headers: GetHubItemsV2025R0Headers = new GetHubItemsV2025R0Headers(
    {},
  );
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<GetHubItemsV2025R0Optionals, 'headers' | 'cancellationToken'> &
      Partial<
        Pick<GetHubItemsV2025R0Optionals, 'headers' | 'cancellationToken'>
      >,
  ) {
    if (fields.headers !== undefined) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken !== undefined) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface GetHubItemsV2025R0OptionalsInput {
  readonly headers?: GetHubItemsV2025R0Headers;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class ManageHubItemsV2025R0Optionals {
  readonly headers: ManageHubItemsV2025R0Headers =
    new ManageHubItemsV2025R0Headers({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      ManageHubItemsV2025R0Optionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<ManageHubItemsV2025R0Optionals, 'headers' | 'cancellationToken'>
      >,
  ) {
    if (fields.headers !== undefined) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken !== undefined) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface ManageHubItemsV2025R0OptionalsInput {
  readonly headers?: ManageHubItemsV2025R0Headers;
  readonly cancellationToken?: undefined | CancellationToken;
}
export interface GetHubItemsV2025R0QueryParams {
  /**
   * The unique identifier that represent a hub.
   *
   * The ID for any hub can be determined
   * by visiting this hub in the web application
   * and copying the ID from the URL. For example,
   * for the URL `https://*.app.box.com/hubs/123`
   * the `hub_id` is `123`. */
  readonly hubId: string;
  /**
   * Defines the position marker at which to begin returning results. This is
   * used when paginating using marker-based pagination.
   *
   * This requires `usemarker` to be set to `true`. */
  readonly marker?: string;
  /**
   * The maximum number of items to return per page. */
  readonly limit?: number;
}
export class GetHubItemsV2025R0Headers {
  /**
   * Version header. */
  readonly boxVersion: BoxVersionHeaderV2025R0 =
    '2025.0' as BoxVersionHeaderV2025R0;
  /**
   * Extra headers that will be included in the HTTP request. */
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<GetHubItemsV2025R0Headers, 'boxVersion' | 'extraHeaders'> &
      Partial<Pick<GetHubItemsV2025R0Headers, 'boxVersion' | 'extraHeaders'>>,
  ) {
    if (fields.boxVersion !== undefined) {
      this.boxVersion = fields.boxVersion;
    }
    if (fields.extraHeaders !== undefined) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetHubItemsV2025R0HeadersInput {
  /**
   * Version header. */
  readonly boxVersion?: BoxVersionHeaderV2025R0;
  /**
   * Extra headers that will be included in the HTTP request. */
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class ManageHubItemsV2025R0Headers {
  /**
   * Version header. */
  readonly boxVersion: BoxVersionHeaderV2025R0 =
    '2025.0' as BoxVersionHeaderV2025R0;
  /**
   * Extra headers that will be included in the HTTP request. */
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<ManageHubItemsV2025R0Headers, 'boxVersion' | 'extraHeaders'> &
      Partial<
        Pick<ManageHubItemsV2025R0Headers, 'boxVersion' | 'extraHeaders'>
      >,
  ) {
    if (fields.boxVersion !== undefined) {
      this.boxVersion = fields.boxVersion;
    }
    if (fields.extraHeaders !== undefined) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface ManageHubItemsV2025R0HeadersInput {
  /**
   * Version header. */
  readonly boxVersion?: BoxVersionHeaderV2025R0;
  /**
   * Extra headers that will be included in the HTTP request. */
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class HubItemsManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields: Omit<
      HubItemsManager,
      'networkSession' | 'getHubItemsV2025R0' | 'manageHubItemsV2025R0'
    > &
      Partial<Pick<HubItemsManager, 'networkSession'>>,
  ) {
    if (fields.auth !== undefined) {
      this.auth = fields.auth;
    }
    if (fields.networkSession !== undefined) {
      this.networkSession = fields.networkSession;
    }
  }
  /**
   * Retrieves all items associated with a Box Hub.
   * @param {GetHubItemsV2025R0QueryParams} queryParams Query parameters of getHubItemsV2025R0 method
   * @param {GetHubItemsV2025R0OptionalsInput} optionalsInput
   * @returns {Promise<HubItemsV2025R0>}
   */
  async getHubItemsV2025R0(
    queryParams: GetHubItemsV2025R0QueryParams,
    optionalsInput: GetHubItemsV2025R0OptionalsInput = {},
  ): Promise<HubItemsV2025R0> {
    const optionals: GetHubItemsV2025R0Optionals =
      new GetHubItemsV2025R0Optionals({
        headers: optionalsInput.headers,
        cancellationToken: optionalsInput.cancellationToken,
      });
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['hub_id']: toString(queryParams.hubId) as string,
      ['marker']: toString(queryParams.marker) as string,
      ['limit']: toString(queryParams.limit) as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ...{ ['box-version']: toString(headers.boxVersion) as string },
      ...headers.extraHeaders,
    });
    const response: FetchResponse =
      await this.networkSession.networkClient.fetch(
        new FetchOptions({
          url: ''.concat(
            this.networkSession.baseUrls.baseUrl,
            '/2.0/hub_items',
          ) as string,
          method: 'GET',
          params: queryParamsMap,
          headers: headersMap,
          responseFormat: 'json' as ResponseFormat,
          auth: this.auth,
          networkSession: this.networkSession,
          cancellationToken: cancellationToken,
        }),
      );
    return {
      ...deserializeHubItemsV2025R0(response.data!),
      rawData: response.data!,
    };
  }
  /**
     * Adds and/or removes Box Hub items from a Box Hub.
     * @param {string} hubId The unique identifier that represent a hub.
    
    The ID for any hub can be determined
    by visiting this hub in the web application
    and copying the ID from the URL. For example,
    for the URL `https://*.app.box.com/hubs/123`
    the `hub_id` is `123`.
    Example: "12345"
     * @param {HubItemsManageRequestV2025R0} requestBody Request body of manageHubItemsV2025R0 method
     * @param {ManageHubItemsV2025R0OptionalsInput} optionalsInput
     * @returns {Promise<HubItemsManageResponseV2025R0>}
     */
  async manageHubItemsV2025R0(
    hubId: string,
    requestBody: HubItemsManageRequestV2025R0,
    optionalsInput: ManageHubItemsV2025R0OptionalsInput = {},
  ): Promise<HubItemsManageResponseV2025R0> {
    const optionals: ManageHubItemsV2025R0Optionals =
      new ManageHubItemsV2025R0Optionals({
        headers: optionalsInput.headers,
        cancellationToken: optionalsInput.cancellationToken,
      });
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ...{ ['box-version']: toString(headers.boxVersion) as string },
      ...headers.extraHeaders,
    });
    const response: FetchResponse =
      await this.networkSession.networkClient.fetch(
        new FetchOptions({
          url: ''.concat(
            this.networkSession.baseUrls.baseUrl,
            '/2.0/hubs/',
            toString(hubId) as string,
            '/manage_items',
          ) as string,
          method: 'POST',
          headers: headersMap,
          data: serializeHubItemsManageRequestV2025R0(requestBody),
          contentType: 'application/json',
          responseFormat: 'json' as ResponseFormat,
          auth: this.auth,
          networkSession: this.networkSession,
          cancellationToken: cancellationToken,
        }),
      );
    return {
      ...deserializeHubItemsManageResponseV2025R0(response.data!),
      rawData: response.data!,
    };
  }
}
export interface HubItemsManagerInput {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
}
