import { serializeFileReferenceV2025R0 } from './fileReferenceV2025R0.generated.js';
import { deserializeFileReferenceV2025R0 } from './fileReferenceV2025R0.generated.js';
import { BoxSdkError } from '../../box/errors.js';
import { sdIsMap } from '../../serialization/json.js';
export function serializeDocGenTemplateBaseV2025R0(val) {
    return {
        ['file']: val.file == void 0 ? val.file : serializeFileReferenceV2025R0(val.file),
    };
}
export function deserializeDocGenTemplateBaseV2025R0(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "DocGenTemplateBaseV2025R0"',
        });
    }
    const file = val.file == void 0 ? void 0 : deserializeFileReferenceV2025R0(val.file);
    return { file: file };
}
//# sourceMappingURL=docGenTemplateBaseV2025R0.generated.js.map