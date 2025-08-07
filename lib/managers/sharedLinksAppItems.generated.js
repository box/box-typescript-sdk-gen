"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedLinksAppItemsManager = exports.FindAppItemForSharedLinkHeaders = exports.FindAppItemForSharedLinkOptionals = void 0;
const appItem_generated_js_1 = require("../schemas/appItem.generated.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const fetchOptions_generated_js_1 = require("../networking/fetchOptions.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
class FindAppItemForSharedLinkOptionals {
    constructor(fields) {
        this.cancellationToken = void 0;
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.FindAppItemForSharedLinkOptionals = FindAppItemForSharedLinkOptionals;
class FindAppItemForSharedLinkHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.boxapi !== undefined) {
            this.boxapi = fields.boxapi;
        }
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.FindAppItemForSharedLinkHeaders = FindAppItemForSharedLinkHeaders;
class SharedLinksAppItemsManager {
    constructor(fields) {
        this.networkSession = new network_generated_js_1.NetworkSession({});
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
    findAppItemForSharedLink(headersInput_1) {
        return __awaiter(this, arguments, void 0, function* (headersInput, optionalsInput = {}) {
            const headers = new FindAppItemForSharedLinkHeaders({
                boxapi: headersInput.boxapi,
                extraHeaders: headersInput.extraHeaders,
            });
            const optionals = new FindAppItemForSharedLinkOptionals({
                cancellationToken: optionalsInput.cancellationToken,
            });
            const cancellationToken = optionals.cancellationToken;
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({ ['boxapi']: (0, utils_js_2.toString)(headers.boxapi) }, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/shared_items#app_items'),
                method: 'GET',
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, appItem_generated_js_1.deserializeAppItem)(response.data)), { rawData: response.data });
        });
    }
}
exports.SharedLinksAppItemsManager = SharedLinksAppItemsManager;
//# sourceMappingURL=sharedLinksAppItems.generated.js.map