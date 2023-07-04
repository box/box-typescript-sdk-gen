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
exports.newDeserializeUpdateWebhookByIdRequestBodyArg = exports.newSerializeUpdateWebhookByIdRequestBodyArg = exports.newDeserializeUpdateWebhookByIdRequestBodyArgTriggersField = exports.newSerializeUpdateWebhookByIdRequestBodyArgTriggersField = exports.newDeserializeUpdateWebhookByIdRequestBodyArgTargetField = exports.newSerializeUpdateWebhookByIdRequestBodyArgTargetField = exports.newDeserializeUpdateWebhookByIdRequestBodyArgTargetFieldTypeField = exports.newSerializeUpdateWebhookByIdRequestBodyArgTargetFieldTypeField = exports.newDeserializeCreateWebhookRequestBodyArg = exports.newSerializeCreateWebhookRequestBodyArg = exports.newDeserializeCreateWebhookRequestBodyArgTriggersField = exports.newSerializeCreateWebhookRequestBodyArgTriggersField = exports.newDeserializeCreateWebhookRequestBodyArgTargetField = exports.newSerializeCreateWebhookRequestBodyArgTargetField = exports.newDeserializeCreateWebhookRequestBodyArgTargetFieldTypeField = exports.newSerializeCreateWebhookRequestBodyArgTargetFieldTypeField = exports.newDeserializeGetWebhooksQueryParamsArg = exports.newSerializeGetWebhooksQueryParamsArg = exports.WebhooksManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
class WebhooksManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getWebhooks(queryParams = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/webhooks"), { method: "GET", params: (0, utils_js_1.toMap)(queryParams), auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.newDeserializeWebhooks)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    createWebhook(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/webhooks"), { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.newDeserializeWebhook)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    getWebhookById(webhookId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/webhooks/", webhookId), { method: "GET", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.newDeserializeWebhook)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    updateWebhookById(webhookId, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/webhooks/", webhookId), { method: "PUT", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_2.newDeserializeWebhook)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteWebhookById(webhookId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/webhooks/", webhookId), { method: "DELETE", auth: this.auth, networkSession: this.networkSession });
            return response.content;
        });
    }
}
exports.WebhooksManager = WebhooksManager;
function newSerializeGetWebhooksQueryParamsArg(val) {
    return { ["marker"]: val.marker, ["limit"]: val.limit };
}
exports.newSerializeGetWebhooksQueryParamsArg = newSerializeGetWebhooksQueryParamsArg;
function newDeserializeGetWebhooksQueryParamsArg(val) {
    const marker = (0, json_js_2.isJson)(val.marker, "string") ? val.marker : void 0;
    const limit = (0, json_js_2.isJson)(val.limit, "number") ? val.limit : void 0;
    return { marker: marker, limit: limit };
}
exports.newDeserializeGetWebhooksQueryParamsArg = newDeserializeGetWebhooksQueryParamsArg;
function newSerializeCreateWebhookRequestBodyArgTargetFieldTypeField(val) {
    return val;
}
exports.newSerializeCreateWebhookRequestBodyArgTargetFieldTypeField = newSerializeCreateWebhookRequestBodyArgTargetFieldTypeField;
function newDeserializeCreateWebhookRequestBodyArgTargetFieldTypeField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
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
exports.newDeserializeCreateWebhookRequestBodyArgTargetFieldTypeField = newDeserializeCreateWebhookRequestBodyArgTargetFieldTypeField;
function newSerializeCreateWebhookRequestBodyArgTargetField(val) {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : newSerializeCreateWebhookRequestBodyArgTargetFieldTypeField(val.type) };
}
exports.newSerializeCreateWebhookRequestBodyArgTargetField = newSerializeCreateWebhookRequestBodyArgTargetField;
function newDeserializeCreateWebhookRequestBodyArgTargetField(val) {
    const id = (0, json_js_2.isJson)(val.id, "string") ? val.id : void 0;
    const type = val.type == void 0 ? void 0 : newDeserializeCreateWebhookRequestBodyArgTargetFieldTypeField(val.type);
    return { id: id, type: type };
}
exports.newDeserializeCreateWebhookRequestBodyArgTargetField = newDeserializeCreateWebhookRequestBodyArgTargetField;
function newSerializeCreateWebhookRequestBodyArgTriggersField(val) {
    return val;
}
exports.newSerializeCreateWebhookRequestBodyArgTriggersField = newSerializeCreateWebhookRequestBodyArgTriggersField;
function newDeserializeCreateWebhookRequestBodyArgTriggersField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
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
exports.newDeserializeCreateWebhookRequestBodyArgTriggersField = newDeserializeCreateWebhookRequestBodyArgTriggersField;
function newSerializeCreateWebhookRequestBodyArg(val) {
    return { ["target"]: newSerializeCreateWebhookRequestBodyArgTargetField(val.target), ["address"]: val.address, ["triggers"]: val.triggers.map(function (item) {
            return newSerializeCreateWebhookRequestBodyArgTriggersField(item);
        }) };
}
exports.newSerializeCreateWebhookRequestBodyArg = newSerializeCreateWebhookRequestBodyArg;
function newDeserializeCreateWebhookRequestBodyArg(val) {
    const target = newDeserializeCreateWebhookRequestBodyArgTargetField(val.target);
    const address = val.address;
    const triggers = val.triggers.map(function (itm) {
        return newDeserializeCreateWebhookRequestBodyArgTriggersField(itm);
    });
    return { target: target, address: address, triggers: triggers };
}
exports.newDeserializeCreateWebhookRequestBodyArg = newDeserializeCreateWebhookRequestBodyArg;
function newSerializeUpdateWebhookByIdRequestBodyArgTargetFieldTypeField(val) {
    return val;
}
exports.newSerializeUpdateWebhookByIdRequestBodyArgTargetFieldTypeField = newSerializeUpdateWebhookByIdRequestBodyArgTargetFieldTypeField;
function newDeserializeUpdateWebhookByIdRequestBodyArgTargetFieldTypeField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
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
exports.newDeserializeUpdateWebhookByIdRequestBodyArgTargetFieldTypeField = newDeserializeUpdateWebhookByIdRequestBodyArgTargetFieldTypeField;
function newSerializeUpdateWebhookByIdRequestBodyArgTargetField(val) {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : newSerializeUpdateWebhookByIdRequestBodyArgTargetFieldTypeField(val.type) };
}
exports.newSerializeUpdateWebhookByIdRequestBodyArgTargetField = newSerializeUpdateWebhookByIdRequestBodyArgTargetField;
function newDeserializeUpdateWebhookByIdRequestBodyArgTargetField(val) {
    const id = (0, json_js_2.isJson)(val.id, "string") ? val.id : void 0;
    const type = val.type == void 0 ? void 0 : newDeserializeUpdateWebhookByIdRequestBodyArgTargetFieldTypeField(val.type);
    return { id: id, type: type };
}
exports.newDeserializeUpdateWebhookByIdRequestBodyArgTargetField = newDeserializeUpdateWebhookByIdRequestBodyArgTargetField;
function newSerializeUpdateWebhookByIdRequestBodyArgTriggersField(val) {
    return val;
}
exports.newSerializeUpdateWebhookByIdRequestBodyArgTriggersField = newSerializeUpdateWebhookByIdRequestBodyArgTriggersField;
function newDeserializeUpdateWebhookByIdRequestBodyArgTriggersField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
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
exports.newDeserializeUpdateWebhookByIdRequestBodyArgTriggersField = newDeserializeUpdateWebhookByIdRequestBodyArgTriggersField;
function newSerializeUpdateWebhookByIdRequestBodyArg(val) {
    return { ["target"]: val.target == void 0 ? void 0 : newSerializeUpdateWebhookByIdRequestBodyArgTargetField(val.target), ["address"]: val.address, ["triggers"]: val.triggers == void 0 ? void 0 : val.triggers.map(function (item) {
            return newSerializeUpdateWebhookByIdRequestBodyArgTriggersField(item);
        }) };
}
exports.newSerializeUpdateWebhookByIdRequestBodyArg = newSerializeUpdateWebhookByIdRequestBodyArg;
function newDeserializeUpdateWebhookByIdRequestBodyArg(val) {
    const target = val.target == void 0 ? void 0 : newDeserializeUpdateWebhookByIdRequestBodyArgTargetField(val.target);
    const address = (0, json_js_2.isJson)(val.address, "string") ? val.address : void 0;
    const triggers = (0, json_js_2.isJson)(val.triggers, "array") ? val.triggers.map(function (itm) {
        return newDeserializeUpdateWebhookByIdRequestBodyArgTriggersField(itm);
    }) : void 0;
    return { target: target, address: address, triggers: triggers };
}
exports.newDeserializeUpdateWebhookByIdRequestBodyArg = newDeserializeUpdateWebhookByIdRequestBodyArg;
//# sourceMappingURL=webhooks.generated.js.map