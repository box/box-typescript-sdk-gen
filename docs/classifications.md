# ClassificationsManager

- [List all classifications](#list-all-classifications)
- [Add classification](#add-classification)
- [Update classification](#update-classification)
- [Add initial classifications](#add-initial-classifications)

## List all classifications

Retrieves the classification metadata template and lists all the
classifications available to this enterprise.

This API can also be called by including the enterprise ID in the
URL explicitly, for example
`/metadata_templates/enterprise_12345/securityClassification-6VMVochwUWo/schema`.

This operation is performed by calling function `getClassificationTemplate`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-metadata-templates-enterprise-security-classification-6-vm-vochw-u-wo-schema/).

<!-- sample get_metadata_templates_enterprise_securityClassification-6VMVochwUWo_schema -->

```ts
await client.classifications.getClassificationTemplate();
```

### Arguments

- headers `GetClassificationTemplateHeadersArg`
  - Headers of getClassificationTemplate method
- cancellationToken `undefined | CancellationToken`
  - Token used for request cancellation.

### Returns

This function returns a value of type `ClassificationTemplate`.

Returns the `securityClassification` metadata template, which contains
a `Box__Security__Classification__Key` field that lists all the
classifications available to this enterprise.

## Add classification

Adds one or more new classifications to the list of classifications
available to the enterprise.

This API can also be called by including the enterprise ID in the
URL explicitly, for example
`/metadata_templates/enterprise_12345/securityClassification-6VMVochwUWo/schema`.

This operation is performed by calling function `addClassification`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/put-metadata-templates-enterprise-security-classification-6-vm-vochw-u-wo-schema-add/).

<!-- sample put_metadata_templates_enterprise_securityClassification-6VMVochwUWo_schema#add -->

```ts
await client.classifications.addClassification([
  {
    op: 'addEnumOption' as AddClassificationRequestBodyArgOpField,
    fieldKey:
      'Box__Security__Classification__Key' as AddClassificationRequestBodyArgFieldKeyField,
    data: {
      key: getUuid(),
      staticConfig: {
        classification: {
          colorId: 3,
          classificationDefinition: 'Some description',
        } satisfies AddClassificationRequestBodyArgDataFieldStaticConfigFieldClassificationField,
      } satisfies AddClassificationRequestBodyArgDataFieldStaticConfigField,
    } satisfies AddClassificationRequestBodyArgDataField,
  } satisfies AddClassificationRequestBodyArg,
]);
```

### Arguments

- requestBody `readonly AddClassificationRequestBodyArg[]`
  - Request body of addClassification method
- headers `AddClassificationHeadersArg`
  - Headers of addClassification method
- cancellationToken `undefined | CancellationToken`
  - Token used for request cancellation.

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

This operation is performed by calling function `updateClassification`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/put-metadata-templates-enterprise-security-classification-6-vm-vochw-u-wo-schema-update/).

<!-- sample put_metadata_templates_enterprise_securityClassification-6VMVochwUWo_schema#update -->

```ts
await client.classifications.updateClassification([
  {
    op: 'editEnumOption' as UpdateClassificationRequestBodyArgOpField,
    fieldKey:
      'Box__Security__Classification__Key' as UpdateClassificationRequestBodyArgFieldKeyField,
    enumOptionKey: classification.key,
    data: {
      key: updatedClassificationName,
      staticConfig: {
        classification: {
          colorId: 2,
          classificationDefinition: updatedClassificationDescription,
        } satisfies UpdateClassificationRequestBodyArgDataFieldStaticConfigFieldClassificationField,
      } satisfies UpdateClassificationRequestBodyArgDataFieldStaticConfigField,
    } satisfies UpdateClassificationRequestBodyArgDataField,
  } satisfies UpdateClassificationRequestBodyArg,
]);
```

### Arguments

- requestBody `readonly UpdateClassificationRequestBodyArg[]`
  - Request body of updateClassification method
- headers `UpdateClassificationHeadersArg`
  - Headers of updateClassification method
- cancellationToken `undefined | CancellationToken`
  - Token used for request cancellation.

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

This operation is performed by calling function `createClassificationTemplate`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/post-metadata-templates-schema-classifications/).

_Currently we don't have an example for calling `createClassificationTemplate` in integration tests_

### Arguments

- requestBody `CreateClassificationTemplateRequestBodyArg`
  - Request body of createClassificationTemplate method
- headers `CreateClassificationTemplateHeadersArg`
  - Headers of createClassificationTemplate method
- cancellationToken `undefined | CancellationToken`
  - Token used for request cancellation.

### Returns

This function returns a value of type `ClassificationTemplate`.

Returns a new `securityClassification` metadata template, which
contains a `Box__Security__Classification__Key` field that lists all
the classifications available to this enterprise.
