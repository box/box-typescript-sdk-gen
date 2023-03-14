"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const files_generated_js_1 = require("./managers/files.generated.js");
class Client {
    constructor(fields) {
        Object.assign(this, fields);
        this.files = new files_generated_js_1.FilesManager({ auth: this.auth });
    }
}
exports.Client = Client;
//# sourceMappingURL=client.generated.js.map