import { serializeFileReferenceV2025R0 } from './fileReferenceV2025R0.generated.js';
import { deserializeFileReferenceV2025R0 } from './fileReferenceV2025R0.generated.js';
import { serializeFileVersionBaseV2025R0 } from './fileVersionBaseV2025R0.generated.js';
import { deserializeFileVersionBaseV2025R0 } from './fileVersionBaseV2025R0.generated.js';
import { serializeDocGenDocumentGenerationDataV2025R0 } from './docGenDocumentGenerationDataV2025R0.generated.js';
import { deserializeDocGenDocumentGenerationDataV2025R0 } from './docGenDocumentGenerationDataV2025R0.generated.js';
import { BoxSdkError } from '../../box/errors.js';
import { sdIsString } from '../../serialization/json.js';
import { sdIsList } from '../../serialization/json.js';
import { sdIsMap } from '../../serialization/json.js';
export class DocGenBatchCreateRequestV2025R0DestinationFolderField {
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
export function serializeDocGenBatchCreateRequestV2025R0DestinationFolderTypeField(val) {
    return val;
}
export function deserializeDocGenBatchCreateRequestV2025R0DestinationFolderTypeField(val) {
    if (val == 'folder') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize DocGenBatchCreateRequestV2025R0DestinationFolderTypeField",
    });
}
export function serializeDocGenBatchCreateRequestV2025R0DestinationFolderField(val) {
    return {
        ['type']: serializeDocGenBatchCreateRequestV2025R0DestinationFolderTypeField(val.type),
        ['id']: val.id,
    };
}
export function deserializeDocGenBatchCreateRequestV2025R0DestinationFolderField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "DocGenBatchCreateRequestV2025R0DestinationFolderField"',
        });
    }
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "DocGenBatchCreateRequestV2025R0DestinationFolderField" to be defined',
        });
    }
    const type = deserializeDocGenBatchCreateRequestV2025R0DestinationFolderTypeField(val.type);
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "DocGenBatchCreateRequestV2025R0DestinationFolderField" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "DocGenBatchCreateRequestV2025R0DestinationFolderField"',
        });
    }
    const id = val.id;
    return {
        type: type,
        id: id,
    };
}
export function serializeDocGenBatchCreateRequestV2025R0DestinationFolderFieldInput(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeDocGenBatchCreateRequestV2025R0DestinationFolderTypeField(val.type),
        ['id']: val.id,
    };
}
export function deserializeDocGenBatchCreateRequestV2025R0DestinationFolderFieldInput(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "DocGenBatchCreateRequestV2025R0DestinationFolderFieldInput"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeDocGenBatchCreateRequestV2025R0DestinationFolderTypeField(val.type);
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "DocGenBatchCreateRequestV2025R0DestinationFolderFieldInput" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "DocGenBatchCreateRequestV2025R0DestinationFolderFieldInput"',
        });
    }
    const id = val.id;
    return {
        type: type,
        id: id,
    };
}
export function serializeDocGenBatchCreateRequestV2025R0(val) {
    return {
        ['file']: serializeFileReferenceV2025R0(val.file),
        ['file_version']: val.fileVersion == void 0
            ? val.fileVersion
            : serializeFileVersionBaseV2025R0(val.fileVersion),
        ['input_source']: val.inputSource,
        ['destination_folder']: serializeDocGenBatchCreateRequestV2025R0DestinationFolderField(val.destinationFolder),
        ['output_type']: val.outputType,
        ['document_generation_data']: val.documentGenerationData.map(function (item) {
            return serializeDocGenDocumentGenerationDataV2025R0(item);
        }),
    };
}
export function deserializeDocGenBatchCreateRequestV2025R0(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "DocGenBatchCreateRequestV2025R0"',
        });
    }
    if (val.file == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "file" of type "DocGenBatchCreateRequestV2025R0" to be defined',
        });
    }
    const file = deserializeFileReferenceV2025R0(val.file);
    const fileVersion = val.file_version == void 0
        ? void 0
        : deserializeFileVersionBaseV2025R0(val.file_version);
    if (val.input_source == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "input_source" of type "DocGenBatchCreateRequestV2025R0" to be defined',
        });
    }
    if (!sdIsString(val.input_source)) {
        throw new BoxSdkError({
            message: 'Expecting string for "input_source" of type "DocGenBatchCreateRequestV2025R0"',
        });
    }
    const inputSource = val.input_source;
    if (val.destination_folder == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "destination_folder" of type "DocGenBatchCreateRequestV2025R0" to be defined',
        });
    }
    const destinationFolder = deserializeDocGenBatchCreateRequestV2025R0DestinationFolderField(val.destination_folder);
    if (val.output_type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "output_type" of type "DocGenBatchCreateRequestV2025R0" to be defined',
        });
    }
    if (!sdIsString(val.output_type)) {
        throw new BoxSdkError({
            message: 'Expecting string for "output_type" of type "DocGenBatchCreateRequestV2025R0"',
        });
    }
    const outputType = val.output_type;
    if (val.document_generation_data == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "document_generation_data" of type "DocGenBatchCreateRequestV2025R0" to be defined',
        });
    }
    if (!sdIsList(val.document_generation_data)) {
        throw new BoxSdkError({
            message: 'Expecting array for "document_generation_data" of type "DocGenBatchCreateRequestV2025R0"',
        });
    }
    const documentGenerationData = sdIsList(val.document_generation_data)
        ? val.document_generation_data.map(function (itm) {
            return deserializeDocGenDocumentGenerationDataV2025R0(itm);
        })
        : [];
    return {
        file: file,
        fileVersion: fileVersion,
        inputSource: inputSource,
        destinationFolder: destinationFolder,
        outputType: outputType,
        documentGenerationData: documentGenerationData,
    };
}
//# sourceMappingURL=docGenBatchCreateRequestV2025R0.generated.js.map