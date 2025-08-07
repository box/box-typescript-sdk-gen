import { serializeFileReferenceV2025R0 } from './fileReferenceV2025R0.generated.js';
import { deserializeFileReferenceV2025R0 } from './fileReferenceV2025R0.generated.js';
import { BoxSdkError } from '../../box/errors.js';
import { sdIsMap } from '../../serialization/json.js';
export function serializeDocGenTemplateCreateRequestV2025R0(val) {
    return { ['file']: serializeFileReferenceV2025R0(val.file) };
}
export function deserializeDocGenTemplateCreateRequestV2025R0(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "DocGenTemplateCreateRequestV2025R0"',
        });
    }
    if (val.file == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "file" of type "DocGenTemplateCreateRequestV2025R0" to be defined',
        });
    }
    const file = deserializeFileReferenceV2025R0(val.file);
    return { file: file };
}
//# sourceMappingURL=docGenTemplateCreateRequestV2025R0.generated.js.map