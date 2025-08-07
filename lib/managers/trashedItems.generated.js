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
exports.TrashedItemsManager = exports.GetTrashedItemsHeaders = void 0;
exports.serializeGetTrashedItemsQueryParamsDirectionField = serializeGetTrashedItemsQueryParamsDirectionField;
exports.deserializeGetTrashedItemsQueryParamsDirectionField = deserializeGetTrashedItemsQueryParamsDirectionField;
exports.serializeGetTrashedItemsQueryParamsSortField = serializeGetTrashedItemsQueryParamsSortField;
exports.deserializeGetTrashedItemsQueryParamsSortField = deserializeGetTrashedItemsQueryParamsSortField;
const items_generated_js_1 = require("../schemas/items.generated.js");
const errors_js_1 = require("../box/errors.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const fetchOptions_generated_js_1 = require("../networking/fetchOptions.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const json_js_1 = require("../serialization/json.js");
class GetTrashedItemsHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetTrashedItemsHeaders = GetTrashedItemsHeaders;
class TrashedItemsManager {
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
     * Retrieves the files and folders that have been moved
     * to the trash.
     *
     * Any attribute in the full files or folders objects can be passed
     * in with the `fields` parameter to retrieve those specific
     * attributes that are not returned by default.
     *
     * This endpoint defaults to use offset-based pagination, yet also supports
     * marker-based pagination using the `marker` parameter.
     * @param {GetTrashedItemsQueryParams} queryParams Query parameters of getTrashedItems method
     * @param {GetTrashedItemsHeadersInput} headersInput Headers of getTrashedItems method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<Items>}
     */
    getTrashedItems() {
        return __awaiter(this, arguments, void 0, function* (queryParams = {}, headersInput = new GetTrashedItemsHeaders({}), cancellationToken) {
            const headers = new GetTrashedItemsHeaders({
                extraHeaders: headersInput.extraHeaders,
            });
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['fields']: queryParams.fields
                    ? queryParams.fields.map(utils_js_2.toString).join(',')
                    : undefined,
                ['limit']: (0, utils_js_2.toString)(queryParams.limit),
                ['offset']: (0, utils_js_2.toString)(queryParams.offset),
                ['usemarker']: (0, utils_js_2.toString)(queryParams.usemarker),
                ['marker']: (0, utils_js_2.toString)(queryParams.marker),
                ['direction']: (0, utils_js_2.toString)(queryParams.direction),
                ['sort']: (0, utils_js_2.toString)(queryParams.sort),
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/folders/trash/items'),
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, items_generated_js_1.deserializeItems)(response.data)), { rawData: response.data });
        });
    }
}
exports.TrashedItemsManager = TrashedItemsManager;
function serializeGetTrashedItemsQueryParamsDirectionField(val) {
    return val;
}
function deserializeGetTrashedItemsQueryParamsDirectionField(val) {
    if (val == 'ASC') {
        return val;
    }
    if (val == 'DESC') {
        return val;
    }
    if ((0, json_js_1.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize GetTrashedItemsQueryParamsDirectionField",
    });
}
function serializeGetTrashedItemsQueryParamsSortField(val) {
    return val;
}
function deserializeGetTrashedItemsQueryParamsSortField(val) {
    if (val == 'name') {
        return val;
    }
    if (val == 'date') {
        return val;
    }
    if (val == 'size') {
        return val;
    }
    if ((0, json_js_1.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize GetTrashedItemsQueryParamsSortField",
    });
}
//# sourceMappingURL=trashedItems.generated.js.map