import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class WebLinkBase {
    constructor(fields) {
        /**
         * The value will always be `web_link`. */
        this.type = 'web_link';
        if (fields.id !== undefined) {
            this.id = fields.id;
        }
        if (fields.type !== undefined) {
            this.type = fields.type;
        }
        if (fields.etag !== undefined) {
            this.etag = fields.etag;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
export function serializeWebLinkBaseTypeField(val) {
    return val;
}
export function deserializeWebLinkBaseTypeField(val) {
    if (val == 'web_link') {
        return val;
    }
    throw new BoxSdkError({ message: "Can't deserialize WebLinkBaseTypeField" });
}
export function serializeWebLinkBase(val) {
    return {
        ['id']: val.id,
        ['type']: serializeWebLinkBaseTypeField(val.type),
        ['etag']: val.etag,
    };
}
export function deserializeWebLinkBase(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "WebLinkBase"' });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "WebLinkBase" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "WebLinkBase"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "WebLinkBase" to be defined',
        });
    }
    const type = deserializeWebLinkBaseTypeField(val.type);
    if (!(val.etag == void 0) && !sdIsString(val.etag)) {
        throw new BoxSdkError({
            message: 'Expecting string for "etag" of type "WebLinkBase"',
        });
    }
    const etag = val.etag == void 0 ? void 0 : val.etag;
    return { id: id, type: type, etag: etag };
}
export function serializeWebLinkBaseInput(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0 ? val.type : serializeWebLinkBaseTypeField(val.type),
        ['etag']: val.etag,
    };
}
export function deserializeWebLinkBaseInput(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "WebLinkBaseInput"',
        });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "WebLinkBaseInput" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "WebLinkBaseInput"',
        });
    }
    const id = val.id;
    const type = val.type == void 0 ? void 0 : deserializeWebLinkBaseTypeField(val.type);
    if (!(val.etag == void 0) && !sdIsString(val.etag)) {
        throw new BoxSdkError({
            message: 'Expecting string for "etag" of type "WebLinkBaseInput"',
        });
    }
    const etag = val.etag == void 0 ? void 0 : val.etag;
    return { id: id, type: type, etag: etag };
}
//# sourceMappingURL=webLinkBase.generated.js.map