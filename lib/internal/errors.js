"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneratedCodeError = void 0;
class GeneratedCodeError extends Error {
    constructor(fields) {
        super(fields.message);
        Object.assign(this, fields);
        this.name = 'GeneratedCodeError';
        Object.setPrototypeOf(this, GeneratedCodeError.prototype);
    }
}
exports.GeneratedCodeError = GeneratedCodeError;
//# sourceMappingURL=errors.js.map