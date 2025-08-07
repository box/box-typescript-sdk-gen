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
const fileReferenceV2025R0_generated_js_1 = require("../schemas/v2025R0/fileReferenceV2025R0.generated.js");
const docGenBatchCreateRequestV2025R0_generated_js_1 = require("../schemas/v2025R0/docGenBatchCreateRequestV2025R0.generated.js");
const commons_generated_js_1 = require("./commons.generated.js");
const commons_generated_js_2 = require("./commons.generated.js");
const commons_generated_js_3 = require("./commons.generated.js");
const utils_js_1 = require("../internal/utils.js");
exports.client = (0, commons_generated_js_1.getDefaultClient)();
test('testDocgenBatchAndJobs', function testDocgenBatchAndJobs() {
    return __awaiter(this, void 0, void 0, function* () {
        const uploadedFile = yield (0, commons_generated_js_2.uploadNewFile)();
        const folder = yield (0, commons_generated_js_3.createNewFolder)();
        const createdDocgenTemplate = yield exports.client.docgenTemplate.createDocgenTemplateV2025R0({
            file: new fileReferenceV2025R0_generated_js_1.FileReferenceV2025R0({ id: uploadedFile.id }),
        });
        const docgenBatch = yield exports.client.docgen.createDocgenBatchV2025R0({
            file: new fileReferenceV2025R0_generated_js_1.FileReferenceV2025R0({ id: uploadedFile.id }),
            inputSource: 'api',
            destinationFolder: new docGenBatchCreateRequestV2025R0_generated_js_1.DocGenBatchCreateRequestV2025R0DestinationFolderField({
                id: folder.id,
            }),
            outputType: 'pdf',
            documentGenerationData: [
                {
                    generatedFileName: 'test',
                    userInput: { ['abc']: 'xyz' },
                },
            ],
        });
        if (!!(docgenBatch.id == '')) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_1.toString)(docgenBatch.type) == 'docgen_batch')) {
            throw new Error('Assertion failed');
        }
        const docgenBatchJobs = yield exports.client.docgen.getDocgenBatchJobByIdV2025R0(docgenBatch.id);
        if (!(docgenBatchJobs.entries.length >= 1)) {
            throw new Error('Assertion failed');
        }
        if (!!(docgenBatchJobs.entries[0].id == '')) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_1.toString)(docgenBatchJobs.entries[0].type) == 'docgen_job')) {
            throw new Error('Assertion failed');
        }
        if (!(docgenBatchJobs.entries[0].outputType == 'pdf')) {
            throw new Error('Assertion failed');
        }
        if (!!((0, utils_js_1.toString)(docgenBatchJobs.entries[0].status) == '')) {
            throw new Error('Assertion failed');
        }
        if (!(docgenBatchJobs.entries[0].templateFile.id == uploadedFile.id)) {
            throw new Error('Assertion failed');
        }
        if (!(docgenBatchJobs.entries[0].batch.id == docgenBatch.id)) {
            throw new Error('Assertion failed');
        }
        const docgenJobs = yield exports.client.docgen.getDocgenJobsV2025R0({
            limit: 500,
        });
        if (!(docgenJobs.entries.length >= 1)) {
            throw new Error('Assertion failed');
        }
        if (!!(docgenJobs.entries[0].batch.id == '')) {
            throw new Error('Assertion failed');
        }
        if (!!(docgenJobs.entries[0].createdBy.id == '')) {
            throw new Error('Assertion failed');
        }
        if (!!(docgenJobs.entries[0].enterprise.id == '')) {
            throw new Error('Assertion failed');
        }
        if (!!(docgenJobs.entries[0].id == '')) {
            throw new Error('Assertion failed');
        }
        if (!!(docgenJobs.entries[0].outputType == '')) {
            throw new Error('Assertion failed');
        }
        if (!!(docgenJobs.entries[0].source == '')) {
            throw new Error('Assertion failed');
        }
        if (!!((0, utils_js_1.toString)(docgenJobs.entries[0].status) == '')) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_1.toString)(docgenJobs.entries[0].templateFile.type) == 'file')) {
            throw new Error('Assertion failed');
        }
        if (!!(docgenJobs.entries[0].templateFile.id == '')) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_1.toString)(docgenJobs.entries[0].templateFileVersion.type) ==
            'file_version')) {
            throw new Error('Assertion failed');
        }
        if (!!(docgenJobs.entries[0].templateFileVersion.id == '')) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_1.toString)(docgenJobs.entries[0].type) == 'docgen_job')) {
            throw new Error('Assertion failed');
        }
        const indexOfItem = 0;
        const docgenJobItemFromList = docgenJobs.entries[indexOfItem];
        const docgenJob = yield exports.client.docgen.getDocgenJobByIdV2025R0(docgenJobItemFromList.id);
        if (!!(docgenJob.batch.id == '')) {
            throw new Error('Assertion failed');
        }
        if (!!(docgenJob.id == '')) {
            throw new Error('Assertion failed');
        }
        if (!!(docgenJob.outputType == '')) {
            throw new Error('Assertion failed');
        }
        if (!!((0, utils_js_1.toString)(docgenJob.status) == '')) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_1.toString)(docgenJob.templateFile.type) == 'file')) {
            throw new Error('Assertion failed');
        }
        if (!!(docgenJob.templateFile.id == '')) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_1.toString)(docgenJob.templateFileVersion.type) == 'file_version')) {
            throw new Error('Assertion failed');
        }
        if (!!(docgenJob.templateFileVersion.id == '')) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_1.toString)(docgenJob.type) == 'docgen_job')) {
            throw new Error('Assertion failed');
        }
        yield exports.client.folders.deleteFolderById(folder.id);
        yield exports.client.files.deleteFileById(uploadedFile.id);
    });
});
//# sourceMappingURL=docgen.generated.test.js.map