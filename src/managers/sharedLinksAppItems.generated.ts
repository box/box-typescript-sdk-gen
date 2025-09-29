import { serializeAppItem } from '../schemas/appItem.generated';
import { deserializeAppItem } from '../schemas/appItem.generated';
import { serializeClientError } from '../schemas/clientError.generated';
import { deserializeClientError } from '../schemas/clientError.generated';
import { ResponseFormat } from '../networking/fetchOptions.generated';
import { AppItem } from '../schemas/appItem.generated';
import { ClientError } from '../schemas/clientError.generated';
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
export class FindAppItemForSharedLinkOptionals {
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<FindAppItemForSharedLinkOptionals, 'cancellationToken'> &
      Partial<Pick<FindAppItemForSharedLinkOptionals, 'cancellationToken'>>,
  ) {
    if (fields.cancellationToken !== undefined) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface FindAppItemForSharedLinkOptionalsInput {
  readonly cancellationToken?: undefined | CancellationToken;
}
export class FindAppItemForSharedLinkHeaders {
  /**
   * A header containing the shared link and optional password for the
   * shared link.
   *
   * The format for this header is `shared_link=[link]&shared_link_password=[password]`. */
  readonly boxapi!: string;
  /**
   * Extra headers that will be included in the HTTP request. */
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<FindAppItemForSharedLinkHeaders, 'extraHeaders'> &
      Partial<Pick<FindAppItemForSharedLinkHeaders, 'extraHeaders'>>,
  ) {
    if (fields.boxapi !== undefined) {
      this.boxapi = fields.boxapi;
    }
    if (fields.extraHeaders !== undefined) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface FindAppItemForSharedLinkHeadersInput {
  /**
   * A header containing the shared link and optional password for the
   * shared link.
   *
   * The format for this header is `shared_link=[link]&shared_link_password=[password]`. */
  readonly boxapi: string;
  /**
   * Extra headers that will be included in the HTTP request. */
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class SharedLinksAppItemsManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields: Omit<
      SharedLinksAppItemsManager,
      'networkSession' | 'findAppItemForSharedLink'
    > &
      Partial<Pick<SharedLinksAppItemsManager, 'networkSession'>>,
  ) {
    if (fields.auth !== undefined) {
      this.auth = fields.auth;
    }
    if (fields.networkSession !== undefined) {
      this.networkSession = fields.networkSession;
    }
  }
  /**
   * Returns the app item represented by a shared link.
   *
   * The link can originate from the current enterprise or another.
   * @param {FindAppItemForSharedLinkHeadersInput} headersInput Headers of findAppItemForSharedLink method
   * @param {FindAppItemForSharedLinkOptionalsInput} optionalsInput
   * @returns {Promise<AppItem>}
   */
  async findAppItemForSharedLink(
    headersInput: FindAppItemForSharedLinkHeadersInput,
    optionalsInput: FindAppItemForSharedLinkOptionalsInput = {},
  ): Promise<AppItem> {
    const headers: FindAppItemForSharedLinkHeaders =
      new FindAppItemForSharedLinkHeaders({
        boxapi: headersInput.boxapi,
        extraHeaders: headersInput.extraHeaders,
      });
    const optionals: FindAppItemForSharedLinkOptionals =
      new FindAppItemForSharedLinkOptionals({
        cancellationToken: optionalsInput.cancellationToken,
      });
    const cancellationToken: any = optionals.cancellationToken;
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ...{ ['boxapi']: toString(headers.boxapi) as string },
      ...headers.extraHeaders,
    });
    const response: FetchResponse =
      await this.networkSession.networkClient.fetch(
        new FetchOptions({
          url: ''.concat(
            this.networkSession.baseUrls.baseUrl,
            '/2.0/shared_items#app_items',
          ) as string,
          method: 'GET',
          headers: headersMap,
          responseFormat: 'json' as ResponseFormat,
          auth: this.auth,
          networkSession: this.networkSession,
          cancellationToken: cancellationToken,
        }),
      );
    return {
      ...deserializeAppItem(response.data!),
      rawData: response.data!,
    };
  }
}
export interface SharedLinksAppItemsManagerInput {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
}
