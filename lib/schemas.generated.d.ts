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
export declare function newSerializePostOAuth2TokenGrantTypeField(val: PostOAuth2TokenGrantTypeField): Json;
export declare function newDeserializePostOAuth2TokenGrantTypeField(val: any): PostOAuth2TokenGrantTypeField;
export declare function newSerializePostOAuth2TokenSubjectTokenTypeField(val: PostOAuth2TokenSubjectTokenTypeField): Json;
export declare function newDeserializePostOAuth2TokenSubjectTokenTypeField(val: any): PostOAuth2TokenSubjectTokenTypeField;
export declare function newSerializePostOAuth2TokenActorTokenTypeField(val: PostOAuth2TokenActorTokenTypeField): Json;
export declare function newDeserializePostOAuth2TokenActorTokenTypeField(val: any): PostOAuth2TokenActorTokenTypeField;
export declare function newSerializePostOAuth2TokenBoxSubjectTypeField(val: PostOAuth2TokenBoxSubjectTypeField): Json;
export declare function newDeserializePostOAuth2TokenBoxSubjectTypeField(val: any): PostOAuth2TokenBoxSubjectTypeField;
export declare function newSerializePostOAuth2Token(val: PostOAuth2Token): Json;
export declare function newDeserializePostOAuth2Token(val: any): PostOAuth2Token;
export declare function newSerializePostOAuth2TokenRefreshAccessTokenGrantTypeField(val: PostOAuth2TokenRefreshAccessTokenGrantTypeField): Json;
export declare function newDeserializePostOAuth2TokenRefreshAccessTokenGrantTypeField(val: any): PostOAuth2TokenRefreshAccessTokenGrantTypeField;
export declare function newSerializePostOAuth2TokenRefreshAccessToken(val: PostOAuth2TokenRefreshAccessToken): Json;
export declare function newDeserializePostOAuth2TokenRefreshAccessToken(val: any): PostOAuth2TokenRefreshAccessToken;
export declare function newSerializePostOAuth2Revoke(val: PostOAuth2Revoke): Json;
export declare function newDeserializePostOAuth2Revoke(val: any): PostOAuth2Revoke;
export declare function newSerializeZipDownloadRequestItemsFieldTypeField(val: ZipDownloadRequestItemsFieldTypeField): Json;
export declare function newDeserializeZipDownloadRequestItemsFieldTypeField(val: any): ZipDownloadRequestItemsFieldTypeField;
export declare function newSerializeZipDownloadRequestItemsField(val: ZipDownloadRequestItemsField): Json;
export declare function newDeserializeZipDownloadRequestItemsField(val: any): ZipDownloadRequestItemsField;
export declare function newSerializeZipDownloadRequest(val: ZipDownloadRequest): Json;
export declare function newDeserializeZipDownloadRequest(val: any): ZipDownloadRequest;
export declare function newSerializeMetadataQueryQueryParamsField(val: MetadataQueryQueryParamsField): Json;
export declare function newDeserializeMetadataQueryQueryParamsField(val: any): MetadataQueryQueryParamsField;
export declare function newSerializeMetadataQueryOrderByFieldDirectionField(val: MetadataQueryOrderByFieldDirectionField): Json;
export declare function newDeserializeMetadataQueryOrderByFieldDirectionField(val: any): MetadataQueryOrderByFieldDirectionField;
export declare function newSerializeMetadataQueryOrderByField(val: MetadataQueryOrderByField): Json;
export declare function newDeserializeMetadataQueryOrderByField(val: any): MetadataQueryOrderByField;
export declare function newSerializeMetadataQuery(val: MetadataQuery): Json;
export declare function newDeserializeMetadataQuery(val: any): MetadataQuery;
export declare function newSerializeFileRequestUpdateRequestStatusField(val: FileRequestUpdateRequestStatusField): Json;
export declare function newDeserializeFileRequestUpdateRequestStatusField(val: any): FileRequestUpdateRequestStatusField;
export declare function newSerializeFileRequestUpdateRequest(val: FileRequestUpdateRequest): Json;
export declare function newDeserializeFileRequestUpdateRequest(val: any): FileRequestUpdateRequest;
export declare function newSerializeFileRequestCopyRequestFolderFieldTypeField(val: FileRequestCopyRequestFolderFieldTypeField): Json;
export declare function newDeserializeFileRequestCopyRequestFolderFieldTypeField(val: any): FileRequestCopyRequestFolderFieldTypeField;
export declare function newSerializeFileRequestCopyRequestFolderField(val: FileRequestCopyRequestFolderField): Json;
export declare function newDeserializeFileRequestCopyRequestFolderField(val: any): FileRequestCopyRequestFolderField;
export declare function newSerializeFileRequestCopyRequest(val: FileRequestCopyRequest): Json;
export declare function newDeserializeFileRequestCopyRequest(val: any): FileRequestCopyRequest;
export declare function newSerializeIntegrationMappingSlackCreateRequestPartnerItemField(val: IntegrationMappingSlackCreateRequestPartnerItemField): Json;
export declare function newDeserializeIntegrationMappingSlackCreateRequestPartnerItemField(val: any): IntegrationMappingSlackCreateRequestPartnerItemField;
export declare function newSerializeIntegrationMappingSlackCreateRequestBoxItemField(val: IntegrationMappingSlackCreateRequestBoxItemField): Json;
export declare function newDeserializeIntegrationMappingSlackCreateRequestBoxItemField(val: any): IntegrationMappingSlackCreateRequestBoxItemField;
export declare function newSerializeIntegrationMappingSlackCreateRequestOptionsField(val: IntegrationMappingSlackCreateRequestOptionsField): Json;
export declare function newDeserializeIntegrationMappingSlackCreateRequestOptionsField(val: any): IntegrationMappingSlackCreateRequestOptionsField;
export declare function newSerializeIntegrationMappingSlackCreateRequest(val: IntegrationMappingSlackCreateRequest): Json;
export declare function newDeserializeIntegrationMappingSlackCreateRequest(val: any): IntegrationMappingSlackCreateRequest;
export declare function newSerializeClientErrorTypeField(val: ClientErrorTypeField): Json;
export declare function newDeserializeClientErrorTypeField(val: any): ClientErrorTypeField;
export declare function newSerializeClientErrorCodeField(val: ClientErrorCodeField): Json;
export declare function newDeserializeClientErrorCodeField(val: any): ClientErrorCodeField;
export declare function newSerializeClientErrorContextInfoField(val: ClientErrorContextInfoField): Json;
export declare function newDeserializeClientErrorContextInfoField(val: any): ClientErrorContextInfoField;
export declare function newSerializeClientError(val: ClientError): Json;
export declare function newDeserializeClientError(val: any): ClientError;
export declare function newSerializeOAuth2Error(val: OAuth2Error): Json;
export declare function newDeserializeOAuth2Error(val: any): OAuth2Error;
export declare function newSerializeClassificationTemplateField(val: ClassificationTemplateField): Json;
export declare function newDeserializeClassificationTemplateField(val: any): ClassificationTemplateField;
export declare function newSerializeClassification(val: Classification): Json;
export declare function newDeserializeClassification(val: any): Classification;
export declare function newSerializeClassificationTemplateTypeField(val: ClassificationTemplateTypeField): Json;
export declare function newDeserializeClassificationTemplateTypeField(val: any): ClassificationTemplateTypeField;
export declare function newSerializeClassificationTemplateTemplateKeyField(val: ClassificationTemplateTemplateKeyField): Json;
export declare function newDeserializeClassificationTemplateTemplateKeyField(val: any): ClassificationTemplateTemplateKeyField;
export declare function newSerializeClassificationTemplateDisplayNameField(val: ClassificationTemplateDisplayNameField): Json;
export declare function newDeserializeClassificationTemplateDisplayNameField(val: any): ClassificationTemplateDisplayNameField;
export declare function newSerializeClassificationTemplateFieldsFieldTypeField(val: ClassificationTemplateFieldsFieldTypeField): Json;
export declare function newDeserializeClassificationTemplateFieldsFieldTypeField(val: any): ClassificationTemplateFieldsFieldTypeField;
export declare function newSerializeClassificationTemplateFieldsFieldKeyField(val: ClassificationTemplateFieldsFieldKeyField): Json;
export declare function newDeserializeClassificationTemplateFieldsFieldKeyField(val: any): ClassificationTemplateFieldsFieldKeyField;
export declare function newSerializeClassificationTemplateFieldsFieldDisplayNameField(val: ClassificationTemplateFieldsFieldDisplayNameField): Json;
export declare function newDeserializeClassificationTemplateFieldsFieldDisplayNameField(val: any): ClassificationTemplateFieldsFieldDisplayNameField;
export declare function newSerializeClassificationTemplateFieldsFieldOptionsFieldStaticConfigFieldClassificationField(val: ClassificationTemplateFieldsFieldOptionsFieldStaticConfigFieldClassificationField): Json;
export declare function newDeserializeClassificationTemplateFieldsFieldOptionsFieldStaticConfigFieldClassificationField(val: any): ClassificationTemplateFieldsFieldOptionsFieldStaticConfigFieldClassificationField;
export declare function newSerializeClassificationTemplateFieldsFieldOptionsFieldStaticConfigField(val: ClassificationTemplateFieldsFieldOptionsFieldStaticConfigField): Json;
export declare function newDeserializeClassificationTemplateFieldsFieldOptionsFieldStaticConfigField(val: any): ClassificationTemplateFieldsFieldOptionsFieldStaticConfigField;
export declare function newSerializeClassificationTemplateFieldsFieldOptionsField(val: ClassificationTemplateFieldsFieldOptionsField): Json;
export declare function newDeserializeClassificationTemplateFieldsFieldOptionsField(val: any): ClassificationTemplateFieldsFieldOptionsField;
export declare function newSerializeClassificationTemplateFieldsField(val: ClassificationTemplateFieldsField): Json;
export declare function newDeserializeClassificationTemplateFieldsField(val: any): ClassificationTemplateFieldsField;
export declare function newSerializeClassificationTemplate(val: ClassificationTemplate): Json;
export declare function newDeserializeClassificationTemplate(val: any): ClassificationTemplate;
export declare function newSerializeCollaborationAllowlistEntryTypeField(val: CollaborationAllowlistEntryTypeField): Json;
export declare function newDeserializeCollaborationAllowlistEntryTypeField(val: any): CollaborationAllowlistEntryTypeField;
export declare function newSerializeCollaborationAllowlistEntryDirectionField(val: CollaborationAllowlistEntryDirectionField): Json;
export declare function newDeserializeCollaborationAllowlistEntryDirectionField(val: any): CollaborationAllowlistEntryDirectionField;
export declare function newSerializeCollaborationAllowlistEntryEnterpriseFieldTypeField(val: CollaborationAllowlistEntryEnterpriseFieldTypeField): Json;
export declare function newDeserializeCollaborationAllowlistEntryEnterpriseFieldTypeField(val: any): CollaborationAllowlistEntryEnterpriseFieldTypeField;
export declare function newSerializeCollaborationAllowlistEntryEnterpriseField(val: CollaborationAllowlistEntryEnterpriseField): Json;
export declare function newDeserializeCollaborationAllowlistEntryEnterpriseField(val: any): CollaborationAllowlistEntryEnterpriseField;
export declare function newSerializeCollaborationAllowlistEntry(val: CollaborationAllowlistEntry): Json;
export declare function newDeserializeCollaborationAllowlistEntry(val: any): CollaborationAllowlistEntry;
export declare function newSerializeCollaborationAllowlistEntries(val: CollaborationAllowlistEntries): Json;
export declare function newDeserializeCollaborationAllowlistEntries(val: any): CollaborationAllowlistEntries;
export declare function newSerializeCollaborationAllowlistExemptTargetTypeField(val: CollaborationAllowlistExemptTargetTypeField): Json;
export declare function newDeserializeCollaborationAllowlistExemptTargetTypeField(val: any): CollaborationAllowlistExemptTargetTypeField;
export declare function newSerializeCollaborationAllowlistExemptTargetEnterpriseFieldTypeField(val: CollaborationAllowlistExemptTargetEnterpriseFieldTypeField): Json;
export declare function newDeserializeCollaborationAllowlistExemptTargetEnterpriseFieldTypeField(val: any): CollaborationAllowlistExemptTargetEnterpriseFieldTypeField;
export declare function newSerializeCollaborationAllowlistExemptTargetEnterpriseField(val: CollaborationAllowlistExemptTargetEnterpriseField): Json;
export declare function newDeserializeCollaborationAllowlistExemptTargetEnterpriseField(val: any): CollaborationAllowlistExemptTargetEnterpriseField;
export declare function newSerializeCollaborationAllowlistExemptTargetUserFieldTypeField(val: CollaborationAllowlistExemptTargetUserFieldTypeField): Json;
export declare function newDeserializeCollaborationAllowlistExemptTargetUserFieldTypeField(val: any): CollaborationAllowlistExemptTargetUserFieldTypeField;
export declare function newSerializeCollaborationAllowlistExemptTargetUserField(val: CollaborationAllowlistExemptTargetUserField): Json;
export declare function newDeserializeCollaborationAllowlistExemptTargetUserField(val: any): CollaborationAllowlistExemptTargetUserField;
export declare function newSerializeCollaborationAllowlistExemptTarget(val: CollaborationAllowlistExemptTarget): Json;
export declare function newDeserializeCollaborationAllowlistExemptTarget(val: any): CollaborationAllowlistExemptTarget;
export declare function newSerializeCollaborationAllowlistExemptTargets(val: CollaborationAllowlistExemptTargets): Json;
export declare function newDeserializeCollaborationAllowlistExemptTargets(val: any): CollaborationAllowlistExemptTargets;
export declare function newSerializeCollectionTypeField(val: CollectionTypeField): Json;
export declare function newDeserializeCollectionTypeField(val: any): CollectionTypeField;
export declare function newSerializeCollectionNameField(val: CollectionNameField): Json;
export declare function newDeserializeCollectionNameField(val: any): CollectionNameField;
export declare function newSerializeCollectionCollectionTypeField(val: CollectionCollectionTypeField): Json;
export declare function newDeserializeCollectionCollectionTypeField(val: any): CollectionCollectionTypeField;
export declare function newSerializeCollection(val: Collection): Json;
export declare function newDeserializeCollection(val: any): Collection;
export declare function newSerializeCollectionsOrderFieldDirectionField(val: CollectionsOrderFieldDirectionField): Json;
export declare function newDeserializeCollectionsOrderFieldDirectionField(val: any): CollectionsOrderFieldDirectionField;
export declare function newSerializeCollectionsOrderField(val: CollectionsOrderField): Json;
export declare function newDeserializeCollectionsOrderField(val: any): CollectionsOrderField;
export declare function newSerializeCollections(val: Collections): Json;
export declare function newDeserializeCollections(val: any): Collections;
export declare function newSerializeCommentBaseTypeField(val: CommentBaseTypeField): Json;
export declare function newDeserializeCommentBaseTypeField(val: any): CommentBaseTypeField;
export declare function newSerializeCommentBase(val: CommentBase): Json;
export declare function newDeserializeCommentBase(val: any): CommentBase;
export declare function newSerializeEmailAliasTypeField(val: EmailAliasTypeField): Json;
export declare function newDeserializeEmailAliasTypeField(val: any): EmailAliasTypeField;
export declare function newSerializeEmailAlias(val: EmailAlias): Json;
export declare function newDeserializeEmailAlias(val: any): EmailAlias;
export declare function newSerializeEmailAliases(val: EmailAliases): Json;
export declare function newDeserializeEmailAliases(val: any): EmailAliases;
export declare function newSerializeEnterpriseBaseTypeField(val: EnterpriseBaseTypeField): Json;
export declare function newDeserializeEnterpriseBaseTypeField(val: any): EnterpriseBaseTypeField;
export declare function newSerializeEnterpriseBase(val: EnterpriseBase): Json;
export declare function newDeserializeEnterpriseBase(val: any): EnterpriseBase;
export declare function newSerializeFileBaseTypeField(val: FileBaseTypeField): Json;
export declare function newDeserializeFileBaseTypeField(val: any): FileBaseTypeField;
export declare function newSerializeFileBase(val: FileBase): Json;
export declare function newDeserializeFileBase(val: any): FileBase;
export declare function newSerializeFileVersionBaseTypeField(val: FileVersionBaseTypeField): Json;
export declare function newDeserializeFileVersionBaseTypeField(val: any): FileVersionBaseTypeField;
export declare function newSerializeFileVersionBase(val: FileVersionBase): Json;
export declare function newDeserializeFileVersionBase(val: any): FileVersionBase;
export declare function newSerializeFileVersionMini(val: FileVersionMini): Json;
export declare function newDeserializeFileVersionMini(val: any): FileVersionMini;
export declare function newSerializeFileMini(val: FileMini): Json;
export declare function newDeserializeFileMini(val: any): FileMini;
export declare function newSerializeFileScopeScopeField(val: FileScopeScopeField): Json;
export declare function newDeserializeFileScopeScopeField(val: any): FileScopeScopeField;
export declare function newSerializeFileScope(val: FileScope): Json;
export declare function newDeserializeFileScope(val: any): FileScope;
export declare function newSerializeAccessTokenTokenTypeField(val: AccessTokenTokenTypeField): Json;
export declare function newDeserializeAccessTokenTokenTypeField(val: any): AccessTokenTokenTypeField;
export declare function newSerializeAccessTokenIssuedTokenTypeField(val: AccessTokenIssuedTokenTypeField): Json;
export declare function newDeserializeAccessTokenIssuedTokenTypeField(val: any): AccessTokenIssuedTokenTypeField;
export declare function newSerializeAccessToken(val: AccessToken): Json;
export declare function newDeserializeAccessToken(val: any): AccessToken;
export declare function newSerializeFilesUnderRetention(val: FilesUnderRetention): Json;
export declare function newDeserializeFilesUnderRetention(val: any): FilesUnderRetention;
export declare function newSerializeFileConflict(val: FileConflict): Json;
export declare function newDeserializeFileConflict(val: any): FileConflict;
export declare function newSerializeConflictErrorContextInfoField(val: ConflictErrorContextInfoField): Json;
export declare function newDeserializeConflictErrorContextInfoField(val: any): ConflictErrorContextInfoField;
export declare function newSerializeConflictError(val: ConflictError): Json;
export declare function newDeserializeConflictError(val: any): ConflictError;
export declare function newSerializeFolderBaseTypeField(val: FolderBaseTypeField): Json;
export declare function newDeserializeFolderBaseTypeField(val: any): FolderBaseTypeField;
export declare function newSerializeFolderBase(val: FolderBase): Json;
export declare function newDeserializeFolderBase(val: any): FolderBase;
export declare function newSerializeFolderMini(val: FolderMini): Json;
export declare function newDeserializeFolderMini(val: any): FolderMini;
export declare function newSerializeIntegrationMappingBaseIntegrationTypeField(val: IntegrationMappingBaseIntegrationTypeField): Json;
export declare function newDeserializeIntegrationMappingBaseIntegrationTypeField(val: any): IntegrationMappingBaseIntegrationTypeField;
export declare function newSerializeIntegrationMappingBase(val: IntegrationMappingBase): Json;
export declare function newDeserializeIntegrationMappingBase(val: any): IntegrationMappingBase;
export declare function newSerializeIntegrationMappingMiniPartnerItemTypeField(val: IntegrationMappingMiniPartnerItemTypeField): Json;
export declare function newDeserializeIntegrationMappingMiniPartnerItemTypeField(val: any): IntegrationMappingMiniPartnerItemTypeField;
export declare function newSerializeIntegrationMappingMiniBoxItemTypeField(val: IntegrationMappingMiniBoxItemTypeField): Json;
export declare function newDeserializeIntegrationMappingMiniBoxItemTypeField(val: any): IntegrationMappingMiniBoxItemTypeField;
export declare function newSerializeIntegrationMappingMini(val: IntegrationMappingMini): Json;
export declare function newDeserializeIntegrationMappingMini(val: any): IntegrationMappingMini;
export declare function newSerializeGroupBaseTypeField(val: GroupBaseTypeField): Json;
export declare function newDeserializeGroupBaseTypeField(val: any): GroupBaseTypeField;
export declare function newSerializeGroupBase(val: GroupBase): Json;
export declare function newDeserializeGroupBase(val: any): GroupBase;
export declare function newSerializeGroupMiniGroupTypeField(val: GroupMiniGroupTypeField): Json;
export declare function newDeserializeGroupMiniGroupTypeField(val: any): GroupMiniGroupTypeField;
export declare function newSerializeGroupMini(val: GroupMini): Json;
export declare function newDeserializeGroupMini(val: any): GroupMini;
export declare function newSerializeGroupsOrderFieldDirectionField(val: GroupsOrderFieldDirectionField): Json;
export declare function newDeserializeGroupsOrderFieldDirectionField(val: any): GroupsOrderFieldDirectionField;
export declare function newSerializeGroupsOrderField(val: GroupsOrderField): Json;
export declare function newDeserializeGroupsOrderField(val: any): GroupsOrderField;
export declare function newSerializeGroups(val: Groups): Json;
export declare function newDeserializeGroups(val: any): Groups;
export declare function newSerializeGroup(val: Group): Json;
export declare function newDeserializeGroup(val: any): Group;
export declare function newSerializeGroupFullInvitabilityLevelField(val: GroupFullInvitabilityLevelField): Json;
export declare function newDeserializeGroupFullInvitabilityLevelField(val: any): GroupFullInvitabilityLevelField;
export declare function newSerializeGroupFullMemberViewabilityLevelField(val: GroupFullMemberViewabilityLevelField): Json;
export declare function newDeserializeGroupFullMemberViewabilityLevelField(val: any): GroupFullMemberViewabilityLevelField;
export declare function newSerializeGroupFullPermissionsField(val: GroupFullPermissionsField): Json;
export declare function newDeserializeGroupFullPermissionsField(val: any): GroupFullPermissionsField;
export declare function newSerializeGroupFull(val: GroupFull): Json;
export declare function newDeserializeGroupFull(val: any): GroupFull;
export declare function newSerializeLegalHoldPolicyMiniTypeField(val: LegalHoldPolicyMiniTypeField): Json;
export declare function newDeserializeLegalHoldPolicyMiniTypeField(val: any): LegalHoldPolicyMiniTypeField;
export declare function newSerializeLegalHoldPolicyMini(val: LegalHoldPolicyMini): Json;
export declare function newDeserializeLegalHoldPolicyMini(val: any): LegalHoldPolicyMini;
export declare function newSerializeLegalHoldPolicyAssignmentBaseTypeField(val: LegalHoldPolicyAssignmentBaseTypeField): Json;
export declare function newDeserializeLegalHoldPolicyAssignmentBaseTypeField(val: any): LegalHoldPolicyAssignmentBaseTypeField;
export declare function newSerializeLegalHoldPolicyAssignmentBase(val: LegalHoldPolicyAssignmentBase): Json;
export declare function newDeserializeLegalHoldPolicyAssignmentBase(val: any): LegalHoldPolicyAssignmentBase;
export declare function newSerializeLegalHoldPolicyAssignments(val: LegalHoldPolicyAssignments): Json;
export declare function newDeserializeLegalHoldPolicyAssignments(val: any): LegalHoldPolicyAssignments;
export declare function newSerializeMetadata(val: Metadata): Json;
export declare function newDeserializeMetadata(val: any): Metadata;
export declare function newSerializeMetadatas(val: Metadatas): Json;
export declare function newDeserializeMetadatas(val: any): Metadatas;
export declare function newSerializeMetadataFull(val: MetadataFull): Json;
export declare function newDeserializeMetadataFull(val: any): MetadataFull;
export declare function newSerializeMetadataBase(val: MetadataBase): Json;
export declare function newDeserializeMetadataBase(val: any): MetadataBase;
export declare function newSerializeMetadataCascadePolicyTypeField(val: MetadataCascadePolicyTypeField): Json;
export declare function newDeserializeMetadataCascadePolicyTypeField(val: any): MetadataCascadePolicyTypeField;
export declare function newSerializeMetadataCascadePolicyOwnerEnterpriseFieldTypeField(val: MetadataCascadePolicyOwnerEnterpriseFieldTypeField): Json;
export declare function newDeserializeMetadataCascadePolicyOwnerEnterpriseFieldTypeField(val: any): MetadataCascadePolicyOwnerEnterpriseFieldTypeField;
export declare function newSerializeMetadataCascadePolicyOwnerEnterpriseField(val: MetadataCascadePolicyOwnerEnterpriseField): Json;
export declare function newDeserializeMetadataCascadePolicyOwnerEnterpriseField(val: any): MetadataCascadePolicyOwnerEnterpriseField;
export declare function newSerializeMetadataCascadePolicyParentFieldTypeField(val: MetadataCascadePolicyParentFieldTypeField): Json;
export declare function newDeserializeMetadataCascadePolicyParentFieldTypeField(val: any): MetadataCascadePolicyParentFieldTypeField;
export declare function newSerializeMetadataCascadePolicyParentField(val: MetadataCascadePolicyParentField): Json;
export declare function newDeserializeMetadataCascadePolicyParentField(val: any): MetadataCascadePolicyParentField;
export declare function newSerializeMetadataCascadePolicyScopeField(val: MetadataCascadePolicyScopeField): Json;
export declare function newDeserializeMetadataCascadePolicyScopeField(val: any): MetadataCascadePolicyScopeField;
export declare function newSerializeMetadataCascadePolicy(val: MetadataCascadePolicy): Json;
export declare function newDeserializeMetadataCascadePolicy(val: any): MetadataCascadePolicy;
export declare function newSerializeMetadataCascadePolicies(val: MetadataCascadePolicies): Json;
export declare function newDeserializeMetadataCascadePolicies(val: any): MetadataCascadePolicies;
export declare function newSerializeMetadataQueryIndexStatusField(val: MetadataQueryIndexStatusField): Json;
export declare function newDeserializeMetadataQueryIndexStatusField(val: any): MetadataQueryIndexStatusField;
export declare function newSerializeMetadataQueryIndexFieldsFieldSortDirectionField(val: MetadataQueryIndexFieldsFieldSortDirectionField): Json;
export declare function newDeserializeMetadataQueryIndexFieldsFieldSortDirectionField(val: any): MetadataQueryIndexFieldsFieldSortDirectionField;
export declare function newSerializeMetadataQueryIndexFieldsField(val: MetadataQueryIndexFieldsField): Json;
export declare function newDeserializeMetadataQueryIndexFieldsField(val: any): MetadataQueryIndexFieldsField;
export declare function newSerializeMetadataQueryIndex(val: MetadataQueryIndex): Json;
export declare function newDeserializeMetadataQueryIndex(val: any): MetadataQueryIndex;
export declare function newSerializeMetadataQueryIndices(val: MetadataQueryIndices): Json;
export declare function newDeserializeMetadataQueryIndices(val: any): MetadataQueryIndices;
export declare function newSerializeMetadataTemplateTypeField(val: MetadataTemplateTypeField): Json;
export declare function newDeserializeMetadataTemplateTypeField(val: any): MetadataTemplateTypeField;
export declare function newSerializeMetadataTemplateFieldsFieldTypeField(val: MetadataTemplateFieldsFieldTypeField): Json;
export declare function newDeserializeMetadataTemplateFieldsFieldTypeField(val: any): MetadataTemplateFieldsFieldTypeField;
export declare function newSerializeMetadataTemplateFieldsFieldOptionsField(val: MetadataTemplateFieldsFieldOptionsField): Json;
export declare function newDeserializeMetadataTemplateFieldsFieldOptionsField(val: any): MetadataTemplateFieldsFieldOptionsField;
export declare function newSerializeMetadataTemplateFieldsField(val: MetadataTemplateFieldsField): Json;
export declare function newDeserializeMetadataTemplateFieldsField(val: any): MetadataTemplateFieldsField;
export declare function newSerializeMetadataTemplate(val: MetadataTemplate): Json;
export declare function newDeserializeMetadataTemplate(val: any): MetadataTemplate;
export declare function newSerializeMetadataTemplates(val: MetadataTemplates): Json;
export declare function newDeserializeMetadataTemplates(val: any): MetadataTemplates;
export declare function newSerializeRealtimeServer(val: RealtimeServer): Json;
export declare function newDeserializeRealtimeServer(val: any): RealtimeServer;
export declare function newSerializeRealtimeServers(val: RealtimeServers): Json;
export declare function newDeserializeRealtimeServers(val: any): RealtimeServers;
export declare function newSerializeRetentionPolicyBaseTypeField(val: RetentionPolicyBaseTypeField): Json;
export declare function newDeserializeRetentionPolicyBaseTypeField(val: any): RetentionPolicyBaseTypeField;
export declare function newSerializeRetentionPolicyBase(val: RetentionPolicyBase): Json;
export declare function newDeserializeRetentionPolicyBase(val: any): RetentionPolicyBase;
export declare function newSerializeRetentionPolicyMiniDispositionActionField(val: RetentionPolicyMiniDispositionActionField): Json;
export declare function newDeserializeRetentionPolicyMiniDispositionActionField(val: any): RetentionPolicyMiniDispositionActionField;
export declare function newSerializeRetentionPolicyMini(val: RetentionPolicyMini): Json;
export declare function newDeserializeRetentionPolicyMini(val: any): RetentionPolicyMini;
export declare function newSerializeRetentionPolicies(val: RetentionPolicies): Json;
export declare function newDeserializeRetentionPolicies(val: any): RetentionPolicies;
export declare function newSerializeFileVersionRetentionTypeField(val: FileVersionRetentionTypeField): Json;
export declare function newDeserializeFileVersionRetentionTypeField(val: any): FileVersionRetentionTypeField;
export declare function newSerializeFileVersionRetention(val: FileVersionRetention): Json;
export declare function newDeserializeFileVersionRetention(val: any): FileVersionRetention;
export declare function newSerializeFileVersionRetentions(val: FileVersionRetentions): Json;
export declare function newDeserializeFileVersionRetentions(val: any): FileVersionRetentions;
export declare function newSerializeRetentionPolicyAssignmentBaseTypeField(val: RetentionPolicyAssignmentBaseTypeField): Json;
export declare function newDeserializeRetentionPolicyAssignmentBaseTypeField(val: any): RetentionPolicyAssignmentBaseTypeField;
export declare function newSerializeRetentionPolicyAssignmentBase(val: RetentionPolicyAssignmentBase): Json;
export declare function newDeserializeRetentionPolicyAssignmentBase(val: any): RetentionPolicyAssignmentBase;
export declare function newSerializeRetentionPolicyAssignments(val: RetentionPolicyAssignments): Json;
export declare function newDeserializeRetentionPolicyAssignments(val: any): RetentionPolicyAssignments;
export declare function newSerializeShieldInformationBarrierBaseTypeField(val: ShieldInformationBarrierBaseTypeField): Json;
export declare function newDeserializeShieldInformationBarrierBaseTypeField(val: any): ShieldInformationBarrierBaseTypeField;
export declare function newSerializeShieldInformationBarrierBase(val: ShieldInformationBarrierBase): Json;
export declare function newDeserializeShieldInformationBarrierBase(val: any): ShieldInformationBarrierBase;
export declare function newSerializeShieldInformationBarrierReference(val: ShieldInformationBarrierReference): Json;
export declare function newDeserializeShieldInformationBarrierReference(val: any): ShieldInformationBarrierReference;
export declare function newSerializeShieldInformationBarrierReportBaseTypeField(val: ShieldInformationBarrierReportBaseTypeField): Json;
export declare function newDeserializeShieldInformationBarrierReportBaseTypeField(val: any): ShieldInformationBarrierReportBaseTypeField;
export declare function newSerializeShieldInformationBarrierReportBase(val: ShieldInformationBarrierReportBase): Json;
export declare function newDeserializeShieldInformationBarrierReportBase(val: any): ShieldInformationBarrierReportBase;
export declare function newSerializeShieldInformationBarrierSegmentMemberBaseTypeField(val: ShieldInformationBarrierSegmentMemberBaseTypeField): Json;
export declare function newDeserializeShieldInformationBarrierSegmentMemberBaseTypeField(val: any): ShieldInformationBarrierSegmentMemberBaseTypeField;
export declare function newSerializeShieldInformationBarrierSegmentMemberBase(val: ShieldInformationBarrierSegmentMemberBase): Json;
export declare function newDeserializeShieldInformationBarrierSegmentMemberBase(val: any): ShieldInformationBarrierSegmentMemberBase;
export declare function newSerializeShieldInformationBarrierSegmentRestrictionBaseTypeField(val: ShieldInformationBarrierSegmentRestrictionBaseTypeField): Json;
export declare function newDeserializeShieldInformationBarrierSegmentRestrictionBaseTypeField(val: any): ShieldInformationBarrierSegmentRestrictionBaseTypeField;
export declare function newSerializeShieldInformationBarrierSegmentRestrictionBase(val: ShieldInformationBarrierSegmentRestrictionBase): Json;
export declare function newDeserializeShieldInformationBarrierSegmentRestrictionBase(val: any): ShieldInformationBarrierSegmentRestrictionBase;
export declare function newSerializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentFieldTypeField(val: ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentFieldTypeField): Json;
export declare function newDeserializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentFieldTypeField(val: any): ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentFieldTypeField;
export declare function newSerializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField(val: ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField): Json;
export declare function newDeserializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField(val: any): ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField;
export declare function newSerializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentFieldTypeField(val: ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentFieldTypeField): Json;
export declare function newDeserializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentFieldTypeField(val: any): ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentFieldTypeField;
export declare function newSerializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField(val: ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField): Json;
export declare function newDeserializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField(val: any): ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField;
export declare function newSerializeShieldInformationBarrierSegmentRestrictionMini(val: ShieldInformationBarrierSegmentRestrictionMini): Json;
export declare function newDeserializeShieldInformationBarrierSegmentRestrictionMini(val: any): ShieldInformationBarrierSegmentRestrictionMini;
export declare function newSerializeSessionTerminationMessage(val: SessionTerminationMessage): Json;
export declare function newDeserializeSessionTerminationMessage(val: any): SessionTerminationMessage;
export declare function newSerializeStoragePolicyMiniTypeField(val: StoragePolicyMiniTypeField): Json;
export declare function newDeserializeStoragePolicyMiniTypeField(val: any): StoragePolicyMiniTypeField;
export declare function newSerializeStoragePolicyMini(val: StoragePolicyMini): Json;
export declare function newDeserializeStoragePolicyMini(val: any): StoragePolicyMini;
export declare function newSerializeStoragePolicyAssignmentAssignedToField(val: StoragePolicyAssignmentAssignedToField): Json;
export declare function newDeserializeStoragePolicyAssignmentAssignedToField(val: any): StoragePolicyAssignmentAssignedToField;
export declare function newSerializeStoragePolicyAssignment(val: StoragePolicyAssignment): Json;
export declare function newDeserializeStoragePolicyAssignment(val: any): StoragePolicyAssignment;
export declare function newSerializeStoragePolicyAssignments(val: StoragePolicyAssignments): Json;
export declare function newDeserializeStoragePolicyAssignments(val: any): StoragePolicyAssignments;
export declare function newSerializeStoragePolicy(val: StoragePolicy): Json;
export declare function newDeserializeStoragePolicy(val: any): StoragePolicy;
export declare function newSerializeStoragePolicies(val: StoragePolicies): Json;
export declare function newDeserializeStoragePolicies(val: any): StoragePolicies;
export declare function newSerializeTermsOfServiceBaseTypeField(val: TermsOfServiceBaseTypeField): Json;
export declare function newDeserializeTermsOfServiceBaseTypeField(val: any): TermsOfServiceBaseTypeField;
export declare function newSerializeTermsOfServiceBase(val: TermsOfServiceBase): Json;
export declare function newDeserializeTermsOfServiceBase(val: any): TermsOfServiceBase;
export declare function newSerializeTermsOfServiceStatusField(val: TermsOfServiceStatusField): Json;
export declare function newDeserializeTermsOfServiceStatusField(val: any): TermsOfServiceStatusField;
export declare function newSerializeTermsOfServiceEnterpriseFieldTypeField(val: TermsOfServiceEnterpriseFieldTypeField): Json;
export declare function newDeserializeTermsOfServiceEnterpriseFieldTypeField(val: any): TermsOfServiceEnterpriseFieldTypeField;
export declare function newSerializeTermsOfServiceEnterpriseField(val: TermsOfServiceEnterpriseField): Json;
export declare function newDeserializeTermsOfServiceEnterpriseField(val: any): TermsOfServiceEnterpriseField;
export declare function newSerializeTermsOfServiceTosTypeField(val: TermsOfServiceTosTypeField): Json;
export declare function newDeserializeTermsOfServiceTosTypeField(val: any): TermsOfServiceTosTypeField;
export declare function newSerializeTermsOfService(val: TermsOfService): Json;
export declare function newDeserializeTermsOfService(val: any): TermsOfService;
export declare function newSerializeTermsOfServices(val: TermsOfServices): Json;
export declare function newDeserializeTermsOfServices(val: any): TermsOfServices;
export declare function newSerializeSignTemplates(val: SignTemplates): Json;
export declare function newDeserializeSignTemplates(val: any): SignTemplates;
export declare function newSerializeUploadPartMini(val: UploadPartMini): Json;
export declare function newDeserializeUploadPartMini(val: any): UploadPartMini;
export declare function newSerializeUploadPart(val: UploadPart): Json;
export declare function newDeserializeUploadPart(val: any): UploadPart;
export declare function newSerializeUploadPartsOrderFieldDirectionField(val: UploadPartsOrderFieldDirectionField): Json;
export declare function newDeserializeUploadPartsOrderFieldDirectionField(val: any): UploadPartsOrderFieldDirectionField;
export declare function newSerializeUploadPartsOrderField(val: UploadPartsOrderField): Json;
export declare function newDeserializeUploadPartsOrderField(val: any): UploadPartsOrderField;
export declare function newSerializeUploadParts(val: UploadParts): Json;
export declare function newDeserializeUploadParts(val: any): UploadParts;
export declare function newSerializeUploadedPart(val: UploadedPart): Json;
export declare function newDeserializeUploadedPart(val: any): UploadedPart;
export declare function newSerializeUploadSessionTypeField(val: UploadSessionTypeField): Json;
export declare function newDeserializeUploadSessionTypeField(val: any): UploadSessionTypeField;
export declare function newSerializeUploadSessionSessionEndpointsField(val: UploadSessionSessionEndpointsField): Json;
export declare function newDeserializeUploadSessionSessionEndpointsField(val: any): UploadSessionSessionEndpointsField;
export declare function newSerializeUploadSession(val: UploadSession): Json;
export declare function newDeserializeUploadSession(val: any): UploadSession;
export declare function newSerializeUploadUrl(val: UploadUrl): Json;
export declare function newDeserializeUploadUrl(val: any): UploadUrl;
export declare function newSerializeUserAvatarPicUrlsField(val: UserAvatarPicUrlsField): Json;
export declare function newDeserializeUserAvatarPicUrlsField(val: any): UserAvatarPicUrlsField;
export declare function newSerializeUserAvatar(val: UserAvatar): Json;
export declare function newDeserializeUserAvatar(val: any): UserAvatar;
export declare function newSerializeUserBaseTypeField(val: UserBaseTypeField): Json;
export declare function newDeserializeUserBaseTypeField(val: any): UserBaseTypeField;
export declare function newSerializeUserBase(val: UserBase): Json;
export declare function newDeserializeUserBase(val: any): UserBase;
export declare function newSerializeUserIntegrationMappings(val: UserIntegrationMappings): Json;
export declare function newDeserializeUserIntegrationMappings(val: any): UserIntegrationMappings;
export declare function newSerializeUserCollaborations(val: UserCollaborations): Json;
export declare function newDeserializeUserCollaborations(val: any): UserCollaborations;
export declare function newSerializeUserMini(val: UserMini): Json;
export declare function newDeserializeUserMini(val: any): UserMini;
export declare function newSerializeEventSourceItemTypeField(val: EventSourceItemTypeField): Json;
export declare function newDeserializeEventSourceItemTypeField(val: any): EventSourceItemTypeField;
export declare function newSerializeEventSourceClassificationField(val: EventSourceClassificationField): Json;
export declare function newDeserializeEventSourceClassificationField(val: any): EventSourceClassificationField;
export declare function newSerializeEventSource(val: EventSource): Json;
export declare function newDeserializeEventSource(val: any): EventSource;
export declare function newSerializeUserStatusField(val: UserStatusField): Json;
export declare function newDeserializeUserStatusField(val: any): UserStatusField;
export declare function newSerializeUserNotificationEmailField(val: UserNotificationEmailField): Json;
export declare function newDeserializeUserNotificationEmailField(val: any): UserNotificationEmailField;
export declare function newSerializeUser(val: User): Json;
export declare function newDeserializeUser(val: any): User;
export declare function newSerializeUsersOrderFieldDirectionField(val: UsersOrderFieldDirectionField): Json;
export declare function newDeserializeUsersOrderFieldDirectionField(val: any): UsersOrderFieldDirectionField;
export declare function newSerializeUsersOrderField(val: UsersOrderField): Json;
export declare function newDeserializeUsersOrderField(val: any): UsersOrderField;
export declare function newSerializeUsers(val: Users): Json;
export declare function newDeserializeUsers(val: any): Users;
export declare function newSerializeTrashWebLinkRestoredTypeField(val: TrashWebLinkRestoredTypeField): Json;
export declare function newDeserializeTrashWebLinkRestoredTypeField(val: any): TrashWebLinkRestoredTypeField;
export declare function newSerializeTrashWebLinkRestoredPathCollectionField(val: TrashWebLinkRestoredPathCollectionField): Json;
export declare function newDeserializeTrashWebLinkRestoredPathCollectionField(val: any): TrashWebLinkRestoredPathCollectionField;
export declare function newSerializeTrashWebLinkRestoredItemStatusField(val: TrashWebLinkRestoredItemStatusField): Json;
export declare function newDeserializeTrashWebLinkRestoredItemStatusField(val: any): TrashWebLinkRestoredItemStatusField;
export declare function newSerializeTrashWebLinkRestored(val: TrashWebLinkRestored): Json;
export declare function newDeserializeTrashWebLinkRestored(val: any): TrashWebLinkRestored;
export declare function newSerializeTrashFolderRestoredTypeField(val: TrashFolderRestoredTypeField): Json;
export declare function newDeserializeTrashFolderRestoredTypeField(val: any): TrashFolderRestoredTypeField;
export declare function newSerializeTrashFolderRestoredPathCollectionField(val: TrashFolderRestoredPathCollectionField): Json;
export declare function newDeserializeTrashFolderRestoredPathCollectionField(val: any): TrashFolderRestoredPathCollectionField;
export declare function newSerializeTrashFolderRestoredItemStatusField(val: TrashFolderRestoredItemStatusField): Json;
export declare function newDeserializeTrashFolderRestoredItemStatusField(val: any): TrashFolderRestoredItemStatusField;
export declare function newSerializeTrashFolderRestored(val: TrashFolderRestored): Json;
export declare function newDeserializeTrashFolderRestored(val: any): TrashFolderRestored;
export declare function newSerializeTrashFileRestoredTypeField(val: TrashFileRestoredTypeField): Json;
export declare function newDeserializeTrashFileRestoredTypeField(val: any): TrashFileRestoredTypeField;
export declare function newSerializeTrashFileRestoredPathCollectionField(val: TrashFileRestoredPathCollectionField): Json;
export declare function newDeserializeTrashFileRestoredPathCollectionField(val: any): TrashFileRestoredPathCollectionField;
export declare function newSerializeTrashFileRestoredItemStatusField(val: TrashFileRestoredItemStatusField): Json;
export declare function newDeserializeTrashFileRestoredItemStatusField(val: any): TrashFileRestoredItemStatusField;
export declare function newSerializeTrashFileRestored(val: TrashFileRestored): Json;
export declare function newDeserializeTrashFileRestored(val: any): TrashFileRestored;
export declare function newSerializeTrashWebLinkTypeField(val: TrashWebLinkTypeField): Json;
export declare function newDeserializeTrashWebLinkTypeField(val: any): TrashWebLinkTypeField;
export declare function newSerializeTrashWebLinkPathCollectionFieldEntriesFieldTypeField(val: TrashWebLinkPathCollectionFieldEntriesFieldTypeField): Json;
export declare function newDeserializeTrashWebLinkPathCollectionFieldEntriesFieldTypeField(val: any): TrashWebLinkPathCollectionFieldEntriesFieldTypeField;
export declare function newSerializeTrashWebLinkPathCollectionFieldEntriesField(val: TrashWebLinkPathCollectionFieldEntriesField): Json;
export declare function newDeserializeTrashWebLinkPathCollectionFieldEntriesField(val: any): TrashWebLinkPathCollectionFieldEntriesField;
export declare function newSerializeTrashWebLinkPathCollectionField(val: TrashWebLinkPathCollectionField): Json;
export declare function newDeserializeTrashWebLinkPathCollectionField(val: any): TrashWebLinkPathCollectionField;
export declare function newSerializeTrashWebLinkItemStatusField(val: TrashWebLinkItemStatusField): Json;
export declare function newDeserializeTrashWebLinkItemStatusField(val: any): TrashWebLinkItemStatusField;
export declare function newSerializeTrashWebLink(val: TrashWebLink): Json;
export declare function newDeserializeTrashWebLink(val: any): TrashWebLink;
export declare function newSerializeTrashFolderTypeField(val: TrashFolderTypeField): Json;
export declare function newDeserializeTrashFolderTypeField(val: any): TrashFolderTypeField;
export declare function newSerializeTrashFolderPathCollectionFieldEntriesFieldTypeField(val: TrashFolderPathCollectionFieldEntriesFieldTypeField): Json;
export declare function newDeserializeTrashFolderPathCollectionFieldEntriesFieldTypeField(val: any): TrashFolderPathCollectionFieldEntriesFieldTypeField;
export declare function newSerializeTrashFolderPathCollectionFieldEntriesField(val: TrashFolderPathCollectionFieldEntriesField): Json;
export declare function newDeserializeTrashFolderPathCollectionFieldEntriesField(val: any): TrashFolderPathCollectionFieldEntriesField;
export declare function newSerializeTrashFolderPathCollectionField(val: TrashFolderPathCollectionField): Json;
export declare function newDeserializeTrashFolderPathCollectionField(val: any): TrashFolderPathCollectionField;
export declare function newSerializeTrashFolderItemStatusField(val: TrashFolderItemStatusField): Json;
export declare function newDeserializeTrashFolderItemStatusField(val: any): TrashFolderItemStatusField;
export declare function newSerializeTrashFolder(val: TrashFolder): Json;
export declare function newDeserializeTrashFolder(val: any): TrashFolder;
export declare function newSerializeTrashFileTypeField(val: TrashFileTypeField): Json;
export declare function newDeserializeTrashFileTypeField(val: any): TrashFileTypeField;
export declare function newSerializeTrashFilePathCollectionFieldEntriesFieldTypeField(val: TrashFilePathCollectionFieldEntriesFieldTypeField): Json;
export declare function newDeserializeTrashFilePathCollectionFieldEntriesFieldTypeField(val: any): TrashFilePathCollectionFieldEntriesFieldTypeField;
export declare function newSerializeTrashFilePathCollectionFieldEntriesField(val: TrashFilePathCollectionFieldEntriesField): Json;
export declare function newDeserializeTrashFilePathCollectionFieldEntriesField(val: any): TrashFilePathCollectionFieldEntriesField;
export declare function newSerializeTrashFilePathCollectionField(val: TrashFilePathCollectionField): Json;
export declare function newDeserializeTrashFilePathCollectionField(val: any): TrashFilePathCollectionField;
export declare function newSerializeTrashFileItemStatusField(val: TrashFileItemStatusField): Json;
export declare function newDeserializeTrashFileItemStatusField(val: any): TrashFileItemStatusField;
export declare function newSerializeTrashFile(val: TrashFile): Json;
export declare function newDeserializeTrashFile(val: any): TrashFile;
export declare function newSerializeTermsOfServiceUserStatusTypeField(val: TermsOfServiceUserStatusTypeField): Json;
export declare function newDeserializeTermsOfServiceUserStatusTypeField(val: any): TermsOfServiceUserStatusTypeField;
export declare function newSerializeTermsOfServiceUserStatus(val: TermsOfServiceUserStatus): Json;
export declare function newDeserializeTermsOfServiceUserStatus(val: any): TermsOfServiceUserStatus;
export declare function newSerializeTermsOfServiceUserStatuses(val: TermsOfServiceUserStatuses): Json;
export declare function newDeserializeTermsOfServiceUserStatuses(val: any): TermsOfServiceUserStatuses;
export declare function newSerializeTaskAssignmentTypeField(val: TaskAssignmentTypeField): Json;
export declare function newDeserializeTaskAssignmentTypeField(val: any): TaskAssignmentTypeField;
export declare function newSerializeTaskAssignmentResolutionStateField(val: TaskAssignmentResolutionStateField): Json;
export declare function newDeserializeTaskAssignmentResolutionStateField(val: any): TaskAssignmentResolutionStateField;
export declare function newSerializeTaskAssignment(val: TaskAssignment): Json;
export declare function newDeserializeTaskAssignment(val: any): TaskAssignment;
export declare function newSerializeTaskAssignments(val: TaskAssignments): Json;
export declare function newDeserializeTaskAssignments(val: any): TaskAssignments;
export declare function newSerializeTaskTypeField(val: TaskTypeField): Json;
export declare function newDeserializeTaskTypeField(val: any): TaskTypeField;
export declare function newSerializeTaskActionField(val: TaskActionField): Json;
export declare function newDeserializeTaskActionField(val: any): TaskActionField;
export declare function newSerializeTaskCompletionRuleField(val: TaskCompletionRuleField): Json;
export declare function newDeserializeTaskCompletionRuleField(val: any): TaskCompletionRuleField;
export declare function newSerializeTask(val: Task): Json;
export declare function newDeserializeTask(val: any): Task;
export declare function newSerializeTasks(val: Tasks): Json;
export declare function newDeserializeTasks(val: any): Tasks;
export declare function newSerializeRetentionPolicyAssignmentTypeField(val: RetentionPolicyAssignmentTypeField): Json;
export declare function newDeserializeRetentionPolicyAssignmentTypeField(val: any): RetentionPolicyAssignmentTypeField;
export declare function newSerializeRetentionPolicyAssignmentAssignedToFieldTypeField(val: RetentionPolicyAssignmentAssignedToFieldTypeField): Json;
export declare function newDeserializeRetentionPolicyAssignmentAssignedToFieldTypeField(val: any): RetentionPolicyAssignmentAssignedToFieldTypeField;
export declare function newSerializeRetentionPolicyAssignmentAssignedToField(val: RetentionPolicyAssignmentAssignedToField): Json;
export declare function newDeserializeRetentionPolicyAssignmentAssignedToField(val: any): RetentionPolicyAssignmentAssignedToField;
export declare function newSerializeRetentionPolicyAssignmentFilterFieldsField(val: RetentionPolicyAssignmentFilterFieldsField): Json;
export declare function newDeserializeRetentionPolicyAssignmentFilterFieldsField(val: any): RetentionPolicyAssignmentFilterFieldsField;
export declare function newSerializeRetentionPolicyAssignment(val: RetentionPolicyAssignment): Json;
export declare function newDeserializeRetentionPolicyAssignment(val: any): RetentionPolicyAssignment;
export declare function newSerializeRetentionPolicyPolicyTypeField(val: RetentionPolicyPolicyTypeField): Json;
export declare function newDeserializeRetentionPolicyPolicyTypeField(val: any): RetentionPolicyPolicyTypeField;
export declare function newSerializeRetentionPolicyRetentionTypeField(val: RetentionPolicyRetentionTypeField): Json;
export declare function newDeserializeRetentionPolicyRetentionTypeField(val: any): RetentionPolicyRetentionTypeField;
export declare function newSerializeRetentionPolicyStatusField(val: RetentionPolicyStatusField): Json;
export declare function newDeserializeRetentionPolicyStatusField(val: any): RetentionPolicyStatusField;
export declare function newSerializeRetentionPolicyAssignmentCountsField(val: RetentionPolicyAssignmentCountsField): Json;
export declare function newDeserializeRetentionPolicyAssignmentCountsField(val: any): RetentionPolicyAssignmentCountsField;
export declare function newSerializeRetentionPolicy(val: RetentionPolicy): Json;
export declare function newDeserializeRetentionPolicy(val: any): RetentionPolicy;
export declare function newSerializeLegalHoldPolicyStatusField(val: LegalHoldPolicyStatusField): Json;
export declare function newDeserializeLegalHoldPolicyStatusField(val: any): LegalHoldPolicyStatusField;
export declare function newSerializeLegalHoldPolicyAssignmentCountsField(val: LegalHoldPolicyAssignmentCountsField): Json;
export declare function newDeserializeLegalHoldPolicyAssignmentCountsField(val: any): LegalHoldPolicyAssignmentCountsField;
export declare function newSerializeLegalHoldPolicy(val: LegalHoldPolicy): Json;
export declare function newDeserializeLegalHoldPolicy(val: any): LegalHoldPolicy;
export declare function newSerializeLegalHoldPolicies(val: LegalHoldPolicies): Json;
export declare function newDeserializeLegalHoldPolicies(val: any): LegalHoldPolicies;
export declare function newSerializeInviteTypeField(val: InviteTypeField): Json;
export declare function newDeserializeInviteTypeField(val: any): InviteTypeField;
export declare function newSerializeInviteInvitedToFieldTypeField(val: InviteInvitedToFieldTypeField): Json;
export declare function newDeserializeInviteInvitedToFieldTypeField(val: any): InviteInvitedToFieldTypeField;
export declare function newSerializeInviteInvitedToField(val: InviteInvitedToField): Json;
export declare function newDeserializeInviteInvitedToField(val: any): InviteInvitedToField;
export declare function newSerializeInvite(val: Invite): Json;
export declare function newDeserializeInvite(val: any): Invite;
export declare function newSerializeGroupMembershipTypeField(val: GroupMembershipTypeField): Json;
export declare function newDeserializeGroupMembershipTypeField(val: any): GroupMembershipTypeField;
export declare function newSerializeGroupMembershipRoleField(val: GroupMembershipRoleField): Json;
export declare function newDeserializeGroupMembershipRoleField(val: any): GroupMembershipRoleField;
export declare function newSerializeGroupMembership(val: GroupMembership): Json;
export declare function newDeserializeGroupMembership(val: any): GroupMembership;
export declare function newSerializeGroupMembershipsOrderFieldDirectionField(val: GroupMembershipsOrderFieldDirectionField): Json;
export declare function newDeserializeGroupMembershipsOrderFieldDirectionField(val: any): GroupMembershipsOrderFieldDirectionField;
export declare function newSerializeGroupMembershipsOrderField(val: GroupMembershipsOrderField): Json;
export declare function newDeserializeGroupMembershipsOrderField(val: any): GroupMembershipsOrderField;
export declare function newSerializeGroupMemberships(val: GroupMemberships): Json;
export declare function newDeserializeGroupMemberships(val: any): GroupMemberships;
export declare function newSerializeFileVersion(val: FileVersion): Json;
export declare function newDeserializeFileVersion(val: any): FileVersion;
export declare function newSerializeFileVersionsOrderFieldDirectionField(val: FileVersionsOrderFieldDirectionField): Json;
export declare function newDeserializeFileVersionsOrderFieldDirectionField(val: any): FileVersionsOrderFieldDirectionField;
export declare function newSerializeFileVersionsOrderField(val: FileVersionsOrderField): Json;
export declare function newDeserializeFileVersionsOrderField(val: any): FileVersionsOrderField;
export declare function newSerializeFileVersions(val: FileVersions): Json;
export declare function newDeserializeFileVersions(val: any): FileVersions;
export declare function newSerializeFileVersionFull(val: FileVersionFull): Json;
export declare function newDeserializeFileVersionFull(val: any): FileVersionFull;
export declare function newSerializeFileRequestTypeField(val: FileRequestTypeField): Json;
export declare function newDeserializeFileRequestTypeField(val: any): FileRequestTypeField;
export declare function newSerializeFileRequestStatusField(val: FileRequestStatusField): Json;
export declare function newDeserializeFileRequestStatusField(val: any): FileRequestStatusField;
export declare function newSerializeFileRequest(val: FileRequest): Json;
export declare function newDeserializeFileRequest(val: any): FileRequest;
export declare function newSerializeFilePathCollectionField(val: FilePathCollectionField): Json;
export declare function newDeserializeFilePathCollectionField(val: any): FilePathCollectionField;
export declare function newSerializeFileSharedLinkFieldAccessField(val: FileSharedLinkFieldAccessField): Json;
export declare function newDeserializeFileSharedLinkFieldAccessField(val: any): FileSharedLinkFieldAccessField;
export declare function newSerializeFileSharedLinkFieldEffectiveAccessField(val: FileSharedLinkFieldEffectiveAccessField): Json;
export declare function newDeserializeFileSharedLinkFieldEffectiveAccessField(val: any): FileSharedLinkFieldEffectiveAccessField;
export declare function newSerializeFileSharedLinkFieldEffectivePermissionField(val: FileSharedLinkFieldEffectivePermissionField): Json;
export declare function newDeserializeFileSharedLinkFieldEffectivePermissionField(val: any): FileSharedLinkFieldEffectivePermissionField;
export declare function newSerializeFileSharedLinkFieldPermissionsField(val: FileSharedLinkFieldPermissionsField): Json;
export declare function newDeserializeFileSharedLinkFieldPermissionsField(val: any): FileSharedLinkFieldPermissionsField;
export declare function newSerializeFileSharedLinkField(val: FileSharedLinkField): Json;
export declare function newDeserializeFileSharedLinkField(val: any): FileSharedLinkField;
export declare function newSerializeFileItemStatusField(val: FileItemStatusField): Json;
export declare function newDeserializeFileItemStatusField(val: any): FileItemStatusField;
export declare function newSerializeFile(val: File): Json;
export declare function newDeserializeFile(val: any): File;
export declare function newSerializeFileFullPermissionsField(val: FileFullPermissionsField): Json;
export declare function newDeserializeFileFullPermissionsField(val: any): FileFullPermissionsField;
export declare function newSerializeFileFullLockFieldTypeField(val: FileFullLockFieldTypeField): Json;
export declare function newDeserializeFileFullLockFieldTypeField(val: any): FileFullLockFieldTypeField;
export declare function newSerializeFileFullLockFieldAppTypeField(val: FileFullLockFieldAppTypeField): Json;
export declare function newDeserializeFileFullLockFieldAppTypeField(val: any): FileFullLockFieldAppTypeField;
export declare function newSerializeFileFullLockField(val: FileFullLockField): Json;
export declare function newDeserializeFileFullLockField(val: any): FileFullLockField;
export declare function newSerializeFileFullExpiringEmbedLinkFieldTokenTypeField(val: FileFullExpiringEmbedLinkFieldTokenTypeField): Json;
export declare function newDeserializeFileFullExpiringEmbedLinkFieldTokenTypeField(val: any): FileFullExpiringEmbedLinkFieldTokenTypeField;
export declare function newSerializeFileFullExpiringEmbedLinkField(val: FileFullExpiringEmbedLinkField): Json;
export declare function newDeserializeFileFullExpiringEmbedLinkField(val: any): FileFullExpiringEmbedLinkField;
export declare function newSerializeFileFullWatermarkInfoField(val: FileFullWatermarkInfoField): Json;
export declare function newDeserializeFileFullWatermarkInfoField(val: any): FileFullWatermarkInfoField;
export declare function newSerializeFileFullAllowedInviteeRolesField(val: FileFullAllowedInviteeRolesField): Json;
export declare function newDeserializeFileFullAllowedInviteeRolesField(val: any): FileFullAllowedInviteeRolesField;
export declare function newSerializeFileFullMetadataField(val: FileFullMetadataField): Json;
export declare function newDeserializeFileFullMetadataField(val: any): FileFullMetadataField;
export declare function newSerializeFileFullRepresentationsFieldEntriesFieldContentField(val: FileFullRepresentationsFieldEntriesFieldContentField): Json;
export declare function newDeserializeFileFullRepresentationsFieldEntriesFieldContentField(val: any): FileFullRepresentationsFieldEntriesFieldContentField;
export declare function newSerializeFileFullRepresentationsFieldEntriesFieldInfoField(val: FileFullRepresentationsFieldEntriesFieldInfoField): Json;
export declare function newDeserializeFileFullRepresentationsFieldEntriesFieldInfoField(val: any): FileFullRepresentationsFieldEntriesFieldInfoField;
export declare function newSerializeFileFullRepresentationsFieldEntriesFieldPropertiesField(val: FileFullRepresentationsFieldEntriesFieldPropertiesField): Json;
export declare function newDeserializeFileFullRepresentationsFieldEntriesFieldPropertiesField(val: any): FileFullRepresentationsFieldEntriesFieldPropertiesField;
export declare function newSerializeFileFullRepresentationsFieldEntriesFieldStatusFieldStateField(val: FileFullRepresentationsFieldEntriesFieldStatusFieldStateField): Json;
export declare function newDeserializeFileFullRepresentationsFieldEntriesFieldStatusFieldStateField(val: any): FileFullRepresentationsFieldEntriesFieldStatusFieldStateField;
export declare function newSerializeFileFullRepresentationsFieldEntriesFieldStatusField(val: FileFullRepresentationsFieldEntriesFieldStatusField): Json;
export declare function newDeserializeFileFullRepresentationsFieldEntriesFieldStatusField(val: any): FileFullRepresentationsFieldEntriesFieldStatusField;
export declare function newSerializeFileFullRepresentationsFieldEntriesField(val: FileFullRepresentationsFieldEntriesField): Json;
export declare function newDeserializeFileFullRepresentationsFieldEntriesField(val: any): FileFullRepresentationsFieldEntriesField;
export declare function newSerializeFileFullRepresentationsField(val: FileFullRepresentationsField): Json;
export declare function newDeserializeFileFullRepresentationsField(val: any): FileFullRepresentationsField;
export declare function newSerializeFileFullClassificationField(val: FileFullClassificationField): Json;
export declare function newDeserializeFileFullClassificationField(val: any): FileFullClassificationField;
export declare function newSerializeFileFullSharedLinkPermissionOptionsField(val: FileFullSharedLinkPermissionOptionsField): Json;
export declare function newDeserializeFileFullSharedLinkPermissionOptionsField(val: any): FileFullSharedLinkPermissionOptionsField;
export declare function newSerializeFileFull(val: FileFull): Json;
export declare function newDeserializeFileFull(val: any): FileFull;
export declare function newSerializeFiles(val: Files): Json;
export declare function newDeserializeFiles(val: any): Files;
export declare function newSerializeDevicePinnerTypeField(val: DevicePinnerTypeField): Json;
export declare function newDeserializeDevicePinnerTypeField(val: any): DevicePinnerTypeField;
export declare function newSerializeDevicePinner(val: DevicePinner): Json;
export declare function newDeserializeDevicePinner(val: any): DevicePinner;
export declare function newSerializeDevicePinnersOrderFieldByField(val: DevicePinnersOrderFieldByField): Json;
export declare function newDeserializeDevicePinnersOrderFieldByField(val: any): DevicePinnersOrderFieldByField;
export declare function newSerializeDevicePinnersOrderFieldDirectionField(val: DevicePinnersOrderFieldDirectionField): Json;
export declare function newDeserializeDevicePinnersOrderFieldDirectionField(val: any): DevicePinnersOrderFieldDirectionField;
export declare function newSerializeDevicePinnersOrderField(val: DevicePinnersOrderField): Json;
export declare function newDeserializeDevicePinnersOrderField(val: any): DevicePinnersOrderField;
export declare function newSerializeDevicePinners(val: DevicePinners): Json;
export declare function newDeserializeDevicePinners(val: any): DevicePinners;
export declare function newSerializeCommentItemField(val: CommentItemField): Json;
export declare function newDeserializeCommentItemField(val: any): CommentItemField;
export declare function newSerializeComment(val: Comment): Json;
export declare function newDeserializeComment(val: any): Comment;
export declare function newSerializeCommentFull(val: CommentFull): Json;
export declare function newDeserializeCommentFull(val: any): CommentFull;
export declare function newSerializeCommentsOrderFieldDirectionField(val: CommentsOrderFieldDirectionField): Json;
export declare function newDeserializeCommentsOrderFieldDirectionField(val: any): CommentsOrderFieldDirectionField;
export declare function newSerializeCommentsOrderField(val: CommentsOrderField): Json;
export declare function newDeserializeCommentsOrderField(val: any): CommentsOrderField;
export declare function newSerializeComments(val: Comments): Json;
export declare function newDeserializeComments(val: any): Comments;
export declare function newSerializeShieldInformationBarrierSegmentRestriction(val: ShieldInformationBarrierSegmentRestriction): Json;
export declare function newDeserializeShieldInformationBarrierSegmentRestriction(val: any): ShieldInformationBarrierSegmentRestriction;
export declare function newSerializeShieldInformationBarrierSegmentMemberMini(val: ShieldInformationBarrierSegmentMemberMini): Json;
export declare function newDeserializeShieldInformationBarrierSegmentMemberMini(val: any): ShieldInformationBarrierSegmentMemberMini;
export declare function newSerializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentFieldTypeField(val: ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentFieldTypeField): Json;
export declare function newDeserializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentFieldTypeField(val: any): ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentFieldTypeField;
export declare function newSerializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField(val: ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField): Json;
export declare function newDeserializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField(val: any): ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField;
export declare function newSerializeShieldInformationBarrierSegmentMember(val: ShieldInformationBarrierSegmentMember): Json;
export declare function newDeserializeShieldInformationBarrierSegmentMember(val: any): ShieldInformationBarrierSegmentMember;
export declare function newSerializeShieldInformationBarrierSegmentTypeField(val: ShieldInformationBarrierSegmentTypeField): Json;
export declare function newDeserializeShieldInformationBarrierSegmentTypeField(val: any): ShieldInformationBarrierSegmentTypeField;
export declare function newSerializeShieldInformationBarrierSegment(val: ShieldInformationBarrierSegment): Json;
export declare function newDeserializeShieldInformationBarrierSegment(val: any): ShieldInformationBarrierSegment;
export declare function newSerializeShieldInformationBarrierReportShieldInformationBarrierField(val: ShieldInformationBarrierReportShieldInformationBarrierField): Json;
export declare function newDeserializeShieldInformationBarrierReportShieldInformationBarrierField(val: any): ShieldInformationBarrierReportShieldInformationBarrierField;
export declare function newSerializeShieldInformationBarrierReportStatusField(val: ShieldInformationBarrierReportStatusField): Json;
export declare function newDeserializeShieldInformationBarrierReportStatusField(val: any): ShieldInformationBarrierReportStatusField;
export declare function newSerializeShieldInformationBarrierReportDetailsField(val: ShieldInformationBarrierReportDetailsField): Json;
export declare function newDeserializeShieldInformationBarrierReportDetailsField(val: any): ShieldInformationBarrierReportDetailsField;
export declare function newSerializeShieldInformationBarrierReport(val: ShieldInformationBarrierReport): Json;
export declare function newDeserializeShieldInformationBarrierReport(val: any): ShieldInformationBarrierReport;
export declare function newSerializeShieldInformationBarrierTypeField(val: ShieldInformationBarrierTypeField): Json;
export declare function newDeserializeShieldInformationBarrierTypeField(val: any): ShieldInformationBarrierTypeField;
export declare function newSerializeShieldInformationBarrierStatusField(val: ShieldInformationBarrierStatusField): Json;
export declare function newDeserializeShieldInformationBarrierStatusField(val: any): ShieldInformationBarrierStatusField;
export declare function newSerializeShieldInformationBarrier(val: ShieldInformationBarrier): Json;
export declare function newDeserializeShieldInformationBarrier(val: any): ShieldInformationBarrier;
export declare function newSerializeFolderLockLockedOperationsField(val: FolderLockLockedOperationsField): Json;
export declare function newDeserializeFolderLockLockedOperationsField(val: any): FolderLockLockedOperationsField;
export declare function newSerializeFolderLock(val: FolderLock): Json;
export declare function newDeserializeFolderLock(val: any): FolderLock;
export declare function newSerializeFolderLocks(val: FolderLocks): Json;
export declare function newDeserializeFolderLocks(val: any): FolderLocks;
export declare function newSerializeWatermarkWatermarkField(val: WatermarkWatermarkField): Json;
export declare function newDeserializeWatermarkWatermarkField(val: any): WatermarkWatermarkField;
export declare function newSerializeWatermark(val: Watermark): Json;
export declare function newDeserializeWatermark(val: any): Watermark;
export declare function newSerializeWebhookMiniTypeField(val: WebhookMiniTypeField): Json;
export declare function newDeserializeWebhookMiniTypeField(val: any): WebhookMiniTypeField;
export declare function newSerializeWebhookMiniTargetFieldTypeField(val: WebhookMiniTargetFieldTypeField): Json;
export declare function newDeserializeWebhookMiniTargetFieldTypeField(val: any): WebhookMiniTargetFieldTypeField;
export declare function newSerializeWebhookMiniTargetField(val: WebhookMiniTargetField): Json;
export declare function newDeserializeWebhookMiniTargetField(val: any): WebhookMiniTargetField;
export declare function newSerializeWebhookMini(val: WebhookMini): Json;
export declare function newDeserializeWebhookMini(val: any): WebhookMini;
export declare function newSerializeWebhooks(val: Webhooks): Json;
export declare function newDeserializeWebhooks(val: any): Webhooks;
export declare function newSerializeWebhookTriggersField(val: WebhookTriggersField): Json;
export declare function newDeserializeWebhookTriggersField(val: any): WebhookTriggersField;
export declare function newSerializeWebhook(val: Webhook): Json;
export declare function newDeserializeWebhook(val: any): Webhook;
export declare function newSerializeWebLinkBaseTypeField(val: WebLinkBaseTypeField): Json;
export declare function newDeserializeWebLinkBaseTypeField(val: any): WebLinkBaseTypeField;
export declare function newSerializeWebLinkBase(val: WebLinkBase): Json;
export declare function newDeserializeWebLinkBase(val: any): WebLinkBase;
export declare function newSerializeWebLinkMini(val: WebLinkMini): Json;
export declare function newDeserializeWebLinkMini(val: any): WebLinkMini;
export declare function newSerializeFileMiniOrFolderMiniOrWebLinkMini(val: FileMiniOrFolderMiniOrWebLinkMini): Json;
export declare function newDeserializeFileMiniOrFolderMiniOrWebLinkMini(val: any): FileMiniOrFolderMiniOrWebLinkMini;
export declare function newSerializeItemsOrderFieldDirectionField(val: ItemsOrderFieldDirectionField): Json;
export declare function newDeserializeItemsOrderFieldDirectionField(val: any): ItemsOrderFieldDirectionField;
export declare function newSerializeItemsOrderField(val: ItemsOrderField): Json;
export declare function newDeserializeItemsOrderField(val: any): ItemsOrderField;
export declare function newSerializeItems(val: Items): Json;
export declare function newDeserializeItems(val: any): Items;
export declare function newSerializeFolderPathCollectionField(val: FolderPathCollectionField): Json;
export declare function newDeserializeFolderPathCollectionField(val: any): FolderPathCollectionField;
export declare function newSerializeFolderSharedLinkFieldAccessField(val: FolderSharedLinkFieldAccessField): Json;
export declare function newDeserializeFolderSharedLinkFieldAccessField(val: any): FolderSharedLinkFieldAccessField;
export declare function newSerializeFolderSharedLinkFieldEffectiveAccessField(val: FolderSharedLinkFieldEffectiveAccessField): Json;
export declare function newDeserializeFolderSharedLinkFieldEffectiveAccessField(val: any): FolderSharedLinkFieldEffectiveAccessField;
export declare function newSerializeFolderSharedLinkFieldEffectivePermissionField(val: FolderSharedLinkFieldEffectivePermissionField): Json;
export declare function newDeserializeFolderSharedLinkFieldEffectivePermissionField(val: any): FolderSharedLinkFieldEffectivePermissionField;
export declare function newSerializeFolderSharedLinkFieldPermissionsField(val: FolderSharedLinkFieldPermissionsField): Json;
export declare function newDeserializeFolderSharedLinkFieldPermissionsField(val: any): FolderSharedLinkFieldPermissionsField;
export declare function newSerializeFolderSharedLinkField(val: FolderSharedLinkField): Json;
export declare function newDeserializeFolderSharedLinkField(val: any): FolderSharedLinkField;
export declare function newSerializeFolderFolderUploadEmailFieldAccessField(val: FolderFolderUploadEmailFieldAccessField): Json;
export declare function newDeserializeFolderFolderUploadEmailFieldAccessField(val: any): FolderFolderUploadEmailFieldAccessField;
export declare function newSerializeFolderFolderUploadEmailField(val: FolderFolderUploadEmailField): Json;
export declare function newDeserializeFolderFolderUploadEmailField(val: any): FolderFolderUploadEmailField;
export declare function newSerializeFolderItemStatusField(val: FolderItemStatusField): Json;
export declare function newDeserializeFolderItemStatusField(val: any): FolderItemStatusField;
export declare function newSerializeFolder(val: Folder): Json;
export declare function newDeserializeFolder(val: any): Folder;
export declare function newSerializeEventSourceOrFileOrFolderOrUser(val: EventSourceOrFileOrFolderOrUser): Json;
export declare function newDeserializeEventSourceOrFileOrFolderOrUser(val: any): EventSourceOrFileOrFolderOrUser;
export declare function newSerializeEventEventTypeField(val: EventEventTypeField): Json;
export declare function newDeserializeEventEventTypeField(val: any): EventEventTypeField;
export declare function newSerializeEventAdditionalDetailsField(val: EventAdditionalDetailsField): Json;
export declare function newDeserializeEventAdditionalDetailsField(val: any): EventAdditionalDetailsField;
export declare function newSerializeEvent(val: Event): Json;
export declare function newDeserializeEvent(val: any): Event;
export declare function newSerializeEvents(val: Events): Json;
export declare function newDeserializeEvents(val: any): Events;
export declare function newSerializeFileOrFolder(val: FileOrFolder): Json;
export declare function newDeserializeFileOrFolder(val: any): FileOrFolder;
export declare function newSerializeMetadataQueryResults(val: MetadataQueryResults): Json;
export declare function newDeserializeMetadataQueryResults(val: any): MetadataQueryResults;
export declare function newSerializeWebhookInvocationTypeField(val: WebhookInvocationTypeField): Json;
export declare function newDeserializeWebhookInvocationTypeField(val: any): WebhookInvocationTypeField;
export declare function newSerializeWebhookInvocationTriggerField(val: WebhookInvocationTriggerField): Json;
export declare function newDeserializeWebhookInvocationTriggerField(val: any): WebhookInvocationTriggerField;
export declare function newSerializeWebhookInvocation(val: WebhookInvocation): Json;
export declare function newDeserializeWebhookInvocation(val: any): WebhookInvocation;
export declare function newSerializeSkillInvocationTypeField(val: SkillInvocationTypeField): Json;
export declare function newDeserializeSkillInvocationTypeField(val: any): SkillInvocationTypeField;
export declare function newSerializeSkillInvocationSkillFieldTypeField(val: SkillInvocationSkillFieldTypeField): Json;
export declare function newDeserializeSkillInvocationSkillFieldTypeField(val: any): SkillInvocationSkillFieldTypeField;
export declare function newSerializeSkillInvocationSkillField(val: SkillInvocationSkillField): Json;
export declare function newDeserializeSkillInvocationSkillField(val: any): SkillInvocationSkillField;
export declare function newSerializeSkillInvocationTokenFieldReadFieldTokenTypeField(val: SkillInvocationTokenFieldReadFieldTokenTypeField): Json;
export declare function newDeserializeSkillInvocationTokenFieldReadFieldTokenTypeField(val: any): SkillInvocationTokenFieldReadFieldTokenTypeField;
export declare function newSerializeSkillInvocationTokenFieldReadField(val: SkillInvocationTokenFieldReadField): Json;
export declare function newDeserializeSkillInvocationTokenFieldReadField(val: any): SkillInvocationTokenFieldReadField;
export declare function newSerializeSkillInvocationTokenFieldWriteFieldTokenTypeField(val: SkillInvocationTokenFieldWriteFieldTokenTypeField): Json;
export declare function newDeserializeSkillInvocationTokenFieldWriteFieldTokenTypeField(val: any): SkillInvocationTokenFieldWriteFieldTokenTypeField;
export declare function newSerializeSkillInvocationTokenFieldWriteField(val: SkillInvocationTokenFieldWriteField): Json;
export declare function newDeserializeSkillInvocationTokenFieldWriteField(val: any): SkillInvocationTokenFieldWriteField;
export declare function newSerializeSkillInvocationTokenField(val: SkillInvocationTokenField): Json;
export declare function newDeserializeSkillInvocationTokenField(val: any): SkillInvocationTokenField;
export declare function newSerializeSkillInvocationStatusFieldStateField(val: SkillInvocationStatusFieldStateField): Json;
export declare function newDeserializeSkillInvocationStatusFieldStateField(val: any): SkillInvocationStatusFieldStateField;
export declare function newSerializeSkillInvocationStatusField(val: SkillInvocationStatusField): Json;
export declare function newDeserializeSkillInvocationStatusField(val: any): SkillInvocationStatusField;
export declare function newSerializeSkillInvocationEnterpriseFieldTypeField(val: SkillInvocationEnterpriseFieldTypeField): Json;
export declare function newDeserializeSkillInvocationEnterpriseFieldTypeField(val: any): SkillInvocationEnterpriseFieldTypeField;
export declare function newSerializeSkillInvocationEnterpriseField(val: SkillInvocationEnterpriseField): Json;
export declare function newDeserializeSkillInvocationEnterpriseField(val: any): SkillInvocationEnterpriseField;
export declare function newSerializeSkillInvocation(val: SkillInvocation): Json;
export declare function newDeserializeSkillInvocation(val: any): SkillInvocation;
export declare function newSerializeFolderFullSyncStateField(val: FolderFullSyncStateField): Json;
export declare function newDeserializeFolderFullSyncStateField(val: any): FolderFullSyncStateField;
export declare function newSerializeFolderFullPermissionsField(val: FolderFullPermissionsField): Json;
export declare function newDeserializeFolderFullPermissionsField(val: any): FolderFullPermissionsField;
export declare function newSerializeFolderFullMetadataField(val: FolderFullMetadataField): Json;
export declare function newDeserializeFolderFullMetadataField(val: any): FolderFullMetadataField;
export declare function newSerializeFolderFullAllowedSharedLinkAccessLevelsField(val: FolderFullAllowedSharedLinkAccessLevelsField): Json;
export declare function newDeserializeFolderFullAllowedSharedLinkAccessLevelsField(val: any): FolderFullAllowedSharedLinkAccessLevelsField;
export declare function newSerializeFolderFullAllowedInviteeRolesField(val: FolderFullAllowedInviteeRolesField): Json;
export declare function newDeserializeFolderFullAllowedInviteeRolesField(val: any): FolderFullAllowedInviteeRolesField;
export declare function newSerializeFolderFullWatermarkInfoField(val: FolderFullWatermarkInfoField): Json;
export declare function newDeserializeFolderFullWatermarkInfoField(val: any): FolderFullWatermarkInfoField;
export declare function newSerializeFolderFullClassificationField(val: FolderFullClassificationField): Json;
export declare function newDeserializeFolderFullClassificationField(val: any): FolderFullClassificationField;
export declare function newSerializeFolderFull(val: FolderFull): Json;
export declare function newDeserializeFolderFull(val: any): FolderFull;
export declare function newSerializeWebLinkPathCollectionField(val: WebLinkPathCollectionField): Json;
export declare function newDeserializeWebLinkPathCollectionField(val: any): WebLinkPathCollectionField;
export declare function newSerializeWebLinkSharedLinkFieldAccessField(val: WebLinkSharedLinkFieldAccessField): Json;
export declare function newDeserializeWebLinkSharedLinkFieldAccessField(val: any): WebLinkSharedLinkFieldAccessField;
export declare function newSerializeWebLinkSharedLinkFieldEffectiveAccessField(val: WebLinkSharedLinkFieldEffectiveAccessField): Json;
export declare function newDeserializeWebLinkSharedLinkFieldEffectiveAccessField(val: any): WebLinkSharedLinkFieldEffectiveAccessField;
export declare function newSerializeWebLinkSharedLinkFieldEffectivePermissionField(val: WebLinkSharedLinkFieldEffectivePermissionField): Json;
export declare function newDeserializeWebLinkSharedLinkFieldEffectivePermissionField(val: any): WebLinkSharedLinkFieldEffectivePermissionField;
export declare function newSerializeWebLinkSharedLinkFieldPermissionsField(val: WebLinkSharedLinkFieldPermissionsField): Json;
export declare function newDeserializeWebLinkSharedLinkFieldPermissionsField(val: any): WebLinkSharedLinkFieldPermissionsField;
export declare function newSerializeWebLinkSharedLinkField(val: WebLinkSharedLinkField): Json;
export declare function newDeserializeWebLinkSharedLinkField(val: any): WebLinkSharedLinkField;
export declare function newSerializeWebLinkItemStatusField(val: WebLinkItemStatusField): Json;
export declare function newDeserializeWebLinkItemStatusField(val: any): WebLinkItemStatusField;
export declare function newSerializeWebLink(val: WebLink): Json;
export declare function newDeserializeWebLink(val: any): WebLink;
export declare function newSerializeFileOrFolderOrWebLink(val: FileOrFolderOrWebLink): Json;
export declare function newDeserializeFileOrFolderOrWebLink(val: any): FileOrFolderOrWebLink;
export declare function newSerializeSearchResultWithSharedLink(val: SearchResultWithSharedLink): Json;
export declare function newDeserializeSearchResultWithSharedLink(val: any): SearchResultWithSharedLink;
export declare function newSerializeSearchResultsWithSharedLinks(val: SearchResultsWithSharedLinks): Json;
export declare function newDeserializeSearchResultsWithSharedLinks(val: any): SearchResultsWithSharedLinks;
export declare function newSerializeSearchResults(val: SearchResults): Json;
export declare function newDeserializeSearchResults(val: any): SearchResults;
export declare function newSerializeSearchResultsOrSearchResultsWithSharedLinks(val: SearchResultsOrSearchResultsWithSharedLinks): Json;
export declare function newDeserializeSearchResultsOrSearchResultsWithSharedLinks(val: any): SearchResultsOrSearchResultsWithSharedLinks;
export declare function newSerializeRecentItemInteractionTypeField(val: RecentItemInteractionTypeField): Json;
export declare function newDeserializeRecentItemInteractionTypeField(val: any): RecentItemInteractionTypeField;
export declare function newSerializeRecentItem(val: RecentItem): Json;
export declare function newDeserializeRecentItem(val: any): RecentItem;
export declare function newSerializeRecentItems(val: RecentItems): Json;
export declare function newDeserializeRecentItems(val: any): RecentItems;
export declare function newSerializeLegalHoldPolicyAssignment(val: LegalHoldPolicyAssignment): Json;
export declare function newDeserializeLegalHoldPolicyAssignment(val: any): LegalHoldPolicyAssignment;
export declare function newSerializeFileVersionLegalHoldTypeField(val: FileVersionLegalHoldTypeField): Json;
export declare function newDeserializeFileVersionLegalHoldTypeField(val: any): FileVersionLegalHoldTypeField;
export declare function newSerializeFileVersionLegalHold(val: FileVersionLegalHold): Json;
export declare function newDeserializeFileVersionLegalHold(val: any): FileVersionLegalHold;
export declare function newSerializeFileVersionLegalHolds(val: FileVersionLegalHolds): Json;
export declare function newDeserializeFileVersionLegalHolds(val: any): FileVersionLegalHolds;
export declare function newSerializeCollaborationTypeField(val: CollaborationTypeField): Json;
export declare function newDeserializeCollaborationTypeField(val: any): CollaborationTypeField;
export declare function newSerializeCollaborationRoleField(val: CollaborationRoleField): Json;
export declare function newDeserializeCollaborationRoleField(val: any): CollaborationRoleField;
export declare function newSerializeCollaborationStatusField(val: CollaborationStatusField): Json;
export declare function newDeserializeCollaborationStatusField(val: any): CollaborationStatusField;
export declare function newSerializeCollaborationAcceptanceRequirementsStatusFieldTermsOfServiceRequirementField(val: CollaborationAcceptanceRequirementsStatusFieldTermsOfServiceRequirementField): Json;
export declare function newDeserializeCollaborationAcceptanceRequirementsStatusFieldTermsOfServiceRequirementField(val: any): CollaborationAcceptanceRequirementsStatusFieldTermsOfServiceRequirementField;
export declare function newSerializeCollaborationAcceptanceRequirementsStatusFieldStrongPasswordRequirementField(val: CollaborationAcceptanceRequirementsStatusFieldStrongPasswordRequirementField): Json;
export declare function newDeserializeCollaborationAcceptanceRequirementsStatusFieldStrongPasswordRequirementField(val: any): CollaborationAcceptanceRequirementsStatusFieldStrongPasswordRequirementField;
export declare function newSerializeCollaborationAcceptanceRequirementsStatusFieldTwoFactorAuthenticationRequirementField(val: CollaborationAcceptanceRequirementsStatusFieldTwoFactorAuthenticationRequirementField): Json;
export declare function newDeserializeCollaborationAcceptanceRequirementsStatusFieldTwoFactorAuthenticationRequirementField(val: any): CollaborationAcceptanceRequirementsStatusFieldTwoFactorAuthenticationRequirementField;
export declare function newSerializeCollaborationAcceptanceRequirementsStatusField(val: CollaborationAcceptanceRequirementsStatusField): Json;
export declare function newDeserializeCollaborationAcceptanceRequirementsStatusField(val: any): CollaborationAcceptanceRequirementsStatusField;
export declare function newSerializeCollaboration(val: Collaboration): Json;
export declare function newDeserializeCollaboration(val: any): Collaboration;
export declare function newSerializeCollaborationsOrderFieldDirectionField(val: CollaborationsOrderFieldDirectionField): Json;
export declare function newDeserializeCollaborationsOrderFieldDirectionField(val: any): CollaborationsOrderFieldDirectionField;
export declare function newSerializeCollaborationsOrderField(val: CollaborationsOrderField): Json;
export declare function newDeserializeCollaborationsOrderField(val: any): CollaborationsOrderField;
export declare function newSerializeCollaborations(val: Collaborations): Json;
export declare function newDeserializeCollaborations(val: any): Collaborations;
export declare function newSerializeWorkflowMiniTypeField(val: WorkflowMiniTypeField): Json;
export declare function newDeserializeWorkflowMiniTypeField(val: any): WorkflowMiniTypeField;
export declare function newSerializeWorkflowMini(val: WorkflowMini): Json;
export declare function newDeserializeWorkflowMini(val: any): WorkflowMini;
export declare function newSerializeWorkflowFlowsFieldTypeField(val: WorkflowFlowsFieldTypeField): Json;
export declare function newDeserializeWorkflowFlowsFieldTypeField(val: any): WorkflowFlowsFieldTypeField;
export declare function newSerializeWorkflowFlowsFieldTriggerFieldTypeField(val: WorkflowFlowsFieldTriggerFieldTypeField): Json;
export declare function newDeserializeWorkflowFlowsFieldTriggerFieldTypeField(val: any): WorkflowFlowsFieldTriggerFieldTypeField;
export declare function newSerializeWorkflowFlowsFieldTriggerFieldTriggerTypeField(val: WorkflowFlowsFieldTriggerFieldTriggerTypeField): Json;
export declare function newDeserializeWorkflowFlowsFieldTriggerFieldTriggerTypeField(val: any): WorkflowFlowsFieldTriggerFieldTriggerTypeField;
export declare function newSerializeWorkflowFlowsFieldTriggerFieldScopeFieldTypeField(val: WorkflowFlowsFieldTriggerFieldScopeFieldTypeField): Json;
export declare function newDeserializeWorkflowFlowsFieldTriggerFieldScopeFieldTypeField(val: any): WorkflowFlowsFieldTriggerFieldScopeFieldTypeField;
export declare function newSerializeWorkflowFlowsFieldTriggerFieldScopeFieldObjectFieldTypeField(val: WorkflowFlowsFieldTriggerFieldScopeFieldObjectFieldTypeField): Json;
export declare function newDeserializeWorkflowFlowsFieldTriggerFieldScopeFieldObjectFieldTypeField(val: any): WorkflowFlowsFieldTriggerFieldScopeFieldObjectFieldTypeField;
export declare function newSerializeWorkflowFlowsFieldTriggerFieldScopeFieldObjectField(val: WorkflowFlowsFieldTriggerFieldScopeFieldObjectField): Json;
export declare function newDeserializeWorkflowFlowsFieldTriggerFieldScopeFieldObjectField(val: any): WorkflowFlowsFieldTriggerFieldScopeFieldObjectField;
export declare function newSerializeWorkflowFlowsFieldTriggerFieldScopeField(val: WorkflowFlowsFieldTriggerFieldScopeField): Json;
export declare function newDeserializeWorkflowFlowsFieldTriggerFieldScopeField(val: any): WorkflowFlowsFieldTriggerFieldScopeField;
export declare function newSerializeWorkflowFlowsFieldTriggerField(val: WorkflowFlowsFieldTriggerField): Json;
export declare function newDeserializeWorkflowFlowsFieldTriggerField(val: any): WorkflowFlowsFieldTriggerField;
export declare function newSerializeWorkflowFlowsFieldOutcomesFieldTypeField(val: WorkflowFlowsFieldOutcomesFieldTypeField): Json;
export declare function newDeserializeWorkflowFlowsFieldOutcomesFieldTypeField(val: any): WorkflowFlowsFieldOutcomesFieldTypeField;
export declare function newSerializeWorkflowFlowsFieldOutcomesFieldActionTypeField(val: WorkflowFlowsFieldOutcomesFieldActionTypeField): Json;
export declare function newDeserializeWorkflowFlowsFieldOutcomesFieldActionTypeField(val: any): WorkflowFlowsFieldOutcomesFieldActionTypeField;
export declare function newSerializeWorkflowFlowsFieldOutcomesFieldIfRejectedFieldTypeField(val: WorkflowFlowsFieldOutcomesFieldIfRejectedFieldTypeField): Json;
export declare function newDeserializeWorkflowFlowsFieldOutcomesFieldIfRejectedFieldTypeField(val: any): WorkflowFlowsFieldOutcomesFieldIfRejectedFieldTypeField;
export declare function newSerializeWorkflowFlowsFieldOutcomesFieldIfRejectedFieldActionTypeField(val: WorkflowFlowsFieldOutcomesFieldIfRejectedFieldActionTypeField): Json;
export declare function newDeserializeWorkflowFlowsFieldOutcomesFieldIfRejectedFieldActionTypeField(val: any): WorkflowFlowsFieldOutcomesFieldIfRejectedFieldActionTypeField;
export declare function newSerializeWorkflowFlowsFieldOutcomesFieldIfRejectedField(val: WorkflowFlowsFieldOutcomesFieldIfRejectedField): Json;
export declare function newDeserializeWorkflowFlowsFieldOutcomesFieldIfRejectedField(val: any): WorkflowFlowsFieldOutcomesFieldIfRejectedField;
export declare function newSerializeWorkflowFlowsFieldOutcomesField(val: WorkflowFlowsFieldOutcomesField): Json;
export declare function newDeserializeWorkflowFlowsFieldOutcomesField(val: any): WorkflowFlowsFieldOutcomesField;
export declare function newSerializeWorkflowFlowsField(val: WorkflowFlowsField): Json;
export declare function newDeserializeWorkflowFlowsField(val: any): WorkflowFlowsField;
export declare function newSerializeWorkflow(val: Workflow): Json;
export declare function newDeserializeWorkflow(val: any): Workflow;
export declare function newSerializeWorkflows(val: Workflows): Json;
export declare function newDeserializeWorkflows(val: any): Workflows;
export declare function newSerializeWorkflowFull(val: WorkflowFull): Json;
export declare function newDeserializeWorkflowFull(val: any): WorkflowFull;
export declare function newSerializeZipDownloadNameConflictsFieldTypeField(val: ZipDownloadNameConflictsFieldTypeField): Json;
export declare function newDeserializeZipDownloadNameConflictsFieldTypeField(val: any): ZipDownloadNameConflictsFieldTypeField;
export declare function newSerializeZipDownloadNameConflictsField(val: ZipDownloadNameConflictsField): Json;
export declare function newDeserializeZipDownloadNameConflictsField(val: any): ZipDownloadNameConflictsField;
export declare function newSerializeZipDownload(val: ZipDownload): Json;
export declare function newDeserializeZipDownload(val: any): ZipDownload;
export declare function newSerializeZipDownloadStatusStateField(val: ZipDownloadStatusStateField): Json;
export declare function newDeserializeZipDownloadStatusStateField(val: any): ZipDownloadStatusStateField;
export declare function newSerializeZipDownloadStatus(val: ZipDownloadStatus): Json;
export declare function newDeserializeZipDownloadStatus(val: any): ZipDownloadStatus;
export declare function newSerializeKeywordSkillCardTypeField(val: KeywordSkillCardTypeField): Json;
export declare function newDeserializeKeywordSkillCardTypeField(val: any): KeywordSkillCardTypeField;
export declare function newSerializeKeywordSkillCardSkillCardTypeField(val: KeywordSkillCardSkillCardTypeField): Json;
export declare function newDeserializeKeywordSkillCardSkillCardTypeField(val: any): KeywordSkillCardSkillCardTypeField;
export declare function newSerializeKeywordSkillCardSkillCardTitleField(val: KeywordSkillCardSkillCardTitleField): Json;
export declare function newDeserializeKeywordSkillCardSkillCardTitleField(val: any): KeywordSkillCardSkillCardTitleField;
export declare function newSerializeKeywordSkillCardSkillFieldTypeField(val: KeywordSkillCardSkillFieldTypeField): Json;
export declare function newDeserializeKeywordSkillCardSkillFieldTypeField(val: any): KeywordSkillCardSkillFieldTypeField;
export declare function newSerializeKeywordSkillCardSkillField(val: KeywordSkillCardSkillField): Json;
export declare function newDeserializeKeywordSkillCardSkillField(val: any): KeywordSkillCardSkillField;
export declare function newSerializeKeywordSkillCardInvocationFieldTypeField(val: KeywordSkillCardInvocationFieldTypeField): Json;
export declare function newDeserializeKeywordSkillCardInvocationFieldTypeField(val: any): KeywordSkillCardInvocationFieldTypeField;
export declare function newSerializeKeywordSkillCardInvocationField(val: KeywordSkillCardInvocationField): Json;
export declare function newDeserializeKeywordSkillCardInvocationField(val: any): KeywordSkillCardInvocationField;
export declare function newSerializeKeywordSkillCardEntriesField(val: KeywordSkillCardEntriesField): Json;
export declare function newDeserializeKeywordSkillCardEntriesField(val: any): KeywordSkillCardEntriesField;
export declare function newSerializeKeywordSkillCard(val: KeywordSkillCard): Json;
export declare function newDeserializeKeywordSkillCard(val: any): KeywordSkillCard;
export declare function newSerializeIntegrationMappingSlackOptions(val: IntegrationMappingSlackOptions): Json;
export declare function newDeserializeIntegrationMappingSlackOptions(val: any): IntegrationMappingSlackOptions;
export declare function newSerializeIntegrationMappingPartnerItemSlackTypeField(val: IntegrationMappingPartnerItemSlackTypeField): Json;
export declare function newDeserializeIntegrationMappingPartnerItemSlackTypeField(val: any): IntegrationMappingPartnerItemSlackTypeField;
export declare function newSerializeIntegrationMappingPartnerItemSlack(val: IntegrationMappingPartnerItemSlack): Json;
export declare function newDeserializeIntegrationMappingPartnerItemSlack(val: any): IntegrationMappingPartnerItemSlack;
export declare function newSerializeIntegrationMappingTypeField(val: IntegrationMappingTypeField): Json;
export declare function newDeserializeIntegrationMappingTypeField(val: any): IntegrationMappingTypeField;
export declare function newSerializeIntegrationMappingBoxItemField(val: IntegrationMappingBoxItemField): Json;
export declare function newDeserializeIntegrationMappingBoxItemField(val: any): IntegrationMappingBoxItemField;
export declare function newSerializeIntegrationMappingOptionsField(val: IntegrationMappingOptionsField): Json;
export declare function newDeserializeIntegrationMappingOptionsField(val: any): IntegrationMappingOptionsField;
export declare function newSerializeIntegrationMappingCreatedByField(val: IntegrationMappingCreatedByField): Json;
export declare function newDeserializeIntegrationMappingCreatedByField(val: any): IntegrationMappingCreatedByField;
export declare function newSerializeIntegrationMappingModifiedByField(val: IntegrationMappingModifiedByField): Json;
export declare function newDeserializeIntegrationMappingModifiedByField(val: any): IntegrationMappingModifiedByField;
export declare function newSerializeIntegrationMapping(val: IntegrationMapping): Json;
export declare function newDeserializeIntegrationMapping(val: any): IntegrationMapping;
export declare function newSerializeIntegrationMappings(val: IntegrationMappings): Json;
export declare function newDeserializeIntegrationMappings(val: any): IntegrationMappings;
export declare function newSerializeIntegrationMappingBoxItemSlackTypeField(val: IntegrationMappingBoxItemSlackTypeField): Json;
export declare function newDeserializeIntegrationMappingBoxItemSlackTypeField(val: any): IntegrationMappingBoxItemSlackTypeField;
export declare function newSerializeIntegrationMappingBoxItemSlack(val: IntegrationMappingBoxItemSlack): Json;
export declare function newDeserializeIntegrationMappingBoxItemSlack(val: any): IntegrationMappingBoxItemSlack;
export declare function newSerializeTimelineSkillCardTypeField(val: TimelineSkillCardTypeField): Json;
export declare function newDeserializeTimelineSkillCardTypeField(val: any): TimelineSkillCardTypeField;
export declare function newSerializeTimelineSkillCardSkillCardTypeField(val: TimelineSkillCardSkillCardTypeField): Json;
export declare function newDeserializeTimelineSkillCardSkillCardTypeField(val: any): TimelineSkillCardSkillCardTypeField;
export declare function newSerializeTimelineSkillCardSkillCardTitleField(val: TimelineSkillCardSkillCardTitleField): Json;
export declare function newDeserializeTimelineSkillCardSkillCardTitleField(val: any): TimelineSkillCardSkillCardTitleField;
export declare function newSerializeTimelineSkillCardSkillFieldTypeField(val: TimelineSkillCardSkillFieldTypeField): Json;
export declare function newDeserializeTimelineSkillCardSkillFieldTypeField(val: any): TimelineSkillCardSkillFieldTypeField;
export declare function newSerializeTimelineSkillCardSkillField(val: TimelineSkillCardSkillField): Json;
export declare function newDeserializeTimelineSkillCardSkillField(val: any): TimelineSkillCardSkillField;
export declare function newSerializeTimelineSkillCardInvocationFieldTypeField(val: TimelineSkillCardInvocationFieldTypeField): Json;
export declare function newDeserializeTimelineSkillCardInvocationFieldTypeField(val: any): TimelineSkillCardInvocationFieldTypeField;
export declare function newSerializeTimelineSkillCardInvocationField(val: TimelineSkillCardInvocationField): Json;
export declare function newDeserializeTimelineSkillCardInvocationField(val: any): TimelineSkillCardInvocationField;
export declare function newSerializeTimelineSkillCardEntriesFieldAppearsField(val: TimelineSkillCardEntriesFieldAppearsField): Json;
export declare function newDeserializeTimelineSkillCardEntriesFieldAppearsField(val: any): TimelineSkillCardEntriesFieldAppearsField;
export declare function newSerializeTimelineSkillCardEntriesField(val: TimelineSkillCardEntriesField): Json;
export declare function newDeserializeTimelineSkillCardEntriesField(val: any): TimelineSkillCardEntriesField;
export declare function newSerializeTimelineSkillCard(val: TimelineSkillCard): Json;
export declare function newDeserializeTimelineSkillCard(val: any): TimelineSkillCard;
export declare function newSerializeTranscriptSkillCardTypeField(val: TranscriptSkillCardTypeField): Json;
export declare function newDeserializeTranscriptSkillCardTypeField(val: any): TranscriptSkillCardTypeField;
export declare function newSerializeTranscriptSkillCardSkillCardTypeField(val: TranscriptSkillCardSkillCardTypeField): Json;
export declare function newDeserializeTranscriptSkillCardSkillCardTypeField(val: any): TranscriptSkillCardSkillCardTypeField;
export declare function newSerializeTranscriptSkillCardSkillCardTitleField(val: TranscriptSkillCardSkillCardTitleField): Json;
export declare function newDeserializeTranscriptSkillCardSkillCardTitleField(val: any): TranscriptSkillCardSkillCardTitleField;
export declare function newSerializeTranscriptSkillCardSkillFieldTypeField(val: TranscriptSkillCardSkillFieldTypeField): Json;
export declare function newDeserializeTranscriptSkillCardSkillFieldTypeField(val: any): TranscriptSkillCardSkillFieldTypeField;
export declare function newSerializeTranscriptSkillCardSkillField(val: TranscriptSkillCardSkillField): Json;
export declare function newDeserializeTranscriptSkillCardSkillField(val: any): TranscriptSkillCardSkillField;
export declare function newSerializeTranscriptSkillCardInvocationFieldTypeField(val: TranscriptSkillCardInvocationFieldTypeField): Json;
export declare function newDeserializeTranscriptSkillCardInvocationFieldTypeField(val: any): TranscriptSkillCardInvocationFieldTypeField;
export declare function newSerializeTranscriptSkillCardInvocationField(val: TranscriptSkillCardInvocationField): Json;
export declare function newDeserializeTranscriptSkillCardInvocationField(val: any): TranscriptSkillCardInvocationField;
export declare function newSerializeTranscriptSkillCardEntriesFieldAppearsField(val: TranscriptSkillCardEntriesFieldAppearsField): Json;
export declare function newDeserializeTranscriptSkillCardEntriesFieldAppearsField(val: any): TranscriptSkillCardEntriesFieldAppearsField;
export declare function newSerializeTranscriptSkillCardEntriesField(val: TranscriptSkillCardEntriesField): Json;
export declare function newDeserializeTranscriptSkillCardEntriesField(val: any): TranscriptSkillCardEntriesField;
export declare function newSerializeTranscriptSkillCard(val: TranscriptSkillCard): Json;
export declare function newDeserializeTranscriptSkillCard(val: any): TranscriptSkillCard;
export declare function newSerializeStatusSkillCardTypeField(val: StatusSkillCardTypeField): Json;
export declare function newDeserializeStatusSkillCardTypeField(val: any): StatusSkillCardTypeField;
export declare function newSerializeStatusSkillCardSkillCardTypeField(val: StatusSkillCardSkillCardTypeField): Json;
export declare function newDeserializeStatusSkillCardSkillCardTypeField(val: any): StatusSkillCardSkillCardTypeField;
export declare function newSerializeStatusSkillCardSkillCardTitleField(val: StatusSkillCardSkillCardTitleField): Json;
export declare function newDeserializeStatusSkillCardSkillCardTitleField(val: any): StatusSkillCardSkillCardTitleField;
export declare function newSerializeStatusSkillCardStatusFieldCodeField(val: StatusSkillCardStatusFieldCodeField): Json;
export declare function newDeserializeStatusSkillCardStatusFieldCodeField(val: any): StatusSkillCardStatusFieldCodeField;
export declare function newSerializeStatusSkillCardStatusField(val: StatusSkillCardStatusField): Json;
export declare function newDeserializeStatusSkillCardStatusField(val: any): StatusSkillCardStatusField;
export declare function newSerializeStatusSkillCardSkillFieldTypeField(val: StatusSkillCardSkillFieldTypeField): Json;
export declare function newDeserializeStatusSkillCardSkillFieldTypeField(val: any): StatusSkillCardSkillFieldTypeField;
export declare function newSerializeStatusSkillCardSkillField(val: StatusSkillCardSkillField): Json;
export declare function newDeserializeStatusSkillCardSkillField(val: any): StatusSkillCardSkillField;
export declare function newSerializeStatusSkillCardInvocationFieldTypeField(val: StatusSkillCardInvocationFieldTypeField): Json;
export declare function newDeserializeStatusSkillCardInvocationFieldTypeField(val: any): StatusSkillCardInvocationFieldTypeField;
export declare function newSerializeStatusSkillCardInvocationField(val: StatusSkillCardInvocationField): Json;
export declare function newDeserializeStatusSkillCardInvocationField(val: any): StatusSkillCardInvocationField;
export declare function newSerializeStatusSkillCard(val: StatusSkillCard): Json;
export declare function newDeserializeStatusSkillCard(val: any): StatusSkillCard;
export declare function newSerializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard(val: KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard): Json;
export declare function newDeserializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard(val: any): KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard;
export declare function newSerializeSkillCardsMetadata(val: SkillCardsMetadata): Json;
export declare function newDeserializeSkillCardsMetadata(val: any): SkillCardsMetadata;
export declare function newSerializeSignRequestCreateSignerRoleField(val: SignRequestCreateSignerRoleField): Json;
export declare function newDeserializeSignRequestCreateSignerRoleField(val: any): SignRequestCreateSignerRoleField;
export declare function newSerializeSignRequestCreateSigner(val: SignRequestCreateSigner): Json;
export declare function newDeserializeSignRequestCreateSigner(val: any): SignRequestCreateSigner;
export declare function newSerializeSignRequestPrefillTag(val: SignRequestPrefillTag): Json;
export declare function newDeserializeSignRequestPrefillTag(val: any): SignRequestPrefillTag;
export declare function newSerializeSignRequestSignerInputTypeField(val: SignRequestSignerInputTypeField): Json;
export declare function newDeserializeSignRequestSignerInputTypeField(val: any): SignRequestSignerInputTypeField;
export declare function newSerializeSignRequestSignerInputContentTypeField(val: SignRequestSignerInputContentTypeField): Json;
export declare function newDeserializeSignRequestSignerInputContentTypeField(val: any): SignRequestSignerInputContentTypeField;
export declare function newSerializeSignRequestSignerInput(val: SignRequestSignerInput): Json;
export declare function newDeserializeSignRequestSignerInput(val: any): SignRequestSignerInput;
export declare function newSerializeSignRequestSignerSignerDecisionFieldTypeField(val: SignRequestSignerSignerDecisionFieldTypeField): Json;
export declare function newDeserializeSignRequestSignerSignerDecisionFieldTypeField(val: any): SignRequestSignerSignerDecisionFieldTypeField;
export declare function newSerializeSignRequestSignerSignerDecisionField(val: SignRequestSignerSignerDecisionField): Json;
export declare function newDeserializeSignRequestSignerSignerDecisionField(val: any): SignRequestSignerSignerDecisionField;
export declare function newSerializeSignRequestSigner(val: SignRequestSigner): Json;
export declare function newDeserializeSignRequestSigner(val: any): SignRequestSigner;
export declare function newSerializeSignRequestBase(val: SignRequestBase): Json;
export declare function newDeserializeSignRequestBase(val: any): SignRequestBase;
export declare function newSerializeSignRequestTypeField(val: SignRequestTypeField): Json;
export declare function newDeserializeSignRequestTypeField(val: any): SignRequestTypeField;
export declare function newSerializeSignRequestStatusField(val: SignRequestStatusField): Json;
export declare function newDeserializeSignRequestStatusField(val: any): SignRequestStatusField;
export declare function newSerializeSignRequestSignFilesField(val: SignRequestSignFilesField): Json;
export declare function newDeserializeSignRequestSignFilesField(val: any): SignRequestSignFilesField;
export declare function newSerializeSignRequest(val: SignRequest): Json;
export declare function newDeserializeSignRequest(val: any): SignRequest;
export declare function newSerializeSignRequests(val: SignRequests): Json;
export declare function newDeserializeSignRequests(val: any): SignRequests;
export declare function newSerializeSignRequestCreateRequest(val: SignRequestCreateRequest): Json;
export declare function newDeserializeSignRequestCreateRequest(val: any): SignRequestCreateRequest;
export declare function newSerializeTemplateSignerInputTypeField(val: TemplateSignerInputTypeField): Json;
export declare function newDeserializeTemplateSignerInputTypeField(val: any): TemplateSignerInputTypeField;
export declare function newSerializeTemplateSignerInputContentTypeField(val: TemplateSignerInputContentTypeField): Json;
export declare function newDeserializeTemplateSignerInputContentTypeField(val: any): TemplateSignerInputContentTypeField;
export declare function newSerializeTemplateSignerInputCoordinatesField(val: TemplateSignerInputCoordinatesField): Json;
export declare function newDeserializeTemplateSignerInputCoordinatesField(val: any): TemplateSignerInputCoordinatesField;
export declare function newSerializeTemplateSignerInputDimensionsField(val: TemplateSignerInputDimensionsField): Json;
export declare function newDeserializeTemplateSignerInputDimensionsField(val: any): TemplateSignerInputDimensionsField;
export declare function newSerializeTemplateSignerInput(val: TemplateSignerInput): Json;
export declare function newDeserializeTemplateSignerInput(val: any): TemplateSignerInput;
export declare function newSerializeTemplateSignerRoleField(val: TemplateSignerRoleField): Json;
export declare function newDeserializeTemplateSignerRoleField(val: any): TemplateSignerRoleField;
export declare function newSerializeTemplateSigner(val: TemplateSigner): Json;
export declare function newDeserializeTemplateSigner(val: any): TemplateSigner;
export declare function newSerializeSignTemplateAdditionalInfoFieldNonEditableField(val: SignTemplateAdditionalInfoFieldNonEditableField): Json;
export declare function newDeserializeSignTemplateAdditionalInfoFieldNonEditableField(val: any): SignTemplateAdditionalInfoFieldNonEditableField;
export declare function newSerializeSignTemplateAdditionalInfoFieldRequiredFieldSignersField(val: SignTemplateAdditionalInfoFieldRequiredFieldSignersField): Json;
export declare function newDeserializeSignTemplateAdditionalInfoFieldRequiredFieldSignersField(val: any): SignTemplateAdditionalInfoFieldRequiredFieldSignersField;
export declare function newSerializeSignTemplateAdditionalInfoFieldRequiredField(val: SignTemplateAdditionalInfoFieldRequiredField): Json;
export declare function newDeserializeSignTemplateAdditionalInfoFieldRequiredField(val: any): SignTemplateAdditionalInfoFieldRequiredField;
export declare function newSerializeSignTemplateAdditionalInfoField(val: SignTemplateAdditionalInfoField): Json;
export declare function newDeserializeSignTemplateAdditionalInfoField(val: any): SignTemplateAdditionalInfoField;
export declare function newSerializeSignTemplateReadySignLinkField(val: SignTemplateReadySignLinkField): Json;
export declare function newDeserializeSignTemplateReadySignLinkField(val: any): SignTemplateReadySignLinkField;
export declare function newSerializeSignTemplateCustomBrandingField(val: SignTemplateCustomBrandingField): Json;
export declare function newDeserializeSignTemplateCustomBrandingField(val: any): SignTemplateCustomBrandingField;
export declare function newSerializeSignTemplate(val: SignTemplate): Json;
export declare function newDeserializeSignTemplate(val: any): SignTemplate;
export declare function newSerializeShieldInformationBarrierReportDetailsDetailsField(val: ShieldInformationBarrierReportDetailsDetailsField): Json;
export declare function newDeserializeShieldInformationBarrierReportDetailsDetailsField(val: any): ShieldInformationBarrierReportDetailsDetailsField;
export declare function newSerializeShieldInformationBarrierReportDetails(val: ShieldInformationBarrierReportDetails): Json;
export declare function newDeserializeShieldInformationBarrierReportDetails(val: any): ShieldInformationBarrierReportDetails;
export declare function newSerializeTrackingCodeTypeField(val: TrackingCodeTypeField): Json;
export declare function newDeserializeTrackingCodeTypeField(val: any): TrackingCodeTypeField;
export declare function newSerializeTrackingCode(val: TrackingCode): Json;
export declare function newDeserializeTrackingCode(val: any): TrackingCode;
export declare function newSerializeUserFullRoleField(val: UserFullRoleField): Json;
export declare function newDeserializeUserFullRoleField(val: any): UserFullRoleField;
export declare function newSerializeUserFullEnterpriseFieldTypeField(val: UserFullEnterpriseFieldTypeField): Json;
export declare function newDeserializeUserFullEnterpriseFieldTypeField(val: any): UserFullEnterpriseFieldTypeField;
export declare function newSerializeUserFullEnterpriseField(val: UserFullEnterpriseField): Json;
export declare function newDeserializeUserFullEnterpriseField(val: any): UserFullEnterpriseField;
export declare function newSerializeUserFull(val: UserFull): Json;
export declare function newDeserializeUserFull(val: any): UserFull;
export declare function newSerializeMetadataFilterScopeField(val: MetadataFilterScopeField): Json;
export declare function newDeserializeMetadataFilterScopeField(val: any): MetadataFilterScopeField;
export declare function newSerializeMetadataFilterFiltersField(val: MetadataFilterFiltersField): Json;
export declare function newDeserializeMetadataFilterFiltersField(val: any): MetadataFilterFiltersField;
export declare function newSerializeMetadataFilter(val: MetadataFilter): Json;
export declare function newDeserializeMetadataFilter(val: any): MetadataFilter;
export declare function newSerializeMetadataFieldFilterString(val: MetadataFieldFilterString): Json;
export declare function newDeserializeMetadataFieldFilterString(val: any): MetadataFieldFilterString;
export declare function newSerializeMetadataFieldFilterFloat(val: MetadataFieldFilterFloat): Json;
export declare function newDeserializeMetadataFieldFilterFloat(val: any): MetadataFieldFilterFloat;
export declare function newSerializeMetadataFieldFilterMultiSelect(val: MetadataFieldFilterMultiSelect): Json;
export declare function newDeserializeMetadataFieldFilterMultiSelect(val: any): MetadataFieldFilterMultiSelect;
export declare function newSerializeMetadataFieldFilterFloatRange(val: MetadataFieldFilterFloatRange): Json;
export declare function newDeserializeMetadataFieldFilterFloatRange(val: any): MetadataFieldFilterFloatRange;
export declare function newSerializeMetadataFieldFilterDateRange(val: MetadataFieldFilterDateRange): Json;
export declare function newDeserializeMetadataFieldFilterDateRange(val: any): MetadataFieldFilterDateRange;
