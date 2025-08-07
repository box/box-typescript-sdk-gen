import { getUuid } from '../internal/utils.js';
import { getEnvVar } from '../internal/utils.js';
import { getDefaultClientWithUserSubject } from './commons.generated.js';
import { toString } from '../internal/utils.js';
export const userId = getEnvVar('USER_ID');
export const client = getDefaultClientWithUserSubject(userId);
test('testArchivesCreateListDelete', async function testArchivesCreateListDelete() {
    const archiveName = getUuid();
    const archive = await client.archives.createArchiveV2025R0({
        name: archiveName,
    });
    if (!(toString(archive.type) == 'archive')) {
        throw new Error('Assertion failed');
    }
    if (!(archive.name == archiveName)) {
        throw new Error('Assertion failed');
    }
    const archives = await client.archives.getArchivesV2025R0({
        limit: 100,
    });
    if (!(archives.entries.length > 0)) {
        throw new Error('Assertion failed');
    }
    await client.archives.deleteArchiveByIdV2025R0(archive.id);
    await expect(async () => {
        await client.archives.deleteArchiveByIdV2025R0(archive.id);
    }).rejects.toThrow();
});
//# sourceMappingURL=archives.generated.test.js.map