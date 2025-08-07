import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class FolderReference {
    constructor(fields) {
        /**
         * The value will always be `folder`. */
        this.type = 'folder';
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
export function serializeFolderReferenceTypeField(val) {
    return val;
}
export function deserializeFolderReferenceTypeField(val) {
    if (val == 'folder') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize FolderReferenceTypeField",
    });
}
export function serializeFolderReference(val) {
    return {
        ['type']: serializeFolderReferenceTypeField(val.type),
        ['id']: val.id,
    };
}
export function deserializeFolderReference(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "FolderReference"' });
    }
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "FolderReference" to be defined',
        });
    }
    const type = deserializeFolderReferenceTypeField(val.type);
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "FolderReference" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "FolderReference"',
        });
    }
    const id = val.id;
    return { type: type, id: id };
}
export function serializeFolderReferenceInput(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeFolderReferenceTypeField(val.type),
        ['id']: val.id,
    };
}
export function deserializeFolderReferenceInput(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "FolderReferenceInput"',
        });
    }
    const type = val.type == void 0 ? void 0 : deserializeFolderReferenceTypeField(val.type);
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "FolderReferenceInput" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "FolderReferenceInput"',
        });
    }
    const id = val.id;
    return { type: type, id: id };
}
//# sourceMappingURL=folderReference.generated.js.map