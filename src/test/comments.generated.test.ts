import { serializeFiles } from '../schemas.generated.js';
import { deserializeFiles } from '../schemas.generated.js';
import { serializeUploadFileRequestBodyAttributesField } from '../managers/uploads.generated.js';
import { deserializeUploadFileRequestBodyAttributesField } from '../managers/uploads.generated.js';
import { serializeUploadFileRequestBodyAttributesParentField } from '../managers/uploads.generated.js';
import { deserializeUploadFileRequestBodyAttributesParentField } from '../managers/uploads.generated.js';
import { serializeComments } from '../schemas.generated.js';
import { deserializeComments } from '../schemas.generated.js';
import { serializeCommentFull } from '../schemas.generated.js';
import { deserializeCommentFull } from '../schemas.generated.js';
import { serializeCreateCommentRequestBody } from '../managers/comments.generated.js';
import { deserializeCreateCommentRequestBody } from '../managers/comments.generated.js';
import { serializeCreateCommentRequestBodyItemField } from '../managers/comments.generated.js';
import { deserializeCreateCommentRequestBodyItemField } from '../managers/comments.generated.js';
import { serializeCreateCommentRequestBodyItemTypeField } from '../managers/comments.generated.js';
import { deserializeCreateCommentRequestBodyItemTypeField } from '../managers/comments.generated.js';
import { serializeUpdateCommentByIdRequestBody } from '../managers/comments.generated.js';
import { deserializeUpdateCommentByIdRequestBody } from '../managers/comments.generated.js';
import { BoxClient } from '../client.generated.js';
import { ByteStream } from '../utils.js';
import { Files } from '../schemas.generated.js';
import { UploadFileRequestBody } from '../managers/uploads.generated.js';
import { UploadFileRequestBodyAttributesField } from '../managers/uploads.generated.js';
import { UploadFileRequestBodyAttributesParentField } from '../managers/uploads.generated.js';
import { Comments } from '../schemas.generated.js';
import { CommentFull } from '../schemas.generated.js';
import { CreateCommentRequestBody } from '../managers/comments.generated.js';
import { CreateCommentRequestBodyItemField } from '../managers/comments.generated.js';
import { CreateCommentRequestBodyItemTypeField } from '../managers/comments.generated.js';
import { UpdateCommentByIdRequestBody } from '../managers/comments.generated.js';
import { generateByteStream } from '../utils.js';
import { getUuid } from '../utils.js';
import { getDefaultClient } from './commons.generated.js';
import { SerializedData } from '../json.js';
import { sdIsEmpty } from '../json.js';
import { sdIsBoolean } from '../json.js';
import { sdIsNumber } from '../json.js';
import { sdIsString } from '../json.js';
import { sdIsList } from '../json.js';
import { sdIsMap } from '../json.js';
const client: BoxClient = getDefaultClient();
test('comments', async function comments(): Promise<any> {
  const fileSize: number = 256;
  const fileName: string = getUuid();
  const fileByteStream: ByteStream = generateByteStream(fileSize);
  const parentId: string = '0';
  const uploadedFiles: Files = await client.uploads.uploadFile({
    attributes: {
      name: fileName,
      parent: {
        id: parentId,
      } satisfies UploadFileRequestBodyAttributesParentField,
    } satisfies UploadFileRequestBodyAttributesField,
    file: fileByteStream,
  } satisfies UploadFileRequestBody);
  const fileId: string = uploadedFiles.entries![0].id;
  const comments: Comments = await client.comments.getFileComments(fileId);
  if (!(comments.totalCount == 0)) {
    throw new Error('Assertion failed');
  }
  const message: string = 'Hello there!';
  const newComment: CommentFull = await client.comments.createComment({
    message: message,
    item: {
      id: fileId,
      type: 'file' as CreateCommentRequestBodyItemTypeField,
    } satisfies CreateCommentRequestBodyItemField,
  } satisfies CreateCommentRequestBody);
  if (!(newComment.message == message)) {
    throw new Error('Assertion failed');
  }
  if (!(newComment.isReplyComment == false)) {
    throw new Error('Assertion failed');
  }
  if (!(newComment.item!.id == fileId)) {
    throw new Error('Assertion failed');
  }
  const newReplyComment: CommentFull = await client.comments.createComment({
    message: message,
    item: {
      id: newComment.id!,
      type: 'comment' as CreateCommentRequestBodyItemTypeField,
    } satisfies CreateCommentRequestBodyItemField,
  } satisfies CreateCommentRequestBody);
  if (!(newReplyComment.message == message)) {
    throw new Error('Assertion failed');
  }
  if (!(newReplyComment.isReplyComment == true)) {
    throw new Error('Assertion failed');
  }
  const newMessage: string = 'Hi!';
  await client.comments.updateCommentById(newReplyComment.id!, {
    message: newMessage,
  } satisfies UpdateCommentByIdRequestBody);
  const newComments: Comments = await client.comments.getFileComments(fileId);
  if (!(newComments.totalCount == 2)) {
    throw new Error('Assertion failed');
  }
  if (!(newComments.entries![1].message == newMessage)) {
    throw new Error('Assertion failed');
  }
  const receivedComment: CommentFull = await client.comments.getCommentById(
    newComment.id!
  );
  if (!(receivedComment.message! == newComment.message!)) {
    throw new Error('Assertion failed');
  }
  await client.comments.deleteCommentById(newComment.id!);
  await expect(async () => {
    await client.comments.getCommentById(newComment.id!);
  }).rejects.toThrow();
  await client.files.deleteFileById(fileId);
});
export {};
