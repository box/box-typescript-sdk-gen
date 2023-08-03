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
exports.deserializeUpdateWebhookByIdRequestBodyArg = exports.serializeUpdateWebhookByIdRequestBodyArg = exports.deserializeUpdateWebhookByIdRequestBodyArgTriggersField = exports.serializeUpdateWebhookByIdRequestBodyArgTriggersField = exports.deserializeUpdateWebhookByIdRequestBodyArgTargetField = exports.serializeUpdateWebhookByIdRequestBodyArgTargetField = exports.deserializeUpdateWebhookByIdRequestBodyArgTargetFieldTypeField = exports.serializeUpdateWebhookByIdRequestBodyArgTargetFieldTypeField = exports.deserializeCreateWebhookRequestBodyArg = exports.serializeCreateWebhookRequestBodyArg = exports.deserializeCreateWebhookRequestBodyArgTriggersField = exports.serializeCreateWebhookRequestBodyArgTriggersField = exports.deserializeCreateWebhookRequestBodyArgTargetField = exports.serializeCreateWebhookRequestBodyArgTargetField = exports.deserializeCreateWebhookRequestBodyArgTargetFieldTypeField = exports.serializeCreateWebhookRequestBodyArgTargetFieldTypeField = exports.WebhooksManager = exports.DeleteWebhookByIdHeadersArg = exports.UpdateWebhookByIdHeadersArg = exports.GetWebhookByIdHeadersArg = exports.CreateWebhookHeadersArg = exports.GetWebhooksHeadersArg = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const utils_js_2 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
const json_js_3 = require("../json.js");
class GetWebhooksHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetWebhooksHeadersArg = GetWebhooksHeadersArg;
class CreateWebhookHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.CreateWebhookHeadersArg = CreateWebhookHeadersArg;
class GetWebhookByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetWebhookByIdHeadersArg = GetWebhookByIdHeadersArg;
class UpdateWebhookByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.UpdateWebhookByIdHeadersArg = UpdateWebhookByIdHeadersArg;
class DeleteWebhookByIdHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.DeleteWebhookByIdHeadersArg = DeleteWebhookByIdHeadersArg;
class WebhooksManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getWebhooks(queryParams = {}, headers = new GetWebhooksHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParamsMap = (0, utils_js_1.prepareParams)({ ["marker"]: (0, utils_js_2.toString)(queryParams.marker), ["limit"]: (0, utils_js_2.toString)(queryParams.limit) });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/webhooks"), { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeWebhooks)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    createWebhook(requestBody, headers = new CreateWebhookHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/webhooks"), { method: "POST", headers: headersMap, body: (0, json_js_2.serializeJson)(serializeCreateWebhookRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeWebhook)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getWebhookById(webhookId, headers = new GetWebhookByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/webhooks/", webhookId), { method: "GET", headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeWebhook)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateWebhookById(webhookId, requestBody, headers = new UpdateWebhookByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/webhooks/", webhookId), { method: "PUT", headers: headersMap, body: (0, json_js_2.serializeJson)(serializeUpdateWebhookByIdRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.deserializeWebhook)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteWebhookById(webhookId, headers = new DeleteWebhookByIdHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/webhooks/", webhookId), { method: "DELETE", headers: headersMap, responseFormat: void 0, auth: this.auth, networkSession: this.networkSession });
            return void 0;
        });
    }
}
exports.WebhooksManager = WebhooksManager;
function serializeCreateWebhookRequestBodyArgTargetFieldTypeField(val) {
    return val;
}
exports.serializeCreateWebhookRequestBodyArgTargetFieldTypeField = serializeCreateWebhookRequestBodyArgTargetFieldTypeField;
function deserializeCreateWebhookRequestBodyArgTargetFieldTypeField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"CreateWebhookRequestBodyArgTargetFieldTypeField\"";
    }
    if (val == "file") {
        return "file";
    }
    if (val == "folder") {
        return "folder";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeCreateWebhookRequestBodyArgTargetFieldTypeField = deserializeCreateWebhookRequestBodyArgTargetFieldTypeField;
function serializeCreateWebhookRequestBodyArgTargetField(val) {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : serializeCreateWebhookRequestBodyArgTargetFieldTypeField(val.type) };
}
exports.serializeCreateWebhookRequestBodyArgTargetField = serializeCreateWebhookRequestBodyArgTargetField;
function deserializeCreateWebhookRequestBodyArgTargetField(val) {
    const id = (0, json_js_3.isJson)(val.id, "string") ? val.id : void 0;
    const type = val.type == void 0 ? void 0 : deserializeCreateWebhookRequestBodyArgTargetFieldTypeField(val.type);
    return { id: id, type: type };
}
exports.deserializeCreateWebhookRequestBodyArgTargetField = deserializeCreateWebhookRequestBodyArgTargetField;
function serializeCreateWebhookRequestBodyArgTriggersField(val) {
    return val;
}
exports.serializeCreateWebhookRequestBodyArgTriggersField = serializeCreateWebhookRequestBodyArgTriggersField;
function deserializeCreateWebhookRequestBodyArgTriggersField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"CreateWebhookRequestBodyArgTriggersField\"";
    }
    if (val == "FILE.UPLOADED") {
        return "FILE.UPLOADED";
    }
    if (val == "FILE.PREVIEWED") {
        return "FILE.PREVIEWED";
    }
    if (val == "FILE.DOWNLOADED") {
        return "FILE.DOWNLOADED";
    }
    if (val == "FILE.TRASHED") {
        return "FILE.TRASHED";
    }
    if (val == "FILE.DELETED") {
        return "FILE.DELETED";
    }
    if (val == "FILE.RESTORED") {
        return "FILE.RESTORED";
    }
    if (val == "FILE.COPIED") {
        return "FILE.COPIED";
    }
    if (val == "FILE.MOVED") {
        return "FILE.MOVED";
    }
    if (val == "FILE.LOCKED") {
        return "FILE.LOCKED";
    }
    if (val == "FILE.UNLOCKED") {
        return "FILE.UNLOCKED";
    }
    if (val == "FILE.RENAMED") {
        return "FILE.RENAMED";
    }
    if (val == "COMMENT.CREATED") {
        return "COMMENT.CREATED";
    }
    if (val == "COMMENT.UPDATED") {
        return "COMMENT.UPDATED";
    }
    if (val == "COMMENT.DELETED") {
        return "COMMENT.DELETED";
    }
    if (val == "TASK_ASSIGNMENT.CREATED") {
        return "TASK_ASSIGNMENT.CREATED";
    }
    if (val == "TASK_ASSIGNMENT.UPDATED") {
        return "TASK_ASSIGNMENT.UPDATED";
    }
    if (val == "METADATA_INSTANCE.CREATED") {
        return "METADATA_INSTANCE.CREATED";
    }
    if (val == "METADATA_INSTANCE.UPDATED") {
        return "METADATA_INSTANCE.UPDATED";
    }
    if (val == "METADATA_INSTANCE.DELETED") {
        return "METADATA_INSTANCE.DELETED";
    }
    if (val == "FOLDER.CREATED") {
        return "FOLDER.CREATED";
    }
    if (val == "FOLDER.RENAMED") {
        return "FOLDER.RENAMED";
    }
    if (val == "FOLDER.DOWNLOADED") {
        return "FOLDER.DOWNLOADED";
    }
    if (val == "FOLDER.RESTORED") {
        return "FOLDER.RESTORED";
    }
    if (val == "FOLDER.DELETED") {
        return "FOLDER.DELETED";
    }
    if (val == "FOLDER.COPIED") {
        return "FOLDER.COPIED";
    }
    if (val == "FOLDER.MOVED") {
        return "FOLDER.MOVED";
    }
    if (val == "FOLDER.TRASHED") {
        return "FOLDER.TRASHED";
    }
    if (val == "WEBHOOK.DELETED") {
        return "WEBHOOK.DELETED";
    }
    if (val == "COLLABORATION.CREATED") {
        return "COLLABORATION.CREATED";
    }
    if (val == "COLLABORATION.ACCEPTED") {
        return "COLLABORATION.ACCEPTED";
    }
    if (val == "COLLABORATION.REJECTED") {
        return "COLLABORATION.REJECTED";
    }
    if (val == "COLLABORATION.REMOVED") {
        return "COLLABORATION.REMOVED";
    }
    if (val == "COLLABORATION.UPDATED") {
        return "COLLABORATION.UPDATED";
    }
    if (val == "SHARED_LINK.DELETED") {
        return "SHARED_LINK.DELETED";
    }
    if (val == "SHARED_LINK.CREATED") {
        return "SHARED_LINK.CREATED";
    }
    if (val == "SHARED_LINK.UPDATED") {
        return "SHARED_LINK.UPDATED";
    }
    if (val == "SIGN_REQUEST.COMPLETED") {
        return "SIGN_REQUEST.COMPLETED";
    }
    if (val == "SIGN_REQUEST.DECLINED") {
        return "SIGN_REQUEST.DECLINED";
    }
    if (val == "SIGN_REQUEST.EXPIRED") {
        return "SIGN_REQUEST.EXPIRED";
    }
    if (val == "SIGN_REQUEST.SIGNER_EMAIL_BOUNCED") {
        return "SIGN_REQUEST.SIGNER_EMAIL_BOUNCED";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeCreateWebhookRequestBodyArgTriggersField = deserializeCreateWebhookRequestBodyArgTriggersField;
function serializeCreateWebhookRequestBodyArg(val) {
    return { ["target"]: serializeCreateWebhookRequestBodyArgTargetField(val.target), ["address"]: val.address, ["triggers"]: val.triggers.map(function (item) {
            return serializeCreateWebhookRequestBodyArgTriggersField(item);
        }) };
}
exports.serializeCreateWebhookRequestBodyArg = serializeCreateWebhookRequestBodyArg;
function deserializeCreateWebhookRequestBodyArg(val) {
    const target = deserializeCreateWebhookRequestBodyArgTargetField(val.target);
    const address = val.address;
    const triggers = val.triggers.map(function (itm) {
        return deserializeCreateWebhookRequestBodyArgTriggersField(itm);
    });
    return { target: target, address: address, triggers: triggers };
}
exports.deserializeCreateWebhookRequestBodyArg = deserializeCreateWebhookRequestBodyArg;
function serializeUpdateWebhookByIdRequestBodyArgTargetFieldTypeField(val) {
    return val;
}
exports.serializeUpdateWebhookByIdRequestBodyArgTargetFieldTypeField = serializeUpdateWebhookByIdRequestBodyArgTargetFieldTypeField;
function deserializeUpdateWebhookByIdRequestBodyArgTargetFieldTypeField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"UpdateWebhookByIdRequestBodyArgTargetFieldTypeField\"";
    }
    if (val == "file") {
        return "file";
    }
    if (val == "folder") {
        return "folder";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeUpdateWebhookByIdRequestBodyArgTargetFieldTypeField = deserializeUpdateWebhookByIdRequestBodyArgTargetFieldTypeField;
function serializeUpdateWebhookByIdRequestBodyArgTargetField(val) {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : serializeUpdateWebhookByIdRequestBodyArgTargetFieldTypeField(val.type) };
}
exports.serializeUpdateWebhookByIdRequestBodyArgTargetField = serializeUpdateWebhookByIdRequestBodyArgTargetField;
function deserializeUpdateWebhookByIdRequestBodyArgTargetField(val) {
    const id = (0, json_js_3.isJson)(val.id, "string") ? val.id : void 0;
    const type = val.type == void 0 ? void 0 : deserializeUpdateWebhookByIdRequestBodyArgTargetFieldTypeField(val.type);
    return { id: id, type: type };
}
exports.deserializeUpdateWebhookByIdRequestBodyArgTargetField = deserializeUpdateWebhookByIdRequestBodyArgTargetField;
function serializeUpdateWebhookByIdRequestBodyArgTriggersField(val) {
    return val;
}
exports.serializeUpdateWebhookByIdRequestBodyArgTriggersField = serializeUpdateWebhookByIdRequestBodyArgTriggersField;
function deserializeUpdateWebhookByIdRequestBodyArgTriggersField(val) {
    if (!(0, json_js_3.isJson)(val, "string")) {
        throw "Expecting a string for \"UpdateWebhookByIdRequestBodyArgTriggersField\"";
    }
    if (val == "FILE.UPLOADED") {
        return "FILE.UPLOADED";
    }
    if (val == "FILE.PREVIEWED") {
        return "FILE.PREVIEWED";
    }
    if (val == "FILE.DOWNLOADED") {
        return "FILE.DOWNLOADED";
    }
    if (val == "FILE.TRASHED") {
        return "FILE.TRASHED";
    }
    if (val == "FILE.DELETED") {
        return "FILE.DELETED";
    }
    if (val == "FILE.RESTORED") {
        return "FILE.RESTORED";
    }
    if (val == "FILE.COPIED") {
        return "FILE.COPIED";
    }
    if (val == "FILE.MOVED") {
        return "FILE.MOVED";
    }
    if (val == "FILE.LOCKED") {
        return "FILE.LOCKED";
    }
    if (val == "FILE.UNLOCKED") {
        return "FILE.UNLOCKED";
    }
    if (val == "FILE.RENAMED") {
        return "FILE.RENAMED";
    }
    if (val == "COMMENT.CREATED") {
        return "COMMENT.CREATED";
    }
    if (val == "COMMENT.UPDATED") {
        return "COMMENT.UPDATED";
    }
    if (val == "COMMENT.DELETED") {
        return "COMMENT.DELETED";
    }
    if (val == "TASK_ASSIGNMENT.CREATED") {
        return "TASK_ASSIGNMENT.CREATED";
    }
    if (val == "TASK_ASSIGNMENT.UPDATED") {
        return "TASK_ASSIGNMENT.UPDATED";
    }
    if (val == "METADATA_INSTANCE.CREATED") {
        return "METADATA_INSTANCE.CREATED";
    }
    if (val == "METADATA_INSTANCE.UPDATED") {
        return "METADATA_INSTANCE.UPDATED";
    }
    if (val == "METADATA_INSTANCE.DELETED") {
        return "METADATA_INSTANCE.DELETED";
    }
    if (val == "FOLDER.CREATED") {
        return "FOLDER.CREATED";
    }
    if (val == "FOLDER.RENAMED") {
        return "FOLDER.RENAMED";
    }
    if (val == "FOLDER.DOWNLOADED") {
        return "FOLDER.DOWNLOADED";
    }
    if (val == "FOLDER.RESTORED") {
        return "FOLDER.RESTORED";
    }
    if (val == "FOLDER.DELETED") {
        return "FOLDER.DELETED";
    }
    if (val == "FOLDER.COPIED") {
        return "FOLDER.COPIED";
    }
    if (val == "FOLDER.MOVED") {
        return "FOLDER.MOVED";
    }
    if (val == "FOLDER.TRASHED") {
        return "FOLDER.TRASHED";
    }
    if (val == "WEBHOOK.DELETED") {
        return "WEBHOOK.DELETED";
    }
    if (val == "COLLABORATION.CREATED") {
        return "COLLABORATION.CREATED";
    }
    if (val == "COLLABORATION.ACCEPTED") {
        return "COLLABORATION.ACCEPTED";
    }
    if (val == "COLLABORATION.REJECTED") {
        return "COLLABORATION.REJECTED";
    }
    if (val == "COLLABORATION.REMOVED") {
        return "COLLABORATION.REMOVED";
    }
    if (val == "COLLABORATION.UPDATED") {
        return "COLLABORATION.UPDATED";
    }
    if (val == "SHARED_LINK.DELETED") {
        return "SHARED_LINK.DELETED";
    }
    if (val == "SHARED_LINK.CREATED") {
        return "SHARED_LINK.CREATED";
    }
    if (val == "SHARED_LINK.UPDATED") {
        return "SHARED_LINK.UPDATED";
    }
    if (val == "SIGN_REQUEST.COMPLETED") {
        return "SIGN_REQUEST.COMPLETED";
    }
    if (val == "SIGN_REQUEST.DECLINED") {
        return "SIGN_REQUEST.DECLINED";
    }
    if (val == "SIGN_REQUEST.EXPIRED") {
        return "SIGN_REQUEST.EXPIRED";
    }
    if (val == "SIGN_REQUEST.SIGNER_EMAIL_BOUNCED") {
        return "SIGN_REQUEST.SIGNER_EMAIL_BOUNCED";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeUpdateWebhookByIdRequestBodyArgTriggersField = deserializeUpdateWebhookByIdRequestBodyArgTriggersField;
function serializeUpdateWebhookByIdRequestBodyArg(val) {
    return { ["target"]: val.target == void 0 ? void 0 : serializeUpdateWebhookByIdRequestBodyArgTargetField(val.target), ["address"]: val.address, ["triggers"]: val.triggers == void 0 ? void 0 : val.triggers.map(function (item) {
            return serializeUpdateWebhookByIdRequestBodyArgTriggersField(item);
        }) };
}
exports.serializeUpdateWebhookByIdRequestBodyArg = serializeUpdateWebhookByIdRequestBodyArg;
function deserializeUpdateWebhookByIdRequestBodyArg(val) {
    const target = val.target == void 0 ? void 0 : deserializeUpdateWebhookByIdRequestBodyArgTargetField(val.target);
    const address = (0, json_js_3.isJson)(val.address, "string") ? val.address : void 0;
    const triggers = (0, json_js_3.isJson)(val.triggers, "array") ? val.triggers.map(function (itm) {
        return deserializeUpdateWebhookByIdRequestBodyArgTriggersField(itm);
    }) : void 0;
    return { target: target, address: address, triggers: triggers };
}
exports.deserializeUpdateWebhookByIdRequestBodyArg = deserializeUpdateWebhookByIdRequestBodyArg;
//# sourceMappingURL=webhooks.generated.js.map