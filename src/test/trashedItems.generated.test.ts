import { serializeFileFull } from '../schemas.generated.js';
import { deserializeFileFull } from '../schemas.generated.js';
import { serializeItems } from '../schemas.generated.js';
import { deserializeItems } from '../schemas.generated.js';
import { BoxClient } from '../client.generated.js';
import { FileFull } from '../schemas.generated.js';
import { Items } from '../schemas.generated.js';
import { getDefaultClient } from './commons.generated.js';
import { uploadNewFile } from './commons.generated.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
const client: BoxClient = getDefaultClient();
test('testListTrashedItems', async function testListTrashedItems(): Promise<any> {
  const file: FileFull = await uploadNewFile();
  await client.files.deleteFileById(file.id);
  const trashedItems: Items = await client.trashedItems.getTrashedItems();
  if (!(trashedItems.entries!.length > 0)) {
    throw new Error('Assertion failed');
  }
});
export {};
