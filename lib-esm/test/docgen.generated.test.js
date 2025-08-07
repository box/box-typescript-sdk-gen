import { FileReferenceV2025R0 } from '../schemas/v2025R0/fileReferenceV2025R0.generated.js';
import { DocGenBatchCreateRequestV2025R0DestinationFolderField } from '../schemas/v2025R0/docGenBatchCreateRequestV2025R0.generated.js';
import { getDefaultClient } from './commons.generated.js';
import { uploadNewFile } from './commons.generated.js';
import { createNewFolder } from './commons.generated.js';
import { toString } from '../internal/utils.js';
export const client = getDefaultClient();
test('testDocgenBatchAndJobs', async function testDocgenBatchAndJobs() {
    const uploadedFile = await uploadNewFile();
    const folder = await createNewFolder();
    const createdDocgenTemplate = await client.docgenTemplate.createDocgenTemplateV2025R0({
        file: new FileReferenceV2025R0({ id: uploadedFile.id }),
    });
    const docgenBatch = await client.docgen.createDocgenBatchV2025R0({
        file: new FileReferenceV2025R0({ id: uploadedFile.id }),
        inputSource: 'api',
        destinationFolder: new DocGenBatchCreateRequestV2025R0DestinationFolderField({
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
    if (!(toString(docgenBatch.type) == 'docgen_batch')) {
        throw new Error('Assertion failed');
    }
    const docgenBatchJobs = await client.docgen.getDocgenBatchJobByIdV2025R0(docgenBatch.id);
    if (!(docgenBatchJobs.entries.length >= 1)) {
        throw new Error('Assertion failed');
    }
    if (!!(docgenBatchJobs.entries[0].id == '')) {
        throw new Error('Assertion failed');
    }
    if (!(toString(docgenBatchJobs.entries[0].type) == 'docgen_job')) {
        throw new Error('Assertion failed');
    }
    if (!(docgenBatchJobs.entries[0].outputType == 'pdf')) {
        throw new Error('Assertion failed');
    }
    if (!!(toString(docgenBatchJobs.entries[0].status) == '')) {
        throw new Error('Assertion failed');
    }
    if (!(docgenBatchJobs.entries[0].templateFile.id == uploadedFile.id)) {
        throw new Error('Assertion failed');
    }
    if (!(docgenBatchJobs.entries[0].batch.id == docgenBatch.id)) {
        throw new Error('Assertion failed');
    }
    const docgenJobs = await client.docgen.getDocgenJobsV2025R0({
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
    if (!!(toString(docgenJobs.entries[0].status) == '')) {
        throw new Error('Assertion failed');
    }
    if (!(toString(docgenJobs.entries[0].templateFile.type) == 'file')) {
        throw new Error('Assertion failed');
    }
    if (!!(docgenJobs.entries[0].templateFile.id == '')) {
        throw new Error('Assertion failed');
    }
    if (!(toString(docgenJobs.entries[0].templateFileVersion.type) ==
        'file_version')) {
        throw new Error('Assertion failed');
    }
    if (!!(docgenJobs.entries[0].templateFileVersion.id == '')) {
        throw new Error('Assertion failed');
    }
    if (!(toString(docgenJobs.entries[0].type) == 'docgen_job')) {
        throw new Error('Assertion failed');
    }
    const indexOfItem = 0;
    const docgenJobItemFromList = docgenJobs.entries[indexOfItem];
    const docgenJob = await client.docgen.getDocgenJobByIdV2025R0(docgenJobItemFromList.id);
    if (!!(docgenJob.batch.id == '')) {
        throw new Error('Assertion failed');
    }
    if (!!(docgenJob.id == '')) {
        throw new Error('Assertion failed');
    }
    if (!!(docgenJob.outputType == '')) {
        throw new Error('Assertion failed');
    }
    if (!!(toString(docgenJob.status) == '')) {
        throw new Error('Assertion failed');
    }
    if (!(toString(docgenJob.templateFile.type) == 'file')) {
        throw new Error('Assertion failed');
    }
    if (!!(docgenJob.templateFile.id == '')) {
        throw new Error('Assertion failed');
    }
    if (!(toString(docgenJob.templateFileVersion.type) == 'file_version')) {
        throw new Error('Assertion failed');
    }
    if (!!(docgenJob.templateFileVersion.id == '')) {
        throw new Error('Assertion failed');
    }
    if (!(toString(docgenJob.type) == 'docgen_job')) {
        throw new Error('Assertion failed');
    }
    await client.folders.deleteFolderById(folder.id);
    await client.files.deleteFileById(uploadedFile.id);
});
//# sourceMappingURL=docgen.generated.test.js.map