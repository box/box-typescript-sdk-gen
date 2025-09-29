import { serializeLegalHoldPolicy } from '@/schemas/legalHoldPolicy.generated';
import { deserializeLegalHoldPolicy } from '@/schemas/legalHoldPolicy.generated';
import { serializeCreateLegalHoldPolicyRequestBody } from '@/managers/legalHoldPolicies.generated';
import { deserializeCreateLegalHoldPolicyRequestBody } from '@/managers/legalHoldPolicies.generated';
import { serializeFileFull } from '@/schemas/fileFull.generated';
import { deserializeFileFull } from '@/schemas/fileFull.generated';
import { serializeLegalHoldPolicyAssignment } from '@/schemas/legalHoldPolicyAssignment.generated';
import { deserializeLegalHoldPolicyAssignment } from '@/schemas/legalHoldPolicyAssignment.generated';
import { serializeCreateLegalHoldPolicyAssignmentRequestBody } from '@/managers/legalHoldPolicyAssignments.generated';
import { deserializeCreateLegalHoldPolicyAssignmentRequestBody } from '@/managers/legalHoldPolicyAssignments.generated';
import { serializeCreateLegalHoldPolicyAssignmentRequestBodyAssignToField } from '@/managers/legalHoldPolicyAssignments.generated';
import { deserializeCreateLegalHoldPolicyAssignmentRequestBodyAssignToField } from '@/managers/legalHoldPolicyAssignments.generated';
import { serializeCreateLegalHoldPolicyAssignmentRequestBodyAssignToTypeField } from '@/managers/legalHoldPolicyAssignments.generated';
import { deserializeCreateLegalHoldPolicyAssignmentRequestBodyAssignToTypeField } from '@/managers/legalHoldPolicyAssignments.generated';
import { serializeLegalHoldPolicyAssignments } from '@/schemas/legalHoldPolicyAssignments.generated';
import { deserializeLegalHoldPolicyAssignments } from '@/schemas/legalHoldPolicyAssignments.generated';
import { serializeFilesOnHold } from '@/schemas/filesOnHold.generated';
import { deserializeFilesOnHold } from '@/schemas/filesOnHold.generated';
import { BoxClient } from '@/client.generated';
import { LegalHoldPolicy } from '@/schemas/legalHoldPolicy.generated';
import { CreateLegalHoldPolicyRequestBody } from '@/managers/legalHoldPolicies.generated';
import { FileFull } from '@/schemas/fileFull.generated';
import { LegalHoldPolicyAssignment } from '@/schemas/legalHoldPolicyAssignment.generated';
import { CreateLegalHoldPolicyAssignmentRequestBody } from '@/managers/legalHoldPolicyAssignments.generated';
import { CreateLegalHoldPolicyAssignmentRequestBodyAssignToField } from '@/managers/legalHoldPolicyAssignments.generated';
import { CreateLegalHoldPolicyAssignmentRequestBodyAssignToTypeField } from '@/managers/legalHoldPolicyAssignments.generated';
import { LegalHoldPolicyAssignments } from '@/schemas/legalHoldPolicyAssignments.generated';
import { GetLegalHoldPolicyAssignmentsQueryParams } from '@/managers/legalHoldPolicyAssignments.generated';
import { FilesOnHold } from '@/schemas/filesOnHold.generated';
import { getUuid } from '@/internal/utils';
import { generateByteStream } from '@/internal/utils';
import { getDefaultClient } from './commons.generated';
import { uploadNewFile } from './commons.generated';
import { toString } from '@/internal/utils';
import { sdToJson } from '@/serialization/json';
import { SerializedData } from '@/serialization/json';
import { sdIsEmpty } from '@/serialization/json';
import { sdIsBoolean } from '@/serialization/json';
import { sdIsNumber } from '@/serialization/json';
import { sdIsString } from '@/serialization/json';
import { sdIsList } from '@/serialization/json';
import { sdIsMap } from '@/serialization/json';
export const client: BoxClient = getDefaultClient();
test('testLegalHoldPolicyAssignments', async function testLegalHoldPolicyAssignments(): Promise<any> {
  const legalHoldPolicyName: string = getUuid();
  const legalHoldDescription: string = 'test description';
  const legalHoldPolicy: LegalHoldPolicy =
    await client.legalHoldPolicies.createLegalHoldPolicy({
      policyName: legalHoldPolicyName,
      description: legalHoldDescription,
      isOngoing: true,
    } satisfies CreateLegalHoldPolicyRequestBody);
  const legalHoldPolicyId: string = legalHoldPolicy.id;
  const file: FileFull = await uploadNewFile();
  const fileId: string = file.id;
  const legalHoldPolicyAssignment: LegalHoldPolicyAssignment =
    await client.legalHoldPolicyAssignments.createLegalHoldPolicyAssignment({
      policyId: legalHoldPolicyId,
      assignTo: {
        type: 'file' as CreateLegalHoldPolicyAssignmentRequestBodyAssignToTypeField,
        id: fileId,
      } satisfies CreateLegalHoldPolicyAssignmentRequestBodyAssignToField,
    } satisfies CreateLegalHoldPolicyAssignmentRequestBody);
  if (
    !(
      (toString(legalHoldPolicyAssignment.legalHoldPolicy!.type) as string) ==
      'legal_hold_policy'
    )
  ) {
    throw new Error('Assertion failed');
  }
  if (!(legalHoldPolicyAssignment.assignedTo!.id == fileId)) {
    throw new Error('Assertion failed');
  }
  if (
    !(
      (toString(legalHoldPolicyAssignment.assignedTo!.type) as string) == 'file'
    )
  ) {
    throw new Error('Assertion failed');
  }
  const legalHoldPolicyAssignmentId: string = legalHoldPolicyAssignment.id!;
  const legalHoldPolicyAssignmentFromApi: LegalHoldPolicyAssignment =
    await client.legalHoldPolicyAssignments.getLegalHoldPolicyAssignmentById(
      legalHoldPolicyAssignmentId,
    );
  if (!(legalHoldPolicyAssignmentFromApi.id! == legalHoldPolicyAssignmentId)) {
    throw new Error('Assertion failed');
  }
  const legalPolicyAssignments: LegalHoldPolicyAssignments =
    await client.legalHoldPolicyAssignments.getLegalHoldPolicyAssignments({
      policyId: legalHoldPolicyId,
    } satisfies GetLegalHoldPolicyAssignmentsQueryParams);
  if (!(legalPolicyAssignments.entries!.length == 1)) {
    throw new Error('Assertion failed');
  }
  const filesOnHold: FilesOnHold =
    await client.legalHoldPolicyAssignments.getLegalHoldPolicyAssignmentFileOnHold(
      legalHoldPolicyAssignmentId,
    );
  if (!(filesOnHold.entries!.length == 1)) {
    throw new Error('Assertion failed');
  }
  if (!(filesOnHold.entries![0].id == fileId)) {
    throw new Error('Assertion failed');
  }
  await client.legalHoldPolicyAssignments.deleteLegalHoldPolicyAssignmentById(
    legalHoldPolicyAssignmentId,
  );
  await expect(async () => {
    await client.legalHoldPolicyAssignments.deleteLegalHoldPolicyAssignmentById(
      legalHoldPolicyAssignmentId,
    );
  }).rejects.toThrow();
  await client.files.deleteFileById(fileId);
  try {
    await client.legalHoldPolicies.deleteLegalHoldPolicyById(legalHoldPolicyId);
  } catch (error) {
    console.log(
      ''.concat(
        'Could not delete Legal Policy with id: ',
        legalHoldPolicyId,
      ) as string,
    );
  } finally {
  }
});
export {};
