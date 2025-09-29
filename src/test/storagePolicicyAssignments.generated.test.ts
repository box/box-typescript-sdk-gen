import { serializeStoragePolicyAssignment } from '@/schemas/storagePolicyAssignment.generated';
import { deserializeStoragePolicyAssignment } from '@/schemas/storagePolicyAssignment.generated';
import { serializeStoragePolicyAssignments } from '@/schemas/storagePolicyAssignments.generated';
import { deserializeStoragePolicyAssignments } from '@/schemas/storagePolicyAssignments.generated';
import { serializeGetStoragePolicyAssignmentsQueryParamsResolvedForTypeField } from '@/managers/storagePolicyAssignments.generated';
import { deserializeGetStoragePolicyAssignmentsQueryParamsResolvedForTypeField } from '@/managers/storagePolicyAssignments.generated';
import { serializeCreateStoragePolicyAssignmentRequestBody } from '@/managers/storagePolicyAssignments.generated';
import { deserializeCreateStoragePolicyAssignmentRequestBody } from '@/managers/storagePolicyAssignments.generated';
import { serializeCreateStoragePolicyAssignmentRequestBodyStoragePolicyField } from '@/managers/storagePolicyAssignments.generated';
import { deserializeCreateStoragePolicyAssignmentRequestBodyStoragePolicyField } from '@/managers/storagePolicyAssignments.generated';
import { serializeCreateStoragePolicyAssignmentRequestBodyAssignedToField } from '@/managers/storagePolicyAssignments.generated';
import { deserializeCreateStoragePolicyAssignmentRequestBodyAssignedToField } from '@/managers/storagePolicyAssignments.generated';
import { serializeCreateStoragePolicyAssignmentRequestBodyAssignedToTypeField } from '@/managers/storagePolicyAssignments.generated';
import { deserializeCreateStoragePolicyAssignmentRequestBodyAssignedToTypeField } from '@/managers/storagePolicyAssignments.generated';
import { serializeUserFull } from '@/schemas/userFull.generated';
import { deserializeUserFull } from '@/schemas/userFull.generated';
import { serializeCreateUserRequestBody } from '@/managers/users.generated';
import { deserializeCreateUserRequestBody } from '@/managers/users.generated';
import { serializeStoragePolicies } from '@/schemas/storagePolicies.generated';
import { deserializeStoragePolicies } from '@/schemas/storagePolicies.generated';
import { serializeStoragePolicy } from '@/schemas/storagePolicy.generated';
import { deserializeStoragePolicy } from '@/schemas/storagePolicy.generated';
import { serializeUpdateStoragePolicyAssignmentByIdRequestBody } from '@/managers/storagePolicyAssignments.generated';
import { deserializeUpdateStoragePolicyAssignmentByIdRequestBody } from '@/managers/storagePolicyAssignments.generated';
import { serializeUpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyField } from '@/managers/storagePolicyAssignments.generated';
import { deserializeUpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyField } from '@/managers/storagePolicyAssignments.generated';
import { BoxClientInput } from '@/client.generated';
import { StoragePolicyAssignment } from '@/schemas/storagePolicyAssignment.generated';
import { StoragePolicyAssignments } from '@/schemas/storagePolicyAssignments.generated';
import { GetStoragePolicyAssignmentsQueryParams } from '@/managers/storagePolicyAssignments.generated';
import { GetStoragePolicyAssignmentsQueryParamsResolvedForTypeField } from '@/managers/storagePolicyAssignments.generated';
import { CreateStoragePolicyAssignmentRequestBody } from '@/managers/storagePolicyAssignments.generated';
import { CreateStoragePolicyAssignmentRequestBodyStoragePolicyField } from '@/managers/storagePolicyAssignments.generated';
import { CreateStoragePolicyAssignmentRequestBodyAssignedToField } from '@/managers/storagePolicyAssignments.generated';
import { CreateStoragePolicyAssignmentRequestBodyAssignedToTypeField } from '@/managers/storagePolicyAssignments.generated';
import { UserFull } from '@/schemas/userFull.generated';
import { CreateUserRequestBody } from '@/managers/users.generated';
import { StoragePolicies } from '@/schemas/storagePolicies.generated';
import { StoragePolicy } from '@/schemas/storagePolicy.generated';
import { UpdateStoragePolicyAssignmentByIdRequestBody } from '@/managers/storagePolicyAssignments.generated';
import { UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyField } from '@/managers/storagePolicyAssignments.generated';
import { getEnvVar } from '@/internal/utils';
import { getDefaultClientWithUserSubject } from './commons.generated';
import { BoxClient } from '@/client.generated';
import { getUuid } from '@/internal/utils';
import { toString } from '@/internal/utils';
import { sdToJson } from '@/serialization/json';
import { SerializedData } from '@/serialization/json';
import { sdIsEmpty } from '@/serialization/json';
import { sdIsBoolean } from '@/serialization/json';
import { sdIsNumber } from '@/serialization/json';
import { sdIsString } from '@/serialization/json';
import { sdIsList } from '@/serialization/json';
import { sdIsMap } from '@/serialization/json';
export const adminUserId: string = getEnvVar('USER_ID');
export async function getOrCreateStoragePolicyAssignment(
  clientInput: BoxClientInput,
  policyId: string,
  userId: string,
): Promise<StoragePolicyAssignment> {
  const client: BoxClient = new BoxClient({
    auth: clientInput.auth,
    networkSession: clientInput.networkSession,
  });
  const storagePolicyAssignments: StoragePolicyAssignments =
    await client.storagePolicyAssignments.getStoragePolicyAssignments({
      resolvedForType:
        'user' as GetStoragePolicyAssignmentsQueryParamsResolvedForTypeField,
      resolvedForId: userId,
    } satisfies GetStoragePolicyAssignmentsQueryParams);
  if (storagePolicyAssignments.entries!.length > 0) {
    if (
      (toString(
        storagePolicyAssignments.entries![0].assignedTo!.type,
      ) as string) == 'user'
    ) {
      return storagePolicyAssignments.entries![0];
    }
  }
  const storagePolicyAssignment: StoragePolicyAssignment =
    await client.storagePolicyAssignments.createStoragePolicyAssignment({
      storagePolicy:
        new CreateStoragePolicyAssignmentRequestBodyStoragePolicyField({
          id: policyId,
        }),
      assignedTo: {
        id: userId,
        type: 'user' as CreateStoragePolicyAssignmentRequestBodyAssignedToTypeField,
      } satisfies CreateStoragePolicyAssignmentRequestBodyAssignedToField,
    } satisfies CreateStoragePolicyAssignmentRequestBody);
  return storagePolicyAssignment;
}
test('testGetStoragePolicyAssignments', async function testGetStoragePolicyAssignments(): Promise<any> {
  const client: BoxClient = getDefaultClientWithUserSubject(adminUserId);
  const userName: string = getUuid();
  const newUser: UserFull = await client.users.createUser({
    name: userName,
    isPlatformAccessOnly: true,
  } satisfies CreateUserRequestBody);
  const storagePolicies: StoragePolicies =
    await client.storagePolicies.getStoragePolicies();
  const storagePolicy1: StoragePolicy = storagePolicies.entries![0];
  const storagePolicy2: StoragePolicy = storagePolicies.entries![1];
  const storagePolicyAssignment: StoragePolicyAssignment =
    await getOrCreateStoragePolicyAssignment(
      client,
      storagePolicy1.id,
      newUser.id,
    );
  if (
    !(
      (toString(storagePolicyAssignment.type) as string) ==
      'storage_policy_assignment'
    )
  ) {
    throw new Error('Assertion failed');
  }
  if (
    !((toString(storagePolicyAssignment.assignedTo!.type) as string) == 'user')
  ) {
    throw new Error('Assertion failed');
  }
  if (!(storagePolicyAssignment.assignedTo!.id == newUser.id)) {
    throw new Error('Assertion failed');
  }
  const getStoragePolicyAssignment: StoragePolicyAssignment =
    await client.storagePolicyAssignments.getStoragePolicyAssignmentById(
      storagePolicyAssignment.id,
    );
  if (!(getStoragePolicyAssignment.id == storagePolicyAssignment.id)) {
    throw new Error('Assertion failed');
  }
  const updatedStoragePolicyAssignment: StoragePolicyAssignment =
    await client.storagePolicyAssignments.updateStoragePolicyAssignmentById(
      storagePolicyAssignment.id,
      {
        storagePolicy:
          new UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyField({
            id: storagePolicy2.id,
          }),
      } satisfies UpdateStoragePolicyAssignmentByIdRequestBody,
    );
  if (
    !(updatedStoragePolicyAssignment.storagePolicy!.id == storagePolicy2.id)
  ) {
    throw new Error('Assertion failed');
  }
  await client.storagePolicyAssignments.deleteStoragePolicyAssignmentById(
    storagePolicyAssignment.id,
  );
  await client.users.deleteUserById(newUser.id);
});
export {};
