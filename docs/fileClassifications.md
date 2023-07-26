# FileClassificationsManager

## Get classification on file

Retrieves the classification metadata instance that
has been applied to a file.

This API can also be called by including the enterprise ID in the
URL explicitly, for example
&#x60;/files/:id//enterprise_12345/securityClassification-6VMVochwUWo&#x60;.

This operation is performed by calling function `getFileMetadataEnterpriseSecurityClassification6VmVochwUWo`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-files-id-metadata-enterprise-security-classification-6-vm-vochw-u-wo/).

*Currently we don't have an example for calling `getFileMetadataEnterpriseSecurityClassification6VmVochwUWo` in integration tests*

### Arguments

- fileId `string`
  - The unique identifier that represents a file.  The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL &#x60;https://*.app.box.com/files/123&#x60; the &#x60;file_id&#x60; is &#x60;123&#x60;.
  - Used as `file_id` in path `path` of the API call


### Returns

This function returns a value of type `Classification`.

Returns an instance of the &#x60;securityClassification&#x60; metadata
template, which contains a &#x60;Box__Security__Classification__Key&#x60;
field that lists all the classifications available to this
enterprise.


## Add classification to file

Adds a classification to a file by specifying the label of the
classification to add.

This API can also be called by including the enterprise ID in the
URL explicitly, for example
&#x60;/files/:id//enterprise_12345/securityClassification-6VMVochwUWo&#x60;.

This operation is performed by calling function `createFileMetadataEnterpriseSecurityClassification`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/post-files-id-metadata-enterprise-security-classification-6-vm-vochw-u-wo/).

*Currently we don't have an example for calling `createFileMetadataEnterpriseSecurityClassification` in integration tests*

### Arguments

- fileId `string`
  - The unique identifier that represents a file.  The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL &#x60;https://*.app.box.com/files/123&#x60; the &#x60;file_id&#x60; is &#x60;123&#x60;.
  - Used as `file_id` in path `path` of the API call
- requestBody `CreateFileMetadataEnterpriseSecurityClassificationRequestBodyArg`
  - Used as requestBody for the API call


### Returns

This function returns a value of type `Classification`.

Returns the classification template instance
that was applied to the file.


## Remove classification from file

Removes any classifications from a file.

This API can also be called by including the enterprise ID in the
URL explicitly, for example
&#x60;/files/:id//enterprise_12345/securityClassification-6VMVochwUWo&#x60;.

This operation is performed by calling function `deleteFileMetadataEnterpriseSecurityClassification`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/delete-files-id-metadata-enterprise-security-classification-6-vm-vochw-u-wo/).

*Currently we don't have an example for calling `deleteFileMetadataEnterpriseSecurityClassification` in integration tests*

### Arguments

- fileId `string`
  - The unique identifier that represents a file.  The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL &#x60;https://*.app.box.com/files/123&#x60; the &#x60;file_id&#x60; is &#x60;123&#x60;.
  - Used as `file_id` in path `path` of the API call


