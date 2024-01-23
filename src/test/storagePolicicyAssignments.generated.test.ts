import { serializeStoragePolicyAssignment } from '../schemas.generated.js';
import { deserializeStoragePolicyAssignment } from '../schemas.generated.js';
import { serializeStoragePolicyAssignments } from '../schemas.generated.js';
import { deserializeStoragePolicyAssignments } from '../schemas.generated.js';
import { serializeGetStoragePolicyAssignmentsQueryParamsResolvedForTypeField } from '../managers/storagePolicyAssignments.generated.js';
import { deserializeGetStoragePolicyAssignmentsQueryParamsResolvedForTypeField } from '../managers/storagePolicyAssignments.generated.js';
import { serializeCreateStoragePolicyAssignmentRequestBody } from '../managers/storagePolicyAssignments.generated.js';
import { deserializeCreateStoragePolicyAssignmentRequestBody } from '../managers/storagePolicyAssignments.generated.js';
import { serializeCreateStoragePolicyAssignmentRequestBodyStoragePolicyField } from '../managers/storagePolicyAssignments.generated.js';
import { deserializeCreateStoragePolicyAssignmentRequestBodyStoragePolicyField } from '../managers/storagePolicyAssignments.generated.js';
import { serializeCreateStoragePolicyAssignmentRequestBodyStoragePolicyTypeField } from '../managers/storagePolicyAssignments.generated.js';
import { deserializeCreateStoragePolicyAssignmentRequestBodyStoragePolicyTypeField } from '../managers/storagePolicyAssignments.generated.js';
import { serializeCreateStoragePolicyAssignmentRequestBodyAssignedToField } from '../managers/storagePolicyAssignments.generated.js';
import { deserializeCreateStoragePolicyAssignmentRequestBodyAssignedToField } from '../managers/storagePolicyAssignments.generated.js';
import { serializeCreateStoragePolicyAssignmentRequestBodyAssignedToTypeField } from '../managers/storagePolicyAssignments.generated.js';
import { deserializeCreateStoragePolicyAssignmentRequestBodyAssignedToTypeField } from '../managers/storagePolicyAssignments.generated.js';
import { serializeUserFull } from '../schemas.generated.js';
import { deserializeUserFull } from '../schemas.generated.js';
import { serializeCreateUserRequestBody } from '../managers/users.generated.js';
import { deserializeCreateUserRequestBody } from '../managers/users.generated.js';
import { serializeStoragePolicies } from '../schemas.generated.js';
import { deserializeStoragePolicies } from '../schemas.generated.js';
import { serializeStoragePolicy } from '../schemas.generated.js';
import { deserializeStoragePolicy } from '../schemas.generated.js';
import { serializeUpdateStoragePolicyAssignmentByIdRequestBody } from '../managers/storagePolicyAssignments.generated.js';
import { deserializeUpdateStoragePolicyAssignmentByIdRequestBody } from '../managers/storagePolicyAssignments.generated.js';
import { serializeUpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyField } from '../managers/storagePolicyAssignments.generated.js';
import { deserializeUpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyField } from '../managers/storagePolicyAssignments.generated.js';
import { serializeUpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyTypeField } from '../managers/storagePolicyAssignments.generated.js';
import { deserializeUpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyTypeField } from '../managers/storagePolicyAssignments.generated.js';
import { StoragePolicyAssignment } from '../schemas.generated.js';
import { StoragePolicyAssignments } from '../schemas.generated.js';
import { GetStoragePolicyAssignmentsQueryParams } from '../managers/storagePolicyAssignments.generated.js';
import { GetStoragePolicyAssignmentsQueryParamsResolvedForTypeField } from '../managers/storagePolicyAssignments.generated.js';
import { CreateStoragePolicyAssignmentRequestBody } from '../managers/storagePolicyAssignments.generated.js';
import { CreateStoragePolicyAssignmentRequestBodyStoragePolicyField } from '../managers/storagePolicyAssignments.generated.js';
import { CreateStoragePolicyAssignmentRequestBodyStoragePolicyTypeField } from '../managers/storagePolicyAssignments.generated.js';
import { CreateStoragePolicyAssignmentRequestBodyAssignedToField } from '../managers/storagePolicyAssignments.generated.js';
import { CreateStoragePolicyAssignmentRequestBodyAssignedToTypeField } from '../managers/storagePolicyAssignments.generated.js';
import { UserFull } from '../schemas.generated.js';
import { CreateUserRequestBody } from '../managers/users.generated.js';
import { StoragePolicies } from '../schemas.generated.js';
import { StoragePolicy } from '../schemas.generated.js';
import { UpdateStoragePolicyAssignmentByIdRequestBody } from '../managers/storagePolicyAssignments.generated.js';
import { UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyField } from '../managers/storagePolicyAssignments.generated.js';
import { UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyTypeField } from '../managers/storagePolicyAssignments.generated.js';
import { getEnvVar } from '../utils.js';
import { getDefaultClientAsUser } from './commons.generated.js';
import { BoxClient } from '../client.generated.js';
import { getUuid } from '../utils.js';
import { toString } from '../utils.js';
import { sdToJson } from '../json.js';
import { SerializedData } from '../json.js';
import { sdIsEmpty } from '../json.js';
import { sdIsBoolean } from '../json.js';
import { sdIsNumber } from '../json.js';
import { sdIsString } from '../json.js';
import { sdIsList } from '../json.js';
import { sdIsMap } from '../json.js';
const adminUserId: string = getEnvVar('USER_ID');
export async function getOrCreateStoragePolicyAssignment(
  client: BoxClient,
  policyId: string,
  userId: string
): Promise<StoragePolicyAssignment> {
  const storagePolicyAssignments: StoragePolicyAssignments =
    await client.storagePolicyAssignments.getStoragePolicyAssignments({
      resolvedForType:
        'user' as GetStoragePolicyAssignmentsQueryParamsResolvedForTypeField,
      resolvedForId: userId,
    } satisfies GetStoragePolicyAssignmentsQueryParams);
  if (storagePolicyAssignments.entries!.length > 0) {
    if (
      (toString(
        storagePolicyAssignments.entries![0].assignedTo!.type
      ) as string) == 'user'
    ) {
      return storagePolicyAssignments.entries![0];
    }
  }
  const storagePolicyAssignment: StoragePolicyAssignment =
    await client.storagePolicyAssignments.createStoragePolicyAssignment({
      storagePolicy: {
        id: policyId,
        type: 'storage_policy' as CreateStoragePolicyAssignmentRequestBodyStoragePolicyTypeField,
      } satisfies CreateStoragePolicyAssignmentRequestBodyStoragePolicyField,
      assignedTo: {
        id: userId,
        type: 'user' as CreateStoragePolicyAssignmentRequestBodyAssignedToTypeField,
      } satisfies CreateStoragePolicyAssignmentRequestBodyAssignedToField,
    } satisfies CreateStoragePolicyAssignmentRequestBody);
  return storagePolicyAssignment;
}
test('testGetStoragePolicyAssignments', async function testGetStoragePolicyAssignments(): Promise<any> {
  const client: BoxClient = await getDefaultClientAsUser(adminUserId);
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
      newUser.id
    );
  if (
    !(
      (toString(storagePolicyAssignment.type) as string) ==
      'storage_policy_assignment'
    )
  ) {
    throw 'Assertion failed';
  }
  if (
    !((toString(storagePolicyAssignment.assignedTo!.type) as string) == 'user')
  ) {
    throw 'Assertion failed';
  }
  if (!(storagePolicyAssignment.assignedTo!.id == newUser.id)) {
    throw 'Assertion failed';
  }
  const getStoragePolicyAssignment: StoragePolicyAssignment =
    await client.storagePolicyAssignments.getStoragePolicyAssignmentById(
      storagePolicyAssignment.id
    );
  if (!(getStoragePolicyAssignment.id == storagePolicyAssignment.id)) {
    throw 'Assertion failed';
  }
  const updatedStoragePolicyAssignment: StoragePolicyAssignment =
    await client.storagePolicyAssignments.updateStoragePolicyAssignmentById(
      storagePolicyAssignment.id,
      {
        storagePolicy: {
          id: storagePolicy2.id,
          type: 'storage_policy' as UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyTypeField,
        } satisfies UpdateStoragePolicyAssignmentByIdRequestBodyStoragePolicyField,
      } satisfies UpdateStoragePolicyAssignmentByIdRequestBody
    );
  if (
    !(updatedStoragePolicyAssignment.storagePolicy!.id == storagePolicy2.id)
  ) {
    throw 'Assertion failed';
  }
  await client.storagePolicyAssignments.deleteStoragePolicyAssignmentById(
    storagePolicyAssignment.id
  );
  await client.users.deleteUserById(newUser.id);
});
export {};
