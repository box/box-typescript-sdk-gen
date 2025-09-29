import { serializeFileFull } from '@/schemas/fileFull.generated';
import { deserializeFileFull } from '@/schemas/fileFull.generated';
import { serializeDocGenTemplateBaseV2025R0 } from '@/schemas/v2025R0/docGenTemplateBaseV2025R0.generated';
import { deserializeDocGenTemplateBaseV2025R0 } from '@/schemas/v2025R0/docGenTemplateBaseV2025R0.generated';
import { serializeDocGenTemplateCreateRequestV2025R0 } from '@/schemas/v2025R0/docGenTemplateCreateRequestV2025R0.generated';
import { deserializeDocGenTemplateCreateRequestV2025R0 } from '@/schemas/v2025R0/docGenTemplateCreateRequestV2025R0.generated';
import { serializeFileReferenceV2025R0 } from '@/schemas/v2025R0/fileReferenceV2025R0.generated';
import { deserializeFileReferenceV2025R0 } from '@/schemas/v2025R0/fileReferenceV2025R0.generated';
import { serializeDocGenTemplatesV2025R0 } from '@/schemas/v2025R0/docGenTemplatesV2025R0.generated';
import { deserializeDocGenTemplatesV2025R0 } from '@/schemas/v2025R0/docGenTemplatesV2025R0.generated';
import { serializeDocGenTemplateV2025R0 } from '@/schemas/v2025R0/docGenTemplateV2025R0.generated';
import { deserializeDocGenTemplateV2025R0 } from '@/schemas/v2025R0/docGenTemplateV2025R0.generated';
import { serializeDocGenTagsV2025R0 } from '@/schemas/v2025R0/docGenTagsV2025R0.generated';
import { deserializeDocGenTagsV2025R0 } from '@/schemas/v2025R0/docGenTagsV2025R0.generated';
import { serializeDocGenJobsV2025R0 } from '@/schemas/v2025R0/docGenJobsV2025R0.generated';
import { deserializeDocGenJobsV2025R0 } from '@/schemas/v2025R0/docGenJobsV2025R0.generated';
import { BoxClient } from '@/client.generated';
import { FileFull } from '@/schemas/fileFull.generated';
import { DocGenTemplateBaseV2025R0 } from '@/schemas/v2025R0/docGenTemplateBaseV2025R0.generated';
import { DocGenTemplateCreateRequestV2025R0 } from '@/schemas/v2025R0/docGenTemplateCreateRequestV2025R0.generated';
import { FileReferenceV2025R0 } from '@/schemas/v2025R0/fileReferenceV2025R0.generated';
import { DocGenTemplatesV2025R0 } from '@/schemas/v2025R0/docGenTemplatesV2025R0.generated';
import { DocGenTemplateV2025R0 } from '@/schemas/v2025R0/docGenTemplateV2025R0.generated';
import { DocGenTagsV2025R0 } from '@/schemas/v2025R0/docGenTagsV2025R0.generated';
import { DocGenJobsV2025R0 } from '@/schemas/v2025R0/docGenJobsV2025R0.generated';
import { getDefaultClient } from './commons.generated';
import { uploadNewFile } from './commons.generated';
import { SerializedData } from '@/serialization/json';
import { sdIsEmpty } from '@/serialization/json';
import { sdIsBoolean } from '@/serialization/json';
import { sdIsNumber } from '@/serialization/json';
import { sdIsString } from '@/serialization/json';
import { sdIsList } from '@/serialization/json';
import { sdIsMap } from '@/serialization/json';
export const client: BoxClient = getDefaultClient();
test('testDocgenTemplateCRUD', async function testDocgenTemplateCRUD(): Promise<any> {
  const file: FileFull = await uploadNewFile();
  const createdDocgenTemplate: DocGenTemplateBaseV2025R0 =
    await client.docgenTemplate.createDocgenTemplateV2025R0({
      file: new FileReferenceV2025R0({ id: file.id }),
    } satisfies DocGenTemplateCreateRequestV2025R0);
  const docgenTemplates: DocGenTemplatesV2025R0 =
    await client.docgenTemplate.getDocgenTemplatesV2025R0();
  if (!(docgenTemplates.entries!.length > 0)) {
    throw new Error('Assertion failed');
  }
  const fetchedDocgenTemplate: DocGenTemplateV2025R0 =
    await client.docgenTemplate.getDocgenTemplateByIdV2025R0(
      createdDocgenTemplate.file!.id,
    );
  if (!(fetchedDocgenTemplate.file!.id == createdDocgenTemplate.file!.id)) {
    throw new Error('Assertion failed');
  }
  const docgenTemplateTags: DocGenTagsV2025R0 =
    await client.docgenTemplate.getDocgenTemplateTagsV2025R0(
      fetchedDocgenTemplate.file!.id,
    );
  const docgenTemplateJobs: DocGenJobsV2025R0 =
    await client.docgenTemplate.getDocgenTemplateJobByIdV2025R0(
      fetchedDocgenTemplate.file!.id,
    );
  if (!(docgenTemplateJobs.entries!.length == 0)) {
    throw new Error('Assertion failed');
  }
  await client.docgenTemplate.deleteDocgenTemplateByIdV2025R0(
    createdDocgenTemplate.file!.id,
  );
  await client.files.deleteFileById(file.id);
});
export {};
