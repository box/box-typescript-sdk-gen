import { deserializeWebLinkBaseTypeField } from './webLinkBase.generated.js';
import { serializeWebLinkBase } from './webLinkBase.generated.js';
import { WebLinkBase } from './webLinkBase.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class WebLinkMini extends WebLinkBase {
    constructor(fields) {
        super(fields);
        if (fields.url !== undefined) {
            this.url = fields.url;
        }
        if (fields.sequenceId !== undefined) {
            this.sequenceId = fields.sequenceId;
        }
        if (fields.name !== undefined) {
            this.name = fields.name;
        }
    }
}
export function serializeWebLinkMini(val) {
    const base = serializeWebLinkBase(val);
    if (!sdIsMap(base)) {
        throw new BoxSdkError({ message: 'Expecting a map for "WebLinkMini"' });
    }
    return {
        ...base,
        ...{
            ['url']: val.url,
            ['sequence_id']: val.sequenceId,
            ['name']: val.name,
        },
    };
}
export function deserializeWebLinkMini(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "WebLinkMini"' });
    }
    if (!(val.url == void 0) && !sdIsString(val.url)) {
        throw new BoxSdkError({
            message: 'Expecting string for "url" of type "WebLinkMini"',
        });
    }
    const url = val.url == void 0 ? void 0 : val.url;
    if (!(val.sequence_id == void 0) && !sdIsString(val.sequence_id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "sequence_id" of type "WebLinkMini"',
        });
    }
    const sequenceId = val.sequence_id == void 0 ? void 0 : val.sequence_id;
    if (!(val.name == void 0) && !sdIsString(val.name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "name" of type "WebLinkMini"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "WebLinkMini" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "WebLinkMini"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "WebLinkMini" to be defined',
        });
    }
    const type = deserializeWebLinkBaseTypeField(val.type);
    if (!(val.etag == void 0) && !sdIsString(val.etag)) {
        throw new BoxSdkError({
            message: 'Expecting string for "etag" of type "WebLinkMini"',
        });
    }
    const etag = val.etag == void 0 ? void 0 : val.etag;
    return {
        url: url,
        sequenceId: sequenceId,
        name: name,
        id: id,
        type: type,
        etag: etag,
    };
}
//# sourceMappingURL=webLinkMini.generated.js.map