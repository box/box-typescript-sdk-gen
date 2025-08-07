import { getDefaultClient } from './commons.generated.js';
import { getOrCreateTermsOfServices } from './commons.generated.js';
import { toString } from '../internal/utils.js';
export const client = getDefaultClient();
test('testGetTermsOfServices', async function testGetTermsOfServices() {
    const tos = await getOrCreateTermsOfServices();
    const updatedTos1 = await client.termsOfServices.updateTermsOfServiceById(tos.id, {
        status: 'disabled',
        text: 'TOS',
    });
    if (!(toString(updatedTos1.status) == 'disabled')) {
        throw new Error('Assertion failed');
    }
    if (!(updatedTos1.text == 'TOS')) {
        throw new Error('Assertion failed');
    }
    const updatedTos2 = await client.termsOfServices.updateTermsOfServiceById(tos.id, {
        status: 'disabled',
        text: 'Updated TOS',
    });
    if (!(toString(updatedTos2.status) == 'disabled')) {
        throw new Error('Assertion failed');
    }
    if (!(updatedTos2.text == 'Updated TOS')) {
        throw new Error('Assertion failed');
    }
    const listTos = await client.termsOfServices.getTermsOfService();
    if (!(listTos.totalCount > 0)) {
        throw new Error('Assertion failed');
    }
});
//# sourceMappingURL=termsOfServices.generated.test.js.map