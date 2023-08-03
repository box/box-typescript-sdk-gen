# FolderClassificationsManager

## Get classification on folder

Retrieves the classification metadata instance that
has been applied to a folder.

This API can also be called by including the enterprise ID in the
URL explicitly, for example
&#x60;/folders/:id//enterprise_12345/securityClassification-6VMVochwUWo&#x60;.

This operation is performed by calling function `getFolderMetadataEnterpriseSecurityClassification6VmVochwUWo`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-folders-id-metadata-enterprise-security-classification-6-vm-vochw-u-wo/).

*Currently we don't have an example for calling `getFolderMetadataEnterpriseSecurityClassification6VmVochwUWo` in integration tests*

### Arguments

- folderId `string`
  - The unique identifier that represent a folder.  The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL &#x60;https://*.app.box.com/folder/123&#x60; the &#x60;folder_id&#x60; is &#x60;123&#x60;.  The root folder of a Box account is always represented by the ID &#x60;0&#x60;.
  - Used as `folder_id` in path `path` of the API call
- headers `GetFolderMetadataEnterpriseSecurityClassification6VmVochwUWoHeadersArg`
  - Used as headers for the API call


### Returns

This function returns a value of type `Classification`.

Returns an instance of the &#x60;securityClassification&#x60; metadata
template, which contains a &#x60;Box__Security__Classification__Key&#x60;
field that lists all the classifications available to this
enterprise.


## Add classification to folder

Adds a classification to a folder by specifying the label of the
classification to add.

This API can also be called by including the enterprise ID in the
URL explicitly, for example
&#x60;/folders/:id//enterprise_12345/securityClassification-6VMVochwUWo&#x60;.

This operation is performed by calling function `createFolderMetadataEnterpriseSecurityClassification`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/post-folders-id-metadata-enterprise-security-classification-6-vm-vochw-u-wo/).

*Currently we don't have an example for calling `createFolderMetadataEnterpriseSecurityClassification` in integration tests*

### Arguments

- folderId `string`
  - The unique identifier that represent a folder.  The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL &#x60;https://*.app.box.com/folder/123&#x60; the &#x60;folder_id&#x60; is &#x60;123&#x60;.  The root folder of a Box account is always represented by the ID &#x60;0&#x60;.
  - Used as `folder_id` in path `path` of the API call
- requestBody `CreateFolderMetadataEnterpriseSecurityClassificationRequestBodyArg`
  - Used as requestBody for the API call
- headers `CreateFolderMetadataEnterpriseSecurityClassificationHeadersArg`
  - Used as headers for the API call


### Returns

This function returns a value of type `Classification`.

Returns the classification template instance
that was applied to the folder.


## Remove classification from folder

Removes any classifications from a folder.

This API can also be called by including the enterprise ID in the
URL explicitly, for example
&#x60;/folders/:id//enterprise_12345/securityClassification-6VMVochwUWo&#x60;.

This operation is performed by calling function `deleteFolderMetadataEnterpriseSecurityClassification`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/delete-folders-id-metadata-enterprise-security-classification-6-vm-vochw-u-wo/).

*Currently we don't have an example for calling `deleteFolderMetadataEnterpriseSecurityClassification` in integration tests*

### Arguments

- folderId `string`
  - The unique identifier that represent a folder.  The ID for any folder can be determined by visiting this folder in the web application and copying the ID from the URL. For example, for the URL &#x60;https://*.app.box.com/folder/123&#x60; the &#x60;folder_id&#x60; is &#x60;123&#x60;.  The root folder of a Box account is always represented by the ID &#x60;0&#x60;.
  - Used as `folder_id` in path `path` of the API call
- headers `DeleteFolderMetadataEnterpriseSecurityClassificationHeadersArg`
  - Used as headers for the API call


### Returns

This function returns a value of type `undefined`.

Returns an empty response when the classification is
successfully deleted.


