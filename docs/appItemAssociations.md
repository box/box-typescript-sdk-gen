# AppItemAssociationsManager

- [List file app item associations](#list-file-app-item-associations)
- [List folder app item associations](#list-folder-app-item-associations)

## List file app item associations

**This is a beta feature, which means that its availability might be limited.**
Returns all app items the file is associated with. This includes app items
associated with ancestors of the file. Assuming the context user has access
to the file, the type/ids are revealed even if the context user does not
have **View** permission on the app item.

This operation is performed by calling function `getFileAppItemAssociations`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-files-id-app-item-associations/).

<!-- sample get_files_id_app_item_associations -->

```ts
await client.appItemAssociations.getFileAppItemAssociations(fileId);
```

### Arguments

- fileId `string`
  - The unique identifier that represents a file. The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/files/123` the `file_id` is `123`. Example: "12345"
- optionalsInput `GetFileAppItemAssociationsOptionalsInput`

### Returns

This function returns a value of type `AppItemAssociations`.

Returns a collection of app item objects. If there are no
app items on this file, an empty collection will be returned.
This list includes app items on ancestors of this File.

## List folder app item associations

**This is a beta feature, which means that its availability might be limited.**
Returns all app items the folder is associated with. This includes app items
associated with ancestors of the folder. Assuming the context user has access
to the folder, the type/ids are revealed even if the context user does not
have **View** permission on the app item.

This operation is performed by calling function `getFolderAppItemAssociations`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-folders-id-app-item-associations/).

<!-- sample get_folders_id_app_item_associations -->

```ts
await client.appItemAssociations.getFolderAppItemAssociations(folderId);
```

### Arguments

- folderId `string`
  - The unique identifier that represent a folder. The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/folder/123` the `folder_id` is `123`. The root folder of a Box account is always represented by the ID `0`. Example: "12345"
- optionalsInput `GetFolderAppItemAssociationsOptionalsInput`

### Returns

This function returns a value of type `AppItemAssociations`.

Returns a collection of app item objects. If there are no
app items on this folder an empty collection will be returned.
This list includes app items on ancestors of this folder.
