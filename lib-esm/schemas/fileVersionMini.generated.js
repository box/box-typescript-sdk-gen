import { deserializeFileVersionBaseTypeField } from './fileVersionBase.generated.js';
import { serializeFileVersionBase } from './fileVersionBase.generated.js';
import { FileVersionBase } from './fileVersionBase.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class FileVersionMini extends FileVersionBase {
    constructor(fields) {
        super(fields);
        if (fields.sha1 !== undefined) {
            this.sha1 = fields.sha1;
        }
    }
}
export function serializeFileVersionMini(val) {
    const base = serializeFileVersionBase(val);
    if (!sdIsMap(base)) {
        throw new BoxSdkError({ message: 'Expecting a map for "FileVersionMini"' });
    }
    return { ...base, ...{ ['sha1']: val.sha1 } };
}
export function deserializeFileVersionMini(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "FileVersionMini"' });
    }
    if (!(val.sha1 == void 0) && !sdIsString(val.sha1)) {
        throw new BoxSdkError({
            message: 'Expecting string for "sha1" of type "FileVersionMini"',
        });
    }
    const sha1 = val.sha1 == void 0 ? void 0 : val.sha1;
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "FileVersionMini" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "FileVersionMini"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "FileVersionMini" to be defined',
        });
    }
    const type = deserializeFileVersionBaseTypeField(val.type);
    return { sha1: sha1, id: id, type: type };
}
//# sourceMappingURL=fileVersionMini.generated.js.map