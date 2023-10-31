# CommentsManager

- [List file comments](#list-file-comments)
- [Get comment](#get-comment)
- [Update comment](#update-comment)
- [Remove comment](#remove-comment)
- [Create comment](#create-comment)

## List file comments

Retrieves a list of comments for a file.

This operation is performed by calling function `getFileComments`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-files-id-comments/).

<!-- sample get_files_id_comments -->

```ts
await client.comments.getFileComments(fileId);
```

### Arguments

- fileId `string`
  - The unique identifier that represents a file. The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/files/123` the `file_id` is `123`. Example: "12345"
- queryParams `GetFileCommentsQueryParamsArg`
  - Query parameters of getFileComments method
- headers `GetFileCommentsHeadersArg`
  - Headers of getFileComments method
- cancellationToken `undefined | CancellationToken`
  - Token used for request cancellation.

### Returns

This function returns a value of type `Comments`.

Returns a collection of comment objects. If there are no
comments on this file an empty collection will be returned.

## Get comment

Retrieves the message and metadata for a specific comment, as well
as information on the user who created the comment.

This operation is performed by calling function `getCommentById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-comments-id/).

<!-- sample get_comments_id -->

```ts
await client.comments.getCommentById(newComment.id!);
```

### Arguments

- commentId `string`
  - The ID of the comment. Example: "12345"
- queryParams `GetCommentByIdQueryParamsArg`
  - Query parameters of getCommentById method
- headers `GetCommentByIdHeadersArg`
  - Headers of getCommentById method
- cancellationToken `undefined | CancellationToken`
  - Token used for request cancellation.

### Returns

This function returns a value of type `CommentFull`.

Returns a full comment object.

## Update comment

Update the message of a comment.

This operation is performed by calling function `updateCommentById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/put-comments-id/).

<!-- sample put_comments_id -->

```ts
await client.comments.updateCommentById(newReplyComment.id!, {
  message: newMessage,
} satisfies UpdateCommentByIdRequestBodyArg);
```

### Arguments

- commentId `string`
  - The ID of the comment. Example: "12345"
- requestBody `UpdateCommentByIdRequestBodyArg`
  - Request body of updateCommentById method
- queryParams `UpdateCommentByIdQueryParamsArg`
  - Query parameters of updateCommentById method
- headers `UpdateCommentByIdHeadersArg`
  - Headers of updateCommentById method
- cancellationToken `undefined | CancellationToken`
  - Token used for request cancellation.

### Returns

This function returns a value of type `CommentFull`.

Returns the updated comment object.

## Remove comment

Permanently deletes a comment.

This operation is performed by calling function `deleteCommentById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/delete-comments-id/).

<!-- sample delete_comments_id -->

```ts
await client.comments.deleteCommentById(newComment.id!);
```

### Arguments

- commentId `string`
  - The ID of the comment. Example: "12345"
- headers `DeleteCommentByIdHeadersArg`
  - Headers of deleteCommentById method
- cancellationToken `undefined | CancellationToken`
  - Token used for request cancellation.

### Returns

This function returns a value of type `undefined`.

Returns an empty response when the comment has been deleted.

## Create comment

Adds a comment by the user to a specific file, or
as a reply to an other comment.

This operation is performed by calling function `createComment`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/post-comments/).

<!-- sample post_comments -->

```ts
await client.comments.createComment({
  message: message,
  item: {
    id: newComment.id!,
    type: 'comment' as CreateCommentRequestBodyArgItemFieldTypeField,
  } satisfies CreateCommentRequestBodyArgItemField,
} satisfies CreateCommentRequestBodyArg);
```

### Arguments

- requestBody `CreateCommentRequestBodyArg`
  - Request body of createComment method
- queryParams `CreateCommentQueryParamsArg`
  - Query parameters of createComment method
- headers `CreateCommentHeadersArg`
  - Headers of createComment method
- cancellationToken `undefined | CancellationToken`
  - Token used for request cancellation.

### Returns

This function returns a value of type `Comment`.

Returns the newly created comment object.

Not all available fields are returned by default. Use the
[fields](#param-fields) query parameter to explicitly request
any specific fields.
