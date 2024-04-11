import { serializeFileVersionRetentions } from '../schemas.generated.js';
import { deserializeFileVersionRetentions } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { serializeFileVersionRetention } from '../schemas.generated.js';
import { deserializeFileVersionRetention } from '../schemas.generated.js';
import { FileVersionRetentions } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { FileVersionRetention } from '../schemas.generated.js';
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
    fields:
      | Omit<GetFileVersionRetentionsHeaders, 'extraHeaders'>
      | Partial<Pick<GetFileVersionRetentionsHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
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
    fields:
      | Omit<GetFileVersionRetentionByIdHeaders, 'extraHeaders'>
      | Partial<Pick<GetFileVersionRetentionByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
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
    fields:
      | Omit<
          FileVersionRetentionsManager,
          | 'networkSession'
          | 'getFileVersionRetentions'
          | 'getFileVersionRetentionById'
        >
      | Partial<Pick<FileVersionRetentionsManager, 'networkSession'>>
  ) {
    Object.assign(this, fields);
  }
  async getFileVersionRetentions(
    queryParams: GetFileVersionRetentionsQueryParams = {} satisfies GetFileVersionRetentionsQueryParams,
    headersInput: GetFileVersionRetentionsHeadersInput = new GetFileVersionRetentionsHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<FileVersionRetentions> {
    const headers: any = new GetFileVersionRetentionsHeaders({
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
        '/file_version_retentions'
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
    headersInput: GetFileVersionRetentionByIdHeadersInput = new GetFileVersionRetentionByIdHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<FileVersionRetention> {
    const headers: any = new GetFileVersionRetentionByIdHeaders({
      extraHeaders: headersInput.extraHeaders,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/file_version_retentions/',
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
  val: any
): SerializedData {
  return val;
}
export function deserializeGetFileVersionRetentionsQueryParamsDispositionActionField(
  val: any
): GetFileVersionRetentionsQueryParamsDispositionActionField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "GetFileVersionRetentionsQueryParamsDispositionActionField"',
    });
  }
  if (val == 'permanently_delete') {
    return 'permanently_delete';
  }
  if (val == 'remove_retention') {
    return 'remove_retention';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
