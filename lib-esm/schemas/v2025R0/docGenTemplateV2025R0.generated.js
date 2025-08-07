import { deserializeFileReferenceV2025R0 } from './fileReferenceV2025R0.generated.js';
import { serializeDocGenTemplateBaseV2025R0 } from './docGenTemplateBaseV2025R0.generated.js';
import { BoxSdkError } from '../../box/errors.js';
import { sdIsString } from '../../serialization/json.js';
import { sdIsMap } from '../../serialization/json.js';
export function serializeDocGenTemplateV2025R0(val) {
    const base = serializeDocGenTemplateBaseV2025R0(val);
    if (!sdIsMap(base)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "DocGenTemplateV2025R0"',
        });
    }
    return { ...base, ...{ ['file_name']: val.fileName } };
}
export function deserializeDocGenTemplateV2025R0(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "DocGenTemplateV2025R0"',
        });
    }
    if (!(val.file_name == void 0) && !sdIsString(val.file_name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "file_name" of type "DocGenTemplateV2025R0"',
        });
    }
    const fileName = val.file_name == void 0 ? void 0 : val.file_name;
    const file = val.file == void 0 ? void 0 : deserializeFileReferenceV2025R0(val.file);
    return { fileName: fileName, file: file };
}
//# sourceMappingURL=docGenTemplateV2025R0.generated.js.map