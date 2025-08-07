import { getEnvVar } from '../internal/utils.js';
import { getDefaultClientWithUserSubject } from './commons.generated.js';
import { toString } from '../internal/utils.js';
test('testInvites', async function testInvites() {
    const userId = getEnvVar('USER_ID');
    const client = getDefaultClientWithUserSubject(userId);
    const currentUser = await client.users.getUserMe({
        fields: ['enterprise'],
    });
    const email = getEnvVar('BOX_EXTERNAL_USER_EMAIL');
    const invitation = await client.invites.createInvite({
        enterprise: {
            id: currentUser.enterprise.id,
        },
        actionableBy: {
            login: email,
        },
    });
    if (!(toString(invitation.type) == 'invite')) {
        throw new Error('Assertion failed');
    }
    if (!(invitation.invitedTo.id == currentUser.enterprise.id)) {
        throw new Error('Assertion failed');
    }
    if (!(invitation.actionableBy.login == email)) {
        throw new Error('Assertion failed');
    }
    const getInvitation = await client.invites.getInviteById(invitation.id);
    if (!(getInvitation.id == invitation.id)) {
        throw new Error('Assertion failed');
    }
});
//# sourceMappingURL=invites.generated.test.js.map