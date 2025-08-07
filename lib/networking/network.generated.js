"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkSession = void 0;
const baseUrls_generated_js_1 = require("./baseUrls.generated.js");
const utils_js_1 = require("../internal/utils.js");
const boxNetworkClient_js_1 = require("./boxNetworkClient.js");
const retries_generated_js_1 = require("./retries.generated.js");
const logging_generated_js_1 = require("../internal/logging.generated.js");
class NetworkSession {
    constructor(fields) {
        this.additionalHeaders = {};
        this.baseUrls = new baseUrls_generated_js_1.BaseUrls({});
        this.interceptors = [];
        this.agent = (0, utils_js_1.createAgent)(void 0, void 0);
        this.networkClient = new boxNetworkClient_js_1.BoxNetworkClient({});
        this.retryStrategy = new retries_generated_js_1.BoxRetryStrategy({});
        this.dataSanitizer = new logging_generated_js_1.DataSanitizer({});
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
            additionalHeaders: Object.assign(Object.assign({}, this.additionalHeaders), additionalHeaders),
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
            agent: (0, utils_js_1.createAgent)(agentOptions, this.proxyConfig),
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
            agent: (0, utils_js_1.createAgent)(this.agentOptions, proxyConfig),
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
        const dataSanitizer = new logging_generated_js_1.DataSanitizer({});
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
exports.NetworkSession = NetworkSession;
//# sourceMappingURL=network.generated.js.map