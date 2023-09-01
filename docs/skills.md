# SkillsManager

- [List Box Skill cards on file](#list-box-skill-cards-on-file)
- [Create Box Skill cards on file](#create-box-skill-cards-on-file)
- [Update Box Skill cards on file](#update-box-skill-cards-on-file)
- [Remove Box Skill cards from file](#remove-box-skill-cards-from-file)
- [Update all Box Skill cards on file](#update-all-box-skill-cards-on-file)

## List Box Skill cards on file

List the Box Skills metadata cards that are attached to a file.

This operation is performed by calling function `getFileMetadataGlobalBoxSkillsCards`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-files-id-metadata-global-box-skills-cards/).

_Currently we don't have an example for calling `getFileMetadataGlobalBoxSkillsCards` in integration tests_

### Arguments

- fileId `string`
  - The unique identifier that represents a file. The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/files/123` the `file_id` is `123`. Example: "12345"
- headers `GetFileMetadataGlobalBoxSkillsCardsHeadersArg`
  - Headers of getFileMetadataGlobalBoxSkillsCards method

### Returns

This function returns a value of type `SkillCardsMetadata`.

Returns all the metadata associated with a file.

This API does not support pagination and will therefore always return
all of the metadata associated to the file.

## Create Box Skill cards on file

Applies one or more Box Skills metadata cards to a file.

This operation is performed by calling function `createFileMetadataGlobalBoxSkillsCard`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/post-files-id-metadata-global-box-skills-cards/).

_Currently we don't have an example for calling `createFileMetadataGlobalBoxSkillsCard` in integration tests_

### Arguments

- fileId `string`
  - The unique identifier that represents a file. The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/files/123` the `file_id` is `123`. Example: "12345"
- requestBody `CreateFileMetadataGlobalBoxSkillsCardRequestBodyArg`
  - Request body of createFileMetadataGlobalBoxSkillsCard method
- headers `CreateFileMetadataGlobalBoxSkillsCardHeadersArg`
  - Headers of createFileMetadataGlobalBoxSkillsCard method

### Returns

This function returns a value of type `SkillCardsMetadata`.

Returns the instance of the template that was applied to the file,
including the data that was applied to the template.

## Update Box Skill cards on file

Updates one or more Box Skills metadata cards to a file.

This operation is performed by calling function `updateFileMetadataGlobalBoxSkillsCard`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/put-files-id-metadata-global-box-skills-cards/).

_Currently we don't have an example for calling `updateFileMetadataGlobalBoxSkillsCard` in integration tests_

### Arguments

- fileId `string`
  - The unique identifier that represents a file. The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/files/123` the `file_id` is `123`. Example: "12345"
- requestBody `readonly UpdateFileMetadataGlobalBoxSkillsCardRequestBodyArg[]`
  - Request body of updateFileMetadataGlobalBoxSkillsCard method
- headers `UpdateFileMetadataGlobalBoxSkillsCardHeadersArg`
  - Headers of updateFileMetadataGlobalBoxSkillsCard method

### Returns

This function returns a value of type `SkillCardsMetadata`.

Returns the updated metadata template, with the
custom template data included.

## Remove Box Skill cards from file

Removes any Box Skills cards metadata from a file.

This operation is performed by calling function `deleteFileMetadataGlobalBoxSkillsCard`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/delete-files-id-metadata-global-box-skills-cards/).

_Currently we don't have an example for calling `deleteFileMetadataGlobalBoxSkillsCard` in integration tests_

### Arguments

- fileId `string`
  - The unique identifier that represents a file. The ID for any file can be determined by visiting a file in the web application and copying the ID from the URL. For example, for the URL `https://*.app.box.com/files/123` the `file_id` is `123`. Example: "12345"
- headers `DeleteFileMetadataGlobalBoxSkillsCardHeadersArg`
  - Headers of deleteFileMetadataGlobalBoxSkillsCard method

### Returns

This function returns a value of type `undefined`.

Returns an empty response when the cards are
successfully deleted.

## Update all Box Skill cards on file

An alternative method that can be used to overwrite and update all Box Skill
metadata cards on a file.

This operation is performed by calling function `updateSkillInvocationById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/put-skill-invocations-id/).

_Currently we don't have an example for calling `updateSkillInvocationById` in integration tests_

### Arguments

- skillId `string`
  - The ID of the skill to apply this metadata for. Example: "33243242"
- requestBody `UpdateSkillInvocationByIdRequestBodyArg`
  - Request body of updateSkillInvocationById method
- headers `UpdateSkillInvocationByIdHeadersArg`
  - Headers of updateSkillInvocationById method

### Returns

This function returns a value of type `undefined`.

Returns an empty response when the card has been successfully updated.
