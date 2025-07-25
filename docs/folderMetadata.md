# FolderMetadataManager

- [List metadata instances on folder](#list-metadata-instances-on-folder)
- [Get metadata instance on folder](#get-metadata-instance-on-folder)
- [Create metadata instance on folder](#create-metadata-instance-on-folder)
- [Update metadata instance on folder](#update-metadata-instance-on-folder)
- [Remove metadata instance from folder](#remove-metadata-instance-from-folder)

## List metadata instances on folder

Retrieves all metadata for a given folder. This can not be used on the root
folder with ID `0`.

This operation is performed by calling function `getFolderMetadata`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-folders-id-metadata/).

<!-- sample get_folders_id_metadata -->

```ts
await client.folderMetadata.getFolderMetadata(folder.id);
```

### Arguments

- folderId `string`
  - The unique identifier that represent a folder. The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/folder/123` the `folder_id` is `123`. The root folder of a Box account is always represented by the ID `0`. Example: "12345"
- optionalsInput `GetFolderMetadataOptionalsInput`

### Returns

This function returns a value of type `Metadatas`.

Returns all the metadata associated with a folder.

This API does not support pagination and will therefore always return
all of the metadata associated to the folder.

## Get metadata instance on folder

Retrieves the instance of a metadata template that has been applied to a
folder. This can not be used on the root folder with ID `0`.

This operation is performed by calling function `getFolderMetadataById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-folders-id-metadata-id-id/).

<!-- sample get_folders_id_metadata_id_id -->

```ts
await client.folderMetadata.getFolderMetadataById(
  folder.id,
  'global' as GetFolderMetadataByIdScope,
  'properties',
);
```

### Arguments

- folderId `string`
  - The unique identifier that represent a folder. The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/folder/123` the `folder_id` is `123`. The root folder of a Box account is always represented by the ID `0`. Example: "12345"
- scope `GetFolderMetadataByIdScope`
  - The scope of the metadata template. Example: "global"
- templateKey `string`
  - The name of the metadata template. Example: "properties"
- optionalsInput `GetFolderMetadataByIdOptionalsInput`

### Returns

This function returns a value of type `MetadataFull`.

An instance of the metadata template that includes
additional "key:value" pairs defined by the user or
an application.

## Create metadata instance on folder

Applies an instance of a metadata template to a folder.

In most cases only values that are present in the metadata template
will be accepted, except for the `global.properties` template which accepts
any key-value pair.

To display the metadata template in the Box web app the enterprise needs to be
configured to enable **Cascading Folder Level Metadata** for the user in the
admin console.

This operation is performed by calling function `createFolderMetadataById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/post-folders-id-metadata-id-id/).

<!-- sample post_folders_id_metadata_id_id -->

```ts
await client.folderMetadata.createFolderMetadataById(
  folder.id,
  'enterprise' as CreateFolderMetadataByIdScope,
  templateKey,
  {
    ['name']: 'John',
    ['age']: 23,
    ['birthDate']: '2001-01-03T02:20:50.520Z',
    ['countryCode']: 'US',
    ['sports']: ['basketball', 'tennis'],
  },
);
```

### Arguments

- folderId `string`
  - The unique identifier that represent a folder. The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/folder/123` the `folder_id` is `123`. The root folder of a Box account is always represented by the ID `0`. Example: "12345"
- scope `CreateFolderMetadataByIdScope`
  - The scope of the metadata template. Example: "global"
- templateKey `string`
  - The name of the metadata template. Example: "properties"
- requestBody `CreateFolderMetadataByIdRequestBody`
  - Request body of createFolderMetadataById method
- optionalsInput `CreateFolderMetadataByIdOptionalsInput`

### Returns

This function returns a value of type `MetadataFull`.

Returns the instance of the template that was applied to the folder,
including the data that was applied to the template.

## Update metadata instance on folder

Updates a piece of metadata on a folder.

The metadata instance can only be updated if the template has already been
applied to the folder before. When editing metadata, only values that match
the metadata template schema will be accepted.

The update is applied atomically. If any errors occur during the
application of the operations, the metadata instance will not be changed.

This operation is performed by calling function `updateFolderMetadataById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/put-folders-id-metadata-id-id/).

<!-- sample put_folders_id_metadata_id_id -->

```ts
await client.folderMetadata.updateFolderMetadataById(
  folder.id,
  'enterprise' as UpdateFolderMetadataByIdScope,
  templateKey,
  [
    {
      op: 'replace' as UpdateFolderMetadataByIdRequestBodyOpField,
      path: '/name',
      value: 'Jack',
    } satisfies UpdateFolderMetadataByIdRequestBody,
    {
      op: 'replace' as UpdateFolderMetadataByIdRequestBodyOpField,
      path: '/age',
      value: 24,
    } satisfies UpdateFolderMetadataByIdRequestBody,
    {
      op: 'replace' as UpdateFolderMetadataByIdRequestBodyOpField,
      path: '/birthDate',
      value: '2000-01-03T02:20:50.520Z',
    } satisfies UpdateFolderMetadataByIdRequestBody,
    {
      op: 'replace' as UpdateFolderMetadataByIdRequestBodyOpField,
      path: '/countryCode',
      value: 'CA',
    } satisfies UpdateFolderMetadataByIdRequestBody,
    {
      op: 'replace' as UpdateFolderMetadataByIdRequestBodyOpField,
      path: '/sports',
      value: ['football'],
    } satisfies UpdateFolderMetadataByIdRequestBody,
  ],
);
```

### Arguments

- folderId `string`
  - The unique identifier that represent a folder. The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/folder/123` the `folder_id` is `123`. The root folder of a Box account is always represented by the ID `0`. Example: "12345"
- scope `UpdateFolderMetadataByIdScope`
  - The scope of the metadata template. Example: "global"
- templateKey `string`
  - The name of the metadata template. Example: "properties"
- requestBody `readonly UpdateFolderMetadataByIdRequestBody[]`
  - Request body of updateFolderMetadataById method
- optionalsInput `UpdateFolderMetadataByIdOptionalsInput`

### Returns

This function returns a value of type `MetadataFull`.

Returns the updated metadata template instance, with the
custom template data included.

## Remove metadata instance from folder

Deletes a piece of folder metadata.

This operation is performed by calling function `deleteFolderMetadataById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/delete-folders-id-metadata-id-id/).

<!-- sample delete_folders_id_metadata_id_id -->

```ts
await client.folderMetadata.deleteFolderMetadataById(
  folder.id,
  'enterprise' as DeleteFolderMetadataByIdScope,
  templateKey,
);
```

### Arguments

- folderId `string`
  - The unique identifier that represent a folder. The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/folder/123` the `folder_id` is `123`. The root folder of a Box account is always represented by the ID `0`. Example: "12345"
- scope `DeleteFolderMetadataByIdScope`
  - The scope of the metadata template. Example: "global"
- templateKey `string`
  - The name of the metadata template. Example: "properties"
- optionalsInput `DeleteFolderMetadataByIdOptionalsInput`

### Returns

This function returns a value of type `undefined`.

Returns an empty response when the metadata is
successfully deleted.
