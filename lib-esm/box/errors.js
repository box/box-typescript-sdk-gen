import { GeneratedCodeError } from '../internal/errors.js';
import { utilLib } from '../internal/utils.js';
import { DataSanitizer } from '../internal/logging.generated';
export class BoxSdkError extends GeneratedCodeError {
    constructor(fields) {
        super(fields);
        this.name = 'BoxSdkError';
        Object.setPrototypeOf(this, BoxSdkError.prototype);
    }
}
export class BoxApiError extends BoxSdkError {
    constructor(fields) {
        super(fields);
        this.dataSanitizer = new DataSanitizer({});
        this.name = 'BoxApiError';
        if (fields.dataSanitizer) {
            this.dataSanitizer = fields.dataSanitizer;
        }
        Object.setPrototypeOf(this, BoxApiError.prototype);
    }
    [utilLib.inspect.custom]() {
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
//# sourceMappingURL=errors.js.map