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
exports.deserializeUpdateTermOfServiceUserStatusByIdRequestBodyArg = exports.serializeUpdateTermOfServiceUserStatusByIdRequestBodyArg = exports.deserializeCreateTermOfServiceUserStatusRequestBodyArg = exports.serializeCreateTermOfServiceUserStatusRequestBodyArg = exports.deserializeCreateTermOfServiceUserStatusRequestBodyArgUserField = exports.serializeCreateTermOfServiceUserStatusRequestBodyArgUserField = exports.deserializeCreateTermOfServiceUserStatusRequestBodyArgUserFieldTypeField = exports.serializeCreateTermOfServiceUserStatusRequestBodyArgUserFieldTypeField = exports.deserializeCreateTermOfServiceUserStatusRequestBodyArgTosField = exports.serializeCreateTermOfServiceUserStatusRequestBodyArgTosField = exports.deserializeCreateTermOfServiceUserStatusRequestBodyArgTosFieldTypeField = exports.serializeCreateTermOfServiceUserStatusRequestBodyArgTosFieldTypeField = exports.TermsOfServiceUserStatusesManager = exports.UpdateTermOfServiceUserStatusByIdHeadersArg = exports.CreateTermOfServiceUserStatusHeadersArg = exports.GetTermOfServiceUserStatusesHeadersArg = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const utils_js_2 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
const json_js_3 = require("../json.js");
class GetTermOfServiceUserStatusesHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetTermOfServiceUserStatusesHeadersArg = GetTermOfServiceUserStatusesHeadersArg;
class CreateTermOfServiceUserStatusHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.CreateTermOfServiceUserStatusHeadersArg = CreateTermOfServiceUserStatusHeadersArg;
class UpdateTermOfServiceUserStatusByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.UpdateTermOfServiceUserStatusByIdHeadersArg = UpdateTermOfServiceUserStatusByIdHeadersArg;
class TermsOfServiceUserStatusesManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getTermOfServiceUserStatuses(queryParams, headers = new GetTermOfServiceUserStatusesHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["tos_id"]: (0, utils_js_2.toString)(queryParams.tosId), ["user_id"]: (0, utils_js_2.toString)(queryParams.userId) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/terms_of_service_user_statuses"), { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeTermsOfServiceUserStatuses)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    createTermOfServiceUserStatus(requestBody, headers = new CreateTermOfServiceUserStatusHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/terms_of_service_user_statuses"), { method: "POST", headers: headersMap, body: (0, json_js_2.serializeJson)(serializeCreateTermOfServiceUserStatusRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeTermsOfServiceUserStatus)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateTermOfServiceUserStatusById(termsOfServiceUserStatusId, requestBody, headers = new UpdateTermOfServiceUserStatusByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/terms_of_service_user_statuses/", termsOfServiceUserStatusId), { method: "PUT", headers: headersMap, body: (0, json_js_2.serializeJson)(serializeUpdateTermOfServiceUserStatusByIdRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeTermsOfServiceUserStatus)((0, json_js_1.deserializeJson)(response.text));
        });
    }
}
exports.TermsOfServiceUserStatusesManager = TermsOfServiceUserStatusesManager;
function serializeCreateTermOfServiceUserStatusRequestBodyArgTosFieldTypeField(val) {
    return val;
}
exports.serializeCreateTermOfServiceUserStatusRequestBodyArgTosFieldTypeField = serializeCreateTermOfServiceUserStatusRequestBodyArgTosFieldTypeField;
function deserializeCreateTermOfServiceUserStatusRequestBodyArgTosFieldTypeField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"CreateTermOfServiceUserStatusRequestBodyArgTosFieldTypeField\"";
    }
    if (val == "terms_of_service") {
        return "terms_of_service";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeCreateTermOfServiceUserStatusRequestBodyArgTosFieldTypeField = deserializeCreateTermOfServiceUserStatusRequestBodyArgTosFieldTypeField;
function serializeCreateTermOfServiceUserStatusRequestBodyArgTosField(val) {
    return { ["type"]: serializeCreateTermOfServiceUserStatusRequestBodyArgTosFieldTypeField(val.type), ["id"]: val.id };
}
exports.serializeCreateTermOfServiceUserStatusRequestBodyArgTosField = serializeCreateTermOfServiceUserStatusRequestBodyArgTosField;
function deserializeCreateTermOfServiceUserStatusRequestBodyArgTosField(val) {
    const type = deserializeCreateTermOfServiceUserStatusRequestBodyArgTosFieldTypeField(val.type);
    const id = val.id;
    return { type: type, id: id };
}
exports.deserializeCreateTermOfServiceUserStatusRequestBodyArgTosField = deserializeCreateTermOfServiceUserStatusRequestBodyArgTosField;
function serializeCreateTermOfServiceUserStatusRequestBodyArgUserFieldTypeField(val) {
    return val;
}
exports.serializeCreateTermOfServiceUserStatusRequestBodyArgUserFieldTypeField = serializeCreateTermOfServiceUserStatusRequestBodyArgUserFieldTypeField;
function deserializeCreateTermOfServiceUserStatusRequestBodyArgUserFieldTypeField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"CreateTermOfServiceUserStatusRequestBodyArgUserFieldTypeField\"";
    }
    if (val == "user") {
        return "user";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeCreateTermOfServiceUserStatusRequestBodyArgUserFieldTypeField = deserializeCreateTermOfServiceUserStatusRequestBodyArgUserFieldTypeField;
function serializeCreateTermOfServiceUserStatusRequestBodyArgUserField(val) {
    return { ["type"]: serializeCreateTermOfServiceUserStatusRequestBodyArgUserFieldTypeField(val.type), ["id"]: val.id };
}
exports.serializeCreateTermOfServiceUserStatusRequestBodyArgUserField = serializeCreateTermOfServiceUserStatusRequestBodyArgUserField;
function deserializeCreateTermOfServiceUserStatusRequestBodyArgUserField(val) {
    const type = deserializeCreateTermOfServiceUserStatusRequestBodyArgUserFieldTypeField(val.type);
    const id = val.id;
    return { type: type, id: id };
}
exports.deserializeCreateTermOfServiceUserStatusRequestBodyArgUserField = deserializeCreateTermOfServiceUserStatusRequestBodyArgUserField;
function serializeCreateTermOfServiceUserStatusRequestBodyArg(val) {
    return { ["tos"]: serializeCreateTermOfServiceUserStatusRequestBodyArgTosField(val.tos), ["user"]: serializeCreateTermOfServiceUserStatusRequestBodyArgUserField(val.user), ["is_accepted"]: val.isAccepted };
}
exports.serializeCreateTermOfServiceUserStatusRequestBodyArg = serializeCreateTermOfServiceUserStatusRequestBodyArg;
function deserializeCreateTermOfServiceUserStatusRequestBodyArg(val) {
    const tos = deserializeCreateTermOfServiceUserStatusRequestBodyArgTosField(val.tos);
    const user = deserializeCreateTermOfServiceUserStatusRequestBodyArgUserField(val.user);
    const isAccepted = val.is_accepted;
    return { tos: tos, user: user, isAccepted: isAccepted };
}
exports.deserializeCreateTermOfServiceUserStatusRequestBodyArg = deserializeCreateTermOfServiceUserStatusRequestBodyArg;
function serializeUpdateTermOfServiceUserStatusByIdRequestBodyArg(val) {
    return { ["is_accepted"]: val.isAccepted };
}
exports.serializeUpdateTermOfServiceUserStatusByIdRequestBodyArg = serializeUpdateTermOfServiceUserStatusByIdRequestBodyArg;
function deserializeUpdateTermOfServiceUserStatusByIdRequestBodyArg(val) {
    const isAccepted = val.is_accepted;
    return { isAccepted: isAccepted };
}
exports.deserializeUpdateTermOfServiceUserStatusByIdRequestBodyArg = deserializeUpdateTermOfServiceUserStatusByIdRequestBodyArg;
//# sourceMappingURL=termsOfServiceUserStatuses.generated.js.map