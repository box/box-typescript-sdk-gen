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
const utils_js_1 = require("../utils.js");
const utils_js_2 = require("../utils.js");
const utils_js_3 = require("../utils.js");
const client_generated_js_1 = require("../client.generated.js");
const jwtAuth_js_1 = require("../jwtAuth.js");
const jwtAuth_js_2 = require("../jwtAuth.js");
const jwtConfig = jwtAuth_js_2.JwtConfig.fromConfigJsonString((0, utils_js_1.decodeBase64)((0, utils_js_2.getEnvVar)("JWT_CONFIG_BASE_64")));
const auth = new jwtAuth_js_1.JwtAuth({ config: jwtConfig });
const client = new client_generated_js_1.Client({ auth: auth });
test("test_get_folder_info", function test_get_folder_info() {
    return __awaiter(this, void 0, void 0, function* () {
        const rootFolder = yield client.folders.getFolderById("0");
        if (!(rootFolder.id == "0")) {
            throw "Assertion failed";
        }
        if (!(rootFolder.name == "All Files")) {
            throw "Assertion failed";
        }
    });
});
test("test_get_folder_full_info_with_extra_fields", function test_get_folder_full_info_with_extra_fields() {
    return __awaiter(this, void 0, void 0, function* () {
        const rootFolder = yield client.folders.getFolderById("0", { fields: "has_collaborations,tags" });
        if (!(rootFolder.id == "0")) {
            throw "Assertion failed";
        }
        if (!(rootFolder.hasCollaborations == false)) {
            throw "Assertion failed";
        }
        const tagsLength = rootFolder.tags.length;
        if (!(tagsLength == 0)) {
            throw "Assertion failed";
        }
    });
});
test("test_create_and_delete_folder", function test_create_and_delete_folder() {
    return __awaiter(this, void 0, void 0, function* () {
        const newFolderName = (0, utils_js_3.getUuid)();
        const newFolder = yield client.folders.createFolder({ name: newFolderName, parent: { id: "0" } });
        const createdFolder = yield client.folders.getFolderById(newFolder.id);
        if (!(createdFolder.name == newFolderName)) {
            throw "Assertion failed";
        }
        yield client.folders.deleteFolderById(newFolder.id);
        expect(() => __awaiter(this, void 0, void 0, function* () { yield client.folders.getFolderById(newFolder.id); })).rejects.toThrow();
    });
});
test("test_update_folder", function test_update_folder() {
    return __awaiter(this, void 0, void 0, function* () {
        const folderToUpdateName = (0, utils_js_3.getUuid)();
        const folderToUpdate = yield client.folders.createFolder({ name: folderToUpdateName, parent: { id: "0" } });
        const updatedName = (0, utils_js_3.getUuid)();
        const updatedFolder = yield client.folders.updateFolderById(folderToUpdate.id, { name: updatedName, description: "Updated description" });
        if (!(updatedFolder.name == updatedName)) {
            throw "Assertion failed";
        }
        if (!(updatedFolder.description == "Updated description")) {
            throw "Assertion failed";
        }
        yield client.folders.deleteFolderById(updatedFolder.id);
    });
});
test("test_copy_move_folder_and_list_folder_items", function test_copy_move_folder_and_list_folder_items() {
    return __awaiter(this, void 0, void 0, function* () {
        const folderOriginName = (0, utils_js_3.getUuid)();
        const folderOrigin = yield client.folders.createFolder({ name: folderOriginName, parent: { id: "0" } });
        const copiedFolderName = (0, utils_js_3.getUuid)();
        const copiedFolder = yield client.folders.copyFolder(folderOrigin.id, { parent: { id: "0" }, name: copiedFolderName });
        if (!(copiedFolder.parent.id == "0")) {
            throw "Assertion failed";
        }
        const movedFolderName = (0, utils_js_3.getUuid)();
        const movedFolder = yield client.folders.updateFolderById(copiedFolder.id, { parent: { id: folderOrigin.id }, name: movedFolderName });
        if (!(movedFolder.parent.id == folderOrigin.id)) {
            throw "Assertion failed";
        }
        const folderItems = yield client.folders.getFolderItems(folderOrigin.id);
        if (!(folderItems.entries[0].id == movedFolder.id)) {
            throw "Assertion failed";
        }
        if (!(folderItems.entries[0].name == movedFolderName)) {
            throw "Assertion failed";
        }
        yield client.folders.deleteFolderById(movedFolder.id);
        yield client.folders.deleteFolderById(folderOrigin.id);
    });
});
//# sourceMappingURL=folders.generated.test.js.map