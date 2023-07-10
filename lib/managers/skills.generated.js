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
exports.deserializeUpdateSkillInvocationByIdRequestBodyArg = exports.serializeUpdateSkillInvocationByIdRequestBodyArg = exports.deserializeUpdateSkillInvocationByIdRequestBodyArgUsageField = exports.serializeUpdateSkillInvocationByIdRequestBodyArgUsageField = exports.deserializeUpdateSkillInvocationByIdRequestBodyArgFileVersionField = exports.serializeUpdateSkillInvocationByIdRequestBodyArgFileVersionField = exports.deserializeUpdateSkillInvocationByIdRequestBodyArgFileVersionFieldTypeField = exports.serializeUpdateSkillInvocationByIdRequestBodyArgFileVersionFieldTypeField = exports.deserializeUpdateSkillInvocationByIdRequestBodyArgFileField = exports.serializeUpdateSkillInvocationByIdRequestBodyArgFileField = exports.deserializeUpdateSkillInvocationByIdRequestBodyArgFileFieldTypeField = exports.serializeUpdateSkillInvocationByIdRequestBodyArgFileFieldTypeField = exports.deserializeUpdateSkillInvocationByIdRequestBodyArgMetadataField = exports.serializeUpdateSkillInvocationByIdRequestBodyArgMetadataField = exports.deserializeUpdateSkillInvocationByIdRequestBodyArgStatusField = exports.serializeUpdateSkillInvocationByIdRequestBodyArgStatusField = exports.deserializeCreateFileMetadataGlobalBoxSkillsCardRequestBodyArg = exports.serializeCreateFileMetadataGlobalBoxSkillsCardRequestBodyArg = exports.SkillsManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const schemas_generated_js_2 = require("../schemas.generated.js");
const schemas_generated_js_3 = require("../schemas.generated.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
const json_js_2 = require("../json.js");
class SkillsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getFileMetadataGlobalBoxSkillsCards(fileId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId, "/metadata/global/boxSkillsCards"), { method: "GET", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeSkillCardsMetadata)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    createFileMetadataGlobalBoxSkillsCard(fileId, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId, "/metadata/global/boxSkillsCards"), { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeSkillCardsMetadata)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteFileMetadataGlobalBoxSkillsCard(fileId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId, "/metadata/global/boxSkillsCards"), { method: "DELETE", auth: this.auth, networkSession: this.networkSession });
            return response.content;
        });
    }
    updateSkillInvocationById(skillId, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/skill_invocations/", skillId), { method: "PUT", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return response.content;
        });
    }
}
exports.SkillsManager = SkillsManager;
function serializeCreateFileMetadataGlobalBoxSkillsCardRequestBodyArg(val) {
    return { ["cards"]: val.cards.map(function (item) {
            return (0, schemas_generated_js_2.serializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard)(item);
        }) };
}
exports.serializeCreateFileMetadataGlobalBoxSkillsCardRequestBodyArg = serializeCreateFileMetadataGlobalBoxSkillsCardRequestBodyArg;
function deserializeCreateFileMetadataGlobalBoxSkillsCardRequestBodyArg(val) {
    const cards = val.cards.map(function (itm) {
        return (0, schemas_generated_js_3.deserializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard)(itm);
    });
    return { cards: cards };
}
exports.deserializeCreateFileMetadataGlobalBoxSkillsCardRequestBodyArg = deserializeCreateFileMetadataGlobalBoxSkillsCardRequestBodyArg;
function serializeUpdateSkillInvocationByIdRequestBodyArgStatusField(val) {
    return val;
}
exports.serializeUpdateSkillInvocationByIdRequestBodyArgStatusField = serializeUpdateSkillInvocationByIdRequestBodyArgStatusField;
function deserializeUpdateSkillInvocationByIdRequestBodyArgStatusField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
        throw "Expecting a string for \"UpdateSkillInvocationByIdRequestBodyArgStatusField\"";
    }
    if (val == "invoked") {
        return "invoked";
    }
    if (val == "processing") {
        return "processing";
    }
    if (val == "success") {
        return "success";
    }
    if (val == "transient_failure") {
        return "transient_failure";
    }
    if (val == "permanent_failure") {
        return "permanent_failure";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeUpdateSkillInvocationByIdRequestBodyArgStatusField = deserializeUpdateSkillInvocationByIdRequestBodyArgStatusField;
function serializeUpdateSkillInvocationByIdRequestBodyArgMetadataField(val) {
    return { ["cards"]: val.cards == void 0 ? void 0 : val.cards.map(function (item) {
            return (0, schemas_generated_js_2.serializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard)(item);
        }) };
}
exports.serializeUpdateSkillInvocationByIdRequestBodyArgMetadataField = serializeUpdateSkillInvocationByIdRequestBodyArgMetadataField;
function deserializeUpdateSkillInvocationByIdRequestBodyArgMetadataField(val) {
    const cards = (0, json_js_2.isJson)(val.cards, "array") ? val.cards.map(function (itm) {
        return (0, schemas_generated_js_3.deserializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard)(itm);
    }) : void 0;
    return { cards: cards };
}
exports.deserializeUpdateSkillInvocationByIdRequestBodyArgMetadataField = deserializeUpdateSkillInvocationByIdRequestBodyArgMetadataField;
function serializeUpdateSkillInvocationByIdRequestBodyArgFileFieldTypeField(val) {
    return val;
}
exports.serializeUpdateSkillInvocationByIdRequestBodyArgFileFieldTypeField = serializeUpdateSkillInvocationByIdRequestBodyArgFileFieldTypeField;
function deserializeUpdateSkillInvocationByIdRequestBodyArgFileFieldTypeField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
        throw "Expecting a string for \"UpdateSkillInvocationByIdRequestBodyArgFileFieldTypeField\"";
    }
    if (val == "file") {
        return "file";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeUpdateSkillInvocationByIdRequestBodyArgFileFieldTypeField = deserializeUpdateSkillInvocationByIdRequestBodyArgFileFieldTypeField;
function serializeUpdateSkillInvocationByIdRequestBodyArgFileField(val) {
    return { ["type"]: val.type == void 0 ? void 0 : serializeUpdateSkillInvocationByIdRequestBodyArgFileFieldTypeField(val.type), ["id"]: val.id };
}
exports.serializeUpdateSkillInvocationByIdRequestBodyArgFileField = serializeUpdateSkillInvocationByIdRequestBodyArgFileField;
function deserializeUpdateSkillInvocationByIdRequestBodyArgFileField(val) {
    const type = val.type == void 0 ? void 0 : deserializeUpdateSkillInvocationByIdRequestBodyArgFileFieldTypeField(val.type);
    const id = (0, json_js_2.isJson)(val.id, "string") ? val.id : void 0;
    return { type: type, id: id };
}
exports.deserializeUpdateSkillInvocationByIdRequestBodyArgFileField = deserializeUpdateSkillInvocationByIdRequestBodyArgFileField;
function serializeUpdateSkillInvocationByIdRequestBodyArgFileVersionFieldTypeField(val) {
    return val;
}
exports.serializeUpdateSkillInvocationByIdRequestBodyArgFileVersionFieldTypeField = serializeUpdateSkillInvocationByIdRequestBodyArgFileVersionFieldTypeField;
function deserializeUpdateSkillInvocationByIdRequestBodyArgFileVersionFieldTypeField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
        throw "Expecting a string for \"UpdateSkillInvocationByIdRequestBodyArgFileVersionFieldTypeField\"";
    }
    if (val == "file_version") {
        return "file_version";
    }
    throw "".concat("Invalid value: ", val);
}
exports.deserializeUpdateSkillInvocationByIdRequestBodyArgFileVersionFieldTypeField = deserializeUpdateSkillInvocationByIdRequestBodyArgFileVersionFieldTypeField;
function serializeUpdateSkillInvocationByIdRequestBodyArgFileVersionField(val) {
    return { ["type"]: val.type == void 0 ? void 0 : serializeUpdateSkillInvocationByIdRequestBodyArgFileVersionFieldTypeField(val.type), ["id"]: val.id };
}
exports.serializeUpdateSkillInvocationByIdRequestBodyArgFileVersionField = serializeUpdateSkillInvocationByIdRequestBodyArgFileVersionField;
function deserializeUpdateSkillInvocationByIdRequestBodyArgFileVersionField(val) {
    const type = val.type == void 0 ? void 0 : deserializeUpdateSkillInvocationByIdRequestBodyArgFileVersionFieldTypeField(val.type);
    const id = (0, json_js_2.isJson)(val.id, "string") ? val.id : void 0;
    return { type: type, id: id };
}
exports.deserializeUpdateSkillInvocationByIdRequestBodyArgFileVersionField = deserializeUpdateSkillInvocationByIdRequestBodyArgFileVersionField;
function serializeUpdateSkillInvocationByIdRequestBodyArgUsageField(val) {
    return { ["unit"]: val.unit, ["value"]: val.value };
}
exports.serializeUpdateSkillInvocationByIdRequestBodyArgUsageField = serializeUpdateSkillInvocationByIdRequestBodyArgUsageField;
function deserializeUpdateSkillInvocationByIdRequestBodyArgUsageField(val) {
    const unit = (0, json_js_2.isJson)(val.unit, "string") ? val.unit : void 0;
    const value = (0, json_js_2.isJson)(val.value, "number") ? val.value : void 0;
    return { unit: unit, value: value };
}
exports.deserializeUpdateSkillInvocationByIdRequestBodyArgUsageField = deserializeUpdateSkillInvocationByIdRequestBodyArgUsageField;
function serializeUpdateSkillInvocationByIdRequestBodyArg(val) {
    return { ["status"]: serializeUpdateSkillInvocationByIdRequestBodyArgStatusField(val.status), ["metadata"]: serializeUpdateSkillInvocationByIdRequestBodyArgMetadataField(val.metadata), ["file"]: serializeUpdateSkillInvocationByIdRequestBodyArgFileField(val.file), ["fileVersion"]: val.fileVersion == void 0 ? void 0 : serializeUpdateSkillInvocationByIdRequestBodyArgFileVersionField(val.fileVersion), ["usage"]: val.usage == void 0 ? void 0 : serializeUpdateSkillInvocationByIdRequestBodyArgUsageField(val.usage) };
}
exports.serializeUpdateSkillInvocationByIdRequestBodyArg = serializeUpdateSkillInvocationByIdRequestBodyArg;
function deserializeUpdateSkillInvocationByIdRequestBodyArg(val) {
    const status = deserializeUpdateSkillInvocationByIdRequestBodyArgStatusField(val.status);
    const metadata = deserializeUpdateSkillInvocationByIdRequestBodyArgMetadataField(val.metadata);
    const file = deserializeUpdateSkillInvocationByIdRequestBodyArgFileField(val.file);
    const fileVersion = val.fileVersion == void 0 ? void 0 : deserializeUpdateSkillInvocationByIdRequestBodyArgFileVersionField(val.fileVersion);
    const usage = val.usage == void 0 ? void 0 : deserializeUpdateSkillInvocationByIdRequestBodyArgUsageField(val.usage);
    return { status: status, metadata: metadata, file: file, fileVersion: fileVersion, usage: usage };
}
exports.deserializeUpdateSkillInvocationByIdRequestBodyArg = deserializeUpdateSkillInvocationByIdRequestBodyArg;
//# sourceMappingURL=skills.generated.js.map