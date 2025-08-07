import { BoxSdkError } from '../../box/errors.js';
import { sdIsString } from '../../serialization/json.js';
import { sdIsMap } from '../../serialization/json.js';
export function serializeDocGenDocumentGenerationDataV2025R0(val) {
    return {
        ['generated_file_name']: val.generatedFileName,
        ['user_input']: Object.fromEntries(Object.entries(val.userInput).map(([k, v]) => [
            k,
            (function (v) {
                return v;
            })(v),
        ])),
    };
}
export function deserializeDocGenDocumentGenerationDataV2025R0(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "DocGenDocumentGenerationDataV2025R0"',
        });
    }
    if (val.generated_file_name == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "generated_file_name" of type "DocGenDocumentGenerationDataV2025R0" to be defined',
        });
    }
    if (!sdIsString(val.generated_file_name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "generated_file_name" of type "DocGenDocumentGenerationDataV2025R0"',
        });
    }
    const generatedFileName = val.generated_file_name;
    if (val.user_input == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "user_input" of type "DocGenDocumentGenerationDataV2025R0" to be defined',
        });
    }
    if (!sdIsMap(val.user_input)) {
        throw new BoxSdkError({
            message: 'Expecting object for "user_input" of type "DocGenDocumentGenerationDataV2025R0"',
        });
    }
    const userInput = sdIsMap(val.user_input)
        ? Object.fromEntries(Object.entries(val.user_input).map(([k, v]) => [
            k,
            (function (v) {
                return v;
            })(v),
        ]))
        : {};
    return {
        generatedFileName: generatedFileName,
        userInput: userInput,
    };
}
//# sourceMappingURL=docGenDocumentGenerationDataV2025R0.generated.js.map