import { generateByteStream } from '../internal/utils.js';
import { getUuid } from '../internal/utils.js';
import { getDefaultClient } from './commons.generated.js';
export const client = getDefaultClient();
test('testComments', async function testComments() {
    const fileSize = 256;
    const fileName = getUuid();
    const fileByteStream = generateByteStream(fileSize);
    const parentId = '0';
    const uploadedFiles = await client.uploads.uploadFile({
        attributes: {
            name: fileName,
            parent: {
                id: parentId,
            },
        },
        file: fileByteStream,
    });
    const fileId = uploadedFiles.entries[0].id;
    const comments = await client.comments.getFileComments(fileId);
    if (!(comments.totalCount == 0)) {
        throw new Error('Assertion failed');
    }
    const message = 'Hello there!';
    const newComment = await client.comments.createComment({
        message: message,
        item: {
            id: fileId,
            type: 'file',
        },
    });
    if (!(newComment.message == message)) {
        throw new Error('Assertion failed');
    }
    if (!(newComment.isReplyComment == false)) {
        throw new Error('Assertion failed');
    }
    if (!(newComment.item.id == fileId)) {
        throw new Error('Assertion failed');
    }
    const newReplyComment = await client.comments.createComment({
        message: message,
        item: {
            id: newComment.id,
            type: 'comment',
        },
    });
    if (!(newReplyComment.message == message)) {
        throw new Error('Assertion failed');
    }
    if (!(newReplyComment.isReplyComment == true)) {
        throw new Error('Assertion failed');
    }
    const newMessage = 'Hi!';
    await client.comments.updateCommentById(newReplyComment.id, {
        requestBody: { message: newMessage },
    });
    const newComments = await client.comments.getFileComments(fileId);
    if (!(newComments.totalCount == 2)) {
        throw new Error('Assertion failed');
    }
    if (!(newComments.entries[1].message == newMessage)) {
        throw new Error('Assertion failed');
    }
    const receivedComment = await client.comments.getCommentById(newComment.id);
    if (!(receivedComment.message == newComment.message)) {
        throw new Error('Assertion failed');
    }
    await client.comments.deleteCommentById(newComment.id);
    await expect(async () => {
        await client.comments.getCommentById(newComment.id);
    }).rejects.toThrow();
    await client.files.deleteFileById(fileId);
});
//# sourceMappingURL=comments.generated.test.js.map