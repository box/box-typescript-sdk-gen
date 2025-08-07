export class GeneratedCodeError extends Error {
    constructor(fields) {
        super(fields.message);
        Object.assign(this, fields);
        this.name = 'GeneratedCodeError';
        Object.setPrototypeOf(this, GeneratedCodeError.prototype);
    }
}
//# sourceMappingURL=errors.js.map