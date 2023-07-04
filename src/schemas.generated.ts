import { isJson } from "./json.js";
import { Json } from "./json.js";
export type PostOAuth2TokenGrantTypeField = "authorization_code" | "refresh_token" | "client_credentials" | "urn:ietf:params:oauth:grant-type:jwt-bearer" | "urn:ietf:params:oauth:grant-type:token-exchange";
export type PostOAuth2TokenSubjectTokenTypeField = "urn:ietf:params:oauth:token-type:access_token";
export type PostOAuth2TokenActorTokenTypeField = "urn:ietf:params:oauth:token-type:id_token";
export type PostOAuth2TokenBoxSubjectTypeField = "enterprise" | "user";
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
export type PostOAuth2TokenRefreshAccessTokenGrantTypeField = "refresh_token";
export interface PostOAuth2TokenRefreshAccessToken {
    readonly grantType: PostOAuth2TokenRefreshAccessTokenGrantTypeField;
    readonly clientId: string;
    readonly clientSecret: string;
    readonly refreshToken: string;
}
export interface PostOAuth2Revoke {
    readonly clientId?: string;
    readonly clientSecret?: string;
    readonly token?: string;
}
export type ZipDownloadRequestItemsFieldTypeField = "file" | "folder.";
export interface ZipDownloadRequestItemsField {
    readonly type: ZipDownloadRequestItemsFieldTypeField;
    readonly id: string;
}
export interface ZipDownloadRequest {
    readonly items: readonly ZipDownloadRequestItemsField[];
    readonly downloadFileName?: string;
}
export interface MetadataQueryQueryParamsField {
}
export type MetadataQueryOrderByFieldDirectionField = "ASC" | "DESC" | "asc" | "desc";
export interface MetadataQueryOrderByField {
    readonly fieldKey?: string;
    readonly direction?: MetadataQueryOrderByFieldDirectionField;
}
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
export type FileRequestUpdateRequestStatusField = "active" | "inactive";
export interface FileRequestUpdateRequest {
    readonly title?: string;
    readonly description?: string;
    readonly status?: FileRequestUpdateRequestStatusField;
    readonly isEmailRequired?: boolean;
    readonly isDescriptionRequired?: boolean;
    readonly expiresAt?: string;
}
export type FileRequestCopyRequestFolderFieldTypeField = "folder";
export interface FileRequestCopyRequestFolderField {
    readonly type?: FileRequestCopyRequestFolderFieldTypeField;
    readonly id: string;
}
export type FileRequestCopyRequest = FileRequestUpdateRequest & {
    /**
     * The folder to associate the new file request to. */
    readonly folder: FileRequestCopyRequestFolderField;
};
export interface IntegrationMappingSlackCreateRequestPartnerItemField {
}
export interface IntegrationMappingSlackCreateRequestBoxItemField {
}
export interface IntegrationMappingSlackCreateRequestOptionsField {
}
export interface IntegrationMappingSlackCreateRequest {
    readonly partnerItem: IntegrationMappingSlackCreateRequestPartnerItemField;
    readonly boxItem: IntegrationMappingSlackCreateRequestBoxItemField;
    readonly options?: IntegrationMappingSlackCreateRequestOptionsField;
}
export type ClientErrorTypeField = "error";
export type ClientErrorCodeField = "created" | "accepted" | "no_content" | "redirect" | "not_modified" | "bad_request" | "unauthorized" | "forbidden" | "not_found" | "method_not_allowed" | "conflict" | "precondition_failed" | "too_many_requests" | "internal_server_error" | "unavailable" | "item_name_invalid" | "insufficient_scope";
export interface ClientErrorContextInfoField {
    readonly message?: string;
}
export interface ClientError {
    readonly type?: ClientErrorTypeField;
    readonly status?: number;
    readonly code?: ClientErrorCodeField;
    readonly message?: string;
    readonly contextInfo?: ClientErrorContextInfoField;
    readonly helpUrl?: string;
    readonly requestId?: string;
}
export interface OAuth2Error {
    readonly error?: string;
    readonly errorDescription?: string;
}
export type ClassificationTemplateField = "securityClassification-6VMVochwUWo";
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
export type ClassificationTemplateTypeField = "metadata_template";
export type ClassificationTemplateTemplateKeyField = "securityClassification-6VMVochwUWo";
export type ClassificationTemplateDisplayNameField = "Classification";
export type ClassificationTemplateFieldsFieldTypeField = "enum";
export type ClassificationTemplateFieldsFieldKeyField = "Box__Security__Classification__Key";
export type ClassificationTemplateFieldsFieldDisplayNameField = "Classification";
export interface ClassificationTemplateFieldsFieldOptionsFieldStaticConfigFieldClassificationField {
    readonly classificationDefinition?: string;
    readonly colorId?: number;
}
export interface ClassificationTemplateFieldsFieldOptionsFieldStaticConfigField {
    readonly classification?: ClassificationTemplateFieldsFieldOptionsFieldStaticConfigFieldClassificationField;
}
export interface ClassificationTemplateFieldsFieldOptionsField {
    readonly id?: string;
    readonly key?: string;
    readonly staticConfig?: ClassificationTemplateFieldsFieldOptionsFieldStaticConfigField;
}
export interface ClassificationTemplateFieldsField {
    readonly id?: string;
    readonly type?: ClassificationTemplateFieldsFieldTypeField;
    readonly key?: ClassificationTemplateFieldsFieldKeyField;
    readonly displayName?: ClassificationTemplateFieldsFieldDisplayNameField;
    readonly hidden?: boolean;
    readonly options?: readonly ClassificationTemplateFieldsFieldOptionsField[];
}
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
export type CollaborationAllowlistEntryTypeField = "collaboration_whitelist_entry";
export type CollaborationAllowlistEntryDirectionField = "inbound" | "outbound" | "both";
export type CollaborationAllowlistEntryEnterpriseFieldTypeField = "enterprise";
export interface CollaborationAllowlistEntryEnterpriseField {
    readonly id?: string;
    readonly type?: CollaborationAllowlistEntryEnterpriseFieldTypeField;
    readonly name?: string;
}
export interface CollaborationAllowlistEntry {
    readonly id?: string;
    readonly type?: CollaborationAllowlistEntryTypeField;
    readonly domain?: string;
    readonly direction?: CollaborationAllowlistEntryDirectionField;
    readonly enterprise?: CollaborationAllowlistEntryEnterpriseField;
    readonly createdAt?: string;
}
export interface CollaborationAllowlistEntries {
    readonly limit?: number;
    readonly nextMarker?: number;
    readonly prevMarker?: number;
    readonly entries?: readonly CollaborationAllowlistEntry[];
}
export type CollaborationAllowlistExemptTargetTypeField = "collaboration_whitelist";
export type CollaborationAllowlistExemptTargetEnterpriseFieldTypeField = "enterprise";
export interface CollaborationAllowlistExemptTargetEnterpriseField {
    readonly id?: string;
    readonly type?: CollaborationAllowlistExemptTargetEnterpriseFieldTypeField;
    readonly name?: string;
}
export type CollaborationAllowlistExemptTargetUserFieldTypeField = "enterprise";
export interface CollaborationAllowlistExemptTargetUserField {
    readonly id?: string;
    readonly type?: CollaborationAllowlistExemptTargetUserFieldTypeField;
    readonly name?: string;
}
export interface CollaborationAllowlistExemptTarget {
    readonly id?: string;
    readonly type?: CollaborationAllowlistExemptTargetTypeField;
    readonly enterprise?: CollaborationAllowlistExemptTargetEnterpriseField;
    readonly user?: CollaborationAllowlistExemptTargetUserField;
    readonly createdAt?: string;
    readonly modifiedAt?: string;
}
export interface CollaborationAllowlistExemptTargets {
    readonly limit?: number;
    readonly nextMarker?: number;
    readonly prevMarker?: number;
    readonly entries?: readonly CollaborationAllowlistExemptTarget[];
}
export type CollectionTypeField = "collection";
export type CollectionNameField = "Favorites";
export type CollectionCollectionTypeField = "favorites";
export interface Collection {
    readonly id?: string;
    readonly type?: CollectionTypeField;
    readonly name?: CollectionNameField;
    readonly collectionType?: CollectionCollectionTypeField;
}
export type CollectionsOrderFieldDirectionField = "ASC" | "DESC";
export interface CollectionsOrderField {
    readonly by?: string;
    readonly direction?: CollectionsOrderFieldDirectionField;
}
export interface Collections {
    readonly totalCount?: number;
    readonly limit?: number;
    readonly offset?: number;
    readonly order?: readonly CollectionsOrderField[];
    readonly entries?: readonly Collection[];
}
export type CommentBaseTypeField = "comment";
export interface CommentBase {
    readonly id?: string;
    readonly type?: CommentBaseTypeField;
}
export type EmailAliasTypeField = "email_alias";
export interface EmailAlias {
    readonly id?: string;
    readonly type?: EmailAliasTypeField;
    readonly email?: string;
    readonly isConfirmed?: boolean;
}
export interface EmailAliases {
    readonly totalCount?: number;
    readonly entries?: readonly EmailAlias[];
}
export type EnterpriseBaseTypeField = "enterprise";
export interface EnterpriseBase {
    readonly id?: string;
    readonly type?: EnterpriseBaseTypeField;
}
export type FileBaseTypeField = "file";
export interface FileBase {
    readonly id: string;
    readonly etag?: string;
    readonly type: FileBaseTypeField;
}
export type FileVersionBaseTypeField = "file_version";
export interface FileVersionBase {
    readonly id: string;
    readonly type: FileVersionBaseTypeField;
}
export type FileVersionMini = FileVersionBase & {
    /**
     * The SHA1 hash of this version of the file. */
    readonly sha1?: string;
};
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
export type FileScopeScopeField = "annotation_edit" | "annotation_view_all" | "annotation_view_self" | "base_explorer" | "base_picker" | "base_preview" | "base_upload" | "item_delete" | "item_download" | "item_preview" | "item_rename" | "item_share";
export interface FileScope {
    readonly scope?: FileScopeScopeField;
    readonly object?: FileMini;
}
export type AccessTokenTokenTypeField = "bearer";
export type AccessTokenIssuedTokenTypeField = "urn:ietf:params:oauth:token-type:access_token";
export interface AccessToken {
    readonly accessToken?: string;
    readonly expiresIn?: number;
    readonly tokenType?: AccessTokenTokenTypeField;
    readonly restrictedTo?: readonly FileScope[];
    readonly refreshToken?: string;
    readonly issuedTokenType?: AccessTokenIssuedTokenTypeField;
}
export interface FilesUnderRetention {
    readonly limit?: number;
    readonly nextMarker?: number;
    readonly prevMarker?: number;
    readonly entries?: readonly FileMini[];
}
export type FileConflict = FileMini & {
    /**
     * The SHA1 hash of the file. */
    readonly sha1?: string;
    readonly fileVersion?: FileVersionMini;
};
export interface ConflictErrorContextInfoField {
    readonly conflicts?: readonly FileConflict[];
}
export type ConflictError = ClientError & {
    readonly contextInfo?: ConflictErrorContextInfoField;
};
export type FolderBaseTypeField = "folder";
export interface FolderBase {
    readonly id: string;
    readonly etag?: string;
    readonly type: FolderBaseTypeField;
}
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
export type IntegrationMappingBaseIntegrationTypeField = "slack";
export interface IntegrationMappingBase {
    readonly id?: string;
    readonly integrationType?: IntegrationMappingBaseIntegrationTypeField;
}
export type IntegrationMappingMiniPartnerItemTypeField = "channel";
export type IntegrationMappingMiniBoxItemTypeField = "folder";
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
export type GroupBaseTypeField = "group";
export interface GroupBase {
    readonly id?: string;
    readonly type?: GroupBaseTypeField;
}
export type GroupMiniGroupTypeField = "managed_group" | "all_users_group";
export type GroupMini = GroupBase & {
    /**
     * The name of the group */
    readonly name?: string;
    /**
     * The type of the group. */
    readonly groupType?: GroupMiniGroupTypeField;
};
export type GroupsOrderFieldDirectionField = "ASC" | "DESC";
export interface GroupsOrderField {
    readonly by?: string;
    readonly direction?: GroupsOrderFieldDirectionField;
}
export interface Groups {
    readonly totalCount?: number;
    readonly limit?: number;
    readonly offset?: number;
    readonly order?: readonly GroupsOrderField[];
    readonly entries?: readonly GroupMini[];
}
export type Group = GroupMini & {
    /**
     * When the group object was created */
    readonly createdAt?: string;
    /**
     * When the group object was last modified */
    readonly modifiedAt?: string;
};
export type GroupFullInvitabilityLevelField = "admins_only" | "admins_and_members" | "all_managed_users";
export type GroupFullMemberViewabilityLevelField = "admins_only" | "admins_and_members" | "all_managed_users";
export interface GroupFullPermissionsField {
    readonly canInviteAsCollaborator?: boolean;
}
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
export type LegalHoldPolicyMiniTypeField = "legal_hold_policy";
export interface LegalHoldPolicyMini {
    readonly id?: string;
    readonly type?: LegalHoldPolicyMiniTypeField;
}
export type LegalHoldPolicyAssignmentBaseTypeField = "legal_hold_policy_assignment";
export interface LegalHoldPolicyAssignmentBase {
    readonly id?: string;
    readonly type?: LegalHoldPolicyAssignmentBaseTypeField;
}
export interface LegalHoldPolicyAssignments {
    readonly limit?: number;
    readonly nextMarker?: number;
    readonly prevMarker?: number;
    readonly entries?: readonly LegalHoldPolicyAssignmentBase[];
}
export interface Metadata {
}
export interface Metadatas {
    readonly entries?: readonly Metadata[];
    readonly limit?: number;
}
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
export interface MetadataBase {
    readonly parent?: string;
    readonly template?: string;
    readonly scope?: string;
    readonly version?: number;
}
export type MetadataCascadePolicyTypeField = "metadata_cascade_policy";
export type MetadataCascadePolicyOwnerEnterpriseFieldTypeField = "enterprise";
export interface MetadataCascadePolicyOwnerEnterpriseField {
    readonly type?: MetadataCascadePolicyOwnerEnterpriseFieldTypeField;
    readonly id?: string;
}
export type MetadataCascadePolicyParentFieldTypeField = "folder";
export interface MetadataCascadePolicyParentField {
    readonly type?: MetadataCascadePolicyParentFieldTypeField;
    readonly id?: string;
}
export type MetadataCascadePolicyScopeField = "global" | "enterprise_*";
export interface MetadataCascadePolicy {
    readonly id?: string;
    readonly type?: MetadataCascadePolicyTypeField;
    readonly ownerEnterprise?: MetadataCascadePolicyOwnerEnterpriseField;
    readonly parent?: MetadataCascadePolicyParentField;
    readonly scope?: MetadataCascadePolicyScopeField;
    readonly templateKey?: string;
}
export interface MetadataCascadePolicies {
    readonly limit?: number;
    readonly nextMarker?: number;
    readonly prevMarker?: number;
    readonly entries?: readonly MetadataCascadePolicy[];
}
export type MetadataQueryIndexStatusField = "building" | "active" | "disabled";
export type MetadataQueryIndexFieldsFieldSortDirectionField = "asc" | "desc";
export interface MetadataQueryIndexFieldsField {
    readonly key?: string;
    readonly sortDirection?: MetadataQueryIndexFieldsFieldSortDirectionField;
}
export interface MetadataQueryIndex {
    readonly id?: string;
    readonly type: string;
    readonly status: MetadataQueryIndexStatusField;
    readonly fields?: readonly MetadataQueryIndexFieldsField[];
}
export interface MetadataQueryIndices {
    readonly entries?: readonly MetadataQueryIndex[];
    readonly limit?: number;
    readonly nextMarker?: string;
}
export type MetadataTemplateTypeField = "metadata_template";
export type MetadataTemplateFieldsFieldTypeField = "string" | "float" | "date" | "enum" | "multiSelect";
export interface MetadataTemplateFieldsFieldOptionsField {
    readonly key: string;
    readonly id?: string;
}
export interface MetadataTemplateFieldsField {
    readonly type: MetadataTemplateFieldsFieldTypeField;
    readonly key: string;
    readonly displayName: string;
    readonly description?: string;
    readonly hidden?: boolean;
    readonly options?: readonly MetadataTemplateFieldsFieldOptionsField[];
    readonly id?: string;
}
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
export interface MetadataTemplates {
    readonly limit?: number;
    readonly nextMarker?: number;
    readonly prevMarker?: number;
    readonly entries?: readonly MetadataTemplate[];
}
export interface RealtimeServer {
    readonly type?: string;
    readonly url?: string;
    readonly ttl?: number;
    readonly maxRetries?: number;
    readonly retryTimeout?: number;
}
export interface RealtimeServers {
    readonly chunkSize?: number;
    readonly entries?: readonly RealtimeServer[];
}
export type RetentionPolicyBaseTypeField = "retention_policy";
export interface RetentionPolicyBase {
    readonly id: string;
    readonly type: RetentionPolicyBaseTypeField;
}
export type RetentionPolicyMiniDispositionActionField = "permanently_delete" | "remove_retention";
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
export interface RetentionPolicies {
    readonly entries?: readonly RetentionPolicyMini[];
    readonly limit?: number;
    readonly nextMarker?: string;
}
export type FileVersionRetentionTypeField = "file_version_retention";
export interface FileVersionRetention {
    readonly id?: string;
    readonly type?: FileVersionRetentionTypeField;
    readonly fileVersion?: FileVersionMini;
    readonly file?: FileMini;
    readonly appliedAt?: string;
    readonly dispositionAt?: string;
    readonly winningRetentionPolicy?: RetentionPolicyMini;
}
export interface FileVersionRetentions {
    readonly limit?: number;
    readonly nextMarker?: number;
    readonly prevMarker?: number;
    readonly entries?: readonly FileVersionRetention[];
}
export type RetentionPolicyAssignmentBaseTypeField = "retention_policy_assignment";
export interface RetentionPolicyAssignmentBase {
    readonly id: string;
    readonly type: RetentionPolicyAssignmentBaseTypeField;
}
export interface RetentionPolicyAssignments {
    readonly entries?: readonly RetentionPolicyAssignmentBase[];
    readonly limit?: number;
    readonly nextMarker?: string;
}
export type ShieldInformationBarrierBaseTypeField = "shield_information_barrier";
export interface ShieldInformationBarrierBase {
    readonly id?: string;
    readonly type?: ShieldInformationBarrierBaseTypeField;
}
export interface ShieldInformationBarrierReference {
    readonly shieldInformationBarrier?: ShieldInformationBarrierBase;
}
export type ShieldInformationBarrierReportBaseTypeField = "shield_information_barrier_report";
export interface ShieldInformationBarrierReportBase {
    readonly id?: string;
    readonly type?: ShieldInformationBarrierReportBaseTypeField;
}
export type ShieldInformationBarrierSegmentMemberBaseTypeField = "shield_information_barrier_segment_member";
export interface ShieldInformationBarrierSegmentMemberBase {
    readonly id?: string;
    readonly type?: ShieldInformationBarrierSegmentMemberBaseTypeField;
}
export type ShieldInformationBarrierSegmentRestrictionBaseTypeField = "shield_information_barrier_segment_restriction";
export interface ShieldInformationBarrierSegmentRestrictionBase {
    readonly type?: ShieldInformationBarrierSegmentRestrictionBaseTypeField;
    readonly id?: string;
}
export type ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentFieldTypeField = "shield_information_barrier_segment";
export interface ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField {
    readonly id?: string;
    readonly type?: ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentFieldTypeField;
}
export type ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentFieldTypeField = "shield_information_barrier_segment";
export interface ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField {
    readonly id?: string;
    readonly type?: ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentFieldTypeField;
}
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
export interface SessionTerminationMessage {
    readonly message?: string;
}
export type StoragePolicyMiniTypeField = "storage_policy";
export interface StoragePolicyMini {
    readonly id?: string;
    readonly type?: StoragePolicyMiniTypeField;
}
export interface StoragePolicyAssignmentAssignedToField {
    readonly id?: string;
    readonly type?: string;
}
export interface StoragePolicyAssignment {
    readonly storagePolicy?: StoragePolicyMini;
    readonly assignedTo?: StoragePolicyAssignmentAssignedToField;
}
export interface StoragePolicyAssignments {
    readonly limit?: number;
    readonly nextMarker?: number;
    readonly prevMarker?: number;
    readonly entries?: readonly StoragePolicyAssignment[];
}
export type StoragePolicy = StoragePolicyMini & {
    /**
     * A descriptive name of the region */
    readonly name?: string;
};
export interface StoragePolicies {
    readonly limit?: number;
    readonly nextMarker?: number;
    readonly prevMarker?: number;
    readonly entries?: readonly StoragePolicy[];
}
export type TermsOfServiceBaseTypeField = "terms_of_service";
export interface TermsOfServiceBase {
    readonly id?: string;
    readonly type?: TermsOfServiceBaseTypeField;
}
export type TermsOfServiceStatusField = "enabled" | "disabled";
export type TermsOfServiceEnterpriseFieldTypeField = "enterprise";
export interface TermsOfServiceEnterpriseField {
    readonly id?: string;
    readonly type?: TermsOfServiceEnterpriseFieldTypeField;
    readonly name?: string;
}
export type TermsOfServiceTosTypeField = "managed" | "external";
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
export interface TermsOfServices {
    readonly totalCount?: number;
    readonly entries?: readonly TermsOfService[];
}
export interface SignTemplates {
    readonly limit?: number;
    readonly nextMarker?: string;
    readonly prevMarker?: string;
}
export interface UploadPartMini {
    readonly partId?: string;
    readonly offset?: number;
    readonly size?: number;
}
export type UploadPart = UploadPartMini & {
    /**
     * The SHA1 hash of the chunk. */
    readonly sha1?: string;
};
export type UploadPartsOrderFieldDirectionField = "ASC" | "DESC";
export interface UploadPartsOrderField {
    readonly by?: string;
    readonly direction?: UploadPartsOrderFieldDirectionField;
}
export interface UploadParts {
    readonly totalCount?: number;
    readonly limit?: number;
    readonly offset?: number;
    readonly order?: readonly UploadPartsOrderField[];
    readonly entries?: readonly UploadPart[];
}
export interface UploadedPart {
    readonly part?: UploadPart;
}
export type UploadSessionTypeField = "upload_session";
export interface UploadSessionSessionEndpointsField {
    readonly uploadPart?: string;
    readonly commit?: string;
    readonly abort?: string;
    readonly listParts?: string;
    readonly status?: string;
    readonly logEvent?: string;
}
export interface UploadSession {
    readonly id?: string;
    readonly type?: UploadSessionTypeField;
    readonly sessionExpiresAt?: string;
    readonly partSize?: number;
    readonly totalParts?: number;
    readonly numPartsProcessed?: number;
    readonly sessionEndpoints?: UploadSessionSessionEndpointsField;
}
export interface UploadUrl {
    readonly uploadUrl?: string;
    readonly uploadToken?: string;
}
export interface UserAvatarPicUrlsField {
    readonly small?: string;
    readonly large?: string;
    readonly preview?: string;
}
export interface UserAvatar {
    readonly picUrls?: UserAvatarPicUrlsField;
}
export type UserBaseTypeField = "user";
export interface UserBase {
    readonly id?: string;
    readonly type: UserBaseTypeField;
}
export type UserIntegrationMappings = UserBase & {
    /**
     * The display name of this user */
    readonly name?: string;
    /**
     * The primary email address of this user */
    readonly login?: string;
};
export type UserCollaborations = UserBase & {
    /**
     * The display name of this user. If the collaboration status is `pending`, an empty string is returned. */
    readonly name?: string;
    /**
     * The primary email address of this user. If the collaboration status is `pending`, an empty string is returned. */
    readonly login?: string;
};
export type UserMini = UserBase & {
    /**
     * The display name of this user */
    readonly name?: string;
    /**
     * The primary email address of this user */
    readonly login?: string;
};
export type EventSourceItemTypeField = "file" | "folder";
export interface EventSourceClassificationField {
    readonly name?: string;
}
export interface EventSource {
    readonly itemType: EventSourceItemTypeField;
    readonly itemId: string;
    readonly itemName: string;
    readonly classification?: EventSourceClassificationField;
    readonly parent?: FolderMini;
    readonly ownedBy?: UserMini;
}
export type UserStatusField = "active" | "inactive" | "cannot_delete_edit" | "cannot_delete_edit_upload";
export interface UserNotificationEmailField {
    readonly email?: string;
    readonly isConfirmed?: boolean;
}
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
export type UsersOrderFieldDirectionField = "ASC" | "DESC";
export interface UsersOrderField {
    readonly by?: string;
    readonly direction?: UsersOrderFieldDirectionField;
}
export interface Users {
    readonly totalCount?: number;
    readonly limit?: number;
    readonly offset?: number;
    readonly order?: readonly UsersOrderField[];
    readonly entries?: readonly User[];
}
export type TrashWebLinkRestoredTypeField = "web_link";
export interface TrashWebLinkRestoredPathCollectionField {
    readonly totalCount: number;
    readonly entries: readonly FolderMini[];
}
export type TrashWebLinkRestoredItemStatusField = "active" | "trashed" | "deleted";
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
export type TrashFolderRestoredTypeField = "folder";
export interface TrashFolderRestoredPathCollectionField {
    readonly totalCount: number;
    readonly entries: readonly FolderMini[];
}
export type TrashFolderRestoredItemStatusField = "active" | "trashed" | "deleted";
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
export type TrashFileRestoredTypeField = "file";
export interface TrashFileRestoredPathCollectionField {
    readonly totalCount: number;
    readonly entries: readonly FolderMini[];
}
export type TrashFileRestoredItemStatusField = "active" | "trashed" | "deleted";
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
export type TrashWebLinkTypeField = "web_link";
export type TrashWebLinkPathCollectionFieldEntriesFieldTypeField = "folder";
export interface TrashWebLinkPathCollectionFieldEntriesField {
    readonly type?: TrashWebLinkPathCollectionFieldEntriesFieldTypeField;
    readonly id?: string;
    readonly sequenceId?: string;
    readonly etag?: string;
    readonly name?: string;
}
export interface TrashWebLinkPathCollectionField {
    readonly totalCount: number;
    readonly entries: readonly TrashWebLinkPathCollectionFieldEntriesField[];
}
export type TrashWebLinkItemStatusField = "active" | "trashed" | "deleted";
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
export type TrashFolderTypeField = "folder";
export type TrashFolderPathCollectionFieldEntriesFieldTypeField = "folder";
export interface TrashFolderPathCollectionFieldEntriesField {
    readonly type?: TrashFolderPathCollectionFieldEntriesFieldTypeField;
    readonly id?: string;
    readonly sequenceId?: string;
    readonly etag?: string;
    readonly name?: string;
}
export interface TrashFolderPathCollectionField {
    readonly totalCount: number;
    readonly entries: readonly TrashFolderPathCollectionFieldEntriesField[];
}
export type TrashFolderItemStatusField = "active" | "trashed" | "deleted";
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
export type TrashFileTypeField = "file";
export type TrashFilePathCollectionFieldEntriesFieldTypeField = "folder";
export interface TrashFilePathCollectionFieldEntriesField {
    readonly type?: TrashFilePathCollectionFieldEntriesFieldTypeField;
    readonly id?: string;
    readonly sequenceId?: string;
    readonly etag?: string;
    readonly name?: string;
}
export interface TrashFilePathCollectionField {
    readonly totalCount: number;
    readonly entries: readonly TrashFilePathCollectionFieldEntriesField[];
}
export type TrashFileItemStatusField = "active" | "trashed" | "deleted";
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
export type TermsOfServiceUserStatusTypeField = "terms_of_service_user_status";
export interface TermsOfServiceUserStatus {
    readonly id?: string;
    readonly type?: TermsOfServiceUserStatusTypeField;
    readonly tos?: TermsOfServiceBase;
    readonly user?: UserMini;
    readonly isAccepted?: boolean;
    readonly createdAt?: string;
    readonly modifiedAt?: string;
}
export interface TermsOfServiceUserStatuses {
    readonly totalCount?: number;
    readonly entries?: readonly TermsOfServiceUserStatus[];
}
export type TaskAssignmentTypeField = "task_assignment";
export type TaskAssignmentResolutionStateField = "completed" | "incomplete" | "approved" | "rejected";
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
export interface TaskAssignments {
    readonly totalCount?: number;
    readonly entries?: readonly TaskAssignment[];
}
export type TaskTypeField = "task";
export type TaskActionField = "review" | "complete";
export type TaskCompletionRuleField = "all_assignees" | "any_assignee";
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
export interface Tasks {
    readonly totalCount?: number;
    readonly entries?: readonly Task[];
}
export type RetentionPolicyAssignmentTypeField = "retention_policy_assignment";
export type RetentionPolicyAssignmentAssignedToFieldTypeField = "folder" | "enterprise" | "metadata_template";
export interface RetentionPolicyAssignmentAssignedToField {
    readonly id?: string;
    readonly type?: RetentionPolicyAssignmentAssignedToFieldTypeField;
}
export interface RetentionPolicyAssignmentFilterFieldsField {
    readonly field?: string;
    readonly value?: string;
}
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
export type RetentionPolicyPolicyTypeField = "finite" | "indefinite";
export type RetentionPolicyRetentionTypeField = "modifiable" | "non-modifiable";
export type RetentionPolicyStatusField = "active" | "retired";
export interface RetentionPolicyAssignmentCountsField {
    readonly enterprise?: number;
    readonly folder?: number;
    readonly metadataTemplate?: number;
}
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
export type LegalHoldPolicyStatusField = "active" | "applying" | "releasing" | "released";
export interface LegalHoldPolicyAssignmentCountsField {
    readonly user?: number;
    readonly folder?: number;
    readonly file?: number;
    readonly fileVersion?: number;
}
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
export interface LegalHoldPolicies {
    readonly limit?: number;
    readonly nextMarker?: number;
    readonly prevMarker?: number;
    readonly entries?: readonly LegalHoldPolicy[];
}
export type InviteTypeField = "invite";
export type InviteInvitedToFieldTypeField = "enterprise";
export interface InviteInvitedToField {
    readonly id?: string;
    readonly type?: InviteInvitedToFieldTypeField;
    readonly name?: string;
}
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
export type GroupMembershipTypeField = "group_membership";
export type GroupMembershipRoleField = "member" | "admin";
export interface GroupMembership {
    readonly id?: string;
    readonly type?: GroupMembershipTypeField;
    readonly user?: UserMini;
    readonly group?: GroupMini;
    readonly role?: GroupMembershipRoleField;
    readonly createdAt?: string;
    readonly modifiedAt?: string;
}
export type GroupMembershipsOrderFieldDirectionField = "ASC" | "DESC";
export interface GroupMembershipsOrderField {
    readonly by?: string;
    readonly direction?: GroupMembershipsOrderFieldDirectionField;
}
export interface GroupMemberships {
    readonly totalCount?: number;
    readonly limit?: number;
    readonly offset?: number;
    readonly order?: readonly GroupMembershipsOrderField[];
    readonly entries?: readonly GroupMembership[];
}
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
export type FileVersionsOrderFieldDirectionField = "ASC" | "DESC";
export interface FileVersionsOrderField {
    readonly by?: string;
    readonly direction?: FileVersionsOrderFieldDirectionField;
}
export interface FileVersions {
    readonly totalCount?: number;
    readonly limit?: number;
    readonly offset?: number;
    readonly order?: readonly FileVersionsOrderField[];
    readonly entries?: readonly FileVersion[];
}
export type FileVersionFull = FileVersion & {
    /**
     * The version number of this file version */
    readonly versionNumber?: string;
};
export type FileRequestTypeField = "file_request";
export type FileRequestStatusField = "active" | "inactive";
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
export interface FilePathCollectionField {
    readonly totalCount: number;
    readonly entries: readonly FolderMini[];
}
export type FileSharedLinkFieldAccessField = "open" | "company" | "collaborators";
export type FileSharedLinkFieldEffectiveAccessField = "open" | "company" | "collaborators";
export type FileSharedLinkFieldEffectivePermissionField = "can_edit" | "can_download" | "can_preview" | "no_access";
export interface FileSharedLinkFieldPermissionsField {
    readonly canDownload: boolean;
    readonly canPreview: boolean;
    readonly canEdit: boolean;
}
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
export type FileItemStatusField = "active" | "trashed" | "deleted";
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
export type FileFullLockFieldTypeField = "lock";
export type FileFullLockFieldAppTypeField = "gsuite" | "office_wopi" | "office_wopiplus" | "other";
export interface FileFullLockField {
    readonly id?: string;
    readonly type?: FileFullLockFieldTypeField;
    readonly createdBy?: UserMini;
    readonly createdAt?: string;
    readonly expiredAt?: string;
    readonly isDownloadPrevented?: boolean;
    readonly appType?: FileFullLockFieldAppTypeField;
}
export type FileFullExpiringEmbedLinkFieldTokenTypeField = "bearer";
export interface FileFullExpiringEmbedLinkField {
    readonly accessToken?: string;
    readonly expiresIn?: number;
    readonly tokenType?: FileFullExpiringEmbedLinkFieldTokenTypeField;
    readonly restrictedTo?: readonly FileScope[];
    readonly url?: string;
}
export interface FileFullWatermarkInfoField {
    readonly isWatermarked?: boolean;
}
export type FileFullAllowedInviteeRolesField = "editor" | "viewer" | "previewer" | "uploader" | "previewer uploader" | "viewer uploader" | "co-owner";
export interface FileFullMetadataField {
}
export interface FileFullRepresentationsFieldEntriesFieldContentField {
    readonly urlTemplate?: string;
}
export interface FileFullRepresentationsFieldEntriesFieldInfoField {
    readonly url?: string;
}
export interface FileFullRepresentationsFieldEntriesFieldPropertiesField {
    readonly dimensions?: string;
    readonly paged?: boolean;
    readonly thumb?: boolean;
}
export type FileFullRepresentationsFieldEntriesFieldStatusFieldStateField = "success" | "viewable" | "pending" | "none";
export interface FileFullRepresentationsFieldEntriesFieldStatusField {
    readonly state?: FileFullRepresentationsFieldEntriesFieldStatusFieldStateField;
}
export interface FileFullRepresentationsFieldEntriesField {
    readonly content?: FileFullRepresentationsFieldEntriesFieldContentField;
    readonly info?: FileFullRepresentationsFieldEntriesFieldInfoField;
    readonly properties?: FileFullRepresentationsFieldEntriesFieldPropertiesField;
    readonly representation?: string;
    readonly status?: FileFullRepresentationsFieldEntriesFieldStatusField;
}
export interface FileFullRepresentationsField {
    readonly entries?: readonly FileFullRepresentationsFieldEntriesField[];
}
export interface FileFullClassificationField {
    readonly name?: string;
    readonly definition?: string;
    readonly color?: string;
}
export type FileFullSharedLinkPermissionOptionsField = "can_preview" | "can_download" | "can_edit";
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
export interface Files {
    readonly totalCount?: number;
    readonly entries?: readonly File[];
}
export type DevicePinnerTypeField = "device_pinner";
export interface DevicePinner {
    readonly id?: string;
    readonly type?: DevicePinnerTypeField;
    readonly ownedBy?: UserMini;
    readonly productName?: string;
}
export type DevicePinnersOrderFieldByField = "id";
export type DevicePinnersOrderFieldDirectionField = "asc" | "desc";
export interface DevicePinnersOrderField {
    readonly by?: DevicePinnersOrderFieldByField;
    readonly direction?: DevicePinnersOrderFieldDirectionField;
}
export interface DevicePinners {
    readonly entries?: readonly DevicePinner[];
    readonly limit?: number;
    readonly nextMarker?: number;
    readonly order?: readonly DevicePinnersOrderField[];
}
export interface CommentItemField {
    readonly id?: string;
    readonly type?: string;
}
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
export type CommentFull = Comment & {
    /**
     * The string representing the comment text with
     * @mentions included. @mention format is @[id:username]
     * where `id` is user's Box ID and `username` is
     * their display name. */
    readonly taggedMessage?: string;
};
export type CommentsOrderFieldDirectionField = "ASC" | "DESC";
export interface CommentsOrderField {
    readonly by?: string;
    readonly direction?: CommentsOrderFieldDirectionField;
}
export interface Comments {
    readonly totalCount?: number;
    readonly limit?: number;
    readonly offset?: number;
    readonly order?: readonly CommentsOrderField[];
    readonly entries?: readonly Comment[];
}
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
export type ShieldInformationBarrierSegmentMemberMini = ShieldInformationBarrierSegmentMemberBase & {
    readonly user?: UserBase;
};
export type ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentFieldTypeField = "shield_information_barrier_segment";
export interface ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField {
    readonly id?: string;
    readonly type?: ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentFieldTypeField;
}
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
export type ShieldInformationBarrierSegmentTypeField = "shield_information_barrier_segment";
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
export interface ShieldInformationBarrierReportShieldInformationBarrierField {
}
export type ShieldInformationBarrierReportStatusField = "pending" | "error" | "done" | "cancelled";
export interface ShieldInformationBarrierReportDetailsField {
}
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
export type ShieldInformationBarrierTypeField = "shield_information_barrier";
export type ShieldInformationBarrierStatusField = "draft" | "pending" | "disabled" | "enabled" | "invalid";
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
export interface FolderLockLockedOperationsField {
    readonly move: boolean;
    readonly delete: boolean;
}
export interface FolderLock {
    readonly folder?: FolderMini;
    readonly id?: string;
    readonly type?: string;
    readonly createdBy?: UserBase;
    readonly createdAt?: string;
    readonly lockedOperations?: FolderLockLockedOperationsField;
    readonly lockType?: string;
}
export interface FolderLocks {
    readonly limit?: number;
    readonly nextMarker?: number;
    readonly prevMarker?: number;
    readonly entries?: readonly FolderLock[];
}
export interface WatermarkWatermarkField {
    readonly createdAt?: string;
    readonly modifiedAt?: string;
}
export interface Watermark {
    readonly watermark?: WatermarkWatermarkField;
}
export type WebhookMiniTypeField = "webhook";
export type WebhookMiniTargetFieldTypeField = "file" | "folder";
export interface WebhookMiniTargetField {
    readonly id?: string;
    readonly type?: WebhookMiniTargetFieldTypeField;
}
export interface WebhookMini {
    readonly id?: string;
    readonly type?: WebhookMiniTypeField;
    readonly target?: WebhookMiniTargetField;
}
export interface Webhooks {
    readonly limit?: number;
    readonly nextMarker?: number;
    readonly prevMarker?: number;
    readonly entries?: readonly WebhookMini[];
}
export type WebhookTriggersField = "FILE.UPLOADED" | "FILE.PREVIEWED" | "FILE.DOWNLOADED" | "FILE.TRASHED" | "FILE.DELETED" | "FILE.RESTORED" | "FILE.COPIED" | "FILE.MOVED" | "FILE.LOCKED" | "FILE.UNLOCKED" | "FILE.RENAMED" | "COMMENT.CREATED" | "COMMENT.UPDATED" | "COMMENT.DELETED" | "TASK_ASSIGNMENT.CREATED" | "TASK_ASSIGNMENT.UPDATED" | "METADATA_INSTANCE.CREATED" | "METADATA_INSTANCE.UPDATED" | "METADATA_INSTANCE.DELETED" | "FOLDER.CREATED" | "FOLDER.RENAMED" | "FOLDER.DOWNLOADED" | "FOLDER.RESTORED" | "FOLDER.DELETED" | "FOLDER.COPIED" | "FOLDER.MOVED" | "FOLDER.TRASHED" | "WEBHOOK.DELETED" | "COLLABORATION.CREATED" | "COLLABORATION.ACCEPTED" | "COLLABORATION.REJECTED" | "COLLABORATION.REMOVED" | "COLLABORATION.UPDATED" | "SHARED_LINK.DELETED" | "SHARED_LINK.CREATED" | "SHARED_LINK.UPDATED" | "SIGN_REQUEST.COMPLETED" | "SIGN_REQUEST.DECLINED" | "SIGN_REQUEST.EXPIRED" | "SIGN_REQUEST.SIGNER_EMAIL_BOUNCED";
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
export type WebLinkBaseTypeField = "web_link";
export interface WebLinkBase {
    readonly id: string;
    readonly type: WebLinkBaseTypeField;
    readonly etag?: string;
}
export type WebLinkMini = WebLinkBase & {
    /**
     * The URL this web link points to */
    readonly url?: string;
    readonly sequenceId?: string;
    /**
     * The name of the web link */
    readonly name?: string;
};
export type FileMiniOrFolderMiniOrWebLinkMini = FileMini | FolderMini | WebLinkMini;
export type ItemsOrderFieldDirectionField = "ASC" | "DESC";
export interface ItemsOrderField {
    readonly by?: string;
    readonly direction?: ItemsOrderFieldDirectionField;
}
export interface Items {
    readonly totalCount?: number;
    readonly limit?: number;
    readonly offset?: number;
    readonly order?: readonly ItemsOrderField[];
    readonly entries?: readonly FileMiniOrFolderMiniOrWebLinkMini[];
}
export interface FolderPathCollectionField {
    readonly totalCount: number;
    readonly entries: readonly FolderMini[];
}
export type FolderSharedLinkFieldAccessField = "open" | "company" | "collaborators";
export type FolderSharedLinkFieldEffectiveAccessField = "open" | "company" | "collaborators";
export type FolderSharedLinkFieldEffectivePermissionField = "can_edit" | "can_download" | "can_preview" | "no_access";
export interface FolderSharedLinkFieldPermissionsField {
    readonly canDownload: boolean;
    readonly canPreview: boolean;
    readonly canEdit: boolean;
}
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
export type FolderFolderUploadEmailFieldAccessField = "open" | "collaborators";
export interface FolderFolderUploadEmailField {
    readonly access?: FolderFolderUploadEmailFieldAccessField;
    readonly email?: string;
}
export type FolderItemStatusField = "active" | "trashed" | "deleted";
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
export type EventSourceOrFileOrFolderOrUser = EventSource | File | Folder | User;
export type EventEventTypeField = "ACCESS_GRANTED" | "ACCESS_REVOKED" | "ADD_DEVICE_ASSOCIATION" | "ADD_LOGIN_ACTIVITY_DEVICE" | "ADMIN_LOGIN" | "APPLICATION_CREATED" | "APPLICATION_PUBLIC_KEY_ADDED" | "APPLICATION_PUBLIC_KEY_DELETED" | "CHANGE_ADMIN_ROLE" | "CHANGE_FOLDER_PERMISSION" | "COLLABORATION_ACCEPT" | "COLLABORATION_EXPIRATION" | "COLLABORATION_INVITE" | "COLLABORATION_REMOVE" | "COLLABORATION_ROLE_CHANGE" | "COLLAB_ADD_COLLABORATOR" | "COLLAB_INVITE_COLLABORATOR" | "COLLAB_REMOVE_COLLABORATOR" | "COLLAB_ROLE_CHANGE" | "COMMENT_CREATE" | "COMMENT_DELETE" | "CONTENT_ACCESS" | "CONTENT_WORKFLOW_ABNORMAL_DOWNLOAD_ACTIVITY" | "CONTENT_WORKFLOW_AUTOMATION_ADD" | "CONTENT_WORKFLOW_AUTOMATION_DELETE" | "CONTENT_WORKFLOW_POLICY_ADD" | "CONTENT_WORKFLOW_SHARING_POLICY_VIOLATION" | "CONTENT_WORKFLOW_UPLOAD_POLICY_VIOLATION" | "COPY" | "DATA_RETENTION_CREATE_RETENTION" | "DATA_RETENTION_REMOVE_RETENTION" | "DELETE" | "DELETE_USER" | "DEVICE_TRUST_CHECK_FAILED" | "DOWNLOAD" | "EDIT" | "EDIT_USER" | "EMAIL_ALIAS_CONFIRM" | "EMAIL_ALIAS_REMOVE" | "ENABLE_TWO_FACTOR_AUTH" | "ENTERPRISE_APP_AUTHORIZATION_UPDATE" | "FAILED_LOGIN" | "FILE_MARKED_MALICIOUS" | "FILE_WATERMARKED_DOWNLOAD" | "GROUP_ADD_ITEM" | "GROUP_ADD_USER" | "GROUP_CREATION" | "GROUP_DELETION" | "GROUP_EDITED" | "GROUP_REMOVE_ITEM" | "GROUP_REMOVE_USER" | "ITEM_COPY" | "ITEM_CREATE" | "ITEM_DOWNLOAD" | "ITEM_MAKE_CURRENT_VERSION" | "ITEM_MODIFY" | "ITEM_MOVE" | "ITEM_OPEN" | "ITEM_PREVIEW" | "ITEM_RENAME" | "ITEM_SHARED" | "ITEM_SHARED_CREATE" | "ITEM_SHARED_UNSHARE" | "ITEM_SHARED_UPDATE" | "ITEM_SYNC" | "ITEM_TRASH" | "ITEM_UNDELETE_VIA_TRASH" | "ITEM_UNSYNC" | "ITEM_UPLOAD" | "LEGAL_HOLD_ASSIGNMENT_CREATE" | "LEGAL_HOLD_ASSIGNMENT_DELETE" | "LEGAL_HOLD_POLICY_CREATE" | "LEGAL_HOLD_POLICY_DELETE" | "LEGAL_HOLD_POLICY_UPDATE" | "LOCK" | "LOCK_CREATE" | "LOCK_DESTROY" | "LOGIN" | "MASTER_INVITE_ACCEPT" | "MASTER_INVITE_REJECT" | "METADATA_INSTANCE_CREATE" | "METADATA_INSTANCE_DELETE" | "METADATA_INSTANCE_UPDATE" | "METADATA_TEMPLATE_CREATE" | "METADATA_TEMPLATE_DELETE" | "METADATA_TEMPLATE_UPDATE" | "MOVE" | "NEW_USER" | "PREVIEW" | "REMOVE_DEVICE_ASSOCIATION" | "REMOVE_LOGIN_ACTIVITY_DEVICE" | "RENAME" | "RETENTION_POLICY_ASSIGNMENT_ADD" | "SHARE" | "SHARE_EXPIRATION" | "SHIELD_ALERT" | "SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED" | "SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED_MISSING_JUSTIFICATION" | "SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED" | "SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED_MISSING_JUSTIFICATION" | "SHIELD_JUSTIFICATION_APPROVAL" | "SHIELD_SHARED_LINK_ACCESS_BLOCKED" | "SHIELD_SHARED_LINK_STATUS_RESTRICTED_ON_CREATE" | "SHIELD_SHARED_LINK_STATUS_RESTRICTED_ON_UPDATE" | "SIGN_DOCUMENT_ASSIGNED" | "SIGN_DOCUMENT_CANCELLED" | "SIGN_DOCUMENT_COMPLETED" | "SIGN_DOCUMENT_CONVERTED" | "SIGN_DOCUMENT_CREATED" | "SIGN_DOCUMENT_DECLINED" | "SIGN_DOCUMENT_EXPIRED" | "SIGN_DOCUMENT_SIGNED" | "SIGN_DOCUMENT_VIEWED_BY_SIGNED" | "SIGNER_DOWNLOADED" | "SIGNER_FORWARDED" | "STORAGE_EXPIRATION" | "TAG_ITEM_CREATE" | "TASK_ASSIGNMENT_CREATE" | "TASK_ASSIGNMENT_DELETE" | "TASK_ASSIGNMENT_UPDATE" | "TASK_CREATE" | "TASK_UPDATE" | "TERMS_OF_SERVICE_ACCEPT" | "TERMS_OF_SERVICE_REJECT" | "UNDELETE" | "UNLOCK" | "UNSHARE" | "UPDATE_COLLABORATION_EXPIRATION" | "UPDATE_SHARE_EXPIRATION" | "UPLOAD" | "USER_AUTHENTICATE_OAUTH2_ACCESS_TOKEN_CREATE" | "WATERMARK_LABEL_CREATE" | "WATERMARK_LABEL_DELETE";
export interface EventAdditionalDetailsField {
}
export interface Event {
    readonly type?: string;
    readonly createdAt?: string;
    readonly recordedAt?: string;
    readonly eventId?: string;
    readonly createdBy?: UserMini;
    readonly eventType?: EventEventTypeField;
    readonly sessionId?: string;
    readonly source?: EventSourceOrFileOrFolderOrUser;
    readonly additionalDetails?: EventAdditionalDetailsField;
}
export interface Events {
    readonly chunkSize?: number;
    readonly nextStreamPosition?: string;
    readonly entries?: readonly Event[];
}
export type FileOrFolder = File | Folder;
export interface MetadataQueryResults {
    readonly entries?: readonly FileOrFolder[];
    readonly limit?: number;
    readonly nextMarker?: string;
}
export type WebhookInvocationTypeField = "webhook_event";
export type WebhookInvocationTriggerField = "FILE.UPLOADED" | "FILE.PREVIEWED" | "FILE.DOWNLOADED" | "FILE.TRASHED" | "FILE.DELETED" | "FILE.RESTORED" | "FILE.COPIED" | "FILE.MOVED" | "FILE.LOCKED" | "FILE.UNLOCKED" | "FILE.RENAMED" | "COMMENT.CREATED" | "COMMENT.UPDATED" | "COMMENT.DELETED" | "TASK_ASSIGNMENT.CREATED" | "TASK_ASSIGNMENT.UPDATED" | "METADATA_INSTANCE.CREATED" | "METADATA_INSTANCE.UPDATED" | "METADATA_INSTANCE.DELETED" | "FOLDER.CREATED" | "FOLDER.RENAMED" | "FOLDER.DOWNLOADED" | "FOLDER.RESTORED" | "FOLDER.DELETED" | "FOLDER.COPIED" | "FOLDER.MOVED" | "FOLDER.TRASHED" | "WEBHOOK.DELETED" | "COLLABORATION.CREATED" | "COLLABORATION.ACCEPTED" | "COLLABORATION.REJECTED" | "COLLABORATION.REMOVED" | "COLLABORATION.UPDATED" | "SHARED_LINK.DELETED" | "SHARED_LINK.CREATED" | "SHARED_LINK.UPDATED" | "SIGN_REQUEST.COMPLETED" | "SIGN_REQUEST.DECLINED" | "SIGN_REQUEST.EXPIRED" | "SIGN_REQUEST.SIGNER_EMAIL_BOUNCED";
export interface WebhookInvocation {
    readonly id?: string;
    readonly type?: WebhookInvocationTypeField;
    readonly webhook?: Webhook;
    readonly createdBy?: UserMini;
    readonly createdAt?: string;
    readonly trigger?: WebhookInvocationTriggerField;
    readonly source?: FileOrFolder;
}
export type SkillInvocationTypeField = "skill_invocation";
export type SkillInvocationSkillFieldTypeField = "skill";
export interface SkillInvocationSkillField {
    readonly id?: string;
    readonly type?: SkillInvocationSkillFieldTypeField;
    readonly name?: string;
    readonly apiKey?: string;
}
export type SkillInvocationTokenFieldReadFieldTokenTypeField = "bearer";
export interface SkillInvocationTokenFieldReadField {
    readonly accessToken?: string;
    readonly expiresIn?: number;
    readonly tokenType?: SkillInvocationTokenFieldReadFieldTokenTypeField;
    readonly restrictedTo?: string;
}
export type SkillInvocationTokenFieldWriteFieldTokenTypeField = "bearer";
export interface SkillInvocationTokenFieldWriteField {
    readonly accessToken?: string;
    readonly expiresIn?: number;
    readonly tokenType?: SkillInvocationTokenFieldWriteFieldTokenTypeField;
    readonly restrictedTo?: string;
}
export interface SkillInvocationTokenField {
    readonly read?: SkillInvocationTokenFieldReadField;
    readonly write?: SkillInvocationTokenFieldWriteField;
}
export type SkillInvocationStatusFieldStateField = "invoked" | "processing" | "success" | "transient_failure" | "permanent_failure";
export interface SkillInvocationStatusField {
    readonly state?: SkillInvocationStatusFieldStateField;
    readonly message?: string;
    readonly errorCode?: string;
    readonly additionalInfo?: string;
}
export type SkillInvocationEnterpriseFieldTypeField = "enterprise";
export interface SkillInvocationEnterpriseField {
    readonly id?: string;
    readonly type?: SkillInvocationEnterpriseFieldTypeField;
    readonly name?: string;
}
export interface SkillInvocation {
    readonly type?: SkillInvocationTypeField;
    readonly id?: string;
    readonly skill?: SkillInvocationSkillField;
    readonly token?: SkillInvocationTokenField;
    readonly status?: SkillInvocationStatusField;
    readonly createdAt?: string;
    readonly trigger?: string;
    readonly enterprise?: SkillInvocationEnterpriseField;
    readonly source?: FileOrFolder;
    readonly event?: Event;
}
export type FolderFullSyncStateField = "synced" | "not_synced" | "partially_synced";
export interface FolderFullPermissionsField {
    readonly canDelete: boolean;
    readonly canDownload: boolean;
    readonly canInviteCollaborator: boolean;
    readonly canRename: boolean;
    readonly canSetShareAccess: boolean;
    readonly canShare: boolean;
    readonly canUpload?: boolean;
}
export interface FolderFullMetadataField {
}
export type FolderFullAllowedSharedLinkAccessLevelsField = "open" | "company" | "collaborators";
export type FolderFullAllowedInviteeRolesField = "editor" | "viewer" | "previewer" | "uploader" | "previewer uploader" | "viewer uploader" | "co-owner";
export interface FolderFullWatermarkInfoField {
    readonly isWatermarked?: boolean;
}
export interface FolderFullClassificationField {
    readonly name?: string;
    readonly definition?: string;
    readonly color?: string;
}
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
export interface WebLinkPathCollectionField {
    readonly totalCount: number;
    readonly entries: readonly FolderMini[];
}
export type WebLinkSharedLinkFieldAccessField = "open" | "company" | "collaborators";
export type WebLinkSharedLinkFieldEffectiveAccessField = "open" | "company" | "collaborators";
export type WebLinkSharedLinkFieldEffectivePermissionField = "can_edit" | "can_download" | "can_preview" | "no_access";
export interface WebLinkSharedLinkFieldPermissionsField {
    readonly canDownload: boolean;
    readonly canPreview: boolean;
    readonly canEdit: boolean;
}
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
export type WebLinkItemStatusField = "active" | "trashed" | "deleted";
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
export type FileOrFolderOrWebLink = File | Folder | WebLink;
export interface SearchResultWithSharedLink {
    readonly accessibleViaSharedLink?: string;
    readonly item?: FileOrFolderOrWebLink;
    readonly type?: string;
}
export interface SearchResultsWithSharedLinks {
    readonly totalCount?: number;
    readonly limit?: number;
    readonly offset?: number;
    readonly entries?: readonly SearchResultWithSharedLink[];
}
export interface SearchResults {
    readonly totalCount?: number;
    readonly limit?: number;
    readonly offset?: number;
    readonly entries?: readonly FileOrFolderOrWebLink[];
}
export type SearchResultsOrSearchResultsWithSharedLinks = SearchResults | SearchResultsWithSharedLinks;
export type RecentItemInteractionTypeField = "item_preview" | "item_upload" | "item_comment" | "item_open" | "item_modify";
export interface RecentItem {
    readonly type?: string;
    readonly item?: FileOrFolderOrWebLink;
    readonly interactionType?: RecentItemInteractionTypeField;
    readonly interactedAt?: string;
    readonly interactionSharedLink?: string;
}
export interface RecentItems {
    readonly limit?: number;
    readonly nextMarker?: number;
    readonly prevMarker?: number;
    readonly entries?: readonly RecentItem[];
}
export type LegalHoldPolicyAssignment = LegalHoldPolicyAssignmentBase & {
    readonly legalHoldPolicy?: LegalHoldPolicyMini;
    readonly assignedTo?: FileOrFolderOrWebLink;
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
export type FileVersionLegalHoldTypeField = "file_version_legal_hold";
export interface FileVersionLegalHold {
    readonly id?: string;
    readonly type?: FileVersionLegalHoldTypeField;
    readonly fileVersion?: FileVersionMini;
    readonly file?: FileMini;
    readonly legalHoldPolicyAssignments?: readonly LegalHoldPolicyAssignment[];
    readonly deletedAt?: string;
}
export interface FileVersionLegalHolds {
    readonly limit?: number;
    readonly nextMarker?: number;
    readonly prevMarker?: number;
    readonly entries?: readonly FileVersionLegalHold[];
}
export type CollaborationTypeField = "collaboration";
export type CollaborationRoleField = "editor" | "viewer" | "previewer" | "uploader" | "previewer uploader" | "viewer uploader" | "co-owner" | "owner";
export type CollaborationStatusField = "accepted" | "pending" | "rejected";
export interface CollaborationAcceptanceRequirementsStatusFieldTermsOfServiceRequirementField {
    readonly isAccepted?: boolean;
    readonly termsOfService?: TermsOfServiceBase;
}
export interface CollaborationAcceptanceRequirementsStatusFieldStrongPasswordRequirementField {
    readonly enterpriseHasStrongPasswordRequiredForExternalUsers?: boolean;
    readonly userHasStrongPassword?: boolean;
}
export interface CollaborationAcceptanceRequirementsStatusFieldTwoFactorAuthenticationRequirementField {
    readonly enterpriseHasTwoFactorAuthEnabled?: boolean;
    readonly userHasTwoFactorAuthenticationEnabled?: boolean;
}
export interface CollaborationAcceptanceRequirementsStatusField {
    readonly termsOfServiceRequirement?: CollaborationAcceptanceRequirementsStatusFieldTermsOfServiceRequirementField;
    readonly strongPasswordRequirement?: CollaborationAcceptanceRequirementsStatusFieldStrongPasswordRequirementField;
    readonly twoFactorAuthenticationRequirement?: CollaborationAcceptanceRequirementsStatusFieldTwoFactorAuthenticationRequirementField;
}
export interface Collaboration {
    readonly id?: string;
    readonly type?: CollaborationTypeField;
    readonly item?: FileOrFolderOrWebLink;
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
export type CollaborationsOrderFieldDirectionField = "ASC" | "DESC";
export interface CollaborationsOrderField {
    readonly by?: string;
    readonly direction?: CollaborationsOrderFieldDirectionField;
}
export interface Collaborations {
    readonly totalCount?: number;
    readonly limit?: number;
    readonly offset?: number;
    readonly order?: readonly CollaborationsOrderField[];
    readonly entries?: readonly Collaboration[];
}
export type WorkflowMiniTypeField = "workflow";
export interface WorkflowMini {
    readonly id?: string;
    readonly type?: WorkflowMiniTypeField;
    readonly name?: string;
    readonly description?: string;
    readonly isEnabled?: boolean;
}
export type WorkflowFlowsFieldTypeField = "flow";
export type WorkflowFlowsFieldTriggerFieldTypeField = "trigger";
export type WorkflowFlowsFieldTriggerFieldTriggerTypeField = "WORKFLOW_MANUAL_START";
export type WorkflowFlowsFieldTriggerFieldScopeFieldTypeField = "trigger_scope";
export type WorkflowFlowsFieldTriggerFieldScopeFieldObjectFieldTypeField = "folder";
export interface WorkflowFlowsFieldTriggerFieldScopeFieldObjectField {
    readonly type?: WorkflowFlowsFieldTriggerFieldScopeFieldObjectFieldTypeField;
    readonly id?: string;
}
export interface WorkflowFlowsFieldTriggerFieldScopeField {
    readonly type?: WorkflowFlowsFieldTriggerFieldScopeFieldTypeField;
    readonly ref?: string;
    readonly object?: WorkflowFlowsFieldTriggerFieldScopeFieldObjectField;
}
export interface WorkflowFlowsFieldTriggerField {
    readonly type?: WorkflowFlowsFieldTriggerFieldTypeField;
    readonly triggerType?: WorkflowFlowsFieldTriggerFieldTriggerTypeField;
    readonly scope?: readonly WorkflowFlowsFieldTriggerFieldScopeField[];
}
export type WorkflowFlowsFieldOutcomesFieldTypeField = "outcome";
export type WorkflowFlowsFieldOutcomesFieldActionTypeField = "add_metadata" | "assign_task" | "copy_file" | "copy_folder" | "create_folder" | "delete_file" | "delete_folder" | "lock_file" | "move_file" | "move_folder" | "remove_watermark_file" | "rename_folder" | "restore_folder" | "share_file" | "share_folder" | "unlock_file" | "upload_file" | "wait_for_task" | "watermark_file" | "go_back_to_step" | "apply_file_classification" | "apply_folder_classification" | "send_notification";
export type WorkflowFlowsFieldOutcomesFieldIfRejectedFieldTypeField = "outcome";
export type WorkflowFlowsFieldOutcomesFieldIfRejectedFieldActionTypeField = "add_metadata" | "assign_task" | "copy_file" | "copy_folder" | "create_folder" | "delete_file" | "delete_folder" | "lock_file" | "move_file" | "move_folder" | "remove_watermark_file" | "rename_folder" | "restore_folder" | "share_file" | "share_folder" | "unlock_file" | "upload_file" | "wait_for_task" | "watermark_file" | "go_back_to_step" | "apply_file_classification" | "apply_folder_classification" | "send_notification";
export interface WorkflowFlowsFieldOutcomesFieldIfRejectedField {
    readonly id?: string;
    readonly type?: WorkflowFlowsFieldOutcomesFieldIfRejectedFieldTypeField;
    readonly name?: string;
    readonly actionType?: WorkflowFlowsFieldOutcomesFieldIfRejectedFieldActionTypeField;
}
export interface WorkflowFlowsFieldOutcomesField {
    readonly id?: string;
    readonly type?: WorkflowFlowsFieldOutcomesFieldTypeField;
    readonly name?: string;
    readonly actionType?: WorkflowFlowsFieldOutcomesFieldActionTypeField;
    readonly ifRejected?: readonly WorkflowFlowsFieldOutcomesFieldIfRejectedField[];
}
export interface WorkflowFlowsField {
    readonly id?: string;
    readonly type?: WorkflowFlowsFieldTypeField;
    readonly trigger?: WorkflowFlowsFieldTriggerField;
    readonly outcomes?: readonly WorkflowFlowsFieldOutcomesField[];
    readonly createdAt?: string;
    readonly createdBy?: UserBase;
}
export type Workflow = WorkflowMini & {
    /**
     * A list of flows assigned to a workflow. */
    readonly flows?: readonly WorkflowFlowsField[];
};
export interface Workflows {
    readonly limit?: number;
    readonly nextMarker?: number;
    readonly prevMarker?: number;
    readonly entries?: readonly Workflow[];
}
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
export type ZipDownloadNameConflictsFieldTypeField = "file" | "folder";
export interface ZipDownloadNameConflictsField {
    readonly id?: string;
    readonly type?: ZipDownloadNameConflictsFieldTypeField;
    readonly originalName?: string;
    readonly downloadName?: string;
}
export interface ZipDownload {
    readonly downloadUrl?: string;
    readonly statusUrl?: string;
    readonly expiresAt?: string;
    readonly nameConflicts?: readonly (readonly ZipDownloadNameConflictsField[])[];
}
export type ZipDownloadStatusStateField = "in_progress" | "failed" | "success";
export interface ZipDownloadStatus {
    readonly totalFileCount?: number;
    readonly downloadedFileCount?: number;
    readonly skippedFileCount?: number;
    readonly skippedFolderCount?: number;
    readonly state?: ZipDownloadStatusStateField;
}
export type KeywordSkillCardTypeField = "skill_card";
export type KeywordSkillCardSkillCardTypeField = "keyword";
export interface KeywordSkillCardSkillCardTitleField {
    readonly code?: string;
    readonly message: string;
}
export type KeywordSkillCardSkillFieldTypeField = "service";
export interface KeywordSkillCardSkillField {
    readonly type: KeywordSkillCardSkillFieldTypeField;
    readonly id: string;
}
export type KeywordSkillCardInvocationFieldTypeField = "skill_invocation";
export interface KeywordSkillCardInvocationField {
    readonly type: KeywordSkillCardInvocationFieldTypeField;
    readonly id: string;
}
export interface KeywordSkillCardEntriesField {
    readonly text?: string;
}
export interface KeywordSkillCard {
    readonly createdAt?: string;
    readonly type: KeywordSkillCardTypeField;
    readonly skillCardType: KeywordSkillCardSkillCardTypeField;
    readonly skillCardTitle?: KeywordSkillCardSkillCardTitleField;
    readonly skill: KeywordSkillCardSkillField;
    readonly invocation: KeywordSkillCardInvocationField;
    readonly entries: readonly KeywordSkillCardEntriesField[];
}
export interface IntegrationMappingSlackOptions {
    readonly isAccessManagementDisabled?: boolean;
}
export type IntegrationMappingPartnerItemSlackTypeField = "channel";
export interface IntegrationMappingPartnerItemSlack {
    readonly type: IntegrationMappingPartnerItemSlackTypeField;
    readonly id: string;
    readonly slackWorkspaceId?: string;
    readonly slackOrgId?: string;
}
export type IntegrationMappingTypeField = "integration_mapping";
export interface IntegrationMappingBoxItemField {
}
export interface IntegrationMappingOptionsField {
}
export interface IntegrationMappingCreatedByField {
}
export interface IntegrationMappingModifiedByField {
}
export type IntegrationMapping = IntegrationMappingBase & {
    /**
     * Mapping type */
    readonly type: IntegrationMappingTypeField;
    /**
     * Mapped item object for Slack */
    readonly partnerItem: IntegrationMappingPartnerItemSlack;
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
export interface IntegrationMappings {
    readonly limit?: number;
    readonly nextMarker?: number;
    readonly prevMarker?: number;
    readonly entries?: readonly IntegrationMapping[];
}
export type IntegrationMappingBoxItemSlackTypeField = "folder";
export interface IntegrationMappingBoxItemSlack {
    readonly type: IntegrationMappingBoxItemSlackTypeField;
    readonly id: string;
}
export type TimelineSkillCardTypeField = "skill_card";
export type TimelineSkillCardSkillCardTypeField = "timeline";
export interface TimelineSkillCardSkillCardTitleField {
    readonly code?: string;
    readonly message: string;
}
export type TimelineSkillCardSkillFieldTypeField = "service";
export interface TimelineSkillCardSkillField {
    readonly type: TimelineSkillCardSkillFieldTypeField;
    readonly id: string;
}
export type TimelineSkillCardInvocationFieldTypeField = "skill_invocation";
export interface TimelineSkillCardInvocationField {
    readonly type: TimelineSkillCardInvocationFieldTypeField;
    readonly id: string;
}
export interface TimelineSkillCardEntriesFieldAppearsField {
    readonly start?: number;
    readonly end?: number;
}
export interface TimelineSkillCardEntriesField {
    readonly text?: string;
    readonly appears?: readonly TimelineSkillCardEntriesFieldAppearsField[];
    readonly imageUrl?: string;
}
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
export type TranscriptSkillCardTypeField = "skill_card";
export type TranscriptSkillCardSkillCardTypeField = "transcript";
export interface TranscriptSkillCardSkillCardTitleField {
    readonly code?: string;
    readonly message: string;
}
export type TranscriptSkillCardSkillFieldTypeField = "service";
export interface TranscriptSkillCardSkillField {
    readonly type: TranscriptSkillCardSkillFieldTypeField;
    readonly id: string;
}
export type TranscriptSkillCardInvocationFieldTypeField = "skill_invocation";
export interface TranscriptSkillCardInvocationField {
    readonly type: TranscriptSkillCardInvocationFieldTypeField;
    readonly id: string;
}
export interface TranscriptSkillCardEntriesFieldAppearsField {
    readonly start?: number;
}
export interface TranscriptSkillCardEntriesField {
    readonly text?: string;
    readonly appears?: readonly TranscriptSkillCardEntriesFieldAppearsField[];
}
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
export type StatusSkillCardTypeField = "skill_card";
export type StatusSkillCardSkillCardTypeField = "status";
export interface StatusSkillCardSkillCardTitleField {
    readonly code?: string;
    readonly message: string;
}
export type StatusSkillCardStatusFieldCodeField = "invoked" | "processing" | "success" | "transient_failure" | "permanent_failure";
export interface StatusSkillCardStatusField {
    readonly code: StatusSkillCardStatusFieldCodeField;
    readonly message?: string;
}
export type StatusSkillCardSkillFieldTypeField = "service";
export interface StatusSkillCardSkillField {
    readonly type: StatusSkillCardSkillFieldTypeField;
    readonly id: string;
}
export type StatusSkillCardInvocationFieldTypeField = "skill_invocation";
export interface StatusSkillCardInvocationField {
    readonly type: StatusSkillCardInvocationFieldTypeField;
    readonly id: string;
}
export interface StatusSkillCard {
    readonly createdAt?: string;
    readonly type: StatusSkillCardTypeField;
    readonly skillCardType: StatusSkillCardSkillCardTypeField;
    readonly skillCardTitle?: StatusSkillCardSkillCardTitleField;
    readonly status: StatusSkillCardStatusField;
    readonly skill: StatusSkillCardSkillField;
    readonly invocation: StatusSkillCardInvocationField;
}
export type KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard = KeywordSkillCard | StatusSkillCard | TimelineSkillCard | TranscriptSkillCard;
export interface SkillCardsMetadata {
    readonly canEdit?: boolean;
    readonly id?: string;
    readonly parent?: string;
    readonly scope?: string;
    readonly template?: string;
    readonly type?: string;
    readonly typeVersion?: number;
    readonly version?: number;
    readonly cards?: readonly KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard[];
}
export type SignRequestCreateSignerRoleField = "signer" | "approver" | "final_copy_reader";
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
export interface SignRequestPrefillTag {
    readonly documentTagId?: string;
    readonly textValue?: string;
    readonly checkboxValue?: boolean;
    readonly dateValue?: string;
}
export type SignRequestSignerInputTypeField = "signature" | "date" | "text" | "checkbox";
export type SignRequestSignerInputContentTypeField = "initial" | "stamp" | "signature" | "company" | "title" | "email" | "full_name" | "first_name" | "last_name" | "text" | "date" | "checkbox" | "attachment";
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
export type SignRequestSignerSignerDecisionFieldTypeField = "signed" | "declined";
export interface SignRequestSignerSignerDecisionField {
    readonly type?: SignRequestSignerSignerDecisionFieldTypeField;
    readonly finalizedAt?: string;
}
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
export type SignRequestTypeField = "sign-request";
export type SignRequestStatusField = "converting" | "created" | "sent" | "viewed" | "signed" | "cancelled" | "declined" | "error_converting" | "error_sending" | "expired";
export interface SignRequestSignFilesField {
    readonly files?: readonly FileMini[];
    readonly isReadyForDownload?: boolean;
}
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
export interface SignRequests {
    readonly limit?: number;
    readonly nextMarker?: number;
    readonly prevMarker?: number;
    readonly entries?: readonly SignRequest[];
}
export type SignRequestCreateRequest = SignRequestBase & {
    /**
     * List of files to create a signing document from. This is currently limited to ten files. Only the ID and type fields are required for each file. */
    readonly sourceFiles?: readonly FileBase[];
    /**
     * Array of signers for the sign request. 35 is the
     * max number of signers permitted. */
    readonly signers: readonly SignRequestCreateSigner[];
};
export type TemplateSignerInputTypeField = "signature" | "date" | "text" | "checkbox" | "radio" | "dropdown";
export type TemplateSignerInputContentTypeField = "signature" | "initial" | "stamp" | "date" | "checkbox" | "text" | "full_name" | "first_name" | "last_name" | "company" | "title" | "email" | "attachment" | "radio" | "dropdown";
export interface TemplateSignerInputCoordinatesField {
    readonly x?: number;
    readonly y?: number;
}
export interface TemplateSignerInputDimensionsField {
    readonly width?: number;
    readonly height?: number;
}
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
export type TemplateSignerRoleField = "signer" | "approver" | "final_copy_reader";
export interface TemplateSigner {
    readonly inputs?: readonly TemplateSignerInput[];
    readonly email?: string;
    readonly role?: TemplateSignerRoleField;
    readonly isInPerson?: boolean;
    readonly order?: number;
}
export type SignTemplateAdditionalInfoFieldNonEditableField = "email_subject" | "email_message" | "name" | "days_valid" | "signers" | "source_files";
export type SignTemplateAdditionalInfoFieldRequiredFieldSignersField = "email";
export interface SignTemplateAdditionalInfoFieldRequiredField {
    readonly signers?: readonly (readonly SignTemplateAdditionalInfoFieldRequiredFieldSignersField[])[];
}
export interface SignTemplateAdditionalInfoField {
    readonly nonEditable?: readonly SignTemplateAdditionalInfoFieldNonEditableField[];
    readonly required?: SignTemplateAdditionalInfoFieldRequiredField;
}
export interface SignTemplateReadySignLinkField {
    readonly url?: string;
    readonly name?: string;
    readonly instructions?: string;
    readonly folderId?: string;
    readonly isNotificationDisabled?: boolean;
    readonly isActive?: boolean;
}
export interface SignTemplateCustomBrandingField {
    readonly companyName?: string;
    readonly logoUri?: string;
    readonly brandingColor?: string;
    readonly emailFooterText?: string;
}
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
export interface ShieldInformationBarrierReportDetailsDetailsField {
    readonly folderId?: string;
}
export interface ShieldInformationBarrierReportDetails {
    readonly details?: ShieldInformationBarrierReportDetailsDetailsField;
}
export type TrackingCodeTypeField = "tracking_code";
export interface TrackingCode {
    readonly type?: TrackingCodeTypeField;
    readonly name?: string;
    readonly value?: string;
}
export type UserFullRoleField = "admin" | "coadmin" | "user";
export type UserFullEnterpriseFieldTypeField = "enterprise";
export interface UserFullEnterpriseField {
    readonly id?: string;
    readonly type?: UserFullEnterpriseFieldTypeField;
    readonly name?: string;
}
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
export type MetadataFilterScopeField = "global" | "enterprise" | "enterprise_{enterprise_id}";
export interface MetadataFilterFiltersField {
}
export interface MetadataFilter {
    readonly scope?: MetadataFilterScopeField;
    readonly templateKey?: string;
    readonly filters?: MetadataFilterFiltersField;
}
export interface MetadataFieldFilterString {
}
export interface MetadataFieldFilterFloat {
}
export interface MetadataFieldFilterMultiSelect {
}
export interface MetadataFieldFilterFloatRange {
}
export interface MetadataFieldFilterDateRange {
}
export function newSerializePostOAuth2TokenGrantTypeField(val: PostOAuth2TokenGrantTypeField): Json {
    return val;
}
export function newDeserializePostOAuth2TokenGrantTypeField(val: any): PostOAuth2TokenGrantTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"PostOAuth2TokenGrantTypeField\"";
    }
    if (val == "authorization_code") {
        return "authorization_code";
    }
    if (val == "refresh_token") {
        return "refresh_token";
    }
    if (val == "client_credentials") {
        return "client_credentials";
    }
    if (val == "urn:ietf:params:oauth:grant-type:jwt-bearer") {
        return "urn:ietf:params:oauth:grant-type:jwt-bearer";
    }
    if (val == "urn:ietf:params:oauth:grant-type:token-exchange") {
        return "urn:ietf:params:oauth:grant-type:token-exchange";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializePostOAuth2TokenSubjectTokenTypeField(val: PostOAuth2TokenSubjectTokenTypeField): Json {
    return val;
}
export function newDeserializePostOAuth2TokenSubjectTokenTypeField(val: any): PostOAuth2TokenSubjectTokenTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"PostOAuth2TokenSubjectTokenTypeField\"";
    }
    if (val == "urn:ietf:params:oauth:token-type:access_token") {
        return "urn:ietf:params:oauth:token-type:access_token";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializePostOAuth2TokenActorTokenTypeField(val: PostOAuth2TokenActorTokenTypeField): Json {
    return val;
}
export function newDeserializePostOAuth2TokenActorTokenTypeField(val: any): PostOAuth2TokenActorTokenTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"PostOAuth2TokenActorTokenTypeField\"";
    }
    if (val == "urn:ietf:params:oauth:token-type:id_token") {
        return "urn:ietf:params:oauth:token-type:id_token";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializePostOAuth2TokenBoxSubjectTypeField(val: PostOAuth2TokenBoxSubjectTypeField): Json {
    return val;
}
export function newDeserializePostOAuth2TokenBoxSubjectTypeField(val: any): PostOAuth2TokenBoxSubjectTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"PostOAuth2TokenBoxSubjectTypeField\"";
    }
    if (val == "enterprise") {
        return "enterprise";
    }
    if (val == "user") {
        return "user";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializePostOAuth2Token(val: PostOAuth2Token): Json {
    return { ["grant_type"]: newSerializePostOAuth2TokenGrantTypeField(val.grantType), ["client_id"]: val.clientId, ["client_secret"]: val.clientSecret, ["code"]: val.code, ["refresh_token"]: val.refreshToken, ["assertion"]: val.assertion, ["subject_token"]: val.subjectToken, ["subject_token_type"]: val.subjectTokenType == void 0 ? void 0 : newSerializePostOAuth2TokenSubjectTokenTypeField(val.subjectTokenType), ["actor_token"]: val.actorToken, ["actor_token_type"]: val.actorTokenType == void 0 ? void 0 : newSerializePostOAuth2TokenActorTokenTypeField(val.actorTokenType), ["scope"]: val.scope, ["resource"]: val.resource, ["box_subject_type"]: val.boxSubjectType == void 0 ? void 0 : newSerializePostOAuth2TokenBoxSubjectTypeField(val.boxSubjectType), ["box_subject_id"]: val.boxSubjectId, ["box_shared_link"]: val.boxSharedLink };
}
export function newDeserializePostOAuth2Token(val: any): PostOAuth2Token {
    const grantType: PostOAuth2TokenGrantTypeField = newDeserializePostOAuth2TokenGrantTypeField(val.grant_type);
    const clientId: undefined | string = isJson(val.client_id, "string") ? val.client_id : void 0;
    const clientSecret: undefined | string = isJson(val.client_secret, "string") ? val.client_secret : void 0;
    const code: undefined | string = isJson(val.code, "string") ? val.code : void 0;
    const refreshToken: undefined | string = isJson(val.refresh_token, "string") ? val.refresh_token : void 0;
    const assertion: undefined | string = isJson(val.assertion, "string") ? val.assertion : void 0;
    const subjectToken: undefined | string = isJson(val.subject_token, "string") ? val.subject_token : void 0;
    const subjectTokenType: undefined | PostOAuth2TokenSubjectTokenTypeField = val.subject_token_type == void 0 ? void 0 : newDeserializePostOAuth2TokenSubjectTokenTypeField(val.subject_token_type);
    const actorToken: undefined | string = isJson(val.actor_token, "string") ? val.actor_token : void 0;
    const actorTokenType: undefined | PostOAuth2TokenActorTokenTypeField = val.actor_token_type == void 0 ? void 0 : newDeserializePostOAuth2TokenActorTokenTypeField(val.actor_token_type);
    const scope: undefined | string = isJson(val.scope, "string") ? val.scope : void 0;
    const resource: undefined | string = isJson(val.resource, "string") ? val.resource : void 0;
    const boxSubjectType: undefined | PostOAuth2TokenBoxSubjectTypeField = val.box_subject_type == void 0 ? void 0 : newDeserializePostOAuth2TokenBoxSubjectTypeField(val.box_subject_type);
    const boxSubjectId: undefined | string = isJson(val.box_subject_id, "string") ? val.box_subject_id : void 0;
    const boxSharedLink: undefined | string = isJson(val.box_shared_link, "string") ? val.box_shared_link : void 0;
    return { grantType: grantType, clientId: clientId, clientSecret: clientSecret, code: code, refreshToken: refreshToken, assertion: assertion, subjectToken: subjectToken, subjectTokenType: subjectTokenType, actorToken: actorToken, actorTokenType: actorTokenType, scope: scope, resource: resource, boxSubjectType: boxSubjectType, boxSubjectId: boxSubjectId, boxSharedLink: boxSharedLink } satisfies PostOAuth2Token;
}
export function newSerializePostOAuth2TokenRefreshAccessTokenGrantTypeField(val: PostOAuth2TokenRefreshAccessTokenGrantTypeField): Json {
    return val;
}
export function newDeserializePostOAuth2TokenRefreshAccessTokenGrantTypeField(val: any): PostOAuth2TokenRefreshAccessTokenGrantTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"PostOAuth2TokenRefreshAccessTokenGrantTypeField\"";
    }
    if (val == "refresh_token") {
        return "refresh_token";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializePostOAuth2TokenRefreshAccessToken(val: PostOAuth2TokenRefreshAccessToken): Json {
    return { ["grant_type"]: newSerializePostOAuth2TokenRefreshAccessTokenGrantTypeField(val.grantType), ["client_id"]: val.clientId, ["client_secret"]: val.clientSecret, ["refresh_token"]: val.refreshToken };
}
export function newDeserializePostOAuth2TokenRefreshAccessToken(val: any): PostOAuth2TokenRefreshAccessToken {
    const grantType: PostOAuth2TokenRefreshAccessTokenGrantTypeField = newDeserializePostOAuth2TokenRefreshAccessTokenGrantTypeField(val.grant_type);
    const clientId: string = val.client_id;
    const clientSecret: string = val.client_secret;
    const refreshToken: string = val.refresh_token;
    return { grantType: grantType, clientId: clientId, clientSecret: clientSecret, refreshToken: refreshToken } satisfies PostOAuth2TokenRefreshAccessToken;
}
export function newSerializePostOAuth2Revoke(val: PostOAuth2Revoke): Json {
    return { ["client_id"]: val.clientId, ["client_secret"]: val.clientSecret, ["token"]: val.token };
}
export function newDeserializePostOAuth2Revoke(val: any): PostOAuth2Revoke {
    const clientId: undefined | string = isJson(val.client_id, "string") ? val.client_id : void 0;
    const clientSecret: undefined | string = isJson(val.client_secret, "string") ? val.client_secret : void 0;
    const token: undefined | string = isJson(val.token, "string") ? val.token : void 0;
    return { clientId: clientId, clientSecret: clientSecret, token: token } satisfies PostOAuth2Revoke;
}
export function newSerializeZipDownloadRequestItemsFieldTypeField(val: ZipDownloadRequestItemsFieldTypeField): Json {
    return val;
}
export function newDeserializeZipDownloadRequestItemsFieldTypeField(val: any): ZipDownloadRequestItemsFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"ZipDownloadRequestItemsFieldTypeField\"";
    }
    if (val == "file") {
        return "file";
    }
    if (val == "folder.") {
        return "folder.";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeZipDownloadRequestItemsField(val: ZipDownloadRequestItemsField): Json {
    return { ["type"]: newSerializeZipDownloadRequestItemsFieldTypeField(val.type), ["id"]: val.id };
}
export function newDeserializeZipDownloadRequestItemsField(val: any): ZipDownloadRequestItemsField {
    const type: ZipDownloadRequestItemsFieldTypeField = newDeserializeZipDownloadRequestItemsFieldTypeField(val.type);
    const id: string = val.id;
    return { type: type, id: id } satisfies ZipDownloadRequestItemsField;
}
export function newSerializeZipDownloadRequest(val: ZipDownloadRequest): Json {
    return { ["items"]: val.items.map(function (item: ZipDownloadRequestItemsField): any {
            return newSerializeZipDownloadRequestItemsField(item);
        }) as readonly any[], ["download_file_name"]: val.downloadFileName };
}
export function newDeserializeZipDownloadRequest(val: any): ZipDownloadRequest {
    const items: readonly ZipDownloadRequestItemsField[] = val.items.map(function (itm: Json): any {
        return newDeserializeZipDownloadRequestItemsField(itm);
    }) as readonly any[];
    const downloadFileName: undefined | string = isJson(val.download_file_name, "string") ? val.download_file_name : void 0;
    return { items: items, downloadFileName: downloadFileName } satisfies ZipDownloadRequest;
}
export function newSerializeMetadataQueryQueryParamsField(val: MetadataQueryQueryParamsField): Json {
    return {};
}
export function newDeserializeMetadataQueryQueryParamsField(val: any): MetadataQueryQueryParamsField {
    return {} satisfies MetadataQueryQueryParamsField;
}
export function newSerializeMetadataQueryOrderByFieldDirectionField(val: MetadataQueryOrderByFieldDirectionField): Json {
    return val;
}
export function newDeserializeMetadataQueryOrderByFieldDirectionField(val: any): MetadataQueryOrderByFieldDirectionField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"MetadataQueryOrderByFieldDirectionField\"";
    }
    if (val == "ASC") {
        return "ASC";
    }
    if (val == "DESC") {
        return "DESC";
    }
    if (val == "asc") {
        return "asc";
    }
    if (val == "desc") {
        return "desc";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeMetadataQueryOrderByField(val: MetadataQueryOrderByField): Json {
    return { ["field_key"]: val.fieldKey, ["direction"]: val.direction == void 0 ? void 0 : newSerializeMetadataQueryOrderByFieldDirectionField(val.direction) };
}
export function newDeserializeMetadataQueryOrderByField(val: any): MetadataQueryOrderByField {
    const fieldKey: undefined | string = isJson(val.field_key, "string") ? val.field_key : void 0;
    const direction: undefined | MetadataQueryOrderByFieldDirectionField = val.direction == void 0 ? void 0 : newDeserializeMetadataQueryOrderByFieldDirectionField(val.direction);
    return { fieldKey: fieldKey, direction: direction } satisfies MetadataQueryOrderByField;
}
export function newSerializeMetadataQuery(val: MetadataQuery): Json {
    return { ["from"]: val.from, ["query"]: val.query, ["query_params"]: val.queryParams == void 0 ? void 0 : newSerializeMetadataQueryQueryParamsField(val.queryParams), ["ancestor_folder_id"]: val.ancestorFolderId, ["order_by"]: val.orderBy == void 0 ? void 0 : val.orderBy.map(function (item: MetadataQueryOrderByField): any {
            return newSerializeMetadataQueryOrderByField(item);
        }) as readonly any[], ["limit"]: val.limit, ["marker"]: val.marker, ["fields"]: val.fields == void 0 ? void 0 : val.fields.map(function (item: string): undefined {
            return void 0;
        }) as readonly any[] };
}
export function newDeserializeMetadataQuery(val: any): MetadataQuery {
    const from: string = val.from;
    const query: undefined | string = isJson(val.query, "string") ? val.query : void 0;
    const queryParams: undefined | MetadataQueryQueryParamsField = val.query_params == void 0 ? void 0 : newDeserializeMetadataQueryQueryParamsField(val.query_params);
    const ancestorFolderId: string = val.ancestor_folder_id;
    const orderBy: undefined | readonly MetadataQueryOrderByField[] = isJson(val.order_by, "array") ? val.order_by.map(function (itm: Json): any {
        return newDeserializeMetadataQueryOrderByField(itm);
    }) as readonly any[] : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const marker: undefined | string = isJson(val.marker, "string") ? val.marker : void 0;
    const fields: undefined | readonly string[] = isJson(val.fields, "array") ? val.fields.map(function (itm: Json): undefined {
        return void 0;
    }) as readonly any[] : void 0;
    return { from: from, query: query, queryParams: queryParams, ancestorFolderId: ancestorFolderId, orderBy: orderBy, limit: limit, marker: marker, fields: fields } satisfies MetadataQuery;
}
export function newSerializeFileRequestUpdateRequestStatusField(val: FileRequestUpdateRequestStatusField): Json {
    return val;
}
export function newDeserializeFileRequestUpdateRequestStatusField(val: any): FileRequestUpdateRequestStatusField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"FileRequestUpdateRequestStatusField\"";
    }
    if (val == "active") {
        return "active";
    }
    if (val == "inactive") {
        return "inactive";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeFileRequestUpdateRequest(val: FileRequestUpdateRequest): Json {
    return { ["title"]: val.title, ["description"]: val.description, ["status"]: val.status == void 0 ? void 0 : newSerializeFileRequestUpdateRequestStatusField(val.status), ["is_email_required"]: val.isEmailRequired, ["is_description_required"]: val.isDescriptionRequired, ["expires_at"]: val.expiresAt };
}
export function newDeserializeFileRequestUpdateRequest(val: any): FileRequestUpdateRequest {
    const title: undefined | string = isJson(val.title, "string") ? val.title : void 0;
    const description: undefined | string = isJson(val.description, "string") ? val.description : void 0;
    const status: undefined | FileRequestUpdateRequestStatusField = val.status == void 0 ? void 0 : newDeserializeFileRequestUpdateRequestStatusField(val.status);
    const isEmailRequired: undefined | boolean = isJson(val.is_email_required, "boolean") ? val.is_email_required : void 0;
    const isDescriptionRequired: undefined | boolean = isJson(val.is_description_required, "boolean") ? val.is_description_required : void 0;
    const expiresAt: undefined | string = isJson(val.expires_at, "string") ? val.expires_at : void 0;
    return { title: title, description: description, status: status, isEmailRequired: isEmailRequired, isDescriptionRequired: isDescriptionRequired, expiresAt: expiresAt } satisfies FileRequestUpdateRequest;
}
export function newSerializeFileRequestCopyRequestFolderFieldTypeField(val: FileRequestCopyRequestFolderFieldTypeField): Json {
    return val;
}
export function newDeserializeFileRequestCopyRequestFolderFieldTypeField(val: any): FileRequestCopyRequestFolderFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"FileRequestCopyRequestFolderFieldTypeField\"";
    }
    if (val == "folder") {
        return "folder";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeFileRequestCopyRequestFolderField(val: FileRequestCopyRequestFolderField): Json {
    return { ["type"]: val.type == void 0 ? void 0 : newSerializeFileRequestCopyRequestFolderFieldTypeField(val.type), ["id"]: val.id };
}
export function newDeserializeFileRequestCopyRequestFolderField(val: any): FileRequestCopyRequestFolderField {
    const type: undefined | FileRequestCopyRequestFolderFieldTypeField = val.type == void 0 ? void 0 : newDeserializeFileRequestCopyRequestFolderFieldTypeField(val.type);
    const id: string = val.id;
    return { type: type, id: id } satisfies FileRequestCopyRequestFolderField;
}
export function newSerializeFileRequestCopyRequest(val: FileRequestCopyRequest): Json {
    const base: any = newSerializeFileRequestUpdateRequest(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"FileRequestCopyRequest\"";
    }
    return { ...base, ...{ ["folder"]: newSerializeFileRequestCopyRequestFolderField(val.folder) } };
}
export function newDeserializeFileRequestCopyRequest(val: any): FileRequestCopyRequest {
    const folder: FileRequestCopyRequestFolderField = newDeserializeFileRequestCopyRequestFolderField(val.folder);
    const title: undefined | string = isJson(val.title, "string") ? val.title : void 0;
    const description: undefined | string = isJson(val.description, "string") ? val.description : void 0;
    const status: undefined | FileRequestUpdateRequestStatusField = val.status == void 0 ? void 0 : newDeserializeFileRequestUpdateRequestStatusField(val.status);
    const isEmailRequired: undefined | boolean = isJson(val.is_email_required, "boolean") ? val.is_email_required : void 0;
    const isDescriptionRequired: undefined | boolean = isJson(val.is_description_required, "boolean") ? val.is_description_required : void 0;
    const expiresAt: undefined | string = isJson(val.expires_at, "string") ? val.expires_at : void 0;
    return { folder: folder, title: title, description: description, status: status, isEmailRequired: isEmailRequired, isDescriptionRequired: isDescriptionRequired, expiresAt: expiresAt } satisfies FileRequestCopyRequest;
}
export function newSerializeIntegrationMappingSlackCreateRequestPartnerItemField(val: IntegrationMappingSlackCreateRequestPartnerItemField): Json {
    return {};
}
export function newDeserializeIntegrationMappingSlackCreateRequestPartnerItemField(val: any): IntegrationMappingSlackCreateRequestPartnerItemField {
    return {} satisfies IntegrationMappingSlackCreateRequestPartnerItemField;
}
export function newSerializeIntegrationMappingSlackCreateRequestBoxItemField(val: IntegrationMappingSlackCreateRequestBoxItemField): Json {
    return {};
}
export function newDeserializeIntegrationMappingSlackCreateRequestBoxItemField(val: any): IntegrationMappingSlackCreateRequestBoxItemField {
    return {} satisfies IntegrationMappingSlackCreateRequestBoxItemField;
}
export function newSerializeIntegrationMappingSlackCreateRequestOptionsField(val: IntegrationMappingSlackCreateRequestOptionsField): Json {
    return {};
}
export function newDeserializeIntegrationMappingSlackCreateRequestOptionsField(val: any): IntegrationMappingSlackCreateRequestOptionsField {
    return {} satisfies IntegrationMappingSlackCreateRequestOptionsField;
}
export function newSerializeIntegrationMappingSlackCreateRequest(val: IntegrationMappingSlackCreateRequest): Json {
    return { ["partner_item"]: newSerializeIntegrationMappingSlackCreateRequestPartnerItemField(val.partnerItem), ["box_item"]: newSerializeIntegrationMappingSlackCreateRequestBoxItemField(val.boxItem), ["options"]: val.options == void 0 ? void 0 : newSerializeIntegrationMappingSlackCreateRequestOptionsField(val.options) };
}
export function newDeserializeIntegrationMappingSlackCreateRequest(val: any): IntegrationMappingSlackCreateRequest {
    const partnerItem: IntegrationMappingSlackCreateRequestPartnerItemField = newDeserializeIntegrationMappingSlackCreateRequestPartnerItemField(val.partner_item);
    const boxItem: IntegrationMappingSlackCreateRequestBoxItemField = newDeserializeIntegrationMappingSlackCreateRequestBoxItemField(val.box_item);
    const options: undefined | IntegrationMappingSlackCreateRequestOptionsField = val.options == void 0 ? void 0 : newDeserializeIntegrationMappingSlackCreateRequestOptionsField(val.options);
    return { partnerItem: partnerItem, boxItem: boxItem, options: options } satisfies IntegrationMappingSlackCreateRequest;
}
export function newSerializeClientErrorTypeField(val: ClientErrorTypeField): Json {
    return val;
}
export function newDeserializeClientErrorTypeField(val: any): ClientErrorTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"ClientErrorTypeField\"";
    }
    if (val == "error") {
        return "error";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeClientErrorCodeField(val: ClientErrorCodeField): Json {
    return val;
}
export function newDeserializeClientErrorCodeField(val: any): ClientErrorCodeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"ClientErrorCodeField\"";
    }
    if (val == "created") {
        return "created";
    }
    if (val == "accepted") {
        return "accepted";
    }
    if (val == "no_content") {
        return "no_content";
    }
    if (val == "redirect") {
        return "redirect";
    }
    if (val == "not_modified") {
        return "not_modified";
    }
    if (val == "bad_request") {
        return "bad_request";
    }
    if (val == "unauthorized") {
        return "unauthorized";
    }
    if (val == "forbidden") {
        return "forbidden";
    }
    if (val == "not_found") {
        return "not_found";
    }
    if (val == "method_not_allowed") {
        return "method_not_allowed";
    }
    if (val == "conflict") {
        return "conflict";
    }
    if (val == "precondition_failed") {
        return "precondition_failed";
    }
    if (val == "too_many_requests") {
        return "too_many_requests";
    }
    if (val == "internal_server_error") {
        return "internal_server_error";
    }
    if (val == "unavailable") {
        return "unavailable";
    }
    if (val == "item_name_invalid") {
        return "item_name_invalid";
    }
    if (val == "insufficient_scope") {
        return "insufficient_scope";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeClientErrorContextInfoField(val: ClientErrorContextInfoField): Json {
    return { ["message"]: val.message };
}
export function newDeserializeClientErrorContextInfoField(val: any): ClientErrorContextInfoField {
    const message: undefined | string = isJson(val.message, "string") ? val.message : void 0;
    return { message: message } satisfies ClientErrorContextInfoField;
}
export function newSerializeClientError(val: ClientError): Json {
    return { ["type"]: val.type == void 0 ? void 0 : newSerializeClientErrorTypeField(val.type), ["status"]: val.status, ["code"]: val.code == void 0 ? void 0 : newSerializeClientErrorCodeField(val.code), ["message"]: val.message, ["context_info"]: val.contextInfo == void 0 ? void 0 : newSerializeClientErrorContextInfoField(val.contextInfo), ["help_url"]: val.helpUrl, ["request_id"]: val.requestId };
}
export function newDeserializeClientError(val: any): ClientError {
    const type: undefined | ClientErrorTypeField = val.type == void 0 ? void 0 : newDeserializeClientErrorTypeField(val.type);
    const status: undefined | number = isJson(val.status, "number") ? val.status : void 0;
    const code: undefined | ClientErrorCodeField = val.code == void 0 ? void 0 : newDeserializeClientErrorCodeField(val.code);
    const message: undefined | string = isJson(val.message, "string") ? val.message : void 0;
    const contextInfo: undefined | ClientErrorContextInfoField = val.context_info == void 0 ? void 0 : newDeserializeClientErrorContextInfoField(val.context_info);
    const helpUrl: undefined | string = isJson(val.help_url, "string") ? val.help_url : void 0;
    const requestId: undefined | string = isJson(val.request_id, "string") ? val.request_id : void 0;
    return { type: type, status: status, code: code, message: message, contextInfo: contextInfo, helpUrl: helpUrl, requestId: requestId } satisfies ClientError;
}
export function newSerializeOAuth2Error(val: OAuth2Error): Json {
    return { ["error"]: val.error, ["error_description"]: val.errorDescription };
}
export function newDeserializeOAuth2Error(val: any): OAuth2Error {
    const error: undefined | string = isJson(val.error, "string") ? val.error : void 0;
    const errorDescription: undefined | string = isJson(val.error_description, "string") ? val.error_description : void 0;
    return { error: error, errorDescription: errorDescription } satisfies OAuth2Error;
}
export function newSerializeClassificationTemplateField(val: ClassificationTemplateField): Json {
    return val;
}
export function newDeserializeClassificationTemplateField(val: any): ClassificationTemplateField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"ClassificationTemplateField\"";
    }
    if (val == "securityClassification-6VMVochwUWo") {
        return "securityClassification-6VMVochwUWo";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeClassification(val: Classification): Json {
    return { ["Box__Security__Classification__Key"]: val.boxSecurityClassificationKey, ["$parent"]: val.parent, ["$template"]: val.template == void 0 ? void 0 : newSerializeClassificationTemplateField(val.template), ["$scope"]: val.scope, ["$version"]: val.version, ["$type"]: val.type, ["$typeVersion"]: val.typeVersion, ["$canEdit"]: val.canEdit };
}
export function newDeserializeClassification(val: any): Classification {
    const boxSecurityClassificationKey: undefined | string = isJson(val.Box__Security__Classification__Key, "string") ? val.Box__Security__Classification__Key : void 0;
    const parent: undefined | string = isJson(val.$parent, "string") ? val.$parent : void 0;
    const template: undefined | ClassificationTemplateField = val.$template == void 0 ? void 0 : newDeserializeClassificationTemplateField(val.$template);
    const scope: undefined | string = isJson(val.$scope, "string") ? val.$scope : void 0;
    const version: undefined | number = isJson(val.$version, "number") ? val.$version : void 0;
    const type: undefined | string = isJson(val.$type, "string") ? val.$type : void 0;
    const typeVersion: undefined | number = isJson(val.$typeVersion, "number") ? val.$typeVersion : void 0;
    const canEdit: undefined | boolean = isJson(val.$canEdit, "boolean") ? val.$canEdit : void 0;
    return { boxSecurityClassificationKey: boxSecurityClassificationKey, parent: parent, template: template, scope: scope, version: version, type: type, typeVersion: typeVersion, canEdit: canEdit } satisfies Classification;
}
export function newSerializeClassificationTemplateTypeField(val: ClassificationTemplateTypeField): Json {
    return val;
}
export function newDeserializeClassificationTemplateTypeField(val: any): ClassificationTemplateTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"ClassificationTemplateTypeField\"";
    }
    if (val == "metadata_template") {
        return "metadata_template";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeClassificationTemplateTemplateKeyField(val: ClassificationTemplateTemplateKeyField): Json {
    return val;
}
export function newDeserializeClassificationTemplateTemplateKeyField(val: any): ClassificationTemplateTemplateKeyField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"ClassificationTemplateTemplateKeyField\"";
    }
    if (val == "securityClassification-6VMVochwUWo") {
        return "securityClassification-6VMVochwUWo";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeClassificationTemplateDisplayNameField(val: ClassificationTemplateDisplayNameField): Json {
    return val;
}
export function newDeserializeClassificationTemplateDisplayNameField(val: any): ClassificationTemplateDisplayNameField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"ClassificationTemplateDisplayNameField\"";
    }
    if (val == "Classification") {
        return "Classification";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeClassificationTemplateFieldsFieldTypeField(val: ClassificationTemplateFieldsFieldTypeField): Json {
    return val;
}
export function newDeserializeClassificationTemplateFieldsFieldTypeField(val: any): ClassificationTemplateFieldsFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"ClassificationTemplateFieldsFieldTypeField\"";
    }
    if (val == "enum") {
        return "enum";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeClassificationTemplateFieldsFieldKeyField(val: ClassificationTemplateFieldsFieldKeyField): Json {
    return val;
}
export function newDeserializeClassificationTemplateFieldsFieldKeyField(val: any): ClassificationTemplateFieldsFieldKeyField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"ClassificationTemplateFieldsFieldKeyField\"";
    }
    if (val == "Box__Security__Classification__Key") {
        return "Box__Security__Classification__Key";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeClassificationTemplateFieldsFieldDisplayNameField(val: ClassificationTemplateFieldsFieldDisplayNameField): Json {
    return val;
}
export function newDeserializeClassificationTemplateFieldsFieldDisplayNameField(val: any): ClassificationTemplateFieldsFieldDisplayNameField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"ClassificationTemplateFieldsFieldDisplayNameField\"";
    }
    if (val == "Classification") {
        return "Classification";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeClassificationTemplateFieldsFieldOptionsFieldStaticConfigFieldClassificationField(val: ClassificationTemplateFieldsFieldOptionsFieldStaticConfigFieldClassificationField): Json {
    return { ["classificationDefinition"]: val.classificationDefinition, ["colorID"]: val.colorId };
}
export function newDeserializeClassificationTemplateFieldsFieldOptionsFieldStaticConfigFieldClassificationField(val: any): ClassificationTemplateFieldsFieldOptionsFieldStaticConfigFieldClassificationField {
    const classificationDefinition: undefined | string = isJson(val.classificationDefinition, "string") ? val.classificationDefinition : void 0;
    const colorId: undefined | number = isJson(val.colorID, "number") ? val.colorID : void 0;
    return { classificationDefinition: classificationDefinition, colorId: colorId } satisfies ClassificationTemplateFieldsFieldOptionsFieldStaticConfigFieldClassificationField;
}
export function newSerializeClassificationTemplateFieldsFieldOptionsFieldStaticConfigField(val: ClassificationTemplateFieldsFieldOptionsFieldStaticConfigField): Json {
    return { ["classification"]: val.classification == void 0 ? void 0 : newSerializeClassificationTemplateFieldsFieldOptionsFieldStaticConfigFieldClassificationField(val.classification) };
}
export function newDeserializeClassificationTemplateFieldsFieldOptionsFieldStaticConfigField(val: any): ClassificationTemplateFieldsFieldOptionsFieldStaticConfigField {
    const classification: undefined | ClassificationTemplateFieldsFieldOptionsFieldStaticConfigFieldClassificationField = val.classification == void 0 ? void 0 : newDeserializeClassificationTemplateFieldsFieldOptionsFieldStaticConfigFieldClassificationField(val.classification);
    return { classification: classification } satisfies ClassificationTemplateFieldsFieldOptionsFieldStaticConfigField;
}
export function newSerializeClassificationTemplateFieldsFieldOptionsField(val: ClassificationTemplateFieldsFieldOptionsField): Json {
    return { ["id"]: val.id, ["key"]: val.key, ["staticConfig"]: val.staticConfig == void 0 ? void 0 : newSerializeClassificationTemplateFieldsFieldOptionsFieldStaticConfigField(val.staticConfig) };
}
export function newDeserializeClassificationTemplateFieldsFieldOptionsField(val: any): ClassificationTemplateFieldsFieldOptionsField {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const key: undefined | string = isJson(val.key, "string") ? val.key : void 0;
    const staticConfig: undefined | ClassificationTemplateFieldsFieldOptionsFieldStaticConfigField = val.staticConfig == void 0 ? void 0 : newDeserializeClassificationTemplateFieldsFieldOptionsFieldStaticConfigField(val.staticConfig);
    return { id: id, key: key, staticConfig: staticConfig } satisfies ClassificationTemplateFieldsFieldOptionsField;
}
export function newSerializeClassificationTemplateFieldsField(val: ClassificationTemplateFieldsField): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : newSerializeClassificationTemplateFieldsFieldTypeField(val.type), ["key"]: val.key == void 0 ? void 0 : newSerializeClassificationTemplateFieldsFieldKeyField(val.key), ["displayName"]: val.displayName == void 0 ? void 0 : newSerializeClassificationTemplateFieldsFieldDisplayNameField(val.displayName), ["hidden"]: val.hidden, ["options"]: val.options == void 0 ? void 0 : val.options.map(function (item: ClassificationTemplateFieldsFieldOptionsField): any {
            return newSerializeClassificationTemplateFieldsFieldOptionsField(item);
        }) as readonly any[] };
}
export function newDeserializeClassificationTemplateFieldsField(val: any): ClassificationTemplateFieldsField {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | ClassificationTemplateFieldsFieldTypeField = val.type == void 0 ? void 0 : newDeserializeClassificationTemplateFieldsFieldTypeField(val.type);
    const key: undefined | ClassificationTemplateFieldsFieldKeyField = val.key == void 0 ? void 0 : newDeserializeClassificationTemplateFieldsFieldKeyField(val.key);
    const displayName: undefined | ClassificationTemplateFieldsFieldDisplayNameField = val.displayName == void 0 ? void 0 : newDeserializeClassificationTemplateFieldsFieldDisplayNameField(val.displayName);
    const hidden: undefined | boolean = isJson(val.hidden, "boolean") ? val.hidden : void 0;
    const options: undefined | readonly ClassificationTemplateFieldsFieldOptionsField[] = isJson(val.options, "array") ? val.options.map(function (itm: Json): any {
        return newDeserializeClassificationTemplateFieldsFieldOptionsField(itm);
    }) as readonly any[] : void 0;
    return { id: id, type: type, key: key, displayName: displayName, hidden: hidden, options: options } satisfies ClassificationTemplateFieldsField;
}
export function newSerializeClassificationTemplate(val: ClassificationTemplate): Json {
    return { ["id"]: val.id, ["type"]: newSerializeClassificationTemplateTypeField(val.type), ["scope"]: val.scope, ["templateKey"]: val.templateKey == void 0 ? void 0 : newSerializeClassificationTemplateTemplateKeyField(val.templateKey), ["displayName"]: val.displayName == void 0 ? void 0 : newSerializeClassificationTemplateDisplayNameField(val.displayName), ["hidden"]: val.hidden, ["copyInstanceOnItemCopy"]: val.copyInstanceOnItemCopy, ["fields"]: val.fields == void 0 ? void 0 : val.fields.map(function (item: ClassificationTemplateFieldsField): any {
            return newSerializeClassificationTemplateFieldsField(item);
        }) as readonly any[] };
}
export function newDeserializeClassificationTemplate(val: any): ClassificationTemplate {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: ClassificationTemplateTypeField = newDeserializeClassificationTemplateTypeField(val.type);
    const scope: undefined | string = isJson(val.scope, "string") ? val.scope : void 0;
    const templateKey: undefined | ClassificationTemplateTemplateKeyField = val.templateKey == void 0 ? void 0 : newDeserializeClassificationTemplateTemplateKeyField(val.templateKey);
    const displayName: undefined | ClassificationTemplateDisplayNameField = val.displayName == void 0 ? void 0 : newDeserializeClassificationTemplateDisplayNameField(val.displayName);
    const hidden: undefined | boolean = isJson(val.hidden, "boolean") ? val.hidden : void 0;
    const copyInstanceOnItemCopy: undefined | boolean = isJson(val.copyInstanceOnItemCopy, "boolean") ? val.copyInstanceOnItemCopy : void 0;
    const fields: undefined | readonly ClassificationTemplateFieldsField[] = isJson(val.fields, "array") ? val.fields.map(function (itm: Json): any {
        return newDeserializeClassificationTemplateFieldsField(itm);
    }) as readonly any[] : void 0;
    return { id: id, type: type, scope: scope, templateKey: templateKey, displayName: displayName, hidden: hidden, copyInstanceOnItemCopy: copyInstanceOnItemCopy, fields: fields } satisfies ClassificationTemplate;
}
export function newSerializeCollaborationAllowlistEntryTypeField(val: CollaborationAllowlistEntryTypeField): Json {
    return val;
}
export function newDeserializeCollaborationAllowlistEntryTypeField(val: any): CollaborationAllowlistEntryTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CollaborationAllowlistEntryTypeField\"";
    }
    if (val == "collaboration_whitelist_entry") {
        return "collaboration_whitelist_entry";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeCollaborationAllowlistEntryDirectionField(val: CollaborationAllowlistEntryDirectionField): Json {
    return val;
}
export function newDeserializeCollaborationAllowlistEntryDirectionField(val: any): CollaborationAllowlistEntryDirectionField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CollaborationAllowlistEntryDirectionField\"";
    }
    if (val == "inbound") {
        return "inbound";
    }
    if (val == "outbound") {
        return "outbound";
    }
    if (val == "both") {
        return "both";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeCollaborationAllowlistEntryEnterpriseFieldTypeField(val: CollaborationAllowlistEntryEnterpriseFieldTypeField): Json {
    return val;
}
export function newDeserializeCollaborationAllowlistEntryEnterpriseFieldTypeField(val: any): CollaborationAllowlistEntryEnterpriseFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CollaborationAllowlistEntryEnterpriseFieldTypeField\"";
    }
    if (val == "enterprise") {
        return "enterprise";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeCollaborationAllowlistEntryEnterpriseField(val: CollaborationAllowlistEntryEnterpriseField): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : newSerializeCollaborationAllowlistEntryEnterpriseFieldTypeField(val.type), ["name"]: val.name };
}
export function newDeserializeCollaborationAllowlistEntryEnterpriseField(val: any): CollaborationAllowlistEntryEnterpriseField {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | CollaborationAllowlistEntryEnterpriseFieldTypeField = val.type == void 0 ? void 0 : newDeserializeCollaborationAllowlistEntryEnterpriseFieldTypeField(val.type);
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    return { id: id, type: type, name: name } satisfies CollaborationAllowlistEntryEnterpriseField;
}
export function newSerializeCollaborationAllowlistEntry(val: CollaborationAllowlistEntry): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : newSerializeCollaborationAllowlistEntryTypeField(val.type), ["domain"]: val.domain, ["direction"]: val.direction == void 0 ? void 0 : newSerializeCollaborationAllowlistEntryDirectionField(val.direction), ["enterprise"]: val.enterprise == void 0 ? void 0 : newSerializeCollaborationAllowlistEntryEnterpriseField(val.enterprise), ["created_at"]: val.createdAt };
}
export function newDeserializeCollaborationAllowlistEntry(val: any): CollaborationAllowlistEntry {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | CollaborationAllowlistEntryTypeField = val.type == void 0 ? void 0 : newDeserializeCollaborationAllowlistEntryTypeField(val.type);
    const domain: undefined | string = isJson(val.domain, "string") ? val.domain : void 0;
    const direction: undefined | CollaborationAllowlistEntryDirectionField = val.direction == void 0 ? void 0 : newDeserializeCollaborationAllowlistEntryDirectionField(val.direction);
    const enterprise: undefined | CollaborationAllowlistEntryEnterpriseField = val.enterprise == void 0 ? void 0 : newDeserializeCollaborationAllowlistEntryEnterpriseField(val.enterprise);
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    return { id: id, type: type, domain: domain, direction: direction, enterprise: enterprise, createdAt: createdAt } satisfies CollaborationAllowlistEntry;
}
export function newSerializeCollaborationAllowlistEntries(val: CollaborationAllowlistEntries): Json {
    return { ["limit"]: val.limit, ["next_marker"]: val.nextMarker, ["prev_marker"]: val.prevMarker, ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: CollaborationAllowlistEntry): any {
            return newSerializeCollaborationAllowlistEntry(item);
        }) as readonly any[] };
}
export function newDeserializeCollaborationAllowlistEntries(val: any): CollaborationAllowlistEntries {
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const nextMarker: undefined | number = isJson(val.next_marker, "number") ? val.next_marker : void 0;
    const prevMarker: undefined | number = isJson(val.prev_marker, "number") ? val.prev_marker : void 0;
    const entries: undefined | readonly CollaborationAllowlistEntry[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return newDeserializeCollaborationAllowlistEntry(itm);
    }) as readonly any[] : void 0;
    return { limit: limit, nextMarker: nextMarker, prevMarker: prevMarker, entries: entries } satisfies CollaborationAllowlistEntries;
}
export function newSerializeCollaborationAllowlistExemptTargetTypeField(val: CollaborationAllowlistExemptTargetTypeField): Json {
    return val;
}
export function newDeserializeCollaborationAllowlistExemptTargetTypeField(val: any): CollaborationAllowlistExemptTargetTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CollaborationAllowlistExemptTargetTypeField\"";
    }
    if (val == "collaboration_whitelist") {
        return "collaboration_whitelist";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeCollaborationAllowlistExemptTargetEnterpriseFieldTypeField(val: CollaborationAllowlistExemptTargetEnterpriseFieldTypeField): Json {
    return val;
}
export function newDeserializeCollaborationAllowlistExemptTargetEnterpriseFieldTypeField(val: any): CollaborationAllowlistExemptTargetEnterpriseFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CollaborationAllowlistExemptTargetEnterpriseFieldTypeField\"";
    }
    if (val == "enterprise") {
        return "enterprise";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeCollaborationAllowlistExemptTargetEnterpriseField(val: CollaborationAllowlistExemptTargetEnterpriseField): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : newSerializeCollaborationAllowlistExemptTargetEnterpriseFieldTypeField(val.type), ["name"]: val.name };
}
export function newDeserializeCollaborationAllowlistExemptTargetEnterpriseField(val: any): CollaborationAllowlistExemptTargetEnterpriseField {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | CollaborationAllowlistExemptTargetEnterpriseFieldTypeField = val.type == void 0 ? void 0 : newDeserializeCollaborationAllowlistExemptTargetEnterpriseFieldTypeField(val.type);
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    return { id: id, type: type, name: name } satisfies CollaborationAllowlistExemptTargetEnterpriseField;
}
export function newSerializeCollaborationAllowlistExemptTargetUserFieldTypeField(val: CollaborationAllowlistExemptTargetUserFieldTypeField): Json {
    return val;
}
export function newDeserializeCollaborationAllowlistExemptTargetUserFieldTypeField(val: any): CollaborationAllowlistExemptTargetUserFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CollaborationAllowlistExemptTargetUserFieldTypeField\"";
    }
    if (val == "enterprise") {
        return "enterprise";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeCollaborationAllowlistExemptTargetUserField(val: CollaborationAllowlistExemptTargetUserField): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : newSerializeCollaborationAllowlistExemptTargetUserFieldTypeField(val.type), ["name"]: val.name };
}
export function newDeserializeCollaborationAllowlistExemptTargetUserField(val: any): CollaborationAllowlistExemptTargetUserField {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | CollaborationAllowlistExemptTargetUserFieldTypeField = val.type == void 0 ? void 0 : newDeserializeCollaborationAllowlistExemptTargetUserFieldTypeField(val.type);
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    return { id: id, type: type, name: name } satisfies CollaborationAllowlistExemptTargetUserField;
}
export function newSerializeCollaborationAllowlistExemptTarget(val: CollaborationAllowlistExemptTarget): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : newSerializeCollaborationAllowlistExemptTargetTypeField(val.type), ["enterprise"]: val.enterprise == void 0 ? void 0 : newSerializeCollaborationAllowlistExemptTargetEnterpriseField(val.enterprise), ["user"]: val.user == void 0 ? void 0 : newSerializeCollaborationAllowlistExemptTargetUserField(val.user), ["created_at"]: val.createdAt, ["modified_at"]: val.modifiedAt };
}
export function newDeserializeCollaborationAllowlistExemptTarget(val: any): CollaborationAllowlistExemptTarget {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | CollaborationAllowlistExemptTargetTypeField = val.type == void 0 ? void 0 : newDeserializeCollaborationAllowlistExemptTargetTypeField(val.type);
    const enterprise: undefined | CollaborationAllowlistExemptTargetEnterpriseField = val.enterprise == void 0 ? void 0 : newDeserializeCollaborationAllowlistExemptTargetEnterpriseField(val.enterprise);
    const user: undefined | CollaborationAllowlistExemptTargetUserField = val.user == void 0 ? void 0 : newDeserializeCollaborationAllowlistExemptTargetUserField(val.user);
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const modifiedAt: undefined | string = isJson(val.modified_at, "string") ? val.modified_at : void 0;
    return { id: id, type: type, enterprise: enterprise, user: user, createdAt: createdAt, modifiedAt: modifiedAt } satisfies CollaborationAllowlistExemptTarget;
}
export function newSerializeCollaborationAllowlistExemptTargets(val: CollaborationAllowlistExemptTargets): Json {
    return { ["limit"]: val.limit, ["next_marker"]: val.nextMarker, ["prev_marker"]: val.prevMarker, ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: CollaborationAllowlistExemptTarget): any {
            return newSerializeCollaborationAllowlistExemptTarget(item);
        }) as readonly any[] };
}
export function newDeserializeCollaborationAllowlistExemptTargets(val: any): CollaborationAllowlistExemptTargets {
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const nextMarker: undefined | number = isJson(val.next_marker, "number") ? val.next_marker : void 0;
    const prevMarker: undefined | number = isJson(val.prev_marker, "number") ? val.prev_marker : void 0;
    const entries: undefined | readonly CollaborationAllowlistExemptTarget[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return newDeserializeCollaborationAllowlistExemptTarget(itm);
    }) as readonly any[] : void 0;
    return { limit: limit, nextMarker: nextMarker, prevMarker: prevMarker, entries: entries } satisfies CollaborationAllowlistExemptTargets;
}
export function newSerializeCollectionTypeField(val: CollectionTypeField): Json {
    return val;
}
export function newDeserializeCollectionTypeField(val: any): CollectionTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CollectionTypeField\"";
    }
    if (val == "collection") {
        return "collection";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeCollectionNameField(val: CollectionNameField): Json {
    return val;
}
export function newDeserializeCollectionNameField(val: any): CollectionNameField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CollectionNameField\"";
    }
    if (val == "Favorites") {
        return "Favorites";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeCollectionCollectionTypeField(val: CollectionCollectionTypeField): Json {
    return val;
}
export function newDeserializeCollectionCollectionTypeField(val: any): CollectionCollectionTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CollectionCollectionTypeField\"";
    }
    if (val == "favorites") {
        return "favorites";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeCollection(val: Collection): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : newSerializeCollectionTypeField(val.type), ["name"]: val.name == void 0 ? void 0 : newSerializeCollectionNameField(val.name), ["collection_type"]: val.collectionType == void 0 ? void 0 : newSerializeCollectionCollectionTypeField(val.collectionType) };
}
export function newDeserializeCollection(val: any): Collection {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | CollectionTypeField = val.type == void 0 ? void 0 : newDeserializeCollectionTypeField(val.type);
    const name: undefined | CollectionNameField = val.name == void 0 ? void 0 : newDeserializeCollectionNameField(val.name);
    const collectionType: undefined | CollectionCollectionTypeField = val.collection_type == void 0 ? void 0 : newDeserializeCollectionCollectionTypeField(val.collection_type);
    return { id: id, type: type, name: name, collectionType: collectionType } satisfies Collection;
}
export function newSerializeCollectionsOrderFieldDirectionField(val: CollectionsOrderFieldDirectionField): Json {
    return val;
}
export function newDeserializeCollectionsOrderFieldDirectionField(val: any): CollectionsOrderFieldDirectionField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CollectionsOrderFieldDirectionField\"";
    }
    if (val == "ASC") {
        return "ASC";
    }
    if (val == "DESC") {
        return "DESC";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeCollectionsOrderField(val: CollectionsOrderField): Json {
    return { ["by"]: val.by, ["direction"]: val.direction == void 0 ? void 0 : newSerializeCollectionsOrderFieldDirectionField(val.direction) };
}
export function newDeserializeCollectionsOrderField(val: any): CollectionsOrderField {
    const by: undefined | string = isJson(val.by, "string") ? val.by : void 0;
    const direction: undefined | CollectionsOrderFieldDirectionField = val.direction == void 0 ? void 0 : newDeserializeCollectionsOrderFieldDirectionField(val.direction);
    return { by: by, direction: direction } satisfies CollectionsOrderField;
}
export function newSerializeCollections(val: Collections): Json {
    return { ["total_count"]: val.totalCount, ["limit"]: val.limit, ["offset"]: val.offset, ["order"]: val.order == void 0 ? void 0 : val.order.map(function (item: CollectionsOrderField): any {
            return newSerializeCollectionsOrderField(item);
        }) as readonly any[], ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: Collection): any {
            return newSerializeCollection(item);
        }) as readonly any[] };
}
export function newDeserializeCollections(val: any): Collections {
    const totalCount: undefined | number = isJson(val.total_count, "number") ? val.total_count : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const offset: undefined | number = isJson(val.offset, "number") ? val.offset : void 0;
    const order: undefined | readonly CollectionsOrderField[] = isJson(val.order, "array") ? val.order.map(function (itm: Json): any {
        return newDeserializeCollectionsOrderField(itm);
    }) as readonly any[] : void 0;
    const entries: undefined | readonly Collection[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return newDeserializeCollection(itm);
    }) as readonly any[] : void 0;
    return { totalCount: totalCount, limit: limit, offset: offset, order: order, entries: entries } satisfies Collections;
}
export function newSerializeCommentBaseTypeField(val: CommentBaseTypeField): Json {
    return val;
}
export function newDeserializeCommentBaseTypeField(val: any): CommentBaseTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CommentBaseTypeField\"";
    }
    if (val == "comment") {
        return "comment";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeCommentBase(val: CommentBase): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : newSerializeCommentBaseTypeField(val.type) };
}
export function newDeserializeCommentBase(val: any): CommentBase {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | CommentBaseTypeField = val.type == void 0 ? void 0 : newDeserializeCommentBaseTypeField(val.type);
    return { id: id, type: type } satisfies CommentBase;
}
export function newSerializeEmailAliasTypeField(val: EmailAliasTypeField): Json {
    return val;
}
export function newDeserializeEmailAliasTypeField(val: any): EmailAliasTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"EmailAliasTypeField\"";
    }
    if (val == "email_alias") {
        return "email_alias";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeEmailAlias(val: EmailAlias): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : newSerializeEmailAliasTypeField(val.type), ["email"]: val.email, ["is_confirmed"]: val.isConfirmed };
}
export function newDeserializeEmailAlias(val: any): EmailAlias {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | EmailAliasTypeField = val.type == void 0 ? void 0 : newDeserializeEmailAliasTypeField(val.type);
    const email: undefined | string = isJson(val.email, "string") ? val.email : void 0;
    const isConfirmed: undefined | boolean = isJson(val.is_confirmed, "boolean") ? val.is_confirmed : void 0;
    return { id: id, type: type, email: email, isConfirmed: isConfirmed } satisfies EmailAlias;
}
export function newSerializeEmailAliases(val: EmailAliases): Json {
    return { ["total_count"]: val.totalCount, ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: EmailAlias): any {
            return newSerializeEmailAlias(item);
        }) as readonly any[] };
}
export function newDeserializeEmailAliases(val: any): EmailAliases {
    const totalCount: undefined | number = isJson(val.total_count, "number") ? val.total_count : void 0;
    const entries: undefined | readonly EmailAlias[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return newDeserializeEmailAlias(itm);
    }) as readonly any[] : void 0;
    return { totalCount: totalCount, entries: entries } satisfies EmailAliases;
}
export function newSerializeEnterpriseBaseTypeField(val: EnterpriseBaseTypeField): Json {
    return val;
}
export function newDeserializeEnterpriseBaseTypeField(val: any): EnterpriseBaseTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"EnterpriseBaseTypeField\"";
    }
    if (val == "enterprise") {
        return "enterprise";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeEnterpriseBase(val: EnterpriseBase): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : newSerializeEnterpriseBaseTypeField(val.type) };
}
export function newDeserializeEnterpriseBase(val: any): EnterpriseBase {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | EnterpriseBaseTypeField = val.type == void 0 ? void 0 : newDeserializeEnterpriseBaseTypeField(val.type);
    return { id: id, type: type } satisfies EnterpriseBase;
}
export function newSerializeFileBaseTypeField(val: FileBaseTypeField): Json {
    return val;
}
export function newDeserializeFileBaseTypeField(val: any): FileBaseTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"FileBaseTypeField\"";
    }
    if (val == "file") {
        return "file";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeFileBase(val: FileBase): Json {
    return { ["id"]: val.id, ["etag"]: val.etag, ["type"]: newSerializeFileBaseTypeField(val.type) };
}
export function newDeserializeFileBase(val: any): FileBase {
    const id: string = val.id;
    const etag: undefined | string = isJson(val.etag, "string") ? val.etag : void 0;
    const type: FileBaseTypeField = newDeserializeFileBaseTypeField(val.type);
    return { id: id, etag: etag, type: type } satisfies FileBase;
}
export function newSerializeFileVersionBaseTypeField(val: FileVersionBaseTypeField): Json {
    return val;
}
export function newDeserializeFileVersionBaseTypeField(val: any): FileVersionBaseTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"FileVersionBaseTypeField\"";
    }
    if (val == "file_version") {
        return "file_version";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeFileVersionBase(val: FileVersionBase): Json {
    return { ["id"]: val.id, ["type"]: newSerializeFileVersionBaseTypeField(val.type) };
}
export function newDeserializeFileVersionBase(val: any): FileVersionBase {
    const id: string = val.id;
    const type: FileVersionBaseTypeField = newDeserializeFileVersionBaseTypeField(val.type);
    return { id: id, type: type } satisfies FileVersionBase;
}
export function newSerializeFileVersionMini(val: FileVersionMini): Json {
    const base: any = newSerializeFileVersionBase(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"FileVersionMini\"";
    }
    return { ...base, ...{ ["sha1"]: val.sha1 } };
}
export function newDeserializeFileVersionMini(val: any): FileVersionMini {
    const sha1: undefined | string = isJson(val.sha1, "string") ? val.sha1 : void 0;
    const id: string = val.id;
    const type: FileVersionBaseTypeField = newDeserializeFileVersionBaseTypeField(val.type);
    return { sha1: sha1, id: id, type: type } satisfies FileVersionMini;
}
export function newSerializeFileMini(val: FileMini): Json {
    const base: any = newSerializeFileBase(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"FileMini\"";
    }
    return { ...base, ...{ ["sequence_id"]: val.sequenceId, ["name"]: val.name, ["sha1"]: val.sha1, ["file_version"]: val.fileVersion == void 0 ? void 0 : newSerializeFileVersionMini(val.fileVersion) } };
}
export function newDeserializeFileMini(val: any): FileMini {
    const sequenceId: undefined | string = isJson(val.sequence_id, "string") ? val.sequence_id : void 0;
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const sha1: undefined | string = isJson(val.sha1, "string") ? val.sha1 : void 0;
    const fileVersion: undefined | FileVersionMini = val.file_version == void 0 ? void 0 : newDeserializeFileVersionMini(val.file_version);
    const id: string = val.id;
    const etag: undefined | string = isJson(val.etag, "string") ? val.etag : void 0;
    const type: FileBaseTypeField = newDeserializeFileBaseTypeField(val.type);
    return { sequenceId: sequenceId, name: name, sha1: sha1, fileVersion: fileVersion, id: id, etag: etag, type: type } satisfies FileMini;
}
export function newSerializeFileScopeScopeField(val: FileScopeScopeField): Json {
    return val;
}
export function newDeserializeFileScopeScopeField(val: any): FileScopeScopeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"FileScopeScopeField\"";
    }
    if (val == "annotation_edit") {
        return "annotation_edit";
    }
    if (val == "annotation_view_all") {
        return "annotation_view_all";
    }
    if (val == "annotation_view_self") {
        return "annotation_view_self";
    }
    if (val == "base_explorer") {
        return "base_explorer";
    }
    if (val == "base_picker") {
        return "base_picker";
    }
    if (val == "base_preview") {
        return "base_preview";
    }
    if (val == "base_upload") {
        return "base_upload";
    }
    if (val == "item_delete") {
        return "item_delete";
    }
    if (val == "item_download") {
        return "item_download";
    }
    if (val == "item_preview") {
        return "item_preview";
    }
    if (val == "item_rename") {
        return "item_rename";
    }
    if (val == "item_share") {
        return "item_share";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeFileScope(val: FileScope): Json {
    return { ["scope"]: val.scope == void 0 ? void 0 : newSerializeFileScopeScopeField(val.scope), ["object"]: val.object == void 0 ? void 0 : newSerializeFileMini(val.object) };
}
export function newDeserializeFileScope(val: any): FileScope {
    const scope: undefined | FileScopeScopeField = val.scope == void 0 ? void 0 : newDeserializeFileScopeScopeField(val.scope);
    const object: undefined | FileMini = val.object == void 0 ? void 0 : newDeserializeFileMini(val.object);
    return { scope: scope, object: object } satisfies FileScope;
}
export function newSerializeAccessTokenTokenTypeField(val: AccessTokenTokenTypeField): Json {
    return val;
}
export function newDeserializeAccessTokenTokenTypeField(val: any): AccessTokenTokenTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"AccessTokenTokenTypeField\"";
    }
    if (val == "bearer") {
        return "bearer";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeAccessTokenIssuedTokenTypeField(val: AccessTokenIssuedTokenTypeField): Json {
    return val;
}
export function newDeserializeAccessTokenIssuedTokenTypeField(val: any): AccessTokenIssuedTokenTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"AccessTokenIssuedTokenTypeField\"";
    }
    if (val == "urn:ietf:params:oauth:token-type:access_token") {
        return "urn:ietf:params:oauth:token-type:access_token";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeAccessToken(val: AccessToken): Json {
    return { ["access_token"]: val.accessToken, ["expires_in"]: val.expiresIn, ["token_type"]: val.tokenType == void 0 ? void 0 : newSerializeAccessTokenTokenTypeField(val.tokenType), ["restricted_to"]: val.restrictedTo == void 0 ? void 0 : val.restrictedTo.map(function (item: FileScope): any {
            return newSerializeFileScope(item);
        }) as readonly any[], ["refresh_token"]: val.refreshToken, ["issued_token_type"]: val.issuedTokenType == void 0 ? void 0 : newSerializeAccessTokenIssuedTokenTypeField(val.issuedTokenType) };
}
export function newDeserializeAccessToken(val: any): AccessToken {
    const accessToken: undefined | string = isJson(val.access_token, "string") ? val.access_token : void 0;
    const expiresIn: undefined | number = isJson(val.expires_in, "number") ? val.expires_in : void 0;
    const tokenType: undefined | AccessTokenTokenTypeField = val.token_type == void 0 ? void 0 : newDeserializeAccessTokenTokenTypeField(val.token_type);
    const restrictedTo: undefined | readonly FileScope[] = isJson(val.restricted_to, "array") ? val.restricted_to.map(function (itm: Json): any {
        return newDeserializeFileScope(itm);
    }) as readonly any[] : void 0;
    const refreshToken: undefined | string = isJson(val.refresh_token, "string") ? val.refresh_token : void 0;
    const issuedTokenType: undefined | AccessTokenIssuedTokenTypeField = val.issued_token_type == void 0 ? void 0 : newDeserializeAccessTokenIssuedTokenTypeField(val.issued_token_type);
    return { accessToken: accessToken, expiresIn: expiresIn, tokenType: tokenType, restrictedTo: restrictedTo, refreshToken: refreshToken, issuedTokenType: issuedTokenType } satisfies AccessToken;
}
export function newSerializeFilesUnderRetention(val: FilesUnderRetention): Json {
    return { ["limit"]: val.limit, ["next_marker"]: val.nextMarker, ["prev_marker"]: val.prevMarker, ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: FileMini): any {
            return newSerializeFileMini(item);
        }) as readonly any[] };
}
export function newDeserializeFilesUnderRetention(val: any): FilesUnderRetention {
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const nextMarker: undefined | number = isJson(val.next_marker, "number") ? val.next_marker : void 0;
    const prevMarker: undefined | number = isJson(val.prev_marker, "number") ? val.prev_marker : void 0;
    const entries: undefined | readonly FileMini[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return newDeserializeFileMini(itm);
    }) as readonly any[] : void 0;
    return { limit: limit, nextMarker: nextMarker, prevMarker: prevMarker, entries: entries } satisfies FilesUnderRetention;
}
export function newSerializeFileConflict(val: FileConflict): Json {
    const base: any = newSerializeFileMini(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"FileConflict\"";
    }
    return { ...base, ...{ ["sha1"]: val.sha1, ["file_version"]: val.fileVersion == void 0 ? void 0 : newSerializeFileVersionMini(val.fileVersion) } };
}
export function newDeserializeFileConflict(val: any): FileConflict {
    const sha1: undefined | string = isJson(val.sha1, "string") ? val.sha1 : void 0;
    const fileVersion: undefined | FileVersionMini = val.file_version == void 0 ? void 0 : newDeserializeFileVersionMini(val.file_version);
    const sequenceId: undefined | string = isJson(val.sequence_id, "string") ? val.sequence_id : void 0;
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const id: string = val.id;
    const etag: undefined | string = isJson(val.etag, "string") ? val.etag : void 0;
    const type: FileBaseTypeField = newDeserializeFileBaseTypeField(val.type);
    return { sha1: sha1, fileVersion: fileVersion, sequenceId: sequenceId, name: name, id: id, etag: etag, type: type } satisfies FileConflict;
}
export function newSerializeConflictErrorContextInfoField(val: ConflictErrorContextInfoField): Json {
    return { ["conflicts"]: val.conflicts == void 0 ? void 0 : val.conflicts.map(function (item: FileConflict): any {
            return newSerializeFileConflict(item);
        }) as readonly any[] };
}
export function newDeserializeConflictErrorContextInfoField(val: any): ConflictErrorContextInfoField {
    const conflicts: undefined | readonly FileConflict[] = isJson(val.conflicts, "array") ? val.conflicts.map(function (itm: Json): any {
        return newDeserializeFileConflict(itm);
    }) as readonly any[] : void 0;
    return { conflicts: conflicts } satisfies ConflictErrorContextInfoField;
}
export function newSerializeConflictError(val: ConflictError): Json {
    const base: any = newSerializeClientError(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"ConflictError\"";
    }
    return { ...base, ...{ ["context_info"]: val.contextInfo == void 0 ? void 0 : newSerializeConflictErrorContextInfoField(val.contextInfo) } };
}
export function newDeserializeConflictError(val: any): ConflictError {
    const contextInfo: undefined | ClientErrorContextInfoField = val.context_info == void 0 ? void 0 : newDeserializeClientErrorContextInfoField(val.context_info);
    const type: undefined | ClientErrorTypeField = val.type == void 0 ? void 0 : newDeserializeClientErrorTypeField(val.type);
    const status: undefined | number = isJson(val.status, "number") ? val.status : void 0;
    const code: undefined | ClientErrorCodeField = val.code == void 0 ? void 0 : newDeserializeClientErrorCodeField(val.code);
    const message: undefined | string = isJson(val.message, "string") ? val.message : void 0;
    const helpUrl: undefined | string = isJson(val.help_url, "string") ? val.help_url : void 0;
    const requestId: undefined | string = isJson(val.request_id, "string") ? val.request_id : void 0;
    return { contextInfo: contextInfo, type: type, status: status, code: code, message: message, helpUrl: helpUrl, requestId: requestId } satisfies ConflictError;
}
export function newSerializeFolderBaseTypeField(val: FolderBaseTypeField): Json {
    return val;
}
export function newDeserializeFolderBaseTypeField(val: any): FolderBaseTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"FolderBaseTypeField\"";
    }
    if (val == "folder") {
        return "folder";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeFolderBase(val: FolderBase): Json {
    return { ["id"]: val.id, ["etag"]: val.etag, ["type"]: newSerializeFolderBaseTypeField(val.type) };
}
export function newDeserializeFolderBase(val: any): FolderBase {
    const id: string = val.id;
    const etag: undefined | string = isJson(val.etag, "string") ? val.etag : void 0;
    const type: FolderBaseTypeField = newDeserializeFolderBaseTypeField(val.type);
    return { id: id, etag: etag, type: type } satisfies FolderBase;
}
export function newSerializeFolderMini(val: FolderMini): Json {
    const base: any = newSerializeFolderBase(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"FolderMini\"";
    }
    return { ...base, ...{ ["name"]: val.name, ["sequence_id"]: val.sequenceId } };
}
export function newDeserializeFolderMini(val: any): FolderMini {
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const sequenceId: undefined | string = isJson(val.sequence_id, "string") ? val.sequence_id : void 0;
    const id: string = val.id;
    const etag: undefined | string = isJson(val.etag, "string") ? val.etag : void 0;
    const type: FolderBaseTypeField = newDeserializeFolderBaseTypeField(val.type);
    return { name: name, sequenceId: sequenceId, id: id, etag: etag, type: type } satisfies FolderMini;
}
export function newSerializeIntegrationMappingBaseIntegrationTypeField(val: IntegrationMappingBaseIntegrationTypeField): Json {
    return val;
}
export function newDeserializeIntegrationMappingBaseIntegrationTypeField(val: any): IntegrationMappingBaseIntegrationTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"IntegrationMappingBaseIntegrationTypeField\"";
    }
    if (val == "slack") {
        return "slack";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeIntegrationMappingBase(val: IntegrationMappingBase): Json {
    return { ["id"]: val.id, ["integration_type"]: val.integrationType == void 0 ? void 0 : newSerializeIntegrationMappingBaseIntegrationTypeField(val.integrationType) };
}
export function newDeserializeIntegrationMappingBase(val: any): IntegrationMappingBase {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const integrationType: undefined | IntegrationMappingBaseIntegrationTypeField = val.integration_type == void 0 ? void 0 : newDeserializeIntegrationMappingBaseIntegrationTypeField(val.integration_type);
    return { id: id, integrationType: integrationType } satisfies IntegrationMappingBase;
}
export function newSerializeIntegrationMappingMiniPartnerItemTypeField(val: IntegrationMappingMiniPartnerItemTypeField): Json {
    return val;
}
export function newDeserializeIntegrationMappingMiniPartnerItemTypeField(val: any): IntegrationMappingMiniPartnerItemTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"IntegrationMappingMiniPartnerItemTypeField\"";
    }
    if (val == "channel") {
        return "channel";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeIntegrationMappingMiniBoxItemTypeField(val: IntegrationMappingMiniBoxItemTypeField): Json {
    return val;
}
export function newDeserializeIntegrationMappingMiniBoxItemTypeField(val: any): IntegrationMappingMiniBoxItemTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"IntegrationMappingMiniBoxItemTypeField\"";
    }
    if (val == "folder") {
        return "folder";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeIntegrationMappingMini(val: IntegrationMappingMini): Json {
    const base: any = newSerializeIntegrationMappingBase(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"IntegrationMappingMini\"";
    }
    return { ...base, ...{ ["partner_item_id"]: val.partnerItemId, ["partner_item_type"]: val.partnerItemType == void 0 ? void 0 : newSerializeIntegrationMappingMiniPartnerItemTypeField(val.partnerItemType), ["box_item_id"]: val.boxItemId, ["box_item_type"]: val.boxItemType == void 0 ? void 0 : newSerializeIntegrationMappingMiniBoxItemTypeField(val.boxItemType) } };
}
export function newDeserializeIntegrationMappingMini(val: any): IntegrationMappingMini {
    const partnerItemId: undefined | string = isJson(val.partner_item_id, "string") ? val.partner_item_id : void 0;
    const partnerItemType: undefined | IntegrationMappingMiniPartnerItemTypeField = val.partner_item_type == void 0 ? void 0 : newDeserializeIntegrationMappingMiniPartnerItemTypeField(val.partner_item_type);
    const boxItemId: undefined | string = isJson(val.box_item_id, "string") ? val.box_item_id : void 0;
    const boxItemType: undefined | IntegrationMappingMiniBoxItemTypeField = val.box_item_type == void 0 ? void 0 : newDeserializeIntegrationMappingMiniBoxItemTypeField(val.box_item_type);
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const integrationType: undefined | IntegrationMappingBaseIntegrationTypeField = val.integration_type == void 0 ? void 0 : newDeserializeIntegrationMappingBaseIntegrationTypeField(val.integration_type);
    return { partnerItemId: partnerItemId, partnerItemType: partnerItemType, boxItemId: boxItemId, boxItemType: boxItemType, id: id, integrationType: integrationType } satisfies IntegrationMappingMini;
}
export function newSerializeGroupBaseTypeField(val: GroupBaseTypeField): Json {
    return val;
}
export function newDeserializeGroupBaseTypeField(val: any): GroupBaseTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"GroupBaseTypeField\"";
    }
    if (val == "group") {
        return "group";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeGroupBase(val: GroupBase): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : newSerializeGroupBaseTypeField(val.type) };
}
export function newDeserializeGroupBase(val: any): GroupBase {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | GroupBaseTypeField = val.type == void 0 ? void 0 : newDeserializeGroupBaseTypeField(val.type);
    return { id: id, type: type } satisfies GroupBase;
}
export function newSerializeGroupMiniGroupTypeField(val: GroupMiniGroupTypeField): Json {
    return val;
}
export function newDeserializeGroupMiniGroupTypeField(val: any): GroupMiniGroupTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"GroupMiniGroupTypeField\"";
    }
    if (val == "managed_group") {
        return "managed_group";
    }
    if (val == "all_users_group") {
        return "all_users_group";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeGroupMini(val: GroupMini): Json {
    const base: any = newSerializeGroupBase(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"GroupMini\"";
    }
    return { ...base, ...{ ["name"]: val.name, ["group_type"]: val.groupType == void 0 ? void 0 : newSerializeGroupMiniGroupTypeField(val.groupType) } };
}
export function newDeserializeGroupMini(val: any): GroupMini {
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const groupType: undefined | GroupMiniGroupTypeField = val.group_type == void 0 ? void 0 : newDeserializeGroupMiniGroupTypeField(val.group_type);
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | GroupBaseTypeField = val.type == void 0 ? void 0 : newDeserializeGroupBaseTypeField(val.type);
    return { name: name, groupType: groupType, id: id, type: type } satisfies GroupMini;
}
export function newSerializeGroupsOrderFieldDirectionField(val: GroupsOrderFieldDirectionField): Json {
    return val;
}
export function newDeserializeGroupsOrderFieldDirectionField(val: any): GroupsOrderFieldDirectionField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"GroupsOrderFieldDirectionField\"";
    }
    if (val == "ASC") {
        return "ASC";
    }
    if (val == "DESC") {
        return "DESC";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeGroupsOrderField(val: GroupsOrderField): Json {
    return { ["by"]: val.by, ["direction"]: val.direction == void 0 ? void 0 : newSerializeGroupsOrderFieldDirectionField(val.direction) };
}
export function newDeserializeGroupsOrderField(val: any): GroupsOrderField {
    const by: undefined | string = isJson(val.by, "string") ? val.by : void 0;
    const direction: undefined | GroupsOrderFieldDirectionField = val.direction == void 0 ? void 0 : newDeserializeGroupsOrderFieldDirectionField(val.direction);
    return { by: by, direction: direction } satisfies GroupsOrderField;
}
export function newSerializeGroups(val: Groups): Json {
    return { ["total_count"]: val.totalCount, ["limit"]: val.limit, ["offset"]: val.offset, ["order"]: val.order == void 0 ? void 0 : val.order.map(function (item: GroupsOrderField): any {
            return newSerializeGroupsOrderField(item);
        }) as readonly any[], ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: GroupMini): any {
            return newSerializeGroupMini(item);
        }) as readonly any[] };
}
export function newDeserializeGroups(val: any): Groups {
    const totalCount: undefined | number = isJson(val.total_count, "number") ? val.total_count : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const offset: undefined | number = isJson(val.offset, "number") ? val.offset : void 0;
    const order: undefined | readonly GroupsOrderField[] = isJson(val.order, "array") ? val.order.map(function (itm: Json): any {
        return newDeserializeGroupsOrderField(itm);
    }) as readonly any[] : void 0;
    const entries: undefined | readonly GroupMini[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return newDeserializeGroupMini(itm);
    }) as readonly any[] : void 0;
    return { totalCount: totalCount, limit: limit, offset: offset, order: order, entries: entries } satisfies Groups;
}
export function newSerializeGroup(val: Group): Json {
    const base: any = newSerializeGroupMini(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"Group\"";
    }
    return { ...base, ...{ ["created_at"]: val.createdAt, ["modified_at"]: val.modifiedAt } };
}
export function newDeserializeGroup(val: any): Group {
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const modifiedAt: undefined | string = isJson(val.modified_at, "string") ? val.modified_at : void 0;
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const groupType: undefined | GroupMiniGroupTypeField = val.group_type == void 0 ? void 0 : newDeserializeGroupMiniGroupTypeField(val.group_type);
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | GroupBaseTypeField = val.type == void 0 ? void 0 : newDeserializeGroupBaseTypeField(val.type);
    return { createdAt: createdAt, modifiedAt: modifiedAt, name: name, groupType: groupType, id: id, type: type } satisfies Group;
}
export function newSerializeGroupFullInvitabilityLevelField(val: GroupFullInvitabilityLevelField): Json {
    return val;
}
export function newDeserializeGroupFullInvitabilityLevelField(val: any): GroupFullInvitabilityLevelField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"GroupFullInvitabilityLevelField\"";
    }
    if (val == "admins_only") {
        return "admins_only";
    }
    if (val == "admins_and_members") {
        return "admins_and_members";
    }
    if (val == "all_managed_users") {
        return "all_managed_users";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeGroupFullMemberViewabilityLevelField(val: GroupFullMemberViewabilityLevelField): Json {
    return val;
}
export function newDeserializeGroupFullMemberViewabilityLevelField(val: any): GroupFullMemberViewabilityLevelField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"GroupFullMemberViewabilityLevelField\"";
    }
    if (val == "admins_only") {
        return "admins_only";
    }
    if (val == "admins_and_members") {
        return "admins_and_members";
    }
    if (val == "all_managed_users") {
        return "all_managed_users";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeGroupFullPermissionsField(val: GroupFullPermissionsField): Json {
    return { ["can_invite_as_collaborator"]: val.canInviteAsCollaborator };
}
export function newDeserializeGroupFullPermissionsField(val: any): GroupFullPermissionsField {
    const canInviteAsCollaborator: undefined | boolean = isJson(val.can_invite_as_collaborator, "boolean") ? val.can_invite_as_collaborator : void 0;
    return { canInviteAsCollaborator: canInviteAsCollaborator } satisfies GroupFullPermissionsField;
}
export function newSerializeGroupFull(val: GroupFull): Json {
    const base: any = newSerializeGroup(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"GroupFull\"";
    }
    return { ...base, ...{ ["provenance"]: val.provenance, ["external_sync_identifier"]: val.externalSyncIdentifier, ["description"]: val.description, ["invitability_level"]: val.invitabilityLevel == void 0 ? void 0 : newSerializeGroupFullInvitabilityLevelField(val.invitabilityLevel), ["member_viewability_level"]: val.memberViewabilityLevel == void 0 ? void 0 : newSerializeGroupFullMemberViewabilityLevelField(val.memberViewabilityLevel), ["permissions"]: val.permissions == void 0 ? void 0 : newSerializeGroupFullPermissionsField(val.permissions) } };
}
export function newDeserializeGroupFull(val: any): GroupFull {
    const provenance: undefined | string = isJson(val.provenance, "string") ? val.provenance : void 0;
    const externalSyncIdentifier: undefined | string = isJson(val.external_sync_identifier, "string") ? val.external_sync_identifier : void 0;
    const description: undefined | string = isJson(val.description, "string") ? val.description : void 0;
    const invitabilityLevel: undefined | GroupFullInvitabilityLevelField = val.invitability_level == void 0 ? void 0 : newDeserializeGroupFullInvitabilityLevelField(val.invitability_level);
    const memberViewabilityLevel: undefined | GroupFullMemberViewabilityLevelField = val.member_viewability_level == void 0 ? void 0 : newDeserializeGroupFullMemberViewabilityLevelField(val.member_viewability_level);
    const permissions: undefined | GroupFullPermissionsField = val.permissions == void 0 ? void 0 : newDeserializeGroupFullPermissionsField(val.permissions);
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const modifiedAt: undefined | string = isJson(val.modified_at, "string") ? val.modified_at : void 0;
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const groupType: undefined | GroupMiniGroupTypeField = val.group_type == void 0 ? void 0 : newDeserializeGroupMiniGroupTypeField(val.group_type);
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | GroupBaseTypeField = val.type == void 0 ? void 0 : newDeserializeGroupBaseTypeField(val.type);
    return { provenance: provenance, externalSyncIdentifier: externalSyncIdentifier, description: description, invitabilityLevel: invitabilityLevel, memberViewabilityLevel: memberViewabilityLevel, permissions: permissions, createdAt: createdAt, modifiedAt: modifiedAt, name: name, groupType: groupType, id: id, type: type } satisfies GroupFull;
}
export function newSerializeLegalHoldPolicyMiniTypeField(val: LegalHoldPolicyMiniTypeField): Json {
    return val;
}
export function newDeserializeLegalHoldPolicyMiniTypeField(val: any): LegalHoldPolicyMiniTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"LegalHoldPolicyMiniTypeField\"";
    }
    if (val == "legal_hold_policy") {
        return "legal_hold_policy";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeLegalHoldPolicyMini(val: LegalHoldPolicyMini): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : newSerializeLegalHoldPolicyMiniTypeField(val.type) };
}
export function newDeserializeLegalHoldPolicyMini(val: any): LegalHoldPolicyMini {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | LegalHoldPolicyMiniTypeField = val.type == void 0 ? void 0 : newDeserializeLegalHoldPolicyMiniTypeField(val.type);
    return { id: id, type: type } satisfies LegalHoldPolicyMini;
}
export function newSerializeLegalHoldPolicyAssignmentBaseTypeField(val: LegalHoldPolicyAssignmentBaseTypeField): Json {
    return val;
}
export function newDeserializeLegalHoldPolicyAssignmentBaseTypeField(val: any): LegalHoldPolicyAssignmentBaseTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"LegalHoldPolicyAssignmentBaseTypeField\"";
    }
    if (val == "legal_hold_policy_assignment") {
        return "legal_hold_policy_assignment";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeLegalHoldPolicyAssignmentBase(val: LegalHoldPolicyAssignmentBase): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : newSerializeLegalHoldPolicyAssignmentBaseTypeField(val.type) };
}
export function newDeserializeLegalHoldPolicyAssignmentBase(val: any): LegalHoldPolicyAssignmentBase {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | LegalHoldPolicyAssignmentBaseTypeField = val.type == void 0 ? void 0 : newDeserializeLegalHoldPolicyAssignmentBaseTypeField(val.type);
    return { id: id, type: type } satisfies LegalHoldPolicyAssignmentBase;
}
export function newSerializeLegalHoldPolicyAssignments(val: LegalHoldPolicyAssignments): Json {
    return { ["limit"]: val.limit, ["next_marker"]: val.nextMarker, ["prev_marker"]: val.prevMarker, ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: LegalHoldPolicyAssignmentBase): any {
            return newSerializeLegalHoldPolicyAssignmentBase(item);
        }) as readonly any[] };
}
export function newDeserializeLegalHoldPolicyAssignments(val: any): LegalHoldPolicyAssignments {
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const nextMarker: undefined | number = isJson(val.next_marker, "number") ? val.next_marker : void 0;
    const prevMarker: undefined | number = isJson(val.prev_marker, "number") ? val.prev_marker : void 0;
    const entries: undefined | readonly LegalHoldPolicyAssignmentBase[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return newDeserializeLegalHoldPolicyAssignmentBase(itm);
    }) as readonly any[] : void 0;
    return { limit: limit, nextMarker: nextMarker, prevMarker: prevMarker, entries: entries } satisfies LegalHoldPolicyAssignments;
}
export function newSerializeMetadata(val: Metadata): Json {
    return {};
}
export function newDeserializeMetadata(val: any): Metadata {
    return {} satisfies Metadata;
}
export function newSerializeMetadatas(val: Metadatas): Json {
    return { ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: Metadata): any {
            return newSerializeMetadata(item);
        }) as readonly any[], ["limit"]: val.limit };
}
export function newDeserializeMetadatas(val: any): Metadatas {
    const entries: undefined | readonly Metadata[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return newDeserializeMetadata(itm);
    }) as readonly any[] : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    return { entries: entries, limit: limit } satisfies Metadatas;
}
export function newSerializeMetadataFull(val: MetadataFull): Json {
    const base: any = newSerializeMetadata(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"MetadataFull\"";
    }
    return { ...base, ...{ ["$canEdit"]: val.canEdit, ["$id"]: val.id, ["$type"]: val.type, ["$typeVersion"]: val.typeVersion } };
}
export function newDeserializeMetadataFull(val: any): MetadataFull {
    const canEdit: undefined | boolean = isJson(val.$canEdit, "boolean") ? val.$canEdit : void 0;
    const id: undefined | string = isJson(val.$id, "string") ? val.$id : void 0;
    const type: undefined | string = isJson(val.$type, "string") ? val.$type : void 0;
    const typeVersion: undefined | number = isJson(val.$typeVersion, "number") ? val.$typeVersion : void 0;
    return { canEdit: canEdit, id: id, type: type, typeVersion: typeVersion } satisfies MetadataFull;
}
export function newSerializeMetadataBase(val: MetadataBase): Json {
    return { ["$parent"]: val.parent, ["$template"]: val.template, ["$scope"]: val.scope, ["$version"]: val.version };
}
export function newDeserializeMetadataBase(val: any): MetadataBase {
    const parent: undefined | string = isJson(val.$parent, "string") ? val.$parent : void 0;
    const template: undefined | string = isJson(val.$template, "string") ? val.$template : void 0;
    const scope: undefined | string = isJson(val.$scope, "string") ? val.$scope : void 0;
    const version: undefined | number = isJson(val.$version, "number") ? val.$version : void 0;
    return { parent: parent, template: template, scope: scope, version: version } satisfies MetadataBase;
}
export function newSerializeMetadataCascadePolicyTypeField(val: MetadataCascadePolicyTypeField): Json {
    return val;
}
export function newDeserializeMetadataCascadePolicyTypeField(val: any): MetadataCascadePolicyTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"MetadataCascadePolicyTypeField\"";
    }
    if (val == "metadata_cascade_policy") {
        return "metadata_cascade_policy";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeMetadataCascadePolicyOwnerEnterpriseFieldTypeField(val: MetadataCascadePolicyOwnerEnterpriseFieldTypeField): Json {
    return val;
}
export function newDeserializeMetadataCascadePolicyOwnerEnterpriseFieldTypeField(val: any): MetadataCascadePolicyOwnerEnterpriseFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"MetadataCascadePolicyOwnerEnterpriseFieldTypeField\"";
    }
    if (val == "enterprise") {
        return "enterprise";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeMetadataCascadePolicyOwnerEnterpriseField(val: MetadataCascadePolicyOwnerEnterpriseField): Json {
    return { ["type"]: val.type == void 0 ? void 0 : newSerializeMetadataCascadePolicyOwnerEnterpriseFieldTypeField(val.type), ["id"]: val.id };
}
export function newDeserializeMetadataCascadePolicyOwnerEnterpriseField(val: any): MetadataCascadePolicyOwnerEnterpriseField {
    const type: undefined | MetadataCascadePolicyOwnerEnterpriseFieldTypeField = val.type == void 0 ? void 0 : newDeserializeMetadataCascadePolicyOwnerEnterpriseFieldTypeField(val.type);
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    return { type: type, id: id } satisfies MetadataCascadePolicyOwnerEnterpriseField;
}
export function newSerializeMetadataCascadePolicyParentFieldTypeField(val: MetadataCascadePolicyParentFieldTypeField): Json {
    return val;
}
export function newDeserializeMetadataCascadePolicyParentFieldTypeField(val: any): MetadataCascadePolicyParentFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"MetadataCascadePolicyParentFieldTypeField\"";
    }
    if (val == "folder") {
        return "folder";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeMetadataCascadePolicyParentField(val: MetadataCascadePolicyParentField): Json {
    return { ["type"]: val.type == void 0 ? void 0 : newSerializeMetadataCascadePolicyParentFieldTypeField(val.type), ["id"]: val.id };
}
export function newDeserializeMetadataCascadePolicyParentField(val: any): MetadataCascadePolicyParentField {
    const type: undefined | MetadataCascadePolicyParentFieldTypeField = val.type == void 0 ? void 0 : newDeserializeMetadataCascadePolicyParentFieldTypeField(val.type);
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    return { type: type, id: id } satisfies MetadataCascadePolicyParentField;
}
export function newSerializeMetadataCascadePolicyScopeField(val: MetadataCascadePolicyScopeField): Json {
    return val;
}
export function newDeserializeMetadataCascadePolicyScopeField(val: any): MetadataCascadePolicyScopeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"MetadataCascadePolicyScopeField\"";
    }
    if (val == "global") {
        return "global";
    }
    if (val == "enterprise_*") {
        return "enterprise_*";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeMetadataCascadePolicy(val: MetadataCascadePolicy): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : newSerializeMetadataCascadePolicyTypeField(val.type), ["owner_enterprise"]: val.ownerEnterprise == void 0 ? void 0 : newSerializeMetadataCascadePolicyOwnerEnterpriseField(val.ownerEnterprise), ["parent"]: val.parent == void 0 ? void 0 : newSerializeMetadataCascadePolicyParentField(val.parent), ["scope"]: val.scope == void 0 ? void 0 : newSerializeMetadataCascadePolicyScopeField(val.scope), ["templateKey"]: val.templateKey };
}
export function newDeserializeMetadataCascadePolicy(val: any): MetadataCascadePolicy {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | MetadataCascadePolicyTypeField = val.type == void 0 ? void 0 : newDeserializeMetadataCascadePolicyTypeField(val.type);
    const ownerEnterprise: undefined | MetadataCascadePolicyOwnerEnterpriseField = val.owner_enterprise == void 0 ? void 0 : newDeserializeMetadataCascadePolicyOwnerEnterpriseField(val.owner_enterprise);
    const parent: undefined | MetadataCascadePolicyParentField = val.parent == void 0 ? void 0 : newDeserializeMetadataCascadePolicyParentField(val.parent);
    const scope: undefined | MetadataCascadePolicyScopeField = val.scope == void 0 ? void 0 : newDeserializeMetadataCascadePolicyScopeField(val.scope);
    const templateKey: undefined | string = isJson(val.templateKey, "string") ? val.templateKey : void 0;
    return { id: id, type: type, ownerEnterprise: ownerEnterprise, parent: parent, scope: scope, templateKey: templateKey } satisfies MetadataCascadePolicy;
}
export function newSerializeMetadataCascadePolicies(val: MetadataCascadePolicies): Json {
    return { ["limit"]: val.limit, ["next_marker"]: val.nextMarker, ["prev_marker"]: val.prevMarker, ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: MetadataCascadePolicy): any {
            return newSerializeMetadataCascadePolicy(item);
        }) as readonly any[] };
}
export function newDeserializeMetadataCascadePolicies(val: any): MetadataCascadePolicies {
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const nextMarker: undefined | number = isJson(val.next_marker, "number") ? val.next_marker : void 0;
    const prevMarker: undefined | number = isJson(val.prev_marker, "number") ? val.prev_marker : void 0;
    const entries: undefined | readonly MetadataCascadePolicy[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return newDeserializeMetadataCascadePolicy(itm);
    }) as readonly any[] : void 0;
    return { limit: limit, nextMarker: nextMarker, prevMarker: prevMarker, entries: entries } satisfies MetadataCascadePolicies;
}
export function newSerializeMetadataQueryIndexStatusField(val: MetadataQueryIndexStatusField): Json {
    return val;
}
export function newDeserializeMetadataQueryIndexStatusField(val: any): MetadataQueryIndexStatusField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"MetadataQueryIndexStatusField\"";
    }
    if (val == "building") {
        return "building";
    }
    if (val == "active") {
        return "active";
    }
    if (val == "disabled") {
        return "disabled";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeMetadataQueryIndexFieldsFieldSortDirectionField(val: MetadataQueryIndexFieldsFieldSortDirectionField): Json {
    return val;
}
export function newDeserializeMetadataQueryIndexFieldsFieldSortDirectionField(val: any): MetadataQueryIndexFieldsFieldSortDirectionField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"MetadataQueryIndexFieldsFieldSortDirectionField\"";
    }
    if (val == "asc") {
        return "asc";
    }
    if (val == "desc") {
        return "desc";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeMetadataQueryIndexFieldsField(val: MetadataQueryIndexFieldsField): Json {
    return { ["key"]: val.key, ["sort_direction"]: val.sortDirection == void 0 ? void 0 : newSerializeMetadataQueryIndexFieldsFieldSortDirectionField(val.sortDirection) };
}
export function newDeserializeMetadataQueryIndexFieldsField(val: any): MetadataQueryIndexFieldsField {
    const key: undefined | string = isJson(val.key, "string") ? val.key : void 0;
    const sortDirection: undefined | MetadataQueryIndexFieldsFieldSortDirectionField = val.sort_direction == void 0 ? void 0 : newDeserializeMetadataQueryIndexFieldsFieldSortDirectionField(val.sort_direction);
    return { key: key, sortDirection: sortDirection } satisfies MetadataQueryIndexFieldsField;
}
export function newSerializeMetadataQueryIndex(val: MetadataQueryIndex): Json {
    return { ["id"]: val.id, ["type"]: val.type, ["status"]: newSerializeMetadataQueryIndexStatusField(val.status), ["fields"]: val.fields == void 0 ? void 0 : val.fields.map(function (item: MetadataQueryIndexFieldsField): any {
            return newSerializeMetadataQueryIndexFieldsField(item);
        }) as readonly any[] };
}
export function newDeserializeMetadataQueryIndex(val: any): MetadataQueryIndex {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: string = val.type;
    const status: MetadataQueryIndexStatusField = newDeserializeMetadataQueryIndexStatusField(val.status);
    const fields: undefined | readonly MetadataQueryIndexFieldsField[] = isJson(val.fields, "array") ? val.fields.map(function (itm: Json): any {
        return newDeserializeMetadataQueryIndexFieldsField(itm);
    }) as readonly any[] : void 0;
    return { id: id, type: type, status: status, fields: fields } satisfies MetadataQueryIndex;
}
export function newSerializeMetadataQueryIndices(val: MetadataQueryIndices): Json {
    return { ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: MetadataQueryIndex): any {
            return newSerializeMetadataQueryIndex(item);
        }) as readonly any[], ["limit"]: val.limit, ["next_marker"]: val.nextMarker };
}
export function newDeserializeMetadataQueryIndices(val: any): MetadataQueryIndices {
    const entries: undefined | readonly MetadataQueryIndex[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return newDeserializeMetadataQueryIndex(itm);
    }) as readonly any[] : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const nextMarker: undefined | string = isJson(val.next_marker, "string") ? val.next_marker : void 0;
    return { entries: entries, limit: limit, nextMarker: nextMarker } satisfies MetadataQueryIndices;
}
export function newSerializeMetadataTemplateTypeField(val: MetadataTemplateTypeField): Json {
    return val;
}
export function newDeserializeMetadataTemplateTypeField(val: any): MetadataTemplateTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"MetadataTemplateTypeField\"";
    }
    if (val == "metadata_template") {
        return "metadata_template";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeMetadataTemplateFieldsFieldTypeField(val: MetadataTemplateFieldsFieldTypeField): Json {
    return val;
}
export function newDeserializeMetadataTemplateFieldsFieldTypeField(val: any): MetadataTemplateFieldsFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"MetadataTemplateFieldsFieldTypeField\"";
    }
    if (val == "string") {
        return "string";
    }
    if (val == "float") {
        return "float";
    }
    if (val == "date") {
        return "date";
    }
    if (val == "enum") {
        return "enum";
    }
    if (val == "multiSelect") {
        return "multiSelect";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeMetadataTemplateFieldsFieldOptionsField(val: MetadataTemplateFieldsFieldOptionsField): Json {
    return { ["key"]: val.key, ["id"]: val.id };
}
export function newDeserializeMetadataTemplateFieldsFieldOptionsField(val: any): MetadataTemplateFieldsFieldOptionsField {
    const key: string = val.key;
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    return { key: key, id: id } satisfies MetadataTemplateFieldsFieldOptionsField;
}
export function newSerializeMetadataTemplateFieldsField(val: MetadataTemplateFieldsField): Json {
    return { ["type"]: newSerializeMetadataTemplateFieldsFieldTypeField(val.type), ["key"]: val.key, ["displayName"]: val.displayName, ["description"]: val.description, ["hidden"]: val.hidden, ["options"]: val.options == void 0 ? void 0 : val.options.map(function (item: MetadataTemplateFieldsFieldOptionsField): any {
            return newSerializeMetadataTemplateFieldsFieldOptionsField(item);
        }) as readonly any[], ["id"]: val.id };
}
export function newDeserializeMetadataTemplateFieldsField(val: any): MetadataTemplateFieldsField {
    const type: MetadataTemplateFieldsFieldTypeField = newDeserializeMetadataTemplateFieldsFieldTypeField(val.type);
    const key: string = val.key;
    const displayName: string = val.displayName;
    const description: undefined | string = isJson(val.description, "string") ? val.description : void 0;
    const hidden: undefined | boolean = isJson(val.hidden, "boolean") ? val.hidden : void 0;
    const options: undefined | readonly MetadataTemplateFieldsFieldOptionsField[] = isJson(val.options, "array") ? val.options.map(function (itm: Json): any {
        return newDeserializeMetadataTemplateFieldsFieldOptionsField(itm);
    }) as readonly any[] : void 0;
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    return { type: type, key: key, displayName: displayName, description: description, hidden: hidden, options: options, id: id } satisfies MetadataTemplateFieldsField;
}
export function newSerializeMetadataTemplate(val: MetadataTemplate): Json {
    return { ["id"]: val.id, ["type"]: newSerializeMetadataTemplateTypeField(val.type), ["scope"]: val.scope, ["templateKey"]: val.templateKey, ["displayName"]: val.displayName, ["hidden"]: val.hidden, ["fields"]: val.fields == void 0 ? void 0 : val.fields.map(function (item: MetadataTemplateFieldsField): any {
            return newSerializeMetadataTemplateFieldsField(item);
        }) as readonly any[], ["copyInstanceOnItemCopy"]: val.copyInstanceOnItemCopy };
}
export function newDeserializeMetadataTemplate(val: any): MetadataTemplate {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: MetadataTemplateTypeField = newDeserializeMetadataTemplateTypeField(val.type);
    const scope: undefined | string = isJson(val.scope, "string") ? val.scope : void 0;
    const templateKey: undefined | string = isJson(val.templateKey, "string") ? val.templateKey : void 0;
    const displayName: undefined | string = isJson(val.displayName, "string") ? val.displayName : void 0;
    const hidden: undefined | boolean = isJson(val.hidden, "boolean") ? val.hidden : void 0;
    const fields: undefined | readonly MetadataTemplateFieldsField[] = isJson(val.fields, "array") ? val.fields.map(function (itm: Json): any {
        return newDeserializeMetadataTemplateFieldsField(itm);
    }) as readonly any[] : void 0;
    const copyInstanceOnItemCopy: undefined | boolean = isJson(val.copyInstanceOnItemCopy, "boolean") ? val.copyInstanceOnItemCopy : void 0;
    return { id: id, type: type, scope: scope, templateKey: templateKey, displayName: displayName, hidden: hidden, fields: fields, copyInstanceOnItemCopy: copyInstanceOnItemCopy } satisfies MetadataTemplate;
}
export function newSerializeMetadataTemplates(val: MetadataTemplates): Json {
    return { ["limit"]: val.limit, ["next_marker"]: val.nextMarker, ["prev_marker"]: val.prevMarker, ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: MetadataTemplate): any {
            return newSerializeMetadataTemplate(item);
        }) as readonly any[] };
}
export function newDeserializeMetadataTemplates(val: any): MetadataTemplates {
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const nextMarker: undefined | number = isJson(val.next_marker, "number") ? val.next_marker : void 0;
    const prevMarker: undefined | number = isJson(val.prev_marker, "number") ? val.prev_marker : void 0;
    const entries: undefined | readonly MetadataTemplate[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return newDeserializeMetadataTemplate(itm);
    }) as readonly any[] : void 0;
    return { limit: limit, nextMarker: nextMarker, prevMarker: prevMarker, entries: entries } satisfies MetadataTemplates;
}
export function newSerializeRealtimeServer(val: RealtimeServer): Json {
    return { ["type"]: val.type, ["url"]: val.url, ["ttl"]: val.ttl, ["max_retries"]: val.maxRetries, ["retry_timeout"]: val.retryTimeout };
}
export function newDeserializeRealtimeServer(val: any): RealtimeServer {
    const type: undefined | string = isJson(val.type, "string") ? val.type : void 0;
    const url: undefined | string = isJson(val.url, "string") ? val.url : void 0;
    const ttl: undefined | number = isJson(val.ttl, "number") ? val.ttl : void 0;
    const maxRetries: undefined | number = isJson(val.max_retries, "number") ? val.max_retries : void 0;
    const retryTimeout: undefined | number = isJson(val.retry_timeout, "number") ? val.retry_timeout : void 0;
    return { type: type, url: url, ttl: ttl, maxRetries: maxRetries, retryTimeout: retryTimeout } satisfies RealtimeServer;
}
export function newSerializeRealtimeServers(val: RealtimeServers): Json {
    return { ["chunk_size"]: val.chunkSize, ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: RealtimeServer): any {
            return newSerializeRealtimeServer(item);
        }) as readonly any[] };
}
export function newDeserializeRealtimeServers(val: any): RealtimeServers {
    const chunkSize: undefined | number = isJson(val.chunk_size, "number") ? val.chunk_size : void 0;
    const entries: undefined | readonly RealtimeServer[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return newDeserializeRealtimeServer(itm);
    }) as readonly any[] : void 0;
    return { chunkSize: chunkSize, entries: entries } satisfies RealtimeServers;
}
export function newSerializeRetentionPolicyBaseTypeField(val: RetentionPolicyBaseTypeField): Json {
    return val;
}
export function newDeserializeRetentionPolicyBaseTypeField(val: any): RetentionPolicyBaseTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"RetentionPolicyBaseTypeField\"";
    }
    if (val == "retention_policy") {
        return "retention_policy";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeRetentionPolicyBase(val: RetentionPolicyBase): Json {
    return { ["id"]: val.id, ["type"]: newSerializeRetentionPolicyBaseTypeField(val.type) };
}
export function newDeserializeRetentionPolicyBase(val: any): RetentionPolicyBase {
    const id: string = val.id;
    const type: RetentionPolicyBaseTypeField = newDeserializeRetentionPolicyBaseTypeField(val.type);
    return { id: id, type: type } satisfies RetentionPolicyBase;
}
export function newSerializeRetentionPolicyMiniDispositionActionField(val: RetentionPolicyMiniDispositionActionField): Json {
    return val;
}
export function newDeserializeRetentionPolicyMiniDispositionActionField(val: any): RetentionPolicyMiniDispositionActionField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"RetentionPolicyMiniDispositionActionField\"";
    }
    if (val == "permanently_delete") {
        return "permanently_delete";
    }
    if (val == "remove_retention") {
        return "remove_retention";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeRetentionPolicyMini(val: RetentionPolicyMini): Json {
    const base: any = newSerializeRetentionPolicyBase(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"RetentionPolicyMini\"";
    }
    return { ...base, ...{ ["policy_name"]: val.policyName, ["retention_length"]: val.retentionLength, ["disposition_action"]: val.dispositionAction == void 0 ? void 0 : newSerializeRetentionPolicyMiniDispositionActionField(val.dispositionAction) } };
}
export function newDeserializeRetentionPolicyMini(val: any): RetentionPolicyMini {
    const policyName: undefined | string = isJson(val.policy_name, "string") ? val.policy_name : void 0;
    const retentionLength: undefined | string = isJson(val.retention_length, "string") ? val.retention_length : void 0;
    const dispositionAction: undefined | RetentionPolicyMiniDispositionActionField = val.disposition_action == void 0 ? void 0 : newDeserializeRetentionPolicyMiniDispositionActionField(val.disposition_action);
    const id: string = val.id;
    const type: RetentionPolicyBaseTypeField = newDeserializeRetentionPolicyBaseTypeField(val.type);
    return { policyName: policyName, retentionLength: retentionLength, dispositionAction: dispositionAction, id: id, type: type } satisfies RetentionPolicyMini;
}
export function newSerializeRetentionPolicies(val: RetentionPolicies): Json {
    return { ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: RetentionPolicyMini): any {
            return newSerializeRetentionPolicyMini(item);
        }) as readonly any[], ["limit"]: val.limit, ["next_marker"]: val.nextMarker };
}
export function newDeserializeRetentionPolicies(val: any): RetentionPolicies {
    const entries: undefined | readonly RetentionPolicyMini[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return newDeserializeRetentionPolicyMini(itm);
    }) as readonly any[] : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const nextMarker: undefined | string = isJson(val.next_marker, "string") ? val.next_marker : void 0;
    return { entries: entries, limit: limit, nextMarker: nextMarker } satisfies RetentionPolicies;
}
export function newSerializeFileVersionRetentionTypeField(val: FileVersionRetentionTypeField): Json {
    return val;
}
export function newDeserializeFileVersionRetentionTypeField(val: any): FileVersionRetentionTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"FileVersionRetentionTypeField\"";
    }
    if (val == "file_version_retention") {
        return "file_version_retention";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeFileVersionRetention(val: FileVersionRetention): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : newSerializeFileVersionRetentionTypeField(val.type), ["file_version"]: val.fileVersion == void 0 ? void 0 : newSerializeFileVersionMini(val.fileVersion), ["file"]: val.file == void 0 ? void 0 : newSerializeFileMini(val.file), ["applied_at"]: val.appliedAt, ["disposition_at"]: val.dispositionAt, ["winning_retention_policy"]: val.winningRetentionPolicy == void 0 ? void 0 : newSerializeRetentionPolicyMini(val.winningRetentionPolicy) };
}
export function newDeserializeFileVersionRetention(val: any): FileVersionRetention {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | FileVersionRetentionTypeField = val.type == void 0 ? void 0 : newDeserializeFileVersionRetentionTypeField(val.type);
    const fileVersion: undefined | FileVersionMini = val.file_version == void 0 ? void 0 : newDeserializeFileVersionMini(val.file_version);
    const file: undefined | FileMini = val.file == void 0 ? void 0 : newDeserializeFileMini(val.file);
    const appliedAt: undefined | string = isJson(val.applied_at, "string") ? val.applied_at : void 0;
    const dispositionAt: undefined | string = isJson(val.disposition_at, "string") ? val.disposition_at : void 0;
    const winningRetentionPolicy: undefined | RetentionPolicyMini = val.winning_retention_policy == void 0 ? void 0 : newDeserializeRetentionPolicyMini(val.winning_retention_policy);
    return { id: id, type: type, fileVersion: fileVersion, file: file, appliedAt: appliedAt, dispositionAt: dispositionAt, winningRetentionPolicy: winningRetentionPolicy } satisfies FileVersionRetention;
}
export function newSerializeFileVersionRetentions(val: FileVersionRetentions): Json {
    return { ["limit"]: val.limit, ["next_marker"]: val.nextMarker, ["prev_marker"]: val.prevMarker, ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: FileVersionRetention): any {
            return newSerializeFileVersionRetention(item);
        }) as readonly any[] };
}
export function newDeserializeFileVersionRetentions(val: any): FileVersionRetentions {
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const nextMarker: undefined | number = isJson(val.next_marker, "number") ? val.next_marker : void 0;
    const prevMarker: undefined | number = isJson(val.prev_marker, "number") ? val.prev_marker : void 0;
    const entries: undefined | readonly FileVersionRetention[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return newDeserializeFileVersionRetention(itm);
    }) as readonly any[] : void 0;
    return { limit: limit, nextMarker: nextMarker, prevMarker: prevMarker, entries: entries } satisfies FileVersionRetentions;
}
export function newSerializeRetentionPolicyAssignmentBaseTypeField(val: RetentionPolicyAssignmentBaseTypeField): Json {
    return val;
}
export function newDeserializeRetentionPolicyAssignmentBaseTypeField(val: any): RetentionPolicyAssignmentBaseTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"RetentionPolicyAssignmentBaseTypeField\"";
    }
    if (val == "retention_policy_assignment") {
        return "retention_policy_assignment";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeRetentionPolicyAssignmentBase(val: RetentionPolicyAssignmentBase): Json {
    return { ["id"]: val.id, ["type"]: newSerializeRetentionPolicyAssignmentBaseTypeField(val.type) };
}
export function newDeserializeRetentionPolicyAssignmentBase(val: any): RetentionPolicyAssignmentBase {
    const id: string = val.id;
    const type: RetentionPolicyAssignmentBaseTypeField = newDeserializeRetentionPolicyAssignmentBaseTypeField(val.type);
    return { id: id, type: type } satisfies RetentionPolicyAssignmentBase;
}
export function newSerializeRetentionPolicyAssignments(val: RetentionPolicyAssignments): Json {
    return { ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: RetentionPolicyAssignmentBase): any {
            return newSerializeRetentionPolicyAssignmentBase(item);
        }) as readonly any[], ["limit"]: val.limit, ["next_marker"]: val.nextMarker };
}
export function newDeserializeRetentionPolicyAssignments(val: any): RetentionPolicyAssignments {
    const entries: undefined | readonly RetentionPolicyAssignmentBase[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return newDeserializeRetentionPolicyAssignmentBase(itm);
    }) as readonly any[] : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const nextMarker: undefined | string = isJson(val.next_marker, "string") ? val.next_marker : void 0;
    return { entries: entries, limit: limit, nextMarker: nextMarker } satisfies RetentionPolicyAssignments;
}
export function newSerializeShieldInformationBarrierBaseTypeField(val: ShieldInformationBarrierBaseTypeField): Json {
    return val;
}
export function newDeserializeShieldInformationBarrierBaseTypeField(val: any): ShieldInformationBarrierBaseTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"ShieldInformationBarrierBaseTypeField\"";
    }
    if (val == "shield_information_barrier") {
        return "shield_information_barrier";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeShieldInformationBarrierBase(val: ShieldInformationBarrierBase): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : newSerializeShieldInformationBarrierBaseTypeField(val.type) };
}
export function newDeserializeShieldInformationBarrierBase(val: any): ShieldInformationBarrierBase {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | ShieldInformationBarrierBaseTypeField = val.type == void 0 ? void 0 : newDeserializeShieldInformationBarrierBaseTypeField(val.type);
    return { id: id, type: type } satisfies ShieldInformationBarrierBase;
}
export function newSerializeShieldInformationBarrierReference(val: ShieldInformationBarrierReference): Json {
    return { ["shield_information_barrier"]: val.shieldInformationBarrier == void 0 ? void 0 : newSerializeShieldInformationBarrierBase(val.shieldInformationBarrier) };
}
export function newDeserializeShieldInformationBarrierReference(val: any): ShieldInformationBarrierReference {
    const shieldInformationBarrier: undefined | ShieldInformationBarrierBase = val.shield_information_barrier == void 0 ? void 0 : newDeserializeShieldInformationBarrierBase(val.shield_information_barrier);
    return { shieldInformationBarrier: shieldInformationBarrier } satisfies ShieldInformationBarrierReference;
}
export function newSerializeShieldInformationBarrierReportBaseTypeField(val: ShieldInformationBarrierReportBaseTypeField): Json {
    return val;
}
export function newDeserializeShieldInformationBarrierReportBaseTypeField(val: any): ShieldInformationBarrierReportBaseTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"ShieldInformationBarrierReportBaseTypeField\"";
    }
    if (val == "shield_information_barrier_report") {
        return "shield_information_barrier_report";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeShieldInformationBarrierReportBase(val: ShieldInformationBarrierReportBase): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : newSerializeShieldInformationBarrierReportBaseTypeField(val.type) };
}
export function newDeserializeShieldInformationBarrierReportBase(val: any): ShieldInformationBarrierReportBase {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | ShieldInformationBarrierReportBaseTypeField = val.type == void 0 ? void 0 : newDeserializeShieldInformationBarrierReportBaseTypeField(val.type);
    return { id: id, type: type } satisfies ShieldInformationBarrierReportBase;
}
export function newSerializeShieldInformationBarrierSegmentMemberBaseTypeField(val: ShieldInformationBarrierSegmentMemberBaseTypeField): Json {
    return val;
}
export function newDeserializeShieldInformationBarrierSegmentMemberBaseTypeField(val: any): ShieldInformationBarrierSegmentMemberBaseTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"ShieldInformationBarrierSegmentMemberBaseTypeField\"";
    }
    if (val == "shield_information_barrier_segment_member") {
        return "shield_information_barrier_segment_member";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeShieldInformationBarrierSegmentMemberBase(val: ShieldInformationBarrierSegmentMemberBase): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : newSerializeShieldInformationBarrierSegmentMemberBaseTypeField(val.type) };
}
export function newDeserializeShieldInformationBarrierSegmentMemberBase(val: any): ShieldInformationBarrierSegmentMemberBase {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | ShieldInformationBarrierSegmentMemberBaseTypeField = val.type == void 0 ? void 0 : newDeserializeShieldInformationBarrierSegmentMemberBaseTypeField(val.type);
    return { id: id, type: type } satisfies ShieldInformationBarrierSegmentMemberBase;
}
export function newSerializeShieldInformationBarrierSegmentRestrictionBaseTypeField(val: ShieldInformationBarrierSegmentRestrictionBaseTypeField): Json {
    return val;
}
export function newDeserializeShieldInformationBarrierSegmentRestrictionBaseTypeField(val: any): ShieldInformationBarrierSegmentRestrictionBaseTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"ShieldInformationBarrierSegmentRestrictionBaseTypeField\"";
    }
    if (val == "shield_information_barrier_segment_restriction") {
        return "shield_information_barrier_segment_restriction";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeShieldInformationBarrierSegmentRestrictionBase(val: ShieldInformationBarrierSegmentRestrictionBase): Json {
    return { ["type"]: val.type == void 0 ? void 0 : newSerializeShieldInformationBarrierSegmentRestrictionBaseTypeField(val.type), ["id"]: val.id };
}
export function newDeserializeShieldInformationBarrierSegmentRestrictionBase(val: any): ShieldInformationBarrierSegmentRestrictionBase {
    const type: undefined | ShieldInformationBarrierSegmentRestrictionBaseTypeField = val.type == void 0 ? void 0 : newDeserializeShieldInformationBarrierSegmentRestrictionBaseTypeField(val.type);
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    return { type: type, id: id } satisfies ShieldInformationBarrierSegmentRestrictionBase;
}
export function newSerializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentFieldTypeField(val: ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentFieldTypeField): Json {
    return val;
}
export function newDeserializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentFieldTypeField(val: any): ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentFieldTypeField\"";
    }
    if (val == "shield_information_barrier_segment") {
        return "shield_information_barrier_segment";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField(val: ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : newSerializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentFieldTypeField(val.type) };
}
export function newDeserializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField(val: any): ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentFieldTypeField = val.type == void 0 ? void 0 : newDeserializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentFieldTypeField(val.type);
    return { id: id, type: type } satisfies ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField;
}
export function newSerializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentFieldTypeField(val: ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentFieldTypeField): Json {
    return val;
}
export function newDeserializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentFieldTypeField(val: any): ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentFieldTypeField\"";
    }
    if (val == "shield_information_barrier_segment") {
        return "shield_information_barrier_segment";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField(val: ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : newSerializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentFieldTypeField(val.type) };
}
export function newDeserializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField(val: any): ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentFieldTypeField = val.type == void 0 ? void 0 : newDeserializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentFieldTypeField(val.type);
    return { id: id, type: type } satisfies ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField;
}
export function newSerializeShieldInformationBarrierSegmentRestrictionMini(val: ShieldInformationBarrierSegmentRestrictionMini): Json {
    const base: any = newSerializeShieldInformationBarrierSegmentRestrictionBase(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"ShieldInformationBarrierSegmentRestrictionMini\"";
    }
    return { ...base, ...{ ["shield_information_barrier_segment"]: newSerializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField(val.shieldInformationBarrierSegment), ["restricted_segment"]: newSerializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField(val.restrictedSegment) } };
}
export function newDeserializeShieldInformationBarrierSegmentRestrictionMini(val: any): ShieldInformationBarrierSegmentRestrictionMini {
    const shieldInformationBarrierSegment: ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField = newDeserializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField(val.shield_information_barrier_segment);
    const restrictedSegment: ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField = newDeserializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField(val.restricted_segment);
    const type: undefined | ShieldInformationBarrierSegmentRestrictionBaseTypeField = val.type == void 0 ? void 0 : newDeserializeShieldInformationBarrierSegmentRestrictionBaseTypeField(val.type);
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    return { shieldInformationBarrierSegment: shieldInformationBarrierSegment, restrictedSegment: restrictedSegment, type: type, id: id } satisfies ShieldInformationBarrierSegmentRestrictionMini;
}
export function newSerializeSessionTerminationMessage(val: SessionTerminationMessage): Json {
    return { ["message"]: val.message };
}
export function newDeserializeSessionTerminationMessage(val: any): SessionTerminationMessage {
    const message: undefined | string = isJson(val.message, "string") ? val.message : void 0;
    return { message: message } satisfies SessionTerminationMessage;
}
export function newSerializeStoragePolicyMiniTypeField(val: StoragePolicyMiniTypeField): Json {
    return val;
}
export function newDeserializeStoragePolicyMiniTypeField(val: any): StoragePolicyMiniTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"StoragePolicyMiniTypeField\"";
    }
    if (val == "storage_policy") {
        return "storage_policy";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeStoragePolicyMini(val: StoragePolicyMini): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : newSerializeStoragePolicyMiniTypeField(val.type) };
}
export function newDeserializeStoragePolicyMini(val: any): StoragePolicyMini {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | StoragePolicyMiniTypeField = val.type == void 0 ? void 0 : newDeserializeStoragePolicyMiniTypeField(val.type);
    return { id: id, type: type } satisfies StoragePolicyMini;
}
export function newSerializeStoragePolicyAssignmentAssignedToField(val: StoragePolicyAssignmentAssignedToField): Json {
    return { ["id"]: val.id, ["type"]: val.type };
}
export function newDeserializeStoragePolicyAssignmentAssignedToField(val: any): StoragePolicyAssignmentAssignedToField {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | string = isJson(val.type, "string") ? val.type : void 0;
    return { id: id, type: type } satisfies StoragePolicyAssignmentAssignedToField;
}
export function newSerializeStoragePolicyAssignment(val: StoragePolicyAssignment): Json {
    return { ["storage_policy"]: val.storagePolicy == void 0 ? void 0 : newSerializeStoragePolicyMini(val.storagePolicy), ["assigned_to"]: val.assignedTo == void 0 ? void 0 : newSerializeStoragePolicyAssignmentAssignedToField(val.assignedTo) };
}
export function newDeserializeStoragePolicyAssignment(val: any): StoragePolicyAssignment {
    const storagePolicy: undefined | StoragePolicyMini = val.storage_policy == void 0 ? void 0 : newDeserializeStoragePolicyMini(val.storage_policy);
    const assignedTo: undefined | StoragePolicyAssignmentAssignedToField = val.assigned_to == void 0 ? void 0 : newDeserializeStoragePolicyAssignmentAssignedToField(val.assigned_to);
    return { storagePolicy: storagePolicy, assignedTo: assignedTo } satisfies StoragePolicyAssignment;
}
export function newSerializeStoragePolicyAssignments(val: StoragePolicyAssignments): Json {
    return { ["limit"]: val.limit, ["next_marker"]: val.nextMarker, ["prev_marker"]: val.prevMarker, ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: StoragePolicyAssignment): any {
            return newSerializeStoragePolicyAssignment(item);
        }) as readonly any[] };
}
export function newDeserializeStoragePolicyAssignments(val: any): StoragePolicyAssignments {
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const nextMarker: undefined | number = isJson(val.next_marker, "number") ? val.next_marker : void 0;
    const prevMarker: undefined | number = isJson(val.prev_marker, "number") ? val.prev_marker : void 0;
    const entries: undefined | readonly StoragePolicyAssignment[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return newDeserializeStoragePolicyAssignment(itm);
    }) as readonly any[] : void 0;
    return { limit: limit, nextMarker: nextMarker, prevMarker: prevMarker, entries: entries } satisfies StoragePolicyAssignments;
}
export function newSerializeStoragePolicy(val: StoragePolicy): Json {
    const base: any = newSerializeStoragePolicyMini(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"StoragePolicy\"";
    }
    return { ...base, ...{ ["name"]: val.name } };
}
export function newDeserializeStoragePolicy(val: any): StoragePolicy {
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | StoragePolicyMiniTypeField = val.type == void 0 ? void 0 : newDeserializeStoragePolicyMiniTypeField(val.type);
    return { name: name, id: id, type: type } satisfies StoragePolicy;
}
export function newSerializeStoragePolicies(val: StoragePolicies): Json {
    return { ["limit"]: val.limit, ["next_marker"]: val.nextMarker, ["prev_marker"]: val.prevMarker, ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: StoragePolicy): any {
            return newSerializeStoragePolicy(item);
        }) as readonly any[] };
}
export function newDeserializeStoragePolicies(val: any): StoragePolicies {
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const nextMarker: undefined | number = isJson(val.next_marker, "number") ? val.next_marker : void 0;
    const prevMarker: undefined | number = isJson(val.prev_marker, "number") ? val.prev_marker : void 0;
    const entries: undefined | readonly StoragePolicy[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return newDeserializeStoragePolicy(itm);
    }) as readonly any[] : void 0;
    return { limit: limit, nextMarker: nextMarker, prevMarker: prevMarker, entries: entries } satisfies StoragePolicies;
}
export function newSerializeTermsOfServiceBaseTypeField(val: TermsOfServiceBaseTypeField): Json {
    return val;
}
export function newDeserializeTermsOfServiceBaseTypeField(val: any): TermsOfServiceBaseTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"TermsOfServiceBaseTypeField\"";
    }
    if (val == "terms_of_service") {
        return "terms_of_service";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeTermsOfServiceBase(val: TermsOfServiceBase): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : newSerializeTermsOfServiceBaseTypeField(val.type) };
}
export function newDeserializeTermsOfServiceBase(val: any): TermsOfServiceBase {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | TermsOfServiceBaseTypeField = val.type == void 0 ? void 0 : newDeserializeTermsOfServiceBaseTypeField(val.type);
    return { id: id, type: type } satisfies TermsOfServiceBase;
}
export function newSerializeTermsOfServiceStatusField(val: TermsOfServiceStatusField): Json {
    return val;
}
export function newDeserializeTermsOfServiceStatusField(val: any): TermsOfServiceStatusField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"TermsOfServiceStatusField\"";
    }
    if (val == "enabled") {
        return "enabled";
    }
    if (val == "disabled") {
        return "disabled";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeTermsOfServiceEnterpriseFieldTypeField(val: TermsOfServiceEnterpriseFieldTypeField): Json {
    return val;
}
export function newDeserializeTermsOfServiceEnterpriseFieldTypeField(val: any): TermsOfServiceEnterpriseFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"TermsOfServiceEnterpriseFieldTypeField\"";
    }
    if (val == "enterprise") {
        return "enterprise";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeTermsOfServiceEnterpriseField(val: TermsOfServiceEnterpriseField): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : newSerializeTermsOfServiceEnterpriseFieldTypeField(val.type), ["name"]: val.name };
}
export function newDeserializeTermsOfServiceEnterpriseField(val: any): TermsOfServiceEnterpriseField {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | TermsOfServiceEnterpriseFieldTypeField = val.type == void 0 ? void 0 : newDeserializeTermsOfServiceEnterpriseFieldTypeField(val.type);
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    return { id: id, type: type, name: name } satisfies TermsOfServiceEnterpriseField;
}
export function newSerializeTermsOfServiceTosTypeField(val: TermsOfServiceTosTypeField): Json {
    return val;
}
export function newDeserializeTermsOfServiceTosTypeField(val: any): TermsOfServiceTosTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"TermsOfServiceTosTypeField\"";
    }
    if (val == "managed") {
        return "managed";
    }
    if (val == "external") {
        return "external";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeTermsOfService(val: TermsOfService): Json {
    const base: any = newSerializeTermsOfServiceBase(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"TermsOfService\"";
    }
    return { ...base, ...{ ["status"]: val.status == void 0 ? void 0 : newSerializeTermsOfServiceStatusField(val.status), ["enterprise"]: val.enterprise == void 0 ? void 0 : newSerializeTermsOfServiceEnterpriseField(val.enterprise), ["tos_type"]: val.tosType == void 0 ? void 0 : newSerializeTermsOfServiceTosTypeField(val.tosType), ["text"]: val.text, ["created_at"]: val.createdAt, ["modified_at"]: val.modifiedAt } };
}
export function newDeserializeTermsOfService(val: any): TermsOfService {
    const status: undefined | TermsOfServiceStatusField = val.status == void 0 ? void 0 : newDeserializeTermsOfServiceStatusField(val.status);
    const enterprise: undefined | TermsOfServiceEnterpriseField = val.enterprise == void 0 ? void 0 : newDeserializeTermsOfServiceEnterpriseField(val.enterprise);
    const tosType: undefined | TermsOfServiceTosTypeField = val.tos_type == void 0 ? void 0 : newDeserializeTermsOfServiceTosTypeField(val.tos_type);
    const text: undefined | string = isJson(val.text, "string") ? val.text : void 0;
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const modifiedAt: undefined | string = isJson(val.modified_at, "string") ? val.modified_at : void 0;
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | TermsOfServiceBaseTypeField = val.type == void 0 ? void 0 : newDeserializeTermsOfServiceBaseTypeField(val.type);
    return { status: status, enterprise: enterprise, tosType: tosType, text: text, createdAt: createdAt, modifiedAt: modifiedAt, id: id, type: type } satisfies TermsOfService;
}
export function newSerializeTermsOfServices(val: TermsOfServices): Json {
    return { ["total_count"]: val.totalCount, ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: TermsOfService): any {
            return newSerializeTermsOfService(item);
        }) as readonly any[] };
}
export function newDeserializeTermsOfServices(val: any): TermsOfServices {
    const totalCount: undefined | number = isJson(val.total_count, "number") ? val.total_count : void 0;
    const entries: undefined | readonly TermsOfService[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return newDeserializeTermsOfService(itm);
    }) as readonly any[] : void 0;
    return { totalCount: totalCount, entries: entries } satisfies TermsOfServices;
}
export function newSerializeSignTemplates(val: SignTemplates): Json {
    return { ["limit"]: val.limit, ["next_marker"]: val.nextMarker, ["prev_marker"]: val.prevMarker };
}
export function newDeserializeSignTemplates(val: any): SignTemplates {
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const nextMarker: undefined | string = isJson(val.next_marker, "string") ? val.next_marker : void 0;
    const prevMarker: undefined | string = isJson(val.prev_marker, "string") ? val.prev_marker : void 0;
    return { limit: limit, nextMarker: nextMarker, prevMarker: prevMarker } satisfies SignTemplates;
}
export function newSerializeUploadPartMini(val: UploadPartMini): Json {
    return { ["part_id"]: val.partId, ["offset"]: val.offset, ["size"]: val.size };
}
export function newDeserializeUploadPartMini(val: any): UploadPartMini {
    const partId: undefined | string = isJson(val.part_id, "string") ? val.part_id : void 0;
    const offset: undefined | number = isJson(val.offset, "number") ? val.offset : void 0;
    const size: undefined | number = isJson(val.size, "number") ? val.size : void 0;
    return { partId: partId, offset: offset, size: size } satisfies UploadPartMini;
}
export function newSerializeUploadPart(val: UploadPart): Json {
    const base: any = newSerializeUploadPartMini(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"UploadPart\"";
    }
    return { ...base, ...{ ["sha1"]: val.sha1 } };
}
export function newDeserializeUploadPart(val: any): UploadPart {
    const sha1: undefined | string = isJson(val.sha1, "string") ? val.sha1 : void 0;
    const partId: undefined | string = isJson(val.part_id, "string") ? val.part_id : void 0;
    const offset: undefined | number = isJson(val.offset, "number") ? val.offset : void 0;
    const size: undefined | number = isJson(val.size, "number") ? val.size : void 0;
    return { sha1: sha1, partId: partId, offset: offset, size: size } satisfies UploadPart;
}
export function newSerializeUploadPartsOrderFieldDirectionField(val: UploadPartsOrderFieldDirectionField): Json {
    return val;
}
export function newDeserializeUploadPartsOrderFieldDirectionField(val: any): UploadPartsOrderFieldDirectionField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"UploadPartsOrderFieldDirectionField\"";
    }
    if (val == "ASC") {
        return "ASC";
    }
    if (val == "DESC") {
        return "DESC";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeUploadPartsOrderField(val: UploadPartsOrderField): Json {
    return { ["by"]: val.by, ["direction"]: val.direction == void 0 ? void 0 : newSerializeUploadPartsOrderFieldDirectionField(val.direction) };
}
export function newDeserializeUploadPartsOrderField(val: any): UploadPartsOrderField {
    const by: undefined | string = isJson(val.by, "string") ? val.by : void 0;
    const direction: undefined | UploadPartsOrderFieldDirectionField = val.direction == void 0 ? void 0 : newDeserializeUploadPartsOrderFieldDirectionField(val.direction);
    return { by: by, direction: direction } satisfies UploadPartsOrderField;
}
export function newSerializeUploadParts(val: UploadParts): Json {
    return { ["total_count"]: val.totalCount, ["limit"]: val.limit, ["offset"]: val.offset, ["order"]: val.order == void 0 ? void 0 : val.order.map(function (item: UploadPartsOrderField): any {
            return newSerializeUploadPartsOrderField(item);
        }) as readonly any[], ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: UploadPart): any {
            return newSerializeUploadPart(item);
        }) as readonly any[] };
}
export function newDeserializeUploadParts(val: any): UploadParts {
    const totalCount: undefined | number = isJson(val.total_count, "number") ? val.total_count : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const offset: undefined | number = isJson(val.offset, "number") ? val.offset : void 0;
    const order: undefined | readonly UploadPartsOrderField[] = isJson(val.order, "array") ? val.order.map(function (itm: Json): any {
        return newDeserializeUploadPartsOrderField(itm);
    }) as readonly any[] : void 0;
    const entries: undefined | readonly UploadPart[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return newDeserializeUploadPart(itm);
    }) as readonly any[] : void 0;
    return { totalCount: totalCount, limit: limit, offset: offset, order: order, entries: entries } satisfies UploadParts;
}
export function newSerializeUploadedPart(val: UploadedPart): Json {
    return { ["part"]: val.part == void 0 ? void 0 : newSerializeUploadPart(val.part) };
}
export function newDeserializeUploadedPart(val: any): UploadedPart {
    const part: undefined | UploadPart = val.part == void 0 ? void 0 : newDeserializeUploadPart(val.part);
    return { part: part } satisfies UploadedPart;
}
export function newSerializeUploadSessionTypeField(val: UploadSessionTypeField): Json {
    return val;
}
export function newDeserializeUploadSessionTypeField(val: any): UploadSessionTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"UploadSessionTypeField\"";
    }
    if (val == "upload_session") {
        return "upload_session";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeUploadSessionSessionEndpointsField(val: UploadSessionSessionEndpointsField): Json {
    return { ["upload_part"]: val.uploadPart, ["commit"]: val.commit, ["abort"]: val.abort, ["list_parts"]: val.listParts, ["status"]: val.status, ["log_event"]: val.logEvent };
}
export function newDeserializeUploadSessionSessionEndpointsField(val: any): UploadSessionSessionEndpointsField {
    const uploadPart: undefined | string = isJson(val.upload_part, "string") ? val.upload_part : void 0;
    const commit: undefined | string = isJson(val.commit, "string") ? val.commit : void 0;
    const abort: undefined | string = isJson(val.abort, "string") ? val.abort : void 0;
    const listParts: undefined | string = isJson(val.list_parts, "string") ? val.list_parts : void 0;
    const status: undefined | string = isJson(val.status, "string") ? val.status : void 0;
    const logEvent: undefined | string = isJson(val.log_event, "string") ? val.log_event : void 0;
    return { uploadPart: uploadPart, commit: commit, abort: abort, listParts: listParts, status: status, logEvent: logEvent } satisfies UploadSessionSessionEndpointsField;
}
export function newSerializeUploadSession(val: UploadSession): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : newSerializeUploadSessionTypeField(val.type), ["session_expires_at"]: val.sessionExpiresAt, ["part_size"]: val.partSize, ["total_parts"]: val.totalParts, ["num_parts_processed"]: val.numPartsProcessed, ["session_endpoints"]: val.sessionEndpoints == void 0 ? void 0 : newSerializeUploadSessionSessionEndpointsField(val.sessionEndpoints) };
}
export function newDeserializeUploadSession(val: any): UploadSession {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | UploadSessionTypeField = val.type == void 0 ? void 0 : newDeserializeUploadSessionTypeField(val.type);
    const sessionExpiresAt: undefined | string = isJson(val.session_expires_at, "string") ? val.session_expires_at : void 0;
    const partSize: undefined | number = isJson(val.part_size, "number") ? val.part_size : void 0;
    const totalParts: undefined | number = isJson(val.total_parts, "number") ? val.total_parts : void 0;
    const numPartsProcessed: undefined | number = isJson(val.num_parts_processed, "number") ? val.num_parts_processed : void 0;
    const sessionEndpoints: undefined | UploadSessionSessionEndpointsField = val.session_endpoints == void 0 ? void 0 : newDeserializeUploadSessionSessionEndpointsField(val.session_endpoints);
    return { id: id, type: type, sessionExpiresAt: sessionExpiresAt, partSize: partSize, totalParts: totalParts, numPartsProcessed: numPartsProcessed, sessionEndpoints: sessionEndpoints } satisfies UploadSession;
}
export function newSerializeUploadUrl(val: UploadUrl): Json {
    return { ["upload_url"]: val.uploadUrl, ["upload_token"]: val.uploadToken };
}
export function newDeserializeUploadUrl(val: any): UploadUrl {
    const uploadUrl: undefined | string = isJson(val.upload_url, "string") ? val.upload_url : void 0;
    const uploadToken: undefined | string = isJson(val.upload_token, "string") ? val.upload_token : void 0;
    return { uploadUrl: uploadUrl, uploadToken: uploadToken } satisfies UploadUrl;
}
export function newSerializeUserAvatarPicUrlsField(val: UserAvatarPicUrlsField): Json {
    return { ["small"]: val.small, ["large"]: val.large, ["preview"]: val.preview };
}
export function newDeserializeUserAvatarPicUrlsField(val: any): UserAvatarPicUrlsField {
    const small: undefined | string = isJson(val.small, "string") ? val.small : void 0;
    const large: undefined | string = isJson(val.large, "string") ? val.large : void 0;
    const preview: undefined | string = isJson(val.preview, "string") ? val.preview : void 0;
    return { small: small, large: large, preview: preview } satisfies UserAvatarPicUrlsField;
}
export function newSerializeUserAvatar(val: UserAvatar): Json {
    return { ["pic_urls"]: val.picUrls == void 0 ? void 0 : newSerializeUserAvatarPicUrlsField(val.picUrls) };
}
export function newDeserializeUserAvatar(val: any): UserAvatar {
    const picUrls: undefined | UserAvatarPicUrlsField = val.pic_urls == void 0 ? void 0 : newDeserializeUserAvatarPicUrlsField(val.pic_urls);
    return { picUrls: picUrls } satisfies UserAvatar;
}
export function newSerializeUserBaseTypeField(val: UserBaseTypeField): Json {
    return val;
}
export function newDeserializeUserBaseTypeField(val: any): UserBaseTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"UserBaseTypeField\"";
    }
    if (val == "user") {
        return "user";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeUserBase(val: UserBase): Json {
    return { ["id"]: val.id, ["type"]: newSerializeUserBaseTypeField(val.type) };
}
export function newDeserializeUserBase(val: any): UserBase {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: UserBaseTypeField = newDeserializeUserBaseTypeField(val.type);
    return { id: id, type: type } satisfies UserBase;
}
export function newSerializeUserIntegrationMappings(val: UserIntegrationMappings): Json {
    const base: any = newSerializeUserBase(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"UserIntegrationMappings\"";
    }
    return { ...base, ...{ ["name"]: val.name, ["login"]: val.login } };
}
export function newDeserializeUserIntegrationMappings(val: any): UserIntegrationMappings {
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const login: undefined | string = isJson(val.login, "string") ? val.login : void 0;
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: UserBaseTypeField = newDeserializeUserBaseTypeField(val.type);
    return { name: name, login: login, id: id, type: type } satisfies UserIntegrationMappings;
}
export function newSerializeUserCollaborations(val: UserCollaborations): Json {
    const base: any = newSerializeUserBase(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"UserCollaborations\"";
    }
    return { ...base, ...{ ["name"]: val.name, ["login"]: val.login } };
}
export function newDeserializeUserCollaborations(val: any): UserCollaborations {
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const login: undefined | string = isJson(val.login, "string") ? val.login : void 0;
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: UserBaseTypeField = newDeserializeUserBaseTypeField(val.type);
    return { name: name, login: login, id: id, type: type } satisfies UserCollaborations;
}
export function newSerializeUserMini(val: UserMini): Json {
    const base: any = newSerializeUserBase(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"UserMini\"";
    }
    return { ...base, ...{ ["name"]: val.name, ["login"]: val.login } };
}
export function newDeserializeUserMini(val: any): UserMini {
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const login: undefined | string = isJson(val.login, "string") ? val.login : void 0;
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: UserBaseTypeField = newDeserializeUserBaseTypeField(val.type);
    return { name: name, login: login, id: id, type: type } satisfies UserMini;
}
export function newSerializeEventSourceItemTypeField(val: EventSourceItemTypeField): Json {
    return val;
}
export function newDeserializeEventSourceItemTypeField(val: any): EventSourceItemTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"EventSourceItemTypeField\"";
    }
    if (val == "file") {
        return "file";
    }
    if (val == "folder") {
        return "folder";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeEventSourceClassificationField(val: EventSourceClassificationField): Json {
    return { ["name"]: val.name };
}
export function newDeserializeEventSourceClassificationField(val: any): EventSourceClassificationField {
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    return { name: name } satisfies EventSourceClassificationField;
}
export function newSerializeEventSource(val: EventSource): Json {
    return { ["item_type"]: newSerializeEventSourceItemTypeField(val.itemType), ["item_id"]: val.itemId, ["item_name"]: val.itemName, ["classification"]: val.classification == void 0 ? void 0 : newSerializeEventSourceClassificationField(val.classification), ["parent"]: val.parent == void 0 ? void 0 : newSerializeFolderMini(val.parent), ["owned_by"]: val.ownedBy == void 0 ? void 0 : newSerializeUserMini(val.ownedBy) };
}
export function newDeserializeEventSource(val: any): EventSource {
    const itemType: EventSourceItemTypeField = newDeserializeEventSourceItemTypeField(val.item_type);
    const itemId: string = val.item_id;
    const itemName: string = val.item_name;
    const classification: undefined | EventSourceClassificationField = val.classification == void 0 ? void 0 : newDeserializeEventSourceClassificationField(val.classification);
    const parent: undefined | FolderMini = val.parent == void 0 ? void 0 : newDeserializeFolderMini(val.parent);
    const ownedBy: undefined | UserMini = val.owned_by == void 0 ? void 0 : newDeserializeUserMini(val.owned_by);
    return { itemType: itemType, itemId: itemId, itemName: itemName, classification: classification, parent: parent, ownedBy: ownedBy } satisfies EventSource;
}
export function newSerializeUserStatusField(val: UserStatusField): Json {
    return val;
}
export function newDeserializeUserStatusField(val: any): UserStatusField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"UserStatusField\"";
    }
    if (val == "active") {
        return "active";
    }
    if (val == "inactive") {
        return "inactive";
    }
    if (val == "cannot_delete_edit") {
        return "cannot_delete_edit";
    }
    if (val == "cannot_delete_edit_upload") {
        return "cannot_delete_edit_upload";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeUserNotificationEmailField(val: UserNotificationEmailField): Json {
    return { ["email"]: val.email, ["is_confirmed"]: val.isConfirmed };
}
export function newDeserializeUserNotificationEmailField(val: any): UserNotificationEmailField {
    const email: undefined | string = isJson(val.email, "string") ? val.email : void 0;
    const isConfirmed: undefined | boolean = isJson(val.is_confirmed, "boolean") ? val.is_confirmed : void 0;
    return { email: email, isConfirmed: isConfirmed } satisfies UserNotificationEmailField;
}
export function newSerializeUser(val: User): Json {
    const base: any = newSerializeUserMini(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"User\"";
    }
    return { ...base, ...{ ["created_at"]: val.createdAt, ["modified_at"]: val.modifiedAt, ["language"]: val.language, ["timezone"]: val.timezone, ["space_amount"]: val.spaceAmount, ["space_used"]: val.spaceUsed, ["max_upload_size"]: val.maxUploadSize, ["status"]: val.status == void 0 ? void 0 : newSerializeUserStatusField(val.status), ["job_title"]: val.jobTitle, ["phone"]: val.phone, ["address"]: val.address, ["avatar_url"]: val.avatarUrl, ["notification_email"]: val.notificationEmail == void 0 ? void 0 : newSerializeUserNotificationEmailField(val.notificationEmail) } };
}
export function newDeserializeUser(val: any): User {
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const modifiedAt: undefined | string = isJson(val.modified_at, "string") ? val.modified_at : void 0;
    const language: undefined | string = isJson(val.language, "string") ? val.language : void 0;
    const timezone: undefined | string = isJson(val.timezone, "string") ? val.timezone : void 0;
    const spaceAmount: undefined | number = isJson(val.space_amount, "number") ? val.space_amount : void 0;
    const spaceUsed: undefined | number = isJson(val.space_used, "number") ? val.space_used : void 0;
    const maxUploadSize: undefined | number = isJson(val.max_upload_size, "number") ? val.max_upload_size : void 0;
    const status: undefined | UserStatusField = val.status == void 0 ? void 0 : newDeserializeUserStatusField(val.status);
    const jobTitle: undefined | string = isJson(val.job_title, "string") ? val.job_title : void 0;
    const phone: undefined | string = isJson(val.phone, "string") ? val.phone : void 0;
    const address: undefined | string = isJson(val.address, "string") ? val.address : void 0;
    const avatarUrl: undefined | string = isJson(val.avatar_url, "string") ? val.avatar_url : void 0;
    const notificationEmail: undefined | UserNotificationEmailField = val.notification_email == void 0 ? void 0 : newDeserializeUserNotificationEmailField(val.notification_email);
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const login: undefined | string = isJson(val.login, "string") ? val.login : void 0;
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: UserBaseTypeField = newDeserializeUserBaseTypeField(val.type);
    return { createdAt: createdAt, modifiedAt: modifiedAt, language: language, timezone: timezone, spaceAmount: spaceAmount, spaceUsed: spaceUsed, maxUploadSize: maxUploadSize, status: status, jobTitle: jobTitle, phone: phone, address: address, avatarUrl: avatarUrl, notificationEmail: notificationEmail, name: name, login: login, id: id, type: type } satisfies User;
}
export function newSerializeUsersOrderFieldDirectionField(val: UsersOrderFieldDirectionField): Json {
    return val;
}
export function newDeserializeUsersOrderFieldDirectionField(val: any): UsersOrderFieldDirectionField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"UsersOrderFieldDirectionField\"";
    }
    if (val == "ASC") {
        return "ASC";
    }
    if (val == "DESC") {
        return "DESC";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeUsersOrderField(val: UsersOrderField): Json {
    return { ["by"]: val.by, ["direction"]: val.direction == void 0 ? void 0 : newSerializeUsersOrderFieldDirectionField(val.direction) };
}
export function newDeserializeUsersOrderField(val: any): UsersOrderField {
    const by: undefined | string = isJson(val.by, "string") ? val.by : void 0;
    const direction: undefined | UsersOrderFieldDirectionField = val.direction == void 0 ? void 0 : newDeserializeUsersOrderFieldDirectionField(val.direction);
    return { by: by, direction: direction } satisfies UsersOrderField;
}
export function newSerializeUsers(val: Users): Json {
    return { ["total_count"]: val.totalCount, ["limit"]: val.limit, ["offset"]: val.offset, ["order"]: val.order == void 0 ? void 0 : val.order.map(function (item: UsersOrderField): any {
            return newSerializeUsersOrderField(item);
        }) as readonly any[], ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: User): any {
            return newSerializeUser(item);
        }) as readonly any[] };
}
export function newDeserializeUsers(val: any): Users {
    const totalCount: undefined | number = isJson(val.total_count, "number") ? val.total_count : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const offset: undefined | number = isJson(val.offset, "number") ? val.offset : void 0;
    const order: undefined | readonly UsersOrderField[] = isJson(val.order, "array") ? val.order.map(function (itm: Json): any {
        return newDeserializeUsersOrderField(itm);
    }) as readonly any[] : void 0;
    const entries: undefined | readonly User[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return newDeserializeUser(itm);
    }) as readonly any[] : void 0;
    return { totalCount: totalCount, limit: limit, offset: offset, order: order, entries: entries } satisfies Users;
}
export function newSerializeTrashWebLinkRestoredTypeField(val: TrashWebLinkRestoredTypeField): Json {
    return val;
}
export function newDeserializeTrashWebLinkRestoredTypeField(val: any): TrashWebLinkRestoredTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"TrashWebLinkRestoredTypeField\"";
    }
    if (val == "web_link") {
        return "web_link";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeTrashWebLinkRestoredPathCollectionField(val: TrashWebLinkRestoredPathCollectionField): Json {
    return { ["total_count"]: val.totalCount, ["entries"]: val.entries.map(function (item: FolderMini): any {
            return newSerializeFolderMini(item);
        }) as readonly any[] };
}
export function newDeserializeTrashWebLinkRestoredPathCollectionField(val: any): TrashWebLinkRestoredPathCollectionField {
    const totalCount: number = val.total_count;
    const entries: readonly FolderMini[] = val.entries.map(function (itm: Json): any {
        return newDeserializeFolderMini(itm);
    }) as readonly any[];
    return { totalCount: totalCount, entries: entries } satisfies TrashWebLinkRestoredPathCollectionField;
}
export function newSerializeTrashWebLinkRestoredItemStatusField(val: TrashWebLinkRestoredItemStatusField): Json {
    return val;
}
export function newDeserializeTrashWebLinkRestoredItemStatusField(val: any): TrashWebLinkRestoredItemStatusField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"TrashWebLinkRestoredItemStatusField\"";
    }
    if (val == "active") {
        return "active";
    }
    if (val == "trashed") {
        return "trashed";
    }
    if (val == "deleted") {
        return "deleted";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeTrashWebLinkRestored(val: TrashWebLinkRestored): Json {
    return { ["type"]: val.type == void 0 ? void 0 : newSerializeTrashWebLinkRestoredTypeField(val.type), ["id"]: val.id, ["sequence_id"]: val.sequenceId, ["etag"]: val.etag, ["name"]: val.name, ["url"]: val.url, ["parent"]: val.parent == void 0 ? void 0 : newSerializeFolderMini(val.parent), ["description"]: val.description, ["path_collection"]: newSerializeTrashWebLinkRestoredPathCollectionField(val.pathCollection), ["created_at"]: val.createdAt, ["modified_at"]: val.modifiedAt, ["trashed_at"]: val.trashedAt, ["purged_at"]: val.purgedAt, ["created_by"]: val.createdBy == void 0 ? void 0 : newSerializeUserMini(val.createdBy), ["modified_by"]: val.modifiedBy == void 0 ? void 0 : newSerializeUserMini(val.modifiedBy), ["owned_by"]: val.ownedBy == void 0 ? void 0 : newSerializeUserMini(val.ownedBy), ["shared_link"]: val.sharedLink, ["item_status"]: val.itemStatus == void 0 ? void 0 : newSerializeTrashWebLinkRestoredItemStatusField(val.itemStatus) };
}
export function newDeserializeTrashWebLinkRestored(val: any): TrashWebLinkRestored {
    const type: undefined | TrashWebLinkRestoredTypeField = val.type == void 0 ? void 0 : newDeserializeTrashWebLinkRestoredTypeField(val.type);
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const sequenceId: string = val.sequence_id;
    const etag: undefined | string = isJson(val.etag, "string") ? val.etag : void 0;
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const url: undefined | string = isJson(val.url, "string") ? val.url : void 0;
    const parent: undefined | FolderMini = val.parent == void 0 ? void 0 : newDeserializeFolderMini(val.parent);
    const description: undefined | string = isJson(val.description, "string") ? val.description : void 0;
    const pathCollection: TrashWebLinkRestoredPathCollectionField = newDeserializeTrashWebLinkRestoredPathCollectionField(val.path_collection);
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const modifiedAt: undefined | string = isJson(val.modified_at, "string") ? val.modified_at : void 0;
    const trashedAt: undefined | string = isJson(val.trashed_at, "string") ? val.trashed_at : void 0;
    const purgedAt: undefined | string = isJson(val.purged_at, "string") ? val.purged_at : void 0;
    const createdBy: undefined | UserMini = val.created_by == void 0 ? void 0 : newDeserializeUserMini(val.created_by);
    const modifiedBy: undefined | UserMini = val.modified_by == void 0 ? void 0 : newDeserializeUserMini(val.modified_by);
    const ownedBy: undefined | UserMini = val.owned_by == void 0 ? void 0 : newDeserializeUserMini(val.owned_by);
    const sharedLink: undefined | string = isJson(val.shared_link, "string") ? val.shared_link : void 0;
    const itemStatus: undefined | TrashWebLinkRestoredItemStatusField = val.item_status == void 0 ? void 0 : newDeserializeTrashWebLinkRestoredItemStatusField(val.item_status);
    return { type: type, id: id, sequenceId: sequenceId, etag: etag, name: name, url: url, parent: parent, description: description, pathCollection: pathCollection, createdAt: createdAt, modifiedAt: modifiedAt, trashedAt: trashedAt, purgedAt: purgedAt, createdBy: createdBy, modifiedBy: modifiedBy, ownedBy: ownedBy, sharedLink: sharedLink, itemStatus: itemStatus } satisfies TrashWebLinkRestored;
}
export function newSerializeTrashFolderRestoredTypeField(val: TrashFolderRestoredTypeField): Json {
    return val;
}
export function newDeserializeTrashFolderRestoredTypeField(val: any): TrashFolderRestoredTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"TrashFolderRestoredTypeField\"";
    }
    if (val == "folder") {
        return "folder";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeTrashFolderRestoredPathCollectionField(val: TrashFolderRestoredPathCollectionField): Json {
    return { ["total_count"]: val.totalCount, ["entries"]: val.entries.map(function (item: FolderMini): any {
            return newSerializeFolderMini(item);
        }) as readonly any[] };
}
export function newDeserializeTrashFolderRestoredPathCollectionField(val: any): TrashFolderRestoredPathCollectionField {
    const totalCount: number = val.total_count;
    const entries: readonly FolderMini[] = val.entries.map(function (itm: Json): any {
        return newDeserializeFolderMini(itm);
    }) as readonly any[];
    return { totalCount: totalCount, entries: entries } satisfies TrashFolderRestoredPathCollectionField;
}
export function newSerializeTrashFolderRestoredItemStatusField(val: TrashFolderRestoredItemStatusField): Json {
    return val;
}
export function newDeserializeTrashFolderRestoredItemStatusField(val: any): TrashFolderRestoredItemStatusField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"TrashFolderRestoredItemStatusField\"";
    }
    if (val == "active") {
        return "active";
    }
    if (val == "trashed") {
        return "trashed";
    }
    if (val == "deleted") {
        return "deleted";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeTrashFolderRestored(val: TrashFolderRestored): Json {
    return { ["id"]: val.id, ["etag"]: val.etag, ["type"]: val.type == void 0 ? void 0 : newSerializeTrashFolderRestoredTypeField(val.type), ["sequence_id"]: val.sequenceId, ["name"]: val.name, ["created_at"]: val.createdAt, ["modified_at"]: val.modifiedAt, ["description"]: val.description, ["size"]: val.size, ["path_collection"]: val.pathCollection == void 0 ? void 0 : newSerializeTrashFolderRestoredPathCollectionField(val.pathCollection), ["created_by"]: val.createdBy == void 0 ? void 0 : newSerializeUserMini(val.createdBy), ["modified_by"]: val.modifiedBy == void 0 ? void 0 : newSerializeUserMini(val.modifiedBy), ["trashed_at"]: val.trashedAt, ["purged_at"]: val.purgedAt, ["content_created_at"]: val.contentCreatedAt, ["content_modified_at"]: val.contentModifiedAt, ["owned_by"]: val.ownedBy == void 0 ? void 0 : newSerializeUserMini(val.ownedBy), ["shared_link"]: val.sharedLink, ["folder_upload_email"]: val.folderUploadEmail, ["parent"]: val.parent == void 0 ? void 0 : newSerializeFolderMini(val.parent), ["item_status"]: val.itemStatus == void 0 ? void 0 : newSerializeTrashFolderRestoredItemStatusField(val.itemStatus) };
}
export function newDeserializeTrashFolderRestored(val: any): TrashFolderRestored {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const etag: undefined | string = isJson(val.etag, "string") ? val.etag : void 0;
    const type: undefined | TrashFolderRestoredTypeField = val.type == void 0 ? void 0 : newDeserializeTrashFolderRestoredTypeField(val.type);
    const sequenceId: undefined | string = isJson(val.sequence_id, "string") ? val.sequence_id : void 0;
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const modifiedAt: undefined | string = isJson(val.modified_at, "string") ? val.modified_at : void 0;
    const description: undefined | string = isJson(val.description, "string") ? val.description : void 0;
    const size: undefined | number = isJson(val.size, "number") ? val.size : void 0;
    const pathCollection: undefined | TrashFolderRestoredPathCollectionField = val.path_collection == void 0 ? void 0 : newDeserializeTrashFolderRestoredPathCollectionField(val.path_collection);
    const createdBy: undefined | UserMini = val.created_by == void 0 ? void 0 : newDeserializeUserMini(val.created_by);
    const modifiedBy: undefined | UserMini = val.modified_by == void 0 ? void 0 : newDeserializeUserMini(val.modified_by);
    const trashedAt: undefined | string = isJson(val.trashed_at, "string") ? val.trashed_at : void 0;
    const purgedAt: undefined | string = isJson(val.purged_at, "string") ? val.purged_at : void 0;
    const contentCreatedAt: undefined | string = isJson(val.content_created_at, "string") ? val.content_created_at : void 0;
    const contentModifiedAt: undefined | string = isJson(val.content_modified_at, "string") ? val.content_modified_at : void 0;
    const ownedBy: undefined | UserMini = val.owned_by == void 0 ? void 0 : newDeserializeUserMini(val.owned_by);
    const sharedLink: undefined | string = isJson(val.shared_link, "string") ? val.shared_link : void 0;
    const folderUploadEmail: undefined | string = isJson(val.folder_upload_email, "string") ? val.folder_upload_email : void 0;
    const parent: undefined | FolderMini = val.parent == void 0 ? void 0 : newDeserializeFolderMini(val.parent);
    const itemStatus: undefined | TrashFolderRestoredItemStatusField = val.item_status == void 0 ? void 0 : newDeserializeTrashFolderRestoredItemStatusField(val.item_status);
    return { id: id, etag: etag, type: type, sequenceId: sequenceId, name: name, createdAt: createdAt, modifiedAt: modifiedAt, description: description, size: size, pathCollection: pathCollection, createdBy: createdBy, modifiedBy: modifiedBy, trashedAt: trashedAt, purgedAt: purgedAt, contentCreatedAt: contentCreatedAt, contentModifiedAt: contentModifiedAt, ownedBy: ownedBy, sharedLink: sharedLink, folderUploadEmail: folderUploadEmail, parent: parent, itemStatus: itemStatus } satisfies TrashFolderRestored;
}
export function newSerializeTrashFileRestoredTypeField(val: TrashFileRestoredTypeField): Json {
    return val;
}
export function newDeserializeTrashFileRestoredTypeField(val: any): TrashFileRestoredTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"TrashFileRestoredTypeField\"";
    }
    if (val == "file") {
        return "file";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeTrashFileRestoredPathCollectionField(val: TrashFileRestoredPathCollectionField): Json {
    return { ["total_count"]: val.totalCount, ["entries"]: val.entries.map(function (item: FolderMini): any {
            return newSerializeFolderMini(item);
        }) as readonly any[] };
}
export function newDeserializeTrashFileRestoredPathCollectionField(val: any): TrashFileRestoredPathCollectionField {
    const totalCount: number = val.total_count;
    const entries: readonly FolderMini[] = val.entries.map(function (itm: Json): any {
        return newDeserializeFolderMini(itm);
    }) as readonly any[];
    return { totalCount: totalCount, entries: entries } satisfies TrashFileRestoredPathCollectionField;
}
export function newSerializeTrashFileRestoredItemStatusField(val: TrashFileRestoredItemStatusField): Json {
    return val;
}
export function newDeserializeTrashFileRestoredItemStatusField(val: any): TrashFileRestoredItemStatusField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"TrashFileRestoredItemStatusField\"";
    }
    if (val == "active") {
        return "active";
    }
    if (val == "trashed") {
        return "trashed";
    }
    if (val == "deleted") {
        return "deleted";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeTrashFileRestored(val: TrashFileRestored): Json {
    return { ["id"]: val.id, ["etag"]: val.etag, ["type"]: newSerializeTrashFileRestoredTypeField(val.type), ["sequence_id"]: val.sequenceId, ["name"]: val.name, ["sha1"]: val.sha1, ["file_version"]: val.fileVersion == void 0 ? void 0 : newSerializeFileVersionMini(val.fileVersion), ["description"]: val.description, ["size"]: val.size, ["path_collection"]: newSerializeTrashFileRestoredPathCollectionField(val.pathCollection), ["created_at"]: val.createdAt, ["modified_at"]: val.modifiedAt, ["trashed_at"]: val.trashedAt, ["purged_at"]: val.purgedAt, ["content_created_at"]: val.contentCreatedAt, ["content_modified_at"]: val.contentModifiedAt, ["created_by"]: val.createdBy == void 0 ? void 0 : newSerializeUserMini(val.createdBy), ["modified_by"]: newSerializeUserMini(val.modifiedBy), ["owned_by"]: newSerializeUserMini(val.ownedBy), ["shared_link"]: val.sharedLink, ["parent"]: val.parent == void 0 ? void 0 : newSerializeFolderMini(val.parent), ["item_status"]: newSerializeTrashFileRestoredItemStatusField(val.itemStatus) };
}
export function newDeserializeTrashFileRestored(val: any): TrashFileRestored {
    const id: string = val.id;
    const etag: undefined | string = isJson(val.etag, "string") ? val.etag : void 0;
    const type: TrashFileRestoredTypeField = newDeserializeTrashFileRestoredTypeField(val.type);
    const sequenceId: string = val.sequence_id;
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const sha1: string = val.sha1;
    const fileVersion: undefined | FileVersionMini = val.file_version == void 0 ? void 0 : newDeserializeFileVersionMini(val.file_version);
    const description: string = val.description;
    const size: number = val.size;
    const pathCollection: TrashFileRestoredPathCollectionField = newDeserializeTrashFileRestoredPathCollectionField(val.path_collection);
    const createdAt: string = val.created_at;
    const modifiedAt: string = val.modified_at;
    const trashedAt: undefined | string = isJson(val.trashed_at, "string") ? val.trashed_at : void 0;
    const purgedAt: undefined | string = isJson(val.purged_at, "string") ? val.purged_at : void 0;
    const contentCreatedAt: undefined | string = isJson(val.content_created_at, "string") ? val.content_created_at : void 0;
    const contentModifiedAt: undefined | string = isJson(val.content_modified_at, "string") ? val.content_modified_at : void 0;
    const createdBy: undefined | UserMini = val.created_by == void 0 ? void 0 : newDeserializeUserMini(val.created_by);
    const modifiedBy: UserMini = newDeserializeUserMini(val.modified_by);
    const ownedBy: UserMini = newDeserializeUserMini(val.owned_by);
    const sharedLink: undefined | string = isJson(val.shared_link, "string") ? val.shared_link : void 0;
    const parent: undefined | FolderMini = val.parent == void 0 ? void 0 : newDeserializeFolderMini(val.parent);
    const itemStatus: TrashFileRestoredItemStatusField = newDeserializeTrashFileRestoredItemStatusField(val.item_status);
    return { id: id, etag: etag, type: type, sequenceId: sequenceId, name: name, sha1: sha1, fileVersion: fileVersion, description: description, size: size, pathCollection: pathCollection, createdAt: createdAt, modifiedAt: modifiedAt, trashedAt: trashedAt, purgedAt: purgedAt, contentCreatedAt: contentCreatedAt, contentModifiedAt: contentModifiedAt, createdBy: createdBy, modifiedBy: modifiedBy, ownedBy: ownedBy, sharedLink: sharedLink, parent: parent, itemStatus: itemStatus } satisfies TrashFileRestored;
}
export function newSerializeTrashWebLinkTypeField(val: TrashWebLinkTypeField): Json {
    return val;
}
export function newDeserializeTrashWebLinkTypeField(val: any): TrashWebLinkTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"TrashWebLinkTypeField\"";
    }
    if (val == "web_link") {
        return "web_link";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeTrashWebLinkPathCollectionFieldEntriesFieldTypeField(val: TrashWebLinkPathCollectionFieldEntriesFieldTypeField): Json {
    return val;
}
export function newDeserializeTrashWebLinkPathCollectionFieldEntriesFieldTypeField(val: any): TrashWebLinkPathCollectionFieldEntriesFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"TrashWebLinkPathCollectionFieldEntriesFieldTypeField\"";
    }
    if (val == "folder") {
        return "folder";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeTrashWebLinkPathCollectionFieldEntriesField(val: TrashWebLinkPathCollectionFieldEntriesField): Json {
    return { ["type"]: val.type == void 0 ? void 0 : newSerializeTrashWebLinkPathCollectionFieldEntriesFieldTypeField(val.type), ["id"]: val.id, ["sequence_id"]: val.sequenceId, ["etag"]: val.etag, ["name"]: val.name };
}
export function newDeserializeTrashWebLinkPathCollectionFieldEntriesField(val: any): TrashWebLinkPathCollectionFieldEntriesField {
    const type: undefined | TrashWebLinkPathCollectionFieldEntriesFieldTypeField = val.type == void 0 ? void 0 : newDeserializeTrashWebLinkPathCollectionFieldEntriesFieldTypeField(val.type);
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const sequenceId: undefined | string = isJson(val.sequence_id, "string") ? val.sequence_id : void 0;
    const etag: undefined | string = isJson(val.etag, "string") ? val.etag : void 0;
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    return { type: type, id: id, sequenceId: sequenceId, etag: etag, name: name } satisfies TrashWebLinkPathCollectionFieldEntriesField;
}
export function newSerializeTrashWebLinkPathCollectionField(val: TrashWebLinkPathCollectionField): Json {
    return { ["total_count"]: val.totalCount, ["entries"]: val.entries.map(function (item: TrashWebLinkPathCollectionFieldEntriesField): any {
            return newSerializeTrashWebLinkPathCollectionFieldEntriesField(item);
        }) as readonly any[] };
}
export function newDeserializeTrashWebLinkPathCollectionField(val: any): TrashWebLinkPathCollectionField {
    const totalCount: number = val.total_count;
    const entries: readonly TrashWebLinkPathCollectionFieldEntriesField[] = val.entries.map(function (itm: Json): any {
        return newDeserializeTrashWebLinkPathCollectionFieldEntriesField(itm);
    }) as readonly any[];
    return { totalCount: totalCount, entries: entries } satisfies TrashWebLinkPathCollectionField;
}
export function newSerializeTrashWebLinkItemStatusField(val: TrashWebLinkItemStatusField): Json {
    return val;
}
export function newDeserializeTrashWebLinkItemStatusField(val: any): TrashWebLinkItemStatusField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"TrashWebLinkItemStatusField\"";
    }
    if (val == "active") {
        return "active";
    }
    if (val == "trashed") {
        return "trashed";
    }
    if (val == "deleted") {
        return "deleted";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeTrashWebLink(val: TrashWebLink): Json {
    return { ["type"]: val.type == void 0 ? void 0 : newSerializeTrashWebLinkTypeField(val.type), ["id"]: val.id, ["sequence_id"]: val.sequenceId, ["etag"]: val.etag, ["name"]: val.name, ["url"]: val.url, ["parent"]: val.parent == void 0 ? void 0 : newSerializeFolderMini(val.parent), ["description"]: val.description, ["path_collection"]: val.pathCollection == void 0 ? void 0 : newSerializeTrashWebLinkPathCollectionField(val.pathCollection), ["created_at"]: val.createdAt, ["modified_at"]: val.modifiedAt, ["trashed_at"]: val.trashedAt, ["purged_at"]: val.purgedAt, ["created_by"]: val.createdBy == void 0 ? void 0 : newSerializeUserMini(val.createdBy), ["modified_by"]: val.modifiedBy == void 0 ? void 0 : newSerializeUserMini(val.modifiedBy), ["owned_by"]: val.ownedBy == void 0 ? void 0 : newSerializeUserMini(val.ownedBy), ["shared_link"]: val.sharedLink, ["item_status"]: val.itemStatus == void 0 ? void 0 : newSerializeTrashWebLinkItemStatusField(val.itemStatus) };
}
export function newDeserializeTrashWebLink(val: any): TrashWebLink {
    const type: undefined | TrashWebLinkTypeField = val.type == void 0 ? void 0 : newDeserializeTrashWebLinkTypeField(val.type);
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const sequenceId: undefined | string = isJson(val.sequence_id, "string") ? val.sequence_id : void 0;
    const etag: undefined | string = isJson(val.etag, "string") ? val.etag : void 0;
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const url: undefined | string = isJson(val.url, "string") ? val.url : void 0;
    const parent: undefined | FolderMini = val.parent == void 0 ? void 0 : newDeserializeFolderMini(val.parent);
    const description: undefined | string = isJson(val.description, "string") ? val.description : void 0;
    const pathCollection: undefined | TrashWebLinkPathCollectionField = val.path_collection == void 0 ? void 0 : newDeserializeTrashWebLinkPathCollectionField(val.path_collection);
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const modifiedAt: undefined | string = isJson(val.modified_at, "string") ? val.modified_at : void 0;
    const trashedAt: undefined | string = isJson(val.trashed_at, "string") ? val.trashed_at : void 0;
    const purgedAt: undefined | string = isJson(val.purged_at, "string") ? val.purged_at : void 0;
    const createdBy: undefined | UserMini = val.created_by == void 0 ? void 0 : newDeserializeUserMini(val.created_by);
    const modifiedBy: undefined | UserMini = val.modified_by == void 0 ? void 0 : newDeserializeUserMini(val.modified_by);
    const ownedBy: undefined | UserMini = val.owned_by == void 0 ? void 0 : newDeserializeUserMini(val.owned_by);
    const sharedLink: undefined | string = isJson(val.shared_link, "string") ? val.shared_link : void 0;
    const itemStatus: undefined | TrashWebLinkItemStatusField = val.item_status == void 0 ? void 0 : newDeserializeTrashWebLinkItemStatusField(val.item_status);
    return { type: type, id: id, sequenceId: sequenceId, etag: etag, name: name, url: url, parent: parent, description: description, pathCollection: pathCollection, createdAt: createdAt, modifiedAt: modifiedAt, trashedAt: trashedAt, purgedAt: purgedAt, createdBy: createdBy, modifiedBy: modifiedBy, ownedBy: ownedBy, sharedLink: sharedLink, itemStatus: itemStatus } satisfies TrashWebLink;
}
export function newSerializeTrashFolderTypeField(val: TrashFolderTypeField): Json {
    return val;
}
export function newDeserializeTrashFolderTypeField(val: any): TrashFolderTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"TrashFolderTypeField\"";
    }
    if (val == "folder") {
        return "folder";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeTrashFolderPathCollectionFieldEntriesFieldTypeField(val: TrashFolderPathCollectionFieldEntriesFieldTypeField): Json {
    return val;
}
export function newDeserializeTrashFolderPathCollectionFieldEntriesFieldTypeField(val: any): TrashFolderPathCollectionFieldEntriesFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"TrashFolderPathCollectionFieldEntriesFieldTypeField\"";
    }
    if (val == "folder") {
        return "folder";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeTrashFolderPathCollectionFieldEntriesField(val: TrashFolderPathCollectionFieldEntriesField): Json {
    return { ["type"]: val.type == void 0 ? void 0 : newSerializeTrashFolderPathCollectionFieldEntriesFieldTypeField(val.type), ["id"]: val.id, ["sequence_id"]: val.sequenceId, ["etag"]: val.etag, ["name"]: val.name };
}
export function newDeserializeTrashFolderPathCollectionFieldEntriesField(val: any): TrashFolderPathCollectionFieldEntriesField {
    const type: undefined | TrashFolderPathCollectionFieldEntriesFieldTypeField = val.type == void 0 ? void 0 : newDeserializeTrashFolderPathCollectionFieldEntriesFieldTypeField(val.type);
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const sequenceId: undefined | string = isJson(val.sequence_id, "string") ? val.sequence_id : void 0;
    const etag: undefined | string = isJson(val.etag, "string") ? val.etag : void 0;
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    return { type: type, id: id, sequenceId: sequenceId, etag: etag, name: name } satisfies TrashFolderPathCollectionFieldEntriesField;
}
export function newSerializeTrashFolderPathCollectionField(val: TrashFolderPathCollectionField): Json {
    return { ["total_count"]: val.totalCount, ["entries"]: val.entries.map(function (item: TrashFolderPathCollectionFieldEntriesField): any {
            return newSerializeTrashFolderPathCollectionFieldEntriesField(item);
        }) as readonly any[] };
}
export function newDeserializeTrashFolderPathCollectionField(val: any): TrashFolderPathCollectionField {
    const totalCount: number = val.total_count;
    const entries: readonly TrashFolderPathCollectionFieldEntriesField[] = val.entries.map(function (itm: Json): any {
        return newDeserializeTrashFolderPathCollectionFieldEntriesField(itm);
    }) as readonly any[];
    return { totalCount: totalCount, entries: entries } satisfies TrashFolderPathCollectionField;
}
export function newSerializeTrashFolderItemStatusField(val: TrashFolderItemStatusField): Json {
    return val;
}
export function newDeserializeTrashFolderItemStatusField(val: any): TrashFolderItemStatusField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"TrashFolderItemStatusField\"";
    }
    if (val == "active") {
        return "active";
    }
    if (val == "trashed") {
        return "trashed";
    }
    if (val == "deleted") {
        return "deleted";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeTrashFolder(val: TrashFolder): Json {
    return { ["id"]: val.id, ["etag"]: val.etag, ["type"]: newSerializeTrashFolderTypeField(val.type), ["sequence_id"]: val.sequenceId, ["name"]: val.name, ["created_at"]: val.createdAt, ["modified_at"]: val.modifiedAt, ["description"]: val.description, ["size"]: val.size, ["path_collection"]: newSerializeTrashFolderPathCollectionField(val.pathCollection), ["created_by"]: newSerializeUserMini(val.createdBy), ["modified_by"]: newSerializeUserMini(val.modifiedBy), ["trashed_at"]: val.trashedAt, ["purged_at"]: val.purgedAt, ["content_created_at"]: val.contentCreatedAt, ["content_modified_at"]: val.contentModifiedAt, ["owned_by"]: newSerializeUserMini(val.ownedBy), ["shared_link"]: val.sharedLink, ["folder_upload_email"]: val.folderUploadEmail, ["parent"]: val.parent == void 0 ? void 0 : newSerializeFolderMini(val.parent), ["item_status"]: newSerializeTrashFolderItemStatusField(val.itemStatus) };
}
export function newDeserializeTrashFolder(val: any): TrashFolder {
    const id: string = val.id;
    const etag: undefined | string = isJson(val.etag, "string") ? val.etag : void 0;
    const type: TrashFolderTypeField = newDeserializeTrashFolderTypeField(val.type);
    const sequenceId: undefined | string = isJson(val.sequence_id, "string") ? val.sequence_id : void 0;
    const name: string = val.name;
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const modifiedAt: undefined | string = isJson(val.modified_at, "string") ? val.modified_at : void 0;
    const description: string = val.description;
    const size: number = val.size;
    const pathCollection: TrashFolderPathCollectionField = newDeserializeTrashFolderPathCollectionField(val.path_collection);
    const createdBy: UserMini = newDeserializeUserMini(val.created_by);
    const modifiedBy: UserMini = newDeserializeUserMini(val.modified_by);
    const trashedAt: undefined | string = isJson(val.trashed_at, "string") ? val.trashed_at : void 0;
    const purgedAt: undefined | string = isJson(val.purged_at, "string") ? val.purged_at : void 0;
    const contentCreatedAt: undefined | string = isJson(val.content_created_at, "string") ? val.content_created_at : void 0;
    const contentModifiedAt: undefined | string = isJson(val.content_modified_at, "string") ? val.content_modified_at : void 0;
    const ownedBy: UserMini = newDeserializeUserMini(val.owned_by);
    const sharedLink: undefined | string = isJson(val.shared_link, "string") ? val.shared_link : void 0;
    const folderUploadEmail: undefined | string = isJson(val.folder_upload_email, "string") ? val.folder_upload_email : void 0;
    const parent: undefined | FolderMini = val.parent == void 0 ? void 0 : newDeserializeFolderMini(val.parent);
    const itemStatus: TrashFolderItemStatusField = newDeserializeTrashFolderItemStatusField(val.item_status);
    return { id: id, etag: etag, type: type, sequenceId: sequenceId, name: name, createdAt: createdAt, modifiedAt: modifiedAt, description: description, size: size, pathCollection: pathCollection, createdBy: createdBy, modifiedBy: modifiedBy, trashedAt: trashedAt, purgedAt: purgedAt, contentCreatedAt: contentCreatedAt, contentModifiedAt: contentModifiedAt, ownedBy: ownedBy, sharedLink: sharedLink, folderUploadEmail: folderUploadEmail, parent: parent, itemStatus: itemStatus } satisfies TrashFolder;
}
export function newSerializeTrashFileTypeField(val: TrashFileTypeField): Json {
    return val;
}
export function newDeserializeTrashFileTypeField(val: any): TrashFileTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"TrashFileTypeField\"";
    }
    if (val == "file") {
        return "file";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeTrashFilePathCollectionFieldEntriesFieldTypeField(val: TrashFilePathCollectionFieldEntriesFieldTypeField): Json {
    return val;
}
export function newDeserializeTrashFilePathCollectionFieldEntriesFieldTypeField(val: any): TrashFilePathCollectionFieldEntriesFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"TrashFilePathCollectionFieldEntriesFieldTypeField\"";
    }
    if (val == "folder") {
        return "folder";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeTrashFilePathCollectionFieldEntriesField(val: TrashFilePathCollectionFieldEntriesField): Json {
    return { ["type"]: val.type == void 0 ? void 0 : newSerializeTrashFilePathCollectionFieldEntriesFieldTypeField(val.type), ["id"]: val.id, ["sequence_id"]: val.sequenceId, ["etag"]: val.etag, ["name"]: val.name };
}
export function newDeserializeTrashFilePathCollectionFieldEntriesField(val: any): TrashFilePathCollectionFieldEntriesField {
    const type: undefined | TrashFilePathCollectionFieldEntriesFieldTypeField = val.type == void 0 ? void 0 : newDeserializeTrashFilePathCollectionFieldEntriesFieldTypeField(val.type);
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const sequenceId: undefined | string = isJson(val.sequence_id, "string") ? val.sequence_id : void 0;
    const etag: undefined | string = isJson(val.etag, "string") ? val.etag : void 0;
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    return { type: type, id: id, sequenceId: sequenceId, etag: etag, name: name } satisfies TrashFilePathCollectionFieldEntriesField;
}
export function newSerializeTrashFilePathCollectionField(val: TrashFilePathCollectionField): Json {
    return { ["total_count"]: val.totalCount, ["entries"]: val.entries.map(function (item: TrashFilePathCollectionFieldEntriesField): any {
            return newSerializeTrashFilePathCollectionFieldEntriesField(item);
        }) as readonly any[] };
}
export function newDeserializeTrashFilePathCollectionField(val: any): TrashFilePathCollectionField {
    const totalCount: number = val.total_count;
    const entries: readonly TrashFilePathCollectionFieldEntriesField[] = val.entries.map(function (itm: Json): any {
        return newDeserializeTrashFilePathCollectionFieldEntriesField(itm);
    }) as readonly any[];
    return { totalCount: totalCount, entries: entries } satisfies TrashFilePathCollectionField;
}
export function newSerializeTrashFileItemStatusField(val: TrashFileItemStatusField): Json {
    return val;
}
export function newDeserializeTrashFileItemStatusField(val: any): TrashFileItemStatusField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"TrashFileItemStatusField\"";
    }
    if (val == "active") {
        return "active";
    }
    if (val == "trashed") {
        return "trashed";
    }
    if (val == "deleted") {
        return "deleted";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeTrashFile(val: TrashFile): Json {
    return { ["id"]: val.id, ["etag"]: val.etag, ["type"]: newSerializeTrashFileTypeField(val.type), ["sequence_id"]: val.sequenceId, ["name"]: val.name, ["sha1"]: val.sha1, ["file_version"]: val.fileVersion == void 0 ? void 0 : newSerializeFileVersionMini(val.fileVersion), ["description"]: val.description, ["size"]: val.size, ["path_collection"]: newSerializeTrashFilePathCollectionField(val.pathCollection), ["created_at"]: val.createdAt, ["modified_at"]: val.modifiedAt, ["trashed_at"]: val.trashedAt, ["purged_at"]: val.purgedAt, ["content_created_at"]: val.contentCreatedAt, ["content_modified_at"]: val.contentModifiedAt, ["created_by"]: val.createdBy == void 0 ? void 0 : newSerializeUserMini(val.createdBy), ["modified_by"]: newSerializeUserMini(val.modifiedBy), ["owned_by"]: newSerializeUserMini(val.ownedBy), ["shared_link"]: val.sharedLink, ["parent"]: val.parent == void 0 ? void 0 : newSerializeFolderMini(val.parent), ["item_status"]: newSerializeTrashFileItemStatusField(val.itemStatus) };
}
export function newDeserializeTrashFile(val: any): TrashFile {
    const id: string = val.id;
    const etag: undefined | string = isJson(val.etag, "string") ? val.etag : void 0;
    const type: TrashFileTypeField = newDeserializeTrashFileTypeField(val.type);
    const sequenceId: string = val.sequence_id;
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const sha1: string = val.sha1;
    const fileVersion: undefined | FileVersionMini = val.file_version == void 0 ? void 0 : newDeserializeFileVersionMini(val.file_version);
    const description: string = val.description;
    const size: number = val.size;
    const pathCollection: TrashFilePathCollectionField = newDeserializeTrashFilePathCollectionField(val.path_collection);
    const createdAt: string = val.created_at;
    const modifiedAt: string = val.modified_at;
    const trashedAt: undefined | string = isJson(val.trashed_at, "string") ? val.trashed_at : void 0;
    const purgedAt: undefined | string = isJson(val.purged_at, "string") ? val.purged_at : void 0;
    const contentCreatedAt: undefined | string = isJson(val.content_created_at, "string") ? val.content_created_at : void 0;
    const contentModifiedAt: undefined | string = isJson(val.content_modified_at, "string") ? val.content_modified_at : void 0;
    const createdBy: undefined | UserMini = val.created_by == void 0 ? void 0 : newDeserializeUserMini(val.created_by);
    const modifiedBy: UserMini = newDeserializeUserMini(val.modified_by);
    const ownedBy: UserMini = newDeserializeUserMini(val.owned_by);
    const sharedLink: undefined | string = isJson(val.shared_link, "string") ? val.shared_link : void 0;
    const parent: undefined | FolderMini = val.parent == void 0 ? void 0 : newDeserializeFolderMini(val.parent);
    const itemStatus: TrashFileItemStatusField = newDeserializeTrashFileItemStatusField(val.item_status);
    return { id: id, etag: etag, type: type, sequenceId: sequenceId, name: name, sha1: sha1, fileVersion: fileVersion, description: description, size: size, pathCollection: pathCollection, createdAt: createdAt, modifiedAt: modifiedAt, trashedAt: trashedAt, purgedAt: purgedAt, contentCreatedAt: contentCreatedAt, contentModifiedAt: contentModifiedAt, createdBy: createdBy, modifiedBy: modifiedBy, ownedBy: ownedBy, sharedLink: sharedLink, parent: parent, itemStatus: itemStatus } satisfies TrashFile;
}
export function newSerializeTermsOfServiceUserStatusTypeField(val: TermsOfServiceUserStatusTypeField): Json {
    return val;
}
export function newDeserializeTermsOfServiceUserStatusTypeField(val: any): TermsOfServiceUserStatusTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"TermsOfServiceUserStatusTypeField\"";
    }
    if (val == "terms_of_service_user_status") {
        return "terms_of_service_user_status";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeTermsOfServiceUserStatus(val: TermsOfServiceUserStatus): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : newSerializeTermsOfServiceUserStatusTypeField(val.type), ["tos"]: val.tos == void 0 ? void 0 : newSerializeTermsOfServiceBase(val.tos), ["user"]: val.user == void 0 ? void 0 : newSerializeUserMini(val.user), ["is_accepted"]: val.isAccepted, ["created_at"]: val.createdAt, ["modified_at"]: val.modifiedAt };
}
export function newDeserializeTermsOfServiceUserStatus(val: any): TermsOfServiceUserStatus {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | TermsOfServiceUserStatusTypeField = val.type == void 0 ? void 0 : newDeserializeTermsOfServiceUserStatusTypeField(val.type);
    const tos: undefined | TermsOfServiceBase = val.tos == void 0 ? void 0 : newDeserializeTermsOfServiceBase(val.tos);
    const user: undefined | UserMini = val.user == void 0 ? void 0 : newDeserializeUserMini(val.user);
    const isAccepted: undefined | boolean = isJson(val.is_accepted, "boolean") ? val.is_accepted : void 0;
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const modifiedAt: undefined | string = isJson(val.modified_at, "string") ? val.modified_at : void 0;
    return { id: id, type: type, tos: tos, user: user, isAccepted: isAccepted, createdAt: createdAt, modifiedAt: modifiedAt } satisfies TermsOfServiceUserStatus;
}
export function newSerializeTermsOfServiceUserStatuses(val: TermsOfServiceUserStatuses): Json {
    return { ["total_count"]: val.totalCount, ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: TermsOfServiceUserStatus): any {
            return newSerializeTermsOfServiceUserStatus(item);
        }) as readonly any[] };
}
export function newDeserializeTermsOfServiceUserStatuses(val: any): TermsOfServiceUserStatuses {
    const totalCount: undefined | number = isJson(val.total_count, "number") ? val.total_count : void 0;
    const entries: undefined | readonly TermsOfServiceUserStatus[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return newDeserializeTermsOfServiceUserStatus(itm);
    }) as readonly any[] : void 0;
    return { totalCount: totalCount, entries: entries } satisfies TermsOfServiceUserStatuses;
}
export function newSerializeTaskAssignmentTypeField(val: TaskAssignmentTypeField): Json {
    return val;
}
export function newDeserializeTaskAssignmentTypeField(val: any): TaskAssignmentTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"TaskAssignmentTypeField\"";
    }
    if (val == "task_assignment") {
        return "task_assignment";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeTaskAssignmentResolutionStateField(val: TaskAssignmentResolutionStateField): Json {
    return val;
}
export function newDeserializeTaskAssignmentResolutionStateField(val: any): TaskAssignmentResolutionStateField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"TaskAssignmentResolutionStateField\"";
    }
    if (val == "completed") {
        return "completed";
    }
    if (val == "incomplete") {
        return "incomplete";
    }
    if (val == "approved") {
        return "approved";
    }
    if (val == "rejected") {
        return "rejected";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeTaskAssignment(val: TaskAssignment): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : newSerializeTaskAssignmentTypeField(val.type), ["item"]: val.item == void 0 ? void 0 : newSerializeFileMini(val.item), ["assigned_to"]: val.assignedTo == void 0 ? void 0 : newSerializeUserMini(val.assignedTo), ["message"]: val.message, ["completed_at"]: val.completedAt, ["assigned_at"]: val.assignedAt, ["reminded_at"]: val.remindedAt, ["resolution_state"]: val.resolutionState == void 0 ? void 0 : newSerializeTaskAssignmentResolutionStateField(val.resolutionState), ["assigned_by"]: val.assignedBy == void 0 ? void 0 : newSerializeUserMini(val.assignedBy) };
}
export function newDeserializeTaskAssignment(val: any): TaskAssignment {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | TaskAssignmentTypeField = val.type == void 0 ? void 0 : newDeserializeTaskAssignmentTypeField(val.type);
    const item: undefined | FileMini = val.item == void 0 ? void 0 : newDeserializeFileMini(val.item);
    const assignedTo: undefined | UserMini = val.assigned_to == void 0 ? void 0 : newDeserializeUserMini(val.assigned_to);
    const message: undefined | string = isJson(val.message, "string") ? val.message : void 0;
    const completedAt: undefined | string = isJson(val.completed_at, "string") ? val.completed_at : void 0;
    const assignedAt: undefined | string = isJson(val.assigned_at, "string") ? val.assigned_at : void 0;
    const remindedAt: undefined | string = isJson(val.reminded_at, "string") ? val.reminded_at : void 0;
    const resolutionState: undefined | TaskAssignmentResolutionStateField = val.resolution_state == void 0 ? void 0 : newDeserializeTaskAssignmentResolutionStateField(val.resolution_state);
    const assignedBy: undefined | UserMini = val.assigned_by == void 0 ? void 0 : newDeserializeUserMini(val.assigned_by);
    return { id: id, type: type, item: item, assignedTo: assignedTo, message: message, completedAt: completedAt, assignedAt: assignedAt, remindedAt: remindedAt, resolutionState: resolutionState, assignedBy: assignedBy } satisfies TaskAssignment;
}
export function newSerializeTaskAssignments(val: TaskAssignments): Json {
    return { ["total_count"]: val.totalCount, ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: TaskAssignment): any {
            return newSerializeTaskAssignment(item);
        }) as readonly any[] };
}
export function newDeserializeTaskAssignments(val: any): TaskAssignments {
    const totalCount: undefined | number = isJson(val.total_count, "number") ? val.total_count : void 0;
    const entries: undefined | readonly TaskAssignment[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return newDeserializeTaskAssignment(itm);
    }) as readonly any[] : void 0;
    return { totalCount: totalCount, entries: entries } satisfies TaskAssignments;
}
export function newSerializeTaskTypeField(val: TaskTypeField): Json {
    return val;
}
export function newDeserializeTaskTypeField(val: any): TaskTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"TaskTypeField\"";
    }
    if (val == "task") {
        return "task";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeTaskActionField(val: TaskActionField): Json {
    return val;
}
export function newDeserializeTaskActionField(val: any): TaskActionField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"TaskActionField\"";
    }
    if (val == "review") {
        return "review";
    }
    if (val == "complete") {
        return "complete";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeTaskCompletionRuleField(val: TaskCompletionRuleField): Json {
    return val;
}
export function newDeserializeTaskCompletionRuleField(val: any): TaskCompletionRuleField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"TaskCompletionRuleField\"";
    }
    if (val == "all_assignees") {
        return "all_assignees";
    }
    if (val == "any_assignee") {
        return "any_assignee";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeTask(val: Task): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : newSerializeTaskTypeField(val.type), ["item"]: val.item == void 0 ? void 0 : newSerializeFileMini(val.item), ["due_at"]: val.dueAt, ["action"]: val.action == void 0 ? void 0 : newSerializeTaskActionField(val.action), ["message"]: val.message, ["task_assignment_collection"]: val.taskAssignmentCollection == void 0 ? void 0 : newSerializeTaskAssignments(val.taskAssignmentCollection), ["is_completed"]: val.isCompleted, ["created_by"]: val.createdBy == void 0 ? void 0 : newSerializeUserMini(val.createdBy), ["created_at"]: val.createdAt, ["completion_rule"]: val.completionRule == void 0 ? void 0 : newSerializeTaskCompletionRuleField(val.completionRule) };
}
export function newDeserializeTask(val: any): Task {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | TaskTypeField = val.type == void 0 ? void 0 : newDeserializeTaskTypeField(val.type);
    const item: undefined | FileMini = val.item == void 0 ? void 0 : newDeserializeFileMini(val.item);
    const dueAt: undefined | string = isJson(val.due_at, "string") ? val.due_at : void 0;
    const action: undefined | TaskActionField = val.action == void 0 ? void 0 : newDeserializeTaskActionField(val.action);
    const message: undefined | string = isJson(val.message, "string") ? val.message : void 0;
    const taskAssignmentCollection: undefined | TaskAssignments = val.task_assignment_collection == void 0 ? void 0 : newDeserializeTaskAssignments(val.task_assignment_collection);
    const isCompleted: undefined | boolean = isJson(val.is_completed, "boolean") ? val.is_completed : void 0;
    const createdBy: undefined | UserMini = val.created_by == void 0 ? void 0 : newDeserializeUserMini(val.created_by);
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const completionRule: undefined | TaskCompletionRuleField = val.completion_rule == void 0 ? void 0 : newDeserializeTaskCompletionRuleField(val.completion_rule);
    return { id: id, type: type, item: item, dueAt: dueAt, action: action, message: message, taskAssignmentCollection: taskAssignmentCollection, isCompleted: isCompleted, createdBy: createdBy, createdAt: createdAt, completionRule: completionRule } satisfies Task;
}
export function newSerializeTasks(val: Tasks): Json {
    return { ["total_count"]: val.totalCount, ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: Task): any {
            return newSerializeTask(item);
        }) as readonly any[] };
}
export function newDeserializeTasks(val: any): Tasks {
    const totalCount: undefined | number = isJson(val.total_count, "number") ? val.total_count : void 0;
    const entries: undefined | readonly Task[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return newDeserializeTask(itm);
    }) as readonly any[] : void 0;
    return { totalCount: totalCount, entries: entries } satisfies Tasks;
}
export function newSerializeRetentionPolicyAssignmentTypeField(val: RetentionPolicyAssignmentTypeField): Json {
    return val;
}
export function newDeserializeRetentionPolicyAssignmentTypeField(val: any): RetentionPolicyAssignmentTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"RetentionPolicyAssignmentTypeField\"";
    }
    if (val == "retention_policy_assignment") {
        return "retention_policy_assignment";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeRetentionPolicyAssignmentAssignedToFieldTypeField(val: RetentionPolicyAssignmentAssignedToFieldTypeField): Json {
    return val;
}
export function newDeserializeRetentionPolicyAssignmentAssignedToFieldTypeField(val: any): RetentionPolicyAssignmentAssignedToFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"RetentionPolicyAssignmentAssignedToFieldTypeField\"";
    }
    if (val == "folder") {
        return "folder";
    }
    if (val == "enterprise") {
        return "enterprise";
    }
    if (val == "metadata_template") {
        return "metadata_template";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeRetentionPolicyAssignmentAssignedToField(val: RetentionPolicyAssignmentAssignedToField): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : newSerializeRetentionPolicyAssignmentAssignedToFieldTypeField(val.type) };
}
export function newDeserializeRetentionPolicyAssignmentAssignedToField(val: any): RetentionPolicyAssignmentAssignedToField {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | RetentionPolicyAssignmentAssignedToFieldTypeField = val.type == void 0 ? void 0 : newDeserializeRetentionPolicyAssignmentAssignedToFieldTypeField(val.type);
    return { id: id, type: type } satisfies RetentionPolicyAssignmentAssignedToField;
}
export function newSerializeRetentionPolicyAssignmentFilterFieldsField(val: RetentionPolicyAssignmentFilterFieldsField): Json {
    return { ["field"]: val.field, ["value"]: val.value };
}
export function newDeserializeRetentionPolicyAssignmentFilterFieldsField(val: any): RetentionPolicyAssignmentFilterFieldsField {
    const field: undefined | string = isJson(val.field, "string") ? val.field : void 0;
    const value: undefined | string = isJson(val.value, "string") ? val.value : void 0;
    return { field: field, value: value } satisfies RetentionPolicyAssignmentFilterFieldsField;
}
export function newSerializeRetentionPolicyAssignment(val: RetentionPolicyAssignment): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : newSerializeRetentionPolicyAssignmentTypeField(val.type), ["retention_policy"]: val.retentionPolicy == void 0 ? void 0 : newSerializeRetentionPolicyMini(val.retentionPolicy), ["assigned_to"]: val.assignedTo == void 0 ? void 0 : newSerializeRetentionPolicyAssignmentAssignedToField(val.assignedTo), ["filter_fields"]: val.filterFields == void 0 ? void 0 : val.filterFields.map(function (item: RetentionPolicyAssignmentFilterFieldsField): any {
            return newSerializeRetentionPolicyAssignmentFilterFieldsField(item);
        }) as readonly any[], ["assigned_by"]: val.assignedBy == void 0 ? void 0 : newSerializeUserMini(val.assignedBy), ["assigned_at"]: val.assignedAt, ["start_date_field"]: val.startDateField };
}
export function newDeserializeRetentionPolicyAssignment(val: any): RetentionPolicyAssignment {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | RetentionPolicyAssignmentTypeField = val.type == void 0 ? void 0 : newDeserializeRetentionPolicyAssignmentTypeField(val.type);
    const retentionPolicy: undefined | RetentionPolicyMini = val.retention_policy == void 0 ? void 0 : newDeserializeRetentionPolicyMini(val.retention_policy);
    const assignedTo: undefined | RetentionPolicyAssignmentAssignedToField = val.assigned_to == void 0 ? void 0 : newDeserializeRetentionPolicyAssignmentAssignedToField(val.assigned_to);
    const filterFields: undefined | readonly RetentionPolicyAssignmentFilterFieldsField[] = isJson(val.filter_fields, "array") ? val.filter_fields.map(function (itm: Json): any {
        return newDeserializeRetentionPolicyAssignmentFilterFieldsField(itm);
    }) as readonly any[] : void 0;
    const assignedBy: undefined | UserMini = val.assigned_by == void 0 ? void 0 : newDeserializeUserMini(val.assigned_by);
    const assignedAt: undefined | string = isJson(val.assigned_at, "string") ? val.assigned_at : void 0;
    const startDateField: undefined | string = isJson(val.start_date_field, "string") ? val.start_date_field : void 0;
    return { id: id, type: type, retentionPolicy: retentionPolicy, assignedTo: assignedTo, filterFields: filterFields, assignedBy: assignedBy, assignedAt: assignedAt, startDateField: startDateField } satisfies RetentionPolicyAssignment;
}
export function newSerializeRetentionPolicyPolicyTypeField(val: RetentionPolicyPolicyTypeField): Json {
    return val;
}
export function newDeserializeRetentionPolicyPolicyTypeField(val: any): RetentionPolicyPolicyTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"RetentionPolicyPolicyTypeField\"";
    }
    if (val == "finite") {
        return "finite";
    }
    if (val == "indefinite") {
        return "indefinite";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeRetentionPolicyRetentionTypeField(val: RetentionPolicyRetentionTypeField): Json {
    return val;
}
export function newDeserializeRetentionPolicyRetentionTypeField(val: any): RetentionPolicyRetentionTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"RetentionPolicyRetentionTypeField\"";
    }
    if (val == "modifiable") {
        return "modifiable";
    }
    if (val == "non-modifiable") {
        return "non-modifiable";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeRetentionPolicyStatusField(val: RetentionPolicyStatusField): Json {
    return val;
}
export function newDeserializeRetentionPolicyStatusField(val: any): RetentionPolicyStatusField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"RetentionPolicyStatusField\"";
    }
    if (val == "active") {
        return "active";
    }
    if (val == "retired") {
        return "retired";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeRetentionPolicyAssignmentCountsField(val: RetentionPolicyAssignmentCountsField): Json {
    return { ["enterprise"]: val.enterprise, ["folder"]: val.folder, ["metadata_template"]: val.metadataTemplate };
}
export function newDeserializeRetentionPolicyAssignmentCountsField(val: any): RetentionPolicyAssignmentCountsField {
    const enterprise: undefined | number = isJson(val.enterprise, "number") ? val.enterprise : void 0;
    const folder: undefined | number = isJson(val.folder, "number") ? val.folder : void 0;
    const metadataTemplate: undefined | number = isJson(val.metadata_template, "number") ? val.metadata_template : void 0;
    return { enterprise: enterprise, folder: folder, metadataTemplate: metadataTemplate } satisfies RetentionPolicyAssignmentCountsField;
}
export function newSerializeRetentionPolicy(val: RetentionPolicy): Json {
    const base: any = newSerializeRetentionPolicyMini(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"RetentionPolicy\"";
    }
    return { ...base, ...{ ["description"]: val.description, ["policy_type"]: val.policyType == void 0 ? void 0 : newSerializeRetentionPolicyPolicyTypeField(val.policyType), ["retention_type"]: val.retentionType == void 0 ? void 0 : newSerializeRetentionPolicyRetentionTypeField(val.retentionType), ["status"]: val.status == void 0 ? void 0 : newSerializeRetentionPolicyStatusField(val.status), ["created_by"]: val.createdBy == void 0 ? void 0 : newSerializeUserMini(val.createdBy), ["created_at"]: val.createdAt, ["modified_at"]: val.modifiedAt, ["can_owner_extend_retention"]: val.canOwnerExtendRetention, ["are_owners_notified"]: val.areOwnersNotified, ["custom_notification_recipients"]: val.customNotificationRecipients == void 0 ? void 0 : val.customNotificationRecipients.map(function (item: UserMini): any {
                return newSerializeUserMini(item);
            }) as readonly any[], ["assignment_counts"]: val.assignmentCounts == void 0 ? void 0 : newSerializeRetentionPolicyAssignmentCountsField(val.assignmentCounts) } };
}
export function newDeserializeRetentionPolicy(val: any): RetentionPolicy {
    const description: undefined | string = isJson(val.description, "string") ? val.description : void 0;
    const policyType: undefined | RetentionPolicyPolicyTypeField = val.policy_type == void 0 ? void 0 : newDeserializeRetentionPolicyPolicyTypeField(val.policy_type);
    const retentionType: undefined | RetentionPolicyRetentionTypeField = val.retention_type == void 0 ? void 0 : newDeserializeRetentionPolicyRetentionTypeField(val.retention_type);
    const status: undefined | RetentionPolicyStatusField = val.status == void 0 ? void 0 : newDeserializeRetentionPolicyStatusField(val.status);
    const createdBy: undefined | UserMini = val.created_by == void 0 ? void 0 : newDeserializeUserMini(val.created_by);
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const modifiedAt: undefined | string = isJson(val.modified_at, "string") ? val.modified_at : void 0;
    const canOwnerExtendRetention: undefined | boolean = isJson(val.can_owner_extend_retention, "boolean") ? val.can_owner_extend_retention : void 0;
    const areOwnersNotified: undefined | boolean = isJson(val.are_owners_notified, "boolean") ? val.are_owners_notified : void 0;
    const customNotificationRecipients: undefined | readonly UserMini[] = isJson(val.custom_notification_recipients, "array") ? val.custom_notification_recipients.map(function (itm: Json): any {
        return newDeserializeUserMini(itm);
    }) as readonly any[] : void 0;
    const assignmentCounts: undefined | RetentionPolicyAssignmentCountsField = val.assignment_counts == void 0 ? void 0 : newDeserializeRetentionPolicyAssignmentCountsField(val.assignment_counts);
    const policyName: undefined | string = isJson(val.policy_name, "string") ? val.policy_name : void 0;
    const retentionLength: undefined | string = isJson(val.retention_length, "string") ? val.retention_length : void 0;
    const dispositionAction: undefined | RetentionPolicyMiniDispositionActionField = val.disposition_action == void 0 ? void 0 : newDeserializeRetentionPolicyMiniDispositionActionField(val.disposition_action);
    const id: string = val.id;
    const type: RetentionPolicyBaseTypeField = newDeserializeRetentionPolicyBaseTypeField(val.type);
    return { description: description, policyType: policyType, retentionType: retentionType, status: status, createdBy: createdBy, createdAt: createdAt, modifiedAt: modifiedAt, canOwnerExtendRetention: canOwnerExtendRetention, areOwnersNotified: areOwnersNotified, customNotificationRecipients: customNotificationRecipients, assignmentCounts: assignmentCounts, policyName: policyName, retentionLength: retentionLength, dispositionAction: dispositionAction, id: id, type: type } satisfies RetentionPolicy;
}
export function newSerializeLegalHoldPolicyStatusField(val: LegalHoldPolicyStatusField): Json {
    return val;
}
export function newDeserializeLegalHoldPolicyStatusField(val: any): LegalHoldPolicyStatusField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"LegalHoldPolicyStatusField\"";
    }
    if (val == "active") {
        return "active";
    }
    if (val == "applying") {
        return "applying";
    }
    if (val == "releasing") {
        return "releasing";
    }
    if (val == "released") {
        return "released";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeLegalHoldPolicyAssignmentCountsField(val: LegalHoldPolicyAssignmentCountsField): Json {
    return { ["user"]: val.user, ["folder"]: val.folder, ["file"]: val.file, ["file_version"]: val.fileVersion };
}
export function newDeserializeLegalHoldPolicyAssignmentCountsField(val: any): LegalHoldPolicyAssignmentCountsField {
    const user: undefined | number = isJson(val.user, "number") ? val.user : void 0;
    const folder: undefined | number = isJson(val.folder, "number") ? val.folder : void 0;
    const file: undefined | number = isJson(val.file, "number") ? val.file : void 0;
    const fileVersion: undefined | number = isJson(val.file_version, "number") ? val.file_version : void 0;
    return { user: user, folder: folder, file: file, fileVersion: fileVersion } satisfies LegalHoldPolicyAssignmentCountsField;
}
export function newSerializeLegalHoldPolicy(val: LegalHoldPolicy): Json {
    const base: any = newSerializeLegalHoldPolicyMini(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"LegalHoldPolicy\"";
    }
    return { ...base, ...{ ["policy_name"]: val.policyName, ["description"]: val.description, ["status"]: val.status == void 0 ? void 0 : newSerializeLegalHoldPolicyStatusField(val.status), ["assignment_counts"]: val.assignmentCounts == void 0 ? void 0 : newSerializeLegalHoldPolicyAssignmentCountsField(val.assignmentCounts), ["created_by"]: val.createdBy == void 0 ? void 0 : newSerializeUserMini(val.createdBy), ["created_at"]: val.createdAt, ["modified_at"]: val.modifiedAt, ["deleted_at"]: val.deletedAt, ["filter_started_at"]: val.filterStartedAt, ["filter_ended_at"]: val.filterEndedAt, ["release_notes"]: val.releaseNotes } };
}
export function newDeserializeLegalHoldPolicy(val: any): LegalHoldPolicy {
    const policyName: undefined | string = isJson(val.policy_name, "string") ? val.policy_name : void 0;
    const description: undefined | string = isJson(val.description, "string") ? val.description : void 0;
    const status: undefined | LegalHoldPolicyStatusField = val.status == void 0 ? void 0 : newDeserializeLegalHoldPolicyStatusField(val.status);
    const assignmentCounts: undefined | LegalHoldPolicyAssignmentCountsField = val.assignment_counts == void 0 ? void 0 : newDeserializeLegalHoldPolicyAssignmentCountsField(val.assignment_counts);
    const createdBy: undefined | UserMini = val.created_by == void 0 ? void 0 : newDeserializeUserMini(val.created_by);
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const modifiedAt: undefined | string = isJson(val.modified_at, "string") ? val.modified_at : void 0;
    const deletedAt: undefined | string = isJson(val.deleted_at, "string") ? val.deleted_at : void 0;
    const filterStartedAt: undefined | string = isJson(val.filter_started_at, "string") ? val.filter_started_at : void 0;
    const filterEndedAt: undefined | string = isJson(val.filter_ended_at, "string") ? val.filter_ended_at : void 0;
    const releaseNotes: undefined | string = isJson(val.release_notes, "string") ? val.release_notes : void 0;
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | LegalHoldPolicyMiniTypeField = val.type == void 0 ? void 0 : newDeserializeLegalHoldPolicyMiniTypeField(val.type);
    return { policyName: policyName, description: description, status: status, assignmentCounts: assignmentCounts, createdBy: createdBy, createdAt: createdAt, modifiedAt: modifiedAt, deletedAt: deletedAt, filterStartedAt: filterStartedAt, filterEndedAt: filterEndedAt, releaseNotes: releaseNotes, id: id, type: type } satisfies LegalHoldPolicy;
}
export function newSerializeLegalHoldPolicies(val: LegalHoldPolicies): Json {
    return { ["limit"]: val.limit, ["next_marker"]: val.nextMarker, ["prev_marker"]: val.prevMarker, ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: LegalHoldPolicy): any {
            return newSerializeLegalHoldPolicy(item);
        }) as readonly any[] };
}
export function newDeserializeLegalHoldPolicies(val: any): LegalHoldPolicies {
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const nextMarker: undefined | number = isJson(val.next_marker, "number") ? val.next_marker : void 0;
    const prevMarker: undefined | number = isJson(val.prev_marker, "number") ? val.prev_marker : void 0;
    const entries: undefined | readonly LegalHoldPolicy[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return newDeserializeLegalHoldPolicy(itm);
    }) as readonly any[] : void 0;
    return { limit: limit, nextMarker: nextMarker, prevMarker: prevMarker, entries: entries } satisfies LegalHoldPolicies;
}
export function newSerializeInviteTypeField(val: InviteTypeField): Json {
    return val;
}
export function newDeserializeInviteTypeField(val: any): InviteTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"InviteTypeField\"";
    }
    if (val == "invite") {
        return "invite";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeInviteInvitedToFieldTypeField(val: InviteInvitedToFieldTypeField): Json {
    return val;
}
export function newDeserializeInviteInvitedToFieldTypeField(val: any): InviteInvitedToFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"InviteInvitedToFieldTypeField\"";
    }
    if (val == "enterprise") {
        return "enterprise";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeInviteInvitedToField(val: InviteInvitedToField): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : newSerializeInviteInvitedToFieldTypeField(val.type), ["name"]: val.name };
}
export function newDeserializeInviteInvitedToField(val: any): InviteInvitedToField {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | InviteInvitedToFieldTypeField = val.type == void 0 ? void 0 : newDeserializeInviteInvitedToFieldTypeField(val.type);
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    return { id: id, type: type, name: name } satisfies InviteInvitedToField;
}
export function newSerializeInvite(val: Invite): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : newSerializeInviteTypeField(val.type), ["invited_to"]: val.invitedTo == void 0 ? void 0 : newSerializeInviteInvitedToField(val.invitedTo), ["actionable_by"]: val.actionableBy == void 0 ? void 0 : newSerializeUserMini(val.actionableBy), ["invited_by"]: val.invitedBy == void 0 ? void 0 : newSerializeUserMini(val.invitedBy), ["status"]: val.status, ["created_at"]: val.createdAt, ["modified_at"]: val.modifiedAt };
}
export function newDeserializeInvite(val: any): Invite {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | InviteTypeField = val.type == void 0 ? void 0 : newDeserializeInviteTypeField(val.type);
    const invitedTo: undefined | InviteInvitedToField = val.invited_to == void 0 ? void 0 : newDeserializeInviteInvitedToField(val.invited_to);
    const actionableBy: undefined | UserMini = val.actionable_by == void 0 ? void 0 : newDeserializeUserMini(val.actionable_by);
    const invitedBy: undefined | UserMini = val.invited_by == void 0 ? void 0 : newDeserializeUserMini(val.invited_by);
    const status: undefined | string = isJson(val.status, "string") ? val.status : void 0;
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const modifiedAt: undefined | string = isJson(val.modified_at, "string") ? val.modified_at : void 0;
    return { id: id, type: type, invitedTo: invitedTo, actionableBy: actionableBy, invitedBy: invitedBy, status: status, createdAt: createdAt, modifiedAt: modifiedAt } satisfies Invite;
}
export function newSerializeGroupMembershipTypeField(val: GroupMembershipTypeField): Json {
    return val;
}
export function newDeserializeGroupMembershipTypeField(val: any): GroupMembershipTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"GroupMembershipTypeField\"";
    }
    if (val == "group_membership") {
        return "group_membership";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeGroupMembershipRoleField(val: GroupMembershipRoleField): Json {
    return val;
}
export function newDeserializeGroupMembershipRoleField(val: any): GroupMembershipRoleField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"GroupMembershipRoleField\"";
    }
    if (val == "member") {
        return "member";
    }
    if (val == "admin") {
        return "admin";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeGroupMembership(val: GroupMembership): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : newSerializeGroupMembershipTypeField(val.type), ["user"]: val.user == void 0 ? void 0 : newSerializeUserMini(val.user), ["group"]: val.group == void 0 ? void 0 : newSerializeGroupMini(val.group), ["role"]: val.role == void 0 ? void 0 : newSerializeGroupMembershipRoleField(val.role), ["created_at"]: val.createdAt, ["modified_at"]: val.modifiedAt };
}
export function newDeserializeGroupMembership(val: any): GroupMembership {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | GroupMembershipTypeField = val.type == void 0 ? void 0 : newDeserializeGroupMembershipTypeField(val.type);
    const user: undefined | UserMini = val.user == void 0 ? void 0 : newDeserializeUserMini(val.user);
    const group: undefined | GroupMini = val.group == void 0 ? void 0 : newDeserializeGroupMini(val.group);
    const role: undefined | GroupMembershipRoleField = val.role == void 0 ? void 0 : newDeserializeGroupMembershipRoleField(val.role);
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const modifiedAt: undefined | string = isJson(val.modified_at, "string") ? val.modified_at : void 0;
    return { id: id, type: type, user: user, group: group, role: role, createdAt: createdAt, modifiedAt: modifiedAt } satisfies GroupMembership;
}
export function newSerializeGroupMembershipsOrderFieldDirectionField(val: GroupMembershipsOrderFieldDirectionField): Json {
    return val;
}
export function newDeserializeGroupMembershipsOrderFieldDirectionField(val: any): GroupMembershipsOrderFieldDirectionField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"GroupMembershipsOrderFieldDirectionField\"";
    }
    if (val == "ASC") {
        return "ASC";
    }
    if (val == "DESC") {
        return "DESC";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeGroupMembershipsOrderField(val: GroupMembershipsOrderField): Json {
    return { ["by"]: val.by, ["direction"]: val.direction == void 0 ? void 0 : newSerializeGroupMembershipsOrderFieldDirectionField(val.direction) };
}
export function newDeserializeGroupMembershipsOrderField(val: any): GroupMembershipsOrderField {
    const by: undefined | string = isJson(val.by, "string") ? val.by : void 0;
    const direction: undefined | GroupMembershipsOrderFieldDirectionField = val.direction == void 0 ? void 0 : newDeserializeGroupMembershipsOrderFieldDirectionField(val.direction);
    return { by: by, direction: direction } satisfies GroupMembershipsOrderField;
}
export function newSerializeGroupMemberships(val: GroupMemberships): Json {
    return { ["total_count"]: val.totalCount, ["limit"]: val.limit, ["offset"]: val.offset, ["order"]: val.order == void 0 ? void 0 : val.order.map(function (item: GroupMembershipsOrderField): any {
            return newSerializeGroupMembershipsOrderField(item);
        }) as readonly any[], ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: GroupMembership): any {
            return newSerializeGroupMembership(item);
        }) as readonly any[] };
}
export function newDeserializeGroupMemberships(val: any): GroupMemberships {
    const totalCount: undefined | number = isJson(val.total_count, "number") ? val.total_count : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const offset: undefined | number = isJson(val.offset, "number") ? val.offset : void 0;
    const order: undefined | readonly GroupMembershipsOrderField[] = isJson(val.order, "array") ? val.order.map(function (itm: Json): any {
        return newDeserializeGroupMembershipsOrderField(itm);
    }) as readonly any[] : void 0;
    const entries: undefined | readonly GroupMembership[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return newDeserializeGroupMembership(itm);
    }) as readonly any[] : void 0;
    return { totalCount: totalCount, limit: limit, offset: offset, order: order, entries: entries } satisfies GroupMemberships;
}
export function newSerializeFileVersion(val: FileVersion): Json {
    const base: any = newSerializeFileVersionMini(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"FileVersion\"";
    }
    return { ...base, ...{ ["name"]: val.name, ["size"]: val.size, ["created_at"]: val.createdAt, ["modified_at"]: val.modifiedAt, ["modified_by"]: val.modifiedBy == void 0 ? void 0 : newSerializeUserMini(val.modifiedBy), ["trashed_at"]: val.trashedAt, ["trashed_by"]: val.trashedBy == void 0 ? void 0 : newSerializeUserMini(val.trashedBy), ["restored_at"]: val.restoredAt, ["restored_by"]: val.restoredBy == void 0 ? void 0 : newSerializeUserMini(val.restoredBy), ["purged_at"]: val.purgedAt, ["uploader_display_name"]: val.uploaderDisplayName } };
}
export function newDeserializeFileVersion(val: any): FileVersion {
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const size: undefined | number = isJson(val.size, "number") ? val.size : void 0;
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const modifiedAt: undefined | string = isJson(val.modified_at, "string") ? val.modified_at : void 0;
    const modifiedBy: undefined | UserMini = val.modified_by == void 0 ? void 0 : newDeserializeUserMini(val.modified_by);
    const trashedAt: undefined | string = isJson(val.trashed_at, "string") ? val.trashed_at : void 0;
    const trashedBy: undefined | UserMini = val.trashed_by == void 0 ? void 0 : newDeserializeUserMini(val.trashed_by);
    const restoredAt: undefined | string = isJson(val.restored_at, "string") ? val.restored_at : void 0;
    const restoredBy: undefined | UserMini = val.restored_by == void 0 ? void 0 : newDeserializeUserMini(val.restored_by);
    const purgedAt: undefined | string = isJson(val.purged_at, "string") ? val.purged_at : void 0;
    const uploaderDisplayName: undefined | string = isJson(val.uploader_display_name, "string") ? val.uploader_display_name : void 0;
    const sha1: undefined | string = isJson(val.sha1, "string") ? val.sha1 : void 0;
    const id: string = val.id;
    const type: FileVersionBaseTypeField = newDeserializeFileVersionBaseTypeField(val.type);
    return { name: name, size: size, createdAt: createdAt, modifiedAt: modifiedAt, modifiedBy: modifiedBy, trashedAt: trashedAt, trashedBy: trashedBy, restoredAt: restoredAt, restoredBy: restoredBy, purgedAt: purgedAt, uploaderDisplayName: uploaderDisplayName, sha1: sha1, id: id, type: type } satisfies FileVersion;
}
export function newSerializeFileVersionsOrderFieldDirectionField(val: FileVersionsOrderFieldDirectionField): Json {
    return val;
}
export function newDeserializeFileVersionsOrderFieldDirectionField(val: any): FileVersionsOrderFieldDirectionField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"FileVersionsOrderFieldDirectionField\"";
    }
    if (val == "ASC") {
        return "ASC";
    }
    if (val == "DESC") {
        return "DESC";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeFileVersionsOrderField(val: FileVersionsOrderField): Json {
    return { ["by"]: val.by, ["direction"]: val.direction == void 0 ? void 0 : newSerializeFileVersionsOrderFieldDirectionField(val.direction) };
}
export function newDeserializeFileVersionsOrderField(val: any): FileVersionsOrderField {
    const by: undefined | string = isJson(val.by, "string") ? val.by : void 0;
    const direction: undefined | FileVersionsOrderFieldDirectionField = val.direction == void 0 ? void 0 : newDeserializeFileVersionsOrderFieldDirectionField(val.direction);
    return { by: by, direction: direction } satisfies FileVersionsOrderField;
}
export function newSerializeFileVersions(val: FileVersions): Json {
    return { ["total_count"]: val.totalCount, ["limit"]: val.limit, ["offset"]: val.offset, ["order"]: val.order == void 0 ? void 0 : val.order.map(function (item: FileVersionsOrderField): any {
            return newSerializeFileVersionsOrderField(item);
        }) as readonly any[], ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: FileVersion): any {
            return newSerializeFileVersion(item);
        }) as readonly any[] };
}
export function newDeserializeFileVersions(val: any): FileVersions {
    const totalCount: undefined | number = isJson(val.total_count, "number") ? val.total_count : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const offset: undefined | number = isJson(val.offset, "number") ? val.offset : void 0;
    const order: undefined | readonly FileVersionsOrderField[] = isJson(val.order, "array") ? val.order.map(function (itm: Json): any {
        return newDeserializeFileVersionsOrderField(itm);
    }) as readonly any[] : void 0;
    const entries: undefined | readonly FileVersion[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return newDeserializeFileVersion(itm);
    }) as readonly any[] : void 0;
    return { totalCount: totalCount, limit: limit, offset: offset, order: order, entries: entries } satisfies FileVersions;
}
export function newSerializeFileVersionFull(val: FileVersionFull): Json {
    const base: any = newSerializeFileVersion(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"FileVersionFull\"";
    }
    return { ...base, ...{ ["version_number"]: val.versionNumber } };
}
export function newDeserializeFileVersionFull(val: any): FileVersionFull {
    const versionNumber: undefined | string = isJson(val.version_number, "string") ? val.version_number : void 0;
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const size: undefined | number = isJson(val.size, "number") ? val.size : void 0;
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const modifiedAt: undefined | string = isJson(val.modified_at, "string") ? val.modified_at : void 0;
    const modifiedBy: undefined | UserMini = val.modified_by == void 0 ? void 0 : newDeserializeUserMini(val.modified_by);
    const trashedAt: undefined | string = isJson(val.trashed_at, "string") ? val.trashed_at : void 0;
    const trashedBy: undefined | UserMini = val.trashed_by == void 0 ? void 0 : newDeserializeUserMini(val.trashed_by);
    const restoredAt: undefined | string = isJson(val.restored_at, "string") ? val.restored_at : void 0;
    const restoredBy: undefined | UserMini = val.restored_by == void 0 ? void 0 : newDeserializeUserMini(val.restored_by);
    const purgedAt: undefined | string = isJson(val.purged_at, "string") ? val.purged_at : void 0;
    const uploaderDisplayName: undefined | string = isJson(val.uploader_display_name, "string") ? val.uploader_display_name : void 0;
    const sha1: undefined | string = isJson(val.sha1, "string") ? val.sha1 : void 0;
    const id: string = val.id;
    const type: FileVersionBaseTypeField = newDeserializeFileVersionBaseTypeField(val.type);
    return { versionNumber: versionNumber, name: name, size: size, createdAt: createdAt, modifiedAt: modifiedAt, modifiedBy: modifiedBy, trashedAt: trashedAt, trashedBy: trashedBy, restoredAt: restoredAt, restoredBy: restoredBy, purgedAt: purgedAt, uploaderDisplayName: uploaderDisplayName, sha1: sha1, id: id, type: type } satisfies FileVersionFull;
}
export function newSerializeFileRequestTypeField(val: FileRequestTypeField): Json {
    return val;
}
export function newDeserializeFileRequestTypeField(val: any): FileRequestTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"FileRequestTypeField\"";
    }
    if (val == "file_request") {
        return "file_request";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeFileRequestStatusField(val: FileRequestStatusField): Json {
    return val;
}
export function newDeserializeFileRequestStatusField(val: any): FileRequestStatusField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"FileRequestStatusField\"";
    }
    if (val == "active") {
        return "active";
    }
    if (val == "inactive") {
        return "inactive";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeFileRequest(val: FileRequest): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : newSerializeFileRequestTypeField(val.type), ["title"]: val.title, ["description"]: val.description, ["status"]: val.status == void 0 ? void 0 : newSerializeFileRequestStatusField(val.status), ["is_email_required"]: val.isEmailRequired, ["is_description_required"]: val.isDescriptionRequired, ["expires_at"]: val.expiresAt, ["folder"]: newSerializeFolderMini(val.folder), ["url"]: val.url, ["etag"]: val.etag, ["created_by"]: val.createdBy == void 0 ? void 0 : newSerializeUserMini(val.createdBy), ["created_at"]: val.createdAt, ["updated_by"]: val.updatedBy == void 0 ? void 0 : newSerializeUserMini(val.updatedBy), ["updated_at"]: val.updatedAt };
}
export function newDeserializeFileRequest(val: any): FileRequest {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | FileRequestTypeField = val.type == void 0 ? void 0 : newDeserializeFileRequestTypeField(val.type);
    const title: undefined | string = isJson(val.title, "string") ? val.title : void 0;
    const description: undefined | string = isJson(val.description, "string") ? val.description : void 0;
    const status: undefined | FileRequestStatusField = val.status == void 0 ? void 0 : newDeserializeFileRequestStatusField(val.status);
    const isEmailRequired: undefined | boolean = isJson(val.is_email_required, "boolean") ? val.is_email_required : void 0;
    const isDescriptionRequired: undefined | boolean = isJson(val.is_description_required, "boolean") ? val.is_description_required : void 0;
    const expiresAt: undefined | string = isJson(val.expires_at, "string") ? val.expires_at : void 0;
    const folder: FolderMini = newDeserializeFolderMini(val.folder);
    const url: undefined | string = isJson(val.url, "string") ? val.url : void 0;
    const etag: undefined | string = isJson(val.etag, "string") ? val.etag : void 0;
    const createdBy: undefined | UserMini = val.created_by == void 0 ? void 0 : newDeserializeUserMini(val.created_by);
    const createdAt: string = val.created_at;
    const updatedBy: undefined | UserMini = val.updated_by == void 0 ? void 0 : newDeserializeUserMini(val.updated_by);
    const updatedAt: string = val.updated_at;
    return { id: id, type: type, title: title, description: description, status: status, isEmailRequired: isEmailRequired, isDescriptionRequired: isDescriptionRequired, expiresAt: expiresAt, folder: folder, url: url, etag: etag, createdBy: createdBy, createdAt: createdAt, updatedBy: updatedBy, updatedAt: updatedAt } satisfies FileRequest;
}
export function newSerializeFilePathCollectionField(val: FilePathCollectionField): Json {
    return { ["total_count"]: val.totalCount, ["entries"]: val.entries.map(function (item: FolderMini): any {
            return newSerializeFolderMini(item);
        }) as readonly any[] };
}
export function newDeserializeFilePathCollectionField(val: any): FilePathCollectionField {
    const totalCount: number = val.total_count;
    const entries: readonly FolderMini[] = val.entries.map(function (itm: Json): any {
        return newDeserializeFolderMini(itm);
    }) as readonly any[];
    return { totalCount: totalCount, entries: entries } satisfies FilePathCollectionField;
}
export function newSerializeFileSharedLinkFieldAccessField(val: FileSharedLinkFieldAccessField): Json {
    return val;
}
export function newDeserializeFileSharedLinkFieldAccessField(val: any): FileSharedLinkFieldAccessField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"FileSharedLinkFieldAccessField\"";
    }
    if (val == "open") {
        return "open";
    }
    if (val == "company") {
        return "company";
    }
    if (val == "collaborators") {
        return "collaborators";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeFileSharedLinkFieldEffectiveAccessField(val: FileSharedLinkFieldEffectiveAccessField): Json {
    return val;
}
export function newDeserializeFileSharedLinkFieldEffectiveAccessField(val: any): FileSharedLinkFieldEffectiveAccessField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"FileSharedLinkFieldEffectiveAccessField\"";
    }
    if (val == "open") {
        return "open";
    }
    if (val == "company") {
        return "company";
    }
    if (val == "collaborators") {
        return "collaborators";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeFileSharedLinkFieldEffectivePermissionField(val: FileSharedLinkFieldEffectivePermissionField): Json {
    return val;
}
export function newDeserializeFileSharedLinkFieldEffectivePermissionField(val: any): FileSharedLinkFieldEffectivePermissionField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"FileSharedLinkFieldEffectivePermissionField\"";
    }
    if (val == "can_edit") {
        return "can_edit";
    }
    if (val == "can_download") {
        return "can_download";
    }
    if (val == "can_preview") {
        return "can_preview";
    }
    if (val == "no_access") {
        return "no_access";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeFileSharedLinkFieldPermissionsField(val: FileSharedLinkFieldPermissionsField): Json {
    return { ["can_download"]: val.canDownload, ["can_preview"]: val.canPreview, ["can_edit"]: val.canEdit };
}
export function newDeserializeFileSharedLinkFieldPermissionsField(val: any): FileSharedLinkFieldPermissionsField {
    const canDownload: boolean = val.can_download;
    const canPreview: boolean = val.can_preview;
    const canEdit: boolean = val.can_edit;
    return { canDownload: canDownload, canPreview: canPreview, canEdit: canEdit } satisfies FileSharedLinkFieldPermissionsField;
}
export function newSerializeFileSharedLinkField(val: FileSharedLinkField): Json {
    return { ["url"]: val.url, ["download_url"]: val.downloadUrl, ["vanity_url"]: val.vanityUrl, ["vanity_name"]: val.vanityName, ["access"]: val.access == void 0 ? void 0 : newSerializeFileSharedLinkFieldAccessField(val.access), ["effective_access"]: newSerializeFileSharedLinkFieldEffectiveAccessField(val.effectiveAccess), ["effective_permission"]: newSerializeFileSharedLinkFieldEffectivePermissionField(val.effectivePermission), ["unshared_at"]: val.unsharedAt, ["is_password_enabled"]: val.isPasswordEnabled, ["permissions"]: val.permissions == void 0 ? void 0 : newSerializeFileSharedLinkFieldPermissionsField(val.permissions), ["download_count"]: val.downloadCount, ["preview_count"]: val.previewCount };
}
export function newDeserializeFileSharedLinkField(val: any): FileSharedLinkField {
    const url: string = val.url;
    const downloadUrl: undefined | string = isJson(val.download_url, "string") ? val.download_url : void 0;
    const vanityUrl: undefined | string = isJson(val.vanity_url, "string") ? val.vanity_url : void 0;
    const vanityName: undefined | string = isJson(val.vanity_name, "string") ? val.vanity_name : void 0;
    const access: undefined | FileSharedLinkFieldAccessField = val.access == void 0 ? void 0 : newDeserializeFileSharedLinkFieldAccessField(val.access);
    const effectiveAccess: FileSharedLinkFieldEffectiveAccessField = newDeserializeFileSharedLinkFieldEffectiveAccessField(val.effective_access);
    const effectivePermission: FileSharedLinkFieldEffectivePermissionField = newDeserializeFileSharedLinkFieldEffectivePermissionField(val.effective_permission);
    const unsharedAt: undefined | string = isJson(val.unshared_at, "string") ? val.unshared_at : void 0;
    const isPasswordEnabled: boolean = val.is_password_enabled;
    const permissions: undefined | FileSharedLinkFieldPermissionsField = val.permissions == void 0 ? void 0 : newDeserializeFileSharedLinkFieldPermissionsField(val.permissions);
    const downloadCount: number = val.download_count;
    const previewCount: number = val.preview_count;
    return { url: url, downloadUrl: downloadUrl, vanityUrl: vanityUrl, vanityName: vanityName, access: access, effectiveAccess: effectiveAccess, effectivePermission: effectivePermission, unsharedAt: unsharedAt, isPasswordEnabled: isPasswordEnabled, permissions: permissions, downloadCount: downloadCount, previewCount: previewCount } satisfies FileSharedLinkField;
}
export function newSerializeFileItemStatusField(val: FileItemStatusField): Json {
    return val;
}
export function newDeserializeFileItemStatusField(val: any): FileItemStatusField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"FileItemStatusField\"";
    }
    if (val == "active") {
        return "active";
    }
    if (val == "trashed") {
        return "trashed";
    }
    if (val == "deleted") {
        return "deleted";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeFile(val: File): Json {
    const base: any = newSerializeFileMini(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"File\"";
    }
    return { ...base, ...{ ["description"]: val.description, ["size"]: val.size, ["path_collection"]: val.pathCollection == void 0 ? void 0 : newSerializeFilePathCollectionField(val.pathCollection), ["created_at"]: val.createdAt, ["modified_at"]: val.modifiedAt, ["trashed_at"]: val.trashedAt, ["purged_at"]: val.purgedAt, ["content_created_at"]: val.contentCreatedAt, ["content_modified_at"]: val.contentModifiedAt, ["created_by"]: val.createdBy == void 0 ? void 0 : newSerializeUserMini(val.createdBy), ["modified_by"]: val.modifiedBy == void 0 ? void 0 : newSerializeUserMini(val.modifiedBy), ["owned_by"]: val.ownedBy == void 0 ? void 0 : newSerializeUserMini(val.ownedBy), ["shared_link"]: val.sharedLink == void 0 ? void 0 : newSerializeFileSharedLinkField(val.sharedLink), ["parent"]: val.parent == void 0 ? void 0 : newSerializeFolderMini(val.parent), ["item_status"]: val.itemStatus == void 0 ? void 0 : newSerializeFileItemStatusField(val.itemStatus) } };
}
export function newDeserializeFile(val: any): File {
    const description: undefined | string = isJson(val.description, "string") ? val.description : void 0;
    const size: undefined | number = isJson(val.size, "number") ? val.size : void 0;
    const pathCollection: undefined | FilePathCollectionField = val.path_collection == void 0 ? void 0 : newDeserializeFilePathCollectionField(val.path_collection);
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const modifiedAt: undefined | string = isJson(val.modified_at, "string") ? val.modified_at : void 0;
    const trashedAt: undefined | string = isJson(val.trashed_at, "string") ? val.trashed_at : void 0;
    const purgedAt: undefined | string = isJson(val.purged_at, "string") ? val.purged_at : void 0;
    const contentCreatedAt: undefined | string = isJson(val.content_created_at, "string") ? val.content_created_at : void 0;
    const contentModifiedAt: undefined | string = isJson(val.content_modified_at, "string") ? val.content_modified_at : void 0;
    const createdBy: undefined | UserMini = val.created_by == void 0 ? void 0 : newDeserializeUserMini(val.created_by);
    const modifiedBy: undefined | UserMini = val.modified_by == void 0 ? void 0 : newDeserializeUserMini(val.modified_by);
    const ownedBy: undefined | UserMini = val.owned_by == void 0 ? void 0 : newDeserializeUserMini(val.owned_by);
    const sharedLink: undefined | FileSharedLinkField = val.shared_link == void 0 ? void 0 : newDeserializeFileSharedLinkField(val.shared_link);
    const parent: undefined | FolderMini = val.parent == void 0 ? void 0 : newDeserializeFolderMini(val.parent);
    const itemStatus: undefined | FileItemStatusField = val.item_status == void 0 ? void 0 : newDeserializeFileItemStatusField(val.item_status);
    const sequenceId: undefined | string = isJson(val.sequence_id, "string") ? val.sequence_id : void 0;
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const sha1: undefined | string = isJson(val.sha1, "string") ? val.sha1 : void 0;
    const fileVersion: undefined | FileVersionMini = val.file_version == void 0 ? void 0 : newDeserializeFileVersionMini(val.file_version);
    const id: string = val.id;
    const etag: undefined | string = isJson(val.etag, "string") ? val.etag : void 0;
    const type: FileBaseTypeField = newDeserializeFileBaseTypeField(val.type);
    return { description: description, size: size, pathCollection: pathCollection, createdAt: createdAt, modifiedAt: modifiedAt, trashedAt: trashedAt, purgedAt: purgedAt, contentCreatedAt: contentCreatedAt, contentModifiedAt: contentModifiedAt, createdBy: createdBy, modifiedBy: modifiedBy, ownedBy: ownedBy, sharedLink: sharedLink, parent: parent, itemStatus: itemStatus, sequenceId: sequenceId, name: name, sha1: sha1, fileVersion: fileVersion, id: id, etag: etag, type: type } satisfies File;
}
export function newSerializeFileFullPermissionsField(val: FileFullPermissionsField): Json {
    return { ["can_delete"]: val.canDelete, ["can_download"]: val.canDownload, ["can_invite_collaborator"]: val.canInviteCollaborator, ["can_rename"]: val.canRename, ["can_set_share_access"]: val.canSetShareAccess, ["can_share"]: val.canShare, ["can_annotate"]: val.canAnnotate, ["can_comment"]: val.canComment, ["can_preview"]: val.canPreview, ["can_upload"]: val.canUpload, ["can_view_annotations_all"]: val.canViewAnnotationsAll, ["can_view_annotations_self"]: val.canViewAnnotationsSelf };
}
export function newDeserializeFileFullPermissionsField(val: any): FileFullPermissionsField {
    const canDelete: boolean = val.can_delete;
    const canDownload: boolean = val.can_download;
    const canInviteCollaborator: boolean = val.can_invite_collaborator;
    const canRename: boolean = val.can_rename;
    const canSetShareAccess: boolean = val.can_set_share_access;
    const canShare: boolean = val.can_share;
    const canAnnotate: undefined | boolean = isJson(val.can_annotate, "boolean") ? val.can_annotate : void 0;
    const canComment: undefined | boolean = isJson(val.can_comment, "boolean") ? val.can_comment : void 0;
    const canPreview: undefined | boolean = isJson(val.can_preview, "boolean") ? val.can_preview : void 0;
    const canUpload: undefined | boolean = isJson(val.can_upload, "boolean") ? val.can_upload : void 0;
    const canViewAnnotationsAll: undefined | boolean = isJson(val.can_view_annotations_all, "boolean") ? val.can_view_annotations_all : void 0;
    const canViewAnnotationsSelf: undefined | boolean = isJson(val.can_view_annotations_self, "boolean") ? val.can_view_annotations_self : void 0;
    return { canDelete: canDelete, canDownload: canDownload, canInviteCollaborator: canInviteCollaborator, canRename: canRename, canSetShareAccess: canSetShareAccess, canShare: canShare, canAnnotate: canAnnotate, canComment: canComment, canPreview: canPreview, canUpload: canUpload, canViewAnnotationsAll: canViewAnnotationsAll, canViewAnnotationsSelf: canViewAnnotationsSelf } satisfies FileFullPermissionsField;
}
export function newSerializeFileFullLockFieldTypeField(val: FileFullLockFieldTypeField): Json {
    return val;
}
export function newDeserializeFileFullLockFieldTypeField(val: any): FileFullLockFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"FileFullLockFieldTypeField\"";
    }
    if (val == "lock") {
        return "lock";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeFileFullLockFieldAppTypeField(val: FileFullLockFieldAppTypeField): Json {
    return val;
}
export function newDeserializeFileFullLockFieldAppTypeField(val: any): FileFullLockFieldAppTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"FileFullLockFieldAppTypeField\"";
    }
    if (val == "gsuite") {
        return "gsuite";
    }
    if (val == "office_wopi") {
        return "office_wopi";
    }
    if (val == "office_wopiplus") {
        return "office_wopiplus";
    }
    if (val == "other") {
        return "other";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeFileFullLockField(val: FileFullLockField): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : newSerializeFileFullLockFieldTypeField(val.type), ["created_by"]: val.createdBy == void 0 ? void 0 : newSerializeUserMini(val.createdBy), ["created_at"]: val.createdAt, ["expired_at"]: val.expiredAt, ["is_download_prevented"]: val.isDownloadPrevented, ["app_type"]: val.appType == void 0 ? void 0 : newSerializeFileFullLockFieldAppTypeField(val.appType) };
}
export function newDeserializeFileFullLockField(val: any): FileFullLockField {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | FileFullLockFieldTypeField = val.type == void 0 ? void 0 : newDeserializeFileFullLockFieldTypeField(val.type);
    const createdBy: undefined | UserMini = val.created_by == void 0 ? void 0 : newDeserializeUserMini(val.created_by);
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const expiredAt: undefined | string = isJson(val.expired_at, "string") ? val.expired_at : void 0;
    const isDownloadPrevented: undefined | boolean = isJson(val.is_download_prevented, "boolean") ? val.is_download_prevented : void 0;
    const appType: undefined | FileFullLockFieldAppTypeField = val.app_type == void 0 ? void 0 : newDeserializeFileFullLockFieldAppTypeField(val.app_type);
    return { id: id, type: type, createdBy: createdBy, createdAt: createdAt, expiredAt: expiredAt, isDownloadPrevented: isDownloadPrevented, appType: appType } satisfies FileFullLockField;
}
export function newSerializeFileFullExpiringEmbedLinkFieldTokenTypeField(val: FileFullExpiringEmbedLinkFieldTokenTypeField): Json {
    return val;
}
export function newDeserializeFileFullExpiringEmbedLinkFieldTokenTypeField(val: any): FileFullExpiringEmbedLinkFieldTokenTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"FileFullExpiringEmbedLinkFieldTokenTypeField\"";
    }
    if (val == "bearer") {
        return "bearer";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeFileFullExpiringEmbedLinkField(val: FileFullExpiringEmbedLinkField): Json {
    return { ["access_token"]: val.accessToken, ["expires_in"]: val.expiresIn, ["token_type"]: val.tokenType == void 0 ? void 0 : newSerializeFileFullExpiringEmbedLinkFieldTokenTypeField(val.tokenType), ["restricted_to"]: val.restrictedTo == void 0 ? void 0 : val.restrictedTo.map(function (item: FileScope): any {
            return newSerializeFileScope(item);
        }) as readonly any[], ["url"]: val.url };
}
export function newDeserializeFileFullExpiringEmbedLinkField(val: any): FileFullExpiringEmbedLinkField {
    const accessToken: undefined | string = isJson(val.access_token, "string") ? val.access_token : void 0;
    const expiresIn: undefined | number = isJson(val.expires_in, "number") ? val.expires_in : void 0;
    const tokenType: undefined | FileFullExpiringEmbedLinkFieldTokenTypeField = val.token_type == void 0 ? void 0 : newDeserializeFileFullExpiringEmbedLinkFieldTokenTypeField(val.token_type);
    const restrictedTo: undefined | readonly FileScope[] = isJson(val.restricted_to, "array") ? val.restricted_to.map(function (itm: Json): any {
        return newDeserializeFileScope(itm);
    }) as readonly any[] : void 0;
    const url: undefined | string = isJson(val.url, "string") ? val.url : void 0;
    return { accessToken: accessToken, expiresIn: expiresIn, tokenType: tokenType, restrictedTo: restrictedTo, url: url } satisfies FileFullExpiringEmbedLinkField;
}
export function newSerializeFileFullWatermarkInfoField(val: FileFullWatermarkInfoField): Json {
    return { ["is_watermarked"]: val.isWatermarked };
}
export function newDeserializeFileFullWatermarkInfoField(val: any): FileFullWatermarkInfoField {
    const isWatermarked: undefined | boolean = isJson(val.is_watermarked, "boolean") ? val.is_watermarked : void 0;
    return { isWatermarked: isWatermarked } satisfies FileFullWatermarkInfoField;
}
export function newSerializeFileFullAllowedInviteeRolesField(val: FileFullAllowedInviteeRolesField): Json {
    return val;
}
export function newDeserializeFileFullAllowedInviteeRolesField(val: any): FileFullAllowedInviteeRolesField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"FileFullAllowedInviteeRolesField\"";
    }
    if (val == "editor") {
        return "editor";
    }
    if (val == "viewer") {
        return "viewer";
    }
    if (val == "previewer") {
        return "previewer";
    }
    if (val == "uploader") {
        return "uploader";
    }
    if (val == "previewer uploader") {
        return "previewer uploader";
    }
    if (val == "viewer uploader") {
        return "viewer uploader";
    }
    if (val == "co-owner") {
        return "co-owner";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeFileFullMetadataField(val: FileFullMetadataField): Json {
    return {};
}
export function newDeserializeFileFullMetadataField(val: any): FileFullMetadataField {
    return {} satisfies FileFullMetadataField;
}
export function newSerializeFileFullRepresentationsFieldEntriesFieldContentField(val: FileFullRepresentationsFieldEntriesFieldContentField): Json {
    return { ["url_template"]: val.urlTemplate };
}
export function newDeserializeFileFullRepresentationsFieldEntriesFieldContentField(val: any): FileFullRepresentationsFieldEntriesFieldContentField {
    const urlTemplate: undefined | string = isJson(val.url_template, "string") ? val.url_template : void 0;
    return { urlTemplate: urlTemplate } satisfies FileFullRepresentationsFieldEntriesFieldContentField;
}
export function newSerializeFileFullRepresentationsFieldEntriesFieldInfoField(val: FileFullRepresentationsFieldEntriesFieldInfoField): Json {
    return { ["url"]: val.url };
}
export function newDeserializeFileFullRepresentationsFieldEntriesFieldInfoField(val: any): FileFullRepresentationsFieldEntriesFieldInfoField {
    const url: undefined | string = isJson(val.url, "string") ? val.url : void 0;
    return { url: url } satisfies FileFullRepresentationsFieldEntriesFieldInfoField;
}
export function newSerializeFileFullRepresentationsFieldEntriesFieldPropertiesField(val: FileFullRepresentationsFieldEntriesFieldPropertiesField): Json {
    return { ["dimensions"]: val.dimensions, ["paged"]: val.paged, ["thumb"]: val.thumb };
}
export function newDeserializeFileFullRepresentationsFieldEntriesFieldPropertiesField(val: any): FileFullRepresentationsFieldEntriesFieldPropertiesField {
    const dimensions: undefined | string = isJson(val.dimensions, "string") ? val.dimensions : void 0;
    const paged: undefined | boolean = isJson(val.paged, "boolean") ? val.paged : void 0;
    const thumb: undefined | boolean = isJson(val.thumb, "boolean") ? val.thumb : void 0;
    return { dimensions: dimensions, paged: paged, thumb: thumb } satisfies FileFullRepresentationsFieldEntriesFieldPropertiesField;
}
export function newSerializeFileFullRepresentationsFieldEntriesFieldStatusFieldStateField(val: FileFullRepresentationsFieldEntriesFieldStatusFieldStateField): Json {
    return val;
}
export function newDeserializeFileFullRepresentationsFieldEntriesFieldStatusFieldStateField(val: any): FileFullRepresentationsFieldEntriesFieldStatusFieldStateField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"FileFullRepresentationsFieldEntriesFieldStatusFieldStateField\"";
    }
    if (val == "success") {
        return "success";
    }
    if (val == "viewable") {
        return "viewable";
    }
    if (val == "pending") {
        return "pending";
    }
    if (val == "none") {
        return "none";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeFileFullRepresentationsFieldEntriesFieldStatusField(val: FileFullRepresentationsFieldEntriesFieldStatusField): Json {
    return { ["state"]: val.state == void 0 ? void 0 : newSerializeFileFullRepresentationsFieldEntriesFieldStatusFieldStateField(val.state) };
}
export function newDeserializeFileFullRepresentationsFieldEntriesFieldStatusField(val: any): FileFullRepresentationsFieldEntriesFieldStatusField {
    const state: undefined | FileFullRepresentationsFieldEntriesFieldStatusFieldStateField = val.state == void 0 ? void 0 : newDeserializeFileFullRepresentationsFieldEntriesFieldStatusFieldStateField(val.state);
    return { state: state } satisfies FileFullRepresentationsFieldEntriesFieldStatusField;
}
export function newSerializeFileFullRepresentationsFieldEntriesField(val: FileFullRepresentationsFieldEntriesField): Json {
    return { ["content"]: val.content == void 0 ? void 0 : newSerializeFileFullRepresentationsFieldEntriesFieldContentField(val.content), ["info"]: val.info == void 0 ? void 0 : newSerializeFileFullRepresentationsFieldEntriesFieldInfoField(val.info), ["properties"]: val.properties == void 0 ? void 0 : newSerializeFileFullRepresentationsFieldEntriesFieldPropertiesField(val.properties), ["representation"]: val.representation, ["status"]: val.status == void 0 ? void 0 : newSerializeFileFullRepresentationsFieldEntriesFieldStatusField(val.status) };
}
export function newDeserializeFileFullRepresentationsFieldEntriesField(val: any): FileFullRepresentationsFieldEntriesField {
    const content: undefined | FileFullRepresentationsFieldEntriesFieldContentField = val.content == void 0 ? void 0 : newDeserializeFileFullRepresentationsFieldEntriesFieldContentField(val.content);
    const info: undefined | FileFullRepresentationsFieldEntriesFieldInfoField = val.info == void 0 ? void 0 : newDeserializeFileFullRepresentationsFieldEntriesFieldInfoField(val.info);
    const properties: undefined | FileFullRepresentationsFieldEntriesFieldPropertiesField = val.properties == void 0 ? void 0 : newDeserializeFileFullRepresentationsFieldEntriesFieldPropertiesField(val.properties);
    const representation: undefined | string = isJson(val.representation, "string") ? val.representation : void 0;
    const status: undefined | FileFullRepresentationsFieldEntriesFieldStatusField = val.status == void 0 ? void 0 : newDeserializeFileFullRepresentationsFieldEntriesFieldStatusField(val.status);
    return { content: content, info: info, properties: properties, representation: representation, status: status } satisfies FileFullRepresentationsFieldEntriesField;
}
export function newSerializeFileFullRepresentationsField(val: FileFullRepresentationsField): Json {
    return { ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: FileFullRepresentationsFieldEntriesField): any {
            return newSerializeFileFullRepresentationsFieldEntriesField(item);
        }) as readonly any[] };
}
export function newDeserializeFileFullRepresentationsField(val: any): FileFullRepresentationsField {
    const entries: undefined | readonly FileFullRepresentationsFieldEntriesField[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return newDeserializeFileFullRepresentationsFieldEntriesField(itm);
    }) as readonly any[] : void 0;
    return { entries: entries } satisfies FileFullRepresentationsField;
}
export function newSerializeFileFullClassificationField(val: FileFullClassificationField): Json {
    return { ["name"]: val.name, ["definition"]: val.definition, ["color"]: val.color };
}
export function newDeserializeFileFullClassificationField(val: any): FileFullClassificationField {
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const definition: undefined | string = isJson(val.definition, "string") ? val.definition : void 0;
    const color: undefined | string = isJson(val.color, "string") ? val.color : void 0;
    return { name: name, definition: definition, color: color } satisfies FileFullClassificationField;
}
export function newSerializeFileFullSharedLinkPermissionOptionsField(val: FileFullSharedLinkPermissionOptionsField): Json {
    return val;
}
export function newDeserializeFileFullSharedLinkPermissionOptionsField(val: any): FileFullSharedLinkPermissionOptionsField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"FileFullSharedLinkPermissionOptionsField\"";
    }
    if (val == "can_preview") {
        return "can_preview";
    }
    if (val == "can_download") {
        return "can_download";
    }
    if (val == "can_edit") {
        return "can_edit";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeFileFull(val: FileFull): Json {
    const base: any = newSerializeFile(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"FileFull\"";
    }
    return { ...base, ...{ ["version_number"]: val.versionNumber, ["comment_count"]: val.commentCount, ["permissions"]: val.permissions == void 0 ? void 0 : newSerializeFileFullPermissionsField(val.permissions), ["tags"]: val.tags == void 0 ? void 0 : val.tags.map(function (item: string): undefined {
                return void 0;
            }) as readonly any[], ["lock"]: val.lock == void 0 ? void 0 : newSerializeFileFullLockField(val.lock), ["extension"]: val.extension, ["is_package"]: val.isPackage, ["expiring_embed_link"]: val.expiringEmbedLink == void 0 ? void 0 : newSerializeFileFullExpiringEmbedLinkField(val.expiringEmbedLink), ["watermark_info"]: val.watermarkInfo == void 0 ? void 0 : newSerializeFileFullWatermarkInfoField(val.watermarkInfo), ["is_accessible_via_shared_link"]: val.isAccessibleViaSharedLink, ["allowed_invitee_roles"]: val.allowedInviteeRoles == void 0 ? void 0 : val.allowedInviteeRoles.map(function (item: FileFullAllowedInviteeRolesField): any {
                return newSerializeFileFullAllowedInviteeRolesField(item);
            }) as readonly any[], ["is_externally_owned"]: val.isExternallyOwned, ["has_collaborations"]: val.hasCollaborations, ["metadata"]: val.metadata == void 0 ? void 0 : newSerializeFileFullMetadataField(val.metadata), ["expires_at"]: val.expiresAt, ["representations"]: val.representations == void 0 ? void 0 : newSerializeFileFullRepresentationsField(val.representations), ["classification"]: val.classification == void 0 ? void 0 : newSerializeFileFullClassificationField(val.classification), ["uploader_display_name"]: val.uploaderDisplayName, ["disposition_at"]: val.dispositionAt, ["shared_link_permission_options"]: val.sharedLinkPermissionOptions == void 0 ? void 0 : val.sharedLinkPermissionOptions.map(function (item: FileFullSharedLinkPermissionOptionsField): any {
                return newSerializeFileFullSharedLinkPermissionOptionsField(item);
            }) as readonly any[] } };
}
export function newDeserializeFileFull(val: any): FileFull {
    const versionNumber: undefined | string = isJson(val.version_number, "string") ? val.version_number : void 0;
    const commentCount: undefined | number = isJson(val.comment_count, "number") ? val.comment_count : void 0;
    const permissions: undefined | FileFullPermissionsField = val.permissions == void 0 ? void 0 : newDeserializeFileFullPermissionsField(val.permissions);
    const tags: undefined | readonly string[] = isJson(val.tags, "array") ? val.tags.map(function (itm: Json): undefined {
        return void 0;
    }) as readonly any[] : void 0;
    const lock: undefined | FileFullLockField = val.lock == void 0 ? void 0 : newDeserializeFileFullLockField(val.lock);
    const extension: undefined | string = isJson(val.extension, "string") ? val.extension : void 0;
    const isPackage: undefined | boolean = isJson(val.is_package, "boolean") ? val.is_package : void 0;
    const expiringEmbedLink: undefined | FileFullExpiringEmbedLinkField = val.expiring_embed_link == void 0 ? void 0 : newDeserializeFileFullExpiringEmbedLinkField(val.expiring_embed_link);
    const watermarkInfo: undefined | FileFullWatermarkInfoField = val.watermark_info == void 0 ? void 0 : newDeserializeFileFullWatermarkInfoField(val.watermark_info);
    const isAccessibleViaSharedLink: undefined | boolean = isJson(val.is_accessible_via_shared_link, "boolean") ? val.is_accessible_via_shared_link : void 0;
    const allowedInviteeRoles: undefined | readonly FileFullAllowedInviteeRolesField[] = isJson(val.allowed_invitee_roles, "array") ? val.allowed_invitee_roles.map(function (itm: Json): any {
        return newDeserializeFileFullAllowedInviteeRolesField(itm);
    }) as readonly any[] : void 0;
    const isExternallyOwned: undefined | boolean = isJson(val.is_externally_owned, "boolean") ? val.is_externally_owned : void 0;
    const hasCollaborations: undefined | boolean = isJson(val.has_collaborations, "boolean") ? val.has_collaborations : void 0;
    const metadata: undefined | FileFullMetadataField = val.metadata == void 0 ? void 0 : newDeserializeFileFullMetadataField(val.metadata);
    const expiresAt: undefined | string = isJson(val.expires_at, "string") ? val.expires_at : void 0;
    const representations: undefined | FileFullRepresentationsField = val.representations == void 0 ? void 0 : newDeserializeFileFullRepresentationsField(val.representations);
    const classification: undefined | FileFullClassificationField = val.classification == void 0 ? void 0 : newDeserializeFileFullClassificationField(val.classification);
    const uploaderDisplayName: undefined | string = isJson(val.uploader_display_name, "string") ? val.uploader_display_name : void 0;
    const dispositionAt: undefined | string = isJson(val.disposition_at, "string") ? val.disposition_at : void 0;
    const sharedLinkPermissionOptions: undefined | readonly FileFullSharedLinkPermissionOptionsField[] = isJson(val.shared_link_permission_options, "array") ? val.shared_link_permission_options.map(function (itm: Json): any {
        return newDeserializeFileFullSharedLinkPermissionOptionsField(itm);
    }) as readonly any[] : void 0;
    const description: undefined | string = isJson(val.description, "string") ? val.description : void 0;
    const size: undefined | number = isJson(val.size, "number") ? val.size : void 0;
    const pathCollection: undefined | FilePathCollectionField = val.path_collection == void 0 ? void 0 : newDeserializeFilePathCollectionField(val.path_collection);
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const modifiedAt: undefined | string = isJson(val.modified_at, "string") ? val.modified_at : void 0;
    const trashedAt: undefined | string = isJson(val.trashed_at, "string") ? val.trashed_at : void 0;
    const purgedAt: undefined | string = isJson(val.purged_at, "string") ? val.purged_at : void 0;
    const contentCreatedAt: undefined | string = isJson(val.content_created_at, "string") ? val.content_created_at : void 0;
    const contentModifiedAt: undefined | string = isJson(val.content_modified_at, "string") ? val.content_modified_at : void 0;
    const createdBy: undefined | UserMini = val.created_by == void 0 ? void 0 : newDeserializeUserMini(val.created_by);
    const modifiedBy: undefined | UserMini = val.modified_by == void 0 ? void 0 : newDeserializeUserMini(val.modified_by);
    const ownedBy: undefined | UserMini = val.owned_by == void 0 ? void 0 : newDeserializeUserMini(val.owned_by);
    const sharedLink: undefined | FileSharedLinkField = val.shared_link == void 0 ? void 0 : newDeserializeFileSharedLinkField(val.shared_link);
    const parent: undefined | FolderMini = val.parent == void 0 ? void 0 : newDeserializeFolderMini(val.parent);
    const itemStatus: undefined | FileItemStatusField = val.item_status == void 0 ? void 0 : newDeserializeFileItemStatusField(val.item_status);
    const sequenceId: undefined | string = isJson(val.sequence_id, "string") ? val.sequence_id : void 0;
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const sha1: undefined | string = isJson(val.sha1, "string") ? val.sha1 : void 0;
    const fileVersion: undefined | FileVersionMini = val.file_version == void 0 ? void 0 : newDeserializeFileVersionMini(val.file_version);
    const id: string = val.id;
    const etag: undefined | string = isJson(val.etag, "string") ? val.etag : void 0;
    const type: FileBaseTypeField = newDeserializeFileBaseTypeField(val.type);
    return { versionNumber: versionNumber, commentCount: commentCount, permissions: permissions, tags: tags, lock: lock, extension: extension, isPackage: isPackage, expiringEmbedLink: expiringEmbedLink, watermarkInfo: watermarkInfo, isAccessibleViaSharedLink: isAccessibleViaSharedLink, allowedInviteeRoles: allowedInviteeRoles, isExternallyOwned: isExternallyOwned, hasCollaborations: hasCollaborations, metadata: metadata, expiresAt: expiresAt, representations: representations, classification: classification, uploaderDisplayName: uploaderDisplayName, dispositionAt: dispositionAt, sharedLinkPermissionOptions: sharedLinkPermissionOptions, description: description, size: size, pathCollection: pathCollection, createdAt: createdAt, modifiedAt: modifiedAt, trashedAt: trashedAt, purgedAt: purgedAt, contentCreatedAt: contentCreatedAt, contentModifiedAt: contentModifiedAt, createdBy: createdBy, modifiedBy: modifiedBy, ownedBy: ownedBy, sharedLink: sharedLink, parent: parent, itemStatus: itemStatus, sequenceId: sequenceId, name: name, sha1: sha1, fileVersion: fileVersion, id: id, etag: etag, type: type } satisfies FileFull;
}
export function newSerializeFiles(val: Files): Json {
    return { ["total_count"]: val.totalCount, ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: File): any {
            return newSerializeFile(item);
        }) as readonly any[] };
}
export function newDeserializeFiles(val: any): Files {
    const totalCount: undefined | number = isJson(val.total_count, "number") ? val.total_count : void 0;
    const entries: undefined | readonly File[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return newDeserializeFile(itm);
    }) as readonly any[] : void 0;
    return { totalCount: totalCount, entries: entries } satisfies Files;
}
export function newSerializeDevicePinnerTypeField(val: DevicePinnerTypeField): Json {
    return val;
}
export function newDeserializeDevicePinnerTypeField(val: any): DevicePinnerTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"DevicePinnerTypeField\"";
    }
    if (val == "device_pinner") {
        return "device_pinner";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeDevicePinner(val: DevicePinner): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : newSerializeDevicePinnerTypeField(val.type), ["owned_by"]: val.ownedBy == void 0 ? void 0 : newSerializeUserMini(val.ownedBy), ["product_name"]: val.productName };
}
export function newDeserializeDevicePinner(val: any): DevicePinner {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | DevicePinnerTypeField = val.type == void 0 ? void 0 : newDeserializeDevicePinnerTypeField(val.type);
    const ownedBy: undefined | UserMini = val.owned_by == void 0 ? void 0 : newDeserializeUserMini(val.owned_by);
    const productName: undefined | string = isJson(val.product_name, "string") ? val.product_name : void 0;
    return { id: id, type: type, ownedBy: ownedBy, productName: productName } satisfies DevicePinner;
}
export function newSerializeDevicePinnersOrderFieldByField(val: DevicePinnersOrderFieldByField): Json {
    return val;
}
export function newDeserializeDevicePinnersOrderFieldByField(val: any): DevicePinnersOrderFieldByField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"DevicePinnersOrderFieldByField\"";
    }
    if (val == "id") {
        return "id";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeDevicePinnersOrderFieldDirectionField(val: DevicePinnersOrderFieldDirectionField): Json {
    return val;
}
export function newDeserializeDevicePinnersOrderFieldDirectionField(val: any): DevicePinnersOrderFieldDirectionField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"DevicePinnersOrderFieldDirectionField\"";
    }
    if (val == "asc") {
        return "asc";
    }
    if (val == "desc") {
        return "desc";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeDevicePinnersOrderField(val: DevicePinnersOrderField): Json {
    return { ["by"]: val.by == void 0 ? void 0 : newSerializeDevicePinnersOrderFieldByField(val.by), ["direction"]: val.direction == void 0 ? void 0 : newSerializeDevicePinnersOrderFieldDirectionField(val.direction) };
}
export function newDeserializeDevicePinnersOrderField(val: any): DevicePinnersOrderField {
    const by: undefined | DevicePinnersOrderFieldByField = val.by == void 0 ? void 0 : newDeserializeDevicePinnersOrderFieldByField(val.by);
    const direction: undefined | DevicePinnersOrderFieldDirectionField = val.direction == void 0 ? void 0 : newDeserializeDevicePinnersOrderFieldDirectionField(val.direction);
    return { by: by, direction: direction } satisfies DevicePinnersOrderField;
}
export function newSerializeDevicePinners(val: DevicePinners): Json {
    return { ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: DevicePinner): any {
            return newSerializeDevicePinner(item);
        }) as readonly any[], ["limit"]: val.limit, ["next_marker"]: val.nextMarker, ["order"]: val.order == void 0 ? void 0 : val.order.map(function (item: DevicePinnersOrderField): any {
            return newSerializeDevicePinnersOrderField(item);
        }) as readonly any[] };
}
export function newDeserializeDevicePinners(val: any): DevicePinners {
    const entries: undefined | readonly DevicePinner[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return newDeserializeDevicePinner(itm);
    }) as readonly any[] : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const nextMarker: undefined | number = isJson(val.next_marker, "number") ? val.next_marker : void 0;
    const order: undefined | readonly DevicePinnersOrderField[] = isJson(val.order, "array") ? val.order.map(function (itm: Json): any {
        return newDeserializeDevicePinnersOrderField(itm);
    }) as readonly any[] : void 0;
    return { entries: entries, limit: limit, nextMarker: nextMarker, order: order } satisfies DevicePinners;
}
export function newSerializeCommentItemField(val: CommentItemField): Json {
    return { ["id"]: val.id, ["type"]: val.type };
}
export function newDeserializeCommentItemField(val: any): CommentItemField {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | string = isJson(val.type, "string") ? val.type : void 0;
    return { id: id, type: type } satisfies CommentItemField;
}
export function newSerializeComment(val: Comment): Json {
    const base: any = newSerializeCommentBase(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"Comment\"";
    }
    return { ...base, ...{ ["is_reply_comment"]: val.isReplyComment, ["message"]: val.message, ["created_by"]: val.createdBy == void 0 ? void 0 : newSerializeUserMini(val.createdBy), ["created_at"]: val.createdAt, ["modified_at"]: val.modifiedAt, ["item"]: val.item == void 0 ? void 0 : newSerializeCommentItemField(val.item) } };
}
export function newDeserializeComment(val: any): Comment {
    const isReplyComment: undefined | boolean = isJson(val.is_reply_comment, "boolean") ? val.is_reply_comment : void 0;
    const message: undefined | string = isJson(val.message, "string") ? val.message : void 0;
    const createdBy: undefined | UserMini = val.created_by == void 0 ? void 0 : newDeserializeUserMini(val.created_by);
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const modifiedAt: undefined | string = isJson(val.modified_at, "string") ? val.modified_at : void 0;
    const item: undefined | CommentItemField = val.item == void 0 ? void 0 : newDeserializeCommentItemField(val.item);
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | CommentBaseTypeField = val.type == void 0 ? void 0 : newDeserializeCommentBaseTypeField(val.type);
    return { isReplyComment: isReplyComment, message: message, createdBy: createdBy, createdAt: createdAt, modifiedAt: modifiedAt, item: item, id: id, type: type } satisfies Comment;
}
export function newSerializeCommentFull(val: CommentFull): Json {
    const base: any = newSerializeComment(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"CommentFull\"";
    }
    return { ...base, ...{ ["tagged_message"]: val.taggedMessage } };
}
export function newDeserializeCommentFull(val: any): CommentFull {
    const taggedMessage: undefined | string = isJson(val.tagged_message, "string") ? val.tagged_message : void 0;
    const isReplyComment: undefined | boolean = isJson(val.is_reply_comment, "boolean") ? val.is_reply_comment : void 0;
    const message: undefined | string = isJson(val.message, "string") ? val.message : void 0;
    const createdBy: undefined | UserMini = val.created_by == void 0 ? void 0 : newDeserializeUserMini(val.created_by);
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const modifiedAt: undefined | string = isJson(val.modified_at, "string") ? val.modified_at : void 0;
    const item: undefined | CommentItemField = val.item == void 0 ? void 0 : newDeserializeCommentItemField(val.item);
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | CommentBaseTypeField = val.type == void 0 ? void 0 : newDeserializeCommentBaseTypeField(val.type);
    return { taggedMessage: taggedMessage, isReplyComment: isReplyComment, message: message, createdBy: createdBy, createdAt: createdAt, modifiedAt: modifiedAt, item: item, id: id, type: type } satisfies CommentFull;
}
export function newSerializeCommentsOrderFieldDirectionField(val: CommentsOrderFieldDirectionField): Json {
    return val;
}
export function newDeserializeCommentsOrderFieldDirectionField(val: any): CommentsOrderFieldDirectionField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CommentsOrderFieldDirectionField\"";
    }
    if (val == "ASC") {
        return "ASC";
    }
    if (val == "DESC") {
        return "DESC";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeCommentsOrderField(val: CommentsOrderField): Json {
    return { ["by"]: val.by, ["direction"]: val.direction == void 0 ? void 0 : newSerializeCommentsOrderFieldDirectionField(val.direction) };
}
export function newDeserializeCommentsOrderField(val: any): CommentsOrderField {
    const by: undefined | string = isJson(val.by, "string") ? val.by : void 0;
    const direction: undefined | CommentsOrderFieldDirectionField = val.direction == void 0 ? void 0 : newDeserializeCommentsOrderFieldDirectionField(val.direction);
    return { by: by, direction: direction } satisfies CommentsOrderField;
}
export function newSerializeComments(val: Comments): Json {
    return { ["total_count"]: val.totalCount, ["limit"]: val.limit, ["offset"]: val.offset, ["order"]: val.order == void 0 ? void 0 : val.order.map(function (item: CommentsOrderField): any {
            return newSerializeCommentsOrderField(item);
        }) as readonly any[], ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: Comment): any {
            return newSerializeComment(item);
        }) as readonly any[] };
}
export function newDeserializeComments(val: any): Comments {
    const totalCount: undefined | number = isJson(val.total_count, "number") ? val.total_count : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const offset: undefined | number = isJson(val.offset, "number") ? val.offset : void 0;
    const order: undefined | readonly CommentsOrderField[] = isJson(val.order, "array") ? val.order.map(function (itm: Json): any {
        return newDeserializeCommentsOrderField(itm);
    }) as readonly any[] : void 0;
    const entries: undefined | readonly Comment[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return newDeserializeComment(itm);
    }) as readonly any[] : void 0;
    return { totalCount: totalCount, limit: limit, offset: offset, order: order, entries: entries } satisfies Comments;
}
export function newSerializeShieldInformationBarrierSegmentRestriction(val: ShieldInformationBarrierSegmentRestriction): Json {
    const base: any = newSerializeShieldInformationBarrierSegmentRestrictionMini(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"ShieldInformationBarrierSegmentRestriction\"";
    }
    return { ...base, ...{ ["shield_information_barrier"]: val.shieldInformationBarrier == void 0 ? void 0 : newSerializeShieldInformationBarrierBase(val.shieldInformationBarrier), ["created_at"]: val.createdAt, ["created_by"]: val.createdBy == void 0 ? void 0 : newSerializeUserBase(val.createdBy), ["updated_at"]: val.updatedAt, ["updated_by"]: val.updatedBy == void 0 ? void 0 : newSerializeUserBase(val.updatedBy) } };
}
export function newDeserializeShieldInformationBarrierSegmentRestriction(val: any): ShieldInformationBarrierSegmentRestriction {
    const shieldInformationBarrier: undefined | ShieldInformationBarrierBase = val.shield_information_barrier == void 0 ? void 0 : newDeserializeShieldInformationBarrierBase(val.shield_information_barrier);
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const createdBy: undefined | UserBase = val.created_by == void 0 ? void 0 : newDeserializeUserBase(val.created_by);
    const updatedAt: undefined | string = isJson(val.updated_at, "string") ? val.updated_at : void 0;
    const updatedBy: undefined | UserBase = val.updated_by == void 0 ? void 0 : newDeserializeUserBase(val.updated_by);
    const shieldInformationBarrierSegment: ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField = newDeserializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField(val.shield_information_barrier_segment);
    const restrictedSegment: ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField = newDeserializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField(val.restricted_segment);
    const type: undefined | ShieldInformationBarrierSegmentRestrictionBaseTypeField = val.type == void 0 ? void 0 : newDeserializeShieldInformationBarrierSegmentRestrictionBaseTypeField(val.type);
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    return { shieldInformationBarrier: shieldInformationBarrier, createdAt: createdAt, createdBy: createdBy, updatedAt: updatedAt, updatedBy: updatedBy, shieldInformationBarrierSegment: shieldInformationBarrierSegment, restrictedSegment: restrictedSegment, type: type, id: id } satisfies ShieldInformationBarrierSegmentRestriction;
}
export function newSerializeShieldInformationBarrierSegmentMemberMini(val: ShieldInformationBarrierSegmentMemberMini): Json {
    const base: any = newSerializeShieldInformationBarrierSegmentMemberBase(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"ShieldInformationBarrierSegmentMemberMini\"";
    }
    return { ...base, ...{ ["user"]: val.user == void 0 ? void 0 : newSerializeUserBase(val.user) } };
}
export function newDeserializeShieldInformationBarrierSegmentMemberMini(val: any): ShieldInformationBarrierSegmentMemberMini {
    const user: undefined | UserBase = val.user == void 0 ? void 0 : newDeserializeUserBase(val.user);
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | ShieldInformationBarrierSegmentMemberBaseTypeField = val.type == void 0 ? void 0 : newDeserializeShieldInformationBarrierSegmentMemberBaseTypeField(val.type);
    return { user: user, id: id, type: type } satisfies ShieldInformationBarrierSegmentMemberMini;
}
export function newSerializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentFieldTypeField(val: ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentFieldTypeField): Json {
    return val;
}
export function newDeserializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentFieldTypeField(val: any): ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentFieldTypeField\"";
    }
    if (val == "shield_information_barrier_segment") {
        return "shield_information_barrier_segment";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField(val: ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : newSerializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentFieldTypeField(val.type) };
}
export function newDeserializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField(val: any): ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentFieldTypeField = val.type == void 0 ? void 0 : newDeserializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentFieldTypeField(val.type);
    return { id: id, type: type } satisfies ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField;
}
export function newSerializeShieldInformationBarrierSegmentMember(val: ShieldInformationBarrierSegmentMember): Json {
    const base: any = newSerializeShieldInformationBarrierSegmentMemberMini(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"ShieldInformationBarrierSegmentMember\"";
    }
    return { ...base, ...{ ["shield_information_barrier"]: val.shieldInformationBarrier == void 0 ? void 0 : newSerializeShieldInformationBarrierBase(val.shieldInformationBarrier), ["shield_information_barrier_segment"]: val.shieldInformationBarrierSegment == void 0 ? void 0 : newSerializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField(val.shieldInformationBarrierSegment), ["user"]: val.user == void 0 ? void 0 : newSerializeUserBase(val.user), ["created_at"]: val.createdAt, ["created_by"]: val.createdBy == void 0 ? void 0 : newSerializeUserBase(val.createdBy), ["updated_at"]: val.updatedAt, ["updated_by"]: val.updatedBy == void 0 ? void 0 : newSerializeUserBase(val.updatedBy) } };
}
export function newDeserializeShieldInformationBarrierSegmentMember(val: any): ShieldInformationBarrierSegmentMember {
    const shieldInformationBarrier: undefined | ShieldInformationBarrierBase = val.shield_information_barrier == void 0 ? void 0 : newDeserializeShieldInformationBarrierBase(val.shield_information_barrier);
    const shieldInformationBarrierSegment: undefined | ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField = val.shield_information_barrier_segment == void 0 ? void 0 : newDeserializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField(val.shield_information_barrier_segment);
    const user: undefined | UserBase = val.user == void 0 ? void 0 : newDeserializeUserBase(val.user);
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const createdBy: undefined | UserBase = val.created_by == void 0 ? void 0 : newDeserializeUserBase(val.created_by);
    const updatedAt: undefined | string = isJson(val.updated_at, "string") ? val.updated_at : void 0;
    const updatedBy: undefined | UserBase = val.updated_by == void 0 ? void 0 : newDeserializeUserBase(val.updated_by);
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | ShieldInformationBarrierSegmentMemberBaseTypeField = val.type == void 0 ? void 0 : newDeserializeShieldInformationBarrierSegmentMemberBaseTypeField(val.type);
    return { shieldInformationBarrier: shieldInformationBarrier, shieldInformationBarrierSegment: shieldInformationBarrierSegment, user: user, createdAt: createdAt, createdBy: createdBy, updatedAt: updatedAt, updatedBy: updatedBy, id: id, type: type } satisfies ShieldInformationBarrierSegmentMember;
}
export function newSerializeShieldInformationBarrierSegmentTypeField(val: ShieldInformationBarrierSegmentTypeField): Json {
    return val;
}
export function newDeserializeShieldInformationBarrierSegmentTypeField(val: any): ShieldInformationBarrierSegmentTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"ShieldInformationBarrierSegmentTypeField\"";
    }
    if (val == "shield_information_barrier_segment") {
        return "shield_information_barrier_segment";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeShieldInformationBarrierSegment(val: ShieldInformationBarrierSegment): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : newSerializeShieldInformationBarrierSegmentTypeField(val.type), ["shield_information_barrier"]: val.shieldInformationBarrier == void 0 ? void 0 : newSerializeShieldInformationBarrierBase(val.shieldInformationBarrier), ["name"]: val.name, ["description"]: val.description, ["created_at"]: val.createdAt, ["created_by"]: val.createdBy == void 0 ? void 0 : newSerializeUserBase(val.createdBy), ["updated_at"]: val.updatedAt, ["updated_by"]: val.updatedBy == void 0 ? void 0 : newSerializeUserBase(val.updatedBy) };
}
export function newDeserializeShieldInformationBarrierSegment(val: any): ShieldInformationBarrierSegment {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | ShieldInformationBarrierSegmentTypeField = val.type == void 0 ? void 0 : newDeserializeShieldInformationBarrierSegmentTypeField(val.type);
    const shieldInformationBarrier: undefined | ShieldInformationBarrierBase = val.shield_information_barrier == void 0 ? void 0 : newDeserializeShieldInformationBarrierBase(val.shield_information_barrier);
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const description: undefined | string = isJson(val.description, "string") ? val.description : void 0;
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const createdBy: undefined | UserBase = val.created_by == void 0 ? void 0 : newDeserializeUserBase(val.created_by);
    const updatedAt: undefined | string = isJson(val.updated_at, "string") ? val.updated_at : void 0;
    const updatedBy: undefined | UserBase = val.updated_by == void 0 ? void 0 : newDeserializeUserBase(val.updated_by);
    return { id: id, type: type, shieldInformationBarrier: shieldInformationBarrier, name: name, description: description, createdAt: createdAt, createdBy: createdBy, updatedAt: updatedAt, updatedBy: updatedBy } satisfies ShieldInformationBarrierSegment;
}
export function newSerializeShieldInformationBarrierReportShieldInformationBarrierField(val: ShieldInformationBarrierReportShieldInformationBarrierField): Json {
    return {};
}
export function newDeserializeShieldInformationBarrierReportShieldInformationBarrierField(val: any): ShieldInformationBarrierReportShieldInformationBarrierField {
    return {} satisfies ShieldInformationBarrierReportShieldInformationBarrierField;
}
export function newSerializeShieldInformationBarrierReportStatusField(val: ShieldInformationBarrierReportStatusField): Json {
    return val;
}
export function newDeserializeShieldInformationBarrierReportStatusField(val: any): ShieldInformationBarrierReportStatusField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"ShieldInformationBarrierReportStatusField\"";
    }
    if (val == "pending") {
        return "pending";
    }
    if (val == "error") {
        return "error";
    }
    if (val == "done") {
        return "done";
    }
    if (val == "cancelled") {
        return "cancelled";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeShieldInformationBarrierReportDetailsField(val: ShieldInformationBarrierReportDetailsField): Json {
    return {};
}
export function newDeserializeShieldInformationBarrierReportDetailsField(val: any): ShieldInformationBarrierReportDetailsField {
    return {} satisfies ShieldInformationBarrierReportDetailsField;
}
export function newSerializeShieldInformationBarrierReport(val: ShieldInformationBarrierReport): Json {
    const base: any = newSerializeShieldInformationBarrierReportBase(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"ShieldInformationBarrierReport\"";
    }
    return { ...base, ...{ ["shield_information_barrier"]: val.shieldInformationBarrier == void 0 ? void 0 : newSerializeShieldInformationBarrierReportShieldInformationBarrierField(val.shieldInformationBarrier), ["status"]: val.status == void 0 ? void 0 : newSerializeShieldInformationBarrierReportStatusField(val.status), ["details"]: val.details == void 0 ? void 0 : newSerializeShieldInformationBarrierReportDetailsField(val.details), ["created_at"]: val.createdAt, ["created_by"]: val.createdBy == void 0 ? void 0 : newSerializeUserBase(val.createdBy), ["updated_at"]: val.updatedAt } };
}
export function newDeserializeShieldInformationBarrierReport(val: any): ShieldInformationBarrierReport {
    const shieldInformationBarrier: undefined | ShieldInformationBarrierReportShieldInformationBarrierField = val.shield_information_barrier == void 0 ? void 0 : newDeserializeShieldInformationBarrierReportShieldInformationBarrierField(val.shield_information_barrier);
    const status: undefined | ShieldInformationBarrierReportStatusField = val.status == void 0 ? void 0 : newDeserializeShieldInformationBarrierReportStatusField(val.status);
    const details: undefined | ShieldInformationBarrierReportDetailsField = val.details == void 0 ? void 0 : newDeserializeShieldInformationBarrierReportDetailsField(val.details);
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const createdBy: undefined | UserBase = val.created_by == void 0 ? void 0 : newDeserializeUserBase(val.created_by);
    const updatedAt: undefined | string = isJson(val.updated_at, "string") ? val.updated_at : void 0;
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | ShieldInformationBarrierReportBaseTypeField = val.type == void 0 ? void 0 : newDeserializeShieldInformationBarrierReportBaseTypeField(val.type);
    return { shieldInformationBarrier: shieldInformationBarrier, status: status, details: details, createdAt: createdAt, createdBy: createdBy, updatedAt: updatedAt, id: id, type: type } satisfies ShieldInformationBarrierReport;
}
export function newSerializeShieldInformationBarrierTypeField(val: ShieldInformationBarrierTypeField): Json {
    return val;
}
export function newDeserializeShieldInformationBarrierTypeField(val: any): ShieldInformationBarrierTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"ShieldInformationBarrierTypeField\"";
    }
    if (val == "shield_information_barrier") {
        return "shield_information_barrier";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeShieldInformationBarrierStatusField(val: ShieldInformationBarrierStatusField): Json {
    return val;
}
export function newDeserializeShieldInformationBarrierStatusField(val: any): ShieldInformationBarrierStatusField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"ShieldInformationBarrierStatusField\"";
    }
    if (val == "draft") {
        return "draft";
    }
    if (val == "pending") {
        return "pending";
    }
    if (val == "disabled") {
        return "disabled";
    }
    if (val == "enabled") {
        return "enabled";
    }
    if (val == "invalid") {
        return "invalid";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeShieldInformationBarrier(val: ShieldInformationBarrier): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : newSerializeShieldInformationBarrierTypeField(val.type), ["enterprise"]: val.enterprise == void 0 ? void 0 : newSerializeEnterpriseBase(val.enterprise), ["status"]: val.status == void 0 ? void 0 : newSerializeShieldInformationBarrierStatusField(val.status), ["created_at"]: val.createdAt, ["created_by"]: val.createdBy == void 0 ? void 0 : newSerializeUserBase(val.createdBy), ["updated_at"]: val.updatedAt, ["updated_by"]: val.updatedBy == void 0 ? void 0 : newSerializeUserBase(val.updatedBy), ["enabled_at"]: val.enabledAt, ["enabled_by"]: val.enabledBy == void 0 ? void 0 : newSerializeUserBase(val.enabledBy) };
}
export function newDeserializeShieldInformationBarrier(val: any): ShieldInformationBarrier {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | ShieldInformationBarrierTypeField = val.type == void 0 ? void 0 : newDeserializeShieldInformationBarrierTypeField(val.type);
    const enterprise: undefined | EnterpriseBase = val.enterprise == void 0 ? void 0 : newDeserializeEnterpriseBase(val.enterprise);
    const status: undefined | ShieldInformationBarrierStatusField = val.status == void 0 ? void 0 : newDeserializeShieldInformationBarrierStatusField(val.status);
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const createdBy: undefined | UserBase = val.created_by == void 0 ? void 0 : newDeserializeUserBase(val.created_by);
    const updatedAt: undefined | string = isJson(val.updated_at, "string") ? val.updated_at : void 0;
    const updatedBy: undefined | UserBase = val.updated_by == void 0 ? void 0 : newDeserializeUserBase(val.updated_by);
    const enabledAt: undefined | string = isJson(val.enabled_at, "string") ? val.enabled_at : void 0;
    const enabledBy: undefined | UserBase = val.enabled_by == void 0 ? void 0 : newDeserializeUserBase(val.enabled_by);
    return { id: id, type: type, enterprise: enterprise, status: status, createdAt: createdAt, createdBy: createdBy, updatedAt: updatedAt, updatedBy: updatedBy, enabledAt: enabledAt, enabledBy: enabledBy } satisfies ShieldInformationBarrier;
}
export function newSerializeFolderLockLockedOperationsField(val: FolderLockLockedOperationsField): Json {
    return { ["move"]: val.move, ["delete"]: val.delete };
}
export function newDeserializeFolderLockLockedOperationsField(val: any): FolderLockLockedOperationsField {
    const move: boolean = val.move;
    const _delete: boolean = val.delete;
    return { move: move, delete: _delete } satisfies FolderLockLockedOperationsField;
}
export function newSerializeFolderLock(val: FolderLock): Json {
    return { ["folder"]: val.folder == void 0 ? void 0 : newSerializeFolderMini(val.folder), ["id"]: val.id, ["type"]: val.type, ["created_by"]: val.createdBy == void 0 ? void 0 : newSerializeUserBase(val.createdBy), ["created_at"]: val.createdAt, ["locked_operations"]: val.lockedOperations == void 0 ? void 0 : newSerializeFolderLockLockedOperationsField(val.lockedOperations), ["lock_type"]: val.lockType };
}
export function newDeserializeFolderLock(val: any): FolderLock {
    const folder: undefined | FolderMini = val.folder == void 0 ? void 0 : newDeserializeFolderMini(val.folder);
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | string = isJson(val.type, "string") ? val.type : void 0;
    const createdBy: undefined | UserBase = val.created_by == void 0 ? void 0 : newDeserializeUserBase(val.created_by);
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const lockedOperations: undefined | FolderLockLockedOperationsField = val.locked_operations == void 0 ? void 0 : newDeserializeFolderLockLockedOperationsField(val.locked_operations);
    const lockType: undefined | string = isJson(val.lock_type, "string") ? val.lock_type : void 0;
    return { folder: folder, id: id, type: type, createdBy: createdBy, createdAt: createdAt, lockedOperations: lockedOperations, lockType: lockType } satisfies FolderLock;
}
export function newSerializeFolderLocks(val: FolderLocks): Json {
    return { ["limit"]: val.limit, ["next_marker"]: val.nextMarker, ["prev_marker"]: val.prevMarker, ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: FolderLock): any {
            return newSerializeFolderLock(item);
        }) as readonly any[] };
}
export function newDeserializeFolderLocks(val: any): FolderLocks {
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const nextMarker: undefined | number = isJson(val.next_marker, "number") ? val.next_marker : void 0;
    const prevMarker: undefined | number = isJson(val.prev_marker, "number") ? val.prev_marker : void 0;
    const entries: undefined | readonly FolderLock[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return newDeserializeFolderLock(itm);
    }) as readonly any[] : void 0;
    return { limit: limit, nextMarker: nextMarker, prevMarker: prevMarker, entries: entries } satisfies FolderLocks;
}
export function newSerializeWatermarkWatermarkField(val: WatermarkWatermarkField): Json {
    return { ["created_at"]: val.createdAt, ["modified_at"]: val.modifiedAt };
}
export function newDeserializeWatermarkWatermarkField(val: any): WatermarkWatermarkField {
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const modifiedAt: undefined | string = isJson(val.modified_at, "string") ? val.modified_at : void 0;
    return { createdAt: createdAt, modifiedAt: modifiedAt } satisfies WatermarkWatermarkField;
}
export function newSerializeWatermark(val: Watermark): Json {
    return { ["watermark"]: val.watermark == void 0 ? void 0 : newSerializeWatermarkWatermarkField(val.watermark) };
}
export function newDeserializeWatermark(val: any): Watermark {
    const watermark: undefined | WatermarkWatermarkField = val.watermark == void 0 ? void 0 : newDeserializeWatermarkWatermarkField(val.watermark);
    return { watermark: watermark } satisfies Watermark;
}
export function newSerializeWebhookMiniTypeField(val: WebhookMiniTypeField): Json {
    return val;
}
export function newDeserializeWebhookMiniTypeField(val: any): WebhookMiniTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"WebhookMiniTypeField\"";
    }
    if (val == "webhook") {
        return "webhook";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeWebhookMiniTargetFieldTypeField(val: WebhookMiniTargetFieldTypeField): Json {
    return val;
}
export function newDeserializeWebhookMiniTargetFieldTypeField(val: any): WebhookMiniTargetFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"WebhookMiniTargetFieldTypeField\"";
    }
    if (val == "file") {
        return "file";
    }
    if (val == "folder") {
        return "folder";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeWebhookMiniTargetField(val: WebhookMiniTargetField): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : newSerializeWebhookMiniTargetFieldTypeField(val.type) };
}
export function newDeserializeWebhookMiniTargetField(val: any): WebhookMiniTargetField {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | WebhookMiniTargetFieldTypeField = val.type == void 0 ? void 0 : newDeserializeWebhookMiniTargetFieldTypeField(val.type);
    return { id: id, type: type } satisfies WebhookMiniTargetField;
}
export function newSerializeWebhookMini(val: WebhookMini): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : newSerializeWebhookMiniTypeField(val.type), ["target"]: val.target == void 0 ? void 0 : newSerializeWebhookMiniTargetField(val.target) };
}
export function newDeserializeWebhookMini(val: any): WebhookMini {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | WebhookMiniTypeField = val.type == void 0 ? void 0 : newDeserializeWebhookMiniTypeField(val.type);
    const target: undefined | WebhookMiniTargetField = val.target == void 0 ? void 0 : newDeserializeWebhookMiniTargetField(val.target);
    return { id: id, type: type, target: target } satisfies WebhookMini;
}
export function newSerializeWebhooks(val: Webhooks): Json {
    return { ["limit"]: val.limit, ["next_marker"]: val.nextMarker, ["prev_marker"]: val.prevMarker, ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: WebhookMini): any {
            return newSerializeWebhookMini(item);
        }) as readonly any[] };
}
export function newDeserializeWebhooks(val: any): Webhooks {
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const nextMarker: undefined | number = isJson(val.next_marker, "number") ? val.next_marker : void 0;
    const prevMarker: undefined | number = isJson(val.prev_marker, "number") ? val.prev_marker : void 0;
    const entries: undefined | readonly WebhookMini[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return newDeserializeWebhookMini(itm);
    }) as readonly any[] : void 0;
    return { limit: limit, nextMarker: nextMarker, prevMarker: prevMarker, entries: entries } satisfies Webhooks;
}
export function newSerializeWebhookTriggersField(val: WebhookTriggersField): Json {
    return val;
}
export function newDeserializeWebhookTriggersField(val: any): WebhookTriggersField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"WebhookTriggersField\"";
    }
    if (val == "FILE.UPLOADED") {
        return "FILE.UPLOADED";
    }
    if (val == "FILE.PREVIEWED") {
        return "FILE.PREVIEWED";
    }
    if (val == "FILE.DOWNLOADED") {
        return "FILE.DOWNLOADED";
    }
    if (val == "FILE.TRASHED") {
        return "FILE.TRASHED";
    }
    if (val == "FILE.DELETED") {
        return "FILE.DELETED";
    }
    if (val == "FILE.RESTORED") {
        return "FILE.RESTORED";
    }
    if (val == "FILE.COPIED") {
        return "FILE.COPIED";
    }
    if (val == "FILE.MOVED") {
        return "FILE.MOVED";
    }
    if (val == "FILE.LOCKED") {
        return "FILE.LOCKED";
    }
    if (val == "FILE.UNLOCKED") {
        return "FILE.UNLOCKED";
    }
    if (val == "FILE.RENAMED") {
        return "FILE.RENAMED";
    }
    if (val == "COMMENT.CREATED") {
        return "COMMENT.CREATED";
    }
    if (val == "COMMENT.UPDATED") {
        return "COMMENT.UPDATED";
    }
    if (val == "COMMENT.DELETED") {
        return "COMMENT.DELETED";
    }
    if (val == "TASK_ASSIGNMENT.CREATED") {
        return "TASK_ASSIGNMENT.CREATED";
    }
    if (val == "TASK_ASSIGNMENT.UPDATED") {
        return "TASK_ASSIGNMENT.UPDATED";
    }
    if (val == "METADATA_INSTANCE.CREATED") {
        return "METADATA_INSTANCE.CREATED";
    }
    if (val == "METADATA_INSTANCE.UPDATED") {
        return "METADATA_INSTANCE.UPDATED";
    }
    if (val == "METADATA_INSTANCE.DELETED") {
        return "METADATA_INSTANCE.DELETED";
    }
    if (val == "FOLDER.CREATED") {
        return "FOLDER.CREATED";
    }
    if (val == "FOLDER.RENAMED") {
        return "FOLDER.RENAMED";
    }
    if (val == "FOLDER.DOWNLOADED") {
        return "FOLDER.DOWNLOADED";
    }
    if (val == "FOLDER.RESTORED") {
        return "FOLDER.RESTORED";
    }
    if (val == "FOLDER.DELETED") {
        return "FOLDER.DELETED";
    }
    if (val == "FOLDER.COPIED") {
        return "FOLDER.COPIED";
    }
    if (val == "FOLDER.MOVED") {
        return "FOLDER.MOVED";
    }
    if (val == "FOLDER.TRASHED") {
        return "FOLDER.TRASHED";
    }
    if (val == "WEBHOOK.DELETED") {
        return "WEBHOOK.DELETED";
    }
    if (val == "COLLABORATION.CREATED") {
        return "COLLABORATION.CREATED";
    }
    if (val == "COLLABORATION.ACCEPTED") {
        return "COLLABORATION.ACCEPTED";
    }
    if (val == "COLLABORATION.REJECTED") {
        return "COLLABORATION.REJECTED";
    }
    if (val == "COLLABORATION.REMOVED") {
        return "COLLABORATION.REMOVED";
    }
    if (val == "COLLABORATION.UPDATED") {
        return "COLLABORATION.UPDATED";
    }
    if (val == "SHARED_LINK.DELETED") {
        return "SHARED_LINK.DELETED";
    }
    if (val == "SHARED_LINK.CREATED") {
        return "SHARED_LINK.CREATED";
    }
    if (val == "SHARED_LINK.UPDATED") {
        return "SHARED_LINK.UPDATED";
    }
    if (val == "SIGN_REQUEST.COMPLETED") {
        return "SIGN_REQUEST.COMPLETED";
    }
    if (val == "SIGN_REQUEST.DECLINED") {
        return "SIGN_REQUEST.DECLINED";
    }
    if (val == "SIGN_REQUEST.EXPIRED") {
        return "SIGN_REQUEST.EXPIRED";
    }
    if (val == "SIGN_REQUEST.SIGNER_EMAIL_BOUNCED") {
        return "SIGN_REQUEST.SIGNER_EMAIL_BOUNCED";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeWebhook(val: Webhook): Json {
    const base: any = newSerializeWebhookMini(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"Webhook\"";
    }
    return { ...base, ...{ ["created_by"]: val.createdBy == void 0 ? void 0 : newSerializeUserMini(val.createdBy), ["created_at"]: val.createdAt, ["address"]: val.address, ["triggers"]: val.triggers == void 0 ? void 0 : val.triggers.map(function (item: WebhookTriggersField): any {
                return newSerializeWebhookTriggersField(item);
            }) as readonly any[] } };
}
export function newDeserializeWebhook(val: any): Webhook {
    const createdBy: undefined | UserMini = val.created_by == void 0 ? void 0 : newDeserializeUserMini(val.created_by);
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const address: undefined | string = isJson(val.address, "string") ? val.address : void 0;
    const triggers: undefined | readonly WebhookTriggersField[] = isJson(val.triggers, "array") ? val.triggers.map(function (itm: Json): any {
        return newDeserializeWebhookTriggersField(itm);
    }) as readonly any[] : void 0;
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | WebhookMiniTypeField = val.type == void 0 ? void 0 : newDeserializeWebhookMiniTypeField(val.type);
    const target: undefined | WebhookMiniTargetField = val.target == void 0 ? void 0 : newDeserializeWebhookMiniTargetField(val.target);
    return { createdBy: createdBy, createdAt: createdAt, address: address, triggers: triggers, id: id, type: type, target: target } satisfies Webhook;
}
export function newSerializeWebLinkBaseTypeField(val: WebLinkBaseTypeField): Json {
    return val;
}
export function newDeserializeWebLinkBaseTypeField(val: any): WebLinkBaseTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"WebLinkBaseTypeField\"";
    }
    if (val == "web_link") {
        return "web_link";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeWebLinkBase(val: WebLinkBase): Json {
    return { ["id"]: val.id, ["type"]: newSerializeWebLinkBaseTypeField(val.type), ["etag"]: val.etag };
}
export function newDeserializeWebLinkBase(val: any): WebLinkBase {
    const id: string = val.id;
    const type: WebLinkBaseTypeField = newDeserializeWebLinkBaseTypeField(val.type);
    const etag: undefined | string = isJson(val.etag, "string") ? val.etag : void 0;
    return { id: id, type: type, etag: etag } satisfies WebLinkBase;
}
export function newSerializeWebLinkMini(val: WebLinkMini): Json {
    const base: any = newSerializeWebLinkBase(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"WebLinkMini\"";
    }
    return { ...base, ...{ ["url"]: val.url, ["sequence_id"]: val.sequenceId, ["name"]: val.name } };
}
export function newDeserializeWebLinkMini(val: any): WebLinkMini {
    const url: undefined | string = isJson(val.url, "string") ? val.url : void 0;
    const sequenceId: undefined | string = isJson(val.sequence_id, "string") ? val.sequence_id : void 0;
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const id: string = val.id;
    const type: WebLinkBaseTypeField = newDeserializeWebLinkBaseTypeField(val.type);
    const etag: undefined | string = isJson(val.etag, "string") ? val.etag : void 0;
    return { url: url, sequenceId: sequenceId, name: name, id: id, type: type, etag: etag } satisfies WebLinkMini;
}
export function newSerializeFileMiniOrFolderMiniOrWebLinkMini(val: FileMiniOrFolderMiniOrWebLinkMini): Json {
    if (val.type == "file") {
        return newSerializeFileMini(val);
    }
    if (val.type == "folder") {
        return newSerializeFolderMini(val);
    }
    if (val.type == "web_link") {
        return newSerializeWebLinkMini(val);
    }
    throw "unknown type";
}
export function newDeserializeFileMiniOrFolderMiniOrWebLinkMini(val: any): FileMiniOrFolderMiniOrWebLinkMini {
    if (!isJson(val, "object")) {
        throw "Expecting an object for \"FileMiniOrFolderMiniOrWebLinkMini\"";
    }
    if (val.type == "file") {
        return newDeserializeFileMini(val);
    }
    if (val.type == "folder") {
        return newDeserializeFolderMini(val);
    }
    if (val.type == "web_link") {
        return newDeserializeWebLinkMini(val);
    }
    throw "unknown type";
}
export function newSerializeItemsOrderFieldDirectionField(val: ItemsOrderFieldDirectionField): Json {
    return val;
}
export function newDeserializeItemsOrderFieldDirectionField(val: any): ItemsOrderFieldDirectionField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"ItemsOrderFieldDirectionField\"";
    }
    if (val == "ASC") {
        return "ASC";
    }
    if (val == "DESC") {
        return "DESC";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeItemsOrderField(val: ItemsOrderField): Json {
    return { ["by"]: val.by, ["direction"]: val.direction == void 0 ? void 0 : newSerializeItemsOrderFieldDirectionField(val.direction) };
}
export function newDeserializeItemsOrderField(val: any): ItemsOrderField {
    const by: undefined | string = isJson(val.by, "string") ? val.by : void 0;
    const direction: undefined | ItemsOrderFieldDirectionField = val.direction == void 0 ? void 0 : newDeserializeItemsOrderFieldDirectionField(val.direction);
    return { by: by, direction: direction } satisfies ItemsOrderField;
}
export function newSerializeItems(val: Items): Json {
    return { ["total_count"]: val.totalCount, ["limit"]: val.limit, ["offset"]: val.offset, ["order"]: val.order == void 0 ? void 0 : val.order.map(function (item: ItemsOrderField): any {
            return newSerializeItemsOrderField(item);
        }) as readonly any[], ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: FileMiniOrFolderMiniOrWebLinkMini): any {
            return newSerializeFileMiniOrFolderMiniOrWebLinkMini(item);
        }) as readonly any[] };
}
export function newDeserializeItems(val: any): Items {
    const totalCount: undefined | number = isJson(val.total_count, "number") ? val.total_count : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const offset: undefined | number = isJson(val.offset, "number") ? val.offset : void 0;
    const order: undefined | readonly ItemsOrderField[] = isJson(val.order, "array") ? val.order.map(function (itm: Json): any {
        return newDeserializeItemsOrderField(itm);
    }) as readonly any[] : void 0;
    const entries: undefined | readonly FileMiniOrFolderMiniOrWebLinkMini[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return newDeserializeFileMiniOrFolderMiniOrWebLinkMini(itm);
    }) as readonly any[] : void 0;
    return { totalCount: totalCount, limit: limit, offset: offset, order: order, entries: entries } satisfies Items;
}
export function newSerializeFolderPathCollectionField(val: FolderPathCollectionField): Json {
    return { ["total_count"]: val.totalCount, ["entries"]: val.entries.map(function (item: FolderMini): any {
            return newSerializeFolderMini(item);
        }) as readonly any[] };
}
export function newDeserializeFolderPathCollectionField(val: any): FolderPathCollectionField {
    const totalCount: number = val.total_count;
    const entries: readonly FolderMini[] = val.entries.map(function (itm: Json): any {
        return newDeserializeFolderMini(itm);
    }) as readonly any[];
    return { totalCount: totalCount, entries: entries } satisfies FolderPathCollectionField;
}
export function newSerializeFolderSharedLinkFieldAccessField(val: FolderSharedLinkFieldAccessField): Json {
    return val;
}
export function newDeserializeFolderSharedLinkFieldAccessField(val: any): FolderSharedLinkFieldAccessField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"FolderSharedLinkFieldAccessField\"";
    }
    if (val == "open") {
        return "open";
    }
    if (val == "company") {
        return "company";
    }
    if (val == "collaborators") {
        return "collaborators";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeFolderSharedLinkFieldEffectiveAccessField(val: FolderSharedLinkFieldEffectiveAccessField): Json {
    return val;
}
export function newDeserializeFolderSharedLinkFieldEffectiveAccessField(val: any): FolderSharedLinkFieldEffectiveAccessField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"FolderSharedLinkFieldEffectiveAccessField\"";
    }
    if (val == "open") {
        return "open";
    }
    if (val == "company") {
        return "company";
    }
    if (val == "collaborators") {
        return "collaborators";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeFolderSharedLinkFieldEffectivePermissionField(val: FolderSharedLinkFieldEffectivePermissionField): Json {
    return val;
}
export function newDeserializeFolderSharedLinkFieldEffectivePermissionField(val: any): FolderSharedLinkFieldEffectivePermissionField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"FolderSharedLinkFieldEffectivePermissionField\"";
    }
    if (val == "can_edit") {
        return "can_edit";
    }
    if (val == "can_download") {
        return "can_download";
    }
    if (val == "can_preview") {
        return "can_preview";
    }
    if (val == "no_access") {
        return "no_access";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeFolderSharedLinkFieldPermissionsField(val: FolderSharedLinkFieldPermissionsField): Json {
    return { ["can_download"]: val.canDownload, ["can_preview"]: val.canPreview, ["can_edit"]: val.canEdit };
}
export function newDeserializeFolderSharedLinkFieldPermissionsField(val: any): FolderSharedLinkFieldPermissionsField {
    const canDownload: boolean = val.can_download;
    const canPreview: boolean = val.can_preview;
    const canEdit: boolean = val.can_edit;
    return { canDownload: canDownload, canPreview: canPreview, canEdit: canEdit } satisfies FolderSharedLinkFieldPermissionsField;
}
export function newSerializeFolderSharedLinkField(val: FolderSharedLinkField): Json {
    return { ["url"]: val.url, ["download_url"]: val.downloadUrl, ["vanity_url"]: val.vanityUrl, ["vanity_name"]: val.vanityName, ["access"]: val.access == void 0 ? void 0 : newSerializeFolderSharedLinkFieldAccessField(val.access), ["effective_access"]: newSerializeFolderSharedLinkFieldEffectiveAccessField(val.effectiveAccess), ["effective_permission"]: newSerializeFolderSharedLinkFieldEffectivePermissionField(val.effectivePermission), ["unshared_at"]: val.unsharedAt, ["is_password_enabled"]: val.isPasswordEnabled, ["permissions"]: val.permissions == void 0 ? void 0 : newSerializeFolderSharedLinkFieldPermissionsField(val.permissions), ["download_count"]: val.downloadCount, ["preview_count"]: val.previewCount };
}
export function newDeserializeFolderSharedLinkField(val: any): FolderSharedLinkField {
    const url: string = val.url;
    const downloadUrl: undefined | string = isJson(val.download_url, "string") ? val.download_url : void 0;
    const vanityUrl: undefined | string = isJson(val.vanity_url, "string") ? val.vanity_url : void 0;
    const vanityName: undefined | string = isJson(val.vanity_name, "string") ? val.vanity_name : void 0;
    const access: undefined | FolderSharedLinkFieldAccessField = val.access == void 0 ? void 0 : newDeserializeFolderSharedLinkFieldAccessField(val.access);
    const effectiveAccess: FolderSharedLinkFieldEffectiveAccessField = newDeserializeFolderSharedLinkFieldEffectiveAccessField(val.effective_access);
    const effectivePermission: FolderSharedLinkFieldEffectivePermissionField = newDeserializeFolderSharedLinkFieldEffectivePermissionField(val.effective_permission);
    const unsharedAt: undefined | string = isJson(val.unshared_at, "string") ? val.unshared_at : void 0;
    const isPasswordEnabled: boolean = val.is_password_enabled;
    const permissions: undefined | FolderSharedLinkFieldPermissionsField = val.permissions == void 0 ? void 0 : newDeserializeFolderSharedLinkFieldPermissionsField(val.permissions);
    const downloadCount: number = val.download_count;
    const previewCount: number = val.preview_count;
    return { url: url, downloadUrl: downloadUrl, vanityUrl: vanityUrl, vanityName: vanityName, access: access, effectiveAccess: effectiveAccess, effectivePermission: effectivePermission, unsharedAt: unsharedAt, isPasswordEnabled: isPasswordEnabled, permissions: permissions, downloadCount: downloadCount, previewCount: previewCount } satisfies FolderSharedLinkField;
}
export function newSerializeFolderFolderUploadEmailFieldAccessField(val: FolderFolderUploadEmailFieldAccessField): Json {
    return val;
}
export function newDeserializeFolderFolderUploadEmailFieldAccessField(val: any): FolderFolderUploadEmailFieldAccessField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"FolderFolderUploadEmailFieldAccessField\"";
    }
    if (val == "open") {
        return "open";
    }
    if (val == "collaborators") {
        return "collaborators";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeFolderFolderUploadEmailField(val: FolderFolderUploadEmailField): Json {
    return { ["access"]: val.access == void 0 ? void 0 : newSerializeFolderFolderUploadEmailFieldAccessField(val.access), ["email"]: val.email };
}
export function newDeserializeFolderFolderUploadEmailField(val: any): FolderFolderUploadEmailField {
    const access: undefined | FolderFolderUploadEmailFieldAccessField = val.access == void 0 ? void 0 : newDeserializeFolderFolderUploadEmailFieldAccessField(val.access);
    const email: undefined | string = isJson(val.email, "string") ? val.email : void 0;
    return { access: access, email: email } satisfies FolderFolderUploadEmailField;
}
export function newSerializeFolderItemStatusField(val: FolderItemStatusField): Json {
    return val;
}
export function newDeserializeFolderItemStatusField(val: any): FolderItemStatusField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"FolderItemStatusField\"";
    }
    if (val == "active") {
        return "active";
    }
    if (val == "trashed") {
        return "trashed";
    }
    if (val == "deleted") {
        return "deleted";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeFolder(val: Folder): Json {
    const base: any = newSerializeFolderMini(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"Folder\"";
    }
    return { ...base, ...{ ["created_at"]: val.createdAt, ["modified_at"]: val.modifiedAt, ["description"]: val.description, ["size"]: val.size, ["path_collection"]: val.pathCollection == void 0 ? void 0 : newSerializeFolderPathCollectionField(val.pathCollection), ["created_by"]: val.createdBy == void 0 ? void 0 : newSerializeUserMini(val.createdBy), ["modified_by"]: val.modifiedBy == void 0 ? void 0 : newSerializeUserMini(val.modifiedBy), ["trashed_at"]: val.trashedAt, ["purged_at"]: val.purgedAt, ["content_created_at"]: val.contentCreatedAt, ["content_modified_at"]: val.contentModifiedAt, ["owned_by"]: val.ownedBy == void 0 ? void 0 : newSerializeUserMini(val.ownedBy), ["shared_link"]: val.sharedLink == void 0 ? void 0 : newSerializeFolderSharedLinkField(val.sharedLink), ["folder_upload_email"]: val.folderUploadEmail == void 0 ? void 0 : newSerializeFolderFolderUploadEmailField(val.folderUploadEmail), ["parent"]: val.parent == void 0 ? void 0 : newSerializeFolderMini(val.parent), ["item_status"]: val.itemStatus == void 0 ? void 0 : newSerializeFolderItemStatusField(val.itemStatus), ["item_collection"]: val.itemCollection == void 0 ? void 0 : newSerializeItems(val.itemCollection) } };
}
export function newDeserializeFolder(val: any): Folder {
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const modifiedAt: undefined | string = isJson(val.modified_at, "string") ? val.modified_at : void 0;
    const description: undefined | string = isJson(val.description, "string") ? val.description : void 0;
    const size: undefined | number = isJson(val.size, "number") ? val.size : void 0;
    const pathCollection: undefined | FolderPathCollectionField = val.path_collection == void 0 ? void 0 : newDeserializeFolderPathCollectionField(val.path_collection);
    const createdBy: undefined | UserMini = val.created_by == void 0 ? void 0 : newDeserializeUserMini(val.created_by);
    const modifiedBy: undefined | UserMini = val.modified_by == void 0 ? void 0 : newDeserializeUserMini(val.modified_by);
    const trashedAt: undefined | string = isJson(val.trashed_at, "string") ? val.trashed_at : void 0;
    const purgedAt: undefined | string = isJson(val.purged_at, "string") ? val.purged_at : void 0;
    const contentCreatedAt: undefined | string = isJson(val.content_created_at, "string") ? val.content_created_at : void 0;
    const contentModifiedAt: undefined | string = isJson(val.content_modified_at, "string") ? val.content_modified_at : void 0;
    const ownedBy: undefined | UserMini = val.owned_by == void 0 ? void 0 : newDeserializeUserMini(val.owned_by);
    const sharedLink: undefined | FolderSharedLinkField = val.shared_link == void 0 ? void 0 : newDeserializeFolderSharedLinkField(val.shared_link);
    const folderUploadEmail: undefined | FolderFolderUploadEmailField = val.folder_upload_email == void 0 ? void 0 : newDeserializeFolderFolderUploadEmailField(val.folder_upload_email);
    const parent: undefined | FolderMini = val.parent == void 0 ? void 0 : newDeserializeFolderMini(val.parent);
    const itemStatus: undefined | FolderItemStatusField = val.item_status == void 0 ? void 0 : newDeserializeFolderItemStatusField(val.item_status);
    const itemCollection: undefined | Items = val.item_collection == void 0 ? void 0 : newDeserializeItems(val.item_collection);
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const sequenceId: undefined | string = isJson(val.sequence_id, "string") ? val.sequence_id : void 0;
    const id: string = val.id;
    const etag: undefined | string = isJson(val.etag, "string") ? val.etag : void 0;
    const type: FolderBaseTypeField = newDeserializeFolderBaseTypeField(val.type);
    return { createdAt: createdAt, modifiedAt: modifiedAt, description: description, size: size, pathCollection: pathCollection, createdBy: createdBy, modifiedBy: modifiedBy, trashedAt: trashedAt, purgedAt: purgedAt, contentCreatedAt: contentCreatedAt, contentModifiedAt: contentModifiedAt, ownedBy: ownedBy, sharedLink: sharedLink, folderUploadEmail: folderUploadEmail, parent: parent, itemStatus: itemStatus, itemCollection: itemCollection, name: name, sequenceId: sequenceId, id: id, etag: etag, type: type } satisfies Folder;
}
export function newSerializeEventSourceOrFileOrFolderOrUser(val: EventSourceOrFileOrFolderOrUser): Json {
    throw "Can't serialize EventSourceOrFileOrFolderOrUser";
}
export function newDeserializeEventSourceOrFileOrFolderOrUser(val: any): EventSourceOrFileOrFolderOrUser {
    throw "Can't deserialize EventSourceOrFileOrFolderOrUser";
}
export function newSerializeEventEventTypeField(val: EventEventTypeField): Json {
    return val;
}
export function newDeserializeEventEventTypeField(val: any): EventEventTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"EventEventTypeField\"";
    }
    if (val == "ACCESS_GRANTED") {
        return "ACCESS_GRANTED";
    }
    if (val == "ACCESS_REVOKED") {
        return "ACCESS_REVOKED";
    }
    if (val == "ADD_DEVICE_ASSOCIATION") {
        return "ADD_DEVICE_ASSOCIATION";
    }
    if (val == "ADD_LOGIN_ACTIVITY_DEVICE") {
        return "ADD_LOGIN_ACTIVITY_DEVICE";
    }
    if (val == "ADMIN_LOGIN") {
        return "ADMIN_LOGIN";
    }
    if (val == "APPLICATION_CREATED") {
        return "APPLICATION_CREATED";
    }
    if (val == "APPLICATION_PUBLIC_KEY_ADDED") {
        return "APPLICATION_PUBLIC_KEY_ADDED";
    }
    if (val == "APPLICATION_PUBLIC_KEY_DELETED") {
        return "APPLICATION_PUBLIC_KEY_DELETED";
    }
    if (val == "CHANGE_ADMIN_ROLE") {
        return "CHANGE_ADMIN_ROLE";
    }
    if (val == "CHANGE_FOLDER_PERMISSION") {
        return "CHANGE_FOLDER_PERMISSION";
    }
    if (val == "COLLABORATION_ACCEPT") {
        return "COLLABORATION_ACCEPT";
    }
    if (val == "COLLABORATION_EXPIRATION") {
        return "COLLABORATION_EXPIRATION";
    }
    if (val == "COLLABORATION_INVITE") {
        return "COLLABORATION_INVITE";
    }
    if (val == "COLLABORATION_REMOVE") {
        return "COLLABORATION_REMOVE";
    }
    if (val == "COLLABORATION_ROLE_CHANGE") {
        return "COLLABORATION_ROLE_CHANGE";
    }
    if (val == "COLLAB_ADD_COLLABORATOR") {
        return "COLLAB_ADD_COLLABORATOR";
    }
    if (val == "COLLAB_INVITE_COLLABORATOR") {
        return "COLLAB_INVITE_COLLABORATOR";
    }
    if (val == "COLLAB_REMOVE_COLLABORATOR") {
        return "COLLAB_REMOVE_COLLABORATOR";
    }
    if (val == "COLLAB_ROLE_CHANGE") {
        return "COLLAB_ROLE_CHANGE";
    }
    if (val == "COMMENT_CREATE") {
        return "COMMENT_CREATE";
    }
    if (val == "COMMENT_DELETE") {
        return "COMMENT_DELETE";
    }
    if (val == "CONTENT_ACCESS") {
        return "CONTENT_ACCESS";
    }
    if (val == "CONTENT_WORKFLOW_ABNORMAL_DOWNLOAD_ACTIVITY") {
        return "CONTENT_WORKFLOW_ABNORMAL_DOWNLOAD_ACTIVITY";
    }
    if (val == "CONTENT_WORKFLOW_AUTOMATION_ADD") {
        return "CONTENT_WORKFLOW_AUTOMATION_ADD";
    }
    if (val == "CONTENT_WORKFLOW_AUTOMATION_DELETE") {
        return "CONTENT_WORKFLOW_AUTOMATION_DELETE";
    }
    if (val == "CONTENT_WORKFLOW_POLICY_ADD") {
        return "CONTENT_WORKFLOW_POLICY_ADD";
    }
    if (val == "CONTENT_WORKFLOW_SHARING_POLICY_VIOLATION") {
        return "CONTENT_WORKFLOW_SHARING_POLICY_VIOLATION";
    }
    if (val == "CONTENT_WORKFLOW_UPLOAD_POLICY_VIOLATION") {
        return "CONTENT_WORKFLOW_UPLOAD_POLICY_VIOLATION";
    }
    if (val == "COPY") {
        return "COPY";
    }
    if (val == "DATA_RETENTION_CREATE_RETENTION") {
        return "DATA_RETENTION_CREATE_RETENTION";
    }
    if (val == "DATA_RETENTION_REMOVE_RETENTION") {
        return "DATA_RETENTION_REMOVE_RETENTION";
    }
    if (val == "DELETE") {
        return "DELETE";
    }
    if (val == "DELETE_USER") {
        return "DELETE_USER";
    }
    if (val == "DEVICE_TRUST_CHECK_FAILED") {
        return "DEVICE_TRUST_CHECK_FAILED";
    }
    if (val == "DOWNLOAD") {
        return "DOWNLOAD";
    }
    if (val == "EDIT") {
        return "EDIT";
    }
    if (val == "EDIT_USER") {
        return "EDIT_USER";
    }
    if (val == "EMAIL_ALIAS_CONFIRM") {
        return "EMAIL_ALIAS_CONFIRM";
    }
    if (val == "EMAIL_ALIAS_REMOVE") {
        return "EMAIL_ALIAS_REMOVE";
    }
    if (val == "ENABLE_TWO_FACTOR_AUTH") {
        return "ENABLE_TWO_FACTOR_AUTH";
    }
    if (val == "ENTERPRISE_APP_AUTHORIZATION_UPDATE") {
        return "ENTERPRISE_APP_AUTHORIZATION_UPDATE";
    }
    if (val == "FAILED_LOGIN") {
        return "FAILED_LOGIN";
    }
    if (val == "FILE_MARKED_MALICIOUS") {
        return "FILE_MARKED_MALICIOUS";
    }
    if (val == "FILE_WATERMARKED_DOWNLOAD") {
        return "FILE_WATERMARKED_DOWNLOAD";
    }
    if (val == "GROUP_ADD_ITEM") {
        return "GROUP_ADD_ITEM";
    }
    if (val == "GROUP_ADD_USER") {
        return "GROUP_ADD_USER";
    }
    if (val == "GROUP_CREATION") {
        return "GROUP_CREATION";
    }
    if (val == "GROUP_DELETION") {
        return "GROUP_DELETION";
    }
    if (val == "GROUP_EDITED") {
        return "GROUP_EDITED";
    }
    if (val == "GROUP_REMOVE_ITEM") {
        return "GROUP_REMOVE_ITEM";
    }
    if (val == "GROUP_REMOVE_USER") {
        return "GROUP_REMOVE_USER";
    }
    if (val == "ITEM_COPY") {
        return "ITEM_COPY";
    }
    if (val == "ITEM_CREATE") {
        return "ITEM_CREATE";
    }
    if (val == "ITEM_DOWNLOAD") {
        return "ITEM_DOWNLOAD";
    }
    if (val == "ITEM_MAKE_CURRENT_VERSION") {
        return "ITEM_MAKE_CURRENT_VERSION";
    }
    if (val == "ITEM_MODIFY") {
        return "ITEM_MODIFY";
    }
    if (val == "ITEM_MOVE") {
        return "ITEM_MOVE";
    }
    if (val == "ITEM_OPEN") {
        return "ITEM_OPEN";
    }
    if (val == "ITEM_PREVIEW") {
        return "ITEM_PREVIEW";
    }
    if (val == "ITEM_RENAME") {
        return "ITEM_RENAME";
    }
    if (val == "ITEM_SHARED") {
        return "ITEM_SHARED";
    }
    if (val == "ITEM_SHARED_CREATE") {
        return "ITEM_SHARED_CREATE";
    }
    if (val == "ITEM_SHARED_UNSHARE") {
        return "ITEM_SHARED_UNSHARE";
    }
    if (val == "ITEM_SHARED_UPDATE") {
        return "ITEM_SHARED_UPDATE";
    }
    if (val == "ITEM_SYNC") {
        return "ITEM_SYNC";
    }
    if (val == "ITEM_TRASH") {
        return "ITEM_TRASH";
    }
    if (val == "ITEM_UNDELETE_VIA_TRASH") {
        return "ITEM_UNDELETE_VIA_TRASH";
    }
    if (val == "ITEM_UNSYNC") {
        return "ITEM_UNSYNC";
    }
    if (val == "ITEM_UPLOAD") {
        return "ITEM_UPLOAD";
    }
    if (val == "LEGAL_HOLD_ASSIGNMENT_CREATE") {
        return "LEGAL_HOLD_ASSIGNMENT_CREATE";
    }
    if (val == "LEGAL_HOLD_ASSIGNMENT_DELETE") {
        return "LEGAL_HOLD_ASSIGNMENT_DELETE";
    }
    if (val == "LEGAL_HOLD_POLICY_CREATE") {
        return "LEGAL_HOLD_POLICY_CREATE";
    }
    if (val == "LEGAL_HOLD_POLICY_DELETE") {
        return "LEGAL_HOLD_POLICY_DELETE";
    }
    if (val == "LEGAL_HOLD_POLICY_UPDATE") {
        return "LEGAL_HOLD_POLICY_UPDATE";
    }
    if (val == "LOCK") {
        return "LOCK";
    }
    if (val == "LOCK_CREATE") {
        return "LOCK_CREATE";
    }
    if (val == "LOCK_DESTROY") {
        return "LOCK_DESTROY";
    }
    if (val == "LOGIN") {
        return "LOGIN";
    }
    if (val == "MASTER_INVITE_ACCEPT") {
        return "MASTER_INVITE_ACCEPT";
    }
    if (val == "MASTER_INVITE_REJECT") {
        return "MASTER_INVITE_REJECT";
    }
    if (val == "METADATA_INSTANCE_CREATE") {
        return "METADATA_INSTANCE_CREATE";
    }
    if (val == "METADATA_INSTANCE_DELETE") {
        return "METADATA_INSTANCE_DELETE";
    }
    if (val == "METADATA_INSTANCE_UPDATE") {
        return "METADATA_INSTANCE_UPDATE";
    }
    if (val == "METADATA_TEMPLATE_CREATE") {
        return "METADATA_TEMPLATE_CREATE";
    }
    if (val == "METADATA_TEMPLATE_DELETE") {
        return "METADATA_TEMPLATE_DELETE";
    }
    if (val == "METADATA_TEMPLATE_UPDATE") {
        return "METADATA_TEMPLATE_UPDATE";
    }
    if (val == "MOVE") {
        return "MOVE";
    }
    if (val == "NEW_USER") {
        return "NEW_USER";
    }
    if (val == "PREVIEW") {
        return "PREVIEW";
    }
    if (val == "REMOVE_DEVICE_ASSOCIATION") {
        return "REMOVE_DEVICE_ASSOCIATION";
    }
    if (val == "REMOVE_LOGIN_ACTIVITY_DEVICE") {
        return "REMOVE_LOGIN_ACTIVITY_DEVICE";
    }
    if (val == "RENAME") {
        return "RENAME";
    }
    if (val == "RETENTION_POLICY_ASSIGNMENT_ADD") {
        return "RETENTION_POLICY_ASSIGNMENT_ADD";
    }
    if (val == "SHARE") {
        return "SHARE";
    }
    if (val == "SHARE_EXPIRATION") {
        return "SHARE_EXPIRATION";
    }
    if (val == "SHIELD_ALERT") {
        return "SHIELD_ALERT";
    }
    if (val == "SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED") {
        return "SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED";
    }
    if (val == "SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED_MISSING_JUSTIFICATION") {
        return "SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED_MISSING_JUSTIFICATION";
    }
    if (val == "SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED") {
        return "SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED";
    }
    if (val == "SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED_MISSING_JUSTIFICATION") {
        return "SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED_MISSING_JUSTIFICATION";
    }
    if (val == "SHIELD_JUSTIFICATION_APPROVAL") {
        return "SHIELD_JUSTIFICATION_APPROVAL";
    }
    if (val == "SHIELD_SHARED_LINK_ACCESS_BLOCKED") {
        return "SHIELD_SHARED_LINK_ACCESS_BLOCKED";
    }
    if (val == "SHIELD_SHARED_LINK_STATUS_RESTRICTED_ON_CREATE") {
        return "SHIELD_SHARED_LINK_STATUS_RESTRICTED_ON_CREATE";
    }
    if (val == "SHIELD_SHARED_LINK_STATUS_RESTRICTED_ON_UPDATE") {
        return "SHIELD_SHARED_LINK_STATUS_RESTRICTED_ON_UPDATE";
    }
    if (val == "SIGN_DOCUMENT_ASSIGNED") {
        return "SIGN_DOCUMENT_ASSIGNED";
    }
    if (val == "SIGN_DOCUMENT_CANCELLED") {
        return "SIGN_DOCUMENT_CANCELLED";
    }
    if (val == "SIGN_DOCUMENT_COMPLETED") {
        return "SIGN_DOCUMENT_COMPLETED";
    }
    if (val == "SIGN_DOCUMENT_CONVERTED") {
        return "SIGN_DOCUMENT_CONVERTED";
    }
    if (val == "SIGN_DOCUMENT_CREATED") {
        return "SIGN_DOCUMENT_CREATED";
    }
    if (val == "SIGN_DOCUMENT_DECLINED") {
        return "SIGN_DOCUMENT_DECLINED";
    }
    if (val == "SIGN_DOCUMENT_EXPIRED") {
        return "SIGN_DOCUMENT_EXPIRED";
    }
    if (val == "SIGN_DOCUMENT_SIGNED") {
        return "SIGN_DOCUMENT_SIGNED";
    }
    if (val == "SIGN_DOCUMENT_VIEWED_BY_SIGNED") {
        return "SIGN_DOCUMENT_VIEWED_BY_SIGNED";
    }
    if (val == "SIGNER_DOWNLOADED") {
        return "SIGNER_DOWNLOADED";
    }
    if (val == "SIGNER_FORWARDED") {
        return "SIGNER_FORWARDED";
    }
    if (val == "STORAGE_EXPIRATION") {
        return "STORAGE_EXPIRATION";
    }
    if (val == "TAG_ITEM_CREATE") {
        return "TAG_ITEM_CREATE";
    }
    if (val == "TASK_ASSIGNMENT_CREATE") {
        return "TASK_ASSIGNMENT_CREATE";
    }
    if (val == "TASK_ASSIGNMENT_DELETE") {
        return "TASK_ASSIGNMENT_DELETE";
    }
    if (val == "TASK_ASSIGNMENT_UPDATE") {
        return "TASK_ASSIGNMENT_UPDATE";
    }
    if (val == "TASK_CREATE") {
        return "TASK_CREATE";
    }
    if (val == "TASK_UPDATE") {
        return "TASK_UPDATE";
    }
    if (val == "TERMS_OF_SERVICE_ACCEPT") {
        return "TERMS_OF_SERVICE_ACCEPT";
    }
    if (val == "TERMS_OF_SERVICE_REJECT") {
        return "TERMS_OF_SERVICE_REJECT";
    }
    if (val == "UNDELETE") {
        return "UNDELETE";
    }
    if (val == "UNLOCK") {
        return "UNLOCK";
    }
    if (val == "UNSHARE") {
        return "UNSHARE";
    }
    if (val == "UPDATE_COLLABORATION_EXPIRATION") {
        return "UPDATE_COLLABORATION_EXPIRATION";
    }
    if (val == "UPDATE_SHARE_EXPIRATION") {
        return "UPDATE_SHARE_EXPIRATION";
    }
    if (val == "UPLOAD") {
        return "UPLOAD";
    }
    if (val == "USER_AUTHENTICATE_OAUTH2_ACCESS_TOKEN_CREATE") {
        return "USER_AUTHENTICATE_OAUTH2_ACCESS_TOKEN_CREATE";
    }
    if (val == "WATERMARK_LABEL_CREATE") {
        return "WATERMARK_LABEL_CREATE";
    }
    if (val == "WATERMARK_LABEL_DELETE") {
        return "WATERMARK_LABEL_DELETE";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeEventAdditionalDetailsField(val: EventAdditionalDetailsField): Json {
    return {};
}
export function newDeserializeEventAdditionalDetailsField(val: any): EventAdditionalDetailsField {
    return {} satisfies EventAdditionalDetailsField;
}
export function newSerializeEvent(val: Event): Json {
    return { ["type"]: val.type, ["created_at"]: val.createdAt, ["recorded_at"]: val.recordedAt, ["event_id"]: val.eventId, ["created_by"]: val.createdBy == void 0 ? void 0 : newSerializeUserMini(val.createdBy), ["event_type"]: val.eventType == void 0 ? void 0 : newSerializeEventEventTypeField(val.eventType), ["session_id"]: val.sessionId, ["source"]: val.source == void 0 ? void 0 : newSerializeEventSourceOrFileOrFolderOrUser(val.source), ["additional_details"]: val.additionalDetails == void 0 ? void 0 : newSerializeEventAdditionalDetailsField(val.additionalDetails) };
}
export function newDeserializeEvent(val: any): Event {
    const type: undefined | string = isJson(val.type, "string") ? val.type : void 0;
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const recordedAt: undefined | string = isJson(val.recorded_at, "string") ? val.recorded_at : void 0;
    const eventId: undefined | string = isJson(val.event_id, "string") ? val.event_id : void 0;
    const createdBy: undefined | UserMini = val.created_by == void 0 ? void 0 : newDeserializeUserMini(val.created_by);
    const eventType: undefined | EventEventTypeField = val.event_type == void 0 ? void 0 : newDeserializeEventEventTypeField(val.event_type);
    const sessionId: undefined | string = isJson(val.session_id, "string") ? val.session_id : void 0;
    const source: undefined | EventSourceOrFileOrFolderOrUser = val.source == void 0 ? void 0 : newDeserializeEventSourceOrFileOrFolderOrUser(val.source);
    const additionalDetails: undefined | EventAdditionalDetailsField = val.additional_details == void 0 ? void 0 : newDeserializeEventAdditionalDetailsField(val.additional_details);
    return { type: type, createdAt: createdAt, recordedAt: recordedAt, eventId: eventId, createdBy: createdBy, eventType: eventType, sessionId: sessionId, source: source, additionalDetails: additionalDetails } satisfies Event;
}
export function newSerializeEvents(val: Events): Json {
    return { ["chunk_size"]: val.chunkSize, ["next_stream_position"]: val.nextStreamPosition, ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: Event): any {
            return newSerializeEvent(item);
        }) as readonly any[] };
}
export function newDeserializeEvents(val: any): Events {
    const chunkSize: undefined | number = isJson(val.chunk_size, "number") ? val.chunk_size : void 0;
    const nextStreamPosition: undefined | string = isJson(val.next_stream_position, "string") ? val.next_stream_position : void 0;
    const entries: undefined | readonly Event[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return newDeserializeEvent(itm);
    }) as readonly any[] : void 0;
    return { chunkSize: chunkSize, nextStreamPosition: nextStreamPosition, entries: entries } satisfies Events;
}
export function newSerializeFileOrFolder(val: FileOrFolder): Json {
    if (val.type == "file") {
        return newSerializeFile(val);
    }
    if (val.type == "folder") {
        return newSerializeFolder(val);
    }
    throw "unknown type";
}
export function newDeserializeFileOrFolder(val: any): FileOrFolder {
    if (!isJson(val, "object")) {
        throw "Expecting an object for \"FileOrFolder\"";
    }
    if (val.type == "file") {
        return newDeserializeFile(val);
    }
    if (val.type == "folder") {
        return newDeserializeFolder(val);
    }
    throw "unknown type";
}
export function newSerializeMetadataQueryResults(val: MetadataQueryResults): Json {
    return { ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: FileOrFolder): any {
            return newSerializeFileOrFolder(item);
        }) as readonly any[], ["limit"]: val.limit, ["next_marker"]: val.nextMarker };
}
export function newDeserializeMetadataQueryResults(val: any): MetadataQueryResults {
    const entries: undefined | readonly FileOrFolder[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return newDeserializeFileOrFolder(itm);
    }) as readonly any[] : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const nextMarker: undefined | string = isJson(val.next_marker, "string") ? val.next_marker : void 0;
    return { entries: entries, limit: limit, nextMarker: nextMarker } satisfies MetadataQueryResults;
}
export function newSerializeWebhookInvocationTypeField(val: WebhookInvocationTypeField): Json {
    return val;
}
export function newDeserializeWebhookInvocationTypeField(val: any): WebhookInvocationTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"WebhookInvocationTypeField\"";
    }
    if (val == "webhook_event") {
        return "webhook_event";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeWebhookInvocationTriggerField(val: WebhookInvocationTriggerField): Json {
    return val;
}
export function newDeserializeWebhookInvocationTriggerField(val: any): WebhookInvocationTriggerField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"WebhookInvocationTriggerField\"";
    }
    if (val == "FILE.UPLOADED") {
        return "FILE.UPLOADED";
    }
    if (val == "FILE.PREVIEWED") {
        return "FILE.PREVIEWED";
    }
    if (val == "FILE.DOWNLOADED") {
        return "FILE.DOWNLOADED";
    }
    if (val == "FILE.TRASHED") {
        return "FILE.TRASHED";
    }
    if (val == "FILE.DELETED") {
        return "FILE.DELETED";
    }
    if (val == "FILE.RESTORED") {
        return "FILE.RESTORED";
    }
    if (val == "FILE.COPIED") {
        return "FILE.COPIED";
    }
    if (val == "FILE.MOVED") {
        return "FILE.MOVED";
    }
    if (val == "FILE.LOCKED") {
        return "FILE.LOCKED";
    }
    if (val == "FILE.UNLOCKED") {
        return "FILE.UNLOCKED";
    }
    if (val == "FILE.RENAMED") {
        return "FILE.RENAMED";
    }
    if (val == "COMMENT.CREATED") {
        return "COMMENT.CREATED";
    }
    if (val == "COMMENT.UPDATED") {
        return "COMMENT.UPDATED";
    }
    if (val == "COMMENT.DELETED") {
        return "COMMENT.DELETED";
    }
    if (val == "TASK_ASSIGNMENT.CREATED") {
        return "TASK_ASSIGNMENT.CREATED";
    }
    if (val == "TASK_ASSIGNMENT.UPDATED") {
        return "TASK_ASSIGNMENT.UPDATED";
    }
    if (val == "METADATA_INSTANCE.CREATED") {
        return "METADATA_INSTANCE.CREATED";
    }
    if (val == "METADATA_INSTANCE.UPDATED") {
        return "METADATA_INSTANCE.UPDATED";
    }
    if (val == "METADATA_INSTANCE.DELETED") {
        return "METADATA_INSTANCE.DELETED";
    }
    if (val == "FOLDER.CREATED") {
        return "FOLDER.CREATED";
    }
    if (val == "FOLDER.RENAMED") {
        return "FOLDER.RENAMED";
    }
    if (val == "FOLDER.DOWNLOADED") {
        return "FOLDER.DOWNLOADED";
    }
    if (val == "FOLDER.RESTORED") {
        return "FOLDER.RESTORED";
    }
    if (val == "FOLDER.DELETED") {
        return "FOLDER.DELETED";
    }
    if (val == "FOLDER.COPIED") {
        return "FOLDER.COPIED";
    }
    if (val == "FOLDER.MOVED") {
        return "FOLDER.MOVED";
    }
    if (val == "FOLDER.TRASHED") {
        return "FOLDER.TRASHED";
    }
    if (val == "WEBHOOK.DELETED") {
        return "WEBHOOK.DELETED";
    }
    if (val == "COLLABORATION.CREATED") {
        return "COLLABORATION.CREATED";
    }
    if (val == "COLLABORATION.ACCEPTED") {
        return "COLLABORATION.ACCEPTED";
    }
    if (val == "COLLABORATION.REJECTED") {
        return "COLLABORATION.REJECTED";
    }
    if (val == "COLLABORATION.REMOVED") {
        return "COLLABORATION.REMOVED";
    }
    if (val == "COLLABORATION.UPDATED") {
        return "COLLABORATION.UPDATED";
    }
    if (val == "SHARED_LINK.DELETED") {
        return "SHARED_LINK.DELETED";
    }
    if (val == "SHARED_LINK.CREATED") {
        return "SHARED_LINK.CREATED";
    }
    if (val == "SHARED_LINK.UPDATED") {
        return "SHARED_LINK.UPDATED";
    }
    if (val == "SIGN_REQUEST.COMPLETED") {
        return "SIGN_REQUEST.COMPLETED";
    }
    if (val == "SIGN_REQUEST.DECLINED") {
        return "SIGN_REQUEST.DECLINED";
    }
    if (val == "SIGN_REQUEST.EXPIRED") {
        return "SIGN_REQUEST.EXPIRED";
    }
    if (val == "SIGN_REQUEST.SIGNER_EMAIL_BOUNCED") {
        return "SIGN_REQUEST.SIGNER_EMAIL_BOUNCED";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeWebhookInvocation(val: WebhookInvocation): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : newSerializeWebhookInvocationTypeField(val.type), ["webhook"]: val.webhook == void 0 ? void 0 : newSerializeWebhook(val.webhook), ["created_by"]: val.createdBy == void 0 ? void 0 : newSerializeUserMini(val.createdBy), ["created_at"]: val.createdAt, ["trigger"]: val.trigger == void 0 ? void 0 : newSerializeWebhookInvocationTriggerField(val.trigger), ["source"]: val.source == void 0 ? void 0 : newSerializeFileOrFolder(val.source) };
}
export function newDeserializeWebhookInvocation(val: any): WebhookInvocation {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | WebhookInvocationTypeField = val.type == void 0 ? void 0 : newDeserializeWebhookInvocationTypeField(val.type);
    const webhook: undefined | Webhook = val.webhook == void 0 ? void 0 : newDeserializeWebhook(val.webhook);
    const createdBy: undefined | UserMini = val.created_by == void 0 ? void 0 : newDeserializeUserMini(val.created_by);
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const trigger: undefined | WebhookInvocationTriggerField = val.trigger == void 0 ? void 0 : newDeserializeWebhookInvocationTriggerField(val.trigger);
    const source: undefined | FileOrFolder = val.source == void 0 ? void 0 : newDeserializeFileOrFolder(val.source);
    return { id: id, type: type, webhook: webhook, createdBy: createdBy, createdAt: createdAt, trigger: trigger, source: source } satisfies WebhookInvocation;
}
export function newSerializeSkillInvocationTypeField(val: SkillInvocationTypeField): Json {
    return val;
}
export function newDeserializeSkillInvocationTypeField(val: any): SkillInvocationTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"SkillInvocationTypeField\"";
    }
    if (val == "skill_invocation") {
        return "skill_invocation";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeSkillInvocationSkillFieldTypeField(val: SkillInvocationSkillFieldTypeField): Json {
    return val;
}
export function newDeserializeSkillInvocationSkillFieldTypeField(val: any): SkillInvocationSkillFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"SkillInvocationSkillFieldTypeField\"";
    }
    if (val == "skill") {
        return "skill";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeSkillInvocationSkillField(val: SkillInvocationSkillField): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : newSerializeSkillInvocationSkillFieldTypeField(val.type), ["name"]: val.name, ["api_key"]: val.apiKey };
}
export function newDeserializeSkillInvocationSkillField(val: any): SkillInvocationSkillField {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | SkillInvocationSkillFieldTypeField = val.type == void 0 ? void 0 : newDeserializeSkillInvocationSkillFieldTypeField(val.type);
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const apiKey: undefined | string = isJson(val.api_key, "string") ? val.api_key : void 0;
    return { id: id, type: type, name: name, apiKey: apiKey } satisfies SkillInvocationSkillField;
}
export function newSerializeSkillInvocationTokenFieldReadFieldTokenTypeField(val: SkillInvocationTokenFieldReadFieldTokenTypeField): Json {
    return val;
}
export function newDeserializeSkillInvocationTokenFieldReadFieldTokenTypeField(val: any): SkillInvocationTokenFieldReadFieldTokenTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"SkillInvocationTokenFieldReadFieldTokenTypeField\"";
    }
    if (val == "bearer") {
        return "bearer";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeSkillInvocationTokenFieldReadField(val: SkillInvocationTokenFieldReadField): Json {
    return { ["access_token"]: val.accessToken, ["expires_in"]: val.expiresIn, ["token_type"]: val.tokenType == void 0 ? void 0 : newSerializeSkillInvocationTokenFieldReadFieldTokenTypeField(val.tokenType), ["restricted_to"]: val.restrictedTo };
}
export function newDeserializeSkillInvocationTokenFieldReadField(val: any): SkillInvocationTokenFieldReadField {
    const accessToken: undefined | string = isJson(val.access_token, "string") ? val.access_token : void 0;
    const expiresIn: undefined | number = isJson(val.expires_in, "number") ? val.expires_in : void 0;
    const tokenType: undefined | SkillInvocationTokenFieldReadFieldTokenTypeField = val.token_type == void 0 ? void 0 : newDeserializeSkillInvocationTokenFieldReadFieldTokenTypeField(val.token_type);
    const restrictedTo: undefined | string = isJson(val.restricted_to, "string") ? val.restricted_to : void 0;
    return { accessToken: accessToken, expiresIn: expiresIn, tokenType: tokenType, restrictedTo: restrictedTo } satisfies SkillInvocationTokenFieldReadField;
}
export function newSerializeSkillInvocationTokenFieldWriteFieldTokenTypeField(val: SkillInvocationTokenFieldWriteFieldTokenTypeField): Json {
    return val;
}
export function newDeserializeSkillInvocationTokenFieldWriteFieldTokenTypeField(val: any): SkillInvocationTokenFieldWriteFieldTokenTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"SkillInvocationTokenFieldWriteFieldTokenTypeField\"";
    }
    if (val == "bearer") {
        return "bearer";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeSkillInvocationTokenFieldWriteField(val: SkillInvocationTokenFieldWriteField): Json {
    return { ["access_token"]: val.accessToken, ["expires_in"]: val.expiresIn, ["token_type"]: val.tokenType == void 0 ? void 0 : newSerializeSkillInvocationTokenFieldWriteFieldTokenTypeField(val.tokenType), ["restricted_to"]: val.restrictedTo };
}
export function newDeserializeSkillInvocationTokenFieldWriteField(val: any): SkillInvocationTokenFieldWriteField {
    const accessToken: undefined | string = isJson(val.access_token, "string") ? val.access_token : void 0;
    const expiresIn: undefined | number = isJson(val.expires_in, "number") ? val.expires_in : void 0;
    const tokenType: undefined | SkillInvocationTokenFieldWriteFieldTokenTypeField = val.token_type == void 0 ? void 0 : newDeserializeSkillInvocationTokenFieldWriteFieldTokenTypeField(val.token_type);
    const restrictedTo: undefined | string = isJson(val.restricted_to, "string") ? val.restricted_to : void 0;
    return { accessToken: accessToken, expiresIn: expiresIn, tokenType: tokenType, restrictedTo: restrictedTo } satisfies SkillInvocationTokenFieldWriteField;
}
export function newSerializeSkillInvocationTokenField(val: SkillInvocationTokenField): Json {
    return { ["read"]: val.read == void 0 ? void 0 : newSerializeSkillInvocationTokenFieldReadField(val.read), ["write"]: val.write == void 0 ? void 0 : newSerializeSkillInvocationTokenFieldWriteField(val.write) };
}
export function newDeserializeSkillInvocationTokenField(val: any): SkillInvocationTokenField {
    const read: undefined | SkillInvocationTokenFieldReadField = val.read == void 0 ? void 0 : newDeserializeSkillInvocationTokenFieldReadField(val.read);
    const write: undefined | SkillInvocationTokenFieldWriteField = val.write == void 0 ? void 0 : newDeserializeSkillInvocationTokenFieldWriteField(val.write);
    return { read: read, write: write } satisfies SkillInvocationTokenField;
}
export function newSerializeSkillInvocationStatusFieldStateField(val: SkillInvocationStatusFieldStateField): Json {
    return val;
}
export function newDeserializeSkillInvocationStatusFieldStateField(val: any): SkillInvocationStatusFieldStateField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"SkillInvocationStatusFieldStateField\"";
    }
    if (val == "invoked") {
        return "invoked";
    }
    if (val == "processing") {
        return "processing";
    }
    if (val == "success") {
        return "success";
    }
    if (val == "transient_failure") {
        return "transient_failure";
    }
    if (val == "permanent_failure") {
        return "permanent_failure";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeSkillInvocationStatusField(val: SkillInvocationStatusField): Json {
    return { ["state"]: val.state == void 0 ? void 0 : newSerializeSkillInvocationStatusFieldStateField(val.state), ["message"]: val.message, ["error_code"]: val.errorCode, ["additional_info"]: val.additionalInfo };
}
export function newDeserializeSkillInvocationStatusField(val: any): SkillInvocationStatusField {
    const state: undefined | SkillInvocationStatusFieldStateField = val.state == void 0 ? void 0 : newDeserializeSkillInvocationStatusFieldStateField(val.state);
    const message: undefined | string = isJson(val.message, "string") ? val.message : void 0;
    const errorCode: undefined | string = isJson(val.error_code, "string") ? val.error_code : void 0;
    const additionalInfo: undefined | string = isJson(val.additional_info, "string") ? val.additional_info : void 0;
    return { state: state, message: message, errorCode: errorCode, additionalInfo: additionalInfo } satisfies SkillInvocationStatusField;
}
export function newSerializeSkillInvocationEnterpriseFieldTypeField(val: SkillInvocationEnterpriseFieldTypeField): Json {
    return val;
}
export function newDeserializeSkillInvocationEnterpriseFieldTypeField(val: any): SkillInvocationEnterpriseFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"SkillInvocationEnterpriseFieldTypeField\"";
    }
    if (val == "enterprise") {
        return "enterprise";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeSkillInvocationEnterpriseField(val: SkillInvocationEnterpriseField): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : newSerializeSkillInvocationEnterpriseFieldTypeField(val.type), ["name"]: val.name };
}
export function newDeserializeSkillInvocationEnterpriseField(val: any): SkillInvocationEnterpriseField {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | SkillInvocationEnterpriseFieldTypeField = val.type == void 0 ? void 0 : newDeserializeSkillInvocationEnterpriseFieldTypeField(val.type);
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    return { id: id, type: type, name: name } satisfies SkillInvocationEnterpriseField;
}
export function newSerializeSkillInvocation(val: SkillInvocation): Json {
    return { ["type"]: val.type == void 0 ? void 0 : newSerializeSkillInvocationTypeField(val.type), ["id"]: val.id, ["skill"]: val.skill == void 0 ? void 0 : newSerializeSkillInvocationSkillField(val.skill), ["token"]: val.token == void 0 ? void 0 : newSerializeSkillInvocationTokenField(val.token), ["status"]: val.status == void 0 ? void 0 : newSerializeSkillInvocationStatusField(val.status), ["created_at"]: val.createdAt, ["trigger"]: val.trigger, ["enterprise"]: val.enterprise == void 0 ? void 0 : newSerializeSkillInvocationEnterpriseField(val.enterprise), ["source"]: val.source == void 0 ? void 0 : newSerializeFileOrFolder(val.source), ["event"]: val.event == void 0 ? void 0 : newSerializeEvent(val.event) };
}
export function newDeserializeSkillInvocation(val: any): SkillInvocation {
    const type: undefined | SkillInvocationTypeField = val.type == void 0 ? void 0 : newDeserializeSkillInvocationTypeField(val.type);
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const skill: undefined | SkillInvocationSkillField = val.skill == void 0 ? void 0 : newDeserializeSkillInvocationSkillField(val.skill);
    const token: undefined | SkillInvocationTokenField = val.token == void 0 ? void 0 : newDeserializeSkillInvocationTokenField(val.token);
    const status: undefined | SkillInvocationStatusField = val.status == void 0 ? void 0 : newDeserializeSkillInvocationStatusField(val.status);
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const trigger: undefined | string = isJson(val.trigger, "string") ? val.trigger : void 0;
    const enterprise: undefined | SkillInvocationEnterpriseField = val.enterprise == void 0 ? void 0 : newDeserializeSkillInvocationEnterpriseField(val.enterprise);
    const source: undefined | FileOrFolder = val.source == void 0 ? void 0 : newDeserializeFileOrFolder(val.source);
    const event: undefined | Event = val.event == void 0 ? void 0 : newDeserializeEvent(val.event);
    return { type: type, id: id, skill: skill, token: token, status: status, createdAt: createdAt, trigger: trigger, enterprise: enterprise, source: source, event: event } satisfies SkillInvocation;
}
export function newSerializeFolderFullSyncStateField(val: FolderFullSyncStateField): Json {
    return val;
}
export function newDeserializeFolderFullSyncStateField(val: any): FolderFullSyncStateField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"FolderFullSyncStateField\"";
    }
    if (val == "synced") {
        return "synced";
    }
    if (val == "not_synced") {
        return "not_synced";
    }
    if (val == "partially_synced") {
        return "partially_synced";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeFolderFullPermissionsField(val: FolderFullPermissionsField): Json {
    return { ["can_delete"]: val.canDelete, ["can_download"]: val.canDownload, ["can_invite_collaborator"]: val.canInviteCollaborator, ["can_rename"]: val.canRename, ["can_set_share_access"]: val.canSetShareAccess, ["can_share"]: val.canShare, ["can_upload"]: val.canUpload };
}
export function newDeserializeFolderFullPermissionsField(val: any): FolderFullPermissionsField {
    const canDelete: boolean = val.can_delete;
    const canDownload: boolean = val.can_download;
    const canInviteCollaborator: boolean = val.can_invite_collaborator;
    const canRename: boolean = val.can_rename;
    const canSetShareAccess: boolean = val.can_set_share_access;
    const canShare: boolean = val.can_share;
    const canUpload: undefined | boolean = isJson(val.can_upload, "boolean") ? val.can_upload : void 0;
    return { canDelete: canDelete, canDownload: canDownload, canInviteCollaborator: canInviteCollaborator, canRename: canRename, canSetShareAccess: canSetShareAccess, canShare: canShare, canUpload: canUpload } satisfies FolderFullPermissionsField;
}
export function newSerializeFolderFullMetadataField(val: FolderFullMetadataField): Json {
    return {};
}
export function newDeserializeFolderFullMetadataField(val: any): FolderFullMetadataField {
    return {} satisfies FolderFullMetadataField;
}
export function newSerializeFolderFullAllowedSharedLinkAccessLevelsField(val: FolderFullAllowedSharedLinkAccessLevelsField): Json {
    return val;
}
export function newDeserializeFolderFullAllowedSharedLinkAccessLevelsField(val: any): FolderFullAllowedSharedLinkAccessLevelsField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"FolderFullAllowedSharedLinkAccessLevelsField\"";
    }
    if (val == "open") {
        return "open";
    }
    if (val == "company") {
        return "company";
    }
    if (val == "collaborators") {
        return "collaborators";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeFolderFullAllowedInviteeRolesField(val: FolderFullAllowedInviteeRolesField): Json {
    return val;
}
export function newDeserializeFolderFullAllowedInviteeRolesField(val: any): FolderFullAllowedInviteeRolesField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"FolderFullAllowedInviteeRolesField\"";
    }
    if (val == "editor") {
        return "editor";
    }
    if (val == "viewer") {
        return "viewer";
    }
    if (val == "previewer") {
        return "previewer";
    }
    if (val == "uploader") {
        return "uploader";
    }
    if (val == "previewer uploader") {
        return "previewer uploader";
    }
    if (val == "viewer uploader") {
        return "viewer uploader";
    }
    if (val == "co-owner") {
        return "co-owner";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeFolderFullWatermarkInfoField(val: FolderFullWatermarkInfoField): Json {
    return { ["is_watermarked"]: val.isWatermarked };
}
export function newDeserializeFolderFullWatermarkInfoField(val: any): FolderFullWatermarkInfoField {
    const isWatermarked: undefined | boolean = isJson(val.is_watermarked, "boolean") ? val.is_watermarked : void 0;
    return { isWatermarked: isWatermarked } satisfies FolderFullWatermarkInfoField;
}
export function newSerializeFolderFullClassificationField(val: FolderFullClassificationField): Json {
    return { ["name"]: val.name, ["definition"]: val.definition, ["color"]: val.color };
}
export function newDeserializeFolderFullClassificationField(val: any): FolderFullClassificationField {
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const definition: undefined | string = isJson(val.definition, "string") ? val.definition : void 0;
    const color: undefined | string = isJson(val.color, "string") ? val.color : void 0;
    return { name: name, definition: definition, color: color } satisfies FolderFullClassificationField;
}
export function newSerializeFolderFull(val: FolderFull): Json {
    const base: any = newSerializeFolder(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"FolderFull\"";
    }
    return { ...base, ...{ ["sync_state"]: val.syncState == void 0 ? void 0 : newSerializeFolderFullSyncStateField(val.syncState), ["has_collaborations"]: val.hasCollaborations, ["permissions"]: val.permissions == void 0 ? void 0 : newSerializeFolderFullPermissionsField(val.permissions), ["tags"]: val.tags == void 0 ? void 0 : val.tags.map(function (item: string): undefined {
                return void 0;
            }) as readonly any[], ["can_non_owners_invite"]: val.canNonOwnersInvite, ["is_externally_owned"]: val.isExternallyOwned, ["metadata"]: val.metadata == void 0 ? void 0 : newSerializeFolderFullMetadataField(val.metadata), ["is_collaboration_restricted_to_enterprise"]: val.isCollaborationRestrictedToEnterprise, ["allowed_shared_link_access_levels"]: val.allowedSharedLinkAccessLevels == void 0 ? void 0 : val.allowedSharedLinkAccessLevels.map(function (item: FolderFullAllowedSharedLinkAccessLevelsField): any {
                return newSerializeFolderFullAllowedSharedLinkAccessLevelsField(item);
            }) as readonly any[], ["allowed_invitee_roles"]: val.allowedInviteeRoles == void 0 ? void 0 : val.allowedInviteeRoles.map(function (item: FolderFullAllowedInviteeRolesField): any {
                return newSerializeFolderFullAllowedInviteeRolesField(item);
            }) as readonly any[], ["watermark_info"]: val.watermarkInfo == void 0 ? void 0 : newSerializeFolderFullWatermarkInfoField(val.watermarkInfo), ["is_accessible_via_shared_link"]: val.isAccessibleViaSharedLink, ["can_non_owners_view_collaborators"]: val.canNonOwnersViewCollaborators, ["classification"]: val.classification == void 0 ? void 0 : newSerializeFolderFullClassificationField(val.classification) } };
}
export function newDeserializeFolderFull(val: any): FolderFull {
    const syncState: undefined | FolderFullSyncStateField = val.sync_state == void 0 ? void 0 : newDeserializeFolderFullSyncStateField(val.sync_state);
    const hasCollaborations: undefined | boolean = isJson(val.has_collaborations, "boolean") ? val.has_collaborations : void 0;
    const permissions: undefined | FolderFullPermissionsField = val.permissions == void 0 ? void 0 : newDeserializeFolderFullPermissionsField(val.permissions);
    const tags: undefined | readonly string[] = isJson(val.tags, "array") ? val.tags.map(function (itm: Json): undefined {
        return void 0;
    }) as readonly any[] : void 0;
    const canNonOwnersInvite: undefined | boolean = isJson(val.can_non_owners_invite, "boolean") ? val.can_non_owners_invite : void 0;
    const isExternallyOwned: undefined | boolean = isJson(val.is_externally_owned, "boolean") ? val.is_externally_owned : void 0;
    const metadata: undefined | FolderFullMetadataField = val.metadata == void 0 ? void 0 : newDeserializeFolderFullMetadataField(val.metadata);
    const isCollaborationRestrictedToEnterprise: undefined | boolean = isJson(val.is_collaboration_restricted_to_enterprise, "boolean") ? val.is_collaboration_restricted_to_enterprise : void 0;
    const allowedSharedLinkAccessLevels: undefined | readonly FolderFullAllowedSharedLinkAccessLevelsField[] = isJson(val.allowed_shared_link_access_levels, "array") ? val.allowed_shared_link_access_levels.map(function (itm: Json): any {
        return newDeserializeFolderFullAllowedSharedLinkAccessLevelsField(itm);
    }) as readonly any[] : void 0;
    const allowedInviteeRoles: undefined | readonly FolderFullAllowedInviteeRolesField[] = isJson(val.allowed_invitee_roles, "array") ? val.allowed_invitee_roles.map(function (itm: Json): any {
        return newDeserializeFolderFullAllowedInviteeRolesField(itm);
    }) as readonly any[] : void 0;
    const watermarkInfo: undefined | FolderFullWatermarkInfoField = val.watermark_info == void 0 ? void 0 : newDeserializeFolderFullWatermarkInfoField(val.watermark_info);
    const isAccessibleViaSharedLink: undefined | boolean = isJson(val.is_accessible_via_shared_link, "boolean") ? val.is_accessible_via_shared_link : void 0;
    const canNonOwnersViewCollaborators: undefined | boolean = isJson(val.can_non_owners_view_collaborators, "boolean") ? val.can_non_owners_view_collaborators : void 0;
    const classification: undefined | FolderFullClassificationField = val.classification == void 0 ? void 0 : newDeserializeFolderFullClassificationField(val.classification);
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const modifiedAt: undefined | string = isJson(val.modified_at, "string") ? val.modified_at : void 0;
    const description: undefined | string = isJson(val.description, "string") ? val.description : void 0;
    const size: undefined | number = isJson(val.size, "number") ? val.size : void 0;
    const pathCollection: undefined | FolderPathCollectionField = val.path_collection == void 0 ? void 0 : newDeserializeFolderPathCollectionField(val.path_collection);
    const createdBy: undefined | UserMini = val.created_by == void 0 ? void 0 : newDeserializeUserMini(val.created_by);
    const modifiedBy: undefined | UserMini = val.modified_by == void 0 ? void 0 : newDeserializeUserMini(val.modified_by);
    const trashedAt: undefined | string = isJson(val.trashed_at, "string") ? val.trashed_at : void 0;
    const purgedAt: undefined | string = isJson(val.purged_at, "string") ? val.purged_at : void 0;
    const contentCreatedAt: undefined | string = isJson(val.content_created_at, "string") ? val.content_created_at : void 0;
    const contentModifiedAt: undefined | string = isJson(val.content_modified_at, "string") ? val.content_modified_at : void 0;
    const ownedBy: undefined | UserMini = val.owned_by == void 0 ? void 0 : newDeserializeUserMini(val.owned_by);
    const sharedLink: undefined | FolderSharedLinkField = val.shared_link == void 0 ? void 0 : newDeserializeFolderSharedLinkField(val.shared_link);
    const folderUploadEmail: undefined | FolderFolderUploadEmailField = val.folder_upload_email == void 0 ? void 0 : newDeserializeFolderFolderUploadEmailField(val.folder_upload_email);
    const parent: undefined | FolderMini = val.parent == void 0 ? void 0 : newDeserializeFolderMini(val.parent);
    const itemStatus: undefined | FolderItemStatusField = val.item_status == void 0 ? void 0 : newDeserializeFolderItemStatusField(val.item_status);
    const itemCollection: undefined | Items = val.item_collection == void 0 ? void 0 : newDeserializeItems(val.item_collection);
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const sequenceId: undefined | string = isJson(val.sequence_id, "string") ? val.sequence_id : void 0;
    const id: string = val.id;
    const etag: undefined | string = isJson(val.etag, "string") ? val.etag : void 0;
    const type: FolderBaseTypeField = newDeserializeFolderBaseTypeField(val.type);
    return { syncState: syncState, hasCollaborations: hasCollaborations, permissions: permissions, tags: tags, canNonOwnersInvite: canNonOwnersInvite, isExternallyOwned: isExternallyOwned, metadata: metadata, isCollaborationRestrictedToEnterprise: isCollaborationRestrictedToEnterprise, allowedSharedLinkAccessLevels: allowedSharedLinkAccessLevels, allowedInviteeRoles: allowedInviteeRoles, watermarkInfo: watermarkInfo, isAccessibleViaSharedLink: isAccessibleViaSharedLink, canNonOwnersViewCollaborators: canNonOwnersViewCollaborators, classification: classification, createdAt: createdAt, modifiedAt: modifiedAt, description: description, size: size, pathCollection: pathCollection, createdBy: createdBy, modifiedBy: modifiedBy, trashedAt: trashedAt, purgedAt: purgedAt, contentCreatedAt: contentCreatedAt, contentModifiedAt: contentModifiedAt, ownedBy: ownedBy, sharedLink: sharedLink, folderUploadEmail: folderUploadEmail, parent: parent, itemStatus: itemStatus, itemCollection: itemCollection, name: name, sequenceId: sequenceId, id: id, etag: etag, type: type } satisfies FolderFull;
}
export function newSerializeWebLinkPathCollectionField(val: WebLinkPathCollectionField): Json {
    return { ["total_count"]: val.totalCount, ["entries"]: val.entries.map(function (item: FolderMini): any {
            return newSerializeFolderMini(item);
        }) as readonly any[] };
}
export function newDeserializeWebLinkPathCollectionField(val: any): WebLinkPathCollectionField {
    const totalCount: number = val.total_count;
    const entries: readonly FolderMini[] = val.entries.map(function (itm: Json): any {
        return newDeserializeFolderMini(itm);
    }) as readonly any[];
    return { totalCount: totalCount, entries: entries } satisfies WebLinkPathCollectionField;
}
export function newSerializeWebLinkSharedLinkFieldAccessField(val: WebLinkSharedLinkFieldAccessField): Json {
    return val;
}
export function newDeserializeWebLinkSharedLinkFieldAccessField(val: any): WebLinkSharedLinkFieldAccessField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"WebLinkSharedLinkFieldAccessField\"";
    }
    if (val == "open") {
        return "open";
    }
    if (val == "company") {
        return "company";
    }
    if (val == "collaborators") {
        return "collaborators";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeWebLinkSharedLinkFieldEffectiveAccessField(val: WebLinkSharedLinkFieldEffectiveAccessField): Json {
    return val;
}
export function newDeserializeWebLinkSharedLinkFieldEffectiveAccessField(val: any): WebLinkSharedLinkFieldEffectiveAccessField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"WebLinkSharedLinkFieldEffectiveAccessField\"";
    }
    if (val == "open") {
        return "open";
    }
    if (val == "company") {
        return "company";
    }
    if (val == "collaborators") {
        return "collaborators";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeWebLinkSharedLinkFieldEffectivePermissionField(val: WebLinkSharedLinkFieldEffectivePermissionField): Json {
    return val;
}
export function newDeserializeWebLinkSharedLinkFieldEffectivePermissionField(val: any): WebLinkSharedLinkFieldEffectivePermissionField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"WebLinkSharedLinkFieldEffectivePermissionField\"";
    }
    if (val == "can_edit") {
        return "can_edit";
    }
    if (val == "can_download") {
        return "can_download";
    }
    if (val == "can_preview") {
        return "can_preview";
    }
    if (val == "no_access") {
        return "no_access";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeWebLinkSharedLinkFieldPermissionsField(val: WebLinkSharedLinkFieldPermissionsField): Json {
    return { ["can_download"]: val.canDownload, ["can_preview"]: val.canPreview, ["can_edit"]: val.canEdit };
}
export function newDeserializeWebLinkSharedLinkFieldPermissionsField(val: any): WebLinkSharedLinkFieldPermissionsField {
    const canDownload: boolean = val.can_download;
    const canPreview: boolean = val.can_preview;
    const canEdit: boolean = val.can_edit;
    return { canDownload: canDownload, canPreview: canPreview, canEdit: canEdit } satisfies WebLinkSharedLinkFieldPermissionsField;
}
export function newSerializeWebLinkSharedLinkField(val: WebLinkSharedLinkField): Json {
    return { ["url"]: val.url, ["download_url"]: val.downloadUrl, ["vanity_url"]: val.vanityUrl, ["vanity_name"]: val.vanityName, ["access"]: val.access == void 0 ? void 0 : newSerializeWebLinkSharedLinkFieldAccessField(val.access), ["effective_access"]: newSerializeWebLinkSharedLinkFieldEffectiveAccessField(val.effectiveAccess), ["effective_permission"]: newSerializeWebLinkSharedLinkFieldEffectivePermissionField(val.effectivePermission), ["unshared_at"]: val.unsharedAt, ["is_password_enabled"]: val.isPasswordEnabled, ["permissions"]: val.permissions == void 0 ? void 0 : newSerializeWebLinkSharedLinkFieldPermissionsField(val.permissions), ["download_count"]: val.downloadCount, ["preview_count"]: val.previewCount };
}
export function newDeserializeWebLinkSharedLinkField(val: any): WebLinkSharedLinkField {
    const url: string = val.url;
    const downloadUrl: undefined | string = isJson(val.download_url, "string") ? val.download_url : void 0;
    const vanityUrl: undefined | string = isJson(val.vanity_url, "string") ? val.vanity_url : void 0;
    const vanityName: undefined | string = isJson(val.vanity_name, "string") ? val.vanity_name : void 0;
    const access: undefined | WebLinkSharedLinkFieldAccessField = val.access == void 0 ? void 0 : newDeserializeWebLinkSharedLinkFieldAccessField(val.access);
    const effectiveAccess: WebLinkSharedLinkFieldEffectiveAccessField = newDeserializeWebLinkSharedLinkFieldEffectiveAccessField(val.effective_access);
    const effectivePermission: WebLinkSharedLinkFieldEffectivePermissionField = newDeserializeWebLinkSharedLinkFieldEffectivePermissionField(val.effective_permission);
    const unsharedAt: undefined | string = isJson(val.unshared_at, "string") ? val.unshared_at : void 0;
    const isPasswordEnabled: boolean = val.is_password_enabled;
    const permissions: undefined | WebLinkSharedLinkFieldPermissionsField = val.permissions == void 0 ? void 0 : newDeserializeWebLinkSharedLinkFieldPermissionsField(val.permissions);
    const downloadCount: number = val.download_count;
    const previewCount: number = val.preview_count;
    return { url: url, downloadUrl: downloadUrl, vanityUrl: vanityUrl, vanityName: vanityName, access: access, effectiveAccess: effectiveAccess, effectivePermission: effectivePermission, unsharedAt: unsharedAt, isPasswordEnabled: isPasswordEnabled, permissions: permissions, downloadCount: downloadCount, previewCount: previewCount } satisfies WebLinkSharedLinkField;
}
export function newSerializeWebLinkItemStatusField(val: WebLinkItemStatusField): Json {
    return val;
}
export function newDeserializeWebLinkItemStatusField(val: any): WebLinkItemStatusField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"WebLinkItemStatusField\"";
    }
    if (val == "active") {
        return "active";
    }
    if (val == "trashed") {
        return "trashed";
    }
    if (val == "deleted") {
        return "deleted";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeWebLink(val: WebLink): Json {
    const base: any = newSerializeWebLinkMini(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"WebLink\"";
    }
    return { ...base, ...{ ["parent"]: val.parent == void 0 ? void 0 : newSerializeFolderMini(val.parent), ["description"]: val.description, ["path_collection"]: val.pathCollection == void 0 ? void 0 : newSerializeWebLinkPathCollectionField(val.pathCollection), ["created_at"]: val.createdAt, ["modified_at"]: val.modifiedAt, ["trashed_at"]: val.trashedAt, ["purged_at"]: val.purgedAt, ["created_by"]: val.createdBy == void 0 ? void 0 : newSerializeUserMini(val.createdBy), ["modified_by"]: val.modifiedBy == void 0 ? void 0 : newSerializeUserMini(val.modifiedBy), ["owned_by"]: val.ownedBy == void 0 ? void 0 : newSerializeUserMini(val.ownedBy), ["shared_link"]: val.sharedLink == void 0 ? void 0 : newSerializeWebLinkSharedLinkField(val.sharedLink), ["item_status"]: val.itemStatus == void 0 ? void 0 : newSerializeWebLinkItemStatusField(val.itemStatus) } };
}
export function newDeserializeWebLink(val: any): WebLink {
    const parent: undefined | FolderMini = val.parent == void 0 ? void 0 : newDeserializeFolderMini(val.parent);
    const description: undefined | string = isJson(val.description, "string") ? val.description : void 0;
    const pathCollection: undefined | WebLinkPathCollectionField = val.path_collection == void 0 ? void 0 : newDeserializeWebLinkPathCollectionField(val.path_collection);
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const modifiedAt: undefined | string = isJson(val.modified_at, "string") ? val.modified_at : void 0;
    const trashedAt: undefined | string = isJson(val.trashed_at, "string") ? val.trashed_at : void 0;
    const purgedAt: undefined | string = isJson(val.purged_at, "string") ? val.purged_at : void 0;
    const createdBy: undefined | UserMini = val.created_by == void 0 ? void 0 : newDeserializeUserMini(val.created_by);
    const modifiedBy: undefined | UserMini = val.modified_by == void 0 ? void 0 : newDeserializeUserMini(val.modified_by);
    const ownedBy: undefined | UserMini = val.owned_by == void 0 ? void 0 : newDeserializeUserMini(val.owned_by);
    const sharedLink: undefined | WebLinkSharedLinkField = val.shared_link == void 0 ? void 0 : newDeserializeWebLinkSharedLinkField(val.shared_link);
    const itemStatus: undefined | WebLinkItemStatusField = val.item_status == void 0 ? void 0 : newDeserializeWebLinkItemStatusField(val.item_status);
    const url: undefined | string = isJson(val.url, "string") ? val.url : void 0;
    const sequenceId: undefined | string = isJson(val.sequence_id, "string") ? val.sequence_id : void 0;
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const id: string = val.id;
    const type: WebLinkBaseTypeField = newDeserializeWebLinkBaseTypeField(val.type);
    const etag: undefined | string = isJson(val.etag, "string") ? val.etag : void 0;
    return { parent: parent, description: description, pathCollection: pathCollection, createdAt: createdAt, modifiedAt: modifiedAt, trashedAt: trashedAt, purgedAt: purgedAt, createdBy: createdBy, modifiedBy: modifiedBy, ownedBy: ownedBy, sharedLink: sharedLink, itemStatus: itemStatus, url: url, sequenceId: sequenceId, name: name, id: id, type: type, etag: etag } satisfies WebLink;
}
export function newSerializeFileOrFolderOrWebLink(val: FileOrFolderOrWebLink): Json {
    if (val.type == "file") {
        return newSerializeFile(val);
    }
    if (val.type == "folder") {
        return newSerializeFolder(val);
    }
    if (val.type == "web_link") {
        return newSerializeWebLink(val);
    }
    throw "unknown type";
}
export function newDeserializeFileOrFolderOrWebLink(val: any): FileOrFolderOrWebLink {
    if (!isJson(val, "object")) {
        throw "Expecting an object for \"FileOrFolderOrWebLink\"";
    }
    if (val.type == "file") {
        return newDeserializeFile(val);
    }
    if (val.type == "folder") {
        return newDeserializeFolder(val);
    }
    if (val.type == "web_link") {
        return newDeserializeWebLink(val);
    }
    throw "unknown type";
}
export function newSerializeSearchResultWithSharedLink(val: SearchResultWithSharedLink): Json {
    return { ["accessible_via_shared_link"]: val.accessibleViaSharedLink, ["item"]: val.item == void 0 ? void 0 : newSerializeFileOrFolderOrWebLink(val.item), ["type"]: val.type };
}
export function newDeserializeSearchResultWithSharedLink(val: any): SearchResultWithSharedLink {
    const accessibleViaSharedLink: undefined | string = isJson(val.accessible_via_shared_link, "string") ? val.accessible_via_shared_link : void 0;
    const item: undefined | FileOrFolderOrWebLink = val.item == void 0 ? void 0 : newDeserializeFileOrFolderOrWebLink(val.item);
    const type: undefined | string = isJson(val.type, "string") ? val.type : void 0;
    return { accessibleViaSharedLink: accessibleViaSharedLink, item: item, type: type } satisfies SearchResultWithSharedLink;
}
export function newSerializeSearchResultsWithSharedLinks(val: SearchResultsWithSharedLinks): Json {
    return { ["total_count"]: val.totalCount, ["limit"]: val.limit, ["offset"]: val.offset, ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: SearchResultWithSharedLink): any {
            return newSerializeSearchResultWithSharedLink(item);
        }) as readonly any[] };
}
export function newDeserializeSearchResultsWithSharedLinks(val: any): SearchResultsWithSharedLinks {
    const totalCount: undefined | number = isJson(val.total_count, "number") ? val.total_count : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const offset: undefined | number = isJson(val.offset, "number") ? val.offset : void 0;
    const entries: undefined | readonly SearchResultWithSharedLink[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return newDeserializeSearchResultWithSharedLink(itm);
    }) as readonly any[] : void 0;
    return { totalCount: totalCount, limit: limit, offset: offset, entries: entries } satisfies SearchResultsWithSharedLinks;
}
export function newSerializeSearchResults(val: SearchResults): Json {
    return { ["total_count"]: val.totalCount, ["limit"]: val.limit, ["offset"]: val.offset, ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: FileOrFolderOrWebLink): any {
            return newSerializeFileOrFolderOrWebLink(item);
        }) as readonly any[] };
}
export function newDeserializeSearchResults(val: any): SearchResults {
    const totalCount: undefined | number = isJson(val.total_count, "number") ? val.total_count : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const offset: undefined | number = isJson(val.offset, "number") ? val.offset : void 0;
    const entries: undefined | readonly FileOrFolderOrWebLink[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return newDeserializeFileOrFolderOrWebLink(itm);
    }) as readonly any[] : void 0;
    return { totalCount: totalCount, limit: limit, offset: offset, entries: entries } satisfies SearchResults;
}
export function newSerializeSearchResultsOrSearchResultsWithSharedLinks(val: SearchResultsOrSearchResultsWithSharedLinks): Json {
    throw "Can't serialize SearchResultsOrSearchResultsWithSharedLinks";
}
export function newDeserializeSearchResultsOrSearchResultsWithSharedLinks(val: any): SearchResultsOrSearchResultsWithSharedLinks {
    throw "Can't deserialize SearchResultsOrSearchResultsWithSharedLinks";
}
export function newSerializeRecentItemInteractionTypeField(val: RecentItemInteractionTypeField): Json {
    return val;
}
export function newDeserializeRecentItemInteractionTypeField(val: any): RecentItemInteractionTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"RecentItemInteractionTypeField\"";
    }
    if (val == "item_preview") {
        return "item_preview";
    }
    if (val == "item_upload") {
        return "item_upload";
    }
    if (val == "item_comment") {
        return "item_comment";
    }
    if (val == "item_open") {
        return "item_open";
    }
    if (val == "item_modify") {
        return "item_modify";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeRecentItem(val: RecentItem): Json {
    return { ["type"]: val.type, ["item"]: val.item == void 0 ? void 0 : newSerializeFileOrFolderOrWebLink(val.item), ["interaction_type"]: val.interactionType == void 0 ? void 0 : newSerializeRecentItemInteractionTypeField(val.interactionType), ["interacted_at"]: val.interactedAt, ["interaction_shared_link"]: val.interactionSharedLink };
}
export function newDeserializeRecentItem(val: any): RecentItem {
    const type: undefined | string = isJson(val.type, "string") ? val.type : void 0;
    const item: undefined | FileOrFolderOrWebLink = val.item == void 0 ? void 0 : newDeserializeFileOrFolderOrWebLink(val.item);
    const interactionType: undefined | RecentItemInteractionTypeField = val.interaction_type == void 0 ? void 0 : newDeserializeRecentItemInteractionTypeField(val.interaction_type);
    const interactedAt: undefined | string = isJson(val.interacted_at, "string") ? val.interacted_at : void 0;
    const interactionSharedLink: undefined | string = isJson(val.interaction_shared_link, "string") ? val.interaction_shared_link : void 0;
    return { type: type, item: item, interactionType: interactionType, interactedAt: interactedAt, interactionSharedLink: interactionSharedLink } satisfies RecentItem;
}
export function newSerializeRecentItems(val: RecentItems): Json {
    return { ["limit"]: val.limit, ["next_marker"]: val.nextMarker, ["prev_marker"]: val.prevMarker, ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: RecentItem): any {
            return newSerializeRecentItem(item);
        }) as readonly any[] };
}
export function newDeserializeRecentItems(val: any): RecentItems {
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const nextMarker: undefined | number = isJson(val.next_marker, "number") ? val.next_marker : void 0;
    const prevMarker: undefined | number = isJson(val.prev_marker, "number") ? val.prev_marker : void 0;
    const entries: undefined | readonly RecentItem[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return newDeserializeRecentItem(itm);
    }) as readonly any[] : void 0;
    return { limit: limit, nextMarker: nextMarker, prevMarker: prevMarker, entries: entries } satisfies RecentItems;
}
export function newSerializeLegalHoldPolicyAssignment(val: LegalHoldPolicyAssignment): Json {
    const base: any = newSerializeLegalHoldPolicyAssignmentBase(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"LegalHoldPolicyAssignment\"";
    }
    return { ...base, ...{ ["legal_hold_policy"]: val.legalHoldPolicy == void 0 ? void 0 : newSerializeLegalHoldPolicyMini(val.legalHoldPolicy), ["assigned_to"]: val.assignedTo == void 0 ? void 0 : newSerializeFileOrFolderOrWebLink(val.assignedTo), ["assigned_by"]: val.assignedBy == void 0 ? void 0 : newSerializeUserMini(val.assignedBy), ["assigned_at"]: val.assignedAt, ["deleted_at"]: val.deletedAt } };
}
export function newDeserializeLegalHoldPolicyAssignment(val: any): LegalHoldPolicyAssignment {
    const legalHoldPolicy: undefined | LegalHoldPolicyMini = val.legal_hold_policy == void 0 ? void 0 : newDeserializeLegalHoldPolicyMini(val.legal_hold_policy);
    const assignedTo: undefined | FileOrFolderOrWebLink = val.assigned_to == void 0 ? void 0 : newDeserializeFileOrFolderOrWebLink(val.assigned_to);
    const assignedBy: undefined | UserMini = val.assigned_by == void 0 ? void 0 : newDeserializeUserMini(val.assigned_by);
    const assignedAt: undefined | string = isJson(val.assigned_at, "string") ? val.assigned_at : void 0;
    const deletedAt: undefined | string = isJson(val.deleted_at, "string") ? val.deleted_at : void 0;
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | LegalHoldPolicyAssignmentBaseTypeField = val.type == void 0 ? void 0 : newDeserializeLegalHoldPolicyAssignmentBaseTypeField(val.type);
    return { legalHoldPolicy: legalHoldPolicy, assignedTo: assignedTo, assignedBy: assignedBy, assignedAt: assignedAt, deletedAt: deletedAt, id: id, type: type } satisfies LegalHoldPolicyAssignment;
}
export function newSerializeFileVersionLegalHoldTypeField(val: FileVersionLegalHoldTypeField): Json {
    return val;
}
export function newDeserializeFileVersionLegalHoldTypeField(val: any): FileVersionLegalHoldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"FileVersionLegalHoldTypeField\"";
    }
    if (val == "file_version_legal_hold") {
        return "file_version_legal_hold";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeFileVersionLegalHold(val: FileVersionLegalHold): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : newSerializeFileVersionLegalHoldTypeField(val.type), ["file_version"]: val.fileVersion == void 0 ? void 0 : newSerializeFileVersionMini(val.fileVersion), ["file"]: val.file == void 0 ? void 0 : newSerializeFileMini(val.file), ["legal_hold_policy_assignments"]: val.legalHoldPolicyAssignments == void 0 ? void 0 : val.legalHoldPolicyAssignments.map(function (item: LegalHoldPolicyAssignment): any {
            return newSerializeLegalHoldPolicyAssignment(item);
        }) as readonly any[], ["deleted_at"]: val.deletedAt };
}
export function newDeserializeFileVersionLegalHold(val: any): FileVersionLegalHold {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | FileVersionLegalHoldTypeField = val.type == void 0 ? void 0 : newDeserializeFileVersionLegalHoldTypeField(val.type);
    const fileVersion: undefined | FileVersionMini = val.file_version == void 0 ? void 0 : newDeserializeFileVersionMini(val.file_version);
    const file: undefined | FileMini = val.file == void 0 ? void 0 : newDeserializeFileMini(val.file);
    const legalHoldPolicyAssignments: undefined | readonly LegalHoldPolicyAssignment[] = isJson(val.legal_hold_policy_assignments, "array") ? val.legal_hold_policy_assignments.map(function (itm: Json): any {
        return newDeserializeLegalHoldPolicyAssignment(itm);
    }) as readonly any[] : void 0;
    const deletedAt: undefined | string = isJson(val.deleted_at, "string") ? val.deleted_at : void 0;
    return { id: id, type: type, fileVersion: fileVersion, file: file, legalHoldPolicyAssignments: legalHoldPolicyAssignments, deletedAt: deletedAt } satisfies FileVersionLegalHold;
}
export function newSerializeFileVersionLegalHolds(val: FileVersionLegalHolds): Json {
    return { ["limit"]: val.limit, ["next_marker"]: val.nextMarker, ["prev_marker"]: val.prevMarker, ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: FileVersionLegalHold): any {
            return newSerializeFileVersionLegalHold(item);
        }) as readonly any[] };
}
export function newDeserializeFileVersionLegalHolds(val: any): FileVersionLegalHolds {
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const nextMarker: undefined | number = isJson(val.next_marker, "number") ? val.next_marker : void 0;
    const prevMarker: undefined | number = isJson(val.prev_marker, "number") ? val.prev_marker : void 0;
    const entries: undefined | readonly FileVersionLegalHold[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return newDeserializeFileVersionLegalHold(itm);
    }) as readonly any[] : void 0;
    return { limit: limit, nextMarker: nextMarker, prevMarker: prevMarker, entries: entries } satisfies FileVersionLegalHolds;
}
export function newSerializeCollaborationTypeField(val: CollaborationTypeField): Json {
    return val;
}
export function newDeserializeCollaborationTypeField(val: any): CollaborationTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CollaborationTypeField\"";
    }
    if (val == "collaboration") {
        return "collaboration";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeCollaborationRoleField(val: CollaborationRoleField): Json {
    return val;
}
export function newDeserializeCollaborationRoleField(val: any): CollaborationRoleField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CollaborationRoleField\"";
    }
    if (val == "editor") {
        return "editor";
    }
    if (val == "viewer") {
        return "viewer";
    }
    if (val == "previewer") {
        return "previewer";
    }
    if (val == "uploader") {
        return "uploader";
    }
    if (val == "previewer uploader") {
        return "previewer uploader";
    }
    if (val == "viewer uploader") {
        return "viewer uploader";
    }
    if (val == "co-owner") {
        return "co-owner";
    }
    if (val == "owner") {
        return "owner";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeCollaborationStatusField(val: CollaborationStatusField): Json {
    return val;
}
export function newDeserializeCollaborationStatusField(val: any): CollaborationStatusField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CollaborationStatusField\"";
    }
    if (val == "accepted") {
        return "accepted";
    }
    if (val == "pending") {
        return "pending";
    }
    if (val == "rejected") {
        return "rejected";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeCollaborationAcceptanceRequirementsStatusFieldTermsOfServiceRequirementField(val: CollaborationAcceptanceRequirementsStatusFieldTermsOfServiceRequirementField): Json {
    return { ["is_accepted"]: val.isAccepted, ["terms_of_service"]: val.termsOfService == void 0 ? void 0 : newSerializeTermsOfServiceBase(val.termsOfService) };
}
export function newDeserializeCollaborationAcceptanceRequirementsStatusFieldTermsOfServiceRequirementField(val: any): CollaborationAcceptanceRequirementsStatusFieldTermsOfServiceRequirementField {
    const isAccepted: undefined | boolean = isJson(val.is_accepted, "boolean") ? val.is_accepted : void 0;
    const termsOfService: undefined | TermsOfServiceBase = val.terms_of_service == void 0 ? void 0 : newDeserializeTermsOfServiceBase(val.terms_of_service);
    return { isAccepted: isAccepted, termsOfService: termsOfService } satisfies CollaborationAcceptanceRequirementsStatusFieldTermsOfServiceRequirementField;
}
export function newSerializeCollaborationAcceptanceRequirementsStatusFieldStrongPasswordRequirementField(val: CollaborationAcceptanceRequirementsStatusFieldStrongPasswordRequirementField): Json {
    return { ["enterprise_has_strong_password_required_for_external_users"]: val.enterpriseHasStrongPasswordRequiredForExternalUsers, ["user_has_strong_password"]: val.userHasStrongPassword };
}
export function newDeserializeCollaborationAcceptanceRequirementsStatusFieldStrongPasswordRequirementField(val: any): CollaborationAcceptanceRequirementsStatusFieldStrongPasswordRequirementField {
    const enterpriseHasStrongPasswordRequiredForExternalUsers: undefined | boolean = isJson(val.enterprise_has_strong_password_required_for_external_users, "boolean") ? val.enterprise_has_strong_password_required_for_external_users : void 0;
    const userHasStrongPassword: undefined | boolean = isJson(val.user_has_strong_password, "boolean") ? val.user_has_strong_password : void 0;
    return { enterpriseHasStrongPasswordRequiredForExternalUsers: enterpriseHasStrongPasswordRequiredForExternalUsers, userHasStrongPassword: userHasStrongPassword } satisfies CollaborationAcceptanceRequirementsStatusFieldStrongPasswordRequirementField;
}
export function newSerializeCollaborationAcceptanceRequirementsStatusFieldTwoFactorAuthenticationRequirementField(val: CollaborationAcceptanceRequirementsStatusFieldTwoFactorAuthenticationRequirementField): Json {
    return { ["enterprise_has_two_factor_auth_enabled"]: val.enterpriseHasTwoFactorAuthEnabled, ["user_has_two_factor_authentication_enabled"]: val.userHasTwoFactorAuthenticationEnabled };
}
export function newDeserializeCollaborationAcceptanceRequirementsStatusFieldTwoFactorAuthenticationRequirementField(val: any): CollaborationAcceptanceRequirementsStatusFieldTwoFactorAuthenticationRequirementField {
    const enterpriseHasTwoFactorAuthEnabled: undefined | boolean = isJson(val.enterprise_has_two_factor_auth_enabled, "boolean") ? val.enterprise_has_two_factor_auth_enabled : void 0;
    const userHasTwoFactorAuthenticationEnabled: undefined | boolean = isJson(val.user_has_two_factor_authentication_enabled, "boolean") ? val.user_has_two_factor_authentication_enabled : void 0;
    return { enterpriseHasTwoFactorAuthEnabled: enterpriseHasTwoFactorAuthEnabled, userHasTwoFactorAuthenticationEnabled: userHasTwoFactorAuthenticationEnabled } satisfies CollaborationAcceptanceRequirementsStatusFieldTwoFactorAuthenticationRequirementField;
}
export function newSerializeCollaborationAcceptanceRequirementsStatusField(val: CollaborationAcceptanceRequirementsStatusField): Json {
    return { ["terms_of_service_requirement"]: val.termsOfServiceRequirement == void 0 ? void 0 : newSerializeCollaborationAcceptanceRequirementsStatusFieldTermsOfServiceRequirementField(val.termsOfServiceRequirement), ["strong_password_requirement"]: val.strongPasswordRequirement == void 0 ? void 0 : newSerializeCollaborationAcceptanceRequirementsStatusFieldStrongPasswordRequirementField(val.strongPasswordRequirement), ["two_factor_authentication_requirement"]: val.twoFactorAuthenticationRequirement == void 0 ? void 0 : newSerializeCollaborationAcceptanceRequirementsStatusFieldTwoFactorAuthenticationRequirementField(val.twoFactorAuthenticationRequirement) };
}
export function newDeserializeCollaborationAcceptanceRequirementsStatusField(val: any): CollaborationAcceptanceRequirementsStatusField {
    const termsOfServiceRequirement: undefined | CollaborationAcceptanceRequirementsStatusFieldTermsOfServiceRequirementField = val.terms_of_service_requirement == void 0 ? void 0 : newDeserializeCollaborationAcceptanceRequirementsStatusFieldTermsOfServiceRequirementField(val.terms_of_service_requirement);
    const strongPasswordRequirement: undefined | CollaborationAcceptanceRequirementsStatusFieldStrongPasswordRequirementField = val.strong_password_requirement == void 0 ? void 0 : newDeserializeCollaborationAcceptanceRequirementsStatusFieldStrongPasswordRequirementField(val.strong_password_requirement);
    const twoFactorAuthenticationRequirement: undefined | CollaborationAcceptanceRequirementsStatusFieldTwoFactorAuthenticationRequirementField = val.two_factor_authentication_requirement == void 0 ? void 0 : newDeserializeCollaborationAcceptanceRequirementsStatusFieldTwoFactorAuthenticationRequirementField(val.two_factor_authentication_requirement);
    return { termsOfServiceRequirement: termsOfServiceRequirement, strongPasswordRequirement: strongPasswordRequirement, twoFactorAuthenticationRequirement: twoFactorAuthenticationRequirement } satisfies CollaborationAcceptanceRequirementsStatusField;
}
export function newSerializeCollaboration(val: Collaboration): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : newSerializeCollaborationTypeField(val.type), ["item"]: val.item == void 0 ? void 0 : newSerializeFileOrFolderOrWebLink(val.item), ["accessible_by"]: val.accessibleBy == void 0 ? void 0 : newSerializeUserCollaborations(val.accessibleBy), ["invite_email"]: val.inviteEmail, ["role"]: val.role == void 0 ? void 0 : newSerializeCollaborationRoleField(val.role), ["expires_at"]: val.expiresAt, ["status"]: val.status == void 0 ? void 0 : newSerializeCollaborationStatusField(val.status), ["acknowledged_at"]: val.acknowledgedAt, ["created_by"]: val.createdBy == void 0 ? void 0 : newSerializeUserCollaborations(val.createdBy), ["created_at"]: val.createdAt, ["modified_at"]: val.modifiedAt, ["acceptance_requirements_status"]: val.acceptanceRequirementsStatus == void 0 ? void 0 : newSerializeCollaborationAcceptanceRequirementsStatusField(val.acceptanceRequirementsStatus) };
}
export function newDeserializeCollaboration(val: any): Collaboration {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | CollaborationTypeField = val.type == void 0 ? void 0 : newDeserializeCollaborationTypeField(val.type);
    const item: undefined | FileOrFolderOrWebLink = val.item == void 0 ? void 0 : newDeserializeFileOrFolderOrWebLink(val.item);
    const accessibleBy: undefined | UserCollaborations = val.accessible_by == void 0 ? void 0 : newDeserializeUserCollaborations(val.accessible_by);
    const inviteEmail: undefined | string = isJson(val.invite_email, "string") ? val.invite_email : void 0;
    const role: undefined | CollaborationRoleField = val.role == void 0 ? void 0 : newDeserializeCollaborationRoleField(val.role);
    const expiresAt: undefined | string = isJson(val.expires_at, "string") ? val.expires_at : void 0;
    const status: undefined | CollaborationStatusField = val.status == void 0 ? void 0 : newDeserializeCollaborationStatusField(val.status);
    const acknowledgedAt: undefined | string = isJson(val.acknowledged_at, "string") ? val.acknowledged_at : void 0;
    const createdBy: undefined | UserCollaborations = val.created_by == void 0 ? void 0 : newDeserializeUserCollaborations(val.created_by);
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const modifiedAt: undefined | string = isJson(val.modified_at, "string") ? val.modified_at : void 0;
    const acceptanceRequirementsStatus: undefined | CollaborationAcceptanceRequirementsStatusField = val.acceptance_requirements_status == void 0 ? void 0 : newDeserializeCollaborationAcceptanceRequirementsStatusField(val.acceptance_requirements_status);
    return { id: id, type: type, item: item, accessibleBy: accessibleBy, inviteEmail: inviteEmail, role: role, expiresAt: expiresAt, status: status, acknowledgedAt: acknowledgedAt, createdBy: createdBy, createdAt: createdAt, modifiedAt: modifiedAt, acceptanceRequirementsStatus: acceptanceRequirementsStatus } satisfies Collaboration;
}
export function newSerializeCollaborationsOrderFieldDirectionField(val: CollaborationsOrderFieldDirectionField): Json {
    return val;
}
export function newDeserializeCollaborationsOrderFieldDirectionField(val: any): CollaborationsOrderFieldDirectionField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"CollaborationsOrderFieldDirectionField\"";
    }
    if (val == "ASC") {
        return "ASC";
    }
    if (val == "DESC") {
        return "DESC";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeCollaborationsOrderField(val: CollaborationsOrderField): Json {
    return { ["by"]: val.by, ["direction"]: val.direction == void 0 ? void 0 : newSerializeCollaborationsOrderFieldDirectionField(val.direction) };
}
export function newDeserializeCollaborationsOrderField(val: any): CollaborationsOrderField {
    const by: undefined | string = isJson(val.by, "string") ? val.by : void 0;
    const direction: undefined | CollaborationsOrderFieldDirectionField = val.direction == void 0 ? void 0 : newDeserializeCollaborationsOrderFieldDirectionField(val.direction);
    return { by: by, direction: direction } satisfies CollaborationsOrderField;
}
export function newSerializeCollaborations(val: Collaborations): Json {
    return { ["total_count"]: val.totalCount, ["limit"]: val.limit, ["offset"]: val.offset, ["order"]: val.order == void 0 ? void 0 : val.order.map(function (item: CollaborationsOrderField): any {
            return newSerializeCollaborationsOrderField(item);
        }) as readonly any[], ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: Collaboration): any {
            return newSerializeCollaboration(item);
        }) as readonly any[] };
}
export function newDeserializeCollaborations(val: any): Collaborations {
    const totalCount: undefined | number = isJson(val.total_count, "number") ? val.total_count : void 0;
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const offset: undefined | number = isJson(val.offset, "number") ? val.offset : void 0;
    const order: undefined | readonly CollaborationsOrderField[] = isJson(val.order, "array") ? val.order.map(function (itm: Json): any {
        return newDeserializeCollaborationsOrderField(itm);
    }) as readonly any[] : void 0;
    const entries: undefined | readonly Collaboration[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return newDeserializeCollaboration(itm);
    }) as readonly any[] : void 0;
    return { totalCount: totalCount, limit: limit, offset: offset, order: order, entries: entries } satisfies Collaborations;
}
export function newSerializeWorkflowMiniTypeField(val: WorkflowMiniTypeField): Json {
    return val;
}
export function newDeserializeWorkflowMiniTypeField(val: any): WorkflowMiniTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"WorkflowMiniTypeField\"";
    }
    if (val == "workflow") {
        return "workflow";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeWorkflowMini(val: WorkflowMini): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : newSerializeWorkflowMiniTypeField(val.type), ["name"]: val.name, ["description"]: val.description, ["is_enabled"]: val.isEnabled };
}
export function newDeserializeWorkflowMini(val: any): WorkflowMini {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | WorkflowMiniTypeField = val.type == void 0 ? void 0 : newDeserializeWorkflowMiniTypeField(val.type);
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const description: undefined | string = isJson(val.description, "string") ? val.description : void 0;
    const isEnabled: undefined | boolean = isJson(val.is_enabled, "boolean") ? val.is_enabled : void 0;
    return { id: id, type: type, name: name, description: description, isEnabled: isEnabled } satisfies WorkflowMini;
}
export function newSerializeWorkflowFlowsFieldTypeField(val: WorkflowFlowsFieldTypeField): Json {
    return val;
}
export function newDeserializeWorkflowFlowsFieldTypeField(val: any): WorkflowFlowsFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"WorkflowFlowsFieldTypeField\"";
    }
    if (val == "flow") {
        return "flow";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeWorkflowFlowsFieldTriggerFieldTypeField(val: WorkflowFlowsFieldTriggerFieldTypeField): Json {
    return val;
}
export function newDeserializeWorkflowFlowsFieldTriggerFieldTypeField(val: any): WorkflowFlowsFieldTriggerFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"WorkflowFlowsFieldTriggerFieldTypeField\"";
    }
    if (val == "trigger") {
        return "trigger";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeWorkflowFlowsFieldTriggerFieldTriggerTypeField(val: WorkflowFlowsFieldTriggerFieldTriggerTypeField): Json {
    return val;
}
export function newDeserializeWorkflowFlowsFieldTriggerFieldTriggerTypeField(val: any): WorkflowFlowsFieldTriggerFieldTriggerTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"WorkflowFlowsFieldTriggerFieldTriggerTypeField\"";
    }
    if (val == "WORKFLOW_MANUAL_START") {
        return "WORKFLOW_MANUAL_START";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeWorkflowFlowsFieldTriggerFieldScopeFieldTypeField(val: WorkflowFlowsFieldTriggerFieldScopeFieldTypeField): Json {
    return val;
}
export function newDeserializeWorkflowFlowsFieldTriggerFieldScopeFieldTypeField(val: any): WorkflowFlowsFieldTriggerFieldScopeFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"WorkflowFlowsFieldTriggerFieldScopeFieldTypeField\"";
    }
    if (val == "trigger_scope") {
        return "trigger_scope";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeWorkflowFlowsFieldTriggerFieldScopeFieldObjectFieldTypeField(val: WorkflowFlowsFieldTriggerFieldScopeFieldObjectFieldTypeField): Json {
    return val;
}
export function newDeserializeWorkflowFlowsFieldTriggerFieldScopeFieldObjectFieldTypeField(val: any): WorkflowFlowsFieldTriggerFieldScopeFieldObjectFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"WorkflowFlowsFieldTriggerFieldScopeFieldObjectFieldTypeField\"";
    }
    if (val == "folder") {
        return "folder";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeWorkflowFlowsFieldTriggerFieldScopeFieldObjectField(val: WorkflowFlowsFieldTriggerFieldScopeFieldObjectField): Json {
    return { ["type"]: val.type == void 0 ? void 0 : newSerializeWorkflowFlowsFieldTriggerFieldScopeFieldObjectFieldTypeField(val.type), ["id"]: val.id };
}
export function newDeserializeWorkflowFlowsFieldTriggerFieldScopeFieldObjectField(val: any): WorkflowFlowsFieldTriggerFieldScopeFieldObjectField {
    const type: undefined | WorkflowFlowsFieldTriggerFieldScopeFieldObjectFieldTypeField = val.type == void 0 ? void 0 : newDeserializeWorkflowFlowsFieldTriggerFieldScopeFieldObjectFieldTypeField(val.type);
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    return { type: type, id: id } satisfies WorkflowFlowsFieldTriggerFieldScopeFieldObjectField;
}
export function newSerializeWorkflowFlowsFieldTriggerFieldScopeField(val: WorkflowFlowsFieldTriggerFieldScopeField): Json {
    return { ["type"]: val.type == void 0 ? void 0 : newSerializeWorkflowFlowsFieldTriggerFieldScopeFieldTypeField(val.type), ["ref"]: val.ref, ["object"]: val.object == void 0 ? void 0 : newSerializeWorkflowFlowsFieldTriggerFieldScopeFieldObjectField(val.object) };
}
export function newDeserializeWorkflowFlowsFieldTriggerFieldScopeField(val: any): WorkflowFlowsFieldTriggerFieldScopeField {
    const type: undefined | WorkflowFlowsFieldTriggerFieldScopeFieldTypeField = val.type == void 0 ? void 0 : newDeserializeWorkflowFlowsFieldTriggerFieldScopeFieldTypeField(val.type);
    const ref: undefined | string = isJson(val.ref, "string") ? val.ref : void 0;
    const object: undefined | WorkflowFlowsFieldTriggerFieldScopeFieldObjectField = val.object == void 0 ? void 0 : newDeserializeWorkflowFlowsFieldTriggerFieldScopeFieldObjectField(val.object);
    return { type: type, ref: ref, object: object } satisfies WorkflowFlowsFieldTriggerFieldScopeField;
}
export function newSerializeWorkflowFlowsFieldTriggerField(val: WorkflowFlowsFieldTriggerField): Json {
    return { ["type"]: val.type == void 0 ? void 0 : newSerializeWorkflowFlowsFieldTriggerFieldTypeField(val.type), ["trigger_type"]: val.triggerType == void 0 ? void 0 : newSerializeWorkflowFlowsFieldTriggerFieldTriggerTypeField(val.triggerType), ["scope"]: val.scope == void 0 ? void 0 : val.scope.map(function (item: WorkflowFlowsFieldTriggerFieldScopeField): any {
            return newSerializeWorkflowFlowsFieldTriggerFieldScopeField(item);
        }) as readonly any[] };
}
export function newDeserializeWorkflowFlowsFieldTriggerField(val: any): WorkflowFlowsFieldTriggerField {
    const type: undefined | WorkflowFlowsFieldTriggerFieldTypeField = val.type == void 0 ? void 0 : newDeserializeWorkflowFlowsFieldTriggerFieldTypeField(val.type);
    const triggerType: undefined | WorkflowFlowsFieldTriggerFieldTriggerTypeField = val.trigger_type == void 0 ? void 0 : newDeserializeWorkflowFlowsFieldTriggerFieldTriggerTypeField(val.trigger_type);
    const scope: undefined | readonly WorkflowFlowsFieldTriggerFieldScopeField[] = isJson(val.scope, "array") ? val.scope.map(function (itm: Json): any {
        return newDeserializeWorkflowFlowsFieldTriggerFieldScopeField(itm);
    }) as readonly any[] : void 0;
    return { type: type, triggerType: triggerType, scope: scope } satisfies WorkflowFlowsFieldTriggerField;
}
export function newSerializeWorkflowFlowsFieldOutcomesFieldTypeField(val: WorkflowFlowsFieldOutcomesFieldTypeField): Json {
    return val;
}
export function newDeserializeWorkflowFlowsFieldOutcomesFieldTypeField(val: any): WorkflowFlowsFieldOutcomesFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"WorkflowFlowsFieldOutcomesFieldTypeField\"";
    }
    if (val == "outcome") {
        return "outcome";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeWorkflowFlowsFieldOutcomesFieldActionTypeField(val: WorkflowFlowsFieldOutcomesFieldActionTypeField): Json {
    return val;
}
export function newDeserializeWorkflowFlowsFieldOutcomesFieldActionTypeField(val: any): WorkflowFlowsFieldOutcomesFieldActionTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"WorkflowFlowsFieldOutcomesFieldActionTypeField\"";
    }
    if (val == "add_metadata") {
        return "add_metadata";
    }
    if (val == "assign_task") {
        return "assign_task";
    }
    if (val == "copy_file") {
        return "copy_file";
    }
    if (val == "copy_folder") {
        return "copy_folder";
    }
    if (val == "create_folder") {
        return "create_folder";
    }
    if (val == "delete_file") {
        return "delete_file";
    }
    if (val == "delete_folder") {
        return "delete_folder";
    }
    if (val == "lock_file") {
        return "lock_file";
    }
    if (val == "move_file") {
        return "move_file";
    }
    if (val == "move_folder") {
        return "move_folder";
    }
    if (val == "remove_watermark_file") {
        return "remove_watermark_file";
    }
    if (val == "rename_folder") {
        return "rename_folder";
    }
    if (val == "restore_folder") {
        return "restore_folder";
    }
    if (val == "share_file") {
        return "share_file";
    }
    if (val == "share_folder") {
        return "share_folder";
    }
    if (val == "unlock_file") {
        return "unlock_file";
    }
    if (val == "upload_file") {
        return "upload_file";
    }
    if (val == "wait_for_task") {
        return "wait_for_task";
    }
    if (val == "watermark_file") {
        return "watermark_file";
    }
    if (val == "go_back_to_step") {
        return "go_back_to_step";
    }
    if (val == "apply_file_classification") {
        return "apply_file_classification";
    }
    if (val == "apply_folder_classification") {
        return "apply_folder_classification";
    }
    if (val == "send_notification") {
        return "send_notification";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeWorkflowFlowsFieldOutcomesFieldIfRejectedFieldTypeField(val: WorkflowFlowsFieldOutcomesFieldIfRejectedFieldTypeField): Json {
    return val;
}
export function newDeserializeWorkflowFlowsFieldOutcomesFieldIfRejectedFieldTypeField(val: any): WorkflowFlowsFieldOutcomesFieldIfRejectedFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"WorkflowFlowsFieldOutcomesFieldIfRejectedFieldTypeField\"";
    }
    if (val == "outcome") {
        return "outcome";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeWorkflowFlowsFieldOutcomesFieldIfRejectedFieldActionTypeField(val: WorkflowFlowsFieldOutcomesFieldIfRejectedFieldActionTypeField): Json {
    return val;
}
export function newDeserializeWorkflowFlowsFieldOutcomesFieldIfRejectedFieldActionTypeField(val: any): WorkflowFlowsFieldOutcomesFieldIfRejectedFieldActionTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"WorkflowFlowsFieldOutcomesFieldIfRejectedFieldActionTypeField\"";
    }
    if (val == "add_metadata") {
        return "add_metadata";
    }
    if (val == "assign_task") {
        return "assign_task";
    }
    if (val == "copy_file") {
        return "copy_file";
    }
    if (val == "copy_folder") {
        return "copy_folder";
    }
    if (val == "create_folder") {
        return "create_folder";
    }
    if (val == "delete_file") {
        return "delete_file";
    }
    if (val == "delete_folder") {
        return "delete_folder";
    }
    if (val == "lock_file") {
        return "lock_file";
    }
    if (val == "move_file") {
        return "move_file";
    }
    if (val == "move_folder") {
        return "move_folder";
    }
    if (val == "remove_watermark_file") {
        return "remove_watermark_file";
    }
    if (val == "rename_folder") {
        return "rename_folder";
    }
    if (val == "restore_folder") {
        return "restore_folder";
    }
    if (val == "share_file") {
        return "share_file";
    }
    if (val == "share_folder") {
        return "share_folder";
    }
    if (val == "unlock_file") {
        return "unlock_file";
    }
    if (val == "upload_file") {
        return "upload_file";
    }
    if (val == "wait_for_task") {
        return "wait_for_task";
    }
    if (val == "watermark_file") {
        return "watermark_file";
    }
    if (val == "go_back_to_step") {
        return "go_back_to_step";
    }
    if (val == "apply_file_classification") {
        return "apply_file_classification";
    }
    if (val == "apply_folder_classification") {
        return "apply_folder_classification";
    }
    if (val == "send_notification") {
        return "send_notification";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeWorkflowFlowsFieldOutcomesFieldIfRejectedField(val: WorkflowFlowsFieldOutcomesFieldIfRejectedField): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : newSerializeWorkflowFlowsFieldOutcomesFieldIfRejectedFieldTypeField(val.type), ["name"]: val.name, ["action_type"]: val.actionType == void 0 ? void 0 : newSerializeWorkflowFlowsFieldOutcomesFieldIfRejectedFieldActionTypeField(val.actionType) };
}
export function newDeserializeWorkflowFlowsFieldOutcomesFieldIfRejectedField(val: any): WorkflowFlowsFieldOutcomesFieldIfRejectedField {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | WorkflowFlowsFieldOutcomesFieldIfRejectedFieldTypeField = val.type == void 0 ? void 0 : newDeserializeWorkflowFlowsFieldOutcomesFieldIfRejectedFieldTypeField(val.type);
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const actionType: undefined | WorkflowFlowsFieldOutcomesFieldIfRejectedFieldActionTypeField = val.action_type == void 0 ? void 0 : newDeserializeWorkflowFlowsFieldOutcomesFieldIfRejectedFieldActionTypeField(val.action_type);
    return { id: id, type: type, name: name, actionType: actionType } satisfies WorkflowFlowsFieldOutcomesFieldIfRejectedField;
}
export function newSerializeWorkflowFlowsFieldOutcomesField(val: WorkflowFlowsFieldOutcomesField): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : newSerializeWorkflowFlowsFieldOutcomesFieldTypeField(val.type), ["name"]: val.name, ["action_type"]: val.actionType == void 0 ? void 0 : newSerializeWorkflowFlowsFieldOutcomesFieldActionTypeField(val.actionType), ["if_rejected"]: val.ifRejected == void 0 ? void 0 : val.ifRejected.map(function (item: WorkflowFlowsFieldOutcomesFieldIfRejectedField): any {
            return newSerializeWorkflowFlowsFieldOutcomesFieldIfRejectedField(item);
        }) as readonly any[] };
}
export function newDeserializeWorkflowFlowsFieldOutcomesField(val: any): WorkflowFlowsFieldOutcomesField {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | WorkflowFlowsFieldOutcomesFieldTypeField = val.type == void 0 ? void 0 : newDeserializeWorkflowFlowsFieldOutcomesFieldTypeField(val.type);
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const actionType: undefined | WorkflowFlowsFieldOutcomesFieldActionTypeField = val.action_type == void 0 ? void 0 : newDeserializeWorkflowFlowsFieldOutcomesFieldActionTypeField(val.action_type);
    const ifRejected: undefined | readonly WorkflowFlowsFieldOutcomesFieldIfRejectedField[] = isJson(val.if_rejected, "array") ? val.if_rejected.map(function (itm: Json): any {
        return newDeserializeWorkflowFlowsFieldOutcomesFieldIfRejectedField(itm);
    }) as readonly any[] : void 0;
    return { id: id, type: type, name: name, actionType: actionType, ifRejected: ifRejected } satisfies WorkflowFlowsFieldOutcomesField;
}
export function newSerializeWorkflowFlowsField(val: WorkflowFlowsField): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : newSerializeWorkflowFlowsFieldTypeField(val.type), ["trigger"]: val.trigger == void 0 ? void 0 : newSerializeWorkflowFlowsFieldTriggerField(val.trigger), ["outcomes"]: val.outcomes == void 0 ? void 0 : val.outcomes.map(function (item: WorkflowFlowsFieldOutcomesField): any {
            return newSerializeWorkflowFlowsFieldOutcomesField(item);
        }) as readonly any[], ["created_at"]: val.createdAt, ["created_by"]: val.createdBy == void 0 ? void 0 : newSerializeUserBase(val.createdBy) };
}
export function newDeserializeWorkflowFlowsField(val: any): WorkflowFlowsField {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | WorkflowFlowsFieldTypeField = val.type == void 0 ? void 0 : newDeserializeWorkflowFlowsFieldTypeField(val.type);
    const trigger: undefined | WorkflowFlowsFieldTriggerField = val.trigger == void 0 ? void 0 : newDeserializeWorkflowFlowsFieldTriggerField(val.trigger);
    const outcomes: undefined | readonly WorkflowFlowsFieldOutcomesField[] = isJson(val.outcomes, "array") ? val.outcomes.map(function (itm: Json): any {
        return newDeserializeWorkflowFlowsFieldOutcomesField(itm);
    }) as readonly any[] : void 0;
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const createdBy: undefined | UserBase = val.created_by == void 0 ? void 0 : newDeserializeUserBase(val.created_by);
    return { id: id, type: type, trigger: trigger, outcomes: outcomes, createdAt: createdAt, createdBy: createdBy } satisfies WorkflowFlowsField;
}
export function newSerializeWorkflow(val: Workflow): Json {
    const base: any = newSerializeWorkflowMini(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"Workflow\"";
    }
    return { ...base, ...{ ["flows"]: val.flows == void 0 ? void 0 : val.flows.map(function (item: WorkflowFlowsField): any {
                return newSerializeWorkflowFlowsField(item);
            }) as readonly any[] } };
}
export function newDeserializeWorkflow(val: any): Workflow {
    const flows: undefined | readonly WorkflowFlowsField[] = isJson(val.flows, "array") ? val.flows.map(function (itm: Json): any {
        return newDeserializeWorkflowFlowsField(itm);
    }) as readonly any[] : void 0;
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | WorkflowMiniTypeField = val.type == void 0 ? void 0 : newDeserializeWorkflowMiniTypeField(val.type);
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const description: undefined | string = isJson(val.description, "string") ? val.description : void 0;
    const isEnabled: undefined | boolean = isJson(val.is_enabled, "boolean") ? val.is_enabled : void 0;
    return { flows: flows, id: id, type: type, name: name, description: description, isEnabled: isEnabled } satisfies Workflow;
}
export function newSerializeWorkflows(val: Workflows): Json {
    return { ["limit"]: val.limit, ["next_marker"]: val.nextMarker, ["prev_marker"]: val.prevMarker, ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: Workflow): any {
            return newSerializeWorkflow(item);
        }) as readonly any[] };
}
export function newDeserializeWorkflows(val: any): Workflows {
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const nextMarker: undefined | number = isJson(val.next_marker, "number") ? val.next_marker : void 0;
    const prevMarker: undefined | number = isJson(val.prev_marker, "number") ? val.prev_marker : void 0;
    const entries: undefined | readonly Workflow[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return newDeserializeWorkflow(itm);
    }) as readonly any[] : void 0;
    return { limit: limit, nextMarker: nextMarker, prevMarker: prevMarker, entries: entries } satisfies Workflows;
}
export function newSerializeWorkflowFull(val: WorkflowFull): Json {
    const base: any = newSerializeWorkflow(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"WorkflowFull\"";
    }
    return { ...base, ...{ ["created_at"]: val.createdAt, ["modified_at"]: val.modifiedAt, ["created_by"]: val.createdBy == void 0 ? void 0 : newSerializeUserBase(val.createdBy), ["modified_by"]: val.modifiedBy == void 0 ? void 0 : newSerializeUserBase(val.modifiedBy) } };
}
export function newDeserializeWorkflowFull(val: any): WorkflowFull {
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const modifiedAt: undefined | string = isJson(val.modified_at, "string") ? val.modified_at : void 0;
    const createdBy: undefined | UserBase = val.created_by == void 0 ? void 0 : newDeserializeUserBase(val.created_by);
    const modifiedBy: undefined | UserBase = val.modified_by == void 0 ? void 0 : newDeserializeUserBase(val.modified_by);
    const flows: undefined | readonly WorkflowFlowsField[] = isJson(val.flows, "array") ? val.flows.map(function (itm: Json): any {
        return newDeserializeWorkflowFlowsField(itm);
    }) as readonly any[] : void 0;
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | WorkflowMiniTypeField = val.type == void 0 ? void 0 : newDeserializeWorkflowMiniTypeField(val.type);
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const description: undefined | string = isJson(val.description, "string") ? val.description : void 0;
    const isEnabled: undefined | boolean = isJson(val.is_enabled, "boolean") ? val.is_enabled : void 0;
    return { createdAt: createdAt, modifiedAt: modifiedAt, createdBy: createdBy, modifiedBy: modifiedBy, flows: flows, id: id, type: type, name: name, description: description, isEnabled: isEnabled } satisfies WorkflowFull;
}
export function newSerializeZipDownloadNameConflictsFieldTypeField(val: ZipDownloadNameConflictsFieldTypeField): Json {
    return val;
}
export function newDeserializeZipDownloadNameConflictsFieldTypeField(val: any): ZipDownloadNameConflictsFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"ZipDownloadNameConflictsFieldTypeField\"";
    }
    if (val == "file") {
        return "file";
    }
    if (val == "folder") {
        return "folder";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeZipDownloadNameConflictsField(val: ZipDownloadNameConflictsField): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : newSerializeZipDownloadNameConflictsFieldTypeField(val.type), ["original_name"]: val.originalName, ["download_name"]: val.downloadName };
}
export function newDeserializeZipDownloadNameConflictsField(val: any): ZipDownloadNameConflictsField {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | ZipDownloadNameConflictsFieldTypeField = val.type == void 0 ? void 0 : newDeserializeZipDownloadNameConflictsFieldTypeField(val.type);
    const originalName: undefined | string = isJson(val.original_name, "string") ? val.original_name : void 0;
    const downloadName: undefined | string = isJson(val.download_name, "string") ? val.download_name : void 0;
    return { id: id, type: type, originalName: originalName, downloadName: downloadName } satisfies ZipDownloadNameConflictsField;
}
export function newSerializeZipDownload(val: ZipDownload): Json {
    return { ["download_url"]: val.downloadUrl, ["status_url"]: val.statusUrl, ["expires_at"]: val.expiresAt, ["name_conflicts"]: val.nameConflicts == void 0 ? void 0 : val.nameConflicts.map(function (item: readonly ZipDownloadNameConflictsField[]): undefined {
            return void 0;
        }) as readonly any[] };
}
export function newDeserializeZipDownload(val: any): ZipDownload {
    const downloadUrl: undefined | string = isJson(val.download_url, "string") ? val.download_url : void 0;
    const statusUrl: undefined | string = isJson(val.status_url, "string") ? val.status_url : void 0;
    const expiresAt: undefined | string = isJson(val.expires_at, "string") ? val.expires_at : void 0;
    const nameConflicts: undefined | readonly (readonly ZipDownloadNameConflictsField[])[] = isJson(val.name_conflicts, "array") ? val.name_conflicts.map(function (itm: Json): undefined {
        return void 0;
    }) as readonly any[] : void 0;
    return { downloadUrl: downloadUrl, statusUrl: statusUrl, expiresAt: expiresAt, nameConflicts: nameConflicts } satisfies ZipDownload;
}
export function newSerializeZipDownloadStatusStateField(val: ZipDownloadStatusStateField): Json {
    return val;
}
export function newDeserializeZipDownloadStatusStateField(val: any): ZipDownloadStatusStateField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"ZipDownloadStatusStateField\"";
    }
    if (val == "in_progress") {
        return "in_progress";
    }
    if (val == "failed") {
        return "failed";
    }
    if (val == "success") {
        return "success";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeZipDownloadStatus(val: ZipDownloadStatus): Json {
    return { ["total_file_count"]: val.totalFileCount, ["downloaded_file_count"]: val.downloadedFileCount, ["skipped_file_count"]: val.skippedFileCount, ["skipped_folder_count"]: val.skippedFolderCount, ["state"]: val.state == void 0 ? void 0 : newSerializeZipDownloadStatusStateField(val.state) };
}
export function newDeserializeZipDownloadStatus(val: any): ZipDownloadStatus {
    const totalFileCount: undefined | number = isJson(val.total_file_count, "number") ? val.total_file_count : void 0;
    const downloadedFileCount: undefined | number = isJson(val.downloaded_file_count, "number") ? val.downloaded_file_count : void 0;
    const skippedFileCount: undefined | number = isJson(val.skipped_file_count, "number") ? val.skipped_file_count : void 0;
    const skippedFolderCount: undefined | number = isJson(val.skipped_folder_count, "number") ? val.skipped_folder_count : void 0;
    const state: undefined | ZipDownloadStatusStateField = val.state == void 0 ? void 0 : newDeserializeZipDownloadStatusStateField(val.state);
    return { totalFileCount: totalFileCount, downloadedFileCount: downloadedFileCount, skippedFileCount: skippedFileCount, skippedFolderCount: skippedFolderCount, state: state } satisfies ZipDownloadStatus;
}
export function newSerializeKeywordSkillCardTypeField(val: KeywordSkillCardTypeField): Json {
    return val;
}
export function newDeserializeKeywordSkillCardTypeField(val: any): KeywordSkillCardTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"KeywordSkillCardTypeField\"";
    }
    if (val == "skill_card") {
        return "skill_card";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeKeywordSkillCardSkillCardTypeField(val: KeywordSkillCardSkillCardTypeField): Json {
    return val;
}
export function newDeserializeKeywordSkillCardSkillCardTypeField(val: any): KeywordSkillCardSkillCardTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"KeywordSkillCardSkillCardTypeField\"";
    }
    if (val == "keyword") {
        return "keyword";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeKeywordSkillCardSkillCardTitleField(val: KeywordSkillCardSkillCardTitleField): Json {
    return { ["code"]: val.code, ["message"]: val.message };
}
export function newDeserializeKeywordSkillCardSkillCardTitleField(val: any): KeywordSkillCardSkillCardTitleField {
    const code: undefined | string = isJson(val.code, "string") ? val.code : void 0;
    const message: string = val.message;
    return { code: code, message: message } satisfies KeywordSkillCardSkillCardTitleField;
}
export function newSerializeKeywordSkillCardSkillFieldTypeField(val: KeywordSkillCardSkillFieldTypeField): Json {
    return val;
}
export function newDeserializeKeywordSkillCardSkillFieldTypeField(val: any): KeywordSkillCardSkillFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"KeywordSkillCardSkillFieldTypeField\"";
    }
    if (val == "service") {
        return "service";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeKeywordSkillCardSkillField(val: KeywordSkillCardSkillField): Json {
    return { ["type"]: newSerializeKeywordSkillCardSkillFieldTypeField(val.type), ["id"]: val.id };
}
export function newDeserializeKeywordSkillCardSkillField(val: any): KeywordSkillCardSkillField {
    const type: KeywordSkillCardSkillFieldTypeField = newDeserializeKeywordSkillCardSkillFieldTypeField(val.type);
    const id: string = val.id;
    return { type: type, id: id } satisfies KeywordSkillCardSkillField;
}
export function newSerializeKeywordSkillCardInvocationFieldTypeField(val: KeywordSkillCardInvocationFieldTypeField): Json {
    return val;
}
export function newDeserializeKeywordSkillCardInvocationFieldTypeField(val: any): KeywordSkillCardInvocationFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"KeywordSkillCardInvocationFieldTypeField\"";
    }
    if (val == "skill_invocation") {
        return "skill_invocation";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeKeywordSkillCardInvocationField(val: KeywordSkillCardInvocationField): Json {
    return { ["type"]: newSerializeKeywordSkillCardInvocationFieldTypeField(val.type), ["id"]: val.id };
}
export function newDeserializeKeywordSkillCardInvocationField(val: any): KeywordSkillCardInvocationField {
    const type: KeywordSkillCardInvocationFieldTypeField = newDeserializeKeywordSkillCardInvocationFieldTypeField(val.type);
    const id: string = val.id;
    return { type: type, id: id } satisfies KeywordSkillCardInvocationField;
}
export function newSerializeKeywordSkillCardEntriesField(val: KeywordSkillCardEntriesField): Json {
    return { ["text"]: val.text };
}
export function newDeserializeKeywordSkillCardEntriesField(val: any): KeywordSkillCardEntriesField {
    const text: undefined | string = isJson(val.text, "string") ? val.text : void 0;
    return { text: text } satisfies KeywordSkillCardEntriesField;
}
export function newSerializeKeywordSkillCard(val: KeywordSkillCard): Json {
    return { ["created_at"]: val.createdAt, ["type"]: newSerializeKeywordSkillCardTypeField(val.type), ["skill_card_type"]: newSerializeKeywordSkillCardSkillCardTypeField(val.skillCardType), ["skill_card_title"]: val.skillCardTitle == void 0 ? void 0 : newSerializeKeywordSkillCardSkillCardTitleField(val.skillCardTitle), ["skill"]: newSerializeKeywordSkillCardSkillField(val.skill), ["invocation"]: newSerializeKeywordSkillCardInvocationField(val.invocation), ["entries"]: val.entries.map(function (item: KeywordSkillCardEntriesField): any {
            return newSerializeKeywordSkillCardEntriesField(item);
        }) as readonly any[] };
}
export function newDeserializeKeywordSkillCard(val: any): KeywordSkillCard {
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const type: KeywordSkillCardTypeField = newDeserializeKeywordSkillCardTypeField(val.type);
    const skillCardType: KeywordSkillCardSkillCardTypeField = newDeserializeKeywordSkillCardSkillCardTypeField(val.skill_card_type);
    const skillCardTitle: undefined | KeywordSkillCardSkillCardTitleField = val.skill_card_title == void 0 ? void 0 : newDeserializeKeywordSkillCardSkillCardTitleField(val.skill_card_title);
    const skill: KeywordSkillCardSkillField = newDeserializeKeywordSkillCardSkillField(val.skill);
    const invocation: KeywordSkillCardInvocationField = newDeserializeKeywordSkillCardInvocationField(val.invocation);
    const entries: readonly KeywordSkillCardEntriesField[] = val.entries.map(function (itm: Json): any {
        return newDeserializeKeywordSkillCardEntriesField(itm);
    }) as readonly any[];
    return { createdAt: createdAt, type: type, skillCardType: skillCardType, skillCardTitle: skillCardTitle, skill: skill, invocation: invocation, entries: entries } satisfies KeywordSkillCard;
}
export function newSerializeIntegrationMappingSlackOptions(val: IntegrationMappingSlackOptions): Json {
    return { ["is_access_management_disabled"]: val.isAccessManagementDisabled };
}
export function newDeserializeIntegrationMappingSlackOptions(val: any): IntegrationMappingSlackOptions {
    const isAccessManagementDisabled: undefined | boolean = isJson(val.is_access_management_disabled, "boolean") ? val.is_access_management_disabled : void 0;
    return { isAccessManagementDisabled: isAccessManagementDisabled } satisfies IntegrationMappingSlackOptions;
}
export function newSerializeIntegrationMappingPartnerItemSlackTypeField(val: IntegrationMappingPartnerItemSlackTypeField): Json {
    return val;
}
export function newDeserializeIntegrationMappingPartnerItemSlackTypeField(val: any): IntegrationMappingPartnerItemSlackTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"IntegrationMappingPartnerItemSlackTypeField\"";
    }
    if (val == "channel") {
        return "channel";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeIntegrationMappingPartnerItemSlack(val: IntegrationMappingPartnerItemSlack): Json {
    return { ["type"]: newSerializeIntegrationMappingPartnerItemSlackTypeField(val.type), ["id"]: val.id, ["slack_workspace_id"]: val.slackWorkspaceId, ["slack_org_id"]: val.slackOrgId };
}
export function newDeserializeIntegrationMappingPartnerItemSlack(val: any): IntegrationMappingPartnerItemSlack {
    const type: IntegrationMappingPartnerItemSlackTypeField = newDeserializeIntegrationMappingPartnerItemSlackTypeField(val.type);
    const id: string = val.id;
    const slackWorkspaceId: undefined | string = isJson(val.slack_workspace_id, "string") ? val.slack_workspace_id : void 0;
    const slackOrgId: undefined | string = isJson(val.slack_org_id, "string") ? val.slack_org_id : void 0;
    return { type: type, id: id, slackWorkspaceId: slackWorkspaceId, slackOrgId: slackOrgId } satisfies IntegrationMappingPartnerItemSlack;
}
export function newSerializeIntegrationMappingTypeField(val: IntegrationMappingTypeField): Json {
    return val;
}
export function newDeserializeIntegrationMappingTypeField(val: any): IntegrationMappingTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"IntegrationMappingTypeField\"";
    }
    if (val == "integration_mapping") {
        return "integration_mapping";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeIntegrationMappingBoxItemField(val: IntegrationMappingBoxItemField): Json {
    return {};
}
export function newDeserializeIntegrationMappingBoxItemField(val: any): IntegrationMappingBoxItemField {
    return {} satisfies IntegrationMappingBoxItemField;
}
export function newSerializeIntegrationMappingOptionsField(val: IntegrationMappingOptionsField): Json {
    return {};
}
export function newDeserializeIntegrationMappingOptionsField(val: any): IntegrationMappingOptionsField {
    return {} satisfies IntegrationMappingOptionsField;
}
export function newSerializeIntegrationMappingCreatedByField(val: IntegrationMappingCreatedByField): Json {
    return {};
}
export function newDeserializeIntegrationMappingCreatedByField(val: any): IntegrationMappingCreatedByField {
    return {} satisfies IntegrationMappingCreatedByField;
}
export function newSerializeIntegrationMappingModifiedByField(val: IntegrationMappingModifiedByField): Json {
    return {};
}
export function newDeserializeIntegrationMappingModifiedByField(val: any): IntegrationMappingModifiedByField {
    return {} satisfies IntegrationMappingModifiedByField;
}
export function newSerializeIntegrationMapping(val: IntegrationMapping): Json {
    const base: any = newSerializeIntegrationMappingBase(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"IntegrationMapping\"";
    }
    return { ...base, ...{ ["type"]: newSerializeIntegrationMappingTypeField(val.type), ["partner_item"]: newSerializeIntegrationMappingPartnerItemSlack(val.partnerItem), ["box_item"]: newSerializeIntegrationMappingBoxItemField(val.boxItem), ["is_manually_created"]: val.isManuallyCreated, ["options"]: val.options == void 0 ? void 0 : newSerializeIntegrationMappingOptionsField(val.options), ["created_by"]: val.createdBy == void 0 ? void 0 : newSerializeIntegrationMappingCreatedByField(val.createdBy), ["modified_by"]: val.modifiedBy == void 0 ? void 0 : newSerializeIntegrationMappingModifiedByField(val.modifiedBy), ["created_at"]: val.createdAt, ["modified_at"]: val.modifiedAt } };
}
export function newDeserializeIntegrationMapping(val: any): IntegrationMapping {
    const type: IntegrationMappingTypeField = newDeserializeIntegrationMappingTypeField(val.type);
    const partnerItem: IntegrationMappingPartnerItemSlack = newDeserializeIntegrationMappingPartnerItemSlack(val.partner_item);
    const boxItem: IntegrationMappingBoxItemField = newDeserializeIntegrationMappingBoxItemField(val.box_item);
    const isManuallyCreated: undefined | boolean = isJson(val.is_manually_created, "boolean") ? val.is_manually_created : void 0;
    const options: undefined | IntegrationMappingOptionsField = val.options == void 0 ? void 0 : newDeserializeIntegrationMappingOptionsField(val.options);
    const createdBy: undefined | IntegrationMappingCreatedByField = val.created_by == void 0 ? void 0 : newDeserializeIntegrationMappingCreatedByField(val.created_by);
    const modifiedBy: undefined | IntegrationMappingModifiedByField = val.modified_by == void 0 ? void 0 : newDeserializeIntegrationMappingModifiedByField(val.modified_by);
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const modifiedAt: undefined | string = isJson(val.modified_at, "string") ? val.modified_at : void 0;
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const integrationType: undefined | IntegrationMappingBaseIntegrationTypeField = val.integration_type == void 0 ? void 0 : newDeserializeIntegrationMappingBaseIntegrationTypeField(val.integration_type);
    return { type: type, partnerItem: partnerItem, boxItem: boxItem, isManuallyCreated: isManuallyCreated, options: options, createdBy: createdBy, modifiedBy: modifiedBy, createdAt: createdAt, modifiedAt: modifiedAt, id: id, integrationType: integrationType } satisfies IntegrationMapping;
}
export function newSerializeIntegrationMappings(val: IntegrationMappings): Json {
    return { ["limit"]: val.limit, ["next_marker"]: val.nextMarker, ["prev_marker"]: val.prevMarker, ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: IntegrationMapping): any {
            return newSerializeIntegrationMapping(item);
        }) as readonly any[] };
}
export function newDeserializeIntegrationMappings(val: any): IntegrationMappings {
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const nextMarker: undefined | number = isJson(val.next_marker, "number") ? val.next_marker : void 0;
    const prevMarker: undefined | number = isJson(val.prev_marker, "number") ? val.prev_marker : void 0;
    const entries: undefined | readonly IntegrationMapping[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return newDeserializeIntegrationMapping(itm);
    }) as readonly any[] : void 0;
    return { limit: limit, nextMarker: nextMarker, prevMarker: prevMarker, entries: entries } satisfies IntegrationMappings;
}
export function newSerializeIntegrationMappingBoxItemSlackTypeField(val: IntegrationMappingBoxItemSlackTypeField): Json {
    return val;
}
export function newDeserializeIntegrationMappingBoxItemSlackTypeField(val: any): IntegrationMappingBoxItemSlackTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"IntegrationMappingBoxItemSlackTypeField\"";
    }
    if (val == "folder") {
        return "folder";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeIntegrationMappingBoxItemSlack(val: IntegrationMappingBoxItemSlack): Json {
    return { ["type"]: newSerializeIntegrationMappingBoxItemSlackTypeField(val.type), ["id"]: val.id };
}
export function newDeserializeIntegrationMappingBoxItemSlack(val: any): IntegrationMappingBoxItemSlack {
    const type: IntegrationMappingBoxItemSlackTypeField = newDeserializeIntegrationMappingBoxItemSlackTypeField(val.type);
    const id: string = val.id;
    return { type: type, id: id } satisfies IntegrationMappingBoxItemSlack;
}
export function newSerializeTimelineSkillCardTypeField(val: TimelineSkillCardTypeField): Json {
    return val;
}
export function newDeserializeTimelineSkillCardTypeField(val: any): TimelineSkillCardTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"TimelineSkillCardTypeField\"";
    }
    if (val == "skill_card") {
        return "skill_card";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeTimelineSkillCardSkillCardTypeField(val: TimelineSkillCardSkillCardTypeField): Json {
    return val;
}
export function newDeserializeTimelineSkillCardSkillCardTypeField(val: any): TimelineSkillCardSkillCardTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"TimelineSkillCardSkillCardTypeField\"";
    }
    if (val == "timeline") {
        return "timeline";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeTimelineSkillCardSkillCardTitleField(val: TimelineSkillCardSkillCardTitleField): Json {
    return { ["code"]: val.code, ["message"]: val.message };
}
export function newDeserializeTimelineSkillCardSkillCardTitleField(val: any): TimelineSkillCardSkillCardTitleField {
    const code: undefined | string = isJson(val.code, "string") ? val.code : void 0;
    const message: string = val.message;
    return { code: code, message: message } satisfies TimelineSkillCardSkillCardTitleField;
}
export function newSerializeTimelineSkillCardSkillFieldTypeField(val: TimelineSkillCardSkillFieldTypeField): Json {
    return val;
}
export function newDeserializeTimelineSkillCardSkillFieldTypeField(val: any): TimelineSkillCardSkillFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"TimelineSkillCardSkillFieldTypeField\"";
    }
    if (val == "service") {
        return "service";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeTimelineSkillCardSkillField(val: TimelineSkillCardSkillField): Json {
    return { ["type"]: newSerializeTimelineSkillCardSkillFieldTypeField(val.type), ["id"]: val.id };
}
export function newDeserializeTimelineSkillCardSkillField(val: any): TimelineSkillCardSkillField {
    const type: TimelineSkillCardSkillFieldTypeField = newDeserializeTimelineSkillCardSkillFieldTypeField(val.type);
    const id: string = val.id;
    return { type: type, id: id } satisfies TimelineSkillCardSkillField;
}
export function newSerializeTimelineSkillCardInvocationFieldTypeField(val: TimelineSkillCardInvocationFieldTypeField): Json {
    return val;
}
export function newDeserializeTimelineSkillCardInvocationFieldTypeField(val: any): TimelineSkillCardInvocationFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"TimelineSkillCardInvocationFieldTypeField\"";
    }
    if (val == "skill_invocation") {
        return "skill_invocation";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeTimelineSkillCardInvocationField(val: TimelineSkillCardInvocationField): Json {
    return { ["type"]: newSerializeTimelineSkillCardInvocationFieldTypeField(val.type), ["id"]: val.id };
}
export function newDeserializeTimelineSkillCardInvocationField(val: any): TimelineSkillCardInvocationField {
    const type: TimelineSkillCardInvocationFieldTypeField = newDeserializeTimelineSkillCardInvocationFieldTypeField(val.type);
    const id: string = val.id;
    return { type: type, id: id } satisfies TimelineSkillCardInvocationField;
}
export function newSerializeTimelineSkillCardEntriesFieldAppearsField(val: TimelineSkillCardEntriesFieldAppearsField): Json {
    return { ["start"]: val.start, ["end"]: val.end };
}
export function newDeserializeTimelineSkillCardEntriesFieldAppearsField(val: any): TimelineSkillCardEntriesFieldAppearsField {
    const start: undefined | number = isJson(val.start, "number") ? val.start : void 0;
    const end: undefined | number = isJson(val.end, "number") ? val.end : void 0;
    return { start: start, end: end } satisfies TimelineSkillCardEntriesFieldAppearsField;
}
export function newSerializeTimelineSkillCardEntriesField(val: TimelineSkillCardEntriesField): Json {
    return { ["text"]: val.text, ["appears"]: val.appears == void 0 ? void 0 : val.appears.map(function (item: TimelineSkillCardEntriesFieldAppearsField): any {
            return newSerializeTimelineSkillCardEntriesFieldAppearsField(item);
        }) as readonly any[], ["image_url"]: val.imageUrl };
}
export function newDeserializeTimelineSkillCardEntriesField(val: any): TimelineSkillCardEntriesField {
    const text: undefined | string = isJson(val.text, "string") ? val.text : void 0;
    const appears: undefined | readonly TimelineSkillCardEntriesFieldAppearsField[] = isJson(val.appears, "array") ? val.appears.map(function (itm: Json): any {
        return newDeserializeTimelineSkillCardEntriesFieldAppearsField(itm);
    }) as readonly any[] : void 0;
    const imageUrl: undefined | string = isJson(val.image_url, "string") ? val.image_url : void 0;
    return { text: text, appears: appears, imageUrl: imageUrl } satisfies TimelineSkillCardEntriesField;
}
export function newSerializeTimelineSkillCard(val: TimelineSkillCard): Json {
    return { ["created_at"]: val.createdAt, ["type"]: newSerializeTimelineSkillCardTypeField(val.type), ["skill_card_type"]: newSerializeTimelineSkillCardSkillCardTypeField(val.skillCardType), ["skill_card_title"]: val.skillCardTitle == void 0 ? void 0 : newSerializeTimelineSkillCardSkillCardTitleField(val.skillCardTitle), ["skill"]: newSerializeTimelineSkillCardSkillField(val.skill), ["invocation"]: newSerializeTimelineSkillCardInvocationField(val.invocation), ["duration"]: val.duration, ["entries"]: val.entries.map(function (item: TimelineSkillCardEntriesField): any {
            return newSerializeTimelineSkillCardEntriesField(item);
        }) as readonly any[] };
}
export function newDeserializeTimelineSkillCard(val: any): TimelineSkillCard {
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const type: TimelineSkillCardTypeField = newDeserializeTimelineSkillCardTypeField(val.type);
    const skillCardType: TimelineSkillCardSkillCardTypeField = newDeserializeTimelineSkillCardSkillCardTypeField(val.skill_card_type);
    const skillCardTitle: undefined | TimelineSkillCardSkillCardTitleField = val.skill_card_title == void 0 ? void 0 : newDeserializeTimelineSkillCardSkillCardTitleField(val.skill_card_title);
    const skill: TimelineSkillCardSkillField = newDeserializeTimelineSkillCardSkillField(val.skill);
    const invocation: TimelineSkillCardInvocationField = newDeserializeTimelineSkillCardInvocationField(val.invocation);
    const duration: undefined | number = isJson(val.duration, "number") ? val.duration : void 0;
    const entries: readonly TimelineSkillCardEntriesField[] = val.entries.map(function (itm: Json): any {
        return newDeserializeTimelineSkillCardEntriesField(itm);
    }) as readonly any[];
    return { createdAt: createdAt, type: type, skillCardType: skillCardType, skillCardTitle: skillCardTitle, skill: skill, invocation: invocation, duration: duration, entries: entries } satisfies TimelineSkillCard;
}
export function newSerializeTranscriptSkillCardTypeField(val: TranscriptSkillCardTypeField): Json {
    return val;
}
export function newDeserializeTranscriptSkillCardTypeField(val: any): TranscriptSkillCardTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"TranscriptSkillCardTypeField\"";
    }
    if (val == "skill_card") {
        return "skill_card";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeTranscriptSkillCardSkillCardTypeField(val: TranscriptSkillCardSkillCardTypeField): Json {
    return val;
}
export function newDeserializeTranscriptSkillCardSkillCardTypeField(val: any): TranscriptSkillCardSkillCardTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"TranscriptSkillCardSkillCardTypeField\"";
    }
    if (val == "transcript") {
        return "transcript";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeTranscriptSkillCardSkillCardTitleField(val: TranscriptSkillCardSkillCardTitleField): Json {
    return { ["code"]: val.code, ["message"]: val.message };
}
export function newDeserializeTranscriptSkillCardSkillCardTitleField(val: any): TranscriptSkillCardSkillCardTitleField {
    const code: undefined | string = isJson(val.code, "string") ? val.code : void 0;
    const message: string = val.message;
    return { code: code, message: message } satisfies TranscriptSkillCardSkillCardTitleField;
}
export function newSerializeTranscriptSkillCardSkillFieldTypeField(val: TranscriptSkillCardSkillFieldTypeField): Json {
    return val;
}
export function newDeserializeTranscriptSkillCardSkillFieldTypeField(val: any): TranscriptSkillCardSkillFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"TranscriptSkillCardSkillFieldTypeField\"";
    }
    if (val == "service") {
        return "service";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeTranscriptSkillCardSkillField(val: TranscriptSkillCardSkillField): Json {
    return { ["type"]: newSerializeTranscriptSkillCardSkillFieldTypeField(val.type), ["id"]: val.id };
}
export function newDeserializeTranscriptSkillCardSkillField(val: any): TranscriptSkillCardSkillField {
    const type: TranscriptSkillCardSkillFieldTypeField = newDeserializeTranscriptSkillCardSkillFieldTypeField(val.type);
    const id: string = val.id;
    return { type: type, id: id } satisfies TranscriptSkillCardSkillField;
}
export function newSerializeTranscriptSkillCardInvocationFieldTypeField(val: TranscriptSkillCardInvocationFieldTypeField): Json {
    return val;
}
export function newDeserializeTranscriptSkillCardInvocationFieldTypeField(val: any): TranscriptSkillCardInvocationFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"TranscriptSkillCardInvocationFieldTypeField\"";
    }
    if (val == "skill_invocation") {
        return "skill_invocation";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeTranscriptSkillCardInvocationField(val: TranscriptSkillCardInvocationField): Json {
    return { ["type"]: newSerializeTranscriptSkillCardInvocationFieldTypeField(val.type), ["id"]: val.id };
}
export function newDeserializeTranscriptSkillCardInvocationField(val: any): TranscriptSkillCardInvocationField {
    const type: TranscriptSkillCardInvocationFieldTypeField = newDeserializeTranscriptSkillCardInvocationFieldTypeField(val.type);
    const id: string = val.id;
    return { type: type, id: id } satisfies TranscriptSkillCardInvocationField;
}
export function newSerializeTranscriptSkillCardEntriesFieldAppearsField(val: TranscriptSkillCardEntriesFieldAppearsField): Json {
    return { ["start"]: val.start };
}
export function newDeserializeTranscriptSkillCardEntriesFieldAppearsField(val: any): TranscriptSkillCardEntriesFieldAppearsField {
    const start: undefined | number = isJson(val.start, "number") ? val.start : void 0;
    return { start: start } satisfies TranscriptSkillCardEntriesFieldAppearsField;
}
export function newSerializeTranscriptSkillCardEntriesField(val: TranscriptSkillCardEntriesField): Json {
    return { ["text"]: val.text, ["appears"]: val.appears == void 0 ? void 0 : val.appears.map(function (item: TranscriptSkillCardEntriesFieldAppearsField): any {
            return newSerializeTranscriptSkillCardEntriesFieldAppearsField(item);
        }) as readonly any[] };
}
export function newDeserializeTranscriptSkillCardEntriesField(val: any): TranscriptSkillCardEntriesField {
    const text: undefined | string = isJson(val.text, "string") ? val.text : void 0;
    const appears: undefined | readonly TranscriptSkillCardEntriesFieldAppearsField[] = isJson(val.appears, "array") ? val.appears.map(function (itm: Json): any {
        return newDeserializeTranscriptSkillCardEntriesFieldAppearsField(itm);
    }) as readonly any[] : void 0;
    return { text: text, appears: appears } satisfies TranscriptSkillCardEntriesField;
}
export function newSerializeTranscriptSkillCard(val: TranscriptSkillCard): Json {
    return { ["created_at"]: val.createdAt, ["type"]: newSerializeTranscriptSkillCardTypeField(val.type), ["skill_card_type"]: newSerializeTranscriptSkillCardSkillCardTypeField(val.skillCardType), ["skill_card_title"]: val.skillCardTitle == void 0 ? void 0 : newSerializeTranscriptSkillCardSkillCardTitleField(val.skillCardTitle), ["skill"]: newSerializeTranscriptSkillCardSkillField(val.skill), ["invocation"]: newSerializeTranscriptSkillCardInvocationField(val.invocation), ["duration"]: val.duration, ["entries"]: val.entries.map(function (item: TranscriptSkillCardEntriesField): any {
            return newSerializeTranscriptSkillCardEntriesField(item);
        }) as readonly any[] };
}
export function newDeserializeTranscriptSkillCard(val: any): TranscriptSkillCard {
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const type: TranscriptSkillCardTypeField = newDeserializeTranscriptSkillCardTypeField(val.type);
    const skillCardType: TranscriptSkillCardSkillCardTypeField = newDeserializeTranscriptSkillCardSkillCardTypeField(val.skill_card_type);
    const skillCardTitle: undefined | TranscriptSkillCardSkillCardTitleField = val.skill_card_title == void 0 ? void 0 : newDeserializeTranscriptSkillCardSkillCardTitleField(val.skill_card_title);
    const skill: TranscriptSkillCardSkillField = newDeserializeTranscriptSkillCardSkillField(val.skill);
    const invocation: TranscriptSkillCardInvocationField = newDeserializeTranscriptSkillCardInvocationField(val.invocation);
    const duration: undefined | number = isJson(val.duration, "number") ? val.duration : void 0;
    const entries: readonly TranscriptSkillCardEntriesField[] = val.entries.map(function (itm: Json): any {
        return newDeserializeTranscriptSkillCardEntriesField(itm);
    }) as readonly any[];
    return { createdAt: createdAt, type: type, skillCardType: skillCardType, skillCardTitle: skillCardTitle, skill: skill, invocation: invocation, duration: duration, entries: entries } satisfies TranscriptSkillCard;
}
export function newSerializeStatusSkillCardTypeField(val: StatusSkillCardTypeField): Json {
    return val;
}
export function newDeserializeStatusSkillCardTypeField(val: any): StatusSkillCardTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"StatusSkillCardTypeField\"";
    }
    if (val == "skill_card") {
        return "skill_card";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeStatusSkillCardSkillCardTypeField(val: StatusSkillCardSkillCardTypeField): Json {
    return val;
}
export function newDeserializeStatusSkillCardSkillCardTypeField(val: any): StatusSkillCardSkillCardTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"StatusSkillCardSkillCardTypeField\"";
    }
    if (val == "status") {
        return "status";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeStatusSkillCardSkillCardTitleField(val: StatusSkillCardSkillCardTitleField): Json {
    return { ["code"]: val.code, ["message"]: val.message };
}
export function newDeserializeStatusSkillCardSkillCardTitleField(val: any): StatusSkillCardSkillCardTitleField {
    const code: undefined | string = isJson(val.code, "string") ? val.code : void 0;
    const message: string = val.message;
    return { code: code, message: message } satisfies StatusSkillCardSkillCardTitleField;
}
export function newSerializeStatusSkillCardStatusFieldCodeField(val: StatusSkillCardStatusFieldCodeField): Json {
    return val;
}
export function newDeserializeStatusSkillCardStatusFieldCodeField(val: any): StatusSkillCardStatusFieldCodeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"StatusSkillCardStatusFieldCodeField\"";
    }
    if (val == "invoked") {
        return "invoked";
    }
    if (val == "processing") {
        return "processing";
    }
    if (val == "success") {
        return "success";
    }
    if (val == "transient_failure") {
        return "transient_failure";
    }
    if (val == "permanent_failure") {
        return "permanent_failure";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeStatusSkillCardStatusField(val: StatusSkillCardStatusField): Json {
    return { ["code"]: newSerializeStatusSkillCardStatusFieldCodeField(val.code), ["message"]: val.message };
}
export function newDeserializeStatusSkillCardStatusField(val: any): StatusSkillCardStatusField {
    const code: StatusSkillCardStatusFieldCodeField = newDeserializeStatusSkillCardStatusFieldCodeField(val.code);
    const message: undefined | string = isJson(val.message, "string") ? val.message : void 0;
    return { code: code, message: message } satisfies StatusSkillCardStatusField;
}
export function newSerializeStatusSkillCardSkillFieldTypeField(val: StatusSkillCardSkillFieldTypeField): Json {
    return val;
}
export function newDeserializeStatusSkillCardSkillFieldTypeField(val: any): StatusSkillCardSkillFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"StatusSkillCardSkillFieldTypeField\"";
    }
    if (val == "service") {
        return "service";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeStatusSkillCardSkillField(val: StatusSkillCardSkillField): Json {
    return { ["type"]: newSerializeStatusSkillCardSkillFieldTypeField(val.type), ["id"]: val.id };
}
export function newDeserializeStatusSkillCardSkillField(val: any): StatusSkillCardSkillField {
    const type: StatusSkillCardSkillFieldTypeField = newDeserializeStatusSkillCardSkillFieldTypeField(val.type);
    const id: string = val.id;
    return { type: type, id: id } satisfies StatusSkillCardSkillField;
}
export function newSerializeStatusSkillCardInvocationFieldTypeField(val: StatusSkillCardInvocationFieldTypeField): Json {
    return val;
}
export function newDeserializeStatusSkillCardInvocationFieldTypeField(val: any): StatusSkillCardInvocationFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"StatusSkillCardInvocationFieldTypeField\"";
    }
    if (val == "skill_invocation") {
        return "skill_invocation";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeStatusSkillCardInvocationField(val: StatusSkillCardInvocationField): Json {
    return { ["type"]: newSerializeStatusSkillCardInvocationFieldTypeField(val.type), ["id"]: val.id };
}
export function newDeserializeStatusSkillCardInvocationField(val: any): StatusSkillCardInvocationField {
    const type: StatusSkillCardInvocationFieldTypeField = newDeserializeStatusSkillCardInvocationFieldTypeField(val.type);
    const id: string = val.id;
    return { type: type, id: id } satisfies StatusSkillCardInvocationField;
}
export function newSerializeStatusSkillCard(val: StatusSkillCard): Json {
    return { ["created_at"]: val.createdAt, ["type"]: newSerializeStatusSkillCardTypeField(val.type), ["skill_card_type"]: newSerializeStatusSkillCardSkillCardTypeField(val.skillCardType), ["skill_card_title"]: val.skillCardTitle == void 0 ? void 0 : newSerializeStatusSkillCardSkillCardTitleField(val.skillCardTitle), ["status"]: newSerializeStatusSkillCardStatusField(val.status), ["skill"]: newSerializeStatusSkillCardSkillField(val.skill), ["invocation"]: newSerializeStatusSkillCardInvocationField(val.invocation) };
}
export function newDeserializeStatusSkillCard(val: any): StatusSkillCard {
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const type: StatusSkillCardTypeField = newDeserializeStatusSkillCardTypeField(val.type);
    const skillCardType: StatusSkillCardSkillCardTypeField = newDeserializeStatusSkillCardSkillCardTypeField(val.skill_card_type);
    const skillCardTitle: undefined | StatusSkillCardSkillCardTitleField = val.skill_card_title == void 0 ? void 0 : newDeserializeStatusSkillCardSkillCardTitleField(val.skill_card_title);
    const status: StatusSkillCardStatusField = newDeserializeStatusSkillCardStatusField(val.status);
    const skill: StatusSkillCardSkillField = newDeserializeStatusSkillCardSkillField(val.skill);
    const invocation: StatusSkillCardInvocationField = newDeserializeStatusSkillCardInvocationField(val.invocation);
    return { createdAt: createdAt, type: type, skillCardType: skillCardType, skillCardTitle: skillCardTitle, status: status, skill: skill, invocation: invocation } satisfies StatusSkillCard;
}
export function newSerializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard(val: KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard): Json {
    throw "Can't serialize KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard";
}
export function newDeserializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard(val: any): KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard {
    throw "Can't deserialize KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard";
}
export function newSerializeSkillCardsMetadata(val: SkillCardsMetadata): Json {
    return { ["$canEdit"]: val.canEdit, ["$id"]: val.id, ["$parent"]: val.parent, ["$scope"]: val.scope, ["$template"]: val.template, ["$type"]: val.type, ["$typeVersion"]: val.typeVersion, ["$version"]: val.version, ["cards"]: val.cards == void 0 ? void 0 : val.cards.map(function (item: KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard): any {
            return newSerializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard(item);
        }) as readonly any[] };
}
export function newDeserializeSkillCardsMetadata(val: any): SkillCardsMetadata {
    const canEdit: undefined | boolean = isJson(val.$canEdit, "boolean") ? val.$canEdit : void 0;
    const id: undefined | string = isJson(val.$id, "string") ? val.$id : void 0;
    const parent: undefined | string = isJson(val.$parent, "string") ? val.$parent : void 0;
    const scope: undefined | string = isJson(val.$scope, "string") ? val.$scope : void 0;
    const template: undefined | string = isJson(val.$template, "string") ? val.$template : void 0;
    const type: undefined | string = isJson(val.$type, "string") ? val.$type : void 0;
    const typeVersion: undefined | number = isJson(val.$typeVersion, "number") ? val.$typeVersion : void 0;
    const version: undefined | number = isJson(val.$version, "number") ? val.$version : void 0;
    const cards: undefined | readonly KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard[] = isJson(val.cards, "array") ? val.cards.map(function (itm: Json): any {
        return newDeserializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard(itm);
    }) as readonly any[] : void 0;
    return { canEdit: canEdit, id: id, parent: parent, scope: scope, template: template, type: type, typeVersion: typeVersion, version: version, cards: cards } satisfies SkillCardsMetadata;
}
export function newSerializeSignRequestCreateSignerRoleField(val: SignRequestCreateSignerRoleField): Json {
    return val;
}
export function newDeserializeSignRequestCreateSignerRoleField(val: any): SignRequestCreateSignerRoleField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"SignRequestCreateSignerRoleField\"";
    }
    if (val == "signer") {
        return "signer";
    }
    if (val == "approver") {
        return "approver";
    }
    if (val == "final_copy_reader") {
        return "final_copy_reader";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeSignRequestCreateSigner(val: SignRequestCreateSigner): Json {
    return { ["email"]: val.email, ["role"]: val.role == void 0 ? void 0 : newSerializeSignRequestCreateSignerRoleField(val.role), ["is_in_person"]: val.isInPerson, ["order"]: val.order, ["embed_url_external_user_id"]: val.embedUrlExternalUserId, ["redirect_url"]: val.redirectUrl, ["declined_redirect_url"]: val.declinedRedirectUrl, ["login_required"]: val.loginRequired, ["verification_phone_number"]: val.verificationPhoneNumber, ["password"]: val.password };
}
export function newDeserializeSignRequestCreateSigner(val: any): SignRequestCreateSigner {
    const email: string = val.email;
    const role: undefined | SignRequestCreateSignerRoleField = val.role == void 0 ? void 0 : newDeserializeSignRequestCreateSignerRoleField(val.role);
    const isInPerson: undefined | boolean = isJson(val.is_in_person, "boolean") ? val.is_in_person : void 0;
    const order: undefined | number = isJson(val.order, "number") ? val.order : void 0;
    const embedUrlExternalUserId: undefined | string = isJson(val.embed_url_external_user_id, "string") ? val.embed_url_external_user_id : void 0;
    const redirectUrl: undefined | string = isJson(val.redirect_url, "string") ? val.redirect_url : void 0;
    const declinedRedirectUrl: undefined | string = isJson(val.declined_redirect_url, "string") ? val.declined_redirect_url : void 0;
    const loginRequired: undefined | boolean = isJson(val.login_required, "boolean") ? val.login_required : void 0;
    const verificationPhoneNumber: undefined | string = isJson(val.verification_phone_number, "string") ? val.verification_phone_number : void 0;
    const password: undefined | string = isJson(val.password, "string") ? val.password : void 0;
    return { email: email, role: role, isInPerson: isInPerson, order: order, embedUrlExternalUserId: embedUrlExternalUserId, redirectUrl: redirectUrl, declinedRedirectUrl: declinedRedirectUrl, loginRequired: loginRequired, verificationPhoneNumber: verificationPhoneNumber, password: password } satisfies SignRequestCreateSigner;
}
export function newSerializeSignRequestPrefillTag(val: SignRequestPrefillTag): Json {
    return { ["document_tag_id"]: val.documentTagId, ["text_value"]: val.textValue, ["checkbox_value"]: val.checkboxValue, ["date_value"]: val.dateValue };
}
export function newDeserializeSignRequestPrefillTag(val: any): SignRequestPrefillTag {
    const documentTagId: undefined | string = isJson(val.document_tag_id, "string") ? val.document_tag_id : void 0;
    const textValue: undefined | string = isJson(val.text_value, "string") ? val.text_value : void 0;
    const checkboxValue: undefined | boolean = isJson(val.checkbox_value, "boolean") ? val.checkbox_value : void 0;
    const dateValue: undefined | string = isJson(val.date_value, "string") ? val.date_value : void 0;
    return { documentTagId: documentTagId, textValue: textValue, checkboxValue: checkboxValue, dateValue: dateValue } satisfies SignRequestPrefillTag;
}
export function newSerializeSignRequestSignerInputTypeField(val: SignRequestSignerInputTypeField): Json {
    return val;
}
export function newDeserializeSignRequestSignerInputTypeField(val: any): SignRequestSignerInputTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"SignRequestSignerInputTypeField\"";
    }
    if (val == "signature") {
        return "signature";
    }
    if (val == "date") {
        return "date";
    }
    if (val == "text") {
        return "text";
    }
    if (val == "checkbox") {
        return "checkbox";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeSignRequestSignerInputContentTypeField(val: SignRequestSignerInputContentTypeField): Json {
    return val;
}
export function newDeserializeSignRequestSignerInputContentTypeField(val: any): SignRequestSignerInputContentTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"SignRequestSignerInputContentTypeField\"";
    }
    if (val == "initial") {
        return "initial";
    }
    if (val == "stamp") {
        return "stamp";
    }
    if (val == "signature") {
        return "signature";
    }
    if (val == "company") {
        return "company";
    }
    if (val == "title") {
        return "title";
    }
    if (val == "email") {
        return "email";
    }
    if (val == "full_name") {
        return "full_name";
    }
    if (val == "first_name") {
        return "first_name";
    }
    if (val == "last_name") {
        return "last_name";
    }
    if (val == "text") {
        return "text";
    }
    if (val == "date") {
        return "date";
    }
    if (val == "checkbox") {
        return "checkbox";
    }
    if (val == "attachment") {
        return "attachment";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeSignRequestSignerInput(val: SignRequestSignerInput): Json {
    const base: any = newSerializeSignRequestPrefillTag(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"SignRequestSignerInput\"";
    }
    return { ...base, ...{ ["type"]: val.type == void 0 ? void 0 : newSerializeSignRequestSignerInputTypeField(val.type), ["content_type"]: val.contentType == void 0 ? void 0 : newSerializeSignRequestSignerInputContentTypeField(val.contentType), ["page_index"]: val.pageIndex } };
}
export function newDeserializeSignRequestSignerInput(val: any): SignRequestSignerInput {
    const type: undefined | SignRequestSignerInputTypeField = val.type == void 0 ? void 0 : newDeserializeSignRequestSignerInputTypeField(val.type);
    const contentType: undefined | SignRequestSignerInputContentTypeField = val.content_type == void 0 ? void 0 : newDeserializeSignRequestSignerInputContentTypeField(val.content_type);
    const pageIndex: number = val.page_index;
    const documentTagId: undefined | string = isJson(val.document_tag_id, "string") ? val.document_tag_id : void 0;
    const textValue: undefined | string = isJson(val.text_value, "string") ? val.text_value : void 0;
    const checkboxValue: undefined | boolean = isJson(val.checkbox_value, "boolean") ? val.checkbox_value : void 0;
    const dateValue: undefined | string = isJson(val.date_value, "string") ? val.date_value : void 0;
    return { type: type, contentType: contentType, pageIndex: pageIndex, documentTagId: documentTagId, textValue: textValue, checkboxValue: checkboxValue, dateValue: dateValue } satisfies SignRequestSignerInput;
}
export function newSerializeSignRequestSignerSignerDecisionFieldTypeField(val: SignRequestSignerSignerDecisionFieldTypeField): Json {
    return val;
}
export function newDeserializeSignRequestSignerSignerDecisionFieldTypeField(val: any): SignRequestSignerSignerDecisionFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"SignRequestSignerSignerDecisionFieldTypeField\"";
    }
    if (val == "signed") {
        return "signed";
    }
    if (val == "declined") {
        return "declined";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeSignRequestSignerSignerDecisionField(val: SignRequestSignerSignerDecisionField): Json {
    return { ["type"]: val.type == void 0 ? void 0 : newSerializeSignRequestSignerSignerDecisionFieldTypeField(val.type), ["finalized_at"]: val.finalizedAt };
}
export function newDeserializeSignRequestSignerSignerDecisionField(val: any): SignRequestSignerSignerDecisionField {
    const type: undefined | SignRequestSignerSignerDecisionFieldTypeField = val.type == void 0 ? void 0 : newDeserializeSignRequestSignerSignerDecisionFieldTypeField(val.type);
    const finalizedAt: undefined | string = isJson(val.finalized_at, "string") ? val.finalized_at : void 0;
    return { type: type, finalizedAt: finalizedAt } satisfies SignRequestSignerSignerDecisionField;
}
export function newSerializeSignRequestSigner(val: SignRequestSigner): Json {
    const base: any = newSerializeSignRequestCreateSigner(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"SignRequestSigner\"";
    }
    return { ...base, ...{ ["has_viewed_document"]: val.hasViewedDocument, ["signer_decision"]: val.signerDecision == void 0 ? void 0 : newSerializeSignRequestSignerSignerDecisionField(val.signerDecision), ["inputs"]: val.inputs == void 0 ? void 0 : val.inputs.map(function (item: SignRequestSignerInput): any {
                return newSerializeSignRequestSignerInput(item);
            }) as readonly any[], ["embed_url"]: val.embedUrl } };
}
export function newDeserializeSignRequestSigner(val: any): SignRequestSigner {
    const hasViewedDocument: undefined | boolean = isJson(val.has_viewed_document, "boolean") ? val.has_viewed_document : void 0;
    const signerDecision: undefined | SignRequestSignerSignerDecisionField = val.signer_decision == void 0 ? void 0 : newDeserializeSignRequestSignerSignerDecisionField(val.signer_decision);
    const inputs: undefined | readonly SignRequestSignerInput[] = isJson(val.inputs, "array") ? val.inputs.map(function (itm: Json): any {
        return newDeserializeSignRequestSignerInput(itm);
    }) as readonly any[] : void 0;
    const embedUrl: undefined | string = isJson(val.embed_url, "string") ? val.embed_url : void 0;
    const email: string = val.email;
    const role: undefined | SignRequestCreateSignerRoleField = val.role == void 0 ? void 0 : newDeserializeSignRequestCreateSignerRoleField(val.role);
    const isInPerson: undefined | boolean = isJson(val.is_in_person, "boolean") ? val.is_in_person : void 0;
    const order: undefined | number = isJson(val.order, "number") ? val.order : void 0;
    const embedUrlExternalUserId: undefined | string = isJson(val.embed_url_external_user_id, "string") ? val.embed_url_external_user_id : void 0;
    const redirectUrl: undefined | string = isJson(val.redirect_url, "string") ? val.redirect_url : void 0;
    const declinedRedirectUrl: undefined | string = isJson(val.declined_redirect_url, "string") ? val.declined_redirect_url : void 0;
    const loginRequired: undefined | boolean = isJson(val.login_required, "boolean") ? val.login_required : void 0;
    const verificationPhoneNumber: undefined | string = isJson(val.verification_phone_number, "string") ? val.verification_phone_number : void 0;
    const password: undefined | string = isJson(val.password, "string") ? val.password : void 0;
    return { hasViewedDocument: hasViewedDocument, signerDecision: signerDecision, inputs: inputs, embedUrl: embedUrl, email: email, role: role, isInPerson: isInPerson, order: order, embedUrlExternalUserId: embedUrlExternalUserId, redirectUrl: redirectUrl, declinedRedirectUrl: declinedRedirectUrl, loginRequired: loginRequired, verificationPhoneNumber: verificationPhoneNumber, password: password } satisfies SignRequestSigner;
}
export function newSerializeSignRequestBase(val: SignRequestBase): Json {
    return { ["is_document_preparation_needed"]: val.isDocumentPreparationNeeded, ["redirect_url"]: val.redirectUrl, ["declined_redirect_url"]: val.declinedRedirectUrl, ["are_text_signatures_enabled"]: val.areTextSignaturesEnabled, ["email_subject"]: val.emailSubject, ["email_message"]: val.emailMessage, ["are_reminders_enabled"]: val.areRemindersEnabled, ["parent_folder"]: newSerializeFolderMini(val.parentFolder), ["name"]: val.name, ["prefill_tags"]: val.prefillTags == void 0 ? void 0 : val.prefillTags.map(function (item: SignRequestPrefillTag): any {
            return newSerializeSignRequestPrefillTag(item);
        }) as readonly any[], ["days_valid"]: val.daysValid, ["external_id"]: val.externalId, ["is_phone_verification_required_to_view"]: val.isPhoneVerificationRequiredToView, ["template_id"]: val.templateId };
}
export function newDeserializeSignRequestBase(val: any): SignRequestBase {
    const isDocumentPreparationNeeded: undefined | boolean = isJson(val.is_document_preparation_needed, "boolean") ? val.is_document_preparation_needed : void 0;
    const redirectUrl: undefined | string = isJson(val.redirect_url, "string") ? val.redirect_url : void 0;
    const declinedRedirectUrl: undefined | string = isJson(val.declined_redirect_url, "string") ? val.declined_redirect_url : void 0;
    const areTextSignaturesEnabled: undefined | boolean = isJson(val.are_text_signatures_enabled, "boolean") ? val.are_text_signatures_enabled : void 0;
    const emailSubject: undefined | string = isJson(val.email_subject, "string") ? val.email_subject : void 0;
    const emailMessage: undefined | string = isJson(val.email_message, "string") ? val.email_message : void 0;
    const areRemindersEnabled: undefined | boolean = isJson(val.are_reminders_enabled, "boolean") ? val.are_reminders_enabled : void 0;
    const parentFolder: FolderMini = newDeserializeFolderMini(val.parent_folder);
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const prefillTags: undefined | readonly SignRequestPrefillTag[] = isJson(val.prefill_tags, "array") ? val.prefill_tags.map(function (itm: Json): any {
        return newDeserializeSignRequestPrefillTag(itm);
    }) as readonly any[] : void 0;
    const daysValid: undefined | number = isJson(val.days_valid, "number") ? val.days_valid : void 0;
    const externalId: undefined | string = isJson(val.external_id, "string") ? val.external_id : void 0;
    const isPhoneVerificationRequiredToView: undefined | boolean = isJson(val.is_phone_verification_required_to_view, "boolean") ? val.is_phone_verification_required_to_view : void 0;
    const templateId: undefined | string = isJson(val.template_id, "string") ? val.template_id : void 0;
    return { isDocumentPreparationNeeded: isDocumentPreparationNeeded, redirectUrl: redirectUrl, declinedRedirectUrl: declinedRedirectUrl, areTextSignaturesEnabled: areTextSignaturesEnabled, emailSubject: emailSubject, emailMessage: emailMessage, areRemindersEnabled: areRemindersEnabled, parentFolder: parentFolder, name: name, prefillTags: prefillTags, daysValid: daysValid, externalId: externalId, isPhoneVerificationRequiredToView: isPhoneVerificationRequiredToView, templateId: templateId } satisfies SignRequestBase;
}
export function newSerializeSignRequestTypeField(val: SignRequestTypeField): Json {
    return val;
}
export function newDeserializeSignRequestTypeField(val: any): SignRequestTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"SignRequestTypeField\"";
    }
    if (val == "sign-request") {
        return "sign-request";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeSignRequestStatusField(val: SignRequestStatusField): Json {
    return val;
}
export function newDeserializeSignRequestStatusField(val: any): SignRequestStatusField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"SignRequestStatusField\"";
    }
    if (val == "converting") {
        return "converting";
    }
    if (val == "created") {
        return "created";
    }
    if (val == "sent") {
        return "sent";
    }
    if (val == "viewed") {
        return "viewed";
    }
    if (val == "signed") {
        return "signed";
    }
    if (val == "cancelled") {
        return "cancelled";
    }
    if (val == "declined") {
        return "declined";
    }
    if (val == "error_converting") {
        return "error_converting";
    }
    if (val == "error_sending") {
        return "error_sending";
    }
    if (val == "expired") {
        return "expired";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeSignRequestSignFilesField(val: SignRequestSignFilesField): Json {
    return { ["files"]: val.files == void 0 ? void 0 : val.files.map(function (item: FileMini): any {
            return newSerializeFileMini(item);
        }) as readonly any[], ["is_ready_for_download"]: val.isReadyForDownload };
}
export function newDeserializeSignRequestSignFilesField(val: any): SignRequestSignFilesField {
    const files: undefined | readonly FileMini[] = isJson(val.files, "array") ? val.files.map(function (itm: Json): any {
        return newDeserializeFileMini(itm);
    }) as readonly any[] : void 0;
    const isReadyForDownload: undefined | boolean = isJson(val.is_ready_for_download, "boolean") ? val.is_ready_for_download : void 0;
    return { files: files, isReadyForDownload: isReadyForDownload } satisfies SignRequestSignFilesField;
}
export function newSerializeSignRequest(val: SignRequest): Json {
    const base: any = newSerializeSignRequestBase(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"SignRequest\"";
    }
    return { ...base, ...{ ["type"]: val.type == void 0 ? void 0 : newSerializeSignRequestTypeField(val.type), ["source_files"]: val.sourceFiles == void 0 ? void 0 : val.sourceFiles.map(function (item: FileBase): any {
                return newSerializeFileBase(item);
            }) as readonly any[], ["signers"]: val.signers == void 0 ? void 0 : val.signers.map(function (item: SignRequestSigner): any {
                return newSerializeSignRequestSigner(item);
            }) as readonly any[], ["signature_color"]: val.signatureColor, ["id"]: val.id, ["prepare_url"]: val.prepareUrl, ["signing_log"]: val.signingLog == void 0 ? void 0 : newSerializeFileMini(val.signingLog), ["status"]: val.status == void 0 ? void 0 : newSerializeSignRequestStatusField(val.status), ["sign_files"]: val.signFiles == void 0 ? void 0 : newSerializeSignRequestSignFilesField(val.signFiles), ["auto_expire_at"]: val.autoExpireAt } };
}
export function newDeserializeSignRequest(val: any): SignRequest {
    const type: undefined | SignRequestTypeField = val.type == void 0 ? void 0 : newDeserializeSignRequestTypeField(val.type);
    const sourceFiles: undefined | readonly FileBase[] = isJson(val.source_files, "array") ? val.source_files.map(function (itm: Json): any {
        return newDeserializeFileBase(itm);
    }) as readonly any[] : void 0;
    const signers: undefined | readonly SignRequestSigner[] = isJson(val.signers, "array") ? val.signers.map(function (itm: Json): any {
        return newDeserializeSignRequestSigner(itm);
    }) as readonly any[] : void 0;
    const signatureColor: undefined | string = isJson(val.signature_color, "string") ? val.signature_color : void 0;
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const prepareUrl: undefined | string = isJson(val.prepare_url, "string") ? val.prepare_url : void 0;
    const signingLog: undefined | FileMini = val.signing_log == void 0 ? void 0 : newDeserializeFileMini(val.signing_log);
    const status: undefined | SignRequestStatusField = val.status == void 0 ? void 0 : newDeserializeSignRequestStatusField(val.status);
    const signFiles: undefined | SignRequestSignFilesField = val.sign_files == void 0 ? void 0 : newDeserializeSignRequestSignFilesField(val.sign_files);
    const autoExpireAt: undefined | string = isJson(val.auto_expire_at, "string") ? val.auto_expire_at : void 0;
    const isDocumentPreparationNeeded: undefined | boolean = isJson(val.is_document_preparation_needed, "boolean") ? val.is_document_preparation_needed : void 0;
    const redirectUrl: undefined | string = isJson(val.redirect_url, "string") ? val.redirect_url : void 0;
    const declinedRedirectUrl: undefined | string = isJson(val.declined_redirect_url, "string") ? val.declined_redirect_url : void 0;
    const areTextSignaturesEnabled: undefined | boolean = isJson(val.are_text_signatures_enabled, "boolean") ? val.are_text_signatures_enabled : void 0;
    const emailSubject: undefined | string = isJson(val.email_subject, "string") ? val.email_subject : void 0;
    const emailMessage: undefined | string = isJson(val.email_message, "string") ? val.email_message : void 0;
    const areRemindersEnabled: undefined | boolean = isJson(val.are_reminders_enabled, "boolean") ? val.are_reminders_enabled : void 0;
    const parentFolder: FolderMini = newDeserializeFolderMini(val.parent_folder);
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const prefillTags: undefined | readonly SignRequestPrefillTag[] = isJson(val.prefill_tags, "array") ? val.prefill_tags.map(function (itm: Json): any {
        return newDeserializeSignRequestPrefillTag(itm);
    }) as readonly any[] : void 0;
    const daysValid: undefined | number = isJson(val.days_valid, "number") ? val.days_valid : void 0;
    const externalId: undefined | string = isJson(val.external_id, "string") ? val.external_id : void 0;
    const isPhoneVerificationRequiredToView: undefined | boolean = isJson(val.is_phone_verification_required_to_view, "boolean") ? val.is_phone_verification_required_to_view : void 0;
    const templateId: undefined | string = isJson(val.template_id, "string") ? val.template_id : void 0;
    return { type: type, sourceFiles: sourceFiles, signers: signers, signatureColor: signatureColor, id: id, prepareUrl: prepareUrl, signingLog: signingLog, status: status, signFiles: signFiles, autoExpireAt: autoExpireAt, isDocumentPreparationNeeded: isDocumentPreparationNeeded, redirectUrl: redirectUrl, declinedRedirectUrl: declinedRedirectUrl, areTextSignaturesEnabled: areTextSignaturesEnabled, emailSubject: emailSubject, emailMessage: emailMessage, areRemindersEnabled: areRemindersEnabled, parentFolder: parentFolder, name: name, prefillTags: prefillTags, daysValid: daysValid, externalId: externalId, isPhoneVerificationRequiredToView: isPhoneVerificationRequiredToView, templateId: templateId } satisfies SignRequest;
}
export function newSerializeSignRequests(val: SignRequests): Json {
    return { ["limit"]: val.limit, ["next_marker"]: val.nextMarker, ["prev_marker"]: val.prevMarker, ["entries"]: val.entries == void 0 ? void 0 : val.entries.map(function (item: SignRequest): any {
            return newSerializeSignRequest(item);
        }) as readonly any[] };
}
export function newDeserializeSignRequests(val: any): SignRequests {
    const limit: undefined | number = isJson(val.limit, "number") ? val.limit : void 0;
    const nextMarker: undefined | number = isJson(val.next_marker, "number") ? val.next_marker : void 0;
    const prevMarker: undefined | number = isJson(val.prev_marker, "number") ? val.prev_marker : void 0;
    const entries: undefined | readonly SignRequest[] = isJson(val.entries, "array") ? val.entries.map(function (itm: Json): any {
        return newDeserializeSignRequest(itm);
    }) as readonly any[] : void 0;
    return { limit: limit, nextMarker: nextMarker, prevMarker: prevMarker, entries: entries } satisfies SignRequests;
}
export function newSerializeSignRequestCreateRequest(val: SignRequestCreateRequest): Json {
    const base: any = newSerializeSignRequestBase(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"SignRequestCreateRequest\"";
    }
    return { ...base, ...{ ["source_files"]: val.sourceFiles == void 0 ? void 0 : val.sourceFiles.map(function (item: FileBase): any {
                return newSerializeFileBase(item);
            }) as readonly any[], ["signers"]: val.signers.map(function (item: SignRequestCreateSigner): any {
                return newSerializeSignRequestCreateSigner(item);
            }) as readonly any[] } };
}
export function newDeserializeSignRequestCreateRequest(val: any): SignRequestCreateRequest {
    const sourceFiles: undefined | readonly FileBase[] = isJson(val.source_files, "array") ? val.source_files.map(function (itm: Json): any {
        return newDeserializeFileBase(itm);
    }) as readonly any[] : void 0;
    const signers: readonly SignRequestCreateSigner[] = val.signers.map(function (itm: Json): any {
        return newDeserializeSignRequestCreateSigner(itm);
    }) as readonly any[];
    const isDocumentPreparationNeeded: undefined | boolean = isJson(val.is_document_preparation_needed, "boolean") ? val.is_document_preparation_needed : void 0;
    const redirectUrl: undefined | string = isJson(val.redirect_url, "string") ? val.redirect_url : void 0;
    const declinedRedirectUrl: undefined | string = isJson(val.declined_redirect_url, "string") ? val.declined_redirect_url : void 0;
    const areTextSignaturesEnabled: undefined | boolean = isJson(val.are_text_signatures_enabled, "boolean") ? val.are_text_signatures_enabled : void 0;
    const emailSubject: undefined | string = isJson(val.email_subject, "string") ? val.email_subject : void 0;
    const emailMessage: undefined | string = isJson(val.email_message, "string") ? val.email_message : void 0;
    const areRemindersEnabled: undefined | boolean = isJson(val.are_reminders_enabled, "boolean") ? val.are_reminders_enabled : void 0;
    const parentFolder: FolderMini = newDeserializeFolderMini(val.parent_folder);
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const prefillTags: undefined | readonly SignRequestPrefillTag[] = isJson(val.prefill_tags, "array") ? val.prefill_tags.map(function (itm: Json): any {
        return newDeserializeSignRequestPrefillTag(itm);
    }) as readonly any[] : void 0;
    const daysValid: undefined | number = isJson(val.days_valid, "number") ? val.days_valid : void 0;
    const externalId: undefined | string = isJson(val.external_id, "string") ? val.external_id : void 0;
    const isPhoneVerificationRequiredToView: undefined | boolean = isJson(val.is_phone_verification_required_to_view, "boolean") ? val.is_phone_verification_required_to_view : void 0;
    const templateId: undefined | string = isJson(val.template_id, "string") ? val.template_id : void 0;
    return { sourceFiles: sourceFiles, signers: signers, isDocumentPreparationNeeded: isDocumentPreparationNeeded, redirectUrl: redirectUrl, declinedRedirectUrl: declinedRedirectUrl, areTextSignaturesEnabled: areTextSignaturesEnabled, emailSubject: emailSubject, emailMessage: emailMessage, areRemindersEnabled: areRemindersEnabled, parentFolder: parentFolder, name: name, prefillTags: prefillTags, daysValid: daysValid, externalId: externalId, isPhoneVerificationRequiredToView: isPhoneVerificationRequiredToView, templateId: templateId } satisfies SignRequestCreateRequest;
}
export function newSerializeTemplateSignerInputTypeField(val: TemplateSignerInputTypeField): Json {
    return val;
}
export function newDeserializeTemplateSignerInputTypeField(val: any): TemplateSignerInputTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"TemplateSignerInputTypeField\"";
    }
    if (val == "signature") {
        return "signature";
    }
    if (val == "date") {
        return "date";
    }
    if (val == "text") {
        return "text";
    }
    if (val == "checkbox") {
        return "checkbox";
    }
    if (val == "radio") {
        return "radio";
    }
    if (val == "dropdown") {
        return "dropdown";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeTemplateSignerInputContentTypeField(val: TemplateSignerInputContentTypeField): Json {
    return val;
}
export function newDeserializeTemplateSignerInputContentTypeField(val: any): TemplateSignerInputContentTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"TemplateSignerInputContentTypeField\"";
    }
    if (val == "signature") {
        return "signature";
    }
    if (val == "initial") {
        return "initial";
    }
    if (val == "stamp") {
        return "stamp";
    }
    if (val == "date") {
        return "date";
    }
    if (val == "checkbox") {
        return "checkbox";
    }
    if (val == "text") {
        return "text";
    }
    if (val == "full_name") {
        return "full_name";
    }
    if (val == "first_name") {
        return "first_name";
    }
    if (val == "last_name") {
        return "last_name";
    }
    if (val == "company") {
        return "company";
    }
    if (val == "title") {
        return "title";
    }
    if (val == "email") {
        return "email";
    }
    if (val == "attachment") {
        return "attachment";
    }
    if (val == "radio") {
        return "radio";
    }
    if (val == "dropdown") {
        return "dropdown";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeTemplateSignerInputCoordinatesField(val: TemplateSignerInputCoordinatesField): Json {
    return { ["x"]: val.x, ["y"]: val.y };
}
export function newDeserializeTemplateSignerInputCoordinatesField(val: any): TemplateSignerInputCoordinatesField {
    const x: undefined | number = isJson(val.x, "number") ? val.x : void 0;
    const y: undefined | number = isJson(val.y, "number") ? val.y : void 0;
    return { x: x, y: y } satisfies TemplateSignerInputCoordinatesField;
}
export function newSerializeTemplateSignerInputDimensionsField(val: TemplateSignerInputDimensionsField): Json {
    return { ["width"]: val.width, ["height"]: val.height };
}
export function newDeserializeTemplateSignerInputDimensionsField(val: any): TemplateSignerInputDimensionsField {
    const width: undefined | number = isJson(val.width, "number") ? val.width : void 0;
    const height: undefined | number = isJson(val.height, "number") ? val.height : void 0;
    return { width: width, height: height } satisfies TemplateSignerInputDimensionsField;
}
export function newSerializeTemplateSignerInput(val: TemplateSignerInput): Json {
    const base: any = newSerializeSignRequestPrefillTag(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"TemplateSignerInput\"";
    }
    return { ...base, ...{ ["type"]: val.type == void 0 ? void 0 : newSerializeTemplateSignerInputTypeField(val.type), ["content_type"]: val.contentType == void 0 ? void 0 : newSerializeTemplateSignerInputContentTypeField(val.contentType), ["is_required"]: val.isRequired, ["page_index"]: val.pageIndex, ["document_id"]: val.documentId, ["dropdown_choices"]: val.dropdownChoices == void 0 ? void 0 : val.dropdownChoices.map(function (item: string): undefined {
                return void 0;
            }) as readonly any[], ["group_id"]: val.groupId, ["coordinates"]: val.coordinates == void 0 ? void 0 : newSerializeTemplateSignerInputCoordinatesField(val.coordinates), ["dimensions"]: val.dimensions == void 0 ? void 0 : newSerializeTemplateSignerInputDimensionsField(val.dimensions) } };
}
export function newDeserializeTemplateSignerInput(val: any): TemplateSignerInput {
    const type: undefined | TemplateSignerInputTypeField = val.type == void 0 ? void 0 : newDeserializeTemplateSignerInputTypeField(val.type);
    const contentType: undefined | TemplateSignerInputContentTypeField = val.content_type == void 0 ? void 0 : newDeserializeTemplateSignerInputContentTypeField(val.content_type);
    const isRequired: undefined | boolean = isJson(val.is_required, "boolean") ? val.is_required : void 0;
    const pageIndex: number = val.page_index;
    const documentId: undefined | string = isJson(val.document_id, "string") ? val.document_id : void 0;
    const dropdownChoices: undefined | readonly string[] = isJson(val.dropdown_choices, "array") ? val.dropdown_choices.map(function (itm: Json): undefined {
        return void 0;
    }) as readonly any[] : void 0;
    const groupId: undefined | string = isJson(val.group_id, "string") ? val.group_id : void 0;
    const coordinates: undefined | TemplateSignerInputCoordinatesField = val.coordinates == void 0 ? void 0 : newDeserializeTemplateSignerInputCoordinatesField(val.coordinates);
    const dimensions: undefined | TemplateSignerInputDimensionsField = val.dimensions == void 0 ? void 0 : newDeserializeTemplateSignerInputDimensionsField(val.dimensions);
    const documentTagId: undefined | string = isJson(val.document_tag_id, "string") ? val.document_tag_id : void 0;
    const textValue: undefined | string = isJson(val.text_value, "string") ? val.text_value : void 0;
    const checkboxValue: undefined | boolean = isJson(val.checkbox_value, "boolean") ? val.checkbox_value : void 0;
    const dateValue: undefined | string = isJson(val.date_value, "string") ? val.date_value : void 0;
    return { type: type, contentType: contentType, isRequired: isRequired, pageIndex: pageIndex, documentId: documentId, dropdownChoices: dropdownChoices, groupId: groupId, coordinates: coordinates, dimensions: dimensions, documentTagId: documentTagId, textValue: textValue, checkboxValue: checkboxValue, dateValue: dateValue } satisfies TemplateSignerInput;
}
export function newSerializeTemplateSignerRoleField(val: TemplateSignerRoleField): Json {
    return val;
}
export function newDeserializeTemplateSignerRoleField(val: any): TemplateSignerRoleField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"TemplateSignerRoleField\"";
    }
    if (val == "signer") {
        return "signer";
    }
    if (val == "approver") {
        return "approver";
    }
    if (val == "final_copy_reader") {
        return "final_copy_reader";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeTemplateSigner(val: TemplateSigner): Json {
    return { ["inputs"]: val.inputs == void 0 ? void 0 : val.inputs.map(function (item: TemplateSignerInput): any {
            return newSerializeTemplateSignerInput(item);
        }) as readonly any[], ["email"]: val.email, ["role"]: val.role == void 0 ? void 0 : newSerializeTemplateSignerRoleField(val.role), ["is_in_person"]: val.isInPerson, ["order"]: val.order };
}
export function newDeserializeTemplateSigner(val: any): TemplateSigner {
    const inputs: undefined | readonly TemplateSignerInput[] = isJson(val.inputs, "array") ? val.inputs.map(function (itm: Json): any {
        return newDeserializeTemplateSignerInput(itm);
    }) as readonly any[] : void 0;
    const email: undefined | string = isJson(val.email, "string") ? val.email : void 0;
    const role: undefined | TemplateSignerRoleField = val.role == void 0 ? void 0 : newDeserializeTemplateSignerRoleField(val.role);
    const isInPerson: undefined | boolean = isJson(val.is_in_person, "boolean") ? val.is_in_person : void 0;
    const order: undefined | number = isJson(val.order, "number") ? val.order : void 0;
    return { inputs: inputs, email: email, role: role, isInPerson: isInPerson, order: order } satisfies TemplateSigner;
}
export function newSerializeSignTemplateAdditionalInfoFieldNonEditableField(val: SignTemplateAdditionalInfoFieldNonEditableField): Json {
    return val;
}
export function newDeserializeSignTemplateAdditionalInfoFieldNonEditableField(val: any): SignTemplateAdditionalInfoFieldNonEditableField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"SignTemplateAdditionalInfoFieldNonEditableField\"";
    }
    if (val == "email_subject") {
        return "email_subject";
    }
    if (val == "email_message") {
        return "email_message";
    }
    if (val == "name") {
        return "name";
    }
    if (val == "days_valid") {
        return "days_valid";
    }
    if (val == "signers") {
        return "signers";
    }
    if (val == "source_files") {
        return "source_files";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeSignTemplateAdditionalInfoFieldRequiredFieldSignersField(val: SignTemplateAdditionalInfoFieldRequiredFieldSignersField): Json {
    return val;
}
export function newDeserializeSignTemplateAdditionalInfoFieldRequiredFieldSignersField(val: any): SignTemplateAdditionalInfoFieldRequiredFieldSignersField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"SignTemplateAdditionalInfoFieldRequiredFieldSignersField\"";
    }
    if (val == "email") {
        return "email";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeSignTemplateAdditionalInfoFieldRequiredField(val: SignTemplateAdditionalInfoFieldRequiredField): Json {
    return { ["signers"]: val.signers == void 0 ? void 0 : val.signers.map(function (item: readonly SignTemplateAdditionalInfoFieldRequiredFieldSignersField[]): undefined {
            return void 0;
        }) as readonly any[] };
}
export function newDeserializeSignTemplateAdditionalInfoFieldRequiredField(val: any): SignTemplateAdditionalInfoFieldRequiredField {
    const signers: undefined | readonly (readonly SignTemplateAdditionalInfoFieldRequiredFieldSignersField[])[] = isJson(val.signers, "array") ? val.signers.map(function (itm: Json): undefined {
        return void 0;
    }) as readonly any[] : void 0;
    return { signers: signers } satisfies SignTemplateAdditionalInfoFieldRequiredField;
}
export function newSerializeSignTemplateAdditionalInfoField(val: SignTemplateAdditionalInfoField): Json {
    return { ["non_editable"]: val.nonEditable == void 0 ? void 0 : val.nonEditable.map(function (item: SignTemplateAdditionalInfoFieldNonEditableField): any {
            return newSerializeSignTemplateAdditionalInfoFieldNonEditableField(item);
        }) as readonly any[], ["required"]: val.required == void 0 ? void 0 : newSerializeSignTemplateAdditionalInfoFieldRequiredField(val.required) };
}
export function newDeserializeSignTemplateAdditionalInfoField(val: any): SignTemplateAdditionalInfoField {
    const nonEditable: undefined | readonly SignTemplateAdditionalInfoFieldNonEditableField[] = isJson(val.non_editable, "array") ? val.non_editable.map(function (itm: Json): any {
        return newDeserializeSignTemplateAdditionalInfoFieldNonEditableField(itm);
    }) as readonly any[] : void 0;
    const required: undefined | SignTemplateAdditionalInfoFieldRequiredField = val.required == void 0 ? void 0 : newDeserializeSignTemplateAdditionalInfoFieldRequiredField(val.required);
    return { nonEditable: nonEditable, required: required } satisfies SignTemplateAdditionalInfoField;
}
export function newSerializeSignTemplateReadySignLinkField(val: SignTemplateReadySignLinkField): Json {
    return { ["url"]: val.url, ["name"]: val.name, ["instructions"]: val.instructions, ["folder_id"]: val.folderId, ["is_notification_disabled"]: val.isNotificationDisabled, ["is_active"]: val.isActive };
}
export function newDeserializeSignTemplateReadySignLinkField(val: any): SignTemplateReadySignLinkField {
    const url: undefined | string = isJson(val.url, "string") ? val.url : void 0;
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const instructions: undefined | string = isJson(val.instructions, "string") ? val.instructions : void 0;
    const folderId: undefined | string = isJson(val.folder_id, "string") ? val.folder_id : void 0;
    const isNotificationDisabled: undefined | boolean = isJson(val.is_notification_disabled, "boolean") ? val.is_notification_disabled : void 0;
    const isActive: undefined | boolean = isJson(val.is_active, "boolean") ? val.is_active : void 0;
    return { url: url, name: name, instructions: instructions, folderId: folderId, isNotificationDisabled: isNotificationDisabled, isActive: isActive } satisfies SignTemplateReadySignLinkField;
}
export function newSerializeSignTemplateCustomBrandingField(val: SignTemplateCustomBrandingField): Json {
    return { ["company_name"]: val.companyName, ["logo_uri"]: val.logoUri, ["branding_color"]: val.brandingColor, ["email_footer_text"]: val.emailFooterText };
}
export function newDeserializeSignTemplateCustomBrandingField(val: any): SignTemplateCustomBrandingField {
    const companyName: undefined | string = isJson(val.company_name, "string") ? val.company_name : void 0;
    const logoUri: undefined | string = isJson(val.logo_uri, "string") ? val.logo_uri : void 0;
    const brandingColor: undefined | string = isJson(val.branding_color, "string") ? val.branding_color : void 0;
    const emailFooterText: undefined | string = isJson(val.email_footer_text, "string") ? val.email_footer_text : void 0;
    return { companyName: companyName, logoUri: logoUri, brandingColor: brandingColor, emailFooterText: emailFooterText } satisfies SignTemplateCustomBrandingField;
}
export function newSerializeSignTemplate(val: SignTemplate): Json {
    return { ["id"]: val.id, ["name"]: val.name, ["email_subject"]: val.emailSubject, ["email_message"]: val.emailMessage, ["days_valid"]: val.daysValid, ["parent_folder"]: val.parentFolder == void 0 ? void 0 : newSerializeFolderMini(val.parentFolder), ["source_files"]: val.sourceFiles == void 0 ? void 0 : val.sourceFiles.map(function (item: FileMini): any {
            return newSerializeFileMini(item);
        }) as readonly any[], ["are_fields_locked"]: val.areFieldsLocked, ["are_options_locked"]: val.areOptionsLocked, ["are_recipients_locked"]: val.areRecipientsLocked, ["are_email_settings_locked"]: val.areEmailSettingsLocked, ["are_files_locked"]: val.areFilesLocked, ["signers"]: val.signers == void 0 ? void 0 : val.signers.map(function (item: TemplateSigner): any {
            return newSerializeTemplateSigner(item);
        }) as readonly any[], ["additional_info"]: val.additionalInfo == void 0 ? void 0 : newSerializeSignTemplateAdditionalInfoField(val.additionalInfo), ["ready_sign_link"]: val.readySignLink == void 0 ? void 0 : newSerializeSignTemplateReadySignLinkField(val.readySignLink), ["custom_branding"]: val.customBranding == void 0 ? void 0 : newSerializeSignTemplateCustomBrandingField(val.customBranding) };
}
export function newDeserializeSignTemplate(val: any): SignTemplate {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const emailSubject: undefined | string = isJson(val.email_subject, "string") ? val.email_subject : void 0;
    const emailMessage: undefined | string = isJson(val.email_message, "string") ? val.email_message : void 0;
    const daysValid: undefined | number = isJson(val.days_valid, "number") ? val.days_valid : void 0;
    const parentFolder: undefined | FolderMini = val.parent_folder == void 0 ? void 0 : newDeserializeFolderMini(val.parent_folder);
    const sourceFiles: undefined | readonly FileMini[] = isJson(val.source_files, "array") ? val.source_files.map(function (itm: Json): any {
        return newDeserializeFileMini(itm);
    }) as readonly any[] : void 0;
    const areFieldsLocked: undefined | boolean = isJson(val.are_fields_locked, "boolean") ? val.are_fields_locked : void 0;
    const areOptionsLocked: undefined | boolean = isJson(val.are_options_locked, "boolean") ? val.are_options_locked : void 0;
    const areRecipientsLocked: undefined | boolean = isJson(val.are_recipients_locked, "boolean") ? val.are_recipients_locked : void 0;
    const areEmailSettingsLocked: undefined | boolean = isJson(val.are_email_settings_locked, "boolean") ? val.are_email_settings_locked : void 0;
    const areFilesLocked: undefined | boolean = isJson(val.are_files_locked, "boolean") ? val.are_files_locked : void 0;
    const signers: undefined | readonly TemplateSigner[] = isJson(val.signers, "array") ? val.signers.map(function (itm: Json): any {
        return newDeserializeTemplateSigner(itm);
    }) as readonly any[] : void 0;
    const additionalInfo: undefined | SignTemplateAdditionalInfoField = val.additional_info == void 0 ? void 0 : newDeserializeSignTemplateAdditionalInfoField(val.additional_info);
    const readySignLink: undefined | SignTemplateReadySignLinkField = val.ready_sign_link == void 0 ? void 0 : newDeserializeSignTemplateReadySignLinkField(val.ready_sign_link);
    const customBranding: undefined | SignTemplateCustomBrandingField = val.custom_branding == void 0 ? void 0 : newDeserializeSignTemplateCustomBrandingField(val.custom_branding);
    return { id: id, name: name, emailSubject: emailSubject, emailMessage: emailMessage, daysValid: daysValid, parentFolder: parentFolder, sourceFiles: sourceFiles, areFieldsLocked: areFieldsLocked, areOptionsLocked: areOptionsLocked, areRecipientsLocked: areRecipientsLocked, areEmailSettingsLocked: areEmailSettingsLocked, areFilesLocked: areFilesLocked, signers: signers, additionalInfo: additionalInfo, readySignLink: readySignLink, customBranding: customBranding } satisfies SignTemplate;
}
export function newSerializeShieldInformationBarrierReportDetailsDetailsField(val: ShieldInformationBarrierReportDetailsDetailsField): Json {
    return { ["folder_id"]: val.folderId };
}
export function newDeserializeShieldInformationBarrierReportDetailsDetailsField(val: any): ShieldInformationBarrierReportDetailsDetailsField {
    const folderId: undefined | string = isJson(val.folder_id, "string") ? val.folder_id : void 0;
    return { folderId: folderId } satisfies ShieldInformationBarrierReportDetailsDetailsField;
}
export function newSerializeShieldInformationBarrierReportDetails(val: ShieldInformationBarrierReportDetails): Json {
    return { ["details"]: val.details == void 0 ? void 0 : newSerializeShieldInformationBarrierReportDetailsDetailsField(val.details) };
}
export function newDeserializeShieldInformationBarrierReportDetails(val: any): ShieldInformationBarrierReportDetails {
    const details: undefined | ShieldInformationBarrierReportDetailsDetailsField = val.details == void 0 ? void 0 : newDeserializeShieldInformationBarrierReportDetailsDetailsField(val.details);
    return { details: details } satisfies ShieldInformationBarrierReportDetails;
}
export function newSerializeTrackingCodeTypeField(val: TrackingCodeTypeField): Json {
    return val;
}
export function newDeserializeTrackingCodeTypeField(val: any): TrackingCodeTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"TrackingCodeTypeField\"";
    }
    if (val == "tracking_code") {
        return "tracking_code";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeTrackingCode(val: TrackingCode): Json {
    return { ["type"]: val.type == void 0 ? void 0 : newSerializeTrackingCodeTypeField(val.type), ["name"]: val.name, ["value"]: val.value };
}
export function newDeserializeTrackingCode(val: any): TrackingCode {
    const type: undefined | TrackingCodeTypeField = val.type == void 0 ? void 0 : newDeserializeTrackingCodeTypeField(val.type);
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const value: undefined | string = isJson(val.value, "string") ? val.value : void 0;
    return { type: type, name: name, value: value } satisfies TrackingCode;
}
export function newSerializeUserFullRoleField(val: UserFullRoleField): Json {
    return val;
}
export function newDeserializeUserFullRoleField(val: any): UserFullRoleField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"UserFullRoleField\"";
    }
    if (val == "admin") {
        return "admin";
    }
    if (val == "coadmin") {
        return "coadmin";
    }
    if (val == "user") {
        return "user";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeUserFullEnterpriseFieldTypeField(val: UserFullEnterpriseFieldTypeField): Json {
    return val;
}
export function newDeserializeUserFullEnterpriseFieldTypeField(val: any): UserFullEnterpriseFieldTypeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"UserFullEnterpriseFieldTypeField\"";
    }
    if (val == "enterprise") {
        return "enterprise";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeUserFullEnterpriseField(val: UserFullEnterpriseField): Json {
    return { ["id"]: val.id, ["type"]: val.type == void 0 ? void 0 : newSerializeUserFullEnterpriseFieldTypeField(val.type), ["name"]: val.name };
}
export function newDeserializeUserFullEnterpriseField(val: any): UserFullEnterpriseField {
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: undefined | UserFullEnterpriseFieldTypeField = val.type == void 0 ? void 0 : newDeserializeUserFullEnterpriseFieldTypeField(val.type);
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    return { id: id, type: type, name: name } satisfies UserFullEnterpriseField;
}
export function newSerializeUserFull(val: UserFull): Json {
    const base: any = newSerializeUser(val);
    if (!isJson(base, "object")) {
        throw "Expecting an object for \"UserFull\"";
    }
    return { ...base, ...{ ["role"]: val.role == void 0 ? void 0 : newSerializeUserFullRoleField(val.role), ["tracking_codes"]: val.trackingCodes == void 0 ? void 0 : val.trackingCodes.map(function (item: TrackingCode): any {
                return newSerializeTrackingCode(item);
            }) as readonly any[], ["can_see_managed_users"]: val.canSeeManagedUsers, ["is_sync_enabled"]: val.isSyncEnabled, ["is_external_collab_restricted"]: val.isExternalCollabRestricted, ["is_exempt_from_device_limits"]: val.isExemptFromDeviceLimits, ["is_exempt_from_login_verification"]: val.isExemptFromLoginVerification, ["enterprise"]: val.enterprise == void 0 ? void 0 : newSerializeUserFullEnterpriseField(val.enterprise), ["my_tags"]: val.myTags == void 0 ? void 0 : val.myTags.map(function (item: string): undefined {
                return void 0;
            }) as readonly any[], ["hostname"]: val.hostname, ["is_platform_access_only"]: val.isPlatformAccessOnly, ["external_app_user_id"]: val.externalAppUserId } };
}
export function newDeserializeUserFull(val: any): UserFull {
    const role: undefined | UserFullRoleField = val.role == void 0 ? void 0 : newDeserializeUserFullRoleField(val.role);
    const trackingCodes: undefined | readonly TrackingCode[] = isJson(val.tracking_codes, "array") ? val.tracking_codes.map(function (itm: Json): any {
        return newDeserializeTrackingCode(itm);
    }) as readonly any[] : void 0;
    const canSeeManagedUsers: undefined | boolean = isJson(val.can_see_managed_users, "boolean") ? val.can_see_managed_users : void 0;
    const isSyncEnabled: undefined | boolean = isJson(val.is_sync_enabled, "boolean") ? val.is_sync_enabled : void 0;
    const isExternalCollabRestricted: undefined | boolean = isJson(val.is_external_collab_restricted, "boolean") ? val.is_external_collab_restricted : void 0;
    const isExemptFromDeviceLimits: undefined | boolean = isJson(val.is_exempt_from_device_limits, "boolean") ? val.is_exempt_from_device_limits : void 0;
    const isExemptFromLoginVerification: undefined | boolean = isJson(val.is_exempt_from_login_verification, "boolean") ? val.is_exempt_from_login_verification : void 0;
    const enterprise: undefined | UserFullEnterpriseField = val.enterprise == void 0 ? void 0 : newDeserializeUserFullEnterpriseField(val.enterprise);
    const myTags: undefined | readonly string[] = isJson(val.my_tags, "array") ? val.my_tags.map(function (itm: Json): undefined {
        return void 0;
    }) as readonly any[] : void 0;
    const hostname: undefined | string = isJson(val.hostname, "string") ? val.hostname : void 0;
    const isPlatformAccessOnly: undefined | boolean = isJson(val.is_platform_access_only, "boolean") ? val.is_platform_access_only : void 0;
    const externalAppUserId: undefined | string = isJson(val.external_app_user_id, "string") ? val.external_app_user_id : void 0;
    const createdAt: undefined | string = isJson(val.created_at, "string") ? val.created_at : void 0;
    const modifiedAt: undefined | string = isJson(val.modified_at, "string") ? val.modified_at : void 0;
    const language: undefined | string = isJson(val.language, "string") ? val.language : void 0;
    const timezone: undefined | string = isJson(val.timezone, "string") ? val.timezone : void 0;
    const spaceAmount: undefined | number = isJson(val.space_amount, "number") ? val.space_amount : void 0;
    const spaceUsed: undefined | number = isJson(val.space_used, "number") ? val.space_used : void 0;
    const maxUploadSize: undefined | number = isJson(val.max_upload_size, "number") ? val.max_upload_size : void 0;
    const status: undefined | UserStatusField = val.status == void 0 ? void 0 : newDeserializeUserStatusField(val.status);
    const jobTitle: undefined | string = isJson(val.job_title, "string") ? val.job_title : void 0;
    const phone: undefined | string = isJson(val.phone, "string") ? val.phone : void 0;
    const address: undefined | string = isJson(val.address, "string") ? val.address : void 0;
    const avatarUrl: undefined | string = isJson(val.avatar_url, "string") ? val.avatar_url : void 0;
    const notificationEmail: undefined | UserNotificationEmailField = val.notification_email == void 0 ? void 0 : newDeserializeUserNotificationEmailField(val.notification_email);
    const name: undefined | string = isJson(val.name, "string") ? val.name : void 0;
    const login: undefined | string = isJson(val.login, "string") ? val.login : void 0;
    const id: undefined | string = isJson(val.id, "string") ? val.id : void 0;
    const type: UserBaseTypeField = newDeserializeUserBaseTypeField(val.type);
    return { role: role, trackingCodes: trackingCodes, canSeeManagedUsers: canSeeManagedUsers, isSyncEnabled: isSyncEnabled, isExternalCollabRestricted: isExternalCollabRestricted, isExemptFromDeviceLimits: isExemptFromDeviceLimits, isExemptFromLoginVerification: isExemptFromLoginVerification, enterprise: enterprise, myTags: myTags, hostname: hostname, isPlatformAccessOnly: isPlatformAccessOnly, externalAppUserId: externalAppUserId, createdAt: createdAt, modifiedAt: modifiedAt, language: language, timezone: timezone, spaceAmount: spaceAmount, spaceUsed: spaceUsed, maxUploadSize: maxUploadSize, status: status, jobTitle: jobTitle, phone: phone, address: address, avatarUrl: avatarUrl, notificationEmail: notificationEmail, name: name, login: login, id: id, type: type } satisfies UserFull;
}
export function newSerializeMetadataFilterScopeField(val: MetadataFilterScopeField): Json {
    return val;
}
export function newDeserializeMetadataFilterScopeField(val: any): MetadataFilterScopeField {
    if (!isJson(val, "string")) {
        throw "Expecting a string for \"MetadataFilterScopeField\"";
    }
    if (val == "global") {
        return "global";
    }
    if (val == "enterprise") {
        return "enterprise";
    }
    if (val == "enterprise_{enterprise_id}") {
        return "enterprise_{enterprise_id}";
    }
    throw "".concat("Invalid value: ", val) as string;
}
export function newSerializeMetadataFilterFiltersField(val: MetadataFilterFiltersField): Json {
    return {};
}
export function newDeserializeMetadataFilterFiltersField(val: any): MetadataFilterFiltersField {
    return {} satisfies MetadataFilterFiltersField;
}
export function newSerializeMetadataFilter(val: MetadataFilter): Json {
    return { ["scope"]: val.scope == void 0 ? void 0 : newSerializeMetadataFilterScopeField(val.scope), ["templateKey"]: val.templateKey, ["filters"]: val.filters == void 0 ? void 0 : newSerializeMetadataFilterFiltersField(val.filters) };
}
export function newDeserializeMetadataFilter(val: any): MetadataFilter {
    const scope: undefined | MetadataFilterScopeField = val.scope == void 0 ? void 0 : newDeserializeMetadataFilterScopeField(val.scope);
    const templateKey: undefined | string = isJson(val.templateKey, "string") ? val.templateKey : void 0;
    const filters: undefined | MetadataFilterFiltersField = val.filters == void 0 ? void 0 : newDeserializeMetadataFilterFiltersField(val.filters);
    return { scope: scope, templateKey: templateKey, filters: filters } satisfies MetadataFilter;
}
export function newSerializeMetadataFieldFilterString(val: MetadataFieldFilterString): Json {
    return {};
}
export function newDeserializeMetadataFieldFilterString(val: any): MetadataFieldFilterString {
    return {} satisfies MetadataFieldFilterString;
}
export function newSerializeMetadataFieldFilterFloat(val: MetadataFieldFilterFloat): Json {
    return {};
}
export function newDeserializeMetadataFieldFilterFloat(val: any): MetadataFieldFilterFloat {
    return {} satisfies MetadataFieldFilterFloat;
}
export function newSerializeMetadataFieldFilterMultiSelect(val: MetadataFieldFilterMultiSelect): Json {
    return {};
}
export function newDeserializeMetadataFieldFilterMultiSelect(val: any): MetadataFieldFilterMultiSelect {
    return {} satisfies MetadataFieldFilterMultiSelect;
}
export function newSerializeMetadataFieldFilterFloatRange(val: MetadataFieldFilterFloatRange): Json {
    return {};
}
export function newDeserializeMetadataFieldFilterFloatRange(val: any): MetadataFieldFilterFloatRange {
    return {} satisfies MetadataFieldFilterFloatRange;
}
export function newSerializeMetadataFieldFilterDateRange(val: MetadataFieldFilterDateRange): Json {
    return {};
}
export function newDeserializeMetadataFieldFilterDateRange(val: any): MetadataFieldFilterDateRange {
    return {} satisfies MetadataFieldFilterDateRange;
}
