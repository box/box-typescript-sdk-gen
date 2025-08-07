import { getUuid } from '../internal/utils.js';
import { generateByteStream } from '../internal/utils.js';
import { createNull } from '../internal/utils.js';
import { getDefaultClient } from './commons.generated.js';
export const client = getDefaultClient();
test('testCreateListGetPromoteFileVersion', async function testCreateListGetPromoteFileVersion() {
    const oldName = getUuid();
    const newName = getUuid();
    const files = await client.uploads.uploadFile({
        attributes: {
            name: oldName,
            parent: { id: '0' },
        },
        file: generateByteStream(10),
    });
    const file = files.entries[0];
    if (!(file.name == oldName)) {
        throw new Error('Assertion failed');
    }
    if (!(file.size == 10)) {
        throw new Error('Assertion failed');
    }
    const newFiles = await client.uploads.uploadFileVersion(file.id, {
        attributes: {
            name: newName,
        },
        file: generateByteStream(20),
    });
    const newFile = newFiles.entries[0];
    if (!(newFile.name == newName)) {
        throw new Error('Assertion failed');
    }
    if (!(newFile.size == 20)) {
        throw new Error('Assertion failed');
    }
    const fileVersions = await client.fileVersions.getFileVersions(file.id);
    if (!(fileVersions.totalCount == 1)) {
        throw new Error('Assertion failed');
    }
    const fileVersion = await client.fileVersions.getFileVersionById(file.id, fileVersions.entries[0].id);
    if (!(fileVersion.id == fileVersions.entries[0].id)) {
        throw new Error('Assertion failed');
    }
    await client.fileVersions.promoteFileVersion(file.id, {
        requestBody: {
            id: fileVersions.entries[0].id,
            type: 'file_version',
        },
    });
    const fileWithPromotedVersion = await client.files.getFileById(file.id);
    if (!(fileWithPromotedVersion.name == oldName)) {
        throw new Error('Assertion failed');
    }
    if (!(fileWithPromotedVersion.size == 10)) {
        throw new Error('Assertion failed');
    }
    await client.fileVersions.deleteFileVersionById(file.id, fileVersion.id);
    await client.files.deleteFileById(file.id);
});
test('testRemoveAndRestoreFileVersion', async function testRemoveAndRestoreFileVersion() {
    const oldName = getUuid();
    const newName = getUuid();
    const files = await client.uploads.uploadFile({
        attributes: {
            name: oldName,
            parent: { id: '0' },
        },
        file: generateByteStream(10),
    });
    const file = files.entries[0];
    await client.uploads.uploadFileVersion(file.id, {
        attributes: {
            name: newName,
        },
        file: generateByteStream(20),
    });
    const fileVersions = await client.fileVersions.getFileVersions(file.id);
    if (!(fileVersions.totalCount == 1)) {
        throw new Error('Assertion failed');
    }
    const fileVersion = await client.fileVersions.getFileVersionById(file.id, fileVersions.entries[0].id, {
        queryParams: {
            fields: ['trashed_at', 'trashed_by', 'restored_at', 'restored_by'],
        },
    });
    if (!(fileVersion.trashedAt == void 0)) {
        throw new Error('Assertion failed');
    }
    if (!(fileVersion.trashedBy == void 0)) {
        throw new Error('Assertion failed');
    }
    if (!(fileVersion.restoredAt == void 0)) {
        throw new Error('Assertion failed');
    }
    if (!(fileVersion.restoredBy == void 0)) {
        throw new Error('Assertion failed');
    }
    await client.fileVersions.deleteFileVersionById(file.id, fileVersion.id);
    const deletedFileVersion = await client.fileVersions.getFileVersionById(file.id, fileVersions.entries[0].id, {
        queryParams: {
            fields: ['trashed_at', 'trashed_by', 'restored_at', 'restored_by'],
        },
    });
    if (!!(deletedFileVersion.trashedAt == void 0)) {
        throw new Error('Assertion failed');
    }
    if (!!(deletedFileVersion.trashedBy == void 0)) {
        throw new Error('Assertion failed');
    }
    if (!(deletedFileVersion.restoredAt == void 0)) {
        throw new Error('Assertion failed');
    }
    if (!(deletedFileVersion.restoredBy == void 0)) {
        throw new Error('Assertion failed');
    }
    await client.fileVersions.updateFileVersionById(file.id, fileVersion.id, {
        requestBody: {
            trashedAt: createNull(),
        },
    });
    const restoredFileVersion = await client.fileVersions.getFileVersionById(file.id, fileVersions.entries[0].id, {
        queryParams: {
            fields: ['trashed_at', 'trashed_by', 'restored_at', 'restored_by'],
        },
    });
    if (!(restoredFileVersion.trashedAt == void 0)) {
        throw new Error('Assertion failed');
    }
    if (!(restoredFileVersion.trashedBy == void 0)) {
        throw new Error('Assertion failed');
    }
    if (!!(restoredFileVersion.restoredAt == void 0)) {
        throw new Error('Assertion failed');
    }
    if (!!(restoredFileVersion.restoredBy == void 0)) {
        throw new Error('Assertion failed');
    }
    await client.fileVersions.deleteFileVersionById(file.id, fileVersion.id);
    await client.files.deleteFileById(file.id);
});
//# sourceMappingURL=fileVersions.generated.test.js.map