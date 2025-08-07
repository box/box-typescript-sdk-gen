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
exports.client = void 0;
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const commons_generated_js_1 = require("./commons.generated.js");
const commons_generated_js_2 = require("./commons.generated.js");
const utils_js_3 = require("../internal/utils.js");
exports.client = (0, commons_generated_js_2.getDefaultClient)();
test('testCreateUpdateGetDeleteRetentionPolicy', function testCreateUpdateGetDeleteRetentionPolicy() {
    return __awaiter(this, void 0, void 0, function* () {
        const description = (0, utils_js_2.getUuid)();
        const retentionPolicy = yield exports.client.retentionPolicies.createRetentionPolicy({
            policyName: (0, utils_js_2.getUuid)(),
            policyType: 'finite',
            dispositionAction: 'remove_retention',
            retentionLength: '1',
            description: description,
            canOwnerExtendRetention: false,
            retentionType: 'modifiable',
        });
        if (!(retentionPolicy.description == description)) {
            throw new Error('Assertion failed');
        }
        if (!(retentionPolicy.canOwnerExtendRetention == false)) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_3.toString)(retentionPolicy.retentionType) == 'modifiable')) {
            throw new Error('Assertion failed');
        }
        const folder = yield (0, commons_generated_js_1.createNewFolder)();
        const retentionPolicyAssignment = yield exports.client.retentionPolicyAssignments.createRetentionPolicyAssignment({
            policyId: retentionPolicy.id,
            assignTo: {
                id: folder.id,
                type: 'folder',
            },
        });
        if (!(retentionPolicyAssignment.retentionPolicy.id == retentionPolicy.id)) {
            throw new Error('Assertion failed');
        }
        if (!(retentionPolicyAssignment.assignedTo.id == folder.id)) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_3.toString)(retentionPolicyAssignment.assignedTo.type) ==
            (0, utils_js_3.toString)(folder.type))) {
            throw new Error('Assertion failed');
        }
        const files = yield exports.client.uploads.uploadFile({
            attributes: {
                name: (0, utils_js_2.getUuid)(),
                parent: {
                    id: folder.id,
                },
            },
            file: (0, utils_js_1.generateByteStream)(10),
        });
        const file = files.entries[0];
        const newFiles = yield exports.client.uploads.uploadFileVersion(file.id, {
            attributes: {
                name: file.name,
            },
            file: (0, utils_js_1.generateByteStream)(20),
        });
        const newFile = newFiles.entries[0];
        if (!(newFile.id == file.id)) {
            throw new Error('Assertion failed');
        }
        const fileVersionRetentions = yield exports.client.fileVersionRetentions.getFileVersionRetentions();
        const fileVersionRetentionsCount = fileVersionRetentions.entries.length;
        if (!(fileVersionRetentionsCount >= 0)) {
            throw new Error('Assertion failed');
        }
        if (fileVersionRetentionsCount == 0) {
            yield exports.client.retentionPolicies.deleteRetentionPolicyById(retentionPolicy.id);
            yield exports.client.folders.deleteFolderById(folder.id, {
                queryParams: { recursive: true },
            });
            return void 0;
        }
        const fileVersionRetention = fileVersionRetentions.entries[0];
        const fileVersionRetentionById = yield exports.client.fileVersionRetentions.getFileVersionRetentionById(fileVersionRetention.id);
        if (!(fileVersionRetentionById.id == fileVersionRetention.id)) {
            throw new Error('Assertion failed');
        }
        yield exports.client.retentionPolicies.deleteRetentionPolicyById(retentionPolicy.id);
        yield exports.client.folders.deleteFolderById(folder.id, {
            queryParams: { recursive: true },
        });
    });
});
//# sourceMappingURL=fileVersionRetentions.generated.test.js.map