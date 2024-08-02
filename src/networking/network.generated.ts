import { BaseUrls } from './baseUrls.generated.js';
import { Interceptor } from './interceptors.generated.js';
import { Agent } from '../internal/utils.js';
import { AgentOptions } from '../internal/utils.js';
import { createAgent } from '../internal/utils.js';
export class NetworkSession {
  readonly additionalHeaders: {
    readonly [key: string]: string;
  } = {};
  readonly baseUrls: BaseUrls = new BaseUrls({});
  readonly interceptors: readonly Interceptor[] = [];
  readonly agent: Agent = createAgent(void 0);
  readonly agentOptions?: AgentOptions;
  constructor(
    fields: Omit<
      NetworkSession,
      | 'additionalHeaders'
      | 'baseUrls'
      | 'interceptors'
      | 'agent'
      | 'withAdditionalHeaders'
      | 'withCustomBaseUrls'
      | 'withCustomAgentOptions'
      | 'withInterceptors'
    > &
      Partial<
        Pick<
          NetworkSession,
          'additionalHeaders' | 'baseUrls' | 'interceptors' | 'agent'
        >
      >
  ) {
    if (fields.additionalHeaders) {
      this.additionalHeaders = fields.additionalHeaders;
    }
    if (fields.baseUrls) {
      this.baseUrls = fields.baseUrls;
    }
    if (fields.interceptors) {
      this.interceptors = fields.interceptors;
    }
    if (fields.agent) {
      this.agent = fields.agent;
    }
    if (fields.agentOptions) {
      this.agentOptions = fields.agentOptions;
    }
  }
  /**
     * Generate a fresh network session by duplicating the existing configuration and network parameters, while also including additional headers to be attached to every API call.
     * @param {{
        readonly [key: string]: string;
    }} additionalHeaders Headers, which are appended to each API request
     * @returns {NetworkSession}
     */
  withAdditionalHeaders(
    additionalHeaders: {
      readonly [key: string]: string;
    } = {}
  ): NetworkSession {
    return new NetworkSession({
      additionalHeaders: { ...this.additionalHeaders, ...additionalHeaders },
      baseUrls: this.baseUrls,
      interceptors: this.interceptors,
      agent: this.agent,
      agentOptions: this.agentOptions,
    });
  }
  /**
   * Generate a fresh network session by duplicating the existing configuration and network parameters, while also including custom base urls to be used for every API call.
   * @param {BaseUrls} baseUrls Custom base urls
   * @returns {NetworkSession}
   */
  withCustomBaseUrls(baseUrls: BaseUrls): NetworkSession {
    return new NetworkSession({
      additionalHeaders: this.additionalHeaders,
      baseUrls: baseUrls,
      interceptors: this.interceptors,
      agent: this.agent,
      agentOptions: this.agentOptions,
    });
  }
  /**
   * Generate a fresh network session by duplicating the existing configuration and network parameters, while also including custom agent options to be used for every API call.
   * @param {AgentOptions} agentOptions Custom agent options
   * @returns {NetworkSession}
   */
  withCustomAgentOptions(agentOptions: AgentOptions): NetworkSession {
    return new NetworkSession({
      additionalHeaders: this.additionalHeaders,
      baseUrls: this.baseUrls,
      interceptors: this.interceptors,
      agent: createAgent(agentOptions),
      agentOptions: this.agentOptions,
    });
  }
  /**
   * Generate a fresh network session by duplicating the existing configuration and network parameters, while also additional including custom interceptors.
   * @param {readonly Interceptor[]} interceptors Custom base urls
   * @returns {NetworkSession}
   */
  withInterceptors(interceptors: readonly Interceptor[]): NetworkSession {
    return new NetworkSession({
      additionalHeaders: this.additionalHeaders,
      baseUrls: this.baseUrls,
      interceptors: this.interceptors.concat(interceptors),
      agent: this.agent,
      agentOptions: this.agentOptions,
    });
  }
}
export interface NetworkSessionInput {
  readonly additionalHeaders?: {
    readonly [key: string]: string;
  };
  readonly baseUrls?: BaseUrls;
  readonly interceptors?: readonly Interceptor[];
  readonly agent?: Agent;
  readonly agentOptions?: AgentOptions;
}
