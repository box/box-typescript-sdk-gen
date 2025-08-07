import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class TimelineSkillCardSkillField {
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
export class TimelineSkillCardInvocationField {
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
export class TimelineSkillCard {
    constructor(fields) {
        /**
         * The value will always be `skill_card`. */
        this.type = 'skill_card';
        /**
         * The value will always be `timeline`. */
        this.skillCardType = 'timeline';
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
export function serializeTimelineSkillCardTypeField(val) {
    return val;
}
export function deserializeTimelineSkillCardTypeField(val) {
    if (val == 'skill_card') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize TimelineSkillCardTypeField",
    });
}
export function serializeTimelineSkillCardSkillCardTypeField(val) {
    return val;
}
export function deserializeTimelineSkillCardSkillCardTypeField(val) {
    if (val == 'timeline') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize TimelineSkillCardSkillCardTypeField",
    });
}
export function serializeTimelineSkillCardSkillCardTitleField(val) {
    return { ['code']: val.code, ['message']: val.message };
}
export function deserializeTimelineSkillCardSkillCardTitleField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "TimelineSkillCardSkillCardTitleField"',
        });
    }
    if (!(val.code == void 0) && !sdIsString(val.code)) {
        throw new BoxSdkError({
            message: 'Expecting string for "code" of type "TimelineSkillCardSkillCardTitleField"',
        });
    }
    const code = val.code == void 0 ? void 0 : val.code;
    if (val.message == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "message" of type "TimelineSkillCardSkillCardTitleField" to be defined',
        });
    }
    if (!sdIsString(val.message)) {
        throw new BoxSdkError({
            message: 'Expecting string for "message" of type "TimelineSkillCardSkillCardTitleField"',
        });
    }
    const message = val.message;
    return {
        code: code,
        message: message,
    };
}
export function serializeTimelineSkillCardSkillTypeField(val) {
    return val;
}
export function deserializeTimelineSkillCardSkillTypeField(val) {
    if (val == 'service') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize TimelineSkillCardSkillTypeField",
    });
}
export function serializeTimelineSkillCardSkillField(val) {
    return {
        ['type']: serializeTimelineSkillCardSkillTypeField(val.type),
        ['id']: val.id,
    };
}
export function deserializeTimelineSkillCardSkillField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "TimelineSkillCardSkillField"',
        });
    }
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "TimelineSkillCardSkillField" to be defined',
        });
    }
    const type = deserializeTimelineSkillCardSkillTypeField(val.type);
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "TimelineSkillCardSkillField" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "TimelineSkillCardSkillField"',
        });
    }
    const id = val.id;
    return { type: type, id: id };
}
export function serializeTimelineSkillCardSkillFieldInput(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeTimelineSkillCardSkillTypeField(val.type),
        ['id']: val.id,
    };
}
export function deserializeTimelineSkillCardSkillFieldInput(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "TimelineSkillCardSkillFieldInput"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeTimelineSkillCardSkillTypeField(val.type);
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "TimelineSkillCardSkillFieldInput" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "TimelineSkillCardSkillFieldInput"',
        });
    }
    const id = val.id;
    return { type: type, id: id };
}
export function serializeTimelineSkillCardInvocationTypeField(val) {
    return val;
}
export function deserializeTimelineSkillCardInvocationTypeField(val) {
    if (val == 'skill_invocation') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize TimelineSkillCardInvocationTypeField",
    });
}
export function serializeTimelineSkillCardInvocationField(val) {
    return {
        ['type']: serializeTimelineSkillCardInvocationTypeField(val.type),
        ['id']: val.id,
    };
}
export function deserializeTimelineSkillCardInvocationField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "TimelineSkillCardInvocationField"',
        });
    }
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "TimelineSkillCardInvocationField" to be defined',
        });
    }
    const type = deserializeTimelineSkillCardInvocationTypeField(val.type);
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "TimelineSkillCardInvocationField" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "TimelineSkillCardInvocationField"',
        });
    }
    const id = val.id;
    return { type: type, id: id };
}
export function serializeTimelineSkillCardInvocationFieldInput(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeTimelineSkillCardInvocationTypeField(val.type),
        ['id']: val.id,
    };
}
export function deserializeTimelineSkillCardInvocationFieldInput(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "TimelineSkillCardInvocationFieldInput"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeTimelineSkillCardInvocationTypeField(val.type);
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "TimelineSkillCardInvocationFieldInput" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "TimelineSkillCardInvocationFieldInput"',
        });
    }
    const id = val.id;
    return { type: type, id: id };
}
export function serializeTimelineSkillCardEntriesAppearsField(val) {
    return { ['start']: val.start, ['end']: val.end };
}
export function deserializeTimelineSkillCardEntriesAppearsField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "TimelineSkillCardEntriesAppearsField"',
        });
    }
    if (!(val.start == void 0) && !sdIsNumber(val.start)) {
        throw new BoxSdkError({
            message: 'Expecting number for "start" of type "TimelineSkillCardEntriesAppearsField"',
        });
    }
    const start = val.start == void 0 ? void 0 : val.start;
    if (!(val.end == void 0) && !sdIsNumber(val.end)) {
        throw new BoxSdkError({
            message: 'Expecting number for "end" of type "TimelineSkillCardEntriesAppearsField"',
        });
    }
    const end = val.end == void 0 ? void 0 : val.end;
    return {
        start: start,
        end: end,
    };
}
export function serializeTimelineSkillCardEntriesField(val) {
    return {
        ['text']: val.text,
        ['appears']: val.appears == void 0
            ? val.appears
            : val.appears.map(function (item) {
                return serializeTimelineSkillCardEntriesAppearsField(item);
            }),
        ['image_url']: val.imageUrl,
    };
}
export function deserializeTimelineSkillCardEntriesField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "TimelineSkillCardEntriesField"',
        });
    }
    if (!(val.text == void 0) && !sdIsString(val.text)) {
        throw new BoxSdkError({
            message: 'Expecting string for "text" of type "TimelineSkillCardEntriesField"',
        });
    }
    const text = val.text == void 0 ? void 0 : val.text;
    if (!(val.appears == void 0) && !sdIsList(val.appears)) {
        throw new BoxSdkError({
            message: 'Expecting array for "appears" of type "TimelineSkillCardEntriesField"',
        });
    }
    const appears = val.appears == void 0
        ? void 0
        : sdIsList(val.appears)
            ? val.appears.map(function (itm) {
                return deserializeTimelineSkillCardEntriesAppearsField(itm);
            })
            : [];
    if (!(val.image_url == void 0) && !sdIsString(val.image_url)) {
        throw new BoxSdkError({
            message: 'Expecting string for "image_url" of type "TimelineSkillCardEntriesField"',
        });
    }
    const imageUrl = val.image_url == void 0 ? void 0 : val.image_url;
    return {
        text: text,
        appears: appears,
        imageUrl: imageUrl,
    };
}
export function serializeTimelineSkillCard(val) {
    return {
        ['created_at']: val.createdAt == void 0
            ? val.createdAt
            : serializeDateTime(val.createdAt),
        ['type']: serializeTimelineSkillCardTypeField(val.type),
        ['skill_card_type']: serializeTimelineSkillCardSkillCardTypeField(val.skillCardType),
        ['skill_card_title']: val.skillCardTitle == void 0
            ? val.skillCardTitle
            : serializeTimelineSkillCardSkillCardTitleField(val.skillCardTitle),
        ['skill']: serializeTimelineSkillCardSkillField(val.skill),
        ['invocation']: serializeTimelineSkillCardInvocationField(val.invocation),
        ['duration']: val.duration,
        ['entries']: val.entries.map(function (item) {
            return serializeTimelineSkillCardEntriesField(item);
        }),
    };
}
export function deserializeTimelineSkillCard(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "TimelineSkillCard"',
        });
    }
    if (!(val.created_at == void 0) && !sdIsString(val.created_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "created_at" of type "TimelineSkillCard"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "TimelineSkillCard" to be defined',
        });
    }
    const type = deserializeTimelineSkillCardTypeField(val.type);
    if (val.skill_card_type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "skill_card_type" of type "TimelineSkillCard" to be defined',
        });
    }
    const skillCardType = deserializeTimelineSkillCardSkillCardTypeField(val.skill_card_type);
    const skillCardTitle = val.skill_card_title == void 0
        ? void 0
        : deserializeTimelineSkillCardSkillCardTitleField(val.skill_card_title);
    if (val.skill == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "skill" of type "TimelineSkillCard" to be defined',
        });
    }
    const skill = deserializeTimelineSkillCardSkillField(val.skill);
    if (val.invocation == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "invocation" of type "TimelineSkillCard" to be defined',
        });
    }
    const invocation = deserializeTimelineSkillCardInvocationField(val.invocation);
    if (!(val.duration == void 0) && !sdIsNumber(val.duration)) {
        throw new BoxSdkError({
            message: 'Expecting number for "duration" of type "TimelineSkillCard"',
        });
    }
    const duration = val.duration == void 0 ? void 0 : val.duration;
    if (val.entries == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "entries" of type "TimelineSkillCard" to be defined',
        });
    }
    if (!sdIsList(val.entries)) {
        throw new BoxSdkError({
            message: 'Expecting array for "entries" of type "TimelineSkillCard"',
        });
    }
    const entries = sdIsList(val.entries)
        ? val.entries.map(function (itm) {
            return deserializeTimelineSkillCardEntriesField(itm);
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
export function serializeTimelineSkillCardInput(val) {
    return {
        ['created_at']: val.createdAt == void 0
            ? val.createdAt
            : serializeDateTime(val.createdAt),
        ['type']: val.type == void 0
            ? val.type
            : serializeTimelineSkillCardTypeField(val.type),
        ['skillCardType']: val.skillCardType == void 0
            ? val.skillCardType
            : serializeTimelineSkillCardSkillCardTypeField(val.skillCardType),
        ['skill_card_title']: val.skillCardTitle == void 0
            ? val.skillCardTitle
            : serializeTimelineSkillCardSkillCardTitleField(val.skillCardTitle),
        ['skill']: serializeTimelineSkillCardSkillField(val.skill),
        ['invocation']: serializeTimelineSkillCardInvocationField(val.invocation),
        ['duration']: val.duration,
        ['entries']: val.entries.map(function (item) {
            return serializeTimelineSkillCardEntriesField(item);
        }),
    };
}
export function deserializeTimelineSkillCardInput(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "TimelineSkillCardInput"',
        });
    }
    if (!(val.created_at == void 0) && !sdIsString(val.created_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "created_at" of type "TimelineSkillCardInput"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
    const type = val.type == void 0
        ? void 0
        : deserializeTimelineSkillCardTypeField(val.type);
    const skillCardType = val.skillCardType == void 0
        ? void 0
        : deserializeTimelineSkillCardSkillCardTypeField(val.skillCardType);
    const skillCardTitle = val.skill_card_title == void 0
        ? void 0
        : deserializeTimelineSkillCardSkillCardTitleField(val.skill_card_title);
    if (val.skill == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "skill" of type "TimelineSkillCardInput" to be defined',
        });
    }
    const skill = deserializeTimelineSkillCardSkillField(val.skill);
    if (val.invocation == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "invocation" of type "TimelineSkillCardInput" to be defined',
        });
    }
    const invocation = deserializeTimelineSkillCardInvocationField(val.invocation);
    if (!(val.duration == void 0) && !sdIsNumber(val.duration)) {
        throw new BoxSdkError({
            message: 'Expecting number for "duration" of type "TimelineSkillCardInput"',
        });
    }
    const duration = val.duration == void 0 ? void 0 : val.duration;
    if (val.entries == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "entries" of type "TimelineSkillCardInput" to be defined',
        });
    }
    if (!sdIsList(val.entries)) {
        throw new BoxSdkError({
            message: 'Expecting array for "entries" of type "TimelineSkillCardInput"',
        });
    }
    const entries = sdIsList(val.entries)
        ? val.entries.map(function (itm) {
            return deserializeTimelineSkillCardEntriesField(itm);
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
//# sourceMappingURL=timelineSkillCard.generated.js.map