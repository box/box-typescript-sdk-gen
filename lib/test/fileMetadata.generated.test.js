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
test('testUpdatingFileMetadata', function testUpdatingFileMetadata() {
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
                    key: 'name',
                    displayName: 'name',
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
        const createdMetadata = yield exports.client.fileMetadata.createFileMetadataById(file.id, 'enterprise', templateKey, {
            ['name']: 'John',
            ['age']: 23,
            ['birthDate']: '2001-01-03T02:20:50.520Z',
            ['countryCode']: 'US',
            ['sports']: ['basketball', 'tennis'],
        });
        const updatedMetadata = yield exports.client.fileMetadata.updateFileMetadataById(file.id, 'enterprise', templateKey, [
            {
                op: 'replace',
                path: '/name',
                value: 'Jack',
            },
            {
                op: 'replace',
                path: '/age',
                value: 24,
            },
            {
                op: 'replace',
                path: '/birthDate',
                value: '2000-01-03T02:20:50.520Z',
            },
            {
                op: 'replace',
                path: '/countryCode',
                value: 'CA',
            },
            {
                op: 'replace',
                path: '/sports',
                value: ['football'],
            },
        ]);
        if (!((0, utils_js_2.toString)(updatedMetadata.template) == templateKey)) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_2.toString)(updatedMetadata.extraData.name) == 'Jack')) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_2.toString)(updatedMetadata.extraData.age) == '24')) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_2.toString)(updatedMetadata.extraData.birthDate) ==
            '2000-01-03T02:20:50.520Z')) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_2.toString)(updatedMetadata.extraData.countryCode) == 'CA')) {
            throw new Error('Assertion failed');
        }
        const sports = updatedMetadata.extraData.sports;
        if (!(sports[0] == 'football')) {
            throw new Error('Assertion failed');
        }
        yield exports.client.fileMetadata.deleteFileMetadataById(file.id, 'enterprise', templateKey);
        yield exports.client.metadataTemplates.deleteMetadataTemplate('enterprise', templateKey);
        yield exports.client.files.deleteFileById(file.id);
    });
});
test('testGlobalFileMetadata', function testGlobalFileMetadata() {
    return __awaiter(this, void 0, void 0, function* () {
        const file = yield (0, commons_generated_js_2.uploadNewFile)();
        const fileMetadata = yield exports.client.fileMetadata.getFileMetadata(file.id);
        if (!(fileMetadata.entries.length == 0)) {
            throw new Error('Assertion failed');
        }
        const createdMetadata = yield exports.client.fileMetadata.createFileMetadataById(file.id, 'global', 'properties', { ['abc']: 'xyz' });
        if (!((0, utils_js_2.toString)(createdMetadata.template) == 'properties')) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_2.toString)(createdMetadata.scope) == 'global')) {
            throw new Error('Assertion failed');
        }
        if (!(createdMetadata.version == 0)) {
            throw new Error('Assertion failed');
        }
        const receivedMetadata = yield exports.client.fileMetadata.getFileMetadataById(file.id, 'global', 'properties');
        if (!((0, utils_js_2.toString)(receivedMetadata.extraData.abc) == 'xyz')) {
            throw new Error('Assertion failed');
        }
        const newValue = 'bar';
        yield exports.client.fileMetadata.updateFileMetadataById(file.id, 'global', 'properties', [
            {
                op: 'replace',
                path: '/abc',
                value: newValue,
            },
        ]);
        const receivedUpdatedMetadata = yield exports.client.fileMetadata.getFileMetadataById(file.id, 'global', 'properties');
        if (!((0, utils_js_2.toString)(receivedUpdatedMetadata.extraData.abc) == newValue)) {
            throw new Error('Assertion failed');
        }
        yield exports.client.fileMetadata.deleteFileMetadataById(file.id, 'global', 'properties');
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield exports.client.fileMetadata.getFileMetadataById(file.id, 'global', 'properties');
        })).rejects.toThrow();
        yield exports.client.files.deleteFileById(file.id);
    });
});
test('testEnterpriseFileMetadata', function testEnterpriseFileMetadata() {
    return __awaiter(this, void 0, void 0, function* () {
        const file = yield (0, commons_generated_js_2.uploadNewFile)();
        const templateKey = ''.concat('key', (0, utils_js_1.getUuid)());
        yield exports.client.metadataTemplates.createMetadataTemplate({
            scope: 'enterprise',
            displayName: templateKey,
            templateKey: templateKey,
            fields: [
                {
                    type: 'string',
                    key: 'name',
                    displayName: 'name',
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
        const createdMetadata = yield exports.client.fileMetadata.createFileMetadataById(file.id, 'enterprise', templateKey, {
            ['name']: 'John',
            ['age']: 23,
            ['birthDate']: '2001-01-03T02:20:50.520Z',
            ['countryCode']: 'US',
            ['sports']: ['basketball', 'tennis'],
        });
        if (!((0, utils_js_2.toString)(createdMetadata.template) == templateKey)) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_2.toString)(createdMetadata.extraData.name) == 'John')) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_2.toString)(createdMetadata.extraData.age) == '23')) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_2.toString)(createdMetadata.extraData.birthDate) ==
            '2001-01-03T02:20:50.520Z')) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_2.toString)(createdMetadata.extraData.countryCode) == 'US')) {
            throw new Error('Assertion failed');
        }
        const sports = createdMetadata.extraData.sports;
        if (!(sports[0] == 'basketball')) {
            throw new Error('Assertion failed');
        }
        if (!(sports[1] == 'tennis')) {
            throw new Error('Assertion failed');
        }
        yield exports.client.fileMetadata.deleteFileMetadataById(file.id, 'enterprise', templateKey);
        yield exports.client.metadataTemplates.deleteMetadataTemplate('enterprise', templateKey);
        yield exports.client.files.deleteFileById(file.id);
    });
});
//# sourceMappingURL=fileMetadata.generated.test.js.map