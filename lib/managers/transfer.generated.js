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
exports.deserializeTransferOwnedFolderRequestBodyArg = exports.serializeTransferOwnedFolderRequestBodyArg = exports.deserializeTransferOwnedFolderRequestBodyArgOwnedByField = exports.serializeTransferOwnedFolderRequestBodyArgOwnedByField = exports.TransferManager = exports.TransferOwnedFolderHeadersArg = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const utils_js_2 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
class TransferOwnedFolderHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.TransferOwnedFolderHeadersArg = TransferOwnedFolderHeadersArg;
class TransferManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    transferOwnedFolder(userId, requestBody, queryParams = {}, headers = new TransferOwnedFolderHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["fields"]: (0, utils_js_2.toString)(queryParams.fields), ["notify"]: (0, utils_js_2.toString)(queryParams.notify) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/users/", userId, "/folders/0"), { method: "PUT", params: queryParamsMap, headers: headersMap, body: (0, json_js_1.serializeJson)(serializeTransferOwnedFolderRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeFolderFull)((0, json_js_2.deserializeJson)(response.text));
        });
    }
}
exports.TransferManager = TransferManager;
function serializeTransferOwnedFolderRequestBodyArgOwnedByField(val) {
    return { ["id"]: val.id };
}
exports.serializeTransferOwnedFolderRequestBodyArgOwnedByField = serializeTransferOwnedFolderRequestBodyArgOwnedByField;
function deserializeTransferOwnedFolderRequestBodyArgOwnedByField(val) {
    const id = val.id;
    return { id: id };
}
exports.deserializeTransferOwnedFolderRequestBodyArgOwnedByField = deserializeTransferOwnedFolderRequestBodyArgOwnedByField;
function serializeTransferOwnedFolderRequestBodyArg(val) {
    return { ["owned_by"]: serializeTransferOwnedFolderRequestBodyArgOwnedByField(val.ownedBy) };
}
exports.serializeTransferOwnedFolderRequestBodyArg = serializeTransferOwnedFolderRequestBodyArg;
function deserializeTransferOwnedFolderRequestBodyArg(val) {
    const ownedBy = deserializeTransferOwnedFolderRequestBodyArgOwnedByField(val.owned_by);
    return { ownedBy: ownedBy };
}
exports.deserializeTransferOwnedFolderRequestBodyArg = deserializeTransferOwnedFolderRequestBodyArg;
//# sourceMappingURL=transfer.generated.js.map