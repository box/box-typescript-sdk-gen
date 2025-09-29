import { serializeRetentionPolicy } from '@/schemas/retentionPolicy.generated';
import { deserializeRetentionPolicy } from '@/schemas/retentionPolicy.generated';
import { serializeCreateRetentionPolicyRequestBody } from '@/managers/retentionPolicies.generated';
import { deserializeCreateRetentionPolicyRequestBody } from '@/managers/retentionPolicies.generated';
import { serializeCreateRetentionPolicyRequestBodyPolicyTypeField } from '@/managers/retentionPolicies.generated';
import { deserializeCreateRetentionPolicyRequestBodyPolicyTypeField } from '@/managers/retentionPolicies.generated';
import { serializeCreateRetentionPolicyRequestBodyDispositionActionField } from '@/managers/retentionPolicies.generated';
import { deserializeCreateRetentionPolicyRequestBodyDispositionActionField } from '@/managers/retentionPolicies.generated';
import { serializeCreateRetentionPolicyRequestBodyRetentionTypeField } from '@/managers/retentionPolicies.generated';
import { deserializeCreateRetentionPolicyRequestBodyRetentionTypeField } from '@/managers/retentionPolicies.generated';
import { serializeRetentionPolicies } from '@/schemas/retentionPolicies.generated';
import { deserializeRetentionPolicies } from '@/schemas/retentionPolicies.generated';
import { serializeUpdateRetentionPolicyByIdRequestBody } from '@/managers/retentionPolicies.generated';
import { deserializeUpdateRetentionPolicyByIdRequestBody } from '@/managers/retentionPolicies.generated';
import { UpdateRetentionPolicyByIdOptionalsInput } from '@/managers/retentionPolicies.generated';
import { UpdateRetentionPolicyByIdOptionals } from '@/managers/retentionPolicies.generated';
import { RetentionPolicy } from '@/schemas/retentionPolicy.generated';
import { CreateRetentionPolicyRequestBody } from '@/managers/retentionPolicies.generated';
import { CreateRetentionPolicyRequestBodyPolicyTypeField } from '@/managers/retentionPolicies.generated';
import { CreateRetentionPolicyRequestBodyDispositionActionField } from '@/managers/retentionPolicies.generated';
import { CreateRetentionPolicyRequestBodyRetentionTypeField } from '@/managers/retentionPolicies.generated';
import { RetentionPolicies } from '@/schemas/retentionPolicies.generated';
import { UpdateRetentionPolicyByIdRequestBody } from '@/managers/retentionPolicies.generated';
import { getUuid } from '@/internal/utils';
import { BoxClient } from '@/client.generated';
import { getDefaultClient } from './commons.generated';
import { SerializedData } from '@/serialization/json';
import { sdIsEmpty } from '@/serialization/json';
import { sdIsBoolean } from '@/serialization/json';
import { sdIsNumber } from '@/serialization/json';
import { sdIsString } from '@/serialization/json';
import { sdIsList } from '@/serialization/json';
import { sdIsMap } from '@/serialization/json';
export const client: BoxClient = getDefaultClient();
test('testCreateUpdateGetDeleteRetentionPolicy', async function testCreateUpdateGetDeleteRetentionPolicy(): Promise<any> {
  const retentionPolicyName: string = getUuid();
  const retentionDescription: string = 'test description';
  const retentionPolicy: RetentionPolicy =
    await client.retentionPolicies.createRetentionPolicy({
      policyName: retentionPolicyName,
      policyType: 'finite' as CreateRetentionPolicyRequestBodyPolicyTypeField,
      areOwnersNotified: true,
      canOwnerExtendRetention: true,
      description: retentionDescription,
      dispositionAction:
        'remove_retention' as CreateRetentionPolicyRequestBodyDispositionActionField,
      retentionLength: '1',
      retentionType:
        'modifiable' as CreateRetentionPolicyRequestBodyRetentionTypeField,
    } satisfies CreateRetentionPolicyRequestBody);
  if (!(retentionPolicy.policyName == retentionPolicyName)) {
    throw new Error('Assertion failed');
  }
  if (!(retentionPolicy.description == retentionDescription)) {
    throw new Error('Assertion failed');
  }
  const retentionPolicyById: RetentionPolicy =
    await client.retentionPolicies.getRetentionPolicyById(retentionPolicy.id);
  if (!(retentionPolicyById.id == retentionPolicy.id)) {
    throw new Error('Assertion failed');
  }
  const retentionPolicies: RetentionPolicies =
    await client.retentionPolicies.getRetentionPolicies();
  if (!(retentionPolicies.entries!.length > 0)) {
    throw new Error('Assertion failed');
  }
  const updatedRetentionPolicyName: string = getUuid();
  const updatedRetentionPolicy: RetentionPolicy =
    await client.retentionPolicies.updateRetentionPolicyById(
      retentionPolicy.id,
      {
        requestBody: {
          policyName: updatedRetentionPolicyName,
        } satisfies UpdateRetentionPolicyByIdRequestBody,
      } satisfies UpdateRetentionPolicyByIdOptionalsInput,
    );
  if (!(updatedRetentionPolicy.policyName == updatedRetentionPolicyName)) {
    throw new Error('Assertion failed');
  }
  await client.retentionPolicies.deleteRetentionPolicyById(retentionPolicy.id);
});
export {};
