# Files

File objects represent individual files in Box. They can be used to download a
file's contents, upload new versions, and perform other common file operations
(move, copy, delete, etc.).

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Get a File's Information](#get-a-files-information)
  - [Getting additional fields](#getting-additional-fields)
- [Update a File's Information](#update-a-files-information)
- [Copy a File](#copy-a-file)
- [Delete a File](#delete-a-file)
- [Restore a File from Trash](#restore-a-file-from-trash)
- [Get Thumbnail](#get-thumbnail)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Get a File's Information

To retreive information about a File, call `getFileById` method. This method returns a `File` object which contains information about the file.

<!-- sample get_files_id -->

```js
const file = await client.files.getFileById("123456789");
console.log(`File with id ${file.id} has name ${file.name}`))
```

### Getting additional fields

If you want the response object to contain additional fields that are not return by default, you should pass a list of
such fields in a comma-separated string

```js
const file = await client.files.getFileById('123456789', {
  fields: 'is_externally_owned,has_collaborations',
});
```

NOTE: Be aware that specifying `fields` parameter will have the effect that none of the standard fields
are returned in the response unless explicitly specified, instead only fields defined in `FileBase`
are returned, additional to the fields requested.

## Update a File's Information

To update a file's information, call `updateFileById` method. This method returns a `File` object which contains information about the file.

<!-- sample put_files_id -->

```js
const file = await client.files.updateFileById("123456789", {
    name: "test.txt",
    description: "Test file",
});
console.log(`File with id ${file.id} has new name ${file.name}`);)
```

## Copy a File

To copy a file to a new location, call `copyFile` method.
You need to specify the `parent` field in the request body, which is the destination folder and optionally the `name` field which is the new name of the file.
This method returns a `File` object which contains information about the copied file.

<!-- sample post_files_id_copy -->

```js
const file = await client.files.copyFile("123456789", {
    parent: { id: 0 },
    name: "test_copy.txt",
});
console.log(`File copied with id ${file.id}, name ${file.name}`);)
```

## Delete a File

To delete a file, call `deleteFileById` method.

<!-- sample delete_files_id -->

```js
await client.files.deleteFileById('1211254579723');
```

## Restore a File from Trash

To restore a file from trash, call `restoreFileFromTrash` method on `trashedFiles` manager.
This method returns a `TrashFileRestored` object which contains information about the restored file.

<!-- sample post_files_id -->

```js
const file = await client.trashedFiles.restoreFileFromTrash('123456789');
console.log(`File restored with id ${file.id}, name ${file.name}`);
```

## Get Thumbnail

To retrieve a thumbnail for a file, call `getFileThumbnailById` method. This method returns a `ArrayBuffer` object which contains the thumbnail data in the specified format.

Optionally, you can specify the information about the thumbnail you want to retrieve, including the `maxHeight`, `maxWidth`, `minHeight`, `minWidth`.

<!-- sample get_files_id_thumbnail_id -->

```js
const fs = require("fs");

const thumbnail = await client.files.getFileThumbnailById(
    "123456789",
    "png",
    { minHeight: 256, minWidth: 256, maxHeight: 256, maxWidth: 256}
);

fs.appendFileSync("myFile.txt", Buffer.from(thumbnail)))
```
