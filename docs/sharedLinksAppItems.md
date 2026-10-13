# SharedLinksAppItemsManager

<!-- box-typescript-sdk-gen deprecation banner -->
> [!CAUTION]
> **`box-typescript-sdk-gen` is deprecated and no longer maintained.** As of September 17, 2025, it receives no new features, bug fixes, or security patches. Do not use it for new projects.
>
> Use [`box-node-sdk`](https://github.com/box/box-node-sdk) v10+ instead: `npm install box-node-sdk`.
> The equivalent of this page is [box-node-sdk/docs/sharedLinksAppItems.md](https://github.com/box/box-node-sdk/blob/main/docs/sharedLinksAppItems.md). To migrate existing code, see the [migration guide](https://github.com/box/box-node-sdk/blob/main/migration-guides/from-box-typescript-sdk-gen-v1-to-box-node-sdk.md).

- [Find app item for shared link](#find-app-item-for-shared-link)

## Find app item for shared link

Returns the app item represented by a shared link.

The link can originate from the current enterprise or another.

This operation is performed by calling function `findAppItemForSharedLink`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-shared-items--app-items/).

<!-- sample get_shared_items#app_items -->

```ts
await client.sharedLinksAppItems.findAppItemForSharedLink({
  boxapi: ''.concat('shared_link=', appItemSharedLink) as string,
} satisfies FindAppItemForSharedLinkHeadersInput);
```

### Arguments

- headersInput `FindAppItemForSharedLinkHeadersInput`
  - Headers of findAppItemForSharedLink method
- optionalsInput `FindAppItemForSharedLinkOptionalsInput`

### Returns

This function returns a value of type `AppItem`.

Returns a full app item resource if the shared link is valid and
the user has access to it.
