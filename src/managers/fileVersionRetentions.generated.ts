import { serializeFileVersionRetentions } from '../schemas.generated.js';
import { deserializeFileVersionRetentions } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { serializeFileVersionRetention } from '../schemas.generated.js';
import { deserializeFileVersionRetention } from '../schemas.generated.js';
import { FileVersionRetentions } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { FileVersionRetention } from '../schemas.generated.js';
import { Authentication } from '../auth.js';
import { NetworkSession } from '../network.generated.js';
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
    headers: GetFileVersionRetentionsHeaders = new GetFileVersionRetentionsHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<FileVersionRetentions> {
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
    headers: GetFileVersionRetentionByIdHeaders = new GetFileVersionRetentionByIdHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<FileVersionRetention> {
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
export function serializeGetFileVersionRetentionsQueryParamsDispositionActionField(
  val: GetFileVersionRetentionsQueryParamsDispositionActionField
): SerializedData {
  return val;
}
export function deserializeGetFileVersionRetentionsQueryParamsDispositionActionField(
  val: any
): GetFileVersionRetentionsQueryParamsDispositionActionField {
  if (!sdIsString(val)) {
    throw new Error(
      String(
        'Expecting a string for "GetFileVersionRetentionsQueryParamsDispositionActionField"'
      )
    );
  }
  if (val == 'permanently_delete') {
    return 'permanently_delete';
  }
  if (val == 'remove_retention') {
    return 'remove_retention';
  }
  throw new Error(String(''.concat('Invalid value: ', val) as string));
}
