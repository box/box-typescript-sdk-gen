import { serializeFiles } from '@/schemas/files.generated';
import { deserializeFiles } from '@/schemas/files.generated';
import { serializeUploadFileRequestBodyAttributesField } from '@/managers/uploads.generated';
import { deserializeUploadFileRequestBodyAttributesField } from '@/managers/uploads.generated';
import { serializeUploadFileRequestBodyAttributesParentField } from '@/managers/uploads.generated';
import { deserializeUploadFileRequestBodyAttributesParentField } from '@/managers/uploads.generated';
import { serializeComments } from '@/schemas/comments.generated';
import { deserializeComments } from '@/schemas/comments.generated';
import { serializeCommentFull } from '@/schemas/commentFull.generated';
import { deserializeCommentFull } from '@/schemas/commentFull.generated';
import { serializeCreateCommentRequestBody } from '@/managers/comments.generated';
import { deserializeCreateCommentRequestBody } from '@/managers/comments.generated';
import { serializeCreateCommentRequestBodyItemField } from '@/managers/comments.generated';
import { deserializeCreateCommentRequestBodyItemField } from '@/managers/comments.generated';
import { serializeCreateCommentRequestBodyItemTypeField } from '@/managers/comments.generated';
import { deserializeCreateCommentRequestBodyItemTypeField } from '@/managers/comments.generated';
import { serializeUpdateCommentByIdRequestBody } from '@/managers/comments.generated';
import { deserializeUpdateCommentByIdRequestBody } from '@/managers/comments.generated';
import { UpdateCommentByIdOptionalsInput } from '@/managers/comments.generated';
import { UpdateCommentByIdOptionals } from '@/managers/comments.generated';
import { BoxClient } from '@/client.generated';
import { ByteStream } from '@/internal/utils';
import { Files } from '@/schemas/files.generated';
import { UploadFileRequestBody } from '@/managers/uploads.generated';
import { UploadFileRequestBodyAttributesField } from '@/managers/uploads.generated';
import { UploadFileRequestBodyAttributesParentField } from '@/managers/uploads.generated';
import { Comments } from '@/schemas/comments.generated';
import { CommentFull } from '@/schemas/commentFull.generated';
import { CreateCommentRequestBody } from '@/managers/comments.generated';
import { CreateCommentRequestBodyItemField } from '@/managers/comments.generated';
import { CreateCommentRequestBodyItemTypeField } from '@/managers/comments.generated';
import { UpdateCommentByIdRequestBody } from '@/managers/comments.generated';
import { generateByteStream } from '@/internal/utils';
import { getUuid } from '@/internal/utils';
import { getDefaultClient } from './commons.generated';
import { SerializedData } from '@/serialization/json';
import { sdIsEmpty } from '@/serialization/json';
import { sdIsBoolean } from '@/serialization/json';
import { sdIsNumber } from '@/serialization/json';
import { sdIsString } from '@/serialization/json';
import { sdIsList } from '@/serialization/json';
import { sdIsMap } from '@/serialization/json';
export const client: BoxClient = getDefaultClient();
test('testComments', async function testComments(): Promise<any> {
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
    requestBody: { message: newMessage } satisfies UpdateCommentByIdRequestBody,
  } satisfies UpdateCommentByIdOptionalsInput);
  const newComments: Comments = await client.comments.getFileComments(fileId);
  if (!(newComments.totalCount == 2)) {
    throw new Error('Assertion failed');
  }
  if (!(newComments.entries![1].message == newMessage)) {
    throw new Error('Assertion failed');
  }
  const receivedComment: CommentFull = await client.comments.getCommentById(
    newComment.id!,
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
