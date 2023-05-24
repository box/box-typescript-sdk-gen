# Folders

Folder objects represent a folder from a user's account. They can be used to
iterate through a folder's contents and perform other common folder operations (move, copy, delete, etc.).

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Get Information about a Folder](#get-information-about-a-folder)
  - [Get the User's Root Folder Information](#get-the-users-root-folder-information)
  - [Getting additional fields](#getting-additional-fields)
- [Get the Items in a Folder](#get-the-items-in-a-folder)
- [Create a Folder](#create-a-folder)
- [Update a Folder](#update-a-folder)
- [Copy a Folder](#copy-a-folder)
- [Move a Folder](#move-a-folder)
- [Rename a Folder](#rename-a-folder)
- [Delete a Folder](#delete-a-folder)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Get Information about a Folder

To retrieve information about a folder, call:

```js
const folder = await client.folders.getFolderById('12345');
console.log(`Folder with id ${folder.id} has name ${folder.name}`);
```

`getFolderById` method returns a new `FolderFull` object with fields populated by data from the API.
The default response object will contain only fields specified in `Folder` class.

## Get the User's Root Folder Information

To get the current user's root folder, call `getFolderById` with `folderId` set to '0'.

```js
const rootFolder = await client.folders.getFolderById('0');
```

## Getting additional fields

If you want the response object to contain additional fields that are not return by default, you should pass a list of
such fields in a comma-separated string

```js
const rootFolder = await client.folders.getFolderById('0', {
  fields: 'has_collaborations,tags',
});
```

NOTE: Be aware that specifying `fields` parameter will have the effect that none of the standard fields
are returned in the response unless explicitly specified, instead only fields defined in `FolderBase`
are returned, additional to the fields requested.

# Get the Items in a Folder

To retrieve the items in a folder, call `getFolderItems` method. It returns a `Items` object
that exposes list of items inside a folder with field `entries`.

```js
const items = await client.folders.getFolderItems('0');
items.entries.forEach((item) =>
  console.log(`${item.type} ${item.id} is named "${item.name}"`)
);
```

# Create a Folder

A folder can be created by calling `createFolder` method with required request body parameters.
This method returns a new `FolderFull` representing the created subfolder.

```js
const subfolder = await client.folders.createFolder({
  name: 'New Folder Name',
  parent: { id: '0' },
});
console.log(`Created subfolder with ID ${subfolder.id}`);
```

# Update a Folder

To update a folder's information, call `updateFolderById` method with new values of properties
to update on the folder. This method returns an updated `FolderFull` object.

<!-- sample put_folders_id -->

```js
const updatedFolder = await client.folders.updateFolderById('12345', {
  name: 'Updated folder name',
  description: 'Updated description',
});
console.log(
  `Folder with ID ${updatedFolder.id} new name: ${updatedFolder.name}`
);
```

# Copy a Folder

A folder can be copied into a new parent folder by calling `copyFolder` with the
destination folder and an optional new name for the file in case there is a name conflict in the destination folder.
This method returns a new `FolderFull` object representing the copy of the folder in the destination folder.

<!-- sample post_folders_id_copy -->

```js
const folderId = '22222';
const destinationFolderId = '44444';

const folderCopy = await client.folders.copyFolder(folderId, {
  parent: { id: destinationFolderId },
  name: 'Copied folder name',
});

console.log(
  `Folder "${folderCopy.name}" has been copied into folder "${folderCopy.parent.name}"`
);
```

# Move a Folder

To move a folder from one parent folder into another, call `updateFolderById` and pass `parent` field to specify
destination folder to move the folder into. You can optionally provide a `name` parameter to automatically rename the
folder in case of a name conflict in the destination folder. This method returns the updated `FolderFull` object.

```js
const folderId = '22222';
const destinationFolderId = '44444';

const movedFolder = await client.folders.updateFolderById(folderId, {
  parent: { id: destinationFolderId },
  name: 'Moved folder new name',
});
console.log(
  `Folder "${movedFolder.name}" has been moved into folder "${movedFolder.parent.name}"`
);
```

# Rename a Folder

A folder can be renamed by calling `updateFolderById` method and passing a new folder name.
This method returns the updated `FolderFull` object with a new name.

```js
const updatedFolder = await client.folders.updateFolderById('12345', {
  name: 'Updated folder name',
});
console.log(
  `Folder "${updatedFolder.id}" has a new name "${updatedFolder.name}"`
);
```

# Delete a Folder

Calling the `deleteFolderById` method will delete the folder. Depending on enterprise settings,
this will either move the folder to the user's trash or permanently delete the folder.

```js
await client.folders.deleteFolderById('12345');
```

By default, the method will not delete the folder when folder is not empty. To delete the folder with all its content
set the `recursive` parameter to `true`.

```js
await client.folders.deleteFolderById('12345', { recursive: true });
print('Folder with id: 12345 was successfully deleted');
```
