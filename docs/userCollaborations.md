# UserCollaborationsManager

## Get collaboration

Retrieves a single collaboration.

This operation is performed by calling function `getCollaborationById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-collaborations-id/).

*Currently we don't have an example for calling `getCollaborationById` in integration tests*

### Arguments

- collaborationId `string`
  - The ID of the collaboration
  - Used as `collaboration_id` in path `path` of the API call
- queryParams `GetCollaborationByIdQueryParamsArg`
  - Used as queryParams for the API call


### Returns

This function returns a value of type `Collaboration`.

Returns a collaboration object.


## Update collaboration

Updates a collaboration.
Can be used to change the owner of an item, or to
accept collaboration invites.

This operation is performed by calling function `updateCollaborationById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/put-collaborations-id/).

*Currently we don't have an example for calling `updateCollaborationById` in integration tests*

### Arguments

- collaborationId `string`
  - The ID of the collaboration
  - Used as `collaboration_id` in path `path` of the API call
- requestBody `UpdateCollaborationByIdRequestBodyArg`
  - Used as requestBody for the API call


### Returns

This function returns a value of type `Collaboration`.

Returns an updated collaboration object unless the owner has changed.If the role is changed to &#x60;owner&#x60;, the collaboration is deleted
and a new collaboration is created. The previous &#x60;owner&#x60; of
the old collaboration will be a &#x60;co-owner&#x60; on the new collaboration.


## Remove collaboration

Deletes a single collaboration.

This operation is performed by calling function `deleteCollaborationById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/delete-collaborations-id/).

*Currently we don't have an example for calling `deleteCollaborationById` in integration tests*

### Arguments

- collaborationId `string`
  - The ID of the collaboration
  - Used as `collaboration_id` in path `path` of the API call


## Create collaboration

Adds a collaboration for a single user or a single group to a file
or folder.

Collaborations can be created using email address, user IDs, or a
group IDs.

If a collaboration is being created with a group, access to
this endpoint is dependent on the group&#x27;s ability to be invited.

If collaboration is in &#x60;pending&#x60; status, the following fields
are redacted:
- &#x60;login&#x60; and &#x60;name&#x60; are hidden if a collaboration was created
using &#x60;user_id&#x60;,
-  &#x60;name&#x60; is hidden if a collaboration was created using &#x60;login&#x60;.

This operation is performed by calling function `createCollaboration`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/post-collaborations/).

*Currently we don't have an example for calling `createCollaboration` in integration tests*

### Arguments

- requestBody `CreateCollaborationRequestBodyArg`
  - Used as requestBody for the API call
- queryParams `CreateCollaborationQueryParamsArg`
  - Used as queryParams for the API call


### Returns

This function returns a value of type `Collaboration`.

Returns a new collaboration object.


