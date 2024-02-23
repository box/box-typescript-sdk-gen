import { serializeTermsOfService } from '../schemas.generated.js';
import { deserializeTermsOfService } from '../schemas.generated.js';
import { serializeUpdateTermsOfServiceByIdRequestBody } from '../managers/termsOfServices.generated.js';
import { deserializeUpdateTermsOfServiceByIdRequestBody } from '../managers/termsOfServices.generated.js';
import { serializeUpdateTermsOfServiceByIdRequestBodyStatusField } from '../managers/termsOfServices.generated.js';
import { deserializeUpdateTermsOfServiceByIdRequestBodyStatusField } from '../managers/termsOfServices.generated.js';
import { serializeTermsOfServices } from '../schemas.generated.js';
import { deserializeTermsOfServices } from '../schemas.generated.js';
import { BoxClient } from '../client.generated.js';
import { TermsOfService } from '../schemas.generated.js';
import { UpdateTermsOfServiceByIdRequestBody } from '../managers/termsOfServices.generated.js';
import { UpdateTermsOfServiceByIdRequestBodyStatusField } from '../managers/termsOfServices.generated.js';
import { TermsOfServices } from '../schemas.generated.js';
import { getDefaultClient } from './commons.generated.js';
import { getOrCreateTermsOfServices } from './commons.generated.js';
import { toString } from '../internal/utils.js';
import { sdToJson } from '../serialization/json.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
const client: BoxClient = getDefaultClient();
test('testGetTermsOfServices', async function testGetTermsOfServices(): Promise<any> {
  const tos: TermsOfService = await getOrCreateTermsOfServices();
  const updatedTos1: TermsOfService =
    await client.termsOfServices.updateTermsOfServiceById(tos.id, {
      status: 'enabled' as UpdateTermsOfServiceByIdRequestBodyStatusField,
      text: 'Enabled TOS',
    } satisfies UpdateTermsOfServiceByIdRequestBody);
  if (!((toString(updatedTos1.status) as string) == 'enabled')) {
    throw new Error('Assertion failed');
  }
  if (!(updatedTos1.text == 'Enabled TOS')) {
    throw new Error('Assertion failed');
  }
  const updatedTos2: TermsOfService =
    await client.termsOfServices.updateTermsOfServiceById(tos.id, {
      status: 'disabled' as UpdateTermsOfServiceByIdRequestBodyStatusField,
      text: 'Disabled TOS',
    } satisfies UpdateTermsOfServiceByIdRequestBody);
  if (!((toString(updatedTos2.status) as string) == 'disabled')) {
    throw new Error('Assertion failed');
  }
  if (!(updatedTos2.text == 'Disabled TOS')) {
    throw new Error('Assertion failed');
  }
  const listTos: TermsOfServices =
    await client.termsOfServices.getTermsOfService();
  if (!(listTos.totalCount! > 0)) {
    throw new Error('Assertion failed');
  }
});
export {};
