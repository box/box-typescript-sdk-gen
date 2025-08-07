"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusSkillCard = exports.StatusSkillCardInvocationField = exports.StatusSkillCardSkillField = void 0;
exports.serializeStatusSkillCardTypeField = serializeStatusSkillCardTypeField;
exports.deserializeStatusSkillCardTypeField = deserializeStatusSkillCardTypeField;
exports.serializeStatusSkillCardSkillCardTypeField = serializeStatusSkillCardSkillCardTypeField;
exports.deserializeStatusSkillCardSkillCardTypeField = deserializeStatusSkillCardSkillCardTypeField;
exports.serializeStatusSkillCardSkillCardTitleField = serializeStatusSkillCardSkillCardTitleField;
exports.deserializeStatusSkillCardSkillCardTitleField = deserializeStatusSkillCardSkillCardTitleField;
exports.serializeStatusSkillCardStatusCodeField = serializeStatusSkillCardStatusCodeField;
exports.deserializeStatusSkillCardStatusCodeField = deserializeStatusSkillCardStatusCodeField;
exports.serializeStatusSkillCardStatusField = serializeStatusSkillCardStatusField;
exports.deserializeStatusSkillCardStatusField = deserializeStatusSkillCardStatusField;
exports.serializeStatusSkillCardSkillTypeField = serializeStatusSkillCardSkillTypeField;
exports.deserializeStatusSkillCardSkillTypeField = deserializeStatusSkillCardSkillTypeField;
exports.serializeStatusSkillCardSkillField = serializeStatusSkillCardSkillField;
exports.deserializeStatusSkillCardSkillField = deserializeStatusSkillCardSkillField;
exports.serializeStatusSkillCardSkillFieldInput = serializeStatusSkillCardSkillFieldInput;
exports.deserializeStatusSkillCardSkillFieldInput = deserializeStatusSkillCardSkillFieldInput;
exports.serializeStatusSkillCardInvocationTypeField = serializeStatusSkillCardInvocationTypeField;
exports.deserializeStatusSkillCardInvocationTypeField = deserializeStatusSkillCardInvocationTypeField;
exports.serializeStatusSkillCardInvocationField = serializeStatusSkillCardInvocationField;
exports.deserializeStatusSkillCardInvocationField = deserializeStatusSkillCardInvocationField;
exports.serializeStatusSkillCardInvocationFieldInput = serializeStatusSkillCardInvocationFieldInput;
exports.deserializeStatusSkillCardInvocationFieldInput = deserializeStatusSkillCardInvocationFieldInput;
exports.serializeStatusSkillCard = serializeStatusSkillCard;
exports.deserializeStatusSkillCard = deserializeStatusSkillCard;
exports.serializeStatusSkillCardInput = serializeStatusSkillCardInput;
exports.deserializeStatusSkillCardInput = deserializeStatusSkillCardInput;
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
class StatusSkillCardSkillField {
    constructor(fields) {
        /**
         * The value will always be `service`. */
        this.type = 'service';
        if (fields.type !== undefined) {
            this.type = fields.type;
        }
        if (fields.id !== undefined) {
            this.id = fields.id;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
exports.StatusSkillCardSkillField = StatusSkillCardSkillField;
class StatusSkillCardInvocationField {
    constructor(fields) {
        /**
         * The value will always be `skill_invocation`. */
        this.type = 'skill_invocation';
        if (fields.type !== undefined) {
            this.type = fields.type;
        }
        if (fields.id !== undefined) {
            this.id = fields.id;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
exports.StatusSkillCardInvocationField = StatusSkillCardInvocationField;
class StatusSkillCard {
    constructor(fields) {
        /**
         * The value will always be `skill_card`. */
        this.type = 'skill_card';
        /**
         * The value will always be `status`. */
        this.skillCardType = 'status';
        if (fields.createdAt !== undefined) {
            this.createdAt = fields.createdAt;
        }
        if (fields.type !== undefined) {
            this.type = fields.type;
        }
        if (fields.skillCardType !== undefined) {
            this.skillCardType = fields.skillCardType;
        }
        if (fields.skillCardTitle !== undefined) {
            this.skillCardTitle = fields.skillCardTitle;
        }
        if (fields.status !== undefined) {
            this.status = fields.status;
        }
        if (fields.skill !== undefined) {
            this.skill = fields.skill;
        }
        if (fields.invocation !== undefined) {
            this.invocation = fields.invocation;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
exports.StatusSkillCard = StatusSkillCard;
function serializeStatusSkillCardTypeField(val) {
    return val;
}
function deserializeStatusSkillCardTypeField(val) {
    if (val == 'skill_card') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize StatusSkillCardTypeField",
    });
}
function serializeStatusSkillCardSkillCardTypeField(val) {
    return val;
}
function deserializeStatusSkillCardSkillCardTypeField(val) {
    if (val == 'status') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize StatusSkillCardSkillCardTypeField",
    });
}
function serializeStatusSkillCardSkillCardTitleField(val) {
    return { ['code']: val.code, ['message']: val.message };
}
function deserializeStatusSkillCardSkillCardTitleField(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "StatusSkillCardSkillCardTitleField"',
        });
    }
    if (!(val.code == void 0) && !(0, json_js_1.sdIsString)(val.code)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "code" of type "StatusSkillCardSkillCardTitleField"',
        });
    }
    const code = val.code == void 0 ? void 0 : val.code;
    if (val.message == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "message" of type "StatusSkillCardSkillCardTitleField" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.message)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "message" of type "StatusSkillCardSkillCardTitleField"',
        });
    }
    const message = val.message;
    return {
        code: code,
        message: message,
    };
}
function serializeStatusSkillCardStatusCodeField(val) {
    return val;
}
function deserializeStatusSkillCardStatusCodeField(val) {
    if (val == 'invoked') {
        return val;
    }
    if (val == 'processing') {
        return val;
    }
    if (val == 'success') {
        return val;
    }
    if (val == 'transient_failure') {
        return val;
    }
    if (val == 'permanent_failure') {
        return val;
    }
    if ((0, json_js_1.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize StatusSkillCardStatusCodeField",
    });
}
function serializeStatusSkillCardStatusField(val) {
    return {
        ['code']: serializeStatusSkillCardStatusCodeField(val.code),
        ['message']: val.message,
    };
}
function deserializeStatusSkillCardStatusField(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "StatusSkillCardStatusField"',
        });
    }
    if (val.code == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "code" of type "StatusSkillCardStatusField" to be defined',
        });
    }
    const code = deserializeStatusSkillCardStatusCodeField(val.code);
    if (!(val.message == void 0) && !(0, json_js_1.sdIsString)(val.message)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "message" of type "StatusSkillCardStatusField"',
        });
    }
    const message = val.message == void 0 ? void 0 : val.message;
    return { code: code, message: message };
}
function serializeStatusSkillCardSkillTypeField(val) {
    return val;
}
function deserializeStatusSkillCardSkillTypeField(val) {
    if (val == 'service') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize StatusSkillCardSkillTypeField",
    });
}
function serializeStatusSkillCardSkillField(val) {
    return {
        ['type']: serializeStatusSkillCardSkillTypeField(val.type),
        ['id']: val.id,
    };
}
function deserializeStatusSkillCardSkillField(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "StatusSkillCardSkillField"',
        });
    }
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "StatusSkillCardSkillField" to be defined',
        });
    }
    const type = deserializeStatusSkillCardSkillTypeField(val.type);
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "StatusSkillCardSkillField" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "StatusSkillCardSkillField"',
        });
    }
    const id = val.id;
    return { type: type, id: id };
}
function serializeStatusSkillCardSkillFieldInput(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeStatusSkillCardSkillTypeField(val.type),
        ['id']: val.id,
    };
}
function deserializeStatusSkillCardSkillFieldInput(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "StatusSkillCardSkillFieldInput"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeStatusSkillCardSkillTypeField(val.type);
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "StatusSkillCardSkillFieldInput" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "StatusSkillCardSkillFieldInput"',
        });
    }
    const id = val.id;
    return { type: type, id: id };
}
function serializeStatusSkillCardInvocationTypeField(val) {
    return val;
}
function deserializeStatusSkillCardInvocationTypeField(val) {
    if (val == 'skill_invocation') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize StatusSkillCardInvocationTypeField",
    });
}
function serializeStatusSkillCardInvocationField(val) {
    return {
        ['type']: serializeStatusSkillCardInvocationTypeField(val.type),
        ['id']: val.id,
    };
}
function deserializeStatusSkillCardInvocationField(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "StatusSkillCardInvocationField"',
        });
    }
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "StatusSkillCardInvocationField" to be defined',
        });
    }
    const type = deserializeStatusSkillCardInvocationTypeField(val.type);
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "StatusSkillCardInvocationField" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "StatusSkillCardInvocationField"',
        });
    }
    const id = val.id;
    return { type: type, id: id };
}
function serializeStatusSkillCardInvocationFieldInput(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeStatusSkillCardInvocationTypeField(val.type),
        ['id']: val.id,
    };
}
function deserializeStatusSkillCardInvocationFieldInput(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "StatusSkillCardInvocationFieldInput"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeStatusSkillCardInvocationTypeField(val.type);
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "StatusSkillCardInvocationFieldInput" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "StatusSkillCardInvocationFieldInput"',
        });
    }
    const id = val.id;
    return { type: type, id: id };
}
function serializeStatusSkillCard(val) {
    return {
        ['created_at']: val.createdAt == void 0
            ? val.createdAt
            : (0, utils_js_1.serializeDateTime)(val.createdAt),
        ['type']: serializeStatusSkillCardTypeField(val.type),
        ['skill_card_type']: serializeStatusSkillCardSkillCardTypeField(val.skillCardType),
        ['skill_card_title']: val.skillCardTitle == void 0
            ? val.skillCardTitle
            : serializeStatusSkillCardSkillCardTitleField(val.skillCardTitle),
        ['status']: serializeStatusSkillCardStatusField(val.status),
        ['skill']: serializeStatusSkillCardSkillField(val.skill),
        ['invocation']: serializeStatusSkillCardInvocationField(val.invocation),
    };
}
function deserializeStatusSkillCard(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "StatusSkillCard"' });
    }
    if (!(val.created_at == void 0) && !(0, json_js_1.sdIsString)(val.created_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "created_at" of type "StatusSkillCard"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.created_at);
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "StatusSkillCard" to be defined',
        });
    }
    const type = deserializeStatusSkillCardTypeField(val.type);
    if (val.skill_card_type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "skill_card_type" of type "StatusSkillCard" to be defined',
        });
    }
    const skillCardType = deserializeStatusSkillCardSkillCardTypeField(val.skill_card_type);
    const skillCardTitle = val.skill_card_title == void 0
        ? void 0
        : deserializeStatusSkillCardSkillCardTitleField(val.skill_card_title);
    if (val.status == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "status" of type "StatusSkillCard" to be defined',
        });
    }
    const status = deserializeStatusSkillCardStatusField(val.status);
    if (val.skill == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "skill" of type "StatusSkillCard" to be defined',
        });
    }
    const skill = deserializeStatusSkillCardSkillField(val.skill);
    if (val.invocation == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "invocation" of type "StatusSkillCard" to be defined',
        });
    }
    const invocation = deserializeStatusSkillCardInvocationField(val.invocation);
    return {
        createdAt: createdAt,
        type: type,
        skillCardType: skillCardType,
        skillCardTitle: skillCardTitle,
        status: status,
        skill: skill,
        invocation: invocation,
    };
}
function serializeStatusSkillCardInput(val) {
    return {
        ['created_at']: val.createdAt == void 0
            ? val.createdAt
            : (0, utils_js_1.serializeDateTime)(val.createdAt),
        ['type']: val.type == void 0
            ? val.type
            : serializeStatusSkillCardTypeField(val.type),
        ['skillCardType']: val.skillCardType == void 0
            ? val.skillCardType
            : serializeStatusSkillCardSkillCardTypeField(val.skillCardType),
        ['skill_card_title']: val.skillCardTitle == void 0
            ? val.skillCardTitle
            : serializeStatusSkillCardSkillCardTitleField(val.skillCardTitle),
        ['status']: serializeStatusSkillCardStatusField(val.status),
        ['skill']: serializeStatusSkillCardSkillField(val.skill),
        ['invocation']: serializeStatusSkillCardInvocationField(val.invocation),
    };
}
function deserializeStatusSkillCardInput(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "StatusSkillCardInput"',
        });
    }
    if (!(val.created_at == void 0) && !(0, json_js_1.sdIsString)(val.created_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "created_at" of type "StatusSkillCardInput"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.created_at);
    const type = val.type == void 0 ? void 0 : deserializeStatusSkillCardTypeField(val.type);
    const skillCardType = val.skillCardType == void 0
        ? void 0
        : deserializeStatusSkillCardSkillCardTypeField(val.skillCardType);
    const skillCardTitle = val.skill_card_title == void 0
        ? void 0
        : deserializeStatusSkillCardSkillCardTitleField(val.skill_card_title);
    if (val.status == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "status" of type "StatusSkillCardInput" to be defined',
        });
    }
    const status = deserializeStatusSkillCardStatusField(val.status);
    if (val.skill == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "skill" of type "StatusSkillCardInput" to be defined',
        });
    }
    const skill = deserializeStatusSkillCardSkillField(val.skill);
    if (val.invocation == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "invocation" of type "StatusSkillCardInput" to be defined',
        });
    }
    const invocation = deserializeStatusSkillCardInvocationField(val.invocation);
    return {
        createdAt: createdAt,
        type: type,
        skillCardType: skillCardType,
        skillCardTitle: skillCardTitle,
        status: status,
        skill: skill,
        invocation: invocation,
    };
}
//# sourceMappingURL=statusSkillCard.generated.js.map