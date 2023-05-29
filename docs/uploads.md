# Uploads

Uploads module is used to upload files to Box. It supports uploading files from a readable stream. For now, it only supports uploading small files without chunked upload.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Upload a File](#upload-a-file)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Upload a File

To upload a small file from a readable stream, call `uploadFile` method. This method returns a `Files` object which contains information about the uploaded files.

<!-- sample post_files_content -->

```js
const fs = require('fs');

const attrs = { name: 'filename.txt', parent: { id: '0' } };
const body = {
  attributes: attrs,
  file: fs.readFileSync('filename.txt', 'utf8'),
};
const files = await client.uploads.uploadFile(body);
const file = files.entries[0];
console.log(`File uploaded with id ${file.id}, name ${file.name}`);
```
