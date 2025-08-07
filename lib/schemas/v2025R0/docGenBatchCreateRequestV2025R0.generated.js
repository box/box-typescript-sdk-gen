"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocGenBatchCreateRequestV2025R0DestinationFolderField = void 0;
exports.serializeDocGenBatchCreateRequestV2025R0DestinationFolderTypeField = serializeDocGenBatchCreateRequestV2025R0DestinationFolderTypeField;
exports.deserializeDocGenBatchCreateRequestV2025R0DestinationFolderTypeField = deserializeDocGenBatchCreateRequestV2025R0DestinationFolderTypeField;
exports.serializeDocGenBatchCreateRequestV2025R0DestinationFolderField = serializeDocGenBatchCreateRequestV2025R0DestinationFolderField;
exports.deserializeDocGenBatchCreateRequestV2025R0DestinationFolderField = deserializeDocGenBatchCreateRequestV2025R0DestinationFolderField;
exports.serializeDocGenBatchCreateRequestV2025R0DestinationFolderFieldInput = serializeDocGenBatchCreateRequestV2025R0DestinationFolderFieldInput;
exports.deserializeDocGenBatchCreateRequestV2025R0DestinationFolderFieldInput = deserializeDocGenBatchCreateRequestV2025R0DestinationFolderFieldInput;
exports.serializeDocGenBatchCreateRequestV2025R0 = serializeDocGenBatchCreateRequestV2025R0;
exports.deserializeDocGenBatchCreateRequestV2025R0 = deserializeDocGenBatchCreateRequestV2025R0;
const fileReferenceV2025R0_generated_js_1 = require("./fileReferenceV2025R0.generated.js");
const fileReferenceV2025R0_generated_js_2 = require("./fileReferenceV2025R0.generated.js");
const fileVersionBaseV2025R0_generated_js_1 = require("./fileVersionBaseV2025R0.generated.js");
const fileVersionBaseV2025R0_generated_js_2 = require("./fileVersionBaseV2025R0.generated.js");
const docGenDocumentGenerationDataV2025R0_generated_js_1 = require("./docGenDocumentGenerationDataV2025R0.generated.js");
const docGenDocumentGenerationDataV2025R0_generated_js_2 = require("./docGenDocumentGenerationDataV2025R0.generated.js");
const errors_js_1 = require("../../box/errors.js");
const json_js_1 = require("../../serialization/json.js");
const json_js_2 = require("../../serialization/json.js");
const json_js_3 = require("../../serialization/json.js");
class DocGenBatchCreateRequestV2025R0DestinationFolderField {
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
exports.DocGenBatchCreateRequestV2025R0DestinationFolderField = DocGenBatchCreateRequestV2025R0DestinationFolderField;
function serializeDocGenBatchCreateRequestV2025R0DestinationFolderTypeField(val) {
    return val;
}
function deserializeDocGenBatchCreateRequestV2025R0DestinationFolderTypeField(val) {
    if (val == 'folder') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize DocGenBatchCreateRequestV2025R0DestinationFolderTypeField",
    });
}
function serializeDocGenBatchCreateRequestV2025R0DestinationFolderField(val) {
    return {
        ['type']: serializeDocGenBatchCreateRequestV2025R0DestinationFolderTypeField(val.type),
        ['id']: val.id,
    };
}
function deserializeDocGenBatchCreateRequestV2025R0DestinationFolderField(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "DocGenBatchCreateRequestV2025R0DestinationFolderField"',
        });
    }
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "DocGenBatchCreateRequestV2025R0DestinationFolderField" to be defined',
        });
    }
    const type = deserializeDocGenBatchCreateRequestV2025R0DestinationFolderTypeField(val.type);
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "DocGenBatchCreateRequestV2025R0DestinationFolderField" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "DocGenBatchCreateRequestV2025R0DestinationFolderField"',
        });
    }
    const id = val.id;
    return {
        type: type,
        id: id,
    };
}
function serializeDocGenBatchCreateRequestV2025R0DestinationFolderFieldInput(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeDocGenBatchCreateRequestV2025R0DestinationFolderTypeField(val.type),
        ['id']: val.id,
    };
}
function deserializeDocGenBatchCreateRequestV2025R0DestinationFolderFieldInput(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "DocGenBatchCreateRequestV2025R0DestinationFolderFieldInput"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeDocGenBatchCreateRequestV2025R0DestinationFolderTypeField(val.type);
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "DocGenBatchCreateRequestV2025R0DestinationFolderFieldInput" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "DocGenBatchCreateRequestV2025R0DestinationFolderFieldInput"',
        });
    }
    const id = val.id;
    return {
        type: type,
        id: id,
    };
}
function serializeDocGenBatchCreateRequestV2025R0(val) {
    return {
        ['file']: (0, fileReferenceV2025R0_generated_js_1.serializeFileReferenceV2025R0)(val.file),
        ['file_version']: val.fileVersion == void 0
            ? val.fileVersion
            : (0, fileVersionBaseV2025R0_generated_js_1.serializeFileVersionBaseV2025R0)(val.fileVersion),
        ['input_source']: val.inputSource,
        ['destination_folder']: serializeDocGenBatchCreateRequestV2025R0DestinationFolderField(val.destinationFolder),
        ['output_type']: val.outputType,
        ['document_generation_data']: val.documentGenerationData.map(function (item) {
            return (0, docGenDocumentGenerationDataV2025R0_generated_js_1.serializeDocGenDocumentGenerationDataV2025R0)(item);
        }),
    };
}
function deserializeDocGenBatchCreateRequestV2025R0(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "DocGenBatchCreateRequestV2025R0"',
        });
    }
    if (val.file == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "file" of type "DocGenBatchCreateRequestV2025R0" to be defined',
        });
    }
    const file = (0, fileReferenceV2025R0_generated_js_2.deserializeFileReferenceV2025R0)(val.file);
    const fileVersion = val.file_version == void 0
        ? void 0
        : (0, fileVersionBaseV2025R0_generated_js_2.deserializeFileVersionBaseV2025R0)(val.file_version);
    if (val.input_source == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "input_source" of type "DocGenBatchCreateRequestV2025R0" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.input_source)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "input_source" of type "DocGenBatchCreateRequestV2025R0"',
        });
    }
    const inputSource = val.input_source;
    if (val.destination_folder == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "destination_folder" of type "DocGenBatchCreateRequestV2025R0" to be defined',
        });
    }
    const destinationFolder = deserializeDocGenBatchCreateRequestV2025R0DestinationFolderField(val.destination_folder);
    if (val.output_type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "output_type" of type "DocGenBatchCreateRequestV2025R0" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.output_type)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "output_type" of type "DocGenBatchCreateRequestV2025R0"',
        });
    }
    const outputType = val.output_type;
    if (val.document_generation_data == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "document_generation_data" of type "DocGenBatchCreateRequestV2025R0" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsList)(val.document_generation_data)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "document_generation_data" of type "DocGenBatchCreateRequestV2025R0"',
        });
    }
    const documentGenerationData = (0, json_js_2.sdIsList)(val.document_generation_data)
        ? val.document_generation_data.map(function (itm) {
            return (0, docGenDocumentGenerationDataV2025R0_generated_js_2.deserializeDocGenDocumentGenerationDataV2025R0)(itm);
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