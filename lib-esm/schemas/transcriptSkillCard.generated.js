import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class TranscriptSkillCardSkillField {
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
export class TranscriptSkillCardInvocationField {
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
export class TranscriptSkillCard {
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
export function serializeTranscriptSkillCardTypeField(val) {
    return val;
}
export function deserializeTranscriptSkillCardTypeField(val) {
    if (val == 'skill_card') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize TranscriptSkillCardTypeField",
    });
}
export function serializeTranscriptSkillCardSkillCardTypeField(val) {
    return val;
}
export function deserializeTranscriptSkillCardSkillCardTypeField(val) {
    if (val == 'transcript') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize TranscriptSkillCardSkillCardTypeField",
    });
}
export function serializeTranscriptSkillCardSkillCardTitleField(val) {
    return { ['code']: val.code, ['message']: val.message };
}
export function deserializeTranscriptSkillCardSkillCardTitleField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "TranscriptSkillCardSkillCardTitleField"',
        });
    }
    if (!(val.code == void 0) && !sdIsString(val.code)) {
        throw new BoxSdkError({
            message: 'Expecting string for "code" of type "TranscriptSkillCardSkillCardTitleField"',
        });
    }
    const code = val.code == void 0 ? void 0 : val.code;
    if (val.message == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "message" of type "TranscriptSkillCardSkillCardTitleField" to be defined',
        });
    }
    if (!sdIsString(val.message)) {
        throw new BoxSdkError({
            message: 'Expecting string for "message" of type "TranscriptSkillCardSkillCardTitleField"',
        });
    }
    const message = val.message;
    return {
        code: code,
        message: message,
    };
}
export function serializeTranscriptSkillCardSkillTypeField(val) {
    return val;
}
export function deserializeTranscriptSkillCardSkillTypeField(val) {
    if (val == 'service') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize TranscriptSkillCardSkillTypeField",
    });
}
export function serializeTranscriptSkillCardSkillField(val) {
    return {
        ['type']: serializeTranscriptSkillCardSkillTypeField(val.type),
        ['id']: val.id,
    };
}
export function deserializeTranscriptSkillCardSkillField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "TranscriptSkillCardSkillField"',
        });
    }
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "TranscriptSkillCardSkillField" to be defined',
        });
    }
    const type = deserializeTranscriptSkillCardSkillTypeField(val.type);
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "TranscriptSkillCardSkillField" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "TranscriptSkillCardSkillField"',
        });
    }
    const id = val.id;
    return { type: type, id: id };
}
export function serializeTranscriptSkillCardSkillFieldInput(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeTranscriptSkillCardSkillTypeField(val.type),
        ['id']: val.id,
    };
}
export function deserializeTranscriptSkillCardSkillFieldInput(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "TranscriptSkillCardSkillFieldInput"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeTranscriptSkillCardSkillTypeField(val.type);
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "TranscriptSkillCardSkillFieldInput" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "TranscriptSkillCardSkillFieldInput"',
        });
    }
    const id = val.id;
    return { type: type, id: id };
}
export function serializeTranscriptSkillCardInvocationTypeField(val) {
    return val;
}
export function deserializeTranscriptSkillCardInvocationTypeField(val) {
    if (val == 'skill_invocation') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize TranscriptSkillCardInvocationTypeField",
    });
}
export function serializeTranscriptSkillCardInvocationField(val) {
    return {
        ['type']: serializeTranscriptSkillCardInvocationTypeField(val.type),
        ['id']: val.id,
    };
}
export function deserializeTranscriptSkillCardInvocationField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "TranscriptSkillCardInvocationField"',
        });
    }
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "TranscriptSkillCardInvocationField" to be defined',
        });
    }
    const type = deserializeTranscriptSkillCardInvocationTypeField(val.type);
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "TranscriptSkillCardInvocationField" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "TranscriptSkillCardInvocationField"',
        });
    }
    const id = val.id;
    return { type: type, id: id };
}
export function serializeTranscriptSkillCardInvocationFieldInput(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeTranscriptSkillCardInvocationTypeField(val.type),
        ['id']: val.id,
    };
}
export function deserializeTranscriptSkillCardInvocationFieldInput(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "TranscriptSkillCardInvocationFieldInput"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeTranscriptSkillCardInvocationTypeField(val.type);
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "TranscriptSkillCardInvocationFieldInput" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "TranscriptSkillCardInvocationFieldInput"',
        });
    }
    const id = val.id;
    return {
        type: type,
        id: id,
    };
}
export function serializeTranscriptSkillCardEntriesAppearsField(val) {
    return { ['start']: val.start };
}
export function deserializeTranscriptSkillCardEntriesAppearsField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "TranscriptSkillCardEntriesAppearsField"',
        });
    }
    if (!(val.start == void 0) && !sdIsNumber(val.start)) {
        throw new BoxSdkError({
            message: 'Expecting number for "start" of type "TranscriptSkillCardEntriesAppearsField"',
        });
    }
    const start = val.start == void 0 ? void 0 : val.start;
    return { start: start };
}
export function serializeTranscriptSkillCardEntriesField(val) {
    return {
        ['text']: val.text,
        ['appears']: val.appears == void 0
            ? val.appears
            : val.appears.map(function (item) {
                return serializeTranscriptSkillCardEntriesAppearsField(item);
            }),
    };
}
export function deserializeTranscriptSkillCardEntriesField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "TranscriptSkillCardEntriesField"',
        });
    }
    if (!(val.text == void 0) && !sdIsString(val.text)) {
        throw new BoxSdkError({
            message: 'Expecting string for "text" of type "TranscriptSkillCardEntriesField"',
        });
    }
    const text = val.text == void 0 ? void 0 : val.text;
    if (!(val.appears == void 0) && !sdIsList(val.appears)) {
        throw new BoxSdkError({
            message: 'Expecting array for "appears" of type "TranscriptSkillCardEntriesField"',
        });
    }
    const appears = val.appears == void 0
        ? void 0
        : sdIsList(val.appears)
            ? val.appears.map(function (itm) {
                return deserializeTranscriptSkillCardEntriesAppearsField(itm);
            })
            : [];
    return {
        text: text,
        appears: appears,
    };
}
export function serializeTranscriptSkillCard(val) {
    return {
        ['created_at']: val.createdAt == void 0
            ? val.createdAt
            : serializeDateTime(val.createdAt),
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
export function deserializeTranscriptSkillCard(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "TranscriptSkillCard"',
        });
    }
    if (!(val.created_at == void 0) && !sdIsString(val.created_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "created_at" of type "TranscriptSkillCard"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "TranscriptSkillCard" to be defined',
        });
    }
    const type = deserializeTranscriptSkillCardTypeField(val.type);
    if (val.skill_card_type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "skill_card_type" of type "TranscriptSkillCard" to be defined',
        });
    }
    const skillCardType = deserializeTranscriptSkillCardSkillCardTypeField(val.skill_card_type);
    const skillCardTitle = val.skill_card_title == void 0
        ? void 0
        : deserializeTranscriptSkillCardSkillCardTitleField(val.skill_card_title);
    if (val.skill == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "skill" of type "TranscriptSkillCard" to be defined',
        });
    }
    const skill = deserializeTranscriptSkillCardSkillField(val.skill);
    if (val.invocation == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "invocation" of type "TranscriptSkillCard" to be defined',
        });
    }
    const invocation = deserializeTranscriptSkillCardInvocationField(val.invocation);
    if (!(val.duration == void 0) && !sdIsNumber(val.duration)) {
        throw new BoxSdkError({
            message: 'Expecting number for "duration" of type "TranscriptSkillCard"',
        });
    }
    const duration = val.duration == void 0 ? void 0 : val.duration;
    if (val.entries == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "entries" of type "TranscriptSkillCard" to be defined',
        });
    }
    if (!sdIsList(val.entries)) {
        throw new BoxSdkError({
            message: 'Expecting array for "entries" of type "TranscriptSkillCard"',
        });
    }
    const entries = sdIsList(val.entries)
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
export function serializeTranscriptSkillCardInput(val) {
    return {
        ['created_at']: val.createdAt == void 0
            ? val.createdAt
            : serializeDateTime(val.createdAt),
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
export function deserializeTranscriptSkillCardInput(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "TranscriptSkillCardInput"',
        });
    }
    if (!(val.created_at == void 0) && !sdIsString(val.created_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "created_at" of type "TranscriptSkillCardInput"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
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
        throw new BoxSdkError({
            message: 'Expecting "skill" of type "TranscriptSkillCardInput" to be defined',
        });
    }
    const skill = deserializeTranscriptSkillCardSkillField(val.skill);
    if (val.invocation == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "invocation" of type "TranscriptSkillCardInput" to be defined',
        });
    }
    const invocation = deserializeTranscriptSkillCardInvocationField(val.invocation);
    if (!(val.duration == void 0) && !sdIsNumber(val.duration)) {
        throw new BoxSdkError({
            message: 'Expecting number for "duration" of type "TranscriptSkillCardInput"',
        });
    }
    const duration = val.duration == void 0 ? void 0 : val.duration;
    if (val.entries == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "entries" of type "TranscriptSkillCardInput" to be defined',
        });
    }
    if (!sdIsList(val.entries)) {
        throw new BoxSdkError({
            message: 'Expecting array for "entries" of type "TranscriptSkillCardInput"',
        });
    }
    const entries = sdIsList(val.entries)
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