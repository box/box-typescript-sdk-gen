import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class AppItem {
    constructor(fields) {
        /**
         * The value will always be `app_item`. */
        this.type = 'app_item';
        if (fields.id !== undefined) {
            this.id = fields.id;
        }
        if (fields.type !== undefined) {
            this.type = fields.type;
        }
        if (fields.applicationType !== undefined) {
            this.applicationType = fields.applicationType;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
export function serializeAppItemTypeField(val) {
    return val;
}
export function deserializeAppItemTypeField(val) {
    if (val == 'app_item') {
        return val;
    }
    throw new BoxSdkError({ message: "Can't deserialize AppItemTypeField" });
}
export function serializeAppItem(val) {
    return {
        ['id']: val.id,
        ['type']: serializeAppItemTypeField(val.type),
        ['application_type']: val.applicationType,
    };
}
export function deserializeAppItem(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "AppItem"' });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "AppItem" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "AppItem"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "AppItem" to be defined',
        });
    }
    const type = deserializeAppItemTypeField(val.type);
    if (val.application_type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "application_type" of type "AppItem" to be defined',
        });
    }
    if (!sdIsString(val.application_type)) {
        throw new BoxSdkError({
            message: 'Expecting string for "application_type" of type "AppItem"',
        });
    }
    const applicationType = val.application_type;
    return {
        id: id,
        type: type,
        applicationType: applicationType,
    };
}
export function serializeAppItemInput(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0 ? val.type : serializeAppItemTypeField(val.type),
        ['application_type']: val.applicationType,
    };
}
export function deserializeAppItemInput(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "AppItemInput"' });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "AppItemInput" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "AppItemInput"',
        });
    }
    const id = val.id;
    const type = val.type == void 0 ? void 0 : deserializeAppItemTypeField(val.type);
    if (val.application_type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "application_type" of type "AppItemInput" to be defined',
        });
    }
    if (!sdIsString(val.application_type)) {
        throw new BoxSdkError({
            message: 'Expecting string for "application_type" of type "AppItemInput"',
        });
    }
    const applicationType = val.application_type;
    return {
        id: id,
        type: type,
        applicationType: applicationType,
    };
}
//# sourceMappingURL=appItem.generated.js.map