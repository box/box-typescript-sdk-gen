# ClassificationsManager

- [List all classifications](#list-all-classifications)
- [Delete all classifications](#delete-all-classifications)
- [Add classification](#add-classification)
- [Update classification](#update-classification)
- [Delete classification](#delete-classification)
- [Add initial classifications](#add-initial-classifications)

## List all classifications

Retrieves the classification metadata template and lists all the
classifications available to this enterprise.

This API can also be called by including the enterprise ID in the
URL explicitly, for example
`/metadata_templates/enterprise_12345/securityClassification-6VMVochwUWo/schema`.

This operation is performed by calling function `getMetadataTemplateEnterpriseSecurityClassificationSchema`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-metadata-templates-enterprise-security-classification-6-vm-vochw-u-wo-schema/).

_Currently we don't have an example for calling `getMetadataTemplateEnterpriseSecurityClassificationSchema` in integration tests_

### Arguments

- headers `GetMetadataTemplateEnterpriseSecurityClassificationSchemaHeadersArg`
  - Headers of getMetadataTemplateEnterpriseSecurityClassificationSchema method

### Returns

This function returns a value of type `ClassificationTemplate`.

Returns the `securityClassification` metadata template, which contains
a `Box__Security__Classification__Key` field that lists all the
classifications available to this enterprise.

## Delete all classifications

Delete all classifications by deleting the classification
metadata template.

This operation is performed by calling function `deleteMetadataTemplateEnterpriseSecurityClassificationSchema`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/delete-metadata-templates-enterprise-security-classification-6-vm-vochw-u-wo-schema/).

_Currently we don't have an example for calling `deleteMetadataTemplateEnterpriseSecurityClassificationSchema` in integration tests_

### Arguments

- headers `DeleteMetadataTemplateEnterpriseSecurityClassificationSchemaHeadersArg`
  - Headers of deleteMetadataTemplateEnterpriseSecurityClassificationSchema method

### Returns

This function returns a value of type `undefined`.

Returns an empty response when the metadata
template for classifications is successfully deleted.

## Add classification

Adds one or more new classifications to the list of classifications
available to the enterprise.

This API can also be called by including the enterprise ID in the
URL explicitly, for example
`/metadata_templates/enterprise_12345/securityClassification-6VMVochwUWo/schema`.

This operation is performed by calling function `updateMetadataTemplateEnterpriseSecurityClassificationSchemaAdd`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/put-metadata-templates-enterprise-security-classification-6-vm-vochw-u-wo-schema-add/).

_Currently we don't have an example for calling `updateMetadataTemplateEnterpriseSecurityClassificationSchemaAdd` in integration tests_

### Arguments

- requestBody `readonly UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaAddRequestBodyArg[]`
  - Request body of updateMetadataTemplateEnterpriseSecurityClassificationSchemaAdd method
- headers `UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaAddHeadersArg`
  - Headers of updateMetadataTemplateEnterpriseSecurityClassificationSchemaAdd method

### Returns

This function returns a value of type `ClassificationTemplate`.

Returns the updated `securityClassification` metadata template, which
contains a `Box__Security__Classification__Key` field that lists all
the classifications available to this enterprise.

## Update classification

Updates the labels and descriptions of one or more classifications
available to the enterprise.

This API can also be called by including the enterprise ID in the
URL explicitly, for example
`/metadata_templates/enterprise_12345/securityClassification-6VMVochwUWo/schema`.

This operation is performed by calling function `updateMetadataTemplateEnterpriseSecurityClassificationSchemaUpdate`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/put-metadata-templates-enterprise-security-classification-6-vm-vochw-u-wo-schema-update/).

_Currently we don't have an example for calling `updateMetadataTemplateEnterpriseSecurityClassificationSchemaUpdate` in integration tests_

### Arguments

- requestBody `readonly UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaUpdateRequestBodyArg[]`
  - Request body of updateMetadataTemplateEnterpriseSecurityClassificationSchemaUpdate method
- headers `UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaUpdateHeadersArg`
  - Headers of updateMetadataTemplateEnterpriseSecurityClassificationSchemaUpdate method

### Returns

This function returns a value of type `ClassificationTemplate`.

Returns the updated `securityClassification` metadata template, which
contains a `Box__Security__Classification__Key` field that lists all
the classifications available to this enterprise.

## Delete classification

Removes a classification from the list of classifications
available to the enterprise.

This API can also be called by including the enterprise ID in the
URL explicitly, for example
`/metadata_templates/enterprise_12345/securityClassification-6VMVochwUWo/schema`.

This operation is performed by calling function `updateMetadataTemplateEnterpriseSecurityClassificationSchemaDelete`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/put-metadata-templates-enterprise-security-classification-6-vm-vochw-u-wo-schema-delete/).

_Currently we don't have an example for calling `updateMetadataTemplateEnterpriseSecurityClassificationSchemaDelete` in integration tests_

### Arguments

- requestBody `readonly UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaDeleteRequestBodyArg[]`
  - Request body of updateMetadataTemplateEnterpriseSecurityClassificationSchemaDelete method
- headers `UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaDeleteHeadersArg`
  - Headers of updateMetadataTemplateEnterpriseSecurityClassificationSchemaDelete method

### Returns

This function returns a value of type `ClassificationTemplate`.

Returns the updated `securityClassification` metadata template, which
contains a `Box__Security__Classification__Key` field that lists all
the classifications available to this enterprise.

## Add initial classifications

When an enterprise does not yet have any classifications, this API call
initializes the classification template with an initial set of
classifications.

If an enterprise already has a classification, the template will already
exist and instead an API call should be made to add additional
classifications.

This operation is performed by calling function `createMetadataTemplateSchemaClassification`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/post-metadata-templates-schema-classifications/).

_Currently we don't have an example for calling `createMetadataTemplateSchemaClassification` in integration tests_

### Arguments

- requestBody `CreateMetadataTemplateSchemaClassificationRequestBodyArg`
  - Request body of createMetadataTemplateSchemaClassification method
- headers `CreateMetadataTemplateSchemaClassificationHeadersArg`
  - Headers of createMetadataTemplateSchemaClassification method

### Returns

This function returns a value of type `ClassificationTemplate`.

Returns a new `securityClassification` metadata template, which
contains a `Box__Security__Classification__Key` field that lists all
the classifications available to this enterprise.
