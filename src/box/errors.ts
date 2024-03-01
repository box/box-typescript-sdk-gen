import { SerializedData } from '../serialization/json.js';

export class BoxSdkError extends Error {
  readonly message!: string;
  readonly timestamp?: string;
  readonly error?: Error;
  readonly name: string = 'BoxSDKError';
  constructor(fields: {
    message: string;
    timestamp?: string;
    error?: Error;
    name?: string;
  }) {
    super(fields.message);
    Object.assign(this, fields);
    this.message = JSON.stringify(fields, undefined, 2);
  }
}
export interface RequestInfo {
  readonly method: string;
  readonly url: string;
  readonly queryParams: {
    readonly [key: string]: string;
  };
  readonly headers: {
    readonly [key: string]: string;
  };
  readonly body?: any;
}
export interface ResponseInfo {
  readonly statusCode: number;
  readonly headers: {
    readonly [key: string]: string;
  };
  readonly body?: SerializedData;
  readonly rawBody?: string;
  readonly code?: string;
  readonly contextInfo?: {
    readonly [key: string]: any;
  };
  readonly requestId?: string;
  readonly helpUrl?: string;
}
export class BoxApiError extends BoxSdkError {
  readonly requestInfo!: RequestInfo;
  readonly responseInfo!: ResponseInfo;
  constructor(fields: BoxApiError) {
    super(fields);
  }
}
