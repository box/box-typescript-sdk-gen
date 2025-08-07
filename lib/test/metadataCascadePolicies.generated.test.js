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
exports.client = (0, commons_generated_js_1.getDefaultClient)();
test('testMetadataCascadePolicies', function testMetadataCascadePolicies() {
    return __awaiter(this, void 0, void 0, function* () {
        const templateKey = ''.concat('key', (0, utils_js_1.getUuid)());
        yield exports.client.metadataTemplates.createMetadataTemplate({
            scope: 'enterprise',
            displayName: templateKey,
            templateKey: templateKey,
            fields: [
                {
                    type: 'string',
                    key: 'testName',
                    displayName: 'testName',
                },
            ],
        });
        const folder = yield (0, commons_generated_js_2.createNewFolder)();
        const enterpriseId = (0, utils_js_2.getEnvVar)('ENTERPRISE_ID');
        const cascadePolicy = yield exports.client.metadataCascadePolicies.createMetadataCascadePolicy({
            folderId: folder.id,
            scope: 'enterprise',
            templateKey: templateKey,
        });
        if (!((0, utils_js_3.toString)(cascadePolicy.type) == 'metadata_cascade_policy')) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_3.toString)(cascadePolicy.ownerEnterprise.type) == 'enterprise')) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_3.toString)(cascadePolicy.ownerEnterprise.id) == enterpriseId)) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_3.toString)(cascadePolicy.parent.type) == 'folder')) {
            throw new Error('Assertion failed');
        }
        if (!(cascadePolicy.parent.id == folder.id)) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_3.toString)(cascadePolicy.scope) ==
            ''.concat('enterprise_', enterpriseId))) {
            throw new Error('Assertion failed');
        }
        if (!(cascadePolicy.templateKey == templateKey)) {
            throw new Error('Assertion failed');
        }
        const cascadePolicyId = cascadePolicy.id;
        const policyFromTheApi = yield exports.client.metadataCascadePolicies.getMetadataCascadePolicyById(cascadePolicyId);
        if (!(cascadePolicyId == policyFromTheApi.id)) {
            throw new Error('Assertion failed');
        }
        const policies = yield exports.client.metadataCascadePolicies.getMetadataCascadePolicies({
            folderId: folder.id,
        });
        if (!(policies.entries.length == 1)) {
            throw new Error('Assertion failed');
        }
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield exports.client.metadataCascadePolicies.applyMetadataCascadePolicy(cascadePolicyId, {
                conflictResolution: 'overwrite',
            });
        })).rejects.toThrow();
        yield exports.client.folderMetadata.createFolderMetadataById(folder.id, 'enterprise', templateKey, { ['testName']: 'xyz' });
        yield exports.client.metadataCascadePolicies.applyMetadataCascadePolicy(cascadePolicyId, {
            conflictResolution: 'overwrite',
        });
        yield exports.client.metadataCascadePolicies.deleteMetadataCascadePolicyById(cascadePolicyId);
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield exports.client.metadataCascadePolicies.getMetadataCascadePolicyById(cascadePolicyId);
        })).rejects.toThrow();
        yield exports.client.metadataTemplates.deleteMetadataTemplate('enterprise', templateKey);
        yield exports.client.folders.deleteFolderById(folder.id);
    });
});
//# sourceMappingURL=metadataCascadePolicies.generated.test.js.map