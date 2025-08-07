"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocGenJobBaseV2025R0 = void 0;
exports.serializeDocGenJobBaseV2025R0TypeField = serializeDocGenJobBaseV2025R0TypeField;
exports.deserializeDocGenJobBaseV2025R0TypeField = deserializeDocGenJobBaseV2025R0TypeField;
exports.serializeDocGenJobBaseV2025R0 = serializeDocGenJobBaseV2025R0;
exports.deserializeDocGenJobBaseV2025R0 = deserializeDocGenJobBaseV2025R0;
exports.serializeDocGenJobBaseV2025R0Input = serializeDocGenJobBaseV2025R0Input;
exports.deserializeDocGenJobBaseV2025R0Input = deserializeDocGenJobBaseV2025R0Input;
const errors_js_1 = require("../../box/errors.js");
const json_js_1 = require("../../serialization/json.js");
const json_js_2 = require("../../serialization/json.js");
class DocGenJobBaseV2025R0 {
    constructor(fields) {
        /**
         * The value will always be `docgen_job`. */
        this.type = 'docgen_job';
        if (fields.id !== undefined) {
            this.id = fields.id;
        }
        if (fields.type !== undefined) {
            this.type = fields.type;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
exports.DocGenJobBaseV2025R0 = DocGenJobBaseV2025R0;
function serializeDocGenJobBaseV2025R0TypeField(val) {
    return val;
}
function deserializeDocGenJobBaseV2025R0TypeField(val) {
    if (val == 'docgen_job') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize DocGenJobBaseV2025R0TypeField",
    });
}
function serializeDocGenJobBaseV2025R0(val) {
    return {
        ['id']: val.id,
        ['type']: serializeDocGenJobBaseV2025R0TypeField(val.type),
    };
}
function deserializeDocGenJobBaseV2025R0(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "DocGenJobBaseV2025R0"',
        });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "DocGenJobBaseV2025R0" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "DocGenJobBaseV2025R0"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "DocGenJobBaseV2025R0" to be defined',
        });
    }
    const type = deserializeDocGenJobBaseV2025R0TypeField(val.type);
    return { id: id, type: type };
}
function serializeDocGenJobBaseV2025R0Input(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeDocGenJobBaseV2025R0TypeField(val.type),
    };
}
function deserializeDocGenJobBaseV2025R0Input(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "DocGenJobBaseV2025R0Input"',
        });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "DocGenJobBaseV2025R0Input" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "DocGenJobBaseV2025R0Input"',
        });
    }
    const id = val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeDocGenJobBaseV2025R0TypeField(val.type);
    return { id: id, type: type };
}
//# sourceMappingURL=docGenJobBaseV2025R0.generated.js.map