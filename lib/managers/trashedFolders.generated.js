"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrashedFoldersManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const fetch_js_1 = require("../fetch.js");
class TrashedFoldersManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getFoldersIdTrash(folderId, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/folders/", folderId, "/trash"), { method: "GET", params: { ["fields"]: options.fields }, auth: this.auth });
            return (0, schemas_generated_js_1.deserializeTrashFolder)(deserializeJSON(response.text));
        });
    }
    deleteFoldersIdTrash(folderId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/folders/", folderId, "/trash"), { method: "DELETE", auth: this.auth });
            return response.content;
        });
    }
}
exports.TrashedFoldersManager = TrashedFoldersManager;
//# sourceMappingURL=trashedFolders.generated.js.map