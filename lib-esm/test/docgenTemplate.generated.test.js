import { FileReferenceV2025R0 } from '../schemas/v2025R0/fileReferenceV2025R0.generated.js';
import { getDefaultClient } from './commons.generated.js';
import { uploadNewFile } from './commons.generated.js';
export const client = getDefaultClient();
test('testDocgenTemplateCRUD', async function testDocgenTemplateCRUD() {
    const file = await uploadNewFile();
    const createdDocgenTemplate = await client.docgenTemplate.createDocgenTemplateV2025R0({
        file: new FileReferenceV2025R0({ id: file.id }),
    });
    const docgenTemplates = await client.docgenTemplate.getDocgenTemplatesV2025R0();
    if (!(docgenTemplates.entries.length > 0)) {
        throw new Error('Assertion failed');
    }
    const fetchedDocgenTemplate = await client.docgenTemplate.getDocgenTemplateByIdV2025R0(createdDocgenTemplate.file.id);
    if (!(fetchedDocgenTemplate.file.id == createdDocgenTemplate.file.id)) {
        throw new Error('Assertion failed');
    }
    const docgenTemplateTags = await client.docgenTemplate.getDocgenTemplateTagsV2025R0(fetchedDocgenTemplate.file.id);
    const docgenTemplateJobs = await client.docgenTemplate.getDocgenTemplateJobByIdV2025R0(fetchedDocgenTemplate.file.id);
    if (!(docgenTemplateJobs.entries.length == 0)) {
        throw new Error('Assertion failed');
    }
    await client.docgenTemplate.deleteDocgenTemplateByIdV2025R0(createdDocgenTemplate.file.id);
    await client.files.deleteFileById(file.id);
});
//# sourceMappingURL=docgenTemplate.generated.test.js.map