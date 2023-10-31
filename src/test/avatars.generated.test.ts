import { serializeUserFull } from '../schemas.generated.js';
import { deserializeUserFull } from '../schemas.generated.js';
import { serializeUserAvatar } from '../schemas.generated.js';
import { deserializeUserAvatar } from '../schemas.generated.js';
import { BoxClient } from '../client.generated.js';
import { UserFull } from '../schemas.generated.js';
import { UserAvatar } from '../schemas.generated.js';
import { CreateUserAvatarRequestBodyArg } from '../managers/avatars.generated.js';
import { ByteStream } from '../utils.js';
import { decodeBase64 } from '../utils.js';
import { getEnvVar } from '../utils.js';
import { getUuid } from '../utils.js';
import { bufferEquals } from '../utils.js';
import { readByteStream } from '../utils.js';
import { generateByteBuffer } from '../utils.js';
import { decodeBase64ByteStream } from '../utils.js';
import { getDefaultClient } from './commons.generated.js';
const client: BoxClient = getDefaultClient();
test('testAvatars', async function testAvatars(): Promise<any> {
  const user: UserFull = await client.users.getUserMe();
  const createdAvatar: UserAvatar = await client.avatars.createUserAvatar(
    user.id,
    {
      pic: decodeBase64ByteStream(
        'iVBORw0KGgoAAAANSUhEUgAAAQAAAAEAAQMAAABmvDolAAAAA1BMVEW10NBjBBbqAAAAH0lEQVRoge3BAQ0AAADCoPdPbQ43oAAAAAAAAAAAvg0hAAABmmDh1QAAAABJRU5ErkJggg=='
      ),
      picContentType: 'image/png',
      picFileName: 'avatar.png',
    } satisfies CreateUserAvatarRequestBodyArg
  );
  if (!!(createdAvatar.picUrls!.small == void 0)) {
    throw 'Assertion failed';
  }
  if (!!(createdAvatar.picUrls!.large == void 0)) {
    throw 'Assertion failed';
  }
  if (!!(createdAvatar.picUrls!.preview == void 0)) {
    throw 'Assertion failed';
  }
  const response: ByteStream = await client.avatars.getUserAvatar(user.id);
  if (
    !(
      bufferEquals(await readByteStream(response), generateByteBuffer(0)) ==
      false
    )
  ) {
    throw 'Assertion failed';
  }
  await client.avatars.deleteUserAvatar(user.id);
  expect(async () => {
    await client.avatars.getUserAvatar(user.id);
  }).rejects.toThrow();
});
export {};
