"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocGenJobV2025R0 = void 0;
exports.serializeDocGenJobV2025R0StatusField = serializeDocGenJobV2025R0StatusField;
exports.deserializeDocGenJobV2025R0StatusField = deserializeDocGenJobV2025R0StatusField;
exports.serializeDocGenJobV2025R0 = serializeDocGenJobV2025R0;
exports.deserializeDocGenJobV2025R0 = deserializeDocGenJobV2025R0;
const docGenJobBaseV2025R0_generated_js_1 = require("./docGenJobBaseV2025R0.generated.js");
const docGenJobBaseV2025R0_generated_js_2 = require("./docGenJobBaseV2025R0.generated.js");
const docGenBatchBaseV2025R0_generated_js_1 = require("./docGenBatchBaseV2025R0.generated.js");
const docGenBatchBaseV2025R0_generated_js_2 = require("./docGenBatchBaseV2025R0.generated.js");
const fileReferenceV2025R0_generated_js_1 = require("./fileReferenceV2025R0.generated.js");
const fileReferenceV2025R0_generated_js_2 = require("./fileReferenceV2025R0.generated.js");
const fileVersionBaseV2025R0_generated_js_1 = require("./fileVersionBaseV2025R0.generated.js");
const fileVersionBaseV2025R0_generated_js_2 = require("./fileVersionBaseV2025R0.generated.js");
const docGenJobBaseV2025R0_generated_js_3 = require("./docGenJobBaseV2025R0.generated.js");
const errors_js_1 = require("../../box/errors.js");
const json_js_1 = require("../../serialization/json.js");
const json_js_2 = require("../../serialization/json.js");
class DocGenJobV2025R0 extends docGenJobBaseV2025R0_generated_js_3.DocGenJobBaseV2025R0 {
    constructor(fields) {
        super(fields);
        if (fields.batch !== undefined) {
            this.batch = fields.batch;
        }
        if (fields.templateFile !== undefined) {
            this.templateFile = fields.templateFile;
        }
        if (fields.templateFileVersion !== undefined) {
            this.templateFileVersion = fields.templateFileVersion;
        }
        if (fields.outputFile !== undefined) {
            this.outputFile = fields.outputFile;
        }
        if (fields.outputFileVersion !== undefined) {
            this.outputFileVersion = fields.outputFileVersion;
        }
        if (fields.status !== undefined) {
            this.status = fields.status;
        }
        if (fields.outputType !== undefined) {
            this.outputType = fields.outputType;
        }
    }
}
exports.DocGenJobV2025R0 = DocGenJobV2025R0;
function serializeDocGenJobV2025R0StatusField(val) {
    return val;
}
function deserializeDocGenJobV2025R0StatusField(val) {
    if (val == 'submitted') {
        return val;
    }
    if (val == 'completed') {
        return val;
    }
    if (val == 'failed') {
        return val;
    }
    if (val == 'completed_with_error') {
        return val;
    }
    if (val == 'pending') {
        return val;
    }
    if ((0, json_js_1.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize DocGenJobV2025R0StatusField",
    });
}
function serializeDocGenJobV2025R0(val) {
    const base = (0, docGenJobBaseV2025R0_generated_js_2.serializeDocGenJobBaseV2025R0)(val);
    if (!(0, json_js_2.sdIsMap)(base)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "DocGenJobV2025R0"',
        });
    }
    return Object.assign(Object.assign({}, base), {
        ['batch']: (0, docGenBatchBaseV2025R0_generated_js_1.serializeDocGenBatchBaseV2025R0)(val.batch),
        ['template_file']: (0, fileReferenceV2025R0_generated_js_1.serializeFileReferenceV2025R0)(val.templateFile),
        ['template_file_version']: (0, fileVersionBaseV2025R0_generated_js_1.serializeFileVersionBaseV2025R0)(val.templateFileVersion),
        ['output_file']: val.outputFile == void 0
            ? val.outputFile
            : val.outputFile == void 0
                ? val.outputFile
                : (0, fileReferenceV2025R0_generated_js_1.serializeFileReferenceV2025R0)(val.outputFile),
        ['output_file_version']: val.outputFileVersion == void 0
            ? val.outputFileVersion
            : val.outputFileVersion == void 0
                ? val.outputFileVersion
                : (0, fileVersionBaseV2025R0_generated_js_1.serializeFileVersionBaseV2025R0)(val.outputFileVersion),
        ['status']: serializeDocGenJobV2025R0StatusField(val.status),
        ['output_type']: val.outputType,
    });
}
function deserializeDocGenJobV2025R0(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "DocGenJobV2025R0"',
        });
    }
    if (val.batch == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "batch" of type "DocGenJobV2025R0" to be defined',
        });
    }
    const batch = (0, docGenBatchBaseV2025R0_generated_js_2.deserializeDocGenBatchBaseV2025R0)(val.batch);
    if (val.template_file == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "template_file" of type "DocGenJobV2025R0" to be defined',
        });
    }
    const templateFile = (0, fileReferenceV2025R0_generated_js_2.deserializeFileReferenceV2025R0)(val.template_file);
    if (val.template_file_version == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "template_file_version" of type "DocGenJobV2025R0" to be defined',
        });
    }
    const templateFileVersion = (0, fileVersionBaseV2025R0_generated_js_2.deserializeFileVersionBaseV2025R0)(val.template_file_version);
    const outputFile = val.output_file == void 0
        ? void 0
        : val.output_file == void 0
            ? void 0
            : (0, fileReferenceV2025R0_generated_js_2.deserializeFileReferenceV2025R0)(val.output_file);
    const outputFileVersion = val.output_file_version == void 0
        ? void 0
        : val.output_file_version == void 0
            ? void 0
            : (0, fileVersionBaseV2025R0_generated_js_2.deserializeFileVersionBaseV2025R0)(val.output_file_version);
    if (val.status == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "status" of type "DocGenJobV2025R0" to be defined',
        });
    }
    const status = deserializeDocGenJobV2025R0StatusField(val.status);
    if (val.output_type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "output_type" of type "DocGenJobV2025R0" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.output_type)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "output_type" of type "DocGenJobV2025R0"',
        });
    }
    const outputType = val.output_type;
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "DocGenJobV2025R0" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "DocGenJobV2025R0"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "DocGenJobV2025R0" to be defined',
        });
    }
    const type = (0, docGenJobBaseV2025R0_generated_js_1.deserializeDocGenJobBaseV2025R0TypeField)(val.type);
    return {
        batch: batch,
        templateFile: templateFile,
        templateFileVersion: templateFileVersion,
        outputFile: outputFile,
        outputFileVersion: outputFileVersion,
        status: status,
        outputType: outputType,
        id: id,
        type: type,
    };
}
//# sourceMappingURL=docGenJobV2025R0.generated.js.map