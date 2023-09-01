import { serializeFiles } from '../schemas.generated.js';
import { deserializeFiles } from '../schemas.generated.js';
import { serializeUploadFileRequestBodyArgAttributesField } from '../managers/uploads.generated.js';
import { deserializeUploadFileRequestBodyArgAttributesField } from '../managers/uploads.generated.js';
import { serializeUploadFileRequestBodyArgAttributesFieldParentField } from '../managers/uploads.generated.js';
import { deserializeUploadFileRequestBodyArgAttributesFieldParentField } from '../managers/uploads.generated.js';
import { serializeComments } from '../schemas.generated.js';
import { deserializeComments } from '../schemas.generated.js';
import { serializeComment } from '../schemas.generated.js';
import { deserializeComment } from '../schemas.generated.js';
import { serializeCreateCommentRequestBodyArg } from '../managers/comments.generated.js';
import { deserializeCreateCommentRequestBodyArg } from '../managers/comments.generated.js';
import { serializeCreateCommentRequestBodyArgItemField } from '../managers/comments.generated.js';
import { deserializeCreateCommentRequestBodyArgItemField } from '../managers/comments.generated.js';
import { serializeCreateCommentRequestBodyArgItemFieldTypeField } from '../managers/comments.generated.js';
import { deserializeCreateCommentRequestBodyArgItemFieldTypeField } from '../managers/comments.generated.js';
import { serializeUpdateCommentByIdRequestBodyArg } from '../managers/comments.generated.js';
import { deserializeUpdateCommentByIdRequestBodyArg } from '../managers/comments.generated.js';
import { ByteStream } from '../utils.js';
import { Files } from '../schemas.generated.js';
import { UploadFileRequestBodyArg } from '../managers/uploads.generated.js';
import { UploadFileRequestBodyArgAttributesField } from '../managers/uploads.generated.js';
import { UploadFileRequestBodyArgAttributesFieldParentField } from '../managers/uploads.generated.js';
import { Comments } from '../schemas.generated.js';
import { Comment } from '../schemas.generated.js';
import { CreateCommentRequestBodyArg } from '../managers/comments.generated.js';
import { CreateCommentRequestBodyArgItemField } from '../managers/comments.generated.js';
import { CreateCommentRequestBodyArgItemFieldTypeField } from '../managers/comments.generated.js';
import { UpdateCommentByIdRequestBodyArg } from '../managers/comments.generated.js';
import { decodeBase64 } from '../utils.js';
import { generateByteStream } from '../utils.js';
import { getEnvVar } from '../utils.js';
import { getUuid } from '../utils.js';
import { Client } from '../client.generated.js';
import { JwtAuth } from '../jwtAuth.js';
import { JwtConfig } from '../jwtAuth.js';
test('comments', async function comments(): Promise<any> {
  const jwtConfig: any = JwtConfig.fromConfigJsonString(
    decodeBase64(getEnvVar('JWT_CONFIG_BASE_64'))
  );
  const auth: any = new JwtAuth({ config: jwtConfig });
  const client: any = new Client({ auth: auth });
  const fileSize: any = 256;
  const fileName: any = getUuid();
  const fileByteStream: any = generateByteStream(fileSize);
  const parentId: any = '0';
  const uploadedFiles: any = await client.uploads.uploadFile({
    attributes: {
      name: fileName,
      parent: {
        id: parentId,
      } satisfies UploadFileRequestBodyArgAttributesFieldParentField,
    } satisfies UploadFileRequestBodyArgAttributesField,
    file: fileByteStream,
  } satisfies UploadFileRequestBodyArg);
  const fileId: any = uploadedFiles.entries[0].id;
  const comments: any = await client.comments.getFileComments(fileId);
  if (!(comments.totalCount == 0)) {
    throw 'Assertion failed';
  }
  const message: any = 'Hello there!';
  const newComment: any = await client.comments.createComment({
    message: message,
    item: {
      id: fileId,
      type: 'file' as CreateCommentRequestBodyArgItemFieldTypeField,
    } satisfies CreateCommentRequestBodyArgItemField,
  } satisfies CreateCommentRequestBodyArg);
  if (!(newComment.message == message)) {
    throw 'Assertion failed';
  }
  if (!(newComment.isReplyComment == false)) {
    throw 'Assertion failed';
  }
  if (!(newComment.item.id == fileId)) {
    throw 'Assertion failed';
  }
  const newReplyComment: any = await client.comments.createComment({
    message: message,
    item: {
      id: newComment.id,
      type: 'comment' as CreateCommentRequestBodyArgItemFieldTypeField,
    } satisfies CreateCommentRequestBodyArgItemField,
  } satisfies CreateCommentRequestBodyArg);
  if (!(newReplyComment.message == message)) {
    throw 'Assertion failed';
  }
  if (!(newReplyComment.isReplyComment == true)) {
    throw 'Assertion failed';
  }
  const newMessage: any = 'Hi!';
  await client.comments.updateCommentById(newReplyComment.id, {
    message: newMessage,
  } satisfies UpdateCommentByIdRequestBodyArg);
  const newComments: any = await client.comments.getFileComments(fileId);
  if (!(newComments.totalCount == 2)) {
    throw 'Assertion failed';
  }
  if (!(newComments.entries[1].message == newMessage)) {
    throw 'Assertion failed';
  }
  if (!!((await client.comments.getCommentById(newComment.id)) == void 0)) {
    throw 'Assertion failed';
  }
  await client.comments.deleteCommentById(newComment.id);
  expect(async () => {
    await client.comments.getCommentById(newComment.id);
  }).rejects.toThrow();
  await client.files.deleteFileById(fileId);
});
export {};
