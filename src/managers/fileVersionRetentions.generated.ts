import { serializeFileVersionRetentions } from '../schemas/fileVersionRetentions.generated.js';
import { deserializeFileVersionRetentions } from '../schemas/fileVersionRetentions.generated.js';
import { serializeClientError } from '../schemas/clientError.generated.js';
import { deserializeClientError } from '../schemas/clientError.generated.js';
import { serializeFileVersionRetention } from '../schemas/fileVersionRetention.generated.js';
import { deserializeFileVersionRetention } from '../schemas/fileVersionRetention.generated.js';
import { FileVersionRetentions } from '../schemas/fileVersionRetentions.generated.js';
import { ClientError } from '../schemas/clientError.generated.js';
import { FileVersionRetention } from '../schemas/fileVersionRetention.generated.js';
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
export class GetFileVersionRetentionByIdOptionals {
  readonly headers: GetFileVersionRetentionByIdHeaders =
    new GetFileVersionRetentionByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      GetFileVersionRetentionByIdOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          GetFileVersionRetentionByIdOptionals,
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
export interface GetFileVersionRetentionByIdOptionalsInput {
  readonly headers?: GetFileVersionRetentionByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export type GetFileVersionRetentionsQueryParamsDispositionActionField =
  | 'permanently_delete'
  | 'remove_retention';
export interface GetFileVersionRetentionsQueryParams {
  readonly fileId?: string;
  readonly fileVersionId?: string;
  readonly policyId?: string;
  readonly dispositionAction?: GetFileVersionRetentionsQueryParamsDispositionActionField;
  readonly dispositionBefore?: string;
  readonly dispositionAfter?: string;
  readonly limit?: number;
  readonly marker?: string;
}
export class GetFileVersionRetentionsHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<GetFileVersionRetentionsHeaders, 'extraHeaders'> &
      Partial<Pick<GetFileVersionRetentionsHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetFileVersionRetentionsHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class GetFileVersionRetentionByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<GetFileVersionRetentionByIdHeaders, 'extraHeaders'> &
      Partial<Pick<GetFileVersionRetentionByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetFileVersionRetentionByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class FileVersionRetentionsManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields: Omit<
      FileVersionRetentionsManager,
      | 'networkSession'
      | 'getFileVersionRetentions'
      | 'getFileVersionRetentionById'
    > &
      Partial<Pick<FileVersionRetentionsManager, 'networkSession'>>
  ) {
    if (fields.auth) {
      this.auth = fields.auth;
    }
    if (fields.networkSession) {
      this.networkSession = fields.networkSession;
    }
  }
  async getFileVersionRetentions(
    queryParams: GetFileVersionRetentionsQueryParams = {} satisfies GetFileVersionRetentionsQueryParams,
    headersInput: GetFileVersionRetentionsHeadersInput = new GetFileVersionRetentionsHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<FileVersionRetentions> {
    const headers: GetFileVersionRetentionsHeaders =
      new GetFileVersionRetentionsHeaders({
        extraHeaders: headersInput.extraHeaders,
      });
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['file_id']: toString(queryParams.fileId) as string,
      ['file_version_id']: toString(queryParams.fileVersionId) as string,
      ['policy_id']: toString(queryParams.policyId) as string,
      ['disposition_action']: toString(queryParams.dispositionAction) as string,
      ['disposition_before']: toString(queryParams.dispositionBefore) as string,
      ['disposition_after']: toString(queryParams.dispositionAfter) as string,
      ['limit']: toString(queryParams.limit) as string,
      ['marker']: toString(queryParams.marker) as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/2.0/file_version_retentions'
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
    return deserializeFileVersionRetentions(response.data);
  }
  async getFileVersionRetentionById(
    fileVersionRetentionId: string,
    optionalsInput: GetFileVersionRetentionByIdOptionalsInput = {}
  ): Promise<FileVersionRetention> {
    const optionals: GetFileVersionRetentionByIdOptionals =
      new GetFileVersionRetentionByIdOptionals({
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
        '/2.0/file_version_retentions/',
        toString(fileVersionRetentionId) as string
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
    return deserializeFileVersionRetention(response.data);
  }
}
export interface FileVersionRetentionsManagerInput {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
}
export function serializeGetFileVersionRetentionsQueryParamsDispositionActionField(
  val: GetFileVersionRetentionsQueryParamsDispositionActionField
): SerializedData {
  return val;
}
export function deserializeGetFileVersionRetentionsQueryParamsDispositionActionField(
  val: SerializedData
): GetFileVersionRetentionsQueryParamsDispositionActionField {
  if (val == 'permanently_delete') {
    return val;
  }
  if (val == 'remove_retention') {
    return val;
  }
  throw new BoxSdkError({
    message:
      "Can't deserialize GetFileVersionRetentionsQueryParamsDispositionActionField",
  });
}
