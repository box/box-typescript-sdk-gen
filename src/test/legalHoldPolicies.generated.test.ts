import { serializeLegalHoldPolicy } from '../schemas.generated.js';
import { deserializeLegalHoldPolicy } from '../schemas.generated.js';
import { serializeCreateLegalHoldPolicyRequestBody } from '../managers/legalHoldPolicies.generated.js';
import { deserializeCreateLegalHoldPolicyRequestBody } from '../managers/legalHoldPolicies.generated.js';
import { serializeLegalHoldPolicies } from '../schemas.generated.js';
import { deserializeLegalHoldPolicies } from '../schemas.generated.js';
import { serializeUpdateLegalHoldPolicyByIdRequestBody } from '../managers/legalHoldPolicies.generated.js';
import { deserializeUpdateLegalHoldPolicyByIdRequestBody } from '../managers/legalHoldPolicies.generated.js';
import { LegalHoldPolicy } from '../schemas.generated.js';
import { CreateLegalHoldPolicyRequestBody } from '../managers/legalHoldPolicies.generated.js';
import { LegalHoldPolicies } from '../schemas.generated.js';
import { UpdateLegalHoldPolicyByIdRequestBody } from '../managers/legalHoldPolicies.generated.js';
import { getUuid } from '../utils.js';
import { BoxClient } from '../client.generated.js';
import { getDefaultClient } from './commons.generated.js';
import { SerializedData } from '../json.js';
import { sdIsEmpty } from '../json.js';
import { sdIsBoolean } from '../json.js';
import { sdIsNumber } from '../json.js';
import { sdIsString } from '../json.js';
import { sdIsList } from '../json.js';
import { sdIsMap } from '../json.js';
const client: BoxClient = getDefaultClient();
test('testCreateUpdateGetDeleteLegalHoldPolicy', async function testCreateUpdateGetDeleteLegalHoldPolicy(): Promise<any> {
  const legalHoldPolicyName: string = getUuid();
  const legalHoldDescription: string = 'test description';
  const legalHoldPolicy: LegalHoldPolicy =
    await client.legalHoldPolicies.createLegalHoldPolicy({
      policyName: legalHoldPolicyName,
      description: legalHoldDescription,
      isOngoing: true,
    } satisfies CreateLegalHoldPolicyRequestBody);
  if (!(legalHoldPolicy.policyName == legalHoldPolicyName)) {
    throw 'Assertion failed';
  }
  if (!(legalHoldPolicy.description == legalHoldDescription)) {
    throw 'Assertion failed';
  }
  const legalHoldPolicyId: string = legalHoldPolicy.id;
  const legalHoldPolicyById: LegalHoldPolicy =
    await client.legalHoldPolicies.getLegalHoldPolicyById(legalHoldPolicyId);
  if (!(legalHoldPolicyById.id == legalHoldPolicyId)) {
    throw 'Assertion failed';
  }
  const legalHoldPolicies: LegalHoldPolicies =
    await client.legalHoldPolicies.getLegalHoldPolicies();
  if (!(legalHoldPolicies.entries!.length > 0)) {
    throw 'Assertion failed';
  }
  const updatedLegalHoldPolicyName: string = getUuid();
  const updatedLegalHoldPolicy: LegalHoldPolicy =
    await client.legalHoldPolicies.updateLegalHoldPolicyById(
      legalHoldPolicyId,
      {
        policyName: updatedLegalHoldPolicyName,
      } satisfies UpdateLegalHoldPolicyByIdRequestBody
    );
  if (!(updatedLegalHoldPolicy.policyName == updatedLegalHoldPolicyName)) {
    throw 'Assertion failed';
  }
  await client.legalHoldPolicies.deleteLegalHoldPolicyById(legalHoldPolicyId);
});
export {};
