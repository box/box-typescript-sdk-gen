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
exports.createNewFolder = exports.uploadNewFile = void 0;
const utils_js_1 = require("../utils.js");
const utils_js_2 = require("../utils.js");
const utils_js_3 = require("../utils.js");
const utils_js_4 = require("../utils.js");
const client_generated_js_1 = require("../client.generated.js");
const jwtAuth_js_1 = require("../jwtAuth.js");
const jwtAuth_js_2 = require("../jwtAuth.js");
const jwtConfig = jwtAuth_js_2.JwtConfig.fromConfigJsonString((0, utils_js_1.decodeBase64)((0, utils_js_2.getEnvVar)("JWT_CONFIG_BASE_64")));
const auth = new jwtAuth_js_1.JwtAuth({ config: jwtConfig });
const client = new client_generated_js_1.Client({ auth: auth });
function uploadNewFile() {
    return __awaiter(this, void 0, void 0, function* () {
        const newFileName = "".concat((0, utils_js_3.getUuid)(), ".pdf");
        const fileContentStream = (0, utils_js_4.generateByteStream)();
        const uploadedFiles = yield client.uploads.uploadFile({ attributes: { name: newFileName, parent: { id: "0" } }, file: fileContentStream });
        return uploadedFiles.entries[0];
    });
}
exports.uploadNewFile = uploadNewFile;
function createNewFolder() {
    return __awaiter(this, void 0, void 0, function* () {
        const newFolderName = (0, utils_js_3.getUuid)();
        return yield client.folders.createFolder({ name: newFolderName, parent: { id: "0" } });
    });
}
exports.createNewFolder = createNewFolder;
//# sourceMappingURL=commons.generated.js.map