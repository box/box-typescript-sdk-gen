import { CreateTermsOfServiceStatusForUserRequestBodyTosField } from '../managers/termsOfServiceUserStatuses.generated.js';
import { CreateTermsOfServiceStatusForUserRequestBodyUserField } from '../managers/termsOfServiceUserStatuses.generated.js';
import { getDefaultClientWithUserSubject } from './commons.generated.js';
import { getOrCreateTermsOfServices } from './commons.generated.js';
import { getUuid } from '../internal/utils.js';
import { getEnvVar } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
test('testGetTermsOfServiceUserStatuses', async function testGetTermsOfServiceUserStatuses() {
    const adminUserId = getEnvVar('USER_ID');
    const client = getDefaultClientWithUserSubject(adminUserId);
    const tos = await getOrCreateTermsOfServices();
    const user = await client.users.createUser({
        name: getUuid(),
        login: ''.concat(getUuid(), '@boxdemo.com'),
        isPlatformAccessOnly: true,
    });
    const createdTosUserStatus = await client.termsOfServiceUserStatuses.createTermsOfServiceStatusForUser({
        tos: new CreateTermsOfServiceStatusForUserRequestBodyTosField({
            id: tos.id,
        }),
        user: new CreateTermsOfServiceStatusForUserRequestBodyUserField({
            id: user.id,
        }),
        isAccepted: false,
    });
    if (!(createdTosUserStatus.isAccepted == false)) {
        throw new Error('Assertion failed');
    }
    if (!(toString(createdTosUserStatus.type) ==
        'terms_of_service_user_status')) {
        throw new Error('Assertion failed');
    }
    if (!(toString(createdTosUserStatus.tos.type) == 'terms_of_service')) {
        throw new Error('Assertion failed');
    }
    if (!(toString(createdTosUserStatus.user.type) == 'user')) {
        throw new Error('Assertion failed');
    }
    if (!(createdTosUserStatus.tos.id == tos.id)) {
        throw new Error('Assertion failed');
    }
    if (!(createdTosUserStatus.user.id == user.id)) {
        throw new Error('Assertion failed');
    }
    const updatedTosUserStatus = await client.termsOfServiceUserStatuses.updateTermsOfServiceStatusForUserById(createdTosUserStatus.id, {
        isAccepted: true,
    });
    if (!(updatedTosUserStatus.isAccepted == true)) {
        throw new Error('Assertion failed');
    }
    const listTosUserStatuses = await client.termsOfServiceUserStatuses.getTermsOfServiceUserStatuses({
        tosId: tos.id,
        userId: user.id,
    });
    if (!(listTosUserStatuses.totalCount > 0)) {
        throw new Error('Assertion failed');
    }
    await client.users.deleteUserById(user.id);
});
//# sourceMappingURL=termsOfServiceUserStatuses.generated.test.js.map