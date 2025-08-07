import { BaseUrls } from './baseUrls.generated.js';
import { createAgent } from '../internal/utils.js';
import { BoxNetworkClient } from './boxNetworkClient.js';
import { BoxRetryStrategy } from './retries.generated.js';
import { DataSanitizer } from '../internal/logging.generated.js';
export class NetworkSession {
    constructor(fields) {
        this.additionalHeaders = {};
        this.baseUrls = new BaseUrls({});
        this.interceptors = [];
        this.agent = createAgent(void 0, void 0);
        this.networkClient = new BoxNetworkClient({});
        this.retryStrategy = new BoxRetryStrategy({});
        this.dataSanitizer = new DataSanitizer({});
        if (fields.additionalHeaders !== undefined) {
            this.additionalHeaders = fields.additionalHeaders;
        }
        if (fields.baseUrls !== undefined) {
            this.baseUrls = fields.baseUrls;
        }
        if (fields.interceptors !== undefined) {
            this.interceptors = fields.interceptors;
        }
        if (fields.agent !== undefined) {
            this.agent = fields.agent;
        }
        if (fields.agentOptions !== undefined) {
            this.agentOptions = fields.agentOptions;
        }
        if (fields.proxyConfig !== undefined) {
            this.proxyConfig = fields.proxyConfig;
        }
        if (fields.networkClient !== undefined) {
            this.networkClient = fields.networkClient;
        }
        if (fields.retryStrategy !== undefined) {
            this.retryStrategy = fields.retryStrategy;
        }
        if (fields.dataSanitizer !== undefined) {
            this.dataSanitizer = fields.dataSanitizer;
        }
    }
    /**
       * Generate a fresh network session by duplicating the existing configuration and network parameters, while also including additional headers to be attached to every API call.
       * @param {{
          readonly [key: string]: string;
      }} additionalHeaders Headers, which are appended to each API request
       * @returns {NetworkSession}
       */
    withAdditionalHeaders(additionalHeaders = {}) {
        return new NetworkSession({
            additionalHeaders: { ...this.additionalHeaders, ...additionalHeaders },
            baseUrls: this.baseUrls,
            interceptors: this.interceptors,
            agent: this.agent,
            agentOptions: this.agentOptions,
            proxyConfig: this.proxyConfig,
            networkClient: this.networkClient,
            retryStrategy: this.retryStrategy,
            dataSanitizer: this.dataSanitizer,
        });
    }
    /**
     * Generate a fresh network session by duplicating the existing configuration and network parameters, while also including custom base urls to be used for every API call.
     * @param {BaseUrls} baseUrls Custom base urls
     * @returns {NetworkSession}
     */
    withCustomBaseUrls(baseUrls) {
        return new NetworkSession({
            additionalHeaders: this.additionalHeaders,
            baseUrls: baseUrls,
            interceptors: this.interceptors,
            agent: this.agent,
            agentOptions: this.agentOptions,
            proxyConfig: this.proxyConfig,
            networkClient: this.networkClient,
            retryStrategy: this.retryStrategy,
            dataSanitizer: this.dataSanitizer,
        });
    }
    /**
     * Generate a fresh network session by duplicating the existing configuration and network parameters, while also including custom agent options to be used for every API call.
     * @param {AgentOptions} agentOptions Custom agent options
     * @returns {NetworkSession}
     */
    withCustomAgentOptions(agentOptions) {
        return new NetworkSession({
            additionalHeaders: this.additionalHeaders,
            baseUrls: this.baseUrls,
            interceptors: this.interceptors,
            agent: createAgent(agentOptions, this.proxyConfig),
            agentOptions: this.agentOptions,
            proxyConfig: this.proxyConfig,
            networkClient: this.networkClient,
            retryStrategy: this.retryStrategy,
            dataSanitizer: this.dataSanitizer,
        });
    }
    /**
     * Generate a fresh network session by duplicating the existing configuration and network parameters, while also additional including custom interceptors.
     * @param {readonly Interceptor[]} interceptors Custom base urls
     * @returns {NetworkSession}
     */
    withInterceptors(interceptors) {
        return new NetworkSession({
            additionalHeaders: this.additionalHeaders,
            baseUrls: this.baseUrls,
            interceptors: this.interceptors.concat(interceptors),
            agent: this.agent,
            agentOptions: this.agentOptions,
            proxyConfig: this.proxyConfig,
            networkClient: this.networkClient,
            retryStrategy: this.retryStrategy,
            dataSanitizer: this.dataSanitizer,
        });
    }
    /**
     * Generate a fresh network session by duplicating the existing configuration and network parameters, while also including a custom proxy configuration.
     * @param {ProxyConfig} proxyConfig
     * @returns {NetworkSession}
     */
    withProxy(proxyConfig) {
        return new NetworkSession({
            additionalHeaders: this.additionalHeaders,
            baseUrls: this.baseUrls,
            interceptors: this.interceptors,
            agent: createAgent(this.agentOptions, proxyConfig),
            agentOptions: this.agentOptions,
            proxyConfig: proxyConfig,
            networkClient: this.networkClient,
            retryStrategy: this.retryStrategy,
            dataSanitizer: this.dataSanitizer,
        });
    }
    /**
     * Generate a fresh network session by duplicating the existing configuration and network parameters, while also including a custom network client.
     * @param {NetworkClient} networkClient
     * @returns {NetworkSession}
     */
    withNetworkClient(networkClient) {
        return new NetworkSession({
            additionalHeaders: this.additionalHeaders,
            baseUrls: this.baseUrls,
            interceptors: this.interceptors,
            agent: this.agent,
            agentOptions: this.agentOptions,
            proxyConfig: this.proxyConfig,
            networkClient: networkClient,
            retryStrategy: this.retryStrategy,
            dataSanitizer: this.dataSanitizer,
        });
    }
    /**
     * Generate a fresh network session by duplicating the existing configuration and network parameters, while also applying retry strategy
     * @param {RetryStrategy} retryStrategy
     * @returns {NetworkSession}
     */
    withRetryStrategy(retryStrategy) {
        return new NetworkSession({
            additionalHeaders: this.additionalHeaders,
            baseUrls: this.baseUrls,
            interceptors: this.interceptors,
            agent: this.agent,
            agentOptions: this.agentOptions,
            proxyConfig: this.proxyConfig,
            networkClient: this.networkClient,
            retryStrategy: retryStrategy,
            dataSanitizer: this.dataSanitizer,
        });
    }
    /**
     * Generate a fresh network session by duplicating the existing configuration and network parameters, while also applying data sanitizer
     * @param {DataSanitizerInput} dataSanitizerInput
     * @returns {NetworkSession}
     */
    withDataSanitizer(dataSanitizerInput) {
        const dataSanitizer = new DataSanitizer({});
        return new NetworkSession({
            additionalHeaders: this.additionalHeaders,
            baseUrls: this.baseUrls,
            interceptors: this.interceptors,
            agent: this.agent,
            agentOptions: this.agentOptions,
            proxyConfig: this.proxyConfig,
            networkClient: this.networkClient,
            retryStrategy: this.retryStrategy,
            dataSanitizer: dataSanitizer,
        });
    }
}
//# sourceMappingURL=network.generated.js.map