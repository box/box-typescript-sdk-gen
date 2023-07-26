# FolderLocksManager

## List folder locks

Retrieves folder lock details for a given folder.

You must be authenticated as the owner or co-owner of the folder to
use this endpoint.

This operation is performed by calling function `getFolderLocks`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-folder-locks/).

*Currently we don't have an example for calling `getFolderLocks` in integration tests*

### Arguments

- queryParams `GetFolderLocksQueryParamsArg`
  - Used as queryParams for the API call


### Returns

This function returns a value of type `FolderLocks`.

Returns details for all folder locks applied to the folder, including the
lock type and user that applied the lock.


## Create folder lock

Creates a folder lock on a folder, preventing it from being moved and/or
deleted.

You must be authenticated as the owner or co-owner of the folder to
use this endpoint.

This operation is performed by calling function `createFolderLock`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/post-folder-locks/).

*Currently we don't have an example for calling `createFolderLock` in integration tests*

### Arguments

- requestBody `CreateFolderLockRequestBodyArg`
  - Used as requestBody for the API call


### Returns

This function returns a value of type `FolderLock`.

Returns the instance of the folder lock that was applied to the folder,
including the user that applied the lock and the operations set.


## Delete folder lock

Deletes a folder lock on a given folder.

You must be authenticated as the owner or co-owner of the folder to
use this endpoint.

This operation is performed by calling function `deleteFolderLockById`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/delete-folder-locks-id/).

*Currently we don't have an example for calling `deleteFolderLockById` in integration tests*

### Arguments

- folderLockId `string`
  - The ID of the folder lock.
  - Used as `folder_lock_id` in path `path` of the API call


