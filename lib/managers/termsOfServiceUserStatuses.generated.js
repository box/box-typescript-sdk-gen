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
exports.newDeserializeUpdateTermOfServiceUserStatusByIdRequestBodyArg = exports.newSerializeUpdateTermOfServiceUserStatusByIdRequestBodyArg = exports.newDeserializeCreateTermOfServiceUserStatusRequestBodyArg = exports.newSerializeCreateTermOfServiceUserStatusRequestBodyArg = exports.newDeserializeCreateTermOfServiceUserStatusRequestBodyArgUserField = exports.newSerializeCreateTermOfServiceUserStatusRequestBodyArgUserField = exports.newDeserializeCreateTermOfServiceUserStatusRequestBodyArgUserFieldTypeField = exports.newSerializeCreateTermOfServiceUserStatusRequestBodyArgUserFieldTypeField = exports.newDeserializeCreateTermOfServiceUserStatusRequestBodyArgTosField = exports.newSerializeCreateTermOfServiceUserStatusRequestBodyArgTosField = exports.newDeserializeCreateTermOfServiceUserStatusRequestBodyArgTosFieldTypeField = exports.newSerializeCreateTermOfServiceUserStatusRequestBodyArgTosFieldTypeField = exports.newDeserializeGetTermOfServiceUserStatusesQueryParamsArg = exports.newSerializeGetTermOfServiceUserStatusesQueryParamsArg = exports.TermsOfServiceUserStatusesManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
class TermsOfServiceUserStatusesManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getTermOfServiceUserStatuses(queryParams) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/terms_of_service_user_statuses"), { method: "GET", params: (0, utils_js_1.toMap)(queryParams), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.newDeserializeTermsOfServiceUserStatuses)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    createTermOfServiceUserStatus(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/terms_of_service_user_statuses"), { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.newDeserializeTermsOfServiceUserStatus)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateTermOfServiceUserStatusById(termsOfServiceUserStatusId, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/terms_of_service_user_statuses/", termsOfServiceUserStatusId), { method: "PUT", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.newDeserializeTermsOfServiceUserStatus)((0, json_js_1.deserializeJson)(response.text));
        });
    }
}
exports.TermsOfServiceUserStatusesManager = TermsOfServiceUserStatusesManager;
function newSerializeGetTermOfServiceUserStatusesQueryParamsArg(val) {
    return { ["tosId"]: val.tosId, ["userId"]: val.userId };
}
exports.newSerializeGetTermOfServiceUserStatusesQueryParamsArg = newSerializeGetTermOfServiceUserStatusesQueryParamsArg;
function newDeserializeGetTermOfServiceUserStatusesQueryParamsArg(val) {
    const tosId = val.tosId;
    const userId = (0, json_js_2.isJson)(val.userId, "string") ? val.userId : void 0;
    return { tosId: tosId, userId: userId };
}
exports.newDeserializeGetTermOfServiceUserStatusesQueryParamsArg = newDeserializeGetTermOfServiceUserStatusesQueryParamsArg;
function newSerializeCreateTermOfServiceUserStatusRequestBodyArgTosFieldTypeField(val) {
    return val;
}
exports.newSerializeCreateTermOfServiceUserStatusRequestBodyArgTosFieldTypeField = newSerializeCreateTermOfServiceUserStatusRequestBodyArgTosFieldTypeField;
function newDeserializeCreateTermOfServiceUserStatusRequestBodyArgTosFieldTypeField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
        throw "Expecting a string for \"CreateTermOfServiceUserStatusRequestBodyArgTosFieldTypeField\"";
    }
    if (val == "terms_of_service") {
        return "terms_of_service";
    }
    throw "".concat("Invalid value: ", val);
}
exports.newDeserializeCreateTermOfServiceUserStatusRequestBodyArgTosFieldTypeField = newDeserializeCreateTermOfServiceUserStatusRequestBodyArgTosFieldTypeField;
function newSerializeCreateTermOfServiceUserStatusRequestBodyArgTosField(val) {
    return { ["type"]: newSerializeCreateTermOfServiceUserStatusRequestBodyArgTosFieldTypeField(val.type), ["id"]: val.id };
}
exports.newSerializeCreateTermOfServiceUserStatusRequestBodyArgTosField = newSerializeCreateTermOfServiceUserStatusRequestBodyArgTosField;
function newDeserializeCreateTermOfServiceUserStatusRequestBodyArgTosField(val) {
    const type = newDeserializeCreateTermOfServiceUserStatusRequestBodyArgTosFieldTypeField(val.type);
    const id = val.id;
    return { type: type, id: id };
}
exports.newDeserializeCreateTermOfServiceUserStatusRequestBodyArgTosField = newDeserializeCreateTermOfServiceUserStatusRequestBodyArgTosField;
function newSerializeCreateTermOfServiceUserStatusRequestBodyArgUserFieldTypeField(val) {
    return val;
}
exports.newSerializeCreateTermOfServiceUserStatusRequestBodyArgUserFieldTypeField = newSerializeCreateTermOfServiceUserStatusRequestBodyArgUserFieldTypeField;
function newDeserializeCreateTermOfServiceUserStatusRequestBodyArgUserFieldTypeField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
        throw "Expecting a string for \"CreateTermOfServiceUserStatusRequestBodyArgUserFieldTypeField\"";
    }
    if (val == "user") {
        return "user";
    }
    throw "".concat("Invalid value: ", val);
}
exports.newDeserializeCreateTermOfServiceUserStatusRequestBodyArgUserFieldTypeField = newDeserializeCreateTermOfServiceUserStatusRequestBodyArgUserFieldTypeField;
function newSerializeCreateTermOfServiceUserStatusRequestBodyArgUserField(val) {
    return { ["type"]: newSerializeCreateTermOfServiceUserStatusRequestBodyArgUserFieldTypeField(val.type), ["id"]: val.id };
}
exports.newSerializeCreateTermOfServiceUserStatusRequestBodyArgUserField = newSerializeCreateTermOfServiceUserStatusRequestBodyArgUserField;
function newDeserializeCreateTermOfServiceUserStatusRequestBodyArgUserField(val) {
    const type = newDeserializeCreateTermOfServiceUserStatusRequestBodyArgUserFieldTypeField(val.type);
    const id = val.id;
    return { type: type, id: id };
}
exports.newDeserializeCreateTermOfServiceUserStatusRequestBodyArgUserField = newDeserializeCreateTermOfServiceUserStatusRequestBodyArgUserField;
function newSerializeCreateTermOfServiceUserStatusRequestBodyArg(val) {
    return { ["tos"]: newSerializeCreateTermOfServiceUserStatusRequestBodyArgTosField(val.tos), ["user"]: newSerializeCreateTermOfServiceUserStatusRequestBodyArgUserField(val.user), ["isAccepted"]: val.isAccepted };
}
exports.newSerializeCreateTermOfServiceUserStatusRequestBodyArg = newSerializeCreateTermOfServiceUserStatusRequestBodyArg;
function newDeserializeCreateTermOfServiceUserStatusRequestBodyArg(val) {
    const tos = newDeserializeCreateTermOfServiceUserStatusRequestBodyArgTosField(val.tos);
    const user = newDeserializeCreateTermOfServiceUserStatusRequestBodyArgUserField(val.user);
    const isAccepted = val.isAccepted;
    return { tos: tos, user: user, isAccepted: isAccepted };
}
exports.newDeserializeCreateTermOfServiceUserStatusRequestBodyArg = newDeserializeCreateTermOfServiceUserStatusRequestBodyArg;
function newSerializeUpdateTermOfServiceUserStatusByIdRequestBodyArg(val) {
    return { ["isAccepted"]: val.isAccepted };
}
exports.newSerializeUpdateTermOfServiceUserStatusByIdRequestBodyArg = newSerializeUpdateTermOfServiceUserStatusByIdRequestBodyArg;
function newDeserializeUpdateTermOfServiceUserStatusByIdRequestBodyArg(val) {
    const isAccepted = val.isAccepted;
    return { isAccepted: isAccepted };
}
exports.newDeserializeUpdateTermOfServiceUserStatusByIdRequestBodyArg = newDeserializeUpdateTermOfServiceUserStatusByIdRequestBodyArg;
//# sourceMappingURL=termsOfServiceUserStatuses.generated.js.map