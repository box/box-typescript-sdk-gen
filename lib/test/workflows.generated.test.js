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
const utils_js_3 = require("../internal/utils.js");
const commons_generated_js_1 = require("./commons.generated.js");
const commons_generated_js_2 = require("./commons.generated.js");
const utils_js_4 = require("../internal/utils.js");
exports.client = (0, commons_generated_js_1.getDefaultClient)();
test('testWorkflows', function testWorkflows() {
    return __awaiter(this, void 0, void 0, function* () {
        const adminClient = (0, commons_generated_js_2.getDefaultClientWithUserSubject)((0, utils_js_2.getEnvVar)('USER_ID'));
        const workflowFolderId = (0, utils_js_2.getEnvVar)('WORKFLOW_FOLDER_ID');
        const uploadedFiles = yield adminClient.uploads.uploadFile({
            attributes: {
                name: (0, utils_js_1.getUuid)(),
                parent: {
                    id: workflowFolderId,
                },
            },
            file: (0, utils_js_3.generateByteStream)(1024 * 1024),
        });
        const file = uploadedFiles.entries[0];
        const workflowFileId = file.id;
        const workflows = yield adminClient.workflows.getWorkflows({
            folderId: workflowFolderId,
        });
        if (!(workflows.entries.length == 1)) {
            throw new Error('Assertion failed');
        }
        const workflowToRun = workflows.entries[0];
        if (!((0, utils_js_4.toString)(workflowToRun.type) == 'workflow')) {
            throw new Error('Assertion failed');
        }
        if (!(workflowToRun.isEnabled == true)) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_4.toString)(workflowToRun.flows[0].type) == 'flow')) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_4.toString)(workflowToRun.flows[0].trigger.type) == 'trigger')) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_4.toString)(workflowToRun.flows[0].trigger.triggerType) ==
            'WORKFLOW_MANUAL_START')) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_4.toString)(workflowToRun.flows[0].outcomes[0].actionType) ==
            'delete_file')) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_4.toString)(workflowToRun.flows[0].outcomes[0].type) ==
            'outcome')) {
            throw new Error('Assertion failed');
        }
        yield adminClient.workflows.startWorkflow(workflowToRun.id, {
            type: 'workflow_parameters',
            flow: {
                type: 'flow',
                id: workflowToRun.flows[0].id,
            },
            files: [
                {
                    type: 'file',
                    id: workflowFileId,
                },
            ],
            folder: {
                type: 'folder',
                id: workflowFolderId,
            },
        });
    });
});
//# sourceMappingURL=workflows.generated.test.js.map