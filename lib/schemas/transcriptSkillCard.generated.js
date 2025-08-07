"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranscriptSkillCard = exports.TranscriptSkillCardInvocationField = exports.TranscriptSkillCardSkillField = void 0;
exports.serializeTranscriptSkillCardTypeField = serializeTranscriptSkillCardTypeField;
exports.deserializeTranscriptSkillCardTypeField = deserializeTranscriptSkillCardTypeField;
exports.serializeTranscriptSkillCardSkillCardTypeField = serializeTranscriptSkillCardSkillCardTypeField;
exports.deserializeTranscriptSkillCardSkillCardTypeField = deserializeTranscriptSkillCardSkillCardTypeField;
exports.serializeTranscriptSkillCardSkillCardTitleField = serializeTranscriptSkillCardSkillCardTitleField;
exports.deserializeTranscriptSkillCardSkillCardTitleField = deserializeTranscriptSkillCardSkillCardTitleField;
exports.serializeTranscriptSkillCardSkillTypeField = serializeTranscriptSkillCardSkillTypeField;
exports.deserializeTranscriptSkillCardSkillTypeField = deserializeTranscriptSkillCardSkillTypeField;
exports.serializeTranscriptSkillCardSkillField = serializeTranscriptSkillCardSkillField;
exports.deserializeTranscriptSkillCardSkillField = deserializeTranscriptSkillCardSkillField;
exports.serializeTranscriptSkillCardSkillFieldInput = serializeTranscriptSkillCardSkillFieldInput;
exports.deserializeTranscriptSkillCardSkillFieldInput = deserializeTranscriptSkillCardSkillFieldInput;
exports.serializeTranscriptSkillCardInvocationTypeField = serializeTranscriptSkillCardInvocationTypeField;
exports.deserializeTranscriptSkillCardInvocationTypeField = deserializeTranscriptSkillCardInvocationTypeField;
exports.serializeTranscriptSkillCardInvocationField = serializeTranscriptSkillCardInvocationField;
exports.deserializeTranscriptSkillCardInvocationField = deserializeTranscriptSkillCardInvocationField;
exports.serializeTranscriptSkillCardInvocationFieldInput = serializeTranscriptSkillCardInvocationFieldInput;
exports.deserializeTranscriptSkillCardInvocationFieldInput = deserializeTranscriptSkillCardInvocationFieldInput;
exports.serializeTranscriptSkillCardEntriesAppearsField = serializeTranscriptSkillCardEntriesAppearsField;
exports.deserializeTranscriptSkillCardEntriesAppearsField = deserializeTranscriptSkillCardEntriesAppearsField;
exports.serializeTranscriptSkillCardEntriesField = serializeTranscriptSkillCardEntriesField;
exports.deserializeTranscriptSkillCardEntriesField = deserializeTranscriptSkillCardEntriesField;
exports.serializeTranscriptSkillCard = serializeTranscriptSkillCard;
exports.deserializeTranscriptSkillCard = deserializeTranscriptSkillCard;
exports.serializeTranscriptSkillCardInput = serializeTranscriptSkillCardInput;
exports.deserializeTranscriptSkillCardInput = deserializeTranscriptSkillCardInput;
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
const json_js_4 = require("../serialization/json.js");
class TranscriptSkillCardSkillField {
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
exports.TranscriptSkillCardSkillField = TranscriptSkillCardSkillField;
class TranscriptSkillCardInvocationField {
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
exports.TranscriptSkillCardInvocationField = TranscriptSkillCardInvocationField;
class TranscriptSkillCard {
    constructor(fields) {
        /**
         * The value will always be `skill_card`. */
        this.type = 'skill_card';
        /**
         * The value will always be `transcript`. */
        this.skillCardType = 'transcript';
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
        if (fields.duration !== undefined) {
            this.duration = fields.duration;
        }
        if (fields.entries !== undefined) {
            this.entries = fields.entries;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
exports.TranscriptSkillCard = TranscriptSkillCard;
function serializeTranscriptSkillCardTypeField(val) {
    return val;
}
function deserializeTranscriptSkillCardTypeField(val) {
    if (val == 'skill_card') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize TranscriptSkillCardTypeField",
    });
}
function serializeTranscriptSkillCardSkillCardTypeField(val) {
    return val;
}
function deserializeTranscriptSkillCardSkillCardTypeField(val) {
    if (val == 'transcript') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize TranscriptSkillCardSkillCardTypeField",
    });
}
function serializeTranscriptSkillCardSkillCardTitleField(val) {
    return { ['code']: val.code, ['message']: val.message };
}
function deserializeTranscriptSkillCardSkillCardTitleField(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "TranscriptSkillCardSkillCardTitleField"',
        });
    }
    if (!(val.code == void 0) && !(0, json_js_2.sdIsString)(val.code)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "code" of type "TranscriptSkillCardSkillCardTitleField"',
        });
    }
    const code = val.code == void 0 ? void 0 : val.code;
    if (val.message == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "message" of type "TranscriptSkillCardSkillCardTitleField" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.message)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "message" of type "TranscriptSkillCardSkillCardTitleField"',
        });
    }
    const message = val.message;
    return {
        code: code,
        message: message,
    };
}
function serializeTranscriptSkillCardSkillTypeField(val) {
    return val;
}
function deserializeTranscriptSkillCardSkillTypeField(val) {
    if (val == 'service') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize TranscriptSkillCardSkillTypeField",
    });
}
function serializeTranscriptSkillCardSkillField(val) {
    return {
        ['type']: serializeTranscriptSkillCardSkillTypeField(val.type),
        ['id']: val.id,
    };
}
function deserializeTranscriptSkillCardSkillField(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "TranscriptSkillCardSkillField"',
        });
    }
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "TranscriptSkillCardSkillField" to be defined',
        });
    }
    const type = deserializeTranscriptSkillCardSkillTypeField(val.type);
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "TranscriptSkillCardSkillField" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "TranscriptSkillCardSkillField"',
        });
    }
    const id = val.id;
    return { type: type, id: id };
}
function serializeTranscriptSkillCardSkillFieldInput(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeTranscriptSkillCardSkillTypeField(val.type),
        ['id']: val.id,
    };
}
function deserializeTranscriptSkillCardSkillFieldInput(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "TranscriptSkillCardSkillFieldInput"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeTranscriptSkillCardSkillTypeField(val.type);
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "TranscriptSkillCardSkillFieldInput" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "TranscriptSkillCardSkillFieldInput"',
        });
    }
    const id = val.id;
    return { type: type, id: id };
}
function serializeTranscriptSkillCardInvocationTypeField(val) {
    return val;
}
function deserializeTranscriptSkillCardInvocationTypeField(val) {
    if (val == 'skill_invocation') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize TranscriptSkillCardInvocationTypeField",
    });
}
function serializeTranscriptSkillCardInvocationField(val) {
    return {
        ['type']: serializeTranscriptSkillCardInvocationTypeField(val.type),
        ['id']: val.id,
    };
}
function deserializeTranscriptSkillCardInvocationField(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "TranscriptSkillCardInvocationField"',
        });
    }
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "TranscriptSkillCardInvocationField" to be defined',
        });
    }
    const type = deserializeTranscriptSkillCardInvocationTypeField(val.type);
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "TranscriptSkillCardInvocationField" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "TranscriptSkillCardInvocationField"',
        });
    }
    const id = val.id;
    return { type: type, id: id };
}
function serializeTranscriptSkillCardInvocationFieldInput(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeTranscriptSkillCardInvocationTypeField(val.type),
        ['id']: val.id,
    };
}
function deserializeTranscriptSkillCardInvocationFieldInput(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "TranscriptSkillCardInvocationFieldInput"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeTranscriptSkillCardInvocationTypeField(val.type);
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "TranscriptSkillCardInvocationFieldInput" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "TranscriptSkillCardInvocationFieldInput"',
        });
    }
    const id = val.id;
    return {
        type: type,
        id: id,
    };
}
function serializeTranscriptSkillCardEntriesAppearsField(val) {
    return { ['start']: val.start };
}
function deserializeTranscriptSkillCardEntriesAppearsField(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "TranscriptSkillCardEntriesAppearsField"',
        });
    }
    if (!(val.start == void 0) && !(0, json_js_1.sdIsNumber)(val.start)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "start" of type "TranscriptSkillCardEntriesAppearsField"',
        });
    }
    const start = val.start == void 0 ? void 0 : val.start;
    return { start: start };
}
function serializeTranscriptSkillCardEntriesField(val) {
    return {
        ['text']: val.text,
        ['appears']: val.appears == void 0
            ? val.appears
            : val.appears.map(function (item) {
                return serializeTranscriptSkillCardEntriesAppearsField(item);
            }),
    };
}
function deserializeTranscriptSkillCardEntriesField(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "TranscriptSkillCardEntriesField"',
        });
    }
    if (!(val.text == void 0) && !(0, json_js_2.sdIsString)(val.text)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "text" of type "TranscriptSkillCardEntriesField"',
        });
    }
    const text = val.text == void 0 ? void 0 : val.text;
    if (!(val.appears == void 0) && !(0, json_js_3.sdIsList)(val.appears)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "appears" of type "TranscriptSkillCardEntriesField"',
        });
    }
    const appears = val.appears == void 0
        ? void 0
        : (0, json_js_3.sdIsList)(val.appears)
            ? val.appears.map(function (itm) {
                return deserializeTranscriptSkillCardEntriesAppearsField(itm);
            })
            : [];
    return {
        text: text,
        appears: appears,
    };
}
function serializeTranscriptSkillCard(val) {
    return {
        ['created_at']: val.createdAt == void 0
            ? val.createdAt
            : (0, utils_js_1.serializeDateTime)(val.createdAt),
        ['type']: serializeTranscriptSkillCardTypeField(val.type),
        ['skill_card_type']: serializeTranscriptSkillCardSkillCardTypeField(val.skillCardType),
        ['skill_card_title']: val.skillCardTitle == void 0
            ? val.skillCardTitle
            : serializeTranscriptSkillCardSkillCardTitleField(val.skillCardTitle),
        ['skill']: serializeTranscriptSkillCardSkillField(val.skill),
        ['invocation']: serializeTranscriptSkillCardInvocationField(val.invocation),
        ['duration']: val.duration,
        ['entries']: val.entries.map(function (item) {
            return serializeTranscriptSkillCardEntriesField(item);
        }),
    };
}
function deserializeTranscriptSkillCard(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "TranscriptSkillCard"',
        });
    }
    if (!(val.created_at == void 0) && !(0, json_js_2.sdIsString)(val.created_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "created_at" of type "TranscriptSkillCard"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.created_at);
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "TranscriptSkillCard" to be defined',
        });
    }
    const type = deserializeTranscriptSkillCardTypeField(val.type);
    if (val.skill_card_type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "skill_card_type" of type "TranscriptSkillCard" to be defined',
        });
    }
    const skillCardType = deserializeTranscriptSkillCardSkillCardTypeField(val.skill_card_type);
    const skillCardTitle = val.skill_card_title == void 0
        ? void 0
        : deserializeTranscriptSkillCardSkillCardTitleField(val.skill_card_title);
    if (val.skill == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "skill" of type "TranscriptSkillCard" to be defined',
        });
    }
    const skill = deserializeTranscriptSkillCardSkillField(val.skill);
    if (val.invocation == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "invocation" of type "TranscriptSkillCard" to be defined',
        });
    }
    const invocation = deserializeTranscriptSkillCardInvocationField(val.invocation);
    if (!(val.duration == void 0) && !(0, json_js_1.sdIsNumber)(val.duration)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "duration" of type "TranscriptSkillCard"',
        });
    }
    const duration = val.duration == void 0 ? void 0 : val.duration;
    if (val.entries == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "entries" of type "TranscriptSkillCard" to be defined',
        });
    }
    if (!(0, json_js_3.sdIsList)(val.entries)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "entries" of type "TranscriptSkillCard"',
        });
    }
    const entries = (0, json_js_3.sdIsList)(val.entries)
        ? val.entries.map(function (itm) {
            return deserializeTranscriptSkillCardEntriesField(itm);
        })
        : [];
    return {
        createdAt: createdAt,
        type: type,
        skillCardType: skillCardType,
        skillCardTitle: skillCardTitle,
        skill: skill,
        invocation: invocation,
        duration: duration,
        entries: entries,
    };
}
function serializeTranscriptSkillCardInput(val) {
    return {
        ['created_at']: val.createdAt == void 0
            ? val.createdAt
            : (0, utils_js_1.serializeDateTime)(val.createdAt),
        ['type']: val.type == void 0
            ? val.type
            : serializeTranscriptSkillCardTypeField(val.type),
        ['skillCardType']: val.skillCardType == void 0
            ? val.skillCardType
            : serializeTranscriptSkillCardSkillCardTypeField(val.skillCardType),
        ['skill_card_title']: val.skillCardTitle == void 0
            ? val.skillCardTitle
            : serializeTranscriptSkillCardSkillCardTitleField(val.skillCardTitle),
        ['skill']: serializeTranscriptSkillCardSkillField(val.skill),
        ['invocation']: serializeTranscriptSkillCardInvocationField(val.invocation),
        ['duration']: val.duration,
        ['entries']: val.entries.map(function (item) {
            return serializeTranscriptSkillCardEntriesField(item);
        }),
    };
}
function deserializeTranscriptSkillCardInput(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "TranscriptSkillCardInput"',
        });
    }
    if (!(val.created_at == void 0) && !(0, json_js_2.sdIsString)(val.created_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "created_at" of type "TranscriptSkillCardInput"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.created_at);
    const type = val.type == void 0
        ? void 0
        : deserializeTranscriptSkillCardTypeField(val.type);
    const skillCardType = val.skillCardType == void 0
        ? void 0
        : deserializeTranscriptSkillCardSkillCardTypeField(val.skillCardType);
    const skillCardTitle = val.skill_card_title == void 0
        ? void 0
        : deserializeTranscriptSkillCardSkillCardTitleField(val.skill_card_title);
    if (val.skill == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "skill" of type "TranscriptSkillCardInput" to be defined',
        });
    }
    const skill = deserializeTranscriptSkillCardSkillField(val.skill);
    if (val.invocation == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "invocation" of type "TranscriptSkillCardInput" to be defined',
        });
    }
    const invocation = deserializeTranscriptSkillCardInvocationField(val.invocation);
    if (!(val.duration == void 0) && !(0, json_js_1.sdIsNumber)(val.duration)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "duration" of type "TranscriptSkillCardInput"',
        });
    }
    const duration = val.duration == void 0 ? void 0 : val.duration;
    if (val.entries == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "entries" of type "TranscriptSkillCardInput" to be defined',
        });
    }
    if (!(0, json_js_3.sdIsList)(val.entries)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "entries" of type "TranscriptSkillCardInput"',
        });
    }
    const entries = (0, json_js_3.sdIsList)(val.entries)
        ? val.entries.map(function (itm) {
            return deserializeTranscriptSkillCardEntriesField(itm);
        })
        : [];
    return {
        createdAt: createdAt,
        type: type,
        skillCardType: skillCardType,
        skillCardTitle: skillCardTitle,
        skill: skill,
        invocation: invocation,
        duration: duration,
        entries: entries,
    };
}
//# sourceMappingURL=transcriptSkillCard.generated.js.map