# TrashedWebLinksManager

<!-- box-typescript-sdk-gen deprecation banner -->
> [!CAUTION]
> **`box-typescript-sdk-gen` is deprecated and no longer maintained.** As of September 17, 2025, it receives no new features, bug fixes, or security patches. Do not use it for new projects.
>
> Use [`box-node-sdk`](https://github.com/box/box-node-sdk) v10+ instead: `npm install box-node-sdk`.
> The equivalent of this page is [box-node-sdk/docs/trashedWebLinks.md](https://github.com/box/box-node-sdk/blob/main/docs/trashedWebLinks.md). To migrate existing code, see the [migration guide](https://github.com/box/box-node-sdk/blob/main/migration-guides/from-box-typescript-sdk-gen-v1-to-box-node-sdk.md).

- [Restore web link](#restore-web-link)
- [Get trashed web link](#get-trashed-web-link)
- [Permanently remove web link](#permanently-remove-web-link)

## Restore web link

Restores a web link that has been moved to the trash.

An optional new parent ID can be provided to restore the web link to in case
the original folder has been deleted.

This operation is performed by calling function `restoreWeblinkFromTrash`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/post-web-links-id/).

<!-- sample post_web_links_id -->

```ts
await client.trashedWebLinks.restoreWeblinkFromTrash(weblink.id);
```

### Arguments

- webLinkId `string`
  - The ID of the web link. Example: "12345"
- optionalsInput `RestoreWeblinkFromTrashOptionalsInput`

### Returns

This function returns a value of type `TrashWebLinkRestored`.

Returns a web link object when it has been restored.

## Get trashed web link

Retrieves a web link that has been moved to the trash.

This operation is performed by calling function `getTrashedWebLinkById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-web-links-id-trash/).

<!-- sample get_web_links_id_trash -->

```ts
await client.trashedWebLinks.getTrashedWebLinkById(weblink.id);
```

### Arguments

- webLinkId `string`
  - The ID of the web link. Example: "12345"
- optionalsInput `GetTrashedWebLinkByIdOptionalsInput`

### Returns

This function returns a value of type `TrashWebLink`.

Returns the web link that was trashed,
including information about when the it
was moved to the trash.

## Permanently remove web link

Permanently deletes a web link that is in the trash.
This action cannot be undone.

This operation is performed by calling function `deleteTrashedWebLinkById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/delete-web-links-id-trash/).

<!-- sample delete_web_links_id_trash -->

```ts
await client.trashedWebLinks.deleteTrashedWebLinkById(weblink.id);
```

### Arguments

- webLinkId `string`
  - The ID of the web link. Example: "12345"
- optionalsInput `DeleteTrashedWebLinkByIdOptionalsInput`

### Returns

This function returns a value of type `undefined`.

Returns an empty response when the web link was
permanently deleted.
