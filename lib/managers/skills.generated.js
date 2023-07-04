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
exports.newDeserializeUpdateSkillInvocationByIdRequestBodyArg = exports.newSerializeUpdateSkillInvocationByIdRequestBodyArg = exports.newDeserializeUpdateSkillInvocationByIdRequestBodyArgUsageField = exports.newSerializeUpdateSkillInvocationByIdRequestBodyArgUsageField = exports.newDeserializeUpdateSkillInvocationByIdRequestBodyArgFileVersionField = exports.newSerializeUpdateSkillInvocationByIdRequestBodyArgFileVersionField = exports.newDeserializeUpdateSkillInvocationByIdRequestBodyArgFileVersionFieldTypeField = exports.newSerializeUpdateSkillInvocationByIdRequestBodyArgFileVersionFieldTypeField = exports.newDeserializeUpdateSkillInvocationByIdRequestBodyArgFileField = exports.newSerializeUpdateSkillInvocationByIdRequestBodyArgFileField = exports.newDeserializeUpdateSkillInvocationByIdRequestBodyArgFileFieldTypeField = exports.newSerializeUpdateSkillInvocationByIdRequestBodyArgFileFieldTypeField = exports.newDeserializeUpdateSkillInvocationByIdRequestBodyArgMetadataField = exports.newSerializeUpdateSkillInvocationByIdRequestBodyArgMetadataField = exports.newDeserializeUpdateSkillInvocationByIdRequestBodyArgStatusField = exports.newSerializeUpdateSkillInvocationByIdRequestBodyArgStatusField = exports.newDeserializeCreateFileMetadataGlobalBoxSkillsCardRequestBodyArg = exports.newSerializeCreateFileMetadataGlobalBoxSkillsCardRequestBodyArg = exports.SkillsManager = void 0;
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
            return (0, schemas_generated_js_1.newDeserializeSkillCardsMetadata)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    createFileMetadataGlobalBoxSkillsCard(fileId, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/files/", fileId, "/metadata/global/boxSkillsCards"), { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.newDeserializeSkillCardsMetadata)((0, json_js_1.deserializeJson)(response.text));
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
function newSerializeCreateFileMetadataGlobalBoxSkillsCardRequestBodyArg(val) {
    return { ["cards"]: val.cards.map(function (item) {
            return (0, schemas_generated_js_2.newSerializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard)(item);
        }) };
}
exports.newSerializeCreateFileMetadataGlobalBoxSkillsCardRequestBodyArg = newSerializeCreateFileMetadataGlobalBoxSkillsCardRequestBodyArg;
function newDeserializeCreateFileMetadataGlobalBoxSkillsCardRequestBodyArg(val) {
    const cards = val.cards.map(function (itm) {
        return (0, schemas_generated_js_3.newDeserializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard)(itm);
    });
    return { cards: cards };
}
exports.newDeserializeCreateFileMetadataGlobalBoxSkillsCardRequestBodyArg = newDeserializeCreateFileMetadataGlobalBoxSkillsCardRequestBodyArg;
function newSerializeUpdateSkillInvocationByIdRequestBodyArgStatusField(val) {
    return val;
}
exports.newSerializeUpdateSkillInvocationByIdRequestBodyArgStatusField = newSerializeUpdateSkillInvocationByIdRequestBodyArgStatusField;
function newDeserializeUpdateSkillInvocationByIdRequestBodyArgStatusField(val) {
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
exports.newDeserializeUpdateSkillInvocationByIdRequestBodyArgStatusField = newDeserializeUpdateSkillInvocationByIdRequestBodyArgStatusField;
function newSerializeUpdateSkillInvocationByIdRequestBodyArgMetadataField(val) {
    return { ["cards"]: val.cards == void 0 ? void 0 : val.cards.map(function (item) {
            return (0, schemas_generated_js_2.newSerializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard)(item);
        }) };
}
exports.newSerializeUpdateSkillInvocationByIdRequestBodyArgMetadataField = newSerializeUpdateSkillInvocationByIdRequestBodyArgMetadataField;
function newDeserializeUpdateSkillInvocationByIdRequestBodyArgMetadataField(val) {
    const cards = (0, json_js_2.isJson)(val.cards, "array") ? val.cards.map(function (itm) {
        return (0, schemas_generated_js_3.newDeserializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard)(itm);
    }) : void 0;
    return { cards: cards };
}
exports.newDeserializeUpdateSkillInvocationByIdRequestBodyArgMetadataField = newDeserializeUpdateSkillInvocationByIdRequestBodyArgMetadataField;
function newSerializeUpdateSkillInvocationByIdRequestBodyArgFileFieldTypeField(val) {
    return val;
}
exports.newSerializeUpdateSkillInvocationByIdRequestBodyArgFileFieldTypeField = newSerializeUpdateSkillInvocationByIdRequestBodyArgFileFieldTypeField;
function newDeserializeUpdateSkillInvocationByIdRequestBodyArgFileFieldTypeField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
        throw "Expecting a string for \"UpdateSkillInvocationByIdRequestBodyArgFileFieldTypeField\"";
    }
    if (val == "file") {
        return "file";
    }
    throw "".concat("Invalid value: ", val);
}
exports.newDeserializeUpdateSkillInvocationByIdRequestBodyArgFileFieldTypeField = newDeserializeUpdateSkillInvocationByIdRequestBodyArgFileFieldTypeField;
function newSerializeUpdateSkillInvocationByIdRequestBodyArgFileField(val) {
    return { ["type"]: val.type == void 0 ? void 0 : newSerializeUpdateSkillInvocationByIdRequestBodyArgFileFieldTypeField(val.type), ["id"]: val.id };
}
exports.newSerializeUpdateSkillInvocationByIdRequestBodyArgFileField = newSerializeUpdateSkillInvocationByIdRequestBodyArgFileField;
function newDeserializeUpdateSkillInvocationByIdRequestBodyArgFileField(val) {
    const type = val.type == void 0 ? void 0 : newDeserializeUpdateSkillInvocationByIdRequestBodyArgFileFieldTypeField(val.type);
    const id = (0, json_js_2.isJson)(val.id, "string") ? val.id : void 0;
    return { type: type, id: id };
}
exports.newDeserializeUpdateSkillInvocationByIdRequestBodyArgFileField = newDeserializeUpdateSkillInvocationByIdRequestBodyArgFileField;
function newSerializeUpdateSkillInvocationByIdRequestBodyArgFileVersionFieldTypeField(val) {
    return val;
}
exports.newSerializeUpdateSkillInvocationByIdRequestBodyArgFileVersionFieldTypeField = newSerializeUpdateSkillInvocationByIdRequestBodyArgFileVersionFieldTypeField;
function newDeserializeUpdateSkillInvocationByIdRequestBodyArgFileVersionFieldTypeField(val) {
    if (!(0, json_js_2.isJson)(val, "string")) {
        throw "Expecting a string for \"UpdateSkillInvocationByIdRequestBodyArgFileVersionFieldTypeField\"";
    }
    if (val == "file_version") {
        return "file_version";
    }
    throw "".concat("Invalid value: ", val);
}
exports.newDeserializeUpdateSkillInvocationByIdRequestBodyArgFileVersionFieldTypeField = newDeserializeUpdateSkillInvocationByIdRequestBodyArgFileVersionFieldTypeField;
function newSerializeUpdateSkillInvocationByIdRequestBodyArgFileVersionField(val) {
    return { ["type"]: val.type == void 0 ? void 0 : newSerializeUpdateSkillInvocationByIdRequestBodyArgFileVersionFieldTypeField(val.type), ["id"]: val.id };
}
exports.newSerializeUpdateSkillInvocationByIdRequestBodyArgFileVersionField = newSerializeUpdateSkillInvocationByIdRequestBodyArgFileVersionField;
function newDeserializeUpdateSkillInvocationByIdRequestBodyArgFileVersionField(val) {
    const type = val.type == void 0 ? void 0 : newDeserializeUpdateSkillInvocationByIdRequestBodyArgFileVersionFieldTypeField(val.type);
    const id = (0, json_js_2.isJson)(val.id, "string") ? val.id : void 0;
    return { type: type, id: id };
}
exports.newDeserializeUpdateSkillInvocationByIdRequestBodyArgFileVersionField = newDeserializeUpdateSkillInvocationByIdRequestBodyArgFileVersionField;
function newSerializeUpdateSkillInvocationByIdRequestBodyArgUsageField(val) {
    return { ["unit"]: val.unit, ["value"]: val.value };
}
exports.newSerializeUpdateSkillInvocationByIdRequestBodyArgUsageField = newSerializeUpdateSkillInvocationByIdRequestBodyArgUsageField;
function newDeserializeUpdateSkillInvocationByIdRequestBodyArgUsageField(val) {
    const unit = (0, json_js_2.isJson)(val.unit, "string") ? val.unit : void 0;
    const value = (0, json_js_2.isJson)(val.value, "number") ? val.value : void 0;
    return { unit: unit, value: value };
}
exports.newDeserializeUpdateSkillInvocationByIdRequestBodyArgUsageField = newDeserializeUpdateSkillInvocationByIdRequestBodyArgUsageField;
function newSerializeUpdateSkillInvocationByIdRequestBodyArg(val) {
    return { ["status"]: newSerializeUpdateSkillInvocationByIdRequestBodyArgStatusField(val.status), ["metadata"]: newSerializeUpdateSkillInvocationByIdRequestBodyArgMetadataField(val.metadata), ["file"]: newSerializeUpdateSkillInvocationByIdRequestBodyArgFileField(val.file), ["fileVersion"]: val.fileVersion == void 0 ? void 0 : newSerializeUpdateSkillInvocationByIdRequestBodyArgFileVersionField(val.fileVersion), ["usage"]: val.usage == void 0 ? void 0 : newSerializeUpdateSkillInvocationByIdRequestBodyArgUsageField(val.usage) };
}
exports.newSerializeUpdateSkillInvocationByIdRequestBodyArg = newSerializeUpdateSkillInvocationByIdRequestBodyArg;
function newDeserializeUpdateSkillInvocationByIdRequestBodyArg(val) {
    const status = newDeserializeUpdateSkillInvocationByIdRequestBodyArgStatusField(val.status);
    const metadata = newDeserializeUpdateSkillInvocationByIdRequestBodyArgMetadataField(val.metadata);
    const file = newDeserializeUpdateSkillInvocationByIdRequestBodyArgFileField(val.file);
    const fileVersion = val.fileVersion == void 0 ? void 0 : newDeserializeUpdateSkillInvocationByIdRequestBodyArgFileVersionField(val.fileVersion);
    const usage = val.usage == void 0 ? void 0 : newDeserializeUpdateSkillInvocationByIdRequestBodyArgUsageField(val.usage);
    return { status: status, metadata: metadata, file: file, fileVersion: fileVersion, usage: usage };
}
exports.newDeserializeUpdateSkillInvocationByIdRequestBodyArg = newDeserializeUpdateSkillInvocationByIdRequestBodyArg;
//# sourceMappingURL=skills.generated.js.map