import { serializeRetentionPolicy } from '../schemas.generated.js';
import { deserializeRetentionPolicy } from '../schemas.generated.js';
import { serializeCreateRetentionPolicyRequestBodyArg } from '../managers/retentionPolicies.generated.js';
import { deserializeCreateRetentionPolicyRequestBodyArg } from '../managers/retentionPolicies.generated.js';
import { serializeCreateRetentionPolicyRequestBodyArgPolicyTypeField } from '../managers/retentionPolicies.generated.js';
import { deserializeCreateRetentionPolicyRequestBodyArgPolicyTypeField } from '../managers/retentionPolicies.generated.js';
import { serializeCreateRetentionPolicyRequestBodyArgDispositionActionField } from '../managers/retentionPolicies.generated.js';
import { deserializeCreateRetentionPolicyRequestBodyArgDispositionActionField } from '../managers/retentionPolicies.generated.js';
import { serializeCreateRetentionPolicyRequestBodyArgRetentionTypeField } from '../managers/retentionPolicies.generated.js';
import { deserializeCreateRetentionPolicyRequestBodyArgRetentionTypeField } from '../managers/retentionPolicies.generated.js';
import { serializeRetentionPolicies } from '../schemas.generated.js';
import { deserializeRetentionPolicies } from '../schemas.generated.js';
import { serializeUpdateRetentionPolicyByIdRequestBodyArg } from '../managers/retentionPolicies.generated.js';
import { deserializeUpdateRetentionPolicyByIdRequestBodyArg } from '../managers/retentionPolicies.generated.js';
import { RetentionPolicy } from '../schemas.generated.js';
import { CreateRetentionPolicyRequestBodyArg } from '../managers/retentionPolicies.generated.js';
import { CreateRetentionPolicyRequestBodyArgPolicyTypeField } from '../managers/retentionPolicies.generated.js';
import { CreateRetentionPolicyRequestBodyArgDispositionActionField } from '../managers/retentionPolicies.generated.js';
import { CreateRetentionPolicyRequestBodyArgRetentionTypeField } from '../managers/retentionPolicies.generated.js';
import { RetentionPolicies } from '../schemas.generated.js';
import { UpdateRetentionPolicyByIdRequestBodyArg } from '../managers/retentionPolicies.generated.js';
import { getUuid } from '../utils.js';
import { BoxClient } from '../client.generated.js';
import { getDefaultClient } from './commons.generated.js';
const client: BoxClient = getDefaultClient();
test('testCreateUpdateGetDeleteRetentionPolicy', async function testCreateUpdateGetDeleteRetentionPolicy(): Promise<any> {
  const retentionPolicyName: string = getUuid();
  const retentionDescription: string = 'test description';
  const retentionPolicy: RetentionPolicy =
    await client.retentionPolicies.createRetentionPolicy({
      policyName: retentionPolicyName,
      policyType:
        'finite' as CreateRetentionPolicyRequestBodyArgPolicyTypeField,
      areOwnersNotified: true,
      canOwnerExtendRetention: true,
      description: retentionDescription,
      dispositionAction:
        'remove_retention' as CreateRetentionPolicyRequestBodyArgDispositionActionField,
      retentionLength: '1',
      retentionType:
        'modifiable' as CreateRetentionPolicyRequestBodyArgRetentionTypeField,
    } satisfies CreateRetentionPolicyRequestBodyArg);
  if (!(retentionPolicy.policyName == retentionPolicyName)) {
    throw 'Assertion failed';
  }
  if (!(retentionPolicy.description == retentionDescription)) {
    throw 'Assertion failed';
  }
  const retentionPolicyById: RetentionPolicy =
    await client.retentionPolicies.getRetentionPolicyById(retentionPolicy.id);
  if (!(retentionPolicyById.id == retentionPolicy.id)) {
    throw 'Assertion failed';
  }
  const retentionPolicies: RetentionPolicies =
    await client.retentionPolicies.getRetentionPolicies();
  if (!(retentionPolicies.entries!.length > 0)) {
    throw 'Assertion failed';
  }
  const updatedRetentionPolicyName: string = getUuid();
  const updatedRetentionPolicy: RetentionPolicy =
    await client.retentionPolicies.updateRetentionPolicyById(
      retentionPolicy.id,
      {
        policyName: updatedRetentionPolicyName,
      } satisfies UpdateRetentionPolicyByIdRequestBodyArg
    );
  if (!(updatedRetentionPolicy.policyName == updatedRetentionPolicyName)) {
    throw 'Assertion failed';
  }
  await client.retentionPolicies.deleteRetentionPolicyById(retentionPolicy.id);
});
export {};
