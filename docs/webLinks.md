# WebLinksManager

## Create web link

Creates a web link object within a folder.

This operation is performed by calling function `createWebLink`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/post-web-links/).

<!-- sample post_web_links -->
```ts
await client.webLinks.createWebLink({ url: url, parent: parent, name: name, description: description } satisfies CreateWebLinkRequestBodyArg)
```

### Arguments

- requestBody `CreateWebLinkRequestBodyArg`
  - Used as requestBody for the API call


### Returns

This function returns a value of type `WebLink`.

Returns the newly created web link object.


## Get web link

Retrieve information about a web link.

This operation is performed by calling function `getWebLinkById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-web-links-id/).

<!-- sample get_web_links_id -->
```ts
await client.webLinks.getWebLinkById(weblink.id)
```

### Arguments

- webLinkId `string`
  - The ID of the web link.
  - Used as `web_link_id` in path `path` of the API call
- headers `GetWebLinkByIdHeadersArg`
  - Used as headers for the API call


### Returns

This function returns a value of type `WebLink`.

Returns the web link object.


## Update web link

Updates a web link object.

This operation is performed by calling function `updateWebLinkById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/put-web-links-id/).

<!-- sample put_web_links_id -->
```ts
await client.webLinks.updateWebLinkById(weblink.id, { name: updatedName, sharedLink: { access: sharedAccess, password: password } satisfies UpdateWebLinkByIdRequestBodyArgSharedLinkField } satisfies UpdateWebLinkByIdRequestBodyArg)
```

### Arguments

- webLinkId `string`
  - The ID of the web link.
  - Used as `web_link_id` in path `path` of the API call
- requestBody `UpdateWebLinkByIdRequestBodyArg`
  - Used as requestBody for the API call


### Returns

This function returns a value of type `WebLink`.

Returns the updated web link object.


## Remove web link

Deletes a web link.

This operation is performed by calling function `deleteWebLinkById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/delete-web-links-id/).

<!-- sample delete_web_links_id -->
```ts
await client.webLinks.deleteWebLinkById(weblink.id)
```

### Arguments

- webLinkId `string`
  - The ID of the web link.
  - Used as `web_link_id` in path `path` of the API call


