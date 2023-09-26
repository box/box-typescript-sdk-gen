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
import { NetworkSession } from '../network.js';
import { prepareParams } from '../utils.js';
import { toString } from '../utils.js';
import { ByteStream } from '../utils.js';
import { fetch } from '../fetch.js';
import { FetchOptions } from '../fetch.js';
import { FetchResponse } from '../fetch.js';
import { deserializeJson } from '../json.js';
import { Json } from '../json.js';
import { isJson } from '../json.js';
export type GetFileVersionRetentionsQueryParamsArgDispositionActionField =
  | 'permanently_delete'
  | 'remove_retention';
export interface GetFileVersionRetentionsQueryParamsArg {
  readonly fileId?: string;
  readonly fileVersionId?: string;
  readonly policyId?: string;
  readonly dispositionAction?: GetFileVersionRetentionsQueryParamsArgDispositionActionField;
  readonly dispositionBefore?: string;
  readonly dispositionAfter?: string;
  readonly limit?: number;
  readonly marker?: string;
}
export class GetFileVersionRetentionsHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(fields: GetFileVersionRetentionsHeadersArg) {
    Object.assign(this, fields);
  }
}
export class GetFileVersionRetentionByIdHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(fields: GetFileVersionRetentionByIdHeadersArg) {
    Object.assign(this, fields);
  }
}
export class FileVersionRetentionsManager {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
  constructor(
    fields: Omit<
      FileVersionRetentionsManager,
      'getFileVersionRetentions' | 'getFileVersionRetentionById'
    >
  ) {
    Object.assign(this, fields);
  }
  async getFileVersionRetentions(
    queryParams: GetFileVersionRetentionsQueryParamsArg = {} satisfies GetFileVersionRetentionsQueryParamsArg,
    headers: GetFileVersionRetentionsHeadersArg = new GetFileVersionRetentionsHeadersArg(
      {}
    )
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
      ''.concat('https://api.box.com/2.0/file_version_retentions') as string,
      {
        method: 'GET',
        params: queryParamsMap,
        headers: headersMap,
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeFileVersionRetentions(deserializeJson(response.text));
  }
  async getFileVersionRetentionById(
    fileVersionRetentionId: string,
    headers: GetFileVersionRetentionByIdHeadersArg = new GetFileVersionRetentionByIdHeadersArg(
      {}
    )
  ): Promise<FileVersionRetention> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/file_version_retentions/',
        toString(fileVersionRetentionId) as string
      ) as string,
      {
        method: 'GET',
        headers: headersMap,
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeFileVersionRetention(deserializeJson(response.text));
  }
}
export function serializeGetFileVersionRetentionsQueryParamsArgDispositionActionField(
  val: GetFileVersionRetentionsQueryParamsArgDispositionActionField
): Json {
  return val;
}
export function deserializeGetFileVersionRetentionsQueryParamsArgDispositionActionField(
  val: any
): GetFileVersionRetentionsQueryParamsArgDispositionActionField {
  if (!isJson(val, 'string')) {
    throw 'Expecting a string for "GetFileVersionRetentionsQueryParamsArgDispositionActionField"';
  }
  if (val == 'permanently_delete') {
    return 'permanently_delete';
  }
  if (val == 'remove_retention') {
    return 'remove_retention';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
