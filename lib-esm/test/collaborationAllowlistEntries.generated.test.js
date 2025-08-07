import { getDefaultClient } from './commons.generated.js';
import { getUuid } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
export const client = getDefaultClient();
test('testCollaborationAllowlistEntries', async function testCollaborationAllowlistEntries() {
    const allowlist = await client.collaborationAllowlistEntries.getCollaborationWhitelistEntries();
    if (!(allowlist.entries.length >= 0)) {
        throw new Error('Assertion failed');
    }
    const domain = ''.concat(getUuid(), 'example.com');
    const newEntry = await client.collaborationAllowlistEntries.createCollaborationWhitelistEntry({
        direction: 'inbound',
        domain: domain,
    });
    if (!(toString(newEntry.type) == 'collaboration_whitelist_entry')) {
        throw new Error('Assertion failed');
    }
    if (!(toString(newEntry.direction) == 'inbound')) {
        throw new Error('Assertion failed');
    }
    if (!(newEntry.domain == domain)) {
        throw new Error('Assertion failed');
    }
    const entry = await client.collaborationAllowlistEntries.getCollaborationWhitelistEntryById(newEntry.id);
    if (!(entry.id == newEntry.id)) {
        throw new Error('Assertion failed');
    }
    if (!(toString(entry.direction) ==
        toString(newEntry.direction))) {
        throw new Error('Assertion failed');
    }
    if (!(entry.domain == domain)) {
        throw new Error('Assertion failed');
    }
    await client.collaborationAllowlistEntries.deleteCollaborationWhitelistEntryById(entry.id);
    await expect(async () => {
        await client.collaborationAllowlistEntries.getCollaborationWhitelistEntryById(entry.id);
    }).rejects.toThrow();
});
//# sourceMappingURL=collaborationAllowlistEntries.generated.test.js.map