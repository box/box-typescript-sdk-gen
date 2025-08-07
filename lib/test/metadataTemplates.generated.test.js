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
const commons_generated_js_1 = require("./commons.generated.js");
const commons_generated_js_2 = require("./commons.generated.js");
const utils_js_2 = require("../internal/utils.js");
exports.client = (0, commons_generated_js_1.getDefaultClient)();
test('testMetadataTemplates', function testMetadataTemplates() {
    return __awaiter(this, void 0, void 0, function* () {
        const templateKey = ''.concat('key', (0, utils_js_1.getUuid)());
        const template = yield exports.client.metadataTemplates.createMetadataTemplate({
            scope: 'enterprise',
            displayName: templateKey,
            templateKey: templateKey,
            fields: [
                {
                    type: 'string',
                    key: 'testName',
                    displayName: 'testName',
                },
                {
                    type: 'float',
                    key: 'age',
                    displayName: 'age',
                },
                {
                    type: 'date',
                    key: 'birthDate',
                    displayName: 'birthDate',
                },
                {
                    type: 'enum',
                    key: 'countryCode',
                    displayName: 'countryCode',
                    options: [
                        {
                            key: 'US',
                        },
                        {
                            key: 'CA',
                        },
                    ],
                },
                {
                    type: 'multiSelect',
                    key: 'sports',
                    displayName: 'sports',
                    options: [
                        {
                            key: 'basketball',
                        },
                        {
                            key: 'football',
                        },
                        {
                            key: 'tennis',
                        },
                    ],
                },
            ],
        });
        if (!(template.templateKey == templateKey)) {
            throw new Error('Assertion failed');
        }
        if (!(template.displayName == templateKey)) {
            throw new Error('Assertion failed');
        }
        if (!(template.fields.length == 5)) {
            throw new Error('Assertion failed');
        }
        if (!(template.fields[0].key == 'testName')) {
            throw new Error('Assertion failed');
        }
        if (!(template.fields[0].displayName == 'testName')) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_2.toString)(template.fields[0].type) == 'string')) {
            throw new Error('Assertion failed');
        }
        if (!(template.fields[1].key == 'age')) {
            throw new Error('Assertion failed');
        }
        if (!(template.fields[1].displayName == 'age')) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_2.toString)(template.fields[1].type) == 'float')) {
            throw new Error('Assertion failed');
        }
        if (!(template.fields[2].key == 'birthDate')) {
            throw new Error('Assertion failed');
        }
        if (!(template.fields[2].displayName == 'birthDate')) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_2.toString)(template.fields[2].type) == 'date')) {
            throw new Error('Assertion failed');
        }
        if (!(template.fields[3].key == 'countryCode')) {
            throw new Error('Assertion failed');
        }
        if (!(template.fields[3].displayName == 'countryCode')) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_2.toString)(template.fields[3].type) == 'enum')) {
            throw new Error('Assertion failed');
        }
        if (!(template.fields[4].key == 'sports')) {
            throw new Error('Assertion failed');
        }
        if (!(template.fields[4].displayName == 'sports')) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_2.toString)(template.fields[4].type) == 'multiSelect')) {
            throw new Error('Assertion failed');
        }
        const updatedTemplate = yield exports.client.metadataTemplates.updateMetadataTemplate('enterprise', templateKey, [
            {
                op: 'addField',
                fieldKey: 'newfieldname',
                data: { ['type']: 'string', ['displayName']: 'newFieldName' },
            },
        ]);
        if (!(updatedTemplate.fields.length == 6)) {
            throw new Error('Assertion failed');
        }
        if (!(updatedTemplate.fields[5].key == 'newfieldname')) {
            throw new Error('Assertion failed');
        }
        if (!(updatedTemplate.fields[5].displayName == 'newFieldName')) {
            throw new Error('Assertion failed');
        }
        const getMetadataTemplate = yield exports.client.metadataTemplates.getMetadataTemplateById(template.id);
        if (!(getMetadataTemplate.id == template.id)) {
            throw new Error('Assertion failed');
        }
        const getMetadataTemplateSchema = yield exports.client.metadataTemplates.getMetadataTemplate('enterprise', template.templateKey);
        if (!(getMetadataTemplateSchema.id == template.id)) {
            throw new Error('Assertion failed');
        }
        const enterpriseMetadataTemplates = yield exports.client.metadataTemplates.getEnterpriseMetadataTemplates();
        if (!(enterpriseMetadataTemplates.entries.length > 0)) {
            throw new Error('Assertion failed');
        }
        const globalMetadataTemplates = yield exports.client.metadataTemplates.getGlobalMetadataTemplates();
        if (!(globalMetadataTemplates.entries.length > 0)) {
            throw new Error('Assertion failed');
        }
        yield exports.client.metadataTemplates.deleteMetadataTemplate('enterprise', template.templateKey);
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield exports.client.metadataTemplates.deleteMetadataTemplate('enterprise', template.templateKey);
        })).rejects.toThrow();
    });
});
test('testGetMetadataTemplateByInstance', function testGetMetadataTemplateByInstance() {
    return __awaiter(this, void 0, void 0, function* () {
        const file = yield (0, commons_generated_js_2.uploadNewFile)();
        const templateKey = ''.concat('key', (0, utils_js_1.getUuid)());
        const template = yield exports.client.metadataTemplates.createMetadataTemplate({
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
        const createdMetadataInstance = yield exports.client.fileMetadata.createFileMetadataById(file.id, 'enterprise', templateKey, { ['testName']: 'xyz' });
        const metadataTemplates = yield exports.client.metadataTemplates.getMetadataTemplatesByInstanceId({
            metadataInstanceId: createdMetadataInstance.id,
        });
        if (!(metadataTemplates.entries.length == 1)) {
            throw new Error('Assertion failed');
        }
        if (!(metadataTemplates.entries[0].displayName == templateKey)) {
            throw new Error('Assertion failed');
        }
        if (!(metadataTemplates.entries[0].templateKey == templateKey)) {
            throw new Error('Assertion failed');
        }
        yield exports.client.fileMetadata.deleteFileMetadataById(file.id, 'enterprise', templateKey);
        yield exports.client.metadataTemplates.deleteMetadataTemplate('enterprise', template.templateKey);
        yield exports.client.files.deleteFileById(file.id);
    });
});
//# sourceMappingURL=metadataTemplates.generated.test.js.map