# API Reference

> [!CAUTION]
> **`box-typescript-sdk-gen` is deprecated and no longer maintained.** As of September 17, 2025, it receives no new features, bug fixes, or security patches. Do not use it for new projects.
>
> Use [`box-node-sdk`](https://github.com/box/box-node-sdk) v10+ instead: `npm install box-node-sdk`. `box-node-sdk` v10 includes every manager listed below, plus newer ones.
> To migrate existing code, see the [migration guide](https://github.com/box/box-node-sdk/blob/main/migration-guides/from-box-typescript-sdk-gen-v1-to-box-node-sdk.md).

This file lists every manager and method exposed on `BoxClient`. For setup, authentication, and usage examples, see [README.md](README.md). Each section links to a page in [docs/](docs/README.md) with code samples.

# Client

See [docs/client.md](docs/client.md) and [docs/configuration.md](docs/configuration.md).

Methods:

- <code>client.<a href="./src/client.generated.ts">makeRequest</a>(fetchOptionsInput) -> FetchResponse</code>
- <code>client.<a href="./src/client.generated.ts">withAsUserHeader</a>(userId) -> BoxClient</code>
- <code>client.<a href="./src/client.generated.ts">withSuppressedNotifications</a>() -> BoxClient</code>
- <code>client.<a href="./src/client.generated.ts">withExtraHeaders</a>(extraHeaders?) -> BoxClient</code>
- <code>client.<a href="./src/client.generated.ts">withCustomBaseUrls</a>(baseUrlsInput) -> BoxClient</code>
- <code>client.<a href="./src/client.generated.ts">withProxy</a>(config) -> BoxClient</code>
- <code>client.<a href="./src/client.generated.ts">withCustomAgentOptions</a>(agentOptions) -> BoxClient</code>
- <code>client.<a href="./src/client.generated.ts">withInterceptors</a>(interceptors) -> BoxClient</code>

# Authorization

Examples: [docs/authorization.md](docs/authorization.md)

Methods:

- <code title="get /authorize">client.authorization.<a href="./src/managers/authorization.generated.ts">authorizeUser</a>(queryParams, optionalsInput?) -> undefined</code>
- <code title="post /oauth2/token">client.authorization.<a href="./src/managers/authorization.generated.ts">requestAccessToken</a>(requestBody, optionalsInput?) -> AccessToken</code>
- <code title="post /oauth2/token">client.authorization.<a href="./src/managers/authorization.generated.ts">refreshAccessToken</a>(requestBodyInput, optionalsInput?) -> AccessToken</code>
- <code title="post /oauth2/revoke">client.authorization.<a href="./src/managers/authorization.generated.ts">revokeAccessToken</a>(requestBody, optionalsInput?) -> undefined</code>

# Files

Examples: [docs/files.md](docs/files.md)

Methods:

- <code title="get /2.0/files/{fileId}">client.files.<a href="./src/managers/files.generated.ts">getFileById</a>(fileId, optionalsInput?) -> FileFull</code>
- <code title="put /2.0/files/{fileId}">client.files.<a href="./src/managers/files.generated.ts">updateFileById</a>(fileId, optionalsInput?) -> FileFull</code>
- <code title="delete /2.0/files/{fileId}">client.files.<a href="./src/managers/files.generated.ts">deleteFileById</a>(fileId, optionalsInput?) -> undefined</code>
- <code title="post /2.0/files/{fileId}/copy">client.files.<a href="./src/managers/files.generated.ts">copyFile</a>(fileId, requestBody, optionalsInput?) -> FileFull</code>
- <code title="get /2.0/files/{fileId}/thumbnail.{extension}">client.files.<a href="./src/managers/files.generated.ts">getFileThumbnailUrl</a>(fileId, extension, optionalsInput?) -> string</code>
- <code title="get /2.0/files/{fileId}/thumbnail.{extension}">client.files.<a href="./src/managers/files.generated.ts">getFileThumbnailById</a>(fileId, extension, optionalsInput?) -> undefined | ByteStream</code>

# Trashed files

Examples: [docs/trashedFiles.md](docs/trashedFiles.md)

Methods:

- <code title="post /2.0/files/{fileId}">client.trashedFiles.<a href="./src/managers/trashedFiles.generated.ts">restoreFileFromTrash</a>(fileId, optionalsInput?) -> TrashFileRestored</code>
- <code title="get /2.0/files/{fileId}/trash">client.trashedFiles.<a href="./src/managers/trashedFiles.generated.ts">getTrashedFileById</a>(fileId, optionalsInput?) -> TrashFile</code>
- <code title="delete /2.0/files/{fileId}/trash">client.trashedFiles.<a href="./src/managers/trashedFiles.generated.ts">deleteTrashedFileById</a>(fileId, optionalsInput?) -> undefined</code>

# App item associations

Examples: [docs/appItemAssociations.md](docs/appItemAssociations.md)

Methods:

- <code title="get /2.0/files/{fileId}/app_item_associations">client.appItemAssociations.<a href="./src/managers/appItemAssociations.generated.ts">getFileAppItemAssociations</a>(fileId, optionalsInput?) -> AppItemAssociations</code>
- <code title="get /2.0/folders/{folderId}/app_item_associations">client.appItemAssociations.<a href="./src/managers/appItemAssociations.generated.ts">getFolderAppItemAssociations</a>(folderId, optionalsInput?) -> AppItemAssociations</code>

# Downloads

Examples: [docs/downloads.md](docs/downloads.md)

Methods:

- <code title="get /2.0/files/{fileId}/content">client.downloads.<a href="./src/managers/downloads.generated.ts">getDownloadFileUrl</a>(fileId, optionalsInput?) -> string</code>
- <code title="get /2.0/files/{fileId}/content">client.downloads.<a href="./src/managers/downloads.generated.ts">downloadFile</a>(fileId, optionalsInput?) -> undefined | ByteStream</code>

# Uploads

Examples: [docs/uploads.md](docs/uploads.md)

Methods:

- <code title="post /2.0/files/{fileId}/content">client.uploads.<a href="./src/managers/uploads.generated.ts">uploadFileVersion</a>(fileId, requestBody, optionalsInput?) -> Files</code>
- <code title="options /2.0/files/content">client.uploads.<a href="./src/managers/uploads.generated.ts">preflightFileUploadCheck</a>(requestBody?, headersInput?, cancellationToken?) -> UploadUrl</code>
- <code title="post /2.0/files/content">client.uploads.<a href="./src/managers/uploads.generated.ts">uploadFile</a>(requestBody, optionalsInput?) -> Files</code>
- <code>client.uploads.<a href="./src/managers/uploads.generated.ts">uploadWithPreflightCheck</a>(requestBody, optionalsInput?) -> Files</code>

# Chunked uploads

Examples: [docs/chunkedUploads.md](docs/chunkedUploads.md)

Methods:

- <code title="post /2.0/files/upload_sessions">client.chunkedUploads.<a href="./src/managers/chunkedUploads.generated.ts">createFileUploadSession</a>(requestBody, optionalsInput?) -> UploadSession</code>
- <code title="post /2.0/files/{fileId}/upload_sessions">client.chunkedUploads.<a href="./src/managers/chunkedUploads.generated.ts">createFileUploadSessionForExistingFile</a>(fileId, requestBody, optionalsInput?) -> UploadSession</code>
- <code>client.chunkedUploads.<a href="./src/managers/chunkedUploads.generated.ts">getFileUploadSessionByUrl</a>(url, optionalsInput?) -> UploadSession</code>
- <code title="get /2.0/files/upload_sessions/{uploadSessionId}">client.chunkedUploads.<a href="./src/managers/chunkedUploads.generated.ts">getFileUploadSessionById</a>(uploadSessionId, optionalsInput?) -> UploadSession</code>
- <code>client.chunkedUploads.<a href="./src/managers/chunkedUploads.generated.ts">uploadFilePartByUrl</a>(url, requestBody, headersInput, optionalsInput?) -> UploadedPart</code>
- <code title="put /2.0/files/upload_sessions/{uploadSessionId}">client.chunkedUploads.<a href="./src/managers/chunkedUploads.generated.ts">uploadFilePart</a>(uploadSessionId, requestBody, headersInput, optionalsInput?) -> UploadedPart</code>
- <code>client.chunkedUploads.<a href="./src/managers/chunkedUploads.generated.ts">deleteFileUploadSessionByUrl</a>(url, optionalsInput?) -> undefined</code>
- <code title="delete /2.0/files/upload_sessions/{uploadSessionId}">client.chunkedUploads.<a href="./src/managers/chunkedUploads.generated.ts">deleteFileUploadSessionById</a>(uploadSessionId, optionalsInput?) -> undefined</code>
- <code>client.chunkedUploads.<a href="./src/managers/chunkedUploads.generated.ts">getFileUploadSessionPartsByUrl</a>(url, optionalsInput?) -> UploadParts</code>
- <code title="get /2.0/files/upload_sessions/{uploadSessionId}/parts">client.chunkedUploads.<a href="./src/managers/chunkedUploads.generated.ts">getFileUploadSessionParts</a>(uploadSessionId, optionalsInput?) -> UploadParts</code>
- <code>client.chunkedUploads.<a href="./src/managers/chunkedUploads.generated.ts">createFileUploadSessionCommitByUrl</a>(url, requestBody, headersInput, optionalsInput?) -> undefined | Files</code>
- <code title="post /2.0/files/upload_sessions/{uploadSessionId}/commit">client.chunkedUploads.<a href="./src/managers/chunkedUploads.generated.ts">createFileUploadSessionCommit</a>(uploadSessionId, requestBody, headersInput, optionalsInput?) -> undefined | Files</code>
- <code>client.chunkedUploads.<a href="./src/managers/chunkedUploads.generated.ts">uploadBigFile</a>(file, fileName, fileSize, parentFolderId, cancellationToken?) -> FileFull</code>

# List collaborations

Examples: [docs/listCollaborations.md](docs/listCollaborations.md)

Methods:

- <code title="get /2.0/files/{fileId}/collaborations">client.listCollaborations.<a href="./src/managers/listCollaborations.generated.ts">getFileCollaborations</a>(fileId, optionalsInput?) -> Collaborations</code>
- <code title="get /2.0/folders/{folderId}/collaborations">client.listCollaborations.<a href="./src/managers/listCollaborations.generated.ts">getFolderCollaborations</a>(folderId, optionalsInput?) -> Collaborations</code>
- <code title="get /2.0/collaborations">client.listCollaborations.<a href="./src/managers/listCollaborations.generated.ts">getCollaborations</a>(queryParams, optionalsInput?) -> CollaborationsOffsetPaginated</code>
- <code title="get /2.0/groups/{groupId}/collaborations">client.listCollaborations.<a href="./src/managers/listCollaborations.generated.ts">getGroupCollaborations</a>(groupId, optionalsInput?) -> CollaborationsOffsetPaginated</code>

# Comments

Examples: [docs/comments.md](docs/comments.md)

Methods:

- <code title="get /2.0/files/{fileId}/comments">client.comments.<a href="./src/managers/comments.generated.ts">getFileComments</a>(fileId, optionalsInput?) -> Comments</code>
- <code title="get /2.0/comments/{commentId}">client.comments.<a href="./src/managers/comments.generated.ts">getCommentById</a>(commentId, optionalsInput?) -> CommentFull</code>
- <code title="put /2.0/comments/{commentId}">client.comments.<a href="./src/managers/comments.generated.ts">updateCommentById</a>(commentId, optionalsInput?) -> CommentFull</code>
- <code title="delete /2.0/comments/{commentId}">client.comments.<a href="./src/managers/comments.generated.ts">deleteCommentById</a>(commentId, optionalsInput?) -> undefined</code>
- <code title="post /2.0/comments">client.comments.<a href="./src/managers/comments.generated.ts">createComment</a>(requestBody, optionalsInput?) -> CommentFull</code>

# Tasks

Examples: [docs/tasks.md](docs/tasks.md)

Methods:

- <code title="get /2.0/files/{fileId}/tasks">client.tasks.<a href="./src/managers/tasks.generated.ts">getFileTasks</a>(fileId, optionalsInput?) -> Tasks</code>
- <code title="post /2.0/tasks">client.tasks.<a href="./src/managers/tasks.generated.ts">createTask</a>(requestBody, optionalsInput?) -> Task</code>
- <code title="get /2.0/tasks/{taskId}">client.tasks.<a href="./src/managers/tasks.generated.ts">getTaskById</a>(taskId, optionalsInput?) -> Task</code>
- <code title="put /2.0/tasks/{taskId}">client.tasks.<a href="./src/managers/tasks.generated.ts">updateTaskById</a>(taskId, optionalsInput?) -> Task</code>
- <code title="delete /2.0/tasks/{taskId}">client.tasks.<a href="./src/managers/tasks.generated.ts">deleteTaskById</a>(taskId, optionalsInput?) -> undefined</code>

# File versions

Examples: [docs/fileVersions.md](docs/fileVersions.md)

Methods:

- <code title="get /2.0/files/{fileId}/versions">client.fileVersions.<a href="./src/managers/fileVersions.generated.ts">getFileVersions</a>(fileId, optionalsInput?) -> FileVersions</code>
- <code title="get /2.0/files/{fileId}/versions/{fileVersionId}">client.fileVersions.<a href="./src/managers/fileVersions.generated.ts">getFileVersionById</a>(fileId, fileVersionId, optionalsInput?) -> FileVersionFull</code>
- <code title="delete /2.0/files/{fileId}/versions/{fileVersionId}">client.fileVersions.<a href="./src/managers/fileVersions.generated.ts">deleteFileVersionById</a>(fileId, fileVersionId, optionalsInput?) -> undefined</code>
- <code title="put /2.0/files/{fileId}/versions/{fileVersionId}">client.fileVersions.<a href="./src/managers/fileVersions.generated.ts">updateFileVersionById</a>(fileId, fileVersionId, optionalsInput?) -> FileVersionFull</code>
- <code title="post /2.0/files/{fileId}/versions/current">client.fileVersions.<a href="./src/managers/fileVersions.generated.ts">promoteFileVersion</a>(fileId, optionalsInput?) -> FileVersionFull</code>

# File metadata

Examples: [docs/fileMetadata.md](docs/fileMetadata.md)

Methods:

- <code title="get /2.0/files/{fileId}/metadata">client.fileMetadata.<a href="./src/managers/fileMetadata.generated.ts">getFileMetadata</a>(fileId, optionalsInput?) -> Metadatas</code>
- <code title="get /2.0/files/{fileId}/metadata/{scope}/{templateKey}">client.fileMetadata.<a href="./src/managers/fileMetadata.generated.ts">getFileMetadataById</a>(fileId, scope, templateKey, optionalsInput?) -> MetadataFull</code>
- <code title="post /2.0/files/{fileId}/metadata/{scope}/{templateKey}">client.fileMetadata.<a href="./src/managers/fileMetadata.generated.ts">createFileMetadataById</a>(fileId, scope, templateKey, requestBody, optionalsInput?) -> MetadataFull</code>
- <code title="put /2.0/files/{fileId}/metadata/{scope}/{templateKey}">client.fileMetadata.<a href="./src/managers/fileMetadata.generated.ts">updateFileMetadataById</a>(fileId, scope, templateKey, requestBody, optionalsInput?) -> MetadataFull</code>
- <code title="delete /2.0/files/{fileId}/metadata/{scope}/{templateKey}">client.fileMetadata.<a href="./src/managers/fileMetadata.generated.ts">deleteFileMetadataById</a>(fileId, scope, templateKey, optionalsInput?) -> undefined</code>

# File classifications

Examples: [docs/fileClassifications.md](docs/fileClassifications.md)

Methods:

- <code title="get /2.0/files/{fileId}/metadata/enterprise/securityClassification-6VMVochwUWo">client.fileClassifications.<a href="./src/managers/fileClassifications.generated.ts">getClassificationOnFile</a>(fileId, optionalsInput?) -> Classification</code>
- <code title="post /2.0/files/{fileId}/metadata/enterprise/securityClassification-6VMVochwUWo">client.fileClassifications.<a href="./src/managers/fileClassifications.generated.ts">addClassificationToFile</a>(fileId, optionalsInput?) -> Classification</code>
- <code title="put /2.0/files/{fileId}/metadata/enterprise/securityClassification-6VMVochwUWo">client.fileClassifications.<a href="./src/managers/fileClassifications.generated.ts">updateClassificationOnFile</a>(fileId, requestBody, optionalsInput?) -> Classification</code>
- <code title="delete /2.0/files/{fileId}/metadata/enterprise/securityClassification-6VMVochwUWo">client.fileClassifications.<a href="./src/managers/fileClassifications.generated.ts">deleteClassificationFromFile</a>(fileId, optionalsInput?) -> undefined</code>

# Skills

Examples: [docs/skills.md](docs/skills.md)

Methods:

- <code title="get /2.0/files/{fileId}/metadata/global/boxSkillsCards">client.skills.<a href="./src/managers/skills.generated.ts">getBoxSkillCardsOnFile</a>(fileId, optionalsInput?) -> SkillCardsMetadata</code>
- <code title="post /2.0/files/{fileId}/metadata/global/boxSkillsCards">client.skills.<a href="./src/managers/skills.generated.ts">createBoxSkillCardsOnFile</a>(fileId, requestBody, optionalsInput?) -> SkillCardsMetadata</code>
- <code title="put /2.0/files/{fileId}/metadata/global/boxSkillsCards">client.skills.<a href="./src/managers/skills.generated.ts">updateBoxSkillCardsOnFile</a>(fileId, requestBody, optionalsInput?) -> SkillCardsMetadata</code>
- <code title="delete /2.0/files/{fileId}/metadata/global/boxSkillsCards">client.skills.<a href="./src/managers/skills.generated.ts">deleteBoxSkillCardsFromFile</a>(fileId, optionalsInput?) -> undefined</code>
- <code title="put /2.0/skill_invocations/{skillId}">client.skills.<a href="./src/managers/skills.generated.ts">updateAllSkillCardsOnFile</a>(skillId, requestBody, optionalsInput?) -> undefined</code>

# File watermarks

Examples: [docs/fileWatermarks.md](docs/fileWatermarks.md)

Methods:

- <code title="get /2.0/files/{fileId}/watermark">client.fileWatermarks.<a href="./src/managers/fileWatermarks.generated.ts">getFileWatermark</a>(fileId, optionalsInput?) -> Watermark</code>
- <code title="put /2.0/files/{fileId}/watermark">client.fileWatermarks.<a href="./src/managers/fileWatermarks.generated.ts">updateFileWatermark</a>(fileId, requestBody, optionalsInput?) -> Watermark</code>
- <code title="delete /2.0/files/{fileId}/watermark">client.fileWatermarks.<a href="./src/managers/fileWatermarks.generated.ts">deleteFileWatermark</a>(fileId, optionalsInput?) -> undefined</code>

# File requests

Examples: [docs/fileRequests.md](docs/fileRequests.md)

Methods:

- <code title="get /2.0/file_requests/{fileRequestId}">client.fileRequests.<a href="./src/managers/fileRequests.generated.ts">getFileRequestById</a>(fileRequestId, optionalsInput?) -> FileRequest</code>
- <code title="put /2.0/file_requests/{fileRequestId}">client.fileRequests.<a href="./src/managers/fileRequests.generated.ts">updateFileRequestById</a>(fileRequestId, requestBody, optionalsInput?) -> FileRequest</code>
- <code title="delete /2.0/file_requests/{fileRequestId}">client.fileRequests.<a href="./src/managers/fileRequests.generated.ts">deleteFileRequestById</a>(fileRequestId, optionalsInput?) -> undefined</code>
- <code title="post /2.0/file_requests/{fileRequestId}/copy">client.fileRequests.<a href="./src/managers/fileRequests.generated.ts">createFileRequestCopy</a>(fileRequestId, requestBody, optionalsInput?) -> FileRequest</code>

# Folders

Examples: [docs/folders.md](docs/folders.md)

Methods:

- <code title="get /2.0/folders/{folderId}">client.folders.<a href="./src/managers/folders.generated.ts">getFolderById</a>(folderId, optionalsInput?) -> FolderFull</code>
- <code title="put /2.0/folders/{folderId}">client.folders.<a href="./src/managers/folders.generated.ts">updateFolderById</a>(folderId, optionalsInput?) -> FolderFull</code>
- <code title="delete /2.0/folders/{folderId}">client.folders.<a href="./src/managers/folders.generated.ts">deleteFolderById</a>(folderId, optionalsInput?) -> undefined</code>
- <code title="get /2.0/folders/{folderId}/items">client.folders.<a href="./src/managers/folders.generated.ts">getFolderItems</a>(folderId, optionalsInput?) -> Items</code>
- <code title="post /2.0/folders">client.folders.<a href="./src/managers/folders.generated.ts">createFolder</a>(requestBody, optionalsInput?) -> FolderFull</code>
- <code title="post /2.0/folders/{folderId}/copy">client.folders.<a href="./src/managers/folders.generated.ts">copyFolder</a>(folderId, requestBody, optionalsInput?) -> FolderFull</code>

# Trashed folders

Examples: [docs/trashedFolders.md](docs/trashedFolders.md)

Methods:

- <code title="post /2.0/folders/{folderId}">client.trashedFolders.<a href="./src/managers/trashedFolders.generated.ts">restoreFolderFromTrash</a>(folderId, optionalsInput?) -> TrashFolderRestored</code>
- <code title="get /2.0/folders/{folderId}/trash">client.trashedFolders.<a href="./src/managers/trashedFolders.generated.ts">getTrashedFolderById</a>(folderId, optionalsInput?) -> TrashFolder</code>
- <code title="delete /2.0/folders/{folderId}/trash">client.trashedFolders.<a href="./src/managers/trashedFolders.generated.ts">deleteTrashedFolderById</a>(folderId, optionalsInput?) -> undefined</code>

# Folder metadata

Examples: [docs/folderMetadata.md](docs/folderMetadata.md)

Methods:

- <code title="get /2.0/folders/{folderId}/metadata">client.folderMetadata.<a href="./src/managers/folderMetadata.generated.ts">getFolderMetadata</a>(folderId, optionalsInput?) -> Metadatas</code>
- <code title="get /2.0/folders/{folderId}/metadata/{scope}/{templateKey}">client.folderMetadata.<a href="./src/managers/folderMetadata.generated.ts">getFolderMetadataById</a>(folderId, scope, templateKey, optionalsInput?) -> MetadataFull</code>
- <code title="post /2.0/folders/{folderId}/metadata/{scope}/{templateKey}">client.folderMetadata.<a href="./src/managers/folderMetadata.generated.ts">createFolderMetadataById</a>(folderId, scope, templateKey, requestBody, optionalsInput?) -> MetadataFull</code>
- <code title="put /2.0/folders/{folderId}/metadata/{scope}/{templateKey}">client.folderMetadata.<a href="./src/managers/folderMetadata.generated.ts">updateFolderMetadataById</a>(folderId, scope, templateKey, requestBody, optionalsInput?) -> MetadataFull</code>
- <code title="delete /2.0/folders/{folderId}/metadata/{scope}/{templateKey}">client.folderMetadata.<a href="./src/managers/folderMetadata.generated.ts">deleteFolderMetadataById</a>(folderId, scope, templateKey, optionalsInput?) -> undefined</code>

# Folder classifications

Examples: [docs/folderClassifications.md](docs/folderClassifications.md)

Methods:

- <code title="get /2.0/folders/{folderId}/metadata/enterprise/securityClassification-6VMVochwUWo">client.folderClassifications.<a href="./src/managers/folderClassifications.generated.ts">getClassificationOnFolder</a>(folderId, optionalsInput?) -> Classification</code>
- <code title="post /2.0/folders/{folderId}/metadata/enterprise/securityClassification-6VMVochwUWo">client.folderClassifications.<a href="./src/managers/folderClassifications.generated.ts">addClassificationToFolder</a>(folderId, optionalsInput?) -> Classification</code>
- <code title="put /2.0/folders/{folderId}/metadata/enterprise/securityClassification-6VMVochwUWo">client.folderClassifications.<a href="./src/managers/folderClassifications.generated.ts">updateClassificationOnFolder</a>(folderId, requestBody, optionalsInput?) -> Classification</code>
- <code title="delete /2.0/folders/{folderId}/metadata/enterprise/securityClassification-6VMVochwUWo">client.folderClassifications.<a href="./src/managers/folderClassifications.generated.ts">deleteClassificationFromFolder</a>(folderId, optionalsInput?) -> undefined</code>

# Trashed items

Examples: [docs/trashedItems.md](docs/trashedItems.md)

Methods:

- <code title="get /2.0/folders/trash/items">client.trashedItems.<a href="./src/managers/trashedItems.generated.ts">getTrashedItems</a>(queryParams?, headersInput?, cancellationToken?) -> Items</code>

# Folder watermarks

Examples: [docs/folderWatermarks.md](docs/folderWatermarks.md)

Methods:

- <code title="get /2.0/folders/{folderId}/watermark">client.folderWatermarks.<a href="./src/managers/folderWatermarks.generated.ts">getFolderWatermark</a>(folderId, optionalsInput?) -> Watermark</code>
- <code title="put /2.0/folders/{folderId}/watermark">client.folderWatermarks.<a href="./src/managers/folderWatermarks.generated.ts">updateFolderWatermark</a>(folderId, requestBody, optionalsInput?) -> Watermark</code>
- <code title="delete /2.0/folders/{folderId}/watermark">client.folderWatermarks.<a href="./src/managers/folderWatermarks.generated.ts">deleteFolderWatermark</a>(folderId, optionalsInput?) -> undefined</code>

# Folder locks

Examples: [docs/folderLocks.md](docs/folderLocks.md)

Methods:

- <code title="get /2.0/folder_locks">client.folderLocks.<a href="./src/managers/folderLocks.generated.ts">getFolderLocks</a>(queryParams, optionalsInput?) -> FolderLocks</code>
- <code title="post /2.0/folder_locks">client.folderLocks.<a href="./src/managers/folderLocks.generated.ts">createFolderLock</a>(requestBody, optionalsInput?) -> FolderLock</code>
- <code title="delete /2.0/folder_locks/{folderLockId}">client.folderLocks.<a href="./src/managers/folderLocks.generated.ts">deleteFolderLockById</a>(folderLockId, optionalsInput?) -> undefined</code>

# Metadata templates

Examples: [docs/metadataTemplates.md](docs/metadataTemplates.md)

Methods:

- <code title="get /2.0/metadata_templates">client.metadataTemplates.<a href="./src/managers/metadataTemplates.generated.ts">getMetadataTemplatesByInstanceId</a>(queryParams, optionalsInput?) -> MetadataTemplates</code>
- <code title="get /2.0/metadata_templates/{scope}/{templateKey}/schema">client.metadataTemplates.<a href="./src/managers/metadataTemplates.generated.ts">getMetadataTemplate</a>(scope, templateKey, optionalsInput?) -> MetadataTemplate</code>
- <code title="put /2.0/metadata_templates/{scope}/{templateKey}/schema">client.metadataTemplates.<a href="./src/managers/metadataTemplates.generated.ts">updateMetadataTemplate</a>(scope, templateKey, requestBody, optionalsInput?) -> MetadataTemplate</code>
- <code title="delete /2.0/metadata_templates/{scope}/{templateKey}/schema">client.metadataTemplates.<a href="./src/managers/metadataTemplates.generated.ts">deleteMetadataTemplate</a>(scope, templateKey, optionalsInput?) -> undefined</code>
- <code title="get /2.0/metadata_templates/{templateId}">client.metadataTemplates.<a href="./src/managers/metadataTemplates.generated.ts">getMetadataTemplateById</a>(templateId, optionalsInput?) -> MetadataTemplate</code>
- <code title="get /2.0/metadata_templates/global">client.metadataTemplates.<a href="./src/managers/metadataTemplates.generated.ts">getGlobalMetadataTemplates</a>(queryParams?, headersInput?, cancellationToken?) -> MetadataTemplates</code>
- <code title="get /2.0/metadata_templates/enterprise">client.metadataTemplates.<a href="./src/managers/metadataTemplates.generated.ts">getEnterpriseMetadataTemplates</a>(queryParams?, headersInput?, cancellationToken?) -> MetadataTemplates</code>
- <code title="post /2.0/metadata_templates/schema">client.metadataTemplates.<a href="./src/managers/metadataTemplates.generated.ts">createMetadataTemplate</a>(requestBody, optionalsInput?) -> MetadataTemplate</code>

# Classifications

Examples: [docs/classifications.md](docs/classifications.md)

Methods:

- <code title="get /2.0/metadata_templates/enterprise/securityClassification-6VMVochwUWo/schema">client.classifications.<a href="./src/managers/classifications.generated.ts">getClassificationTemplate</a>(headersInput?, cancellationToken?) -> ClassificationTemplate</code>
- <code title="put /2.0/metadata_templates/enterprise/securityClassification-6VMVochwUWo/schema">client.classifications.<a href="./src/managers/classifications.generated.ts">addClassification</a>(requestBody, optionalsInput?) -> ClassificationTemplate</code>
- <code title="put /2.0/metadata_templates/enterprise/securityClassification-6VMVochwUWo/schema">client.classifications.<a href="./src/managers/classifications.generated.ts">updateClassification</a>(requestBody, optionalsInput?) -> ClassificationTemplate</code>
- <code title="post /2.0/metadata_templates/schema">client.classifications.<a href="./src/managers/classifications.generated.ts">createClassificationTemplate</a>(requestBodyInput, optionalsInput?) -> ClassificationTemplate</code>

# Metadata cascade policies

Examples: [docs/metadataCascadePolicies.md](docs/metadataCascadePolicies.md)

Methods:

- <code title="get /2.0/metadata_cascade_policies">client.metadataCascadePolicies.<a href="./src/managers/metadataCascadePolicies.generated.ts">getMetadataCascadePolicies</a>(queryParams, optionalsInput?) -> MetadataCascadePolicies</code>
- <code title="post /2.0/metadata_cascade_policies">client.metadataCascadePolicies.<a href="./src/managers/metadataCascadePolicies.generated.ts">createMetadataCascadePolicy</a>(requestBody, optionalsInput?) -> MetadataCascadePolicy</code>
- <code title="get /2.0/metadata_cascade_policies/{metadataCascadePolicyId}">client.metadataCascadePolicies.<a href="./src/managers/metadataCascadePolicies.generated.ts">getMetadataCascadePolicyById</a>(metadataCascadePolicyId, optionalsInput?) -> MetadataCascadePolicy</code>
- <code title="delete /2.0/metadata_cascade_policies/{metadataCascadePolicyId}">client.metadataCascadePolicies.<a href="./src/managers/metadataCascadePolicies.generated.ts">deleteMetadataCascadePolicyById</a>(metadataCascadePolicyId, optionalsInput?) -> undefined</code>
- <code title="post /2.0/metadata_cascade_policies/{metadataCascadePolicyId}/apply">client.metadataCascadePolicies.<a href="./src/managers/metadataCascadePolicies.generated.ts">applyMetadataCascadePolicy</a>(metadataCascadePolicyId, requestBody, optionalsInput?) -> undefined</code>

# Search

Examples: [docs/search.md](docs/search.md)

Methods:

- <code title="post /2.0/metadata_queries/execute_read">client.search.<a href="./src/managers/search.generated.ts">searchByMetadataQuery</a>(requestBody, optionalsInput?) -> MetadataQueryResults</code>
- <code title="get /2.0/search">client.search.<a href="./src/managers/search.generated.ts">searchForContent</a>(queryParams?, headersInput?, cancellationToken?) -> SearchResultsOrSearchResultsWithSharedLinks</code>

# User collaborations

Examples: [docs/userCollaborations.md](docs/userCollaborations.md)

Methods:

- <code title="get /2.0/collaborations/{collaborationId}">client.userCollaborations.<a href="./src/managers/userCollaborations.generated.ts">getCollaborationById</a>(collaborationId, optionalsInput?) -> Collaboration</code>
- <code title="put /2.0/collaborations/{collaborationId}">client.userCollaborations.<a href="./src/managers/userCollaborations.generated.ts">updateCollaborationById</a>(collaborationId, requestBody, optionalsInput?) -> undefined | Collaboration</code>
- <code title="delete /2.0/collaborations/{collaborationId}">client.userCollaborations.<a href="./src/managers/userCollaborations.generated.ts">deleteCollaborationById</a>(collaborationId, optionalsInput?) -> undefined</code>
- <code title="post /2.0/collaborations">client.userCollaborations.<a href="./src/managers/userCollaborations.generated.ts">createCollaboration</a>(requestBody, optionalsInput?) -> Collaboration</code>

# Task assignments

Examples: [docs/taskAssignments.md](docs/taskAssignments.md)

Methods:

- <code title="get /2.0/tasks/{taskId}/assignments">client.taskAssignments.<a href="./src/managers/taskAssignments.generated.ts">getTaskAssignments</a>(taskId, optionalsInput?) -> TaskAssignments</code>
- <code title="post /2.0/task_assignments">client.taskAssignments.<a href="./src/managers/taskAssignments.generated.ts">createTaskAssignment</a>(requestBody, optionalsInput?) -> TaskAssignment</code>
- <code title="get /2.0/task_assignments/{taskAssignmentId}">client.taskAssignments.<a href="./src/managers/taskAssignments.generated.ts">getTaskAssignmentById</a>(taskAssignmentId, optionalsInput?) -> TaskAssignment</code>
- <code title="put /2.0/task_assignments/{taskAssignmentId}">client.taskAssignments.<a href="./src/managers/taskAssignments.generated.ts">updateTaskAssignmentById</a>(taskAssignmentId, optionalsInput?) -> TaskAssignment</code>
- <code title="delete /2.0/task_assignments/{taskAssignmentId}">client.taskAssignments.<a href="./src/managers/taskAssignments.generated.ts">deleteTaskAssignmentById</a>(taskAssignmentId, optionalsInput?) -> undefined</code>

# Shared links files

Examples: [docs/sharedLinksFiles.md](docs/sharedLinksFiles.md)

Methods:

- <code title="get /2.0/shared_items">client.sharedLinksFiles.<a href="./src/managers/sharedLinksFiles.generated.ts">findFileForSharedLink</a>(queryParams?, headersInput, optionalsInput?) -> FileFull</code>
- <code title="get /2.0/files/{fileId}">client.sharedLinksFiles.<a href="./src/managers/sharedLinksFiles.generated.ts">getSharedLinkForFile</a>(fileId, queryParams, optionalsInput?) -> FileFull</code>
- <code title="put /2.0/files/{fileId}">client.sharedLinksFiles.<a href="./src/managers/sharedLinksFiles.generated.ts">addShareLinkToFile</a>(fileId, requestBody?, queryParams, optionalsInput?) -> FileFull</code>
- <code title="put /2.0/files/{fileId}">client.sharedLinksFiles.<a href="./src/managers/sharedLinksFiles.generated.ts">updateSharedLinkOnFile</a>(fileId, requestBody?, queryParams, optionalsInput?) -> FileFull</code>
- <code title="put /2.0/files/{fileId}">client.sharedLinksFiles.<a href="./src/managers/sharedLinksFiles.generated.ts">removeSharedLinkFromFile</a>(fileId, requestBody?, queryParams, optionalsInput?) -> FileFull</code>

# Shared links folders

Examples: [docs/sharedLinksFolders.md](docs/sharedLinksFolders.md)

Methods:

- <code title="get /2.0/shared_items">client.sharedLinksFolders.<a href="./src/managers/sharedLinksFolders.generated.ts">findFolderForSharedLink</a>(queryParams?, headersInput, optionalsInput?) -> FolderFull</code>
- <code title="get /2.0/folders/{folderId}">client.sharedLinksFolders.<a href="./src/managers/sharedLinksFolders.generated.ts">getSharedLinkForFolder</a>(folderId, queryParams, optionalsInput?) -> FolderFull</code>
- <code title="put /2.0/folders/{folderId}">client.sharedLinksFolders.<a href="./src/managers/sharedLinksFolders.generated.ts">addShareLinkToFolder</a>(folderId, requestBody?, queryParams, optionalsInput?) -> FolderFull</code>
- <code title="put /2.0/folders/{folderId}">client.sharedLinksFolders.<a href="./src/managers/sharedLinksFolders.generated.ts">updateSharedLinkOnFolder</a>(folderId, requestBody?, queryParams, optionalsInput?) -> FolderFull</code>
- <code title="put /2.0/folders/{folderId}">client.sharedLinksFolders.<a href="./src/managers/sharedLinksFolders.generated.ts">removeSharedLinkFromFolder</a>(folderId, requestBody?, queryParams, optionalsInput?) -> FolderFull</code>

# Web links

Examples: [docs/webLinks.md](docs/webLinks.md)

Methods:

- <code title="post /2.0/web_links">client.webLinks.<a href="./src/managers/webLinks.generated.ts">createWebLink</a>(requestBody, optionalsInput?) -> WebLink</code>
- <code title="get /2.0/web_links/{webLinkId}">client.webLinks.<a href="./src/managers/webLinks.generated.ts">getWebLinkById</a>(webLinkId, optionalsInput?) -> WebLink</code>
- <code title="put /2.0/web_links/{webLinkId}">client.webLinks.<a href="./src/managers/webLinks.generated.ts">updateWebLinkById</a>(webLinkId, optionalsInput?) -> WebLink</code>
- <code title="delete /2.0/web_links/{webLinkId}">client.webLinks.<a href="./src/managers/webLinks.generated.ts">deleteWebLinkById</a>(webLinkId, optionalsInput?) -> undefined</code>

# Trashed web links

Examples: [docs/trashedWebLinks.md](docs/trashedWebLinks.md)

Methods:

- <code title="post /2.0/web_links/{webLinkId}">client.trashedWebLinks.<a href="./src/managers/trashedWebLinks.generated.ts">restoreWeblinkFromTrash</a>(webLinkId, optionalsInput?) -> TrashWebLinkRestored</code>
- <code title="get /2.0/web_links/{webLinkId}/trash">client.trashedWebLinks.<a href="./src/managers/trashedWebLinks.generated.ts">getTrashedWebLinkById</a>(webLinkId, optionalsInput?) -> TrashWebLink</code>
- <code title="delete /2.0/web_links/{webLinkId}/trash">client.trashedWebLinks.<a href="./src/managers/trashedWebLinks.generated.ts">deleteTrashedWebLinkById</a>(webLinkId, optionalsInput?) -> undefined</code>

# Shared links web links

Examples: [docs/sharedLinksWebLinks.md](docs/sharedLinksWebLinks.md)

Methods:

- <code title="get /2.0/shared_items">client.sharedLinksWebLinks.<a href="./src/managers/sharedLinksWebLinks.generated.ts">findWebLinkForSharedLink</a>(queryParams?, headersInput, optionalsInput?) -> WebLink</code>
- <code title="get /2.0/web_links/{webLinkId}">client.sharedLinksWebLinks.<a href="./src/managers/sharedLinksWebLinks.generated.ts">getSharedLinkForWebLink</a>(webLinkId, queryParams, optionalsInput?) -> WebLink</code>
- <code title="put /2.0/web_links/{webLinkId}">client.sharedLinksWebLinks.<a href="./src/managers/sharedLinksWebLinks.generated.ts">addShareLinkToWebLink</a>(webLinkId, requestBody?, queryParams, optionalsInput?) -> WebLink</code>
- <code title="put /2.0/web_links/{webLinkId}">client.sharedLinksWebLinks.<a href="./src/managers/sharedLinksWebLinks.generated.ts">updateSharedLinkOnWebLink</a>(webLinkId, requestBody?, queryParams, optionalsInput?) -> WebLink</code>
- <code title="put /2.0/web_links/{webLinkId}">client.sharedLinksWebLinks.<a href="./src/managers/sharedLinksWebLinks.generated.ts">removeSharedLinkFromWebLink</a>(webLinkId, requestBody?, queryParams, optionalsInput?) -> WebLink</code>

# Shared links app items

Examples: [docs/sharedLinksAppItems.md](docs/sharedLinksAppItems.md)

Methods:

- <code title="get /2.0/shared_items">client.sharedLinksAppItems.<a href="./src/managers/sharedLinksAppItems.generated.ts">findAppItemForSharedLink</a>(headersInput, optionalsInput?) -> AppItem</code>

# Users

Examples: [docs/users.md](docs/users.md)

Methods:

- <code title="get /2.0/users">client.users.<a href="./src/managers/users.generated.ts">getUsers</a>(queryParams?, headersInput?, cancellationToken?) -> Users</code>
- <code title="post /2.0/users">client.users.<a href="./src/managers/users.generated.ts">createUser</a>(requestBody, optionalsInput?) -> UserFull</code>
- <code title="get /2.0/users/me">client.users.<a href="./src/managers/users.generated.ts">getUserMe</a>(queryParams?, headersInput?, cancellationToken?) -> UserFull</code>
- <code title="get /2.0/users/{userId}">client.users.<a href="./src/managers/users.generated.ts">getUserById</a>(userId, optionalsInput?) -> UserFull</code>
- <code title="put /2.0/users/{userId}">client.users.<a href="./src/managers/users.generated.ts">updateUserById</a>(userId, optionalsInput?) -> UserFull</code>
- <code title="delete /2.0/users/{userId}">client.users.<a href="./src/managers/users.generated.ts">deleteUserById</a>(userId, optionalsInput?) -> undefined</code>

# Session termination

Examples: [docs/sessionTermination.md](docs/sessionTermination.md)

Methods:

- <code title="post /2.0/users/terminate_sessions">client.sessionTermination.<a href="./src/managers/sessionTermination.generated.ts">terminateUsersSessions</a>(requestBody, optionalsInput?) -> SessionTerminationMessage</code>
- <code title="post /2.0/groups/terminate_sessions">client.sessionTermination.<a href="./src/managers/sessionTermination.generated.ts">terminateGroupsSessions</a>(requestBody, optionalsInput?) -> SessionTerminationMessage</code>

# Avatars

Examples: [docs/avatars.md](docs/avatars.md)

Methods:

- <code title="get /2.0/users/{userId}/avatar">client.avatars.<a href="./src/managers/avatars.generated.ts">getUserAvatar</a>(userId, optionalsInput?) -> ByteStream</code>
- <code title="post /2.0/users/{userId}/avatar">client.avatars.<a href="./src/managers/avatars.generated.ts">createUserAvatar</a>(userId, requestBody, optionalsInput?) -> UserAvatar</code>
- <code title="delete /2.0/users/{userId}/avatar">client.avatars.<a href="./src/managers/avatars.generated.ts">deleteUserAvatar</a>(userId, optionalsInput?) -> undefined</code>

# Transfer

Examples: [docs/transfer.md](docs/transfer.md)

Methods:

- <code title="put /2.0/users/{userId}/folders/0">client.transfer.<a href="./src/managers/transfer.generated.ts">transferOwnedFolder</a>(userId, requestBody, optionalsInput?) -> FolderFull</code>

# Email aliases

Examples: [docs/emailAliases.md](docs/emailAliases.md)

Methods:

- <code title="get /2.0/users/{userId}/email_aliases">client.emailAliases.<a href="./src/managers/emailAliases.generated.ts">getUserEmailAliases</a>(userId, optionalsInput?) -> EmailAliases</code>
- <code title="post /2.0/users/{userId}/email_aliases">client.emailAliases.<a href="./src/managers/emailAliases.generated.ts">createUserEmailAlias</a>(userId, requestBody, optionalsInput?) -> EmailAlias</code>
- <code title="delete /2.0/users/{userId}/email_aliases/{emailAliasId}">client.emailAliases.<a href="./src/managers/emailAliases.generated.ts">deleteUserEmailAliasById</a>(userId, emailAliasId, optionalsInput?) -> undefined</code>

# Memberships

Examples: [docs/memberships.md](docs/memberships.md)

Methods:

- <code title="get /2.0/users/{userId}/memberships">client.memberships.<a href="./src/managers/memberships.generated.ts">getUserMemberships</a>(userId, optionalsInput?) -> GroupMemberships</code>
- <code title="get /2.0/groups/{groupId}/memberships">client.memberships.<a href="./src/managers/memberships.generated.ts">getGroupMemberships</a>(groupId, optionalsInput?) -> GroupMemberships</code>
- <code title="post /2.0/group_memberships">client.memberships.<a href="./src/managers/memberships.generated.ts">createGroupMembership</a>(requestBody, optionalsInput?) -> GroupMembership</code>
- <code title="get /2.0/group_memberships/{groupMembershipId}">client.memberships.<a href="./src/managers/memberships.generated.ts">getGroupMembershipById</a>(groupMembershipId, optionalsInput?) -> GroupMembership</code>
- <code title="put /2.0/group_memberships/{groupMembershipId}">client.memberships.<a href="./src/managers/memberships.generated.ts">updateGroupMembershipById</a>(groupMembershipId, optionalsInput?) -> GroupMembership</code>
- <code title="delete /2.0/group_memberships/{groupMembershipId}">client.memberships.<a href="./src/managers/memberships.generated.ts">deleteGroupMembershipById</a>(groupMembershipId, optionalsInput?) -> undefined</code>

# Invites

Examples: [docs/invites.md](docs/invites.md)

Methods:

- <code title="post /2.0/invites">client.invites.<a href="./src/managers/invites.generated.ts">createInvite</a>(requestBody, optionalsInput?) -> Invite</code>
- <code title="get /2.0/invites/{inviteId}">client.invites.<a href="./src/managers/invites.generated.ts">getInviteById</a>(inviteId, optionalsInput?) -> Invite</code>

# Groups

Examples: [docs/groups.md](docs/groups.md)

Methods:

- <code title="get /2.0/groups">client.groups.<a href="./src/managers/groups.generated.ts">getGroups</a>(queryParams?, headersInput?, cancellationToken?) -> Groups</code>
- <code title="post /2.0/groups">client.groups.<a href="./src/managers/groups.generated.ts">createGroup</a>(requestBody, optionalsInput?) -> GroupFull</code>
- <code title="get /2.0/groups/{groupId}">client.groups.<a href="./src/managers/groups.generated.ts">getGroupById</a>(groupId, optionalsInput?) -> GroupFull</code>
- <code title="put /2.0/groups/{groupId}">client.groups.<a href="./src/managers/groups.generated.ts">updateGroupById</a>(groupId, optionalsInput?) -> GroupFull</code>
- <code title="delete /2.0/groups/{groupId}">client.groups.<a href="./src/managers/groups.generated.ts">deleteGroupById</a>(groupId, optionalsInput?) -> undefined</code>

# Webhooks

Examples: [docs/webhooks.md](docs/webhooks.md)

Methods:

- <code title="get /2.0/webhooks">client.webhooks.<a href="./src/managers/webhooks.generated.ts">getWebhooks</a>(queryParams?, headersInput?, cancellationToken?) -> Webhooks</code>
- <code title="post /2.0/webhooks">client.webhooks.<a href="./src/managers/webhooks.generated.ts">createWebhook</a>(requestBody, optionalsInput?) -> Webhook</code>
- <code title="get /2.0/webhooks/{webhookId}">client.webhooks.<a href="./src/managers/webhooks.generated.ts">getWebhookById</a>(webhookId, optionalsInput?) -> Webhook</code>
- <code title="put /2.0/webhooks/{webhookId}">client.webhooks.<a href="./src/managers/webhooks.generated.ts">updateWebhookById</a>(webhookId, optionalsInput?) -> Webhook</code>
- <code title="delete /2.0/webhooks/{webhookId}">client.webhooks.<a href="./src/managers/webhooks.generated.ts">deleteWebhookById</a>(webhookId, optionalsInput?) -> undefined</code>
- <code>WebhooksManager.<a href="./src/managers/webhooks.generated.ts">validateMessage</a>(body, headers, primaryKey, optionalsInput?) -> boolean</code>

# Events

Examples: [docs/events.md](docs/events.md)

Methods:

- <code title="options /2.0/events">client.events.<a href="./src/managers/events.generated.ts">getEventsWithLongPolling</a>(headersInput?, cancellationToken?) -> RealtimeServers</code>
- <code title="get /2.0/events">client.events.<a href="./src/managers/events.generated.ts">getEvents</a>(queryParams?, headersInput?, cancellationToken?) -> Events</code>
- <code>client.events.<a href="./src/managers/events.generated.ts">getEventStream</a>(queryParams?, headersInput?, cancellationToken?) -> EventStream</code>

# Collections

Examples: [docs/collections.md](docs/collections.md)

Methods:

- <code title="get /2.0/collections">client.collections.<a href="./src/managers/collections.generated.ts">getCollections</a>(queryParams?, headersInput?, cancellationToken?) -> Collections</code>
- <code title="get /2.0/collections/{collectionId}/items">client.collections.<a href="./src/managers/collections.generated.ts">getCollectionItems</a>(collectionId, optionalsInput?) -> ItemsOffsetPaginated</code>
- <code title="get /2.0/collections/{collectionId}">client.collections.<a href="./src/managers/collections.generated.ts">getCollectionById</a>(collectionId, optionalsInput?) -> Collection</code>

# Recent items

Examples: [docs/recentItems.md](docs/recentItems.md)

Methods:

- <code title="get /2.0/recent_items">client.recentItems.<a href="./src/managers/recentItems.generated.ts">getRecentItems</a>(queryParams?, headersInput?, cancellationToken?) -> RecentItems</code>

# Retention policies

Examples: [docs/retentionPolicies.md](docs/retentionPolicies.md)

Methods:

- <code title="get /2.0/retention_policies">client.retentionPolicies.<a href="./src/managers/retentionPolicies.generated.ts">getRetentionPolicies</a>(queryParams?, headersInput?, cancellationToken?) -> RetentionPolicies</code>
- <code title="post /2.0/retention_policies">client.retentionPolicies.<a href="./src/managers/retentionPolicies.generated.ts">createRetentionPolicy</a>(requestBody, optionalsInput?) -> RetentionPolicy</code>
- <code title="get /2.0/retention_policies/{retentionPolicyId}">client.retentionPolicies.<a href="./src/managers/retentionPolicies.generated.ts">getRetentionPolicyById</a>(retentionPolicyId, optionalsInput?) -> RetentionPolicy</code>
- <code title="put /2.0/retention_policies/{retentionPolicyId}">client.retentionPolicies.<a href="./src/managers/retentionPolicies.generated.ts">updateRetentionPolicyById</a>(retentionPolicyId, optionalsInput?) -> RetentionPolicy</code>
- <code title="delete /2.0/retention_policies/{retentionPolicyId}">client.retentionPolicies.<a href="./src/managers/retentionPolicies.generated.ts">deleteRetentionPolicyById</a>(retentionPolicyId, optionalsInput?) -> undefined</code>

# Retention policy assignments

Examples: [docs/retentionPolicyAssignments.md](docs/retentionPolicyAssignments.md)

Methods:

- <code title="get /2.0/retention_policies/{retentionPolicyId}/assignments">client.retentionPolicyAssignments.<a href="./src/managers/retentionPolicyAssignments.generated.ts">getRetentionPolicyAssignments</a>(retentionPolicyId, optionalsInput?) -> RetentionPolicyAssignments</code>
- <code title="post /2.0/retention_policy_assignments">client.retentionPolicyAssignments.<a href="./src/managers/retentionPolicyAssignments.generated.ts">createRetentionPolicyAssignment</a>(requestBody, optionalsInput?) -> RetentionPolicyAssignment</code>
- <code title="get /2.0/retention_policy_assignments/{retentionPolicyAssignmentId}">client.retentionPolicyAssignments.<a href="./src/managers/retentionPolicyAssignments.generated.ts">getRetentionPolicyAssignmentById</a>(retentionPolicyAssignmentId, optionalsInput?) -> RetentionPolicyAssignment</code>
- <code title="delete /2.0/retention_policy_assignments/{retentionPolicyAssignmentId}">client.retentionPolicyAssignments.<a href="./src/managers/retentionPolicyAssignments.generated.ts">deleteRetentionPolicyAssignmentById</a>(retentionPolicyAssignmentId, optionalsInput?) -> undefined</code>
- <code title="get /2.0/retention_policy_assignments/{retentionPolicyAssignmentId}/files_under_retention">client.retentionPolicyAssignments.<a href="./src/managers/retentionPolicyAssignments.generated.ts">getFilesUnderRetentionPolicyAssignment</a>(retentionPolicyAssignmentId, optionalsInput?) -> FilesUnderRetention</code>

# Legal hold policies

Examples: [docs/legalHoldPolicies.md](docs/legalHoldPolicies.md)

Methods:

- <code title="get /2.0/legal_hold_policies">client.legalHoldPolicies.<a href="./src/managers/legalHoldPolicies.generated.ts">getLegalHoldPolicies</a>(queryParams?, headersInput?, cancellationToken?) -> LegalHoldPolicies</code>
- <code title="post /2.0/legal_hold_policies">client.legalHoldPolicies.<a href="./src/managers/legalHoldPolicies.generated.ts">createLegalHoldPolicy</a>(requestBody, optionalsInput?) -> LegalHoldPolicy</code>
- <code title="get /2.0/legal_hold_policies/{legalHoldPolicyId}">client.legalHoldPolicies.<a href="./src/managers/legalHoldPolicies.generated.ts">getLegalHoldPolicyById</a>(legalHoldPolicyId, optionalsInput?) -> LegalHoldPolicy</code>
- <code title="put /2.0/legal_hold_policies/{legalHoldPolicyId}">client.legalHoldPolicies.<a href="./src/managers/legalHoldPolicies.generated.ts">updateLegalHoldPolicyById</a>(legalHoldPolicyId, optionalsInput?) -> LegalHoldPolicy</code>
- <code title="delete /2.0/legal_hold_policies/{legalHoldPolicyId}">client.legalHoldPolicies.<a href="./src/managers/legalHoldPolicies.generated.ts">deleteLegalHoldPolicyById</a>(legalHoldPolicyId, optionalsInput?) -> undefined</code>

# Legal hold policy assignments

Examples: [docs/legalHoldPolicyAssignments.md](docs/legalHoldPolicyAssignments.md)

Methods:

- <code title="get /2.0/legal_hold_policy_assignments">client.legalHoldPolicyAssignments.<a href="./src/managers/legalHoldPolicyAssignments.generated.ts">getLegalHoldPolicyAssignments</a>(queryParams, optionalsInput?) -> LegalHoldPolicyAssignments</code>
- <code title="post /2.0/legal_hold_policy_assignments">client.legalHoldPolicyAssignments.<a href="./src/managers/legalHoldPolicyAssignments.generated.ts">createLegalHoldPolicyAssignment</a>(requestBody, optionalsInput?) -> LegalHoldPolicyAssignment</code>
- <code title="get /2.0/legal_hold_policy_assignments/{legalHoldPolicyAssignmentId}">client.legalHoldPolicyAssignments.<a href="./src/managers/legalHoldPolicyAssignments.generated.ts">getLegalHoldPolicyAssignmentById</a>(legalHoldPolicyAssignmentId, optionalsInput?) -> LegalHoldPolicyAssignment</code>
- <code title="delete /2.0/legal_hold_policy_assignments/{legalHoldPolicyAssignmentId}">client.legalHoldPolicyAssignments.<a href="./src/managers/legalHoldPolicyAssignments.generated.ts">deleteLegalHoldPolicyAssignmentById</a>(legalHoldPolicyAssignmentId, optionalsInput?) -> undefined</code>
- <code title="get /2.0/legal_hold_policy_assignments/{legalHoldPolicyAssignmentId}/files_on_hold">client.legalHoldPolicyAssignments.<a href="./src/managers/legalHoldPolicyAssignments.generated.ts">getLegalHoldPolicyAssignmentFileOnHold</a>(legalHoldPolicyAssignmentId, optionalsInput?) -> FilesOnHold</code>

# File version retentions

Examples: [docs/fileVersionRetentions.md](docs/fileVersionRetentions.md)

Methods:

- <code title="get /2.0/file_version_retentions">client.fileVersionRetentions.<a href="./src/managers/fileVersionRetentions.generated.ts">getFileVersionRetentions</a>(queryParams?, headersInput?, cancellationToken?) -> FileVersionRetentions</code>
- <code title="get /2.0/file_version_retentions/{fileVersionRetentionId}">client.fileVersionRetentions.<a href="./src/managers/fileVersionRetentions.generated.ts">getFileVersionRetentionById</a>(fileVersionRetentionId, optionalsInput?) -> FileVersionRetention</code>

# File version legal holds

Examples: [docs/fileVersionLegalHolds.md](docs/fileVersionLegalHolds.md)

Methods:

- <code title="get /2.0/file_version_legal_holds/{fileVersionLegalHoldId}">client.fileVersionLegalHolds.<a href="./src/managers/fileVersionLegalHolds.generated.ts">getFileVersionLegalHoldById</a>(fileVersionLegalHoldId, optionalsInput?) -> FileVersionLegalHold</code>
- <code title="get /2.0/file_version_legal_holds">client.fileVersionLegalHolds.<a href="./src/managers/fileVersionLegalHolds.generated.ts">getFileVersionLegalHolds</a>(queryParams, optionalsInput?) -> FileVersionLegalHolds</code>

# Shield information barriers

Examples: [docs/shieldInformationBarriers.md](docs/shieldInformationBarriers.md)

Methods:

- <code title="get /2.0/shield_information_barriers/{shieldInformationBarrierId}">client.shieldInformationBarriers.<a href="./src/managers/shieldInformationBarriers.generated.ts">getShieldInformationBarrierById</a>(shieldInformationBarrierId, optionalsInput?) -> ShieldInformationBarrier</code>
- <code title="post /2.0/shield_information_barriers/change_status">client.shieldInformationBarriers.<a href="./src/managers/shieldInformationBarriers.generated.ts">updateShieldInformationBarrierStatus</a>(requestBody, optionalsInput?) -> ShieldInformationBarrier</code>
- <code title="get /2.0/shield_information_barriers">client.shieldInformationBarriers.<a href="./src/managers/shieldInformationBarriers.generated.ts">getShieldInformationBarriers</a>(queryParams?, headersInput?, cancellationToken?) -> ShieldInformationBarriers</code>
- <code title="post /2.0/shield_information_barriers">client.shieldInformationBarriers.<a href="./src/managers/shieldInformationBarriers.generated.ts">createShieldInformationBarrier</a>(requestBody, optionalsInput?) -> ShieldInformationBarrier</code>

# Shield information barrier reports

Examples: [docs/shieldInformationBarrierReports.md](docs/shieldInformationBarrierReports.md)

Methods:

- <code title="get /2.0/shield_information_barrier_reports">client.shieldInformationBarrierReports.<a href="./src/managers/shieldInformationBarrierReports.generated.ts">getShieldInformationBarrierReports</a>(queryParams, optionalsInput?) -> ShieldInformationBarrierReports</code>
- <code title="post /2.0/shield_information_barrier_reports">client.shieldInformationBarrierReports.<a href="./src/managers/shieldInformationBarrierReports.generated.ts">createShieldInformationBarrierReport</a>(requestBody, optionalsInput?) -> ShieldInformationBarrierReport</code>
- <code title="get /2.0/shield_information_barrier_reports/{shieldInformationBarrierReportId}">client.shieldInformationBarrierReports.<a href="./src/managers/shieldInformationBarrierReports.generated.ts">getShieldInformationBarrierReportById</a>(shieldInformationBarrierReportId, optionalsInput?) -> ShieldInformationBarrierReport</code>

# Shield information barrier segments

Examples: [docs/shieldInformationBarrierSegments.md](docs/shieldInformationBarrierSegments.md)

Methods:

- <code title="get /2.0/shield_information_barrier_segments/{shieldInformationBarrierSegmentId}">client.shieldInformationBarrierSegments.<a href="./src/managers/shieldInformationBarrierSegments.generated.ts">getShieldInformationBarrierSegmentById</a>(shieldInformationBarrierSegmentId, optionalsInput?) -> ShieldInformationBarrierSegment</code>
- <code title="delete /2.0/shield_information_barrier_segments/{shieldInformationBarrierSegmentId}">client.shieldInformationBarrierSegments.<a href="./src/managers/shieldInformationBarrierSegments.generated.ts">deleteShieldInformationBarrierSegmentById</a>(shieldInformationBarrierSegmentId, optionalsInput?) -> undefined</code>
- <code title="put /2.0/shield_information_barrier_segments/{shieldInformationBarrierSegmentId}">client.shieldInformationBarrierSegments.<a href="./src/managers/shieldInformationBarrierSegments.generated.ts">updateShieldInformationBarrierSegmentById</a>(shieldInformationBarrierSegmentId, optionalsInput?) -> ShieldInformationBarrierSegment</code>
- <code title="get /2.0/shield_information_barrier_segments">client.shieldInformationBarrierSegments.<a href="./src/managers/shieldInformationBarrierSegments.generated.ts">getShieldInformationBarrierSegments</a>(queryParams, optionalsInput?) -> ShieldInformationBarrierSegments</code>
- <code title="post /2.0/shield_information_barrier_segments">client.shieldInformationBarrierSegments.<a href="./src/managers/shieldInformationBarrierSegments.generated.ts">createShieldInformationBarrierSegment</a>(requestBody, optionalsInput?) -> ShieldInformationBarrierSegment</code>

# Shield information barrier segment members

Examples: [docs/shieldInformationBarrierSegmentMembers.md](docs/shieldInformationBarrierSegmentMembers.md)

Methods:

- <code title="get /2.0/shield_information_barrier_segment_members/{shieldInformationBarrierSegmentMemberId}">client.shieldInformationBarrierSegmentMembers.<a href="./src/managers/shieldInformationBarrierSegmentMembers.generated.ts">getShieldInformationBarrierSegmentMemberById</a>(shieldInformationBarrierSegmentMemberId, optionalsInput?) -> ShieldInformationBarrierSegmentMember</code>
- <code title="delete /2.0/shield_information_barrier_segment_members/{shieldInformationBarrierSegmentMemberId}">client.shieldInformationBarrierSegmentMembers.<a href="./src/managers/shieldInformationBarrierSegmentMembers.generated.ts">deleteShieldInformationBarrierSegmentMemberById</a>(shieldInformationBarrierSegmentMemberId, optionalsInput?) -> undefined</code>
- <code title="get /2.0/shield_information_barrier_segment_members">client.shieldInformationBarrierSegmentMembers.<a href="./src/managers/shieldInformationBarrierSegmentMembers.generated.ts">getShieldInformationBarrierSegmentMembers</a>(queryParams, optionalsInput?) -> ShieldInformationBarrierSegmentMembers</code>
- <code title="post /2.0/shield_information_barrier_segment_members">client.shieldInformationBarrierSegmentMembers.<a href="./src/managers/shieldInformationBarrierSegmentMembers.generated.ts">createShieldInformationBarrierSegmentMember</a>(requestBody, optionalsInput?) -> ShieldInformationBarrierSegmentMember</code>

# Shield information barrier segment restrictions

Examples: [docs/shieldInformationBarrierSegmentRestrictions.md](docs/shieldInformationBarrierSegmentRestrictions.md)

Methods:

- <code title="get /2.0/shield_information_barrier_segment_restrictions/{shieldInformationBarrierSegmentRestrictionId}">client.shieldInformationBarrierSegmentRestrictions.<a href="./src/managers/shieldInformationBarrierSegmentRestrictions.generated.ts">getShieldInformationBarrierSegmentRestrictionById</a>(shieldInformationBarrierSegmentRestrictionId, optionalsInput?) -> ShieldInformationBarrierSegmentRestriction</code>
- <code title="delete /2.0/shield_information_barrier_segment_restrictions/{shieldInformationBarrierSegmentRestrictionId}">client.shieldInformationBarrierSegmentRestrictions.<a href="./src/managers/shieldInformationBarrierSegmentRestrictions.generated.ts">deleteShieldInformationBarrierSegmentRestrictionById</a>(shieldInformationBarrierSegmentRestrictionId, optionalsInput?) -> undefined</code>
- <code title="get /2.0/shield_information_barrier_segment_restrictions">client.shieldInformationBarrierSegmentRestrictions.<a href="./src/managers/shieldInformationBarrierSegmentRestrictions.generated.ts">getShieldInformationBarrierSegmentRestrictions</a>(queryParams, optionalsInput?) -> ShieldInformationBarrierSegmentRestrictions</code>
- <code title="post /2.0/shield_information_barrier_segment_restrictions">client.shieldInformationBarrierSegmentRestrictions.<a href="./src/managers/shieldInformationBarrierSegmentRestrictions.generated.ts">createShieldInformationBarrierSegmentRestriction</a>(requestBodyInput, optionalsInput?) -> ShieldInformationBarrierSegmentRestriction</code>

# Device pinners

Examples: [docs/devicePinners.md](docs/devicePinners.md)

Methods:

- <code title="get /2.0/device_pinners/{devicePinnerId}">client.devicePinners.<a href="./src/managers/devicePinners.generated.ts">getDevicePinnerById</a>(devicePinnerId, optionalsInput?) -> DevicePinner</code>
- <code title="delete /2.0/device_pinners/{devicePinnerId}">client.devicePinners.<a href="./src/managers/devicePinners.generated.ts">deleteDevicePinnerById</a>(devicePinnerId, optionalsInput?) -> undefined</code>
- <code title="get /2.0/enterprises/{enterpriseId}/device_pinners">client.devicePinners.<a href="./src/managers/devicePinners.generated.ts">getEnterpriseDevicePinners</a>(enterpriseId, optionalsInput?) -> DevicePinners</code>

# Terms of services

Examples: [docs/termsOfServices.md](docs/termsOfServices.md)

Methods:

- <code title="get /2.0/terms_of_services">client.termsOfServices.<a href="./src/managers/termsOfServices.generated.ts">getTermsOfService</a>(queryParams?, headersInput?, cancellationToken?) -> TermsOfServices</code>
- <code title="post /2.0/terms_of_services">client.termsOfServices.<a href="./src/managers/termsOfServices.generated.ts">createTermsOfService</a>(requestBody, optionalsInput?) -> TermsOfService</code>
- <code title="get /2.0/terms_of_services/{termsOfServiceId}">client.termsOfServices.<a href="./src/managers/termsOfServices.generated.ts">getTermsOfServiceById</a>(termsOfServiceId, optionalsInput?) -> TermsOfService</code>
- <code title="put /2.0/terms_of_services/{termsOfServiceId}">client.termsOfServices.<a href="./src/managers/termsOfServices.generated.ts">updateTermsOfServiceById</a>(termsOfServiceId, requestBody, optionalsInput?) -> TermsOfService</code>

# Terms of service user statuses

Examples: [docs/termsOfServiceUserStatuses.md](docs/termsOfServiceUserStatuses.md)

Methods:

- <code title="get /2.0/terms_of_service_user_statuses">client.termsOfServiceUserStatuses.<a href="./src/managers/termsOfServiceUserStatuses.generated.ts">getTermsOfServiceUserStatuses</a>(queryParams, optionalsInput?) -> TermsOfServiceUserStatuses</code>
- <code title="post /2.0/terms_of_service_user_statuses">client.termsOfServiceUserStatuses.<a href="./src/managers/termsOfServiceUserStatuses.generated.ts">createTermsOfServiceStatusForUser</a>(requestBody, optionalsInput?) -> TermsOfServiceUserStatus</code>
- <code title="put /2.0/terms_of_service_user_statuses/{termsOfServiceUserStatusId}">client.termsOfServiceUserStatuses.<a href="./src/managers/termsOfServiceUserStatuses.generated.ts">updateTermsOfServiceStatusForUserById</a>(termsOfServiceUserStatusId, requestBody, optionalsInput?) -> TermsOfServiceUserStatus</code>

# Collaboration allowlist entries

Examples: [docs/collaborationAllowlistEntries.md](docs/collaborationAllowlistEntries.md)

Methods:

- <code title="get /2.0/collaboration_whitelist_entries">client.collaborationAllowlistEntries.<a href="./src/managers/collaborationAllowlistEntries.generated.ts">getCollaborationWhitelistEntries</a>(queryParams?, headersInput?, cancellationToken?) -> CollaborationAllowlistEntries</code>
- <code title="post /2.0/collaboration_whitelist_entries">client.collaborationAllowlistEntries.<a href="./src/managers/collaborationAllowlistEntries.generated.ts">createCollaborationWhitelistEntry</a>(requestBody, optionalsInput?) -> CollaborationAllowlistEntry</code>
- <code title="get /2.0/collaboration_whitelist_entries/{collaborationWhitelistEntryId}">client.collaborationAllowlistEntries.<a href="./src/managers/collaborationAllowlistEntries.generated.ts">getCollaborationWhitelistEntryById</a>(collaborationWhitelistEntryId, optionalsInput?) -> CollaborationAllowlistEntry</code>
- <code title="delete /2.0/collaboration_whitelist_entries/{collaborationWhitelistEntryId}">client.collaborationAllowlistEntries.<a href="./src/managers/collaborationAllowlistEntries.generated.ts">deleteCollaborationWhitelistEntryById</a>(collaborationWhitelistEntryId, optionalsInput?) -> undefined</code>

# Collaboration allowlist exempt targets

Examples: [docs/collaborationAllowlistExemptTargets.md](docs/collaborationAllowlistExemptTargets.md)

Methods:

- <code title="get /2.0/collaboration_whitelist_exempt_targets">client.collaborationAllowlistExemptTargets.<a href="./src/managers/collaborationAllowlistExemptTargets.generated.ts">getCollaborationWhitelistExemptTargets</a>(queryParams?, headersInput?, cancellationToken?) -> CollaborationAllowlistExemptTargets</code>
- <code title="post /2.0/collaboration_whitelist_exempt_targets">client.collaborationAllowlistExemptTargets.<a href="./src/managers/collaborationAllowlistExemptTargets.generated.ts">createCollaborationWhitelistExemptTarget</a>(requestBody, optionalsInput?) -> CollaborationAllowlistExemptTarget</code>
- <code title="get /2.0/collaboration_whitelist_exempt_targets/{collaborationWhitelistExemptTargetId}">client.collaborationAllowlistExemptTargets.<a href="./src/managers/collaborationAllowlistExemptTargets.generated.ts">getCollaborationWhitelistExemptTargetById</a>(collaborationWhitelistExemptTargetId, optionalsInput?) -> CollaborationAllowlistExemptTarget</code>
- <code title="delete /2.0/collaboration_whitelist_exempt_targets/{collaborationWhitelistExemptTargetId}">client.collaborationAllowlistExemptTargets.<a href="./src/managers/collaborationAllowlistExemptTargets.generated.ts">deleteCollaborationWhitelistExemptTargetById</a>(collaborationWhitelistExemptTargetId, optionalsInput?) -> undefined</code>

# Storage policies

Examples: [docs/storagePolicies.md](docs/storagePolicies.md)

Methods:

- <code title="get /2.0/storage_policies">client.storagePolicies.<a href="./src/managers/storagePolicies.generated.ts">getStoragePolicies</a>(queryParams?, headersInput?, cancellationToken?) -> StoragePolicies</code>
- <code title="get /2.0/storage_policies/{storagePolicyId}">client.storagePolicies.<a href="./src/managers/storagePolicies.generated.ts">getStoragePolicyById</a>(storagePolicyId, optionalsInput?) -> StoragePolicy</code>

# Storage policy assignments

Examples: [docs/storagePolicyAssignments.md](docs/storagePolicyAssignments.md)

Methods:

- <code title="get /2.0/storage_policy_assignments">client.storagePolicyAssignments.<a href="./src/managers/storagePolicyAssignments.generated.ts">getStoragePolicyAssignments</a>(queryParams, optionalsInput?) -> StoragePolicyAssignments</code>
- <code title="post /2.0/storage_policy_assignments">client.storagePolicyAssignments.<a href="./src/managers/storagePolicyAssignments.generated.ts">createStoragePolicyAssignment</a>(requestBody, optionalsInput?) -> StoragePolicyAssignment</code>
- <code title="get /2.0/storage_policy_assignments/{storagePolicyAssignmentId}">client.storagePolicyAssignments.<a href="./src/managers/storagePolicyAssignments.generated.ts">getStoragePolicyAssignmentById</a>(storagePolicyAssignmentId, optionalsInput?) -> StoragePolicyAssignment</code>
- <code title="put /2.0/storage_policy_assignments/{storagePolicyAssignmentId}">client.storagePolicyAssignments.<a href="./src/managers/storagePolicyAssignments.generated.ts">updateStoragePolicyAssignmentById</a>(storagePolicyAssignmentId, requestBody, optionalsInput?) -> StoragePolicyAssignment</code>
- <code title="delete /2.0/storage_policy_assignments/{storagePolicyAssignmentId}">client.storagePolicyAssignments.<a href="./src/managers/storagePolicyAssignments.generated.ts">deleteStoragePolicyAssignmentById</a>(storagePolicyAssignmentId, optionalsInput?) -> undefined</code>

# Zip downloads

Examples: [docs/zipDownloads.md](docs/zipDownloads.md)

Methods:

- <code title="post /2.0/zip_downloads">client.zipDownloads.<a href="./src/managers/zipDownloads.generated.ts">createZipDownload</a>(requestBody, optionalsInput?) -> ZipDownload</code>
- <code>client.zipDownloads.<a href="./src/managers/zipDownloads.generated.ts">getZipDownloadContent</a>(downloadUrl, optionalsInput?) -> ByteStream</code>
- <code>client.zipDownloads.<a href="./src/managers/zipDownloads.generated.ts">getZipDownloadStatus</a>(statusUrl, optionalsInput?) -> ZipDownloadStatus</code>
- <code>client.zipDownloads.<a href="./src/managers/zipDownloads.generated.ts">downloadZip</a>(requestBody, optionalsInput?) -> ByteStream</code>

# Sign requests

Examples: [docs/signRequests.md](docs/signRequests.md)

Methods:

- <code title="post /2.0/sign_requests/{signRequestId}/cancel">client.signRequests.<a href="./src/managers/signRequests.generated.ts">cancelSignRequest</a>(signRequestId, optionalsInput?) -> SignRequest</code>
- <code title="post /2.0/sign_requests/{signRequestId}/resend">client.signRequests.<a href="./src/managers/signRequests.generated.ts">resendSignRequest</a>(signRequestId, optionalsInput?) -> undefined</code>
- <code title="get /2.0/sign_requests/{signRequestId}">client.signRequests.<a href="./src/managers/signRequests.generated.ts">getSignRequestById</a>(signRequestId, optionalsInput?) -> SignRequest</code>
- <code title="get /2.0/sign_requests">client.signRequests.<a href="./src/managers/signRequests.generated.ts">getSignRequests</a>(queryParams?, headersInput?, cancellationToken?) -> SignRequests</code>
- <code title="post /2.0/sign_requests">client.signRequests.<a href="./src/managers/signRequests.generated.ts">createSignRequest</a>(requestBody, optionalsInput?) -> SignRequest</code>

# Workflows

Examples: [docs/workflows.md](docs/workflows.md)

Methods:

- <code title="get /2.0/workflows">client.workflows.<a href="./src/managers/workflows.generated.ts">getWorkflows</a>(queryParams, optionalsInput?) -> Workflows</code>
- <code title="post /2.0/workflows/{workflowId}/start">client.workflows.<a href="./src/managers/workflows.generated.ts">startWorkflow</a>(workflowId, requestBody, optionalsInput?) -> undefined</code>

# Sign templates

Examples: [docs/signTemplates.md](docs/signTemplates.md)

Methods:

- <code title="get /2.0/sign_templates">client.signTemplates.<a href="./src/managers/signTemplates.generated.ts">getSignTemplates</a>(queryParams?, headersInput?, cancellationToken?) -> SignTemplates</code>
- <code title="get /2.0/sign_templates/{templateId}">client.signTemplates.<a href="./src/managers/signTemplates.generated.ts">getSignTemplateById</a>(templateId, optionalsInput?) -> SignTemplate</code>

# Integration mappings

Examples: [docs/integrationMappings.md](docs/integrationMappings.md)

Methods:

- <code title="get /2.0/integration_mappings/slack">client.integrationMappings.<a href="./src/managers/integrationMappings.generated.ts">getSlackIntegrationMapping</a>(queryParams?, headersInput?, cancellationToken?) -> IntegrationMappings</code>
- <code title="post /2.0/integration_mappings/slack">client.integrationMappings.<a href="./src/managers/integrationMappings.generated.ts">createSlackIntegrationMapping</a>(requestBody, optionalsInput?) -> IntegrationMapping</code>
- <code title="put /2.0/integration_mappings/slack/{integrationMappingId}">client.integrationMappings.<a href="./src/managers/integrationMappings.generated.ts">updateSlackIntegrationMappingById</a>(integrationMappingId, optionalsInput?) -> IntegrationMapping</code>
- <code title="delete /2.0/integration_mappings/slack/{integrationMappingId}">client.integrationMappings.<a href="./src/managers/integrationMappings.generated.ts">deleteSlackIntegrationMappingById</a>(integrationMappingId, optionalsInput?) -> undefined</code>
- <code title="get /2.0/integration_mappings/teams">client.integrationMappings.<a href="./src/managers/integrationMappings.generated.ts">getTeamsIntegrationMapping</a>(queryParams?, headersInput?, cancellationToken?) -> IntegrationMappingsTeams</code>
- <code title="post /2.0/integration_mappings/teams">client.integrationMappings.<a href="./src/managers/integrationMappings.generated.ts">createTeamsIntegrationMapping</a>(requestBody, optionalsInput?) -> IntegrationMappingTeams</code>
- <code title="put /2.0/integration_mappings/teams/{integrationMappingId}">client.integrationMappings.<a href="./src/managers/integrationMappings.generated.ts">updateTeamsIntegrationMappingById</a>(integrationMappingId, optionalsInput?) -> IntegrationMappingTeams</code>
- <code title="delete /2.0/integration_mappings/teams/{integrationMappingId}">client.integrationMappings.<a href="./src/managers/integrationMappings.generated.ts">deleteTeamsIntegrationMappingById</a>(integrationMappingId, optionalsInput?) -> undefined</code>

# Ai

Examples: [docs/ai.md](docs/ai.md)

Methods:

- <code title="post /2.0/ai/ask">client.ai.<a href="./src/managers/ai.generated.ts">createAiAsk</a>(requestBody, optionalsInput?) -> undefined | AiResponseFull</code>
- <code title="post /2.0/ai/text_gen">client.ai.<a href="./src/managers/ai.generated.ts">createAiTextGen</a>(requestBody, optionalsInput?) -> AiResponse</code>
- <code title="get /2.0/ai_agent_default">client.ai.<a href="./src/managers/ai.generated.ts">getAiAgentDefaultConfig</a>(queryParams, optionalsInput?) -> AiAgentAskOrAiAgentExtractOrAiAgentExtractStructuredOrAiAgentTextGen</code>
- <code title="post /2.0/ai/extract">client.ai.<a href="./src/managers/ai.generated.ts">createAiExtract</a>(requestBody, optionalsInput?) -> AiResponse</code>
- <code title="post /2.0/ai/extract_structured">client.ai.<a href="./src/managers/ai.generated.ts">createAiExtractStructured</a>(requestBody, optionalsInput?) -> AiExtractStructuredResponse</code>

# Ai studio

Examples: [docs/aiStudio.md](docs/aiStudio.md)

Methods:

- <code title="get /2.0/ai_agents">client.aiStudio.<a href="./src/managers/aiStudio.generated.ts">getAiAgents</a>(queryParams?, headersInput?, cancellationToken?) -> AiMultipleAgentResponse</code>
- <code title="post /2.0/ai_agents">client.aiStudio.<a href="./src/managers/aiStudio.generated.ts">createAiAgent</a>(requestBodyInput, optionalsInput?) -> AiSingleAgentResponseFull</code>
- <code title="put /2.0/ai_agents/{agentId}">client.aiStudio.<a href="./src/managers/aiStudio.generated.ts">updateAiAgentById</a>(agentId, requestBodyInput, optionalsInput?) -> AiSingleAgentResponseFull</code>
- <code title="get /2.0/ai_agents/{agentId}">client.aiStudio.<a href="./src/managers/aiStudio.generated.ts">getAiAgentById</a>(agentId, optionalsInput?) -> AiSingleAgentResponseFull</code>
- <code title="delete /2.0/ai_agents/{agentId}">client.aiStudio.<a href="./src/managers/aiStudio.generated.ts">deleteAiAgentById</a>(agentId, optionalsInput?) -> undefined</code>

# Docgen template

Examples: [docs/docgenTemplate.md](docs/docgenTemplate.md)

Methods:

- <code title="post /2.0/docgen_templates">client.docgenTemplate.<a href="./src/managers/docgenTemplate.generated.ts">createDocgenTemplateV2025R0</a>(requestBody, optionalsInput?) -> DocGenTemplateBaseV2025R0</code>
- <code title="get /2.0/docgen_templates">client.docgenTemplate.<a href="./src/managers/docgenTemplate.generated.ts">getDocgenTemplatesV2025R0</a>(queryParams?, headersInput?, cancellationToken?) -> DocGenTemplatesV2025R0</code>
- <code title="delete /2.0/docgen_templates/{templateId}">client.docgenTemplate.<a href="./src/managers/docgenTemplate.generated.ts">deleteDocgenTemplateByIdV2025R0</a>(templateId, optionalsInput?) -> undefined</code>
- <code title="get /2.0/docgen_templates/{templateId}">client.docgenTemplate.<a href="./src/managers/docgenTemplate.generated.ts">getDocgenTemplateByIdV2025R0</a>(templateId, optionalsInput?) -> DocGenTemplateV2025R0</code>
- <code title="get /2.0/docgen_templates/{templateId}/tags">client.docgenTemplate.<a href="./src/managers/docgenTemplate.generated.ts">getDocgenTemplateTagsV2025R0</a>(templateId, optionalsInput?) -> DocGenTagsV2025R0</code>
- <code title="get /2.0/docgen_template_jobs/{templateId}">client.docgenTemplate.<a href="./src/managers/docgenTemplate.generated.ts">getDocgenTemplateJobByIdV2025R0</a>(templateId, optionalsInput?) -> DocGenJobsV2025R0</code>

# Docgen

Examples: [docs/docgen.md](docs/docgen.md)

Methods:

- <code title="get /2.0/docgen_jobs/{jobId}">client.docgen.<a href="./src/managers/docgen.generated.ts">getDocgenJobByIdV2025R0</a>(jobId, optionalsInput?) -> DocGenJobV2025R0</code>
- <code title="get /2.0/docgen_jobs">client.docgen.<a href="./src/managers/docgen.generated.ts">getDocgenJobsV2025R0</a>(queryParams?, headersInput?, cancellationToken?) -> DocGenJobsFullV2025R0</code>
- <code title="get /2.0/docgen_batch_jobs/{batchId}">client.docgen.<a href="./src/managers/docgen.generated.ts">getDocgenBatchJobByIdV2025R0</a>(batchId, optionalsInput?) -> DocGenJobsV2025R0</code>
- <code title="post /2.0/docgen_batches">client.docgen.<a href="./src/managers/docgen.generated.ts">createDocgenBatchV2025R0</a>(requestBody, optionalsInput?) -> DocGenBatchBaseV2025R0</code>

# Hubs

Examples: [docs/hubs.md](docs/hubs.md)

Methods:

- <code title="get /2.0/hubs">client.hubs.<a href="./src/managers/hubs.generated.ts">getHubsV2025R0</a>(queryParams?, headersInput?, cancellationToken?) -> HubsV2025R0</code>
- <code title="post /2.0/hubs">client.hubs.<a href="./src/managers/hubs.generated.ts">createHubV2025R0</a>(requestBody, optionalsInput?) -> HubV2025R0</code>
- <code title="get /2.0/enterprise_hubs">client.hubs.<a href="./src/managers/hubs.generated.ts">getEnterpriseHubsV2025R0</a>(queryParams?, headersInput?, cancellationToken?) -> HubsV2025R0</code>
- <code title="get /2.0/hubs/{hubId}">client.hubs.<a href="./src/managers/hubs.generated.ts">getHubByIdV2025R0</a>(hubId, optionalsInput?) -> HubV2025R0</code>
- <code title="put /2.0/hubs/{hubId}">client.hubs.<a href="./src/managers/hubs.generated.ts">updateHubByIdV2025R0</a>(hubId, requestBody, optionalsInput?) -> HubV2025R0</code>
- <code title="delete /2.0/hubs/{hubId}">client.hubs.<a href="./src/managers/hubs.generated.ts">deleteHubByIdV2025R0</a>(hubId, optionalsInput?) -> undefined</code>
- <code title="post /2.0/hubs/{hubId}/copy">client.hubs.<a href="./src/managers/hubs.generated.ts">copyHubV2025R0</a>(hubId, requestBody, optionalsInput?) -> HubV2025R0</code>

# Hub collaborations

Examples: [docs/hubCollaborations.md](docs/hubCollaborations.md)

Methods:

- <code title="get /2.0/hub_collaborations">client.hubCollaborations.<a href="./src/managers/hubCollaborations.generated.ts">getHubCollaborationsV2025R0</a>(queryParams, optionalsInput?) -> HubCollaborationsV2025R0</code>
- <code title="post /2.0/hub_collaborations">client.hubCollaborations.<a href="./src/managers/hubCollaborations.generated.ts">createHubCollaborationV2025R0</a>(requestBody, optionalsInput?) -> HubCollaborationV2025R0</code>
- <code title="get /2.0/hub_collaborations/{hubCollaborationId}">client.hubCollaborations.<a href="./src/managers/hubCollaborations.generated.ts">getHubCollaborationByIdV2025R0</a>(hubCollaborationId, optionalsInput?) -> HubCollaborationV2025R0</code>
- <code title="put /2.0/hub_collaborations/{hubCollaborationId}">client.hubCollaborations.<a href="./src/managers/hubCollaborations.generated.ts">updateHubCollaborationByIdV2025R0</a>(hubCollaborationId, requestBody, optionalsInput?) -> HubCollaborationV2025R0</code>
- <code title="delete /2.0/hub_collaborations/{hubCollaborationId}">client.hubCollaborations.<a href="./src/managers/hubCollaborations.generated.ts">deleteHubCollaborationByIdV2025R0</a>(hubCollaborationId, optionalsInput?) -> undefined</code>

# Hub items

Examples: [docs/hubItems.md](docs/hubItems.md)

Methods:

- <code title="get /2.0/hub_items">client.hubItems.<a href="./src/managers/hubItems.generated.ts">getHubItemsV2025R0</a>(queryParams, optionalsInput?) -> HubItemsV2025R0</code>
- <code title="post /2.0/hubs/{hubId}/manage_items">client.hubItems.<a href="./src/managers/hubItems.generated.ts">manageHubItemsV2025R0</a>(hubId, requestBody, optionalsInput?) -> HubItemsManageResponseV2025R0</code>

# Shield lists

Examples: [docs/shieldLists.md](docs/shieldLists.md)

Methods:

- <code title="get /2.0/shield_lists">client.shieldLists.<a href="./src/managers/shieldLists.generated.ts">getShieldListsV2025R0</a>(headersInput?, cancellationToken?) -> ShieldListsV2025R0</code>
- <code title="post /2.0/shield_lists">client.shieldLists.<a href="./src/managers/shieldLists.generated.ts">createShieldListV2025R0</a>(requestBody, optionalsInput?) -> ShieldListV2025R0</code>
- <code title="get /2.0/shield_lists/{shieldListId}">client.shieldLists.<a href="./src/managers/shieldLists.generated.ts">getShieldListByIdV2025R0</a>(shieldListId, optionalsInput?) -> ShieldListV2025R0</code>
- <code title="delete /2.0/shield_lists/{shieldListId}">client.shieldLists.<a href="./src/managers/shieldLists.generated.ts">deleteShieldListByIdV2025R0</a>(shieldListId, optionalsInput?) -> undefined</code>
- <code title="put /2.0/shield_lists/{shieldListId}">client.shieldLists.<a href="./src/managers/shieldLists.generated.ts">updateShieldListByIdV2025R0</a>(shieldListId, requestBody, optionalsInput?) -> ShieldListV2025R0</code>

# Archives

Examples: [docs/archives.md](docs/archives.md)

Methods:

- <code title="get /2.0/archives">client.archives.<a href="./src/managers/archives.generated.ts">getArchivesV2025R0</a>(queryParams?, headersInput?, cancellationToken?) -> ArchivesV2025R0</code>
- <code title="post /2.0/archives">client.archives.<a href="./src/managers/archives.generated.ts">createArchiveV2025R0</a>(requestBody, optionalsInput?) -> ArchiveV2025R0</code>
- <code title="delete /2.0/archives/{archiveId}">client.archives.<a href="./src/managers/archives.generated.ts">deleteArchiveByIdV2025R0</a>(archiveId, optionalsInput?) -> undefined</code>
