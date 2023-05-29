# Downloads

Downloads module is used to download files from Box.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Download a File](#download-a-file)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Download a File

To get the entire contents of the file as `ArrayBuffer`, call `downloadFile` method.
This method returns a `ArrayBuffer` object which contains the file content.

<!-- sample get_files_id_content -->

```js
const fs = require("fs");

const fileContent = await client.downloads.downloadFile("123456789");
fs.appendFileSync("file.pdf", Buffer.from(fileContent))
console.log(`File was successfully downloaded as file.pdf`))
```

Additionally, only a part of the file can be downloaded by specifying a byte range.

```js
const fileContent = await client.downloads.downloadFile('123456789', {
  range: 'bytes=0-100',
});
console.log(`File content size: ${fileContent.byteLength}`);
```
