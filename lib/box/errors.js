"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoxApiError = exports.BoxSdkError = void 0;
const errors_js_1 = require("../internal/errors.js");
const utils_js_1 = require("../internal/utils.js");
const logging_generated_1 = require("../internal/logging.generated");
class BoxSdkError extends errors_js_1.GeneratedCodeError {
    constructor(fields) {
        super(fields);
        this.name = 'BoxSdkError';
        Object.setPrototypeOf(this, BoxSdkError.prototype);
    }
}
exports.BoxSdkError = BoxSdkError;
class BoxApiError extends BoxSdkError {
    constructor(fields) {
        super(fields);
        this.dataSanitizer = new logging_generated_1.DataSanitizer({});
        this.name = 'BoxApiError';
        if (fields.dataSanitizer) {
            this.dataSanitizer = fields.dataSanitizer;
        }
        Object.setPrototypeOf(this, BoxApiError.prototype);
    }
    [utils_js_1.utilLib.inspect.custom]() {
        return this.toString();
    }
    toString() {
        return JSON.stringify(this.toJSON(), null, 2);
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            timestamp: this.timestamp,
            error: this.error,
            requestInfo: {
                method: this.requestInfo.method,
                url: this.requestInfo.url,
                queryParams: this.requestInfo.queryParams,
                headers: this.dataSanitizer.sanitizeHeaders(this.requestInfo.headers),
                body: this.requestInfo.body,
            },
            responseInfo: {
                statusCode: this.responseInfo.statusCode,
                headers: this.dataSanitizer.sanitizeHeaders(this.responseInfo.headers),
                body: this.dataSanitizer.sanitizeBody(this.responseInfo.body),
                code: this.responseInfo.code,
                contextInfo: this.responseInfo.contextInfo,
                requestId: this.responseInfo.requestId,
                helpUrl: this.responseInfo.helpUrl,
            },
        };
    }
}
exports.BoxApiError = BoxApiError;
//# sourceMappingURL=errors.js.map