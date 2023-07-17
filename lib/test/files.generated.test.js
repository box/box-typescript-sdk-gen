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
exports.uploadFile = void 0;
const utils_js_1 = require("../utils.js");
const utils_js_2 = require("../utils.js");
const utils_js_3 = require("../utils.js");
const utils_js_4 = require("../utils.js");
const utils_js_5 = require("../utils.js");
const client_generated_js_1 = require("../client.generated.js");
const jwtAuth_js_1 = require("../jwtAuth.js");
const jwtAuth_js_2 = require("../jwtAuth.js");
const commons_generated_js_1 = require("./commons.generated.js");
const jwtConfig = jwtAuth_js_2.JwtConfig.fromConfigJsonString((0, utils_js_1.decodeBase64)((0, utils_js_2.getEnvVar)("JWT_CONFIG_BASE_64")));
const auth = new jwtAuth_js_1.JwtAuth({ config: jwtConfig });
const client = new client_generated_js_1.Client({ auth: auth });
function uploadFile(fileName, fileStream) {
    return __awaiter(this, void 0, void 0, function* () {
        const uploadedFiles = yield client.uploads.uploadFile({ attributes: { name: fileName, parent: { id: "0" } }, file: fileStream });
        return uploadedFiles.entries[0];
    });
}
exports.uploadFile = uploadFile;
test("testGetFileThumbnail", function testGetFileThumbnail() {
    return __awaiter(this, void 0, void 0, function* () {
        const thumbnailFileName = (0, utils_js_3.getUuid)();
        const thumbnailContentStream = (0, utils_js_4.generateByteStream)(1048576);
        const thumbnailFile = yield uploadFile(thumbnailFileName, thumbnailContentStream);
        if (!!((yield client.files.getFileThumbnailById(thumbnailFile.id, "png")) == (yield (0, utils_js_5.readByteStream)(thumbnailContentStream)))) {
            throw "Assertion failed";
        }
        yield client.files.deleteFileById(thumbnailFile.id);
    });
});
test("testGetFileFullExtraFields", function testGetFileFullExtraFields() {
    return __awaiter(this, void 0, void 0, function* () {
        const newFileName = (0, utils_js_3.getUuid)();
        const fileContent = (0, utils_js_4.generateByteStream)(1048576);
        const uploadedFile = yield uploadFile(newFileName, fileContent);
        const file = yield client.files.getFileById(uploadedFile.id, { fields: "is_externally_owned,has_collaborations" });
        if (!(file.isExternallyOwned == false)) {
            throw "Assertion failed";
        }
        if (!(file.hasCollaborations == false)) {
            throw "Assertion failed";
        }
        yield client.files.deleteFileById(file.id);
    });
});
test("testCreateGetAndDeleteFile", function testCreateGetAndDeleteFile() {
    return __awaiter(this, void 0, void 0, function* () {
        const newFileName = (0, utils_js_3.getUuid)();
        const updatedContentStream = (0, utils_js_4.generateByteStream)(1048576);
        const uploadedFile = yield uploadFile(newFileName, updatedContentStream);
        const file = yield client.files.getFileById(uploadedFile.id);
        if (!(file.name == newFileName)) {
            throw "Assertion failed";
        }
        yield client.files.deleteFileById(uploadedFile.id);
        const trashedFile = yield client.trashedFiles.getFileTrash(uploadedFile.id);
        if (!(file.id == trashedFile.id)) {
            throw "Assertion failed";
        }
    });
});
test("testUpdateFile", function testUpdateFile() {
    return __awaiter(this, void 0, void 0, function* () {
        const fileToUpdate = yield (0, commons_generated_js_1.uploadNewFile)();
        const updatedName = (0, utils_js_3.getUuid)();
        const updatedFile = yield client.files.updateFileById(fileToUpdate.id, { name: updatedName, description: "Updated description" });
        if (!(updatedFile.name == updatedName)) {
            throw "Assertion failed";
        }
        if (!(updatedFile.description == "Updated description")) {
            throw "Assertion failed";
        }
        yield client.files.deleteFileById(updatedFile.id);
    });
});
test("testCopyFile", function testCopyFile() {
    return __awaiter(this, void 0, void 0, function* () {
        const fileOrigin = yield (0, commons_generated_js_1.uploadNewFile)();
        const copiedFileName = (0, utils_js_3.getUuid)();
        const copiedFile = yield client.files.copyFile(fileOrigin.id, { parent: { id: "0" }, name: copiedFileName });
        if (!(copiedFile.parent.id == "0")) {
            throw "Assertion failed";
        }
        if (!(copiedFile.name == copiedFileName)) {
            throw "Assertion failed";
        }
        yield client.files.deleteFileById(fileOrigin.id);
        yield client.files.deleteFileById(copiedFile.id);
    });
});
//# sourceMappingURL=files.generated.test.js.map