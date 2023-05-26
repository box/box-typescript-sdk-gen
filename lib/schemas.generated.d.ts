import { Json } from "./json.js";
export type PostOAuth2TokenGrantTypeField = "authorization_code" | "refresh_token" | "client_credentials" | "urn:ietf:params:oauth:grant-type:jwt-bearer" | "urn:ietf:params:oauth:grant-type:token-exchange";
export declare function deserializePostOAuth2TokenGrantTypeField(val: Json): PostOAuth2TokenGrantTypeField;
export declare function serializePostOAuth2TokenGrantTypeField(val: PostOAuth2TokenGrantTypeField): Json;
export type PostOAuth2TokenSubjectTokenTypeField = "urn:ietf:params:oauth:token-type:access_token";
export declare function deserializePostOAuth2TokenSubjectTokenTypeField(val: Json): PostOAuth2TokenSubjectTokenTypeField;
export declare function serializePostOAuth2TokenSubjectTokenTypeField(val: PostOAuth2TokenSubjectTokenTypeField): Json;
export type PostOAuth2TokenActorTokenTypeField = "urn:ietf:params:oauth:token-type:id_token";
export declare function deserializePostOAuth2TokenActorTokenTypeField(val: Json): PostOAuth2TokenActorTokenTypeField;
export declare function serializePostOAuth2TokenActorTokenTypeField(val: PostOAuth2TokenActorTokenTypeField): Json;
export type PostOAuth2TokenBoxSubjectTypeField = "enterprise" | "user";
export declare function deserializePostOAuth2TokenBoxSubjectTypeField(val: Json): PostOAuth2TokenBoxSubjectTypeField;
export declare function serializePostOAuth2TokenBoxSubjectTypeField(val: PostOAuth2TokenBoxSubjectTypeField): Json;
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
export declare function deserializePostOAuth2Token(val: Json): PostOAuth2Token;
export declare function serializePostOAuth2Token(val: PostOAuth2Token): Json;
export type PostOAuth2TokenRefreshAccessTokenGrantTypeField = "refresh_token";
export declare function deserializePostOAuth2TokenRefreshAccessTokenGrantTypeField(val: Json): PostOAuth2TokenRefreshAccessTokenGrantTypeField;
export declare function serializePostOAuth2TokenRefreshAccessTokenGrantTypeField(val: PostOAuth2TokenRefreshAccessTokenGrantTypeField): Json;
export interface PostOAuth2TokenRefreshAccessToken {
    readonly grantType: PostOAuth2TokenRefreshAccessTokenGrantTypeField;
    readonly clientId: string;
    readonly clientSecret: string;
    readonly refreshToken: string;
}
export declare function deserializePostOAuth2TokenRefreshAccessToken(val: Json): PostOAuth2TokenRefreshAccessToken;
export declare function serializePostOAuth2TokenRefreshAccessToken(val: PostOAuth2TokenRefreshAccessToken): Json;
export interface PostOAuth2Revoke {
    readonly clientId?: string;
    readonly clientSecret?: string;
    readonly token?: string;
}
export declare function deserializePostOAuth2Revoke(val: Json): PostOAuth2Revoke;
export declare function serializePostOAuth2Revoke(val: PostOAuth2Revoke): Json;
export type ZipDownloadRequestItemsFieldTypeField = "file" | "folder.";
export declare function deserializeZipDownloadRequestItemsFieldTypeField(val: Json): ZipDownloadRequestItemsFieldTypeField;
export declare function serializeZipDownloadRequestItemsFieldTypeField(val: ZipDownloadRequestItemsFieldTypeField): Json;
export interface ZipDownloadRequestItemsField {
    readonly type: ZipDownloadRequestItemsFieldTypeField;
    readonly id: string;
}
export declare function deserializeZipDownloadRequestItemsField(val: Json): ZipDownloadRequestItemsField;
export declare function serializeZipDownloadRequestItemsField(val: ZipDownloadRequestItemsField): Json;
export interface ZipDownloadRequest {
    readonly items: readonly ZipDownloadRequestItemsField[];
    readonly downloadFileName?: string;
}
export declare function deserializeZipDownloadRequest(val: Json): ZipDownloadRequest;
export declare function serializeZipDownloadRequest(val: ZipDownloadRequest): Json;
export interface MetadataQueryQueryParamsField {
}
export declare function deserializeMetadataQueryQueryParamsField(val: Json): MetadataQueryQueryParamsField;
export declare function serializeMetadataQueryQueryParamsField(val: MetadataQueryQueryParamsField): Json;
export type MetadataQueryOrderByFieldDirectionField = "ASC" | "DESC" | "asc" | "desc";
export declare function deserializeMetadataQueryOrderByFieldDirectionField(val: Json): MetadataQueryOrderByFieldDirectionField;
export declare function serializeMetadataQueryOrderByFieldDirectionField(val: MetadataQueryOrderByFieldDirectionField): Json;
export interface MetadataQueryOrderByField {
    readonly fieldKey?: string;
    readonly direction?: MetadataQueryOrderByFieldDirectionField;
}
export declare function deserializeMetadataQueryOrderByField(val: Json): MetadataQueryOrderByField;
export declare function serializeMetadataQueryOrderByField(val: MetadataQueryOrderByField): Json;
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
export declare function deserializeMetadataQuery(val: Json): MetadataQuery;
export declare function serializeMetadataQuery(val: MetadataQuery): Json;
export type FileRequestUpdateRequestStatusField = "active" | "inactive";
export declare function deserializeFileRequestUpdateRequestStatusField(val: Json): FileRequestUpdateRequestStatusField;
export declare function serializeFileRequestUpdateRequestStatusField(val: FileRequestUpdateRequestStatusField): Json;
export interface FileRequestUpdateRequest {
    readonly title?: string;
    readonly description?: string;
    readonly status?: FileRequestUpdateRequestStatusField;
    readonly isEmailRequired?: boolean;
    readonly isDescriptionRequired?: boolean;
    readonly expiresAt?: string;
}
export declare function deserializeFileRequestUpdateRequest(val: Json): FileRequestUpdateRequest;
export declare function serializeFileRequestUpdateRequest(val: FileRequestUpdateRequest): Json;
export type FileRequestCopyRequestFolderFieldTypeField = "folder";
export declare function deserializeFileRequestCopyRequestFolderFieldTypeField(val: Json): FileRequestCopyRequestFolderFieldTypeField;
export declare function serializeFileRequestCopyRequestFolderFieldTypeField(val: FileRequestCopyRequestFolderFieldTypeField): Json;
export interface FileRequestCopyRequestFolderField {
    readonly type?: FileRequestCopyRequestFolderFieldTypeField;
    readonly id: string;
}
export declare function deserializeFileRequestCopyRequestFolderField(val: Json): FileRequestCopyRequestFolderField;
export declare function serializeFileRequestCopyRequestFolderField(val: FileRequestCopyRequestFolderField): Json;
export type FileRequestCopyRequest = FileRequestUpdateRequest & {
    /**
     * The folder to associate the new file request to. */
    readonly folder: FileRequestCopyRequestFolderField;
};
export declare function deserializeFileRequestCopyRequest(val: Json): FileRequestCopyRequest;
export declare function serializeFileRequestCopyRequest(val: FileRequestCopyRequest): Json;
export interface IntegrationMappingSlackCreateRequestPartnerItemField {
}
export declare function deserializeIntegrationMappingSlackCreateRequestPartnerItemField(val: Json): IntegrationMappingSlackCreateRequestPartnerItemField;
export declare function serializeIntegrationMappingSlackCreateRequestPartnerItemField(val: IntegrationMappingSlackCreateRequestPartnerItemField): Json;
export interface IntegrationMappingSlackCreateRequestBoxItemField {
}
export declare function deserializeIntegrationMappingSlackCreateRequestBoxItemField(val: Json): IntegrationMappingSlackCreateRequestBoxItemField;
export declare function serializeIntegrationMappingSlackCreateRequestBoxItemField(val: IntegrationMappingSlackCreateRequestBoxItemField): Json;
export interface IntegrationMappingSlackCreateRequestOptionsField {
}
export declare function deserializeIntegrationMappingSlackCreateRequestOptionsField(val: Json): IntegrationMappingSlackCreateRequestOptionsField;
export declare function serializeIntegrationMappingSlackCreateRequestOptionsField(val: IntegrationMappingSlackCreateRequestOptionsField): Json;
export interface IntegrationMappingSlackCreateRequest {
    readonly partnerItem: IntegrationMappingSlackCreateRequestPartnerItemField;
    readonly boxItem: IntegrationMappingSlackCreateRequestBoxItemField;
    readonly options?: IntegrationMappingSlackCreateRequestOptionsField;
}
export declare function deserializeIntegrationMappingSlackCreateRequest(val: Json): IntegrationMappingSlackCreateRequest;
export declare function serializeIntegrationMappingSlackCreateRequest(val: IntegrationMappingSlackCreateRequest): Json;
export type ClientErrorTypeField = "error";
export declare function deserializeClientErrorTypeField(val: Json): ClientErrorTypeField;
export declare function serializeClientErrorTypeField(val: ClientErrorTypeField): Json;
export type ClientErrorCodeField = "created" | "accepted" | "no_content" | "redirect" | "not_modified" | "bad_request" | "unauthorized" | "forbidden" | "not_found" | "method_not_allowed" | "conflict" | "precondition_failed" | "too_many_requests" | "internal_server_error" | "unavailable" | "item_name_invalid" | "insufficient_scope";
export declare function deserializeClientErrorCodeField(val: Json): ClientErrorCodeField;
export declare function serializeClientErrorCodeField(val: ClientErrorCodeField): Json;
export interface ClientErrorContextInfoField {
    readonly message?: string;
}
export declare function deserializeClientErrorContextInfoField(val: Json): ClientErrorContextInfoField;
export declare function serializeClientErrorContextInfoField(val: ClientErrorContextInfoField): Json;
export interface ClientError {
    readonly type?: ClientErrorTypeField;
    readonly status?: number;
    readonly code?: ClientErrorCodeField;
    readonly message?: string;
    readonly contextInfo?: ClientErrorContextInfoField;
    readonly helpUrl?: string;
    readonly requestId?: string;
}
export declare function deserializeClientError(val: Json): ClientError;
export declare function serializeClientError(val: ClientError): Json;
export interface OAuth2Error {
    readonly error?: string;
    readonly errorDescription?: string;
}
export declare function deserializeOAuth2Error(val: Json): OAuth2Error;
export declare function serializeOAuth2Error(val: OAuth2Error): Json;
export type SkillInvocationTypeField = "skill_invocation";
export declare function deserializeSkillInvocationTypeField(val: Json): SkillInvocationTypeField;
export declare function serializeSkillInvocationTypeField(val: SkillInvocationTypeField): Json;
export type SkillInvocationSkillFieldTypeField = "skill";
export declare function deserializeSkillInvocationSkillFieldTypeField(val: Json): SkillInvocationSkillFieldTypeField;
export declare function serializeSkillInvocationSkillFieldTypeField(val: SkillInvocationSkillFieldTypeField): Json;
export interface SkillInvocationSkillField {
    readonly id?: string;
    readonly type?: SkillInvocationSkillFieldTypeField;
    readonly name?: string;
    readonly apiKey?: string;
}
export declare function deserializeSkillInvocationSkillField(val: Json): SkillInvocationSkillField;
export declare function serializeSkillInvocationSkillField(val: SkillInvocationSkillField): Json;
export type SkillInvocationTokenFieldReadFieldTokenTypeField = "bearer";
export declare function deserializeSkillInvocationTokenFieldReadFieldTokenTypeField(val: Json): SkillInvocationTokenFieldReadFieldTokenTypeField;
export declare function serializeSkillInvocationTokenFieldReadFieldTokenTypeField(val: SkillInvocationTokenFieldReadFieldTokenTypeField): Json;
export interface SkillInvocationTokenFieldReadField {
    readonly accessToken?: string;
    readonly expiresIn?: number;
    readonly tokenType?: SkillInvocationTokenFieldReadFieldTokenTypeField;
    readonly restrictedTo?: string;
}
export declare function deserializeSkillInvocationTokenFieldReadField(val: Json): SkillInvocationTokenFieldReadField;
export declare function serializeSkillInvocationTokenFieldReadField(val: SkillInvocationTokenFieldReadField): Json;
export type SkillInvocationTokenFieldWriteFieldTokenTypeField = "bearer";
export declare function deserializeSkillInvocationTokenFieldWriteFieldTokenTypeField(val: Json): SkillInvocationTokenFieldWriteFieldTokenTypeField;
export declare function serializeSkillInvocationTokenFieldWriteFieldTokenTypeField(val: SkillInvocationTokenFieldWriteFieldTokenTypeField): Json;
export interface SkillInvocationTokenFieldWriteField {
    readonly accessToken?: string;
    readonly expiresIn?: number;
    readonly tokenType?: SkillInvocationTokenFieldWriteFieldTokenTypeField;
    readonly restrictedTo?: string;
}
export declare function deserializeSkillInvocationTokenFieldWriteField(val: Json): SkillInvocationTokenFieldWriteField;
export declare function serializeSkillInvocationTokenFieldWriteField(val: SkillInvocationTokenFieldWriteField): Json;
export interface SkillInvocationTokenField {
    readonly read?: SkillInvocationTokenFieldReadField;
    readonly write?: SkillInvocationTokenFieldWriteField;
}
export declare function deserializeSkillInvocationTokenField(val: Json): SkillInvocationTokenField;
export declare function serializeSkillInvocationTokenField(val: SkillInvocationTokenField): Json;
export type SkillInvocationStatusFieldStateField = "invoked" | "processing" | "success" | "transient_failure" | "permanent_failure";
export declare function deserializeSkillInvocationStatusFieldStateField(val: Json): SkillInvocationStatusFieldStateField;
export declare function serializeSkillInvocationStatusFieldStateField(val: SkillInvocationStatusFieldStateField): Json;
export interface SkillInvocationStatusField {
    readonly state?: SkillInvocationStatusFieldStateField;
    readonly message?: string;
    readonly errorCode?: string;
    readonly additionalInfo?: string;
}
export declare function deserializeSkillInvocationStatusField(val: Json): SkillInvocationStatusField;
export declare function serializeSkillInvocationStatusField(val: SkillInvocationStatusField): Json;
export type SkillInvocationEnterpriseFieldTypeField = "enterprise";
export declare function deserializeSkillInvocationEnterpriseFieldTypeField(val: Json): SkillInvocationEnterpriseFieldTypeField;
export declare function serializeSkillInvocationEnterpriseFieldTypeField(val: SkillInvocationEnterpriseFieldTypeField): Json;
export interface SkillInvocationEnterpriseField {
    readonly id?: string;
    readonly type?: SkillInvocationEnterpriseFieldTypeField;
    readonly name?: string;
}
export declare function deserializeSkillInvocationEnterpriseField(val: Json): SkillInvocationEnterpriseField;
export declare function serializeSkillInvocationEnterpriseField(val: SkillInvocationEnterpriseField): Json;
export type WebhookInvocationTypeField = "webhook_event";
export declare function deserializeWebhookInvocationTypeField(val: Json): WebhookInvocationTypeField;
export declare function serializeWebhookInvocationTypeField(val: WebhookInvocationTypeField): Json;
export type WebhookInvocationTriggerField = "FILE.UPLOADED" | "FILE.PREVIEWED" | "FILE.DOWNLOADED" | "FILE.TRASHED" | "FILE.DELETED" | "FILE.RESTORED" | "FILE.COPIED" | "FILE.MOVED" | "FILE.LOCKED" | "FILE.UNLOCKED" | "FILE.RENAMED" | "COMMENT.CREATED" | "COMMENT.UPDATED" | "COMMENT.DELETED" | "TASK_ASSIGNMENT.CREATED" | "TASK_ASSIGNMENT.UPDATED" | "METADATA_INSTANCE.CREATED" | "METADATA_INSTANCE.UPDATED" | "METADATA_INSTANCE.DELETED" | "FOLDER.CREATED" | "FOLDER.RENAMED" | "FOLDER.DOWNLOADED" | "FOLDER.RESTORED" | "FOLDER.DELETED" | "FOLDER.COPIED" | "FOLDER.MOVED" | "FOLDER.TRASHED" | "WEBHOOK.DELETED" | "COLLABORATION.CREATED" | "COLLABORATION.ACCEPTED" | "COLLABORATION.REJECTED" | "COLLABORATION.REMOVED" | "COLLABORATION.UPDATED" | "SHARED_LINK.DELETED" | "SHARED_LINK.CREATED" | "SHARED_LINK.UPDATED" | "SIGN_REQUEST.COMPLETED" | "SIGN_REQUEST.DECLINED" | "SIGN_REQUEST.EXPIRED" | "SIGN_REQUEST.SIGNER_EMAIL_BOUNCED";
export declare function deserializeWebhookInvocationTriggerField(val: Json): WebhookInvocationTriggerField;
export declare function serializeWebhookInvocationTriggerField(val: WebhookInvocationTriggerField): Json;
export type AccessTokenTokenTypeField = "bearer";
export declare function deserializeAccessTokenTokenTypeField(val: Json): AccessTokenTokenTypeField;
export declare function serializeAccessTokenTokenTypeField(val: AccessTokenTokenTypeField): Json;
export type AccessTokenIssuedTokenTypeField = "urn:ietf:params:oauth:token-type:access_token";
export declare function deserializeAccessTokenIssuedTokenTypeField(val: Json): AccessTokenIssuedTokenTypeField;
export declare function serializeAccessTokenIssuedTokenTypeField(val: AccessTokenIssuedTokenTypeField): Json;
export type ClassificationTemplateField = "securityClassification-6VMVochwUWo";
export declare function deserializeClassificationTemplateField(val: Json): ClassificationTemplateField;
export declare function serializeClassificationTemplateField(val: ClassificationTemplateField): Json;
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
export declare function deserializeClassification(val: Json): Classification;
export declare function serializeClassification(val: Classification): Json;
export type ClassificationTemplateTypeField = "metadata_template";
export declare function deserializeClassificationTemplateTypeField(val: Json): ClassificationTemplateTypeField;
export declare function serializeClassificationTemplateTypeField(val: ClassificationTemplateTypeField): Json;
export type ClassificationTemplateTemplateKeyField = "securityClassification-6VMVochwUWo";
export declare function deserializeClassificationTemplateTemplateKeyField(val: Json): ClassificationTemplateTemplateKeyField;
export declare function serializeClassificationTemplateTemplateKeyField(val: ClassificationTemplateTemplateKeyField): Json;
export type ClassificationTemplateDisplayNameField = "Classification";
export declare function deserializeClassificationTemplateDisplayNameField(val: Json): ClassificationTemplateDisplayNameField;
export declare function serializeClassificationTemplateDisplayNameField(val: ClassificationTemplateDisplayNameField): Json;
export type ClassificationTemplateFieldsFieldTypeField = "enum";
export declare function deserializeClassificationTemplateFieldsFieldTypeField(val: Json): ClassificationTemplateFieldsFieldTypeField;
export declare function serializeClassificationTemplateFieldsFieldTypeField(val: ClassificationTemplateFieldsFieldTypeField): Json;
export type ClassificationTemplateFieldsFieldKeyField = "Box__Security__Classification__Key";
export declare function deserializeClassificationTemplateFieldsFieldKeyField(val: Json): ClassificationTemplateFieldsFieldKeyField;
export declare function serializeClassificationTemplateFieldsFieldKeyField(val: ClassificationTemplateFieldsFieldKeyField): Json;
export type ClassificationTemplateFieldsFieldDisplayNameField = "Classification";
export declare function deserializeClassificationTemplateFieldsFieldDisplayNameField(val: Json): ClassificationTemplateFieldsFieldDisplayNameField;
export declare function serializeClassificationTemplateFieldsFieldDisplayNameField(val: ClassificationTemplateFieldsFieldDisplayNameField): Json;
export interface ClassificationTemplateFieldsFieldOptionsFieldStaticConfigFieldClassificationField {
    readonly classificationDefinition?: string;
    readonly colorId?: number;
}
export declare function deserializeClassificationTemplateFieldsFieldOptionsFieldStaticConfigFieldClassificationField(val: Json): ClassificationTemplateFieldsFieldOptionsFieldStaticConfigFieldClassificationField;
export declare function serializeClassificationTemplateFieldsFieldOptionsFieldStaticConfigFieldClassificationField(val: ClassificationTemplateFieldsFieldOptionsFieldStaticConfigFieldClassificationField): Json;
export interface ClassificationTemplateFieldsFieldOptionsFieldStaticConfigField {
    readonly classification?: ClassificationTemplateFieldsFieldOptionsFieldStaticConfigFieldClassificationField;
}
export declare function deserializeClassificationTemplateFieldsFieldOptionsFieldStaticConfigField(val: Json): ClassificationTemplateFieldsFieldOptionsFieldStaticConfigField;
export declare function serializeClassificationTemplateFieldsFieldOptionsFieldStaticConfigField(val: ClassificationTemplateFieldsFieldOptionsFieldStaticConfigField): Json;
export interface ClassificationTemplateFieldsFieldOptionsField {
    readonly id?: string;
    readonly key?: string;
    readonly staticConfig?: ClassificationTemplateFieldsFieldOptionsFieldStaticConfigField;
}
export declare function deserializeClassificationTemplateFieldsFieldOptionsField(val: Json): ClassificationTemplateFieldsFieldOptionsField;
export declare function serializeClassificationTemplateFieldsFieldOptionsField(val: ClassificationTemplateFieldsFieldOptionsField): Json;
export interface ClassificationTemplateFieldsField {
    readonly id?: string;
    readonly type?: ClassificationTemplateFieldsFieldTypeField;
    readonly key?: ClassificationTemplateFieldsFieldKeyField;
    readonly displayName?: ClassificationTemplateFieldsFieldDisplayNameField;
    readonly hidden?: boolean;
    readonly options?: readonly ClassificationTemplateFieldsFieldOptionsField[];
}
export declare function deserializeClassificationTemplateFieldsField(val: Json): ClassificationTemplateFieldsField;
export declare function serializeClassificationTemplateFieldsField(val: ClassificationTemplateFieldsField): Json;
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
export declare function deserializeClassificationTemplate(val: Json): ClassificationTemplate;
export declare function serializeClassificationTemplate(val: ClassificationTemplate): Json;
export type CollaborationTypeField = "collaboration";
export declare function deserializeCollaborationTypeField(val: Json): CollaborationTypeField;
export declare function serializeCollaborationTypeField(val: CollaborationTypeField): Json;
export type CollaborationRoleField = "editor" | "viewer" | "previewer" | "uploader" | "previewer uploader" | "viewer uploader" | "co-owner" | "owner";
export declare function deserializeCollaborationRoleField(val: Json): CollaborationRoleField;
export declare function serializeCollaborationRoleField(val: CollaborationRoleField): Json;
export type CollaborationStatusField = "accepted" | "pending" | "rejected";
export declare function deserializeCollaborationStatusField(val: Json): CollaborationStatusField;
export declare function serializeCollaborationStatusField(val: CollaborationStatusField): Json;
export interface CollaborationAcceptanceRequirementsStatusFieldStrongPasswordRequirementField {
    readonly enterpriseHasStrongPasswordRequiredForExternalUsers?: boolean;
    readonly userHasStrongPassword?: boolean;
}
export declare function deserializeCollaborationAcceptanceRequirementsStatusFieldStrongPasswordRequirementField(val: Json): CollaborationAcceptanceRequirementsStatusFieldStrongPasswordRequirementField;
export declare function serializeCollaborationAcceptanceRequirementsStatusFieldStrongPasswordRequirementField(val: CollaborationAcceptanceRequirementsStatusFieldStrongPasswordRequirementField): Json;
export interface CollaborationAcceptanceRequirementsStatusFieldTwoFactorAuthenticationRequirementField {
    readonly enterpriseHasTwoFactorAuthEnabled?: boolean;
    readonly userHasTwoFactorAuthenticationEnabled?: boolean;
}
export declare function deserializeCollaborationAcceptanceRequirementsStatusFieldTwoFactorAuthenticationRequirementField(val: Json): CollaborationAcceptanceRequirementsStatusFieldTwoFactorAuthenticationRequirementField;
export declare function serializeCollaborationAcceptanceRequirementsStatusFieldTwoFactorAuthenticationRequirementField(val: CollaborationAcceptanceRequirementsStatusFieldTwoFactorAuthenticationRequirementField): Json;
export type CollaborationsOrderFieldDirectionField = "ASC" | "DESC";
export declare function deserializeCollaborationsOrderFieldDirectionField(val: Json): CollaborationsOrderFieldDirectionField;
export declare function serializeCollaborationsOrderFieldDirectionField(val: CollaborationsOrderFieldDirectionField): Json;
export interface CollaborationsOrderField {
    readonly by?: string;
    readonly direction?: CollaborationsOrderFieldDirectionField;
}
export declare function deserializeCollaborationsOrderField(val: Json): CollaborationsOrderField;
export declare function serializeCollaborationsOrderField(val: CollaborationsOrderField): Json;
export type CollaborationAllowlistEntryTypeField = "collaboration_whitelist_entry";
export declare function deserializeCollaborationAllowlistEntryTypeField(val: Json): CollaborationAllowlistEntryTypeField;
export declare function serializeCollaborationAllowlistEntryTypeField(val: CollaborationAllowlistEntryTypeField): Json;
export type CollaborationAllowlistEntryDirectionField = "inbound" | "outbound" | "both";
export declare function deserializeCollaborationAllowlistEntryDirectionField(val: Json): CollaborationAllowlistEntryDirectionField;
export declare function serializeCollaborationAllowlistEntryDirectionField(val: CollaborationAllowlistEntryDirectionField): Json;
export type CollaborationAllowlistEntryEnterpriseFieldTypeField = "enterprise";
export declare function deserializeCollaborationAllowlistEntryEnterpriseFieldTypeField(val: Json): CollaborationAllowlistEntryEnterpriseFieldTypeField;
export declare function serializeCollaborationAllowlistEntryEnterpriseFieldTypeField(val: CollaborationAllowlistEntryEnterpriseFieldTypeField): Json;
export interface CollaborationAllowlistEntryEnterpriseField {
    readonly id?: string;
    readonly type?: CollaborationAllowlistEntryEnterpriseFieldTypeField;
    readonly name?: string;
}
export declare function deserializeCollaborationAllowlistEntryEnterpriseField(val: Json): CollaborationAllowlistEntryEnterpriseField;
export declare function serializeCollaborationAllowlistEntryEnterpriseField(val: CollaborationAllowlistEntryEnterpriseField): Json;
export interface CollaborationAllowlistEntry {
    readonly id?: string;
    readonly type?: CollaborationAllowlistEntryTypeField;
    readonly domain?: string;
    readonly direction?: CollaborationAllowlistEntryDirectionField;
    readonly enterprise?: CollaborationAllowlistEntryEnterpriseField;
    readonly createdAt?: string;
}
export declare function deserializeCollaborationAllowlistEntry(val: Json): CollaborationAllowlistEntry;
export declare function serializeCollaborationAllowlistEntry(val: CollaborationAllowlistEntry): Json;
export interface CollaborationAllowlistEntries {
    readonly limit?: number;
    readonly nextMarker?: number;
    readonly prevMarker?: number;
    readonly entries?: readonly CollaborationAllowlistEntry[];
}
export declare function deserializeCollaborationAllowlistEntries(val: Json): CollaborationAllowlistEntries;
export declare function serializeCollaborationAllowlistEntries(val: CollaborationAllowlistEntries): Json;
export type CollaborationAllowlistExemptTargetTypeField = "collaboration_whitelist";
export declare function deserializeCollaborationAllowlistExemptTargetTypeField(val: Json): CollaborationAllowlistExemptTargetTypeField;
export declare function serializeCollaborationAllowlistExemptTargetTypeField(val: CollaborationAllowlistExemptTargetTypeField): Json;
export type CollaborationAllowlistExemptTargetEnterpriseFieldTypeField = "enterprise";
export declare function deserializeCollaborationAllowlistExemptTargetEnterpriseFieldTypeField(val: Json): CollaborationAllowlistExemptTargetEnterpriseFieldTypeField;
export declare function serializeCollaborationAllowlistExemptTargetEnterpriseFieldTypeField(val: CollaborationAllowlistExemptTargetEnterpriseFieldTypeField): Json;
export interface CollaborationAllowlistExemptTargetEnterpriseField {
    readonly id?: string;
    readonly type?: CollaborationAllowlistExemptTargetEnterpriseFieldTypeField;
    readonly name?: string;
}
export declare function deserializeCollaborationAllowlistExemptTargetEnterpriseField(val: Json): CollaborationAllowlistExemptTargetEnterpriseField;
export declare function serializeCollaborationAllowlistExemptTargetEnterpriseField(val: CollaborationAllowlistExemptTargetEnterpriseField): Json;
export type CollaborationAllowlistExemptTargetUserFieldTypeField = "enterprise";
export declare function deserializeCollaborationAllowlistExemptTargetUserFieldTypeField(val: Json): CollaborationAllowlistExemptTargetUserFieldTypeField;
export declare function serializeCollaborationAllowlistExemptTargetUserFieldTypeField(val: CollaborationAllowlistExemptTargetUserFieldTypeField): Json;
export interface CollaborationAllowlistExemptTargetUserField {
    readonly id?: string;
    readonly type?: CollaborationAllowlistExemptTargetUserFieldTypeField;
    readonly name?: string;
}
export declare function deserializeCollaborationAllowlistExemptTargetUserField(val: Json): CollaborationAllowlistExemptTargetUserField;
export declare function serializeCollaborationAllowlistExemptTargetUserField(val: CollaborationAllowlistExemptTargetUserField): Json;
export interface CollaborationAllowlistExemptTarget {
    readonly id?: string;
    readonly type?: CollaborationAllowlistExemptTargetTypeField;
    readonly enterprise?: CollaborationAllowlistExemptTargetEnterpriseField;
    readonly user?: CollaborationAllowlistExemptTargetUserField;
    readonly createdAt?: string;
    readonly modifiedAt?: string;
}
export declare function deserializeCollaborationAllowlistExemptTarget(val: Json): CollaborationAllowlistExemptTarget;
export declare function serializeCollaborationAllowlistExemptTarget(val: CollaborationAllowlistExemptTarget): Json;
export interface CollaborationAllowlistExemptTargets {
    readonly limit?: number;
    readonly nextMarker?: number;
    readonly prevMarker?: number;
    readonly entries?: readonly CollaborationAllowlistExemptTarget[];
}
export declare function deserializeCollaborationAllowlistExemptTargets(val: Json): CollaborationAllowlistExemptTargets;
export declare function serializeCollaborationAllowlistExemptTargets(val: CollaborationAllowlistExemptTargets): Json;
export type CollectionTypeField = "collection";
export declare function deserializeCollectionTypeField(val: Json): CollectionTypeField;
export declare function serializeCollectionTypeField(val: CollectionTypeField): Json;
export type CollectionNameField = "Favorites";
export declare function deserializeCollectionNameField(val: Json): CollectionNameField;
export declare function serializeCollectionNameField(val: CollectionNameField): Json;
export type CollectionCollectionTypeField = "favorites";
export declare function deserializeCollectionCollectionTypeField(val: Json): CollectionCollectionTypeField;
export declare function serializeCollectionCollectionTypeField(val: CollectionCollectionTypeField): Json;
export interface Collection {
    readonly id?: string;
    readonly type?: CollectionTypeField;
    readonly name?: CollectionNameField;
    readonly collectionType?: CollectionCollectionTypeField;
}
export declare function deserializeCollection(val: Json): Collection;
export declare function serializeCollection(val: Collection): Json;
export type CollectionsOrderFieldDirectionField = "ASC" | "DESC";
export declare function deserializeCollectionsOrderFieldDirectionField(val: Json): CollectionsOrderFieldDirectionField;
export declare function serializeCollectionsOrderFieldDirectionField(val: CollectionsOrderFieldDirectionField): Json;
export interface CollectionsOrderField {
    readonly by?: string;
    readonly direction?: CollectionsOrderFieldDirectionField;
}
export declare function deserializeCollectionsOrderField(val: Json): CollectionsOrderField;
export declare function serializeCollectionsOrderField(val: CollectionsOrderField): Json;
export interface Collections {
    readonly totalCount?: number;
    readonly limit?: number;
    readonly offset?: number;
    readonly order?: readonly CollectionsOrderField[];
    readonly entries?: readonly Collection[];
}
export declare function deserializeCollections(val: Json): Collections;
export declare function serializeCollections(val: Collections): Json;
export interface CommentItemField {
    readonly id?: string;
    readonly type?: string;
}
export declare function deserializeCommentItemField(val: Json): CommentItemField;
export declare function serializeCommentItemField(val: CommentItemField): Json;
export type CommentsOrderFieldDirectionField = "ASC" | "DESC";
export declare function deserializeCommentsOrderFieldDirectionField(val: Json): CommentsOrderFieldDirectionField;
export declare function serializeCommentsOrderFieldDirectionField(val: CommentsOrderFieldDirectionField): Json;
export interface CommentsOrderField {
    readonly by?: string;
    readonly direction?: CommentsOrderFieldDirectionField;
}
export declare function deserializeCommentsOrderField(val: Json): CommentsOrderField;
export declare function serializeCommentsOrderField(val: CommentsOrderField): Json;
export type CommentBaseTypeField = "comment";
export declare function deserializeCommentBaseTypeField(val: Json): CommentBaseTypeField;
export declare function serializeCommentBaseTypeField(val: CommentBaseTypeField): Json;
export interface CommentBase {
    readonly id?: string;
    readonly type?: CommentBaseTypeField;
}
export declare function deserializeCommentBase(val: Json): CommentBase;
export declare function serializeCommentBase(val: CommentBase): Json;
export type DevicePinnerTypeField = "device_pinner";
export declare function deserializeDevicePinnerTypeField(val: Json): DevicePinnerTypeField;
export declare function serializeDevicePinnerTypeField(val: DevicePinnerTypeField): Json;
export type DevicePinnersOrderFieldByField = "id";
export declare function deserializeDevicePinnersOrderFieldByField(val: Json): DevicePinnersOrderFieldByField;
export declare function serializeDevicePinnersOrderFieldByField(val: DevicePinnersOrderFieldByField): Json;
export type DevicePinnersOrderFieldDirectionField = "asc" | "desc";
export declare function deserializeDevicePinnersOrderFieldDirectionField(val: Json): DevicePinnersOrderFieldDirectionField;
export declare function serializeDevicePinnersOrderFieldDirectionField(val: DevicePinnersOrderFieldDirectionField): Json;
export interface DevicePinnersOrderField {
    readonly by?: DevicePinnersOrderFieldByField;
    readonly direction?: DevicePinnersOrderFieldDirectionField;
}
export declare function deserializeDevicePinnersOrderField(val: Json): DevicePinnersOrderField;
export declare function serializeDevicePinnersOrderField(val: DevicePinnersOrderField): Json;
export type EmailAliasTypeField = "email_alias";
export declare function deserializeEmailAliasTypeField(val: Json): EmailAliasTypeField;
export declare function serializeEmailAliasTypeField(val: EmailAliasTypeField): Json;
export interface EmailAlias {
    readonly id?: string;
    readonly type?: EmailAliasTypeField;
    readonly email?: string;
    readonly isConfirmed?: boolean;
}
export declare function deserializeEmailAlias(val: Json): EmailAlias;
export declare function serializeEmailAlias(val: EmailAlias): Json;
export interface EmailAliases {
    readonly totalCount?: number;
    readonly entries?: readonly EmailAlias[];
}
export declare function deserializeEmailAliases(val: Json): EmailAliases;
export declare function serializeEmailAliases(val: EmailAliases): Json;
export type EnterpriseBaseTypeField = "enterprise";
export declare function deserializeEnterpriseBaseTypeField(val: Json): EnterpriseBaseTypeField;
export declare function serializeEnterpriseBaseTypeField(val: EnterpriseBaseTypeField): Json;
export interface EnterpriseBase {
    readonly id?: string;
    readonly type?: EnterpriseBaseTypeField;
}
export declare function deserializeEnterpriseBase(val: Json): EnterpriseBase;
export declare function serializeEnterpriseBase(val: EnterpriseBase): Json;
export type EventEventTypeField = "ACCESS_GRANTED" | "ACCESS_REVOKED" | "ADD_DEVICE_ASSOCIATION" | "ADD_LOGIN_ACTIVITY_DEVICE" | "ADMIN_LOGIN" | "APPLICATION_CREATED" | "APPLICATION_PUBLIC_KEY_ADDED" | "APPLICATION_PUBLIC_KEY_DELETED" | "CHANGE_ADMIN_ROLE" | "CHANGE_FOLDER_PERMISSION" | "COLLABORATION_ACCEPT" | "COLLABORATION_EXPIRATION" | "COLLABORATION_INVITE" | "COLLABORATION_REMOVE" | "COLLABORATION_ROLE_CHANGE" | "COLLAB_ADD_COLLABORATOR" | "COLLAB_INVITE_COLLABORATOR" | "COLLAB_REMOVE_COLLABORATOR" | "COLLAB_ROLE_CHANGE" | "COMMENT_CREATE" | "COMMENT_DELETE" | "CONTENT_ACCESS" | "CONTENT_WORKFLOW_ABNORMAL_DOWNLOAD_ACTIVITY" | "CONTENT_WORKFLOW_AUTOMATION_ADD" | "CONTENT_WORKFLOW_AUTOMATION_DELETE" | "CONTENT_WORKFLOW_POLICY_ADD" | "CONTENT_WORKFLOW_SHARING_POLICY_VIOLATION" | "CONTENT_WORKFLOW_UPLOAD_POLICY_VIOLATION" | "COPY" | "DATA_RETENTION_CREATE_RETENTION" | "DATA_RETENTION_REMOVE_RETENTION" | "DELETE" | "DELETE_USER" | "DEVICE_TRUST_CHECK_FAILED" | "DOWNLOAD" | "EDIT" | "EDIT_USER" | "EMAIL_ALIAS_CONFIRM" | "EMAIL_ALIAS_REMOVE" | "ENABLE_TWO_FACTOR_AUTH" | "ENTERPRISE_APP_AUTHORIZATION_UPDATE" | "FAILED_LOGIN" | "FILE_MARKED_MALICIOUS" | "FILE_WATERMARKED_DOWNLOAD" | "GROUP_ADD_ITEM" | "GROUP_ADD_USER" | "GROUP_CREATION" | "GROUP_DELETION" | "GROUP_EDITED" | "GROUP_REMOVE_ITEM" | "GROUP_REMOVE_USER" | "ITEM_COPY" | "ITEM_CREATE" | "ITEM_DOWNLOAD" | "ITEM_MAKE_CURRENT_VERSION" | "ITEM_MODIFY" | "ITEM_MOVE" | "ITEM_OPEN" | "ITEM_PREVIEW" | "ITEM_RENAME" | "ITEM_SHARED" | "ITEM_SHARED_CREATE" | "ITEM_SHARED_UNSHARE" | "ITEM_SHARED_UPDATE" | "ITEM_SYNC" | "ITEM_TRASH" | "ITEM_UNDELETE_VIA_TRASH" | "ITEM_UNSYNC" | "ITEM_UPLOAD" | "LEGAL_HOLD_ASSIGNMENT_CREATE" | "LEGAL_HOLD_ASSIGNMENT_DELETE" | "LEGAL_HOLD_POLICY_CREATE" | "LEGAL_HOLD_POLICY_DELETE" | "LEGAL_HOLD_POLICY_UPDATE" | "LOCK" | "LOCK_CREATE" | "LOCK_DESTROY" | "LOGIN" | "MASTER_INVITE_ACCEPT" | "MASTER_INVITE_REJECT" | "METADATA_INSTANCE_CREATE" | "METADATA_INSTANCE_DELETE" | "METADATA_INSTANCE_UPDATE" | "METADATA_TEMPLATE_CREATE" | "METADATA_TEMPLATE_DELETE" | "METADATA_TEMPLATE_UPDATE" | "MOVE" | "NEW_USER" | "PREVIEW" | "REMOVE_DEVICE_ASSOCIATION" | "REMOVE_LOGIN_ACTIVITY_DEVICE" | "RENAME" | "RETENTION_POLICY_ASSIGNMENT_ADD" | "SHARE" | "SHARE_EXPIRATION" | "SHIELD_ALERT" | "SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED" | "SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED_MISSING_JUSTIFICATION" | "SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED" | "SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED_MISSING_JUSTIFICATION" | "SHIELD_JUSTIFICATION_APPROVAL" | "SIGN_DOCUMENT_ASSIGNED" | "SIGN_DOCUMENT_CANCELLED" | "SIGN_DOCUMENT_COMPLETED" | "SIGN_DOCUMENT_CONVERTED" | "SIGN_DOCUMENT_CREATED" | "SIGN_DOCUMENT_DECLINED" | "SIGN_DOCUMENT_EXPIRED" | "SIGN_DOCUMENT_SIGNED" | "SIGN_DOCUMENT_VIEWED_BY_SIGNED" | "SIGNER_DOWNLOADED" | "SIGNER_FORWARDED" | "STORAGE_EXPIRATION" | "TAG_ITEM_CREATE" | "TASK_ASSIGNMENT_CREATE" | "TASK_ASSIGNMENT_DELETE" | "TASK_ASSIGNMENT_UPDATE" | "TASK_CREATE" | "TASK_UPDATE" | "TERMS_OF_SERVICE_ACCEPT" | "TERMS_OF_SERVICE_REJECT" | "UNDELETE" | "UNLOCK" | "UNSHARE" | "UPDATE_COLLABORATION_EXPIRATION" | "UPDATE_SHARE_EXPIRATION" | "UPLOAD" | "USER_AUTHENTICATE_OAUTH2_ACCESS_TOKEN_CREATE" | "WATERMARK_LABEL_CREATE" | "WATERMARK_LABEL_DELETE";
export declare function deserializeEventEventTypeField(val: Json): EventEventTypeField;
export declare function serializeEventEventTypeField(val: EventEventTypeField): Json;
export interface EventAdditionalDetailsField {
}
export declare function deserializeEventAdditionalDetailsField(val: Json): EventAdditionalDetailsField;
export declare function serializeEventAdditionalDetailsField(val: EventAdditionalDetailsField): Json;
export type FileSharedLinkFieldAccessField = "open" | "company" | "collaborators";
export declare function deserializeFileSharedLinkFieldAccessField(val: Json): FileSharedLinkFieldAccessField;
export declare function serializeFileSharedLinkFieldAccessField(val: FileSharedLinkFieldAccessField): Json;
export type FileSharedLinkFieldEffectiveAccessField = "open" | "company" | "collaborators";
export declare function deserializeFileSharedLinkFieldEffectiveAccessField(val: Json): FileSharedLinkFieldEffectiveAccessField;
export declare function serializeFileSharedLinkFieldEffectiveAccessField(val: FileSharedLinkFieldEffectiveAccessField): Json;
export type FileSharedLinkFieldEffectivePermissionField = "can_edit" | "can_download" | "can_preview" | "no_access";
export declare function deserializeFileSharedLinkFieldEffectivePermissionField(val: Json): FileSharedLinkFieldEffectivePermissionField;
export declare function serializeFileSharedLinkFieldEffectivePermissionField(val: FileSharedLinkFieldEffectivePermissionField): Json;
export interface FileSharedLinkFieldPermissionsField {
    readonly canDownload: boolean;
    readonly canPreview: boolean;
    readonly canEdit: boolean;
}
export declare function deserializeFileSharedLinkFieldPermissionsField(val: Json): FileSharedLinkFieldPermissionsField;
export declare function serializeFileSharedLinkFieldPermissionsField(val: FileSharedLinkFieldPermissionsField): Json;
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
export declare function deserializeFileSharedLinkField(val: Json): FileSharedLinkField;
export declare function serializeFileSharedLinkField(val: FileSharedLinkField): Json;
export type FileItemStatusField = "active" | "trashed" | "deleted";
export declare function deserializeFileItemStatusField(val: Json): FileItemStatusField;
export declare function serializeFileItemStatusField(val: FileItemStatusField): Json;
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
export declare function deserializeFileFullPermissionsField(val: Json): FileFullPermissionsField;
export declare function serializeFileFullPermissionsField(val: FileFullPermissionsField): Json;
export type FileFullLockFieldTypeField = "lock";
export declare function deserializeFileFullLockFieldTypeField(val: Json): FileFullLockFieldTypeField;
export declare function serializeFileFullLockFieldTypeField(val: FileFullLockFieldTypeField): Json;
export type FileFullLockFieldAppTypeField = "gsuite" | "office_wopi" | "office_wopiplus" | "other";
export declare function deserializeFileFullLockFieldAppTypeField(val: Json): FileFullLockFieldAppTypeField;
export declare function serializeFileFullLockFieldAppTypeField(val: FileFullLockFieldAppTypeField): Json;
export type FileFullExpiringEmbedLinkFieldTokenTypeField = "bearer";
export declare function deserializeFileFullExpiringEmbedLinkFieldTokenTypeField(val: Json): FileFullExpiringEmbedLinkFieldTokenTypeField;
export declare function serializeFileFullExpiringEmbedLinkFieldTokenTypeField(val: FileFullExpiringEmbedLinkFieldTokenTypeField): Json;
export interface FileFullWatermarkInfoField {
    readonly isWatermarked?: boolean;
}
export declare function deserializeFileFullWatermarkInfoField(val: Json): FileFullWatermarkInfoField;
export declare function serializeFileFullWatermarkInfoField(val: FileFullWatermarkInfoField): Json;
export type FileFullAllowedInviteeRolesField = "editor" | "viewer" | "previewer" | "uploader" | "previewer uploader" | "viewer uploader" | "co-owner";
export declare function deserializeFileFullAllowedInviteeRolesField(val: Json): FileFullAllowedInviteeRolesField;
export declare function serializeFileFullAllowedInviteeRolesField(val: FileFullAllowedInviteeRolesField): Json;
export interface FileFullMetadataField {
}
export declare function deserializeFileFullMetadataField(val: Json): FileFullMetadataField;
export declare function serializeFileFullMetadataField(val: FileFullMetadataField): Json;
export interface FileFullRepresentationsFieldEntriesFieldContentField {
    readonly urlTemplate?: string;
}
export declare function deserializeFileFullRepresentationsFieldEntriesFieldContentField(val: Json): FileFullRepresentationsFieldEntriesFieldContentField;
export declare function serializeFileFullRepresentationsFieldEntriesFieldContentField(val: FileFullRepresentationsFieldEntriesFieldContentField): Json;
export interface FileFullRepresentationsFieldEntriesFieldInfoField {
    readonly url?: string;
}
export declare function deserializeFileFullRepresentationsFieldEntriesFieldInfoField(val: Json): FileFullRepresentationsFieldEntriesFieldInfoField;
export declare function serializeFileFullRepresentationsFieldEntriesFieldInfoField(val: FileFullRepresentationsFieldEntriesFieldInfoField): Json;
export interface FileFullRepresentationsFieldEntriesFieldPropertiesField {
    readonly dimensions?: string;
    readonly paged?: boolean;
    readonly thumb?: boolean;
}
export declare function deserializeFileFullRepresentationsFieldEntriesFieldPropertiesField(val: Json): FileFullRepresentationsFieldEntriesFieldPropertiesField;
export declare function serializeFileFullRepresentationsFieldEntriesFieldPropertiesField(val: FileFullRepresentationsFieldEntriesFieldPropertiesField): Json;
export type FileFullRepresentationsFieldEntriesFieldStatusFieldStateField = "success" | "viewable" | "pending" | "none";
export declare function deserializeFileFullRepresentationsFieldEntriesFieldStatusFieldStateField(val: Json): FileFullRepresentationsFieldEntriesFieldStatusFieldStateField;
export declare function serializeFileFullRepresentationsFieldEntriesFieldStatusFieldStateField(val: FileFullRepresentationsFieldEntriesFieldStatusFieldStateField): Json;
export interface FileFullRepresentationsFieldEntriesFieldStatusField {
    readonly state?: FileFullRepresentationsFieldEntriesFieldStatusFieldStateField;
}
export declare function deserializeFileFullRepresentationsFieldEntriesFieldStatusField(val: Json): FileFullRepresentationsFieldEntriesFieldStatusField;
export declare function serializeFileFullRepresentationsFieldEntriesFieldStatusField(val: FileFullRepresentationsFieldEntriesFieldStatusField): Json;
export interface FileFullRepresentationsFieldEntriesField {
    readonly content?: FileFullRepresentationsFieldEntriesFieldContentField;
    readonly info?: FileFullRepresentationsFieldEntriesFieldInfoField;
    readonly properties?: FileFullRepresentationsFieldEntriesFieldPropertiesField;
    readonly representation?: string;
    readonly status?: FileFullRepresentationsFieldEntriesFieldStatusField;
}
export declare function deserializeFileFullRepresentationsFieldEntriesField(val: Json): FileFullRepresentationsFieldEntriesField;
export declare function serializeFileFullRepresentationsFieldEntriesField(val: FileFullRepresentationsFieldEntriesField): Json;
export interface FileFullRepresentationsField {
    readonly entries?: readonly FileFullRepresentationsFieldEntriesField[];
}
export declare function deserializeFileFullRepresentationsField(val: Json): FileFullRepresentationsField;
export declare function serializeFileFullRepresentationsField(val: FileFullRepresentationsField): Json;
export interface FileFullClassificationField {
    readonly name?: string;
    readonly definition?: string;
    readonly color?: string;
}
export declare function deserializeFileFullClassificationField(val: Json): FileFullClassificationField;
export declare function serializeFileFullClassificationField(val: FileFullClassificationField): Json;
export type FileFullSharedLinkPermissionOptionsField = "can_preview" | "can_download" | "can_edit";
export declare function deserializeFileFullSharedLinkPermissionOptionsField(val: Json): FileFullSharedLinkPermissionOptionsField;
export declare function serializeFileFullSharedLinkPermissionOptionsField(val: FileFullSharedLinkPermissionOptionsField): Json;
export type FileBaseTypeField = "file";
export declare function deserializeFileBaseTypeField(val: Json): FileBaseTypeField;
export declare function serializeFileBaseTypeField(val: FileBaseTypeField): Json;
export interface FileBase {
    readonly id: string;
    readonly etag?: string;
    readonly type: FileBaseTypeField;
}
export declare function deserializeFileBase(val: Json): FileBase;
export declare function serializeFileBase(val: FileBase): Json;
export type FileRequestTypeField = "file_request";
export declare function deserializeFileRequestTypeField(val: Json): FileRequestTypeField;
export declare function serializeFileRequestTypeField(val: FileRequestTypeField): Json;
export type FileRequestStatusField = "active" | "inactive";
export declare function deserializeFileRequestStatusField(val: Json): FileRequestStatusField;
export declare function serializeFileRequestStatusField(val: FileRequestStatusField): Json;
export type FileVersionBaseTypeField = "file_version";
export declare function deserializeFileVersionBaseTypeField(val: Json): FileVersionBaseTypeField;
export declare function serializeFileVersionBaseTypeField(val: FileVersionBaseTypeField): Json;
export interface FileVersionBase {
    readonly id: string;
    readonly type: FileVersionBaseTypeField;
}
export declare function deserializeFileVersionBase(val: Json): FileVersionBase;
export declare function serializeFileVersionBase(val: FileVersionBase): Json;
export type FileVersionMini = FileVersionBase & {
    /**
     * The SHA1 hash of this version of the file. */
    readonly sha1?: string;
};
export declare function deserializeFileVersionMini(val: Json): FileVersionMini;
export declare function serializeFileVersionMini(val: FileVersionMini): Json;
export type FileMini = FileBase & {
    readonly sequenceId?: string;
    /**
     * The name of the file */
    readonly name?: string;
    /**
     * The SHA1 hash of the file. This can be used to compare the contents
     * of a file on Box with a local file. */
    readonly sha1?: string;
    readonly fileVersion?: FileVersionMini;
};
export declare function deserializeFileMini(val: Json): FileMini;
export declare function serializeFileMini(val: FileMini): Json;
export interface SignRequestSignFilesField {
    readonly files?: readonly FileMini[];
    readonly isReadyForDownload?: boolean;
}
export declare function deserializeSignRequestSignFilesField(val: Json): SignRequestSignFilesField;
export declare function serializeSignRequestSignFilesField(val: SignRequestSignFilesField): Json;
export interface FilesUnderRetention {
    readonly limit?: number;
    readonly nextMarker?: number;
    readonly prevMarker?: number;
    readonly entries?: readonly FileMini[];
}
export declare function deserializeFilesUnderRetention(val: Json): FilesUnderRetention;
export declare function serializeFilesUnderRetention(val: FilesUnderRetention): Json;
export type FileConflict = FileMini & {
    /**
     * The SHA1 hash of the file. */
    readonly sha1?: string;
    readonly fileVersion?: FileVersionMini;
};
export declare function deserializeFileConflict(val: Json): FileConflict;
export declare function serializeFileConflict(val: FileConflict): Json;
export interface ConflictErrorContextInfoField {
    readonly conflicts?: readonly FileConflict[];
}
export declare function deserializeConflictErrorContextInfoField(val: Json): ConflictErrorContextInfoField;
export declare function serializeConflictErrorContextInfoField(val: ConflictErrorContextInfoField): Json;
export type ConflictError = ClientError & {
    readonly contextInfo?: ConflictErrorContextInfoField;
};
export declare function deserializeConflictError(val: Json): ConflictError;
export declare function serializeConflictError(val: ConflictError): Json;
export type FileVersionsOrderFieldDirectionField = "ASC" | "DESC";
export declare function deserializeFileVersionsOrderFieldDirectionField(val: Json): FileVersionsOrderFieldDirectionField;
export declare function serializeFileVersionsOrderFieldDirectionField(val: FileVersionsOrderFieldDirectionField): Json;
export interface FileVersionsOrderField {
    readonly by?: string;
    readonly direction?: FileVersionsOrderFieldDirectionField;
}
export declare function deserializeFileVersionsOrderField(val: Json): FileVersionsOrderField;
export declare function serializeFileVersionsOrderField(val: FileVersionsOrderField): Json;
export type FileVersionLegalHoldTypeField = "file_version_legal_hold";
export declare function deserializeFileVersionLegalHoldTypeField(val: Json): FileVersionLegalHoldTypeField;
export declare function serializeFileVersionLegalHoldTypeField(val: FileVersionLegalHoldTypeField): Json;
export type FileVersionRetentionTypeField = "file_version_retention";
export declare function deserializeFileVersionRetentionTypeField(val: Json): FileVersionRetentionTypeField;
export declare function serializeFileVersionRetentionTypeField(val: FileVersionRetentionTypeField): Json;
export type FolderSharedLinkFieldAccessField = "open" | "company" | "collaborators";
export declare function deserializeFolderSharedLinkFieldAccessField(val: Json): FolderSharedLinkFieldAccessField;
export declare function serializeFolderSharedLinkFieldAccessField(val: FolderSharedLinkFieldAccessField): Json;
export type FolderSharedLinkFieldEffectiveAccessField = "open" | "company" | "collaborators";
export declare function deserializeFolderSharedLinkFieldEffectiveAccessField(val: Json): FolderSharedLinkFieldEffectiveAccessField;
export declare function serializeFolderSharedLinkFieldEffectiveAccessField(val: FolderSharedLinkFieldEffectiveAccessField): Json;
export type FolderSharedLinkFieldEffectivePermissionField = "can_edit" | "can_download" | "can_preview" | "no_access";
export declare function deserializeFolderSharedLinkFieldEffectivePermissionField(val: Json): FolderSharedLinkFieldEffectivePermissionField;
export declare function serializeFolderSharedLinkFieldEffectivePermissionField(val: FolderSharedLinkFieldEffectivePermissionField): Json;
export interface FolderSharedLinkFieldPermissionsField {
    readonly canDownload: boolean;
    readonly canPreview: boolean;
    readonly canEdit: boolean;
}
export declare function deserializeFolderSharedLinkFieldPermissionsField(val: Json): FolderSharedLinkFieldPermissionsField;
export declare function serializeFolderSharedLinkFieldPermissionsField(val: FolderSharedLinkFieldPermissionsField): Json;
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
export declare function deserializeFolderSharedLinkField(val: Json): FolderSharedLinkField;
export declare function serializeFolderSharedLinkField(val: FolderSharedLinkField): Json;
export type FolderFolderUploadEmailFieldAccessField = "open" | "collaborators";
export declare function deserializeFolderFolderUploadEmailFieldAccessField(val: Json): FolderFolderUploadEmailFieldAccessField;
export declare function serializeFolderFolderUploadEmailFieldAccessField(val: FolderFolderUploadEmailFieldAccessField): Json;
export interface FolderFolderUploadEmailField {
    readonly access?: FolderFolderUploadEmailFieldAccessField;
    readonly email?: string;
}
export declare function deserializeFolderFolderUploadEmailField(val: Json): FolderFolderUploadEmailField;
export declare function serializeFolderFolderUploadEmailField(val: FolderFolderUploadEmailField): Json;
export type FolderItemStatusField = "active" | "trashed" | "deleted";
export declare function deserializeFolderItemStatusField(val: Json): FolderItemStatusField;
export declare function serializeFolderItemStatusField(val: FolderItemStatusField): Json;
export type FolderFullSyncStateField = "synced" | "not_synced" | "partially_synced";
export declare function deserializeFolderFullSyncStateField(val: Json): FolderFullSyncStateField;
export declare function serializeFolderFullSyncStateField(val: FolderFullSyncStateField): Json;
export interface FolderFullPermissionsField {
    readonly canDelete: boolean;
    readonly canDownload: boolean;
    readonly canInviteCollaborator: boolean;
    readonly canRename: boolean;
    readonly canSetShareAccess: boolean;
    readonly canShare: boolean;
    readonly canUpload?: boolean;
}
export declare function deserializeFolderFullPermissionsField(val: Json): FolderFullPermissionsField;
export declare function serializeFolderFullPermissionsField(val: FolderFullPermissionsField): Json;
export interface FolderFullMetadataField {
}
export declare function deserializeFolderFullMetadataField(val: Json): FolderFullMetadataField;
export declare function serializeFolderFullMetadataField(val: FolderFullMetadataField): Json;
export type FolderFullAllowedSharedLinkAccessLevelsField = "open" | "company" | "collaborators";
export declare function deserializeFolderFullAllowedSharedLinkAccessLevelsField(val: Json): FolderFullAllowedSharedLinkAccessLevelsField;
export declare function serializeFolderFullAllowedSharedLinkAccessLevelsField(val: FolderFullAllowedSharedLinkAccessLevelsField): Json;
export type FolderFullAllowedInviteeRolesField = "editor" | "viewer" | "previewer" | "uploader" | "previewer uploader" | "viewer uploader" | "co-owner";
export declare function deserializeFolderFullAllowedInviteeRolesField(val: Json): FolderFullAllowedInviteeRolesField;
export declare function serializeFolderFullAllowedInviteeRolesField(val: FolderFullAllowedInviteeRolesField): Json;
export interface FolderFullWatermarkInfoField {
    readonly isWatermarked?: boolean;
}
export declare function deserializeFolderFullWatermarkInfoField(val: Json): FolderFullWatermarkInfoField;
export declare function serializeFolderFullWatermarkInfoField(val: FolderFullWatermarkInfoField): Json;
export interface FolderFullClassificationField {
    readonly name?: string;
    readonly definition?: string;
    readonly color?: string;
}
export declare function deserializeFolderFullClassificationField(val: Json): FolderFullClassificationField;
export declare function serializeFolderFullClassificationField(val: FolderFullClassificationField): Json;
export type FolderBaseTypeField = "folder";
export declare function deserializeFolderBaseTypeField(val: Json): FolderBaseTypeField;
export declare function serializeFolderBaseTypeField(val: FolderBaseTypeField): Json;
export interface FolderBase {
    readonly id: string;
    readonly etag?: string;
    readonly type: FolderBaseTypeField;
}
export declare function deserializeFolderBase(val: Json): FolderBase;
export declare function serializeFolderBase(val: FolderBase): Json;
export type FolderMini = FolderBase & {
    /**
     * The name of the folder. */
    readonly name?: string;
    /**
     * A numeric identifier that represents the most recent user event
     * that has been applied to this item.
     *
     * This can be used in combination with the `GET /events`-endpoint
     * to filter out user events that would have occurred before this
     * identifier was read.
     *
     * An example would be where a Box Drive-like application
     * would fetch an item via the API, and then listen to incoming
     * user events for changes to the item. The application would
     * ignore any user events where the `sequence_id` in the event
     * is smaller than or equal to the `sequence_id` in the originally
     * fetched resource. */
    readonly sequenceId?: string;
};
export declare function deserializeFolderMini(val: Json): FolderMini;
export declare function serializeFolderMini(val: FolderMini): Json;
export interface WebLinkPathCollectionField {
    readonly totalCount: number;
    readonly entries: readonly FolderMini[];
}
export declare function deserializeWebLinkPathCollectionField(val: Json): WebLinkPathCollectionField;
export declare function serializeWebLinkPathCollectionField(val: WebLinkPathCollectionField): Json;
export interface TrashWebLinkRestoredPathCollectionField {
    readonly totalCount: number;
    readonly entries: readonly FolderMini[];
}
export declare function deserializeTrashWebLinkRestoredPathCollectionField(val: Json): TrashWebLinkRestoredPathCollectionField;
export declare function serializeTrashWebLinkRestoredPathCollectionField(val: TrashWebLinkRestoredPathCollectionField): Json;
export interface TrashFolderRestoredPathCollectionField {
    readonly totalCount: number;
    readonly entries: readonly FolderMini[];
}
export declare function deserializeTrashFolderRestoredPathCollectionField(val: Json): TrashFolderRestoredPathCollectionField;
export declare function serializeTrashFolderRestoredPathCollectionField(val: TrashFolderRestoredPathCollectionField): Json;
export interface TrashFileRestoredPathCollectionField {
    readonly totalCount: number;
    readonly entries: readonly FolderMini[];
}
export declare function deserializeTrashFileRestoredPathCollectionField(val: Json): TrashFileRestoredPathCollectionField;
export declare function serializeTrashFileRestoredPathCollectionField(val: TrashFileRestoredPathCollectionField): Json;
export interface FolderPathCollectionField {
    readonly totalCount: number;
    readonly entries: readonly FolderMini[];
}
export declare function deserializeFolderPathCollectionField(val: Json): FolderPathCollectionField;
export declare function serializeFolderPathCollectionField(val: FolderPathCollectionField): Json;
export interface FilePathCollectionField {
    readonly totalCount: number;
    readonly entries: readonly FolderMini[];
}
export declare function deserializeFilePathCollectionField(val: Json): FilePathCollectionField;
export declare function serializeFilePathCollectionField(val: FilePathCollectionField): Json;
export interface FolderLockLockedOperationsField {
    readonly move: boolean;
    readonly delete: boolean;
}
export declare function deserializeFolderLockLockedOperationsField(val: Json): FolderLockLockedOperationsField;
export declare function serializeFolderLockLockedOperationsField(val: FolderLockLockedOperationsField): Json;
export type IntegrationMappingTypeField = "integration_mapping";
export declare function deserializeIntegrationMappingTypeField(val: Json): IntegrationMappingTypeField;
export declare function serializeIntegrationMappingTypeField(val: IntegrationMappingTypeField): Json;
export interface IntegrationMappingBoxItemField {
}
export declare function deserializeIntegrationMappingBoxItemField(val: Json): IntegrationMappingBoxItemField;
export declare function serializeIntegrationMappingBoxItemField(val: IntegrationMappingBoxItemField): Json;
export interface IntegrationMappingOptionsField {
}
export declare function deserializeIntegrationMappingOptionsField(val: Json): IntegrationMappingOptionsField;
export declare function serializeIntegrationMappingOptionsField(val: IntegrationMappingOptionsField): Json;
export interface IntegrationMappingCreatedByField {
}
export declare function deserializeIntegrationMappingCreatedByField(val: Json): IntegrationMappingCreatedByField;
export declare function serializeIntegrationMappingCreatedByField(val: IntegrationMappingCreatedByField): Json;
export interface IntegrationMappingModifiedByField {
}
export declare function deserializeIntegrationMappingModifiedByField(val: Json): IntegrationMappingModifiedByField;
export declare function serializeIntegrationMappingModifiedByField(val: IntegrationMappingModifiedByField): Json;
export type IntegrationMappingBaseIntegrationTypeField = "slack";
export declare function deserializeIntegrationMappingBaseIntegrationTypeField(val: Json): IntegrationMappingBaseIntegrationTypeField;
export declare function serializeIntegrationMappingBaseIntegrationTypeField(val: IntegrationMappingBaseIntegrationTypeField): Json;
export interface IntegrationMappingBase {
    readonly id?: string;
    readonly integrationType?: IntegrationMappingBaseIntegrationTypeField;
}
export declare function deserializeIntegrationMappingBase(val: Json): IntegrationMappingBase;
export declare function serializeIntegrationMappingBase(val: IntegrationMappingBase): Json;
export type IntegrationMappingMiniPartnerItemTypeField = "channel";
export declare function deserializeIntegrationMappingMiniPartnerItemTypeField(val: Json): IntegrationMappingMiniPartnerItemTypeField;
export declare function serializeIntegrationMappingMiniPartnerItemTypeField(val: IntegrationMappingMiniPartnerItemTypeField): Json;
export type IntegrationMappingMiniBoxItemTypeField = "folder";
export declare function deserializeIntegrationMappingMiniBoxItemTypeField(val: Json): IntegrationMappingMiniBoxItemTypeField;
export declare function serializeIntegrationMappingMiniBoxItemTypeField(val: IntegrationMappingMiniBoxItemTypeField): Json;
export type IntegrationMappingMini = IntegrationMappingBase & {
    /**
     * ID of the mapped partner item */
    readonly partnerItemId?: string;
    /**
     * Domain-specific type of the mapped partner item */
    readonly partnerItemType?: IntegrationMappingMiniPartnerItemTypeField;
    /**
     * ID of the Box item mapped to the object referenced in `partner_item_id` */
    readonly boxItemId?: string;
    /**
     * Type of the Box object referenced in `box_item_id` */
    readonly boxItemType?: IntegrationMappingMiniBoxItemTypeField;
};
export declare function deserializeIntegrationMappingMini(val: Json): IntegrationMappingMini;
export declare function serializeIntegrationMappingMini(val: IntegrationMappingMini): Json;
export type GroupsOrderFieldDirectionField = "ASC" | "DESC";
export declare function deserializeGroupsOrderFieldDirectionField(val: Json): GroupsOrderFieldDirectionField;
export declare function serializeGroupsOrderFieldDirectionField(val: GroupsOrderFieldDirectionField): Json;
export interface GroupsOrderField {
    readonly by?: string;
    readonly direction?: GroupsOrderFieldDirectionField;
}
export declare function deserializeGroupsOrderField(val: Json): GroupsOrderField;
export declare function serializeGroupsOrderField(val: GroupsOrderField): Json;
export type GroupBaseTypeField = "group";
export declare function deserializeGroupBaseTypeField(val: Json): GroupBaseTypeField;
export declare function serializeGroupBaseTypeField(val: GroupBaseTypeField): Json;
export interface GroupBase {
    readonly id?: string;
    readonly type?: GroupBaseTypeField;
}
export declare function deserializeGroupBase(val: Json): GroupBase;
export declare function serializeGroupBase(val: GroupBase): Json;
export type GroupFullInvitabilityLevelField = "admins_only" | "admins_and_members" | "all_managed_users";
export declare function deserializeGroupFullInvitabilityLevelField(val: Json): GroupFullInvitabilityLevelField;
export declare function serializeGroupFullInvitabilityLevelField(val: GroupFullInvitabilityLevelField): Json;
export type GroupFullMemberViewabilityLevelField = "admins_only" | "admins_and_members" | "all_managed_users";
export declare function deserializeGroupFullMemberViewabilityLevelField(val: Json): GroupFullMemberViewabilityLevelField;
export declare function serializeGroupFullMemberViewabilityLevelField(val: GroupFullMemberViewabilityLevelField): Json;
export interface GroupFullPermissionsField {
    readonly canInviteAsCollaborator?: boolean;
}
export declare function deserializeGroupFullPermissionsField(val: Json): GroupFullPermissionsField;
export declare function serializeGroupFullPermissionsField(val: GroupFullPermissionsField): Json;
export type GroupMiniGroupTypeField = "managed_group" | "all_users_group";
export declare function deserializeGroupMiniGroupTypeField(val: Json): GroupMiniGroupTypeField;
export declare function serializeGroupMiniGroupTypeField(val: GroupMiniGroupTypeField): Json;
export type GroupMini = GroupBase & {
    /**
     * The name of the group */
    readonly name?: string;
    /**
     * The type of the group. */
    readonly groupType?: GroupMiniGroupTypeField;
};
export declare function deserializeGroupMini(val: Json): GroupMini;
export declare function serializeGroupMini(val: GroupMini): Json;
export interface Groups {
    readonly totalCount?: number;
    readonly limit?: number;
    readonly offset?: number;
    readonly order?: readonly GroupsOrderField[];
    readonly entries?: readonly GroupMini[];
}
export declare function deserializeGroups(val: Json): Groups;
export declare function serializeGroups(val: Groups): Json;
export type Group = GroupMini & {
    /**
     * When the group object was created */
    readonly createdAt?: string;
    /**
     * When the group object was last modified */
    readonly modifiedAt?: string;
};
export declare function deserializeGroup(val: Json): Group;
export declare function serializeGroup(val: Group): Json;
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
export declare function deserializeGroupFull(val: Json): GroupFull;
export declare function serializeGroupFull(val: GroupFull): Json;
export type GroupMembershipTypeField = "group_membership";
export declare function deserializeGroupMembershipTypeField(val: Json): GroupMembershipTypeField;
export declare function serializeGroupMembershipTypeField(val: GroupMembershipTypeField): Json;
export type GroupMembershipRoleField = "member" | "admin";
export declare function deserializeGroupMembershipRoleField(val: Json): GroupMembershipRoleField;
export declare function serializeGroupMembershipRoleField(val: GroupMembershipRoleField): Json;
export type GroupMembershipsOrderFieldDirectionField = "ASC" | "DESC";
export declare function deserializeGroupMembershipsOrderFieldDirectionField(val: Json): GroupMembershipsOrderFieldDirectionField;
export declare function serializeGroupMembershipsOrderFieldDirectionField(val: GroupMembershipsOrderFieldDirectionField): Json;
export interface GroupMembershipsOrderField {
    readonly by?: string;
    readonly direction?: GroupMembershipsOrderFieldDirectionField;
}
export declare function deserializeGroupMembershipsOrderField(val: Json): GroupMembershipsOrderField;
export declare function serializeGroupMembershipsOrderField(val: GroupMembershipsOrderField): Json;
export type InviteTypeField = "invite";
export declare function deserializeInviteTypeField(val: Json): InviteTypeField;
export declare function serializeInviteTypeField(val: InviteTypeField): Json;
export type InviteInvitedToFieldTypeField = "enterprise";
export declare function deserializeInviteInvitedToFieldTypeField(val: Json): InviteInvitedToFieldTypeField;
export declare function serializeInviteInvitedToFieldTypeField(val: InviteInvitedToFieldTypeField): Json;
export interface InviteInvitedToField {
    readonly id?: string;
    readonly type?: InviteInvitedToFieldTypeField;
    readonly name?: string;
}
export declare function deserializeInviteInvitedToField(val: Json): InviteInvitedToField;
export declare function serializeInviteInvitedToField(val: InviteInvitedToField): Json;
export type ItemsOrderFieldDirectionField = "ASC" | "DESC";
export declare function deserializeItemsOrderFieldDirectionField(val: Json): ItemsOrderFieldDirectionField;
export declare function serializeItemsOrderFieldDirectionField(val: ItemsOrderFieldDirectionField): Json;
export interface ItemsOrderField {
    readonly by?: string;
    readonly direction?: ItemsOrderFieldDirectionField;
}
export declare function deserializeItemsOrderField(val: Json): ItemsOrderField;
export declare function serializeItemsOrderField(val: ItemsOrderField): Json;
export type LegalHoldPolicyStatusField = "active" | "applying" | "releasing" | "released";
export declare function deserializeLegalHoldPolicyStatusField(val: Json): LegalHoldPolicyStatusField;
export declare function serializeLegalHoldPolicyStatusField(val: LegalHoldPolicyStatusField): Json;
export interface LegalHoldPolicyAssignmentCountsField {
    readonly user?: number;
    readonly folder?: number;
    readonly file?: number;
    readonly fileVersion?: number;
}
export declare function deserializeLegalHoldPolicyAssignmentCountsField(val: Json): LegalHoldPolicyAssignmentCountsField;
export declare function serializeLegalHoldPolicyAssignmentCountsField(val: LegalHoldPolicyAssignmentCountsField): Json;
export type LegalHoldPolicyMiniTypeField = "legal_hold_policy";
export declare function deserializeLegalHoldPolicyMiniTypeField(val: Json): LegalHoldPolicyMiniTypeField;
export declare function serializeLegalHoldPolicyMiniTypeField(val: LegalHoldPolicyMiniTypeField): Json;
export interface LegalHoldPolicyMini {
    readonly id?: string;
    readonly type?: LegalHoldPolicyMiniTypeField;
}
export declare function deserializeLegalHoldPolicyMini(val: Json): LegalHoldPolicyMini;
export declare function serializeLegalHoldPolicyMini(val: LegalHoldPolicyMini): Json;
export type LegalHoldPolicyAssignmentBaseTypeField = "legal_hold_policy_assignment";
export declare function deserializeLegalHoldPolicyAssignmentBaseTypeField(val: Json): LegalHoldPolicyAssignmentBaseTypeField;
export declare function serializeLegalHoldPolicyAssignmentBaseTypeField(val: LegalHoldPolicyAssignmentBaseTypeField): Json;
export interface LegalHoldPolicyAssignmentBase {
    readonly id?: string;
    readonly type?: LegalHoldPolicyAssignmentBaseTypeField;
}
export declare function deserializeLegalHoldPolicyAssignmentBase(val: Json): LegalHoldPolicyAssignmentBase;
export declare function serializeLegalHoldPolicyAssignmentBase(val: LegalHoldPolicyAssignmentBase): Json;
export interface LegalHoldPolicyAssignments {
    readonly limit?: number;
    readonly nextMarker?: number;
    readonly prevMarker?: number;
    readonly entries?: readonly LegalHoldPolicyAssignmentBase[];
}
export declare function deserializeLegalHoldPolicyAssignments(val: Json): LegalHoldPolicyAssignments;
export declare function serializeLegalHoldPolicyAssignments(val: LegalHoldPolicyAssignments): Json;
export interface Metadata {
}
export declare function deserializeMetadata(val: Json): Metadata;
export declare function serializeMetadata(val: Metadata): Json;
export interface Metadatas {
    readonly entries?: readonly Metadata[];
    readonly limit?: number;
}
export declare function deserializeMetadatas(val: Json): Metadatas;
export declare function serializeMetadatas(val: Metadatas): Json;
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
export declare function deserializeMetadataFull(val: Json): MetadataFull;
export declare function serializeMetadataFull(val: MetadataFull): Json;
export interface MetadataBase {
    readonly parent?: string;
    readonly template?: string;
    readonly scope?: string;
    readonly version?: number;
}
export declare function deserializeMetadataBase(val: Json): MetadataBase;
export declare function serializeMetadataBase(val: MetadataBase): Json;
export type MetadataCascadePolicyTypeField = "metadata_cascade_policy";
export declare function deserializeMetadataCascadePolicyTypeField(val: Json): MetadataCascadePolicyTypeField;
export declare function serializeMetadataCascadePolicyTypeField(val: MetadataCascadePolicyTypeField): Json;
export type MetadataCascadePolicyOwnerEnterpriseFieldTypeField = "enterprise";
export declare function deserializeMetadataCascadePolicyOwnerEnterpriseFieldTypeField(val: Json): MetadataCascadePolicyOwnerEnterpriseFieldTypeField;
export declare function serializeMetadataCascadePolicyOwnerEnterpriseFieldTypeField(val: MetadataCascadePolicyOwnerEnterpriseFieldTypeField): Json;
export interface MetadataCascadePolicyOwnerEnterpriseField {
    readonly type?: MetadataCascadePolicyOwnerEnterpriseFieldTypeField;
    readonly id?: string;
}
export declare function deserializeMetadataCascadePolicyOwnerEnterpriseField(val: Json): MetadataCascadePolicyOwnerEnterpriseField;
export declare function serializeMetadataCascadePolicyOwnerEnterpriseField(val: MetadataCascadePolicyOwnerEnterpriseField): Json;
export type MetadataCascadePolicyParentFieldTypeField = "folder";
export declare function deserializeMetadataCascadePolicyParentFieldTypeField(val: Json): MetadataCascadePolicyParentFieldTypeField;
export declare function serializeMetadataCascadePolicyParentFieldTypeField(val: MetadataCascadePolicyParentFieldTypeField): Json;
export interface MetadataCascadePolicyParentField {
    readonly type?: MetadataCascadePolicyParentFieldTypeField;
    readonly id?: string;
}
export declare function deserializeMetadataCascadePolicyParentField(val: Json): MetadataCascadePolicyParentField;
export declare function serializeMetadataCascadePolicyParentField(val: MetadataCascadePolicyParentField): Json;
export type MetadataCascadePolicyScopeField = "global" | "enterprise_*";
export declare function deserializeMetadataCascadePolicyScopeField(val: Json): MetadataCascadePolicyScopeField;
export declare function serializeMetadataCascadePolicyScopeField(val: MetadataCascadePolicyScopeField): Json;
export interface MetadataCascadePolicy {
    readonly id?: string;
    readonly type?: MetadataCascadePolicyTypeField;
    readonly ownerEnterprise?: MetadataCascadePolicyOwnerEnterpriseField;
    readonly parent?: MetadataCascadePolicyParentField;
    readonly scope?: MetadataCascadePolicyScopeField;
    readonly templateKey?: string;
}
export declare function deserializeMetadataCascadePolicy(val: Json): MetadataCascadePolicy;
export declare function serializeMetadataCascadePolicy(val: MetadataCascadePolicy): Json;
export interface MetadataCascadePolicies {
    readonly limit?: number;
    readonly nextMarker?: number;
    readonly prevMarker?: number;
    readonly entries?: readonly MetadataCascadePolicy[];
}
export declare function deserializeMetadataCascadePolicies(val: Json): MetadataCascadePolicies;
export declare function serializeMetadataCascadePolicies(val: MetadataCascadePolicies): Json;
export type MetadataQueryIndexStatusField = "building" | "active" | "disabled";
export declare function deserializeMetadataQueryIndexStatusField(val: Json): MetadataQueryIndexStatusField;
export declare function serializeMetadataQueryIndexStatusField(val: MetadataQueryIndexStatusField): Json;
export type MetadataQueryIndexFieldsFieldSortDirectionField = "asc" | "desc";
export declare function deserializeMetadataQueryIndexFieldsFieldSortDirectionField(val: Json): MetadataQueryIndexFieldsFieldSortDirectionField;
export declare function serializeMetadataQueryIndexFieldsFieldSortDirectionField(val: MetadataQueryIndexFieldsFieldSortDirectionField): Json;
export interface MetadataQueryIndexFieldsField {
    readonly key?: string;
    readonly sortDirection?: MetadataQueryIndexFieldsFieldSortDirectionField;
}
export declare function deserializeMetadataQueryIndexFieldsField(val: Json): MetadataQueryIndexFieldsField;
export declare function serializeMetadataQueryIndexFieldsField(val: MetadataQueryIndexFieldsField): Json;
export interface MetadataQueryIndex {
    readonly id?: string;
    readonly type: string;
    readonly status: MetadataQueryIndexStatusField;
    readonly fields?: readonly MetadataQueryIndexFieldsField[];
}
export declare function deserializeMetadataQueryIndex(val: Json): MetadataQueryIndex;
export declare function serializeMetadataQueryIndex(val: MetadataQueryIndex): Json;
export interface MetadataQueryIndices {
    readonly entries?: readonly MetadataQueryIndex[];
    readonly limit?: number;
    readonly nextMarker?: string;
}
export declare function deserializeMetadataQueryIndices(val: Json): MetadataQueryIndices;
export declare function serializeMetadataQueryIndices(val: MetadataQueryIndices): Json;
export type MetadataTemplateTypeField = "metadata_template";
export declare function deserializeMetadataTemplateTypeField(val: Json): MetadataTemplateTypeField;
export declare function serializeMetadataTemplateTypeField(val: MetadataTemplateTypeField): Json;
export type MetadataTemplateFieldsFieldTypeField = "string" | "float" | "date" | "enum" | "multiSelect";
export declare function deserializeMetadataTemplateFieldsFieldTypeField(val: Json): MetadataTemplateFieldsFieldTypeField;
export declare function serializeMetadataTemplateFieldsFieldTypeField(val: MetadataTemplateFieldsFieldTypeField): Json;
export interface MetadataTemplateFieldsFieldOptionsField {
    readonly key: string;
    readonly id?: string;
}
export declare function deserializeMetadataTemplateFieldsFieldOptionsField(val: Json): MetadataTemplateFieldsFieldOptionsField;
export declare function serializeMetadataTemplateFieldsFieldOptionsField(val: MetadataTemplateFieldsFieldOptionsField): Json;
export interface MetadataTemplateFieldsField {
    readonly type: MetadataTemplateFieldsFieldTypeField;
    readonly key: string;
    readonly displayName: string;
    readonly description?: string;
    readonly hidden?: boolean;
    readonly options?: readonly MetadataTemplateFieldsFieldOptionsField[];
    readonly id?: string;
}
export declare function deserializeMetadataTemplateFieldsField(val: Json): MetadataTemplateFieldsField;
export declare function serializeMetadataTemplateFieldsField(val: MetadataTemplateFieldsField): Json;
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
export declare function deserializeMetadataTemplate(val: Json): MetadataTemplate;
export declare function serializeMetadataTemplate(val: MetadataTemplate): Json;
export interface MetadataTemplates {
    readonly limit?: number;
    readonly nextMarker?: number;
    readonly prevMarker?: number;
    readonly entries?: readonly MetadataTemplate[];
}
export declare function deserializeMetadataTemplates(val: Json): MetadataTemplates;
export declare function serializeMetadataTemplates(val: MetadataTemplates): Json;
export interface RealtimeServer {
    readonly type?: string;
    readonly url?: string;
    readonly ttl?: number;
    readonly maxRetries?: number;
    readonly retryTimeout?: number;
}
export declare function deserializeRealtimeServer(val: Json): RealtimeServer;
export declare function serializeRealtimeServer(val: RealtimeServer): Json;
export interface RealtimeServers {
    readonly chunkSize?: number;
    readonly entries?: readonly RealtimeServer[];
}
export declare function deserializeRealtimeServers(val: Json): RealtimeServers;
export declare function serializeRealtimeServers(val: RealtimeServers): Json;
export type RecentItemInteractionTypeField = "item_preview" | "item_upload" | "item_comment" | "item_open" | "item_modify";
export declare function deserializeRecentItemInteractionTypeField(val: Json): RecentItemInteractionTypeField;
export declare function serializeRecentItemInteractionTypeField(val: RecentItemInteractionTypeField): Json;
export type RetentionPolicyPolicyTypeField = "finite" | "indefinite";
export declare function deserializeRetentionPolicyPolicyTypeField(val: Json): RetentionPolicyPolicyTypeField;
export declare function serializeRetentionPolicyPolicyTypeField(val: RetentionPolicyPolicyTypeField): Json;
export type RetentionPolicyRetentionTypeField = "modifiable" | "non-modifiable";
export declare function deserializeRetentionPolicyRetentionTypeField(val: Json): RetentionPolicyRetentionTypeField;
export declare function serializeRetentionPolicyRetentionTypeField(val: RetentionPolicyRetentionTypeField): Json;
export type RetentionPolicyStatusField = "active" | "retired";
export declare function deserializeRetentionPolicyStatusField(val: Json): RetentionPolicyStatusField;
export declare function serializeRetentionPolicyStatusField(val: RetentionPolicyStatusField): Json;
export interface RetentionPolicyAssignmentCountsField {
    readonly enterprise?: number;
    readonly folder?: number;
    readonly metadataTemplate?: number;
}
export declare function deserializeRetentionPolicyAssignmentCountsField(val: Json): RetentionPolicyAssignmentCountsField;
export declare function serializeRetentionPolicyAssignmentCountsField(val: RetentionPolicyAssignmentCountsField): Json;
export type RetentionPolicyMiniDispositionActionField = "permanently_delete" | "remove_retention";
export declare function deserializeRetentionPolicyMiniDispositionActionField(val: Json): RetentionPolicyMiniDispositionActionField;
export declare function serializeRetentionPolicyMiniDispositionActionField(val: RetentionPolicyMiniDispositionActionField): Json;
export type RetentionPolicyBaseTypeField = "retention_policy";
export declare function deserializeRetentionPolicyBaseTypeField(val: Json): RetentionPolicyBaseTypeField;
export declare function serializeRetentionPolicyBaseTypeField(val: RetentionPolicyBaseTypeField): Json;
export interface RetentionPolicyBase {
    readonly id: string;
    readonly type: RetentionPolicyBaseTypeField;
}
export declare function deserializeRetentionPolicyBase(val: Json): RetentionPolicyBase;
export declare function serializeRetentionPolicyBase(val: RetentionPolicyBase): Json;
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
export declare function deserializeRetentionPolicyMini(val: Json): RetentionPolicyMini;
export declare function serializeRetentionPolicyMini(val: RetentionPolicyMini): Json;
export interface RetentionPolicies {
    readonly entries?: readonly RetentionPolicyMini[];
    readonly limit?: number;
    readonly nextMarker?: string;
}
export declare function deserializeRetentionPolicies(val: Json): RetentionPolicies;
export declare function serializeRetentionPolicies(val: RetentionPolicies): Json;
export interface FileVersionRetention {
    readonly id?: string;
    readonly type?: FileVersionRetentionTypeField;
    readonly fileVersion?: FileVersionMini;
    readonly file?: FileMini;
    readonly appliedAt?: string;
    readonly dispositionAt?: string;
    readonly winningRetentionPolicy?: RetentionPolicyMini;
}
export declare function deserializeFileVersionRetention(val: Json): FileVersionRetention;
export declare function serializeFileVersionRetention(val: FileVersionRetention): Json;
export interface FileVersionRetentions {
    readonly limit?: number;
    readonly nextMarker?: number;
    readonly prevMarker?: number;
    readonly entries?: readonly FileVersionRetention[];
}
export declare function deserializeFileVersionRetentions(val: Json): FileVersionRetentions;
export declare function serializeFileVersionRetentions(val: FileVersionRetentions): Json;
export type RetentionPolicyAssignmentBaseTypeField = "retention_policy_assignment";
export declare function deserializeRetentionPolicyAssignmentBaseTypeField(val: Json): RetentionPolicyAssignmentBaseTypeField;
export declare function serializeRetentionPolicyAssignmentBaseTypeField(val: RetentionPolicyAssignmentBaseTypeField): Json;
export interface RetentionPolicyAssignmentBase {
    readonly id: string;
    readonly type: RetentionPolicyAssignmentBaseTypeField;
}
export declare function deserializeRetentionPolicyAssignmentBase(val: Json): RetentionPolicyAssignmentBase;
export declare function serializeRetentionPolicyAssignmentBase(val: RetentionPolicyAssignmentBase): Json;
export interface RetentionPolicyAssignments {
    readonly entries?: readonly RetentionPolicyAssignmentBase[];
    readonly limit?: number;
    readonly nextMarker?: string;
}
export declare function deserializeRetentionPolicyAssignments(val: Json): RetentionPolicyAssignments;
export declare function serializeRetentionPolicyAssignments(val: RetentionPolicyAssignments): Json;
export type RetentionPolicyAssignmentTypeField = "retention_policy_assignment";
export declare function deserializeRetentionPolicyAssignmentTypeField(val: Json): RetentionPolicyAssignmentTypeField;
export declare function serializeRetentionPolicyAssignmentTypeField(val: RetentionPolicyAssignmentTypeField): Json;
export type RetentionPolicyAssignmentAssignedToFieldTypeField = "folder" | "enterprise" | "metadata_template";
export declare function deserializeRetentionPolicyAssignmentAssignedToFieldTypeField(val: Json): RetentionPolicyAssignmentAssignedToFieldTypeField;
export declare function serializeRetentionPolicyAssignmentAssignedToFieldTypeField(val: RetentionPolicyAssignmentAssignedToFieldTypeField): Json;
export interface RetentionPolicyAssignmentAssignedToField {
    readonly id?: string;
    readonly type?: RetentionPolicyAssignmentAssignedToFieldTypeField;
}
export declare function deserializeRetentionPolicyAssignmentAssignedToField(val: Json): RetentionPolicyAssignmentAssignedToField;
export declare function serializeRetentionPolicyAssignmentAssignedToField(val: RetentionPolicyAssignmentAssignedToField): Json;
export interface RetentionPolicyAssignmentFilterFieldsField {
    readonly field?: string;
    readonly value?: string;
}
export declare function deserializeRetentionPolicyAssignmentFilterFieldsField(val: Json): RetentionPolicyAssignmentFilterFieldsField;
export declare function serializeRetentionPolicyAssignmentFilterFieldsField(val: RetentionPolicyAssignmentFilterFieldsField): Json;
export type ShieldInformationBarrierTypeField = "shield_information_barrier";
export declare function deserializeShieldInformationBarrierTypeField(val: Json): ShieldInformationBarrierTypeField;
export declare function serializeShieldInformationBarrierTypeField(val: ShieldInformationBarrierTypeField): Json;
export type ShieldInformationBarrierStatusField = "draft" | "pending" | "disabled" | "enabled" | "invalid";
export declare function deserializeShieldInformationBarrierStatusField(val: Json): ShieldInformationBarrierStatusField;
export declare function serializeShieldInformationBarrierStatusField(val: ShieldInformationBarrierStatusField): Json;
export type ShieldInformationBarrierBaseTypeField = "shield_information_barrier";
export declare function deserializeShieldInformationBarrierBaseTypeField(val: Json): ShieldInformationBarrierBaseTypeField;
export declare function serializeShieldInformationBarrierBaseTypeField(val: ShieldInformationBarrierBaseTypeField): Json;
export interface ShieldInformationBarrierBase {
    readonly id?: string;
    readonly type?: ShieldInformationBarrierBaseTypeField;
}
export declare function deserializeShieldInformationBarrierBase(val: Json): ShieldInformationBarrierBase;
export declare function serializeShieldInformationBarrierBase(val: ShieldInformationBarrierBase): Json;
export interface ShieldInformationBarrierReference {
    readonly shieldInformationBarrier?: ShieldInformationBarrierBase;
}
export declare function deserializeShieldInformationBarrierReference(val: Json): ShieldInformationBarrierReference;
export declare function serializeShieldInformationBarrierReference(val: ShieldInformationBarrierReference): Json;
export interface ShieldInformationBarrierReportShieldInformationBarrierField {
}
export declare function deserializeShieldInformationBarrierReportShieldInformationBarrierField(val: Json): ShieldInformationBarrierReportShieldInformationBarrierField;
export declare function serializeShieldInformationBarrierReportShieldInformationBarrierField(val: ShieldInformationBarrierReportShieldInformationBarrierField): Json;
export type ShieldInformationBarrierReportStatusField = "pending" | "error" | "done" | "cancelled";
export declare function deserializeShieldInformationBarrierReportStatusField(val: Json): ShieldInformationBarrierReportStatusField;
export declare function serializeShieldInformationBarrierReportStatusField(val: ShieldInformationBarrierReportStatusField): Json;
export interface ShieldInformationBarrierReportDetailsField {
}
export declare function deserializeShieldInformationBarrierReportDetailsField(val: Json): ShieldInformationBarrierReportDetailsField;
export declare function serializeShieldInformationBarrierReportDetailsField(val: ShieldInformationBarrierReportDetailsField): Json;
export type ShieldInformationBarrierReportBaseTypeField = "shield_information_barrier_report";
export declare function deserializeShieldInformationBarrierReportBaseTypeField(val: Json): ShieldInformationBarrierReportBaseTypeField;
export declare function serializeShieldInformationBarrierReportBaseTypeField(val: ShieldInformationBarrierReportBaseTypeField): Json;
export interface ShieldInformationBarrierReportBase {
    readonly id?: string;
    readonly type?: ShieldInformationBarrierReportBaseTypeField;
}
export declare function deserializeShieldInformationBarrierReportBase(val: Json): ShieldInformationBarrierReportBase;
export declare function serializeShieldInformationBarrierReportBase(val: ShieldInformationBarrierReportBase): Json;
export type ShieldInformationBarrierSegmentTypeField = "shield_information_barrier_segment";
export declare function deserializeShieldInformationBarrierSegmentTypeField(val: Json): ShieldInformationBarrierSegmentTypeField;
export declare function serializeShieldInformationBarrierSegmentTypeField(val: ShieldInformationBarrierSegmentTypeField): Json;
export type ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentFieldTypeField = "shield_information_barrier_segment";
export declare function deserializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentFieldTypeField(val: Json): ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentFieldTypeField;
export declare function serializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentFieldTypeField(val: ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentFieldTypeField): Json;
export interface ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField {
    readonly id?: string;
    readonly type?: ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentFieldTypeField;
}
export declare function deserializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField(val: Json): ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField;
export declare function serializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField(val: ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField): Json;
export type ShieldInformationBarrierSegmentMemberBaseTypeField = "shield_information_barrier_segment_member";
export declare function deserializeShieldInformationBarrierSegmentMemberBaseTypeField(val: Json): ShieldInformationBarrierSegmentMemberBaseTypeField;
export declare function serializeShieldInformationBarrierSegmentMemberBaseTypeField(val: ShieldInformationBarrierSegmentMemberBaseTypeField): Json;
export interface ShieldInformationBarrierSegmentMemberBase {
    readonly id?: string;
    readonly type?: ShieldInformationBarrierSegmentMemberBaseTypeField;
}
export declare function deserializeShieldInformationBarrierSegmentMemberBase(val: Json): ShieldInformationBarrierSegmentMemberBase;
export declare function serializeShieldInformationBarrierSegmentMemberBase(val: ShieldInformationBarrierSegmentMemberBase): Json;
export type ShieldInformationBarrierSegmentRestrictionBaseTypeField = "shield_information_barrier_segment_restriction";
export declare function deserializeShieldInformationBarrierSegmentRestrictionBaseTypeField(val: Json): ShieldInformationBarrierSegmentRestrictionBaseTypeField;
export declare function serializeShieldInformationBarrierSegmentRestrictionBaseTypeField(val: ShieldInformationBarrierSegmentRestrictionBaseTypeField): Json;
export interface ShieldInformationBarrierSegmentRestrictionBase {
    readonly type?: ShieldInformationBarrierSegmentRestrictionBaseTypeField;
    readonly id?: string;
}
export declare function deserializeShieldInformationBarrierSegmentRestrictionBase(val: Json): ShieldInformationBarrierSegmentRestrictionBase;
export declare function serializeShieldInformationBarrierSegmentRestrictionBase(val: ShieldInformationBarrierSegmentRestrictionBase): Json;
export type ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentFieldTypeField = "shield_information_barrier_segment";
export declare function deserializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentFieldTypeField(val: Json): ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentFieldTypeField;
export declare function serializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentFieldTypeField(val: ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentFieldTypeField): Json;
export interface ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField {
    readonly id?: string;
    readonly type?: ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentFieldTypeField;
}
export declare function deserializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField(val: Json): ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField;
export declare function serializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField(val: ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField): Json;
export type ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentFieldTypeField = "shield_information_barrier_segment";
export declare function deserializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentFieldTypeField(val: Json): ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentFieldTypeField;
export declare function serializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentFieldTypeField(val: ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentFieldTypeField): Json;
export interface ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField {
    readonly id?: string;
    readonly type?: ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentFieldTypeField;
}
export declare function deserializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField(val: Json): ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField;
export declare function serializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField(val: ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField): Json;
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
export declare function deserializeShieldInformationBarrierSegmentRestrictionMini(val: Json): ShieldInformationBarrierSegmentRestrictionMini;
export declare function serializeShieldInformationBarrierSegmentRestrictionMini(val: ShieldInformationBarrierSegmentRestrictionMini): Json;
export interface SessionTerminationMessage {
    readonly message?: string;
}
export declare function deserializeSessionTerminationMessage(val: Json): SessionTerminationMessage;
export declare function serializeSessionTerminationMessage(val: SessionTerminationMessage): Json;
export type StoragePolicyMiniTypeField = "storage_policy";
export declare function deserializeStoragePolicyMiniTypeField(val: Json): StoragePolicyMiniTypeField;
export declare function serializeStoragePolicyMiniTypeField(val: StoragePolicyMiniTypeField): Json;
export interface StoragePolicyMini {
    readonly id?: string;
    readonly type?: StoragePolicyMiniTypeField;
}
export declare function deserializeStoragePolicyMini(val: Json): StoragePolicyMini;
export declare function serializeStoragePolicyMini(val: StoragePolicyMini): Json;
export type StoragePolicy = StoragePolicyMini & {
    /**
     * A descriptive name of the region */
    readonly name?: string;
};
export declare function deserializeStoragePolicy(val: Json): StoragePolicy;
export declare function serializeStoragePolicy(val: StoragePolicy): Json;
export interface StoragePolicies {
    readonly limit?: number;
    readonly nextMarker?: number;
    readonly prevMarker?: number;
    readonly entries?: readonly StoragePolicy[];
}
export declare function deserializeStoragePolicies(val: Json): StoragePolicies;
export declare function serializeStoragePolicies(val: StoragePolicies): Json;
export interface StoragePolicyAssignmentAssignedToField {
    readonly id?: string;
    readonly type?: string;
}
export declare function deserializeStoragePolicyAssignmentAssignedToField(val: Json): StoragePolicyAssignmentAssignedToField;
export declare function serializeStoragePolicyAssignmentAssignedToField(val: StoragePolicyAssignmentAssignedToField): Json;
export interface StoragePolicyAssignment {
    readonly storagePolicy?: StoragePolicyMini;
    readonly assignedTo?: StoragePolicyAssignmentAssignedToField;
}
export declare function deserializeStoragePolicyAssignment(val: Json): StoragePolicyAssignment;
export declare function serializeStoragePolicyAssignment(val: StoragePolicyAssignment): Json;
export interface StoragePolicyAssignments {
    readonly limit?: number;
    readonly nextMarker?: number;
    readonly prevMarker?: number;
    readonly entries?: readonly StoragePolicyAssignment[];
}
export declare function deserializeStoragePolicyAssignments(val: Json): StoragePolicyAssignments;
export declare function serializeStoragePolicyAssignments(val: StoragePolicyAssignments): Json;
export type TaskTypeField = "task";
export declare function deserializeTaskTypeField(val: Json): TaskTypeField;
export declare function serializeTaskTypeField(val: TaskTypeField): Json;
export type TaskActionField = "review" | "complete";
export declare function deserializeTaskActionField(val: Json): TaskActionField;
export declare function serializeTaskActionField(val: TaskActionField): Json;
export type TaskCompletionRuleField = "all_assignees" | "any_assignee";
export declare function deserializeTaskCompletionRuleField(val: Json): TaskCompletionRuleField;
export declare function serializeTaskCompletionRuleField(val: TaskCompletionRuleField): Json;
export type TaskAssignmentTypeField = "task_assignment";
export declare function deserializeTaskAssignmentTypeField(val: Json): TaskAssignmentTypeField;
export declare function serializeTaskAssignmentTypeField(val: TaskAssignmentTypeField): Json;
export type TaskAssignmentResolutionStateField = "completed" | "incomplete" | "approved" | "rejected";
export declare function deserializeTaskAssignmentResolutionStateField(val: Json): TaskAssignmentResolutionStateField;
export declare function serializeTaskAssignmentResolutionStateField(val: TaskAssignmentResolutionStateField): Json;
export type TermsOfServiceStatusField = "enabled" | "disabled";
export declare function deserializeTermsOfServiceStatusField(val: Json): TermsOfServiceStatusField;
export declare function serializeTermsOfServiceStatusField(val: TermsOfServiceStatusField): Json;
export type TermsOfServiceEnterpriseFieldTypeField = "enterprise";
export declare function deserializeTermsOfServiceEnterpriseFieldTypeField(val: Json): TermsOfServiceEnterpriseFieldTypeField;
export declare function serializeTermsOfServiceEnterpriseFieldTypeField(val: TermsOfServiceEnterpriseFieldTypeField): Json;
export interface TermsOfServiceEnterpriseField {
    readonly id?: string;
    readonly type?: TermsOfServiceEnterpriseFieldTypeField;
    readonly name?: string;
}
export declare function deserializeTermsOfServiceEnterpriseField(val: Json): TermsOfServiceEnterpriseField;
export declare function serializeTermsOfServiceEnterpriseField(val: TermsOfServiceEnterpriseField): Json;
export type TermsOfServiceTosTypeField = "managed" | "external";
export declare function deserializeTermsOfServiceTosTypeField(val: Json): TermsOfServiceTosTypeField;
export declare function serializeTermsOfServiceTosTypeField(val: TermsOfServiceTosTypeField): Json;
export type TermsOfServiceBaseTypeField = "terms_of_service";
export declare function deserializeTermsOfServiceBaseTypeField(val: Json): TermsOfServiceBaseTypeField;
export declare function serializeTermsOfServiceBaseTypeField(val: TermsOfServiceBaseTypeField): Json;
export interface TermsOfServiceBase {
    readonly id?: string;
    readonly type?: TermsOfServiceBaseTypeField;
}
export declare function deserializeTermsOfServiceBase(val: Json): TermsOfServiceBase;
export declare function serializeTermsOfServiceBase(val: TermsOfServiceBase): Json;
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
export declare function deserializeTermsOfService(val: Json): TermsOfService;
export declare function serializeTermsOfService(val: TermsOfService): Json;
export interface TermsOfServices {
    readonly totalCount?: number;
    readonly entries?: readonly TermsOfService[];
}
export declare function deserializeTermsOfServices(val: Json): TermsOfServices;
export declare function serializeTermsOfServices(val: TermsOfServices): Json;
export interface CollaborationAcceptanceRequirementsStatusFieldTermsOfServiceRequirementField {
    readonly isAccepted?: boolean;
    readonly termsOfService?: TermsOfServiceBase;
}
export declare function deserializeCollaborationAcceptanceRequirementsStatusFieldTermsOfServiceRequirementField(val: Json): CollaborationAcceptanceRequirementsStatusFieldTermsOfServiceRequirementField;
export declare function serializeCollaborationAcceptanceRequirementsStatusFieldTermsOfServiceRequirementField(val: CollaborationAcceptanceRequirementsStatusFieldTermsOfServiceRequirementField): Json;
export interface CollaborationAcceptanceRequirementsStatusField {
    readonly termsOfServiceRequirement?: CollaborationAcceptanceRequirementsStatusFieldTermsOfServiceRequirementField;
    readonly strongPasswordRequirement?: CollaborationAcceptanceRequirementsStatusFieldStrongPasswordRequirementField;
    readonly twoFactorAuthenticationRequirement?: CollaborationAcceptanceRequirementsStatusFieldTwoFactorAuthenticationRequirementField;
}
export declare function deserializeCollaborationAcceptanceRequirementsStatusField(val: Json): CollaborationAcceptanceRequirementsStatusField;
export declare function serializeCollaborationAcceptanceRequirementsStatusField(val: CollaborationAcceptanceRequirementsStatusField): Json;
export type TermsOfServiceUserStatusTypeField = "terms_of_service_user_status";
export declare function deserializeTermsOfServiceUserStatusTypeField(val: Json): TermsOfServiceUserStatusTypeField;
export declare function serializeTermsOfServiceUserStatusTypeField(val: TermsOfServiceUserStatusTypeField): Json;
export type SignTemplateAdditionalInfoFieldNonEditableField = "email_subject" | "email_message" | "name" | "days_valid" | "signers" | "source_files";
export declare function deserializeSignTemplateAdditionalInfoFieldNonEditableField(val: Json): SignTemplateAdditionalInfoFieldNonEditableField;
export declare function serializeSignTemplateAdditionalInfoFieldNonEditableField(val: SignTemplateAdditionalInfoFieldNonEditableField): Json;
export interface SignTemplateAdditionalInfoFieldRequiredField {
    readonly signers?: readonly (readonly ("email")[])[];
}
export declare function deserializeSignTemplateAdditionalInfoFieldRequiredField(val: Json): SignTemplateAdditionalInfoFieldRequiredField;
export declare function serializeSignTemplateAdditionalInfoFieldRequiredField(val: SignTemplateAdditionalInfoFieldRequiredField): Json;
export interface SignTemplateAdditionalInfoField {
    readonly nonEditable?: readonly SignTemplateAdditionalInfoFieldNonEditableField[];
    readonly required?: SignTemplateAdditionalInfoFieldRequiredField;
}
export declare function deserializeSignTemplateAdditionalInfoField(val: Json): SignTemplateAdditionalInfoField;
export declare function serializeSignTemplateAdditionalInfoField(val: SignTemplateAdditionalInfoField): Json;
export interface SignTemplateReadySignLinkField {
    readonly url?: string;
    readonly name?: string;
    readonly instructions?: string;
    readonly folderId?: string;
    readonly isNotificationDisabled?: boolean;
    readonly isActive?: boolean;
}
export declare function deserializeSignTemplateReadySignLinkField(val: Json): SignTemplateReadySignLinkField;
export declare function serializeSignTemplateReadySignLinkField(val: SignTemplateReadySignLinkField): Json;
export interface SignTemplateCustomBrandingField {
    readonly companyName?: string;
    readonly logoUri?: string;
    readonly brandingColor?: string;
    readonly emailFooterText?: string;
}
export declare function deserializeSignTemplateCustomBrandingField(val: Json): SignTemplateCustomBrandingField;
export declare function serializeSignTemplateCustomBrandingField(val: SignTemplateCustomBrandingField): Json;
export interface SignTemplates {
    readonly limit?: number;
    readonly nextMarker?: string;
    readonly prevMarker?: string;
}
export declare function deserializeSignTemplates(val: Json): SignTemplates;
export declare function serializeSignTemplates(val: SignTemplates): Json;
export type TemplateSignerRoleField = "signer" | "approver" | "final_copy_reader";
export declare function deserializeTemplateSignerRoleField(val: Json): TemplateSignerRoleField;
export declare function serializeTemplateSignerRoleField(val: TemplateSignerRoleField): Json;
export type TemplateSignerInputTypeField = "signature" | "date" | "text" | "checkbox" | "radio" | "dropdown";
export declare function deserializeTemplateSignerInputTypeField(val: Json): TemplateSignerInputTypeField;
export declare function serializeTemplateSignerInputTypeField(val: TemplateSignerInputTypeField): Json;
export type TemplateSignerInputContentTypeField = "signature" | "initial" | "stamp" | "date" | "checkbox" | "text" | "full_name" | "first_name" | "last_name" | "company" | "title" | "email" | "attachment" | "radio" | "dropdown";
export declare function deserializeTemplateSignerInputContentTypeField(val: Json): TemplateSignerInputContentTypeField;
export declare function serializeTemplateSignerInputContentTypeField(val: TemplateSignerInputContentTypeField): Json;
export interface TemplateSignerInputCoordinatesField {
    readonly x?: number;
    readonly y?: number;
}
export declare function deserializeTemplateSignerInputCoordinatesField(val: Json): TemplateSignerInputCoordinatesField;
export declare function serializeTemplateSignerInputCoordinatesField(val: TemplateSignerInputCoordinatesField): Json;
export interface TemplateSignerInputDimensionsField {
    readonly width?: number;
    readonly height?: number;
}
export declare function deserializeTemplateSignerInputDimensionsField(val: Json): TemplateSignerInputDimensionsField;
export declare function serializeTemplateSignerInputDimensionsField(val: TemplateSignerInputDimensionsField): Json;
export type TrashFileTypeField = "file";
export declare function deserializeTrashFileTypeField(val: Json): TrashFileTypeField;
export declare function serializeTrashFileTypeField(val: TrashFileTypeField): Json;
export type TrashFilePathCollectionFieldEntriesFieldTypeField = "folder";
export declare function deserializeTrashFilePathCollectionFieldEntriesFieldTypeField(val: Json): TrashFilePathCollectionFieldEntriesFieldTypeField;
export declare function serializeTrashFilePathCollectionFieldEntriesFieldTypeField(val: TrashFilePathCollectionFieldEntriesFieldTypeField): Json;
export interface TrashFilePathCollectionFieldEntriesField {
    readonly type?: TrashFilePathCollectionFieldEntriesFieldTypeField;
    readonly id?: string;
    readonly sequenceId?: string;
    readonly etag?: string;
    readonly name?: string;
}
export declare function deserializeTrashFilePathCollectionFieldEntriesField(val: Json): TrashFilePathCollectionFieldEntriesField;
export declare function serializeTrashFilePathCollectionFieldEntriesField(val: TrashFilePathCollectionFieldEntriesField): Json;
export interface TrashFilePathCollectionField {
    readonly totalCount: number;
    readonly entries: readonly TrashFilePathCollectionFieldEntriesField[];
}
export declare function deserializeTrashFilePathCollectionField(val: Json): TrashFilePathCollectionField;
export declare function serializeTrashFilePathCollectionField(val: TrashFilePathCollectionField): Json;
export type TrashFileItemStatusField = "active" | "trashed" | "deleted";
export declare function deserializeTrashFileItemStatusField(val: Json): TrashFileItemStatusField;
export declare function serializeTrashFileItemStatusField(val: TrashFileItemStatusField): Json;
export type TrashFolderTypeField = "folder";
export declare function deserializeTrashFolderTypeField(val: Json): TrashFolderTypeField;
export declare function serializeTrashFolderTypeField(val: TrashFolderTypeField): Json;
export type TrashFolderPathCollectionFieldEntriesFieldTypeField = "folder";
export declare function deserializeTrashFolderPathCollectionFieldEntriesFieldTypeField(val: Json): TrashFolderPathCollectionFieldEntriesFieldTypeField;
export declare function serializeTrashFolderPathCollectionFieldEntriesFieldTypeField(val: TrashFolderPathCollectionFieldEntriesFieldTypeField): Json;
export interface TrashFolderPathCollectionFieldEntriesField {
    readonly type?: TrashFolderPathCollectionFieldEntriesFieldTypeField;
    readonly id?: string;
    readonly sequenceId?: string;
    readonly etag?: string;
    readonly name?: string;
}
export declare function deserializeTrashFolderPathCollectionFieldEntriesField(val: Json): TrashFolderPathCollectionFieldEntriesField;
export declare function serializeTrashFolderPathCollectionFieldEntriesField(val: TrashFolderPathCollectionFieldEntriesField): Json;
export interface TrashFolderPathCollectionField {
    readonly totalCount: number;
    readonly entries: readonly TrashFolderPathCollectionFieldEntriesField[];
}
export declare function deserializeTrashFolderPathCollectionField(val: Json): TrashFolderPathCollectionField;
export declare function serializeTrashFolderPathCollectionField(val: TrashFolderPathCollectionField): Json;
export type TrashFolderItemStatusField = "active" | "trashed" | "deleted";
export declare function deserializeTrashFolderItemStatusField(val: Json): TrashFolderItemStatusField;
export declare function serializeTrashFolderItemStatusField(val: TrashFolderItemStatusField): Json;
export type TrashWebLinkTypeField = "web_link";
export declare function deserializeTrashWebLinkTypeField(val: Json): TrashWebLinkTypeField;
export declare function serializeTrashWebLinkTypeField(val: TrashWebLinkTypeField): Json;
export type TrashWebLinkPathCollectionFieldEntriesFieldTypeField = "folder";
export declare function deserializeTrashWebLinkPathCollectionFieldEntriesFieldTypeField(val: Json): TrashWebLinkPathCollectionFieldEntriesFieldTypeField;
export declare function serializeTrashWebLinkPathCollectionFieldEntriesFieldTypeField(val: TrashWebLinkPathCollectionFieldEntriesFieldTypeField): Json;
export interface TrashWebLinkPathCollectionFieldEntriesField {
    readonly type?: TrashWebLinkPathCollectionFieldEntriesFieldTypeField;
    readonly id?: string;
    readonly sequenceId?: string;
    readonly etag?: string;
    readonly name?: string;
}
export declare function deserializeTrashWebLinkPathCollectionFieldEntriesField(val: Json): TrashWebLinkPathCollectionFieldEntriesField;
export declare function serializeTrashWebLinkPathCollectionFieldEntriesField(val: TrashWebLinkPathCollectionFieldEntriesField): Json;
export interface TrashWebLinkPathCollectionField {
    readonly totalCount: number;
    readonly entries: readonly TrashWebLinkPathCollectionFieldEntriesField[];
}
export declare function deserializeTrashWebLinkPathCollectionField(val: Json): TrashWebLinkPathCollectionField;
export declare function serializeTrashWebLinkPathCollectionField(val: TrashWebLinkPathCollectionField): Json;
export type TrashWebLinkItemStatusField = "active" | "trashed" | "deleted";
export declare function deserializeTrashWebLinkItemStatusField(val: Json): TrashWebLinkItemStatusField;
export declare function serializeTrashWebLinkItemStatusField(val: TrashWebLinkItemStatusField): Json;
export type TrashFileRestoredTypeField = "file";
export declare function deserializeTrashFileRestoredTypeField(val: Json): TrashFileRestoredTypeField;
export declare function serializeTrashFileRestoredTypeField(val: TrashFileRestoredTypeField): Json;
export type TrashFileRestoredItemStatusField = "active" | "trashed" | "deleted";
export declare function deserializeTrashFileRestoredItemStatusField(val: Json): TrashFileRestoredItemStatusField;
export declare function serializeTrashFileRestoredItemStatusField(val: TrashFileRestoredItemStatusField): Json;
export type TrashFolderRestoredTypeField = "folder";
export declare function deserializeTrashFolderRestoredTypeField(val: Json): TrashFolderRestoredTypeField;
export declare function serializeTrashFolderRestoredTypeField(val: TrashFolderRestoredTypeField): Json;
export type TrashFolderRestoredItemStatusField = "active" | "trashed" | "deleted";
export declare function deserializeTrashFolderRestoredItemStatusField(val: Json): TrashFolderRestoredItemStatusField;
export declare function serializeTrashFolderRestoredItemStatusField(val: TrashFolderRestoredItemStatusField): Json;
export type TrashWebLinkRestoredTypeField = "web_link";
export declare function deserializeTrashWebLinkRestoredTypeField(val: Json): TrashWebLinkRestoredTypeField;
export declare function serializeTrashWebLinkRestoredTypeField(val: TrashWebLinkRestoredTypeField): Json;
export type TrashWebLinkRestoredItemStatusField = "active" | "trashed" | "deleted";
export declare function deserializeTrashWebLinkRestoredItemStatusField(val: Json): TrashWebLinkRestoredItemStatusField;
export declare function serializeTrashWebLinkRestoredItemStatusField(val: TrashWebLinkRestoredItemStatusField): Json;
export interface UploadPartMini {
    readonly partId?: string;
    readonly offset?: number;
    readonly size?: number;
}
export declare function deserializeUploadPartMini(val: Json): UploadPartMini;
export declare function serializeUploadPartMini(val: UploadPartMini): Json;
export type UploadPart = UploadPartMini & {
    /**
     * The SHA1 hash of the chunk. */
    readonly sha1?: string;
};
export declare function deserializeUploadPart(val: Json): UploadPart;
export declare function serializeUploadPart(val: UploadPart): Json;
export interface UploadedPart {
    readonly part?: UploadPart;
}
export declare function deserializeUploadedPart(val: Json): UploadedPart;
export declare function serializeUploadedPart(val: UploadedPart): Json;
export type UploadPartsOrderFieldDirectionField = "ASC" | "DESC";
export declare function deserializeUploadPartsOrderFieldDirectionField(val: Json): UploadPartsOrderFieldDirectionField;
export declare function serializeUploadPartsOrderFieldDirectionField(val: UploadPartsOrderFieldDirectionField): Json;
export interface UploadPartsOrderField {
    readonly by?: string;
    readonly direction?: UploadPartsOrderFieldDirectionField;
}
export declare function deserializeUploadPartsOrderField(val: Json): UploadPartsOrderField;
export declare function serializeUploadPartsOrderField(val: UploadPartsOrderField): Json;
export interface UploadParts {
    readonly totalCount?: number;
    readonly limit?: number;
    readonly offset?: number;
    readonly order?: readonly UploadPartsOrderField[];
    readonly entries?: readonly UploadPart[];
}
export declare function deserializeUploadParts(val: Json): UploadParts;
export declare function serializeUploadParts(val: UploadParts): Json;
export type UploadSessionTypeField = "upload_session";
export declare function deserializeUploadSessionTypeField(val: Json): UploadSessionTypeField;
export declare function serializeUploadSessionTypeField(val: UploadSessionTypeField): Json;
export interface UploadSessionSessionEndpointsField {
    readonly uploadPart?: string;
    readonly commit?: string;
    readonly abort?: string;
    readonly listParts?: string;
    readonly status?: string;
    readonly logEvent?: string;
}
export declare function deserializeUploadSessionSessionEndpointsField(val: Json): UploadSessionSessionEndpointsField;
export declare function serializeUploadSessionSessionEndpointsField(val: UploadSessionSessionEndpointsField): Json;
export interface UploadSession {
    readonly id?: string;
    readonly type?: UploadSessionTypeField;
    readonly sessionExpiresAt?: string;
    readonly partSize?: number;
    readonly totalParts?: number;
    readonly numPartsProcessed?: number;
    readonly sessionEndpoints?: UploadSessionSessionEndpointsField;
}
export declare function deserializeUploadSession(val: Json): UploadSession;
export declare function serializeUploadSession(val: UploadSession): Json;
export interface UploadUrl {
    readonly uploadUrl?: string;
    readonly uploadToken?: string;
}
export declare function deserializeUploadUrl(val: Json): UploadUrl;
export declare function serializeUploadUrl(val: UploadUrl): Json;
export type UserStatusField = "active" | "inactive" | "cannot_delete_edit" | "cannot_delete_edit_upload";
export declare function deserializeUserStatusField(val: Json): UserStatusField;
export declare function serializeUserStatusField(val: UserStatusField): Json;
export interface UserNotificationEmailField {
    readonly email?: string;
    readonly isConfirmed?: boolean;
}
export declare function deserializeUserNotificationEmailField(val: Json): UserNotificationEmailField;
export declare function serializeUserNotificationEmailField(val: UserNotificationEmailField): Json;
export interface UserAvatarPicUrlsField {
    readonly small?: string;
    readonly large?: string;
    readonly preview?: string;
}
export declare function deserializeUserAvatarPicUrlsField(val: Json): UserAvatarPicUrlsField;
export declare function serializeUserAvatarPicUrlsField(val: UserAvatarPicUrlsField): Json;
export interface UserAvatar {
    readonly picUrls?: UserAvatarPicUrlsField;
}
export declare function deserializeUserAvatar(val: Json): UserAvatar;
export declare function serializeUserAvatar(val: UserAvatar): Json;
export type UsersOrderFieldDirectionField = "ASC" | "DESC";
export declare function deserializeUsersOrderFieldDirectionField(val: Json): UsersOrderFieldDirectionField;
export declare function serializeUsersOrderFieldDirectionField(val: UsersOrderFieldDirectionField): Json;
export interface UsersOrderField {
    readonly by?: string;
    readonly direction?: UsersOrderFieldDirectionField;
}
export declare function deserializeUsersOrderField(val: Json): UsersOrderField;
export declare function serializeUsersOrderField(val: UsersOrderField): Json;
export type UserFullRoleField = "admin" | "coadmin" | "user";
export declare function deserializeUserFullRoleField(val: Json): UserFullRoleField;
export declare function serializeUserFullRoleField(val: UserFullRoleField): Json;
export type UserFullEnterpriseFieldTypeField = "enterprise";
export declare function deserializeUserFullEnterpriseFieldTypeField(val: Json): UserFullEnterpriseFieldTypeField;
export declare function serializeUserFullEnterpriseFieldTypeField(val: UserFullEnterpriseFieldTypeField): Json;
export interface UserFullEnterpriseField {
    readonly id?: string;
    readonly type?: UserFullEnterpriseFieldTypeField;
    readonly name?: string;
}
export declare function deserializeUserFullEnterpriseField(val: Json): UserFullEnterpriseField;
export declare function serializeUserFullEnterpriseField(val: UserFullEnterpriseField): Json;
export type UserBaseTypeField = "user";
export declare function deserializeUserBaseTypeField(val: Json): UserBaseTypeField;
export declare function serializeUserBaseTypeField(val: UserBaseTypeField): Json;
export interface UserBase {
    readonly id?: string;
    readonly type: UserBaseTypeField;
}
export declare function deserializeUserBase(val: Json): UserBase;
export declare function serializeUserBase(val: UserBase): Json;
export type UserIntegrationMappings = UserBase & {
    /**
     * The display name of this user */
    readonly name?: string;
    /**
     * The primary email address of this user */
    readonly login?: string;
};
export declare function deserializeUserIntegrationMappings(val: Json): UserIntegrationMappings;
export declare function serializeUserIntegrationMappings(val: UserIntegrationMappings): Json;
export type UserCollaborations = UserBase & {
    /**
     * The display name of this user. If the collaboration status is `pending`, an empty string is returned. */
    readonly name?: string;
    /**
     * The primary email address of this user. If the collaboration status is `pending`, an empty string is returned. */
    readonly login?: string;
};
export declare function deserializeUserCollaborations(val: Json): UserCollaborations;
export declare function serializeUserCollaborations(val: UserCollaborations): Json;
export type UserMini = UserBase & {
    /**
     * The display name of this user */
    readonly name?: string;
    /**
     * The primary email address of this user */
    readonly login?: string;
};
export declare function deserializeUserMini(val: Json): UserMini;
export declare function serializeUserMini(val: UserMini): Json;
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
export declare function deserializeUser(val: Json): User;
export declare function serializeUser(val: User): Json;
export interface Users {
    readonly totalCount?: number;
    readonly limit?: number;
    readonly offset?: number;
    readonly order?: readonly UsersOrderField[];
    readonly entries?: readonly User[];
}
export declare function deserializeUsers(val: Json): Users;
export declare function serializeUsers(val: Users): Json;
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
export declare function deserializeTrashWebLinkRestored(val: Json): TrashWebLinkRestored;
export declare function serializeTrashWebLinkRestored(val: TrashWebLinkRestored): Json;
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
export declare function deserializeTrashFolderRestored(val: Json): TrashFolderRestored;
export declare function serializeTrashFolderRestored(val: TrashFolderRestored): Json;
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
export declare function deserializeTrashFileRestored(val: Json): TrashFileRestored;
export declare function serializeTrashFileRestored(val: TrashFileRestored): Json;
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
export declare function deserializeTrashWebLink(val: Json): TrashWebLink;
export declare function serializeTrashWebLink(val: TrashWebLink): Json;
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
export declare function deserializeTrashFolder(val: Json): TrashFolder;
export declare function serializeTrashFolder(val: TrashFolder): Json;
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
export declare function deserializeTrashFile(val: Json): TrashFile;
export declare function serializeTrashFile(val: TrashFile): Json;
export interface TermsOfServiceUserStatus {
    readonly id?: string;
    readonly type?: TermsOfServiceUserStatusTypeField;
    readonly tos?: TermsOfServiceBase;
    readonly user?: UserMini;
    readonly isAccepted?: boolean;
    readonly createdAt?: string;
    readonly modifiedAt?: string;
}
export declare function deserializeTermsOfServiceUserStatus(val: Json): TermsOfServiceUserStatus;
export declare function serializeTermsOfServiceUserStatus(val: TermsOfServiceUserStatus): Json;
export interface TermsOfServiceUserStatuses {
    readonly totalCount?: number;
    readonly entries?: readonly TermsOfServiceUserStatus[];
}
export declare function deserializeTermsOfServiceUserStatuses(val: Json): TermsOfServiceUserStatuses;
export declare function serializeTermsOfServiceUserStatuses(val: TermsOfServiceUserStatuses): Json;
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
export declare function deserializeTaskAssignment(val: Json): TaskAssignment;
export declare function serializeTaskAssignment(val: TaskAssignment): Json;
export interface TaskAssignments {
    readonly totalCount?: number;
    readonly entries?: readonly TaskAssignment[];
}
export declare function deserializeTaskAssignments(val: Json): TaskAssignments;
export declare function serializeTaskAssignments(val: TaskAssignments): Json;
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
export declare function deserializeTask(val: Json): Task;
export declare function serializeTask(val: Task): Json;
export interface Tasks {
    readonly totalCount?: number;
    readonly entries?: readonly Task[];
}
export declare function deserializeTasks(val: Json): Tasks;
export declare function serializeTasks(val: Tasks): Json;
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
export declare function deserializeRetentionPolicyAssignment(val: Json): RetentionPolicyAssignment;
export declare function serializeRetentionPolicyAssignment(val: RetentionPolicyAssignment): Json;
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
export declare function deserializeRetentionPolicy(val: Json): RetentionPolicy;
export declare function serializeRetentionPolicy(val: RetentionPolicy): Json;
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
export declare function deserializeLegalHoldPolicy(val: Json): LegalHoldPolicy;
export declare function serializeLegalHoldPolicy(val: LegalHoldPolicy): Json;
export interface LegalHoldPolicies {
    readonly limit?: number;
    readonly nextMarker?: number;
    readonly prevMarker?: number;
    readonly entries?: readonly LegalHoldPolicy[];
}
export declare function deserializeLegalHoldPolicies(val: Json): LegalHoldPolicies;
export declare function serializeLegalHoldPolicies(val: LegalHoldPolicies): Json;
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
export declare function deserializeInvite(val: Json): Invite;
export declare function serializeInvite(val: Invite): Json;
export interface GroupMembership {
    readonly id?: string;
    readonly type?: GroupMembershipTypeField;
    readonly user?: UserMini;
    readonly group?: GroupMini;
    readonly role?: GroupMembershipRoleField;
    readonly createdAt?: string;
    readonly modifiedAt?: string;
}
export declare function deserializeGroupMembership(val: Json): GroupMembership;
export declare function serializeGroupMembership(val: GroupMembership): Json;
export interface GroupMemberships {
    readonly totalCount?: number;
    readonly limit?: number;
    readonly offset?: number;
    readonly order?: readonly GroupMembershipsOrderField[];
    readonly entries?: readonly GroupMembership[];
}
export declare function deserializeGroupMemberships(val: Json): GroupMemberships;
export declare function serializeGroupMemberships(val: GroupMemberships): Json;
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
export declare function deserializeFileVersion(val: Json): FileVersion;
export declare function serializeFileVersion(val: FileVersion): Json;
export interface FileVersions {
    readonly totalCount?: number;
    readonly limit?: number;
    readonly offset?: number;
    readonly order?: readonly FileVersionsOrderField[];
    readonly entries?: readonly FileVersion[];
}
export declare function deserializeFileVersions(val: Json): FileVersions;
export declare function serializeFileVersions(val: FileVersions): Json;
export type FileVersionFull = FileVersion & {
    /**
     * The version number of this file version */
    readonly versionNumber?: string;
};
export declare function deserializeFileVersionFull(val: Json): FileVersionFull;
export declare function serializeFileVersionFull(val: FileVersionFull): Json;
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
export declare function deserializeFileRequest(val: Json): FileRequest;
export declare function serializeFileRequest(val: FileRequest): Json;
export interface FileFullLockField {
    readonly id?: string;
    readonly type?: FileFullLockFieldTypeField;
    readonly createdBy?: UserMini;
    readonly createdAt?: string;
    readonly expiredAt?: string;
    readonly isDownloadPrevented?: boolean;
    readonly appType?: FileFullLockFieldAppTypeField;
}
export declare function deserializeFileFullLockField(val: Json): FileFullLockField;
export declare function serializeFileFullLockField(val: FileFullLockField): Json;
export type File = FileMini & {
    /**
     * The optional description of this file */
    readonly description?: string;
    /**
     * The file size in bytes. Be careful parsing this integer as it can
     * get very large and cause an integer overflow. */
    readonly size?: number;
    readonly pathCollection?: FilePathCollectionField;
    /**
     * The date and time when the file was created on Box. */
    readonly createdAt?: string;
    /**
     * The date and time when the file was last updated on Box. */
    readonly modifiedAt?: string;
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
    readonly modifiedBy?: UserMini;
    readonly ownedBy?: UserMini;
    readonly sharedLink?: FileSharedLinkField;
    readonly parent?: FolderMini;
    /**
     * Defines if this item has been deleted or not.
     *
     * * `active` when the item has is not in the trash
     * * `trashed` when the item has been moved to the trash but not deleted
     * * `deleted` when the item has been permanently deleted. */
    readonly itemStatus?: FileItemStatusField;
};
export declare function deserializeFile(val: Json): File;
export declare function serializeFile(val: File): Json;
export interface Files {
    readonly totalCount?: number;
    readonly entries?: readonly File[];
}
export declare function deserializeFiles(val: Json): Files;
export declare function serializeFiles(val: Files): Json;
export interface DevicePinner {
    readonly id?: string;
    readonly type?: DevicePinnerTypeField;
    readonly ownedBy?: UserMini;
    readonly productName?: string;
}
export declare function deserializeDevicePinner(val: Json): DevicePinner;
export declare function serializeDevicePinner(val: DevicePinner): Json;
export interface DevicePinners {
    readonly entries?: readonly DevicePinner[];
    readonly limit?: number;
    readonly nextMarker?: number;
    readonly order?: readonly DevicePinnersOrderField[];
}
export declare function deserializeDevicePinners(val: Json): DevicePinners;
export declare function serializeDevicePinners(val: DevicePinners): Json;
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
export declare function deserializeComment(val: Json): Comment;
export declare function serializeComment(val: Comment): Json;
export type CommentFull = Comment & {
    /**
     * The string representing the comment text with
     * @mentions included. @mention format is @[id:username]
     * where `id` is user's Box ID and `username` is
     * their display name. */
    readonly taggedMessage?: string;
};
export declare function deserializeCommentFull(val: Json): CommentFull;
export declare function serializeCommentFull(val: CommentFull): Json;
export interface Comments {
    readonly totalCount?: number;
    readonly limit?: number;
    readonly offset?: number;
    readonly order?: readonly CommentsOrderField[];
    readonly entries?: readonly Comment[];
}
export declare function deserializeComments(val: Json): Comments;
export declare function serializeComments(val: Comments): Json;
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
export declare function deserializeShieldInformationBarrierSegmentRestriction(val: Json): ShieldInformationBarrierSegmentRestriction;
export declare function serializeShieldInformationBarrierSegmentRestriction(val: ShieldInformationBarrierSegmentRestriction): Json;
export type ShieldInformationBarrierSegmentMemberMini = ShieldInformationBarrierSegmentMemberBase & {
    readonly user?: UserBase;
};
export declare function deserializeShieldInformationBarrierSegmentMemberMini(val: Json): ShieldInformationBarrierSegmentMemberMini;
export declare function serializeShieldInformationBarrierSegmentMemberMini(val: ShieldInformationBarrierSegmentMemberMini): Json;
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
export declare function deserializeShieldInformationBarrierSegmentMember(val: Json): ShieldInformationBarrierSegmentMember;
export declare function serializeShieldInformationBarrierSegmentMember(val: ShieldInformationBarrierSegmentMember): Json;
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
export declare function deserializeShieldInformationBarrierSegment(val: Json): ShieldInformationBarrierSegment;
export declare function serializeShieldInformationBarrierSegment(val: ShieldInformationBarrierSegment): Json;
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
export declare function deserializeShieldInformationBarrierReport(val: Json): ShieldInformationBarrierReport;
export declare function serializeShieldInformationBarrierReport(val: ShieldInformationBarrierReport): Json;
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
export declare function deserializeShieldInformationBarrier(val: Json): ShieldInformationBarrier;
export declare function serializeShieldInformationBarrier(val: ShieldInformationBarrier): Json;
export interface FolderLock {
    readonly folder?: FolderMini;
    readonly id?: string;
    readonly type?: string;
    readonly createdBy?: UserBase;
    readonly createdAt?: string;
    readonly lockedOperations?: FolderLockLockedOperationsField;
    readonly lockType?: string;
}
export declare function deserializeFolderLock(val: Json): FolderLock;
export declare function serializeFolderLock(val: FolderLock): Json;
export interface FolderLocks {
    readonly limit?: number;
    readonly nextMarker?: number;
    readonly prevMarker?: number;
    readonly entries?: readonly FolderLock[];
}
export declare function deserializeFolderLocks(val: Json): FolderLocks;
export declare function serializeFolderLocks(val: FolderLocks): Json;
export interface WatermarkWatermarkField {
    readonly createdAt?: string;
    readonly modifiedAt?: string;
}
export declare function deserializeWatermarkWatermarkField(val: Json): WatermarkWatermarkField;
export declare function serializeWatermarkWatermarkField(val: WatermarkWatermarkField): Json;
export interface Watermark {
    readonly watermark?: WatermarkWatermarkField;
}
export declare function deserializeWatermark(val: Json): Watermark;
export declare function serializeWatermark(val: Watermark): Json;
export type WebhookTriggersField = "FILE.UPLOADED" | "FILE.PREVIEWED" | "FILE.DOWNLOADED" | "FILE.TRASHED" | "FILE.DELETED" | "FILE.RESTORED" | "FILE.COPIED" | "FILE.MOVED" | "FILE.LOCKED" | "FILE.UNLOCKED" | "FILE.RENAMED" | "COMMENT.CREATED" | "COMMENT.UPDATED" | "COMMENT.DELETED" | "TASK_ASSIGNMENT.CREATED" | "TASK_ASSIGNMENT.UPDATED" | "METADATA_INSTANCE.CREATED" | "METADATA_INSTANCE.UPDATED" | "METADATA_INSTANCE.DELETED" | "FOLDER.CREATED" | "FOLDER.RENAMED" | "FOLDER.DOWNLOADED" | "FOLDER.RESTORED" | "FOLDER.DELETED" | "FOLDER.COPIED" | "FOLDER.MOVED" | "FOLDER.TRASHED" | "WEBHOOK.DELETED" | "COLLABORATION.CREATED" | "COLLABORATION.ACCEPTED" | "COLLABORATION.REJECTED" | "COLLABORATION.REMOVED" | "COLLABORATION.UPDATED" | "SHARED_LINK.DELETED" | "SHARED_LINK.CREATED" | "SHARED_LINK.UPDATED" | "SIGN_REQUEST.COMPLETED" | "SIGN_REQUEST.DECLINED" | "SIGN_REQUEST.EXPIRED" | "SIGN_REQUEST.SIGNER_EMAIL_BOUNCED";
export declare function deserializeWebhookTriggersField(val: Json): WebhookTriggersField;
export declare function serializeWebhookTriggersField(val: WebhookTriggersField): Json;
export type WebhookMiniTypeField = "webhook";
export declare function deserializeWebhookMiniTypeField(val: Json): WebhookMiniTypeField;
export declare function serializeWebhookMiniTypeField(val: WebhookMiniTypeField): Json;
export type WebhookMiniTargetFieldTypeField = "file" | "folder";
export declare function deserializeWebhookMiniTargetFieldTypeField(val: Json): WebhookMiniTargetFieldTypeField;
export declare function serializeWebhookMiniTargetFieldTypeField(val: WebhookMiniTargetFieldTypeField): Json;
export interface WebhookMiniTargetField {
    readonly id?: string;
    readonly type?: WebhookMiniTargetFieldTypeField;
}
export declare function deserializeWebhookMiniTargetField(val: Json): WebhookMiniTargetField;
export declare function serializeWebhookMiniTargetField(val: WebhookMiniTargetField): Json;
export interface WebhookMini {
    readonly id?: string;
    readonly type?: WebhookMiniTypeField;
    readonly target?: WebhookMiniTargetField;
}
export declare function deserializeWebhookMini(val: Json): WebhookMini;
export declare function serializeWebhookMini(val: WebhookMini): Json;
export interface Webhooks {
    readonly limit?: number;
    readonly nextMarker?: number;
    readonly prevMarker?: number;
    readonly entries?: readonly WebhookMini[];
}
export declare function deserializeWebhooks(val: Json): Webhooks;
export declare function serializeWebhooks(val: Webhooks): Json;
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
export declare function deserializeWebhook(val: Json): Webhook;
export declare function serializeWebhook(val: Webhook): Json;
export type WebLinkSharedLinkFieldAccessField = "open" | "company" | "collaborators";
export declare function deserializeWebLinkSharedLinkFieldAccessField(val: Json): WebLinkSharedLinkFieldAccessField;
export declare function serializeWebLinkSharedLinkFieldAccessField(val: WebLinkSharedLinkFieldAccessField): Json;
export type WebLinkSharedLinkFieldEffectiveAccessField = "open" | "company" | "collaborators";
export declare function deserializeWebLinkSharedLinkFieldEffectiveAccessField(val: Json): WebLinkSharedLinkFieldEffectiveAccessField;
export declare function serializeWebLinkSharedLinkFieldEffectiveAccessField(val: WebLinkSharedLinkFieldEffectiveAccessField): Json;
export type WebLinkSharedLinkFieldEffectivePermissionField = "can_edit" | "can_download" | "can_preview" | "no_access";
export declare function deserializeWebLinkSharedLinkFieldEffectivePermissionField(val: Json): WebLinkSharedLinkFieldEffectivePermissionField;
export declare function serializeWebLinkSharedLinkFieldEffectivePermissionField(val: WebLinkSharedLinkFieldEffectivePermissionField): Json;
export interface WebLinkSharedLinkFieldPermissionsField {
    readonly canDownload: boolean;
    readonly canPreview: boolean;
    readonly canEdit: boolean;
}
export declare function deserializeWebLinkSharedLinkFieldPermissionsField(val: Json): WebLinkSharedLinkFieldPermissionsField;
export declare function serializeWebLinkSharedLinkFieldPermissionsField(val: WebLinkSharedLinkFieldPermissionsField): Json;
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
export declare function deserializeWebLinkSharedLinkField(val: Json): WebLinkSharedLinkField;
export declare function serializeWebLinkSharedLinkField(val: WebLinkSharedLinkField): Json;
export type WebLinkItemStatusField = "active" | "trashed" | "deleted";
export declare function deserializeWebLinkItemStatusField(val: Json): WebLinkItemStatusField;
export declare function serializeWebLinkItemStatusField(val: WebLinkItemStatusField): Json;
export type WebLinkBaseTypeField = "web_link";
export declare function deserializeWebLinkBaseTypeField(val: Json): WebLinkBaseTypeField;
export declare function serializeWebLinkBaseTypeField(val: WebLinkBaseTypeField): Json;
export interface WebLinkBase {
    readonly id: string;
    readonly type: WebLinkBaseTypeField;
    readonly etag?: string;
}
export declare function deserializeWebLinkBase(val: Json): WebLinkBase;
export declare function serializeWebLinkBase(val: WebLinkBase): Json;
export type WebLinkMini = WebLinkBase & {
    /**
     * The URL this web link points to */
    readonly url?: string;
    readonly sequenceId?: string;
    /**
     * The name of the web link */
    readonly name?: string;
};
export declare function deserializeWebLinkMini(val: Json): WebLinkMini;
export declare function serializeWebLinkMini(val: WebLinkMini): Json;
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
export declare function deserializeWebLink(val: Json): WebLink;
export declare function serializeWebLink(val: WebLink): Json;
export type ItemsEntriesField = FileMini | FolderMini | WebLinkMini;
export declare function deserializeItemsEntriesField(val: Json): ItemsEntriesField;
export declare function serializeItemsEntriesField(val: ItemsEntriesField): Json;
export interface Items {
    readonly totalCount?: number;
    readonly limit?: number;
    readonly offset?: number;
    readonly order?: readonly ItemsOrderField[];
    readonly entries?: readonly ItemsEntriesField[];
}
export declare function deserializeItems(val: Json): Items;
export declare function serializeItems(val: Items): Json;
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
    readonly size?: number;
    readonly pathCollection?: FolderPathCollectionField;
    readonly createdBy?: UserMini;
    readonly modifiedBy?: UserMini;
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
    readonly ownedBy?: UserMini;
    readonly sharedLink?: FolderSharedLinkField;
    readonly folderUploadEmail?: FolderFolderUploadEmailField;
    readonly parent?: FolderMini;
    /**
     * Defines if this item has been deleted or not.
     *
     * * `active` when the item has is not in the trash
     * * `trashed` when the item has been moved to the trash but not deleted
     * * `deleted` when the item has been permanently deleted. */
    readonly itemStatus?: FolderItemStatusField;
    readonly itemCollection?: Items;
};
export declare function deserializeFolder(val: Json): Folder;
export declare function serializeFolder(val: Folder): Json;
export type SearchResultWithSharedLinkItemField = File | Folder | WebLink;
export declare function deserializeSearchResultWithSharedLinkItemField(val: Json): SearchResultWithSharedLinkItemField;
export declare function serializeSearchResultWithSharedLinkItemField(val: SearchResultWithSharedLinkItemField): Json;
export interface SearchResultWithSharedLink {
    readonly accessibleViaSharedLink?: string;
    readonly item?: SearchResultWithSharedLinkItemField;
    readonly type?: string;
}
export declare function deserializeSearchResultWithSharedLink(val: Json): SearchResultWithSharedLink;
export declare function serializeSearchResultWithSharedLink(val: SearchResultWithSharedLink): Json;
export interface SearchResultsWithSharedLinks {
    readonly totalCount?: number;
    readonly limit?: number;
    readonly offset?: number;
    readonly entries?: readonly SearchResultWithSharedLink[];
}
export declare function deserializeSearchResultsWithSharedLinks(val: Json): SearchResultsWithSharedLinks;
export declare function serializeSearchResultsWithSharedLinks(val: SearchResultsWithSharedLinks): Json;
export type SearchResultsEntriesField = File | Folder | WebLink;
export declare function deserializeSearchResultsEntriesField(val: Json): SearchResultsEntriesField;
export declare function serializeSearchResultsEntriesField(val: SearchResultsEntriesField): Json;
export interface SearchResults {
    readonly totalCount?: number;
    readonly limit?: number;
    readonly offset?: number;
    readonly entries?: readonly SearchResultsEntriesField[];
}
export declare function deserializeSearchResults(val: Json): SearchResults;
export declare function serializeSearchResults(val: SearchResults): Json;
export type RecentItemItemField = File | Folder | WebLink;
export declare function deserializeRecentItemItemField(val: Json): RecentItemItemField;
export declare function serializeRecentItemItemField(val: RecentItemItemField): Json;
export interface RecentItem {
    readonly type?: string;
    readonly item?: RecentItemItemField;
    readonly interactionType?: RecentItemInteractionTypeField;
    readonly interactedAt?: string;
    readonly interactionSharedLink?: string;
}
export declare function deserializeRecentItem(val: Json): RecentItem;
export declare function serializeRecentItem(val: RecentItem): Json;
export interface RecentItems {
    readonly limit?: number;
    readonly nextMarker?: number;
    readonly prevMarker?: number;
    readonly entries?: readonly RecentItem[];
}
export declare function deserializeRecentItems(val: Json): RecentItems;
export declare function serializeRecentItems(val: RecentItems): Json;
export type MetadataQueryResultsEntriesField = File | Folder;
export declare function deserializeMetadataQueryResultsEntriesField(val: Json): MetadataQueryResultsEntriesField;
export declare function serializeMetadataQueryResultsEntriesField(val: MetadataQueryResultsEntriesField): Json;
export interface MetadataQueryResults {
    readonly entries?: readonly MetadataQueryResultsEntriesField[];
    readonly limit?: number;
    readonly nextMarker?: string;
}
export declare function deserializeMetadataQueryResults(val: Json): MetadataQueryResults;
export declare function serializeMetadataQueryResults(val: MetadataQueryResults): Json;
export type LegalHoldPolicyAssignmentAssignedToField = File | Folder | WebLink;
export declare function deserializeLegalHoldPolicyAssignmentAssignedToField(val: Json): LegalHoldPolicyAssignmentAssignedToField;
export declare function serializeLegalHoldPolicyAssignmentAssignedToField(val: LegalHoldPolicyAssignmentAssignedToField): Json;
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
export declare function deserializeLegalHoldPolicyAssignment(val: Json): LegalHoldPolicyAssignment;
export declare function serializeLegalHoldPolicyAssignment(val: LegalHoldPolicyAssignment): Json;
export interface FileVersionLegalHold {
    readonly id?: string;
    readonly type?: FileVersionLegalHoldTypeField;
    readonly fileVersion?: FileVersionMini;
    readonly file?: FileMini;
    readonly legalHoldPolicyAssignments?: readonly LegalHoldPolicyAssignment[];
    readonly deletedAt?: string;
}
export declare function deserializeFileVersionLegalHold(val: Json): FileVersionLegalHold;
export declare function serializeFileVersionLegalHold(val: FileVersionLegalHold): Json;
export interface FileVersionLegalHolds {
    readonly limit?: number;
    readonly nextMarker?: number;
    readonly prevMarker?: number;
    readonly entries?: readonly FileVersionLegalHold[];
}
export declare function deserializeFileVersionLegalHolds(val: Json): FileVersionLegalHolds;
export declare function serializeFileVersionLegalHolds(val: FileVersionLegalHolds): Json;
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
export declare function deserializeFolderFull(val: Json): FolderFull;
export declare function serializeFolderFull(val: FolderFull): Json;
export type CollaborationItemField = File | Folder | WebLink;
export declare function deserializeCollaborationItemField(val: Json): CollaborationItemField;
export declare function serializeCollaborationItemField(val: CollaborationItemField): Json;
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
export declare function deserializeCollaboration(val: Json): Collaboration;
export declare function serializeCollaboration(val: Collaboration): Json;
export interface Collaborations {
    readonly totalCount?: number;
    readonly limit?: number;
    readonly offset?: number;
    readonly order?: readonly CollaborationsOrderField[];
    readonly entries?: readonly Collaboration[];
}
export declare function deserializeCollaborations(val: Json): Collaborations;
export declare function serializeCollaborations(val: Collaborations): Json;
export type WebhookInvocationSourceField = File | Folder;
export declare function deserializeWebhookInvocationSourceField(val: Json): WebhookInvocationSourceField;
export declare function serializeWebhookInvocationSourceField(val: WebhookInvocationSourceField): Json;
export interface WebhookInvocation {
    readonly id?: string;
    readonly type?: WebhookInvocationTypeField;
    readonly webhook?: Webhook;
    readonly createdBy?: UserMini;
    readonly createdAt?: string;
    readonly trigger?: WebhookInvocationTriggerField;
    readonly source?: WebhookInvocationSourceField;
}
export declare function deserializeWebhookInvocation(val: Json): WebhookInvocation;
export declare function serializeWebhookInvocation(val: WebhookInvocation): Json;
export type SkillInvocationSourceField = File | Folder;
export declare function deserializeSkillInvocationSourceField(val: Json): SkillInvocationSourceField;
export declare function serializeSkillInvocationSourceField(val: SkillInvocationSourceField): Json;
export type WorkflowFlowsFieldTypeField = "flow";
export declare function deserializeWorkflowFlowsFieldTypeField(val: Json): WorkflowFlowsFieldTypeField;
export declare function serializeWorkflowFlowsFieldTypeField(val: WorkflowFlowsFieldTypeField): Json;
export type WorkflowFlowsFieldTriggerFieldTypeField = "trigger";
export declare function deserializeWorkflowFlowsFieldTriggerFieldTypeField(val: Json): WorkflowFlowsFieldTriggerFieldTypeField;
export declare function serializeWorkflowFlowsFieldTriggerFieldTypeField(val: WorkflowFlowsFieldTriggerFieldTypeField): Json;
export type WorkflowFlowsFieldTriggerFieldTriggerTypeField = "WORKFLOW_MANUAL_START";
export declare function deserializeWorkflowFlowsFieldTriggerFieldTriggerTypeField(val: Json): WorkflowFlowsFieldTriggerFieldTriggerTypeField;
export declare function serializeWorkflowFlowsFieldTriggerFieldTriggerTypeField(val: WorkflowFlowsFieldTriggerFieldTriggerTypeField): Json;
export type WorkflowFlowsFieldTriggerFieldScopeFieldTypeField = "trigger_scope";
export declare function deserializeWorkflowFlowsFieldTriggerFieldScopeFieldTypeField(val: Json): WorkflowFlowsFieldTriggerFieldScopeFieldTypeField;
export declare function serializeWorkflowFlowsFieldTriggerFieldScopeFieldTypeField(val: WorkflowFlowsFieldTriggerFieldScopeFieldTypeField): Json;
export type WorkflowFlowsFieldTriggerFieldScopeFieldObjectFieldTypeField = "folder";
export declare function deserializeWorkflowFlowsFieldTriggerFieldScopeFieldObjectFieldTypeField(val: Json): WorkflowFlowsFieldTriggerFieldScopeFieldObjectFieldTypeField;
export declare function serializeWorkflowFlowsFieldTriggerFieldScopeFieldObjectFieldTypeField(val: WorkflowFlowsFieldTriggerFieldScopeFieldObjectFieldTypeField): Json;
export interface WorkflowFlowsFieldTriggerFieldScopeFieldObjectField {
    readonly type?: WorkflowFlowsFieldTriggerFieldScopeFieldObjectFieldTypeField;
    readonly id?: string;
}
export declare function deserializeWorkflowFlowsFieldTriggerFieldScopeFieldObjectField(val: Json): WorkflowFlowsFieldTriggerFieldScopeFieldObjectField;
export declare function serializeWorkflowFlowsFieldTriggerFieldScopeFieldObjectField(val: WorkflowFlowsFieldTriggerFieldScopeFieldObjectField): Json;
export interface WorkflowFlowsFieldTriggerFieldScopeField {
    readonly type?: WorkflowFlowsFieldTriggerFieldScopeFieldTypeField;
    readonly ref?: string;
    readonly object?: WorkflowFlowsFieldTriggerFieldScopeFieldObjectField;
}
export declare function deserializeWorkflowFlowsFieldTriggerFieldScopeField(val: Json): WorkflowFlowsFieldTriggerFieldScopeField;
export declare function serializeWorkflowFlowsFieldTriggerFieldScopeField(val: WorkflowFlowsFieldTriggerFieldScopeField): Json;
export interface WorkflowFlowsFieldTriggerField {
    readonly type?: WorkflowFlowsFieldTriggerFieldTypeField;
    readonly triggerType?: WorkflowFlowsFieldTriggerFieldTriggerTypeField;
    readonly scope?: readonly WorkflowFlowsFieldTriggerFieldScopeField[];
}
export declare function deserializeWorkflowFlowsFieldTriggerField(val: Json): WorkflowFlowsFieldTriggerField;
export declare function serializeWorkflowFlowsFieldTriggerField(val: WorkflowFlowsFieldTriggerField): Json;
export type WorkflowFlowsFieldOutcomesFieldTypeField = "outcome";
export declare function deserializeWorkflowFlowsFieldOutcomesFieldTypeField(val: Json): WorkflowFlowsFieldOutcomesFieldTypeField;
export declare function serializeWorkflowFlowsFieldOutcomesFieldTypeField(val: WorkflowFlowsFieldOutcomesFieldTypeField): Json;
export type WorkflowFlowsFieldOutcomesFieldActionTypeField = "add_metadata" | "assign_task" | "copy_file" | "copy_folder" | "create_folder" | "delete_file" | "delete_folder" | "lock_file" | "move_file" | "move_folder" | "remove_watermark_file" | "rename_folder" | "restore_folder" | "share_file" | "share_folder" | "unlock_file" | "upload_file" | "wait_for_task" | "watermark_file" | "go_back_to_step" | "apply_file_classification" | "apply_folder_classification" | "send_notification";
export declare function deserializeWorkflowFlowsFieldOutcomesFieldActionTypeField(val: Json): WorkflowFlowsFieldOutcomesFieldActionTypeField;
export declare function serializeWorkflowFlowsFieldOutcomesFieldActionTypeField(val: WorkflowFlowsFieldOutcomesFieldActionTypeField): Json;
export type WorkflowFlowsFieldOutcomesFieldIfRejectedFieldTypeField = "outcome";
export declare function deserializeWorkflowFlowsFieldOutcomesFieldIfRejectedFieldTypeField(val: Json): WorkflowFlowsFieldOutcomesFieldIfRejectedFieldTypeField;
export declare function serializeWorkflowFlowsFieldOutcomesFieldIfRejectedFieldTypeField(val: WorkflowFlowsFieldOutcomesFieldIfRejectedFieldTypeField): Json;
export type WorkflowFlowsFieldOutcomesFieldIfRejectedFieldActionTypeField = "add_metadata" | "assign_task" | "copy_file" | "copy_folder" | "create_folder" | "delete_file" | "delete_folder" | "lock_file" | "move_file" | "move_folder" | "remove_watermark_file" | "rename_folder" | "restore_folder" | "share_file" | "share_folder" | "unlock_file" | "upload_file" | "wait_for_task" | "watermark_file" | "go_back_to_step" | "apply_file_classification" | "apply_folder_classification" | "send_notification";
export declare function deserializeWorkflowFlowsFieldOutcomesFieldIfRejectedFieldActionTypeField(val: Json): WorkflowFlowsFieldOutcomesFieldIfRejectedFieldActionTypeField;
export declare function serializeWorkflowFlowsFieldOutcomesFieldIfRejectedFieldActionTypeField(val: WorkflowFlowsFieldOutcomesFieldIfRejectedFieldActionTypeField): Json;
export interface WorkflowFlowsFieldOutcomesFieldIfRejectedField {
    readonly id?: string;
    readonly type?: WorkflowFlowsFieldOutcomesFieldIfRejectedFieldTypeField;
    readonly name?: string;
    readonly actionType?: WorkflowFlowsFieldOutcomesFieldIfRejectedFieldActionTypeField;
}
export declare function deserializeWorkflowFlowsFieldOutcomesFieldIfRejectedField(val: Json): WorkflowFlowsFieldOutcomesFieldIfRejectedField;
export declare function serializeWorkflowFlowsFieldOutcomesFieldIfRejectedField(val: WorkflowFlowsFieldOutcomesFieldIfRejectedField): Json;
export interface WorkflowFlowsFieldOutcomesField {
    readonly id?: string;
    readonly type?: WorkflowFlowsFieldOutcomesFieldTypeField;
    readonly name?: string;
    readonly actionType?: WorkflowFlowsFieldOutcomesFieldActionTypeField;
    readonly ifRejected?: readonly WorkflowFlowsFieldOutcomesFieldIfRejectedField[];
}
export declare function deserializeWorkflowFlowsFieldOutcomesField(val: Json): WorkflowFlowsFieldOutcomesField;
export declare function serializeWorkflowFlowsFieldOutcomesField(val: WorkflowFlowsFieldOutcomesField): Json;
export interface WorkflowFlowsField {
    readonly id?: string;
    readonly type?: WorkflowFlowsFieldTypeField;
    readonly trigger?: WorkflowFlowsFieldTriggerField;
    readonly outcomes?: readonly WorkflowFlowsFieldOutcomesField[];
    readonly createdAt?: string;
    readonly createdBy?: UserBase;
}
export declare function deserializeWorkflowFlowsField(val: Json): WorkflowFlowsField;
export declare function serializeWorkflowFlowsField(val: WorkflowFlowsField): Json;
export type WorkflowMiniTypeField = "workflow";
export declare function deserializeWorkflowMiniTypeField(val: Json): WorkflowMiniTypeField;
export declare function serializeWorkflowMiniTypeField(val: WorkflowMiniTypeField): Json;
export interface WorkflowMini {
    readonly id?: string;
    readonly type?: WorkflowMiniTypeField;
    readonly name?: string;
    readonly description?: string;
    readonly isEnabled?: boolean;
}
export declare function deserializeWorkflowMini(val: Json): WorkflowMini;
export declare function serializeWorkflowMini(val: WorkflowMini): Json;
export type Workflow = WorkflowMini & {
    /**
     * A list of flows assigned to a workflow. */
    readonly flows?: readonly WorkflowFlowsField[];
};
export declare function deserializeWorkflow(val: Json): Workflow;
export declare function serializeWorkflow(val: Workflow): Json;
export interface Workflows {
    readonly limit?: number;
    readonly nextMarker?: number;
    readonly prevMarker?: number;
    readonly entries?: readonly Workflow[];
}
export declare function deserializeWorkflows(val: Json): Workflows;
export declare function serializeWorkflows(val: Workflows): Json;
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
export declare function deserializeWorkflowFull(val: Json): WorkflowFull;
export declare function serializeWorkflowFull(val: WorkflowFull): Json;
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
export declare function deserializeZipDownload(val: Json): ZipDownload;
export declare function serializeZipDownload(val: ZipDownload): Json;
export type ZipDownloadStatusStateField = "in_progress" | "failed" | "success";
export declare function deserializeZipDownloadStatusStateField(val: Json): ZipDownloadStatusStateField;
export declare function serializeZipDownloadStatusStateField(val: ZipDownloadStatusStateField): Json;
export interface ZipDownloadStatus {
    readonly totalFileCount?: number;
    readonly downloadedFileCount?: number;
    readonly skippedFileCount?: number;
    readonly skippedFolderCount?: number;
    readonly state?: ZipDownloadStatusStateField;
}
export declare function deserializeZipDownloadStatus(val: Json): ZipDownloadStatus;
export declare function serializeZipDownloadStatus(val: ZipDownloadStatus): Json;
export type SignRequestTypeField = "sign-request";
export declare function deserializeSignRequestTypeField(val: Json): SignRequestTypeField;
export declare function serializeSignRequestTypeField(val: SignRequestTypeField): Json;
export type SignRequestStatusField = "converting" | "created" | "sent" | "viewed" | "signed" | "cancelled" | "declined" | "error_converting" | "error_sending" | "expired";
export declare function deserializeSignRequestStatusField(val: Json): SignRequestStatusField;
export declare function serializeSignRequestStatusField(val: SignRequestStatusField): Json;
export type FileScopeScopeField = "annotation_edit" | "annotation_view_all" | "annotation_view_self" | "base_explorer" | "base_picker" | "base_preview" | "base_upload" | "item_delete" | "item_download" | "item_preview" | "item_rename" | "item_share";
export declare function deserializeFileScopeScopeField(val: Json): FileScopeScopeField;
export declare function serializeFileScopeScopeField(val: FileScopeScopeField): Json;
export interface FileScope {
    readonly scope?: FileScopeScopeField;
    readonly object?: FileMini;
}
export declare function deserializeFileScope(val: Json): FileScope;
export declare function serializeFileScope(val: FileScope): Json;
export interface FileFullExpiringEmbedLinkField {
    readonly accessToken?: string;
    readonly expiresIn?: number;
    readonly tokenType?: FileFullExpiringEmbedLinkFieldTokenTypeField;
    readonly restrictedTo?: readonly FileScope[];
    readonly url?: string;
}
export declare function deserializeFileFullExpiringEmbedLinkField(val: Json): FileFullExpiringEmbedLinkField;
export declare function serializeFileFullExpiringEmbedLinkField(val: FileFullExpiringEmbedLinkField): Json;
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
export declare function deserializeFileFull(val: Json): FileFull;
export declare function serializeFileFull(val: FileFull): Json;
export interface AccessToken {
    readonly accessToken?: string;
    readonly expiresIn?: number;
    readonly tokenType?: AccessTokenTokenTypeField;
    readonly restrictedTo?: readonly FileScope[];
    readonly refreshToken?: string;
    readonly issuedTokenType?: AccessTokenIssuedTokenTypeField;
}
export declare function deserializeAccessToken(val: Json): AccessToken;
export declare function serializeAccessToken(val: AccessToken): Json;
export type EventSourceItemTypeField = "file" | "folder";
export declare function deserializeEventSourceItemTypeField(val: Json): EventSourceItemTypeField;
export declare function serializeEventSourceItemTypeField(val: EventSourceItemTypeField): Json;
export interface EventSourceClassificationField {
    readonly name?: string;
}
export declare function deserializeEventSourceClassificationField(val: Json): EventSourceClassificationField;
export declare function serializeEventSourceClassificationField(val: EventSourceClassificationField): Json;
export interface EventSource {
    readonly itemType: EventSourceItemTypeField;
    readonly itemId: string;
    readonly itemName: string;
    readonly classification?: EventSourceClassificationField;
    readonly parent?: FolderMini;
    readonly ownedBy?: UserMini;
}
export declare function deserializeEventSource(val: Json): EventSource;
export declare function serializeEventSource(val: EventSource): Json;
export type EventSourceField = User | EventSource | File | Folder;
export declare function deserializeEventSourceField(val: Json): EventSourceField;
export declare function serializeEventSourceField(val: EventSourceField): Json;
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
export declare function deserializeEvent(val: Json): Event;
export declare function serializeEvent(val: Event): Json;
export interface Events {
    readonly chunkSize?: number;
    readonly nextStreamPosition?: string;
    readonly entries?: readonly Event[];
}
export declare function deserializeEvents(val: Json): Events;
export declare function serializeEvents(val: Events): Json;
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
export declare function deserializeSkillInvocation(val: Json): SkillInvocation;
export declare function serializeSkillInvocation(val: SkillInvocation): Json;
export type KeywordSkillCardTypeField = "skill_card";
export declare function deserializeKeywordSkillCardTypeField(val: Json): KeywordSkillCardTypeField;
export declare function serializeKeywordSkillCardTypeField(val: KeywordSkillCardTypeField): Json;
export type KeywordSkillCardSkillCardTypeField = "keyword";
export declare function deserializeKeywordSkillCardSkillCardTypeField(val: Json): KeywordSkillCardSkillCardTypeField;
export declare function serializeKeywordSkillCardSkillCardTypeField(val: KeywordSkillCardSkillCardTypeField): Json;
export interface KeywordSkillCardSkillCardTitleField {
    readonly code?: string;
    readonly message: string;
}
export declare function deserializeKeywordSkillCardSkillCardTitleField(val: Json): KeywordSkillCardSkillCardTitleField;
export declare function serializeKeywordSkillCardSkillCardTitleField(val: KeywordSkillCardSkillCardTitleField): Json;
export type KeywordSkillCardSkillFieldTypeField = "service";
export declare function deserializeKeywordSkillCardSkillFieldTypeField(val: Json): KeywordSkillCardSkillFieldTypeField;
export declare function serializeKeywordSkillCardSkillFieldTypeField(val: KeywordSkillCardSkillFieldTypeField): Json;
export interface KeywordSkillCardSkillField {
    readonly type: KeywordSkillCardSkillFieldTypeField;
    readonly id: string;
}
export declare function deserializeKeywordSkillCardSkillField(val: Json): KeywordSkillCardSkillField;
export declare function serializeKeywordSkillCardSkillField(val: KeywordSkillCardSkillField): Json;
export type KeywordSkillCardInvocationFieldTypeField = "skill_invocation";
export declare function deserializeKeywordSkillCardInvocationFieldTypeField(val: Json): KeywordSkillCardInvocationFieldTypeField;
export declare function serializeKeywordSkillCardInvocationFieldTypeField(val: KeywordSkillCardInvocationFieldTypeField): Json;
export interface KeywordSkillCardInvocationField {
    readonly type: KeywordSkillCardInvocationFieldTypeField;
    readonly id: string;
}
export declare function deserializeKeywordSkillCardInvocationField(val: Json): KeywordSkillCardInvocationField;
export declare function serializeKeywordSkillCardInvocationField(val: KeywordSkillCardInvocationField): Json;
export interface KeywordSkillCardEntriesField {
    readonly text?: string;
}
export declare function deserializeKeywordSkillCardEntriesField(val: Json): KeywordSkillCardEntriesField;
export declare function serializeKeywordSkillCardEntriesField(val: KeywordSkillCardEntriesField): Json;
export interface KeywordSkillCard {
    readonly createdAt?: string;
    readonly type: KeywordSkillCardTypeField;
    readonly skillCardType: KeywordSkillCardSkillCardTypeField;
    readonly skillCardTitle?: KeywordSkillCardSkillCardTitleField;
    readonly skill: KeywordSkillCardSkillField;
    readonly invocation: KeywordSkillCardInvocationField;
    readonly entries: readonly KeywordSkillCardEntriesField[];
}
export declare function deserializeKeywordSkillCard(val: Json): KeywordSkillCard;
export declare function serializeKeywordSkillCard(val: KeywordSkillCard): Json;
export interface IntegrationMappingSlackOptions {
    readonly isAccessManagementDisabled?: boolean;
}
export declare function deserializeIntegrationMappingSlackOptions(val: Json): IntegrationMappingSlackOptions;
export declare function serializeIntegrationMappingSlackOptions(val: IntegrationMappingSlackOptions): Json;
export type IntegrationMappingPartnerItemSlackTypeField = "channel";
export declare function deserializeIntegrationMappingPartnerItemSlackTypeField(val: Json): IntegrationMappingPartnerItemSlackTypeField;
export declare function serializeIntegrationMappingPartnerItemSlackTypeField(val: IntegrationMappingPartnerItemSlackTypeField): Json;
export interface IntegrationMappingPartnerItemSlack {
    readonly type: IntegrationMappingPartnerItemSlackTypeField;
    readonly id: string;
    readonly slackWorkspaceId?: string;
    readonly slackOrgId?: string;
}
export declare function deserializeIntegrationMappingPartnerItemSlack(val: Json): IntegrationMappingPartnerItemSlack;
export declare function serializeIntegrationMappingPartnerItemSlack(val: IntegrationMappingPartnerItemSlack): Json;
export type IntegrationMappingPartnerItemField = IntegrationMappingPartnerItemSlack;
export declare function deserializeIntegrationMappingPartnerItemField(val: Json): IntegrationMappingPartnerItemField;
export declare function serializeIntegrationMappingPartnerItemField(val: IntegrationMappingPartnerItemField): Json;
export type IntegrationMapping = IntegrationMappingBase & {
    /**
     * Mapping type */
    readonly type: IntegrationMappingTypeField;
    /**
     * Mapped item object for Slack */
    readonly partnerItem: IntegrationMappingPartnerItemField;
    /**
     * The Box folder, to which the object from the
     * partner app domain (referenced in `partner_item_id`) is mapped */
    readonly boxItem: IntegrationMappingBoxItemField;
    /**
     * Identifies whether the mapping has
     * been manually set
     * (as opposed to being automatically created) */
    readonly isManuallyCreated?: boolean;
    /**
     * Integration mapping options for Slack */
    readonly options?: IntegrationMappingOptionsField;
    /**
     * An object representing the user who
     * created the integration mapping */
    readonly createdBy?: IntegrationMappingCreatedByField;
    /**
     * The user who
     * last modified the integration mapping */
    readonly modifiedBy?: IntegrationMappingModifiedByField;
    /**
     * When the integration mapping object was created */
    readonly createdAt?: string;
    /**
     * When the integration mapping object was last modified */
    readonly modifiedAt?: string;
};
export declare function deserializeIntegrationMapping(val: Json): IntegrationMapping;
export declare function serializeIntegrationMapping(val: IntegrationMapping): Json;
export interface IntegrationMappings {
    readonly limit?: number;
    readonly nextMarker?: number;
    readonly prevMarker?: number;
    readonly entries?: readonly IntegrationMapping[];
}
export declare function deserializeIntegrationMappings(val: Json): IntegrationMappings;
export declare function serializeIntegrationMappings(val: IntegrationMappings): Json;
export type IntegrationMappingBoxItemSlackTypeField = "folder";
export declare function deserializeIntegrationMappingBoxItemSlackTypeField(val: Json): IntegrationMappingBoxItemSlackTypeField;
export declare function serializeIntegrationMappingBoxItemSlackTypeField(val: IntegrationMappingBoxItemSlackTypeField): Json;
export interface IntegrationMappingBoxItemSlack {
    readonly type: IntegrationMappingBoxItemSlackTypeField;
    readonly id: string;
}
export declare function deserializeIntegrationMappingBoxItemSlack(val: Json): IntegrationMappingBoxItemSlack;
export declare function serializeIntegrationMappingBoxItemSlack(val: IntegrationMappingBoxItemSlack): Json;
export type TimelineSkillCardTypeField = "skill_card";
export declare function deserializeTimelineSkillCardTypeField(val: Json): TimelineSkillCardTypeField;
export declare function serializeTimelineSkillCardTypeField(val: TimelineSkillCardTypeField): Json;
export type TimelineSkillCardSkillCardTypeField = "timeline";
export declare function deserializeTimelineSkillCardSkillCardTypeField(val: Json): TimelineSkillCardSkillCardTypeField;
export declare function serializeTimelineSkillCardSkillCardTypeField(val: TimelineSkillCardSkillCardTypeField): Json;
export interface TimelineSkillCardSkillCardTitleField {
    readonly code?: string;
    readonly message: string;
}
export declare function deserializeTimelineSkillCardSkillCardTitleField(val: Json): TimelineSkillCardSkillCardTitleField;
export declare function serializeTimelineSkillCardSkillCardTitleField(val: TimelineSkillCardSkillCardTitleField): Json;
export type TimelineSkillCardSkillFieldTypeField = "service";
export declare function deserializeTimelineSkillCardSkillFieldTypeField(val: Json): TimelineSkillCardSkillFieldTypeField;
export declare function serializeTimelineSkillCardSkillFieldTypeField(val: TimelineSkillCardSkillFieldTypeField): Json;
export interface TimelineSkillCardSkillField {
    readonly type: TimelineSkillCardSkillFieldTypeField;
    readonly id: string;
}
export declare function deserializeTimelineSkillCardSkillField(val: Json): TimelineSkillCardSkillField;
export declare function serializeTimelineSkillCardSkillField(val: TimelineSkillCardSkillField): Json;
export type TimelineSkillCardInvocationFieldTypeField = "skill_invocation";
export declare function deserializeTimelineSkillCardInvocationFieldTypeField(val: Json): TimelineSkillCardInvocationFieldTypeField;
export declare function serializeTimelineSkillCardInvocationFieldTypeField(val: TimelineSkillCardInvocationFieldTypeField): Json;
export interface TimelineSkillCardInvocationField {
    readonly type: TimelineSkillCardInvocationFieldTypeField;
    readonly id: string;
}
export declare function deserializeTimelineSkillCardInvocationField(val: Json): TimelineSkillCardInvocationField;
export declare function serializeTimelineSkillCardInvocationField(val: TimelineSkillCardInvocationField): Json;
export interface TimelineSkillCardEntriesFieldAppearsField {
    readonly start?: number;
    readonly end?: number;
}
export declare function deserializeTimelineSkillCardEntriesFieldAppearsField(val: Json): TimelineSkillCardEntriesFieldAppearsField;
export declare function serializeTimelineSkillCardEntriesFieldAppearsField(val: TimelineSkillCardEntriesFieldAppearsField): Json;
export interface TimelineSkillCardEntriesField {
    readonly text?: string;
    readonly appears?: readonly TimelineSkillCardEntriesFieldAppearsField[];
    readonly imageUrl?: string;
}
export declare function deserializeTimelineSkillCardEntriesField(val: Json): TimelineSkillCardEntriesField;
export declare function serializeTimelineSkillCardEntriesField(val: TimelineSkillCardEntriesField): Json;
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
export declare function deserializeTimelineSkillCard(val: Json): TimelineSkillCard;
export declare function serializeTimelineSkillCard(val: TimelineSkillCard): Json;
export type TranscriptSkillCardTypeField = "skill_card";
export declare function deserializeTranscriptSkillCardTypeField(val: Json): TranscriptSkillCardTypeField;
export declare function serializeTranscriptSkillCardTypeField(val: TranscriptSkillCardTypeField): Json;
export type TranscriptSkillCardSkillCardTypeField = "transcript";
export declare function deserializeTranscriptSkillCardSkillCardTypeField(val: Json): TranscriptSkillCardSkillCardTypeField;
export declare function serializeTranscriptSkillCardSkillCardTypeField(val: TranscriptSkillCardSkillCardTypeField): Json;
export interface TranscriptSkillCardSkillCardTitleField {
    readonly code?: string;
    readonly message: string;
}
export declare function deserializeTranscriptSkillCardSkillCardTitleField(val: Json): TranscriptSkillCardSkillCardTitleField;
export declare function serializeTranscriptSkillCardSkillCardTitleField(val: TranscriptSkillCardSkillCardTitleField): Json;
export type TranscriptSkillCardSkillFieldTypeField = "service";
export declare function deserializeTranscriptSkillCardSkillFieldTypeField(val: Json): TranscriptSkillCardSkillFieldTypeField;
export declare function serializeTranscriptSkillCardSkillFieldTypeField(val: TranscriptSkillCardSkillFieldTypeField): Json;
export interface TranscriptSkillCardSkillField {
    readonly type: TranscriptSkillCardSkillFieldTypeField;
    readonly id: string;
}
export declare function deserializeTranscriptSkillCardSkillField(val: Json): TranscriptSkillCardSkillField;
export declare function serializeTranscriptSkillCardSkillField(val: TranscriptSkillCardSkillField): Json;
export type TranscriptSkillCardInvocationFieldTypeField = "skill_invocation";
export declare function deserializeTranscriptSkillCardInvocationFieldTypeField(val: Json): TranscriptSkillCardInvocationFieldTypeField;
export declare function serializeTranscriptSkillCardInvocationFieldTypeField(val: TranscriptSkillCardInvocationFieldTypeField): Json;
export interface TranscriptSkillCardInvocationField {
    readonly type: TranscriptSkillCardInvocationFieldTypeField;
    readonly id: string;
}
export declare function deserializeTranscriptSkillCardInvocationField(val: Json): TranscriptSkillCardInvocationField;
export declare function serializeTranscriptSkillCardInvocationField(val: TranscriptSkillCardInvocationField): Json;
export interface TranscriptSkillCardEntriesFieldAppearsField {
    readonly start?: number;
}
export declare function deserializeTranscriptSkillCardEntriesFieldAppearsField(val: Json): TranscriptSkillCardEntriesFieldAppearsField;
export declare function serializeTranscriptSkillCardEntriesFieldAppearsField(val: TranscriptSkillCardEntriesFieldAppearsField): Json;
export interface TranscriptSkillCardEntriesField {
    readonly text?: string;
    readonly appears?: readonly TranscriptSkillCardEntriesFieldAppearsField[];
}
export declare function deserializeTranscriptSkillCardEntriesField(val: Json): TranscriptSkillCardEntriesField;
export declare function serializeTranscriptSkillCardEntriesField(val: TranscriptSkillCardEntriesField): Json;
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
export declare function deserializeTranscriptSkillCard(val: Json): TranscriptSkillCard;
export declare function serializeTranscriptSkillCard(val: TranscriptSkillCard): Json;
export type StatusSkillCardTypeField = "skill_card";
export declare function deserializeStatusSkillCardTypeField(val: Json): StatusSkillCardTypeField;
export declare function serializeStatusSkillCardTypeField(val: StatusSkillCardTypeField): Json;
export type StatusSkillCardSkillCardTypeField = "status";
export declare function deserializeStatusSkillCardSkillCardTypeField(val: Json): StatusSkillCardSkillCardTypeField;
export declare function serializeStatusSkillCardSkillCardTypeField(val: StatusSkillCardSkillCardTypeField): Json;
export interface StatusSkillCardSkillCardTitleField {
    readonly code?: string;
    readonly message: string;
}
export declare function deserializeStatusSkillCardSkillCardTitleField(val: Json): StatusSkillCardSkillCardTitleField;
export declare function serializeStatusSkillCardSkillCardTitleField(val: StatusSkillCardSkillCardTitleField): Json;
export type StatusSkillCardStatusFieldCodeField = "invoked" | "processing" | "success" | "transient_failure" | "permanent_failure";
export declare function deserializeStatusSkillCardStatusFieldCodeField(val: Json): StatusSkillCardStatusFieldCodeField;
export declare function serializeStatusSkillCardStatusFieldCodeField(val: StatusSkillCardStatusFieldCodeField): Json;
export interface StatusSkillCardStatusField {
    readonly code: StatusSkillCardStatusFieldCodeField;
    readonly message?: string;
}
export declare function deserializeStatusSkillCardStatusField(val: Json): StatusSkillCardStatusField;
export declare function serializeStatusSkillCardStatusField(val: StatusSkillCardStatusField): Json;
export type StatusSkillCardSkillFieldTypeField = "service";
export declare function deserializeStatusSkillCardSkillFieldTypeField(val: Json): StatusSkillCardSkillFieldTypeField;
export declare function serializeStatusSkillCardSkillFieldTypeField(val: StatusSkillCardSkillFieldTypeField): Json;
export interface StatusSkillCardSkillField {
    readonly type: StatusSkillCardSkillFieldTypeField;
    readonly id: string;
}
export declare function deserializeStatusSkillCardSkillField(val: Json): StatusSkillCardSkillField;
export declare function serializeStatusSkillCardSkillField(val: StatusSkillCardSkillField): Json;
export type StatusSkillCardInvocationFieldTypeField = "skill_invocation";
export declare function deserializeStatusSkillCardInvocationFieldTypeField(val: Json): StatusSkillCardInvocationFieldTypeField;
export declare function serializeStatusSkillCardInvocationFieldTypeField(val: StatusSkillCardInvocationFieldTypeField): Json;
export interface StatusSkillCardInvocationField {
    readonly type: StatusSkillCardInvocationFieldTypeField;
    readonly id: string;
}
export declare function deserializeStatusSkillCardInvocationField(val: Json): StatusSkillCardInvocationField;
export declare function serializeStatusSkillCardInvocationField(val: StatusSkillCardInvocationField): Json;
export interface StatusSkillCard {
    readonly createdAt?: string;
    readonly type: StatusSkillCardTypeField;
    readonly skillCardType: StatusSkillCardSkillCardTypeField;
    readonly skillCardTitle?: StatusSkillCardSkillCardTitleField;
    readonly status: StatusSkillCardStatusField;
    readonly skill: StatusSkillCardSkillField;
    readonly invocation: StatusSkillCardInvocationField;
}
export declare function deserializeStatusSkillCard(val: Json): StatusSkillCard;
export declare function serializeStatusSkillCard(val: StatusSkillCard): Json;
export type SkillCardsMetadataCardsField = KeywordSkillCard | TimelineSkillCard | TranscriptSkillCard | StatusSkillCard;
export declare function deserializeSkillCardsMetadataCardsField(val: Json): SkillCardsMetadataCardsField;
export declare function serializeSkillCardsMetadataCardsField(val: SkillCardsMetadataCardsField): Json;
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
export declare function deserializeSkillCardsMetadata(val: Json): SkillCardsMetadata;
export declare function serializeSkillCardsMetadata(val: SkillCardsMetadata): Json;
export type SignRequestCreateSignerRoleField = "signer" | "approver" | "final_copy_reader";
export declare function deserializeSignRequestCreateSignerRoleField(val: Json): SignRequestCreateSignerRoleField;
export declare function serializeSignRequestCreateSignerRoleField(val: SignRequestCreateSignerRoleField): Json;
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
export declare function deserializeSignRequestCreateSigner(val: Json): SignRequestCreateSigner;
export declare function serializeSignRequestCreateSigner(val: SignRequestCreateSigner): Json;
export interface SignRequestPrefillTag {
    readonly documentTagId?: string;
    readonly textValue?: string;
    readonly checkboxValue?: boolean;
    readonly dateValue?: string;
}
export declare function deserializeSignRequestPrefillTag(val: Json): SignRequestPrefillTag;
export declare function serializeSignRequestPrefillTag(val: SignRequestPrefillTag): Json;
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
    readonly templateId?: string;
}
export declare function deserializeSignRequestBase(val: Json): SignRequestBase;
export declare function serializeSignRequestBase(val: SignRequestBase): Json;
export type SignRequestCreateRequest = SignRequestBase & {
    /**
     * List of files to create a signing document from. This is currently limited to ten files. Only the ID and type fields are required for each file. */
    readonly sourceFiles?: readonly FileBase[];
    /**
     * Array of signers for the sign request. 35 is the
     * max number of signers permitted. */
    readonly signers: readonly SignRequestCreateSigner[];
};
export declare function deserializeSignRequestCreateRequest(val: Json): SignRequestCreateRequest;
export declare function serializeSignRequestCreateRequest(val: SignRequestCreateRequest): Json;
export type TemplateSignerInput = SignRequestPrefillTag & {
    /**
     * Type of input */
    readonly type?: TemplateSignerInputTypeField;
    /**
     * Content type of input */
    readonly contentType?: TemplateSignerInputContentTypeField;
    /**
     * Whether or not the input is required. */
    readonly isRequired?: boolean;
    /**
     * Index of page that the input is on. */
    readonly pageIndex: number;
    /**
     * Document identifier. */
    readonly documentId?: string;
    /**
     * When the input is of the type `dropdown` this values will be filled with all the dropdown options. */
    readonly dropdownChoices?: readonly string[];
    /**
     * When the input is of type `radio` they can be grouped to gather with this identifier. */
    readonly groupId?: string;
    /**
     * Where the input is located on a page. */
    readonly coordinates?: TemplateSignerInputCoordinatesField;
    /**
     * The size of the input. */
    readonly dimensions?: TemplateSignerInputDimensionsField;
};
export declare function deserializeTemplateSignerInput(val: Json): TemplateSignerInput;
export declare function serializeTemplateSignerInput(val: TemplateSignerInput): Json;
export interface TemplateSigner {
    readonly inputs?: readonly TemplateSignerInput[];
    readonly email?: string;
    readonly role?: TemplateSignerRoleField;
    readonly isInPerson?: boolean;
    readonly order?: number;
}
export declare function deserializeTemplateSigner(val: Json): TemplateSigner;
export declare function serializeTemplateSigner(val: TemplateSigner): Json;
export interface SignTemplate {
    readonly id?: string;
    readonly name?: string;
    readonly emailSubject?: string;
    readonly emailMessage?: string;
    readonly daysValid?: number;
    readonly parentFolder?: FolderMini;
    readonly sourceFiles?: readonly FileMini[];
    readonly areFieldsLocked?: boolean;
    readonly areOptionsLocked?: boolean;
    readonly areRecipientsLocked?: boolean;
    readonly areEmailSettingsLocked?: boolean;
    readonly areFilesLocked?: boolean;
    readonly signers?: readonly TemplateSigner[];
    readonly additionalInfo?: SignTemplateAdditionalInfoField;
    readonly readySignLink?: SignTemplateReadySignLinkField;
    readonly customBranding?: SignTemplateCustomBrandingField;
}
export declare function deserializeSignTemplate(val: Json): SignTemplate;
export declare function serializeSignTemplate(val: SignTemplate): Json;
export type SignRequestSignerInputTypeField = "signature" | "date" | "text" | "checkbox";
export declare function deserializeSignRequestSignerInputTypeField(val: Json): SignRequestSignerInputTypeField;
export declare function serializeSignRequestSignerInputTypeField(val: SignRequestSignerInputTypeField): Json;
export type SignRequestSignerInputContentTypeField = "initial" | "stamp" | "signature" | "company" | "title" | "email" | "full_name" | "first_name" | "last_name" | "text" | "date" | "checkbox" | "attachment";
export declare function deserializeSignRequestSignerInputContentTypeField(val: Json): SignRequestSignerInputContentTypeField;
export declare function serializeSignRequestSignerInputContentTypeField(val: SignRequestSignerInputContentTypeField): Json;
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
export declare function deserializeSignRequestSignerInput(val: Json): SignRequestSignerInput;
export declare function serializeSignRequestSignerInput(val: SignRequestSignerInput): Json;
export type SignRequestSignerSignerDecisionFieldTypeField = "signed" | "declined";
export declare function deserializeSignRequestSignerSignerDecisionFieldTypeField(val: Json): SignRequestSignerSignerDecisionFieldTypeField;
export declare function serializeSignRequestSignerSignerDecisionFieldTypeField(val: SignRequestSignerSignerDecisionFieldTypeField): Json;
export interface SignRequestSignerSignerDecisionField {
    readonly type?: SignRequestSignerSignerDecisionFieldTypeField;
    readonly finalizedAt?: string;
}
export declare function deserializeSignRequestSignerSignerDecisionField(val: Json): SignRequestSignerSignerDecisionField;
export declare function serializeSignRequestSignerSignerDecisionField(val: SignRequestSignerSignerDecisionField): Json;
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
export declare function deserializeSignRequestSigner(val: Json): SignRequestSigner;
export declare function serializeSignRequestSigner(val: SignRequestSigner): Json;
export type SignRequest = SignRequestBase & {
    /**
     * object type */
    readonly type?: SignRequestTypeField;
    /**
     * List of files to create a signing document from. This is currently limited to ten files. Only the ID and type fields are required for each file. */
    readonly sourceFiles?: readonly FileBase[];
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
};
export declare function deserializeSignRequest(val: Json): SignRequest;
export declare function serializeSignRequest(val: SignRequest): Json;
export interface SignRequests {
    readonly limit?: number;
    readonly nextMarker?: number;
    readonly prevMarker?: number;
    readonly entries?: readonly SignRequest[];
}
export declare function deserializeSignRequests(val: Json): SignRequests;
export declare function serializeSignRequests(val: SignRequests): Json;
export interface ShieldInformationBarrierReportDetailsDetailsField {
    readonly folderId?: string;
}
export declare function deserializeShieldInformationBarrierReportDetailsDetailsField(val: Json): ShieldInformationBarrierReportDetailsDetailsField;
export declare function serializeShieldInformationBarrierReportDetailsDetailsField(val: ShieldInformationBarrierReportDetailsDetailsField): Json;
export interface ShieldInformationBarrierReportDetails {
    readonly details?: ShieldInformationBarrierReportDetailsDetailsField;
}
export declare function deserializeShieldInformationBarrierReportDetails(val: Json): ShieldInformationBarrierReportDetails;
export declare function serializeShieldInformationBarrierReportDetails(val: ShieldInformationBarrierReportDetails): Json;
export type TrackingCodeTypeField = "tracking_code";
export declare function deserializeTrackingCodeTypeField(val: Json): TrackingCodeTypeField;
export declare function serializeTrackingCodeTypeField(val: TrackingCodeTypeField): Json;
export interface TrackingCode {
    readonly type?: TrackingCodeTypeField;
    readonly name?: string;
    readonly value?: string;
}
export declare function deserializeTrackingCode(val: Json): TrackingCode;
export declare function serializeTrackingCode(val: TrackingCode): Json;
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
export declare function deserializeUserFull(val: Json): UserFull;
export declare function serializeUserFull(val: UserFull): Json;
export type MetadataFilterScopeField = "global" | "enterprise" | "enterprise_{enterprise_id}";
export declare function deserializeMetadataFilterScopeField(val: Json): MetadataFilterScopeField;
export declare function serializeMetadataFilterScopeField(val: MetadataFilterScopeField): Json;
export interface MetadataFilterFiltersField {
}
export declare function deserializeMetadataFilterFiltersField(val: Json): MetadataFilterFiltersField;
export declare function serializeMetadataFilterFiltersField(val: MetadataFilterFiltersField): Json;
export interface MetadataFilter {
    readonly scope?: MetadataFilterScopeField;
    readonly templateKey?: string;
    readonly filters?: MetadataFilterFiltersField;
}
export declare function deserializeMetadataFilter(val: Json): MetadataFilter;
export declare function serializeMetadataFilter(val: MetadataFilter): Json;
export interface MetadataFieldFilterString {
}
export declare function deserializeMetadataFieldFilterString(val: Json): MetadataFieldFilterString;
export declare function serializeMetadataFieldFilterString(val: MetadataFieldFilterString): Json;
export interface MetadataFieldFilterFloat {
}
export declare function deserializeMetadataFieldFilterFloat(val: Json): MetadataFieldFilterFloat;
export declare function serializeMetadataFieldFilterFloat(val: MetadataFieldFilterFloat): Json;
export interface MetadataFieldFilterMultiSelect {
}
export declare function deserializeMetadataFieldFilterMultiSelect(val: Json): MetadataFieldFilterMultiSelect;
export declare function serializeMetadataFieldFilterMultiSelect(val: MetadataFieldFilterMultiSelect): Json;
export interface MetadataFieldFilterFloatRange {
}
export declare function deserializeMetadataFieldFilterFloatRange(val: Json): MetadataFieldFilterFloatRange;
export declare function serializeMetadataFieldFilterFloatRange(val: MetadataFieldFilterFloatRange): Json;
export interface MetadataFieldFilterDateRange {
}
export declare function deserializeMetadataFieldFilterDateRange(val: Json): MetadataFieldFilterDateRange;
export declare function serializeMetadataFieldFilterDateRange(val: MetadataFieldFilterDateRange): Json;
