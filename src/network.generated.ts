import { BaseUrls } from './baseUrls.generated.js';
import { Interceptor } from './interceptors.generated.js';
export class NetworkSession {
  readonly additionalHeaders: {
    readonly [key: string]: string;
  } = {};
  readonly baseUrls!: BaseUrls;
  readonly interceptors: readonly Interceptor[] = [];
  constructor(
    fields:
      | Omit<
          NetworkSession,
          | 'additionalHeaders'
          | 'interceptors'
          | 'withAdditionalHeaders'
          | 'withCustomBaseUrls'
          | 'withInterceptors'
        >
      | Partial<Pick<NetworkSession, 'additionalHeaders' | 'interceptors'>>
  ) {
    Object.assign(this, fields);
  }
  withAdditionalHeaders(
    additionalHeaders: {
      readonly [key: string]: string;
    } = {}
  ): NetworkSession {
    return new NetworkSession({
      additionalHeaders: { ...this.additionalHeaders, ...additionalHeaders },
      baseUrls: this.baseUrls,
      interceptors: this.interceptors,
    });
  }
  withCustomBaseUrls(baseUrls: BaseUrls): NetworkSession {
    return new NetworkSession({
      additionalHeaders: this.additionalHeaders,
      baseUrls: baseUrls,
      interceptors: this.interceptors,
    });
  }
  withInterceptors(interceptors: readonly Interceptor[]): NetworkSession {
    return new NetworkSession({
      additionalHeaders: this.additionalHeaders,
      baseUrls: this.baseUrls,
      interceptors: this.interceptors.concat(interceptors),
    });
  }
}
