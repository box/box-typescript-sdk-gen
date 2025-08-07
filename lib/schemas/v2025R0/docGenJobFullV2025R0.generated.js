"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocGenJobFullV2025R0 = void 0;
exports.serializeDocGenJobFullV2025R0 = serializeDocGenJobFullV2025R0;
exports.deserializeDocGenJobFullV2025R0 = deserializeDocGenJobFullV2025R0;
const docGenJobBaseV2025R0_generated_js_1 = require("./docGenJobBaseV2025R0.generated.js");
const docGenBatchBaseV2025R0_generated_js_1 = require("./docGenBatchBaseV2025R0.generated.js");
const fileReferenceV2025R0_generated_js_1 = require("./fileReferenceV2025R0.generated.js");
const fileVersionBaseV2025R0_generated_js_1 = require("./fileVersionBaseV2025R0.generated.js");
const docGenJobV2025R0_generated_js_1 = require("./docGenJobV2025R0.generated.js");
const docGenJobV2025R0_generated_js_2 = require("./docGenJobV2025R0.generated.js");
const userBaseV2025R0_generated_js_1 = require("./userBaseV2025R0.generated.js");
const userBaseV2025R0_generated_js_2 = require("./userBaseV2025R0.generated.js");
const enterpriseReferenceV2025R0_generated_js_1 = require("./enterpriseReferenceV2025R0.generated.js");
const enterpriseReferenceV2025R0_generated_js_2 = require("./enterpriseReferenceV2025R0.generated.js");
const docGenJobV2025R0_generated_js_3 = require("./docGenJobV2025R0.generated.js");
const errors_js_1 = require("../../box/errors.js");
const json_js_1 = require("../../serialization/json.js");
const json_js_2 = require("../../serialization/json.js");
class DocGenJobFullV2025R0 extends docGenJobV2025R0_generated_js_3.DocGenJobV2025R0 {
    constructor(fields) {
        super(fields);
        if (fields.createdAt !== undefined) {
            this.createdAt = fields.createdAt;
        }
        if (fields.createdBy !== undefined) {
            this.createdBy = fields.createdBy;
        }
        if (fields.enterprise !== undefined) {
            this.enterprise = fields.enterprise;
        }
        if (fields.source !== undefined) {
            this.source = fields.source;
        }
    }
}
exports.DocGenJobFullV2025R0 = DocGenJobFullV2025R0;
function serializeDocGenJobFullV2025R0(val) {
    const base = (0, docGenJobV2025R0_generated_js_2.serializeDocGenJobV2025R0)(val);
    if (!(0, json_js_2.sdIsMap)(base)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "DocGenJobFullV2025R0"',
        });
    }
    return Object.assign(Object.assign({}, base), {
        ['created_at']: val.createdAt,
        ['created_by']: (0, userBaseV2025R0_generated_js_1.serializeUserBaseV2025R0)(val.createdBy),
        ['enterprise']: (0, enterpriseReferenceV2025R0_generated_js_1.serializeEnterpriseReferenceV2025R0)(val.enterprise),
        ['source']: val.source,
    });
}
function deserializeDocGenJobFullV2025R0(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "DocGenJobFullV2025R0"',
        });
    }
    if (!(val.created_at == void 0) && !(0, json_js_1.sdIsString)(val.created_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "created_at" of type "DocGenJobFullV2025R0"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : val.created_at;
    if (val.created_by == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "created_by" of type "DocGenJobFullV2025R0" to be defined',
        });
    }
    const createdBy = (0, userBaseV2025R0_generated_js_2.deserializeUserBaseV2025R0)(val.created_by);
    if (val.enterprise == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "enterprise" of type "DocGenJobFullV2025R0" to be defined',
        });
    }
    const enterprise = (0, enterpriseReferenceV2025R0_generated_js_2.deserializeEnterpriseReferenceV2025R0)(val.enterprise);
    if (val.source == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "source" of type "DocGenJobFullV2025R0" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.source)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "source" of type "DocGenJobFullV2025R0"',
        });
    }
    const source = val.source;
    if (val.batch == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "batch" of type "DocGenJobFullV2025R0" to be defined',
        });
    }
    const batch = (0, docGenBatchBaseV2025R0_generated_js_1.deserializeDocGenBatchBaseV2025R0)(val.batch);
    if (val.template_file == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "template_file" of type "DocGenJobFullV2025R0" to be defined',
        });
    }
    const templateFile = (0, fileReferenceV2025R0_generated_js_1.deserializeFileReferenceV2025R0)(val.template_file);
    if (val.template_file_version == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "template_file_version" of type "DocGenJobFullV2025R0" to be defined',
        });
    }
    const templateFileVersion = (0, fileVersionBaseV2025R0_generated_js_1.deserializeFileVersionBaseV2025R0)(val.template_file_version);
    const outputFile = val.output_file == void 0
        ? void 0
        : val.output_file == void 0
            ? void 0
            : (0, fileReferenceV2025R0_generated_js_1.deserializeFileReferenceV2025R0)(val.output_file);
    const outputFileVersion = val.output_file_version == void 0
        ? void 0
        : val.output_file_version == void 0
            ? void 0
            : (0, fileVersionBaseV2025R0_generated_js_1.deserializeFileVersionBaseV2025R0)(val.output_file_version);
    if (val.status == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "status" of type "DocGenJobFullV2025R0" to be defined',
        });
    }
    const status = (0, docGenJobV2025R0_generated_js_1.deserializeDocGenJobV2025R0StatusField)(val.status);
    if (val.output_type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "output_type" of type "DocGenJobFullV2025R0" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.output_type)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "output_type" of type "DocGenJobFullV2025R0"',
        });
    }
    const outputType = val.output_type;
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "DocGenJobFullV2025R0" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "DocGenJobFullV2025R0"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "DocGenJobFullV2025R0" to be defined',
        });
    }
    const type = (0, docGenJobBaseV2025R0_generated_js_1.deserializeDocGenJobBaseV2025R0TypeField)(val.type);
    return {
        createdAt: createdAt,
        createdBy: createdBy,
        enterprise: enterprise,
        source: source,
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
//# sourceMappingURL=docGenJobFullV2025R0.generated.js.map