"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeywordSkillCard = exports.KeywordSkillCardInvocationField = exports.KeywordSkillCardSkillField = void 0;
exports.serializeKeywordSkillCardTypeField = serializeKeywordSkillCardTypeField;
exports.deserializeKeywordSkillCardTypeField = deserializeKeywordSkillCardTypeField;
exports.serializeKeywordSkillCardSkillCardTypeField = serializeKeywordSkillCardSkillCardTypeField;
exports.deserializeKeywordSkillCardSkillCardTypeField = deserializeKeywordSkillCardSkillCardTypeField;
exports.serializeKeywordSkillCardSkillCardTitleField = serializeKeywordSkillCardSkillCardTitleField;
exports.deserializeKeywordSkillCardSkillCardTitleField = deserializeKeywordSkillCardSkillCardTitleField;
exports.serializeKeywordSkillCardSkillTypeField = serializeKeywordSkillCardSkillTypeField;
exports.deserializeKeywordSkillCardSkillTypeField = deserializeKeywordSkillCardSkillTypeField;
exports.serializeKeywordSkillCardSkillField = serializeKeywordSkillCardSkillField;
exports.deserializeKeywordSkillCardSkillField = deserializeKeywordSkillCardSkillField;
exports.serializeKeywordSkillCardSkillFieldInput = serializeKeywordSkillCardSkillFieldInput;
exports.deserializeKeywordSkillCardSkillFieldInput = deserializeKeywordSkillCardSkillFieldInput;
exports.serializeKeywordSkillCardInvocationTypeField = serializeKeywordSkillCardInvocationTypeField;
exports.deserializeKeywordSkillCardInvocationTypeField = deserializeKeywordSkillCardInvocationTypeField;
exports.serializeKeywordSkillCardInvocationField = serializeKeywordSkillCardInvocationField;
exports.deserializeKeywordSkillCardInvocationField = deserializeKeywordSkillCardInvocationField;
exports.serializeKeywordSkillCardInvocationFieldInput = serializeKeywordSkillCardInvocationFieldInput;
exports.deserializeKeywordSkillCardInvocationFieldInput = deserializeKeywordSkillCardInvocationFieldInput;
exports.serializeKeywordSkillCardEntriesField = serializeKeywordSkillCardEntriesField;
exports.deserializeKeywordSkillCardEntriesField = deserializeKeywordSkillCardEntriesField;
exports.serializeKeywordSkillCard = serializeKeywordSkillCard;
exports.deserializeKeywordSkillCard = deserializeKeywordSkillCard;
exports.serializeKeywordSkillCardInput = serializeKeywordSkillCardInput;
exports.deserializeKeywordSkillCardInput = deserializeKeywordSkillCardInput;
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
class KeywordSkillCardSkillField {
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
exports.KeywordSkillCardSkillField = KeywordSkillCardSkillField;
class KeywordSkillCardInvocationField {
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
exports.KeywordSkillCardInvocationField = KeywordSkillCardInvocationField;
class KeywordSkillCard {
    constructor(fields) {
        /**
         * The value will always be `skill_card`. */
        this.type = 'skill_card';
        /**
         * The value will always be `keyword`. */
        this.skillCardType = 'keyword';
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
        if (fields.skill !== undefined) {
            this.skill = fields.skill;
        }
        if (fields.invocation !== undefined) {
            this.invocation = fields.invocation;
        }
        if (fields.entries !== undefined) {
            this.entries = fields.entries;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
exports.KeywordSkillCard = KeywordSkillCard;
function serializeKeywordSkillCardTypeField(val) {
    return val;
}
function deserializeKeywordSkillCardTypeField(val) {
    if (val == 'skill_card') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize KeywordSkillCardTypeField",
    });
}
function serializeKeywordSkillCardSkillCardTypeField(val) {
    return val;
}
function deserializeKeywordSkillCardSkillCardTypeField(val) {
    if (val == 'keyword') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize KeywordSkillCardSkillCardTypeField",
    });
}
function serializeKeywordSkillCardSkillCardTitleField(val) {
    return { ['code']: val.code, ['message']: val.message };
}
function deserializeKeywordSkillCardSkillCardTitleField(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "KeywordSkillCardSkillCardTitleField"',
        });
    }
    if (!(val.code == void 0) && !(0, json_js_1.sdIsString)(val.code)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "code" of type "KeywordSkillCardSkillCardTitleField"',
        });
    }
    const code = val.code == void 0 ? void 0 : val.code;
    if (val.message == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "message" of type "KeywordSkillCardSkillCardTitleField" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.message)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "message" of type "KeywordSkillCardSkillCardTitleField"',
        });
    }
    const message = val.message;
    return {
        code: code,
        message: message,
    };
}
function serializeKeywordSkillCardSkillTypeField(val) {
    return val;
}
function deserializeKeywordSkillCardSkillTypeField(val) {
    if (val == 'service') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize KeywordSkillCardSkillTypeField",
    });
}
function serializeKeywordSkillCardSkillField(val) {
    return {
        ['type']: serializeKeywordSkillCardSkillTypeField(val.type),
        ['id']: val.id,
    };
}
function deserializeKeywordSkillCardSkillField(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "KeywordSkillCardSkillField"',
        });
    }
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "KeywordSkillCardSkillField" to be defined',
        });
    }
    const type = deserializeKeywordSkillCardSkillTypeField(val.type);
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "KeywordSkillCardSkillField" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "KeywordSkillCardSkillField"',
        });
    }
    const id = val.id;
    return { type: type, id: id };
}
function serializeKeywordSkillCardSkillFieldInput(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeKeywordSkillCardSkillTypeField(val.type),
        ['id']: val.id,
    };
}
function deserializeKeywordSkillCardSkillFieldInput(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "KeywordSkillCardSkillFieldInput"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeKeywordSkillCardSkillTypeField(val.type);
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "KeywordSkillCardSkillFieldInput" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "KeywordSkillCardSkillFieldInput"',
        });
    }
    const id = val.id;
    return { type: type, id: id };
}
function serializeKeywordSkillCardInvocationTypeField(val) {
    return val;
}
function deserializeKeywordSkillCardInvocationTypeField(val) {
    if (val == 'skill_invocation') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize KeywordSkillCardInvocationTypeField",
    });
}
function serializeKeywordSkillCardInvocationField(val) {
    return {
        ['type']: serializeKeywordSkillCardInvocationTypeField(val.type),
        ['id']: val.id,
    };
}
function deserializeKeywordSkillCardInvocationField(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "KeywordSkillCardInvocationField"',
        });
    }
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "KeywordSkillCardInvocationField" to be defined',
        });
    }
    const type = deserializeKeywordSkillCardInvocationTypeField(val.type);
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "KeywordSkillCardInvocationField" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "KeywordSkillCardInvocationField"',
        });
    }
    const id = val.id;
    return { type: type, id: id };
}
function serializeKeywordSkillCardInvocationFieldInput(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeKeywordSkillCardInvocationTypeField(val.type),
        ['id']: val.id,
    };
}
function deserializeKeywordSkillCardInvocationFieldInput(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "KeywordSkillCardInvocationFieldInput"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeKeywordSkillCardInvocationTypeField(val.type);
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "KeywordSkillCardInvocationFieldInput" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "KeywordSkillCardInvocationFieldInput"',
        });
    }
    const id = val.id;
    return { type: type, id: id };
}
function serializeKeywordSkillCardEntriesField(val) {
    return { ['text']: val.text };
}
function deserializeKeywordSkillCardEntriesField(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "KeywordSkillCardEntriesField"',
        });
    }
    if (!(val.text == void 0) && !(0, json_js_1.sdIsString)(val.text)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "text" of type "KeywordSkillCardEntriesField"',
        });
    }
    const text = val.text == void 0 ? void 0 : val.text;
    return { text: text };
}
function serializeKeywordSkillCard(val) {
    return {
        ['created_at']: val.createdAt == void 0
            ? val.createdAt
            : (0, utils_js_1.serializeDateTime)(val.createdAt),
        ['type']: serializeKeywordSkillCardTypeField(val.type),
        ['skill_card_type']: serializeKeywordSkillCardSkillCardTypeField(val.skillCardType),
        ['skill_card_title']: val.skillCardTitle == void 0
            ? val.skillCardTitle
            : serializeKeywordSkillCardSkillCardTitleField(val.skillCardTitle),
        ['skill']: serializeKeywordSkillCardSkillField(val.skill),
        ['invocation']: serializeKeywordSkillCardInvocationField(val.invocation),
        ['entries']: val.entries.map(function (item) {
            return serializeKeywordSkillCardEntriesField(item);
        }),
    };
}
function deserializeKeywordSkillCard(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "KeywordSkillCard"',
        });
    }
    if (!(val.created_at == void 0) && !(0, json_js_1.sdIsString)(val.created_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "created_at" of type "KeywordSkillCard"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.created_at);
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "KeywordSkillCard" to be defined',
        });
    }
    const type = deserializeKeywordSkillCardTypeField(val.type);
    if (val.skill_card_type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "skill_card_type" of type "KeywordSkillCard" to be defined',
        });
    }
    const skillCardType = deserializeKeywordSkillCardSkillCardTypeField(val.skill_card_type);
    const skillCardTitle = val.skill_card_title == void 0
        ? void 0
        : deserializeKeywordSkillCardSkillCardTitleField(val.skill_card_title);
    if (val.skill == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "skill" of type "KeywordSkillCard" to be defined',
        });
    }
    const skill = deserializeKeywordSkillCardSkillField(val.skill);
    if (val.invocation == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "invocation" of type "KeywordSkillCard" to be defined',
        });
    }
    const invocation = deserializeKeywordSkillCardInvocationField(val.invocation);
    if (val.entries == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "entries" of type "KeywordSkillCard" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsList)(val.entries)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "entries" of type "KeywordSkillCard"',
        });
    }
    const entries = (0, json_js_2.sdIsList)(val.entries)
        ? val.entries.map(function (itm) {
            return deserializeKeywordSkillCardEntriesField(itm);
        })
        : [];
    return {
        createdAt: createdAt,
        type: type,
        skillCardType: skillCardType,
        skillCardTitle: skillCardTitle,
        skill: skill,
        invocation: invocation,
        entries: entries,
    };
}
function serializeKeywordSkillCardInput(val) {
    return {
        ['created_at']: val.createdAt == void 0
            ? val.createdAt
            : (0, utils_js_1.serializeDateTime)(val.createdAt),
        ['type']: val.type == void 0
            ? val.type
            : serializeKeywordSkillCardTypeField(val.type),
        ['skillCardType']: val.skillCardType == void 0
            ? val.skillCardType
            : serializeKeywordSkillCardSkillCardTypeField(val.skillCardType),
        ['skill_card_title']: val.skillCardTitle == void 0
            ? val.skillCardTitle
            : serializeKeywordSkillCardSkillCardTitleField(val.skillCardTitle),
        ['skill']: serializeKeywordSkillCardSkillField(val.skill),
        ['invocation']: serializeKeywordSkillCardInvocationField(val.invocation),
        ['entries']: val.entries.map(function (item) {
            return serializeKeywordSkillCardEntriesField(item);
        }),
    };
}
function deserializeKeywordSkillCardInput(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "KeywordSkillCardInput"',
        });
    }
    if (!(val.created_at == void 0) && !(0, json_js_1.sdIsString)(val.created_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "created_at" of type "KeywordSkillCardInput"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.created_at);
    const type = val.type == void 0
        ? void 0
        : deserializeKeywordSkillCardTypeField(val.type);
    const skillCardType = val.skillCardType == void 0
        ? void 0
        : deserializeKeywordSkillCardSkillCardTypeField(val.skillCardType);
    const skillCardTitle = val.skill_card_title == void 0
        ? void 0
        : deserializeKeywordSkillCardSkillCardTitleField(val.skill_card_title);
    if (val.skill == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "skill" of type "KeywordSkillCardInput" to be defined',
        });
    }
    const skill = deserializeKeywordSkillCardSkillField(val.skill);
    if (val.invocation == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "invocation" of type "KeywordSkillCardInput" to be defined',
        });
    }
    const invocation = deserializeKeywordSkillCardInvocationField(val.invocation);
    if (val.entries == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "entries" of type "KeywordSkillCardInput" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsList)(val.entries)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "entries" of type "KeywordSkillCardInput"',
        });
    }
    const entries = (0, json_js_2.sdIsList)(val.entries)
        ? val.entries.map(function (itm) {
            return deserializeKeywordSkillCardEntriesField(itm);
        })
        : [];
    return {
        createdAt: createdAt,
        type: type,
        skillCardType: skillCardType,
        skillCardTitle: skillCardTitle,
        skill: skill,
        invocation: invocation,
        entries: entries,
    };
}
//# sourceMappingURL=keywordSkillCard.generated.js.map