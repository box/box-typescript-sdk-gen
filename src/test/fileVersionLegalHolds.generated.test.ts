import { serializeFileVersionLegalHolds } from '@/schemas/fileVersionLegalHolds.generated';
import { deserializeFileVersionLegalHolds } from '@/schemas/fileVersionLegalHolds.generated';
import { FileVersionLegalHolds } from '@/schemas/fileVersionLegalHolds.generated';
import { GetFileVersionLegalHoldsQueryParams } from '@/managers/fileVersionLegalHolds.generated';
import { generateByteStream } from '@/internal/utils';
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
test('testGetFileVersionLegalHolds', async function testGetFileVersionLegalHolds(): Promise<any> {
  const policyId: string = '1234567890';
  const fileVersionLegalHolds: FileVersionLegalHolds =
    await client.fileVersionLegalHolds.getFileVersionLegalHolds({
      policyId: policyId,
    } satisfies GetFileVersionLegalHoldsQueryParams);
  const fileVersionLegalHoldsCount: number =
    fileVersionLegalHolds.entries!.length;
  if (!(fileVersionLegalHoldsCount >= 0)) {
    throw new Error('Assertion failed');
  }
});
test('testGetFileVersionLegalHoldById', async function testGetFileVersionLegalHoldById(): Promise<any> {
  const fileVersionLegalHoldId: string = '987654321';
  await expect(async () => {
    await client.fileVersionLegalHolds.getFileVersionLegalHoldById(
      fileVersionLegalHoldId,
    );
  }).rejects.toThrow();
});
export {};
