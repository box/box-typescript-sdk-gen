# FolderClassificationsManager

- [Get classification on folder](#get-classification-on-folder)
- [Add classification to folder](#add-classification-to-folder)
- [Update classification on folder](#update-classification-on-folder)
- [Remove classification from folder](#remove-classification-from-folder)

## Get classification on folder

Retrieves the classification metadata instance that
has been applied to a folder.

This API can also be called by including the enterprise ID in the
URL explicitly, for example
`/folders/:id//enterprise_12345/securityClassification-6VMVochwUWo`.

This operation is performed by calling function `getFolderMetadataEnterpriseSecurityClassification6VmVochwUWo`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-folders-id-metadata-enterprise-security-classification-6-vm-vochw-u-wo/).

_Currently we don't have an example for calling `getFolderMetadataEnterpriseSecurityClassification6VmVochwUWo` in integration tests_

### Arguments

- folderId `string`
  - The unique identifier that represent a folder. The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/folder/123` the `folder_id` is `123`. The root folder of a Box account is always represented by the ID `0`. Example: "12345"
- headers `GetFolderMetadataEnterpriseSecurityClassification6VmVochwUWoHeadersArg`
  - Headers of getFolderMetadataEnterpriseSecurityClassification6VmVochwUWo method

### Returns

This function returns a value of type `Classification`.

Returns an instance of the `securityClassification` metadata
template, which contains a `Box__Security__Classification__Key`
field that lists all the classifications available to this
enterprise.

## Add classification to folder

Adds a classification to a folder by specifying the label of the
classification to add.

This API can also be called by including the enterprise ID in the
URL explicitly, for example
`/folders/:id//enterprise_12345/securityClassification-6VMVochwUWo`.

This operation is performed by calling function `createFolderMetadataEnterpriseSecurityClassification`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/post-folders-id-metadata-enterprise-security-classification-6-vm-vochw-u-wo/).

_Currently we don't have an example for calling `createFolderMetadataEnterpriseSecurityClassification` in integration tests_

### Arguments

- folderId `string`
  - The unique identifier that represent a folder. The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/folder/123` the `folder_id` is `123`. The root folder of a Box account is always represented by the ID `0`. Example: "12345"
- requestBody `CreateFolderMetadataEnterpriseSecurityClassificationRequestBodyArg`
  - Request body of createFolderMetadataEnterpriseSecurityClassification method
- headers `CreateFolderMetadataEnterpriseSecurityClassificationHeadersArg`
  - Headers of createFolderMetadataEnterpriseSecurityClassification method

### Returns

This function returns a value of type `Classification`.

Returns the classification template instance
that was applied to the folder.

## Update classification on folder

Updates a classification on a folder.

The classification can only be updated if a classification has already been
applied to the folder before. When editing classifications, only values are
defined for the enterprise will be accepted.

This operation is performed by calling function `updateFolderMetadataEnterpriseSecurityClassification`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/put-folders-id-metadata-enterprise-security-classification-6-vm-vochw-u-wo/).

_Currently we don't have an example for calling `updateFolderMetadataEnterpriseSecurityClassification` in integration tests_

### Arguments

- folderId `string`
  - The unique identifier that represent a folder. The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/folder/123` the `folder_id` is `123`. The root folder of a Box account is always represented by the ID `0`. Example: "12345"
- requestBody `readonly UpdateFolderMetadataEnterpriseSecurityClassificationRequestBodyArg[]`
  - Request body of updateFolderMetadataEnterpriseSecurityClassification method
- headers `UpdateFolderMetadataEnterpriseSecurityClassificationHeadersArg`
  - Headers of updateFolderMetadataEnterpriseSecurityClassification method

### Returns

This function returns a value of type `Classification`.

Returns the updated classification metadata template instance.

## Remove classification from folder

Removes any classifications from a folder.

This API can also be called by including the enterprise ID in the
URL explicitly, for example
`/folders/:id//enterprise_12345/securityClassification-6VMVochwUWo`.

This operation is performed by calling function `deleteFolderMetadataEnterpriseSecurityClassification`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/delete-folders-id-metadata-enterprise-security-classification-6-vm-vochw-u-wo/).

_Currently we don't have an example for calling `deleteFolderMetadataEnterpriseSecurityClassification` in integration tests_

### Arguments

- folderId `string`
  - The unique identifier that represent a folder. The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/folder/123` the `folder_id` is `123`. The root folder of a Box account is always represented by the ID `0`. Example: "12345"
- headers `DeleteFolderMetadataEnterpriseSecurityClassificationHeadersArg`
  - Headers of deleteFolderMetadataEnterpriseSecurityClassification method

### Returns

This function returns a value of type `undefined`.

Returns an empty response when the classification is
successfully deleted.
