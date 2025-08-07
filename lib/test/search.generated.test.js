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
const utils_js_4 = require("../internal/utils.js");
const commons_generated_js_1 = require("./commons.generated.js");
const utils_js_5 = require("../internal/utils.js");
exports.client = (0, commons_generated_js_1.getDefaultClient)();
test('testCreateMetaDataQueryExecuteRead', function testCreateMetaDataQueryExecuteRead() {
    return __awaiter(this, void 0, void 0, function* () {
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
        if (!(template.templateKey == templateKey)) {
            throw new Error('Assertion failed');
        }
        const files = yield exports.client.uploads.uploadFile({
            attributes: {
                name: (0, utils_js_1.getUuid)(),
                parent: { id: '0' },
            },
            file: (0, utils_js_2.generateByteStream)(10),
        });
        const file = files.entries[0];
        const metadata = yield exports.client.fileMetadata.createFileMetadataById(file.id, 'enterprise', templateKey, {
            ['name']: 'John',
            ['age']: 23,
            ['birthDate']: '2001-01-03T02:20:50.520Z',
            ['countryCode']: 'US',
            ['sports']: ['basketball', 'tennis'],
        });
        if (!(metadata.template == templateKey)) {
            throw new Error('Assertion failed');
        }
        if (!(metadata.scope == template.scope)) {
            throw new Error('Assertion failed');
        }
        yield (0, utils_js_4.delayInSeconds)(5);
        const searchFrom = ''.concat(template.scope, '.', template.templateKey);
        const query = yield exports.client.search.searchByMetadataQuery({
            ancestorFolderId: '0',
            from: searchFrom,
            query: 'name = :name AND age < :age AND birthDate >= :birthDate AND countryCode = :countryCode AND sports = :sports',
            queryParams: {
                ['name']: 'John',
                ['age']: 50,
                ['birthDate']: '2001-01-01T02:20:10.120Z',
                ['countryCode']: 'US',
                ['sports']: ['basketball', 'tennis'],
            },
        });
        if (!(query.entries.length >= 0)) {
            throw new Error('Assertion failed');
        }
        yield exports.client.metadataTemplates.deleteMetadataTemplate('enterprise', template.templateKey);
        yield exports.client.files.deleteFileById(file.id);
    });
});
test('testMetadataFilters', function testMetadataFilters() {
    return __awaiter(this, void 0, void 0, function* () {
        const templateKey = ''.concat('key', (0, utils_js_1.getUuid)());
        const template = yield exports.client.metadataTemplates.createMetadataTemplate({
            scope: 'enterprise',
            displayName: templateKey,
            templateKey: templateKey,
            fields: [
                {
                    type: 'float',
                    key: 'floatField',
                    displayName: 'floatField',
                },
                {
                    type: 'string',
                    key: 'stringField',
                    displayName: 'stringField',
                },
                {
                    type: 'date',
                    key: 'dateField',
                    displayName: 'dateField',
                },
                {
                    type: 'enum',
                    key: 'enumField',
                    displayName: 'enumField',
                    options: [
                        {
                            key: 'enumValue1',
                        },
                        {
                            key: 'enumValue2',
                        },
                    ],
                },
                {
                    type: 'multiSelect',
                    key: 'multiSelectField',
                    displayName: 'multiSelectField',
                    options: [
                        {
                            key: 'multiSelectValue1',
                        },
                        {
                            key: 'multiSelectValue2',
                        },
                    ],
                },
            ],
        });
        const files = yield exports.client.uploads.uploadFile({
            attributes: {
                name: (0, utils_js_1.getUuid)(),
                parent: { id: '0' },
            },
            file: (0, utils_js_2.generateByteStream)(10),
        });
        const file = files.entries[0];
        const metadata = yield exports.client.fileMetadata.createFileMetadataById(file.id, 'enterprise', templateKey, {
            ['floatField']: 10,
            ['stringField']: 'stringValue',
            ['dateField']: '2035-01-02T00:00:00Z',
            ['enumField']: 'enumValue2',
            ['multiSelectField']: ['multiSelectValue1', 'multiSelectValue2'],
        });
        const searchFilters = {
            ['stringField']: 'stringValue',
            ['dateField']: {
                lt: (0, utils_js_3.dateTimeFromString)('2035-01-01T00:00:00Z'),
                gt: (0, utils_js_3.dateTimeFromString)('2035-01-03T00:00:00Z'),
            },
            ['floatField']: {
                lt: 9.5,
                gt: 10.5,
            },
            ['enumField']: 'enumValue2',
            ['multiSelectField']: ['multiSelectValue1', 'multiSelectValue2'],
        };
        const query = yield exports.client.search.searchForContent({
            ancestorFolderIds: ['0'],
            mdfilters: [
                {
                    filters: searchFilters,
                    scope: 'enterprise',
                    templateKey: templateKey,
                },
            ],
        });
        const queryResults = query;
        if (!(queryResults.entries.length >= 0)) {
            throw new Error('Assertion failed');
        }
        yield exports.client.metadataTemplates.deleteMetadataTemplate('enterprise', template.templateKey);
        yield exports.client.files.deleteFileById(file.id);
    });
});
test('testGetSearch', function testGetSearch() {
    return __awaiter(this, void 0, void 0, function* () {
        const keyword = 'test';
        const search = yield exports.client.search.searchForContent({
            ancestorFolderIds: ['0'],
            query: keyword,
            trashContent: 'non_trashed_only',
        });
        if (!((0, utils_js_5.toString)(search.type) == 'search_results_items')) {
            throw new Error('Assertion failed');
        }
        const searchResults = search;
        if (!(searchResults.entries.length >= 0)) {
            throw new Error('Assertion failed');
        }
        const searchWithSharedLink = yield exports.client.search.searchForContent({
            ancestorFolderIds: ['0'],
            query: keyword,
            trashContent: 'non_trashed_only',
            includeRecentSharedLinks: true,
        });
        if (!((0, utils_js_5.toString)(searchWithSharedLink.type) ==
            'search_results_with_shared_links')) {
            throw new Error('Assertion failed');
        }
        const searchResultsWithSharedLink = searchWithSharedLink;
        if (!(searchResultsWithSharedLink.entries.length >= 0)) {
            throw new Error('Assertion failed');
        }
    });
});
//# sourceMappingURL=search.generated.test.js.map