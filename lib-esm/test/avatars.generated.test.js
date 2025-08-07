import { bufferEquals } from '../internal/utils.js';
import { readByteStream } from '../internal/utils.js';
import { generateByteBuffer } from '../internal/utils.js';
import { decodeBase64ByteStream } from '../internal/utils.js';
import { getDefaultClient } from './commons.generated.js';
export const client = getDefaultClient();
test('testAvatars', async function testAvatars() {
    const user = await client.users.getUserMe();
    const createdAvatar = await client.avatars.createUserAvatar(user.id, {
        pic: decodeBase64ByteStream('iVBORw0KGgoAAAANSUhEUgAAAQAAAAEAAQMAAABmvDolAAAAA1BMVEW10NBjBBbqAAAAH0lEQVRoge3BAQ0AAADCoPdPbQ43oAAAAAAAAAAAvg0hAAABmmDh1QAAAABJRU5ErkJggg=='),
        picContentType: 'image/png',
        picFileName: 'avatar.png',
    });
    if (!!(createdAvatar.picUrls.small == void 0)) {
        throw new Error('Assertion failed');
    }
    if (!!(createdAvatar.picUrls.large == void 0)) {
        throw new Error('Assertion failed');
    }
    if (!!(createdAvatar.picUrls.preview == void 0)) {
        throw new Error('Assertion failed');
    }
    const response = await client.avatars.getUserAvatar(user.id);
    if (!(bufferEquals(await readByteStream(response), generateByteBuffer(0)) ==
        false)) {
        throw new Error('Assertion failed');
    }
    await client.avatars.deleteUserAvatar(user.id);
    await expect(async () => {
        await client.avatars.getUserAvatar(user.id);
    }).rejects.toThrow();
});
//# sourceMappingURL=avatars.generated.test.js.map