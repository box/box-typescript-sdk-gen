import { serializeSignTemplates } from '@/schemas/signTemplates.generated';
import { deserializeSignTemplates } from '@/schemas/signTemplates.generated';
import { serializeSignTemplate } from '@/schemas/signTemplate.generated';
import { deserializeSignTemplate } from '@/schemas/signTemplate.generated';
import { BoxClient } from '@/client.generated';
import { SignTemplates } from '@/schemas/signTemplates.generated';
import { GetSignTemplatesQueryParams } from '@/managers/signTemplates.generated';
import { SignTemplate } from '@/schemas/signTemplate.generated';
import { decodeBase64 } from '@/internal/utils';
import { getEnvVar } from '@/internal/utils';
import { getDefaultClientWithUserSubject } from './commons.generated';
import { SerializedData } from '@/serialization/json';
import { sdIsEmpty } from '@/serialization/json';
import { sdIsBoolean } from '@/serialization/json';
import { sdIsNumber } from '@/serialization/json';
import { sdIsString } from '@/serialization/json';
import { sdIsList } from '@/serialization/json';
import { sdIsMap } from '@/serialization/json';
test('testGetSignTemplates', async function testGetSignTemplates(): Promise<any> {
  const client: BoxClient = getDefaultClientWithUserSubject(
    getEnvVar('USER_ID'),
  );
  const signTemplates: SignTemplates =
    await client.signTemplates.getSignTemplates({
      limit: 2,
    } satisfies GetSignTemplatesQueryParams);
  if (!(signTemplates.entries!.length >= 0)) {
    throw new Error('Assertion failed');
  }
});
test('testGetSignTemplate', async function testGetSignTemplate(): Promise<any> {
  const client: BoxClient = getDefaultClientWithUserSubject(
    getEnvVar('USER_ID'),
  );
  const signTemplates: SignTemplates =
    await client.signTemplates.getSignTemplates({
      limit: 2,
    } satisfies GetSignTemplatesQueryParams);
  if (!(signTemplates.entries!.length >= 0)) {
    throw new Error('Assertion failed');
  }
  if (signTemplates.entries!.length > 0) {
    const signTemplate: SignTemplate =
      await client.signTemplates.getSignTemplateById(
        signTemplates.entries![0].id!,
      );
    if (!(signTemplate.id == signTemplates.entries![0].id)) {
      throw new Error('Assertion failed');
    }
    if (!(signTemplate.sourceFiles!.length > 0)) {
      throw new Error('Assertion failed');
    }
    if (!!(signTemplate.name == '')) {
      throw new Error('Assertion failed');
    }
    if (!!(signTemplate.parentFolder!.id == '')) {
      throw new Error('Assertion failed');
    }
  }
});
export {};
