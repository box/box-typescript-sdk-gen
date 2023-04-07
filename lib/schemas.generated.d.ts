import { JSON } from "./json.js";
export type PostOAuth2TokenGrantTypeField = "authorization_code" | "refresh_token" | "client_credentials" | "urn:ietf:params:oauth:grant-type:jwt-bearer" | "urn:ietf:params:oauth:grant-type:token-exchange";
export declare function deserializePostOAuth2TokenGrantTypeField(val: JSON): PostOAuth2TokenGrantTypeField;
export declare function serializePostOAuth2TokenGrantTypeField(val: PostOAuth2TokenGrantTypeField): JSON;
export type PostOAuth2TokenSubjectTokenTypeField = "urn:ietf:params:oauth:token-type:access_token";
export declare function deserializePostOAuth2TokenSubjectTokenTypeField(val: JSON): PostOAuth2TokenSubjectTokenTypeField;
export declare function serializePostOAuth2TokenSubjectTokenTypeField(val: PostOAuth2TokenSubjectTokenTypeField): JSON;
export type PostOAuth2TokenActorTokenTypeField = "urn:ietf:params:oauth:token-type:id_token";
export declare function deserializePostOAuth2TokenActorTokenTypeField(val: JSON): PostOAuth2TokenActorTokenTypeField;
export declare function serializePostOAuth2TokenActorTokenTypeField(val: PostOAuth2TokenActorTokenTypeField): JSON;
export type PostOAuth2TokenBoxSubjectTypeField = "enterprise" | "user";
export declare function deserializePostOAuth2TokenBoxSubjectTypeField(val: JSON): PostOAuth2TokenBoxSubjectTypeField;
export declare function serializePostOAuth2TokenBoxSubjectTypeField(val: PostOAuth2TokenBoxSubjectTypeField): JSON;
export interface PostOAuth2Token {
    readonly grantType: PostOAuth2TokenGrantTypeField;
    readonly clientId?: string;
    readonly clientSecret?: string;
    readonly code?: string;
    readonly refreshToken?: string;
    readonly assertion?: string;
    readonly subjectToken?: string;
    readonly subjectTokenType?: PostOAuth2TokenSubjectTokenTypeField;
    readonly actorToken?: string;
    readonly actorTokenType?: PostOAuth2TokenActorTokenTypeField;
    readonly scope?: string;
    readonly resource?: string;
    readonly boxSubjectType?: PostOAuth2TokenBoxSubjectTypeField;
    readonly boxSubjectId?: string;
    readonly boxSharedLink?: string;
}
export declare function deserializePostOAuth2Token(val: JSON): PostOAuth2Token;
export declare function serializePostOAuth2Token(val: PostOAuth2Token): JSON;
export type PostOAuth2TokenRefreshAccessTokenGrantTypeField = "refresh_token";
export declare function deserializePostOAuth2TokenRefreshAccessTokenGrantTypeField(val: JSON): PostOAuth2TokenRefreshAccessTokenGrantTypeField;
export declare function serializePostOAuth2TokenRefreshAccessTokenGrantTypeField(val: PostOAuth2TokenRefreshAccessTokenGrantTypeField): JSON;
export interface PostOAuth2TokenRefreshAccessToken {
    readonly grantType: PostOAuth2TokenRefreshAccessTokenGrantTypeField;
    readonly clientId: string;
    readonly clientSecret: string;
    readonly refreshToken: string;
}
export declare function deserializePostOAuth2TokenRefreshAccessToken(val: JSON): PostOAuth2TokenRefreshAccessToken;
export declare function serializePostOAuth2TokenRefreshAccessToken(val: PostOAuth2TokenRefreshAccessToken): JSON;
export interface PostOAuth2Revoke {
    readonly clientId?: string;
    readonly clientSecret?: string;
    readonly token?: string;
}
export declare function deserializePostOAuth2Revoke(val: JSON): PostOAuth2Revoke;
export declare function serializePostOAuth2Revoke(val: PostOAuth2Revoke): JSON;
export type ZipDownloadRequestItemsFieldTypeField = "file" | "folder.";
export declare function deserializeZipDownloadRequestItemsFieldTypeField(val: JSON): ZipDownloadRequestItemsFieldTypeField;
export declare function serializeZipDownloadRequestItemsFieldTypeField(val: ZipDownloadRequestItemsFieldTypeField): JSON;
export interface ZipDownloadRequestItemsField {
    readonly type: ZipDownloadRequestItemsFieldTypeField;
    readonly id: string;
}
export declare function deserializeZipDownloadRequestItemsField(val: JSON): ZipDownloadRequestItemsField;
export declare function serializeZipDownloadRequestItemsField(val: ZipDownloadRequestItemsField): JSON;
export interface ZipDownloadRequest {
    readonly items: readonly ZipDownloadRequestItemsField[];
    readonly downloadFileName?: string;
}
export declare function deserializeZipDownloadRequest(val: JSON): ZipDownloadRequest;
export declare function serializeZipDownloadRequest(val: ZipDownloadRequest): JSON;
export interface MetadataQueryQueryParamsField {
}
export declare function deserializeMetadataQueryQueryParamsField(val: JSON): MetadataQueryQueryParamsField;
export declare function serializeMetadataQueryQueryParamsField(val: MetadataQueryQueryParamsField): JSON;
export type MetadataQueryOrderByFieldDirectionField = "ASC" | "DESC" | "asc" | "desc";
export declare function deserializeMetadataQueryOrderByFieldDirectionField(val: JSON): MetadataQueryOrderByFieldDirectionField;
export declare function serializeMetadataQueryOrderByFieldDirectionField(val: MetadataQueryOrderByFieldDirectionField): JSON;
export interface MetadataQueryOrderByField {
    readonly fieldKey?: string;
    readonly direction?: MetadataQueryOrderByFieldDirectionField;
}
export declare function deserializeMetadataQueryOrderByField(val: JSON): MetadataQueryOrderByField;
export declare function serializeMetadataQueryOrderByField(val: MetadataQueryOrderByField): JSON;
export interface MetadataQuery {
    readonly from: string;
    readonly query?: string;
    readonly queryParams?: MetadataQueryQueryParamsField;
    readonly ancestorFolderId: string;
    readonly orderBy?: readonly MetadataQueryOrderByField[];
    readonly limit?: number;
    readonly marker?: string;
    readonly fields?: readonly string[];
}
export declare function deserializeMetadataQuery(val: JSON): MetadataQuery;
export declare function serializeMetadataQuery(val: MetadataQuery): JSON;
export type FileRequestUpdateRequestStatusField = "active" | "inactive";
export declare function deserializeFileRequestUpdateRequestStatusField(val: JSON): FileRequestUpdateRequestStatusField;
export declare function serializeFileRequestUpdateRequestStatusField(val: FileRequestUpdateRequestStatusField): JSON;
export interface FileRequestUpdateRequest {
    readonly title?: string;
    readonly description?: string;
    readonly status?: FileRequestUpdateRequestStatusField;
    readonly isEmailRequired?: boolean;
    readonly isDescriptionRequired?: boolean;
    readonly expiresAt?: string;
}
export declare function deserializeFileRequestUpdateRequest(val: JSON): FileRequestUpdateRequest;
export declare function serializeFileRequestUpdateRequest(val: FileRequestUpdateRequest): JSON;
export type FileRequestCopyRequestFolderFieldTypeField = "folder";
export declare function deserializeFileRequestCopyRequestFolderFieldTypeField(val: JSON): FileRequestCopyRequestFolderFieldTypeField;
export declare function serializeFileRequestCopyRequestFolderFieldTypeField(val: FileRequestCopyRequestFolderFieldTypeField): JSON;
export interface FileRequestCopyRequestFolderField {
    readonly type?: FileRequestCopyRequestFolderFieldTypeField;
    readonly id: string;
}
export declare function deserializeFileRequestCopyRequestFolderField(val: JSON): FileRequestCopyRequestFolderField;
export declare function serializeFileRequestCopyRequestFolderField(val: FileRequestCopyRequestFolderField): JSON;
export type FileRequestCopyRequest = FileRequestUpdateRequest & {
    /**
     * The folder to associate the new file request to. */
    readonly folder: FileRequestCopyRequestFolderField;
};
export declare function deserializeFileRequestCopyRequest(val: JSON): FileRequestCopyRequest;
export declare function serializeFileRequestCopyRequest(val: FileRequestCopyRequest): JSON;
export type SignRequestCreateRequestSignatureColorField = "blue" | "black" | "red";
export declare function deserializeSignRequestCreateRequestSignatureColorField(val: JSON): SignRequestCreateRequestSignatureColorField;
export declare function serializeSignRequestCreateRequestSignatureColorField(val: SignRequestCreateRequestSignatureColorField): JSON;
export type ClientErrorTypeField = "error";
export declare function deserializeClientErrorTypeField(val: JSON): ClientErrorTypeField;
export declare function serializeClientErrorTypeField(val: ClientErrorTypeField): JSON;
export type ClientErrorCodeField = "created" | "accepted" | "no_content" | "redirect" | "not_modified" | "bad_request" | "unauthorized" | "forbidden" | "not_found" | "method_not_allowed" | "conflict" | "precondition_failed" | "too_many_requests" | "internal_server_error" | "unavailable" | "item_name_invalid" | "insufficient_scope";
export declare function deserializeClientErrorCodeField(val: JSON): ClientErrorCodeField;
export declare function serializeClientErrorCodeField(val: ClientErrorCodeField): JSON;
export interface ClientErrorContextInfoField {
    readonly message?: string;
}
export declare function deserializeClientErrorContextInfoField(val: JSON): ClientErrorContextInfoField;
export declare function serializeClientErrorContextInfoField(val: ClientErrorContextInfoField): JSON;
export interface ClientError {
    readonly type?: ClientErrorTypeField;
    readonly status?: number;
    readonly code?: ClientErrorCodeField;
    readonly message?: string;
    readonly contextInfo?: ClientErrorContextInfoField;
    readonly helpUrl?: string;
    readonly requestId?: string;
}
export declare function deserializeClientError(val: JSON): ClientError;
export declare function serializeClientError(val: ClientError): JSON;
export interface OAuth2Error {
    readonly error?: string;
    readonly errorDescription?: string;
}
export declare function deserializeOAuth2Error(val: JSON): OAuth2Error;
export declare function serializeOAuth2Error(val: OAuth2Error): JSON;
export type SkillInvocationTypeField = "skill_invocation";
export declare function deserializeSkillInvocationTypeField(val: JSON): SkillInvocationTypeField;
export declare function serializeSkillInvocationTypeField(val: SkillInvocationTypeField): JSON;
export type SkillInvocationSkillFieldTypeField = "skill";
export declare function deserializeSkillInvocationSkillFieldTypeField(val: JSON): SkillInvocationSkillFieldTypeField;
export declare function serializeSkillInvocationSkillFieldTypeField(val: SkillInvocationSkillFieldTypeField): JSON;
export interface SkillInvocationSkillField {
    readonly id?: string;
    readonly type?: SkillInvocationSkillFieldTypeField;
    readonly name?: string;
    readonly apiKey?: string;
}
export declare function deserializeSkillInvocationSkillField(val: JSON): SkillInvocationSkillField;
export declare function serializeSkillInvocationSkillField(val: SkillInvocationSkillField): JSON;
export type SkillInvocationTokenFieldReadFieldTokenTypeField = "bearer";
export declare function deserializeSkillInvocationTokenFieldReadFieldTokenTypeField(val: JSON): SkillInvocationTokenFieldReadFieldTokenTypeField;
export declare function serializeSkillInvocationTokenFieldReadFieldTokenTypeField(val: SkillInvocationTokenFieldReadFieldTokenTypeField): JSON;
export interface SkillInvocationTokenFieldReadField {
    readonly accessToken?: string;
    readonly expiresIn?: number;
    readonly tokenType?: SkillInvocationTokenFieldReadFieldTokenTypeField;
    readonly restrictedTo?: string;
}
export declare function deserializeSkillInvocationTokenFieldReadField(val: JSON): SkillInvocationTokenFieldReadField;
export declare function serializeSkillInvocationTokenFieldReadField(val: SkillInvocationTokenFieldReadField): JSON;
export type SkillInvocationTokenFieldWriteFieldTokenTypeField = "bearer";
export declare function deserializeSkillInvocationTokenFieldWriteFieldTokenTypeField(val: JSON): SkillInvocationTokenFieldWriteFieldTokenTypeField;
export declare function serializeSkillInvocationTokenFieldWriteFieldTokenTypeField(val: SkillInvocationTokenFieldWriteFieldTokenTypeField): JSON;
export interface SkillInvocationTokenFieldWriteField {
    readonly accessToken?: string;
    readonly expiresIn?: number;
    readonly tokenType?: SkillInvocationTokenFieldWriteFieldTokenTypeField;
    readonly restrictedTo?: string;
}
export declare function deserializeSkillInvocationTokenFieldWriteField(val: JSON): SkillInvocationTokenFieldWriteField;
export declare function serializeSkillInvocationTokenFieldWriteField(val: SkillInvocationTokenFieldWriteField): JSON;
export interface SkillInvocationTokenField {
    readonly read?: SkillInvocationTokenFieldReadField;
    readonly write?: SkillInvocationTokenFieldWriteField;
}
export declare function deserializeSkillInvocationTokenField(val: JSON): SkillInvocationTokenField;
export declare function serializeSkillInvocationTokenField(val: SkillInvocationTokenField): JSON;
export type SkillInvocationStatusFieldStateField = "invoked" | "processing" | "success" | "transient_failure" | "permanent_failure";
export declare function deserializeSkillInvocationStatusFieldStateField(val: JSON): SkillInvocationStatusFieldStateField;
export declare function serializeSkillInvocationStatusFieldStateField(val: SkillInvocationStatusFieldStateField): JSON;
export interface SkillInvocationStatusField {
    readonly state?: SkillInvocationStatusFieldStateField;
    readonly message?: string;
    readonly errorCode?: string;
    readonly additionalInfo?: string;
}
export declare function deserializeSkillInvocationStatusField(val: JSON): SkillInvocationStatusField;
export declare function serializeSkillInvocationStatusField(val: SkillInvocationStatusField): JSON;
export type SkillInvocationEnterpriseFieldTypeField = "enterprise";
export declare function deserializeSkillInvocationEnterpriseFieldTypeField(val: JSON): SkillInvocationEnterpriseFieldTypeField;
export declare function serializeSkillInvocationEnterpriseFieldTypeField(val: SkillInvocationEnterpriseFieldTypeField): JSON;
export interface SkillInvocationEnterpriseField {
    readonly id?: string;
    readonly type?: SkillInvocationEnterpriseFieldTypeField;
    readonly name?: string;
}
export declare function deserializeSkillInvocationEnterpriseField(val: JSON): SkillInvocationEnterpriseField;
export declare function serializeSkillInvocationEnterpriseField(val: SkillInvocationEnterpriseField): JSON;
export type WebhookInvocationTypeField = "webhook_event";
export declare function deserializeWebhookInvocationTypeField(val: JSON): WebhookInvocationTypeField;
export declare function serializeWebhookInvocationTypeField(val: WebhookInvocationTypeField): JSON;
export type WebhookInvocationTriggerField = "FILE.UPLOADED" | "FILE.PREVIEWED" | "FILE.DOWNLOADED" | "FILE.TRASHED" | "FILE.DELETED" | "FILE.RESTORED" | "FILE.COPIED" | "FILE.MOVED" | "FILE.LOCKED" | "FILE.UNLOCKED" | "FILE.RENAMED" | "COMMENT.CREATED" | "COMMENT.UPDATED" | "COMMENT.DELETED" | "TASK_ASSIGNMENT.CREATED" | "TASK_ASSIGNMENT.UPDATED" | "METADATA_INSTANCE.CREATED" | "METADATA_INSTANCE.UPDATED" | "METADATA_INSTANCE.DELETED" | "FOLDER.CREATED" | "FOLDER.RENAMED" | "FOLDER.DOWNLOADED" | "FOLDER.RESTORED" | "FOLDER.DELETED" | "FOLDER.COPIED" | "FOLDER.MOVED" | "FOLDER.TRASHED" | "WEBHOOK.DELETED" | "COLLABORATION.CREATED" | "COLLABORATION.ACCEPTED" | "COLLABORATION.REJECTED" | "COLLABORATION.REMOVED" | "COLLABORATION.UPDATED" | "SHARED_LINK.DELETED" | "SHARED_LINK.CREATED" | "SHARED_LINK.UPDATED" | "SIGN_REQUEST.COMPLETED" | "SIGN_REQUEST.DECLINED" | "SIGN_REQUEST.EXPIRED";
export declare function deserializeWebhookInvocationTriggerField(val: JSON): WebhookInvocationTriggerField;
export declare function serializeWebhookInvocationTriggerField(val: WebhookInvocationTriggerField): JSON;
export type AccessTokenTokenTypeField = "bearer";
export declare function deserializeAccessTokenTokenTypeField(val: JSON): AccessTokenTokenTypeField;
export declare function serializeAccessTokenTokenTypeField(val: AccessTokenTokenTypeField): JSON;
export type AccessTokenIssuedTokenTypeField = "urn:ietf:params:oauth:token-type:access_token";
export declare function deserializeAccessTokenIssuedTokenTypeField(val: JSON): AccessTokenIssuedTokenTypeField;
export declare function serializeAccessTokenIssuedTokenTypeField(val: AccessTokenIssuedTokenTypeField): JSON;
export type ClassificationTemplateField = "securityClassification-6VMVochwUWo";
export declare function deserializeClassificationTemplateField(val: JSON): ClassificationTemplateField;
export declare function serializeClassificationTemplateField(val: ClassificationTemplateField): JSON;
export interface Classification {
    readonly boxSecurityClassificationKey?: string;
    readonly parent?: string;
    readonly template?: ClassificationTemplateField;
    readonly scope?: string;
    readonly version?: number;
    readonly type?: string;
    readonly typeVersion?: number;
    readonly canEdit?: boolean;
}
export declare function deserializeClassification(val: JSON): Classification;
export declare function serializeClassification(val: Classification): JSON;
export type ClassificationTemplateTypeField = "metadata_template";
export declare function deserializeClassificationTemplateTypeField(val: JSON): ClassificationTemplateTypeField;
export declare function serializeClassificationTemplateTypeField(val: ClassificationTemplateTypeField): JSON;
export type ClassificationTemplateTemplateKeyField = "securityClassification-6VMVochwUWo";
export declare function deserializeClassificationTemplateTemplateKeyField(val: JSON): ClassificationTemplateTemplateKeyField;
export declare function serializeClassificationTemplateTemplateKeyField(val: ClassificationTemplateTemplateKeyField): JSON;
export type ClassificationTemplateDisplayNameField = "Classification";
export declare function deserializeClassificationTemplateDisplayNameField(val: JSON): ClassificationTemplateDisplayNameField;
export declare function serializeClassificationTemplateDisplayNameField(val: ClassificationTemplateDisplayNameField): JSON;
export type ClassificationTemplateFieldsFieldTypeField = "enum";
export declare function deserializeClassificationTemplateFieldsFieldTypeField(val: JSON): ClassificationTemplateFieldsFieldTypeField;
export declare function serializeClassificationTemplateFieldsFieldTypeField(val: ClassificationTemplateFieldsFieldTypeField): JSON;
export type ClassificationTemplateFieldsFieldKeyField = "Box__Security__Classification__Key";
export declare function deserializeClassificationTemplateFieldsFieldKeyField(val: JSON): ClassificationTemplateFieldsFieldKeyField;
export declare function serializeClassificationTemplateFieldsFieldKeyField(val: ClassificationTemplateFieldsFieldKeyField): JSON;
export type ClassificationTemplateFieldsFieldDisplayNameField = "Classification";
export declare function deserializeClassificationTemplateFieldsFieldDisplayNameField(val: JSON): ClassificationTemplateFieldsFieldDisplayNameField;
export declare function serializeClassificationTemplateFieldsFieldDisplayNameField(val: ClassificationTemplateFieldsFieldDisplayNameField): JSON;
export interface ClassificationTemplateFieldsFieldOptionsFieldStaticConfigFieldClassificationField {
    readonly classificationDefinition?: string;
    readonly colorId?: number;
}
export declare function deserializeClassificationTemplateFieldsFieldOptionsFieldStaticConfigFieldClassificationField(val: JSON): ClassificationTemplateFieldsFieldOptionsFieldStaticConfigFieldClassificationField;
export declare function serializeClassificationTemplateFieldsFieldOptionsFieldStaticConfigFieldClassificationField(val: ClassificationTemplateFieldsFieldOptionsFieldStaticConfigFieldClassificationField): JSON;
export interface ClassificationTemplateFieldsFieldOptionsFieldStaticConfigField {
    readonly classification?: ClassificationTemplateFieldsFieldOptionsFieldStaticConfigFieldClassificationField;
}
export declare function deserializeClassificationTemplateFieldsFieldOptionsFieldStaticConfigField(val: JSON): ClassificationTemplateFieldsFieldOptionsFieldStaticConfigField;
export declare function serializeClassificationTemplateFieldsFieldOptionsFieldStaticConfigField(val: ClassificationTemplateFieldsFieldOptionsFieldStaticConfigField): JSON;
export interface ClassificationTemplateFieldsFieldOptionsField {
    readonly id?: string;
    readonly key?: string;
    readonly staticConfig?: ClassificationTemplateFieldsFieldOptionsFieldStaticConfigField;
}
export declare function deserializeClassificationTemplateFieldsFieldOptionsField(val: JSON): ClassificationTemplateFieldsFieldOptionsField;
export declare function serializeClassificationTemplateFieldsFieldOptionsField(val: ClassificationTemplateFieldsFieldOptionsField): JSON;
export interface ClassificationTemplateFieldsField {
    readonly id?: string;
    readonly type?: ClassificationTemplateFieldsFieldTypeField;
    readonly key?: ClassificationTemplateFieldsFieldKeyField;
    readonly displayName?: ClassificationTemplateFieldsFieldDisplayNameField;
    readonly hidden?: boolean;
    readonly options?: readonly ClassificationTemplateFieldsFieldOptionsField[];
}
export declare function deserializeClassificationTemplateFieldsField(val: JSON): ClassificationTemplateFieldsField;
export declare function serializeClassificationTemplateFieldsField(val: ClassificationTemplateFieldsField): JSON;
export interface ClassificationTemplate {
    readonly id?: string;
    readonly type: ClassificationTemplateTypeField;
    readonly scope?: string;
    readonly templateKey?: ClassificationTemplateTemplateKeyField;
    readonly displayName?: ClassificationTemplateDisplayNameField;
    readonly hidden?: boolean;
    readonly copyInstanceOnItemCopy?: boolean;
    readonly fields?: readonly ClassificationTemplateFieldsField[];
}
export declare function deserializeClassificationTemplate(val: JSON): ClassificationTemplate;
export declare function serializeClassificationTemplate(val: ClassificationTemplate): JSON;
export type CollaborationTypeField = "collaboration";
export declare function deserializeCollaborationTypeField(val: JSON): CollaborationTypeField;
export declare function serializeCollaborationTypeField(val: CollaborationTypeField): JSON;
export type CollaborationRoleField = "editor" | "viewer" | "previewer" | "uploader" | "previewer uploader" | "viewer uploader" | "co-owner" | "owner";
export declare function deserializeCollaborationRoleField(val: JSON): CollaborationRoleField;
export declare function serializeCollaborationRoleField(val: CollaborationRoleField): JSON;
export type CollaborationStatusField = "accepted" | "pending" | "rejected";
export declare function deserializeCollaborationStatusField(val: JSON): CollaborationStatusField;
export declare function serializeCollaborationStatusField(val: CollaborationStatusField): JSON;
export interface CollaborationAcceptanceRequirementsStatusFieldStrongPasswordRequirementField {
    readonly enterpriseHasStrongPasswordRequiredForExternalUsers?: boolean;
    readonly userHasStrongPassword?: boolean;
}
export declare function deserializeCollaborationAcceptanceRequirementsStatusFieldStrongPasswordRequirementField(val: JSON): CollaborationAcceptanceRequirementsStatusFieldStrongPasswordRequirementField;
export declare function serializeCollaborationAcceptanceRequirementsStatusFieldStrongPasswordRequirementField(val: CollaborationAcceptanceRequirementsStatusFieldStrongPasswordRequirementField): JSON;
export interface CollaborationAcceptanceRequirementsStatusFieldTwoFactorAuthenticationRequirementField {
    readonly enterpriseHasTwoFactorAuthEnabled?: boolean;
    readonly userHasTwoFactorAuthenticationEnabled?: boolean;
}
export declare function deserializeCollaborationAcceptanceRequirementsStatusFieldTwoFactorAuthenticationRequirementField(val: JSON): CollaborationAcceptanceRequirementsStatusFieldTwoFactorAuthenticationRequirementField;
export declare function serializeCollaborationAcceptanceRequirementsStatusFieldTwoFactorAuthenticationRequirementField(val: CollaborationAcceptanceRequirementsStatusFieldTwoFactorAuthenticationRequirementField): JSON;
export type CollaborationsOrderFieldDirectionField = "ASC" | "DESC";
export declare function deserializeCollaborationsOrderFieldDirectionField(val: JSON): CollaborationsOrderFieldDirectionField;
export declare function serializeCollaborationsOrderFieldDirectionField(val: CollaborationsOrderFieldDirectionField): JSON;
export interface CollaborationsOrderField {
    readonly by?: string;
    readonly direction?: CollaborationsOrderFieldDirectionField;
}
export declare function deserializeCollaborationsOrderField(val: JSON): CollaborationsOrderField;
export declare function serializeCollaborationsOrderField(val: CollaborationsOrderField): JSON;
export type CollaborationAllowlistEntryTypeField = "collaboration_whitelist_entry";
export declare function deserializeCollaborationAllowlistEntryTypeField(val: JSON): CollaborationAllowlistEntryTypeField;
export declare function serializeCollaborationAllowlistEntryTypeField(val: CollaborationAllowlistEntryTypeField): JSON;
export type CollaborationAllowlistEntryDirectionField = "inbound" | "outbound" | "both";
export declare function deserializeCollaborationAllowlistEntryDirectionField(val: JSON): CollaborationAllowlistEntryDirectionField;
export declare function serializeCollaborationAllowlistEntryDirectionField(val: CollaborationAllowlistEntryDirectionField): JSON;
export type CollaborationAllowlistEntryEnterpriseFieldTypeField = "enterprise";
export declare function deserializeCollaborationAllowlistEntryEnterpriseFieldTypeField(val: JSON): CollaborationAllowlistEntryEnterpriseFieldTypeField;
export declare function serializeCollaborationAllowlistEntryEnterpriseFieldTypeField(val: CollaborationAllowlistEntryEnterpriseFieldTypeField): JSON;
export interface CollaborationAllowlistEntryEnterpriseField {
    readonly id?: string;
    readonly type?: CollaborationAllowlistEntryEnterpriseFieldTypeField;
    readonly name?: string;
}
export declare function deserializeCollaborationAllowlistEntryEnterpriseField(val: JSON): CollaborationAllowlistEntryEnterpriseField;
export declare function serializeCollaborationAllowlistEntryEnterpriseField(val: CollaborationAllowlistEntryEnterpriseField): JSON;
export interface CollaborationAllowlistEntry {
    readonly id?: string;
    readonly type?: CollaborationAllowlistEntryTypeField;
    readonly domain?: string;
    readonly direction?: CollaborationAllowlistEntryDirectionField;
    readonly enterprise?: CollaborationAllowlistEntryEnterpriseField;
    readonly createdAt?: string;
}
export declare function deserializeCollaborationAllowlistEntry(val: JSON): CollaborationAllowlistEntry;
export declare function serializeCollaborationAllowlistEntry(val: CollaborationAllowlistEntry): JSON;
export interface CollaborationAllowlistEntries {
    readonly limit?: number;
    readonly nextMarker?: number;
    readonly prevMarker?: number;
    readonly entries?: readonly CollaborationAllowlistEntry[];
}
export declare function deserializeCollaborationAllowlistEntries(val: JSON): CollaborationAllowlistEntries;
export declare function serializeCollaborationAllowlistEntries(val: CollaborationAllowlistEntries): JSON;
export type CollaborationAllowlistExemptTargetTypeField = "collaboration_whitelist";
export declare function deserializeCollaborationAllowlistExemptTargetTypeField(val: JSON): CollaborationAllowlistExemptTargetTypeField;
export declare function serializeCollaborationAllowlistExemptTargetTypeField(val: CollaborationAllowlistExemptTargetTypeField): JSON;
export type CollaborationAllowlistExemptTargetEnterpriseFieldTypeField = "enterprise";
export declare function deserializeCollaborationAllowlistExemptTargetEnterpriseFieldTypeField(val: JSON): CollaborationAllowlistExemptTargetEnterpriseFieldTypeField;
export declare function serializeCollaborationAllowlistExemptTargetEnterpriseFieldTypeField(val: CollaborationAllowlistExemptTargetEnterpriseFieldTypeField): JSON;
export interface CollaborationAllowlistExemptTargetEnterpriseField {
    readonly id?: string;
    readonly type?: CollaborationAllowlistExemptTargetEnterpriseFieldTypeField;
    readonly name?: string;
}
export declare function deserializeCollaborationAllowlistExemptTargetEnterpriseField(val: JSON): CollaborationAllowlistExemptTargetEnterpriseField;
export declare function serializeCollaborationAllowlistExemptTargetEnterpriseField(val: CollaborationAllowlistExemptTargetEnterpriseField): JSON;
export type CollaborationAllowlistExemptTargetUserFieldTypeField = "enterprise";
export declare function deserializeCollaborationAllowlistExemptTargetUserFieldTypeField(val: JSON): CollaborationAllowlistExemptTargetUserFieldTypeField;
export declare function serializeCollaborationAllowlistExemptTargetUserFieldTypeField(val: CollaborationAllowlistExemptTargetUserFieldTypeField): JSON;
export interface CollaborationAllowlistExemptTargetUserField {
    readonly id?: string;
    readonly type?: CollaborationAllowlistExemptTargetUserFieldTypeField;
    readonly name?: string;
}
export declare function deserializeCollaborationAllowlistExemptTargetUserField(val: JSON): CollaborationAllowlistExemptTargetUserField;
export declare function serializeCollaborationAllowlistExemptTargetUserField(val: CollaborationAllowlistExemptTargetUserField): JSON;
export interface CollaborationAllowlistExemptTarget {
    readonly id?: string;
    readonly type?: CollaborationAllowlistExemptTargetTypeField;
    readonly enterprise?: CollaborationAllowlistExemptTargetEnterpriseField;
    readonly user?: CollaborationAllowlistExemptTargetUserField;
    readonly createdAt?: string;
    readonly modifiedAt?: string;
}
export declare function deserializeCollaborationAllowlistExemptTarget(val: JSON): CollaborationAllowlistExemptTarget;
export declare function serializeCollaborationAllowlistExemptTarget(val: CollaborationAllowlistExemptTarget): JSON;
export interface CollaborationAllowlistExemptTargets {
    readonly limit?: number;
    readonly nextMarker?: number;
    readonly prevMarker?: number;
    readonly entries?: readonly CollaborationAllowlistExemptTarget[];
}
export declare function deserializeCollaborationAllowlistExemptTargets(val: JSON): CollaborationAllowlistExemptTargets;
export declare function serializeCollaborationAllowlistExemptTargets(val: CollaborationAllowlistExemptTargets): JSON;
export type CollectionTypeField = "collection";
export declare function deserializeCollectionTypeField(val: JSON): CollectionTypeField;
export declare function serializeCollectionTypeField(val: CollectionTypeField): JSON;
export type CollectionNameField = "Favorites";
export declare function deserializeCollectionNameField(val: JSON): CollectionNameField;
export declare function serializeCollectionNameField(val: CollectionNameField): JSON;
export type CollectionCollectionTypeField = "favorites";
export declare function deserializeCollectionCollectionTypeField(val: JSON): CollectionCollectionTypeField;
export declare function serializeCollectionCollectionTypeField(val: CollectionCollectionTypeField): JSON;
export interface Collection {
    readonly id?: string;
    readonly type?: CollectionTypeField;
    readonly name?: CollectionNameField;
    readonly collectionType?: CollectionCollectionTypeField;
}
export declare function deserializeCollection(val: JSON): Collection;
export declare function serializeCollection(val: Collection): JSON;
export type CollectionsOrderFieldDirectionField = "ASC" | "DESC";
export declare function deserializeCollectionsOrderFieldDirectionField(val: JSON): CollectionsOrderFieldDirectionField;
export declare function serializeCollectionsOrderFieldDirectionField(val: CollectionsOrderFieldDirectionField): JSON;
export interface CollectionsOrderField {
    readonly by?: string;
    readonly direction?: CollectionsOrderFieldDirectionField;
}
export declare function deserializeCollectionsOrderField(val: JSON): CollectionsOrderField;
export declare function serializeCollectionsOrderField(val: CollectionsOrderField): JSON;
export interface Collections {
    readonly totalCount?: number;
    readonly limit?: number;
    readonly offset?: number;
    readonly order?: readonly CollectionsOrderField[];
    readonly entries?: readonly Collection[];
}
export declare function deserializeCollections(val: JSON): Collections;
export declare function serializeCollections(val: Collections): JSON;
export interface CommentItemField {
    readonly id?: string;
    readonly type?: string;
}
export declare function deserializeCommentItemField(val: JSON): CommentItemField;
export declare function serializeCommentItemField(val: CommentItemField): JSON;
export type CommentsOrderFieldDirectionField = "ASC" | "DESC";
export declare function deserializeCommentsOrderFieldDirectionField(val: JSON): CommentsOrderFieldDirectionField;
export declare function serializeCommentsOrderFieldDirectionField(val: CommentsOrderFieldDirectionField): JSON;
export interface CommentsOrderField {
    readonly by?: string;
    readonly direction?: CommentsOrderFieldDirectionField;
}
export declare function deserializeCommentsOrderField(val: JSON): CommentsOrderField;
export declare function serializeCommentsOrderField(val: CommentsOrderField): JSON;
export type CommentBaseTypeField = "comment";
export declare function deserializeCommentBaseTypeField(val: JSON): CommentBaseTypeField;
export declare function serializeCommentBaseTypeField(val: CommentBaseTypeField): JSON;
export interface CommentBase {
    readonly id?: string;
    readonly type?: CommentBaseTypeField;
}
export declare function deserializeCommentBase(val: JSON): CommentBase;
export declare function serializeCommentBase(val: CommentBase): JSON;
export type DevicePinnerTypeField = "device_pinner";
export declare function deserializeDevicePinnerTypeField(val: JSON): DevicePinnerTypeField;
export declare function serializeDevicePinnerTypeField(val: DevicePinnerTypeField): JSON;
export type DevicePinnersOrderFieldByField = "id";
export declare function deserializeDevicePinnersOrderFieldByField(val: JSON): DevicePinnersOrderFieldByField;
export declare function serializeDevicePinnersOrderFieldByField(val: DevicePinnersOrderFieldByField): JSON;
export type DevicePinnersOrderFieldDirectionField = "asc" | "desc";
export declare function deserializeDevicePinnersOrderFieldDirectionField(val: JSON): DevicePinnersOrderFieldDirectionField;
export declare function serializeDevicePinnersOrderFieldDirectionField(val: DevicePinnersOrderFieldDirectionField): JSON;
export interface DevicePinnersOrderField {
    readonly by?: DevicePinnersOrderFieldByField;
    readonly direction?: DevicePinnersOrderFieldDirectionField;
}
export declare function deserializeDevicePinnersOrderField(val: JSON): DevicePinnersOrderField;
export declare function serializeDevicePinnersOrderField(val: DevicePinnersOrderField): JSON;
export type EmailAliasTypeField = "email_alias";
export declare function deserializeEmailAliasTypeField(val: JSON): EmailAliasTypeField;
export declare function serializeEmailAliasTypeField(val: EmailAliasTypeField): JSON;
export interface EmailAlias {
    readonly id?: string;
    readonly type?: EmailAliasTypeField;
    readonly email?: string;
    readonly isConfirmed?: boolean;
}
export declare function deserializeEmailAlias(val: JSON): EmailAlias;
export declare function serializeEmailAlias(val: EmailAlias): JSON;
export interface EmailAliases {
    readonly totalCount?: number;
    readonly entries?: readonly EmailAlias[];
}
export declare function deserializeEmailAliases(val: JSON): EmailAliases;
export declare function serializeEmailAliases(val: EmailAliases): JSON;
export type EnterpriseBaseTypeField = "enterprise";
export declare function deserializeEnterpriseBaseTypeField(val: JSON): EnterpriseBaseTypeField;
export declare function serializeEnterpriseBaseTypeField(val: EnterpriseBaseTypeField): JSON;
export interface EnterpriseBase {
    readonly id?: string;
    readonly type?: EnterpriseBaseTypeField;
}
export declare function deserializeEnterpriseBase(val: JSON): EnterpriseBase;
export declare function serializeEnterpriseBase(val: EnterpriseBase): JSON;
export type EventEventTypeField = "ACCESS_GRANTED" | "ACCESS_REVOKED" | "ADD_DEVICE_ASSOCIATION" | "ADD_LOGIN_ACTIVITY_DEVICE" | "ADMIN_LOGIN" | "APPLICATION_CREATED" | "APPLICATION_PUBLIC_KEY_ADDED" | "APPLICATION_PUBLIC_KEY_DELETED" | "CHANGE_ADMIN_ROLE" | "CHANGE_FOLDER_PERMISSION" | "COLLABORATION_ACCEPT" | "COLLABORATION_EXPIRATION" | "COLLABORATION_INVITE" | "COLLABORATION_REMOVE" | "COLLABORATION_ROLE_CHANGE" | "COLLAB_ADD_COLLABORATOR" | "COLLAB_INVITE_COLLABORATOR" | "COLLAB_REMOVE_COLLABORATOR" | "COLLAB_ROLE_CHANGE" | "COMMENT_CREATE" | "COMMENT_DELETE" | "CONTENT_ACCESS" | "CONTENT_WORKFLOW_ABNORMAL_DOWNLOAD_ACTIVITY" | "CONTENT_WORKFLOW_AUTOMATION_ADD" | "CONTENT_WORKFLOW_AUTOMATION_DELETE" | "CONTENT_WORKFLOW_POLICY_ADD" | "CONTENT_WORKFLOW_SHARING_POLICY_VIOLATION" | "CONTENT_WORKFLOW_UPLOAD_POLICY_VIOLATION" | "COPY" | "DATA_RETENTION_CREATE_RETENTION" | "DATA_RETENTION_REMOVE_RETENTION" | "DELETE" | "DELETE_USER" | "DEVICE_TRUST_CHECK_FAILED" | "DOWNLOAD" | "EDIT" | "EDIT_USER" | "EMAIL_ALIAS_CONFIRM" | "EMAIL_ALIAS_REMOVE" | "ENABLE_TWO_FACTOR_AUTH" | "ENTERPRISE_APP_AUTHORIZATION_UPDATE" | "FAILED_LOGIN" | "FILE_MARKED_MALICIOUS" | "FILE_WATERMARKED_DOWNLOAD" | "GROUP_ADD_ITEM" | "GROUP_ADD_USER" | "GROUP_CREATION" | "GROUP_DELETION" | "GROUP_EDITED" | "GROUP_REMOVE_ITEM" | "GROUP_REMOVE_USER" | "ITEM_COPY" | "ITEM_CREATE" | "ITEM_DOWNLOAD" | "ITEM_MAKE_CURRENT_VERSION" | "ITEM_MODIFY" | "ITEM_MOVE" | "ITEM_OPEN" | "ITEM_PREVIEW" | "ITEM_RENAME" | "ITEM_SHARED" | "ITEM_SHARED_CREATE" | "ITEM_SHARED_UNSHARE" | "ITEM_SHARED_UPDATE" | "ITEM_SYNC" | "ITEM_TRASH" | "ITEM_UNDELETE_VIA_TRASH" | "ITEM_UNSYNC" | "ITEM_UPLOAD" | "LEGAL_HOLD_ASSIGNMENT_CREATE" | "LEGAL_HOLD_ASSIGNMENT_DELETE" | "LEGAL_HOLD_POLICY_CREATE" | "LEGAL_HOLD_POLICY_DELETE" | "LEGAL_HOLD_POLICY_UPDATE" | "LOCK" | "LOCK_CREATE" | "LOCK_DESTROY" | "LOGIN" | "MASTER_INVITE_ACCEPT" | "MASTER_INVITE_REJECT" | "METADATA_INSTANCE_CREATE" | "METADATA_INSTANCE_DELETE" | "METADATA_INSTANCE_UPDATE" | "METADATA_TEMPLATE_CREATE" | "METADATA_TEMPLATE_DELETE" | "METADATA_TEMPLATE_UPDATE" | "MOVE" | "NEW_USER" | "PREVIEW" | "REMOVE_DEVICE_ASSOCIATION" | "REMOVE_LOGIN_ACTIVITY_DEVICE" | "RENAME" | "RETENTION_POLICY_ASSIGNMENT_ADD" | "SHARE" | "SHARE_EXPIRATION" | "SHIELD_ALERT" | "SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED" | "SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED_MISSING_JUSTIFICATION" | "SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED" | "SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED_MISSING_JUSTIFICATION" | "SHIELD_JUSTIFICATION_APPROVAL" | "SIGN_DOCUMENT_ASSIGNED" | "SIGN_DOCUMENT_CANCELLED" | "SIGN_DOCUMENT_COMPLETED" | "SIGN_DOCUMENT_CONVERTED" | "SIGN_DOCUMENT_CREATED" | "SIGN_DOCUMENT_DECLINED" | "SIGN_DOCUMENT_EXPIRED" | "SIGN_DOCUMENT_SIGNED" | "SIGN_DOCUMENT_VIEWED_BY_SIGNED" | "SIGNER_DOWNLOADED" | "SIGNER_FORWARDED" | "STORAGE_EXPIRATION" | "TAG_ITEM_CREATE" | "TASK_ASSIGNMENT_CREATE" | "TASK_ASSIGNMENT_DELETE" | "TASK_ASSIGNMENT_UPDATE" | "TASK_CREATE" | "TASK_UPDATE" | "TERMS_OF_SERVICE_ACCEPT" | "TERMS_OF_SERVICE_REJECT" | "UNDELETE" | "UNLOCK" | "UNSHARE" | "UPDATE_COLLABORATION_EXPIRATION" | "UPDATE_SHARE_EXPIRATION" | "UPLOAD" | "USER_AUTHENTICATE_OAUTH2_ACCESS_TOKEN_CREATE" | "WATERMARK_LABEL_CREATE" | "WATERMARK_LABEL_DELETE";
export declare function deserializeEventEventTypeField(val: JSON): EventEventTypeField;
export declare function serializeEventEventTypeField(val: EventEventTypeField): JSON;
export interface EventAdditionalDetailsField {
}
export declare function deserializeEventAdditionalDetailsField(val: JSON): EventAdditionalDetailsField;
export declare function serializeEventAdditionalDetailsField(val: EventAdditionalDetailsField): JSON;
export type FileSharedLinkFieldAccessField = "open" | "company" | "collaborators";
export declare function deserializeFileSharedLinkFieldAccessField(val: JSON): FileSharedLinkFieldAccessField;
export declare function serializeFileSharedLinkFieldAccessField(val: FileSharedLinkFieldAccessField): JSON;
export type FileSharedLinkFieldEffectiveAccessField = "open" | "company" | "collaborators";
export declare function deserializeFileSharedLinkFieldEffectiveAccessField(val: JSON): FileSharedLinkFieldEffectiveAccessField;
export declare function serializeFileSharedLinkFieldEffectiveAccessField(val: FileSharedLinkFieldEffectiveAccessField): JSON;
export type FileSharedLinkFieldEffectivePermissionField = "can_edit" | "can_download" | "can_preview" | "no_access";
export declare function deserializeFileSharedLinkFieldEffectivePermissionField(val: JSON): FileSharedLinkFieldEffectivePermissionField;
export declare function serializeFileSharedLinkFieldEffectivePermissionField(val: FileSharedLinkFieldEffectivePermissionField): JSON;
export interface FileSharedLinkFieldPermissionsField {
    readonly canDownload: boolean;
    readonly canPreview: boolean;
    readonly canEdit: boolean;
}
export declare function deserializeFileSharedLinkFieldPermissionsField(val: JSON): FileSharedLinkFieldPermissionsField;
export declare function serializeFileSharedLinkFieldPermissionsField(val: FileSharedLinkFieldPermissionsField): JSON;
export interface FileSharedLinkField {
    readonly url: string;
    readonly downloadUrl?: string;
    readonly vanityUrl?: string;
    readonly vanityName?: string;
    readonly access?: FileSharedLinkFieldAccessField;
    readonly effectiveAccess: FileSharedLinkFieldEffectiveAccessField;
    readonly effectivePermission: FileSharedLinkFieldEffectivePermissionField;
    readonly unsharedAt?: string;
    readonly isPasswordEnabled: boolean;
    readonly permissions?: FileSharedLinkFieldPermissionsField;
    readonly downloadCount: number;
    readonly previewCount: number;
}
export declare function deserializeFileSharedLinkField(val: JSON): FileSharedLinkField;
export declare function serializeFileSharedLinkField(val: FileSharedLinkField): JSON;
export type FileItemStatusField = "active" | "trashed" | "deleted";
export declare function deserializeFileItemStatusField(val: JSON): FileItemStatusField;
export declare function serializeFileItemStatusField(val: FileItemStatusField): JSON;
export interface FileFullPermissionsField {
    readonly canDelete: boolean;
    readonly canDownload: boolean;
    readonly canInviteCollaborator: boolean;
    readonly canRename: boolean;
    readonly canSetShareAccess: boolean;
    readonly canShare: boolean;
    readonly canAnnotate?: boolean;
    readonly canComment?: boolean;
    readonly canPreview?: boolean;
    readonly canUpload?: boolean;
    readonly canViewAnnotationsAll?: boolean;
    readonly canViewAnnotationsSelf?: boolean;
}
export declare function deserializeFileFullPermissionsField(val: JSON): FileFullPermissionsField;
export declare function serializeFileFullPermissionsField(val: FileFullPermissionsField): JSON;
export type FileFullLockFieldTypeField = "lock";
export declare function deserializeFileFullLockFieldTypeField(val: JSON): FileFullLockFieldTypeField;
export declare function serializeFileFullLockFieldTypeField(val: FileFullLockFieldTypeField): JSON;
export type FileFullLockFieldAppTypeField = "gsuite" | "office_wopi" | "office_wopiplus" | "other";
export declare function deserializeFileFullLockFieldAppTypeField(val: JSON): FileFullLockFieldAppTypeField;
export declare function serializeFileFullLockFieldAppTypeField(val: FileFullLockFieldAppTypeField): JSON;
export type FileFullExpiringEmbedLinkFieldTokenTypeField = "bearer";
export declare function deserializeFileFullExpiringEmbedLinkFieldTokenTypeField(val: JSON): FileFullExpiringEmbedLinkFieldTokenTypeField;
export declare function serializeFileFullExpiringEmbedLinkFieldTokenTypeField(val: FileFullExpiringEmbedLinkFieldTokenTypeField): JSON;
export interface FileFullWatermarkInfoField {
    readonly isWatermarked?: boolean;
}
export declare function deserializeFileFullWatermarkInfoField(val: JSON): FileFullWatermarkInfoField;
export declare function serializeFileFullWatermarkInfoField(val: FileFullWatermarkInfoField): JSON;
export type FileFullAllowedInviteeRolesField = "editor" | "viewer" | "previewer" | "uploader" | "previewer uploader" | "viewer uploader" | "co-owner";
export declare function deserializeFileFullAllowedInviteeRolesField(val: JSON): FileFullAllowedInviteeRolesField;
export declare function serializeFileFullAllowedInviteeRolesField(val: FileFullAllowedInviteeRolesField): JSON;
export interface FileFullMetadataField {
}
export declare function deserializeFileFullMetadataField(val: JSON): FileFullMetadataField;
export declare function serializeFileFullMetadataField(val: FileFullMetadataField): JSON;
export interface FileFullRepresentationsFieldEntriesFieldContentField {
    readonly urlTemplate?: string;
}
export declare function deserializeFileFullRepresentationsFieldEntriesFieldContentField(val: JSON): FileFullRepresentationsFieldEntriesFieldContentField;
export declare function serializeFileFullRepresentationsFieldEntriesFieldContentField(val: FileFullRepresentationsFieldEntriesFieldContentField): JSON;
export interface FileFullRepresentationsFieldEntriesFieldInfoField {
    readonly url?: string;
}
export declare function deserializeFileFullRepresentationsFieldEntriesFieldInfoField(val: JSON): FileFullRepresentationsFieldEntriesFieldInfoField;
export declare function serializeFileFullRepresentationsFieldEntriesFieldInfoField(val: FileFullRepresentationsFieldEntriesFieldInfoField): JSON;
export interface FileFullRepresentationsFieldEntriesFieldPropertiesField {
    readonly dimensions?: string;
    readonly paged?: boolean;
    readonly thumb?: boolean;
}
export declare function deserializeFileFullRepresentationsFieldEntriesFieldPropertiesField(val: JSON): FileFullRepresentationsFieldEntriesFieldPropertiesField;
export declare function serializeFileFullRepresentationsFieldEntriesFieldPropertiesField(val: FileFullRepresentationsFieldEntriesFieldPropertiesField): JSON;
export type FileFullRepresentationsFieldEntriesFieldStatusFieldStateField = "success" | "viewable" | "pending" | "none";
export declare function deserializeFileFullRepresentationsFieldEntriesFieldStatusFieldStateField(val: JSON): FileFullRepresentationsFieldEntriesFieldStatusFieldStateField;
export declare function serializeFileFullRepresentationsFieldEntriesFieldStatusFieldStateField(val: FileFullRepresentationsFieldEntriesFieldStatusFieldStateField): JSON;
export interface FileFullRepresentationsFieldEntriesFieldStatusField {
    readonly state?: FileFullRepresentationsFieldEntriesFieldStatusFieldStateField;
}
export declare function deserializeFileFullRepresentationsFieldEntriesFieldStatusField(val: JSON): FileFullRepresentationsFieldEntriesFieldStatusField;
export declare function serializeFileFullRepresentationsFieldEntriesFieldStatusField(val: FileFullRepresentationsFieldEntriesFieldStatusField): JSON;
export interface FileFullRepresentationsFieldEntriesField {
    readonly content?: FileFullRepresentationsFieldEntriesFieldContentField;
    readonly info?: FileFullRepresentationsFieldEntriesFieldInfoField;
    readonly properties?: FileFullRepresentationsFieldEntriesFieldPropertiesField;
    readonly representation?: string;
    readonly status?: FileFullRepresentationsFieldEntriesFieldStatusField;
}
export declare function deserializeFileFullRepresentationsFieldEntriesField(val: JSON): FileFullRepresentationsFieldEntriesField;
export declare function serializeFileFullRepresentationsFieldEntriesField(val: FileFullRepresentationsFieldEntriesField): JSON;
export interface FileFullRepresentationsField {
    readonly entries?: readonly FileFullRepresentationsFieldEntriesField[];
}
export declare function deserializeFileFullRepresentationsField(val: JSON): FileFullRepresentationsField;
export declare function serializeFileFullRepresentationsField(val: FileFullRepresentationsField): JSON;
export interface FileFullClassificationField {
    readonly name?: string;
    readonly definition?: string;
    readonly color?: string;
}
export declare function deserializeFileFullClassificationField(val: JSON): FileFullClassificationField;
export declare function serializeFileFullClassificationField(val: FileFullClassificationField): JSON;
export type FileFullSharedLinkPermissionOptionsField = "can_preview" | "can_download" | "can_edit";
export declare function deserializeFileFullSharedLinkPermissionOptionsField(val: JSON): FileFullSharedLinkPermissionOptionsField;
export declare function serializeFileFullSharedLinkPermissionOptionsField(val: FileFullSharedLinkPermissionOptionsField): JSON;
export type FileBaseTypeField = "file";
export declare function deserializeFileBaseTypeField(val: JSON): FileBaseTypeField;
export declare function serializeFileBaseTypeField(val: FileBaseTypeField): JSON;
export interface FileBase {
    readonly id: string;
    readonly etag?: string;
    readonly type: FileBaseTypeField;
}
export declare function deserializeFileBase(val: JSON): FileBase;
export declare function serializeFileBase(val: FileBase): JSON;
export type FileRequestTypeField = "file_request";
export declare function deserializeFileRequestTypeField(val: JSON): FileRequestTypeField;
export declare function serializeFileRequestTypeField(val: FileRequestTypeField): JSON;
export type FileRequestStatusField = "active" | "inactive";
export declare function deserializeFileRequestStatusField(val: JSON): FileRequestStatusField;
export declare function serializeFileRequestStatusField(val: FileRequestStatusField): JSON;
export type FileVersionBaseTypeField = "file_version";
export declare function deserializeFileVersionBaseTypeField(val: JSON): FileVersionBaseTypeField;
export declare function serializeFileVersionBaseTypeField(val: FileVersionBaseTypeField): JSON;
export interface FileVersionBase {
    readonly id: string;
    readonly type: FileVersionBaseTypeField;
}
export declare function deserializeFileVersionBase(val: JSON): FileVersionBase;
export declare function serializeFileVersionBase(val: FileVersionBase): JSON;
export type FileVersionMini = FileVersionBase & {
    /**
     * The SHA1 hash of this version of the file. */
    readonly sha1?: string;
};
export declare function deserializeFileVersionMini(val: JSON): FileVersionMini;
export declare function serializeFileVersionMini(val: FileVersionMini): JSON;
export type FileMini = FileBase & {
    readonly sequenceId: string;
    /**
     * The name of the file */
    readonly name?: string;
    /**
     * The SHA1 hash of the file. This can be used to compare the contents
     * of a file on Box with a local file. */
    readonly sha1: string;
    readonly fileVersion?: FileVersionMini;
};
export declare function deserializeFileMini(val: JSON): FileMini;
export declare function serializeFileMini(val: FileMini): JSON;
export interface SignRequestSignFilesField {
    readonly files?: readonly FileMini[];
    readonly isReadyForDownload?: boolean;
}
export declare function deserializeSignRequestSignFilesField(val: JSON): SignRequestSignFilesField;
export declare function serializeSignRequestSignFilesField(val: SignRequestSignFilesField): JSON;
export interface FilesUnderRetention {
    readonly limit?: number;
    readonly nextMarker?: number;
    readonly prevMarker?: number;
    readonly entries?: readonly FileMini[];
}
export declare function deserializeFilesUnderRetention(val: JSON): FilesUnderRetention;
export declare function serializeFilesUnderRetention(val: FilesUnderRetention): JSON;
export type FileConflict = FileMini & {
    /**
     * The SHA1 hash of the file. */
    readonly sha1?: string;
    readonly fileVersion?: FileVersionMini;
};
export declare function deserializeFileConflict(val: JSON): FileConflict;
export declare function serializeFileConflict(val: FileConflict): JSON;
export interface ConflictErrorContextInfoField {
    readonly conflicts?: readonly FileConflict[];
}
export declare function deserializeConflictErrorContextInfoField(val: JSON): ConflictErrorContextInfoField;
export declare function serializeConflictErrorContextInfoField(val: ConflictErrorContextInfoField): JSON;
export type ConflictError = ClientError & {
    readonly contextInfo?: ConflictErrorContextInfoField;
};
export declare function deserializeConflictError(val: JSON): ConflictError;
export declare function serializeConflictError(val: ConflictError): JSON;
export type FileVersionsOrderFieldDirectionField = "ASC" | "DESC";
export declare function deserializeFileVersionsOrderFieldDirectionField(val: JSON): FileVersionsOrderFieldDirectionField;
export declare function serializeFileVersionsOrderFieldDirectionField(val: FileVersionsOrderFieldDirectionField): JSON;
export interface FileVersionsOrderField {
    readonly by?: string;
    readonly direction?: FileVersionsOrderFieldDirectionField;
}
export declare function deserializeFileVersionsOrderField(val: JSON): FileVersionsOrderField;
export declare function serializeFileVersionsOrderField(val: FileVersionsOrderField): JSON;
export type FileVersionLegalHoldTypeField = "file_version_legal_hold";
export declare function deserializeFileVersionLegalHoldTypeField(val: JSON): FileVersionLegalHoldTypeField;
export declare function serializeFileVersionLegalHoldTypeField(val: FileVersionLegalHoldTypeField): JSON;
export type FileVersionRetentionTypeField = "file_version_retention";
export declare function deserializeFileVersionRetentionTypeField(val: JSON): FileVersionRetentionTypeField;
export declare function serializeFileVersionRetentionTypeField(val: FileVersionRetentionTypeField): JSON;
export type FolderSharedLinkFieldAccessField = "open" | "company" | "collaborators";
export declare function deserializeFolderSharedLinkFieldAccessField(val: JSON): FolderSharedLinkFieldAccessField;
export declare function serializeFolderSharedLinkFieldAccessField(val: FolderSharedLinkFieldAccessField): JSON;
export type FolderSharedLinkFieldEffectiveAccessField = "open" | "company" | "collaborators";
export declare function deserializeFolderSharedLinkFieldEffectiveAccessField(val: JSON): FolderSharedLinkFieldEffectiveAccessField;
export declare function serializeFolderSharedLinkFieldEffectiveAccessField(val: FolderSharedLinkFieldEffectiveAccessField): JSON;
export type FolderSharedLinkFieldEffectivePermissionField = "can_edit" | "can_download" | "can_preview" | "no_access";
export declare function deserializeFolderSharedLinkFieldEffectivePermissionField(val: JSON): FolderSharedLinkFieldEffectivePermissionField;
export declare function serializeFolderSharedLinkFieldEffectivePermissionField(val: FolderSharedLinkFieldEffectivePermissionField): JSON;
export interface FolderSharedLinkFieldPermissionsField {
    readonly canDownload: boolean;
    readonly canPreview: boolean;
    readonly canEdit: boolean;
}
export declare function deserializeFolderSharedLinkFieldPermissionsField(val: JSON): FolderSharedLinkFieldPermissionsField;
export declare function serializeFolderSharedLinkFieldPermissionsField(val: FolderSharedLinkFieldPermissionsField): JSON;
export interface FolderSharedLinkField {
    readonly url: string;
    readonly downloadUrl?: string;
    readonly vanityUrl?: string;
    readonly vanityName?: string;
    readonly access?: FolderSharedLinkFieldAccessField;
    readonly effectiveAccess: FolderSharedLinkFieldEffectiveAccessField;
    readonly effectivePermission: FolderSharedLinkFieldEffectivePermissionField;
    readonly unsharedAt?: string;
    readonly isPasswordEnabled: boolean;
    readonly permissions?: FolderSharedLinkFieldPermissionsField;
    readonly downloadCount: number;
    readonly previewCount: number;
}
export declare function deserializeFolderSharedLinkField(val: JSON): FolderSharedLinkField;
export declare function serializeFolderSharedLinkField(val: FolderSharedLinkField): JSON;
export type FolderFolderUploadEmailFieldAccessField = "open" | "collaborators";
export declare function deserializeFolderFolderUploadEmailFieldAccessField(val: JSON): FolderFolderUploadEmailFieldAccessField;
export declare function serializeFolderFolderUploadEmailFieldAccessField(val: FolderFolderUploadEmailFieldAccessField): JSON;
export interface FolderFolderUploadEmailField {
    readonly access?: FolderFolderUploadEmailFieldAccessField;
    readonly email?: string;
}
export declare function deserializeFolderFolderUploadEmailField(val: JSON): FolderFolderUploadEmailField;
export declare function serializeFolderFolderUploadEmailField(val: FolderFolderUploadEmailField): JSON;
export type FolderItemStatusField = "active" | "trashed" | "deleted";
export declare function deserializeFolderItemStatusField(val: JSON): FolderItemStatusField;
export declare function serializeFolderItemStatusField(val: FolderItemStatusField): JSON;
export type FolderFullSyncStateField = "synced" | "not_synced" | "partially_synced";
export declare function deserializeFolderFullSyncStateField(val: JSON): FolderFullSyncStateField;
export declare function serializeFolderFullSyncStateField(val: FolderFullSyncStateField): JSON;
export interface FolderFullPermissionsField {
    readonly canDelete: boolean;
    readonly canDownload: boolean;
    readonly canInviteCollaborator: boolean;
    readonly canRename: boolean;
    readonly canSetShareAccess: boolean;
    readonly canShare: boolean;
    readonly canUpload?: boolean;
}
export declare function deserializeFolderFullPermissionsField(val: JSON): FolderFullPermissionsField;
export declare function serializeFolderFullPermissionsField(val: FolderFullPermissionsField): JSON;
export interface FolderFullMetadataField {
}
export declare function deserializeFolderFullMetadataField(val: JSON): FolderFullMetadataField;
export declare function serializeFolderFullMetadataField(val: FolderFullMetadataField): JSON;
export type FolderFullAllowedSharedLinkAccessLevelsField = "open" | "company" | "collaborators";
export declare function deserializeFolderFullAllowedSharedLinkAccessLevelsField(val: JSON): FolderFullAllowedSharedLinkAccessLevelsField;
export declare function serializeFolderFullAllowedSharedLinkAccessLevelsField(val: FolderFullAllowedSharedLinkAccessLevelsField): JSON;
export type FolderFullAllowedInviteeRolesField = "editor" | "viewer" | "previewer" | "uploader" | "previewer uploader" | "viewer uploader" | "co-owner";
export declare function deserializeFolderFullAllowedInviteeRolesField(val: JSON): FolderFullAllowedInviteeRolesField;
export declare function serializeFolderFullAllowedInviteeRolesField(val: FolderFullAllowedInviteeRolesField): JSON;
export interface FolderFullWatermarkInfoField {
    readonly isWatermarked?: boolean;
}
export declare function deserializeFolderFullWatermarkInfoField(val: JSON): FolderFullWatermarkInfoField;
export declare function serializeFolderFullWatermarkInfoField(val: FolderFullWatermarkInfoField): JSON;
export interface FolderFullClassificationField {
    readonly name?: string;
    readonly definition?: string;
    readonly color?: string;
}
export declare function deserializeFolderFullClassificationField(val: JSON): FolderFullClassificationField;
export declare function serializeFolderFullClassificationField(val: FolderFullClassificationField): JSON;
export type FolderBaseTypeField = "folder";
export declare function deserializeFolderBaseTypeField(val: JSON): FolderBaseTypeField;
export declare function serializeFolderBaseTypeField(val: FolderBaseTypeField): JSON;
export interface FolderBase {
    readonly id: string;
    readonly etag?: string;
    readonly type: FolderBaseTypeField;
}
export declare function deserializeFolderBase(val: JSON): FolderBase;
export declare function serializeFolderBase(val: FolderBase): JSON;
export type FolderMini = FolderBase & {
    readonly sequenceId?: string;
    /**
     * The name of the folder. */
    readonly name?: string;
};
export declare function deserializeFolderMini(val: JSON): FolderMini;
export declare function serializeFolderMini(val: FolderMini): JSON;
export interface WebLinkPathCollectionField {
    readonly totalCount: number;
    readonly entries: readonly FolderMini[];
}
export declare function deserializeWebLinkPathCollectionField(val: JSON): WebLinkPathCollectionField;
export declare function serializeWebLinkPathCollectionField(val: WebLinkPathCollectionField): JSON;
export interface TrashWebLinkRestoredPathCollectionField {
    readonly totalCount: number;
    readonly entries: readonly FolderMini[];
}
export declare function deserializeTrashWebLinkRestoredPathCollectionField(val: JSON): TrashWebLinkRestoredPathCollectionField;
export declare function serializeTrashWebLinkRestoredPathCollectionField(val: TrashWebLinkRestoredPathCollectionField): JSON;
export interface TrashFolderRestoredPathCollectionField {
    readonly totalCount: number;
    readonly entries: readonly FolderMini[];
}
export declare function deserializeTrashFolderRestoredPathCollectionField(val: JSON): TrashFolderRestoredPathCollectionField;
export declare function serializeTrashFolderRestoredPathCollectionField(val: TrashFolderRestoredPathCollectionField): JSON;
export interface TrashFileRestoredPathCollectionField {
    readonly totalCount: number;
    readonly entries: readonly FolderMini[];
}
export declare function deserializeTrashFileRestoredPathCollectionField(val: JSON): TrashFileRestoredPathCollectionField;
export declare function serializeTrashFileRestoredPathCollectionField(val: TrashFileRestoredPathCollectionField): JSON;
export interface FolderPathCollectionField {
    readonly totalCount: number;
    readonly entries: readonly FolderMini[];
}
export declare function deserializeFolderPathCollectionField(val: JSON): FolderPathCollectionField;
export declare function serializeFolderPathCollectionField(val: FolderPathCollectionField): JSON;
export interface FilePathCollectionField {
    readonly totalCount: number;
    readonly entries: readonly FolderMini[];
}
export declare function deserializeFilePathCollectionField(val: JSON): FilePathCollectionField;
export declare function serializeFilePathCollectionField(val: FilePathCollectionField): JSON;
export interface FolderLockLockedOperationsField {
    readonly move: boolean;
    readonly delete: boolean;
}
export declare function deserializeFolderLockLockedOperationsField(val: JSON): FolderLockLockedOperationsField;
export declare function serializeFolderLockLockedOperationsField(val: FolderLockLockedOperationsField): JSON;
export type GroupsOrderFieldDirectionField = "ASC" | "DESC";
export declare function deserializeGroupsOrderFieldDirectionField(val: JSON): GroupsOrderFieldDirectionField;
export declare function serializeGroupsOrderFieldDirectionField(val: GroupsOrderFieldDirectionField): JSON;
export interface GroupsOrderField {
    readonly by?: string;
    readonly direction?: GroupsOrderFieldDirectionField;
}
export declare function deserializeGroupsOrderField(val: JSON): GroupsOrderField;
export declare function serializeGroupsOrderField(val: GroupsOrderField): JSON;
export type GroupBaseTypeField = "group";
export declare function deserializeGroupBaseTypeField(val: JSON): GroupBaseTypeField;
export declare function serializeGroupBaseTypeField(val: GroupBaseTypeField): JSON;
export interface GroupBase {
    readonly id?: string;
    readonly type?: GroupBaseTypeField;
}
export declare function deserializeGroupBase(val: JSON): GroupBase;
export declare function serializeGroupBase(val: GroupBase): JSON;
export type GroupFullInvitabilityLevelField = "admins_only" | "admins_and_members" | "all_managed_users";
export declare function deserializeGroupFullInvitabilityLevelField(val: JSON): GroupFullInvitabilityLevelField;
export declare function serializeGroupFullInvitabilityLevelField(val: GroupFullInvitabilityLevelField): JSON;
export type GroupFullMemberViewabilityLevelField = "admins_only" | "admins_and_members" | "all_managed_users";
export declare function deserializeGroupFullMemberViewabilityLevelField(val: JSON): GroupFullMemberViewabilityLevelField;
export declare function serializeGroupFullMemberViewabilityLevelField(val: GroupFullMemberViewabilityLevelField): JSON;
export interface GroupFullPermissionsField {
    readonly canInviteAsCollaborator?: boolean;
}
export declare function deserializeGroupFullPermissionsField(val: JSON): GroupFullPermissionsField;
export declare function serializeGroupFullPermissionsField(val: GroupFullPermissionsField): JSON;
export type GroupMiniGroupTypeField = "managed_group" | "all_users_group";
export declare function deserializeGroupMiniGroupTypeField(val: JSON): GroupMiniGroupTypeField;
export declare function serializeGroupMiniGroupTypeField(val: GroupMiniGroupTypeField): JSON;
export type GroupMini = GroupBase & {
    /**
     * The name of the group */
    readonly name?: string;
    /**
     * The type of the group. */
    readonly groupType?: GroupMiniGroupTypeField;
};
export declare function deserializeGroupMini(val: JSON): GroupMini;
export declare function serializeGroupMini(val: GroupMini): JSON;
export interface Groups {
    readonly totalCount?: number;
    readonly limit?: number;
    readonly offset?: number;
    readonly order?: readonly GroupsOrderField[];
    readonly entries?: readonly GroupMini[];
}
export declare function deserializeGroups(val: JSON): Groups;
export declare function serializeGroups(val: Groups): JSON;
export type Group = GroupMini & {
    /**
     * When the group object was created */
    readonly createdAt?: string;
    /**
     * When the group object was last modified */
    readonly modifiedAt?: string;
};
export declare function deserializeGroup(val: JSON): Group;
export declare function serializeGroup(val: Group): JSON;
export type GroupFull = Group & {
    /**
     * Keeps track of which external source this group is
     * coming from (e.g. "Active Directory", "Google Groups",
     * "Facebook Groups").  Setting this will
     * also prevent Box users from editing the group name
     * and its members directly via the Box web application.
     * This is desirable for one-way syncing of groups. */
    readonly provenance?: string;
    /**
     * An arbitrary identifier that can be used by
     * external group sync tools to link this Box Group to
     * an external group. Example values of this field
     * could be an Active Directory Object ID or a Google
     * Group ID.  We recommend you use of this field in
     * order to avoid issues when group names are updated in
     * either Box or external systems. */
    readonly externalSyncIdentifier?: string;
    /**
     * Human readable description of the group. */
    readonly description?: string;
    /**
     * Specifies who can invite the group to collaborate
     * on items.
     *
     * When set to `admins_only` the enterprise admin, co-admins,
     * and the group's admin can invite the group.
     *
     * When set to `admins_and_members` all the admins listed
     * above and group members can invite the group.
     *
     * When set to `all_managed_users` all managed users in the
     * enterprise can invite the group. */
    readonly invitabilityLevel?: GroupFullInvitabilityLevelField;
    /**
     * Specifies who can view the members of the group
     * (Get Memberships for Group).
     *
     * * `admins_only` - the enterprise admin, co-admins, group's
     *   group admin
     * * `admins_and_members` - all admins and group members
     * * `all_managed_users` - all managed users in the
     *   enterprise */
    readonly memberViewabilityLevel?: GroupFullMemberViewabilityLevelField;
    readonly permissions?: GroupFullPermissionsField;
};
export declare function deserializeGroupFull(val: JSON): GroupFull;
export declare function serializeGroupFull(val: GroupFull): JSON;
export type GroupMembershipTypeField = "group_membership";
export declare function deserializeGroupMembershipTypeField(val: JSON): GroupMembershipTypeField;
export declare function serializeGroupMembershipTypeField(val: GroupMembershipTypeField): JSON;
export type GroupMembershipRoleField = "member" | "admin";
export declare function deserializeGroupMembershipRoleField(val: JSON): GroupMembershipRoleField;
export declare function serializeGroupMembershipRoleField(val: GroupMembershipRoleField): JSON;
export type GroupMembershipsOrderFieldDirectionField = "ASC" | "DESC";
export declare function deserializeGroupMembershipsOrderFieldDirectionField(val: JSON): GroupMembershipsOrderFieldDirectionField;
export declare function serializeGroupMembershipsOrderFieldDirectionField(val: GroupMembershipsOrderFieldDirectionField): JSON;
export interface GroupMembershipsOrderField {
    readonly by?: string;
    readonly direction?: GroupMembershipsOrderFieldDirectionField;
}
export declare function deserializeGroupMembershipsOrderField(val: JSON): GroupMembershipsOrderField;
export declare function serializeGroupMembershipsOrderField(val: GroupMembershipsOrderField): JSON;
export type InviteTypeField = "invite";
export declare function deserializeInviteTypeField(val: JSON): InviteTypeField;
export declare function serializeInviteTypeField(val: InviteTypeField): JSON;
export type InviteInvitedToFieldTypeField = "enterprise";
export declare function deserializeInviteInvitedToFieldTypeField(val: JSON): InviteInvitedToFieldTypeField;
export declare function serializeInviteInvitedToFieldTypeField(val: InviteInvitedToFieldTypeField): JSON;
export interface InviteInvitedToField {
    readonly id?: string;
    readonly type?: InviteInvitedToFieldTypeField;
    readonly name?: string;
}
export declare function deserializeInviteInvitedToField(val: JSON): InviteInvitedToField;
export declare function serializeInviteInvitedToField(val: InviteInvitedToField): JSON;
export type ItemsOrderFieldDirectionField = "ASC" | "DESC";
export declare function deserializeItemsOrderFieldDirectionField(val: JSON): ItemsOrderFieldDirectionField;
export declare function serializeItemsOrderFieldDirectionField(val: ItemsOrderFieldDirectionField): JSON;
export interface ItemsOrderField {
    readonly by?: string;
    readonly direction?: ItemsOrderFieldDirectionField;
}
export declare function deserializeItemsOrderField(val: JSON): ItemsOrderField;
export declare function serializeItemsOrderField(val: ItemsOrderField): JSON;
export type LegalHoldPolicyStatusField = "active" | "applying" | "releasing" | "released";
export declare function deserializeLegalHoldPolicyStatusField(val: JSON): LegalHoldPolicyStatusField;
export declare function serializeLegalHoldPolicyStatusField(val: LegalHoldPolicyStatusField): JSON;
export interface LegalHoldPolicyAssignmentCountsField {
    readonly user?: number;
    readonly folder?: number;
    readonly file?: number;
    readonly fileVersion?: number;
}
export declare function deserializeLegalHoldPolicyAssignmentCountsField(val: JSON): LegalHoldPolicyAssignmentCountsField;
export declare function serializeLegalHoldPolicyAssignmentCountsField(val: LegalHoldPolicyAssignmentCountsField): JSON;
export type LegalHoldPolicyMiniTypeField = "legal_hold_policy";
export declare function deserializeLegalHoldPolicyMiniTypeField(val: JSON): LegalHoldPolicyMiniTypeField;
export declare function serializeLegalHoldPolicyMiniTypeField(val: LegalHoldPolicyMiniTypeField): JSON;
export interface LegalHoldPolicyMini {
    readonly id?: string;
    readonly type?: LegalHoldPolicyMiniTypeField;
}
export declare function deserializeLegalHoldPolicyMini(val: JSON): LegalHoldPolicyMini;
export declare function serializeLegalHoldPolicyMini(val: LegalHoldPolicyMini): JSON;
export type LegalHoldPolicyAssignmentBaseTypeField = "legal_hold_policy_assignment";
export declare function deserializeLegalHoldPolicyAssignmentBaseTypeField(val: JSON): LegalHoldPolicyAssignmentBaseTypeField;
export declare function serializeLegalHoldPolicyAssignmentBaseTypeField(val: LegalHoldPolicyAssignmentBaseTypeField): JSON;
export interface LegalHoldPolicyAssignmentBase {
    readonly id?: string;
    readonly type?: LegalHoldPolicyAssignmentBaseTypeField;
}
export declare function deserializeLegalHoldPolicyAssignmentBase(val: JSON): LegalHoldPolicyAssignmentBase;
export declare function serializeLegalHoldPolicyAssignmentBase(val: LegalHoldPolicyAssignmentBase): JSON;
export interface LegalHoldPolicyAssignments {
    readonly limit?: number;
    readonly nextMarker?: number;
    readonly prevMarker?: number;
    readonly entries?: readonly LegalHoldPolicyAssignmentBase[];
}
export declare function deserializeLegalHoldPolicyAssignments(val: JSON): LegalHoldPolicyAssignments;
export declare function serializeLegalHoldPolicyAssignments(val: LegalHoldPolicyAssignments): JSON;
export interface Metadata {
}
export declare function deserializeMetadata(val: JSON): Metadata;
export declare function serializeMetadata(val: Metadata): JSON;
export interface Metadatas {
    readonly entries?: readonly Metadata[];
    readonly limit?: number;
}
export declare function deserializeMetadatas(val: JSON): Metadatas;
export declare function serializeMetadatas(val: Metadatas): JSON;
export type MetadataFull = Metadata & {
    /**
     * Whether the user can edit this metadata instance. */
    readonly canEdit?: boolean;
    /**
     * A UUID to identify the metadata instance. */
    readonly id?: string;
    /**
     * A unique identifier for the "type" of this instance. This is an
     * internal system property and should not be used by a client
     * application. */
    readonly type?: string;
    /**
     * The last-known version of the template of the object. This is an
     * internal system property and should not be used by a client
     * application. */
    readonly typeVersion?: number;
};
export declare function deserializeMetadataFull(val: JSON): MetadataFull;
export declare function serializeMetadataFull(val: MetadataFull): JSON;
export interface MetadataBase {
    readonly parent?: string;
    readonly template?: string;
    readonly scope?: string;
    readonly version?: number;
}
export declare function deserializeMetadataBase(val: JSON): MetadataBase;
export declare function serializeMetadataBase(val: MetadataBase): JSON;
export type MetadataCascadePolicyTypeField = "metadata_cascade_policy";
export declare function deserializeMetadataCascadePolicyTypeField(val: JSON): MetadataCascadePolicyTypeField;
export declare function serializeMetadataCascadePolicyTypeField(val: MetadataCascadePolicyTypeField): JSON;
export type MetadataCascadePolicyOwnerEnterpriseFieldTypeField = "enterprise";
export declare function deserializeMetadataCascadePolicyOwnerEnterpriseFieldTypeField(val: JSON): MetadataCascadePolicyOwnerEnterpriseFieldTypeField;
export declare function serializeMetadataCascadePolicyOwnerEnterpriseFieldTypeField(val: MetadataCascadePolicyOwnerEnterpriseFieldTypeField): JSON;
export interface MetadataCascadePolicyOwnerEnterpriseField {
    readonly type?: MetadataCascadePolicyOwnerEnterpriseFieldTypeField;
    readonly id?: string;
}
export declare function deserializeMetadataCascadePolicyOwnerEnterpriseField(val: JSON): MetadataCascadePolicyOwnerEnterpriseField;
export declare function serializeMetadataCascadePolicyOwnerEnterpriseField(val: MetadataCascadePolicyOwnerEnterpriseField): JSON;
export type MetadataCascadePolicyParentFieldTypeField = "folder";
export declare function deserializeMetadataCascadePolicyParentFieldTypeField(val: JSON): MetadataCascadePolicyParentFieldTypeField;
export declare function serializeMetadataCascadePolicyParentFieldTypeField(val: MetadataCascadePolicyParentFieldTypeField): JSON;
export interface MetadataCascadePolicyParentField {
    readonly type?: MetadataCascadePolicyParentFieldTypeField;
    readonly id?: string;
}
export declare function deserializeMetadataCascadePolicyParentField(val: JSON): MetadataCascadePolicyParentField;
export declare function serializeMetadataCascadePolicyParentField(val: MetadataCascadePolicyParentField): JSON;
export type MetadataCascadePolicyScopeField = "global" | "enterprise_*";
export declare function deserializeMetadataCascadePolicyScopeField(val: JSON): MetadataCascadePolicyScopeField;
export declare function serializeMetadataCascadePolicyScopeField(val: MetadataCascadePolicyScopeField): JSON;
export interface MetadataCascadePolicy {
    readonly id?: string;
    readonly type?: MetadataCascadePolicyTypeField;
    readonly ownerEnterprise?: MetadataCascadePolicyOwnerEnterpriseField;
    readonly parent?: MetadataCascadePolicyParentField;
    readonly scope?: MetadataCascadePolicyScopeField;
    readonly templateKey?: string;
}
export declare function deserializeMetadataCascadePolicy(val: JSON): MetadataCascadePolicy;
export declare function serializeMetadataCascadePolicy(val: MetadataCascadePolicy): JSON;
export interface MetadataCascadePolicies {
    readonly limit?: number;
    readonly nextMarker?: number;
    readonly prevMarker?: number;
    readonly entries?: readonly MetadataCascadePolicy[];
}
export declare function deserializeMetadataCascadePolicies(val: JSON): MetadataCascadePolicies;
export declare function serializeMetadataCascadePolicies(val: MetadataCascadePolicies): JSON;
export type MetadataQueryIndexStatusField = "building" | "active" | "disabled";
export declare function deserializeMetadataQueryIndexStatusField(val: JSON): MetadataQueryIndexStatusField;
export declare function serializeMetadataQueryIndexStatusField(val: MetadataQueryIndexStatusField): JSON;
export type MetadataQueryIndexFieldsFieldSortDirectionField = "asc" | "desc";
export declare function deserializeMetadataQueryIndexFieldsFieldSortDirectionField(val: JSON): MetadataQueryIndexFieldsFieldSortDirectionField;
export declare function serializeMetadataQueryIndexFieldsFieldSortDirectionField(val: MetadataQueryIndexFieldsFieldSortDirectionField): JSON;
export interface MetadataQueryIndexFieldsField {
    readonly key?: string;
    readonly sortDirection?: MetadataQueryIndexFieldsFieldSortDirectionField;
}
export declare function deserializeMetadataQueryIndexFieldsField(val: JSON): MetadataQueryIndexFieldsField;
export declare function serializeMetadataQueryIndexFieldsField(val: MetadataQueryIndexFieldsField): JSON;
export interface MetadataQueryIndex {
    readonly id?: string;
    readonly type: string;
    readonly status: MetadataQueryIndexStatusField;
    readonly fields?: readonly MetadataQueryIndexFieldsField[];
}
export declare function deserializeMetadataQueryIndex(val: JSON): MetadataQueryIndex;
export declare function serializeMetadataQueryIndex(val: MetadataQueryIndex): JSON;
export interface MetadataQueryIndices {
    readonly entries?: readonly MetadataQueryIndex[];
    readonly limit?: number;
    readonly nextMarker?: string;
}
export declare function deserializeMetadataQueryIndices(val: JSON): MetadataQueryIndices;
export declare function serializeMetadataQueryIndices(val: MetadataQueryIndices): JSON;
export type MetadataTemplateTypeField = "metadata_template";
export declare function deserializeMetadataTemplateTypeField(val: JSON): MetadataTemplateTypeField;
export declare function serializeMetadataTemplateTypeField(val: MetadataTemplateTypeField): JSON;
export type MetadataTemplateFieldsFieldTypeField = "string" | "float" | "date" | "enum" | "multiSelect";
export declare function deserializeMetadataTemplateFieldsFieldTypeField(val: JSON): MetadataTemplateFieldsFieldTypeField;
export declare function serializeMetadataTemplateFieldsFieldTypeField(val: MetadataTemplateFieldsFieldTypeField): JSON;
export interface MetadataTemplateFieldsFieldOptionsField {
    readonly key: string;
    readonly id?: string;
}
export declare function deserializeMetadataTemplateFieldsFieldOptionsField(val: JSON): MetadataTemplateFieldsFieldOptionsField;
export declare function serializeMetadataTemplateFieldsFieldOptionsField(val: MetadataTemplateFieldsFieldOptionsField): JSON;
export interface MetadataTemplateFieldsField {
    readonly type: MetadataTemplateFieldsFieldTypeField;
    readonly key: string;
    readonly displayName: string;
    readonly description?: string;
    readonly hidden?: boolean;
    readonly options?: readonly MetadataTemplateFieldsFieldOptionsField[];
    readonly id?: string;
}
export declare function deserializeMetadataTemplateFieldsField(val: JSON): MetadataTemplateFieldsField;
export declare function serializeMetadataTemplateFieldsField(val: MetadataTemplateFieldsField): JSON;
export interface MetadataTemplate {
    readonly id?: string;
    readonly type: MetadataTemplateTypeField;
    readonly scope?: string;
    readonly templateKey?: string;
    readonly displayName?: string;
    readonly hidden?: boolean;
    readonly fields?: readonly MetadataTemplateFieldsField[];
    readonly copyInstanceOnItemCopy?: boolean;
}
export declare function deserializeMetadataTemplate(val: JSON): MetadataTemplate;
export declare function serializeMetadataTemplate(val: MetadataTemplate): JSON;
export interface MetadataTemplates {
    readonly limit?: number;
    readonly nextMarker?: number;
    readonly prevMarker?: number;
    readonly entries?: readonly MetadataTemplate[];
}
export declare function deserializeMetadataTemplates(val: JSON): MetadataTemplates;
export declare function serializeMetadataTemplates(val: MetadataTemplates): JSON;
export interface RealtimeServer {
    readonly type?: string;
    readonly url?: string;
    readonly ttl?: number;
    readonly maxRetries?: number;
    readonly retryTimeout?: number;
}
export declare function deserializeRealtimeServer(val: JSON): RealtimeServer;
export declare function serializeRealtimeServer(val: RealtimeServer): JSON;
export interface RealtimeServers {
    readonly chunkSize?: number;
    readonly entries?: readonly RealtimeServer[];
}
export declare function deserializeRealtimeServers(val: JSON): RealtimeServers;
export declare function serializeRealtimeServers(val: RealtimeServers): JSON;
export type RecentItemInteractionTypeField = "item_preview" | "item_upload" | "item_comment" | "item_open" | "item_modify";
export declare function deserializeRecentItemInteractionTypeField(val: JSON): RecentItemInteractionTypeField;
export declare function serializeRecentItemInteractionTypeField(val: RecentItemInteractionTypeField): JSON;
export type RetentionPolicyPolicyTypeField = "finite" | "indefinite";
export declare function deserializeRetentionPolicyPolicyTypeField(val: JSON): RetentionPolicyPolicyTypeField;
export declare function serializeRetentionPolicyPolicyTypeField(val: RetentionPolicyPolicyTypeField): JSON;
export type RetentionPolicyRetentionTypeField = "modifiable" | "non-modifiable";
export declare function deserializeRetentionPolicyRetentionTypeField(val: JSON): RetentionPolicyRetentionTypeField;
export declare function serializeRetentionPolicyRetentionTypeField(val: RetentionPolicyRetentionTypeField): JSON;
export type RetentionPolicyStatusField = "active" | "retired";
export declare function deserializeRetentionPolicyStatusField(val: JSON): RetentionPolicyStatusField;
export declare function serializeRetentionPolicyStatusField(val: RetentionPolicyStatusField): JSON;
export interface RetentionPolicyAssignmentCountsField {
    readonly enterprise?: number;
    readonly folder?: number;
    readonly metadataTemplate?: number;
}
export declare function deserializeRetentionPolicyAssignmentCountsField(val: JSON): RetentionPolicyAssignmentCountsField;
export declare function serializeRetentionPolicyAssignmentCountsField(val: RetentionPolicyAssignmentCountsField): JSON;
export type RetentionPolicyMiniDispositionActionField = "permanently_delete" | "remove_retention";
export declare function deserializeRetentionPolicyMiniDispositionActionField(val: JSON): RetentionPolicyMiniDispositionActionField;
export declare function serializeRetentionPolicyMiniDispositionActionField(val: RetentionPolicyMiniDispositionActionField): JSON;
export type RetentionPolicyBaseTypeField = "retention_policy";
export declare function deserializeRetentionPolicyBaseTypeField(val: JSON): RetentionPolicyBaseTypeField;
export declare function serializeRetentionPolicyBaseTypeField(val: RetentionPolicyBaseTypeField): JSON;
export interface RetentionPolicyBase {
    readonly id: string;
    readonly type: RetentionPolicyBaseTypeField;
}
export declare function deserializeRetentionPolicyBase(val: JSON): RetentionPolicyBase;
export declare function serializeRetentionPolicyBase(val: RetentionPolicyBase): JSON;
export type RetentionPolicyMini = RetentionPolicyBase & {
    /**
     * The name given to the retention policy. */
    readonly policyName?: string;
    /**
     * The length of the retention policy. This value
     * specifies the duration in days that the retention
     * policy will be active for after being assigned to
     * content.  If the policy has a `policy_type` of
     * `indefinite`, the `retention_length` will also be
     * `indefinite`. */
    readonly retentionLength?: string;
    /**
     * The disposition action of the retention policy.
     * This action can be `permanently_delete`, which
     * will cause the content retained by the policy
     * to be permanently deleted, or `remove_retention`,
     * which will lift the retention policy from the content,
     * allowing it to be deleted by users,
     * once the retention policy has expired. */
    readonly dispositionAction?: RetentionPolicyMiniDispositionActionField;
};
export declare function deserializeRetentionPolicyMini(val: JSON): RetentionPolicyMini;
export declare function serializeRetentionPolicyMini(val: RetentionPolicyMini): JSON;
export interface RetentionPolicies {
    readonly entries?: readonly RetentionPolicyMini[];
    readonly limit?: number;
    readonly nextMarker?: string;
}
export declare function deserializeRetentionPolicies(val: JSON): RetentionPolicies;
export declare function serializeRetentionPolicies(val: RetentionPolicies): JSON;
export interface FileVersionRetention {
    readonly id?: string;
    readonly type?: FileVersionRetentionTypeField;
    readonly fileVersion?: FileVersionMini;
    readonly file?: FileMini;
    readonly appliedAt?: string;
    readonly dispositionAt?: string;
    readonly winningRetentionPolicy?: RetentionPolicyMini;
}
export declare function deserializeFileVersionRetention(val: JSON): FileVersionRetention;
export declare function serializeFileVersionRetention(val: FileVersionRetention): JSON;
export interface FileVersionRetentions {
    readonly limit?: number;
    readonly nextMarker?: number;
    readonly prevMarker?: number;
    readonly entries?: readonly FileVersionRetention[];
}
export declare function deserializeFileVersionRetentions(val: JSON): FileVersionRetentions;
export declare function serializeFileVersionRetentions(val: FileVersionRetentions): JSON;
export type RetentionPolicyAssignmentBaseTypeField = "retention_policy_assignment";
export declare function deserializeRetentionPolicyAssignmentBaseTypeField(val: JSON): RetentionPolicyAssignmentBaseTypeField;
export declare function serializeRetentionPolicyAssignmentBaseTypeField(val: RetentionPolicyAssignmentBaseTypeField): JSON;
export interface RetentionPolicyAssignmentBase {
    readonly id: string;
    readonly type: RetentionPolicyAssignmentBaseTypeField;
}
export declare function deserializeRetentionPolicyAssignmentBase(val: JSON): RetentionPolicyAssignmentBase;
export declare function serializeRetentionPolicyAssignmentBase(val: RetentionPolicyAssignmentBase): JSON;
export interface RetentionPolicyAssignments {
    readonly entries?: readonly RetentionPolicyAssignmentBase[];
    readonly limit?: number;
    readonly nextMarker?: string;
}
export declare function deserializeRetentionPolicyAssignments(val: JSON): RetentionPolicyAssignments;
export declare function serializeRetentionPolicyAssignments(val: RetentionPolicyAssignments): JSON;
export type RetentionPolicyAssignmentTypeField = "retention_policy_assignment";
export declare function deserializeRetentionPolicyAssignmentTypeField(val: JSON): RetentionPolicyAssignmentTypeField;
export declare function serializeRetentionPolicyAssignmentTypeField(val: RetentionPolicyAssignmentTypeField): JSON;
export type RetentionPolicyAssignmentAssignedToFieldTypeField = "folder" | "enterprise" | "metadata_template";
export declare function deserializeRetentionPolicyAssignmentAssignedToFieldTypeField(val: JSON): RetentionPolicyAssignmentAssignedToFieldTypeField;
export declare function serializeRetentionPolicyAssignmentAssignedToFieldTypeField(val: RetentionPolicyAssignmentAssignedToFieldTypeField): JSON;
export interface RetentionPolicyAssignmentAssignedToField {
    readonly id?: string;
    readonly type?: RetentionPolicyAssignmentAssignedToFieldTypeField;
}
export declare function deserializeRetentionPolicyAssignmentAssignedToField(val: JSON): RetentionPolicyAssignmentAssignedToField;
export declare function serializeRetentionPolicyAssignmentAssignedToField(val: RetentionPolicyAssignmentAssignedToField): JSON;
export interface RetentionPolicyAssignmentFilterFieldsField {
    readonly field?: string;
    readonly value?: string;
}
export declare function deserializeRetentionPolicyAssignmentFilterFieldsField(val: JSON): RetentionPolicyAssignmentFilterFieldsField;
export declare function serializeRetentionPolicyAssignmentFilterFieldsField(val: RetentionPolicyAssignmentFilterFieldsField): JSON;
export type ShieldInformationBarrierTypeField = "shield_information_barrier";
export declare function deserializeShieldInformationBarrierTypeField(val: JSON): ShieldInformationBarrierTypeField;
export declare function serializeShieldInformationBarrierTypeField(val: ShieldInformationBarrierTypeField): JSON;
export type ShieldInformationBarrierStatusField = "draft" | "pending" | "disabled" | "enabled" | "invalid";
export declare function deserializeShieldInformationBarrierStatusField(val: JSON): ShieldInformationBarrierStatusField;
export declare function serializeShieldInformationBarrierStatusField(val: ShieldInformationBarrierStatusField): JSON;
export type ShieldInformationBarrierBaseTypeField = "shield_information_barrier";
export declare function deserializeShieldInformationBarrierBaseTypeField(val: JSON): ShieldInformationBarrierBaseTypeField;
export declare function serializeShieldInformationBarrierBaseTypeField(val: ShieldInformationBarrierBaseTypeField): JSON;
export interface ShieldInformationBarrierBase {
    readonly id?: string;
    readonly type?: ShieldInformationBarrierBaseTypeField;
}
export declare function deserializeShieldInformationBarrierBase(val: JSON): ShieldInformationBarrierBase;
export declare function serializeShieldInformationBarrierBase(val: ShieldInformationBarrierBase): JSON;
export interface ShieldInformationBarrierReference {
    readonly shieldInformationBarrier?: ShieldInformationBarrierBase;
}
export declare function deserializeShieldInformationBarrierReference(val: JSON): ShieldInformationBarrierReference;
export declare function serializeShieldInformationBarrierReference(val: ShieldInformationBarrierReference): JSON;
export interface ShieldInformationBarrierReportShieldInformationBarrierField {
}
export declare function deserializeShieldInformationBarrierReportShieldInformationBarrierField(val: JSON): ShieldInformationBarrierReportShieldInformationBarrierField;
export declare function serializeShieldInformationBarrierReportShieldInformationBarrierField(val: ShieldInformationBarrierReportShieldInformationBarrierField): JSON;
export type ShieldInformationBarrierReportStatusField = "pending" | "error" | "done" | "cancelled";
export declare function deserializeShieldInformationBarrierReportStatusField(val: JSON): ShieldInformationBarrierReportStatusField;
export declare function serializeShieldInformationBarrierReportStatusField(val: ShieldInformationBarrierReportStatusField): JSON;
export interface ShieldInformationBarrierReportDetailsField {
}
export declare function deserializeShieldInformationBarrierReportDetailsField(val: JSON): ShieldInformationBarrierReportDetailsField;
export declare function serializeShieldInformationBarrierReportDetailsField(val: ShieldInformationBarrierReportDetailsField): JSON;
export type ShieldInformationBarrierReportBaseTypeField = "shield_information_barrier_report";
export declare function deserializeShieldInformationBarrierReportBaseTypeField(val: JSON): ShieldInformationBarrierReportBaseTypeField;
export declare function serializeShieldInformationBarrierReportBaseTypeField(val: ShieldInformationBarrierReportBaseTypeField): JSON;
export interface ShieldInformationBarrierReportBase {
    readonly id?: string;
    readonly type?: ShieldInformationBarrierReportBaseTypeField;
}
export declare function deserializeShieldInformationBarrierReportBase(val: JSON): ShieldInformationBarrierReportBase;
export declare function serializeShieldInformationBarrierReportBase(val: ShieldInformationBarrierReportBase): JSON;
export type ShieldInformationBarrierSegmentTypeField = "shield_information_barrier_segment";
export declare function deserializeShieldInformationBarrierSegmentTypeField(val: JSON): ShieldInformationBarrierSegmentTypeField;
export declare function serializeShieldInformationBarrierSegmentTypeField(val: ShieldInformationBarrierSegmentTypeField): JSON;
export type ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentFieldTypeField = "shield_information_barrier_segment";
export declare function deserializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentFieldTypeField(val: JSON): ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentFieldTypeField;
export declare function serializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentFieldTypeField(val: ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentFieldTypeField): JSON;
export interface ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField {
    readonly id?: string;
    readonly type?: ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentFieldTypeField;
}
export declare function deserializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField(val: JSON): ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField;
export declare function serializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField(val: ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField): JSON;
export type ShieldInformationBarrierSegmentMemberBaseTypeField = "shield_information_barrier_segment_member";
export declare function deserializeShieldInformationBarrierSegmentMemberBaseTypeField(val: JSON): ShieldInformationBarrierSegmentMemberBaseTypeField;
export declare function serializeShieldInformationBarrierSegmentMemberBaseTypeField(val: ShieldInformationBarrierSegmentMemberBaseTypeField): JSON;
export interface ShieldInformationBarrierSegmentMemberBase {
    readonly id?: string;
    readonly type?: ShieldInformationBarrierSegmentMemberBaseTypeField;
}
export declare function deserializeShieldInformationBarrierSegmentMemberBase(val: JSON): ShieldInformationBarrierSegmentMemberBase;
export declare function serializeShieldInformationBarrierSegmentMemberBase(val: ShieldInformationBarrierSegmentMemberBase): JSON;
export type ShieldInformationBarrierSegmentRestrictionBaseTypeField = "shield_information_barrier_segment_restriction";
export declare function deserializeShieldInformationBarrierSegmentRestrictionBaseTypeField(val: JSON): ShieldInformationBarrierSegmentRestrictionBaseTypeField;
export declare function serializeShieldInformationBarrierSegmentRestrictionBaseTypeField(val: ShieldInformationBarrierSegmentRestrictionBaseTypeField): JSON;
export interface ShieldInformationBarrierSegmentRestrictionBase {
    readonly type?: ShieldInformationBarrierSegmentRestrictionBaseTypeField;
    readonly id?: string;
}
export declare function deserializeShieldInformationBarrierSegmentRestrictionBase(val: JSON): ShieldInformationBarrierSegmentRestrictionBase;
export declare function serializeShieldInformationBarrierSegmentRestrictionBase(val: ShieldInformationBarrierSegmentRestrictionBase): JSON;
export type ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentFieldTypeField = "shield_information_barrier_segment";
export declare function deserializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentFieldTypeField(val: JSON): ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentFieldTypeField;
export declare function serializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentFieldTypeField(val: ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentFieldTypeField): JSON;
export interface ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField {
    readonly id?: string;
    readonly type?: ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentFieldTypeField;
}
export declare function deserializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField(val: JSON): ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField;
export declare function serializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField(val: ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField): JSON;
export type ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentFieldTypeField = "shield_information_barrier_segment";
export declare function deserializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentFieldTypeField(val: JSON): ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentFieldTypeField;
export declare function serializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentFieldTypeField(val: ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentFieldTypeField): JSON;
export interface ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField {
    readonly id?: string;
    readonly type?: ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentFieldTypeField;
}
export declare function deserializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField(val: JSON): ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField;
export declare function serializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField(val: ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField): JSON;
export type ShieldInformationBarrierSegmentRestrictionMini = ShieldInformationBarrierSegmentRestrictionBase & {
    /**
     * The `type` and `id` of the
     * requested shield information barrier segment. */
    readonly shieldInformationBarrierSegment: ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField;
    /**
     * The `type` and `id` of the
     * restricted shield information barrier segment. */
    readonly restrictedSegment: ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField;
};
export declare function deserializeShieldInformationBarrierSegmentRestrictionMini(val: JSON): ShieldInformationBarrierSegmentRestrictionMini;
export declare function serializeShieldInformationBarrierSegmentRestrictionMini(val: ShieldInformationBarrierSegmentRestrictionMini): JSON;
export interface SessionTerminationMessage {
    readonly message?: string;
}
export declare function deserializeSessionTerminationMessage(val: JSON): SessionTerminationMessage;
export declare function serializeSessionTerminationMessage(val: SessionTerminationMessage): JSON;
export type StoragePolicyMiniTypeField = "storage_policy";
export declare function deserializeStoragePolicyMiniTypeField(val: JSON): StoragePolicyMiniTypeField;
export declare function serializeStoragePolicyMiniTypeField(val: StoragePolicyMiniTypeField): JSON;
export interface StoragePolicyMini {
    readonly id?: string;
    readonly type?: StoragePolicyMiniTypeField;
}
export declare function deserializeStoragePolicyMini(val: JSON): StoragePolicyMini;
export declare function serializeStoragePolicyMini(val: StoragePolicyMini): JSON;
export type StoragePolicy = StoragePolicyMini & {
    /**
     * A descriptive name of the region */
    readonly name?: string;
};
export declare function deserializeStoragePolicy(val: JSON): StoragePolicy;
export declare function serializeStoragePolicy(val: StoragePolicy): JSON;
export interface StoragePolicies {
    readonly limit?: number;
    readonly nextMarker?: number;
    readonly prevMarker?: number;
    readonly entries?: readonly StoragePolicy[];
}
export declare function deserializeStoragePolicies(val: JSON): StoragePolicies;
export declare function serializeStoragePolicies(val: StoragePolicies): JSON;
export interface StoragePolicyAssignmentAssignedToField {
    readonly id?: string;
    readonly type?: string;
}
export declare function deserializeStoragePolicyAssignmentAssignedToField(val: JSON): StoragePolicyAssignmentAssignedToField;
export declare function serializeStoragePolicyAssignmentAssignedToField(val: StoragePolicyAssignmentAssignedToField): JSON;
export interface StoragePolicyAssignment {
    readonly storagePolicy?: StoragePolicyMini;
    readonly assignedTo?: StoragePolicyAssignmentAssignedToField;
}
export declare function deserializeStoragePolicyAssignment(val: JSON): StoragePolicyAssignment;
export declare function serializeStoragePolicyAssignment(val: StoragePolicyAssignment): JSON;
export interface StoragePolicyAssignments {
    readonly limit?: number;
    readonly nextMarker?: number;
    readonly prevMarker?: number;
    readonly entries?: readonly StoragePolicyAssignment[];
}
export declare function deserializeStoragePolicyAssignments(val: JSON): StoragePolicyAssignments;
export declare function serializeStoragePolicyAssignments(val: StoragePolicyAssignments): JSON;
export type TaskTypeField = "task";
export declare function deserializeTaskTypeField(val: JSON): TaskTypeField;
export declare function serializeTaskTypeField(val: TaskTypeField): JSON;
export type TaskActionField = "review" | "complete";
export declare function deserializeTaskActionField(val: JSON): TaskActionField;
export declare function serializeTaskActionField(val: TaskActionField): JSON;
export type TaskCompletionRuleField = "all_assignees" | "any_assignee";
export declare function deserializeTaskCompletionRuleField(val: JSON): TaskCompletionRuleField;
export declare function serializeTaskCompletionRuleField(val: TaskCompletionRuleField): JSON;
export type TaskAssignmentTypeField = "task_assignment";
export declare function deserializeTaskAssignmentTypeField(val: JSON): TaskAssignmentTypeField;
export declare function serializeTaskAssignmentTypeField(val: TaskAssignmentTypeField): JSON;
export type TaskAssignmentResolutionStateField = "completed" | "incomplete" | "approved" | "rejected";
export declare function deserializeTaskAssignmentResolutionStateField(val: JSON): TaskAssignmentResolutionStateField;
export declare function serializeTaskAssignmentResolutionStateField(val: TaskAssignmentResolutionStateField): JSON;
export type TermsOfServiceStatusField = "enabled" | "disabled";
export declare function deserializeTermsOfServiceStatusField(val: JSON): TermsOfServiceStatusField;
export declare function serializeTermsOfServiceStatusField(val: TermsOfServiceStatusField): JSON;
export type TermsOfServiceEnterpriseFieldTypeField = "enterprise";
export declare function deserializeTermsOfServiceEnterpriseFieldTypeField(val: JSON): TermsOfServiceEnterpriseFieldTypeField;
export declare function serializeTermsOfServiceEnterpriseFieldTypeField(val: TermsOfServiceEnterpriseFieldTypeField): JSON;
export interface TermsOfServiceEnterpriseField {
    readonly id?: string;
    readonly type?: TermsOfServiceEnterpriseFieldTypeField;
    readonly name?: string;
}
export declare function deserializeTermsOfServiceEnterpriseField(val: JSON): TermsOfServiceEnterpriseField;
export declare function serializeTermsOfServiceEnterpriseField(val: TermsOfServiceEnterpriseField): JSON;
export type TermsOfServiceTosTypeField = "managed" | "external";
export declare function deserializeTermsOfServiceTosTypeField(val: JSON): TermsOfServiceTosTypeField;
export declare function serializeTermsOfServiceTosTypeField(val: TermsOfServiceTosTypeField): JSON;
export type TermsOfServiceBaseTypeField = "terms_of_service";
export declare function deserializeTermsOfServiceBaseTypeField(val: JSON): TermsOfServiceBaseTypeField;
export declare function serializeTermsOfServiceBaseTypeField(val: TermsOfServiceBaseTypeField): JSON;
export interface TermsOfServiceBase {
    readonly id?: string;
    readonly type?: TermsOfServiceBaseTypeField;
}
export declare function deserializeTermsOfServiceBase(val: JSON): TermsOfServiceBase;
export declare function serializeTermsOfServiceBase(val: TermsOfServiceBase): JSON;
export type TermsOfService = TermsOfServiceBase & {
    /**
     * Whether these terms are enabled or not */
    readonly status?: TermsOfServiceStatusField;
    readonly enterprise?: TermsOfServiceEnterpriseField;
    /**
     * Whether to apply these terms to managed users or external users */
    readonly tosType?: TermsOfServiceTosTypeField;
    /**
     * The text for your terms and conditions. This text could be
     * empty if the `status` is set to `disabled`. */
    readonly text?: string;
    /**
     * When the legal item was created */
    readonly createdAt?: string;
    /**
     * When the legal item was modified. */
    readonly modifiedAt?: string;
};
export declare function deserializeTermsOfService(val: JSON): TermsOfService;
export declare function serializeTermsOfService(val: TermsOfService): JSON;
export interface TermsOfServices {
    readonly totalCount?: number;
    readonly entries?: readonly TermsOfService[];
}
export declare function deserializeTermsOfServices(val: JSON): TermsOfServices;
export declare function serializeTermsOfServices(val: TermsOfServices): JSON;
export interface CollaborationAcceptanceRequirementsStatusFieldTermsOfServiceRequirementField {
    readonly isAccepted?: boolean;
    readonly termsOfService?: TermsOfServiceBase;
}
export declare function deserializeCollaborationAcceptanceRequirementsStatusFieldTermsOfServiceRequirementField(val: JSON): CollaborationAcceptanceRequirementsStatusFieldTermsOfServiceRequirementField;
export declare function serializeCollaborationAcceptanceRequirementsStatusFieldTermsOfServiceRequirementField(val: CollaborationAcceptanceRequirementsStatusFieldTermsOfServiceRequirementField): JSON;
export interface CollaborationAcceptanceRequirementsStatusField {
    readonly termsOfServiceRequirement?: CollaborationAcceptanceRequirementsStatusFieldTermsOfServiceRequirementField;
    readonly strongPasswordRequirement?: CollaborationAcceptanceRequirementsStatusFieldStrongPasswordRequirementField;
    readonly twoFactorAuthenticationRequirement?: CollaborationAcceptanceRequirementsStatusFieldTwoFactorAuthenticationRequirementField;
}
export declare function deserializeCollaborationAcceptanceRequirementsStatusField(val: JSON): CollaborationAcceptanceRequirementsStatusField;
export declare function serializeCollaborationAcceptanceRequirementsStatusField(val: CollaborationAcceptanceRequirementsStatusField): JSON;
export type TermsOfServiceUserStatusTypeField = "terms_of_service_user_status";
export declare function deserializeTermsOfServiceUserStatusTypeField(val: JSON): TermsOfServiceUserStatusTypeField;
export declare function serializeTermsOfServiceUserStatusTypeField(val: TermsOfServiceUserStatusTypeField): JSON;
export type TrashFileTypeField = "file";
export declare function deserializeTrashFileTypeField(val: JSON): TrashFileTypeField;
export declare function serializeTrashFileTypeField(val: TrashFileTypeField): JSON;
export type TrashFilePathCollectionFieldEntriesFieldTypeField = "folder";
export declare function deserializeTrashFilePathCollectionFieldEntriesFieldTypeField(val: JSON): TrashFilePathCollectionFieldEntriesFieldTypeField;
export declare function serializeTrashFilePathCollectionFieldEntriesFieldTypeField(val: TrashFilePathCollectionFieldEntriesFieldTypeField): JSON;
export interface TrashFilePathCollectionFieldEntriesField {
    readonly type?: TrashFilePathCollectionFieldEntriesFieldTypeField;
    readonly id?: string;
    readonly sequenceId?: string;
    readonly etag?: string;
    readonly name?: string;
}
export declare function deserializeTrashFilePathCollectionFieldEntriesField(val: JSON): TrashFilePathCollectionFieldEntriesField;
export declare function serializeTrashFilePathCollectionFieldEntriesField(val: TrashFilePathCollectionFieldEntriesField): JSON;
export interface TrashFilePathCollectionField {
    readonly totalCount: number;
    readonly entries: readonly TrashFilePathCollectionFieldEntriesField[];
}
export declare function deserializeTrashFilePathCollectionField(val: JSON): TrashFilePathCollectionField;
export declare function serializeTrashFilePathCollectionField(val: TrashFilePathCollectionField): JSON;
export type TrashFileItemStatusField = "active" | "trashed" | "deleted";
export declare function deserializeTrashFileItemStatusField(val: JSON): TrashFileItemStatusField;
export declare function serializeTrashFileItemStatusField(val: TrashFileItemStatusField): JSON;
export type TrashFolderTypeField = "folder";
export declare function deserializeTrashFolderTypeField(val: JSON): TrashFolderTypeField;
export declare function serializeTrashFolderTypeField(val: TrashFolderTypeField): JSON;
export type TrashFolderPathCollectionFieldEntriesFieldTypeField = "folder";
export declare function deserializeTrashFolderPathCollectionFieldEntriesFieldTypeField(val: JSON): TrashFolderPathCollectionFieldEntriesFieldTypeField;
export declare function serializeTrashFolderPathCollectionFieldEntriesFieldTypeField(val: TrashFolderPathCollectionFieldEntriesFieldTypeField): JSON;
export interface TrashFolderPathCollectionFieldEntriesField {
    readonly type?: TrashFolderPathCollectionFieldEntriesFieldTypeField;
    readonly id?: string;
    readonly sequenceId?: string;
    readonly etag?: string;
    readonly name?: string;
}
export declare function deserializeTrashFolderPathCollectionFieldEntriesField(val: JSON): TrashFolderPathCollectionFieldEntriesField;
export declare function serializeTrashFolderPathCollectionFieldEntriesField(val: TrashFolderPathCollectionFieldEntriesField): JSON;
export interface TrashFolderPathCollectionField {
    readonly totalCount: number;
    readonly entries: readonly TrashFolderPathCollectionFieldEntriesField[];
}
export declare function deserializeTrashFolderPathCollectionField(val: JSON): TrashFolderPathCollectionField;
export declare function serializeTrashFolderPathCollectionField(val: TrashFolderPathCollectionField): JSON;
export type TrashFolderItemStatusField = "active" | "trashed" | "deleted";
export declare function deserializeTrashFolderItemStatusField(val: JSON): TrashFolderItemStatusField;
export declare function serializeTrashFolderItemStatusField(val: TrashFolderItemStatusField): JSON;
export type TrashWebLinkTypeField = "web_link";
export declare function deserializeTrashWebLinkTypeField(val: JSON): TrashWebLinkTypeField;
export declare function serializeTrashWebLinkTypeField(val: TrashWebLinkTypeField): JSON;
export type TrashWebLinkPathCollectionFieldEntriesFieldTypeField = "folder";
export declare function deserializeTrashWebLinkPathCollectionFieldEntriesFieldTypeField(val: JSON): TrashWebLinkPathCollectionFieldEntriesFieldTypeField;
export declare function serializeTrashWebLinkPathCollectionFieldEntriesFieldTypeField(val: TrashWebLinkPathCollectionFieldEntriesFieldTypeField): JSON;
export interface TrashWebLinkPathCollectionFieldEntriesField {
    readonly type?: TrashWebLinkPathCollectionFieldEntriesFieldTypeField;
    readonly id?: string;
    readonly sequenceId?: string;
    readonly etag?: string;
    readonly name?: string;
}
export declare function deserializeTrashWebLinkPathCollectionFieldEntriesField(val: JSON): TrashWebLinkPathCollectionFieldEntriesField;
export declare function serializeTrashWebLinkPathCollectionFieldEntriesField(val: TrashWebLinkPathCollectionFieldEntriesField): JSON;
export interface TrashWebLinkPathCollectionField {
    readonly totalCount: number;
    readonly entries: readonly TrashWebLinkPathCollectionFieldEntriesField[];
}
export declare function deserializeTrashWebLinkPathCollectionField(val: JSON): TrashWebLinkPathCollectionField;
export declare function serializeTrashWebLinkPathCollectionField(val: TrashWebLinkPathCollectionField): JSON;
export type TrashWebLinkItemStatusField = "active" | "trashed" | "deleted";
export declare function deserializeTrashWebLinkItemStatusField(val: JSON): TrashWebLinkItemStatusField;
export declare function serializeTrashWebLinkItemStatusField(val: TrashWebLinkItemStatusField): JSON;
export type TrashFileRestoredTypeField = "file";
export declare function deserializeTrashFileRestoredTypeField(val: JSON): TrashFileRestoredTypeField;
export declare function serializeTrashFileRestoredTypeField(val: TrashFileRestoredTypeField): JSON;
export type TrashFileRestoredItemStatusField = "active" | "trashed" | "deleted";
export declare function deserializeTrashFileRestoredItemStatusField(val: JSON): TrashFileRestoredItemStatusField;
export declare function serializeTrashFileRestoredItemStatusField(val: TrashFileRestoredItemStatusField): JSON;
export type TrashFolderRestoredTypeField = "folder";
export declare function deserializeTrashFolderRestoredTypeField(val: JSON): TrashFolderRestoredTypeField;
export declare function serializeTrashFolderRestoredTypeField(val: TrashFolderRestoredTypeField): JSON;
export type TrashFolderRestoredItemStatusField = "active" | "trashed" | "deleted";
export declare function deserializeTrashFolderRestoredItemStatusField(val: JSON): TrashFolderRestoredItemStatusField;
export declare function serializeTrashFolderRestoredItemStatusField(val: TrashFolderRestoredItemStatusField): JSON;
export type TrashWebLinkRestoredTypeField = "web_link";
export declare function deserializeTrashWebLinkRestoredTypeField(val: JSON): TrashWebLinkRestoredTypeField;
export declare function serializeTrashWebLinkRestoredTypeField(val: TrashWebLinkRestoredTypeField): JSON;
export type TrashWebLinkRestoredItemStatusField = "active" | "trashed" | "deleted";
export declare function deserializeTrashWebLinkRestoredItemStatusField(val: JSON): TrashWebLinkRestoredItemStatusField;
export declare function serializeTrashWebLinkRestoredItemStatusField(val: TrashWebLinkRestoredItemStatusField): JSON;
export interface UploadPartMini {
    readonly partId?: string;
    readonly offset?: number;
    readonly size?: number;
}
export declare function deserializeUploadPartMini(val: JSON): UploadPartMini;
export declare function serializeUploadPartMini(val: UploadPartMini): JSON;
export type UploadPart = UploadPartMini & {
    /**
     * The SHA1 hash of the chunk. */
    readonly sha1?: string;
};
export declare function deserializeUploadPart(val: JSON): UploadPart;
export declare function serializeUploadPart(val: UploadPart): JSON;
export interface UploadedPart {
    readonly part?: UploadPart;
}
export declare function deserializeUploadedPart(val: JSON): UploadedPart;
export declare function serializeUploadedPart(val: UploadedPart): JSON;
export type UploadPartsOrderFieldDirectionField = "ASC" | "DESC";
export declare function deserializeUploadPartsOrderFieldDirectionField(val: JSON): UploadPartsOrderFieldDirectionField;
export declare function serializeUploadPartsOrderFieldDirectionField(val: UploadPartsOrderFieldDirectionField): JSON;
export interface UploadPartsOrderField {
    readonly by?: string;
    readonly direction?: UploadPartsOrderFieldDirectionField;
}
export declare function deserializeUploadPartsOrderField(val: JSON): UploadPartsOrderField;
export declare function serializeUploadPartsOrderField(val: UploadPartsOrderField): JSON;
export interface UploadParts {
    readonly totalCount?: number;
    readonly limit?: number;
    readonly offset?: number;
    readonly order?: readonly UploadPartsOrderField[];
    readonly entries?: readonly UploadPart[];
}
export declare function deserializeUploadParts(val: JSON): UploadParts;
export declare function serializeUploadParts(val: UploadParts): JSON;
export type UploadSessionTypeField = "upload_session";
export declare function deserializeUploadSessionTypeField(val: JSON): UploadSessionTypeField;
export declare function serializeUploadSessionTypeField(val: UploadSessionTypeField): JSON;
export interface UploadSessionSessionEndpointsField {
    readonly uploadPart?: string;
    readonly commit?: string;
    readonly abort?: string;
    readonly listParts?: string;
    readonly status?: string;
    readonly logEvent?: string;
}
export declare function deserializeUploadSessionSessionEndpointsField(val: JSON): UploadSessionSessionEndpointsField;
export declare function serializeUploadSessionSessionEndpointsField(val: UploadSessionSessionEndpointsField): JSON;
export interface UploadSession {
    readonly id?: string;
    readonly type?: UploadSessionTypeField;
    readonly sessionExpiresAt?: string;
    readonly partSize?: number;
    readonly totalParts?: number;
    readonly numPartsProcessed?: number;
    readonly sessionEndpoints?: UploadSessionSessionEndpointsField;
}
export declare function deserializeUploadSession(val: JSON): UploadSession;
export declare function serializeUploadSession(val: UploadSession): JSON;
export interface UploadUrl {
    readonly uploadUrl?: string;
    readonly uploadToken?: string;
}
export declare function deserializeUploadUrl(val: JSON): UploadUrl;
export declare function serializeUploadUrl(val: UploadUrl): JSON;
export type UserStatusField = "active" | "inactive" | "cannot_delete_edit" | "cannot_delete_edit_upload";
export declare function deserializeUserStatusField(val: JSON): UserStatusField;
export declare function serializeUserStatusField(val: UserStatusField): JSON;
export interface UserNotificationEmailField {
    readonly email?: string;
    readonly isConfirmed?: boolean;
}
export declare function deserializeUserNotificationEmailField(val: JSON): UserNotificationEmailField;
export declare function serializeUserNotificationEmailField(val: UserNotificationEmailField): JSON;
export interface UserAvatarPicUrlsField {
    readonly small?: string;
    readonly large?: string;
    readonly preview?: string;
}
export declare function deserializeUserAvatarPicUrlsField(val: JSON): UserAvatarPicUrlsField;
export declare function serializeUserAvatarPicUrlsField(val: UserAvatarPicUrlsField): JSON;
export interface UserAvatar {
    readonly picUrls?: UserAvatarPicUrlsField;
}
export declare function deserializeUserAvatar(val: JSON): UserAvatar;
export declare function serializeUserAvatar(val: UserAvatar): JSON;
export type UsersOrderFieldDirectionField = "ASC" | "DESC";
export declare function deserializeUsersOrderFieldDirectionField(val: JSON): UsersOrderFieldDirectionField;
export declare function serializeUsersOrderFieldDirectionField(val: UsersOrderFieldDirectionField): JSON;
export interface UsersOrderField {
    readonly by?: string;
    readonly direction?: UsersOrderFieldDirectionField;
}
export declare function deserializeUsersOrderField(val: JSON): UsersOrderField;
export declare function serializeUsersOrderField(val: UsersOrderField): JSON;
export type UserFullRoleField = "admin" | "coadmin" | "user";
export declare function deserializeUserFullRoleField(val: JSON): UserFullRoleField;
export declare function serializeUserFullRoleField(val: UserFullRoleField): JSON;
export type UserFullEnterpriseFieldTypeField = "enterprise";
export declare function deserializeUserFullEnterpriseFieldTypeField(val: JSON): UserFullEnterpriseFieldTypeField;
export declare function serializeUserFullEnterpriseFieldTypeField(val: UserFullEnterpriseFieldTypeField): JSON;
export interface UserFullEnterpriseField {
    readonly id?: string;
    readonly type?: UserFullEnterpriseFieldTypeField;
    readonly name?: string;
}
export declare function deserializeUserFullEnterpriseField(val: JSON): UserFullEnterpriseField;
export declare function serializeUserFullEnterpriseField(val: UserFullEnterpriseField): JSON;
export type UserBaseTypeField = "user";
export declare function deserializeUserBaseTypeField(val: JSON): UserBaseTypeField;
export declare function serializeUserBaseTypeField(val: UserBaseTypeField): JSON;
export interface UserBase {
    readonly id?: string;
    readonly type: UserBaseTypeField;
}
export declare function deserializeUserBase(val: JSON): UserBase;
export declare function serializeUserBase(val: UserBase): JSON;
export type UserCollaborations = UserBase & {
    /**
     * The display name of this user. If the collaboration status is `pending`, an empty string is returned. */
    readonly name: string;
    /**
     * The primary email address of this user. If the collaboration status is `pending`, an empty string is returned. */
    readonly login: string;
};
export declare function deserializeUserCollaborations(val: JSON): UserCollaborations;
export declare function serializeUserCollaborations(val: UserCollaborations): JSON;
export type UserMini = UserBase & {
    /**
     * The display name of this user */
    readonly name: string;
    /**
     * The primary email address of this user */
    readonly login: string;
};
export declare function deserializeUserMini(val: JSON): UserMini;
export declare function serializeUserMini(val: UserMini): JSON;
export type User = UserMini & {
    /**
     * When the user object was created */
    readonly createdAt?: string;
    /**
     * When the user object was last modified */
    readonly modifiedAt?: string;
    /**
     * The language of the user, formatted in modified version of the
     * [ISO 639-1](/guides/api-calls/language-codes) format. */
    readonly language?: string;
    /**
     * The user's timezone */
    readonly timezone?: string;
    /**
     * The user’s total available space amount in bytes */
    readonly spaceAmount?: number;
    /**
     * The amount of space in use by the user */
    readonly spaceUsed?: number;
    /**
     * The maximum individual file size in bytes the user can have */
    readonly maxUploadSize?: number;
    /**
     * The user's account status */
    readonly status?: UserStatusField;
    /**
     * The user’s job title */
    readonly jobTitle?: string;
    /**
     * The user’s phone number */
    readonly phone?: string;
    /**
     * The user’s address */
    readonly address?: string;
    /**
     * URL of the user’s avatar image */
    readonly avatarUrl?: string;
    /**
     * An alternate notification email address to which email
     * notifications are sent. When it's confirmed, this will be
     * the email address to which notifications are sent instead of
     * to the primary email address. */
    readonly notificationEmail?: UserNotificationEmailField;
};
export declare function deserializeUser(val: JSON): User;
export declare function serializeUser(val: User): JSON;
export interface Users {
    readonly totalCount?: number;
    readonly limit?: number;
    readonly offset?: number;
    readonly order?: readonly UsersOrderField[];
    readonly entries?: readonly User[];
}
export declare function deserializeUsers(val: JSON): Users;
export declare function serializeUsers(val: Users): JSON;
export interface TrashWebLinkRestored {
    readonly type?: TrashWebLinkRestoredTypeField;
    readonly id?: string;
    readonly sequenceId: string;
    readonly etag?: string;
    readonly name?: string;
    readonly url?: string;
    readonly parent?: FolderMini;
    readonly description?: string;
    readonly pathCollection: TrashWebLinkRestoredPathCollectionField;
    readonly createdAt?: string;
    readonly modifiedAt?: string;
    readonly trashedAt?: string;
    readonly purgedAt?: string;
    readonly createdBy?: UserMini;
    readonly modifiedBy?: UserMini;
    readonly ownedBy?: UserMini;
    readonly sharedLink?: string;
    readonly itemStatus?: TrashWebLinkRestoredItemStatusField;
}
export declare function deserializeTrashWebLinkRestored(val: JSON): TrashWebLinkRestored;
export declare function serializeTrashWebLinkRestored(val: TrashWebLinkRestored): JSON;
export interface TrashFolderRestored {
    readonly id?: string;
    readonly etag?: string;
    readonly type?: TrashFolderRestoredTypeField;
    readonly sequenceId?: string;
    readonly name?: string;
    readonly createdAt?: string;
    readonly modifiedAt?: string;
    readonly description?: string;
    readonly size?: number;
    readonly pathCollection?: TrashFolderRestoredPathCollectionField;
    readonly createdBy?: UserMini;
    readonly modifiedBy?: UserMini;
    readonly trashedAt?: string;
    readonly purgedAt?: string;
    readonly contentCreatedAt?: string;
    readonly contentModifiedAt?: string;
    readonly ownedBy?: UserMini;
    readonly sharedLink?: string;
    readonly folderUploadEmail?: string;
    readonly parent?: FolderMini;
    readonly itemStatus?: TrashFolderRestoredItemStatusField;
}
export declare function deserializeTrashFolderRestored(val: JSON): TrashFolderRestored;
export declare function serializeTrashFolderRestored(val: TrashFolderRestored): JSON;
export interface TrashFileRestored {
    readonly id: string;
    readonly etag?: string;
    readonly type: TrashFileRestoredTypeField;
    readonly sequenceId: string;
    readonly name?: string;
    readonly sha1: string;
    readonly fileVersion?: FileVersionMini;
    readonly description: string;
    readonly size: number;
    readonly pathCollection: TrashFileRestoredPathCollectionField;
    readonly createdAt: string;
    readonly modifiedAt: string;
    readonly trashedAt?: string;
    readonly purgedAt?: string;
    readonly contentCreatedAt?: string;
    readonly contentModifiedAt?: string;
    readonly createdBy?: UserMini;
    readonly modifiedBy: UserMini;
    readonly ownedBy: UserMini;
    readonly sharedLink?: string;
    readonly parent?: FolderMini;
    readonly itemStatus: TrashFileRestoredItemStatusField;
}
export declare function deserializeTrashFileRestored(val: JSON): TrashFileRestored;
export declare function serializeTrashFileRestored(val: TrashFileRestored): JSON;
export interface TrashWebLink {
    readonly type?: TrashWebLinkTypeField;
    readonly id?: string;
    readonly sequenceId?: string;
    readonly etag?: string;
    readonly name?: string;
    readonly url?: string;
    readonly parent?: FolderMini;
    readonly description?: string;
    readonly pathCollection?: TrashWebLinkPathCollectionField;
    readonly createdAt?: string;
    readonly modifiedAt?: string;
    readonly trashedAt?: string;
    readonly purgedAt?: string;
    readonly createdBy?: UserMini;
    readonly modifiedBy?: UserMini;
    readonly ownedBy?: UserMini;
    readonly sharedLink?: string;
    readonly itemStatus?: TrashWebLinkItemStatusField;
}
export declare function deserializeTrashWebLink(val: JSON): TrashWebLink;
export declare function serializeTrashWebLink(val: TrashWebLink): JSON;
export interface TrashFolder {
    readonly id: string;
    readonly etag?: string;
    readonly type: TrashFolderTypeField;
    readonly sequenceId?: string;
    readonly name: string;
    readonly createdAt?: string;
    readonly modifiedAt?: string;
    readonly description: string;
    readonly size: number;
    readonly pathCollection: TrashFolderPathCollectionField;
    readonly createdBy: UserMini;
    readonly modifiedBy: UserMini;
    readonly trashedAt?: string;
    readonly purgedAt?: string;
    readonly contentCreatedAt?: string;
    readonly contentModifiedAt?: string;
    readonly ownedBy: UserMini;
    readonly sharedLink?: string;
    readonly folderUploadEmail?: string;
    readonly parent?: FolderMini;
    readonly itemStatus: TrashFolderItemStatusField;
}
export declare function deserializeTrashFolder(val: JSON): TrashFolder;
export declare function serializeTrashFolder(val: TrashFolder): JSON;
export interface TrashFile {
    readonly id: string;
    readonly etag?: string;
    readonly type: TrashFileTypeField;
    readonly sequenceId: string;
    readonly name?: string;
    readonly sha1: string;
    readonly fileVersion?: FileVersionMini;
    readonly description: string;
    readonly size: number;
    readonly pathCollection: TrashFilePathCollectionField;
    readonly createdAt: string;
    readonly modifiedAt: string;
    readonly trashedAt?: string;
    readonly purgedAt?: string;
    readonly contentCreatedAt?: string;
    readonly contentModifiedAt?: string;
    readonly createdBy?: UserMini;
    readonly modifiedBy: UserMini;
    readonly ownedBy: UserMini;
    readonly sharedLink?: string;
    readonly parent?: FolderMini;
    readonly itemStatus: TrashFileItemStatusField;
}
export declare function deserializeTrashFile(val: JSON): TrashFile;
export declare function serializeTrashFile(val: TrashFile): JSON;
export interface TermsOfServiceUserStatus {
    readonly id?: string;
    readonly type?: TermsOfServiceUserStatusTypeField;
    readonly tos?: TermsOfServiceBase;
    readonly user?: UserMini;
    readonly isAccepted?: boolean;
    readonly createdAt?: string;
    readonly modifiedAt?: string;
}
export declare function deserializeTermsOfServiceUserStatus(val: JSON): TermsOfServiceUserStatus;
export declare function serializeTermsOfServiceUserStatus(val: TermsOfServiceUserStatus): JSON;
export interface TermsOfServiceUserStatuses {
    readonly totalCount?: number;
    readonly entries?: readonly TermsOfServiceUserStatus[];
}
export declare function deserializeTermsOfServiceUserStatuses(val: JSON): TermsOfServiceUserStatuses;
export declare function serializeTermsOfServiceUserStatuses(val: TermsOfServiceUserStatuses): JSON;
export interface TaskAssignment {
    readonly id?: string;
    readonly type?: TaskAssignmentTypeField;
    readonly item?: FileMini;
    readonly assignedTo?: UserMini;
    readonly message?: string;
    readonly completedAt?: string;
    readonly assignedAt?: string;
    readonly remindedAt?: string;
    readonly resolutionState?: TaskAssignmentResolutionStateField;
    readonly assignedBy?: UserMini;
}
export declare function deserializeTaskAssignment(val: JSON): TaskAssignment;
export declare function serializeTaskAssignment(val: TaskAssignment): JSON;
export interface TaskAssignments {
    readonly totalCount?: number;
    readonly entries?: readonly TaskAssignment[];
}
export declare function deserializeTaskAssignments(val: JSON): TaskAssignments;
export declare function serializeTaskAssignments(val: TaskAssignments): JSON;
export interface Task {
    readonly id?: string;
    readonly type?: TaskTypeField;
    readonly item?: FileMini;
    readonly dueAt?: string;
    readonly action?: TaskActionField;
    readonly message?: string;
    readonly taskAssignmentCollection?: TaskAssignments;
    readonly isCompleted?: boolean;
    readonly createdBy?: UserMini;
    readonly createdAt?: string;
    readonly completionRule?: TaskCompletionRuleField;
}
export declare function deserializeTask(val: JSON): Task;
export declare function serializeTask(val: Task): JSON;
export interface Tasks {
    readonly totalCount?: number;
    readonly entries?: readonly Task[];
}
export declare function deserializeTasks(val: JSON): Tasks;
export declare function serializeTasks(val: Tasks): JSON;
export interface RetentionPolicyAssignment {
    readonly id?: string;
    readonly type?: RetentionPolicyAssignmentTypeField;
    readonly retentionPolicy?: RetentionPolicyMini;
    readonly assignedTo?: RetentionPolicyAssignmentAssignedToField;
    readonly filterFields?: readonly RetentionPolicyAssignmentFilterFieldsField[];
    readonly assignedBy?: UserMini;
    readonly assignedAt?: string;
    readonly startDateField?: string;
}
export declare function deserializeRetentionPolicyAssignment(val: JSON): RetentionPolicyAssignment;
export declare function serializeRetentionPolicyAssignment(val: RetentionPolicyAssignment): JSON;
export type RetentionPolicy = RetentionPolicyMini & {
    /**
     * The additional text description of the retention policy. */
    readonly description?: string;
    /**
     * The type of the retention policy. A retention
     * policy type can either be `finite`, where a
     * specific amount of time to retain the content is known
     * upfront, or `indefinite`, where the amount of time
     * to retain the content is still unknown. */
    readonly policyType?: RetentionPolicyPolicyTypeField;
    /**
     * Specifies the retention type:
     *
     * * `modifiable`: You can modify the retention policy. For example,
     *  you can add or remove folders, shorten or lengthen
     *  the policy duration, or delete the assignment.
     *  Use this type if your retention policy
     *  is not related to any regulatory purposes.
     *
     * * `non-modifiable`: You can modify the retention policy
     *  only in a limited way: add a folder, lengthen the duration,
     *  retire the policy, change the disposition action
     *  or notification settings. You cannot perform other actions,
     *  such as deleting the assignment or shortening the
     *  policy duration. Use this type to ensure
     *  compliance with regulatory retention policies. */
    readonly retentionType?: RetentionPolicyRetentionTypeField;
    /**
     * The status of the retention policy. The status of
     * a policy will be `active`, unless explicitly retired by an
     * administrator, in which case the status will be `retired`.
     * Once a policy has been retired, it cannot become
     * active again. */
    readonly status?: RetentionPolicyStatusField;
    readonly createdBy?: UserMini;
    /**
     * When the retention policy object was created. */
    readonly createdAt?: string;
    /**
     * When the retention policy object was last modified. */
    readonly modifiedAt?: string;
    /**
     * Determines if the owner of items under the policy
     * can extend the retention when the original
     * retention duration is about to end. */
    readonly canOwnerExtendRetention?: boolean;
    /**
     * Determines if owners and co-owners of items
     * under the policy are notified when
     * the retention duration is about to end. */
    readonly areOwnersNotified?: boolean;
    /**
     * A list of users notified when the retention policy duration is about to end. */
    readonly customNotificationRecipients?: readonly UserMini[];
    /**
     * Counts the retention policy assignments for each item type. */
    readonly assignmentCounts?: RetentionPolicyAssignmentCountsField;
};
export declare function deserializeRetentionPolicy(val: JSON): RetentionPolicy;
export declare function serializeRetentionPolicy(val: RetentionPolicy): JSON;
export type LegalHoldPolicy = LegalHoldPolicyMini & {
    /**
     * Name of the legal hold policy. */
    readonly policyName?: string;
    /**
     * Description of the legal hold policy. Optional
     * property with a 500 character limit. */
    readonly description?: string;
    /**
     * * 'active' - the policy is not in a transition state
     * * 'applying' - that the policy is in the process of
     *   being applied
     * * 'releasing' - that the process is in the process
     *   of being released
     * * 'released' - the policy is no longer active */
    readonly status?: LegalHoldPolicyStatusField;
    /**
     * Counts of assignments within this a legal hold policy by item type */
    readonly assignmentCounts?: LegalHoldPolicyAssignmentCountsField;
    readonly createdBy?: UserMini;
    /**
     * When the legal hold policy object was created */
    readonly createdAt?: string;
    /**
     * When the legal hold policy object was modified.
     * Does not update when assignments are added or removed. */
    readonly modifiedAt?: string;
    /**
     * When the policy release request was sent. (Because
     * it can take time for a policy to fully delete, this
     * isn't quite the same time that the policy is fully deleted).
     *
     * If `null`, the policy was not deleted. */
    readonly deletedAt?: string;
    /**
     * User-specified, optional date filter applies to
     * Custodian assignments only */
    readonly filterStartedAt?: string;
    /**
     * User-specified, optional date filter applies to
     * Custodian assignments only */
    readonly filterEndedAt?: string;
    /**
     * Optional notes about why the policy was created. */
    readonly releaseNotes?: string;
};
export declare function deserializeLegalHoldPolicy(val: JSON): LegalHoldPolicy;
export declare function serializeLegalHoldPolicy(val: LegalHoldPolicy): JSON;
export interface LegalHoldPolicies {
    readonly limit?: number;
    readonly nextMarker?: number;
    readonly prevMarker?: number;
    readonly entries?: readonly LegalHoldPolicy[];
}
export declare function deserializeLegalHoldPolicies(val: JSON): LegalHoldPolicies;
export declare function serializeLegalHoldPolicies(val: LegalHoldPolicies): JSON;
export interface Invite {
    readonly id?: string;
    readonly type?: InviteTypeField;
    readonly invitedTo?: InviteInvitedToField;
    readonly actionableBy?: UserMini;
    readonly invitedBy?: UserMini;
    readonly status?: string;
    readonly createdAt?: string;
    readonly modifiedAt?: string;
}
export declare function deserializeInvite(val: JSON): Invite;
export declare function serializeInvite(val: Invite): JSON;
export interface GroupMembership {
    readonly id?: string;
    readonly type?: GroupMembershipTypeField;
    readonly user?: UserMini;
    readonly group?: GroupMini;
    readonly role?: GroupMembershipRoleField;
    readonly createdAt?: string;
    readonly modifiedAt?: string;
}
export declare function deserializeGroupMembership(val: JSON): GroupMembership;
export declare function serializeGroupMembership(val: GroupMembership): JSON;
export interface GroupMemberships {
    readonly totalCount?: number;
    readonly limit?: number;
    readonly offset?: number;
    readonly order?: readonly GroupMembershipsOrderField[];
    readonly entries?: readonly GroupMembership[];
}
export declare function deserializeGroupMemberships(val: JSON): GroupMemberships;
export declare function serializeGroupMemberships(val: GroupMemberships): JSON;
export type FileVersion = FileVersionMini & {
    /**
     * The name of the file version */
    readonly name?: string;
    /**
     * Size of the file version in bytes */
    readonly size?: number;
    /**
     * When the file version object was created */
    readonly createdAt?: string;
    /**
     * When the file version object was last updated */
    readonly modifiedAt?: string;
    readonly modifiedBy?: UserMini;
    /**
     * When the file version object was trashed. */
    readonly trashedAt?: string;
    readonly trashedBy?: UserMini;
    /**
     * When the file version was restored from the trash. */
    readonly restoredAt?: string;
    readonly restoredBy?: UserMini;
    /**
     * When the file version object will be permanently deleted. */
    readonly purgedAt?: string;
    readonly uploaderDisplayName?: string;
};
export declare function deserializeFileVersion(val: JSON): FileVersion;
export declare function serializeFileVersion(val: FileVersion): JSON;
export interface FileVersions {
    readonly totalCount?: number;
    readonly limit?: number;
    readonly offset?: number;
    readonly order?: readonly FileVersionsOrderField[];
    readonly entries?: readonly FileVersion[];
}
export declare function deserializeFileVersions(val: JSON): FileVersions;
export declare function serializeFileVersions(val: FileVersions): JSON;
export type FileVersionFull = FileVersion & {
    /**
     * The version number of this file version */
    readonly versionNumber?: string;
};
export declare function deserializeFileVersionFull(val: JSON): FileVersionFull;
export declare function serializeFileVersionFull(val: FileVersionFull): JSON;
export interface FileRequest {
    readonly id?: string;
    readonly type?: FileRequestTypeField;
    readonly title?: string;
    readonly description?: string;
    readonly status?: FileRequestStatusField;
    readonly isEmailRequired?: boolean;
    readonly isDescriptionRequired?: boolean;
    readonly expiresAt?: string;
    readonly folder: FolderMini;
    readonly url?: string;
    readonly etag?: string;
    readonly createdBy?: UserMini;
    readonly createdAt: string;
    readonly updatedBy?: UserMini;
    readonly updatedAt: string;
}
export declare function deserializeFileRequest(val: JSON): FileRequest;
export declare function serializeFileRequest(val: FileRequest): JSON;
export interface FileFullLockField {
    readonly id?: string;
    readonly type?: FileFullLockFieldTypeField;
    readonly createdBy?: UserMini;
    readonly createdAt?: string;
    readonly expiredAt?: string;
    readonly isDownloadPrevented?: boolean;
    readonly appType?: FileFullLockFieldAppTypeField;
}
export declare function deserializeFileFullLockField(val: JSON): FileFullLockField;
export declare function serializeFileFullLockField(val: FileFullLockField): JSON;
export type File = FileMini & {
    /**
     * The optional description of this file */
    readonly description: string;
    /**
     * The file size in bytes. Be careful parsing this integer as it can
     * get very large and cause an integer overflow. */
    readonly size: number;
    readonly pathCollection: FilePathCollectionField;
    /**
     * The date and time when the file was created on Box. */
    readonly createdAt: string;
    /**
     * The date and time when the file was last updated on Box. */
    readonly modifiedAt: string;
    /**
     * The time at which this file was put in the trash. */
    readonly trashedAt?: string;
    /**
     * The time at which this file is expected to be purged
     * from the trash. */
    readonly purgedAt?: string;
    /**
     * The date and time at which this file was originally
     * created, which might be before it was uploaded to Box. */
    readonly contentCreatedAt?: string;
    /**
     * The date and time at which this file was last updated,
     * which might be before it was uploaded to Box. */
    readonly contentModifiedAt?: string;
    readonly createdBy?: UserMini;
    readonly modifiedBy: UserMini;
    readonly ownedBy: UserMini;
    readonly sharedLink?: FileSharedLinkField;
    readonly parent?: FolderMini;
    /**
     * Defines if this item has been deleted or not.
     *
     * * `active` when the item has is not in the trash
     * * `trashed` when the item has been moved to the trash but not deleted
     * * `deleted` when the item has been permanently deleted. */
    readonly itemStatus: FileItemStatusField;
};
export declare function deserializeFile(val: JSON): File;
export declare function serializeFile(val: File): JSON;
export interface Files {
    readonly totalCount?: number;
    readonly entries?: readonly File[];
}
export declare function deserializeFiles(val: JSON): Files;
export declare function serializeFiles(val: Files): JSON;
export interface DevicePinner {
    readonly id?: string;
    readonly type?: DevicePinnerTypeField;
    readonly ownedBy?: UserMini;
    readonly productName?: string;
}
export declare function deserializeDevicePinner(val: JSON): DevicePinner;
export declare function serializeDevicePinner(val: DevicePinner): JSON;
export interface DevicePinners {
    readonly entries?: readonly DevicePinner[];
    readonly limit?: number;
    readonly nextMarker?: number;
    readonly order?: readonly DevicePinnersOrderField[];
}
export declare function deserializeDevicePinners(val: JSON): DevicePinners;
export declare function serializeDevicePinners(val: DevicePinners): JSON;
export type Comment = CommentBase & {
    /**
     * Whether or not this comment is a reply to another
     * comment */
    readonly isReplyComment?: boolean;
    /**
     * The text of the comment, as provided by the user */
    readonly message?: string;
    readonly createdBy?: UserMini;
    /**
     * The time this comment was created */
    readonly createdAt?: string;
    /**
     * The time this comment was last modified */
    readonly modifiedAt?: string;
    readonly item?: CommentItemField;
};
export declare function deserializeComment(val: JSON): Comment;
export declare function serializeComment(val: Comment): JSON;
export type CommentFull = Comment & {
    /**
     * The string representing the comment text with
     * @mentions included. @mention format is @[id:username]
     * where `id` is user's Box ID and `username` is
     * their display name. */
    readonly taggedMessage?: string;
};
export declare function deserializeCommentFull(val: JSON): CommentFull;
export declare function serializeCommentFull(val: CommentFull): JSON;
export interface Comments {
    readonly totalCount?: number;
    readonly limit?: number;
    readonly offset?: number;
    readonly order?: readonly CommentsOrderField[];
    readonly entries?: readonly Comment[];
}
export declare function deserializeComments(val: JSON): Comments;
export declare function serializeComments(val: Comments): JSON;
export type ShieldInformationBarrierSegmentRestriction = ShieldInformationBarrierSegmentRestrictionMini & {
    readonly shieldInformationBarrier?: ShieldInformationBarrierBase;
    /**
     * ISO date time string when this
     * shield information barrier
     * Segment Restriction object was created. */
    readonly createdAt?: string;
    readonly createdBy?: UserBase;
    /**
     * ISO date time string when this
     * shield information barrier segment
     * Restriction was updated. */
    readonly updatedAt?: string;
    readonly updatedBy?: UserBase;
};
export declare function deserializeShieldInformationBarrierSegmentRestriction(val: JSON): ShieldInformationBarrierSegmentRestriction;
export declare function serializeShieldInformationBarrierSegmentRestriction(val: ShieldInformationBarrierSegmentRestriction): JSON;
export type ShieldInformationBarrierSegmentMemberMini = ShieldInformationBarrierSegmentMemberBase & {
    readonly user?: UserBase;
};
export declare function deserializeShieldInformationBarrierSegmentMemberMini(val: JSON): ShieldInformationBarrierSegmentMemberMini;
export declare function serializeShieldInformationBarrierSegmentMemberMini(val: ShieldInformationBarrierSegmentMemberMini): JSON;
export type ShieldInformationBarrierSegmentMember = ShieldInformationBarrierSegmentMemberMini & {
    readonly shieldInformationBarrier?: ShieldInformationBarrierBase;
    /**
     * The `type` and `id` of the requested
     * shield information barrier segment. */
    readonly shieldInformationBarrierSegment?: ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField;
    readonly user?: UserBase;
    /**
     * ISO date time string when this shield
     * information barrier object was created. */
    readonly createdAt?: string;
    readonly createdBy?: UserBase;
    /**
     * ISO date time string when this
     * shield information barrier segment Member was updated. */
    readonly updatedAt?: string;
    readonly updatedBy?: UserBase;
};
export declare function deserializeShieldInformationBarrierSegmentMember(val: JSON): ShieldInformationBarrierSegmentMember;
export declare function serializeShieldInformationBarrierSegmentMember(val: ShieldInformationBarrierSegmentMember): JSON;
export interface ShieldInformationBarrierSegment {
    readonly id?: string;
    readonly type?: ShieldInformationBarrierSegmentTypeField;
    readonly shieldInformationBarrier?: ShieldInformationBarrierBase;
    readonly name?: string;
    readonly description?: string;
    readonly createdAt?: string;
    readonly createdBy?: UserBase;
    readonly updatedAt?: string;
    readonly updatedBy?: UserBase;
}
export declare function deserializeShieldInformationBarrierSegment(val: JSON): ShieldInformationBarrierSegment;
export declare function serializeShieldInformationBarrierSegment(val: ShieldInformationBarrierSegment): JSON;
export type ShieldInformationBarrierReport = ShieldInformationBarrierReportBase & {
    readonly shieldInformationBarrier?: ShieldInformationBarrierReportShieldInformationBarrierField;
    /**
     * Status of the shield information report */
    readonly status?: ShieldInformationBarrierReportStatusField;
    readonly details?: ShieldInformationBarrierReportDetailsField;
    /**
     * ISO date time string when this
     * shield information barrier report object was created. */
    readonly createdAt?: string;
    readonly createdBy?: UserBase;
    /**
     * ISO date time string when this
     * shield information barrier report was updated. */
    readonly updatedAt?: string;
};
export declare function deserializeShieldInformationBarrierReport(val: JSON): ShieldInformationBarrierReport;
export declare function serializeShieldInformationBarrierReport(val: ShieldInformationBarrierReport): JSON;
export interface ShieldInformationBarrier {
    readonly id?: string;
    readonly type?: ShieldInformationBarrierTypeField;
    readonly enterprise?: EnterpriseBase;
    readonly status?: ShieldInformationBarrierStatusField;
    readonly createdAt?: string;
    readonly createdBy?: UserBase;
    readonly updatedAt?: string;
    readonly updatedBy?: UserBase;
    readonly enabledAt?: string;
    readonly enabledBy?: UserBase;
}
export declare function deserializeShieldInformationBarrier(val: JSON): ShieldInformationBarrier;
export declare function serializeShieldInformationBarrier(val: ShieldInformationBarrier): JSON;
export interface FolderLock {
    readonly folder?: FolderMini;
    readonly id?: string;
    readonly type?: string;
    readonly createdBy?: UserBase;
    readonly createdAt?: string;
    readonly lockedOperations?: FolderLockLockedOperationsField;
    readonly lockType?: string;
}
export declare function deserializeFolderLock(val: JSON): FolderLock;
export declare function serializeFolderLock(val: FolderLock): JSON;
export interface FolderLocks {
    readonly limit?: number;
    readonly nextMarker?: number;
    readonly prevMarker?: number;
    readonly entries?: readonly FolderLock[];
}
export declare function deserializeFolderLocks(val: JSON): FolderLocks;
export declare function serializeFolderLocks(val: FolderLocks): JSON;
export interface WatermarkWatermarkField {
    readonly createdAt?: string;
    readonly modifiedAt?: string;
}
export declare function deserializeWatermarkWatermarkField(val: JSON): WatermarkWatermarkField;
export declare function serializeWatermarkWatermarkField(val: WatermarkWatermarkField): JSON;
export interface Watermark {
    readonly watermark?: WatermarkWatermarkField;
}
export declare function deserializeWatermark(val: JSON): Watermark;
export declare function serializeWatermark(val: Watermark): JSON;
export type WebhookTriggersField = "FILE.UPLOADED" | "FILE.PREVIEWED" | "FILE.DOWNLOADED" | "FILE.TRASHED" | "FILE.DELETED" | "FILE.RESTORED" | "FILE.COPIED" | "FILE.MOVED" | "FILE.LOCKED" | "FILE.UNLOCKED" | "FILE.RENAMED" | "COMMENT.CREATED" | "COMMENT.UPDATED" | "COMMENT.DELETED" | "TASK_ASSIGNMENT.CREATED" | "TASK_ASSIGNMENT.UPDATED" | "METADATA_INSTANCE.CREATED" | "METADATA_INSTANCE.UPDATED" | "METADATA_INSTANCE.DELETED" | "FOLDER.CREATED" | "FOLDER.RENAMED" | "FOLDER.DOWNLOADED" | "FOLDER.RESTORED" | "FOLDER.DELETED" | "FOLDER.COPIED" | "FOLDER.MOVED" | "FOLDER.TRASHED" | "WEBHOOK.DELETED" | "COLLABORATION.CREATED" | "COLLABORATION.ACCEPTED" | "COLLABORATION.REJECTED" | "COLLABORATION.REMOVED" | "COLLABORATION.UPDATED" | "SHARED_LINK.DELETED" | "SHARED_LINK.CREATED" | "SHARED_LINK.UPDATED" | "SIGN_REQUEST.COMPLETED" | "SIGN_REQUEST.DECLINED" | "SIGN_REQUEST.EXPIRED";
export declare function deserializeWebhookTriggersField(val: JSON): WebhookTriggersField;
export declare function serializeWebhookTriggersField(val: WebhookTriggersField): JSON;
export type WebhookMiniTypeField = "webhook";
export declare function deserializeWebhookMiniTypeField(val: JSON): WebhookMiniTypeField;
export declare function serializeWebhookMiniTypeField(val: WebhookMiniTypeField): JSON;
export type WebhookMiniTargetFieldTypeField = "file" | "folder";
export declare function deserializeWebhookMiniTargetFieldTypeField(val: JSON): WebhookMiniTargetFieldTypeField;
export declare function serializeWebhookMiniTargetFieldTypeField(val: WebhookMiniTargetFieldTypeField): JSON;
export interface WebhookMiniTargetField {
    readonly id?: string;
    readonly type?: WebhookMiniTargetFieldTypeField;
}
export declare function deserializeWebhookMiniTargetField(val: JSON): WebhookMiniTargetField;
export declare function serializeWebhookMiniTargetField(val: WebhookMiniTargetField): JSON;
export interface WebhookMini {
    readonly id?: string;
    readonly type?: WebhookMiniTypeField;
    readonly target?: WebhookMiniTargetField;
}
export declare function deserializeWebhookMini(val: JSON): WebhookMini;
export declare function serializeWebhookMini(val: WebhookMini): JSON;
export interface Webhooks {
    readonly limit?: number;
    readonly nextMarker?: number;
    readonly prevMarker?: number;
    readonly entries?: readonly WebhookMini[];
}
export declare function deserializeWebhooks(val: JSON): Webhooks;
export declare function serializeWebhooks(val: Webhooks): JSON;
export type Webhook = WebhookMini & {
    readonly createdBy?: UserMini;
    /**
     * A timestamp identifying the time that
     * the webhook was created. */
    readonly createdAt?: string;
    /**
     * The URL that is notified by this webhook */
    readonly address?: string;
    /**
     * An array of event names that this webhook is
     * to be triggered for */
    readonly triggers?: readonly WebhookTriggersField[];
};
export declare function deserializeWebhook(val: JSON): Webhook;
export declare function serializeWebhook(val: Webhook): JSON;
export type WebLinkSharedLinkFieldAccessField = "open" | "company" | "collaborators";
export declare function deserializeWebLinkSharedLinkFieldAccessField(val: JSON): WebLinkSharedLinkFieldAccessField;
export declare function serializeWebLinkSharedLinkFieldAccessField(val: WebLinkSharedLinkFieldAccessField): JSON;
export type WebLinkSharedLinkFieldEffectiveAccessField = "open" | "company" | "collaborators";
export declare function deserializeWebLinkSharedLinkFieldEffectiveAccessField(val: JSON): WebLinkSharedLinkFieldEffectiveAccessField;
export declare function serializeWebLinkSharedLinkFieldEffectiveAccessField(val: WebLinkSharedLinkFieldEffectiveAccessField): JSON;
export type WebLinkSharedLinkFieldEffectivePermissionField = "can_edit" | "can_download" | "can_preview" | "no_access";
export declare function deserializeWebLinkSharedLinkFieldEffectivePermissionField(val: JSON): WebLinkSharedLinkFieldEffectivePermissionField;
export declare function serializeWebLinkSharedLinkFieldEffectivePermissionField(val: WebLinkSharedLinkFieldEffectivePermissionField): JSON;
export interface WebLinkSharedLinkFieldPermissionsField {
    readonly canDownload: boolean;
    readonly canPreview: boolean;
    readonly canEdit: boolean;
}
export declare function deserializeWebLinkSharedLinkFieldPermissionsField(val: JSON): WebLinkSharedLinkFieldPermissionsField;
export declare function serializeWebLinkSharedLinkFieldPermissionsField(val: WebLinkSharedLinkFieldPermissionsField): JSON;
export interface WebLinkSharedLinkField {
    readonly url: string;
    readonly downloadUrl?: string;
    readonly vanityUrl?: string;
    readonly vanityName?: string;
    readonly access?: WebLinkSharedLinkFieldAccessField;
    readonly effectiveAccess: WebLinkSharedLinkFieldEffectiveAccessField;
    readonly effectivePermission: WebLinkSharedLinkFieldEffectivePermissionField;
    readonly unsharedAt?: string;
    readonly isPasswordEnabled: boolean;
    readonly permissions?: WebLinkSharedLinkFieldPermissionsField;
    readonly downloadCount: number;
    readonly previewCount: number;
}
export declare function deserializeWebLinkSharedLinkField(val: JSON): WebLinkSharedLinkField;
export declare function serializeWebLinkSharedLinkField(val: WebLinkSharedLinkField): JSON;
export type WebLinkItemStatusField = "active" | "trashed" | "deleted";
export declare function deserializeWebLinkItemStatusField(val: JSON): WebLinkItemStatusField;
export declare function serializeWebLinkItemStatusField(val: WebLinkItemStatusField): JSON;
export type WebLinkBaseTypeField = "web_link";
export declare function deserializeWebLinkBaseTypeField(val: JSON): WebLinkBaseTypeField;
export declare function serializeWebLinkBaseTypeField(val: WebLinkBaseTypeField): JSON;
export interface WebLinkBase {
    readonly id: string;
    readonly type: WebLinkBaseTypeField;
    readonly etag?: string;
}
export declare function deserializeWebLinkBase(val: JSON): WebLinkBase;
export declare function serializeWebLinkBase(val: WebLinkBase): JSON;
export type WebLinkMini = WebLinkBase & {
    /**
     * The URL this web link points to */
    readonly url?: string;
    readonly sequenceId?: string;
    /**
     * The name of the web link */
    readonly name?: string;
};
export declare function deserializeWebLinkMini(val: JSON): WebLinkMini;
export declare function serializeWebLinkMini(val: WebLinkMini): JSON;
export type WebLink = WebLinkMini & {
    readonly parent?: FolderMini;
    /**
     * The description accompanying the web link. This is
     * visible within the Box web application. */
    readonly description?: string;
    readonly pathCollection?: WebLinkPathCollectionField;
    /**
     * When this file was created on Box’s servers. */
    readonly createdAt?: string;
    /**
     * When this file was last updated on the Box
     * servers. */
    readonly modifiedAt?: string;
    /**
     * When this file was moved to the trash. */
    readonly trashedAt?: string;
    /**
     * When this file will be permanently deleted. */
    readonly purgedAt?: string;
    readonly createdBy?: UserMini;
    readonly modifiedBy?: UserMini;
    readonly ownedBy?: UserMini;
    readonly sharedLink?: WebLinkSharedLinkField;
    /**
     * Whether this item is deleted or not. Values include `active`,
     * `trashed` if the file has been moved to the trash, and `deleted` if
     * the file has been permanently deleted */
    readonly itemStatus?: WebLinkItemStatusField;
};
export declare function deserializeWebLink(val: JSON): WebLink;
export declare function serializeWebLink(val: WebLink): JSON;
export type ItemsEntriesField = FileMini | FolderMini | WebLinkMini;
export declare function deserializeItemsEntriesField(val: JSON): ItemsEntriesField;
export declare function serializeItemsEntriesField(val: ItemsEntriesField): JSON;
export interface Items {
    readonly totalCount?: number;
    readonly limit?: number;
    readonly offset?: number;
    readonly order?: readonly ItemsOrderField[];
    readonly entries?: readonly ItemsEntriesField[];
}
export declare function deserializeItems(val: JSON): Items;
export declare function serializeItems(val: Items): JSON;
export type Folder = FolderMini & {
    /**
     * The date and time when the folder was created. This value may
     * be `null` for some folders such as the root folder or the trash
     * folder. */
    readonly createdAt?: string;
    /**
     * The date and time when the folder was last updated. This value may
     * be `null` for some folders such as the root folder or the trash
     * folder. */
    readonly modifiedAt?: string;
    readonly description?: string;
    /**
     * The folder size in bytes.
     *
     * Be careful parsing this integer as its
     * value can get very large. */
    readonly size: number;
    readonly pathCollection: FolderPathCollectionField;
    readonly createdBy: UserMini;
    readonly modifiedBy: UserMini;
    /**
     * The time at which this folder was put in the trash. */
    readonly trashedAt?: string;
    /**
     * The time at which this folder is expected to be purged
     * from the trash. */
    readonly purgedAt?: string;
    /**
     * The date and time at which this folder was originally
     * created. */
    readonly contentCreatedAt?: string;
    /**
     * The date and time at which this folder was last updated. */
    readonly contentModifiedAt?: string;
    readonly ownedBy: UserMini;
    readonly sharedLink?: FolderSharedLinkField;
    readonly folderUploadEmail?: FolderFolderUploadEmailField;
    readonly parent?: FolderMini;
    /**
     * Defines if this item has been deleted or not.
     *
     * * `active` when the item has is not in the trash
     * * `trashed` when the item has been moved to the trash but not deleted
     * * `deleted` when the item has been permanently deleted. */
    readonly itemStatus: FolderItemStatusField;
    readonly itemCollection: Items;
};
export declare function deserializeFolder(val: JSON): Folder;
export declare function serializeFolder(val: Folder): JSON;
export type SearchResultWithSharedLinkItemField = File | Folder | WebLink;
export declare function deserializeSearchResultWithSharedLinkItemField(val: JSON): SearchResultWithSharedLinkItemField;
export declare function serializeSearchResultWithSharedLinkItemField(val: SearchResultWithSharedLinkItemField): JSON;
export interface SearchResultWithSharedLink {
    readonly accessibleViaSharedLink?: string;
    readonly item?: SearchResultWithSharedLinkItemField;
    readonly type?: string;
}
export declare function deserializeSearchResultWithSharedLink(val: JSON): SearchResultWithSharedLink;
export declare function serializeSearchResultWithSharedLink(val: SearchResultWithSharedLink): JSON;
export interface SearchResultsWithSharedLinks {
    readonly totalCount?: number;
    readonly limit?: number;
    readonly offset?: number;
    readonly entries?: readonly SearchResultWithSharedLink[];
}
export declare function deserializeSearchResultsWithSharedLinks(val: JSON): SearchResultsWithSharedLinks;
export declare function serializeSearchResultsWithSharedLinks(val: SearchResultsWithSharedLinks): JSON;
export type SearchResultsEntriesField = File | Folder | WebLink;
export declare function deserializeSearchResultsEntriesField(val: JSON): SearchResultsEntriesField;
export declare function serializeSearchResultsEntriesField(val: SearchResultsEntriesField): JSON;
export interface SearchResults {
    readonly totalCount?: number;
    readonly limit?: number;
    readonly offset?: number;
    readonly entries?: readonly SearchResultsEntriesField[];
}
export declare function deserializeSearchResults(val: JSON): SearchResults;
export declare function serializeSearchResults(val: SearchResults): JSON;
export type RecentItemItemField = File | Folder | WebLink;
export declare function deserializeRecentItemItemField(val: JSON): RecentItemItemField;
export declare function serializeRecentItemItemField(val: RecentItemItemField): JSON;
export interface RecentItem {
    readonly type?: string;
    readonly item?: RecentItemItemField;
    readonly interactionType?: RecentItemInteractionTypeField;
    readonly interactedAt?: string;
    readonly interactionSharedLink?: string;
}
export declare function deserializeRecentItem(val: JSON): RecentItem;
export declare function serializeRecentItem(val: RecentItem): JSON;
export interface RecentItems {
    readonly limit?: number;
    readonly nextMarker?: number;
    readonly prevMarker?: number;
    readonly entries?: readonly RecentItem[];
}
export declare function deserializeRecentItems(val: JSON): RecentItems;
export declare function serializeRecentItems(val: RecentItems): JSON;
export type MetadataQueryResultsEntriesField = File | Folder;
export declare function deserializeMetadataQueryResultsEntriesField(val: JSON): MetadataQueryResultsEntriesField;
export declare function serializeMetadataQueryResultsEntriesField(val: MetadataQueryResultsEntriesField): JSON;
export interface MetadataQueryResults {
    readonly entries?: readonly MetadataQueryResultsEntriesField[];
    readonly limit?: number;
    readonly nextMarker?: string;
}
export declare function deserializeMetadataQueryResults(val: JSON): MetadataQueryResults;
export declare function serializeMetadataQueryResults(val: MetadataQueryResults): JSON;
export type LegalHoldPolicyAssignmentAssignedToField = File | Folder | WebLink;
export declare function deserializeLegalHoldPolicyAssignmentAssignedToField(val: JSON): LegalHoldPolicyAssignmentAssignedToField;
export declare function serializeLegalHoldPolicyAssignmentAssignedToField(val: LegalHoldPolicyAssignmentAssignedToField): JSON;
export type LegalHoldPolicyAssignment = LegalHoldPolicyAssignmentBase & {
    readonly legalHoldPolicy?: LegalHoldPolicyMini;
    readonly assignedTo?: LegalHoldPolicyAssignmentAssignedToField;
    readonly assignedBy?: UserMini;
    /**
     * When the legal hold policy assignment object was
     * created */
    readonly assignedAt?: string;
    /**
     * When the assignment release request was sent.
     * (Because it can take time for an assignment to fully
     * delete, this isn't quite the same time that the
     * assignment is fully deleted). If null, Assignment
     * was not deleted. */
    readonly deletedAt?: string;
};
export declare function deserializeLegalHoldPolicyAssignment(val: JSON): LegalHoldPolicyAssignment;
export declare function serializeLegalHoldPolicyAssignment(val: LegalHoldPolicyAssignment): JSON;
export interface FileVersionLegalHold {
    readonly id?: string;
    readonly type?: FileVersionLegalHoldTypeField;
    readonly fileVersion?: FileVersionMini;
    readonly file?: FileMini;
    readonly legalHoldPolicyAssignments?: readonly LegalHoldPolicyAssignment[];
    readonly deletedAt?: string;
}
export declare function deserializeFileVersionLegalHold(val: JSON): FileVersionLegalHold;
export declare function serializeFileVersionLegalHold(val: FileVersionLegalHold): JSON;
export interface FileVersionLegalHolds {
    readonly limit?: number;
    readonly nextMarker?: number;
    readonly prevMarker?: number;
    readonly entries?: readonly FileVersionLegalHold[];
}
export declare function deserializeFileVersionLegalHolds(val: JSON): FileVersionLegalHolds;
export declare function serializeFileVersionLegalHolds(val: FileVersionLegalHolds): JSON;
export type FolderFull = Folder & {
    readonly syncState?: FolderFullSyncStateField;
    /**
     * Specifies if this folder has any other collaborators. */
    readonly hasCollaborations?: boolean;
    readonly permissions?: FolderFullPermissionsField;
    readonly tags?: readonly string[];
    readonly canNonOwnersInvite?: boolean;
    /**
     * Specifies if this folder is owned by a user outside of the
     * authenticated enterprise. */
    readonly isExternallyOwned?: boolean;
    readonly metadata?: FolderFullMetadataField;
    readonly isCollaborationRestrictedToEnterprise?: boolean;
    /**
     * A list of access levels that are available
     * for this folder.
     *
     * For some folders, like the root folder, this will always
     * be an empty list as sharing is not allowed at that level. */
    readonly allowedSharedLinkAccessLevels?: readonly FolderFullAllowedSharedLinkAccessLevelsField[];
    /**
     * A list of the types of roles that user can be invited at
     * when sharing this folder. */
    readonly allowedInviteeRoles?: readonly FolderFullAllowedInviteeRolesField[];
    readonly watermarkInfo?: FolderFullWatermarkInfoField;
    /**
     * Specifies if the folder can be accessed
     * with the direct shared link or a shared link
     * to a parent folder. */
    readonly isAccessibleViaSharedLink?: boolean;
    /**
     * Specifies if collaborators who are not owners
     * of this folder are restricted from viewing other
     * collaborations on this folder.
     *
     * It also restricts non-owners from inviting new
     * collaborators. */
    readonly canNonOwnersViewCollaborators?: boolean;
    readonly classification?: FolderFullClassificationField;
};
export declare function deserializeFolderFull(val: JSON): FolderFull;
export declare function serializeFolderFull(val: FolderFull): JSON;
export type CollaborationItemField = File | Folder | WebLink;
export declare function deserializeCollaborationItemField(val: JSON): CollaborationItemField;
export declare function serializeCollaborationItemField(val: CollaborationItemField): JSON;
export interface Collaboration {
    readonly id?: string;
    readonly type?: CollaborationTypeField;
    readonly item?: CollaborationItemField;
    readonly accessibleBy?: UserCollaborations;
    readonly inviteEmail?: string;
    readonly role?: CollaborationRoleField;
    readonly expiresAt?: string;
    readonly status?: CollaborationStatusField;
    readonly acknowledgedAt?: string;
    readonly createdBy?: UserCollaborations;
    readonly createdAt?: string;
    readonly modifiedAt?: string;
    readonly acceptanceRequirementsStatus?: CollaborationAcceptanceRequirementsStatusField;
}
export declare function deserializeCollaboration(val: JSON): Collaboration;
export declare function serializeCollaboration(val: Collaboration): JSON;
export interface Collaborations {
    readonly totalCount?: number;
    readonly limit?: number;
    readonly offset?: number;
    readonly order?: readonly CollaborationsOrderField[];
    readonly entries?: readonly Collaboration[];
}
export declare function deserializeCollaborations(val: JSON): Collaborations;
export declare function serializeCollaborations(val: Collaborations): JSON;
export type WebhookInvocationSourceField = File | Folder;
export declare function deserializeWebhookInvocationSourceField(val: JSON): WebhookInvocationSourceField;
export declare function serializeWebhookInvocationSourceField(val: WebhookInvocationSourceField): JSON;
export interface WebhookInvocation {
    readonly id?: string;
    readonly type?: WebhookInvocationTypeField;
    readonly webhook?: Webhook;
    readonly createdBy?: UserMini;
    readonly createdAt?: string;
    readonly trigger?: WebhookInvocationTriggerField;
    readonly source?: WebhookInvocationSourceField;
}
export declare function deserializeWebhookInvocation(val: JSON): WebhookInvocation;
export declare function serializeWebhookInvocation(val: WebhookInvocation): JSON;
export type SkillInvocationSourceField = File | Folder;
export declare function deserializeSkillInvocationSourceField(val: JSON): SkillInvocationSourceField;
export declare function serializeSkillInvocationSourceField(val: SkillInvocationSourceField): JSON;
export type WorkflowFlowsFieldTypeField = "flow";
export declare function deserializeWorkflowFlowsFieldTypeField(val: JSON): WorkflowFlowsFieldTypeField;
export declare function serializeWorkflowFlowsFieldTypeField(val: WorkflowFlowsFieldTypeField): JSON;
export type WorkflowFlowsFieldTriggerFieldTypeField = "trigger";
export declare function deserializeWorkflowFlowsFieldTriggerFieldTypeField(val: JSON): WorkflowFlowsFieldTriggerFieldTypeField;
export declare function serializeWorkflowFlowsFieldTriggerFieldTypeField(val: WorkflowFlowsFieldTriggerFieldTypeField): JSON;
export type WorkflowFlowsFieldTriggerFieldTriggerTypeField = "WORKFLOW_MANUAL_START";
export declare function deserializeWorkflowFlowsFieldTriggerFieldTriggerTypeField(val: JSON): WorkflowFlowsFieldTriggerFieldTriggerTypeField;
export declare function serializeWorkflowFlowsFieldTriggerFieldTriggerTypeField(val: WorkflowFlowsFieldTriggerFieldTriggerTypeField): JSON;
export type WorkflowFlowsFieldTriggerFieldScopeFieldTypeField = "trigger_scope";
export declare function deserializeWorkflowFlowsFieldTriggerFieldScopeFieldTypeField(val: JSON): WorkflowFlowsFieldTriggerFieldScopeFieldTypeField;
export declare function serializeWorkflowFlowsFieldTriggerFieldScopeFieldTypeField(val: WorkflowFlowsFieldTriggerFieldScopeFieldTypeField): JSON;
export type WorkflowFlowsFieldTriggerFieldScopeFieldObjectFieldTypeField = "folder";
export declare function deserializeWorkflowFlowsFieldTriggerFieldScopeFieldObjectFieldTypeField(val: JSON): WorkflowFlowsFieldTriggerFieldScopeFieldObjectFieldTypeField;
export declare function serializeWorkflowFlowsFieldTriggerFieldScopeFieldObjectFieldTypeField(val: WorkflowFlowsFieldTriggerFieldScopeFieldObjectFieldTypeField): JSON;
export interface WorkflowFlowsFieldTriggerFieldScopeFieldObjectField {
    readonly type?: WorkflowFlowsFieldTriggerFieldScopeFieldObjectFieldTypeField;
    readonly id?: string;
}
export declare function deserializeWorkflowFlowsFieldTriggerFieldScopeFieldObjectField(val: JSON): WorkflowFlowsFieldTriggerFieldScopeFieldObjectField;
export declare function serializeWorkflowFlowsFieldTriggerFieldScopeFieldObjectField(val: WorkflowFlowsFieldTriggerFieldScopeFieldObjectField): JSON;
export interface WorkflowFlowsFieldTriggerFieldScopeField {
    readonly type?: WorkflowFlowsFieldTriggerFieldScopeFieldTypeField;
    readonly ref?: string;
    readonly object?: WorkflowFlowsFieldTriggerFieldScopeFieldObjectField;
}
export declare function deserializeWorkflowFlowsFieldTriggerFieldScopeField(val: JSON): WorkflowFlowsFieldTriggerFieldScopeField;
export declare function serializeWorkflowFlowsFieldTriggerFieldScopeField(val: WorkflowFlowsFieldTriggerFieldScopeField): JSON;
export interface WorkflowFlowsFieldTriggerField {
    readonly type?: WorkflowFlowsFieldTriggerFieldTypeField;
    readonly triggerType?: WorkflowFlowsFieldTriggerFieldTriggerTypeField;
    readonly scope?: readonly WorkflowFlowsFieldTriggerFieldScopeField[];
}
export declare function deserializeWorkflowFlowsFieldTriggerField(val: JSON): WorkflowFlowsFieldTriggerField;
export declare function serializeWorkflowFlowsFieldTriggerField(val: WorkflowFlowsFieldTriggerField): JSON;
export type WorkflowFlowsFieldOutcomesFieldTypeField = "outcome";
export declare function deserializeWorkflowFlowsFieldOutcomesFieldTypeField(val: JSON): WorkflowFlowsFieldOutcomesFieldTypeField;
export declare function serializeWorkflowFlowsFieldOutcomesFieldTypeField(val: WorkflowFlowsFieldOutcomesFieldTypeField): JSON;
export type WorkflowFlowsFieldOutcomesFieldActionTypeField = "add_metadata" | "assign_task" | "copy_file" | "copy_folder" | "create_folder" | "delete_file" | "delete_folder" | "lock_file" | "move_file" | "move_folder" | "remove_watermark_file" | "rename_folder" | "restore_folder" | "share_file" | "share_folder" | "unlock_file" | "upload_file" | "wait_for_task" | "watermark_file" | "go_back_to_step" | "apply_file_classification" | "apply_folder_classification" | "send_notification";
export declare function deserializeWorkflowFlowsFieldOutcomesFieldActionTypeField(val: JSON): WorkflowFlowsFieldOutcomesFieldActionTypeField;
export declare function serializeWorkflowFlowsFieldOutcomesFieldActionTypeField(val: WorkflowFlowsFieldOutcomesFieldActionTypeField): JSON;
export type WorkflowFlowsFieldOutcomesFieldIfRejectedFieldTypeField = "outcome";
export declare function deserializeWorkflowFlowsFieldOutcomesFieldIfRejectedFieldTypeField(val: JSON): WorkflowFlowsFieldOutcomesFieldIfRejectedFieldTypeField;
export declare function serializeWorkflowFlowsFieldOutcomesFieldIfRejectedFieldTypeField(val: WorkflowFlowsFieldOutcomesFieldIfRejectedFieldTypeField): JSON;
export type WorkflowFlowsFieldOutcomesFieldIfRejectedFieldActionTypeField = "add_metadata" | "assign_task" | "copy_file" | "copy_folder" | "create_folder" | "delete_file" | "delete_folder" | "lock_file" | "move_file" | "move_folder" | "remove_watermark_file" | "rename_folder" | "restore_folder" | "share_file" | "share_folder" | "unlock_file" | "upload_file" | "wait_for_task" | "watermark_file" | "go_back_to_step" | "apply_file_classification" | "apply_folder_classification" | "send_notification";
export declare function deserializeWorkflowFlowsFieldOutcomesFieldIfRejectedFieldActionTypeField(val: JSON): WorkflowFlowsFieldOutcomesFieldIfRejectedFieldActionTypeField;
export declare function serializeWorkflowFlowsFieldOutcomesFieldIfRejectedFieldActionTypeField(val: WorkflowFlowsFieldOutcomesFieldIfRejectedFieldActionTypeField): JSON;
export interface WorkflowFlowsFieldOutcomesFieldIfRejectedField {
    readonly id?: string;
    readonly type?: WorkflowFlowsFieldOutcomesFieldIfRejectedFieldTypeField;
    readonly name?: string;
    readonly actionType?: WorkflowFlowsFieldOutcomesFieldIfRejectedFieldActionTypeField;
}
export declare function deserializeWorkflowFlowsFieldOutcomesFieldIfRejectedField(val: JSON): WorkflowFlowsFieldOutcomesFieldIfRejectedField;
export declare function serializeWorkflowFlowsFieldOutcomesFieldIfRejectedField(val: WorkflowFlowsFieldOutcomesFieldIfRejectedField): JSON;
export interface WorkflowFlowsFieldOutcomesField {
    readonly id?: string;
    readonly type?: WorkflowFlowsFieldOutcomesFieldTypeField;
    readonly name?: string;
    readonly actionType?: WorkflowFlowsFieldOutcomesFieldActionTypeField;
    readonly ifRejected?: readonly WorkflowFlowsFieldOutcomesFieldIfRejectedField[];
}
export declare function deserializeWorkflowFlowsFieldOutcomesField(val: JSON): WorkflowFlowsFieldOutcomesField;
export declare function serializeWorkflowFlowsFieldOutcomesField(val: WorkflowFlowsFieldOutcomesField): JSON;
export interface WorkflowFlowsField {
    readonly id?: string;
    readonly type?: WorkflowFlowsFieldTypeField;
    readonly trigger?: WorkflowFlowsFieldTriggerField;
    readonly outcomes?: readonly WorkflowFlowsFieldOutcomesField[];
    readonly createdAt?: string;
    readonly createdBy?: UserBase;
}
export declare function deserializeWorkflowFlowsField(val: JSON): WorkflowFlowsField;
export declare function serializeWorkflowFlowsField(val: WorkflowFlowsField): JSON;
export type WorkflowMiniTypeField = "workflow";
export declare function deserializeWorkflowMiniTypeField(val: JSON): WorkflowMiniTypeField;
export declare function serializeWorkflowMiniTypeField(val: WorkflowMiniTypeField): JSON;
export interface WorkflowMini {
    readonly id?: string;
    readonly type?: WorkflowMiniTypeField;
    readonly name?: string;
    readonly description?: string;
    readonly isEnabled?: boolean;
}
export declare function deserializeWorkflowMini(val: JSON): WorkflowMini;
export declare function serializeWorkflowMini(val: WorkflowMini): JSON;
export type Workflow = WorkflowMini & {
    /**
     * A list of flows assigned to a workflow. */
    readonly flows?: readonly WorkflowFlowsField[];
};
export declare function deserializeWorkflow(val: JSON): Workflow;
export declare function serializeWorkflow(val: Workflow): JSON;
export interface Workflows {
    readonly limit?: number;
    readonly nextMarker?: number;
    readonly prevMarker?: number;
    readonly entries?: readonly Workflow[];
}
export declare function deserializeWorkflows(val: JSON): Workflows;
export declare function serializeWorkflows(val: Workflows): JSON;
export type WorkflowFull = Workflow & {
    /**
     * The date and time when the workflow was created on Box */
    readonly createdAt?: string;
    /**
     * The date and time when the workflow was last updated on Box */
    readonly modifiedAt?: string;
    readonly createdBy?: UserBase;
    readonly modifiedBy?: UserBase;
};
export declare function deserializeWorkflowFull(val: JSON): WorkflowFull;
export declare function serializeWorkflowFull(val: WorkflowFull): JSON;
export interface ZipDownload {
    readonly downloadUrl?: string;
    readonly statusUrl?: string;
    readonly expiresAt?: string;
    readonly nameConflicts?: readonly (readonly {
        /**
         * The identifier of the item */
        readonly id?: string;
        /**
         * The type of this item */
        readonly type?: "file" | "folder";
        /**
         * The original name of this item */
        readonly originalName?: string;
        /**
         * The new name of this item as it will appear in the
         * downloaded `zip` archive. */
        readonly downloadName?: string;
    }[])[];
}
export declare function deserializeZipDownload(val: JSON): ZipDownload;
export declare function serializeZipDownload(val: ZipDownload): JSON;
export type ZipDownloadStatusStateField = "in_progress" | "failed" | "success";
export declare function deserializeZipDownloadStatusStateField(val: JSON): ZipDownloadStatusStateField;
export declare function serializeZipDownloadStatusStateField(val: ZipDownloadStatusStateField): JSON;
export interface ZipDownloadStatus {
    readonly totalFileCount?: number;
    readonly downloadedFileCount?: number;
    readonly skippedFileCount?: number;
    readonly skippedFolderCount?: number;
    readonly state?: ZipDownloadStatusStateField;
}
export declare function deserializeZipDownloadStatus(val: JSON): ZipDownloadStatus;
export declare function serializeZipDownloadStatus(val: ZipDownloadStatus): JSON;
export type SignRequestTypeField = "sign-request";
export declare function deserializeSignRequestTypeField(val: JSON): SignRequestTypeField;
export declare function serializeSignRequestTypeField(val: SignRequestTypeField): JSON;
export type SignRequestStatusField = "converting" | "created" | "sent" | "viewed" | "signed" | "cancelled" | "declined" | "error_converting" | "error_sending" | "expired";
export declare function deserializeSignRequestStatusField(val: JSON): SignRequestStatusField;
export declare function serializeSignRequestStatusField(val: SignRequestStatusField): JSON;
export type FileScopeScopeField = "annotation_edit" | "annotation_view_all" | "annotation_view_self" | "base_explorer" | "base_picker" | "base_preview" | "base_upload" | "item_delete" | "item_download" | "item_preview" | "item_rename" | "item_share";
export declare function deserializeFileScopeScopeField(val: JSON): FileScopeScopeField;
export declare function serializeFileScopeScopeField(val: FileScopeScopeField): JSON;
export interface FileScope {
    readonly scope?: FileScopeScopeField;
    readonly object?: FileMini;
}
export declare function deserializeFileScope(val: JSON): FileScope;
export declare function serializeFileScope(val: FileScope): JSON;
export interface FileFullExpiringEmbedLinkField {
    readonly accessToken?: string;
    readonly expiresIn?: number;
    readonly tokenType?: FileFullExpiringEmbedLinkFieldTokenTypeField;
    readonly restrictedTo?: readonly FileScope[];
    readonly url?: string;
}
export declare function deserializeFileFullExpiringEmbedLinkField(val: JSON): FileFullExpiringEmbedLinkField;
export declare function serializeFileFullExpiringEmbedLinkField(val: FileFullExpiringEmbedLinkField): JSON;
export type FileFull = File & {
    /**
     * The version number of this file */
    readonly versionNumber?: string;
    /**
     * The number of comments on this file */
    readonly commentCount?: number;
    readonly permissions?: FileFullPermissionsField;
    readonly tags?: readonly string[];
    readonly lock?: FileFullLockField;
    /**
     * Indicates the (optional) file extension for this file. By default,
     * this is set to an empty string. */
    readonly extension?: string;
    /**
     * Indicates if the file is a package. Packages are commonly used
     * by Mac Applications and can include iWork files. */
    readonly isPackage?: boolean;
    readonly expiringEmbedLink?: FileFullExpiringEmbedLinkField;
    readonly watermarkInfo?: FileFullWatermarkInfoField;
    /**
     * Specifies if the file can be accessed
     * via the direct shared link or a shared link
     * to a parent folder. */
    readonly isAccessibleViaSharedLink?: boolean;
    /**
     * A list of the types of roles that user can be invited at
     * when sharing this file. */
    readonly allowedInviteeRoles?: readonly FileFullAllowedInviteeRolesField[];
    /**
     * Specifies if this file is owned by a user outside of the
     * authenticated enterprise. */
    readonly isExternallyOwned?: boolean;
    /**
     * Specifies if this file has any other collaborators. */
    readonly hasCollaborations?: boolean;
    readonly metadata?: FileFullMetadataField;
    /**
     * When the file will automatically be deleted */
    readonly expiresAt?: string;
    readonly representations?: FileFullRepresentationsField;
    readonly classification?: FileFullClassificationField;
    readonly uploaderDisplayName?: string;
    /**
     * The retention expiration timestamp for the given file */
    readonly dispositionAt?: string;
    /**
     * A list of the types of roles that user can be invited at
     * when sharing this file. */
    readonly sharedLinkPermissionOptions?: readonly FileFullSharedLinkPermissionOptionsField[];
};
export declare function deserializeFileFull(val: JSON): FileFull;
export declare function serializeFileFull(val: FileFull): JSON;
export interface AccessToken {
    readonly accessToken?: string;
    readonly expiresIn?: number;
    readonly tokenType?: AccessTokenTokenTypeField;
    readonly restrictedTo?: readonly FileScope[];
    readonly refreshToken?: string;
    readonly issuedTokenType?: AccessTokenIssuedTokenTypeField;
}
export declare function deserializeAccessToken(val: JSON): AccessToken;
export declare function serializeAccessToken(val: AccessToken): JSON;
export type EventSourceItemTypeField = "file" | "folder";
export declare function deserializeEventSourceItemTypeField(val: JSON): EventSourceItemTypeField;
export declare function serializeEventSourceItemTypeField(val: EventSourceItemTypeField): JSON;
export interface EventSourceClassificationField {
    readonly name?: string;
}
export declare function deserializeEventSourceClassificationField(val: JSON): EventSourceClassificationField;
export declare function serializeEventSourceClassificationField(val: EventSourceClassificationField): JSON;
export interface EventSource {
    readonly itemType: EventSourceItemTypeField;
    readonly itemId: string;
    readonly itemName: string;
    readonly classification?: EventSourceClassificationField;
    readonly parent?: FolderMini;
    readonly ownedBy?: UserMini;
}
export declare function deserializeEventSource(val: JSON): EventSource;
export declare function serializeEventSource(val: EventSource): JSON;
export type EventSourceField = User | EventSource | File | Folder;
export declare function deserializeEventSourceField(val: JSON): EventSourceField;
export declare function serializeEventSourceField(val: EventSourceField): JSON;
export interface Event {
    readonly type?: string;
    readonly createdAt?: string;
    readonly recordedAt?: string;
    readonly eventId?: string;
    readonly createdBy?: UserMini;
    readonly eventType?: EventEventTypeField;
    readonly sessionId?: string;
    readonly source?: EventSourceField;
    readonly additionalDetails?: EventAdditionalDetailsField;
}
export declare function deserializeEvent(val: JSON): Event;
export declare function serializeEvent(val: Event): JSON;
export interface Events {
    readonly chunkSize?: number;
    readonly nextStreamPosition?: string;
    readonly entries?: readonly Event[];
}
export declare function deserializeEvents(val: JSON): Events;
export declare function serializeEvents(val: Events): JSON;
export interface SkillInvocation {
    readonly type?: SkillInvocationTypeField;
    readonly id?: string;
    readonly skill?: SkillInvocationSkillField;
    readonly token?: SkillInvocationTokenField;
    readonly status?: SkillInvocationStatusField;
    readonly createdAt?: string;
    readonly trigger?: string;
    readonly enterprise?: SkillInvocationEnterpriseField;
    readonly source?: SkillInvocationSourceField;
    readonly event?: Event;
}
export declare function deserializeSkillInvocation(val: JSON): SkillInvocation;
export declare function serializeSkillInvocation(val: SkillInvocation): JSON;
export type SkillCardTypeField = "skill_card";
export declare function deserializeSkillCardTypeField(val: JSON): SkillCardTypeField;
export declare function serializeSkillCardTypeField(val: SkillCardTypeField): JSON;
export type SkillCardSkillCardTypeField = "transcript" | "keyword" | "timeline" | "status";
export declare function deserializeSkillCardSkillCardTypeField(val: JSON): SkillCardSkillCardTypeField;
export declare function serializeSkillCardSkillCardTypeField(val: SkillCardSkillCardTypeField): JSON;
export interface SkillCardSkillCardTitleField {
    readonly code?: string;
    readonly message: string;
}
export declare function deserializeSkillCardSkillCardTitleField(val: JSON): SkillCardSkillCardTitleField;
export declare function serializeSkillCardSkillCardTitleField(val: SkillCardSkillCardTitleField): JSON;
export type SkillCardStatusFieldCodeField = "invoked" | "processing" | "success" | "transient_failure" | "permanent_failure";
export declare function deserializeSkillCardStatusFieldCodeField(val: JSON): SkillCardStatusFieldCodeField;
export declare function serializeSkillCardStatusFieldCodeField(val: SkillCardStatusFieldCodeField): JSON;
export interface SkillCardStatusField {
    readonly code: SkillCardStatusFieldCodeField;
    readonly message?: string;
}
export declare function deserializeSkillCardStatusField(val: JSON): SkillCardStatusField;
export declare function serializeSkillCardStatusField(val: SkillCardStatusField): JSON;
export type SkillCardSkillFieldTypeField = "service";
export declare function deserializeSkillCardSkillFieldTypeField(val: JSON): SkillCardSkillFieldTypeField;
export declare function serializeSkillCardSkillFieldTypeField(val: SkillCardSkillFieldTypeField): JSON;
export interface SkillCardSkillField {
    readonly type: SkillCardSkillFieldTypeField;
    readonly id: string;
}
export declare function deserializeSkillCardSkillField(val: JSON): SkillCardSkillField;
export declare function serializeSkillCardSkillField(val: SkillCardSkillField): JSON;
export type SkillCardInvocationFieldTypeField = "skill_invocation";
export declare function deserializeSkillCardInvocationFieldTypeField(val: JSON): SkillCardInvocationFieldTypeField;
export declare function serializeSkillCardInvocationFieldTypeField(val: SkillCardInvocationFieldTypeField): JSON;
export interface SkillCardInvocationField {
    readonly type: SkillCardInvocationFieldTypeField;
    readonly id: string;
}
export declare function deserializeSkillCardInvocationField(val: JSON): SkillCardInvocationField;
export declare function serializeSkillCardInvocationField(val: SkillCardInvocationField): JSON;
export interface SkillCardEntriesFieldAppearsField {
    readonly start?: number;
    readonly end?: number;
}
export declare function deserializeSkillCardEntriesFieldAppearsField(val: JSON): SkillCardEntriesFieldAppearsField;
export declare function serializeSkillCardEntriesFieldAppearsField(val: SkillCardEntriesFieldAppearsField): JSON;
export interface SkillCardEntriesField {
    readonly text?: string;
    readonly appears?: readonly SkillCardEntriesFieldAppearsField[];
    readonly imageUrl?: string;
}
export declare function deserializeSkillCardEntriesField(val: JSON): SkillCardEntriesField;
export declare function serializeSkillCardEntriesField(val: SkillCardEntriesField): JSON;
export interface SkillCard {
    readonly createdAt?: string;
    readonly type: SkillCardTypeField;
    readonly skillCardType: SkillCardSkillCardTypeField;
    readonly skillCardTitle?: SkillCardSkillCardTitleField;
    readonly status?: SkillCardStatusField;
    readonly skill: SkillCardSkillField;
    readonly invocation: SkillCardInvocationField;
    readonly duration?: number;
    readonly entries?: readonly SkillCardEntriesField[];
}
export declare function deserializeSkillCard(val: JSON): SkillCard;
export declare function serializeSkillCard(val: SkillCard): JSON;
export type KeywordSkillCardTypeField = "skill_card";
export declare function deserializeKeywordSkillCardTypeField(val: JSON): KeywordSkillCardTypeField;
export declare function serializeKeywordSkillCardTypeField(val: KeywordSkillCardTypeField): JSON;
export type KeywordSkillCardSkillCardTypeField = "keyword";
export declare function deserializeKeywordSkillCardSkillCardTypeField(val: JSON): KeywordSkillCardSkillCardTypeField;
export declare function serializeKeywordSkillCardSkillCardTypeField(val: KeywordSkillCardSkillCardTypeField): JSON;
export interface KeywordSkillCardSkillCardTitleField {
    readonly code?: string;
    readonly message: string;
}
export declare function deserializeKeywordSkillCardSkillCardTitleField(val: JSON): KeywordSkillCardSkillCardTitleField;
export declare function serializeKeywordSkillCardSkillCardTitleField(val: KeywordSkillCardSkillCardTitleField): JSON;
export type KeywordSkillCardSkillFieldTypeField = "service";
export declare function deserializeKeywordSkillCardSkillFieldTypeField(val: JSON): KeywordSkillCardSkillFieldTypeField;
export declare function serializeKeywordSkillCardSkillFieldTypeField(val: KeywordSkillCardSkillFieldTypeField): JSON;
export interface KeywordSkillCardSkillField {
    readonly type: KeywordSkillCardSkillFieldTypeField;
    readonly id: string;
}
export declare function deserializeKeywordSkillCardSkillField(val: JSON): KeywordSkillCardSkillField;
export declare function serializeKeywordSkillCardSkillField(val: KeywordSkillCardSkillField): JSON;
export type KeywordSkillCardInvocationFieldTypeField = "skill_invocation";
export declare function deserializeKeywordSkillCardInvocationFieldTypeField(val: JSON): KeywordSkillCardInvocationFieldTypeField;
export declare function serializeKeywordSkillCardInvocationFieldTypeField(val: KeywordSkillCardInvocationFieldTypeField): JSON;
export interface KeywordSkillCardInvocationField {
    readonly type: KeywordSkillCardInvocationFieldTypeField;
    readonly id: string;
}
export declare function deserializeKeywordSkillCardInvocationField(val: JSON): KeywordSkillCardInvocationField;
export declare function serializeKeywordSkillCardInvocationField(val: KeywordSkillCardInvocationField): JSON;
export interface KeywordSkillCardEntriesField {
    readonly text?: string;
}
export declare function deserializeKeywordSkillCardEntriesField(val: JSON): KeywordSkillCardEntriesField;
export declare function serializeKeywordSkillCardEntriesField(val: KeywordSkillCardEntriesField): JSON;
export interface KeywordSkillCard {
    readonly createdAt?: string;
    readonly type: KeywordSkillCardTypeField;
    readonly skillCardType: KeywordSkillCardSkillCardTypeField;
    readonly skillCardTitle?: KeywordSkillCardSkillCardTitleField;
    readonly skill: KeywordSkillCardSkillField;
    readonly invocation: KeywordSkillCardInvocationField;
    readonly entries: readonly KeywordSkillCardEntriesField[];
}
export declare function deserializeKeywordSkillCard(val: JSON): KeywordSkillCard;
export declare function serializeKeywordSkillCard(val: KeywordSkillCard): JSON;
export type TimelineSkillCardTypeField = "skill_card";
export declare function deserializeTimelineSkillCardTypeField(val: JSON): TimelineSkillCardTypeField;
export declare function serializeTimelineSkillCardTypeField(val: TimelineSkillCardTypeField): JSON;
export type TimelineSkillCardSkillCardTypeField = "timeline";
export declare function deserializeTimelineSkillCardSkillCardTypeField(val: JSON): TimelineSkillCardSkillCardTypeField;
export declare function serializeTimelineSkillCardSkillCardTypeField(val: TimelineSkillCardSkillCardTypeField): JSON;
export interface TimelineSkillCardSkillCardTitleField {
    readonly code?: string;
    readonly message: string;
}
export declare function deserializeTimelineSkillCardSkillCardTitleField(val: JSON): TimelineSkillCardSkillCardTitleField;
export declare function serializeTimelineSkillCardSkillCardTitleField(val: TimelineSkillCardSkillCardTitleField): JSON;
export type TimelineSkillCardSkillFieldTypeField = "service";
export declare function deserializeTimelineSkillCardSkillFieldTypeField(val: JSON): TimelineSkillCardSkillFieldTypeField;
export declare function serializeTimelineSkillCardSkillFieldTypeField(val: TimelineSkillCardSkillFieldTypeField): JSON;
export interface TimelineSkillCardSkillField {
    readonly type: TimelineSkillCardSkillFieldTypeField;
    readonly id: string;
}
export declare function deserializeTimelineSkillCardSkillField(val: JSON): TimelineSkillCardSkillField;
export declare function serializeTimelineSkillCardSkillField(val: TimelineSkillCardSkillField): JSON;
export type TimelineSkillCardInvocationFieldTypeField = "skill_invocation";
export declare function deserializeTimelineSkillCardInvocationFieldTypeField(val: JSON): TimelineSkillCardInvocationFieldTypeField;
export declare function serializeTimelineSkillCardInvocationFieldTypeField(val: TimelineSkillCardInvocationFieldTypeField): JSON;
export interface TimelineSkillCardInvocationField {
    readonly type: TimelineSkillCardInvocationFieldTypeField;
    readonly id: string;
}
export declare function deserializeTimelineSkillCardInvocationField(val: JSON): TimelineSkillCardInvocationField;
export declare function serializeTimelineSkillCardInvocationField(val: TimelineSkillCardInvocationField): JSON;
export interface TimelineSkillCardEntriesFieldAppearsField {
    readonly start?: number;
    readonly end?: number;
}
export declare function deserializeTimelineSkillCardEntriesFieldAppearsField(val: JSON): TimelineSkillCardEntriesFieldAppearsField;
export declare function serializeTimelineSkillCardEntriesFieldAppearsField(val: TimelineSkillCardEntriesFieldAppearsField): JSON;
export interface TimelineSkillCardEntriesField {
    readonly text?: string;
    readonly appears?: readonly TimelineSkillCardEntriesFieldAppearsField[];
    readonly imageUrl?: string;
}
export declare function deserializeTimelineSkillCardEntriesField(val: JSON): TimelineSkillCardEntriesField;
export declare function serializeTimelineSkillCardEntriesField(val: TimelineSkillCardEntriesField): JSON;
export interface TimelineSkillCard {
    readonly createdAt?: string;
    readonly type: TimelineSkillCardTypeField;
    readonly skillCardType: TimelineSkillCardSkillCardTypeField;
    readonly skillCardTitle?: TimelineSkillCardSkillCardTitleField;
    readonly skill: TimelineSkillCardSkillField;
    readonly invocation: TimelineSkillCardInvocationField;
    readonly duration?: number;
    readonly entries: readonly TimelineSkillCardEntriesField[];
}
export declare function deserializeTimelineSkillCard(val: JSON): TimelineSkillCard;
export declare function serializeTimelineSkillCard(val: TimelineSkillCard): JSON;
export type TranscriptSkillCardTypeField = "skill_card";
export declare function deserializeTranscriptSkillCardTypeField(val: JSON): TranscriptSkillCardTypeField;
export declare function serializeTranscriptSkillCardTypeField(val: TranscriptSkillCardTypeField): JSON;
export type TranscriptSkillCardSkillCardTypeField = "transcript";
export declare function deserializeTranscriptSkillCardSkillCardTypeField(val: JSON): TranscriptSkillCardSkillCardTypeField;
export declare function serializeTranscriptSkillCardSkillCardTypeField(val: TranscriptSkillCardSkillCardTypeField): JSON;
export interface TranscriptSkillCardSkillCardTitleField {
    readonly code?: string;
    readonly message: string;
}
export declare function deserializeTranscriptSkillCardSkillCardTitleField(val: JSON): TranscriptSkillCardSkillCardTitleField;
export declare function serializeTranscriptSkillCardSkillCardTitleField(val: TranscriptSkillCardSkillCardTitleField): JSON;
export type TranscriptSkillCardSkillFieldTypeField = "service";
export declare function deserializeTranscriptSkillCardSkillFieldTypeField(val: JSON): TranscriptSkillCardSkillFieldTypeField;
export declare function serializeTranscriptSkillCardSkillFieldTypeField(val: TranscriptSkillCardSkillFieldTypeField): JSON;
export interface TranscriptSkillCardSkillField {
    readonly type: TranscriptSkillCardSkillFieldTypeField;
    readonly id: string;
}
export declare function deserializeTranscriptSkillCardSkillField(val: JSON): TranscriptSkillCardSkillField;
export declare function serializeTranscriptSkillCardSkillField(val: TranscriptSkillCardSkillField): JSON;
export type TranscriptSkillCardInvocationFieldTypeField = "skill_invocation";
export declare function deserializeTranscriptSkillCardInvocationFieldTypeField(val: JSON): TranscriptSkillCardInvocationFieldTypeField;
export declare function serializeTranscriptSkillCardInvocationFieldTypeField(val: TranscriptSkillCardInvocationFieldTypeField): JSON;
export interface TranscriptSkillCardInvocationField {
    readonly type: TranscriptSkillCardInvocationFieldTypeField;
    readonly id: string;
}
export declare function deserializeTranscriptSkillCardInvocationField(val: JSON): TranscriptSkillCardInvocationField;
export declare function serializeTranscriptSkillCardInvocationField(val: TranscriptSkillCardInvocationField): JSON;
export interface TranscriptSkillCardEntriesFieldAppearsField {
    readonly start?: number;
}
export declare function deserializeTranscriptSkillCardEntriesFieldAppearsField(val: JSON): TranscriptSkillCardEntriesFieldAppearsField;
export declare function serializeTranscriptSkillCardEntriesFieldAppearsField(val: TranscriptSkillCardEntriesFieldAppearsField): JSON;
export interface TranscriptSkillCardEntriesField {
    readonly text?: string;
    readonly appears?: readonly TranscriptSkillCardEntriesFieldAppearsField[];
}
export declare function deserializeTranscriptSkillCardEntriesField(val: JSON): TranscriptSkillCardEntriesField;
export declare function serializeTranscriptSkillCardEntriesField(val: TranscriptSkillCardEntriesField): JSON;
export interface TranscriptSkillCard {
    readonly createdAt?: string;
    readonly type: TranscriptSkillCardTypeField;
    readonly skillCardType: TranscriptSkillCardSkillCardTypeField;
    readonly skillCardTitle?: TranscriptSkillCardSkillCardTitleField;
    readonly skill: TranscriptSkillCardSkillField;
    readonly invocation: TranscriptSkillCardInvocationField;
    readonly duration?: number;
    readonly entries: readonly TranscriptSkillCardEntriesField[];
}
export declare function deserializeTranscriptSkillCard(val: JSON): TranscriptSkillCard;
export declare function serializeTranscriptSkillCard(val: TranscriptSkillCard): JSON;
export type StatusSkillCardTypeField = "skill_card";
export declare function deserializeStatusSkillCardTypeField(val: JSON): StatusSkillCardTypeField;
export declare function serializeStatusSkillCardTypeField(val: StatusSkillCardTypeField): JSON;
export type StatusSkillCardSkillCardTypeField = "status";
export declare function deserializeStatusSkillCardSkillCardTypeField(val: JSON): StatusSkillCardSkillCardTypeField;
export declare function serializeStatusSkillCardSkillCardTypeField(val: StatusSkillCardSkillCardTypeField): JSON;
export interface StatusSkillCardSkillCardTitleField {
    readonly code?: string;
    readonly message: string;
}
export declare function deserializeStatusSkillCardSkillCardTitleField(val: JSON): StatusSkillCardSkillCardTitleField;
export declare function serializeStatusSkillCardSkillCardTitleField(val: StatusSkillCardSkillCardTitleField): JSON;
export type StatusSkillCardStatusFieldCodeField = "invoked" | "processing" | "success" | "transient_failure" | "permanent_failure";
export declare function deserializeStatusSkillCardStatusFieldCodeField(val: JSON): StatusSkillCardStatusFieldCodeField;
export declare function serializeStatusSkillCardStatusFieldCodeField(val: StatusSkillCardStatusFieldCodeField): JSON;
export interface StatusSkillCardStatusField {
    readonly code: StatusSkillCardStatusFieldCodeField;
    readonly message?: string;
}
export declare function deserializeStatusSkillCardStatusField(val: JSON): StatusSkillCardStatusField;
export declare function serializeStatusSkillCardStatusField(val: StatusSkillCardStatusField): JSON;
export type StatusSkillCardSkillFieldTypeField = "service";
export declare function deserializeStatusSkillCardSkillFieldTypeField(val: JSON): StatusSkillCardSkillFieldTypeField;
export declare function serializeStatusSkillCardSkillFieldTypeField(val: StatusSkillCardSkillFieldTypeField): JSON;
export interface StatusSkillCardSkillField {
    readonly type: StatusSkillCardSkillFieldTypeField;
    readonly id: string;
}
export declare function deserializeStatusSkillCardSkillField(val: JSON): StatusSkillCardSkillField;
export declare function serializeStatusSkillCardSkillField(val: StatusSkillCardSkillField): JSON;
export type StatusSkillCardInvocationFieldTypeField = "skill_invocation";
export declare function deserializeStatusSkillCardInvocationFieldTypeField(val: JSON): StatusSkillCardInvocationFieldTypeField;
export declare function serializeStatusSkillCardInvocationFieldTypeField(val: StatusSkillCardInvocationFieldTypeField): JSON;
export interface StatusSkillCardInvocationField {
    readonly type: StatusSkillCardInvocationFieldTypeField;
    readonly id: string;
}
export declare function deserializeStatusSkillCardInvocationField(val: JSON): StatusSkillCardInvocationField;
export declare function serializeStatusSkillCardInvocationField(val: StatusSkillCardInvocationField): JSON;
export interface StatusSkillCard {
    readonly createdAt?: string;
    readonly type: StatusSkillCardTypeField;
    readonly skillCardType: StatusSkillCardSkillCardTypeField;
    readonly skillCardTitle?: StatusSkillCardSkillCardTitleField;
    readonly status: StatusSkillCardStatusField;
    readonly skill: StatusSkillCardSkillField;
    readonly invocation: StatusSkillCardInvocationField;
}
export declare function deserializeStatusSkillCard(val: JSON): StatusSkillCard;
export declare function serializeStatusSkillCard(val: StatusSkillCard): JSON;
export type SkillCardsMetadataCardsField = SkillCard | KeywordSkillCard | TimelineSkillCard | TranscriptSkillCard | StatusSkillCard;
export declare function deserializeSkillCardsMetadataCardsField(val: JSON): SkillCardsMetadataCardsField;
export declare function serializeSkillCardsMetadataCardsField(val: SkillCardsMetadataCardsField): JSON;
export interface SkillCardsMetadata {
    readonly canEdit?: boolean;
    readonly id?: string;
    readonly parent?: string;
    readonly scope?: string;
    readonly template?: string;
    readonly type?: string;
    readonly typeVersion?: number;
    readonly version?: number;
    readonly cards?: readonly SkillCardsMetadataCardsField[];
}
export declare function deserializeSkillCardsMetadata(val: JSON): SkillCardsMetadata;
export declare function serializeSkillCardsMetadata(val: SkillCardsMetadata): JSON;
export type SignRequestCreateSignerRoleField = "signer" | "approver" | "final_copy_reader";
export declare function deserializeSignRequestCreateSignerRoleField(val: JSON): SignRequestCreateSignerRoleField;
export declare function serializeSignRequestCreateSignerRoleField(val: SignRequestCreateSignerRoleField): JSON;
export interface SignRequestCreateSigner {
    readonly email: string;
    readonly role?: SignRequestCreateSignerRoleField;
    readonly isInPerson?: boolean;
    readonly order?: number;
    readonly embedUrlExternalUserId?: string;
    readonly redirectUrl?: string;
    readonly declinedRedirectUrl?: string;
    readonly loginRequired?: boolean;
    readonly verificationPhoneNumber?: string;
    readonly password?: string;
}
export declare function deserializeSignRequestCreateSigner(val: JSON): SignRequestCreateSigner;
export declare function serializeSignRequestCreateSigner(val: SignRequestCreateSigner): JSON;
export interface SignRequestPrefillTag {
    readonly documentTagId?: string;
    readonly textValue?: string;
    readonly checkboxValue?: boolean;
    readonly dateValue?: string;
}
export declare function deserializeSignRequestPrefillTag(val: JSON): SignRequestPrefillTag;
export declare function serializeSignRequestPrefillTag(val: SignRequestPrefillTag): JSON;
export interface SignRequestBase {
    readonly isDocumentPreparationNeeded?: boolean;
    readonly redirectUrl?: string;
    readonly declinedRedirectUrl?: string;
    readonly areTextSignaturesEnabled?: boolean;
    readonly emailSubject?: string;
    readonly emailMessage?: string;
    readonly areRemindersEnabled?: boolean;
    readonly parentFolder: FolderMini;
    readonly name?: string;
    readonly prefillTags?: readonly SignRequestPrefillTag[];
    readonly daysValid?: number;
    readonly externalId?: string;
    readonly isPhoneVerificationRequiredToView?: boolean;
}
export declare function deserializeSignRequestBase(val: JSON): SignRequestBase;
export declare function serializeSignRequestBase(val: SignRequestBase): JSON;
export type SignRequestCreateRequest = SignRequestBase & {
    /**
     * List of files to create a signing document from. This is currently
     * limited to 10 files. Only the ID and type fields are required
     * for each file. The array will be empty if the `source_files`
     * are deleted. */
    readonly sourceFiles?: readonly FileMini[];
    /**
     * Force a specific signature color (blue, black, or red). */
    readonly signatureColor?: SignRequestCreateRequestSignatureColorField;
    /**
     * Array of signers for the sign request. 35 is the
     * max number of signers permitted. */
    readonly signers: readonly SignRequestCreateSigner[];
};
export declare function deserializeSignRequestCreateRequest(val: JSON): SignRequestCreateRequest;
export declare function serializeSignRequestCreateRequest(val: SignRequestCreateRequest): JSON;
export type SignRequestSignerInputTypeField = "signature" | "date" | "text" | "checkbox";
export declare function deserializeSignRequestSignerInputTypeField(val: JSON): SignRequestSignerInputTypeField;
export declare function serializeSignRequestSignerInputTypeField(val: SignRequestSignerInputTypeField): JSON;
export type SignRequestSignerInputContentTypeField = "initial" | "stamp" | "signature" | "company" | "title" | "email" | "full_name" | "first_name" | "last_name" | "text" | "date" | "checkbox" | "attachment";
export declare function deserializeSignRequestSignerInputContentTypeField(val: JSON): SignRequestSignerInputContentTypeField;
export declare function serializeSignRequestSignerInputContentTypeField(val: SignRequestSignerInputContentTypeField): JSON;
export type SignRequestSignerInput = SignRequestPrefillTag & {
    /**
     * Type of input */
    readonly type?: SignRequestSignerInputTypeField;
    /**
     * Content type of input */
    readonly contentType?: SignRequestSignerInputContentTypeField;
    /**
     * Index of page that the input is on */
    readonly pageIndex: number;
};
export declare function deserializeSignRequestSignerInput(val: JSON): SignRequestSignerInput;
export declare function serializeSignRequestSignerInput(val: SignRequestSignerInput): JSON;
export type SignRequestSignerSignerDecisionFieldTypeField = "signed" | "declined";
export declare function deserializeSignRequestSignerSignerDecisionFieldTypeField(val: JSON): SignRequestSignerSignerDecisionFieldTypeField;
export declare function serializeSignRequestSignerSignerDecisionFieldTypeField(val: SignRequestSignerSignerDecisionFieldTypeField): JSON;
export interface SignRequestSignerSignerDecisionField {
    readonly type?: SignRequestSignerSignerDecisionFieldTypeField;
    readonly finalizedAt?: string;
}
export declare function deserializeSignRequestSignerSignerDecisionField(val: JSON): SignRequestSignerSignerDecisionField;
export declare function serializeSignRequestSignerSignerDecisionField(val: SignRequestSignerSignerDecisionField): JSON;
export type SignRequestSigner = SignRequestCreateSigner & {
    /**
     * Set to `true` if the signer views the document */
    readonly hasViewedDocument?: boolean;
    /**
     * Final decision made by the signer */
    readonly signerDecision?: SignRequestSignerSignerDecisionField;
    readonly inputs?: readonly SignRequestSignerInput[];
    /**
     * URL to direct a signer to for signing */
    readonly embedUrl?: string;
};
export declare function deserializeSignRequestSigner(val: JSON): SignRequestSigner;
export declare function serializeSignRequestSigner(val: SignRequestSigner): JSON;
export type SignRequest = SignRequestBase & {
    /**
     * object type */
    readonly type?: SignRequestTypeField;
    /**
     * Array of signers for the sign request */
    readonly signers?: readonly SignRequestSigner[];
    /**
     * Force a specific color for the signature (blue, black, or red). */
    readonly signatureColor?: string;
    /**
     * Sign request ID */
    readonly id?: string;
    /**
     * This URL is returned if `is_document_preparation_needed` is
     * set to `true` in the request. It is used to prepare the sign request
     * via UI. The sign request is not sent until preparation is complete. */
    readonly prepareUrl?: string;
    readonly signingLog?: FileMini;
    /**
     * Describes the status of the sign request */
    readonly status?: SignRequestStatusField;
    /**
     * List of files that will be signed, which are copies of the original
     * source files. A new version of these files are created as signers sign
     * and can be downloaded at any point in the signing process. */
    readonly signFiles?: SignRequestSignFilesField;
    /**
     * Uses `days_valid` to calculate the date and time, in GMT, the sign request will expire if unsigned. */
    readonly autoExpireAt?: string;
    /**
     * List of files to create a signing document from. Only the ID and type fields are required for each file. The array will be empty if the `source_files` are deleted. */
    readonly sourceFiles?: readonly FileMini[];
};
export declare function deserializeSignRequest(val: JSON): SignRequest;
export declare function serializeSignRequest(val: SignRequest): JSON;
export interface SignRequests {
    readonly limit?: number;
    readonly nextMarker?: number;
    readonly prevMarker?: number;
    readonly entries?: readonly SignRequest[];
}
export declare function deserializeSignRequests(val: JSON): SignRequests;
export declare function serializeSignRequests(val: SignRequests): JSON;
export interface ShieldInformationBarrierReportDetailsDetailsField {
    readonly folderId?: string;
}
export declare function deserializeShieldInformationBarrierReportDetailsDetailsField(val: JSON): ShieldInformationBarrierReportDetailsDetailsField;
export declare function serializeShieldInformationBarrierReportDetailsDetailsField(val: ShieldInformationBarrierReportDetailsDetailsField): JSON;
export interface ShieldInformationBarrierReportDetails {
    readonly details?: ShieldInformationBarrierReportDetailsDetailsField;
}
export declare function deserializeShieldInformationBarrierReportDetails(val: JSON): ShieldInformationBarrierReportDetails;
export declare function serializeShieldInformationBarrierReportDetails(val: ShieldInformationBarrierReportDetails): JSON;
export type TrackingCodeTypeField = "tracking_code";
export declare function deserializeTrackingCodeTypeField(val: JSON): TrackingCodeTypeField;
export declare function serializeTrackingCodeTypeField(val: TrackingCodeTypeField): JSON;
export interface TrackingCode {
    readonly type?: TrackingCodeTypeField;
    readonly name?: string;
    readonly value?: string;
}
export declare function deserializeTrackingCode(val: JSON): TrackingCode;
export declare function serializeTrackingCode(val: TrackingCode): JSON;
export type UserFull = User & {
    /**
     * The user’s enterprise role */
    readonly role?: UserFullRoleField;
    /**
     * Tracking codes allow an admin to generate reports from the
     * admin console and assign an attribute to a specific group
     * of users. This setting must be enabled for an enterprise
     * before it can be used. */
    readonly trackingCodes?: readonly TrackingCode[];
    /**
     * Whether the user can see other enterprise users in their contact list */
    readonly canSeeManagedUsers?: boolean;
    /**
     * Whether the user can use Box Sync */
    readonly isSyncEnabled?: boolean;
    /**
     * Whether the user is allowed to collaborate with users outside their
     * enterprise */
    readonly isExternalCollabRestricted?: boolean;
    /**
     * Whether to exempt the user from Enterprise device limits */
    readonly isExemptFromDeviceLimits?: boolean;
    /**
     * Whether the user must use two-factor authentication */
    readonly isExemptFromLoginVerification?: boolean;
    readonly enterprise?: UserFullEnterpriseField;
    /**
     * Tags for all files and folders owned by the user. Values returned
     * will only contain tags that were set by the requester. */
    readonly myTags?: readonly string[];
    /**
     * The root (protocol, subdomain, domain) of any links that need to be
     * generated for the user */
    readonly hostname?: string;
    /**
     * Whether the user is an App User */
    readonly isPlatformAccessOnly?: boolean;
    /**
     * An external identifier for an app user, which can be used to look up
     * the user. This can be used to tie user IDs from external identity
     * providers to Box users. */
    readonly externalAppUserId?: string;
};
export declare function deserializeUserFull(val: JSON): UserFull;
export declare function serializeUserFull(val: UserFull): JSON;
export type MetadataFilterScopeField = "global" | "enterprise" | "enterprise_{enterprise_id}";
export declare function deserializeMetadataFilterScopeField(val: JSON): MetadataFilterScopeField;
export declare function serializeMetadataFilterScopeField(val: MetadataFilterScopeField): JSON;
export interface MetadataFilterFiltersField {
}
export declare function deserializeMetadataFilterFiltersField(val: JSON): MetadataFilterFiltersField;
export declare function serializeMetadataFilterFiltersField(val: MetadataFilterFiltersField): JSON;
export interface MetadataFilter {
    readonly scope?: MetadataFilterScopeField;
    readonly templateKey?: string;
    readonly filters?: MetadataFilterFiltersField;
}
export declare function deserializeMetadataFilter(val: JSON): MetadataFilter;
export declare function serializeMetadataFilter(val: MetadataFilter): JSON;
export interface MetadataFieldFilterString {
}
export declare function deserializeMetadataFieldFilterString(val: JSON): MetadataFieldFilterString;
export declare function serializeMetadataFieldFilterString(val: MetadataFieldFilterString): JSON;
export interface MetadataFieldFilterFloat {
}
export declare function deserializeMetadataFieldFilterFloat(val: JSON): MetadataFieldFilterFloat;
export declare function serializeMetadataFieldFilterFloat(val: MetadataFieldFilterFloat): JSON;
export interface MetadataFieldFilterMultiSelect {
}
export declare function deserializeMetadataFieldFilterMultiSelect(val: JSON): MetadataFieldFilterMultiSelect;
export declare function serializeMetadataFieldFilterMultiSelect(val: MetadataFieldFilterMultiSelect): JSON;
export interface MetadataFieldFilterFloatRange {
}
export declare function deserializeMetadataFieldFilterFloatRange(val: JSON): MetadataFieldFilterFloatRange;
export declare function serializeMetadataFieldFilterFloatRange(val: MetadataFieldFilterFloatRange): JSON;
export interface MetadataFieldFilterDateRange {
}
export declare function deserializeMetadataFieldFilterDateRange(val: JSON): MetadataFieldFilterDateRange;
export declare function serializeMetadataFieldFilterDateRange(val: MetadataFieldFilterDateRange): JSON;
