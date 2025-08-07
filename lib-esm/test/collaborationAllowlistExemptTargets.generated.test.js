import { getUuid } from '../internal/utils.js';
import { getDefaultClient } from './commons.generated.js';
import { toString } from '../internal/utils.js';
export const client = getDefaultClient();
test('testCollaborationAllowlistExemptTargets', async function testCollaborationAllowlistExemptTargets() {
    const exemptTargets = await client.collaborationAllowlistExemptTargets.getCollaborationWhitelistExemptTargets();
    if (!(exemptTargets.entries.length >= 0)) {
        throw new Error('Assertion failed');
    }
    const user = await client.users.createUser({
        name: getUuid(),
        login: ''.concat(getUuid(), '@boxdemo.com'),
        isPlatformAccessOnly: true,
    });
    const newExemptTarget = await client.collaborationAllowlistExemptTargets.createCollaborationWhitelistExemptTarget({
        user: {
            id: user.id,
        },
    });
    if (!(toString(newExemptTarget.type) ==
        'collaboration_whitelist_exempt_target')) {
        throw new Error('Assertion failed');
    }
    if (!(newExemptTarget.user.id == user.id)) {
        throw new Error('Assertion failed');
    }
    const exemptTarget = await client.collaborationAllowlistExemptTargets.getCollaborationWhitelistExemptTargetById(newExemptTarget.id);
    if (!(exemptTarget.id == newExemptTarget.id)) {
        throw new Error('Assertion failed');
    }
    if (!(exemptTarget.user.id == user.id)) {
        throw new Error('Assertion failed');
    }
    await client.collaborationAllowlistExemptTargets.deleteCollaborationWhitelistExemptTargetById(exemptTarget.id);
    await expect(async () => {
        await client.collaborationAllowlistExemptTargets.getCollaborationWhitelistExemptTargetById(exemptTarget.id);
    }).rejects.toThrow();
    await client.users.deleteUserById(user.id);
});
//# sourceMappingURL=collaborationAllowlistExemptTargets.generated.test.js.map