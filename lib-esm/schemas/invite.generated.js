import { serializeUserMini } from './userMini.generated.js';
import { deserializeUserMini } from './userMini.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class Invite {
    constructor(fields) {
        /**
         * The value will always be `invite`. */
        this.type = 'invite';
        if (fields.id !== undefined) {
            this.id = fields.id;
        }
        if (fields.type !== undefined) {
            this.type = fields.type;
        }
        if (fields.invitedTo !== undefined) {
            this.invitedTo = fields.invitedTo;
        }
        if (fields.actionableBy !== undefined) {
            this.actionableBy = fields.actionableBy;
        }
        if (fields.invitedBy !== undefined) {
            this.invitedBy = fields.invitedBy;
        }
        if (fields.status !== undefined) {
            this.status = fields.status;
        }
        if (fields.createdAt !== undefined) {
            this.createdAt = fields.createdAt;
        }
        if (fields.modifiedAt !== undefined) {
            this.modifiedAt = fields.modifiedAt;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
export function serializeInviteTypeField(val) {
    return val;
}
export function deserializeInviteTypeField(val) {
    if (val == 'invite') {
        return val;
    }
    throw new BoxSdkError({ message: "Can't deserialize InviteTypeField" });
}
export function serializeInviteInvitedToTypeField(val) {
    return val;
}
export function deserializeInviteInvitedToTypeField(val) {
    if (val == 'enterprise') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize InviteInvitedToTypeField",
    });
}
export function serializeInviteInvitedToField(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeInviteInvitedToTypeField(val.type),
        ['name']: val.name,
    };
}
export function deserializeInviteInvitedToField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "InviteInvitedToField"',
        });
    }
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "InviteInvitedToField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0 ? void 0 : deserializeInviteInvitedToTypeField(val.type);
    if (!(val.name == void 0) && !sdIsString(val.name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "name" of type "InviteInvitedToField"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    return { id: id, type: type, name: name };
}
export function serializeInvite(val) {
    return {
        ['id']: val.id,
        ['type']: serializeInviteTypeField(val.type),
        ['invited_to']: val.invitedTo == void 0
            ? val.invitedTo
            : serializeInviteInvitedToField(val.invitedTo),
        ['actionable_by']: val.actionableBy == void 0
            ? val.actionableBy
            : serializeUserMini(val.actionableBy),
        ['invited_by']: val.invitedBy == void 0
            ? val.invitedBy
            : serializeUserMini(val.invitedBy),
        ['status']: val.status,
        ['created_at']: val.createdAt == void 0
            ? val.createdAt
            : serializeDateTime(val.createdAt),
        ['modified_at']: val.modifiedAt == void 0
            ? val.modifiedAt
            : serializeDateTime(val.modifiedAt),
    };
}
export function deserializeInvite(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "Invite"' });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "Invite" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "Invite"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "Invite" to be defined',
        });
    }
    const type = deserializeInviteTypeField(val.type);
    const invitedTo = val.invited_to == void 0
        ? void 0
        : deserializeInviteInvitedToField(val.invited_to);
    const actionableBy = val.actionable_by == void 0
        ? void 0
        : deserializeUserMini(val.actionable_by);
    const invitedBy = val.invited_by == void 0 ? void 0 : deserializeUserMini(val.invited_by);
    if (!(val.status == void 0) && !sdIsString(val.status)) {
        throw new BoxSdkError({
            message: 'Expecting string for "status" of type "Invite"',
        });
    }
    const status = val.status == void 0 ? void 0 : val.status;
    if (!(val.created_at == void 0) && !sdIsString(val.created_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "created_at" of type "Invite"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
    if (!(val.modified_at == void 0) && !sdIsString(val.modified_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "modified_at" of type "Invite"',
        });
    }
    const modifiedAt = val.modified_at == void 0 ? void 0 : deserializeDateTime(val.modified_at);
    return {
        id: id,
        type: type,
        invitedTo: invitedTo,
        actionableBy: actionableBy,
        invitedBy: invitedBy,
        status: status,
        createdAt: createdAt,
        modifiedAt: modifiedAt,
    };
}
export function serializeInviteInput(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0 ? val.type : serializeInviteTypeField(val.type),
        ['invited_to']: val.invitedTo == void 0
            ? val.invitedTo
            : serializeInviteInvitedToField(val.invitedTo),
        ['actionable_by']: val.actionableBy == void 0
            ? val.actionableBy
            : serializeUserMini(val.actionableBy),
        ['invited_by']: val.invitedBy == void 0
            ? val.invitedBy
            : serializeUserMini(val.invitedBy),
        ['status']: val.status,
        ['created_at']: val.createdAt == void 0
            ? val.createdAt
            : serializeDateTime(val.createdAt),
        ['modified_at']: val.modifiedAt == void 0
            ? val.modifiedAt
            : serializeDateTime(val.modifiedAt),
    };
}
export function deserializeInviteInput(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "InviteInput"' });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "InviteInput" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "InviteInput"',
        });
    }
    const id = val.id;
    const type = val.type == void 0 ? void 0 : deserializeInviteTypeField(val.type);
    const invitedTo = val.invited_to == void 0
        ? void 0
        : deserializeInviteInvitedToField(val.invited_to);
    const actionableBy = val.actionable_by == void 0
        ? void 0
        : deserializeUserMini(val.actionable_by);
    const invitedBy = val.invited_by == void 0 ? void 0 : deserializeUserMini(val.invited_by);
    if (!(val.status == void 0) && !sdIsString(val.status)) {
        throw new BoxSdkError({
            message: 'Expecting string for "status" of type "InviteInput"',
        });
    }
    const status = val.status == void 0 ? void 0 : val.status;
    if (!(val.created_at == void 0) && !sdIsString(val.created_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "created_at" of type "InviteInput"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
    if (!(val.modified_at == void 0) && !sdIsString(val.modified_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "modified_at" of type "InviteInput"',
        });
    }
    const modifiedAt = val.modified_at == void 0 ? void 0 : deserializeDateTime(val.modified_at);
    return {
        id: id,
        type: type,
        invitedTo: invitedTo,
        actionableBy: actionableBy,
        invitedBy: invitedBy,
        status: status,
        createdAt: createdAt,
        modifiedAt: modifiedAt,
    };
}
//# sourceMappingURL=invite.generated.js.map