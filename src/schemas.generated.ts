import { SerializedData } from './json.js';
import { sdIsEmpty } from './json.js';
import { sdIsBoolean } from './json.js';
import { sdIsNumber } from './json.js';
import { sdIsString } from './json.js';
import { sdIsList } from './json.js';
import { sdIsMap } from './json.js';
export type PostOAuth2TokenGrantTypeField =
  | 'authorization_code'
  | 'refresh_token'
  | 'client_credentials'
  | 'urn:ietf:params:oauth:grant-type:jwt-bearer'
  | 'urn:ietf:params:oauth:grant-type:token-exchange';
export type PostOAuth2TokenSubjectTokenTypeField =
  'urn:ietf:params:oauth:token-type:access_token';
export type PostOAuth2TokenActorTokenTypeField =
  'urn:ietf:params:oauth:token-type:id_token';
export type PostOAuth2TokenBoxSubjectTypeField = 'enterprise' | 'user';
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
export type PostOAuth2TokenRefreshAccessTokenGrantTypeField = 'refresh_token';
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
export type ZipDownloadRequestItemsTypeField = 'file' | 'folder';
export interface ZipDownloadRequestItemsField {
  readonly type: ZipDownloadRequestItemsTypeField;
  readonly id: string;
}
export interface ZipDownloadRequest {
  readonly items: readonly ZipDownloadRequestItemsField[];
  readonly downloadFileName?: string;
}
export type MetadataQueryOrderByDirectionField = 'ASC' | 'DESC';
export interface MetadataQueryOrderByField {
  readonly fieldKey?: string;
  readonly direction?: MetadataQueryOrderByDirectionField;
}
export interface MetadataQuery {
  readonly from: string;
  readonly query?: string;
  readonly queryParams?: {
    readonly [key: string]: string;
  };
  readonly ancestorFolderId: string;
  readonly orderBy?: readonly MetadataQueryOrderByField[];
  readonly limit?: number;
  readonly marker?: string;
  readonly fields?: readonly string[];
}
export type FileRequestUpdateRequestStatusField = 'active' | 'inactive';
export interface FileRequestUpdateRequest {
  readonly title?: string;
  readonly description?: string;
  readonly status?: FileRequestUpdateRequestStatusField;
  readonly isEmailRequired?: boolean;
  readonly isDescriptionRequired?: boolean;
  readonly expiresAt?: string;
}
export type FileRequestCopyRequestFolderTypeField = 'folder';
export interface FileRequestCopyRequestFolderField {
  readonly type?: FileRequestCopyRequestFolderTypeField;
  readonly id: string;
}
export type FileRequestCopyRequest = FileRequestUpdateRequest & {
  readonly folder: FileRequestCopyRequestFolderField;
};
export type ClientErrorTypeField = 'error';
export type ClientErrorCodeField =
  | 'created'
  | 'accepted'
  | 'no_content'
  | 'redirect'
  | 'not_modified'
  | 'bad_request'
  | 'unauthorized'
  | 'forbidden'
  | 'not_found'
  | 'method_not_allowed'
  | 'conflict'
  | 'precondition_failed'
  | 'too_many_requests'
  | 'internal_server_error'
  | 'unavailable'
  | 'item_name_invalid'
  | 'insufficient_scope';
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
export type ClassificationTemplateField = 'securityClassification-6VMVochwUWo';
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
export type ClassificationTemplateTypeField = 'metadata_template';
export type ClassificationTemplateTemplateKeyField =
  'securityClassification-6VMVochwUWo';
export type ClassificationTemplateDisplayNameField = 'Classification';
export type ClassificationTemplateFieldsTypeField = 'enum';
export type ClassificationTemplateFieldsKeyField =
  'Box__Security__Classification__Key';
export type ClassificationTemplateFieldsDisplayNameField = 'Classification';
export interface ClassificationTemplateFieldsOptionsStaticConfigClassificationField {
  readonly classificationDefinition?: string;
  readonly colorId?: number;
}
export interface ClassificationTemplateFieldsOptionsStaticConfigField {
  readonly classification?: ClassificationTemplateFieldsOptionsStaticConfigClassificationField;
}
export interface ClassificationTemplateFieldsOptionsField {
  readonly id: string;
  readonly key: string;
  readonly staticConfig?: ClassificationTemplateFieldsOptionsStaticConfigField;
}
export interface ClassificationTemplateFieldsField {
  readonly id: string;
  readonly type: ClassificationTemplateFieldsTypeField;
  readonly key: ClassificationTemplateFieldsKeyField;
  readonly displayName: ClassificationTemplateFieldsDisplayNameField;
  readonly hidden?: boolean;
  readonly options: readonly ClassificationTemplateFieldsOptionsField[];
}
export interface ClassificationTemplate {
  readonly id: string;
  readonly type: ClassificationTemplateTypeField;
  readonly scope: string;
  readonly templateKey: ClassificationTemplateTemplateKeyField;
  readonly displayName: ClassificationTemplateDisplayNameField;
  readonly hidden?: boolean;
  readonly copyInstanceOnItemCopy?: boolean;
  readonly fields: readonly ClassificationTemplateFieldsField[];
}
export type CollaborationAllowlistEntryTypeField =
  'collaboration_whitelist_entry';
export type CollaborationAllowlistEntryDirectionField =
  | 'inbound'
  | 'outbound'
  | 'both';
export type CollaborationAllowlistEntryEnterpriseTypeField = 'enterprise';
export interface CollaborationAllowlistEntryEnterpriseField {
  readonly id?: string;
  readonly type?: CollaborationAllowlistEntryEnterpriseTypeField;
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
  readonly nextMarker?: string;
  readonly prevMarker?: string;
  readonly entries?: readonly CollaborationAllowlistEntry[];
}
export type CollectionTypeField = 'collection';
export type CollectionNameField = 'Favorites';
export type CollectionCollectionTypeField = 'favorites';
export interface Collection {
  readonly id?: string;
  readonly type?: CollectionTypeField;
  readonly name?: CollectionNameField;
  readonly collectionType?: CollectionCollectionTypeField;
}
export type CollectionsOrderDirectionField = 'ASC' | 'DESC';
export interface CollectionsOrderField {
  readonly by?: string;
  readonly direction?: CollectionsOrderDirectionField;
}
export interface Collections {
  readonly totalCount?: number;
  readonly limit?: number;
  readonly offset?: number;
  readonly order?: readonly CollectionsOrderField[];
  readonly entries?: readonly Collection[];
}
export type CommentBaseTypeField = 'comment';
export interface CommentBase {
  readonly id?: string;
  readonly type?: CommentBaseTypeField;
}
export type EmailAliasTypeField = 'email_alias';
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
export type EnterpriseBaseTypeField = 'enterprise';
export interface EnterpriseBase {
  readonly id?: string;
  readonly type?: EnterpriseBaseTypeField;
}
export type FileBaseTypeField = 'file';
export interface FileBase {
  readonly id: string;
  readonly etag?: string;
  readonly type: FileBaseTypeField;
}
export type FileVersionBaseTypeField = 'file_version';
export interface FileVersionBase {
  readonly id: string;
  readonly type: FileVersionBaseTypeField;
}
export type FileVersionMini = FileVersionBase & {
  readonly sha1?: string;
};
export type FileMini = FileBase & {
  readonly sequenceId?: string;
  readonly name?: string;
  readonly sha1?: string;
  readonly fileVersion?: FileVersionMini;
};
export interface FilesUnderRetention {
  readonly limit?: number;
  readonly nextMarker?: string;
  readonly prevMarker?: string;
  readonly entries?: readonly FileMini[];
}
export type FileConflict = FileMini & {};
export interface ConflictErrorContextInfoField {
  readonly conflicts?: readonly FileConflict[];
}
export type ConflictError = ClientError & {};
export type FolderBaseTypeField = 'folder';
export interface FolderBase {
  readonly id: string;
  readonly etag?: string;
  readonly type: FolderBaseTypeField;
}
export type FolderMini = FolderBase & {
  readonly sequenceId?: string;
  readonly name?: string;
};
export type FileMiniOrFolderMini = FileMini | FolderMini;
export type FileOrFolderScopeScopeField =
  | 'annotation_edit'
  | 'annotation_view_all'
  | 'annotation_view_self'
  | 'base_explorer'
  | 'base_picker'
  | 'base_preview'
  | 'base_upload'
  | 'item_delete'
  | 'item_download'
  | 'item_preview'
  | 'item_rename'
  | 'item_share';
export interface FileOrFolderScope {
  readonly scope?: FileOrFolderScopeScopeField;
  readonly object?: FileMiniOrFolderMini;
}
export type AccessTokenTokenTypeField = 'bearer';
export type AccessTokenIssuedTokenTypeField =
  'urn:ietf:params:oauth:token-type:access_token';
export interface AccessToken {
  readonly accessToken?: string;
  readonly expiresIn?: number;
  readonly tokenType?: AccessTokenTokenTypeField;
  readonly restrictedTo?: readonly FileOrFolderScope[];
  readonly refreshToken?: string;
  readonly issuedTokenType?: AccessTokenIssuedTokenTypeField;
}
export type IntegrationMappingBaseIntegrationTypeField = 'slack';
export interface IntegrationMappingBase {
  readonly id?: string;
  readonly integrationType?: IntegrationMappingBaseIntegrationTypeField;
}
export type IntegrationMappingMiniPartnerItemTypeField = 'channel';
export type IntegrationMappingMiniBoxItemTypeField = 'folder';
export type IntegrationMappingMini = IntegrationMappingBase & {
  readonly partnerItemId?: string;
  readonly partnerItemType?: IntegrationMappingMiniPartnerItemTypeField;
  readonly boxItemId?: string;
  readonly boxItemType?: IntegrationMappingMiniBoxItemTypeField;
};
export type GroupBaseTypeField = 'group';
export interface GroupBase {
  readonly id: string;
  readonly type: GroupBaseTypeField;
}
export type GroupMiniGroupTypeField = 'managed_group' | 'all_users_group';
export type GroupMini = GroupBase & {
  readonly name?: string;
  readonly groupType?: GroupMiniGroupTypeField;
};
export type Group = GroupMini & {
  readonly createdAt?: string;
  readonly modifiedAt?: string;
};
export type GroupFullInvitabilityLevelField =
  | 'admins_only'
  | 'admins_and_members'
  | 'all_managed_users';
export type GroupFullMemberViewabilityLevelField =
  | 'admins_only'
  | 'admins_and_members'
  | 'all_managed_users';
export interface GroupFullPermissionsField {
  readonly canInviteAsCollaborator?: boolean;
}
export type GroupFull = Group & {
  readonly provenance?: string;
  readonly externalSyncIdentifier?: string;
  readonly description?: string;
  readonly invitabilityLevel?: GroupFullInvitabilityLevelField;
  readonly memberViewabilityLevel?: GroupFullMemberViewabilityLevelField;
  readonly permissions?: GroupFullPermissionsField;
};
export type GroupsOrderDirectionField = 'ASC' | 'DESC';
export interface GroupsOrderField {
  readonly by?: string;
  readonly direction?: GroupsOrderDirectionField;
}
export interface Groups {
  readonly totalCount?: number;
  readonly limit?: number;
  readonly offset?: number;
  readonly order?: readonly GroupsOrderField[];
  readonly entries?: readonly GroupFull[];
}
export type LegalHoldPolicyMiniTypeField = 'legal_hold_policy';
export interface LegalHoldPolicyMini {
  readonly id: string;
  readonly type: LegalHoldPolicyMiniTypeField;
}
export type LegalHoldPolicyAssignmentBaseTypeField =
  'legal_hold_policy_assignment';
export interface LegalHoldPolicyAssignmentBase {
  readonly id?: string;
  readonly type?: LegalHoldPolicyAssignmentBaseTypeField;
}
export interface MetadataBase {
  readonly parent?: string;
  readonly template?: string;
  readonly scope?: string;
  readonly version?: number;
}
export type Metadata = MetadataBase;
export interface Metadatas {
  readonly entries?: readonly Metadata[];
  readonly limit?: number;
}
export type MetadataFull = Metadata & {
  readonly canEdit?: boolean;
  readonly id?: string;
  readonly type?: string;
  readonly typeVersion?: number;
  readonly extraData?: {
    readonly [key: string]: string;
  };
};
export type MetadataCascadePolicyTypeField = 'metadata_cascade_policy';
export type MetadataCascadePolicyOwnerEnterpriseTypeField = 'enterprise';
export interface MetadataCascadePolicyOwnerEnterpriseField {
  readonly type?: MetadataCascadePolicyOwnerEnterpriseTypeField;
  readonly id?: string;
}
export type MetadataCascadePolicyParentTypeField = 'folder';
export interface MetadataCascadePolicyParentField {
  readonly type?: MetadataCascadePolicyParentTypeField;
  readonly id?: string;
}
export interface MetadataCascadePolicy {
  readonly id: string;
  readonly type: MetadataCascadePolicyTypeField;
  readonly ownerEnterprise?: MetadataCascadePolicyOwnerEnterpriseField;
  readonly parent?: MetadataCascadePolicyParentField;
  readonly scope?: string;
  readonly templateKey?: string;
}
export interface MetadataCascadePolicies {
  readonly limit?: number;
  readonly nextMarker?: string;
  readonly prevMarker?: string;
  readonly entries?: readonly MetadataCascadePolicy[];
}
export type MetadataQueryIndexStatusField = 'building' | 'active' | 'disabled';
export type MetadataQueryIndexFieldsSortDirectionField = 'asc' | 'desc';
export interface MetadataQueryIndexFieldsField {
  readonly key?: string;
  readonly sortDirection?: MetadataQueryIndexFieldsSortDirectionField;
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
export type MetadataTemplateTypeField = 'metadata_template';
export type MetadataTemplateFieldsTypeField =
  | 'string'
  | 'float'
  | 'date'
  | 'enum'
  | 'multiSelect'
  | 'integer';
export interface MetadataTemplateFieldsOptionsField {
  readonly key: string;
  readonly id?: string;
}
export interface MetadataTemplateFieldsField {
  readonly type: MetadataTemplateFieldsTypeField;
  readonly key: string;
  readonly displayName: string;
  readonly description?: string;
  readonly hidden?: boolean;
  readonly options?: readonly MetadataTemplateFieldsOptionsField[];
  readonly id?: string;
}
export interface MetadataTemplate {
  readonly id: string;
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
  readonly nextMarker?: string;
  readonly prevMarker?: string;
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
export type RetentionPolicyBaseTypeField = 'retention_policy';
export interface RetentionPolicyBase {
  readonly id: string;
  readonly type: RetentionPolicyBaseTypeField;
}
export type RetentionPolicyMiniDispositionActionField =
  | 'permanently_delete'
  | 'remove_retention';
export type RetentionPolicyMini = RetentionPolicyBase & {
  readonly policyName?: string;
  readonly retentionLength?: string;
  readonly dispositionAction?: RetentionPolicyMiniDispositionActionField;
};
export type FileVersionRetentionTypeField = 'file_version_retention';
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
  readonly nextMarker?: string;
  readonly prevMarker?: string;
  readonly entries?: readonly FileVersionRetention[];
}
export type RetentionPolicyAssignmentBaseTypeField =
  'retention_policy_assignment';
export interface RetentionPolicyAssignmentBase {
  readonly id: string;
  readonly type: RetentionPolicyAssignmentBaseTypeField;
}
export type ShieldInformationBarrierBaseTypeField =
  'shield_information_barrier';
export interface ShieldInformationBarrierBase {
  readonly id?: string;
  readonly type?: ShieldInformationBarrierBaseTypeField;
}
export interface ShieldInformationBarrierReference {
  readonly shieldInformationBarrier?: ShieldInformationBarrierBase;
}
export type ShieldInformationBarrierReportBaseTypeField =
  'shield_information_barrier_report';
export interface ShieldInformationBarrierReportBase {
  readonly id?: string;
  readonly type?: ShieldInformationBarrierReportBaseTypeField;
}
export type ShieldInformationBarrierSegmentMemberBaseTypeField =
  'shield_information_barrier_segment_member';
export interface ShieldInformationBarrierSegmentMemberBase {
  readonly id?: string;
  readonly type?: ShieldInformationBarrierSegmentMemberBaseTypeField;
}
export type ShieldInformationBarrierSegmentRestrictionBaseTypeField =
  'shield_information_barrier_segment_restriction';
export interface ShieldInformationBarrierSegmentRestrictionBase {
  readonly type?: ShieldInformationBarrierSegmentRestrictionBaseTypeField;
  readonly id?: string;
}
export type ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentTypeField =
  'shield_information_barrier_segment';
export interface ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField {
  readonly id?: string;
  readonly type?: ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentTypeField;
}
export type ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentTypeField =
  'shield_information_barrier_segment';
export interface ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField {
  readonly id?: string;
  readonly type?: ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentTypeField;
}
export type ShieldInformationBarrierSegmentRestrictionMini =
  ShieldInformationBarrierSegmentRestrictionBase & {
    readonly shieldInformationBarrierSegment: ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField;
    readonly restrictedSegment: ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField;
  };
export interface SessionTerminationMessage {
  readonly message?: string;
}
export type StoragePolicyMiniTypeField = 'storage_policy';
export interface StoragePolicyMini {
  readonly id: string;
  readonly type: StoragePolicyMiniTypeField;
}
export type StoragePolicyAssignmentTypeField = 'storage_policy_assignment';
export interface StoragePolicyAssignmentAssignedToField {
  readonly id?: string;
  readonly type?: string;
}
export interface StoragePolicyAssignment {
  readonly id: string;
  readonly type: StoragePolicyAssignmentTypeField;
  readonly storagePolicy?: StoragePolicyMini;
  readonly assignedTo?: StoragePolicyAssignmentAssignedToField;
}
export interface StoragePolicyAssignments {
  readonly limit?: number;
  readonly nextMarker?: string;
  readonly prevMarker?: string;
  readonly entries?: readonly StoragePolicyAssignment[];
}
export type StoragePolicy = StoragePolicyMini & {
  readonly name?: string;
};
export interface StoragePolicies {
  readonly limit?: number;
  readonly nextMarker?: string;
  readonly prevMarker?: string;
  readonly entries?: readonly StoragePolicy[];
}
export type TermsOfServiceBaseTypeField = 'terms_of_service';
export interface TermsOfServiceBase {
  readonly id: string;
  readonly type: TermsOfServiceBaseTypeField;
}
export type TermsOfServiceStatusField = 'enabled' | 'disabled';
export type TermsOfServiceEnterpriseTypeField = 'enterprise';
export interface TermsOfServiceEnterpriseField {
  readonly id?: string;
  readonly type?: TermsOfServiceEnterpriseTypeField;
  readonly name?: string;
}
export type TermsOfServiceTosTypeField = 'managed' | 'external';
export type TermsOfService = TermsOfServiceBase & {
  readonly status?: TermsOfServiceStatusField;
  readonly enterprise?: TermsOfServiceEnterpriseField;
  readonly tosType?: TermsOfServiceTosTypeField;
  readonly text?: string;
  readonly createdAt?: string;
  readonly modifiedAt?: string;
};
export interface TermsOfServices {
  readonly totalCount?: number;
  readonly entries?: readonly TermsOfService[];
}
export interface UploadPartMini {
  readonly partId?: string;
  readonly offset?: number;
  readonly size?: number;
}
export type UploadPart = UploadPartMini & {
  readonly sha1?: string;
};
export type UploadPartsOrderDirectionField = 'ASC' | 'DESC';
export interface UploadPartsOrderField {
  readonly by?: string;
  readonly direction?: UploadPartsOrderDirectionField;
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
export type UploadSessionTypeField = 'upload_session';
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
export type UserBaseTypeField = 'user';
export interface UserBase {
  readonly id: string;
  readonly type: UserBaseTypeField;
}
export type UserIntegrationMappings = UserBase & {
  readonly name?: string;
  readonly login?: string;
};
export type UserCollaborations = UserBase & {
  readonly name?: string;
  readonly login?: string;
};
export type GroupMiniOrUserCollaborations = GroupMini | UserCollaborations;
export type UserMini = UserBase & {
  readonly name?: string;
  readonly login?: string;
};
export type EventSourceItemTypeField = 'file' | 'folder';
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
export type UserStatusField =
  | 'active'
  | 'inactive'
  | 'cannot_delete_edit'
  | 'cannot_delete_edit_upload';
export interface UserNotificationEmailField {
  readonly email?: string;
  readonly isConfirmed?: boolean;
}
export type User = UserMini & {
  readonly createdAt?: string;
  readonly modifiedAt?: string;
  readonly language?: string;
  readonly timezone?: string;
  readonly spaceAmount?: number;
  readonly spaceUsed?: number;
  readonly maxUploadSize?: number;
  readonly status?: UserStatusField;
  readonly jobTitle?: string;
  readonly phone?: string;
  readonly address?: string;
  readonly avatarUrl?: string;
  readonly notificationEmail?: UserNotificationEmailField;
};
export type TrashWebLinkRestoredTypeField = 'web_link';
export interface TrashWebLinkRestoredPathCollectionField {
  readonly totalCount: number;
  readonly entries: readonly FolderMini[];
}
export type TrashWebLinkRestoredItemStatusField =
  | 'active'
  | 'trashed'
  | 'deleted';
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
export type TrashFolderRestoredTypeField = 'folder';
export interface TrashFolderRestoredPathCollectionField {
  readonly totalCount: number;
  readonly entries: readonly FolderMini[];
}
export type TrashFolderRestoredItemStatusField =
  | 'active'
  | 'trashed'
  | 'deleted';
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
export type TrashFileRestoredTypeField = 'file';
export interface TrashFileRestoredPathCollectionField {
  readonly totalCount: number;
  readonly entries: readonly FolderMini[];
}
export type TrashFileRestoredItemStatusField = 'active' | 'trashed' | 'deleted';
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
export type TrashWebLinkTypeField = 'web_link';
export type TrashWebLinkPathCollectionEntriesTypeField = 'folder';
export interface TrashWebLinkPathCollectionEntriesField {
  readonly type?: TrashWebLinkPathCollectionEntriesTypeField;
  readonly id?: string;
  readonly sequenceId?: string;
  readonly etag?: string;
  readonly name?: string;
}
export interface TrashWebLinkPathCollectionField {
  readonly totalCount: number;
  readonly entries: readonly TrashWebLinkPathCollectionEntriesField[];
}
export type TrashWebLinkItemStatusField = 'active' | 'trashed' | 'deleted';
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
export type TrashFolderTypeField = 'folder';
export type TrashFolderPathCollectionEntriesTypeField = 'folder';
export interface TrashFolderPathCollectionEntriesField {
  readonly type?: TrashFolderPathCollectionEntriesTypeField;
  readonly id?: string;
  readonly sequenceId?: string;
  readonly etag?: string;
  readonly name?: string;
}
export interface TrashFolderPathCollectionField {
  readonly totalCount: number;
  readonly entries: readonly TrashFolderPathCollectionEntriesField[];
}
export type TrashFolderItemStatusField = 'active' | 'trashed' | 'deleted';
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
export type TrashFileTypeField = 'file';
export type TrashFilePathCollectionEntriesTypeField = 'folder';
export interface TrashFilePathCollectionEntriesField {
  readonly type?: TrashFilePathCollectionEntriesTypeField;
  readonly id?: string;
  readonly sequenceId?: string;
  readonly etag?: string;
  readonly name?: string;
}
export interface TrashFilePathCollectionField {
  readonly totalCount: number;
  readonly entries: readonly TrashFilePathCollectionEntriesField[];
}
export type TrashFileItemStatusField = 'active' | 'trashed' | 'deleted';
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
export type TermsOfServiceUserStatusTypeField = 'terms_of_service_user_status';
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
export type TaskAssignmentTypeField = 'task_assignment';
export type TaskAssignmentResolutionStateField =
  | 'completed'
  | 'incomplete'
  | 'approved'
  | 'rejected';
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
export type TaskTypeField = 'task';
export type TaskActionField = 'review' | 'complete';
export type TaskCompletionRuleField = 'all_assignees' | 'any_assignee';
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
export type RetentionPolicyAssignmentTypeField = 'retention_policy_assignment';
export type RetentionPolicyAssignmentAssignedToTypeField =
  | 'folder'
  | 'enterprise'
  | 'metadata_template';
export interface RetentionPolicyAssignmentAssignedToField {
  readonly id?: string;
  readonly type?: RetentionPolicyAssignmentAssignedToTypeField;
}
export interface RetentionPolicyAssignmentFilterFieldsField {
  readonly field?: string;
  readonly value?: string;
}
export interface RetentionPolicyAssignment {
  readonly id: string;
  readonly type: RetentionPolicyAssignmentTypeField;
  readonly retentionPolicy?: RetentionPolicyMini;
  readonly assignedTo?: RetentionPolicyAssignmentAssignedToField;
  readonly filterFields?: readonly RetentionPolicyAssignmentFilterFieldsField[];
  readonly assignedBy?: UserMini;
  readonly assignedAt?: string;
  readonly startDateField?: string;
}
export interface RetentionPolicyAssignments {
  readonly entries?: readonly RetentionPolicyAssignment[];
  readonly limit?: number;
  readonly nextMarker?: string;
}
export type RetentionPolicyPolicyTypeField = 'finite' | 'indefinite';
export type RetentionPolicyRetentionTypeField = 'modifiable' | 'non_modifiable';
export type RetentionPolicyStatusField = 'active' | 'retired';
export interface RetentionPolicyAssignmentCountsField {
  readonly enterprise?: number;
  readonly folder?: number;
  readonly metadataTemplate?: number;
}
export type RetentionPolicy = RetentionPolicyMini & {
  readonly description?: string;
  readonly policyType?: RetentionPolicyPolicyTypeField;
  readonly retentionType?: RetentionPolicyRetentionTypeField;
  readonly status?: RetentionPolicyStatusField;
  readonly createdBy?: UserMini;
  readonly createdAt?: string;
  readonly modifiedAt?: string;
  readonly canOwnerExtendRetention?: boolean;
  readonly areOwnersNotified?: boolean;
  readonly customNotificationRecipients?: readonly UserMini[];
  readonly assignmentCounts?: RetentionPolicyAssignmentCountsField;
};
export interface RetentionPolicies {
  readonly entries?: readonly RetentionPolicy[];
  readonly limit?: number;
  readonly nextMarker?: string;
}
export type LegalHoldPolicyStatusField =
  | 'active'
  | 'applying'
  | 'releasing'
  | 'released';
export interface LegalHoldPolicyAssignmentCountsField {
  readonly user?: number;
  readonly folder?: number;
  readonly file?: number;
  readonly fileVersion?: number;
}
export type LegalHoldPolicy = LegalHoldPolicyMini & {
  readonly policyName?: string;
  readonly description?: string;
  readonly status?: LegalHoldPolicyStatusField;
  readonly assignmentCounts?: LegalHoldPolicyAssignmentCountsField;
  readonly createdBy?: UserMini;
  readonly createdAt?: string;
  readonly modifiedAt?: string;
  readonly deletedAt?: string;
  readonly filterStartedAt?: string;
  readonly filterEndedAt?: string;
  readonly releaseNotes?: string;
};
export interface LegalHoldPolicies {
  readonly limit?: number;
  readonly nextMarker?: string;
  readonly prevMarker?: string;
  readonly entries?: readonly LegalHoldPolicy[];
}
export type InviteTypeField = 'invite';
export type InviteInvitedToTypeField = 'enterprise';
export interface InviteInvitedToField {
  readonly id?: string;
  readonly type?: InviteInvitedToTypeField;
  readonly name?: string;
}
export interface Invite {
  readonly id: string;
  readonly type: InviteTypeField;
  readonly invitedTo?: InviteInvitedToField;
  readonly actionableBy?: UserMini;
  readonly invitedBy?: UserMini;
  readonly status?: string;
  readonly createdAt?: string;
  readonly modifiedAt?: string;
}
export type GroupMembershipTypeField = 'group_membership';
export type GroupMembershipRoleField = 'member' | 'admin';
export interface GroupMembership {
  readonly id?: string;
  readonly type?: GroupMembershipTypeField;
  readonly user?: UserMini;
  readonly group?: GroupMini;
  readonly role?: GroupMembershipRoleField;
  readonly createdAt?: string;
  readonly modifiedAt?: string;
}
export type GroupMembershipsOrderDirectionField = 'ASC' | 'DESC';
export interface GroupMembershipsOrderField {
  readonly by?: string;
  readonly direction?: GroupMembershipsOrderDirectionField;
}
export interface GroupMemberships {
  readonly totalCount?: number;
  readonly limit?: number;
  readonly offset?: number;
  readonly order?: readonly GroupMembershipsOrderField[];
  readonly entries?: readonly GroupMembership[];
}
export type FileVersion = FileVersionMini & {
  readonly name?: string;
  readonly size?: number;
  readonly createdAt?: string;
  readonly modifiedAt?: string;
  readonly modifiedBy?: UserMini;
  readonly trashedAt?: string;
  readonly trashedBy?: UserMini;
  readonly restoredAt?: string;
  readonly restoredBy?: UserMini;
  readonly purgedAt?: string;
  readonly uploaderDisplayName?: string;
};
export type FileVersionFull = FileVersion & {
  readonly versionNumber?: string;
};
export type FileVersionsOrderDirectionField = 'ASC' | 'DESC';
export interface FileVersionsOrderField {
  readonly by?: string;
  readonly direction?: FileVersionsOrderDirectionField;
}
export interface FileVersions {
  readonly totalCount?: number;
  readonly limit?: number;
  readonly offset?: number;
  readonly order?: readonly FileVersionsOrderField[];
  readonly entries?: readonly FileVersionFull[];
}
export type FileRequestTypeField = 'file_request';
export type FileRequestStatusField = 'active' | 'inactive';
export interface FileRequest {
  readonly id: string;
  readonly type: FileRequestTypeField;
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
export type FileSharedLinkAccessField = 'open' | 'company' | 'collaborators';
export type FileSharedLinkEffectiveAccessField =
  | 'open'
  | 'company'
  | 'collaborators';
export type FileSharedLinkEffectivePermissionField =
  | 'can_edit'
  | 'can_download'
  | 'can_preview'
  | 'no_access';
export interface FileSharedLinkPermissionsField {
  readonly canDownload: boolean;
  readonly canPreview: boolean;
  readonly canEdit: boolean;
}
export interface FileSharedLinkField {
  readonly url: string;
  readonly downloadUrl?: string;
  readonly vanityUrl?: string;
  readonly vanityName?: string;
  readonly access?: FileSharedLinkAccessField;
  readonly effectiveAccess: FileSharedLinkEffectiveAccessField;
  readonly effectivePermission: FileSharedLinkEffectivePermissionField;
  readonly unsharedAt?: string;
  readonly isPasswordEnabled: boolean;
  readonly permissions?: FileSharedLinkPermissionsField;
  readonly downloadCount: number;
  readonly previewCount: number;
}
export type FileItemStatusField = 'active' | 'trashed' | 'deleted';
export type File = FileMini & {
  readonly description?: string;
  readonly size?: number;
  readonly pathCollection?: FilePathCollectionField;
  readonly createdAt?: string;
  readonly modifiedAt?: string;
  readonly trashedAt?: string;
  readonly purgedAt?: string;
  readonly contentCreatedAt?: string;
  readonly contentModifiedAt?: string;
  readonly createdBy?: UserMini;
  readonly modifiedBy?: UserMini;
  readonly ownedBy?: UserMini;
  readonly sharedLink?: FileSharedLinkField;
  readonly parent?: FolderMini;
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
export type FileFullLockTypeField = 'lock';
export type FileFullLockAppTypeField =
  | 'gsuite'
  | 'office_wopi'
  | 'office_wopiplus'
  | 'other';
export interface FileFullLockField {
  readonly id?: string;
  readonly type?: FileFullLockTypeField;
  readonly createdBy?: UserMini;
  readonly createdAt?: string;
  readonly expiredAt?: string;
  readonly isDownloadPrevented?: boolean;
  readonly appType?: FileFullLockAppTypeField;
}
export type FileFullExpiringEmbedLinkTokenTypeField = 'bearer';
export interface FileFullExpiringEmbedLinkField {
  readonly accessToken?: string;
  readonly expiresIn?: number;
  readonly tokenType?: FileFullExpiringEmbedLinkTokenTypeField;
  readonly restrictedTo?: readonly FileOrFolderScope[];
  readonly url?: string;
}
export interface FileFullWatermarkInfoField {
  readonly isWatermarked?: boolean;
}
export type FileFullAllowedInviteeRolesField =
  | 'editor'
  | 'viewer'
  | 'previewer'
  | 'uploader'
  | 'previewer uploader'
  | 'viewer uploader'
  | 'co-owner';
export interface FileFullMetadataField {
  readonly extraData?: {
    readonly [key: string]: {
      readonly [key: string]: Metadata;
    };
  };
}
export interface FileFullRepresentationsEntriesContentField {
  readonly urlTemplate?: string;
}
export interface FileFullRepresentationsEntriesInfoField {
  readonly url?: string;
}
export interface FileFullRepresentationsEntriesPropertiesField {
  readonly dimensions?: string;
  readonly paged?: boolean;
  readonly thumb?: boolean;
}
export type FileFullRepresentationsEntriesStatusStateField =
  | 'success'
  | 'viewable'
  | 'pending'
  | 'none';
export interface FileFullRepresentationsEntriesStatusField {
  readonly state?: FileFullRepresentationsEntriesStatusStateField;
}
export interface FileFullRepresentationsEntriesField {
  readonly content?: FileFullRepresentationsEntriesContentField;
  readonly info?: FileFullRepresentationsEntriesInfoField;
  readonly properties?: FileFullRepresentationsEntriesPropertiesField;
  readonly representation?: string;
  readonly status?: FileFullRepresentationsEntriesStatusField;
}
export interface FileFullRepresentationsField {
  readonly entries?: readonly FileFullRepresentationsEntriesField[];
}
export interface FileFullClassificationField {
  readonly name?: string;
  readonly definition?: string;
  readonly color?: string;
}
export type FileFullSharedLinkPermissionOptionsField =
  | 'can_preview'
  | 'can_download'
  | 'can_edit';
export type FileFull = File & {
  readonly versionNumber?: string;
  readonly commentCount?: number;
  readonly permissions?: FileFullPermissionsField;
  readonly tags?: readonly string[];
  readonly lock?: FileFullLockField;
  readonly extension?: string;
  readonly isPackage?: boolean;
  readonly expiringEmbedLink?: FileFullExpiringEmbedLinkField;
  readonly watermarkInfo?: FileFullWatermarkInfoField;
  readonly isAccessibleViaSharedLink?: boolean;
  readonly allowedInviteeRoles?: readonly FileFullAllowedInviteeRolesField[];
  readonly isExternallyOwned?: boolean;
  readonly hasCollaborations?: boolean;
  readonly metadata?: FileFullMetadataField;
  readonly expiresAt?: string;
  readonly representations?: FileFullRepresentationsField;
  readonly classification?: FileFullClassificationField;
  readonly uploaderDisplayName?: string;
  readonly dispositionAt?: string;
  readonly sharedLinkPermissionOptions?: readonly FileFullSharedLinkPermissionOptionsField[];
};
export interface Files {
  readonly totalCount?: number;
  readonly entries?: readonly FileFull[];
}
export type DevicePinnerTypeField = 'device_pinner';
export interface DevicePinner {
  readonly id?: string;
  readonly type?: DevicePinnerTypeField;
  readonly ownedBy?: UserMini;
  readonly productName?: string;
}
export type DevicePinnersOrderByField = 'id';
export type DevicePinnersOrderDirectionField = 'asc' | 'desc';
export interface DevicePinnersOrderField {
  readonly by?: DevicePinnersOrderByField;
  readonly direction?: DevicePinnersOrderDirectionField;
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
  readonly isReplyComment?: boolean;
  readonly message?: string;
  readonly createdBy?: UserMini;
  readonly createdAt?: string;
  readonly modifiedAt?: string;
  readonly item?: CommentItemField;
};
export type CommentFull = Comment & {
  readonly taggedMessage?: string;
};
export type CommentsOrderDirectionField = 'ASC' | 'DESC';
export interface CommentsOrderField {
  readonly by?: string;
  readonly direction?: CommentsOrderDirectionField;
}
export interface Comments {
  readonly totalCount?: number;
  readonly limit?: number;
  readonly offset?: number;
  readonly order?: readonly CommentsOrderField[];
  readonly entries?: readonly CommentFull[];
}
export type CollaborationAllowlistExemptTargetTypeField =
  'collaboration_whitelist_exempt_target';
export type CollaborationAllowlistExemptTargetEnterpriseTypeField =
  'enterprise';
export interface CollaborationAllowlistExemptTargetEnterpriseField {
  readonly id?: string;
  readonly type?: CollaborationAllowlistExemptTargetEnterpriseTypeField;
  readonly name?: string;
}
export interface CollaborationAllowlistExemptTarget {
  readonly id?: string;
  readonly type?: CollaborationAllowlistExemptTargetTypeField;
  readonly enterprise?: CollaborationAllowlistExemptTargetEnterpriseField;
  readonly user?: UserMini;
  readonly createdAt?: string;
  readonly modifiedAt?: string;
}
export interface CollaborationAllowlistExemptTargets {
  readonly limit?: number;
  readonly nextMarker?: string;
  readonly prevMarker?: string;
  readonly entries?: readonly CollaborationAllowlistExemptTarget[];
}
export type ShieldInformationBarrierSegmentRestriction =
  ShieldInformationBarrierSegmentRestrictionMini & {
    readonly shieldInformationBarrier?: ShieldInformationBarrierBase;
    readonly createdAt?: string;
    readonly createdBy?: UserBase;
    readonly updatedAt?: string;
    readonly updatedBy?: UserBase;
  };
export interface ShieldInformationBarrierSegmentRestrictions {
  readonly limit?: number;
  readonly nextMarker?: string;
  readonly entries?: readonly ShieldInformationBarrierSegmentRestriction[];
}
export type ShieldInformationBarrierSegmentMemberMini =
  ShieldInformationBarrierSegmentMemberBase & {
    readonly user?: UserBase;
  };
export type ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentTypeField =
  'shield_information_barrier_segment';
export interface ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField {
  readonly id?: string;
  readonly type?: ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentTypeField;
}
export type ShieldInformationBarrierSegmentMember =
  ShieldInformationBarrierSegmentMemberMini & {
    readonly shieldInformationBarrier?: ShieldInformationBarrierBase;
    readonly shieldInformationBarrierSegment?: ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField;
    readonly createdAt?: string;
    readonly createdBy?: UserBase;
    readonly updatedAt?: string;
    readonly updatedBy?: UserBase;
  };
export interface ShieldInformationBarrierSegmentMembers {
  readonly limit?: number;
  readonly nextMarker?: string;
  readonly entries?: readonly ShieldInformationBarrierSegmentMember[];
}
export type ShieldInformationBarrierSegmentTypeField =
  'shield_information_barrier_segment';
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
export interface ShieldInformationBarrierSegments {
  readonly limit?: number;
  readonly nextMarker?: string;
  readonly entries?: readonly ShieldInformationBarrierSegment[];
}
export type ShieldInformationBarrierTypeField = 'shield_information_barrier';
export type ShieldInformationBarrierStatusField =
  | 'draft'
  | 'pending'
  | 'disabled'
  | 'enabled'
  | 'invalid';
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
export interface ShieldInformationBarriers {
  readonly limit?: number;
  readonly nextMarker?: string;
  readonly entries?: readonly ShieldInformationBarrier[];
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
  readonly entries?: readonly FolderLock[];
  readonly limit?: string;
  readonly nextMarker?: string;
}
export interface WatermarkWatermarkField {
  readonly createdAt?: string;
  readonly modifiedAt?: string;
}
export interface Watermark {
  readonly watermark?: WatermarkWatermarkField;
}
export type WebhookMiniTypeField = 'webhook';
export type WebhookMiniTargetTypeField = 'file' | 'folder';
export interface WebhookMiniTargetField {
  readonly id?: string;
  readonly type?: WebhookMiniTargetTypeField;
}
export interface WebhookMini {
  readonly id?: string;
  readonly type?: WebhookMiniTypeField;
  readonly target?: WebhookMiniTargetField;
}
export interface Webhooks {
  readonly limit?: number;
  readonly nextMarker?: string;
  readonly prevMarker?: string;
  readonly entries?: readonly WebhookMini[];
}
export type WebhookTriggersField =
  | 'FILE.UPLOADED'
  | 'FILE.PREVIEWED'
  | 'FILE.DOWNLOADED'
  | 'FILE.TRASHED'
  | 'FILE.DELETED'
  | 'FILE.RESTORED'
  | 'FILE.COPIED'
  | 'FILE.MOVED'
  | 'FILE.LOCKED'
  | 'FILE.UNLOCKED'
  | 'FILE.RENAMED'
  | 'COMMENT.CREATED'
  | 'COMMENT.UPDATED'
  | 'COMMENT.DELETED'
  | 'TASK_ASSIGNMENT.CREATED'
  | 'TASK_ASSIGNMENT.UPDATED'
  | 'METADATA_INSTANCE.CREATED'
  | 'METADATA_INSTANCE.UPDATED'
  | 'METADATA_INSTANCE.DELETED'
  | 'FOLDER.CREATED'
  | 'FOLDER.RENAMED'
  | 'FOLDER.DOWNLOADED'
  | 'FOLDER.RESTORED'
  | 'FOLDER.DELETED'
  | 'FOLDER.COPIED'
  | 'FOLDER.MOVED'
  | 'FOLDER.TRASHED'
  | 'WEBHOOK.DELETED'
  | 'COLLABORATION.CREATED'
  | 'COLLABORATION.ACCEPTED'
  | 'COLLABORATION.REJECTED'
  | 'COLLABORATION.REMOVED'
  | 'COLLABORATION.UPDATED'
  | 'SHARED_LINK.DELETED'
  | 'SHARED_LINK.CREATED'
  | 'SHARED_LINK.UPDATED'
  | 'SIGN_REQUEST.COMPLETED'
  | 'SIGN_REQUEST.DECLINED'
  | 'SIGN_REQUEST.EXPIRED'
  | 'SIGN_REQUEST.SIGNER_EMAIL_BOUNCED';
export type Webhook = WebhookMini & {
  readonly createdBy?: UserMini;
  readonly createdAt?: string;
  readonly address?: string;
  readonly triggers?: readonly WebhookTriggersField[];
};
export type WebLinkBaseTypeField = 'web_link';
export interface WebLinkBase {
  readonly id: string;
  readonly type: WebLinkBaseTypeField;
  readonly etag?: string;
}
export type WebLinkMini = WebLinkBase & {
  readonly url?: string;
  readonly sequenceId?: string;
  readonly name?: string;
};
export interface WebLinkPathCollectionField {
  readonly totalCount: number;
  readonly entries: readonly FolderMini[];
}
export type WebLinkSharedLinkAccessField = 'open' | 'company' | 'collaborators';
export type WebLinkSharedLinkEffectiveAccessField =
  | 'open'
  | 'company'
  | 'collaborators';
export type WebLinkSharedLinkEffectivePermissionField =
  | 'can_edit'
  | 'can_download'
  | 'can_preview'
  | 'no_access';
export interface WebLinkSharedLinkPermissionsField {
  readonly canDownload: boolean;
  readonly canPreview: boolean;
  readonly canEdit: boolean;
}
export interface WebLinkSharedLinkField {
  readonly url: string;
  readonly downloadUrl?: string;
  readonly vanityUrl?: string;
  readonly vanityName?: string;
  readonly access?: WebLinkSharedLinkAccessField;
  readonly effectiveAccess: WebLinkSharedLinkEffectiveAccessField;
  readonly effectivePermission: WebLinkSharedLinkEffectivePermissionField;
  readonly unsharedAt?: string;
  readonly isPasswordEnabled: boolean;
  readonly permissions?: WebLinkSharedLinkPermissionsField;
  readonly downloadCount: number;
  readonly previewCount: number;
}
export type WebLinkItemStatusField = 'active' | 'trashed' | 'deleted';
export type WebLink = WebLinkMini & {
  readonly parent?: FolderMini;
  readonly description?: string;
  readonly pathCollection?: WebLinkPathCollectionField;
  readonly createdAt?: string;
  readonly modifiedAt?: string;
  readonly trashedAt?: string;
  readonly purgedAt?: string;
  readonly createdBy?: UserMini;
  readonly modifiedBy?: UserMini;
  readonly ownedBy?: UserMini;
  readonly sharedLink?: WebLinkSharedLinkField;
  readonly itemStatus?: WebLinkItemStatusField;
};
export type FileFullOrFolderMiniOrWebLink = FileFull | FolderMini | WebLink;
export type ItemsOrderDirectionField = 'ASC' | 'DESC';
export interface ItemsOrderField {
  readonly by?: string;
  readonly direction?: ItemsOrderDirectionField;
}
export interface Items {
  readonly totalCount?: number;
  readonly limit?: number;
  readonly offset?: number;
  readonly order?: readonly ItemsOrderField[];
  readonly entries?: readonly FileFullOrFolderMiniOrWebLink[];
}
export interface FolderPathCollectionField {
  readonly totalCount: number;
  readonly entries: readonly FolderMini[];
}
export type FolderSharedLinkAccessField = 'open' | 'company' | 'collaborators';
export type FolderSharedLinkEffectiveAccessField =
  | 'open'
  | 'company'
  | 'collaborators';
export type FolderSharedLinkEffectivePermissionField =
  | 'can_edit'
  | 'can_download'
  | 'can_preview'
  | 'no_access';
export interface FolderSharedLinkPermissionsField {
  readonly canDownload: boolean;
  readonly canPreview: boolean;
  readonly canEdit: boolean;
}
export interface FolderSharedLinkField {
  readonly url: string;
  readonly downloadUrl?: string;
  readonly vanityUrl?: string;
  readonly vanityName?: string;
  readonly access?: FolderSharedLinkAccessField;
  readonly effectiveAccess: FolderSharedLinkEffectiveAccessField;
  readonly effectivePermission: FolderSharedLinkEffectivePermissionField;
  readonly unsharedAt?: string;
  readonly isPasswordEnabled: boolean;
  readonly permissions?: FolderSharedLinkPermissionsField;
  readonly downloadCount: number;
  readonly previewCount: number;
}
export type FolderFolderUploadEmailAccessField = 'open' | 'collaborators';
export interface FolderFolderUploadEmailField {
  readonly access?: FolderFolderUploadEmailAccessField;
  readonly email?: string;
}
export type FolderItemStatusField = 'active' | 'trashed' | 'deleted';
export type Folder = FolderMini & {
  readonly createdAt?: string;
  readonly modifiedAt?: string;
  readonly description?: string;
  readonly size?: number;
  readonly pathCollection?: FolderPathCollectionField;
  readonly createdBy?: UserMini;
  readonly modifiedBy?: UserMini;
  readonly trashedAt?: string;
  readonly purgedAt?: string;
  readonly contentCreatedAt?: string;
  readonly contentModifiedAt?: string;
  readonly ownedBy?: UserMini;
  readonly sharedLink?: FolderSharedLinkField;
  readonly folderUploadEmail?: FolderFolderUploadEmailField;
  readonly parent?: FolderMini;
  readonly itemStatus?: FolderItemStatusField;
  readonly itemCollection?: Items;
};
export type EventSourceOrFileOrFolderOrUser =
  | EventSource
  | File
  | Folder
  | User;
export type EventEventTypeField =
  | 'ACCESS_GRANTED'
  | 'ACCESS_REVOKED'
  | 'ADD_DEVICE_ASSOCIATION'
  | 'ADD_LOGIN_ACTIVITY_DEVICE'
  | 'ADMIN_LOGIN'
  | 'APPLICATION_CREATED'
  | 'APPLICATION_PUBLIC_KEY_ADDED'
  | 'APPLICATION_PUBLIC_KEY_DELETED'
  | 'CHANGE_ADMIN_ROLE'
  | 'CHANGE_FOLDER_PERMISSION'
  | 'COLLABORATION_ACCEPT'
  | 'COLLABORATION_EXPIRATION'
  | 'COLLABORATION_INVITE'
  | 'COLLABORATION_REMOVE'
  | 'COLLABORATION_ROLE_CHANGE'
  | 'COLLAB_ADD_COLLABORATOR'
  | 'COLLAB_INVITE_COLLABORATOR'
  | 'COLLAB_REMOVE_COLLABORATOR'
  | 'COLLAB_ROLE_CHANGE'
  | 'COMMENT_CREATE'
  | 'COMMENT_DELETE'
  | 'CONTENT_ACCESS'
  | 'CONTENT_WORKFLOW_ABNORMAL_DOWNLOAD_ACTIVITY'
  | 'CONTENT_WORKFLOW_AUTOMATION_ADD'
  | 'CONTENT_WORKFLOW_AUTOMATION_DELETE'
  | 'CONTENT_WORKFLOW_POLICY_ADD'
  | 'CONTENT_WORKFLOW_SHARING_POLICY_VIOLATION'
  | 'CONTENT_WORKFLOW_UPLOAD_POLICY_VIOLATION'
  | 'COPY'
  | 'DATA_RETENTION_CREATE_RETENTION'
  | 'DATA_RETENTION_REMOVE_RETENTION'
  | 'DELETE'
  | 'DELETE_USER'
  | 'DEVICE_TRUST_CHECK_FAILED'
  | 'DOWNLOAD'
  | 'EDIT'
  | 'EDIT_USER'
  | 'EMAIL_ALIAS_CONFIRM'
  | 'EMAIL_ALIAS_REMOVE'
  | 'ENABLE_TWO_FACTOR_AUTH'
  | 'ENTERPRISE_APP_AUTHORIZATION_UPDATE'
  | 'FAILED_LOGIN'
  | 'FILE_MARKED_MALICIOUS'
  | 'FILE_WATERMARKED_DOWNLOAD'
  | 'GROUP_ADD_ITEM'
  | 'GROUP_ADD_USER'
  | 'GROUP_CREATION'
  | 'GROUP_DELETION'
  | 'GROUP_EDITED'
  | 'GROUP_REMOVE_ITEM'
  | 'GROUP_REMOVE_USER'
  | 'ITEM_COPY'
  | 'ITEM_CREATE'
  | 'ITEM_DOWNLOAD'
  | 'ITEM_MAKE_CURRENT_VERSION'
  | 'ITEM_MODIFY'
  | 'ITEM_MOVE'
  | 'ITEM_OPEN'
  | 'ITEM_PREVIEW'
  | 'ITEM_RENAME'
  | 'ITEM_SHARED'
  | 'ITEM_SHARED_CREATE'
  | 'ITEM_SHARED_UNSHARE'
  | 'ITEM_SHARED_UPDATE'
  | 'ITEM_SYNC'
  | 'ITEM_TRASH'
  | 'ITEM_UNDELETE_VIA_TRASH'
  | 'ITEM_UNSYNC'
  | 'ITEM_UPLOAD'
  | 'LEGAL_HOLD_ASSIGNMENT_CREATE'
  | 'LEGAL_HOLD_ASSIGNMENT_DELETE'
  | 'LEGAL_HOLD_POLICY_CREATE'
  | 'LEGAL_HOLD_POLICY_DELETE'
  | 'LEGAL_HOLD_POLICY_UPDATE'
  | 'LOCK'
  | 'LOCK_CREATE'
  | 'LOCK_DESTROY'
  | 'LOGIN'
  | 'MASTER_INVITE_ACCEPT'
  | 'MASTER_INVITE_REJECT'
  | 'METADATA_INSTANCE_CREATE'
  | 'METADATA_INSTANCE_DELETE'
  | 'METADATA_INSTANCE_UPDATE'
  | 'METADATA_TEMPLATE_CREATE'
  | 'METADATA_TEMPLATE_DELETE'
  | 'METADATA_TEMPLATE_UPDATE'
  | 'MOVE'
  | 'NEW_USER'
  | 'PREVIEW'
  | 'REMOVE_DEVICE_ASSOCIATION'
  | 'REMOVE_LOGIN_ACTIVITY_DEVICE'
  | 'RENAME'
  | 'RETENTION_POLICY_ASSIGNMENT_ADD'
  | 'SHARE'
  | 'SHARE_EXPIRATION'
  | 'SHIELD_ALERT'
  | 'SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED'
  | 'SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED_MISSING_JUSTIFICATION'
  | 'SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED'
  | 'SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED_MISSING_JUSTIFICATION'
  | 'SHIELD_JUSTIFICATION_APPROVAL'
  | 'SHIELD_SHARED_LINK_ACCESS_BLOCKED'
  | 'SHIELD_SHARED_LINK_STATUS_RESTRICTED_ON_CREATE'
  | 'SHIELD_SHARED_LINK_STATUS_RESTRICTED_ON_UPDATE'
  | 'SIGN_DOCUMENT_ASSIGNED'
  | 'SIGN_DOCUMENT_CANCELLED'
  | 'SIGN_DOCUMENT_COMPLETED'
  | 'SIGN_DOCUMENT_CONVERTED'
  | 'SIGN_DOCUMENT_CREATED'
  | 'SIGN_DOCUMENT_DECLINED'
  | 'SIGN_DOCUMENT_EXPIRED'
  | 'SIGN_DOCUMENT_SIGNED'
  | 'SIGN_DOCUMENT_VIEWED_BY_SIGNED'
  | 'SIGNER_DOWNLOADED'
  | 'SIGNER_FORWARDED'
  | 'STORAGE_EXPIRATION'
  | 'TAG_ITEM_CREATE'
  | 'TASK_ASSIGNMENT_CREATE'
  | 'TASK_ASSIGNMENT_DELETE'
  | 'TASK_ASSIGNMENT_UPDATE'
  | 'TASK_CREATE'
  | 'TASK_UPDATE'
  | 'TERMS_OF_SERVICE_ACCEPT'
  | 'TERMS_OF_SERVICE_REJECT'
  | 'UNDELETE'
  | 'UNLOCK'
  | 'UNSHARE'
  | 'UPDATE_COLLABORATION_EXPIRATION'
  | 'UPDATE_SHARE_EXPIRATION'
  | 'UPLOAD'
  | 'USER_AUTHENTICATE_OAUTH2_ACCESS_TOKEN_CREATE'
  | 'WATERMARK_LABEL_CREATE'
  | 'WATERMARK_LABEL_DELETE';
export interface EventAdditionalDetailsField {}
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
export type FileOrFolderOrWebLink = File | Folder | WebLink;
export type LegalHoldPolicyAssignment = LegalHoldPolicyAssignmentBase & {
  readonly legalHoldPolicy?: LegalHoldPolicyMini;
  readonly assignedTo?: FileOrFolderOrWebLink;
  readonly assignedBy?: UserMini;
  readonly assignedAt?: string;
  readonly deletedAt?: string;
};
export interface LegalHoldPolicyAssignments {
  readonly limit?: number;
  readonly nextMarker?: string;
  readonly prevMarker?: string;
  readonly entries?: readonly LegalHoldPolicyAssignment[];
}
export type FileVersionLegalHoldTypeField = 'file_version_legal_hold';
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
  readonly nextMarker?: string;
  readonly prevMarker?: string;
  readonly entries?: readonly FileVersionLegalHold[];
}
export type CollaborationTypeField = 'collaboration';
export type CollaborationRoleField =
  | 'editor'
  | 'viewer'
  | 'previewer'
  | 'uploader'
  | 'previewer uploader'
  | 'viewer uploader'
  | 'co-owner'
  | 'owner';
export type CollaborationStatusField = 'accepted' | 'pending' | 'rejected';
export interface CollaborationAcceptanceRequirementsStatusTermsOfServiceRequirementField {
  readonly isAccepted?: boolean;
  readonly termsOfService?: TermsOfServiceBase;
}
export interface CollaborationAcceptanceRequirementsStatusStrongPasswordRequirementField {
  readonly enterpriseHasStrongPasswordRequiredForExternalUsers?: boolean;
  readonly userHasStrongPassword?: boolean;
}
export interface CollaborationAcceptanceRequirementsStatusTwoFactorAuthenticationRequirementField {
  readonly enterpriseHasTwoFactorAuthEnabled?: boolean;
  readonly userHasTwoFactorAuthenticationEnabled?: boolean;
}
export interface CollaborationAcceptanceRequirementsStatusField {
  readonly termsOfServiceRequirement?: CollaborationAcceptanceRequirementsStatusTermsOfServiceRequirementField;
  readonly strongPasswordRequirement?: CollaborationAcceptanceRequirementsStatusStrongPasswordRequirementField;
  readonly twoFactorAuthenticationRequirement?: CollaborationAcceptanceRequirementsStatusTwoFactorAuthenticationRequirementField;
}
export interface Collaboration {
  readonly id: string;
  readonly type: CollaborationTypeField;
  readonly item?: FileOrFolderOrWebLink;
  readonly accessibleBy?: GroupMiniOrUserCollaborations;
  readonly inviteEmail?: string;
  readonly role?: CollaborationRoleField;
  readonly expiresAt?: string;
  readonly isAccessOnly?: boolean;
  readonly status?: CollaborationStatusField;
  readonly acknowledgedAt?: string;
  readonly createdBy?: UserCollaborations;
  readonly createdAt?: string;
  readonly modifiedAt?: string;
  readonly acceptanceRequirementsStatus?: CollaborationAcceptanceRequirementsStatusField;
}
export type CollaborationsOrderDirectionField = 'ASC' | 'DESC';
export interface CollaborationsOrderField {
  readonly by?: string;
  readonly direction?: CollaborationsOrderDirectionField;
}
export interface Collaborations {
  readonly totalCount?: number;
  readonly limit?: number;
  readonly offset?: number;
  readonly order?: readonly CollaborationsOrderField[];
  readonly entries?: readonly Collaboration[];
}
export type FileOrFolder = File | Folder;
export interface MetadataQueryResults {
  readonly entries?: readonly FileOrFolder[];
  readonly limit?: number;
  readonly nextMarker?: string;
}
export type WebhookInvocationTypeField = 'webhook_event';
export type WebhookInvocationTriggerField =
  | 'FILE.UPLOADED'
  | 'FILE.PREVIEWED'
  | 'FILE.DOWNLOADED'
  | 'FILE.TRASHED'
  | 'FILE.DELETED'
  | 'FILE.RESTORED'
  | 'FILE.COPIED'
  | 'FILE.MOVED'
  | 'FILE.LOCKED'
  | 'FILE.UNLOCKED'
  | 'FILE.RENAMED'
  | 'COMMENT.CREATED'
  | 'COMMENT.UPDATED'
  | 'COMMENT.DELETED'
  | 'TASK_ASSIGNMENT.CREATED'
  | 'TASK_ASSIGNMENT.UPDATED'
  | 'METADATA_INSTANCE.CREATED'
  | 'METADATA_INSTANCE.UPDATED'
  | 'METADATA_INSTANCE.DELETED'
  | 'FOLDER.CREATED'
  | 'FOLDER.RENAMED'
  | 'FOLDER.DOWNLOADED'
  | 'FOLDER.RESTORED'
  | 'FOLDER.DELETED'
  | 'FOLDER.COPIED'
  | 'FOLDER.MOVED'
  | 'FOLDER.TRASHED'
  | 'WEBHOOK.DELETED'
  | 'COLLABORATION.CREATED'
  | 'COLLABORATION.ACCEPTED'
  | 'COLLABORATION.REJECTED'
  | 'COLLABORATION.REMOVED'
  | 'COLLABORATION.UPDATED'
  | 'SHARED_LINK.DELETED'
  | 'SHARED_LINK.CREATED'
  | 'SHARED_LINK.UPDATED'
  | 'SIGN_REQUEST.COMPLETED'
  | 'SIGN_REQUEST.DECLINED'
  | 'SIGN_REQUEST.EXPIRED'
  | 'SIGN_REQUEST.SIGNER_EMAIL_BOUNCED';
export interface WebhookInvocation {
  readonly id?: string;
  readonly type?: WebhookInvocationTypeField;
  readonly webhook?: Webhook;
  readonly createdBy?: UserMini;
  readonly createdAt?: string;
  readonly trigger?: WebhookInvocationTriggerField;
  readonly source?: FileOrFolder;
}
export type SkillInvocationTypeField = 'skill_invocation';
export type SkillInvocationSkillTypeField = 'skill';
export interface SkillInvocationSkillField {
  readonly id?: string;
  readonly type?: SkillInvocationSkillTypeField;
  readonly name?: string;
  readonly apiKey?: string;
}
export type SkillInvocationTokenReadTokenTypeField = 'bearer';
export interface SkillInvocationTokenReadField {
  readonly accessToken?: string;
  readonly expiresIn?: number;
  readonly tokenType?: SkillInvocationTokenReadTokenTypeField;
  readonly restrictedTo?: string;
}
export type SkillInvocationTokenWriteTokenTypeField = 'bearer';
export interface SkillInvocationTokenWriteField {
  readonly accessToken?: string;
  readonly expiresIn?: number;
  readonly tokenType?: SkillInvocationTokenWriteTokenTypeField;
  readonly restrictedTo?: string;
}
export interface SkillInvocationTokenField {
  readonly read?: SkillInvocationTokenReadField;
  readonly write?: SkillInvocationTokenWriteField;
}
export type SkillInvocationStatusStateField =
  | 'invoked'
  | 'processing'
  | 'success'
  | 'transient_failure'
  | 'permanent_failure';
export interface SkillInvocationStatusField {
  readonly state?: SkillInvocationStatusStateField;
  readonly message?: string;
  readonly errorCode?: string;
  readonly additionalInfo?: string;
}
export type SkillInvocationEnterpriseTypeField = 'enterprise';
export interface SkillInvocationEnterpriseField {
  readonly id?: string;
  readonly type?: SkillInvocationEnterpriseTypeField;
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
export type FolderFullSyncStateField =
  | 'synced'
  | 'not_synced'
  | 'partially_synced';
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
  readonly extraData?: {
    readonly [key: string]: {
      readonly [key: string]: Metadata;
    };
  };
}
export type FolderFullAllowedSharedLinkAccessLevelsField =
  | 'open'
  | 'company'
  | 'collaborators';
export type FolderFullAllowedInviteeRolesField =
  | 'editor'
  | 'viewer'
  | 'previewer'
  | 'uploader'
  | 'previewer uploader'
  | 'viewer uploader'
  | 'co-owner';
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
  readonly hasCollaborations?: boolean;
  readonly permissions?: FolderFullPermissionsField;
  readonly tags?: readonly string[];
  readonly canNonOwnersInvite?: boolean;
  readonly isExternallyOwned?: boolean;
  readonly metadata?: FolderFullMetadataField;
  readonly isCollaborationRestrictedToEnterprise?: boolean;
  readonly allowedSharedLinkAccessLevels?: readonly FolderFullAllowedSharedLinkAccessLevelsField[];
  readonly allowedInviteeRoles?: readonly FolderFullAllowedInviteeRolesField[];
  readonly watermarkInfo?: FolderFullWatermarkInfoField;
  readonly isAccessibleViaSharedLink?: boolean;
  readonly canNonOwnersViewCollaborators?: boolean;
  readonly classification?: FolderFullClassificationField;
};
export type FileFullOrFolderFullOrWebLink = FileFull | FolderFull | WebLink;
export interface SearchResultWithSharedLink {
  readonly accessibleViaSharedLink?: string;
  readonly item?: FileFullOrFolderFullOrWebLink;
  readonly type?: string;
}
export type SearchResultsWithSharedLinksTypeField =
  'search_results_with_shared_links';
export interface SearchResultsWithSharedLinks {
  readonly totalCount?: number;
  readonly limit?: number;
  readonly offset?: number;
  readonly type: SearchResultsWithSharedLinksTypeField;
  readonly entries?: readonly SearchResultWithSharedLink[];
}
export type SearchResultsTypeField = 'search_results_items';
export interface SearchResults {
  readonly totalCount?: number;
  readonly limit?: number;
  readonly offset?: number;
  readonly type: SearchResultsTypeField;
  readonly entries?: readonly FileFullOrFolderFullOrWebLink[];
}
export type SearchResultsOrSearchResultsWithSharedLinks =
  | SearchResults
  | SearchResultsWithSharedLinks;
export type RecentItemInteractionTypeField =
  | 'item_preview'
  | 'item_upload'
  | 'item_comment'
  | 'item_open'
  | 'item_modify';
export interface RecentItem {
  readonly type?: string;
  readonly item?: FileFullOrFolderFullOrWebLink;
  readonly interactionType?: RecentItemInteractionTypeField;
  readonly interactedAt?: string;
  readonly interactionSharedLink?: string;
}
export interface RecentItems {
  readonly limit?: number;
  readonly nextMarker?: string;
  readonly prevMarker?: string;
  readonly entries?: readonly RecentItem[];
}
export type WorkflowMiniTypeField = 'workflow';
export interface WorkflowMini {
  readonly id?: string;
  readonly type?: WorkflowMiniTypeField;
  readonly name?: string;
  readonly description?: string;
  readonly isEnabled?: boolean;
}
export type WorkflowFlowsTypeField = 'flow';
export type WorkflowFlowsTriggerTypeField = 'trigger';
export type WorkflowFlowsTriggerTriggerTypeField = 'WORKFLOW_MANUAL_START';
export type WorkflowFlowsTriggerScopeTypeField = 'trigger_scope';
export type WorkflowFlowsTriggerScopeObjectTypeField = 'folder';
export interface WorkflowFlowsTriggerScopeObjectField {
  readonly type?: WorkflowFlowsTriggerScopeObjectTypeField;
  readonly id?: string;
}
export interface WorkflowFlowsTriggerScopeField {
  readonly type?: WorkflowFlowsTriggerScopeTypeField;
  readonly ref?: string;
  readonly object?: WorkflowFlowsTriggerScopeObjectField;
}
export interface WorkflowFlowsTriggerField {
  readonly type?: WorkflowFlowsTriggerTypeField;
  readonly triggerType?: WorkflowFlowsTriggerTriggerTypeField;
  readonly scope?: readonly WorkflowFlowsTriggerScopeField[];
}
export type WorkflowFlowsOutcomesTypeField = 'outcome';
export type WorkflowFlowsOutcomesActionTypeField =
  | 'add_metadata'
  | 'assign_task'
  | 'copy_file'
  | 'copy_folder'
  | 'create_folder'
  | 'delete_file'
  | 'delete_folder'
  | 'lock_file'
  | 'move_file'
  | 'move_folder'
  | 'remove_watermark_file'
  | 'rename_folder'
  | 'restore_folder'
  | 'share_file'
  | 'share_folder'
  | 'unlock_file'
  | 'upload_file'
  | 'wait_for_task'
  | 'watermark_file'
  | 'go_back_to_step'
  | 'apply_file_classification'
  | 'apply_folder_classification'
  | 'send_notification';
export type WorkflowFlowsOutcomesIfRejectedTypeField = 'outcome';
export type WorkflowFlowsOutcomesIfRejectedActionTypeField =
  | 'add_metadata'
  | 'assign_task'
  | 'copy_file'
  | 'copy_folder'
  | 'create_folder'
  | 'delete_file'
  | 'delete_folder'
  | 'lock_file'
  | 'move_file'
  | 'move_folder'
  | 'remove_watermark_file'
  | 'rename_folder'
  | 'restore_folder'
  | 'share_file'
  | 'share_folder'
  | 'unlock_file'
  | 'upload_file'
  | 'wait_for_task'
  | 'watermark_file'
  | 'go_back_to_step'
  | 'apply_file_classification'
  | 'apply_folder_classification'
  | 'send_notification';
export interface WorkflowFlowsOutcomesIfRejectedField {
  readonly id?: string;
  readonly type?: WorkflowFlowsOutcomesIfRejectedTypeField;
  readonly name?: string;
  readonly actionType?: WorkflowFlowsOutcomesIfRejectedActionTypeField;
}
export interface WorkflowFlowsOutcomesField {
  readonly id?: string;
  readonly type?: WorkflowFlowsOutcomesTypeField;
  readonly name?: string;
  readonly actionType?: WorkflowFlowsOutcomesActionTypeField;
  readonly ifRejected?: readonly WorkflowFlowsOutcomesIfRejectedField[];
}
export interface WorkflowFlowsField {
  readonly id?: string;
  readonly type?: WorkflowFlowsTypeField;
  readonly trigger?: WorkflowFlowsTriggerField;
  readonly outcomes?: readonly WorkflowFlowsOutcomesField[];
  readonly createdAt?: string;
  readonly createdBy?: UserBase;
}
export type Workflow = WorkflowMini & {
  readonly flows?: readonly WorkflowFlowsField[];
};
export interface Workflows {
  readonly limit?: number;
  readonly nextMarker?: string;
  readonly prevMarker?: string;
  readonly entries?: readonly Workflow[];
}
export type WorkflowFull = Workflow & {
  readonly createdAt?: string;
  readonly modifiedAt?: string;
  readonly createdBy?: UserBase;
  readonly modifiedBy?: UserBase;
};
export type ZipDownloadNameConflictsTypeField = 'file' | 'folder';
export interface ZipDownloadNameConflictsField {
  readonly id?: string;
  readonly type?: ZipDownloadNameConflictsTypeField;
  readonly originalName?: string;
  readonly downloadName?: string;
}
export interface ZipDownload {
  readonly downloadUrl?: string;
  readonly statusUrl?: string;
  readonly expiresAt?: string;
  readonly nameConflicts?: readonly (readonly ZipDownloadNameConflictsField[])[];
}
export type ZipDownloadStatusStateField =
  | 'in_progress'
  | 'failed'
  | 'succeeded';
export interface ZipDownloadStatus {
  readonly totalFileCount?: number;
  readonly downloadedFileCount?: number;
  readonly skippedFileCount?: number;
  readonly skippedFolderCount?: number;
  readonly state?: ZipDownloadStatusStateField;
}
export type KeywordSkillCardTypeField = 'skill_card';
export type KeywordSkillCardSkillCardTypeField = 'keyword';
export interface KeywordSkillCardSkillCardTitleField {
  readonly code?: string;
  readonly message: string;
}
export type KeywordSkillCardSkillTypeField = 'service';
export interface KeywordSkillCardSkillField {
  readonly type: KeywordSkillCardSkillTypeField;
  readonly id: string;
}
export type KeywordSkillCardInvocationTypeField = 'skill_invocation';
export interface KeywordSkillCardInvocationField {
  readonly type: KeywordSkillCardInvocationTypeField;
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
export type IntegrationMappingPartnerItemSlackTypeField = 'channel';
export interface IntegrationMappingPartnerItemSlack {
  readonly type: IntegrationMappingPartnerItemSlackTypeField;
  readonly id: string;
  readonly slackWorkspaceId?: string;
  readonly slackOrgId?: string;
}
export type IntegrationMappingTypeField = 'integration_mapping';
export type IntegrationMapping = IntegrationMappingBase & {
  readonly type: IntegrationMappingTypeField;
  readonly partnerItem: IntegrationMappingPartnerItemSlack;
  readonly boxItem: FolderMini;
  readonly isManuallyCreated?: boolean;
  readonly options?: IntegrationMappingSlackOptions;
  readonly createdBy?: UserIntegrationMappings;
  readonly modifiedBy?: UserIntegrationMappings;
  readonly createdAt?: string;
  readonly modifiedAt?: string;
};
export interface IntegrationMappings {
  readonly limit?: number;
  readonly nextMarker?: string;
  readonly entries?: readonly IntegrationMapping[];
}
export type IntegrationMappingBoxItemSlackTypeField = 'folder';
export interface IntegrationMappingBoxItemSlack {
  readonly type: IntegrationMappingBoxItemSlackTypeField;
  readonly id: string;
}
export interface IntegrationMappingSlackCreateRequest {
  readonly partnerItem: IntegrationMappingPartnerItemSlack;
  readonly boxItem: IntegrationMappingBoxItemSlack;
  readonly options?: IntegrationMappingSlackOptions;
}
export type TimelineSkillCardTypeField = 'skill_card';
export type TimelineSkillCardSkillCardTypeField = 'timeline';
export interface TimelineSkillCardSkillCardTitleField {
  readonly code?: string;
  readonly message: string;
}
export type TimelineSkillCardSkillTypeField = 'service';
export interface TimelineSkillCardSkillField {
  readonly type: TimelineSkillCardSkillTypeField;
  readonly id: string;
}
export type TimelineSkillCardInvocationTypeField = 'skill_invocation';
export interface TimelineSkillCardInvocationField {
  readonly type: TimelineSkillCardInvocationTypeField;
  readonly id: string;
}
export interface TimelineSkillCardEntriesAppearsField {
  readonly start?: number;
  readonly end?: number;
}
export interface TimelineSkillCardEntriesField {
  readonly text?: string;
  readonly appears?: readonly TimelineSkillCardEntriesAppearsField[];
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
export type TranscriptSkillCardTypeField = 'skill_card';
export type TranscriptSkillCardSkillCardTypeField = 'transcript';
export interface TranscriptSkillCardSkillCardTitleField {
  readonly code?: string;
  readonly message: string;
}
export type TranscriptSkillCardSkillTypeField = 'service';
export interface TranscriptSkillCardSkillField {
  readonly type: TranscriptSkillCardSkillTypeField;
  readonly id: string;
}
export type TranscriptSkillCardInvocationTypeField = 'skill_invocation';
export interface TranscriptSkillCardInvocationField {
  readonly type: TranscriptSkillCardInvocationTypeField;
  readonly id: string;
}
export interface TranscriptSkillCardEntriesAppearsField {
  readonly start?: number;
}
export interface TranscriptSkillCardEntriesField {
  readonly text?: string;
  readonly appears?: readonly TranscriptSkillCardEntriesAppearsField[];
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
export type StatusSkillCardTypeField = 'skill_card';
export type StatusSkillCardSkillCardTypeField = 'status';
export interface StatusSkillCardSkillCardTitleField {
  readonly code?: string;
  readonly message: string;
}
export type StatusSkillCardStatusCodeField =
  | 'invoked'
  | 'processing'
  | 'success'
  | 'transient_failure'
  | 'permanent_failure';
export interface StatusSkillCardStatusField {
  readonly code: StatusSkillCardStatusCodeField;
  readonly message?: string;
}
export type StatusSkillCardSkillTypeField = 'service';
export interface StatusSkillCardSkillField {
  readonly type: StatusSkillCardSkillTypeField;
  readonly id: string;
}
export type StatusSkillCardInvocationTypeField = 'skill_invocation';
export interface StatusSkillCardInvocationField {
  readonly type: StatusSkillCardInvocationTypeField;
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
export type KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard =
  KeywordSkillCard | StatusSkillCard | TimelineSkillCard | TranscriptSkillCard;
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
export type SignRequestCreateSignerRoleField =
  | 'signer'
  | 'approver'
  | 'final_copy_reader';
export interface SignRequestCreateSigner {
  readonly email?: string;
  readonly role?: SignRequestCreateSignerRoleField;
  readonly isInPerson?: boolean;
  readonly order?: number;
  readonly embedUrlExternalUserId?: string;
  readonly redirectUrl?: string;
  readonly declinedRedirectUrl?: string;
  readonly loginRequired?: boolean;
  readonly verificationPhoneNumber?: string;
  readonly password?: string;
  readonly signerGroupId?: string;
}
export interface SignRequestPrefillTag {
  readonly documentTagId?: string;
  readonly textValue?: string;
  readonly checkboxValue?: boolean;
  readonly dateValue?: string;
}
export type SignRequestSignerInputTypeField =
  | 'signature'
  | 'date'
  | 'text'
  | 'checkbox'
  | 'radio'
  | 'dropdown';
export type SignRequestSignerInputContentTypeField =
  | 'signature'
  | 'initial'
  | 'stamp'
  | 'date'
  | 'checkbox'
  | 'text'
  | 'full_name'
  | 'first_name'
  | 'last_name'
  | 'company'
  | 'title'
  | 'email'
  | 'attachment'
  | 'radio'
  | 'dropdown';
export type SignRequestSignerInput = SignRequestPrefillTag & {
  readonly type?: SignRequestSignerInputTypeField;
  readonly contentType?: SignRequestSignerInputContentTypeField;
  readonly pageIndex: number;
};
export type SignRequestSignerSignerDecisionTypeField = 'signed' | 'declined';
export interface SignRequestSignerSignerDecisionField {
  readonly type?: SignRequestSignerSignerDecisionTypeField;
  readonly finalizedAt?: string;
  readonly additionalInfo?: string;
}
export type SignRequestSigner = SignRequestCreateSigner & {
  readonly hasViewedDocument?: boolean;
  readonly signerDecision?: SignRequestSignerSignerDecisionField;
  readonly inputs?: readonly SignRequestSignerInput[];
  readonly embedUrl?: string;
  readonly iframeableEmbedUrl?: string;
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
export type SignRequestTypeField = 'sign-request';
export type SignRequestStatusField =
  | 'converting'
  | 'created'
  | 'sent'
  | 'viewed'
  | 'signed'
  | 'cancelled'
  | 'declined'
  | 'error_converting'
  | 'error_sending'
  | 'expired'
  | 'finalizing'
  | 'error_finalizing';
export interface SignRequestSignFilesField {
  readonly files?: readonly FileMini[];
  readonly isReadyForDownload?: boolean;
}
export type SignRequest = SignRequestBase & {
  readonly type?: SignRequestTypeField;
  readonly sourceFiles?: readonly FileBase[];
  readonly signers?: readonly SignRequestSigner[];
  readonly signatureColor?: string;
  readonly id?: string;
  readonly prepareUrl?: string;
  readonly signingLog?: FileMini;
  readonly status?: SignRequestStatusField;
  readonly signFiles?: SignRequestSignFilesField;
  readonly autoExpireAt?: string;
};
export interface SignRequests {
  readonly limit?: number;
  readonly nextMarker?: string;
  readonly entries?: readonly SignRequest[];
}
export type SignRequestCreateRequestSignatureColorField =
  | 'blue'
  | 'black'
  | 'red';
export type SignRequestCreateRequest = SignRequestBase & {
  readonly sourceFiles?: readonly FileBase[];
  readonly signatureColor?: SignRequestCreateRequestSignatureColorField;
  readonly signers: readonly SignRequestCreateSigner[];
};
export type TemplateSignerInputTypeField =
  | 'signature'
  | 'date'
  | 'text'
  | 'checkbox'
  | 'attachment'
  | 'radio'
  | 'dropdown';
export type TemplateSignerInputContentTypeField =
  | 'signature'
  | 'initial'
  | 'stamp'
  | 'date'
  | 'checkbox'
  | 'text'
  | 'full_name'
  | 'first_name'
  | 'last_name'
  | 'company'
  | 'title'
  | 'email'
  | 'attachment'
  | 'radio'
  | 'dropdown';
export interface TemplateSignerInputCoordinatesField {
  readonly x?: number;
  readonly y?: number;
}
export interface TemplateSignerInputDimensionsField {
  readonly width?: number;
  readonly height?: number;
}
export type TemplateSignerInput = SignRequestPrefillTag & {
  readonly type?: TemplateSignerInputTypeField;
  readonly contentType?: TemplateSignerInputContentTypeField;
  readonly isRequired?: boolean;
  readonly pageIndex: number;
  readonly documentId?: string;
  readonly dropdownChoices?: readonly string[];
  readonly groupId?: string;
  readonly coordinates?: TemplateSignerInputCoordinatesField;
  readonly dimensions?: TemplateSignerInputDimensionsField;
  readonly label?: string;
};
export type TemplateSignerRoleField =
  | 'signer'
  | 'approver'
  | 'final_copy_reader';
export interface TemplateSigner {
  readonly inputs?: readonly TemplateSignerInput[];
  readonly email?: string;
  readonly role?: TemplateSignerRoleField;
  readonly isInPerson?: boolean;
  readonly order?: number;
  readonly signerGroupId?: string;
}
export type SignTemplateTypeField = 'sign-template';
export type SignTemplateAdditionalInfoNonEditableField =
  | 'email_subject'
  | 'email_message'
  | 'name'
  | 'days_valid'
  | 'signers'
  | 'source_files';
export type SignTemplateAdditionalInfoRequiredSignersField = 'email';
export interface SignTemplateAdditionalInfoRequiredField {
  readonly signers?: readonly (readonly SignTemplateAdditionalInfoRequiredSignersField[])[];
}
export interface SignTemplateAdditionalInfoField {
  readonly nonEditable?: readonly SignTemplateAdditionalInfoNonEditableField[];
  readonly required?: SignTemplateAdditionalInfoRequiredField;
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
  readonly type?: SignTemplateTypeField;
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
export interface SignTemplates {
  readonly limit?: number;
  readonly nextMarker?: string;
  readonly prevMarker?: string;
  readonly entries?: readonly SignTemplate[];
}
export interface ShieldInformationBarrierReportDetailsDetailsField {
  readonly folderId?: string;
}
export interface ShieldInformationBarrierReportDetails {
  readonly details?: ShieldInformationBarrierReportDetailsDetailsField;
}
export type ShieldInformationBarrierReportStatusField =
  | 'pending'
  | 'error'
  | 'done'
  | 'cancelled';
export type ShieldInformationBarrierReport =
  ShieldInformationBarrierReportBase & {
    readonly shieldInformationBarrier?: ShieldInformationBarrierReference;
    readonly status?: ShieldInformationBarrierReportStatusField;
    readonly details?: ShieldInformationBarrierReportDetails;
    readonly createdAt?: string;
    readonly createdBy?: UserBase;
    readonly updatedAt?: string;
  };
export interface ShieldInformationBarrierReports {
  readonly limit?: number;
  readonly nextMarker?: string;
  readonly entries?: readonly ShieldInformationBarrierReport[];
}
export type TrackingCodeTypeField = 'tracking_code';
export interface TrackingCode {
  readonly type?: TrackingCodeTypeField;
  readonly name?: string;
  readonly value?: string;
}
export type UserFullRoleField = 'admin' | 'coadmin' | 'user';
export type UserFullEnterpriseTypeField = 'enterprise';
export interface UserFullEnterpriseField {
  readonly id?: string;
  readonly type?: UserFullEnterpriseTypeField;
  readonly name?: string;
}
export type UserFull = User & {
  readonly role?: UserFullRoleField;
  readonly trackingCodes?: readonly TrackingCode[];
  readonly canSeeManagedUsers?: boolean;
  readonly isSyncEnabled?: boolean;
  readonly isExternalCollabRestricted?: boolean;
  readonly isExemptFromDeviceLimits?: boolean;
  readonly isExemptFromLoginVerification?: boolean;
  readonly enterprise?: UserFullEnterpriseField;
  readonly myTags?: readonly string[];
  readonly hostname?: string;
  readonly isPlatformAccessOnly?: boolean;
  readonly externalAppUserId?: string;
};
export type UsersOrderDirectionField = 'ASC' | 'DESC';
export interface UsersOrderField {
  readonly by?: string;
  readonly direction?: UsersOrderDirectionField;
}
export interface Users {
  readonly totalCount?: number;
  readonly limit?: number;
  readonly offset?: number;
  readonly order?: readonly UsersOrderField[];
  readonly entries?: readonly UserFull[];
}
export type MetadataFieldFilterString = {
  readonly [key: string]: string;
};
export type MetadataFieldFilterFloat = {
  readonly [key: string]: number;
};
export type MetadataFieldFilterMultiSelect = {
  readonly [key: string]: readonly string[];
};
export interface MetadataFieldFilterFloatRangeValue {
  readonly lt?: number;
  readonly gt?: number;
}
export type MetadataFieldFilterFloatRange = {
  readonly [key: string]: MetadataFieldFilterFloatRangeValue;
};
export interface MetadataFieldFilterDateRangeValue {
  readonly lt?: string;
  readonly gt?: string;
}
export type MetadataFieldFilterDateRange = {
  readonly [key: string]: MetadataFieldFilterDateRangeValue;
};
export type MetadataFilterScopeField =
  | 'global'
  | 'enterprise'
  | 'enterprise_{enterprise_id}';
export type MetadataFilterFiltersField =
  | MetadataFieldFilterString
  | MetadataFieldFilterFloat
  | MetadataFieldFilterMultiSelect
  | MetadataFieldFilterFloatRange
  | MetadataFieldFilterDateRange;
export interface MetadataFilter {
  readonly scope?: MetadataFilterScopeField;
  readonly templateKey?: string;
  readonly filters?: MetadataFilterFiltersField;
}
export function serializePostOAuth2TokenGrantTypeField(
  val: PostOAuth2TokenGrantTypeField
): SerializedData {
  return val;
}
export function deserializePostOAuth2TokenGrantTypeField(
  val: any
): PostOAuth2TokenGrantTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "PostOAuth2TokenGrantTypeField"';
  }
  if (val == 'authorization_code') {
    return 'authorization_code';
  }
  if (val == 'refresh_token') {
    return 'refresh_token';
  }
  if (val == 'client_credentials') {
    return 'client_credentials';
  }
  if (val == 'urn:ietf:params:oauth:grant-type:jwt-bearer') {
    return 'urn:ietf:params:oauth:grant-type:jwt-bearer';
  }
  if (val == 'urn:ietf:params:oauth:grant-type:token-exchange') {
    return 'urn:ietf:params:oauth:grant-type:token-exchange';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializePostOAuth2TokenSubjectTokenTypeField(
  val: PostOAuth2TokenSubjectTokenTypeField
): SerializedData {
  return val;
}
export function deserializePostOAuth2TokenSubjectTokenTypeField(
  val: any
): PostOAuth2TokenSubjectTokenTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "PostOAuth2TokenSubjectTokenTypeField"';
  }
  if (val == 'urn:ietf:params:oauth:token-type:access_token') {
    return 'urn:ietf:params:oauth:token-type:access_token';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializePostOAuth2TokenActorTokenTypeField(
  val: PostOAuth2TokenActorTokenTypeField
): SerializedData {
  return val;
}
export function deserializePostOAuth2TokenActorTokenTypeField(
  val: any
): PostOAuth2TokenActorTokenTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "PostOAuth2TokenActorTokenTypeField"';
  }
  if (val == 'urn:ietf:params:oauth:token-type:id_token') {
    return 'urn:ietf:params:oauth:token-type:id_token';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializePostOAuth2TokenBoxSubjectTypeField(
  val: PostOAuth2TokenBoxSubjectTypeField
): SerializedData {
  return val;
}
export function deserializePostOAuth2TokenBoxSubjectTypeField(
  val: any
): PostOAuth2TokenBoxSubjectTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "PostOAuth2TokenBoxSubjectTypeField"';
  }
  if (val == 'enterprise') {
    return 'enterprise';
  }
  if (val == 'user') {
    return 'user';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializePostOAuth2Token(val: PostOAuth2Token): SerializedData {
  return {
    ['grant_type']: serializePostOAuth2TokenGrantTypeField(val.grantType),
    ['client_id']: val.clientId == void 0 ? void 0 : val.clientId,
    ['client_secret']: val.clientSecret == void 0 ? void 0 : val.clientSecret,
    ['code']: val.code == void 0 ? void 0 : val.code,
    ['refresh_token']: val.refreshToken == void 0 ? void 0 : val.refreshToken,
    ['assertion']: val.assertion == void 0 ? void 0 : val.assertion,
    ['subject_token']: val.subjectToken == void 0 ? void 0 : val.subjectToken,
    ['subject_token_type']:
      val.subjectTokenType == void 0
        ? void 0
        : serializePostOAuth2TokenSubjectTokenTypeField(val.subjectTokenType),
    ['actor_token']: val.actorToken == void 0 ? void 0 : val.actorToken,
    ['actor_token_type']:
      val.actorTokenType == void 0
        ? void 0
        : serializePostOAuth2TokenActorTokenTypeField(val.actorTokenType),
    ['scope']: val.scope == void 0 ? void 0 : val.scope,
    ['resource']: val.resource == void 0 ? void 0 : val.resource,
    ['box_subject_type']:
      val.boxSubjectType == void 0
        ? void 0
        : serializePostOAuth2TokenBoxSubjectTypeField(val.boxSubjectType),
    ['box_subject_id']: val.boxSubjectId == void 0 ? void 0 : val.boxSubjectId,
    ['box_shared_link']:
      val.boxSharedLink == void 0 ? void 0 : val.boxSharedLink,
  };
}
export function deserializePostOAuth2Token(val: any): PostOAuth2Token {
  const grantType: PostOAuth2TokenGrantTypeField =
    deserializePostOAuth2TokenGrantTypeField(val.grant_type);
  const clientId: undefined | string =
    val.client_id == void 0 ? void 0 : val.client_id;
  const clientSecret: undefined | string =
    val.client_secret == void 0 ? void 0 : val.client_secret;
  const code: undefined | string = val.code == void 0 ? void 0 : val.code;
  const refreshToken: undefined | string =
    val.refresh_token == void 0 ? void 0 : val.refresh_token;
  const assertion: undefined | string =
    val.assertion == void 0 ? void 0 : val.assertion;
  const subjectToken: undefined | string =
    val.subject_token == void 0 ? void 0 : val.subject_token;
  const subjectTokenType: undefined | PostOAuth2TokenSubjectTokenTypeField =
    val.subject_token_type == void 0
      ? void 0
      : deserializePostOAuth2TokenSubjectTokenTypeField(val.subject_token_type);
  const actorToken: undefined | string =
    val.actor_token == void 0 ? void 0 : val.actor_token;
  const actorTokenType: undefined | PostOAuth2TokenActorTokenTypeField =
    val.actor_token_type == void 0
      ? void 0
      : deserializePostOAuth2TokenActorTokenTypeField(val.actor_token_type);
  const scope: undefined | string = val.scope == void 0 ? void 0 : val.scope;
  const resource: undefined | string =
    val.resource == void 0 ? void 0 : val.resource;
  const boxSubjectType: undefined | PostOAuth2TokenBoxSubjectTypeField =
    val.box_subject_type == void 0
      ? void 0
      : deserializePostOAuth2TokenBoxSubjectTypeField(val.box_subject_type);
  const boxSubjectId: undefined | string =
    val.box_subject_id == void 0 ? void 0 : val.box_subject_id;
  const boxSharedLink: undefined | string =
    val.box_shared_link == void 0 ? void 0 : val.box_shared_link;
  return {
    grantType: grantType,
    clientId: clientId,
    clientSecret: clientSecret,
    code: code,
    refreshToken: refreshToken,
    assertion: assertion,
    subjectToken: subjectToken,
    subjectTokenType: subjectTokenType,
    actorToken: actorToken,
    actorTokenType: actorTokenType,
    scope: scope,
    resource: resource,
    boxSubjectType: boxSubjectType,
    boxSubjectId: boxSubjectId,
    boxSharedLink: boxSharedLink,
  } satisfies PostOAuth2Token;
}
export function serializePostOAuth2TokenRefreshAccessTokenGrantTypeField(
  val: PostOAuth2TokenRefreshAccessTokenGrantTypeField
): SerializedData {
  return val;
}
export function deserializePostOAuth2TokenRefreshAccessTokenGrantTypeField(
  val: any
): PostOAuth2TokenRefreshAccessTokenGrantTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "PostOAuth2TokenRefreshAccessTokenGrantTypeField"';
  }
  if (val == 'refresh_token') {
    return 'refresh_token';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializePostOAuth2TokenRefreshAccessToken(
  val: PostOAuth2TokenRefreshAccessToken
): SerializedData {
  return {
    ['grant_type']: serializePostOAuth2TokenRefreshAccessTokenGrantTypeField(
      val.grantType
    ),
    ['client_id']: val.clientId,
    ['client_secret']: val.clientSecret,
    ['refresh_token']: val.refreshToken,
  };
}
export function deserializePostOAuth2TokenRefreshAccessToken(
  val: any
): PostOAuth2TokenRefreshAccessToken {
  const grantType: PostOAuth2TokenRefreshAccessTokenGrantTypeField =
    deserializePostOAuth2TokenRefreshAccessTokenGrantTypeField(val.grant_type);
  const clientId: string = val.client_id;
  const clientSecret: string = val.client_secret;
  const refreshToken: string = val.refresh_token;
  return {
    grantType: grantType,
    clientId: clientId,
    clientSecret: clientSecret,
    refreshToken: refreshToken,
  } satisfies PostOAuth2TokenRefreshAccessToken;
}
export function serializePostOAuth2Revoke(
  val: PostOAuth2Revoke
): SerializedData {
  return {
    ['client_id']: val.clientId == void 0 ? void 0 : val.clientId,
    ['client_secret']: val.clientSecret == void 0 ? void 0 : val.clientSecret,
    ['token']: val.token == void 0 ? void 0 : val.token,
  };
}
export function deserializePostOAuth2Revoke(val: any): PostOAuth2Revoke {
  const clientId: undefined | string =
    val.client_id == void 0 ? void 0 : val.client_id;
  const clientSecret: undefined | string =
    val.client_secret == void 0 ? void 0 : val.client_secret;
  const token: undefined | string = val.token == void 0 ? void 0 : val.token;
  return {
    clientId: clientId,
    clientSecret: clientSecret,
    token: token,
  } satisfies PostOAuth2Revoke;
}
export function serializeZipDownloadRequestItemsTypeField(
  val: ZipDownloadRequestItemsTypeField
): SerializedData {
  return val;
}
export function deserializeZipDownloadRequestItemsTypeField(
  val: any
): ZipDownloadRequestItemsTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "ZipDownloadRequestItemsTypeField"';
  }
  if (val == 'file') {
    return 'file';
  }
  if (val == 'folder') {
    return 'folder';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeZipDownloadRequestItemsField(
  val: ZipDownloadRequestItemsField
): SerializedData {
  return {
    ['type']: serializeZipDownloadRequestItemsTypeField(val.type),
    ['id']: val.id,
  };
}
export function deserializeZipDownloadRequestItemsField(
  val: any
): ZipDownloadRequestItemsField {
  const type: ZipDownloadRequestItemsTypeField =
    deserializeZipDownloadRequestItemsTypeField(val.type);
  const id: string = val.id;
  return { type: type, id: id } satisfies ZipDownloadRequestItemsField;
}
export function serializeZipDownloadRequest(
  val: ZipDownloadRequest
): SerializedData {
  return {
    ['items']: val.items.map(function (
      item: ZipDownloadRequestItemsField
    ): any {
      return serializeZipDownloadRequestItemsField(item);
    }) as readonly any[],
    ['download_file_name']:
      val.downloadFileName == void 0 ? void 0 : val.downloadFileName,
  };
}
export function deserializeZipDownloadRequest(val: any): ZipDownloadRequest {
  const items: readonly ZipDownloadRequestItemsField[] = sdIsList(val.items)
    ? (val.items.map(function (itm: SerializedData): any {
        return deserializeZipDownloadRequestItemsField(itm);
      }) as readonly any[])
    : [];
  const downloadFileName: undefined | string =
    val.download_file_name == void 0 ? void 0 : val.download_file_name;
  return {
    items: items,
    downloadFileName: downloadFileName,
  } satisfies ZipDownloadRequest;
}
export function serializeMetadataQueryOrderByDirectionField(
  val: MetadataQueryOrderByDirectionField
): SerializedData {
  return val;
}
export function deserializeMetadataQueryOrderByDirectionField(
  val: any
): MetadataQueryOrderByDirectionField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "MetadataQueryOrderByDirectionField"';
  }
  if (val == 'ASC') {
    return 'ASC';
  }
  if (val == 'DESC') {
    return 'DESC';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeMetadataQueryOrderByField(
  val: MetadataQueryOrderByField
): SerializedData {
  return {
    ['field_key']: val.fieldKey == void 0 ? void 0 : val.fieldKey,
    ['direction']:
      val.direction == void 0
        ? void 0
        : serializeMetadataQueryOrderByDirectionField(val.direction),
  };
}
export function deserializeMetadataQueryOrderByField(
  val: any
): MetadataQueryOrderByField {
  const fieldKey: undefined | string =
    val.field_key == void 0 ? void 0 : val.field_key;
  const direction: undefined | MetadataQueryOrderByDirectionField =
    val.direction == void 0
      ? void 0
      : deserializeMetadataQueryOrderByDirectionField(val.direction);
  return {
    fieldKey: fieldKey,
    direction: direction,
  } satisfies MetadataQueryOrderByField;
}
export function serializeMetadataQuery(val: MetadataQuery): SerializedData {
  return {
    ['from']: val.from,
    ['query']: val.query == void 0 ? void 0 : val.query,
    ['query_params']: val.queryParams == void 0 ? void 0 : val.queryParams,
    ['ancestor_folder_id']: val.ancestorFolderId,
    ['order_by']:
      val.orderBy == void 0
        ? void 0
        : (val.orderBy.map(function (item: MetadataQueryOrderByField): any {
            return serializeMetadataQueryOrderByField(item);
          }) as readonly any[]),
    ['limit']: val.limit == void 0 ? void 0 : val.limit,
    ['marker']: val.marker == void 0 ? void 0 : val.marker,
    ['fields']:
      val.fields == void 0
        ? void 0
        : (val.fields.map(function (item: string): any {
            return item;
          }) as readonly any[]),
  };
}
export function deserializeMetadataQuery(val: any): MetadataQuery {
  const from: string = val.from;
  const query: undefined | string = val.query == void 0 ? void 0 : val.query;
  const queryParams:
    | undefined
    | {
        readonly [key: string]: string;
      } = val.query_params == void 0 ? void 0 : val.query_params;
  const ancestorFolderId: string = val.ancestor_folder_id;
  const orderBy: undefined | readonly MetadataQueryOrderByField[] =
    val.order_by == void 0
      ? void 0
      : sdIsList(val.order_by)
      ? (val.order_by.map(function (itm: SerializedData): any {
          return deserializeMetadataQueryOrderByField(itm);
        }) as readonly any[])
      : [];
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
  const marker: undefined | string = val.marker == void 0 ? void 0 : val.marker;
  const fields: undefined | readonly string[] =
    val.fields == void 0
      ? void 0
      : sdIsList(val.fields)
      ? (val.fields.map(function (itm: SerializedData): any {
          return itm;
        }) as readonly any[])
      : [];
  return {
    from: from,
    query: query,
    queryParams: queryParams,
    ancestorFolderId: ancestorFolderId,
    orderBy: orderBy,
    limit: limit,
    marker: marker,
    fields: fields,
  } satisfies MetadataQuery;
}
export function serializeFileRequestUpdateRequestStatusField(
  val: FileRequestUpdateRequestStatusField
): SerializedData {
  return val;
}
export function deserializeFileRequestUpdateRequestStatusField(
  val: any
): FileRequestUpdateRequestStatusField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "FileRequestUpdateRequestStatusField"';
  }
  if (val == 'active') {
    return 'active';
  }
  if (val == 'inactive') {
    return 'inactive';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeFileRequestUpdateRequest(
  val: FileRequestUpdateRequest
): SerializedData {
  return {
    ['title']: val.title == void 0 ? void 0 : val.title,
    ['description']: val.description == void 0 ? void 0 : val.description,
    ['status']:
      val.status == void 0
        ? void 0
        : serializeFileRequestUpdateRequestStatusField(val.status),
    ['is_email_required']:
      val.isEmailRequired == void 0 ? void 0 : val.isEmailRequired,
    ['is_description_required']:
      val.isDescriptionRequired == void 0 ? void 0 : val.isDescriptionRequired,
    ['expires_at']: val.expiresAt == void 0 ? void 0 : val.expiresAt,
  };
}
export function deserializeFileRequestUpdateRequest(
  val: any
): FileRequestUpdateRequest {
  const title: undefined | string = val.title == void 0 ? void 0 : val.title;
  const description: undefined | string =
    val.description == void 0 ? void 0 : val.description;
  const status: undefined | FileRequestUpdateRequestStatusField =
    val.status == void 0
      ? void 0
      : deserializeFileRequestUpdateRequestStatusField(val.status);
  const isEmailRequired: undefined | boolean =
    val.is_email_required == void 0 ? void 0 : val.is_email_required;
  const isDescriptionRequired: undefined | boolean =
    val.is_description_required == void 0
      ? void 0
      : val.is_description_required;
  const expiresAt: undefined | string =
    val.expires_at == void 0 ? void 0 : val.expires_at;
  return {
    title: title,
    description: description,
    status: status,
    isEmailRequired: isEmailRequired,
    isDescriptionRequired: isDescriptionRequired,
    expiresAt: expiresAt,
  } satisfies FileRequestUpdateRequest;
}
export function serializeFileRequestCopyRequestFolderTypeField(
  val: FileRequestCopyRequestFolderTypeField
): SerializedData {
  return val;
}
export function deserializeFileRequestCopyRequestFolderTypeField(
  val: any
): FileRequestCopyRequestFolderTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "FileRequestCopyRequestFolderTypeField"';
  }
  if (val == 'folder') {
    return 'folder';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeFileRequestCopyRequestFolderField(
  val: FileRequestCopyRequestFolderField
): SerializedData {
  return {
    ['type']:
      val.type == void 0
        ? void 0
        : serializeFileRequestCopyRequestFolderTypeField(val.type),
    ['id']: val.id,
  };
}
export function deserializeFileRequestCopyRequestFolderField(
  val: any
): FileRequestCopyRequestFolderField {
  const type: undefined | FileRequestCopyRequestFolderTypeField =
    val.type == void 0
      ? void 0
      : deserializeFileRequestCopyRequestFolderTypeField(val.type);
  const id: string = val.id;
  return { type: type, id: id } satisfies FileRequestCopyRequestFolderField;
}
export function serializeFileRequestCopyRequest(
  val: FileRequestCopyRequest
): SerializedData {
  const base: any = serializeFileRequestUpdateRequest(val);
  if (!sdIsMap(base)) {
    throw 'Expecting a map for "FileRequestCopyRequest"';
  }
  return {
    ...base,
    ...{ ['folder']: serializeFileRequestCopyRequestFolderField(val.folder) },
  };
}
export function deserializeFileRequestCopyRequest(
  val: any
): FileRequestCopyRequest {
  const folder: FileRequestCopyRequestFolderField =
    deserializeFileRequestCopyRequestFolderField(val.folder);
  const title: undefined | string = val.title == void 0 ? void 0 : val.title;
  const description: undefined | string =
    val.description == void 0 ? void 0 : val.description;
  const status: undefined | FileRequestUpdateRequestStatusField =
    val.status == void 0
      ? void 0
      : deserializeFileRequestUpdateRequestStatusField(val.status);
  const isEmailRequired: undefined | boolean =
    val.is_email_required == void 0 ? void 0 : val.is_email_required;
  const isDescriptionRequired: undefined | boolean =
    val.is_description_required == void 0
      ? void 0
      : val.is_description_required;
  const expiresAt: undefined | string =
    val.expires_at == void 0 ? void 0 : val.expires_at;
  return {
    folder: folder,
    title: title,
    description: description,
    status: status,
    isEmailRequired: isEmailRequired,
    isDescriptionRequired: isDescriptionRequired,
    expiresAt: expiresAt,
  } satisfies FileRequestCopyRequest;
}
export function serializeClientErrorTypeField(
  val: ClientErrorTypeField
): SerializedData {
  return val;
}
export function deserializeClientErrorTypeField(
  val: any
): ClientErrorTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "ClientErrorTypeField"';
  }
  if (val == 'error') {
    return 'error';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeClientErrorCodeField(
  val: ClientErrorCodeField
): SerializedData {
  return val;
}
export function deserializeClientErrorCodeField(
  val: any
): ClientErrorCodeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "ClientErrorCodeField"';
  }
  if (val == 'created') {
    return 'created';
  }
  if (val == 'accepted') {
    return 'accepted';
  }
  if (val == 'no_content') {
    return 'no_content';
  }
  if (val == 'redirect') {
    return 'redirect';
  }
  if (val == 'not_modified') {
    return 'not_modified';
  }
  if (val == 'bad_request') {
    return 'bad_request';
  }
  if (val == 'unauthorized') {
    return 'unauthorized';
  }
  if (val == 'forbidden') {
    return 'forbidden';
  }
  if (val == 'not_found') {
    return 'not_found';
  }
  if (val == 'method_not_allowed') {
    return 'method_not_allowed';
  }
  if (val == 'conflict') {
    return 'conflict';
  }
  if (val == 'precondition_failed') {
    return 'precondition_failed';
  }
  if (val == 'too_many_requests') {
    return 'too_many_requests';
  }
  if (val == 'internal_server_error') {
    return 'internal_server_error';
  }
  if (val == 'unavailable') {
    return 'unavailable';
  }
  if (val == 'item_name_invalid') {
    return 'item_name_invalid';
  }
  if (val == 'insufficient_scope') {
    return 'insufficient_scope';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeClientErrorContextInfoField(
  val: ClientErrorContextInfoField
): SerializedData {
  return { ['message']: val.message == void 0 ? void 0 : val.message };
}
export function deserializeClientErrorContextInfoField(
  val: any
): ClientErrorContextInfoField {
  const message: undefined | string =
    val.message == void 0 ? void 0 : val.message;
  return { message: message } satisfies ClientErrorContextInfoField;
}
export function serializeClientError(val: ClientError): SerializedData {
  return {
    ['type']:
      val.type == void 0 ? void 0 : serializeClientErrorTypeField(val.type),
    ['status']: val.status == void 0 ? void 0 : val.status,
    ['code']:
      val.code == void 0 ? void 0 : serializeClientErrorCodeField(val.code),
    ['message']: val.message == void 0 ? void 0 : val.message,
    ['context_info']:
      val.contextInfo == void 0
        ? void 0
        : serializeClientErrorContextInfoField(val.contextInfo),
    ['help_url']: val.helpUrl == void 0 ? void 0 : val.helpUrl,
    ['request_id']: val.requestId == void 0 ? void 0 : val.requestId,
  };
}
export function deserializeClientError(val: any): ClientError {
  const type: undefined | ClientErrorTypeField =
    val.type == void 0 ? void 0 : deserializeClientErrorTypeField(val.type);
  const status: undefined | number = val.status == void 0 ? void 0 : val.status;
  const code: undefined | ClientErrorCodeField =
    val.code == void 0 ? void 0 : deserializeClientErrorCodeField(val.code);
  const message: undefined | string =
    val.message == void 0 ? void 0 : val.message;
  const contextInfo: undefined | ClientErrorContextInfoField =
    val.context_info == void 0
      ? void 0
      : deserializeClientErrorContextInfoField(val.context_info);
  const helpUrl: undefined | string =
    val.help_url == void 0 ? void 0 : val.help_url;
  const requestId: undefined | string =
    val.request_id == void 0 ? void 0 : val.request_id;
  return {
    type: type,
    status: status,
    code: code,
    message: message,
    contextInfo: contextInfo,
    helpUrl: helpUrl,
    requestId: requestId,
  } satisfies ClientError;
}
export function serializeOAuth2Error(val: OAuth2Error): SerializedData {
  return {
    ['error']: val.error == void 0 ? void 0 : val.error,
    ['error_description']:
      val.errorDescription == void 0 ? void 0 : val.errorDescription,
  };
}
export function deserializeOAuth2Error(val: any): OAuth2Error {
  const error: undefined | string = val.error == void 0 ? void 0 : val.error;
  const errorDescription: undefined | string =
    val.error_description == void 0 ? void 0 : val.error_description;
  return {
    error: error,
    errorDescription: errorDescription,
  } satisfies OAuth2Error;
}
export function serializeClassificationTemplateField(
  val: ClassificationTemplateField
): SerializedData {
  return val;
}
export function deserializeClassificationTemplateField(
  val: any
): ClassificationTemplateField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "ClassificationTemplateField"';
  }
  if (val == 'securityClassification-6VMVochwUWo') {
    return 'securityClassification-6VMVochwUWo';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeClassification(val: Classification): SerializedData {
  return {
    ['Box__Security__Classification__Key']:
      val.boxSecurityClassificationKey == void 0
        ? void 0
        : val.boxSecurityClassificationKey,
    ['$parent']: val.parent == void 0 ? void 0 : val.parent,
    ['$template']:
      val.template == void 0
        ? void 0
        : serializeClassificationTemplateField(val.template),
    ['$scope']: val.scope == void 0 ? void 0 : val.scope,
    ['$version']: val.version == void 0 ? void 0 : val.version,
    ['$type']: val.type == void 0 ? void 0 : val.type,
    ['$typeVersion']: val.typeVersion == void 0 ? void 0 : val.typeVersion,
    ['$canEdit']: val.canEdit == void 0 ? void 0 : val.canEdit,
  };
}
export function deserializeClassification(val: any): Classification {
  const boxSecurityClassificationKey: undefined | string =
    val.Box__Security__Classification__Key == void 0
      ? void 0
      : val.Box__Security__Classification__Key;
  const parent: undefined | string =
    val.$parent == void 0 ? void 0 : val.$parent;
  const template: undefined | ClassificationTemplateField =
    val.$template == void 0
      ? void 0
      : deserializeClassificationTemplateField(val.$template);
  const scope: undefined | string = val.$scope == void 0 ? void 0 : val.$scope;
  const version: undefined | number =
    val.$version == void 0 ? void 0 : val.$version;
  const type: undefined | string = val.$type == void 0 ? void 0 : val.$type;
  const typeVersion: undefined | number =
    val.$typeVersion == void 0 ? void 0 : val.$typeVersion;
  const canEdit: undefined | boolean =
    val.$canEdit == void 0 ? void 0 : val.$canEdit;
  return {
    boxSecurityClassificationKey: boxSecurityClassificationKey,
    parent: parent,
    template: template,
    scope: scope,
    version: version,
    type: type,
    typeVersion: typeVersion,
    canEdit: canEdit,
  } satisfies Classification;
}
export function serializeClassificationTemplateTypeField(
  val: ClassificationTemplateTypeField
): SerializedData {
  return val;
}
export function deserializeClassificationTemplateTypeField(
  val: any
): ClassificationTemplateTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "ClassificationTemplateTypeField"';
  }
  if (val == 'metadata_template') {
    return 'metadata_template';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeClassificationTemplateTemplateKeyField(
  val: ClassificationTemplateTemplateKeyField
): SerializedData {
  return val;
}
export function deserializeClassificationTemplateTemplateKeyField(
  val: any
): ClassificationTemplateTemplateKeyField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "ClassificationTemplateTemplateKeyField"';
  }
  if (val == 'securityClassification-6VMVochwUWo') {
    return 'securityClassification-6VMVochwUWo';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeClassificationTemplateDisplayNameField(
  val: ClassificationTemplateDisplayNameField
): SerializedData {
  return val;
}
export function deserializeClassificationTemplateDisplayNameField(
  val: any
): ClassificationTemplateDisplayNameField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "ClassificationTemplateDisplayNameField"';
  }
  if (val == 'Classification') {
    return 'Classification';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeClassificationTemplateFieldsTypeField(
  val: ClassificationTemplateFieldsTypeField
): SerializedData {
  return val;
}
export function deserializeClassificationTemplateFieldsTypeField(
  val: any
): ClassificationTemplateFieldsTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "ClassificationTemplateFieldsTypeField"';
  }
  if (val == 'enum') {
    return 'enum';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeClassificationTemplateFieldsKeyField(
  val: ClassificationTemplateFieldsKeyField
): SerializedData {
  return val;
}
export function deserializeClassificationTemplateFieldsKeyField(
  val: any
): ClassificationTemplateFieldsKeyField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "ClassificationTemplateFieldsKeyField"';
  }
  if (val == 'Box__Security__Classification__Key') {
    return 'Box__Security__Classification__Key';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeClassificationTemplateFieldsDisplayNameField(
  val: ClassificationTemplateFieldsDisplayNameField
): SerializedData {
  return val;
}
export function deserializeClassificationTemplateFieldsDisplayNameField(
  val: any
): ClassificationTemplateFieldsDisplayNameField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "ClassificationTemplateFieldsDisplayNameField"';
  }
  if (val == 'Classification') {
    return 'Classification';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeClassificationTemplateFieldsOptionsStaticConfigClassificationField(
  val: ClassificationTemplateFieldsOptionsStaticConfigClassificationField
): SerializedData {
  return {
    ['classificationDefinition']:
      val.classificationDefinition == void 0
        ? void 0
        : val.classificationDefinition,
    ['colorID']: val.colorId == void 0 ? void 0 : val.colorId,
  };
}
export function deserializeClassificationTemplateFieldsOptionsStaticConfigClassificationField(
  val: any
): ClassificationTemplateFieldsOptionsStaticConfigClassificationField {
  const classificationDefinition: undefined | string =
    val.classificationDefinition == void 0
      ? void 0
      : val.classificationDefinition;
  const colorId: undefined | number =
    val.colorID == void 0 ? void 0 : val.colorID;
  return {
    classificationDefinition: classificationDefinition,
    colorId: colorId,
  } satisfies ClassificationTemplateFieldsOptionsStaticConfigClassificationField;
}
export function serializeClassificationTemplateFieldsOptionsStaticConfigField(
  val: ClassificationTemplateFieldsOptionsStaticConfigField
): SerializedData {
  return {
    ['classification']:
      val.classification == void 0
        ? void 0
        : serializeClassificationTemplateFieldsOptionsStaticConfigClassificationField(
            val.classification
          ),
  };
}
export function deserializeClassificationTemplateFieldsOptionsStaticConfigField(
  val: any
): ClassificationTemplateFieldsOptionsStaticConfigField {
  const classification:
    | undefined
    | ClassificationTemplateFieldsOptionsStaticConfigClassificationField =
    val.classification == void 0
      ? void 0
      : deserializeClassificationTemplateFieldsOptionsStaticConfigClassificationField(
          val.classification
        );
  return {
    classification: classification,
  } satisfies ClassificationTemplateFieldsOptionsStaticConfigField;
}
export function serializeClassificationTemplateFieldsOptionsField(
  val: ClassificationTemplateFieldsOptionsField
): SerializedData {
  return {
    ['id']: val.id,
    ['key']: val.key,
    ['staticConfig']:
      val.staticConfig == void 0
        ? void 0
        : serializeClassificationTemplateFieldsOptionsStaticConfigField(
            val.staticConfig
          ),
  };
}
export function deserializeClassificationTemplateFieldsOptionsField(
  val: any
): ClassificationTemplateFieldsOptionsField {
  const id: string = val.id;
  const key: string = val.key;
  const staticConfig:
    | undefined
    | ClassificationTemplateFieldsOptionsStaticConfigField =
    val.staticConfig == void 0
      ? void 0
      : deserializeClassificationTemplateFieldsOptionsStaticConfigField(
          val.staticConfig
        );
  return {
    id: id,
    key: key,
    staticConfig: staticConfig,
  } satisfies ClassificationTemplateFieldsOptionsField;
}
export function serializeClassificationTemplateFieldsField(
  val: ClassificationTemplateFieldsField
): SerializedData {
  return {
    ['id']: val.id,
    ['type']: serializeClassificationTemplateFieldsTypeField(val.type),
    ['key']: serializeClassificationTemplateFieldsKeyField(val.key),
    ['displayName']: serializeClassificationTemplateFieldsDisplayNameField(
      val.displayName
    ),
    ['hidden']: val.hidden == void 0 ? void 0 : val.hidden,
    ['options']: val.options.map(function (
      item: ClassificationTemplateFieldsOptionsField
    ): any {
      return serializeClassificationTemplateFieldsOptionsField(item);
    }) as readonly any[],
  };
}
export function deserializeClassificationTemplateFieldsField(
  val: any
): ClassificationTemplateFieldsField {
  const id: string = val.id;
  const type: ClassificationTemplateFieldsTypeField =
    deserializeClassificationTemplateFieldsTypeField(val.type);
  const key: ClassificationTemplateFieldsKeyField =
    deserializeClassificationTemplateFieldsKeyField(val.key);
  const displayName: ClassificationTemplateFieldsDisplayNameField =
    deserializeClassificationTemplateFieldsDisplayNameField(val.displayName);
  const hidden: undefined | boolean =
    val.hidden == void 0 ? void 0 : val.hidden;
  const options: readonly ClassificationTemplateFieldsOptionsField[] = sdIsList(
    val.options
  )
    ? (val.options.map(function (itm: SerializedData): any {
        return deserializeClassificationTemplateFieldsOptionsField(itm);
      }) as readonly any[])
    : [];
  return {
    id: id,
    type: type,
    key: key,
    displayName: displayName,
    hidden: hidden,
    options: options,
  } satisfies ClassificationTemplateFieldsField;
}
export function serializeClassificationTemplate(
  val: ClassificationTemplate
): SerializedData {
  return {
    ['id']: val.id,
    ['type']: serializeClassificationTemplateTypeField(val.type),
    ['scope']: val.scope,
    ['templateKey']: serializeClassificationTemplateTemplateKeyField(
      val.templateKey
    ),
    ['displayName']: serializeClassificationTemplateDisplayNameField(
      val.displayName
    ),
    ['hidden']: val.hidden == void 0 ? void 0 : val.hidden,
    ['copyInstanceOnItemCopy']:
      val.copyInstanceOnItemCopy == void 0
        ? void 0
        : val.copyInstanceOnItemCopy,
    ['fields']: val.fields.map(function (
      item: ClassificationTemplateFieldsField
    ): any {
      return serializeClassificationTemplateFieldsField(item);
    }) as readonly any[],
  };
}
export function deserializeClassificationTemplate(
  val: any
): ClassificationTemplate {
  const id: string = val.id;
  const type: ClassificationTemplateTypeField =
    deserializeClassificationTemplateTypeField(val.type);
  const scope: string = val.scope;
  const templateKey: ClassificationTemplateTemplateKeyField =
    deserializeClassificationTemplateTemplateKeyField(val.templateKey);
  const displayName: ClassificationTemplateDisplayNameField =
    deserializeClassificationTemplateDisplayNameField(val.displayName);
  const hidden: undefined | boolean =
    val.hidden == void 0 ? void 0 : val.hidden;
  const copyInstanceOnItemCopy: undefined | boolean =
    val.copyInstanceOnItemCopy == void 0 ? void 0 : val.copyInstanceOnItemCopy;
  const fields: readonly ClassificationTemplateFieldsField[] = sdIsList(
    val.fields
  )
    ? (val.fields.map(function (itm: SerializedData): any {
        return deserializeClassificationTemplateFieldsField(itm);
      }) as readonly any[])
    : [];
  return {
    id: id,
    type: type,
    scope: scope,
    templateKey: templateKey,
    displayName: displayName,
    hidden: hidden,
    copyInstanceOnItemCopy: copyInstanceOnItemCopy,
    fields: fields,
  } satisfies ClassificationTemplate;
}
export function serializeCollaborationAllowlistEntryTypeField(
  val: CollaborationAllowlistEntryTypeField
): SerializedData {
  return val;
}
export function deserializeCollaborationAllowlistEntryTypeField(
  val: any
): CollaborationAllowlistEntryTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "CollaborationAllowlistEntryTypeField"';
  }
  if (val == 'collaboration_whitelist_entry') {
    return 'collaboration_whitelist_entry';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCollaborationAllowlistEntryDirectionField(
  val: CollaborationAllowlistEntryDirectionField
): SerializedData {
  return val;
}
export function deserializeCollaborationAllowlistEntryDirectionField(
  val: any
): CollaborationAllowlistEntryDirectionField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "CollaborationAllowlistEntryDirectionField"';
  }
  if (val == 'inbound') {
    return 'inbound';
  }
  if (val == 'outbound') {
    return 'outbound';
  }
  if (val == 'both') {
    return 'both';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCollaborationAllowlistEntryEnterpriseTypeField(
  val: CollaborationAllowlistEntryEnterpriseTypeField
): SerializedData {
  return val;
}
export function deserializeCollaborationAllowlistEntryEnterpriseTypeField(
  val: any
): CollaborationAllowlistEntryEnterpriseTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "CollaborationAllowlistEntryEnterpriseTypeField"';
  }
  if (val == 'enterprise') {
    return 'enterprise';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCollaborationAllowlistEntryEnterpriseField(
  val: CollaborationAllowlistEntryEnterpriseField
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0
        ? void 0
        : serializeCollaborationAllowlistEntryEnterpriseTypeField(val.type),
    ['name']: val.name == void 0 ? void 0 : val.name,
  };
}
export function deserializeCollaborationAllowlistEntryEnterpriseField(
  val: any
): CollaborationAllowlistEntryEnterpriseField {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | CollaborationAllowlistEntryEnterpriseTypeField =
    val.type == void 0
      ? void 0
      : deserializeCollaborationAllowlistEntryEnterpriseTypeField(val.type);
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  return {
    id: id,
    type: type,
    name: name,
  } satisfies CollaborationAllowlistEntryEnterpriseField;
}
export function serializeCollaborationAllowlistEntry(
  val: CollaborationAllowlistEntry
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0
        ? void 0
        : serializeCollaborationAllowlistEntryTypeField(val.type),
    ['domain']: val.domain == void 0 ? void 0 : val.domain,
    ['direction']:
      val.direction == void 0
        ? void 0
        : serializeCollaborationAllowlistEntryDirectionField(val.direction),
    ['enterprise']:
      val.enterprise == void 0
        ? void 0
        : serializeCollaborationAllowlistEntryEnterpriseField(val.enterprise),
    ['created_at']: val.createdAt == void 0 ? void 0 : val.createdAt,
  };
}
export function deserializeCollaborationAllowlistEntry(
  val: any
): CollaborationAllowlistEntry {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | CollaborationAllowlistEntryTypeField =
    val.type == void 0
      ? void 0
      : deserializeCollaborationAllowlistEntryTypeField(val.type);
  const domain: undefined | string = val.domain == void 0 ? void 0 : val.domain;
  const direction: undefined | CollaborationAllowlistEntryDirectionField =
    val.direction == void 0
      ? void 0
      : deserializeCollaborationAllowlistEntryDirectionField(val.direction);
  const enterprise: undefined | CollaborationAllowlistEntryEnterpriseField =
    val.enterprise == void 0
      ? void 0
      : deserializeCollaborationAllowlistEntryEnterpriseField(val.enterprise);
  const createdAt: undefined | string =
    val.created_at == void 0 ? void 0 : val.created_at;
  return {
    id: id,
    type: type,
    domain: domain,
    direction: direction,
    enterprise: enterprise,
    createdAt: createdAt,
  } satisfies CollaborationAllowlistEntry;
}
export function serializeCollaborationAllowlistEntries(
  val: CollaborationAllowlistEntries
): SerializedData {
  return {
    ['limit']: val.limit == void 0 ? void 0 : val.limit,
    ['next_marker']: val.nextMarker == void 0 ? void 0 : val.nextMarker,
    ['prev_marker']: val.prevMarker == void 0 ? void 0 : val.prevMarker,
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (item: CollaborationAllowlistEntry): any {
            return serializeCollaborationAllowlistEntry(item);
          }) as readonly any[]),
  };
}
export function deserializeCollaborationAllowlistEntries(
  val: any
): CollaborationAllowlistEntries {
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
  const nextMarker: undefined | string =
    val.next_marker == void 0 ? void 0 : val.next_marker;
  const prevMarker: undefined | string =
    val.prev_marker == void 0 ? void 0 : val.prev_marker;
  const entries: undefined | readonly CollaborationAllowlistEntry[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (itm: SerializedData): any {
          return deserializeCollaborationAllowlistEntry(itm);
        }) as readonly any[])
      : [];
  return {
    limit: limit,
    nextMarker: nextMarker,
    prevMarker: prevMarker,
    entries: entries,
  } satisfies CollaborationAllowlistEntries;
}
export function serializeCollectionTypeField(
  val: CollectionTypeField
): SerializedData {
  return val;
}
export function deserializeCollectionTypeField(val: any): CollectionTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "CollectionTypeField"';
  }
  if (val == 'collection') {
    return 'collection';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCollectionNameField(
  val: CollectionNameField
): SerializedData {
  return val;
}
export function deserializeCollectionNameField(val: any): CollectionNameField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "CollectionNameField"';
  }
  if (val == 'Favorites') {
    return 'Favorites';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCollectionCollectionTypeField(
  val: CollectionCollectionTypeField
): SerializedData {
  return val;
}
export function deserializeCollectionCollectionTypeField(
  val: any
): CollectionCollectionTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "CollectionCollectionTypeField"';
  }
  if (val == 'favorites') {
    return 'favorites';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCollection(val: Collection): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0 ? void 0 : serializeCollectionTypeField(val.type),
    ['name']:
      val.name == void 0 ? void 0 : serializeCollectionNameField(val.name),
    ['collection_type']:
      val.collectionType == void 0
        ? void 0
        : serializeCollectionCollectionTypeField(val.collectionType),
  };
}
export function deserializeCollection(val: any): Collection {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | CollectionTypeField =
    val.type == void 0 ? void 0 : deserializeCollectionTypeField(val.type);
  const name: undefined | CollectionNameField =
    val.name == void 0 ? void 0 : deserializeCollectionNameField(val.name);
  const collectionType: undefined | CollectionCollectionTypeField =
    val.collection_type == void 0
      ? void 0
      : deserializeCollectionCollectionTypeField(val.collection_type);
  return {
    id: id,
    type: type,
    name: name,
    collectionType: collectionType,
  } satisfies Collection;
}
export function serializeCollectionsOrderDirectionField(
  val: CollectionsOrderDirectionField
): SerializedData {
  return val;
}
export function deserializeCollectionsOrderDirectionField(
  val: any
): CollectionsOrderDirectionField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "CollectionsOrderDirectionField"';
  }
  if (val == 'ASC') {
    return 'ASC';
  }
  if (val == 'DESC') {
    return 'DESC';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCollectionsOrderField(
  val: CollectionsOrderField
): SerializedData {
  return {
    ['by']: val.by == void 0 ? void 0 : val.by,
    ['direction']:
      val.direction == void 0
        ? void 0
        : serializeCollectionsOrderDirectionField(val.direction),
  };
}
export function deserializeCollectionsOrderField(
  val: any
): CollectionsOrderField {
  const by: undefined | string = val.by == void 0 ? void 0 : val.by;
  const direction: undefined | CollectionsOrderDirectionField =
    val.direction == void 0
      ? void 0
      : deserializeCollectionsOrderDirectionField(val.direction);
  return { by: by, direction: direction } satisfies CollectionsOrderField;
}
export function serializeCollections(val: Collections): SerializedData {
  return {
    ['total_count']: val.totalCount == void 0 ? void 0 : val.totalCount,
    ['limit']: val.limit == void 0 ? void 0 : val.limit,
    ['offset']: val.offset == void 0 ? void 0 : val.offset,
    ['order']:
      val.order == void 0
        ? void 0
        : (val.order.map(function (item: CollectionsOrderField): any {
            return serializeCollectionsOrderField(item);
          }) as readonly any[]),
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (item: Collection): any {
            return serializeCollection(item);
          }) as readonly any[]),
  };
}
export function deserializeCollections(val: any): Collections {
  const totalCount: undefined | number =
    val.total_count == void 0 ? void 0 : val.total_count;
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
  const offset: undefined | number = val.offset == void 0 ? void 0 : val.offset;
  const order: undefined | readonly CollectionsOrderField[] =
    val.order == void 0
      ? void 0
      : sdIsList(val.order)
      ? (val.order.map(function (itm: SerializedData): any {
          return deserializeCollectionsOrderField(itm);
        }) as readonly any[])
      : [];
  const entries: undefined | readonly Collection[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (itm: SerializedData): any {
          return deserializeCollection(itm);
        }) as readonly any[])
      : [];
  return {
    totalCount: totalCount,
    limit: limit,
    offset: offset,
    order: order,
    entries: entries,
  } satisfies Collections;
}
export function serializeCommentBaseTypeField(
  val: CommentBaseTypeField
): SerializedData {
  return val;
}
export function deserializeCommentBaseTypeField(
  val: any
): CommentBaseTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "CommentBaseTypeField"';
  }
  if (val == 'comment') {
    return 'comment';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCommentBase(val: CommentBase): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0 ? void 0 : serializeCommentBaseTypeField(val.type),
  };
}
export function deserializeCommentBase(val: any): CommentBase {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | CommentBaseTypeField =
    val.type == void 0 ? void 0 : deserializeCommentBaseTypeField(val.type);
  return { id: id, type: type } satisfies CommentBase;
}
export function serializeEmailAliasTypeField(
  val: EmailAliasTypeField
): SerializedData {
  return val;
}
export function deserializeEmailAliasTypeField(val: any): EmailAliasTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "EmailAliasTypeField"';
  }
  if (val == 'email_alias') {
    return 'email_alias';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeEmailAlias(val: EmailAlias): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0 ? void 0 : serializeEmailAliasTypeField(val.type),
    ['email']: val.email == void 0 ? void 0 : val.email,
    ['is_confirmed']: val.isConfirmed == void 0 ? void 0 : val.isConfirmed,
  };
}
export function deserializeEmailAlias(val: any): EmailAlias {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | EmailAliasTypeField =
    val.type == void 0 ? void 0 : deserializeEmailAliasTypeField(val.type);
  const email: undefined | string = val.email == void 0 ? void 0 : val.email;
  const isConfirmed: undefined | boolean =
    val.is_confirmed == void 0 ? void 0 : val.is_confirmed;
  return {
    id: id,
    type: type,
    email: email,
    isConfirmed: isConfirmed,
  } satisfies EmailAlias;
}
export function serializeEmailAliases(val: EmailAliases): SerializedData {
  return {
    ['total_count']: val.totalCount == void 0 ? void 0 : val.totalCount,
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (item: EmailAlias): any {
            return serializeEmailAlias(item);
          }) as readonly any[]),
  };
}
export function deserializeEmailAliases(val: any): EmailAliases {
  const totalCount: undefined | number =
    val.total_count == void 0 ? void 0 : val.total_count;
  const entries: undefined | readonly EmailAlias[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (itm: SerializedData): any {
          return deserializeEmailAlias(itm);
        }) as readonly any[])
      : [];
  return { totalCount: totalCount, entries: entries } satisfies EmailAliases;
}
export function serializeEnterpriseBaseTypeField(
  val: EnterpriseBaseTypeField
): SerializedData {
  return val;
}
export function deserializeEnterpriseBaseTypeField(
  val: any
): EnterpriseBaseTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "EnterpriseBaseTypeField"';
  }
  if (val == 'enterprise') {
    return 'enterprise';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeEnterpriseBase(val: EnterpriseBase): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0 ? void 0 : serializeEnterpriseBaseTypeField(val.type),
  };
}
export function deserializeEnterpriseBase(val: any): EnterpriseBase {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | EnterpriseBaseTypeField =
    val.type == void 0 ? void 0 : deserializeEnterpriseBaseTypeField(val.type);
  return { id: id, type: type } satisfies EnterpriseBase;
}
export function serializeFileBaseTypeField(
  val: FileBaseTypeField
): SerializedData {
  return val;
}
export function deserializeFileBaseTypeField(val: any): FileBaseTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "FileBaseTypeField"';
  }
  if (val == 'file') {
    return 'file';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeFileBase(val: FileBase): SerializedData {
  return {
    ['id']: val.id,
    ['etag']: val.etag == void 0 ? void 0 : val.etag,
    ['type']: serializeFileBaseTypeField(val.type),
  };
}
export function deserializeFileBase(val: any): FileBase {
  const id: string = val.id;
  const etag: undefined | string = val.etag == void 0 ? void 0 : val.etag;
  const type: FileBaseTypeField = deserializeFileBaseTypeField(val.type);
  return { id: id, etag: etag, type: type } satisfies FileBase;
}
export function serializeFileVersionBaseTypeField(
  val: FileVersionBaseTypeField
): SerializedData {
  return val;
}
export function deserializeFileVersionBaseTypeField(
  val: any
): FileVersionBaseTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "FileVersionBaseTypeField"';
  }
  if (val == 'file_version') {
    return 'file_version';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeFileVersionBase(val: FileVersionBase): SerializedData {
  return {
    ['id']: val.id,
    ['type']: serializeFileVersionBaseTypeField(val.type),
  };
}
export function deserializeFileVersionBase(val: any): FileVersionBase {
  const id: string = val.id;
  const type: FileVersionBaseTypeField = deserializeFileVersionBaseTypeField(
    val.type
  );
  return { id: id, type: type } satisfies FileVersionBase;
}
export function serializeFileVersionMini(val: FileVersionMini): SerializedData {
  const base: any = serializeFileVersionBase(val);
  if (!sdIsMap(base)) {
    throw 'Expecting a map for "FileVersionMini"';
  }
  return { ...base, ...{ ['sha1']: val.sha1 == void 0 ? void 0 : val.sha1 } };
}
export function deserializeFileVersionMini(val: any): FileVersionMini {
  const sha1: undefined | string = val.sha1 == void 0 ? void 0 : val.sha1;
  const id: string = val.id;
  const type: FileVersionBaseTypeField = deserializeFileVersionBaseTypeField(
    val.type
  );
  return { sha1: sha1, id: id, type: type } satisfies FileVersionMini;
}
export function serializeFileMini(val: FileMini): SerializedData {
  const base: any = serializeFileBase(val);
  if (!sdIsMap(base)) {
    throw 'Expecting a map for "FileMini"';
  }
  return {
    ...base,
    ...{
      ['sequence_id']: val.sequenceId == void 0 ? void 0 : val.sequenceId,
      ['name']: val.name == void 0 ? void 0 : val.name,
      ['sha1']: val.sha1 == void 0 ? void 0 : val.sha1,
      ['file_version']:
        val.fileVersion == void 0
          ? void 0
          : serializeFileVersionMini(val.fileVersion),
    },
  };
}
export function deserializeFileMini(val: any): FileMini {
  const sequenceId: undefined | string =
    val.sequence_id == void 0 ? void 0 : val.sequence_id;
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const sha1: undefined | string = val.sha1 == void 0 ? void 0 : val.sha1;
  const fileVersion: undefined | FileVersionMini =
    val.file_version == void 0
      ? void 0
      : deserializeFileVersionMini(val.file_version);
  const id: string = val.id;
  const etag: undefined | string = val.etag == void 0 ? void 0 : val.etag;
  const type: FileBaseTypeField = deserializeFileBaseTypeField(val.type);
  return {
    sequenceId: sequenceId,
    name: name,
    sha1: sha1,
    fileVersion: fileVersion,
    id: id,
    etag: etag,
    type: type,
  } satisfies FileMini;
}
export function serializeFilesUnderRetention(
  val: FilesUnderRetention
): SerializedData {
  return {
    ['limit']: val.limit == void 0 ? void 0 : val.limit,
    ['next_marker']: val.nextMarker == void 0 ? void 0 : val.nextMarker,
    ['prev_marker']: val.prevMarker == void 0 ? void 0 : val.prevMarker,
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (item: FileMini): any {
            return serializeFileMini(item);
          }) as readonly any[]),
  };
}
export function deserializeFilesUnderRetention(val: any): FilesUnderRetention {
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
  const nextMarker: undefined | string =
    val.next_marker == void 0 ? void 0 : val.next_marker;
  const prevMarker: undefined | string =
    val.prev_marker == void 0 ? void 0 : val.prev_marker;
  const entries: undefined | readonly FileMini[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (itm: SerializedData): any {
          return deserializeFileMini(itm);
        }) as readonly any[])
      : [];
  return {
    limit: limit,
    nextMarker: nextMarker,
    prevMarker: prevMarker,
    entries: entries,
  } satisfies FilesUnderRetention;
}
export function serializeFileConflict(val: FileConflict): SerializedData {
  const base: any = serializeFileMini(val);
  if (!sdIsMap(base)) {
    throw 'Expecting a map for "FileConflict"';
  }
  return { ...base, ...{} };
}
export function deserializeFileConflict(val: any): FileConflict {
  const sequenceId: undefined | string =
    val.sequence_id == void 0 ? void 0 : val.sequence_id;
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const sha1: undefined | string = val.sha1 == void 0 ? void 0 : val.sha1;
  const fileVersion: undefined | FileVersionMini =
    val.file_version == void 0
      ? void 0
      : deserializeFileVersionMini(val.file_version);
  const id: string = val.id;
  const etag: undefined | string = val.etag == void 0 ? void 0 : val.etag;
  const type: FileBaseTypeField = deserializeFileBaseTypeField(val.type);
  return {
    sequenceId: sequenceId,
    name: name,
    sha1: sha1,
    fileVersion: fileVersion,
    id: id,
    etag: etag,
    type: type,
  } satisfies FileConflict;
}
export function serializeConflictErrorContextInfoField(
  val: ConflictErrorContextInfoField
): SerializedData {
  return {
    ['conflicts']:
      val.conflicts == void 0
        ? void 0
        : (val.conflicts.map(function (item: FileConflict): any {
            return serializeFileConflict(item);
          }) as readonly any[]),
  };
}
export function deserializeConflictErrorContextInfoField(
  val: any
): ConflictErrorContextInfoField {
  const conflicts: undefined | readonly FileConflict[] =
    val.conflicts == void 0
      ? void 0
      : sdIsList(val.conflicts)
      ? (val.conflicts.map(function (itm: SerializedData): any {
          return deserializeFileConflict(itm);
        }) as readonly any[])
      : [];
  return { conflicts: conflicts } satisfies ConflictErrorContextInfoField;
}
export function serializeConflictError(val: ConflictError): SerializedData {
  const base: any = serializeClientError(val);
  if (!sdIsMap(base)) {
    throw 'Expecting a map for "ConflictError"';
  }
  return { ...base, ...{} };
}
export function deserializeConflictError(val: any): ConflictError {
  const type: undefined | ClientErrorTypeField =
    val.type == void 0 ? void 0 : deserializeClientErrorTypeField(val.type);
  const status: undefined | number = val.status == void 0 ? void 0 : val.status;
  const code: undefined | ClientErrorCodeField =
    val.code == void 0 ? void 0 : deserializeClientErrorCodeField(val.code);
  const message: undefined | string =
    val.message == void 0 ? void 0 : val.message;
  const contextInfo: undefined | ClientErrorContextInfoField =
    val.context_info == void 0
      ? void 0
      : deserializeClientErrorContextInfoField(val.context_info);
  const helpUrl: undefined | string =
    val.help_url == void 0 ? void 0 : val.help_url;
  const requestId: undefined | string =
    val.request_id == void 0 ? void 0 : val.request_id;
  return {
    type: type,
    status: status,
    code: code,
    message: message,
    contextInfo: contextInfo,
    helpUrl: helpUrl,
    requestId: requestId,
  } satisfies ConflictError;
}
export function serializeFolderBaseTypeField(
  val: FolderBaseTypeField
): SerializedData {
  return val;
}
export function deserializeFolderBaseTypeField(val: any): FolderBaseTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "FolderBaseTypeField"';
  }
  if (val == 'folder') {
    return 'folder';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeFolderBase(val: FolderBase): SerializedData {
  return {
    ['id']: val.id,
    ['etag']: val.etag == void 0 ? void 0 : val.etag,
    ['type']: serializeFolderBaseTypeField(val.type),
  };
}
export function deserializeFolderBase(val: any): FolderBase {
  const id: string = val.id;
  const etag: undefined | string = val.etag == void 0 ? void 0 : val.etag;
  const type: FolderBaseTypeField = deserializeFolderBaseTypeField(val.type);
  return { id: id, etag: etag, type: type } satisfies FolderBase;
}
export function serializeFolderMini(val: FolderMini): SerializedData {
  const base: any = serializeFolderBase(val);
  if (!sdIsMap(base)) {
    throw 'Expecting a map for "FolderMini"';
  }
  return {
    ...base,
    ...{
      ['sequence_id']: val.sequenceId == void 0 ? void 0 : val.sequenceId,
      ['name']: val.name == void 0 ? void 0 : val.name,
    },
  };
}
export function deserializeFolderMini(val: any): FolderMini {
  const sequenceId: undefined | string =
    val.sequence_id == void 0 ? void 0 : val.sequence_id;
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const id: string = val.id;
  const etag: undefined | string = val.etag == void 0 ? void 0 : val.etag;
  const type: FolderBaseTypeField = deserializeFolderBaseTypeField(val.type);
  return {
    sequenceId: sequenceId,
    name: name,
    id: id,
    etag: etag,
    type: type,
  } satisfies FolderMini;
}
export function serializeFileMiniOrFolderMini(
  val: FileMiniOrFolderMini
): SerializedData {
  if (val.type == 'file') {
    return serializeFileMini(val);
  }
  if (val.type == 'folder') {
    return serializeFolderMini(val);
  }
  throw 'unknown type';
}
export function deserializeFileMiniOrFolderMini(
  val: any
): FileMiniOrFolderMini {
  if (!sdIsMap(val)) {
    throw 'Expecting a map for "FileMiniOrFolderMini"';
  }
  if (val.type == 'file') {
    return deserializeFileMini(val);
  }
  if (val.type == 'folder') {
    return deserializeFolderMini(val);
  }
  throw 'unknown type';
}
export function serializeFileOrFolderScopeScopeField(
  val: FileOrFolderScopeScopeField
): SerializedData {
  return val;
}
export function deserializeFileOrFolderScopeScopeField(
  val: any
): FileOrFolderScopeScopeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "FileOrFolderScopeScopeField"';
  }
  if (val == 'annotation_edit') {
    return 'annotation_edit';
  }
  if (val == 'annotation_view_all') {
    return 'annotation_view_all';
  }
  if (val == 'annotation_view_self') {
    return 'annotation_view_self';
  }
  if (val == 'base_explorer') {
    return 'base_explorer';
  }
  if (val == 'base_picker') {
    return 'base_picker';
  }
  if (val == 'base_preview') {
    return 'base_preview';
  }
  if (val == 'base_upload') {
    return 'base_upload';
  }
  if (val == 'item_delete') {
    return 'item_delete';
  }
  if (val == 'item_download') {
    return 'item_download';
  }
  if (val == 'item_preview') {
    return 'item_preview';
  }
  if (val == 'item_rename') {
    return 'item_rename';
  }
  if (val == 'item_share') {
    return 'item_share';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeFileOrFolderScope(
  val: FileOrFolderScope
): SerializedData {
  return {
    ['scope']:
      val.scope == void 0
        ? void 0
        : serializeFileOrFolderScopeScopeField(val.scope),
    ['object']:
      val.object == void 0 ? void 0 : serializeFileMiniOrFolderMini(val.object),
  };
}
export function deserializeFileOrFolderScope(val: any): FileOrFolderScope {
  const scope: undefined | FileOrFolderScopeScopeField =
    val.scope == void 0
      ? void 0
      : deserializeFileOrFolderScopeScopeField(val.scope);
  const object: undefined | FileMiniOrFolderMini =
    val.object == void 0 ? void 0 : deserializeFileMiniOrFolderMini(val.object);
  return { scope: scope, object: object } satisfies FileOrFolderScope;
}
export function serializeAccessTokenTokenTypeField(
  val: AccessTokenTokenTypeField
): SerializedData {
  return val;
}
export function deserializeAccessTokenTokenTypeField(
  val: any
): AccessTokenTokenTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "AccessTokenTokenTypeField"';
  }
  if (val == 'bearer') {
    return 'bearer';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeAccessTokenIssuedTokenTypeField(
  val: AccessTokenIssuedTokenTypeField
): SerializedData {
  return val;
}
export function deserializeAccessTokenIssuedTokenTypeField(
  val: any
): AccessTokenIssuedTokenTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "AccessTokenIssuedTokenTypeField"';
  }
  if (val == 'urn:ietf:params:oauth:token-type:access_token') {
    return 'urn:ietf:params:oauth:token-type:access_token';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeAccessToken(val: AccessToken): SerializedData {
  return {
    ['access_token']: val.accessToken == void 0 ? void 0 : val.accessToken,
    ['expires_in']: val.expiresIn == void 0 ? void 0 : val.expiresIn,
    ['token_type']:
      val.tokenType == void 0
        ? void 0
        : serializeAccessTokenTokenTypeField(val.tokenType),
    ['restricted_to']:
      val.restrictedTo == void 0
        ? void 0
        : (val.restrictedTo.map(function (item: FileOrFolderScope): any {
            return serializeFileOrFolderScope(item);
          }) as readonly any[]),
    ['refresh_token']: val.refreshToken == void 0 ? void 0 : val.refreshToken,
    ['issued_token_type']:
      val.issuedTokenType == void 0
        ? void 0
        : serializeAccessTokenIssuedTokenTypeField(val.issuedTokenType),
  };
}
export function deserializeAccessToken(val: any): AccessToken {
  const accessToken: undefined | string =
    val.access_token == void 0 ? void 0 : val.access_token;
  const expiresIn: undefined | number =
    val.expires_in == void 0 ? void 0 : val.expires_in;
  const tokenType: undefined | AccessTokenTokenTypeField =
    val.token_type == void 0
      ? void 0
      : deserializeAccessTokenTokenTypeField(val.token_type);
  const restrictedTo: undefined | readonly FileOrFolderScope[] =
    val.restricted_to == void 0
      ? void 0
      : sdIsList(val.restricted_to)
      ? (val.restricted_to.map(function (itm: SerializedData): any {
          return deserializeFileOrFolderScope(itm);
        }) as readonly any[])
      : [];
  const refreshToken: undefined | string =
    val.refresh_token == void 0 ? void 0 : val.refresh_token;
  const issuedTokenType: undefined | AccessTokenIssuedTokenTypeField =
    val.issued_token_type == void 0
      ? void 0
      : deserializeAccessTokenIssuedTokenTypeField(val.issued_token_type);
  return {
    accessToken: accessToken,
    expiresIn: expiresIn,
    tokenType: tokenType,
    restrictedTo: restrictedTo,
    refreshToken: refreshToken,
    issuedTokenType: issuedTokenType,
  } satisfies AccessToken;
}
export function serializeIntegrationMappingBaseIntegrationTypeField(
  val: IntegrationMappingBaseIntegrationTypeField
): SerializedData {
  return val;
}
export function deserializeIntegrationMappingBaseIntegrationTypeField(
  val: any
): IntegrationMappingBaseIntegrationTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "IntegrationMappingBaseIntegrationTypeField"';
  }
  if (val == 'slack') {
    return 'slack';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeIntegrationMappingBase(
  val: IntegrationMappingBase
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['integration_type']:
      val.integrationType == void 0
        ? void 0
        : serializeIntegrationMappingBaseIntegrationTypeField(
            val.integrationType
          ),
  };
}
export function deserializeIntegrationMappingBase(
  val: any
): IntegrationMappingBase {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const integrationType:
    | undefined
    | IntegrationMappingBaseIntegrationTypeField =
    val.integration_type == void 0
      ? void 0
      : deserializeIntegrationMappingBaseIntegrationTypeField(
          val.integration_type
        );
  return {
    id: id,
    integrationType: integrationType,
  } satisfies IntegrationMappingBase;
}
export function serializeIntegrationMappingMiniPartnerItemTypeField(
  val: IntegrationMappingMiniPartnerItemTypeField
): SerializedData {
  return val;
}
export function deserializeIntegrationMappingMiniPartnerItemTypeField(
  val: any
): IntegrationMappingMiniPartnerItemTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "IntegrationMappingMiniPartnerItemTypeField"';
  }
  if (val == 'channel') {
    return 'channel';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeIntegrationMappingMiniBoxItemTypeField(
  val: IntegrationMappingMiniBoxItemTypeField
): SerializedData {
  return val;
}
export function deserializeIntegrationMappingMiniBoxItemTypeField(
  val: any
): IntegrationMappingMiniBoxItemTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "IntegrationMappingMiniBoxItemTypeField"';
  }
  if (val == 'folder') {
    return 'folder';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeIntegrationMappingMini(
  val: IntegrationMappingMini
): SerializedData {
  const base: any = serializeIntegrationMappingBase(val);
  if (!sdIsMap(base)) {
    throw 'Expecting a map for "IntegrationMappingMini"';
  }
  return {
    ...base,
    ...{
      ['partner_item_id']:
        val.partnerItemId == void 0 ? void 0 : val.partnerItemId,
      ['partner_item_type']:
        val.partnerItemType == void 0
          ? void 0
          : serializeIntegrationMappingMiniPartnerItemTypeField(
              val.partnerItemType
            ),
      ['box_item_id']: val.boxItemId == void 0 ? void 0 : val.boxItemId,
      ['box_item_type']:
        val.boxItemType == void 0
          ? void 0
          : serializeIntegrationMappingMiniBoxItemTypeField(val.boxItemType),
    },
  };
}
export function deserializeIntegrationMappingMini(
  val: any
): IntegrationMappingMini {
  const partnerItemId: undefined | string =
    val.partner_item_id == void 0 ? void 0 : val.partner_item_id;
  const partnerItemType:
    | undefined
    | IntegrationMappingMiniPartnerItemTypeField =
    val.partner_item_type == void 0
      ? void 0
      : deserializeIntegrationMappingMiniPartnerItemTypeField(
          val.partner_item_type
        );
  const boxItemId: undefined | string =
    val.box_item_id == void 0 ? void 0 : val.box_item_id;
  const boxItemType: undefined | IntegrationMappingMiniBoxItemTypeField =
    val.box_item_type == void 0
      ? void 0
      : deserializeIntegrationMappingMiniBoxItemTypeField(val.box_item_type);
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const integrationType:
    | undefined
    | IntegrationMappingBaseIntegrationTypeField =
    val.integration_type == void 0
      ? void 0
      : deserializeIntegrationMappingBaseIntegrationTypeField(
          val.integration_type
        );
  return {
    partnerItemId: partnerItemId,
    partnerItemType: partnerItemType,
    boxItemId: boxItemId,
    boxItemType: boxItemType,
    id: id,
    integrationType: integrationType,
  } satisfies IntegrationMappingMini;
}
export function serializeGroupBaseTypeField(
  val: GroupBaseTypeField
): SerializedData {
  return val;
}
export function deserializeGroupBaseTypeField(val: any): GroupBaseTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "GroupBaseTypeField"';
  }
  if (val == 'group') {
    return 'group';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeGroupBase(val: GroupBase): SerializedData {
  return { ['id']: val.id, ['type']: serializeGroupBaseTypeField(val.type) };
}
export function deserializeGroupBase(val: any): GroupBase {
  const id: string = val.id;
  const type: GroupBaseTypeField = deserializeGroupBaseTypeField(val.type);
  return { id: id, type: type } satisfies GroupBase;
}
export function serializeGroupMiniGroupTypeField(
  val: GroupMiniGroupTypeField
): SerializedData {
  return val;
}
export function deserializeGroupMiniGroupTypeField(
  val: any
): GroupMiniGroupTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "GroupMiniGroupTypeField"';
  }
  if (val == 'managed_group') {
    return 'managed_group';
  }
  if (val == 'all_users_group') {
    return 'all_users_group';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeGroupMini(val: GroupMini): SerializedData {
  const base: any = serializeGroupBase(val);
  if (!sdIsMap(base)) {
    throw 'Expecting a map for "GroupMini"';
  }
  return {
    ...base,
    ...{
      ['name']: val.name == void 0 ? void 0 : val.name,
      ['group_type']:
        val.groupType == void 0
          ? void 0
          : serializeGroupMiniGroupTypeField(val.groupType),
    },
  };
}
export function deserializeGroupMini(val: any): GroupMini {
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const groupType: undefined | GroupMiniGroupTypeField =
    val.group_type == void 0
      ? void 0
      : deserializeGroupMiniGroupTypeField(val.group_type);
  const id: string = val.id;
  const type: GroupBaseTypeField = deserializeGroupBaseTypeField(val.type);
  return {
    name: name,
    groupType: groupType,
    id: id,
    type: type,
  } satisfies GroupMini;
}
export function serializeGroup(val: Group): SerializedData {
  const base: any = serializeGroupMini(val);
  if (!sdIsMap(base)) {
    throw 'Expecting a map for "Group"';
  }
  return {
    ...base,
    ...{
      ['created_at']: val.createdAt == void 0 ? void 0 : val.createdAt,
      ['modified_at']: val.modifiedAt == void 0 ? void 0 : val.modifiedAt,
    },
  };
}
export function deserializeGroup(val: any): Group {
  const createdAt: undefined | string =
    val.created_at == void 0 ? void 0 : val.created_at;
  const modifiedAt: undefined | string =
    val.modified_at == void 0 ? void 0 : val.modified_at;
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const groupType: undefined | GroupMiniGroupTypeField =
    val.group_type == void 0
      ? void 0
      : deserializeGroupMiniGroupTypeField(val.group_type);
  const id: string = val.id;
  const type: GroupBaseTypeField = deserializeGroupBaseTypeField(val.type);
  return {
    createdAt: createdAt,
    modifiedAt: modifiedAt,
    name: name,
    groupType: groupType,
    id: id,
    type: type,
  } satisfies Group;
}
export function serializeGroupFullInvitabilityLevelField(
  val: GroupFullInvitabilityLevelField
): SerializedData {
  return val;
}
export function deserializeGroupFullInvitabilityLevelField(
  val: any
): GroupFullInvitabilityLevelField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "GroupFullInvitabilityLevelField"';
  }
  if (val == 'admins_only') {
    return 'admins_only';
  }
  if (val == 'admins_and_members') {
    return 'admins_and_members';
  }
  if (val == 'all_managed_users') {
    return 'all_managed_users';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeGroupFullMemberViewabilityLevelField(
  val: GroupFullMemberViewabilityLevelField
): SerializedData {
  return val;
}
export function deserializeGroupFullMemberViewabilityLevelField(
  val: any
): GroupFullMemberViewabilityLevelField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "GroupFullMemberViewabilityLevelField"';
  }
  if (val == 'admins_only') {
    return 'admins_only';
  }
  if (val == 'admins_and_members') {
    return 'admins_and_members';
  }
  if (val == 'all_managed_users') {
    return 'all_managed_users';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeGroupFullPermissionsField(
  val: GroupFullPermissionsField
): SerializedData {
  return {
    ['can_invite_as_collaborator']:
      val.canInviteAsCollaborator == void 0
        ? void 0
        : val.canInviteAsCollaborator,
  };
}
export function deserializeGroupFullPermissionsField(
  val: any
): GroupFullPermissionsField {
  const canInviteAsCollaborator: undefined | boolean =
    val.can_invite_as_collaborator == void 0
      ? void 0
      : val.can_invite_as_collaborator;
  return {
    canInviteAsCollaborator: canInviteAsCollaborator,
  } satisfies GroupFullPermissionsField;
}
export function serializeGroupFull(val: GroupFull): SerializedData {
  const base: any = serializeGroup(val);
  if (!sdIsMap(base)) {
    throw 'Expecting a map for "GroupFull"';
  }
  return {
    ...base,
    ...{
      ['provenance']: val.provenance == void 0 ? void 0 : val.provenance,
      ['external_sync_identifier']:
        val.externalSyncIdentifier == void 0
          ? void 0
          : val.externalSyncIdentifier,
      ['description']: val.description == void 0 ? void 0 : val.description,
      ['invitability_level']:
        val.invitabilityLevel == void 0
          ? void 0
          : serializeGroupFullInvitabilityLevelField(val.invitabilityLevel),
      ['member_viewability_level']:
        val.memberViewabilityLevel == void 0
          ? void 0
          : serializeGroupFullMemberViewabilityLevelField(
              val.memberViewabilityLevel
            ),
      ['permissions']:
        val.permissions == void 0
          ? void 0
          : serializeGroupFullPermissionsField(val.permissions),
    },
  };
}
export function deserializeGroupFull(val: any): GroupFull {
  const provenance: undefined | string =
    val.provenance == void 0 ? void 0 : val.provenance;
  const externalSyncIdentifier: undefined | string =
    val.external_sync_identifier == void 0
      ? void 0
      : val.external_sync_identifier;
  const description: undefined | string =
    val.description == void 0 ? void 0 : val.description;
  const invitabilityLevel: undefined | GroupFullInvitabilityLevelField =
    val.invitability_level == void 0
      ? void 0
      : deserializeGroupFullInvitabilityLevelField(val.invitability_level);
  const memberViewabilityLevel:
    | undefined
    | GroupFullMemberViewabilityLevelField =
    val.member_viewability_level == void 0
      ? void 0
      : deserializeGroupFullMemberViewabilityLevelField(
          val.member_viewability_level
        );
  const permissions: undefined | GroupFullPermissionsField =
    val.permissions == void 0
      ? void 0
      : deserializeGroupFullPermissionsField(val.permissions);
  const createdAt: undefined | string =
    val.created_at == void 0 ? void 0 : val.created_at;
  const modifiedAt: undefined | string =
    val.modified_at == void 0 ? void 0 : val.modified_at;
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const groupType: undefined | GroupMiniGroupTypeField =
    val.group_type == void 0
      ? void 0
      : deserializeGroupMiniGroupTypeField(val.group_type);
  const id: string = val.id;
  const type: GroupBaseTypeField = deserializeGroupBaseTypeField(val.type);
  return {
    provenance: provenance,
    externalSyncIdentifier: externalSyncIdentifier,
    description: description,
    invitabilityLevel: invitabilityLevel,
    memberViewabilityLevel: memberViewabilityLevel,
    permissions: permissions,
    createdAt: createdAt,
    modifiedAt: modifiedAt,
    name: name,
    groupType: groupType,
    id: id,
    type: type,
  } satisfies GroupFull;
}
export function serializeGroupsOrderDirectionField(
  val: GroupsOrderDirectionField
): SerializedData {
  return val;
}
export function deserializeGroupsOrderDirectionField(
  val: any
): GroupsOrderDirectionField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "GroupsOrderDirectionField"';
  }
  if (val == 'ASC') {
    return 'ASC';
  }
  if (val == 'DESC') {
    return 'DESC';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeGroupsOrderField(
  val: GroupsOrderField
): SerializedData {
  return {
    ['by']: val.by == void 0 ? void 0 : val.by,
    ['direction']:
      val.direction == void 0
        ? void 0
        : serializeGroupsOrderDirectionField(val.direction),
  };
}
export function deserializeGroupsOrderField(val: any): GroupsOrderField {
  const by: undefined | string = val.by == void 0 ? void 0 : val.by;
  const direction: undefined | GroupsOrderDirectionField =
    val.direction == void 0
      ? void 0
      : deserializeGroupsOrderDirectionField(val.direction);
  return { by: by, direction: direction } satisfies GroupsOrderField;
}
export function serializeGroups(val: Groups): SerializedData {
  return {
    ['total_count']: val.totalCount == void 0 ? void 0 : val.totalCount,
    ['limit']: val.limit == void 0 ? void 0 : val.limit,
    ['offset']: val.offset == void 0 ? void 0 : val.offset,
    ['order']:
      val.order == void 0
        ? void 0
        : (val.order.map(function (item: GroupsOrderField): any {
            return serializeGroupsOrderField(item);
          }) as readonly any[]),
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (item: GroupFull): any {
            return serializeGroupFull(item);
          }) as readonly any[]),
  };
}
export function deserializeGroups(val: any): Groups {
  const totalCount: undefined | number =
    val.total_count == void 0 ? void 0 : val.total_count;
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
  const offset: undefined | number = val.offset == void 0 ? void 0 : val.offset;
  const order: undefined | readonly GroupsOrderField[] =
    val.order == void 0
      ? void 0
      : sdIsList(val.order)
      ? (val.order.map(function (itm: SerializedData): any {
          return deserializeGroupsOrderField(itm);
        }) as readonly any[])
      : [];
  const entries: undefined | readonly GroupFull[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (itm: SerializedData): any {
          return deserializeGroupFull(itm);
        }) as readonly any[])
      : [];
  return {
    totalCount: totalCount,
    limit: limit,
    offset: offset,
    order: order,
    entries: entries,
  } satisfies Groups;
}
export function serializeLegalHoldPolicyMiniTypeField(
  val: LegalHoldPolicyMiniTypeField
): SerializedData {
  return val;
}
export function deserializeLegalHoldPolicyMiniTypeField(
  val: any
): LegalHoldPolicyMiniTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "LegalHoldPolicyMiniTypeField"';
  }
  if (val == 'legal_hold_policy') {
    return 'legal_hold_policy';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeLegalHoldPolicyMini(
  val: LegalHoldPolicyMini
): SerializedData {
  return {
    ['id']: val.id,
    ['type']: serializeLegalHoldPolicyMiniTypeField(val.type),
  };
}
export function deserializeLegalHoldPolicyMini(val: any): LegalHoldPolicyMini {
  const id: string = val.id;
  const type: LegalHoldPolicyMiniTypeField =
    deserializeLegalHoldPolicyMiniTypeField(val.type);
  return { id: id, type: type } satisfies LegalHoldPolicyMini;
}
export function serializeLegalHoldPolicyAssignmentBaseTypeField(
  val: LegalHoldPolicyAssignmentBaseTypeField
): SerializedData {
  return val;
}
export function deserializeLegalHoldPolicyAssignmentBaseTypeField(
  val: any
): LegalHoldPolicyAssignmentBaseTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "LegalHoldPolicyAssignmentBaseTypeField"';
  }
  if (val == 'legal_hold_policy_assignment') {
    return 'legal_hold_policy_assignment';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeLegalHoldPolicyAssignmentBase(
  val: LegalHoldPolicyAssignmentBase
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0
        ? void 0
        : serializeLegalHoldPolicyAssignmentBaseTypeField(val.type),
  };
}
export function deserializeLegalHoldPolicyAssignmentBase(
  val: any
): LegalHoldPolicyAssignmentBase {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | LegalHoldPolicyAssignmentBaseTypeField =
    val.type == void 0
      ? void 0
      : deserializeLegalHoldPolicyAssignmentBaseTypeField(val.type);
  return { id: id, type: type } satisfies LegalHoldPolicyAssignmentBase;
}
export function serializeMetadataBase(val: MetadataBase): SerializedData {
  return {
    ['$parent']: val.parent == void 0 ? void 0 : val.parent,
    ['$template']: val.template == void 0 ? void 0 : val.template,
    ['$scope']: val.scope == void 0 ? void 0 : val.scope,
    ['$version']: val.version == void 0 ? void 0 : val.version,
  };
}
export function deserializeMetadataBase(val: any): MetadataBase {
  const parent: undefined | string =
    val.$parent == void 0 ? void 0 : val.$parent;
  const template: undefined | string =
    val.$template == void 0 ? void 0 : val.$template;
  const scope: undefined | string = val.$scope == void 0 ? void 0 : val.$scope;
  const version: undefined | number =
    val.$version == void 0 ? void 0 : val.$version;
  return {
    parent: parent,
    template: template,
    scope: scope,
    version: version,
  } satisfies MetadataBase;
}
export function serializeMetadata(val: Metadata): SerializedData {
  return serializeMetadataBase(val);
}
export function deserializeMetadata(val: any): Metadata {
  return deserializeMetadataBase(val);
}
export function serializeMetadatas(val: Metadatas): SerializedData {
  return {
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (item: Metadata): any {
            return serializeMetadata(item);
          }) as readonly any[]),
    ['limit']: val.limit == void 0 ? void 0 : val.limit,
  };
}
export function deserializeMetadatas(val: any): Metadatas {
  const entries: undefined | readonly Metadata[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (itm: SerializedData): any {
          return deserializeMetadata(itm);
        }) as readonly any[])
      : [];
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
  return { entries: entries, limit: limit } satisfies Metadatas;
}
export function serializeMetadataFull(val: MetadataFull): SerializedData {
  const base: any = serializeMetadata(val);
  if (!sdIsMap(base)) {
    throw 'Expecting a map for "MetadataFull"';
  }
  return {
    ...base,
    ...{
      ...{
        ['$canEdit']: val.canEdit == void 0 ? void 0 : val.canEdit,
        ['$id']: val.id == void 0 ? void 0 : val.id,
        ['$type']: val.type == void 0 ? void 0 : val.type,
        ['$typeVersion']: val.typeVersion == void 0 ? void 0 : val.typeVersion,
      },
      ...val.extraData,
    },
  };
}
export function deserializeMetadataFull(val: any): MetadataFull {
  const canEdit: undefined | boolean =
    val.$canEdit == void 0 ? void 0 : val.$canEdit;
  const id: undefined | string = val.$id == void 0 ? void 0 : val.$id;
  const type: undefined | string = val.$type == void 0 ? void 0 : val.$type;
  const typeVersion: undefined | number =
    val.$typeVersion == void 0 ? void 0 : val.$typeVersion;
  const extraData:
    | undefined
    | {
        readonly [key: string]: string;
      } = val == void 0 ? void 0 : val;
  const parent: undefined | string =
    val.$parent == void 0 ? void 0 : val.$parent;
  const template: undefined | string =
    val.$template == void 0 ? void 0 : val.$template;
  const scope: undefined | string = val.$scope == void 0 ? void 0 : val.$scope;
  const version: undefined | number =
    val.$version == void 0 ? void 0 : val.$version;
  return {
    canEdit: canEdit,
    id: id,
    type: type,
    typeVersion: typeVersion,
    extraData: extraData,
    parent: parent,
    template: template,
    scope: scope,
    version: version,
  } satisfies MetadataFull;
}
export function serializeMetadataCascadePolicyTypeField(
  val: MetadataCascadePolicyTypeField
): SerializedData {
  return val;
}
export function deserializeMetadataCascadePolicyTypeField(
  val: any
): MetadataCascadePolicyTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "MetadataCascadePolicyTypeField"';
  }
  if (val == 'metadata_cascade_policy') {
    return 'metadata_cascade_policy';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeMetadataCascadePolicyOwnerEnterpriseTypeField(
  val: MetadataCascadePolicyOwnerEnterpriseTypeField
): SerializedData {
  return val;
}
export function deserializeMetadataCascadePolicyOwnerEnterpriseTypeField(
  val: any
): MetadataCascadePolicyOwnerEnterpriseTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "MetadataCascadePolicyOwnerEnterpriseTypeField"';
  }
  if (val == 'enterprise') {
    return 'enterprise';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeMetadataCascadePolicyOwnerEnterpriseField(
  val: MetadataCascadePolicyOwnerEnterpriseField
): SerializedData {
  return {
    ['type']:
      val.type == void 0
        ? void 0
        : serializeMetadataCascadePolicyOwnerEnterpriseTypeField(val.type),
    ['id']: val.id == void 0 ? void 0 : val.id,
  };
}
export function deserializeMetadataCascadePolicyOwnerEnterpriseField(
  val: any
): MetadataCascadePolicyOwnerEnterpriseField {
  const type: undefined | MetadataCascadePolicyOwnerEnterpriseTypeField =
    val.type == void 0
      ? void 0
      : deserializeMetadataCascadePolicyOwnerEnterpriseTypeField(val.type);
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  return {
    type: type,
    id: id,
  } satisfies MetadataCascadePolicyOwnerEnterpriseField;
}
export function serializeMetadataCascadePolicyParentTypeField(
  val: MetadataCascadePolicyParentTypeField
): SerializedData {
  return val;
}
export function deserializeMetadataCascadePolicyParentTypeField(
  val: any
): MetadataCascadePolicyParentTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "MetadataCascadePolicyParentTypeField"';
  }
  if (val == 'folder') {
    return 'folder';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeMetadataCascadePolicyParentField(
  val: MetadataCascadePolicyParentField
): SerializedData {
  return {
    ['type']:
      val.type == void 0
        ? void 0
        : serializeMetadataCascadePolicyParentTypeField(val.type),
    ['id']: val.id == void 0 ? void 0 : val.id,
  };
}
export function deserializeMetadataCascadePolicyParentField(
  val: any
): MetadataCascadePolicyParentField {
  const type: undefined | MetadataCascadePolicyParentTypeField =
    val.type == void 0
      ? void 0
      : deserializeMetadataCascadePolicyParentTypeField(val.type);
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  return { type: type, id: id } satisfies MetadataCascadePolicyParentField;
}
export function serializeMetadataCascadePolicy(
  val: MetadataCascadePolicy
): SerializedData {
  return {
    ['id']: val.id,
    ['type']: serializeMetadataCascadePolicyTypeField(val.type),
    ['owner_enterprise']:
      val.ownerEnterprise == void 0
        ? void 0
        : serializeMetadataCascadePolicyOwnerEnterpriseField(
            val.ownerEnterprise
          ),
    ['parent']:
      val.parent == void 0
        ? void 0
        : serializeMetadataCascadePolicyParentField(val.parent),
    ['scope']: val.scope == void 0 ? void 0 : val.scope,
    ['templateKey']: val.templateKey == void 0 ? void 0 : val.templateKey,
  };
}
export function deserializeMetadataCascadePolicy(
  val: any
): MetadataCascadePolicy {
  const id: string = val.id;
  const type: MetadataCascadePolicyTypeField =
    deserializeMetadataCascadePolicyTypeField(val.type);
  const ownerEnterprise: undefined | MetadataCascadePolicyOwnerEnterpriseField =
    val.owner_enterprise == void 0
      ? void 0
      : deserializeMetadataCascadePolicyOwnerEnterpriseField(
          val.owner_enterprise
        );
  const parent: undefined | MetadataCascadePolicyParentField =
    val.parent == void 0
      ? void 0
      : deserializeMetadataCascadePolicyParentField(val.parent);
  const scope: undefined | string = val.scope == void 0 ? void 0 : val.scope;
  const templateKey: undefined | string =
    val.templateKey == void 0 ? void 0 : val.templateKey;
  return {
    id: id,
    type: type,
    ownerEnterprise: ownerEnterprise,
    parent: parent,
    scope: scope,
    templateKey: templateKey,
  } satisfies MetadataCascadePolicy;
}
export function serializeMetadataCascadePolicies(
  val: MetadataCascadePolicies
): SerializedData {
  return {
    ['limit']: val.limit == void 0 ? void 0 : val.limit,
    ['next_marker']: val.nextMarker == void 0 ? void 0 : val.nextMarker,
    ['prev_marker']: val.prevMarker == void 0 ? void 0 : val.prevMarker,
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (item: MetadataCascadePolicy): any {
            return serializeMetadataCascadePolicy(item);
          }) as readonly any[]),
  };
}
export function deserializeMetadataCascadePolicies(
  val: any
): MetadataCascadePolicies {
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
  const nextMarker: undefined | string =
    val.next_marker == void 0 ? void 0 : val.next_marker;
  const prevMarker: undefined | string =
    val.prev_marker == void 0 ? void 0 : val.prev_marker;
  const entries: undefined | readonly MetadataCascadePolicy[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (itm: SerializedData): any {
          return deserializeMetadataCascadePolicy(itm);
        }) as readonly any[])
      : [];
  return {
    limit: limit,
    nextMarker: nextMarker,
    prevMarker: prevMarker,
    entries: entries,
  } satisfies MetadataCascadePolicies;
}
export function serializeMetadataQueryIndexStatusField(
  val: MetadataQueryIndexStatusField
): SerializedData {
  return val;
}
export function deserializeMetadataQueryIndexStatusField(
  val: any
): MetadataQueryIndexStatusField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "MetadataQueryIndexStatusField"';
  }
  if (val == 'building') {
    return 'building';
  }
  if (val == 'active') {
    return 'active';
  }
  if (val == 'disabled') {
    return 'disabled';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeMetadataQueryIndexFieldsSortDirectionField(
  val: MetadataQueryIndexFieldsSortDirectionField
): SerializedData {
  return val;
}
export function deserializeMetadataQueryIndexFieldsSortDirectionField(
  val: any
): MetadataQueryIndexFieldsSortDirectionField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "MetadataQueryIndexFieldsSortDirectionField"';
  }
  if (val == 'asc') {
    return 'asc';
  }
  if (val == 'desc') {
    return 'desc';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeMetadataQueryIndexFieldsField(
  val: MetadataQueryIndexFieldsField
): SerializedData {
  return {
    ['key']: val.key == void 0 ? void 0 : val.key,
    ['sort_direction']:
      val.sortDirection == void 0
        ? void 0
        : serializeMetadataQueryIndexFieldsSortDirectionField(
            val.sortDirection
          ),
  };
}
export function deserializeMetadataQueryIndexFieldsField(
  val: any
): MetadataQueryIndexFieldsField {
  const key: undefined | string = val.key == void 0 ? void 0 : val.key;
  const sortDirection: undefined | MetadataQueryIndexFieldsSortDirectionField =
    val.sort_direction == void 0
      ? void 0
      : deserializeMetadataQueryIndexFieldsSortDirectionField(
          val.sort_direction
        );
  return {
    key: key,
    sortDirection: sortDirection,
  } satisfies MetadataQueryIndexFieldsField;
}
export function serializeMetadataQueryIndex(
  val: MetadataQueryIndex
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']: val.type,
    ['status']: serializeMetadataQueryIndexStatusField(val.status),
    ['fields']:
      val.fields == void 0
        ? void 0
        : (val.fields.map(function (item: MetadataQueryIndexFieldsField): any {
            return serializeMetadataQueryIndexFieldsField(item);
          }) as readonly any[]),
  };
}
export function deserializeMetadataQueryIndex(val: any): MetadataQueryIndex {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: string = val.type;
  const status: MetadataQueryIndexStatusField =
    deserializeMetadataQueryIndexStatusField(val.status);
  const fields: undefined | readonly MetadataQueryIndexFieldsField[] =
    val.fields == void 0
      ? void 0
      : sdIsList(val.fields)
      ? (val.fields.map(function (itm: SerializedData): any {
          return deserializeMetadataQueryIndexFieldsField(itm);
        }) as readonly any[])
      : [];
  return {
    id: id,
    type: type,
    status: status,
    fields: fields,
  } satisfies MetadataQueryIndex;
}
export function serializeMetadataQueryIndices(
  val: MetadataQueryIndices
): SerializedData {
  return {
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (item: MetadataQueryIndex): any {
            return serializeMetadataQueryIndex(item);
          }) as readonly any[]),
    ['limit']: val.limit == void 0 ? void 0 : val.limit,
    ['next_marker']: val.nextMarker == void 0 ? void 0 : val.nextMarker,
  };
}
export function deserializeMetadataQueryIndices(
  val: any
): MetadataQueryIndices {
  const entries: undefined | readonly MetadataQueryIndex[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (itm: SerializedData): any {
          return deserializeMetadataQueryIndex(itm);
        }) as readonly any[])
      : [];
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
  const nextMarker: undefined | string =
    val.next_marker == void 0 ? void 0 : val.next_marker;
  return {
    entries: entries,
    limit: limit,
    nextMarker: nextMarker,
  } satisfies MetadataQueryIndices;
}
export function serializeMetadataTemplateTypeField(
  val: MetadataTemplateTypeField
): SerializedData {
  return val;
}
export function deserializeMetadataTemplateTypeField(
  val: any
): MetadataTemplateTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "MetadataTemplateTypeField"';
  }
  if (val == 'metadata_template') {
    return 'metadata_template';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeMetadataTemplateFieldsTypeField(
  val: MetadataTemplateFieldsTypeField
): SerializedData {
  return val;
}
export function deserializeMetadataTemplateFieldsTypeField(
  val: any
): MetadataTemplateFieldsTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "MetadataTemplateFieldsTypeField"';
  }
  if (val == 'string') {
    return 'string';
  }
  if (val == 'float') {
    return 'float';
  }
  if (val == 'date') {
    return 'date';
  }
  if (val == 'enum') {
    return 'enum';
  }
  if (val == 'multiSelect') {
    return 'multiSelect';
  }
  if (val == 'integer') {
    return 'integer';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeMetadataTemplateFieldsOptionsField(
  val: MetadataTemplateFieldsOptionsField
): SerializedData {
  return { ['key']: val.key, ['id']: val.id == void 0 ? void 0 : val.id };
}
export function deserializeMetadataTemplateFieldsOptionsField(
  val: any
): MetadataTemplateFieldsOptionsField {
  const key: string = val.key;
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  return { key: key, id: id } satisfies MetadataTemplateFieldsOptionsField;
}
export function serializeMetadataTemplateFieldsField(
  val: MetadataTemplateFieldsField
): SerializedData {
  return {
    ['type']: serializeMetadataTemplateFieldsTypeField(val.type),
    ['key']: val.key,
    ['displayName']: val.displayName,
    ['description']: val.description == void 0 ? void 0 : val.description,
    ['hidden']: val.hidden == void 0 ? void 0 : val.hidden,
    ['options']:
      val.options == void 0
        ? void 0
        : (val.options.map(function (
            item: MetadataTemplateFieldsOptionsField
          ): any {
            return serializeMetadataTemplateFieldsOptionsField(item);
          }) as readonly any[]),
    ['id']: val.id == void 0 ? void 0 : val.id,
  };
}
export function deserializeMetadataTemplateFieldsField(
  val: any
): MetadataTemplateFieldsField {
  const type: MetadataTemplateFieldsTypeField =
    deserializeMetadataTemplateFieldsTypeField(val.type);
  const key: string = val.key;
  const displayName: string = val.displayName;
  const description: undefined | string =
    val.description == void 0 ? void 0 : val.description;
  const hidden: undefined | boolean =
    val.hidden == void 0 ? void 0 : val.hidden;
  const options: undefined | readonly MetadataTemplateFieldsOptionsField[] =
    val.options == void 0
      ? void 0
      : sdIsList(val.options)
      ? (val.options.map(function (itm: SerializedData): any {
          return deserializeMetadataTemplateFieldsOptionsField(itm);
        }) as readonly any[])
      : [];
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  return {
    type: type,
    key: key,
    displayName: displayName,
    description: description,
    hidden: hidden,
    options: options,
    id: id,
  } satisfies MetadataTemplateFieldsField;
}
export function serializeMetadataTemplate(
  val: MetadataTemplate
): SerializedData {
  return {
    ['id']: val.id,
    ['type']: serializeMetadataTemplateTypeField(val.type),
    ['scope']: val.scope == void 0 ? void 0 : val.scope,
    ['templateKey']: val.templateKey == void 0 ? void 0 : val.templateKey,
    ['displayName']: val.displayName == void 0 ? void 0 : val.displayName,
    ['hidden']: val.hidden == void 0 ? void 0 : val.hidden,
    ['fields']:
      val.fields == void 0
        ? void 0
        : (val.fields.map(function (item: MetadataTemplateFieldsField): any {
            return serializeMetadataTemplateFieldsField(item);
          }) as readonly any[]),
    ['copyInstanceOnItemCopy']:
      val.copyInstanceOnItemCopy == void 0
        ? void 0
        : val.copyInstanceOnItemCopy,
  };
}
export function deserializeMetadataTemplate(val: any): MetadataTemplate {
  const id: string = val.id;
  const type: MetadataTemplateTypeField = deserializeMetadataTemplateTypeField(
    val.type
  );
  const scope: undefined | string = val.scope == void 0 ? void 0 : val.scope;
  const templateKey: undefined | string =
    val.templateKey == void 0 ? void 0 : val.templateKey;
  const displayName: undefined | string =
    val.displayName == void 0 ? void 0 : val.displayName;
  const hidden: undefined | boolean =
    val.hidden == void 0 ? void 0 : val.hidden;
  const fields: undefined | readonly MetadataTemplateFieldsField[] =
    val.fields == void 0
      ? void 0
      : sdIsList(val.fields)
      ? (val.fields.map(function (itm: SerializedData): any {
          return deserializeMetadataTemplateFieldsField(itm);
        }) as readonly any[])
      : [];
  const copyInstanceOnItemCopy: undefined | boolean =
    val.copyInstanceOnItemCopy == void 0 ? void 0 : val.copyInstanceOnItemCopy;
  return {
    id: id,
    type: type,
    scope: scope,
    templateKey: templateKey,
    displayName: displayName,
    hidden: hidden,
    fields: fields,
    copyInstanceOnItemCopy: copyInstanceOnItemCopy,
  } satisfies MetadataTemplate;
}
export function serializeMetadataTemplates(
  val: MetadataTemplates
): SerializedData {
  return {
    ['limit']: val.limit == void 0 ? void 0 : val.limit,
    ['next_marker']: val.nextMarker == void 0 ? void 0 : val.nextMarker,
    ['prev_marker']: val.prevMarker == void 0 ? void 0 : val.prevMarker,
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (item: MetadataTemplate): any {
            return serializeMetadataTemplate(item);
          }) as readonly any[]),
  };
}
export function deserializeMetadataTemplates(val: any): MetadataTemplates {
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
  const nextMarker: undefined | string =
    val.next_marker == void 0 ? void 0 : val.next_marker;
  const prevMarker: undefined | string =
    val.prev_marker == void 0 ? void 0 : val.prev_marker;
  const entries: undefined | readonly MetadataTemplate[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (itm: SerializedData): any {
          return deserializeMetadataTemplate(itm);
        }) as readonly any[])
      : [];
  return {
    limit: limit,
    nextMarker: nextMarker,
    prevMarker: prevMarker,
    entries: entries,
  } satisfies MetadataTemplates;
}
export function serializeRealtimeServer(val: RealtimeServer): SerializedData {
  return {
    ['type']: val.type == void 0 ? void 0 : val.type,
    ['url']: val.url == void 0 ? void 0 : val.url,
    ['ttl']: val.ttl == void 0 ? void 0 : val.ttl,
    ['max_retries']: val.maxRetries == void 0 ? void 0 : val.maxRetries,
    ['retry_timeout']: val.retryTimeout == void 0 ? void 0 : val.retryTimeout,
  };
}
export function deserializeRealtimeServer(val: any): RealtimeServer {
  const type: undefined | string = val.type == void 0 ? void 0 : val.type;
  const url: undefined | string = val.url == void 0 ? void 0 : val.url;
  const ttl: undefined | number = val.ttl == void 0 ? void 0 : val.ttl;
  const maxRetries: undefined | number =
    val.max_retries == void 0 ? void 0 : val.max_retries;
  const retryTimeout: undefined | number =
    val.retry_timeout == void 0 ? void 0 : val.retry_timeout;
  return {
    type: type,
    url: url,
    ttl: ttl,
    maxRetries: maxRetries,
    retryTimeout: retryTimeout,
  } satisfies RealtimeServer;
}
export function serializeRealtimeServers(val: RealtimeServers): SerializedData {
  return {
    ['chunk_size']: val.chunkSize == void 0 ? void 0 : val.chunkSize,
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (item: RealtimeServer): any {
            return serializeRealtimeServer(item);
          }) as readonly any[]),
  };
}
export function deserializeRealtimeServers(val: any): RealtimeServers {
  const chunkSize: undefined | number =
    val.chunk_size == void 0 ? void 0 : val.chunk_size;
  const entries: undefined | readonly RealtimeServer[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (itm: SerializedData): any {
          return deserializeRealtimeServer(itm);
        }) as readonly any[])
      : [];
  return { chunkSize: chunkSize, entries: entries } satisfies RealtimeServers;
}
export function serializeRetentionPolicyBaseTypeField(
  val: RetentionPolicyBaseTypeField
): SerializedData {
  return val;
}
export function deserializeRetentionPolicyBaseTypeField(
  val: any
): RetentionPolicyBaseTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "RetentionPolicyBaseTypeField"';
  }
  if (val == 'retention_policy') {
    return 'retention_policy';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeRetentionPolicyBase(
  val: RetentionPolicyBase
): SerializedData {
  return {
    ['id']: val.id,
    ['type']: serializeRetentionPolicyBaseTypeField(val.type),
  };
}
export function deserializeRetentionPolicyBase(val: any): RetentionPolicyBase {
  const id: string = val.id;
  const type: RetentionPolicyBaseTypeField =
    deserializeRetentionPolicyBaseTypeField(val.type);
  return { id: id, type: type } satisfies RetentionPolicyBase;
}
export function serializeRetentionPolicyMiniDispositionActionField(
  val: RetentionPolicyMiniDispositionActionField
): SerializedData {
  return val;
}
export function deserializeRetentionPolicyMiniDispositionActionField(
  val: any
): RetentionPolicyMiniDispositionActionField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "RetentionPolicyMiniDispositionActionField"';
  }
  if (val == 'permanently_delete') {
    return 'permanently_delete';
  }
  if (val == 'remove_retention') {
    return 'remove_retention';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeRetentionPolicyMini(
  val: RetentionPolicyMini
): SerializedData {
  const base: any = serializeRetentionPolicyBase(val);
  if (!sdIsMap(base)) {
    throw 'Expecting a map for "RetentionPolicyMini"';
  }
  return {
    ...base,
    ...{
      ['policy_name']: val.policyName == void 0 ? void 0 : val.policyName,
      ['retention_length']:
        val.retentionLength == void 0 ? void 0 : val.retentionLength,
      ['disposition_action']:
        val.dispositionAction == void 0
          ? void 0
          : serializeRetentionPolicyMiniDispositionActionField(
              val.dispositionAction
            ),
    },
  };
}
export function deserializeRetentionPolicyMini(val: any): RetentionPolicyMini {
  const policyName: undefined | string =
    val.policy_name == void 0 ? void 0 : val.policy_name;
  const retentionLength: undefined | string =
    val.retention_length == void 0 ? void 0 : val.retention_length;
  const dispositionAction:
    | undefined
    | RetentionPolicyMiniDispositionActionField =
    val.disposition_action == void 0
      ? void 0
      : deserializeRetentionPolicyMiniDispositionActionField(
          val.disposition_action
        );
  const id: string = val.id;
  const type: RetentionPolicyBaseTypeField =
    deserializeRetentionPolicyBaseTypeField(val.type);
  return {
    policyName: policyName,
    retentionLength: retentionLength,
    dispositionAction: dispositionAction,
    id: id,
    type: type,
  } satisfies RetentionPolicyMini;
}
export function serializeFileVersionRetentionTypeField(
  val: FileVersionRetentionTypeField
): SerializedData {
  return val;
}
export function deserializeFileVersionRetentionTypeField(
  val: any
): FileVersionRetentionTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "FileVersionRetentionTypeField"';
  }
  if (val == 'file_version_retention') {
    return 'file_version_retention';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeFileVersionRetention(
  val: FileVersionRetention
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0
        ? void 0
        : serializeFileVersionRetentionTypeField(val.type),
    ['file_version']:
      val.fileVersion == void 0
        ? void 0
        : serializeFileVersionMini(val.fileVersion),
    ['file']: val.file == void 0 ? void 0 : serializeFileMini(val.file),
    ['applied_at']: val.appliedAt == void 0 ? void 0 : val.appliedAt,
    ['disposition_at']:
      val.dispositionAt == void 0 ? void 0 : val.dispositionAt,
    ['winning_retention_policy']:
      val.winningRetentionPolicy == void 0
        ? void 0
        : serializeRetentionPolicyMini(val.winningRetentionPolicy),
  };
}
export function deserializeFileVersionRetention(
  val: any
): FileVersionRetention {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | FileVersionRetentionTypeField =
    val.type == void 0
      ? void 0
      : deserializeFileVersionRetentionTypeField(val.type);
  const fileVersion: undefined | FileVersionMini =
    val.file_version == void 0
      ? void 0
      : deserializeFileVersionMini(val.file_version);
  const file: undefined | FileMini =
    val.file == void 0 ? void 0 : deserializeFileMini(val.file);
  const appliedAt: undefined | string =
    val.applied_at == void 0 ? void 0 : val.applied_at;
  const dispositionAt: undefined | string =
    val.disposition_at == void 0 ? void 0 : val.disposition_at;
  const winningRetentionPolicy: undefined | RetentionPolicyMini =
    val.winning_retention_policy == void 0
      ? void 0
      : deserializeRetentionPolicyMini(val.winning_retention_policy);
  return {
    id: id,
    type: type,
    fileVersion: fileVersion,
    file: file,
    appliedAt: appliedAt,
    dispositionAt: dispositionAt,
    winningRetentionPolicy: winningRetentionPolicy,
  } satisfies FileVersionRetention;
}
export function serializeFileVersionRetentions(
  val: FileVersionRetentions
): SerializedData {
  return {
    ['limit']: val.limit == void 0 ? void 0 : val.limit,
    ['next_marker']: val.nextMarker == void 0 ? void 0 : val.nextMarker,
    ['prev_marker']: val.prevMarker == void 0 ? void 0 : val.prevMarker,
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (item: FileVersionRetention): any {
            return serializeFileVersionRetention(item);
          }) as readonly any[]),
  };
}
export function deserializeFileVersionRetentions(
  val: any
): FileVersionRetentions {
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
  const nextMarker: undefined | string =
    val.next_marker == void 0 ? void 0 : val.next_marker;
  const prevMarker: undefined | string =
    val.prev_marker == void 0 ? void 0 : val.prev_marker;
  const entries: undefined | readonly FileVersionRetention[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (itm: SerializedData): any {
          return deserializeFileVersionRetention(itm);
        }) as readonly any[])
      : [];
  return {
    limit: limit,
    nextMarker: nextMarker,
    prevMarker: prevMarker,
    entries: entries,
  } satisfies FileVersionRetentions;
}
export function serializeRetentionPolicyAssignmentBaseTypeField(
  val: RetentionPolicyAssignmentBaseTypeField
): SerializedData {
  return val;
}
export function deserializeRetentionPolicyAssignmentBaseTypeField(
  val: any
): RetentionPolicyAssignmentBaseTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "RetentionPolicyAssignmentBaseTypeField"';
  }
  if (val == 'retention_policy_assignment') {
    return 'retention_policy_assignment';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeRetentionPolicyAssignmentBase(
  val: RetentionPolicyAssignmentBase
): SerializedData {
  return {
    ['id']: val.id,
    ['type']: serializeRetentionPolicyAssignmentBaseTypeField(val.type),
  };
}
export function deserializeRetentionPolicyAssignmentBase(
  val: any
): RetentionPolicyAssignmentBase {
  const id: string = val.id;
  const type: RetentionPolicyAssignmentBaseTypeField =
    deserializeRetentionPolicyAssignmentBaseTypeField(val.type);
  return { id: id, type: type } satisfies RetentionPolicyAssignmentBase;
}
export function serializeShieldInformationBarrierBaseTypeField(
  val: ShieldInformationBarrierBaseTypeField
): SerializedData {
  return val;
}
export function deserializeShieldInformationBarrierBaseTypeField(
  val: any
): ShieldInformationBarrierBaseTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "ShieldInformationBarrierBaseTypeField"';
  }
  if (val == 'shield_information_barrier') {
    return 'shield_information_barrier';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeShieldInformationBarrierBase(
  val: ShieldInformationBarrierBase
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0
        ? void 0
        : serializeShieldInformationBarrierBaseTypeField(val.type),
  };
}
export function deserializeShieldInformationBarrierBase(
  val: any
): ShieldInformationBarrierBase {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | ShieldInformationBarrierBaseTypeField =
    val.type == void 0
      ? void 0
      : deserializeShieldInformationBarrierBaseTypeField(val.type);
  return { id: id, type: type } satisfies ShieldInformationBarrierBase;
}
export function serializeShieldInformationBarrierReference(
  val: ShieldInformationBarrierReference
): SerializedData {
  return {
    ['shield_information_barrier']:
      val.shieldInformationBarrier == void 0
        ? void 0
        : serializeShieldInformationBarrierBase(val.shieldInformationBarrier),
  };
}
export function deserializeShieldInformationBarrierReference(
  val: any
): ShieldInformationBarrierReference {
  const shieldInformationBarrier: undefined | ShieldInformationBarrierBase =
    val.shield_information_barrier == void 0
      ? void 0
      : deserializeShieldInformationBarrierBase(val.shield_information_barrier);
  return {
    shieldInformationBarrier: shieldInformationBarrier,
  } satisfies ShieldInformationBarrierReference;
}
export function serializeShieldInformationBarrierReportBaseTypeField(
  val: ShieldInformationBarrierReportBaseTypeField
): SerializedData {
  return val;
}
export function deserializeShieldInformationBarrierReportBaseTypeField(
  val: any
): ShieldInformationBarrierReportBaseTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "ShieldInformationBarrierReportBaseTypeField"';
  }
  if (val == 'shield_information_barrier_report') {
    return 'shield_information_barrier_report';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeShieldInformationBarrierReportBase(
  val: ShieldInformationBarrierReportBase
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0
        ? void 0
        : serializeShieldInformationBarrierReportBaseTypeField(val.type),
  };
}
export function deserializeShieldInformationBarrierReportBase(
  val: any
): ShieldInformationBarrierReportBase {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | ShieldInformationBarrierReportBaseTypeField =
    val.type == void 0
      ? void 0
      : deserializeShieldInformationBarrierReportBaseTypeField(val.type);
  return { id: id, type: type } satisfies ShieldInformationBarrierReportBase;
}
export function serializeShieldInformationBarrierSegmentMemberBaseTypeField(
  val: ShieldInformationBarrierSegmentMemberBaseTypeField
): SerializedData {
  return val;
}
export function deserializeShieldInformationBarrierSegmentMemberBaseTypeField(
  val: any
): ShieldInformationBarrierSegmentMemberBaseTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "ShieldInformationBarrierSegmentMemberBaseTypeField"';
  }
  if (val == 'shield_information_barrier_segment_member') {
    return 'shield_information_barrier_segment_member';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeShieldInformationBarrierSegmentMemberBase(
  val: ShieldInformationBarrierSegmentMemberBase
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0
        ? void 0
        : serializeShieldInformationBarrierSegmentMemberBaseTypeField(val.type),
  };
}
export function deserializeShieldInformationBarrierSegmentMemberBase(
  val: any
): ShieldInformationBarrierSegmentMemberBase {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | ShieldInformationBarrierSegmentMemberBaseTypeField =
    val.type == void 0
      ? void 0
      : deserializeShieldInformationBarrierSegmentMemberBaseTypeField(val.type);
  return {
    id: id,
    type: type,
  } satisfies ShieldInformationBarrierSegmentMemberBase;
}
export function serializeShieldInformationBarrierSegmentRestrictionBaseTypeField(
  val: ShieldInformationBarrierSegmentRestrictionBaseTypeField
): SerializedData {
  return val;
}
export function deserializeShieldInformationBarrierSegmentRestrictionBaseTypeField(
  val: any
): ShieldInformationBarrierSegmentRestrictionBaseTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "ShieldInformationBarrierSegmentRestrictionBaseTypeField"';
  }
  if (val == 'shield_information_barrier_segment_restriction') {
    return 'shield_information_barrier_segment_restriction';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeShieldInformationBarrierSegmentRestrictionBase(
  val: ShieldInformationBarrierSegmentRestrictionBase
): SerializedData {
  return {
    ['type']:
      val.type == void 0
        ? void 0
        : serializeShieldInformationBarrierSegmentRestrictionBaseTypeField(
            val.type
          ),
    ['id']: val.id == void 0 ? void 0 : val.id,
  };
}
export function deserializeShieldInformationBarrierSegmentRestrictionBase(
  val: any
): ShieldInformationBarrierSegmentRestrictionBase {
  const type:
    | undefined
    | ShieldInformationBarrierSegmentRestrictionBaseTypeField =
    val.type == void 0
      ? void 0
      : deserializeShieldInformationBarrierSegmentRestrictionBaseTypeField(
          val.type
        );
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  return {
    type: type,
    id: id,
  } satisfies ShieldInformationBarrierSegmentRestrictionBase;
}
export function serializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentTypeField(
  val: ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentTypeField
): SerializedData {
  return val;
}
export function deserializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentTypeField(
  val: any
): ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentTypeField"';
  }
  if (val == 'shield_information_barrier_segment') {
    return 'shield_information_barrier_segment';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField(
  val: ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0
        ? void 0
        : serializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentTypeField(
            val.type
          ),
  };
}
export function deserializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField(
  val: any
): ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type:
    | undefined
    | ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentTypeField =
    val.type == void 0
      ? void 0
      : deserializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentTypeField(
          val.type
        );
  return {
    id: id,
    type: type,
  } satisfies ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField;
}
export function serializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentTypeField(
  val: ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentTypeField
): SerializedData {
  return val;
}
export function deserializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentTypeField(
  val: any
): ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentTypeField"';
  }
  if (val == 'shield_information_barrier_segment') {
    return 'shield_information_barrier_segment';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField(
  val: ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0
        ? void 0
        : serializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentTypeField(
            val.type
          ),
  };
}
export function deserializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField(
  val: any
): ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type:
    | undefined
    | ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentTypeField =
    val.type == void 0
      ? void 0
      : deserializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentTypeField(
          val.type
        );
  return {
    id: id,
    type: type,
  } satisfies ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField;
}
export function serializeShieldInformationBarrierSegmentRestrictionMini(
  val: ShieldInformationBarrierSegmentRestrictionMini
): SerializedData {
  const base: any =
    serializeShieldInformationBarrierSegmentRestrictionBase(val);
  if (!sdIsMap(base)) {
    throw 'Expecting a map for "ShieldInformationBarrierSegmentRestrictionMini"';
  }
  return {
    ...base,
    ...{
      ['shield_information_barrier_segment']:
        serializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField(
          val.shieldInformationBarrierSegment
        ),
      ['restricted_segment']:
        serializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField(
          val.restrictedSegment
        ),
    },
  };
}
export function deserializeShieldInformationBarrierSegmentRestrictionMini(
  val: any
): ShieldInformationBarrierSegmentRestrictionMini {
  const shieldInformationBarrierSegment: ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField =
    deserializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField(
      val.shield_information_barrier_segment
    );
  const restrictedSegment: ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField =
    deserializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField(
      val.restricted_segment
    );
  const type:
    | undefined
    | ShieldInformationBarrierSegmentRestrictionBaseTypeField =
    val.type == void 0
      ? void 0
      : deserializeShieldInformationBarrierSegmentRestrictionBaseTypeField(
          val.type
        );
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  return {
    shieldInformationBarrierSegment: shieldInformationBarrierSegment,
    restrictedSegment: restrictedSegment,
    type: type,
    id: id,
  } satisfies ShieldInformationBarrierSegmentRestrictionMini;
}
export function serializeSessionTerminationMessage(
  val: SessionTerminationMessage
): SerializedData {
  return { ['message']: val.message == void 0 ? void 0 : val.message };
}
export function deserializeSessionTerminationMessage(
  val: any
): SessionTerminationMessage {
  const message: undefined | string =
    val.message == void 0 ? void 0 : val.message;
  return { message: message } satisfies SessionTerminationMessage;
}
export function serializeStoragePolicyMiniTypeField(
  val: StoragePolicyMiniTypeField
): SerializedData {
  return val;
}
export function deserializeStoragePolicyMiniTypeField(
  val: any
): StoragePolicyMiniTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "StoragePolicyMiniTypeField"';
  }
  if (val == 'storage_policy') {
    return 'storage_policy';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeStoragePolicyMini(
  val: StoragePolicyMini
): SerializedData {
  return {
    ['id']: val.id,
    ['type']: serializeStoragePolicyMiniTypeField(val.type),
  };
}
export function deserializeStoragePolicyMini(val: any): StoragePolicyMini {
  const id: string = val.id;
  const type: StoragePolicyMiniTypeField =
    deserializeStoragePolicyMiniTypeField(val.type);
  return { id: id, type: type } satisfies StoragePolicyMini;
}
export function serializeStoragePolicyAssignmentTypeField(
  val: StoragePolicyAssignmentTypeField
): SerializedData {
  return val;
}
export function deserializeStoragePolicyAssignmentTypeField(
  val: any
): StoragePolicyAssignmentTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "StoragePolicyAssignmentTypeField"';
  }
  if (val == 'storage_policy_assignment') {
    return 'storage_policy_assignment';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeStoragePolicyAssignmentAssignedToField(
  val: StoragePolicyAssignmentAssignedToField
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']: val.type == void 0 ? void 0 : val.type,
  };
}
export function deserializeStoragePolicyAssignmentAssignedToField(
  val: any
): StoragePolicyAssignmentAssignedToField {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | string = val.type == void 0 ? void 0 : val.type;
  return {
    id: id,
    type: type,
  } satisfies StoragePolicyAssignmentAssignedToField;
}
export function serializeStoragePolicyAssignment(
  val: StoragePolicyAssignment
): SerializedData {
  return {
    ['id']: val.id,
    ['type']: serializeStoragePolicyAssignmentTypeField(val.type),
    ['storage_policy']:
      val.storagePolicy == void 0
        ? void 0
        : serializeStoragePolicyMini(val.storagePolicy),
    ['assigned_to']:
      val.assignedTo == void 0
        ? void 0
        : serializeStoragePolicyAssignmentAssignedToField(val.assignedTo),
  };
}
export function deserializeStoragePolicyAssignment(
  val: any
): StoragePolicyAssignment {
  const id: string = val.id;
  const type: StoragePolicyAssignmentTypeField =
    deserializeStoragePolicyAssignmentTypeField(val.type);
  const storagePolicy: undefined | StoragePolicyMini =
    val.storage_policy == void 0
      ? void 0
      : deserializeStoragePolicyMini(val.storage_policy);
  const assignedTo: undefined | StoragePolicyAssignmentAssignedToField =
    val.assigned_to == void 0
      ? void 0
      : deserializeStoragePolicyAssignmentAssignedToField(val.assigned_to);
  return {
    id: id,
    type: type,
    storagePolicy: storagePolicy,
    assignedTo: assignedTo,
  } satisfies StoragePolicyAssignment;
}
export function serializeStoragePolicyAssignments(
  val: StoragePolicyAssignments
): SerializedData {
  return {
    ['limit']: val.limit == void 0 ? void 0 : val.limit,
    ['next_marker']: val.nextMarker == void 0 ? void 0 : val.nextMarker,
    ['prev_marker']: val.prevMarker == void 0 ? void 0 : val.prevMarker,
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (item: StoragePolicyAssignment): any {
            return serializeStoragePolicyAssignment(item);
          }) as readonly any[]),
  };
}
export function deserializeStoragePolicyAssignments(
  val: any
): StoragePolicyAssignments {
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
  const nextMarker: undefined | string =
    val.next_marker == void 0 ? void 0 : val.next_marker;
  const prevMarker: undefined | string =
    val.prev_marker == void 0 ? void 0 : val.prev_marker;
  const entries: undefined | readonly StoragePolicyAssignment[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (itm: SerializedData): any {
          return deserializeStoragePolicyAssignment(itm);
        }) as readonly any[])
      : [];
  return {
    limit: limit,
    nextMarker: nextMarker,
    prevMarker: prevMarker,
    entries: entries,
  } satisfies StoragePolicyAssignments;
}
export function serializeStoragePolicy(val: StoragePolicy): SerializedData {
  const base: any = serializeStoragePolicyMini(val);
  if (!sdIsMap(base)) {
    throw 'Expecting a map for "StoragePolicy"';
  }
  return { ...base, ...{ ['name']: val.name == void 0 ? void 0 : val.name } };
}
export function deserializeStoragePolicy(val: any): StoragePolicy {
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const id: string = val.id;
  const type: StoragePolicyMiniTypeField =
    deserializeStoragePolicyMiniTypeField(val.type);
  return { name: name, id: id, type: type } satisfies StoragePolicy;
}
export function serializeStoragePolicies(val: StoragePolicies): SerializedData {
  return {
    ['limit']: val.limit == void 0 ? void 0 : val.limit,
    ['next_marker']: val.nextMarker == void 0 ? void 0 : val.nextMarker,
    ['prev_marker']: val.prevMarker == void 0 ? void 0 : val.prevMarker,
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (item: StoragePolicy): any {
            return serializeStoragePolicy(item);
          }) as readonly any[]),
  };
}
export function deserializeStoragePolicies(val: any): StoragePolicies {
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
  const nextMarker: undefined | string =
    val.next_marker == void 0 ? void 0 : val.next_marker;
  const prevMarker: undefined | string =
    val.prev_marker == void 0 ? void 0 : val.prev_marker;
  const entries: undefined | readonly StoragePolicy[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (itm: SerializedData): any {
          return deserializeStoragePolicy(itm);
        }) as readonly any[])
      : [];
  return {
    limit: limit,
    nextMarker: nextMarker,
    prevMarker: prevMarker,
    entries: entries,
  } satisfies StoragePolicies;
}
export function serializeTermsOfServiceBaseTypeField(
  val: TermsOfServiceBaseTypeField
): SerializedData {
  return val;
}
export function deserializeTermsOfServiceBaseTypeField(
  val: any
): TermsOfServiceBaseTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "TermsOfServiceBaseTypeField"';
  }
  if (val == 'terms_of_service') {
    return 'terms_of_service';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeTermsOfServiceBase(
  val: TermsOfServiceBase
): SerializedData {
  return {
    ['id']: val.id,
    ['type']: serializeTermsOfServiceBaseTypeField(val.type),
  };
}
export function deserializeTermsOfServiceBase(val: any): TermsOfServiceBase {
  const id: string = val.id;
  const type: TermsOfServiceBaseTypeField =
    deserializeTermsOfServiceBaseTypeField(val.type);
  return { id: id, type: type } satisfies TermsOfServiceBase;
}
export function serializeTermsOfServiceStatusField(
  val: TermsOfServiceStatusField
): SerializedData {
  return val;
}
export function deserializeTermsOfServiceStatusField(
  val: any
): TermsOfServiceStatusField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "TermsOfServiceStatusField"';
  }
  if (val == 'enabled') {
    return 'enabled';
  }
  if (val == 'disabled') {
    return 'disabled';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeTermsOfServiceEnterpriseTypeField(
  val: TermsOfServiceEnterpriseTypeField
): SerializedData {
  return val;
}
export function deserializeTermsOfServiceEnterpriseTypeField(
  val: any
): TermsOfServiceEnterpriseTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "TermsOfServiceEnterpriseTypeField"';
  }
  if (val == 'enterprise') {
    return 'enterprise';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeTermsOfServiceEnterpriseField(
  val: TermsOfServiceEnterpriseField
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0
        ? void 0
        : serializeTermsOfServiceEnterpriseTypeField(val.type),
    ['name']: val.name == void 0 ? void 0 : val.name,
  };
}
export function deserializeTermsOfServiceEnterpriseField(
  val: any
): TermsOfServiceEnterpriseField {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | TermsOfServiceEnterpriseTypeField =
    val.type == void 0
      ? void 0
      : deserializeTermsOfServiceEnterpriseTypeField(val.type);
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  return {
    id: id,
    type: type,
    name: name,
  } satisfies TermsOfServiceEnterpriseField;
}
export function serializeTermsOfServiceTosTypeField(
  val: TermsOfServiceTosTypeField
): SerializedData {
  return val;
}
export function deserializeTermsOfServiceTosTypeField(
  val: any
): TermsOfServiceTosTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "TermsOfServiceTosTypeField"';
  }
  if (val == 'managed') {
    return 'managed';
  }
  if (val == 'external') {
    return 'external';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeTermsOfService(val: TermsOfService): SerializedData {
  const base: any = serializeTermsOfServiceBase(val);
  if (!sdIsMap(base)) {
    throw 'Expecting a map for "TermsOfService"';
  }
  return {
    ...base,
    ...{
      ['status']:
        val.status == void 0
          ? void 0
          : serializeTermsOfServiceStatusField(val.status),
      ['enterprise']:
        val.enterprise == void 0
          ? void 0
          : serializeTermsOfServiceEnterpriseField(val.enterprise),
      ['tos_type']:
        val.tosType == void 0
          ? void 0
          : serializeTermsOfServiceTosTypeField(val.tosType),
      ['text']: val.text == void 0 ? void 0 : val.text,
      ['created_at']: val.createdAt == void 0 ? void 0 : val.createdAt,
      ['modified_at']: val.modifiedAt == void 0 ? void 0 : val.modifiedAt,
    },
  };
}
export function deserializeTermsOfService(val: any): TermsOfService {
  const status: undefined | TermsOfServiceStatusField =
    val.status == void 0
      ? void 0
      : deserializeTermsOfServiceStatusField(val.status);
  const enterprise: undefined | TermsOfServiceEnterpriseField =
    val.enterprise == void 0
      ? void 0
      : deserializeTermsOfServiceEnterpriseField(val.enterprise);
  const tosType: undefined | TermsOfServiceTosTypeField =
    val.tos_type == void 0
      ? void 0
      : deserializeTermsOfServiceTosTypeField(val.tos_type);
  const text: undefined | string = val.text == void 0 ? void 0 : val.text;
  const createdAt: undefined | string =
    val.created_at == void 0 ? void 0 : val.created_at;
  const modifiedAt: undefined | string =
    val.modified_at == void 0 ? void 0 : val.modified_at;
  const id: string = val.id;
  const type: TermsOfServiceBaseTypeField =
    deserializeTermsOfServiceBaseTypeField(val.type);
  return {
    status: status,
    enterprise: enterprise,
    tosType: tosType,
    text: text,
    createdAt: createdAt,
    modifiedAt: modifiedAt,
    id: id,
    type: type,
  } satisfies TermsOfService;
}
export function serializeTermsOfServices(val: TermsOfServices): SerializedData {
  return {
    ['total_count']: val.totalCount == void 0 ? void 0 : val.totalCount,
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (item: TermsOfService): any {
            return serializeTermsOfService(item);
          }) as readonly any[]),
  };
}
export function deserializeTermsOfServices(val: any): TermsOfServices {
  const totalCount: undefined | number =
    val.total_count == void 0 ? void 0 : val.total_count;
  const entries: undefined | readonly TermsOfService[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (itm: SerializedData): any {
          return deserializeTermsOfService(itm);
        }) as readonly any[])
      : [];
  return { totalCount: totalCount, entries: entries } satisfies TermsOfServices;
}
export function serializeUploadPartMini(val: UploadPartMini): SerializedData {
  return {
    ['part_id']: val.partId == void 0 ? void 0 : val.partId,
    ['offset']: val.offset == void 0 ? void 0 : val.offset,
    ['size']: val.size == void 0 ? void 0 : val.size,
  };
}
export function deserializeUploadPartMini(val: any): UploadPartMini {
  const partId: undefined | string =
    val.part_id == void 0 ? void 0 : val.part_id;
  const offset: undefined | number = val.offset == void 0 ? void 0 : val.offset;
  const size: undefined | number = val.size == void 0 ? void 0 : val.size;
  return {
    partId: partId,
    offset: offset,
    size: size,
  } satisfies UploadPartMini;
}
export function serializeUploadPart(val: UploadPart): SerializedData {
  const base: any = serializeUploadPartMini(val);
  if (!sdIsMap(base)) {
    throw 'Expecting a map for "UploadPart"';
  }
  return { ...base, ...{ ['sha1']: val.sha1 == void 0 ? void 0 : val.sha1 } };
}
export function deserializeUploadPart(val: any): UploadPart {
  const sha1: undefined | string = val.sha1 == void 0 ? void 0 : val.sha1;
  const partId: undefined | string =
    val.part_id == void 0 ? void 0 : val.part_id;
  const offset: undefined | number = val.offset == void 0 ? void 0 : val.offset;
  const size: undefined | number = val.size == void 0 ? void 0 : val.size;
  return {
    sha1: sha1,
    partId: partId,
    offset: offset,
    size: size,
  } satisfies UploadPart;
}
export function serializeUploadPartsOrderDirectionField(
  val: UploadPartsOrderDirectionField
): SerializedData {
  return val;
}
export function deserializeUploadPartsOrderDirectionField(
  val: any
): UploadPartsOrderDirectionField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "UploadPartsOrderDirectionField"';
  }
  if (val == 'ASC') {
    return 'ASC';
  }
  if (val == 'DESC') {
    return 'DESC';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeUploadPartsOrderField(
  val: UploadPartsOrderField
): SerializedData {
  return {
    ['by']: val.by == void 0 ? void 0 : val.by,
    ['direction']:
      val.direction == void 0
        ? void 0
        : serializeUploadPartsOrderDirectionField(val.direction),
  };
}
export function deserializeUploadPartsOrderField(
  val: any
): UploadPartsOrderField {
  const by: undefined | string = val.by == void 0 ? void 0 : val.by;
  const direction: undefined | UploadPartsOrderDirectionField =
    val.direction == void 0
      ? void 0
      : deserializeUploadPartsOrderDirectionField(val.direction);
  return { by: by, direction: direction } satisfies UploadPartsOrderField;
}
export function serializeUploadParts(val: UploadParts): SerializedData {
  return {
    ['total_count']: val.totalCount == void 0 ? void 0 : val.totalCount,
    ['limit']: val.limit == void 0 ? void 0 : val.limit,
    ['offset']: val.offset == void 0 ? void 0 : val.offset,
    ['order']:
      val.order == void 0
        ? void 0
        : (val.order.map(function (item: UploadPartsOrderField): any {
            return serializeUploadPartsOrderField(item);
          }) as readonly any[]),
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (item: UploadPart): any {
            return serializeUploadPart(item);
          }) as readonly any[]),
  };
}
export function deserializeUploadParts(val: any): UploadParts {
  const totalCount: undefined | number =
    val.total_count == void 0 ? void 0 : val.total_count;
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
  const offset: undefined | number = val.offset == void 0 ? void 0 : val.offset;
  const order: undefined | readonly UploadPartsOrderField[] =
    val.order == void 0
      ? void 0
      : sdIsList(val.order)
      ? (val.order.map(function (itm: SerializedData): any {
          return deserializeUploadPartsOrderField(itm);
        }) as readonly any[])
      : [];
  const entries: undefined | readonly UploadPart[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (itm: SerializedData): any {
          return deserializeUploadPart(itm);
        }) as readonly any[])
      : [];
  return {
    totalCount: totalCount,
    limit: limit,
    offset: offset,
    order: order,
    entries: entries,
  } satisfies UploadParts;
}
export function serializeUploadedPart(val: UploadedPart): SerializedData {
  return {
    ['part']: val.part == void 0 ? void 0 : serializeUploadPart(val.part),
  };
}
export function deserializeUploadedPart(val: any): UploadedPart {
  const part: undefined | UploadPart =
    val.part == void 0 ? void 0 : deserializeUploadPart(val.part);
  return { part: part } satisfies UploadedPart;
}
export function serializeUploadSessionTypeField(
  val: UploadSessionTypeField
): SerializedData {
  return val;
}
export function deserializeUploadSessionTypeField(
  val: any
): UploadSessionTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "UploadSessionTypeField"';
  }
  if (val == 'upload_session') {
    return 'upload_session';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeUploadSessionSessionEndpointsField(
  val: UploadSessionSessionEndpointsField
): SerializedData {
  return {
    ['upload_part']: val.uploadPart == void 0 ? void 0 : val.uploadPart,
    ['commit']: val.commit == void 0 ? void 0 : val.commit,
    ['abort']: val.abort == void 0 ? void 0 : val.abort,
    ['list_parts']: val.listParts == void 0 ? void 0 : val.listParts,
    ['status']: val.status == void 0 ? void 0 : val.status,
    ['log_event']: val.logEvent == void 0 ? void 0 : val.logEvent,
  };
}
export function deserializeUploadSessionSessionEndpointsField(
  val: any
): UploadSessionSessionEndpointsField {
  const uploadPart: undefined | string =
    val.upload_part == void 0 ? void 0 : val.upload_part;
  const commit: undefined | string = val.commit == void 0 ? void 0 : val.commit;
  const abort: undefined | string = val.abort == void 0 ? void 0 : val.abort;
  const listParts: undefined | string =
    val.list_parts == void 0 ? void 0 : val.list_parts;
  const status: undefined | string = val.status == void 0 ? void 0 : val.status;
  const logEvent: undefined | string =
    val.log_event == void 0 ? void 0 : val.log_event;
  return {
    uploadPart: uploadPart,
    commit: commit,
    abort: abort,
    listParts: listParts,
    status: status,
    logEvent: logEvent,
  } satisfies UploadSessionSessionEndpointsField;
}
export function serializeUploadSession(val: UploadSession): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0 ? void 0 : serializeUploadSessionTypeField(val.type),
    ['session_expires_at']:
      val.sessionExpiresAt == void 0 ? void 0 : val.sessionExpiresAt,
    ['part_size']: val.partSize == void 0 ? void 0 : val.partSize,
    ['total_parts']: val.totalParts == void 0 ? void 0 : val.totalParts,
    ['num_parts_processed']:
      val.numPartsProcessed == void 0 ? void 0 : val.numPartsProcessed,
    ['session_endpoints']:
      val.sessionEndpoints == void 0
        ? void 0
        : serializeUploadSessionSessionEndpointsField(val.sessionEndpoints),
  };
}
export function deserializeUploadSession(val: any): UploadSession {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | UploadSessionTypeField =
    val.type == void 0 ? void 0 : deserializeUploadSessionTypeField(val.type);
  const sessionExpiresAt: undefined | string =
    val.session_expires_at == void 0 ? void 0 : val.session_expires_at;
  const partSize: undefined | number =
    val.part_size == void 0 ? void 0 : val.part_size;
  const totalParts: undefined | number =
    val.total_parts == void 0 ? void 0 : val.total_parts;
  const numPartsProcessed: undefined | number =
    val.num_parts_processed == void 0 ? void 0 : val.num_parts_processed;
  const sessionEndpoints: undefined | UploadSessionSessionEndpointsField =
    val.session_endpoints == void 0
      ? void 0
      : deserializeUploadSessionSessionEndpointsField(val.session_endpoints);
  return {
    id: id,
    type: type,
    sessionExpiresAt: sessionExpiresAt,
    partSize: partSize,
    totalParts: totalParts,
    numPartsProcessed: numPartsProcessed,
    sessionEndpoints: sessionEndpoints,
  } satisfies UploadSession;
}
export function serializeUploadUrl(val: UploadUrl): SerializedData {
  return {
    ['upload_url']: val.uploadUrl == void 0 ? void 0 : val.uploadUrl,
    ['upload_token']: val.uploadToken == void 0 ? void 0 : val.uploadToken,
  };
}
export function deserializeUploadUrl(val: any): UploadUrl {
  const uploadUrl: undefined | string =
    val.upload_url == void 0 ? void 0 : val.upload_url;
  const uploadToken: undefined | string =
    val.upload_token == void 0 ? void 0 : val.upload_token;
  return { uploadUrl: uploadUrl, uploadToken: uploadToken } satisfies UploadUrl;
}
export function serializeUserAvatarPicUrlsField(
  val: UserAvatarPicUrlsField
): SerializedData {
  return {
    ['small']: val.small == void 0 ? void 0 : val.small,
    ['large']: val.large == void 0 ? void 0 : val.large,
    ['preview']: val.preview == void 0 ? void 0 : val.preview,
  };
}
export function deserializeUserAvatarPicUrlsField(
  val: any
): UserAvatarPicUrlsField {
  const small: undefined | string = val.small == void 0 ? void 0 : val.small;
  const large: undefined | string = val.large == void 0 ? void 0 : val.large;
  const preview: undefined | string =
    val.preview == void 0 ? void 0 : val.preview;
  return {
    small: small,
    large: large,
    preview: preview,
  } satisfies UserAvatarPicUrlsField;
}
export function serializeUserAvatar(val: UserAvatar): SerializedData {
  return {
    ['pic_urls']:
      val.picUrls == void 0
        ? void 0
        : serializeUserAvatarPicUrlsField(val.picUrls),
  };
}
export function deserializeUserAvatar(val: any): UserAvatar {
  const picUrls: undefined | UserAvatarPicUrlsField =
    val.pic_urls == void 0
      ? void 0
      : deserializeUserAvatarPicUrlsField(val.pic_urls);
  return { picUrls: picUrls } satisfies UserAvatar;
}
export function serializeUserBaseTypeField(
  val: UserBaseTypeField
): SerializedData {
  return val;
}
export function deserializeUserBaseTypeField(val: any): UserBaseTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "UserBaseTypeField"';
  }
  if (val == 'user') {
    return 'user';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeUserBase(val: UserBase): SerializedData {
  return { ['id']: val.id, ['type']: serializeUserBaseTypeField(val.type) };
}
export function deserializeUserBase(val: any): UserBase {
  const id: string = val.id;
  const type: UserBaseTypeField = deserializeUserBaseTypeField(val.type);
  return { id: id, type: type } satisfies UserBase;
}
export function serializeUserIntegrationMappings(
  val: UserIntegrationMappings
): SerializedData {
  const base: any = serializeUserBase(val);
  if (!sdIsMap(base)) {
    throw 'Expecting a map for "UserIntegrationMappings"';
  }
  return {
    ...base,
    ...{
      ['name']: val.name == void 0 ? void 0 : val.name,
      ['login']: val.login == void 0 ? void 0 : val.login,
    },
  };
}
export function deserializeUserIntegrationMappings(
  val: any
): UserIntegrationMappings {
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const login: undefined | string = val.login == void 0 ? void 0 : val.login;
  const id: string = val.id;
  const type: UserBaseTypeField = deserializeUserBaseTypeField(val.type);
  return {
    name: name,
    login: login,
    id: id,
    type: type,
  } satisfies UserIntegrationMappings;
}
export function serializeUserCollaborations(
  val: UserCollaborations
): SerializedData {
  const base: any = serializeUserBase(val);
  if (!sdIsMap(base)) {
    throw 'Expecting a map for "UserCollaborations"';
  }
  return {
    ...base,
    ...{
      ['name']: val.name == void 0 ? void 0 : val.name,
      ['login']: val.login == void 0 ? void 0 : val.login,
    },
  };
}
export function deserializeUserCollaborations(val: any): UserCollaborations {
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const login: undefined | string = val.login == void 0 ? void 0 : val.login;
  const id: string = val.id;
  const type: UserBaseTypeField = deserializeUserBaseTypeField(val.type);
  return {
    name: name,
    login: login,
    id: id,
    type: type,
  } satisfies UserCollaborations;
}
export function serializeGroupMiniOrUserCollaborations(
  val: GroupMiniOrUserCollaborations
): SerializedData {
  if (val.type == 'group') {
    return serializeGroupMini(val);
  }
  if (val.type == 'user') {
    return serializeUserCollaborations(val);
  }
  throw 'unknown type';
}
export function deserializeGroupMiniOrUserCollaborations(
  val: any
): GroupMiniOrUserCollaborations {
  if (!sdIsMap(val)) {
    throw 'Expecting a map for "GroupMiniOrUserCollaborations"';
  }
  if (val.type == 'group') {
    return deserializeGroupMini(val);
  }
  if (val.type == 'user') {
    return deserializeUserCollaborations(val);
  }
  throw 'unknown type';
}
export function serializeUserMini(val: UserMini): SerializedData {
  const base: any = serializeUserBase(val);
  if (!sdIsMap(base)) {
    throw 'Expecting a map for "UserMini"';
  }
  return {
    ...base,
    ...{
      ['name']: val.name == void 0 ? void 0 : val.name,
      ['login']: val.login == void 0 ? void 0 : val.login,
    },
  };
}
export function deserializeUserMini(val: any): UserMini {
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const login: undefined | string = val.login == void 0 ? void 0 : val.login;
  const id: string = val.id;
  const type: UserBaseTypeField = deserializeUserBaseTypeField(val.type);
  return { name: name, login: login, id: id, type: type } satisfies UserMini;
}
export function serializeEventSourceItemTypeField(
  val: EventSourceItemTypeField
): SerializedData {
  return val;
}
export function deserializeEventSourceItemTypeField(
  val: any
): EventSourceItemTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "EventSourceItemTypeField"';
  }
  if (val == 'file') {
    return 'file';
  }
  if (val == 'folder') {
    return 'folder';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeEventSourceClassificationField(
  val: EventSourceClassificationField
): SerializedData {
  return { ['name']: val.name == void 0 ? void 0 : val.name };
}
export function deserializeEventSourceClassificationField(
  val: any
): EventSourceClassificationField {
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  return { name: name } satisfies EventSourceClassificationField;
}
export function serializeEventSource(val: EventSource): SerializedData {
  return {
    ['item_type']: serializeEventSourceItemTypeField(val.itemType),
    ['item_id']: val.itemId,
    ['item_name']: val.itemName,
    ['classification']:
      val.classification == void 0
        ? void 0
        : serializeEventSourceClassificationField(val.classification),
    ['parent']: val.parent == void 0 ? void 0 : serializeFolderMini(val.parent),
    ['owned_by']:
      val.ownedBy == void 0 ? void 0 : serializeUserMini(val.ownedBy),
  };
}
export function deserializeEventSource(val: any): EventSource {
  const itemType: EventSourceItemTypeField =
    deserializeEventSourceItemTypeField(val.item_type);
  const itemId: string = val.item_id;
  const itemName: string = val.item_name;
  const classification: undefined | EventSourceClassificationField =
    val.classification == void 0
      ? void 0
      : deserializeEventSourceClassificationField(val.classification);
  const parent: undefined | FolderMini =
    val.parent == void 0 ? void 0 : deserializeFolderMini(val.parent);
  const ownedBy: undefined | UserMini =
    val.owned_by == void 0 ? void 0 : deserializeUserMini(val.owned_by);
  return {
    itemType: itemType,
    itemId: itemId,
    itemName: itemName,
    classification: classification,
    parent: parent,
    ownedBy: ownedBy,
  } satisfies EventSource;
}
export function serializeUserStatusField(val: UserStatusField): SerializedData {
  return val;
}
export function deserializeUserStatusField(val: any): UserStatusField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "UserStatusField"';
  }
  if (val == 'active') {
    return 'active';
  }
  if (val == 'inactive') {
    return 'inactive';
  }
  if (val == 'cannot_delete_edit') {
    return 'cannot_delete_edit';
  }
  if (val == 'cannot_delete_edit_upload') {
    return 'cannot_delete_edit_upload';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeUserNotificationEmailField(
  val: UserNotificationEmailField
): SerializedData {
  return {
    ['email']: val.email == void 0 ? void 0 : val.email,
    ['is_confirmed']: val.isConfirmed == void 0 ? void 0 : val.isConfirmed,
  };
}
export function deserializeUserNotificationEmailField(
  val: any
): UserNotificationEmailField {
  const email: undefined | string = val.email == void 0 ? void 0 : val.email;
  const isConfirmed: undefined | boolean =
    val.is_confirmed == void 0 ? void 0 : val.is_confirmed;
  return {
    email: email,
    isConfirmed: isConfirmed,
  } satisfies UserNotificationEmailField;
}
export function serializeUser(val: User): SerializedData {
  const base: any = serializeUserMini(val);
  if (!sdIsMap(base)) {
    throw 'Expecting a map for "User"';
  }
  return {
    ...base,
    ...{
      ['created_at']: val.createdAt == void 0 ? void 0 : val.createdAt,
      ['modified_at']: val.modifiedAt == void 0 ? void 0 : val.modifiedAt,
      ['language']: val.language == void 0 ? void 0 : val.language,
      ['timezone']: val.timezone == void 0 ? void 0 : val.timezone,
      ['space_amount']: val.spaceAmount == void 0 ? void 0 : val.spaceAmount,
      ['space_used']: val.spaceUsed == void 0 ? void 0 : val.spaceUsed,
      ['max_upload_size']:
        val.maxUploadSize == void 0 ? void 0 : val.maxUploadSize,
      ['status']:
        val.status == void 0 ? void 0 : serializeUserStatusField(val.status),
      ['job_title']: val.jobTitle == void 0 ? void 0 : val.jobTitle,
      ['phone']: val.phone == void 0 ? void 0 : val.phone,
      ['address']: val.address == void 0 ? void 0 : val.address,
      ['avatar_url']: val.avatarUrl == void 0 ? void 0 : val.avatarUrl,
      ['notification_email']:
        val.notificationEmail == void 0
          ? void 0
          : serializeUserNotificationEmailField(val.notificationEmail),
    },
  };
}
export function deserializeUser(val: any): User {
  const createdAt: undefined | string =
    val.created_at == void 0 ? void 0 : val.created_at;
  const modifiedAt: undefined | string =
    val.modified_at == void 0 ? void 0 : val.modified_at;
  const language: undefined | string =
    val.language == void 0 ? void 0 : val.language;
  const timezone: undefined | string =
    val.timezone == void 0 ? void 0 : val.timezone;
  const spaceAmount: undefined | number =
    val.space_amount == void 0 ? void 0 : val.space_amount;
  const spaceUsed: undefined | number =
    val.space_used == void 0 ? void 0 : val.space_used;
  const maxUploadSize: undefined | number =
    val.max_upload_size == void 0 ? void 0 : val.max_upload_size;
  const status: undefined | UserStatusField =
    val.status == void 0 ? void 0 : deserializeUserStatusField(val.status);
  const jobTitle: undefined | string =
    val.job_title == void 0 ? void 0 : val.job_title;
  const phone: undefined | string = val.phone == void 0 ? void 0 : val.phone;
  const address: undefined | string =
    val.address == void 0 ? void 0 : val.address;
  const avatarUrl: undefined | string =
    val.avatar_url == void 0 ? void 0 : val.avatar_url;
  const notificationEmail: undefined | UserNotificationEmailField =
    val.notification_email == void 0
      ? void 0
      : deserializeUserNotificationEmailField(val.notification_email);
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const login: undefined | string = val.login == void 0 ? void 0 : val.login;
  const id: string = val.id;
  const type: UserBaseTypeField = deserializeUserBaseTypeField(val.type);
  return {
    createdAt: createdAt,
    modifiedAt: modifiedAt,
    language: language,
    timezone: timezone,
    spaceAmount: spaceAmount,
    spaceUsed: spaceUsed,
    maxUploadSize: maxUploadSize,
    status: status,
    jobTitle: jobTitle,
    phone: phone,
    address: address,
    avatarUrl: avatarUrl,
    notificationEmail: notificationEmail,
    name: name,
    login: login,
    id: id,
    type: type,
  } satisfies User;
}
export function serializeTrashWebLinkRestoredTypeField(
  val: TrashWebLinkRestoredTypeField
): SerializedData {
  return val;
}
export function deserializeTrashWebLinkRestoredTypeField(
  val: any
): TrashWebLinkRestoredTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "TrashWebLinkRestoredTypeField"';
  }
  if (val == 'web_link') {
    return 'web_link';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeTrashWebLinkRestoredPathCollectionField(
  val: TrashWebLinkRestoredPathCollectionField
): SerializedData {
  return {
    ['total_count']: val.totalCount,
    ['entries']: val.entries.map(function (item: FolderMini): any {
      return serializeFolderMini(item);
    }) as readonly any[],
  };
}
export function deserializeTrashWebLinkRestoredPathCollectionField(
  val: any
): TrashWebLinkRestoredPathCollectionField {
  const totalCount: number = val.total_count;
  const entries: readonly FolderMini[] = sdIsList(val.entries)
    ? (val.entries.map(function (itm: SerializedData): any {
        return deserializeFolderMini(itm);
      }) as readonly any[])
    : [];
  return {
    totalCount: totalCount,
    entries: entries,
  } satisfies TrashWebLinkRestoredPathCollectionField;
}
export function serializeTrashWebLinkRestoredItemStatusField(
  val: TrashWebLinkRestoredItemStatusField
): SerializedData {
  return val;
}
export function deserializeTrashWebLinkRestoredItemStatusField(
  val: any
): TrashWebLinkRestoredItemStatusField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "TrashWebLinkRestoredItemStatusField"';
  }
  if (val == 'active') {
    return 'active';
  }
  if (val == 'trashed') {
    return 'trashed';
  }
  if (val == 'deleted') {
    return 'deleted';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeTrashWebLinkRestored(
  val: TrashWebLinkRestored
): SerializedData {
  return {
    ['type']:
      val.type == void 0
        ? void 0
        : serializeTrashWebLinkRestoredTypeField(val.type),
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['sequence_id']: val.sequenceId,
    ['etag']: val.etag == void 0 ? void 0 : val.etag,
    ['name']: val.name == void 0 ? void 0 : val.name,
    ['url']: val.url == void 0 ? void 0 : val.url,
    ['parent']: val.parent == void 0 ? void 0 : serializeFolderMini(val.parent),
    ['description']: val.description == void 0 ? void 0 : val.description,
    ['path_collection']: serializeTrashWebLinkRestoredPathCollectionField(
      val.pathCollection
    ),
    ['created_at']: val.createdAt == void 0 ? void 0 : val.createdAt,
    ['modified_at']: val.modifiedAt == void 0 ? void 0 : val.modifiedAt,
    ['trashed_at']: val.trashedAt == void 0 ? void 0 : val.trashedAt,
    ['purged_at']: val.purgedAt == void 0 ? void 0 : val.purgedAt,
    ['created_by']:
      val.createdBy == void 0 ? void 0 : serializeUserMini(val.createdBy),
    ['modified_by']:
      val.modifiedBy == void 0 ? void 0 : serializeUserMini(val.modifiedBy),
    ['owned_by']:
      val.ownedBy == void 0 ? void 0 : serializeUserMini(val.ownedBy),
    ['shared_link']: val.sharedLink == void 0 ? void 0 : val.sharedLink,
    ['item_status']:
      val.itemStatus == void 0
        ? void 0
        : serializeTrashWebLinkRestoredItemStatusField(val.itemStatus),
  };
}
export function deserializeTrashWebLinkRestored(
  val: any
): TrashWebLinkRestored {
  const type: undefined | TrashWebLinkRestoredTypeField =
    val.type == void 0
      ? void 0
      : deserializeTrashWebLinkRestoredTypeField(val.type);
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const sequenceId: string = val.sequence_id;
  const etag: undefined | string = val.etag == void 0 ? void 0 : val.etag;
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const url: undefined | string = val.url == void 0 ? void 0 : val.url;
  const parent: undefined | FolderMini =
    val.parent == void 0 ? void 0 : deserializeFolderMini(val.parent);
  const description: undefined | string =
    val.description == void 0 ? void 0 : val.description;
  const pathCollection: TrashWebLinkRestoredPathCollectionField =
    deserializeTrashWebLinkRestoredPathCollectionField(val.path_collection);
  const createdAt: undefined | string =
    val.created_at == void 0 ? void 0 : val.created_at;
  const modifiedAt: undefined | string =
    val.modified_at == void 0 ? void 0 : val.modified_at;
  const trashedAt: undefined | string =
    val.trashed_at == void 0 ? void 0 : val.trashed_at;
  const purgedAt: undefined | string =
    val.purged_at == void 0 ? void 0 : val.purged_at;
  const createdBy: undefined | UserMini =
    val.created_by == void 0 ? void 0 : deserializeUserMini(val.created_by);
  const modifiedBy: undefined | UserMini =
    val.modified_by == void 0 ? void 0 : deserializeUserMini(val.modified_by);
  const ownedBy: undefined | UserMini =
    val.owned_by == void 0 ? void 0 : deserializeUserMini(val.owned_by);
  const sharedLink: undefined | string =
    val.shared_link == void 0 ? void 0 : val.shared_link;
  const itemStatus: undefined | TrashWebLinkRestoredItemStatusField =
    val.item_status == void 0
      ? void 0
      : deserializeTrashWebLinkRestoredItemStatusField(val.item_status);
  return {
    type: type,
    id: id,
    sequenceId: sequenceId,
    etag: etag,
    name: name,
    url: url,
    parent: parent,
    description: description,
    pathCollection: pathCollection,
    createdAt: createdAt,
    modifiedAt: modifiedAt,
    trashedAt: trashedAt,
    purgedAt: purgedAt,
    createdBy: createdBy,
    modifiedBy: modifiedBy,
    ownedBy: ownedBy,
    sharedLink: sharedLink,
    itemStatus: itemStatus,
  } satisfies TrashWebLinkRestored;
}
export function serializeTrashFolderRestoredTypeField(
  val: TrashFolderRestoredTypeField
): SerializedData {
  return val;
}
export function deserializeTrashFolderRestoredTypeField(
  val: any
): TrashFolderRestoredTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "TrashFolderRestoredTypeField"';
  }
  if (val == 'folder') {
    return 'folder';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeTrashFolderRestoredPathCollectionField(
  val: TrashFolderRestoredPathCollectionField
): SerializedData {
  return {
    ['total_count']: val.totalCount,
    ['entries']: val.entries.map(function (item: FolderMini): any {
      return serializeFolderMini(item);
    }) as readonly any[],
  };
}
export function deserializeTrashFolderRestoredPathCollectionField(
  val: any
): TrashFolderRestoredPathCollectionField {
  const totalCount: number = val.total_count;
  const entries: readonly FolderMini[] = sdIsList(val.entries)
    ? (val.entries.map(function (itm: SerializedData): any {
        return deserializeFolderMini(itm);
      }) as readonly any[])
    : [];
  return {
    totalCount: totalCount,
    entries: entries,
  } satisfies TrashFolderRestoredPathCollectionField;
}
export function serializeTrashFolderRestoredItemStatusField(
  val: TrashFolderRestoredItemStatusField
): SerializedData {
  return val;
}
export function deserializeTrashFolderRestoredItemStatusField(
  val: any
): TrashFolderRestoredItemStatusField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "TrashFolderRestoredItemStatusField"';
  }
  if (val == 'active') {
    return 'active';
  }
  if (val == 'trashed') {
    return 'trashed';
  }
  if (val == 'deleted') {
    return 'deleted';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeTrashFolderRestored(
  val: TrashFolderRestored
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['etag']: val.etag == void 0 ? void 0 : val.etag,
    ['type']:
      val.type == void 0
        ? void 0
        : serializeTrashFolderRestoredTypeField(val.type),
    ['sequence_id']: val.sequenceId == void 0 ? void 0 : val.sequenceId,
    ['name']: val.name == void 0 ? void 0 : val.name,
    ['created_at']: val.createdAt == void 0 ? void 0 : val.createdAt,
    ['modified_at']: val.modifiedAt == void 0 ? void 0 : val.modifiedAt,
    ['description']: val.description == void 0 ? void 0 : val.description,
    ['size']: val.size == void 0 ? void 0 : val.size,
    ['path_collection']:
      val.pathCollection == void 0
        ? void 0
        : serializeTrashFolderRestoredPathCollectionField(val.pathCollection),
    ['created_by']:
      val.createdBy == void 0 ? void 0 : serializeUserMini(val.createdBy),
    ['modified_by']:
      val.modifiedBy == void 0 ? void 0 : serializeUserMini(val.modifiedBy),
    ['trashed_at']: val.trashedAt == void 0 ? void 0 : val.trashedAt,
    ['purged_at']: val.purgedAt == void 0 ? void 0 : val.purgedAt,
    ['content_created_at']:
      val.contentCreatedAt == void 0 ? void 0 : val.contentCreatedAt,
    ['content_modified_at']:
      val.contentModifiedAt == void 0 ? void 0 : val.contentModifiedAt,
    ['owned_by']:
      val.ownedBy == void 0 ? void 0 : serializeUserMini(val.ownedBy),
    ['shared_link']: val.sharedLink == void 0 ? void 0 : val.sharedLink,
    ['folder_upload_email']:
      val.folderUploadEmail == void 0 ? void 0 : val.folderUploadEmail,
    ['parent']: val.parent == void 0 ? void 0 : serializeFolderMini(val.parent),
    ['item_status']:
      val.itemStatus == void 0
        ? void 0
        : serializeTrashFolderRestoredItemStatusField(val.itemStatus),
  };
}
export function deserializeTrashFolderRestored(val: any): TrashFolderRestored {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const etag: undefined | string = val.etag == void 0 ? void 0 : val.etag;
  const type: undefined | TrashFolderRestoredTypeField =
    val.type == void 0
      ? void 0
      : deserializeTrashFolderRestoredTypeField(val.type);
  const sequenceId: undefined | string =
    val.sequence_id == void 0 ? void 0 : val.sequence_id;
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const createdAt: undefined | string =
    val.created_at == void 0 ? void 0 : val.created_at;
  const modifiedAt: undefined | string =
    val.modified_at == void 0 ? void 0 : val.modified_at;
  const description: undefined | string =
    val.description == void 0 ? void 0 : val.description;
  const size: undefined | number = val.size == void 0 ? void 0 : val.size;
  const pathCollection: undefined | TrashFolderRestoredPathCollectionField =
    val.path_collection == void 0
      ? void 0
      : deserializeTrashFolderRestoredPathCollectionField(val.path_collection);
  const createdBy: undefined | UserMini =
    val.created_by == void 0 ? void 0 : deserializeUserMini(val.created_by);
  const modifiedBy: undefined | UserMini =
    val.modified_by == void 0 ? void 0 : deserializeUserMini(val.modified_by);
  const trashedAt: undefined | string =
    val.trashed_at == void 0 ? void 0 : val.trashed_at;
  const purgedAt: undefined | string =
    val.purged_at == void 0 ? void 0 : val.purged_at;
  const contentCreatedAt: undefined | string =
    val.content_created_at == void 0 ? void 0 : val.content_created_at;
  const contentModifiedAt: undefined | string =
    val.content_modified_at == void 0 ? void 0 : val.content_modified_at;
  const ownedBy: undefined | UserMini =
    val.owned_by == void 0 ? void 0 : deserializeUserMini(val.owned_by);
  const sharedLink: undefined | string =
    val.shared_link == void 0 ? void 0 : val.shared_link;
  const folderUploadEmail: undefined | string =
    val.folder_upload_email == void 0 ? void 0 : val.folder_upload_email;
  const parent: undefined | FolderMini =
    val.parent == void 0 ? void 0 : deserializeFolderMini(val.parent);
  const itemStatus: undefined | TrashFolderRestoredItemStatusField =
    val.item_status == void 0
      ? void 0
      : deserializeTrashFolderRestoredItemStatusField(val.item_status);
  return {
    id: id,
    etag: etag,
    type: type,
    sequenceId: sequenceId,
    name: name,
    createdAt: createdAt,
    modifiedAt: modifiedAt,
    description: description,
    size: size,
    pathCollection: pathCollection,
    createdBy: createdBy,
    modifiedBy: modifiedBy,
    trashedAt: trashedAt,
    purgedAt: purgedAt,
    contentCreatedAt: contentCreatedAt,
    contentModifiedAt: contentModifiedAt,
    ownedBy: ownedBy,
    sharedLink: sharedLink,
    folderUploadEmail: folderUploadEmail,
    parent: parent,
    itemStatus: itemStatus,
  } satisfies TrashFolderRestored;
}
export function serializeTrashFileRestoredTypeField(
  val: TrashFileRestoredTypeField
): SerializedData {
  return val;
}
export function deserializeTrashFileRestoredTypeField(
  val: any
): TrashFileRestoredTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "TrashFileRestoredTypeField"';
  }
  if (val == 'file') {
    return 'file';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeTrashFileRestoredPathCollectionField(
  val: TrashFileRestoredPathCollectionField
): SerializedData {
  return {
    ['total_count']: val.totalCount,
    ['entries']: val.entries.map(function (item: FolderMini): any {
      return serializeFolderMini(item);
    }) as readonly any[],
  };
}
export function deserializeTrashFileRestoredPathCollectionField(
  val: any
): TrashFileRestoredPathCollectionField {
  const totalCount: number = val.total_count;
  const entries: readonly FolderMini[] = sdIsList(val.entries)
    ? (val.entries.map(function (itm: SerializedData): any {
        return deserializeFolderMini(itm);
      }) as readonly any[])
    : [];
  return {
    totalCount: totalCount,
    entries: entries,
  } satisfies TrashFileRestoredPathCollectionField;
}
export function serializeTrashFileRestoredItemStatusField(
  val: TrashFileRestoredItemStatusField
): SerializedData {
  return val;
}
export function deserializeTrashFileRestoredItemStatusField(
  val: any
): TrashFileRestoredItemStatusField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "TrashFileRestoredItemStatusField"';
  }
  if (val == 'active') {
    return 'active';
  }
  if (val == 'trashed') {
    return 'trashed';
  }
  if (val == 'deleted') {
    return 'deleted';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeTrashFileRestored(
  val: TrashFileRestored
): SerializedData {
  return {
    ['id']: val.id,
    ['etag']: val.etag == void 0 ? void 0 : val.etag,
    ['type']: serializeTrashFileRestoredTypeField(val.type),
    ['sequence_id']: val.sequenceId,
    ['name']: val.name == void 0 ? void 0 : val.name,
    ['sha1']: val.sha1,
    ['file_version']:
      val.fileVersion == void 0
        ? void 0
        : serializeFileVersionMini(val.fileVersion),
    ['description']: val.description,
    ['size']: val.size,
    ['path_collection']: serializeTrashFileRestoredPathCollectionField(
      val.pathCollection
    ),
    ['created_at']: val.createdAt,
    ['modified_at']: val.modifiedAt,
    ['trashed_at']: val.trashedAt == void 0 ? void 0 : val.trashedAt,
    ['purged_at']: val.purgedAt == void 0 ? void 0 : val.purgedAt,
    ['content_created_at']:
      val.contentCreatedAt == void 0 ? void 0 : val.contentCreatedAt,
    ['content_modified_at']:
      val.contentModifiedAt == void 0 ? void 0 : val.contentModifiedAt,
    ['created_by']:
      val.createdBy == void 0 ? void 0 : serializeUserMini(val.createdBy),
    ['modified_by']: serializeUserMini(val.modifiedBy),
    ['owned_by']: serializeUserMini(val.ownedBy),
    ['shared_link']: val.sharedLink == void 0 ? void 0 : val.sharedLink,
    ['parent']: val.parent == void 0 ? void 0 : serializeFolderMini(val.parent),
    ['item_status']: serializeTrashFileRestoredItemStatusField(val.itemStatus),
  };
}
export function deserializeTrashFileRestored(val: any): TrashFileRestored {
  const id: string = val.id;
  const etag: undefined | string = val.etag == void 0 ? void 0 : val.etag;
  const type: TrashFileRestoredTypeField =
    deserializeTrashFileRestoredTypeField(val.type);
  const sequenceId: string = val.sequence_id;
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const sha1: string = val.sha1;
  const fileVersion: undefined | FileVersionMini =
    val.file_version == void 0
      ? void 0
      : deserializeFileVersionMini(val.file_version);
  const description: string = val.description;
  const size: number = val.size;
  const pathCollection: TrashFileRestoredPathCollectionField =
    deserializeTrashFileRestoredPathCollectionField(val.path_collection);
  const createdAt: string = val.created_at;
  const modifiedAt: string = val.modified_at;
  const trashedAt: undefined | string =
    val.trashed_at == void 0 ? void 0 : val.trashed_at;
  const purgedAt: undefined | string =
    val.purged_at == void 0 ? void 0 : val.purged_at;
  const contentCreatedAt: undefined | string =
    val.content_created_at == void 0 ? void 0 : val.content_created_at;
  const contentModifiedAt: undefined | string =
    val.content_modified_at == void 0 ? void 0 : val.content_modified_at;
  const createdBy: undefined | UserMini =
    val.created_by == void 0 ? void 0 : deserializeUserMini(val.created_by);
  const modifiedBy: UserMini = deserializeUserMini(val.modified_by);
  const ownedBy: UserMini = deserializeUserMini(val.owned_by);
  const sharedLink: undefined | string =
    val.shared_link == void 0 ? void 0 : val.shared_link;
  const parent: undefined | FolderMini =
    val.parent == void 0 ? void 0 : deserializeFolderMini(val.parent);
  const itemStatus: TrashFileRestoredItemStatusField =
    deserializeTrashFileRestoredItemStatusField(val.item_status);
  return {
    id: id,
    etag: etag,
    type: type,
    sequenceId: sequenceId,
    name: name,
    sha1: sha1,
    fileVersion: fileVersion,
    description: description,
    size: size,
    pathCollection: pathCollection,
    createdAt: createdAt,
    modifiedAt: modifiedAt,
    trashedAt: trashedAt,
    purgedAt: purgedAt,
    contentCreatedAt: contentCreatedAt,
    contentModifiedAt: contentModifiedAt,
    createdBy: createdBy,
    modifiedBy: modifiedBy,
    ownedBy: ownedBy,
    sharedLink: sharedLink,
    parent: parent,
    itemStatus: itemStatus,
  } satisfies TrashFileRestored;
}
export function serializeTrashWebLinkTypeField(
  val: TrashWebLinkTypeField
): SerializedData {
  return val;
}
export function deserializeTrashWebLinkTypeField(
  val: any
): TrashWebLinkTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "TrashWebLinkTypeField"';
  }
  if (val == 'web_link') {
    return 'web_link';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeTrashWebLinkPathCollectionEntriesTypeField(
  val: TrashWebLinkPathCollectionEntriesTypeField
): SerializedData {
  return val;
}
export function deserializeTrashWebLinkPathCollectionEntriesTypeField(
  val: any
): TrashWebLinkPathCollectionEntriesTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "TrashWebLinkPathCollectionEntriesTypeField"';
  }
  if (val == 'folder') {
    return 'folder';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeTrashWebLinkPathCollectionEntriesField(
  val: TrashWebLinkPathCollectionEntriesField
): SerializedData {
  return {
    ['type']:
      val.type == void 0
        ? void 0
        : serializeTrashWebLinkPathCollectionEntriesTypeField(val.type),
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['sequence_id']: val.sequenceId == void 0 ? void 0 : val.sequenceId,
    ['etag']: val.etag == void 0 ? void 0 : val.etag,
    ['name']: val.name == void 0 ? void 0 : val.name,
  };
}
export function deserializeTrashWebLinkPathCollectionEntriesField(
  val: any
): TrashWebLinkPathCollectionEntriesField {
  const type: undefined | TrashWebLinkPathCollectionEntriesTypeField =
    val.type == void 0
      ? void 0
      : deserializeTrashWebLinkPathCollectionEntriesTypeField(val.type);
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const sequenceId: undefined | string =
    val.sequence_id == void 0 ? void 0 : val.sequence_id;
  const etag: undefined | string = val.etag == void 0 ? void 0 : val.etag;
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  return {
    type: type,
    id: id,
    sequenceId: sequenceId,
    etag: etag,
    name: name,
  } satisfies TrashWebLinkPathCollectionEntriesField;
}
export function serializeTrashWebLinkPathCollectionField(
  val: TrashWebLinkPathCollectionField
): SerializedData {
  return {
    ['total_count']: val.totalCount,
    ['entries']: val.entries.map(function (
      item: TrashWebLinkPathCollectionEntriesField
    ): any {
      return serializeTrashWebLinkPathCollectionEntriesField(item);
    }) as readonly any[],
  };
}
export function deserializeTrashWebLinkPathCollectionField(
  val: any
): TrashWebLinkPathCollectionField {
  const totalCount: number = val.total_count;
  const entries: readonly TrashWebLinkPathCollectionEntriesField[] = sdIsList(
    val.entries
  )
    ? (val.entries.map(function (itm: SerializedData): any {
        return deserializeTrashWebLinkPathCollectionEntriesField(itm);
      }) as readonly any[])
    : [];
  return {
    totalCount: totalCount,
    entries: entries,
  } satisfies TrashWebLinkPathCollectionField;
}
export function serializeTrashWebLinkItemStatusField(
  val: TrashWebLinkItemStatusField
): SerializedData {
  return val;
}
export function deserializeTrashWebLinkItemStatusField(
  val: any
): TrashWebLinkItemStatusField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "TrashWebLinkItemStatusField"';
  }
  if (val == 'active') {
    return 'active';
  }
  if (val == 'trashed') {
    return 'trashed';
  }
  if (val == 'deleted') {
    return 'deleted';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeTrashWebLink(val: TrashWebLink): SerializedData {
  return {
    ['type']:
      val.type == void 0 ? void 0 : serializeTrashWebLinkTypeField(val.type),
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['sequence_id']: val.sequenceId == void 0 ? void 0 : val.sequenceId,
    ['etag']: val.etag == void 0 ? void 0 : val.etag,
    ['name']: val.name == void 0 ? void 0 : val.name,
    ['url']: val.url == void 0 ? void 0 : val.url,
    ['parent']: val.parent == void 0 ? void 0 : serializeFolderMini(val.parent),
    ['description']: val.description == void 0 ? void 0 : val.description,
    ['path_collection']:
      val.pathCollection == void 0
        ? void 0
        : serializeTrashWebLinkPathCollectionField(val.pathCollection),
    ['created_at']: val.createdAt == void 0 ? void 0 : val.createdAt,
    ['modified_at']: val.modifiedAt == void 0 ? void 0 : val.modifiedAt,
    ['trashed_at']: val.trashedAt == void 0 ? void 0 : val.trashedAt,
    ['purged_at']: val.purgedAt == void 0 ? void 0 : val.purgedAt,
    ['created_by']:
      val.createdBy == void 0 ? void 0 : serializeUserMini(val.createdBy),
    ['modified_by']:
      val.modifiedBy == void 0 ? void 0 : serializeUserMini(val.modifiedBy),
    ['owned_by']:
      val.ownedBy == void 0 ? void 0 : serializeUserMini(val.ownedBy),
    ['shared_link']: val.sharedLink == void 0 ? void 0 : val.sharedLink,
    ['item_status']:
      val.itemStatus == void 0
        ? void 0
        : serializeTrashWebLinkItemStatusField(val.itemStatus),
  };
}
export function deserializeTrashWebLink(val: any): TrashWebLink {
  const type: undefined | TrashWebLinkTypeField =
    val.type == void 0 ? void 0 : deserializeTrashWebLinkTypeField(val.type);
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const sequenceId: undefined | string =
    val.sequence_id == void 0 ? void 0 : val.sequence_id;
  const etag: undefined | string = val.etag == void 0 ? void 0 : val.etag;
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const url: undefined | string = val.url == void 0 ? void 0 : val.url;
  const parent: undefined | FolderMini =
    val.parent == void 0 ? void 0 : deserializeFolderMini(val.parent);
  const description: undefined | string =
    val.description == void 0 ? void 0 : val.description;
  const pathCollection: undefined | TrashWebLinkPathCollectionField =
    val.path_collection == void 0
      ? void 0
      : deserializeTrashWebLinkPathCollectionField(val.path_collection);
  const createdAt: undefined | string =
    val.created_at == void 0 ? void 0 : val.created_at;
  const modifiedAt: undefined | string =
    val.modified_at == void 0 ? void 0 : val.modified_at;
  const trashedAt: undefined | string =
    val.trashed_at == void 0 ? void 0 : val.trashed_at;
  const purgedAt: undefined | string =
    val.purged_at == void 0 ? void 0 : val.purged_at;
  const createdBy: undefined | UserMini =
    val.created_by == void 0 ? void 0 : deserializeUserMini(val.created_by);
  const modifiedBy: undefined | UserMini =
    val.modified_by == void 0 ? void 0 : deserializeUserMini(val.modified_by);
  const ownedBy: undefined | UserMini =
    val.owned_by == void 0 ? void 0 : deserializeUserMini(val.owned_by);
  const sharedLink: undefined | string =
    val.shared_link == void 0 ? void 0 : val.shared_link;
  const itemStatus: undefined | TrashWebLinkItemStatusField =
    val.item_status == void 0
      ? void 0
      : deserializeTrashWebLinkItemStatusField(val.item_status);
  return {
    type: type,
    id: id,
    sequenceId: sequenceId,
    etag: etag,
    name: name,
    url: url,
    parent: parent,
    description: description,
    pathCollection: pathCollection,
    createdAt: createdAt,
    modifiedAt: modifiedAt,
    trashedAt: trashedAt,
    purgedAt: purgedAt,
    createdBy: createdBy,
    modifiedBy: modifiedBy,
    ownedBy: ownedBy,
    sharedLink: sharedLink,
    itemStatus: itemStatus,
  } satisfies TrashWebLink;
}
export function serializeTrashFolderTypeField(
  val: TrashFolderTypeField
): SerializedData {
  return val;
}
export function deserializeTrashFolderTypeField(
  val: any
): TrashFolderTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "TrashFolderTypeField"';
  }
  if (val == 'folder') {
    return 'folder';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeTrashFolderPathCollectionEntriesTypeField(
  val: TrashFolderPathCollectionEntriesTypeField
): SerializedData {
  return val;
}
export function deserializeTrashFolderPathCollectionEntriesTypeField(
  val: any
): TrashFolderPathCollectionEntriesTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "TrashFolderPathCollectionEntriesTypeField"';
  }
  if (val == 'folder') {
    return 'folder';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeTrashFolderPathCollectionEntriesField(
  val: TrashFolderPathCollectionEntriesField
): SerializedData {
  return {
    ['type']:
      val.type == void 0
        ? void 0
        : serializeTrashFolderPathCollectionEntriesTypeField(val.type),
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['sequence_id']: val.sequenceId == void 0 ? void 0 : val.sequenceId,
    ['etag']: val.etag == void 0 ? void 0 : val.etag,
    ['name']: val.name == void 0 ? void 0 : val.name,
  };
}
export function deserializeTrashFolderPathCollectionEntriesField(
  val: any
): TrashFolderPathCollectionEntriesField {
  const type: undefined | TrashFolderPathCollectionEntriesTypeField =
    val.type == void 0
      ? void 0
      : deserializeTrashFolderPathCollectionEntriesTypeField(val.type);
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const sequenceId: undefined | string =
    val.sequence_id == void 0 ? void 0 : val.sequence_id;
  const etag: undefined | string = val.etag == void 0 ? void 0 : val.etag;
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  return {
    type: type,
    id: id,
    sequenceId: sequenceId,
    etag: etag,
    name: name,
  } satisfies TrashFolderPathCollectionEntriesField;
}
export function serializeTrashFolderPathCollectionField(
  val: TrashFolderPathCollectionField
): SerializedData {
  return {
    ['total_count']: val.totalCount,
    ['entries']: val.entries.map(function (
      item: TrashFolderPathCollectionEntriesField
    ): any {
      return serializeTrashFolderPathCollectionEntriesField(item);
    }) as readonly any[],
  };
}
export function deserializeTrashFolderPathCollectionField(
  val: any
): TrashFolderPathCollectionField {
  const totalCount: number = val.total_count;
  const entries: readonly TrashFolderPathCollectionEntriesField[] = sdIsList(
    val.entries
  )
    ? (val.entries.map(function (itm: SerializedData): any {
        return deserializeTrashFolderPathCollectionEntriesField(itm);
      }) as readonly any[])
    : [];
  return {
    totalCount: totalCount,
    entries: entries,
  } satisfies TrashFolderPathCollectionField;
}
export function serializeTrashFolderItemStatusField(
  val: TrashFolderItemStatusField
): SerializedData {
  return val;
}
export function deserializeTrashFolderItemStatusField(
  val: any
): TrashFolderItemStatusField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "TrashFolderItemStatusField"';
  }
  if (val == 'active') {
    return 'active';
  }
  if (val == 'trashed') {
    return 'trashed';
  }
  if (val == 'deleted') {
    return 'deleted';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeTrashFolder(val: TrashFolder): SerializedData {
  return {
    ['id']: val.id,
    ['etag']: val.etag == void 0 ? void 0 : val.etag,
    ['type']: serializeTrashFolderTypeField(val.type),
    ['sequence_id']: val.sequenceId == void 0 ? void 0 : val.sequenceId,
    ['name']: val.name,
    ['created_at']: val.createdAt == void 0 ? void 0 : val.createdAt,
    ['modified_at']: val.modifiedAt == void 0 ? void 0 : val.modifiedAt,
    ['description']: val.description,
    ['size']: val.size,
    ['path_collection']: serializeTrashFolderPathCollectionField(
      val.pathCollection
    ),
    ['created_by']: serializeUserMini(val.createdBy),
    ['modified_by']: serializeUserMini(val.modifiedBy),
    ['trashed_at']: val.trashedAt == void 0 ? void 0 : val.trashedAt,
    ['purged_at']: val.purgedAt == void 0 ? void 0 : val.purgedAt,
    ['content_created_at']:
      val.contentCreatedAt == void 0 ? void 0 : val.contentCreatedAt,
    ['content_modified_at']:
      val.contentModifiedAt == void 0 ? void 0 : val.contentModifiedAt,
    ['owned_by']: serializeUserMini(val.ownedBy),
    ['shared_link']: val.sharedLink == void 0 ? void 0 : val.sharedLink,
    ['folder_upload_email']:
      val.folderUploadEmail == void 0 ? void 0 : val.folderUploadEmail,
    ['parent']: val.parent == void 0 ? void 0 : serializeFolderMini(val.parent),
    ['item_status']: serializeTrashFolderItemStatusField(val.itemStatus),
  };
}
export function deserializeTrashFolder(val: any): TrashFolder {
  const id: string = val.id;
  const etag: undefined | string = val.etag == void 0 ? void 0 : val.etag;
  const type: TrashFolderTypeField = deserializeTrashFolderTypeField(val.type);
  const sequenceId: undefined | string =
    val.sequence_id == void 0 ? void 0 : val.sequence_id;
  const name: string = val.name;
  const createdAt: undefined | string =
    val.created_at == void 0 ? void 0 : val.created_at;
  const modifiedAt: undefined | string =
    val.modified_at == void 0 ? void 0 : val.modified_at;
  const description: string = val.description;
  const size: number = val.size;
  const pathCollection: TrashFolderPathCollectionField =
    deserializeTrashFolderPathCollectionField(val.path_collection);
  const createdBy: UserMini = deserializeUserMini(val.created_by);
  const modifiedBy: UserMini = deserializeUserMini(val.modified_by);
  const trashedAt: undefined | string =
    val.trashed_at == void 0 ? void 0 : val.trashed_at;
  const purgedAt: undefined | string =
    val.purged_at == void 0 ? void 0 : val.purged_at;
  const contentCreatedAt: undefined | string =
    val.content_created_at == void 0 ? void 0 : val.content_created_at;
  const contentModifiedAt: undefined | string =
    val.content_modified_at == void 0 ? void 0 : val.content_modified_at;
  const ownedBy: UserMini = deserializeUserMini(val.owned_by);
  const sharedLink: undefined | string =
    val.shared_link == void 0 ? void 0 : val.shared_link;
  const folderUploadEmail: undefined | string =
    val.folder_upload_email == void 0 ? void 0 : val.folder_upload_email;
  const parent: undefined | FolderMini =
    val.parent == void 0 ? void 0 : deserializeFolderMini(val.parent);
  const itemStatus: TrashFolderItemStatusField =
    deserializeTrashFolderItemStatusField(val.item_status);
  return {
    id: id,
    etag: etag,
    type: type,
    sequenceId: sequenceId,
    name: name,
    createdAt: createdAt,
    modifiedAt: modifiedAt,
    description: description,
    size: size,
    pathCollection: pathCollection,
    createdBy: createdBy,
    modifiedBy: modifiedBy,
    trashedAt: trashedAt,
    purgedAt: purgedAt,
    contentCreatedAt: contentCreatedAt,
    contentModifiedAt: contentModifiedAt,
    ownedBy: ownedBy,
    sharedLink: sharedLink,
    folderUploadEmail: folderUploadEmail,
    parent: parent,
    itemStatus: itemStatus,
  } satisfies TrashFolder;
}
export function serializeTrashFileTypeField(
  val: TrashFileTypeField
): SerializedData {
  return val;
}
export function deserializeTrashFileTypeField(val: any): TrashFileTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "TrashFileTypeField"';
  }
  if (val == 'file') {
    return 'file';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeTrashFilePathCollectionEntriesTypeField(
  val: TrashFilePathCollectionEntriesTypeField
): SerializedData {
  return val;
}
export function deserializeTrashFilePathCollectionEntriesTypeField(
  val: any
): TrashFilePathCollectionEntriesTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "TrashFilePathCollectionEntriesTypeField"';
  }
  if (val == 'folder') {
    return 'folder';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeTrashFilePathCollectionEntriesField(
  val: TrashFilePathCollectionEntriesField
): SerializedData {
  return {
    ['type']:
      val.type == void 0
        ? void 0
        : serializeTrashFilePathCollectionEntriesTypeField(val.type),
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['sequence_id']: val.sequenceId == void 0 ? void 0 : val.sequenceId,
    ['etag']: val.etag == void 0 ? void 0 : val.etag,
    ['name']: val.name == void 0 ? void 0 : val.name,
  };
}
export function deserializeTrashFilePathCollectionEntriesField(
  val: any
): TrashFilePathCollectionEntriesField {
  const type: undefined | TrashFilePathCollectionEntriesTypeField =
    val.type == void 0
      ? void 0
      : deserializeTrashFilePathCollectionEntriesTypeField(val.type);
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const sequenceId: undefined | string =
    val.sequence_id == void 0 ? void 0 : val.sequence_id;
  const etag: undefined | string = val.etag == void 0 ? void 0 : val.etag;
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  return {
    type: type,
    id: id,
    sequenceId: sequenceId,
    etag: etag,
    name: name,
  } satisfies TrashFilePathCollectionEntriesField;
}
export function serializeTrashFilePathCollectionField(
  val: TrashFilePathCollectionField
): SerializedData {
  return {
    ['total_count']: val.totalCount,
    ['entries']: val.entries.map(function (
      item: TrashFilePathCollectionEntriesField
    ): any {
      return serializeTrashFilePathCollectionEntriesField(item);
    }) as readonly any[],
  };
}
export function deserializeTrashFilePathCollectionField(
  val: any
): TrashFilePathCollectionField {
  const totalCount: number = val.total_count;
  const entries: readonly TrashFilePathCollectionEntriesField[] = sdIsList(
    val.entries
  )
    ? (val.entries.map(function (itm: SerializedData): any {
        return deserializeTrashFilePathCollectionEntriesField(itm);
      }) as readonly any[])
    : [];
  return {
    totalCount: totalCount,
    entries: entries,
  } satisfies TrashFilePathCollectionField;
}
export function serializeTrashFileItemStatusField(
  val: TrashFileItemStatusField
): SerializedData {
  return val;
}
export function deserializeTrashFileItemStatusField(
  val: any
): TrashFileItemStatusField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "TrashFileItemStatusField"';
  }
  if (val == 'active') {
    return 'active';
  }
  if (val == 'trashed') {
    return 'trashed';
  }
  if (val == 'deleted') {
    return 'deleted';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeTrashFile(val: TrashFile): SerializedData {
  return {
    ['id']: val.id,
    ['etag']: val.etag == void 0 ? void 0 : val.etag,
    ['type']: serializeTrashFileTypeField(val.type),
    ['sequence_id']: val.sequenceId,
    ['name']: val.name == void 0 ? void 0 : val.name,
    ['sha1']: val.sha1,
    ['file_version']:
      val.fileVersion == void 0
        ? void 0
        : serializeFileVersionMini(val.fileVersion),
    ['description']: val.description,
    ['size']: val.size,
    ['path_collection']: serializeTrashFilePathCollectionField(
      val.pathCollection
    ),
    ['created_at']: val.createdAt,
    ['modified_at']: val.modifiedAt,
    ['trashed_at']: val.trashedAt == void 0 ? void 0 : val.trashedAt,
    ['purged_at']: val.purgedAt == void 0 ? void 0 : val.purgedAt,
    ['content_created_at']:
      val.contentCreatedAt == void 0 ? void 0 : val.contentCreatedAt,
    ['content_modified_at']:
      val.contentModifiedAt == void 0 ? void 0 : val.contentModifiedAt,
    ['created_by']:
      val.createdBy == void 0 ? void 0 : serializeUserMini(val.createdBy),
    ['modified_by']: serializeUserMini(val.modifiedBy),
    ['owned_by']: serializeUserMini(val.ownedBy),
    ['shared_link']: val.sharedLink == void 0 ? void 0 : val.sharedLink,
    ['parent']: val.parent == void 0 ? void 0 : serializeFolderMini(val.parent),
    ['item_status']: serializeTrashFileItemStatusField(val.itemStatus),
  };
}
export function deserializeTrashFile(val: any): TrashFile {
  const id: string = val.id;
  const etag: undefined | string = val.etag == void 0 ? void 0 : val.etag;
  const type: TrashFileTypeField = deserializeTrashFileTypeField(val.type);
  const sequenceId: string = val.sequence_id;
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const sha1: string = val.sha1;
  const fileVersion: undefined | FileVersionMini =
    val.file_version == void 0
      ? void 0
      : deserializeFileVersionMini(val.file_version);
  const description: string = val.description;
  const size: number = val.size;
  const pathCollection: TrashFilePathCollectionField =
    deserializeTrashFilePathCollectionField(val.path_collection);
  const createdAt: string = val.created_at;
  const modifiedAt: string = val.modified_at;
  const trashedAt: undefined | string =
    val.trashed_at == void 0 ? void 0 : val.trashed_at;
  const purgedAt: undefined | string =
    val.purged_at == void 0 ? void 0 : val.purged_at;
  const contentCreatedAt: undefined | string =
    val.content_created_at == void 0 ? void 0 : val.content_created_at;
  const contentModifiedAt: undefined | string =
    val.content_modified_at == void 0 ? void 0 : val.content_modified_at;
  const createdBy: undefined | UserMini =
    val.created_by == void 0 ? void 0 : deserializeUserMini(val.created_by);
  const modifiedBy: UserMini = deserializeUserMini(val.modified_by);
  const ownedBy: UserMini = deserializeUserMini(val.owned_by);
  const sharedLink: undefined | string =
    val.shared_link == void 0 ? void 0 : val.shared_link;
  const parent: undefined | FolderMini =
    val.parent == void 0 ? void 0 : deserializeFolderMini(val.parent);
  const itemStatus: TrashFileItemStatusField =
    deserializeTrashFileItemStatusField(val.item_status);
  return {
    id: id,
    etag: etag,
    type: type,
    sequenceId: sequenceId,
    name: name,
    sha1: sha1,
    fileVersion: fileVersion,
    description: description,
    size: size,
    pathCollection: pathCollection,
    createdAt: createdAt,
    modifiedAt: modifiedAt,
    trashedAt: trashedAt,
    purgedAt: purgedAt,
    contentCreatedAt: contentCreatedAt,
    contentModifiedAt: contentModifiedAt,
    createdBy: createdBy,
    modifiedBy: modifiedBy,
    ownedBy: ownedBy,
    sharedLink: sharedLink,
    parent: parent,
    itemStatus: itemStatus,
  } satisfies TrashFile;
}
export function serializeTermsOfServiceUserStatusTypeField(
  val: TermsOfServiceUserStatusTypeField
): SerializedData {
  return val;
}
export function deserializeTermsOfServiceUserStatusTypeField(
  val: any
): TermsOfServiceUserStatusTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "TermsOfServiceUserStatusTypeField"';
  }
  if (val == 'terms_of_service_user_status') {
    return 'terms_of_service_user_status';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeTermsOfServiceUserStatus(
  val: TermsOfServiceUserStatus
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0
        ? void 0
        : serializeTermsOfServiceUserStatusTypeField(val.type),
    ['tos']: val.tos == void 0 ? void 0 : serializeTermsOfServiceBase(val.tos),
    ['user']: val.user == void 0 ? void 0 : serializeUserMini(val.user),
    ['is_accepted']: val.isAccepted == void 0 ? void 0 : val.isAccepted,
    ['created_at']: val.createdAt == void 0 ? void 0 : val.createdAt,
    ['modified_at']: val.modifiedAt == void 0 ? void 0 : val.modifiedAt,
  };
}
export function deserializeTermsOfServiceUserStatus(
  val: any
): TermsOfServiceUserStatus {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | TermsOfServiceUserStatusTypeField =
    val.type == void 0
      ? void 0
      : deserializeTermsOfServiceUserStatusTypeField(val.type);
  const tos: undefined | TermsOfServiceBase =
    val.tos == void 0 ? void 0 : deserializeTermsOfServiceBase(val.tos);
  const user: undefined | UserMini =
    val.user == void 0 ? void 0 : deserializeUserMini(val.user);
  const isAccepted: undefined | boolean =
    val.is_accepted == void 0 ? void 0 : val.is_accepted;
  const createdAt: undefined | string =
    val.created_at == void 0 ? void 0 : val.created_at;
  const modifiedAt: undefined | string =
    val.modified_at == void 0 ? void 0 : val.modified_at;
  return {
    id: id,
    type: type,
    tos: tos,
    user: user,
    isAccepted: isAccepted,
    createdAt: createdAt,
    modifiedAt: modifiedAt,
  } satisfies TermsOfServiceUserStatus;
}
export function serializeTermsOfServiceUserStatuses(
  val: TermsOfServiceUserStatuses
): SerializedData {
  return {
    ['total_count']: val.totalCount == void 0 ? void 0 : val.totalCount,
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (item: TermsOfServiceUserStatus): any {
            return serializeTermsOfServiceUserStatus(item);
          }) as readonly any[]),
  };
}
export function deserializeTermsOfServiceUserStatuses(
  val: any
): TermsOfServiceUserStatuses {
  const totalCount: undefined | number =
    val.total_count == void 0 ? void 0 : val.total_count;
  const entries: undefined | readonly TermsOfServiceUserStatus[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (itm: SerializedData): any {
          return deserializeTermsOfServiceUserStatus(itm);
        }) as readonly any[])
      : [];
  return {
    totalCount: totalCount,
    entries: entries,
  } satisfies TermsOfServiceUserStatuses;
}
export function serializeTaskAssignmentTypeField(
  val: TaskAssignmentTypeField
): SerializedData {
  return val;
}
export function deserializeTaskAssignmentTypeField(
  val: any
): TaskAssignmentTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "TaskAssignmentTypeField"';
  }
  if (val == 'task_assignment') {
    return 'task_assignment';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeTaskAssignmentResolutionStateField(
  val: TaskAssignmentResolutionStateField
): SerializedData {
  return val;
}
export function deserializeTaskAssignmentResolutionStateField(
  val: any
): TaskAssignmentResolutionStateField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "TaskAssignmentResolutionStateField"';
  }
  if (val == 'completed') {
    return 'completed';
  }
  if (val == 'incomplete') {
    return 'incomplete';
  }
  if (val == 'approved') {
    return 'approved';
  }
  if (val == 'rejected') {
    return 'rejected';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeTaskAssignment(val: TaskAssignment): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0 ? void 0 : serializeTaskAssignmentTypeField(val.type),
    ['item']: val.item == void 0 ? void 0 : serializeFileMini(val.item),
    ['assigned_to']:
      val.assignedTo == void 0 ? void 0 : serializeUserMini(val.assignedTo),
    ['message']: val.message == void 0 ? void 0 : val.message,
    ['completed_at']: val.completedAt == void 0 ? void 0 : val.completedAt,
    ['assigned_at']: val.assignedAt == void 0 ? void 0 : val.assignedAt,
    ['reminded_at']: val.remindedAt == void 0 ? void 0 : val.remindedAt,
    ['resolution_state']:
      val.resolutionState == void 0
        ? void 0
        : serializeTaskAssignmentResolutionStateField(val.resolutionState),
    ['assigned_by']:
      val.assignedBy == void 0 ? void 0 : serializeUserMini(val.assignedBy),
  };
}
export function deserializeTaskAssignment(val: any): TaskAssignment {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | TaskAssignmentTypeField =
    val.type == void 0 ? void 0 : deserializeTaskAssignmentTypeField(val.type);
  const item: undefined | FileMini =
    val.item == void 0 ? void 0 : deserializeFileMini(val.item);
  const assignedTo: undefined | UserMini =
    val.assigned_to == void 0 ? void 0 : deserializeUserMini(val.assigned_to);
  const message: undefined | string =
    val.message == void 0 ? void 0 : val.message;
  const completedAt: undefined | string =
    val.completed_at == void 0 ? void 0 : val.completed_at;
  const assignedAt: undefined | string =
    val.assigned_at == void 0 ? void 0 : val.assigned_at;
  const remindedAt: undefined | string =
    val.reminded_at == void 0 ? void 0 : val.reminded_at;
  const resolutionState: undefined | TaskAssignmentResolutionStateField =
    val.resolution_state == void 0
      ? void 0
      : deserializeTaskAssignmentResolutionStateField(val.resolution_state);
  const assignedBy: undefined | UserMini =
    val.assigned_by == void 0 ? void 0 : deserializeUserMini(val.assigned_by);
  return {
    id: id,
    type: type,
    item: item,
    assignedTo: assignedTo,
    message: message,
    completedAt: completedAt,
    assignedAt: assignedAt,
    remindedAt: remindedAt,
    resolutionState: resolutionState,
    assignedBy: assignedBy,
  } satisfies TaskAssignment;
}
export function serializeTaskAssignments(val: TaskAssignments): SerializedData {
  return {
    ['total_count']: val.totalCount == void 0 ? void 0 : val.totalCount,
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (item: TaskAssignment): any {
            return serializeTaskAssignment(item);
          }) as readonly any[]),
  };
}
export function deserializeTaskAssignments(val: any): TaskAssignments {
  const totalCount: undefined | number =
    val.total_count == void 0 ? void 0 : val.total_count;
  const entries: undefined | readonly TaskAssignment[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (itm: SerializedData): any {
          return deserializeTaskAssignment(itm);
        }) as readonly any[])
      : [];
  return { totalCount: totalCount, entries: entries } satisfies TaskAssignments;
}
export function serializeTaskTypeField(val: TaskTypeField): SerializedData {
  return val;
}
export function deserializeTaskTypeField(val: any): TaskTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "TaskTypeField"';
  }
  if (val == 'task') {
    return 'task';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeTaskActionField(val: TaskActionField): SerializedData {
  return val;
}
export function deserializeTaskActionField(val: any): TaskActionField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "TaskActionField"';
  }
  if (val == 'review') {
    return 'review';
  }
  if (val == 'complete') {
    return 'complete';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeTaskCompletionRuleField(
  val: TaskCompletionRuleField
): SerializedData {
  return val;
}
export function deserializeTaskCompletionRuleField(
  val: any
): TaskCompletionRuleField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "TaskCompletionRuleField"';
  }
  if (val == 'all_assignees') {
    return 'all_assignees';
  }
  if (val == 'any_assignee') {
    return 'any_assignee';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeTask(val: Task): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']: val.type == void 0 ? void 0 : serializeTaskTypeField(val.type),
    ['item']: val.item == void 0 ? void 0 : serializeFileMini(val.item),
    ['due_at']: val.dueAt == void 0 ? void 0 : val.dueAt,
    ['action']:
      val.action == void 0 ? void 0 : serializeTaskActionField(val.action),
    ['message']: val.message == void 0 ? void 0 : val.message,
    ['task_assignment_collection']:
      val.taskAssignmentCollection == void 0
        ? void 0
        : serializeTaskAssignments(val.taskAssignmentCollection),
    ['is_completed']: val.isCompleted == void 0 ? void 0 : val.isCompleted,
    ['created_by']:
      val.createdBy == void 0 ? void 0 : serializeUserMini(val.createdBy),
    ['created_at']: val.createdAt == void 0 ? void 0 : val.createdAt,
    ['completion_rule']:
      val.completionRule == void 0
        ? void 0
        : serializeTaskCompletionRuleField(val.completionRule),
  };
}
export function deserializeTask(val: any): Task {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | TaskTypeField =
    val.type == void 0 ? void 0 : deserializeTaskTypeField(val.type);
  const item: undefined | FileMini =
    val.item == void 0 ? void 0 : deserializeFileMini(val.item);
  const dueAt: undefined | string = val.due_at == void 0 ? void 0 : val.due_at;
  const action: undefined | TaskActionField =
    val.action == void 0 ? void 0 : deserializeTaskActionField(val.action);
  const message: undefined | string =
    val.message == void 0 ? void 0 : val.message;
  const taskAssignmentCollection: undefined | TaskAssignments =
    val.task_assignment_collection == void 0
      ? void 0
      : deserializeTaskAssignments(val.task_assignment_collection);
  const isCompleted: undefined | boolean =
    val.is_completed == void 0 ? void 0 : val.is_completed;
  const createdBy: undefined | UserMini =
    val.created_by == void 0 ? void 0 : deserializeUserMini(val.created_by);
  const createdAt: undefined | string =
    val.created_at == void 0 ? void 0 : val.created_at;
  const completionRule: undefined | TaskCompletionRuleField =
    val.completion_rule == void 0
      ? void 0
      : deserializeTaskCompletionRuleField(val.completion_rule);
  return {
    id: id,
    type: type,
    item: item,
    dueAt: dueAt,
    action: action,
    message: message,
    taskAssignmentCollection: taskAssignmentCollection,
    isCompleted: isCompleted,
    createdBy: createdBy,
    createdAt: createdAt,
    completionRule: completionRule,
  } satisfies Task;
}
export function serializeTasks(val: Tasks): SerializedData {
  return {
    ['total_count']: val.totalCount == void 0 ? void 0 : val.totalCount,
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (item: Task): any {
            return serializeTask(item);
          }) as readonly any[]),
  };
}
export function deserializeTasks(val: any): Tasks {
  const totalCount: undefined | number =
    val.total_count == void 0 ? void 0 : val.total_count;
  const entries: undefined | readonly Task[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (itm: SerializedData): any {
          return deserializeTask(itm);
        }) as readonly any[])
      : [];
  return { totalCount: totalCount, entries: entries } satisfies Tasks;
}
export function serializeRetentionPolicyAssignmentTypeField(
  val: RetentionPolicyAssignmentTypeField
): SerializedData {
  return val;
}
export function deserializeRetentionPolicyAssignmentTypeField(
  val: any
): RetentionPolicyAssignmentTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "RetentionPolicyAssignmentTypeField"';
  }
  if (val == 'retention_policy_assignment') {
    return 'retention_policy_assignment';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeRetentionPolicyAssignmentAssignedToTypeField(
  val: RetentionPolicyAssignmentAssignedToTypeField
): SerializedData {
  return val;
}
export function deserializeRetentionPolicyAssignmentAssignedToTypeField(
  val: any
): RetentionPolicyAssignmentAssignedToTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "RetentionPolicyAssignmentAssignedToTypeField"';
  }
  if (val == 'folder') {
    return 'folder';
  }
  if (val == 'enterprise') {
    return 'enterprise';
  }
  if (val == 'metadata_template') {
    return 'metadata_template';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeRetentionPolicyAssignmentAssignedToField(
  val: RetentionPolicyAssignmentAssignedToField
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0
        ? void 0
        : serializeRetentionPolicyAssignmentAssignedToTypeField(val.type),
  };
}
export function deserializeRetentionPolicyAssignmentAssignedToField(
  val: any
): RetentionPolicyAssignmentAssignedToField {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | RetentionPolicyAssignmentAssignedToTypeField =
    val.type == void 0
      ? void 0
      : deserializeRetentionPolicyAssignmentAssignedToTypeField(val.type);
  return {
    id: id,
    type: type,
  } satisfies RetentionPolicyAssignmentAssignedToField;
}
export function serializeRetentionPolicyAssignmentFilterFieldsField(
  val: RetentionPolicyAssignmentFilterFieldsField
): SerializedData {
  return {
    ['field']: val.field == void 0 ? void 0 : val.field,
    ['value']: val.value == void 0 ? void 0 : val.value,
  };
}
export function deserializeRetentionPolicyAssignmentFilterFieldsField(
  val: any
): RetentionPolicyAssignmentFilterFieldsField {
  const field: undefined | string = val.field == void 0 ? void 0 : val.field;
  const value: undefined | string = val.value == void 0 ? void 0 : val.value;
  return {
    field: field,
    value: value,
  } satisfies RetentionPolicyAssignmentFilterFieldsField;
}
export function serializeRetentionPolicyAssignment(
  val: RetentionPolicyAssignment
): SerializedData {
  return {
    ['id']: val.id,
    ['type']: serializeRetentionPolicyAssignmentTypeField(val.type),
    ['retention_policy']:
      val.retentionPolicy == void 0
        ? void 0
        : serializeRetentionPolicyMini(val.retentionPolicy),
    ['assigned_to']:
      val.assignedTo == void 0
        ? void 0
        : serializeRetentionPolicyAssignmentAssignedToField(val.assignedTo),
    ['filter_fields']:
      val.filterFields == void 0
        ? void 0
        : (val.filterFields.map(function (
            item: RetentionPolicyAssignmentFilterFieldsField
          ): any {
            return serializeRetentionPolicyAssignmentFilterFieldsField(item);
          }) as readonly any[]),
    ['assigned_by']:
      val.assignedBy == void 0 ? void 0 : serializeUserMini(val.assignedBy),
    ['assigned_at']: val.assignedAt == void 0 ? void 0 : val.assignedAt,
    ['start_date_field']:
      val.startDateField == void 0 ? void 0 : val.startDateField,
  };
}
export function deserializeRetentionPolicyAssignment(
  val: any
): RetentionPolicyAssignment {
  const id: string = val.id;
  const type: RetentionPolicyAssignmentTypeField =
    deserializeRetentionPolicyAssignmentTypeField(val.type);
  const retentionPolicy: undefined | RetentionPolicyMini =
    val.retention_policy == void 0
      ? void 0
      : deserializeRetentionPolicyMini(val.retention_policy);
  const assignedTo: undefined | RetentionPolicyAssignmentAssignedToField =
    val.assigned_to == void 0
      ? void 0
      : deserializeRetentionPolicyAssignmentAssignedToField(val.assigned_to);
  const filterFields:
    | undefined
    | readonly RetentionPolicyAssignmentFilterFieldsField[] =
    val.filter_fields == void 0
      ? void 0
      : sdIsList(val.filter_fields)
      ? (val.filter_fields.map(function (itm: SerializedData): any {
          return deserializeRetentionPolicyAssignmentFilterFieldsField(itm);
        }) as readonly any[])
      : [];
  const assignedBy: undefined | UserMini =
    val.assigned_by == void 0 ? void 0 : deserializeUserMini(val.assigned_by);
  const assignedAt: undefined | string =
    val.assigned_at == void 0 ? void 0 : val.assigned_at;
  const startDateField: undefined | string =
    val.start_date_field == void 0 ? void 0 : val.start_date_field;
  return {
    id: id,
    type: type,
    retentionPolicy: retentionPolicy,
    assignedTo: assignedTo,
    filterFields: filterFields,
    assignedBy: assignedBy,
    assignedAt: assignedAt,
    startDateField: startDateField,
  } satisfies RetentionPolicyAssignment;
}
export function serializeRetentionPolicyAssignments(
  val: RetentionPolicyAssignments
): SerializedData {
  return {
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (item: RetentionPolicyAssignment): any {
            return serializeRetentionPolicyAssignment(item);
          }) as readonly any[]),
    ['limit']: val.limit == void 0 ? void 0 : val.limit,
    ['next_marker']: val.nextMarker == void 0 ? void 0 : val.nextMarker,
  };
}
export function deserializeRetentionPolicyAssignments(
  val: any
): RetentionPolicyAssignments {
  const entries: undefined | readonly RetentionPolicyAssignment[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (itm: SerializedData): any {
          return deserializeRetentionPolicyAssignment(itm);
        }) as readonly any[])
      : [];
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
  const nextMarker: undefined | string =
    val.next_marker == void 0 ? void 0 : val.next_marker;
  return {
    entries: entries,
    limit: limit,
    nextMarker: nextMarker,
  } satisfies RetentionPolicyAssignments;
}
export function serializeRetentionPolicyPolicyTypeField(
  val: RetentionPolicyPolicyTypeField
): SerializedData {
  return val;
}
export function deserializeRetentionPolicyPolicyTypeField(
  val: any
): RetentionPolicyPolicyTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "RetentionPolicyPolicyTypeField"';
  }
  if (val == 'finite') {
    return 'finite';
  }
  if (val == 'indefinite') {
    return 'indefinite';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeRetentionPolicyRetentionTypeField(
  val: RetentionPolicyRetentionTypeField
): SerializedData {
  return val;
}
export function deserializeRetentionPolicyRetentionTypeField(
  val: any
): RetentionPolicyRetentionTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "RetentionPolicyRetentionTypeField"';
  }
  if (val == 'modifiable') {
    return 'modifiable';
  }
  if (val == 'non_modifiable') {
    return 'non_modifiable';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeRetentionPolicyStatusField(
  val: RetentionPolicyStatusField
): SerializedData {
  return val;
}
export function deserializeRetentionPolicyStatusField(
  val: any
): RetentionPolicyStatusField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "RetentionPolicyStatusField"';
  }
  if (val == 'active') {
    return 'active';
  }
  if (val == 'retired') {
    return 'retired';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeRetentionPolicyAssignmentCountsField(
  val: RetentionPolicyAssignmentCountsField
): SerializedData {
  return {
    ['enterprise']: val.enterprise == void 0 ? void 0 : val.enterprise,
    ['folder']: val.folder == void 0 ? void 0 : val.folder,
    ['metadata_template']:
      val.metadataTemplate == void 0 ? void 0 : val.metadataTemplate,
  };
}
export function deserializeRetentionPolicyAssignmentCountsField(
  val: any
): RetentionPolicyAssignmentCountsField {
  const enterprise: undefined | number =
    val.enterprise == void 0 ? void 0 : val.enterprise;
  const folder: undefined | number = val.folder == void 0 ? void 0 : val.folder;
  const metadataTemplate: undefined | number =
    val.metadata_template == void 0 ? void 0 : val.metadata_template;
  return {
    enterprise: enterprise,
    folder: folder,
    metadataTemplate: metadataTemplate,
  } satisfies RetentionPolicyAssignmentCountsField;
}
export function serializeRetentionPolicy(val: RetentionPolicy): SerializedData {
  const base: any = serializeRetentionPolicyMini(val);
  if (!sdIsMap(base)) {
    throw 'Expecting a map for "RetentionPolicy"';
  }
  return {
    ...base,
    ...{
      ['description']: val.description == void 0 ? void 0 : val.description,
      ['policy_type']:
        val.policyType == void 0
          ? void 0
          : serializeRetentionPolicyPolicyTypeField(val.policyType),
      ['retention_type']:
        val.retentionType == void 0
          ? void 0
          : serializeRetentionPolicyRetentionTypeField(val.retentionType),
      ['status']:
        val.status == void 0
          ? void 0
          : serializeRetentionPolicyStatusField(val.status),
      ['created_by']:
        val.createdBy == void 0 ? void 0 : serializeUserMini(val.createdBy),
      ['created_at']: val.createdAt == void 0 ? void 0 : val.createdAt,
      ['modified_at']: val.modifiedAt == void 0 ? void 0 : val.modifiedAt,
      ['can_owner_extend_retention']:
        val.canOwnerExtendRetention == void 0
          ? void 0
          : val.canOwnerExtendRetention,
      ['are_owners_notified']:
        val.areOwnersNotified == void 0 ? void 0 : val.areOwnersNotified,
      ['custom_notification_recipients']:
        val.customNotificationRecipients == void 0
          ? void 0
          : (val.customNotificationRecipients.map(function (
              item: UserMini
            ): any {
              return serializeUserMini(item);
            }) as readonly any[]),
      ['assignment_counts']:
        val.assignmentCounts == void 0
          ? void 0
          : serializeRetentionPolicyAssignmentCountsField(val.assignmentCounts),
    },
  };
}
export function deserializeRetentionPolicy(val: any): RetentionPolicy {
  const description: undefined | string =
    val.description == void 0 ? void 0 : val.description;
  const policyType: undefined | RetentionPolicyPolicyTypeField =
    val.policy_type == void 0
      ? void 0
      : deserializeRetentionPolicyPolicyTypeField(val.policy_type);
  const retentionType: undefined | RetentionPolicyRetentionTypeField =
    val.retention_type == void 0
      ? void 0
      : deserializeRetentionPolicyRetentionTypeField(val.retention_type);
  const status: undefined | RetentionPolicyStatusField =
    val.status == void 0
      ? void 0
      : deserializeRetentionPolicyStatusField(val.status);
  const createdBy: undefined | UserMini =
    val.created_by == void 0 ? void 0 : deserializeUserMini(val.created_by);
  const createdAt: undefined | string =
    val.created_at == void 0 ? void 0 : val.created_at;
  const modifiedAt: undefined | string =
    val.modified_at == void 0 ? void 0 : val.modified_at;
  const canOwnerExtendRetention: undefined | boolean =
    val.can_owner_extend_retention == void 0
      ? void 0
      : val.can_owner_extend_retention;
  const areOwnersNotified: undefined | boolean =
    val.are_owners_notified == void 0 ? void 0 : val.are_owners_notified;
  const customNotificationRecipients: undefined | readonly UserMini[] =
    val.custom_notification_recipients == void 0
      ? void 0
      : sdIsList(val.custom_notification_recipients)
      ? (val.custom_notification_recipients.map(function (
          itm: SerializedData
        ): any {
          return deserializeUserMini(itm);
        }) as readonly any[])
      : [];
  const assignmentCounts: undefined | RetentionPolicyAssignmentCountsField =
    val.assignment_counts == void 0
      ? void 0
      : deserializeRetentionPolicyAssignmentCountsField(val.assignment_counts);
  const policyName: undefined | string =
    val.policy_name == void 0 ? void 0 : val.policy_name;
  const retentionLength: undefined | string =
    val.retention_length == void 0 ? void 0 : val.retention_length;
  const dispositionAction:
    | undefined
    | RetentionPolicyMiniDispositionActionField =
    val.disposition_action == void 0
      ? void 0
      : deserializeRetentionPolicyMiniDispositionActionField(
          val.disposition_action
        );
  const id: string = val.id;
  const type: RetentionPolicyBaseTypeField =
    deserializeRetentionPolicyBaseTypeField(val.type);
  return {
    description: description,
    policyType: policyType,
    retentionType: retentionType,
    status: status,
    createdBy: createdBy,
    createdAt: createdAt,
    modifiedAt: modifiedAt,
    canOwnerExtendRetention: canOwnerExtendRetention,
    areOwnersNotified: areOwnersNotified,
    customNotificationRecipients: customNotificationRecipients,
    assignmentCounts: assignmentCounts,
    policyName: policyName,
    retentionLength: retentionLength,
    dispositionAction: dispositionAction,
    id: id,
    type: type,
  } satisfies RetentionPolicy;
}
export function serializeRetentionPolicies(
  val: RetentionPolicies
): SerializedData {
  return {
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (item: RetentionPolicy): any {
            return serializeRetentionPolicy(item);
          }) as readonly any[]),
    ['limit']: val.limit == void 0 ? void 0 : val.limit,
    ['next_marker']: val.nextMarker == void 0 ? void 0 : val.nextMarker,
  };
}
export function deserializeRetentionPolicies(val: any): RetentionPolicies {
  const entries: undefined | readonly RetentionPolicy[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (itm: SerializedData): any {
          return deserializeRetentionPolicy(itm);
        }) as readonly any[])
      : [];
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
  const nextMarker: undefined | string =
    val.next_marker == void 0 ? void 0 : val.next_marker;
  return {
    entries: entries,
    limit: limit,
    nextMarker: nextMarker,
  } satisfies RetentionPolicies;
}
export function serializeLegalHoldPolicyStatusField(
  val: LegalHoldPolicyStatusField
): SerializedData {
  return val;
}
export function deserializeLegalHoldPolicyStatusField(
  val: any
): LegalHoldPolicyStatusField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "LegalHoldPolicyStatusField"';
  }
  if (val == 'active') {
    return 'active';
  }
  if (val == 'applying') {
    return 'applying';
  }
  if (val == 'releasing') {
    return 'releasing';
  }
  if (val == 'released') {
    return 'released';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeLegalHoldPolicyAssignmentCountsField(
  val: LegalHoldPolicyAssignmentCountsField
): SerializedData {
  return {
    ['user']: val.user == void 0 ? void 0 : val.user,
    ['folder']: val.folder == void 0 ? void 0 : val.folder,
    ['file']: val.file == void 0 ? void 0 : val.file,
    ['file_version']: val.fileVersion == void 0 ? void 0 : val.fileVersion,
  };
}
export function deserializeLegalHoldPolicyAssignmentCountsField(
  val: any
): LegalHoldPolicyAssignmentCountsField {
  const user: undefined | number = val.user == void 0 ? void 0 : val.user;
  const folder: undefined | number = val.folder == void 0 ? void 0 : val.folder;
  const file: undefined | number = val.file == void 0 ? void 0 : val.file;
  const fileVersion: undefined | number =
    val.file_version == void 0 ? void 0 : val.file_version;
  return {
    user: user,
    folder: folder,
    file: file,
    fileVersion: fileVersion,
  } satisfies LegalHoldPolicyAssignmentCountsField;
}
export function serializeLegalHoldPolicy(val: LegalHoldPolicy): SerializedData {
  const base: any = serializeLegalHoldPolicyMini(val);
  if (!sdIsMap(base)) {
    throw 'Expecting a map for "LegalHoldPolicy"';
  }
  return {
    ...base,
    ...{
      ['policy_name']: val.policyName == void 0 ? void 0 : val.policyName,
      ['description']: val.description == void 0 ? void 0 : val.description,
      ['status']:
        val.status == void 0
          ? void 0
          : serializeLegalHoldPolicyStatusField(val.status),
      ['assignment_counts']:
        val.assignmentCounts == void 0
          ? void 0
          : serializeLegalHoldPolicyAssignmentCountsField(val.assignmentCounts),
      ['created_by']:
        val.createdBy == void 0 ? void 0 : serializeUserMini(val.createdBy),
      ['created_at']: val.createdAt == void 0 ? void 0 : val.createdAt,
      ['modified_at']: val.modifiedAt == void 0 ? void 0 : val.modifiedAt,
      ['deleted_at']: val.deletedAt == void 0 ? void 0 : val.deletedAt,
      ['filter_started_at']:
        val.filterStartedAt == void 0 ? void 0 : val.filterStartedAt,
      ['filter_ended_at']:
        val.filterEndedAt == void 0 ? void 0 : val.filterEndedAt,
      ['release_notes']: val.releaseNotes == void 0 ? void 0 : val.releaseNotes,
    },
  };
}
export function deserializeLegalHoldPolicy(val: any): LegalHoldPolicy {
  const policyName: undefined | string =
    val.policy_name == void 0 ? void 0 : val.policy_name;
  const description: undefined | string =
    val.description == void 0 ? void 0 : val.description;
  const status: undefined | LegalHoldPolicyStatusField =
    val.status == void 0
      ? void 0
      : deserializeLegalHoldPolicyStatusField(val.status);
  const assignmentCounts: undefined | LegalHoldPolicyAssignmentCountsField =
    val.assignment_counts == void 0
      ? void 0
      : deserializeLegalHoldPolicyAssignmentCountsField(val.assignment_counts);
  const createdBy: undefined | UserMini =
    val.created_by == void 0 ? void 0 : deserializeUserMini(val.created_by);
  const createdAt: undefined | string =
    val.created_at == void 0 ? void 0 : val.created_at;
  const modifiedAt: undefined | string =
    val.modified_at == void 0 ? void 0 : val.modified_at;
  const deletedAt: undefined | string =
    val.deleted_at == void 0 ? void 0 : val.deleted_at;
  const filterStartedAt: undefined | string =
    val.filter_started_at == void 0 ? void 0 : val.filter_started_at;
  const filterEndedAt: undefined | string =
    val.filter_ended_at == void 0 ? void 0 : val.filter_ended_at;
  const releaseNotes: undefined | string =
    val.release_notes == void 0 ? void 0 : val.release_notes;
  const id: string = val.id;
  const type: LegalHoldPolicyMiniTypeField =
    deserializeLegalHoldPolicyMiniTypeField(val.type);
  return {
    policyName: policyName,
    description: description,
    status: status,
    assignmentCounts: assignmentCounts,
    createdBy: createdBy,
    createdAt: createdAt,
    modifiedAt: modifiedAt,
    deletedAt: deletedAt,
    filterStartedAt: filterStartedAt,
    filterEndedAt: filterEndedAt,
    releaseNotes: releaseNotes,
    id: id,
    type: type,
  } satisfies LegalHoldPolicy;
}
export function serializeLegalHoldPolicies(
  val: LegalHoldPolicies
): SerializedData {
  return {
    ['limit']: val.limit == void 0 ? void 0 : val.limit,
    ['next_marker']: val.nextMarker == void 0 ? void 0 : val.nextMarker,
    ['prev_marker']: val.prevMarker == void 0 ? void 0 : val.prevMarker,
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (item: LegalHoldPolicy): any {
            return serializeLegalHoldPolicy(item);
          }) as readonly any[]),
  };
}
export function deserializeLegalHoldPolicies(val: any): LegalHoldPolicies {
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
  const nextMarker: undefined | string =
    val.next_marker == void 0 ? void 0 : val.next_marker;
  const prevMarker: undefined | string =
    val.prev_marker == void 0 ? void 0 : val.prev_marker;
  const entries: undefined | readonly LegalHoldPolicy[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (itm: SerializedData): any {
          return deserializeLegalHoldPolicy(itm);
        }) as readonly any[])
      : [];
  return {
    limit: limit,
    nextMarker: nextMarker,
    prevMarker: prevMarker,
    entries: entries,
  } satisfies LegalHoldPolicies;
}
export function serializeInviteTypeField(val: InviteTypeField): SerializedData {
  return val;
}
export function deserializeInviteTypeField(val: any): InviteTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "InviteTypeField"';
  }
  if (val == 'invite') {
    return 'invite';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeInviteInvitedToTypeField(
  val: InviteInvitedToTypeField
): SerializedData {
  return val;
}
export function deserializeInviteInvitedToTypeField(
  val: any
): InviteInvitedToTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "InviteInvitedToTypeField"';
  }
  if (val == 'enterprise') {
    return 'enterprise';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeInviteInvitedToField(
  val: InviteInvitedToField
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0 ? void 0 : serializeInviteInvitedToTypeField(val.type),
    ['name']: val.name == void 0 ? void 0 : val.name,
  };
}
export function deserializeInviteInvitedToField(
  val: any
): InviteInvitedToField {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | InviteInvitedToTypeField =
    val.type == void 0 ? void 0 : deserializeInviteInvitedToTypeField(val.type);
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  return { id: id, type: type, name: name } satisfies InviteInvitedToField;
}
export function serializeInvite(val: Invite): SerializedData {
  return {
    ['id']: val.id,
    ['type']: serializeInviteTypeField(val.type),
    ['invited_to']:
      val.invitedTo == void 0
        ? void 0
        : serializeInviteInvitedToField(val.invitedTo),
    ['actionable_by']:
      val.actionableBy == void 0 ? void 0 : serializeUserMini(val.actionableBy),
    ['invited_by']:
      val.invitedBy == void 0 ? void 0 : serializeUserMini(val.invitedBy),
    ['status']: val.status == void 0 ? void 0 : val.status,
    ['created_at']: val.createdAt == void 0 ? void 0 : val.createdAt,
    ['modified_at']: val.modifiedAt == void 0 ? void 0 : val.modifiedAt,
  };
}
export function deserializeInvite(val: any): Invite {
  const id: string = val.id;
  const type: InviteTypeField = deserializeInviteTypeField(val.type);
  const invitedTo: undefined | InviteInvitedToField =
    val.invited_to == void 0
      ? void 0
      : deserializeInviteInvitedToField(val.invited_to);
  const actionableBy: undefined | UserMini =
    val.actionable_by == void 0
      ? void 0
      : deserializeUserMini(val.actionable_by);
  const invitedBy: undefined | UserMini =
    val.invited_by == void 0 ? void 0 : deserializeUserMini(val.invited_by);
  const status: undefined | string = val.status == void 0 ? void 0 : val.status;
  const createdAt: undefined | string =
    val.created_at == void 0 ? void 0 : val.created_at;
  const modifiedAt: undefined | string =
    val.modified_at == void 0 ? void 0 : val.modified_at;
  return {
    id: id,
    type: type,
    invitedTo: invitedTo,
    actionableBy: actionableBy,
    invitedBy: invitedBy,
    status: status,
    createdAt: createdAt,
    modifiedAt: modifiedAt,
  } satisfies Invite;
}
export function serializeGroupMembershipTypeField(
  val: GroupMembershipTypeField
): SerializedData {
  return val;
}
export function deserializeGroupMembershipTypeField(
  val: any
): GroupMembershipTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "GroupMembershipTypeField"';
  }
  if (val == 'group_membership') {
    return 'group_membership';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeGroupMembershipRoleField(
  val: GroupMembershipRoleField
): SerializedData {
  return val;
}
export function deserializeGroupMembershipRoleField(
  val: any
): GroupMembershipRoleField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "GroupMembershipRoleField"';
  }
  if (val == 'member') {
    return 'member';
  }
  if (val == 'admin') {
    return 'admin';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeGroupMembership(val: GroupMembership): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0 ? void 0 : serializeGroupMembershipTypeField(val.type),
    ['user']: val.user == void 0 ? void 0 : serializeUserMini(val.user),
    ['group']: val.group == void 0 ? void 0 : serializeGroupMini(val.group),
    ['role']:
      val.role == void 0 ? void 0 : serializeGroupMembershipRoleField(val.role),
    ['created_at']: val.createdAt == void 0 ? void 0 : val.createdAt,
    ['modified_at']: val.modifiedAt == void 0 ? void 0 : val.modifiedAt,
  };
}
export function deserializeGroupMembership(val: any): GroupMembership {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | GroupMembershipTypeField =
    val.type == void 0 ? void 0 : deserializeGroupMembershipTypeField(val.type);
  const user: undefined | UserMini =
    val.user == void 0 ? void 0 : deserializeUserMini(val.user);
  const group: undefined | GroupMini =
    val.group == void 0 ? void 0 : deserializeGroupMini(val.group);
  const role: undefined | GroupMembershipRoleField =
    val.role == void 0 ? void 0 : deserializeGroupMembershipRoleField(val.role);
  const createdAt: undefined | string =
    val.created_at == void 0 ? void 0 : val.created_at;
  const modifiedAt: undefined | string =
    val.modified_at == void 0 ? void 0 : val.modified_at;
  return {
    id: id,
    type: type,
    user: user,
    group: group,
    role: role,
    createdAt: createdAt,
    modifiedAt: modifiedAt,
  } satisfies GroupMembership;
}
export function serializeGroupMembershipsOrderDirectionField(
  val: GroupMembershipsOrderDirectionField
): SerializedData {
  return val;
}
export function deserializeGroupMembershipsOrderDirectionField(
  val: any
): GroupMembershipsOrderDirectionField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "GroupMembershipsOrderDirectionField"';
  }
  if (val == 'ASC') {
    return 'ASC';
  }
  if (val == 'DESC') {
    return 'DESC';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeGroupMembershipsOrderField(
  val: GroupMembershipsOrderField
): SerializedData {
  return {
    ['by']: val.by == void 0 ? void 0 : val.by,
    ['direction']:
      val.direction == void 0
        ? void 0
        : serializeGroupMembershipsOrderDirectionField(val.direction),
  };
}
export function deserializeGroupMembershipsOrderField(
  val: any
): GroupMembershipsOrderField {
  const by: undefined | string = val.by == void 0 ? void 0 : val.by;
  const direction: undefined | GroupMembershipsOrderDirectionField =
    val.direction == void 0
      ? void 0
      : deserializeGroupMembershipsOrderDirectionField(val.direction);
  return { by: by, direction: direction } satisfies GroupMembershipsOrderField;
}
export function serializeGroupMemberships(
  val: GroupMemberships
): SerializedData {
  return {
    ['total_count']: val.totalCount == void 0 ? void 0 : val.totalCount,
    ['limit']: val.limit == void 0 ? void 0 : val.limit,
    ['offset']: val.offset == void 0 ? void 0 : val.offset,
    ['order']:
      val.order == void 0
        ? void 0
        : (val.order.map(function (item: GroupMembershipsOrderField): any {
            return serializeGroupMembershipsOrderField(item);
          }) as readonly any[]),
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (item: GroupMembership): any {
            return serializeGroupMembership(item);
          }) as readonly any[]),
  };
}
export function deserializeGroupMemberships(val: any): GroupMemberships {
  const totalCount: undefined | number =
    val.total_count == void 0 ? void 0 : val.total_count;
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
  const offset: undefined | number = val.offset == void 0 ? void 0 : val.offset;
  const order: undefined | readonly GroupMembershipsOrderField[] =
    val.order == void 0
      ? void 0
      : sdIsList(val.order)
      ? (val.order.map(function (itm: SerializedData): any {
          return deserializeGroupMembershipsOrderField(itm);
        }) as readonly any[])
      : [];
  const entries: undefined | readonly GroupMembership[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (itm: SerializedData): any {
          return deserializeGroupMembership(itm);
        }) as readonly any[])
      : [];
  return {
    totalCount: totalCount,
    limit: limit,
    offset: offset,
    order: order,
    entries: entries,
  } satisfies GroupMemberships;
}
export function serializeFileVersion(val: FileVersion): SerializedData {
  const base: any = serializeFileVersionMini(val);
  if (!sdIsMap(base)) {
    throw 'Expecting a map for "FileVersion"';
  }
  return {
    ...base,
    ...{
      ['name']: val.name == void 0 ? void 0 : val.name,
      ['size']: val.size == void 0 ? void 0 : val.size,
      ['created_at']: val.createdAt == void 0 ? void 0 : val.createdAt,
      ['modified_at']: val.modifiedAt == void 0 ? void 0 : val.modifiedAt,
      ['modified_by']:
        val.modifiedBy == void 0 ? void 0 : serializeUserMini(val.modifiedBy),
      ['trashed_at']: val.trashedAt == void 0 ? void 0 : val.trashedAt,
      ['trashed_by']:
        val.trashedBy == void 0 ? void 0 : serializeUserMini(val.trashedBy),
      ['restored_at']: val.restoredAt == void 0 ? void 0 : val.restoredAt,
      ['restored_by']:
        val.restoredBy == void 0 ? void 0 : serializeUserMini(val.restoredBy),
      ['purged_at']: val.purgedAt == void 0 ? void 0 : val.purgedAt,
      ['uploader_display_name']:
        val.uploaderDisplayName == void 0 ? void 0 : val.uploaderDisplayName,
    },
  };
}
export function deserializeFileVersion(val: any): FileVersion {
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const size: undefined | number = val.size == void 0 ? void 0 : val.size;
  const createdAt: undefined | string =
    val.created_at == void 0 ? void 0 : val.created_at;
  const modifiedAt: undefined | string =
    val.modified_at == void 0 ? void 0 : val.modified_at;
  const modifiedBy: undefined | UserMini =
    val.modified_by == void 0 ? void 0 : deserializeUserMini(val.modified_by);
  const trashedAt: undefined | string =
    val.trashed_at == void 0 ? void 0 : val.trashed_at;
  const trashedBy: undefined | UserMini =
    val.trashed_by == void 0 ? void 0 : deserializeUserMini(val.trashed_by);
  const restoredAt: undefined | string =
    val.restored_at == void 0 ? void 0 : val.restored_at;
  const restoredBy: undefined | UserMini =
    val.restored_by == void 0 ? void 0 : deserializeUserMini(val.restored_by);
  const purgedAt: undefined | string =
    val.purged_at == void 0 ? void 0 : val.purged_at;
  const uploaderDisplayName: undefined | string =
    val.uploader_display_name == void 0 ? void 0 : val.uploader_display_name;
  const sha1: undefined | string = val.sha1 == void 0 ? void 0 : val.sha1;
  const id: string = val.id;
  const type: FileVersionBaseTypeField = deserializeFileVersionBaseTypeField(
    val.type
  );
  return {
    name: name,
    size: size,
    createdAt: createdAt,
    modifiedAt: modifiedAt,
    modifiedBy: modifiedBy,
    trashedAt: trashedAt,
    trashedBy: trashedBy,
    restoredAt: restoredAt,
    restoredBy: restoredBy,
    purgedAt: purgedAt,
    uploaderDisplayName: uploaderDisplayName,
    sha1: sha1,
    id: id,
    type: type,
  } satisfies FileVersion;
}
export function serializeFileVersionFull(val: FileVersionFull): SerializedData {
  const base: any = serializeFileVersion(val);
  if (!sdIsMap(base)) {
    throw 'Expecting a map for "FileVersionFull"';
  }
  return {
    ...base,
    ...{
      ['version_number']:
        val.versionNumber == void 0 ? void 0 : val.versionNumber,
    },
  };
}
export function deserializeFileVersionFull(val: any): FileVersionFull {
  const versionNumber: undefined | string =
    val.version_number == void 0 ? void 0 : val.version_number;
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const size: undefined | number = val.size == void 0 ? void 0 : val.size;
  const createdAt: undefined | string =
    val.created_at == void 0 ? void 0 : val.created_at;
  const modifiedAt: undefined | string =
    val.modified_at == void 0 ? void 0 : val.modified_at;
  const modifiedBy: undefined | UserMini =
    val.modified_by == void 0 ? void 0 : deserializeUserMini(val.modified_by);
  const trashedAt: undefined | string =
    val.trashed_at == void 0 ? void 0 : val.trashed_at;
  const trashedBy: undefined | UserMini =
    val.trashed_by == void 0 ? void 0 : deserializeUserMini(val.trashed_by);
  const restoredAt: undefined | string =
    val.restored_at == void 0 ? void 0 : val.restored_at;
  const restoredBy: undefined | UserMini =
    val.restored_by == void 0 ? void 0 : deserializeUserMini(val.restored_by);
  const purgedAt: undefined | string =
    val.purged_at == void 0 ? void 0 : val.purged_at;
  const uploaderDisplayName: undefined | string =
    val.uploader_display_name == void 0 ? void 0 : val.uploader_display_name;
  const sha1: undefined | string = val.sha1 == void 0 ? void 0 : val.sha1;
  const id: string = val.id;
  const type: FileVersionBaseTypeField = deserializeFileVersionBaseTypeField(
    val.type
  );
  return {
    versionNumber: versionNumber,
    name: name,
    size: size,
    createdAt: createdAt,
    modifiedAt: modifiedAt,
    modifiedBy: modifiedBy,
    trashedAt: trashedAt,
    trashedBy: trashedBy,
    restoredAt: restoredAt,
    restoredBy: restoredBy,
    purgedAt: purgedAt,
    uploaderDisplayName: uploaderDisplayName,
    sha1: sha1,
    id: id,
    type: type,
  } satisfies FileVersionFull;
}
export function serializeFileVersionsOrderDirectionField(
  val: FileVersionsOrderDirectionField
): SerializedData {
  return val;
}
export function deserializeFileVersionsOrderDirectionField(
  val: any
): FileVersionsOrderDirectionField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "FileVersionsOrderDirectionField"';
  }
  if (val == 'ASC') {
    return 'ASC';
  }
  if (val == 'DESC') {
    return 'DESC';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeFileVersionsOrderField(
  val: FileVersionsOrderField
): SerializedData {
  return {
    ['by']: val.by == void 0 ? void 0 : val.by,
    ['direction']:
      val.direction == void 0
        ? void 0
        : serializeFileVersionsOrderDirectionField(val.direction),
  };
}
export function deserializeFileVersionsOrderField(
  val: any
): FileVersionsOrderField {
  const by: undefined | string = val.by == void 0 ? void 0 : val.by;
  const direction: undefined | FileVersionsOrderDirectionField =
    val.direction == void 0
      ? void 0
      : deserializeFileVersionsOrderDirectionField(val.direction);
  return { by: by, direction: direction } satisfies FileVersionsOrderField;
}
export function serializeFileVersions(val: FileVersions): SerializedData {
  return {
    ['total_count']: val.totalCount == void 0 ? void 0 : val.totalCount,
    ['limit']: val.limit == void 0 ? void 0 : val.limit,
    ['offset']: val.offset == void 0 ? void 0 : val.offset,
    ['order']:
      val.order == void 0
        ? void 0
        : (val.order.map(function (item: FileVersionsOrderField): any {
            return serializeFileVersionsOrderField(item);
          }) as readonly any[]),
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (item: FileVersionFull): any {
            return serializeFileVersionFull(item);
          }) as readonly any[]),
  };
}
export function deserializeFileVersions(val: any): FileVersions {
  const totalCount: undefined | number =
    val.total_count == void 0 ? void 0 : val.total_count;
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
  const offset: undefined | number = val.offset == void 0 ? void 0 : val.offset;
  const order: undefined | readonly FileVersionsOrderField[] =
    val.order == void 0
      ? void 0
      : sdIsList(val.order)
      ? (val.order.map(function (itm: SerializedData): any {
          return deserializeFileVersionsOrderField(itm);
        }) as readonly any[])
      : [];
  const entries: undefined | readonly FileVersionFull[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (itm: SerializedData): any {
          return deserializeFileVersionFull(itm);
        }) as readonly any[])
      : [];
  return {
    totalCount: totalCount,
    limit: limit,
    offset: offset,
    order: order,
    entries: entries,
  } satisfies FileVersions;
}
export function serializeFileRequestTypeField(
  val: FileRequestTypeField
): SerializedData {
  return val;
}
export function deserializeFileRequestTypeField(
  val: any
): FileRequestTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "FileRequestTypeField"';
  }
  if (val == 'file_request') {
    return 'file_request';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeFileRequestStatusField(
  val: FileRequestStatusField
): SerializedData {
  return val;
}
export function deserializeFileRequestStatusField(
  val: any
): FileRequestStatusField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "FileRequestStatusField"';
  }
  if (val == 'active') {
    return 'active';
  }
  if (val == 'inactive') {
    return 'inactive';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeFileRequest(val: FileRequest): SerializedData {
  return {
    ['id']: val.id,
    ['type']: serializeFileRequestTypeField(val.type),
    ['title']: val.title == void 0 ? void 0 : val.title,
    ['description']: val.description == void 0 ? void 0 : val.description,
    ['status']:
      val.status == void 0
        ? void 0
        : serializeFileRequestStatusField(val.status),
    ['is_email_required']:
      val.isEmailRequired == void 0 ? void 0 : val.isEmailRequired,
    ['is_description_required']:
      val.isDescriptionRequired == void 0 ? void 0 : val.isDescriptionRequired,
    ['expires_at']: val.expiresAt == void 0 ? void 0 : val.expiresAt,
    ['folder']: serializeFolderMini(val.folder),
    ['url']: val.url == void 0 ? void 0 : val.url,
    ['etag']: val.etag == void 0 ? void 0 : val.etag,
    ['created_by']:
      val.createdBy == void 0 ? void 0 : serializeUserMini(val.createdBy),
    ['created_at']: val.createdAt,
    ['updated_by']:
      val.updatedBy == void 0 ? void 0 : serializeUserMini(val.updatedBy),
    ['updated_at']: val.updatedAt,
  };
}
export function deserializeFileRequest(val: any): FileRequest {
  const id: string = val.id;
  const type: FileRequestTypeField = deserializeFileRequestTypeField(val.type);
  const title: undefined | string = val.title == void 0 ? void 0 : val.title;
  const description: undefined | string =
    val.description == void 0 ? void 0 : val.description;
  const status: undefined | FileRequestStatusField =
    val.status == void 0
      ? void 0
      : deserializeFileRequestStatusField(val.status);
  const isEmailRequired: undefined | boolean =
    val.is_email_required == void 0 ? void 0 : val.is_email_required;
  const isDescriptionRequired: undefined | boolean =
    val.is_description_required == void 0
      ? void 0
      : val.is_description_required;
  const expiresAt: undefined | string =
    val.expires_at == void 0 ? void 0 : val.expires_at;
  const folder: FolderMini = deserializeFolderMini(val.folder);
  const url: undefined | string = val.url == void 0 ? void 0 : val.url;
  const etag: undefined | string = val.etag == void 0 ? void 0 : val.etag;
  const createdBy: undefined | UserMini =
    val.created_by == void 0 ? void 0 : deserializeUserMini(val.created_by);
  const createdAt: string = val.created_at;
  const updatedBy: undefined | UserMini =
    val.updated_by == void 0 ? void 0 : deserializeUserMini(val.updated_by);
  const updatedAt: string = val.updated_at;
  return {
    id: id,
    type: type,
    title: title,
    description: description,
    status: status,
    isEmailRequired: isEmailRequired,
    isDescriptionRequired: isDescriptionRequired,
    expiresAt: expiresAt,
    folder: folder,
    url: url,
    etag: etag,
    createdBy: createdBy,
    createdAt: createdAt,
    updatedBy: updatedBy,
    updatedAt: updatedAt,
  } satisfies FileRequest;
}
export function serializeFilePathCollectionField(
  val: FilePathCollectionField
): SerializedData {
  return {
    ['total_count']: val.totalCount,
    ['entries']: val.entries.map(function (item: FolderMini): any {
      return serializeFolderMini(item);
    }) as readonly any[],
  };
}
export function deserializeFilePathCollectionField(
  val: any
): FilePathCollectionField {
  const totalCount: number = val.total_count;
  const entries: readonly FolderMini[] = sdIsList(val.entries)
    ? (val.entries.map(function (itm: SerializedData): any {
        return deserializeFolderMini(itm);
      }) as readonly any[])
    : [];
  return {
    totalCount: totalCount,
    entries: entries,
  } satisfies FilePathCollectionField;
}
export function serializeFileSharedLinkAccessField(
  val: FileSharedLinkAccessField
): SerializedData {
  return val;
}
export function deserializeFileSharedLinkAccessField(
  val: any
): FileSharedLinkAccessField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "FileSharedLinkAccessField"';
  }
  if (val == 'open') {
    return 'open';
  }
  if (val == 'company') {
    return 'company';
  }
  if (val == 'collaborators') {
    return 'collaborators';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeFileSharedLinkEffectiveAccessField(
  val: FileSharedLinkEffectiveAccessField
): SerializedData {
  return val;
}
export function deserializeFileSharedLinkEffectiveAccessField(
  val: any
): FileSharedLinkEffectiveAccessField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "FileSharedLinkEffectiveAccessField"';
  }
  if (val == 'open') {
    return 'open';
  }
  if (val == 'company') {
    return 'company';
  }
  if (val == 'collaborators') {
    return 'collaborators';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeFileSharedLinkEffectivePermissionField(
  val: FileSharedLinkEffectivePermissionField
): SerializedData {
  return val;
}
export function deserializeFileSharedLinkEffectivePermissionField(
  val: any
): FileSharedLinkEffectivePermissionField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "FileSharedLinkEffectivePermissionField"';
  }
  if (val == 'can_edit') {
    return 'can_edit';
  }
  if (val == 'can_download') {
    return 'can_download';
  }
  if (val == 'can_preview') {
    return 'can_preview';
  }
  if (val == 'no_access') {
    return 'no_access';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeFileSharedLinkPermissionsField(
  val: FileSharedLinkPermissionsField
): SerializedData {
  return {
    ['can_download']: val.canDownload,
    ['can_preview']: val.canPreview,
    ['can_edit']: val.canEdit,
  };
}
export function deserializeFileSharedLinkPermissionsField(
  val: any
): FileSharedLinkPermissionsField {
  const canDownload: boolean = val.can_download;
  const canPreview: boolean = val.can_preview;
  const canEdit: boolean = val.can_edit;
  return {
    canDownload: canDownload,
    canPreview: canPreview,
    canEdit: canEdit,
  } satisfies FileSharedLinkPermissionsField;
}
export function serializeFileSharedLinkField(
  val: FileSharedLinkField
): SerializedData {
  return {
    ['url']: val.url,
    ['download_url']: val.downloadUrl == void 0 ? void 0 : val.downloadUrl,
    ['vanity_url']: val.vanityUrl == void 0 ? void 0 : val.vanityUrl,
    ['vanity_name']: val.vanityName == void 0 ? void 0 : val.vanityName,
    ['access']:
      val.access == void 0
        ? void 0
        : serializeFileSharedLinkAccessField(val.access),
    ['effective_access']: serializeFileSharedLinkEffectiveAccessField(
      val.effectiveAccess
    ),
    ['effective_permission']: serializeFileSharedLinkEffectivePermissionField(
      val.effectivePermission
    ),
    ['unshared_at']: val.unsharedAt == void 0 ? void 0 : val.unsharedAt,
    ['is_password_enabled']: val.isPasswordEnabled,
    ['permissions']:
      val.permissions == void 0
        ? void 0
        : serializeFileSharedLinkPermissionsField(val.permissions),
    ['download_count']: val.downloadCount,
    ['preview_count']: val.previewCount,
  };
}
export function deserializeFileSharedLinkField(val: any): FileSharedLinkField {
  const url: string = val.url;
  const downloadUrl: undefined | string =
    val.download_url == void 0 ? void 0 : val.download_url;
  const vanityUrl: undefined | string =
    val.vanity_url == void 0 ? void 0 : val.vanity_url;
  const vanityName: undefined | string =
    val.vanity_name == void 0 ? void 0 : val.vanity_name;
  const access: undefined | FileSharedLinkAccessField =
    val.access == void 0
      ? void 0
      : deserializeFileSharedLinkAccessField(val.access);
  const effectiveAccess: FileSharedLinkEffectiveAccessField =
    deserializeFileSharedLinkEffectiveAccessField(val.effective_access);
  const effectivePermission: FileSharedLinkEffectivePermissionField =
    deserializeFileSharedLinkEffectivePermissionField(val.effective_permission);
  const unsharedAt: undefined | string =
    val.unshared_at == void 0 ? void 0 : val.unshared_at;
  const isPasswordEnabled: boolean = val.is_password_enabled;
  const permissions: undefined | FileSharedLinkPermissionsField =
    val.permissions == void 0
      ? void 0
      : deserializeFileSharedLinkPermissionsField(val.permissions);
  const downloadCount: number = val.download_count;
  const previewCount: number = val.preview_count;
  return {
    url: url,
    downloadUrl: downloadUrl,
    vanityUrl: vanityUrl,
    vanityName: vanityName,
    access: access,
    effectiveAccess: effectiveAccess,
    effectivePermission: effectivePermission,
    unsharedAt: unsharedAt,
    isPasswordEnabled: isPasswordEnabled,
    permissions: permissions,
    downloadCount: downloadCount,
    previewCount: previewCount,
  } satisfies FileSharedLinkField;
}
export function serializeFileItemStatusField(
  val: FileItemStatusField
): SerializedData {
  return val;
}
export function deserializeFileItemStatusField(val: any): FileItemStatusField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "FileItemStatusField"';
  }
  if (val == 'active') {
    return 'active';
  }
  if (val == 'trashed') {
    return 'trashed';
  }
  if (val == 'deleted') {
    return 'deleted';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeFile(val: File): SerializedData {
  const base: any = serializeFileMini(val);
  if (!sdIsMap(base)) {
    throw 'Expecting a map for "File"';
  }
  return {
    ...base,
    ...{
      ['description']: val.description == void 0 ? void 0 : val.description,
      ['size']: val.size == void 0 ? void 0 : val.size,
      ['path_collection']:
        val.pathCollection == void 0
          ? void 0
          : serializeFilePathCollectionField(val.pathCollection),
      ['created_at']: val.createdAt == void 0 ? void 0 : val.createdAt,
      ['modified_at']: val.modifiedAt == void 0 ? void 0 : val.modifiedAt,
      ['trashed_at']: val.trashedAt == void 0 ? void 0 : val.trashedAt,
      ['purged_at']: val.purgedAt == void 0 ? void 0 : val.purgedAt,
      ['content_created_at']:
        val.contentCreatedAt == void 0 ? void 0 : val.contentCreatedAt,
      ['content_modified_at']:
        val.contentModifiedAt == void 0 ? void 0 : val.contentModifiedAt,
      ['created_by']:
        val.createdBy == void 0 ? void 0 : serializeUserMini(val.createdBy),
      ['modified_by']:
        val.modifiedBy == void 0 ? void 0 : serializeUserMini(val.modifiedBy),
      ['owned_by']:
        val.ownedBy == void 0 ? void 0 : serializeUserMini(val.ownedBy),
      ['shared_link']:
        val.sharedLink == void 0
          ? void 0
          : serializeFileSharedLinkField(val.sharedLink),
      ['parent']:
        val.parent == void 0 ? void 0 : serializeFolderMini(val.parent),
      ['item_status']:
        val.itemStatus == void 0
          ? void 0
          : serializeFileItemStatusField(val.itemStatus),
    },
  };
}
export function deserializeFile(val: any): File {
  const description: undefined | string =
    val.description == void 0 ? void 0 : val.description;
  const size: undefined | number = val.size == void 0 ? void 0 : val.size;
  const pathCollection: undefined | FilePathCollectionField =
    val.path_collection == void 0
      ? void 0
      : deserializeFilePathCollectionField(val.path_collection);
  const createdAt: undefined | string =
    val.created_at == void 0 ? void 0 : val.created_at;
  const modifiedAt: undefined | string =
    val.modified_at == void 0 ? void 0 : val.modified_at;
  const trashedAt: undefined | string =
    val.trashed_at == void 0 ? void 0 : val.trashed_at;
  const purgedAt: undefined | string =
    val.purged_at == void 0 ? void 0 : val.purged_at;
  const contentCreatedAt: undefined | string =
    val.content_created_at == void 0 ? void 0 : val.content_created_at;
  const contentModifiedAt: undefined | string =
    val.content_modified_at == void 0 ? void 0 : val.content_modified_at;
  const createdBy: undefined | UserMini =
    val.created_by == void 0 ? void 0 : deserializeUserMini(val.created_by);
  const modifiedBy: undefined | UserMini =
    val.modified_by == void 0 ? void 0 : deserializeUserMini(val.modified_by);
  const ownedBy: undefined | UserMini =
    val.owned_by == void 0 ? void 0 : deserializeUserMini(val.owned_by);
  const sharedLink: undefined | FileSharedLinkField =
    val.shared_link == void 0
      ? void 0
      : deserializeFileSharedLinkField(val.shared_link);
  const parent: undefined | FolderMini =
    val.parent == void 0 ? void 0 : deserializeFolderMini(val.parent);
  const itemStatus: undefined | FileItemStatusField =
    val.item_status == void 0
      ? void 0
      : deserializeFileItemStatusField(val.item_status);
  const sequenceId: undefined | string =
    val.sequence_id == void 0 ? void 0 : val.sequence_id;
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const sha1: undefined | string = val.sha1 == void 0 ? void 0 : val.sha1;
  const fileVersion: undefined | FileVersionMini =
    val.file_version == void 0
      ? void 0
      : deserializeFileVersionMini(val.file_version);
  const id: string = val.id;
  const etag: undefined | string = val.etag == void 0 ? void 0 : val.etag;
  const type: FileBaseTypeField = deserializeFileBaseTypeField(val.type);
  return {
    description: description,
    size: size,
    pathCollection: pathCollection,
    createdAt: createdAt,
    modifiedAt: modifiedAt,
    trashedAt: trashedAt,
    purgedAt: purgedAt,
    contentCreatedAt: contentCreatedAt,
    contentModifiedAt: contentModifiedAt,
    createdBy: createdBy,
    modifiedBy: modifiedBy,
    ownedBy: ownedBy,
    sharedLink: sharedLink,
    parent: parent,
    itemStatus: itemStatus,
    sequenceId: sequenceId,
    name: name,
    sha1: sha1,
    fileVersion: fileVersion,
    id: id,
    etag: etag,
    type: type,
  } satisfies File;
}
export function serializeFileFullPermissionsField(
  val: FileFullPermissionsField
): SerializedData {
  return {
    ['can_delete']: val.canDelete,
    ['can_download']: val.canDownload,
    ['can_invite_collaborator']: val.canInviteCollaborator,
    ['can_rename']: val.canRename,
    ['can_set_share_access']: val.canSetShareAccess,
    ['can_share']: val.canShare,
    ['can_annotate']: val.canAnnotate == void 0 ? void 0 : val.canAnnotate,
    ['can_comment']: val.canComment == void 0 ? void 0 : val.canComment,
    ['can_preview']: val.canPreview == void 0 ? void 0 : val.canPreview,
    ['can_upload']: val.canUpload == void 0 ? void 0 : val.canUpload,
    ['can_view_annotations_all']:
      val.canViewAnnotationsAll == void 0 ? void 0 : val.canViewAnnotationsAll,
    ['can_view_annotations_self']:
      val.canViewAnnotationsSelf == void 0
        ? void 0
        : val.canViewAnnotationsSelf,
  };
}
export function deserializeFileFullPermissionsField(
  val: any
): FileFullPermissionsField {
  const canDelete: boolean = val.can_delete;
  const canDownload: boolean = val.can_download;
  const canInviteCollaborator: boolean = val.can_invite_collaborator;
  const canRename: boolean = val.can_rename;
  const canSetShareAccess: boolean = val.can_set_share_access;
  const canShare: boolean = val.can_share;
  const canAnnotate: undefined | boolean =
    val.can_annotate == void 0 ? void 0 : val.can_annotate;
  const canComment: undefined | boolean =
    val.can_comment == void 0 ? void 0 : val.can_comment;
  const canPreview: undefined | boolean =
    val.can_preview == void 0 ? void 0 : val.can_preview;
  const canUpload: undefined | boolean =
    val.can_upload == void 0 ? void 0 : val.can_upload;
  const canViewAnnotationsAll: undefined | boolean =
    val.can_view_annotations_all == void 0
      ? void 0
      : val.can_view_annotations_all;
  const canViewAnnotationsSelf: undefined | boolean =
    val.can_view_annotations_self == void 0
      ? void 0
      : val.can_view_annotations_self;
  return {
    canDelete: canDelete,
    canDownload: canDownload,
    canInviteCollaborator: canInviteCollaborator,
    canRename: canRename,
    canSetShareAccess: canSetShareAccess,
    canShare: canShare,
    canAnnotate: canAnnotate,
    canComment: canComment,
    canPreview: canPreview,
    canUpload: canUpload,
    canViewAnnotationsAll: canViewAnnotationsAll,
    canViewAnnotationsSelf: canViewAnnotationsSelf,
  } satisfies FileFullPermissionsField;
}
export function serializeFileFullLockTypeField(
  val: FileFullLockTypeField
): SerializedData {
  return val;
}
export function deserializeFileFullLockTypeField(
  val: any
): FileFullLockTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "FileFullLockTypeField"';
  }
  if (val == 'lock') {
    return 'lock';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeFileFullLockAppTypeField(
  val: FileFullLockAppTypeField
): SerializedData {
  return val;
}
export function deserializeFileFullLockAppTypeField(
  val: any
): FileFullLockAppTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "FileFullLockAppTypeField"';
  }
  if (val == 'gsuite') {
    return 'gsuite';
  }
  if (val == 'office_wopi') {
    return 'office_wopi';
  }
  if (val == 'office_wopiplus') {
    return 'office_wopiplus';
  }
  if (val == 'other') {
    return 'other';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeFileFullLockField(
  val: FileFullLockField
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0 ? void 0 : serializeFileFullLockTypeField(val.type),
    ['created_by']:
      val.createdBy == void 0 ? void 0 : serializeUserMini(val.createdBy),
    ['created_at']: val.createdAt == void 0 ? void 0 : val.createdAt,
    ['expired_at']: val.expiredAt == void 0 ? void 0 : val.expiredAt,
    ['is_download_prevented']:
      val.isDownloadPrevented == void 0 ? void 0 : val.isDownloadPrevented,
    ['app_type']:
      val.appType == void 0
        ? void 0
        : serializeFileFullLockAppTypeField(val.appType),
  };
}
export function deserializeFileFullLockField(val: any): FileFullLockField {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | FileFullLockTypeField =
    val.type == void 0 ? void 0 : deserializeFileFullLockTypeField(val.type);
  const createdBy: undefined | UserMini =
    val.created_by == void 0 ? void 0 : deserializeUserMini(val.created_by);
  const createdAt: undefined | string =
    val.created_at == void 0 ? void 0 : val.created_at;
  const expiredAt: undefined | string =
    val.expired_at == void 0 ? void 0 : val.expired_at;
  const isDownloadPrevented: undefined | boolean =
    val.is_download_prevented == void 0 ? void 0 : val.is_download_prevented;
  const appType: undefined | FileFullLockAppTypeField =
    val.app_type == void 0
      ? void 0
      : deserializeFileFullLockAppTypeField(val.app_type);
  return {
    id: id,
    type: type,
    createdBy: createdBy,
    createdAt: createdAt,
    expiredAt: expiredAt,
    isDownloadPrevented: isDownloadPrevented,
    appType: appType,
  } satisfies FileFullLockField;
}
export function serializeFileFullExpiringEmbedLinkTokenTypeField(
  val: FileFullExpiringEmbedLinkTokenTypeField
): SerializedData {
  return val;
}
export function deserializeFileFullExpiringEmbedLinkTokenTypeField(
  val: any
): FileFullExpiringEmbedLinkTokenTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "FileFullExpiringEmbedLinkTokenTypeField"';
  }
  if (val == 'bearer') {
    return 'bearer';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeFileFullExpiringEmbedLinkField(
  val: FileFullExpiringEmbedLinkField
): SerializedData {
  return {
    ['access_token']: val.accessToken == void 0 ? void 0 : val.accessToken,
    ['expires_in']: val.expiresIn == void 0 ? void 0 : val.expiresIn,
    ['token_type']:
      val.tokenType == void 0
        ? void 0
        : serializeFileFullExpiringEmbedLinkTokenTypeField(val.tokenType),
    ['restricted_to']:
      val.restrictedTo == void 0
        ? void 0
        : (val.restrictedTo.map(function (item: FileOrFolderScope): any {
            return serializeFileOrFolderScope(item);
          }) as readonly any[]),
    ['url']: val.url == void 0 ? void 0 : val.url,
  };
}
export function deserializeFileFullExpiringEmbedLinkField(
  val: any
): FileFullExpiringEmbedLinkField {
  const accessToken: undefined | string =
    val.access_token == void 0 ? void 0 : val.access_token;
  const expiresIn: undefined | number =
    val.expires_in == void 0 ? void 0 : val.expires_in;
  const tokenType: undefined | FileFullExpiringEmbedLinkTokenTypeField =
    val.token_type == void 0
      ? void 0
      : deserializeFileFullExpiringEmbedLinkTokenTypeField(val.token_type);
  const restrictedTo: undefined | readonly FileOrFolderScope[] =
    val.restricted_to == void 0
      ? void 0
      : sdIsList(val.restricted_to)
      ? (val.restricted_to.map(function (itm: SerializedData): any {
          return deserializeFileOrFolderScope(itm);
        }) as readonly any[])
      : [];
  const url: undefined | string = val.url == void 0 ? void 0 : val.url;
  return {
    accessToken: accessToken,
    expiresIn: expiresIn,
    tokenType: tokenType,
    restrictedTo: restrictedTo,
    url: url,
  } satisfies FileFullExpiringEmbedLinkField;
}
export function serializeFileFullWatermarkInfoField(
  val: FileFullWatermarkInfoField
): SerializedData {
  return {
    ['is_watermarked']:
      val.isWatermarked == void 0 ? void 0 : val.isWatermarked,
  };
}
export function deserializeFileFullWatermarkInfoField(
  val: any
): FileFullWatermarkInfoField {
  const isWatermarked: undefined | boolean =
    val.is_watermarked == void 0 ? void 0 : val.is_watermarked;
  return { isWatermarked: isWatermarked } satisfies FileFullWatermarkInfoField;
}
export function serializeFileFullAllowedInviteeRolesField(
  val: FileFullAllowedInviteeRolesField
): SerializedData {
  return val;
}
export function deserializeFileFullAllowedInviteeRolesField(
  val: any
): FileFullAllowedInviteeRolesField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "FileFullAllowedInviteeRolesField"';
  }
  if (val == 'editor') {
    return 'editor';
  }
  if (val == 'viewer') {
    return 'viewer';
  }
  if (val == 'previewer') {
    return 'previewer';
  }
  if (val == 'uploader') {
    return 'uploader';
  }
  if (val == 'previewer uploader') {
    return 'previewer uploader';
  }
  if (val == 'viewer uploader') {
    return 'viewer uploader';
  }
  if (val == 'co-owner') {
    return 'co-owner';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeFileFullMetadataField(
  val: FileFullMetadataField
): SerializedData {
  return { ...{}, ...val.extraData };
}
export function deserializeFileFullMetadataField(
  val: any
): FileFullMetadataField {
  const extraData:
    | undefined
    | {
        readonly [key: string]: {
          readonly [key: string]: Metadata;
        };
      } = val == void 0 ? void 0 : val;
  return { extraData: extraData } satisfies FileFullMetadataField;
}
export function serializeFileFullRepresentationsEntriesContentField(
  val: FileFullRepresentationsEntriesContentField
): SerializedData {
  return {
    ['url_template']: val.urlTemplate == void 0 ? void 0 : val.urlTemplate,
  };
}
export function deserializeFileFullRepresentationsEntriesContentField(
  val: any
): FileFullRepresentationsEntriesContentField {
  const urlTemplate: undefined | string =
    val.url_template == void 0 ? void 0 : val.url_template;
  return {
    urlTemplate: urlTemplate,
  } satisfies FileFullRepresentationsEntriesContentField;
}
export function serializeFileFullRepresentationsEntriesInfoField(
  val: FileFullRepresentationsEntriesInfoField
): SerializedData {
  return { ['url']: val.url == void 0 ? void 0 : val.url };
}
export function deserializeFileFullRepresentationsEntriesInfoField(
  val: any
): FileFullRepresentationsEntriesInfoField {
  const url: undefined | string = val.url == void 0 ? void 0 : val.url;
  return { url: url } satisfies FileFullRepresentationsEntriesInfoField;
}
export function serializeFileFullRepresentationsEntriesPropertiesField(
  val: FileFullRepresentationsEntriesPropertiesField
): SerializedData {
  return {
    ['dimensions']: val.dimensions == void 0 ? void 0 : val.dimensions,
    ['paged']: val.paged == void 0 ? void 0 : val.paged,
    ['thumb']: val.thumb == void 0 ? void 0 : val.thumb,
  };
}
export function deserializeFileFullRepresentationsEntriesPropertiesField(
  val: any
): FileFullRepresentationsEntriesPropertiesField {
  const dimensions: undefined | string =
    val.dimensions == void 0 ? void 0 : val.dimensions;
  const paged: undefined | boolean = val.paged == void 0 ? void 0 : val.paged;
  const thumb: undefined | boolean = val.thumb == void 0 ? void 0 : val.thumb;
  return {
    dimensions: dimensions,
    paged: paged,
    thumb: thumb,
  } satisfies FileFullRepresentationsEntriesPropertiesField;
}
export function serializeFileFullRepresentationsEntriesStatusStateField(
  val: FileFullRepresentationsEntriesStatusStateField
): SerializedData {
  return val;
}
export function deserializeFileFullRepresentationsEntriesStatusStateField(
  val: any
): FileFullRepresentationsEntriesStatusStateField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "FileFullRepresentationsEntriesStatusStateField"';
  }
  if (val == 'success') {
    return 'success';
  }
  if (val == 'viewable') {
    return 'viewable';
  }
  if (val == 'pending') {
    return 'pending';
  }
  if (val == 'none') {
    return 'none';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeFileFullRepresentationsEntriesStatusField(
  val: FileFullRepresentationsEntriesStatusField
): SerializedData {
  return {
    ['state']:
      val.state == void 0
        ? void 0
        : serializeFileFullRepresentationsEntriesStatusStateField(val.state),
  };
}
export function deserializeFileFullRepresentationsEntriesStatusField(
  val: any
): FileFullRepresentationsEntriesStatusField {
  const state: undefined | FileFullRepresentationsEntriesStatusStateField =
    val.state == void 0
      ? void 0
      : deserializeFileFullRepresentationsEntriesStatusStateField(val.state);
  return { state: state } satisfies FileFullRepresentationsEntriesStatusField;
}
export function serializeFileFullRepresentationsEntriesField(
  val: FileFullRepresentationsEntriesField
): SerializedData {
  return {
    ['content']:
      val.content == void 0
        ? void 0
        : serializeFileFullRepresentationsEntriesContentField(val.content),
    ['info']:
      val.info == void 0
        ? void 0
        : serializeFileFullRepresentationsEntriesInfoField(val.info),
    ['properties']:
      val.properties == void 0
        ? void 0
        : serializeFileFullRepresentationsEntriesPropertiesField(
            val.properties
          ),
    ['representation']:
      val.representation == void 0 ? void 0 : val.representation,
    ['status']:
      val.status == void 0
        ? void 0
        : serializeFileFullRepresentationsEntriesStatusField(val.status),
  };
}
export function deserializeFileFullRepresentationsEntriesField(
  val: any
): FileFullRepresentationsEntriesField {
  const content: undefined | FileFullRepresentationsEntriesContentField =
    val.content == void 0
      ? void 0
      : deserializeFileFullRepresentationsEntriesContentField(val.content);
  const info: undefined | FileFullRepresentationsEntriesInfoField =
    val.info == void 0
      ? void 0
      : deserializeFileFullRepresentationsEntriesInfoField(val.info);
  const properties: undefined | FileFullRepresentationsEntriesPropertiesField =
    val.properties == void 0
      ? void 0
      : deserializeFileFullRepresentationsEntriesPropertiesField(
          val.properties
        );
  const representation: undefined | string =
    val.representation == void 0 ? void 0 : val.representation;
  const status: undefined | FileFullRepresentationsEntriesStatusField =
    val.status == void 0
      ? void 0
      : deserializeFileFullRepresentationsEntriesStatusField(val.status);
  return {
    content: content,
    info: info,
    properties: properties,
    representation: representation,
    status: status,
  } satisfies FileFullRepresentationsEntriesField;
}
export function serializeFileFullRepresentationsField(
  val: FileFullRepresentationsField
): SerializedData {
  return {
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (
            item: FileFullRepresentationsEntriesField
          ): any {
            return serializeFileFullRepresentationsEntriesField(item);
          }) as readonly any[]),
  };
}
export function deserializeFileFullRepresentationsField(
  val: any
): FileFullRepresentationsField {
  const entries: undefined | readonly FileFullRepresentationsEntriesField[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (itm: SerializedData): any {
          return deserializeFileFullRepresentationsEntriesField(itm);
        }) as readonly any[])
      : [];
  return { entries: entries } satisfies FileFullRepresentationsField;
}
export function serializeFileFullClassificationField(
  val: FileFullClassificationField
): SerializedData {
  return {
    ['name']: val.name == void 0 ? void 0 : val.name,
    ['definition']: val.definition == void 0 ? void 0 : val.definition,
    ['color']: val.color == void 0 ? void 0 : val.color,
  };
}
export function deserializeFileFullClassificationField(
  val: any
): FileFullClassificationField {
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const definition: undefined | string =
    val.definition == void 0 ? void 0 : val.definition;
  const color: undefined | string = val.color == void 0 ? void 0 : val.color;
  return {
    name: name,
    definition: definition,
    color: color,
  } satisfies FileFullClassificationField;
}
export function serializeFileFullSharedLinkPermissionOptionsField(
  val: FileFullSharedLinkPermissionOptionsField
): SerializedData {
  return val;
}
export function deserializeFileFullSharedLinkPermissionOptionsField(
  val: any
): FileFullSharedLinkPermissionOptionsField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "FileFullSharedLinkPermissionOptionsField"';
  }
  if (val == 'can_preview') {
    return 'can_preview';
  }
  if (val == 'can_download') {
    return 'can_download';
  }
  if (val == 'can_edit') {
    return 'can_edit';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeFileFull(val: FileFull): SerializedData {
  const base: any = serializeFile(val);
  if (!sdIsMap(base)) {
    throw 'Expecting a map for "FileFull"';
  }
  return {
    ...base,
    ...{
      ['version_number']:
        val.versionNumber == void 0 ? void 0 : val.versionNumber,
      ['comment_count']: val.commentCount == void 0 ? void 0 : val.commentCount,
      ['permissions']:
        val.permissions == void 0
          ? void 0
          : serializeFileFullPermissionsField(val.permissions),
      ['tags']:
        val.tags == void 0
          ? void 0
          : (val.tags.map(function (item: string): any {
              return item;
            }) as readonly any[]),
      ['lock']:
        val.lock == void 0 ? void 0 : serializeFileFullLockField(val.lock),
      ['extension']: val.extension == void 0 ? void 0 : val.extension,
      ['is_package']: val.isPackage == void 0 ? void 0 : val.isPackage,
      ['expiring_embed_link']:
        val.expiringEmbedLink == void 0
          ? void 0
          : serializeFileFullExpiringEmbedLinkField(val.expiringEmbedLink),
      ['watermark_info']:
        val.watermarkInfo == void 0
          ? void 0
          : serializeFileFullWatermarkInfoField(val.watermarkInfo),
      ['is_accessible_via_shared_link']:
        val.isAccessibleViaSharedLink == void 0
          ? void 0
          : val.isAccessibleViaSharedLink,
      ['allowed_invitee_roles']:
        val.allowedInviteeRoles == void 0
          ? void 0
          : (val.allowedInviteeRoles.map(function (
              item: FileFullAllowedInviteeRolesField
            ): any {
              return serializeFileFullAllowedInviteeRolesField(item);
            }) as readonly any[]),
      ['is_externally_owned']:
        val.isExternallyOwned == void 0 ? void 0 : val.isExternallyOwned,
      ['has_collaborations']:
        val.hasCollaborations == void 0 ? void 0 : val.hasCollaborations,
      ['metadata']:
        val.metadata == void 0
          ? void 0
          : serializeFileFullMetadataField(val.metadata),
      ['expires_at']: val.expiresAt == void 0 ? void 0 : val.expiresAt,
      ['representations']:
        val.representations == void 0
          ? void 0
          : serializeFileFullRepresentationsField(val.representations),
      ['classification']:
        val.classification == void 0
          ? void 0
          : serializeFileFullClassificationField(val.classification),
      ['uploader_display_name']:
        val.uploaderDisplayName == void 0 ? void 0 : val.uploaderDisplayName,
      ['disposition_at']:
        val.dispositionAt == void 0 ? void 0 : val.dispositionAt,
      ['shared_link_permission_options']:
        val.sharedLinkPermissionOptions == void 0
          ? void 0
          : (val.sharedLinkPermissionOptions.map(function (
              item: FileFullSharedLinkPermissionOptionsField
            ): any {
              return serializeFileFullSharedLinkPermissionOptionsField(item);
            }) as readonly any[]),
    },
  };
}
export function deserializeFileFull(val: any): FileFull {
  const versionNumber: undefined | string =
    val.version_number == void 0 ? void 0 : val.version_number;
  const commentCount: undefined | number =
    val.comment_count == void 0 ? void 0 : val.comment_count;
  const permissions: undefined | FileFullPermissionsField =
    val.permissions == void 0
      ? void 0
      : deserializeFileFullPermissionsField(val.permissions);
  const tags: undefined | readonly string[] =
    val.tags == void 0
      ? void 0
      : sdIsList(val.tags)
      ? (val.tags.map(function (itm: SerializedData): any {
          return itm;
        }) as readonly any[])
      : [];
  const lock: undefined | FileFullLockField =
    val.lock == void 0 ? void 0 : deserializeFileFullLockField(val.lock);
  const extension: undefined | string =
    val.extension == void 0 ? void 0 : val.extension;
  const isPackage: undefined | boolean =
    val.is_package == void 0 ? void 0 : val.is_package;
  const expiringEmbedLink: undefined | FileFullExpiringEmbedLinkField =
    val.expiring_embed_link == void 0
      ? void 0
      : deserializeFileFullExpiringEmbedLinkField(val.expiring_embed_link);
  const watermarkInfo: undefined | FileFullWatermarkInfoField =
    val.watermark_info == void 0
      ? void 0
      : deserializeFileFullWatermarkInfoField(val.watermark_info);
  const isAccessibleViaSharedLink: undefined | boolean =
    val.is_accessible_via_shared_link == void 0
      ? void 0
      : val.is_accessible_via_shared_link;
  const allowedInviteeRoles:
    | undefined
    | readonly FileFullAllowedInviteeRolesField[] =
    val.allowed_invitee_roles == void 0
      ? void 0
      : sdIsList(val.allowed_invitee_roles)
      ? (val.allowed_invitee_roles.map(function (itm: SerializedData): any {
          return deserializeFileFullAllowedInviteeRolesField(itm);
        }) as readonly any[])
      : [];
  const isExternallyOwned: undefined | boolean =
    val.is_externally_owned == void 0 ? void 0 : val.is_externally_owned;
  const hasCollaborations: undefined | boolean =
    val.has_collaborations == void 0 ? void 0 : val.has_collaborations;
  const metadata: undefined | FileFullMetadataField =
    val.metadata == void 0
      ? void 0
      : deserializeFileFullMetadataField(val.metadata);
  const expiresAt: undefined | string =
    val.expires_at == void 0 ? void 0 : val.expires_at;
  const representations: undefined | FileFullRepresentationsField =
    val.representations == void 0
      ? void 0
      : deserializeFileFullRepresentationsField(val.representations);
  const classification: undefined | FileFullClassificationField =
    val.classification == void 0
      ? void 0
      : deserializeFileFullClassificationField(val.classification);
  const uploaderDisplayName: undefined | string =
    val.uploader_display_name == void 0 ? void 0 : val.uploader_display_name;
  const dispositionAt: undefined | string =
    val.disposition_at == void 0 ? void 0 : val.disposition_at;
  const sharedLinkPermissionOptions:
    | undefined
    | readonly FileFullSharedLinkPermissionOptionsField[] =
    val.shared_link_permission_options == void 0
      ? void 0
      : sdIsList(val.shared_link_permission_options)
      ? (val.shared_link_permission_options.map(function (
          itm: SerializedData
        ): any {
          return deserializeFileFullSharedLinkPermissionOptionsField(itm);
        }) as readonly any[])
      : [];
  const description: undefined | string =
    val.description == void 0 ? void 0 : val.description;
  const size: undefined | number = val.size == void 0 ? void 0 : val.size;
  const pathCollection: undefined | FilePathCollectionField =
    val.path_collection == void 0
      ? void 0
      : deserializeFilePathCollectionField(val.path_collection);
  const createdAt: undefined | string =
    val.created_at == void 0 ? void 0 : val.created_at;
  const modifiedAt: undefined | string =
    val.modified_at == void 0 ? void 0 : val.modified_at;
  const trashedAt: undefined | string =
    val.trashed_at == void 0 ? void 0 : val.trashed_at;
  const purgedAt: undefined | string =
    val.purged_at == void 0 ? void 0 : val.purged_at;
  const contentCreatedAt: undefined | string =
    val.content_created_at == void 0 ? void 0 : val.content_created_at;
  const contentModifiedAt: undefined | string =
    val.content_modified_at == void 0 ? void 0 : val.content_modified_at;
  const createdBy: undefined | UserMini =
    val.created_by == void 0 ? void 0 : deserializeUserMini(val.created_by);
  const modifiedBy: undefined | UserMini =
    val.modified_by == void 0 ? void 0 : deserializeUserMini(val.modified_by);
  const ownedBy: undefined | UserMini =
    val.owned_by == void 0 ? void 0 : deserializeUserMini(val.owned_by);
  const sharedLink: undefined | FileSharedLinkField =
    val.shared_link == void 0
      ? void 0
      : deserializeFileSharedLinkField(val.shared_link);
  const parent: undefined | FolderMini =
    val.parent == void 0 ? void 0 : deserializeFolderMini(val.parent);
  const itemStatus: undefined | FileItemStatusField =
    val.item_status == void 0
      ? void 0
      : deserializeFileItemStatusField(val.item_status);
  const sequenceId: undefined | string =
    val.sequence_id == void 0 ? void 0 : val.sequence_id;
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const sha1: undefined | string = val.sha1 == void 0 ? void 0 : val.sha1;
  const fileVersion: undefined | FileVersionMini =
    val.file_version == void 0
      ? void 0
      : deserializeFileVersionMini(val.file_version);
  const id: string = val.id;
  const etag: undefined | string = val.etag == void 0 ? void 0 : val.etag;
  const type: FileBaseTypeField = deserializeFileBaseTypeField(val.type);
  return {
    versionNumber: versionNumber,
    commentCount: commentCount,
    permissions: permissions,
    tags: tags,
    lock: lock,
    extension: extension,
    isPackage: isPackage,
    expiringEmbedLink: expiringEmbedLink,
    watermarkInfo: watermarkInfo,
    isAccessibleViaSharedLink: isAccessibleViaSharedLink,
    allowedInviteeRoles: allowedInviteeRoles,
    isExternallyOwned: isExternallyOwned,
    hasCollaborations: hasCollaborations,
    metadata: metadata,
    expiresAt: expiresAt,
    representations: representations,
    classification: classification,
    uploaderDisplayName: uploaderDisplayName,
    dispositionAt: dispositionAt,
    sharedLinkPermissionOptions: sharedLinkPermissionOptions,
    description: description,
    size: size,
    pathCollection: pathCollection,
    createdAt: createdAt,
    modifiedAt: modifiedAt,
    trashedAt: trashedAt,
    purgedAt: purgedAt,
    contentCreatedAt: contentCreatedAt,
    contentModifiedAt: contentModifiedAt,
    createdBy: createdBy,
    modifiedBy: modifiedBy,
    ownedBy: ownedBy,
    sharedLink: sharedLink,
    parent: parent,
    itemStatus: itemStatus,
    sequenceId: sequenceId,
    name: name,
    sha1: sha1,
    fileVersion: fileVersion,
    id: id,
    etag: etag,
    type: type,
  } satisfies FileFull;
}
export function serializeFiles(val: Files): SerializedData {
  return {
    ['total_count']: val.totalCount == void 0 ? void 0 : val.totalCount,
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (item: FileFull): any {
            return serializeFileFull(item);
          }) as readonly any[]),
  };
}
export function deserializeFiles(val: any): Files {
  const totalCount: undefined | number =
    val.total_count == void 0 ? void 0 : val.total_count;
  const entries: undefined | readonly FileFull[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (itm: SerializedData): any {
          return deserializeFileFull(itm);
        }) as readonly any[])
      : [];
  return { totalCount: totalCount, entries: entries } satisfies Files;
}
export function serializeDevicePinnerTypeField(
  val: DevicePinnerTypeField
): SerializedData {
  return val;
}
export function deserializeDevicePinnerTypeField(
  val: any
): DevicePinnerTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "DevicePinnerTypeField"';
  }
  if (val == 'device_pinner') {
    return 'device_pinner';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeDevicePinner(val: DevicePinner): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0 ? void 0 : serializeDevicePinnerTypeField(val.type),
    ['owned_by']:
      val.ownedBy == void 0 ? void 0 : serializeUserMini(val.ownedBy),
    ['product_name']: val.productName == void 0 ? void 0 : val.productName,
  };
}
export function deserializeDevicePinner(val: any): DevicePinner {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | DevicePinnerTypeField =
    val.type == void 0 ? void 0 : deserializeDevicePinnerTypeField(val.type);
  const ownedBy: undefined | UserMini =
    val.owned_by == void 0 ? void 0 : deserializeUserMini(val.owned_by);
  const productName: undefined | string =
    val.product_name == void 0 ? void 0 : val.product_name;
  return {
    id: id,
    type: type,
    ownedBy: ownedBy,
    productName: productName,
  } satisfies DevicePinner;
}
export function serializeDevicePinnersOrderByField(
  val: DevicePinnersOrderByField
): SerializedData {
  return val;
}
export function deserializeDevicePinnersOrderByField(
  val: any
): DevicePinnersOrderByField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "DevicePinnersOrderByField"';
  }
  if (val == 'id') {
    return 'id';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeDevicePinnersOrderDirectionField(
  val: DevicePinnersOrderDirectionField
): SerializedData {
  return val;
}
export function deserializeDevicePinnersOrderDirectionField(
  val: any
): DevicePinnersOrderDirectionField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "DevicePinnersOrderDirectionField"';
  }
  if (val == 'asc') {
    return 'asc';
  }
  if (val == 'desc') {
    return 'desc';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeDevicePinnersOrderField(
  val: DevicePinnersOrderField
): SerializedData {
  return {
    ['by']:
      val.by == void 0 ? void 0 : serializeDevicePinnersOrderByField(val.by),
    ['direction']:
      val.direction == void 0
        ? void 0
        : serializeDevicePinnersOrderDirectionField(val.direction),
  };
}
export function deserializeDevicePinnersOrderField(
  val: any
): DevicePinnersOrderField {
  const by: undefined | DevicePinnersOrderByField =
    val.by == void 0 ? void 0 : deserializeDevicePinnersOrderByField(val.by);
  const direction: undefined | DevicePinnersOrderDirectionField =
    val.direction == void 0
      ? void 0
      : deserializeDevicePinnersOrderDirectionField(val.direction);
  return { by: by, direction: direction } satisfies DevicePinnersOrderField;
}
export function serializeDevicePinners(val: DevicePinners): SerializedData {
  return {
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (item: DevicePinner): any {
            return serializeDevicePinner(item);
          }) as readonly any[]),
    ['limit']: val.limit == void 0 ? void 0 : val.limit,
    ['next_marker']: val.nextMarker == void 0 ? void 0 : val.nextMarker,
    ['order']:
      val.order == void 0
        ? void 0
        : (val.order.map(function (item: DevicePinnersOrderField): any {
            return serializeDevicePinnersOrderField(item);
          }) as readonly any[]),
  };
}
export function deserializeDevicePinners(val: any): DevicePinners {
  const entries: undefined | readonly DevicePinner[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (itm: SerializedData): any {
          return deserializeDevicePinner(itm);
        }) as readonly any[])
      : [];
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
  const nextMarker: undefined | number =
    val.next_marker == void 0 ? void 0 : val.next_marker;
  const order: undefined | readonly DevicePinnersOrderField[] =
    val.order == void 0
      ? void 0
      : sdIsList(val.order)
      ? (val.order.map(function (itm: SerializedData): any {
          return deserializeDevicePinnersOrderField(itm);
        }) as readonly any[])
      : [];
  return {
    entries: entries,
    limit: limit,
    nextMarker: nextMarker,
    order: order,
  } satisfies DevicePinners;
}
export function serializeCommentItemField(
  val: CommentItemField
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']: val.type == void 0 ? void 0 : val.type,
  };
}
export function deserializeCommentItemField(val: any): CommentItemField {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | string = val.type == void 0 ? void 0 : val.type;
  return { id: id, type: type } satisfies CommentItemField;
}
export function serializeComment(val: Comment): SerializedData {
  const base: any = serializeCommentBase(val);
  if (!sdIsMap(base)) {
    throw 'Expecting a map for "Comment"';
  }
  return {
    ...base,
    ...{
      ['is_reply_comment']:
        val.isReplyComment == void 0 ? void 0 : val.isReplyComment,
      ['message']: val.message == void 0 ? void 0 : val.message,
      ['created_by']:
        val.createdBy == void 0 ? void 0 : serializeUserMini(val.createdBy),
      ['created_at']: val.createdAt == void 0 ? void 0 : val.createdAt,
      ['modified_at']: val.modifiedAt == void 0 ? void 0 : val.modifiedAt,
      ['item']:
        val.item == void 0 ? void 0 : serializeCommentItemField(val.item),
    },
  };
}
export function deserializeComment(val: any): Comment {
  const isReplyComment: undefined | boolean =
    val.is_reply_comment == void 0 ? void 0 : val.is_reply_comment;
  const message: undefined | string =
    val.message == void 0 ? void 0 : val.message;
  const createdBy: undefined | UserMini =
    val.created_by == void 0 ? void 0 : deserializeUserMini(val.created_by);
  const createdAt: undefined | string =
    val.created_at == void 0 ? void 0 : val.created_at;
  const modifiedAt: undefined | string =
    val.modified_at == void 0 ? void 0 : val.modified_at;
  const item: undefined | CommentItemField =
    val.item == void 0 ? void 0 : deserializeCommentItemField(val.item);
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | CommentBaseTypeField =
    val.type == void 0 ? void 0 : deserializeCommentBaseTypeField(val.type);
  return {
    isReplyComment: isReplyComment,
    message: message,
    createdBy: createdBy,
    createdAt: createdAt,
    modifiedAt: modifiedAt,
    item: item,
    id: id,
    type: type,
  } satisfies Comment;
}
export function serializeCommentFull(val: CommentFull): SerializedData {
  const base: any = serializeComment(val);
  if (!sdIsMap(base)) {
    throw 'Expecting a map for "CommentFull"';
  }
  return {
    ...base,
    ...{
      ['tagged_message']:
        val.taggedMessage == void 0 ? void 0 : val.taggedMessage,
    },
  };
}
export function deserializeCommentFull(val: any): CommentFull {
  const taggedMessage: undefined | string =
    val.tagged_message == void 0 ? void 0 : val.tagged_message;
  const isReplyComment: undefined | boolean =
    val.is_reply_comment == void 0 ? void 0 : val.is_reply_comment;
  const message: undefined | string =
    val.message == void 0 ? void 0 : val.message;
  const createdBy: undefined | UserMini =
    val.created_by == void 0 ? void 0 : deserializeUserMini(val.created_by);
  const createdAt: undefined | string =
    val.created_at == void 0 ? void 0 : val.created_at;
  const modifiedAt: undefined | string =
    val.modified_at == void 0 ? void 0 : val.modified_at;
  const item: undefined | CommentItemField =
    val.item == void 0 ? void 0 : deserializeCommentItemField(val.item);
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | CommentBaseTypeField =
    val.type == void 0 ? void 0 : deserializeCommentBaseTypeField(val.type);
  return {
    taggedMessage: taggedMessage,
    isReplyComment: isReplyComment,
    message: message,
    createdBy: createdBy,
    createdAt: createdAt,
    modifiedAt: modifiedAt,
    item: item,
    id: id,
    type: type,
  } satisfies CommentFull;
}
export function serializeCommentsOrderDirectionField(
  val: CommentsOrderDirectionField
): SerializedData {
  return val;
}
export function deserializeCommentsOrderDirectionField(
  val: any
): CommentsOrderDirectionField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "CommentsOrderDirectionField"';
  }
  if (val == 'ASC') {
    return 'ASC';
  }
  if (val == 'DESC') {
    return 'DESC';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCommentsOrderField(
  val: CommentsOrderField
): SerializedData {
  return {
    ['by']: val.by == void 0 ? void 0 : val.by,
    ['direction']:
      val.direction == void 0
        ? void 0
        : serializeCommentsOrderDirectionField(val.direction),
  };
}
export function deserializeCommentsOrderField(val: any): CommentsOrderField {
  const by: undefined | string = val.by == void 0 ? void 0 : val.by;
  const direction: undefined | CommentsOrderDirectionField =
    val.direction == void 0
      ? void 0
      : deserializeCommentsOrderDirectionField(val.direction);
  return { by: by, direction: direction } satisfies CommentsOrderField;
}
export function serializeComments(val: Comments): SerializedData {
  return {
    ['total_count']: val.totalCount == void 0 ? void 0 : val.totalCount,
    ['limit']: val.limit == void 0 ? void 0 : val.limit,
    ['offset']: val.offset == void 0 ? void 0 : val.offset,
    ['order']:
      val.order == void 0
        ? void 0
        : (val.order.map(function (item: CommentsOrderField): any {
            return serializeCommentsOrderField(item);
          }) as readonly any[]),
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (item: CommentFull): any {
            return serializeCommentFull(item);
          }) as readonly any[]),
  };
}
export function deserializeComments(val: any): Comments {
  const totalCount: undefined | number =
    val.total_count == void 0 ? void 0 : val.total_count;
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
  const offset: undefined | number = val.offset == void 0 ? void 0 : val.offset;
  const order: undefined | readonly CommentsOrderField[] =
    val.order == void 0
      ? void 0
      : sdIsList(val.order)
      ? (val.order.map(function (itm: SerializedData): any {
          return deserializeCommentsOrderField(itm);
        }) as readonly any[])
      : [];
  const entries: undefined | readonly CommentFull[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (itm: SerializedData): any {
          return deserializeCommentFull(itm);
        }) as readonly any[])
      : [];
  return {
    totalCount: totalCount,
    limit: limit,
    offset: offset,
    order: order,
    entries: entries,
  } satisfies Comments;
}
export function serializeCollaborationAllowlistExemptTargetTypeField(
  val: CollaborationAllowlistExemptTargetTypeField
): SerializedData {
  return val;
}
export function deserializeCollaborationAllowlistExemptTargetTypeField(
  val: any
): CollaborationAllowlistExemptTargetTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "CollaborationAllowlistExemptTargetTypeField"';
  }
  if (val == 'collaboration_whitelist_exempt_target') {
    return 'collaboration_whitelist_exempt_target';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCollaborationAllowlistExemptTargetEnterpriseTypeField(
  val: CollaborationAllowlistExemptTargetEnterpriseTypeField
): SerializedData {
  return val;
}
export function deserializeCollaborationAllowlistExemptTargetEnterpriseTypeField(
  val: any
): CollaborationAllowlistExemptTargetEnterpriseTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "CollaborationAllowlistExemptTargetEnterpriseTypeField"';
  }
  if (val == 'enterprise') {
    return 'enterprise';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCollaborationAllowlistExemptTargetEnterpriseField(
  val: CollaborationAllowlistExemptTargetEnterpriseField
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0
        ? void 0
        : serializeCollaborationAllowlistExemptTargetEnterpriseTypeField(
            val.type
          ),
    ['name']: val.name == void 0 ? void 0 : val.name,
  };
}
export function deserializeCollaborationAllowlistExemptTargetEnterpriseField(
  val: any
): CollaborationAllowlistExemptTargetEnterpriseField {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type:
    | undefined
    | CollaborationAllowlistExemptTargetEnterpriseTypeField =
    val.type == void 0
      ? void 0
      : deserializeCollaborationAllowlistExemptTargetEnterpriseTypeField(
          val.type
        );
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  return {
    id: id,
    type: type,
    name: name,
  } satisfies CollaborationAllowlistExemptTargetEnterpriseField;
}
export function serializeCollaborationAllowlistExemptTarget(
  val: CollaborationAllowlistExemptTarget
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0
        ? void 0
        : serializeCollaborationAllowlistExemptTargetTypeField(val.type),
    ['enterprise']:
      val.enterprise == void 0
        ? void 0
        : serializeCollaborationAllowlistExemptTargetEnterpriseField(
            val.enterprise
          ),
    ['user']: val.user == void 0 ? void 0 : serializeUserMini(val.user),
    ['created_at']: val.createdAt == void 0 ? void 0 : val.createdAt,
    ['modified_at']: val.modifiedAt == void 0 ? void 0 : val.modifiedAt,
  };
}
export function deserializeCollaborationAllowlistExemptTarget(
  val: any
): CollaborationAllowlistExemptTarget {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | CollaborationAllowlistExemptTargetTypeField =
    val.type == void 0
      ? void 0
      : deserializeCollaborationAllowlistExemptTargetTypeField(val.type);
  const enterprise:
    | undefined
    | CollaborationAllowlistExemptTargetEnterpriseField =
    val.enterprise == void 0
      ? void 0
      : deserializeCollaborationAllowlistExemptTargetEnterpriseField(
          val.enterprise
        );
  const user: undefined | UserMini =
    val.user == void 0 ? void 0 : deserializeUserMini(val.user);
  const createdAt: undefined | string =
    val.created_at == void 0 ? void 0 : val.created_at;
  const modifiedAt: undefined | string =
    val.modified_at == void 0 ? void 0 : val.modified_at;
  return {
    id: id,
    type: type,
    enterprise: enterprise,
    user: user,
    createdAt: createdAt,
    modifiedAt: modifiedAt,
  } satisfies CollaborationAllowlistExemptTarget;
}
export function serializeCollaborationAllowlistExemptTargets(
  val: CollaborationAllowlistExemptTargets
): SerializedData {
  return {
    ['limit']: val.limit == void 0 ? void 0 : val.limit,
    ['next_marker']: val.nextMarker == void 0 ? void 0 : val.nextMarker,
    ['prev_marker']: val.prevMarker == void 0 ? void 0 : val.prevMarker,
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (
            item: CollaborationAllowlistExemptTarget
          ): any {
            return serializeCollaborationAllowlistExemptTarget(item);
          }) as readonly any[]),
  };
}
export function deserializeCollaborationAllowlistExemptTargets(
  val: any
): CollaborationAllowlistExemptTargets {
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
  const nextMarker: undefined | string =
    val.next_marker == void 0 ? void 0 : val.next_marker;
  const prevMarker: undefined | string =
    val.prev_marker == void 0 ? void 0 : val.prev_marker;
  const entries: undefined | readonly CollaborationAllowlistExemptTarget[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (itm: SerializedData): any {
          return deserializeCollaborationAllowlistExemptTarget(itm);
        }) as readonly any[])
      : [];
  return {
    limit: limit,
    nextMarker: nextMarker,
    prevMarker: prevMarker,
    entries: entries,
  } satisfies CollaborationAllowlistExemptTargets;
}
export function serializeShieldInformationBarrierSegmentRestriction(
  val: ShieldInformationBarrierSegmentRestriction
): SerializedData {
  const base: any =
    serializeShieldInformationBarrierSegmentRestrictionMini(val);
  if (!sdIsMap(base)) {
    throw 'Expecting a map for "ShieldInformationBarrierSegmentRestriction"';
  }
  return {
    ...base,
    ...{
      ['shield_information_barrier']:
        val.shieldInformationBarrier == void 0
          ? void 0
          : serializeShieldInformationBarrierBase(val.shieldInformationBarrier),
      ['created_at']: val.createdAt == void 0 ? void 0 : val.createdAt,
      ['created_by']:
        val.createdBy == void 0 ? void 0 : serializeUserBase(val.createdBy),
      ['updated_at']: val.updatedAt == void 0 ? void 0 : val.updatedAt,
      ['updated_by']:
        val.updatedBy == void 0 ? void 0 : serializeUserBase(val.updatedBy),
    },
  };
}
export function deserializeShieldInformationBarrierSegmentRestriction(
  val: any
): ShieldInformationBarrierSegmentRestriction {
  const shieldInformationBarrier: undefined | ShieldInformationBarrierBase =
    val.shield_information_barrier == void 0
      ? void 0
      : deserializeShieldInformationBarrierBase(val.shield_information_barrier);
  const createdAt: undefined | string =
    val.created_at == void 0 ? void 0 : val.created_at;
  const createdBy: undefined | UserBase =
    val.created_by == void 0 ? void 0 : deserializeUserBase(val.created_by);
  const updatedAt: undefined | string =
    val.updated_at == void 0 ? void 0 : val.updated_at;
  const updatedBy: undefined | UserBase =
    val.updated_by == void 0 ? void 0 : deserializeUserBase(val.updated_by);
  const shieldInformationBarrierSegment: ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField =
    deserializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField(
      val.shield_information_barrier_segment
    );
  const restrictedSegment: ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField =
    deserializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField(
      val.restricted_segment
    );
  const type:
    | undefined
    | ShieldInformationBarrierSegmentRestrictionBaseTypeField =
    val.type == void 0
      ? void 0
      : deserializeShieldInformationBarrierSegmentRestrictionBaseTypeField(
          val.type
        );
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  return {
    shieldInformationBarrier: shieldInformationBarrier,
    createdAt: createdAt,
    createdBy: createdBy,
    updatedAt: updatedAt,
    updatedBy: updatedBy,
    shieldInformationBarrierSegment: shieldInformationBarrierSegment,
    restrictedSegment: restrictedSegment,
    type: type,
    id: id,
  } satisfies ShieldInformationBarrierSegmentRestriction;
}
export function serializeShieldInformationBarrierSegmentRestrictions(
  val: ShieldInformationBarrierSegmentRestrictions
): SerializedData {
  return {
    ['limit']: val.limit == void 0 ? void 0 : val.limit,
    ['next_marker']: val.nextMarker == void 0 ? void 0 : val.nextMarker,
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (
            item: ShieldInformationBarrierSegmentRestriction
          ): any {
            return serializeShieldInformationBarrierSegmentRestriction(item);
          }) as readonly any[]),
  };
}
export function deserializeShieldInformationBarrierSegmentRestrictions(
  val: any
): ShieldInformationBarrierSegmentRestrictions {
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
  const nextMarker: undefined | string =
    val.next_marker == void 0 ? void 0 : val.next_marker;
  const entries:
    | undefined
    | readonly ShieldInformationBarrierSegmentRestriction[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (itm: SerializedData): any {
          return deserializeShieldInformationBarrierSegmentRestriction(itm);
        }) as readonly any[])
      : [];
  return {
    limit: limit,
    nextMarker: nextMarker,
    entries: entries,
  } satisfies ShieldInformationBarrierSegmentRestrictions;
}
export function serializeShieldInformationBarrierSegmentMemberMini(
  val: ShieldInformationBarrierSegmentMemberMini
): SerializedData {
  const base: any = serializeShieldInformationBarrierSegmentMemberBase(val);
  if (!sdIsMap(base)) {
    throw 'Expecting a map for "ShieldInformationBarrierSegmentMemberMini"';
  }
  return {
    ...base,
    ...{ ['user']: val.user == void 0 ? void 0 : serializeUserBase(val.user) },
  };
}
export function deserializeShieldInformationBarrierSegmentMemberMini(
  val: any
): ShieldInformationBarrierSegmentMemberMini {
  const user: undefined | UserBase =
    val.user == void 0 ? void 0 : deserializeUserBase(val.user);
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | ShieldInformationBarrierSegmentMemberBaseTypeField =
    val.type == void 0
      ? void 0
      : deserializeShieldInformationBarrierSegmentMemberBaseTypeField(val.type);
  return {
    user: user,
    id: id,
    type: type,
  } satisfies ShieldInformationBarrierSegmentMemberMini;
}
export function serializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentTypeField(
  val: ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentTypeField
): SerializedData {
  return val;
}
export function deserializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentTypeField(
  val: any
): ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentTypeField"';
  }
  if (val == 'shield_information_barrier_segment') {
    return 'shield_information_barrier_segment';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField(
  val: ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0
        ? void 0
        : serializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentTypeField(
            val.type
          ),
  };
}
export function deserializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField(
  val: any
): ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type:
    | undefined
    | ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentTypeField =
    val.type == void 0
      ? void 0
      : deserializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentTypeField(
          val.type
        );
  return {
    id: id,
    type: type,
  } satisfies ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField;
}
export function serializeShieldInformationBarrierSegmentMember(
  val: ShieldInformationBarrierSegmentMember
): SerializedData {
  const base: any = serializeShieldInformationBarrierSegmentMemberMini(val);
  if (!sdIsMap(base)) {
    throw 'Expecting a map for "ShieldInformationBarrierSegmentMember"';
  }
  return {
    ...base,
    ...{
      ['shield_information_barrier']:
        val.shieldInformationBarrier == void 0
          ? void 0
          : serializeShieldInformationBarrierBase(val.shieldInformationBarrier),
      ['shield_information_barrier_segment']:
        val.shieldInformationBarrierSegment == void 0
          ? void 0
          : serializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField(
              val.shieldInformationBarrierSegment
            ),
      ['created_at']: val.createdAt == void 0 ? void 0 : val.createdAt,
      ['created_by']:
        val.createdBy == void 0 ? void 0 : serializeUserBase(val.createdBy),
      ['updated_at']: val.updatedAt == void 0 ? void 0 : val.updatedAt,
      ['updated_by']:
        val.updatedBy == void 0 ? void 0 : serializeUserBase(val.updatedBy),
    },
  };
}
export function deserializeShieldInformationBarrierSegmentMember(
  val: any
): ShieldInformationBarrierSegmentMember {
  const shieldInformationBarrier: undefined | ShieldInformationBarrierBase =
    val.shield_information_barrier == void 0
      ? void 0
      : deserializeShieldInformationBarrierBase(val.shield_information_barrier);
  const shieldInformationBarrierSegment:
    | undefined
    | ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField =
    val.shield_information_barrier_segment == void 0
      ? void 0
      : deserializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField(
          val.shield_information_barrier_segment
        );
  const createdAt: undefined | string =
    val.created_at == void 0 ? void 0 : val.created_at;
  const createdBy: undefined | UserBase =
    val.created_by == void 0 ? void 0 : deserializeUserBase(val.created_by);
  const updatedAt: undefined | string =
    val.updated_at == void 0 ? void 0 : val.updated_at;
  const updatedBy: undefined | UserBase =
    val.updated_by == void 0 ? void 0 : deserializeUserBase(val.updated_by);
  const user: undefined | UserBase =
    val.user == void 0 ? void 0 : deserializeUserBase(val.user);
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | ShieldInformationBarrierSegmentMemberBaseTypeField =
    val.type == void 0
      ? void 0
      : deserializeShieldInformationBarrierSegmentMemberBaseTypeField(val.type);
  return {
    shieldInformationBarrier: shieldInformationBarrier,
    shieldInformationBarrierSegment: shieldInformationBarrierSegment,
    createdAt: createdAt,
    createdBy: createdBy,
    updatedAt: updatedAt,
    updatedBy: updatedBy,
    user: user,
    id: id,
    type: type,
  } satisfies ShieldInformationBarrierSegmentMember;
}
export function serializeShieldInformationBarrierSegmentMembers(
  val: ShieldInformationBarrierSegmentMembers
): SerializedData {
  return {
    ['limit']: val.limit == void 0 ? void 0 : val.limit,
    ['next_marker']: val.nextMarker == void 0 ? void 0 : val.nextMarker,
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (
            item: ShieldInformationBarrierSegmentMember
          ): any {
            return serializeShieldInformationBarrierSegmentMember(item);
          }) as readonly any[]),
  };
}
export function deserializeShieldInformationBarrierSegmentMembers(
  val: any
): ShieldInformationBarrierSegmentMembers {
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
  const nextMarker: undefined | string =
    val.next_marker == void 0 ? void 0 : val.next_marker;
  const entries: undefined | readonly ShieldInformationBarrierSegmentMember[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (itm: SerializedData): any {
          return deserializeShieldInformationBarrierSegmentMember(itm);
        }) as readonly any[])
      : [];
  return {
    limit: limit,
    nextMarker: nextMarker,
    entries: entries,
  } satisfies ShieldInformationBarrierSegmentMembers;
}
export function serializeShieldInformationBarrierSegmentTypeField(
  val: ShieldInformationBarrierSegmentTypeField
): SerializedData {
  return val;
}
export function deserializeShieldInformationBarrierSegmentTypeField(
  val: any
): ShieldInformationBarrierSegmentTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "ShieldInformationBarrierSegmentTypeField"';
  }
  if (val == 'shield_information_barrier_segment') {
    return 'shield_information_barrier_segment';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeShieldInformationBarrierSegment(
  val: ShieldInformationBarrierSegment
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0
        ? void 0
        : serializeShieldInformationBarrierSegmentTypeField(val.type),
    ['shield_information_barrier']:
      val.shieldInformationBarrier == void 0
        ? void 0
        : serializeShieldInformationBarrierBase(val.shieldInformationBarrier),
    ['name']: val.name == void 0 ? void 0 : val.name,
    ['description']: val.description == void 0 ? void 0 : val.description,
    ['created_at']: val.createdAt == void 0 ? void 0 : val.createdAt,
    ['created_by']:
      val.createdBy == void 0 ? void 0 : serializeUserBase(val.createdBy),
    ['updated_at']: val.updatedAt == void 0 ? void 0 : val.updatedAt,
    ['updated_by']:
      val.updatedBy == void 0 ? void 0 : serializeUserBase(val.updatedBy),
  };
}
export function deserializeShieldInformationBarrierSegment(
  val: any
): ShieldInformationBarrierSegment {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | ShieldInformationBarrierSegmentTypeField =
    val.type == void 0
      ? void 0
      : deserializeShieldInformationBarrierSegmentTypeField(val.type);
  const shieldInformationBarrier: undefined | ShieldInformationBarrierBase =
    val.shield_information_barrier == void 0
      ? void 0
      : deserializeShieldInformationBarrierBase(val.shield_information_barrier);
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const description: undefined | string =
    val.description == void 0 ? void 0 : val.description;
  const createdAt: undefined | string =
    val.created_at == void 0 ? void 0 : val.created_at;
  const createdBy: undefined | UserBase =
    val.created_by == void 0 ? void 0 : deserializeUserBase(val.created_by);
  const updatedAt: undefined | string =
    val.updated_at == void 0 ? void 0 : val.updated_at;
  const updatedBy: undefined | UserBase =
    val.updated_by == void 0 ? void 0 : deserializeUserBase(val.updated_by);
  return {
    id: id,
    type: type,
    shieldInformationBarrier: shieldInformationBarrier,
    name: name,
    description: description,
    createdAt: createdAt,
    createdBy: createdBy,
    updatedAt: updatedAt,
    updatedBy: updatedBy,
  } satisfies ShieldInformationBarrierSegment;
}
export function serializeShieldInformationBarrierSegments(
  val: ShieldInformationBarrierSegments
): SerializedData {
  return {
    ['limit']: val.limit == void 0 ? void 0 : val.limit,
    ['next_marker']: val.nextMarker == void 0 ? void 0 : val.nextMarker,
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (
            item: ShieldInformationBarrierSegment
          ): any {
            return serializeShieldInformationBarrierSegment(item);
          }) as readonly any[]),
  };
}
export function deserializeShieldInformationBarrierSegments(
  val: any
): ShieldInformationBarrierSegments {
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
  const nextMarker: undefined | string =
    val.next_marker == void 0 ? void 0 : val.next_marker;
  const entries: undefined | readonly ShieldInformationBarrierSegment[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (itm: SerializedData): any {
          return deserializeShieldInformationBarrierSegment(itm);
        }) as readonly any[])
      : [];
  return {
    limit: limit,
    nextMarker: nextMarker,
    entries: entries,
  } satisfies ShieldInformationBarrierSegments;
}
export function serializeShieldInformationBarrierTypeField(
  val: ShieldInformationBarrierTypeField
): SerializedData {
  return val;
}
export function deserializeShieldInformationBarrierTypeField(
  val: any
): ShieldInformationBarrierTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "ShieldInformationBarrierTypeField"';
  }
  if (val == 'shield_information_barrier') {
    return 'shield_information_barrier';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeShieldInformationBarrierStatusField(
  val: ShieldInformationBarrierStatusField
): SerializedData {
  return val;
}
export function deserializeShieldInformationBarrierStatusField(
  val: any
): ShieldInformationBarrierStatusField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "ShieldInformationBarrierStatusField"';
  }
  if (val == 'draft') {
    return 'draft';
  }
  if (val == 'pending') {
    return 'pending';
  }
  if (val == 'disabled') {
    return 'disabled';
  }
  if (val == 'enabled') {
    return 'enabled';
  }
  if (val == 'invalid') {
    return 'invalid';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeShieldInformationBarrier(
  val: ShieldInformationBarrier
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0
        ? void 0
        : serializeShieldInformationBarrierTypeField(val.type),
    ['enterprise']:
      val.enterprise == void 0
        ? void 0
        : serializeEnterpriseBase(val.enterprise),
    ['status']:
      val.status == void 0
        ? void 0
        : serializeShieldInformationBarrierStatusField(val.status),
    ['created_at']: val.createdAt == void 0 ? void 0 : val.createdAt,
    ['created_by']:
      val.createdBy == void 0 ? void 0 : serializeUserBase(val.createdBy),
    ['updated_at']: val.updatedAt == void 0 ? void 0 : val.updatedAt,
    ['updated_by']:
      val.updatedBy == void 0 ? void 0 : serializeUserBase(val.updatedBy),
    ['enabled_at']: val.enabledAt == void 0 ? void 0 : val.enabledAt,
    ['enabled_by']:
      val.enabledBy == void 0 ? void 0 : serializeUserBase(val.enabledBy),
  };
}
export function deserializeShieldInformationBarrier(
  val: any
): ShieldInformationBarrier {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | ShieldInformationBarrierTypeField =
    val.type == void 0
      ? void 0
      : deserializeShieldInformationBarrierTypeField(val.type);
  const enterprise: undefined | EnterpriseBase =
    val.enterprise == void 0
      ? void 0
      : deserializeEnterpriseBase(val.enterprise);
  const status: undefined | ShieldInformationBarrierStatusField =
    val.status == void 0
      ? void 0
      : deserializeShieldInformationBarrierStatusField(val.status);
  const createdAt: undefined | string =
    val.created_at == void 0 ? void 0 : val.created_at;
  const createdBy: undefined | UserBase =
    val.created_by == void 0 ? void 0 : deserializeUserBase(val.created_by);
  const updatedAt: undefined | string =
    val.updated_at == void 0 ? void 0 : val.updated_at;
  const updatedBy: undefined | UserBase =
    val.updated_by == void 0 ? void 0 : deserializeUserBase(val.updated_by);
  const enabledAt: undefined | string =
    val.enabled_at == void 0 ? void 0 : val.enabled_at;
  const enabledBy: undefined | UserBase =
    val.enabled_by == void 0 ? void 0 : deserializeUserBase(val.enabled_by);
  return {
    id: id,
    type: type,
    enterprise: enterprise,
    status: status,
    createdAt: createdAt,
    createdBy: createdBy,
    updatedAt: updatedAt,
    updatedBy: updatedBy,
    enabledAt: enabledAt,
    enabledBy: enabledBy,
  } satisfies ShieldInformationBarrier;
}
export function serializeShieldInformationBarriers(
  val: ShieldInformationBarriers
): SerializedData {
  return {
    ['limit']: val.limit == void 0 ? void 0 : val.limit,
    ['next_marker']: val.nextMarker == void 0 ? void 0 : val.nextMarker,
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (item: ShieldInformationBarrier): any {
            return serializeShieldInformationBarrier(item);
          }) as readonly any[]),
  };
}
export function deserializeShieldInformationBarriers(
  val: any
): ShieldInformationBarriers {
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
  const nextMarker: undefined | string =
    val.next_marker == void 0 ? void 0 : val.next_marker;
  const entries: undefined | readonly ShieldInformationBarrier[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (itm: SerializedData): any {
          return deserializeShieldInformationBarrier(itm);
        }) as readonly any[])
      : [];
  return {
    limit: limit,
    nextMarker: nextMarker,
    entries: entries,
  } satisfies ShieldInformationBarriers;
}
export function serializeFolderLockLockedOperationsField(
  val: FolderLockLockedOperationsField
): SerializedData {
  return { ['move']: val.move, ['delete']: val.delete };
}
export function deserializeFolderLockLockedOperationsField(
  val: any
): FolderLockLockedOperationsField {
  const move: boolean = val.move;
  const _delete: boolean = val.delete;
  return {
    move: move,
    delete: _delete,
  } satisfies FolderLockLockedOperationsField;
}
export function serializeFolderLock(val: FolderLock): SerializedData {
  return {
    ['folder']: val.folder == void 0 ? void 0 : serializeFolderMini(val.folder),
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']: val.type == void 0 ? void 0 : val.type,
    ['created_by']:
      val.createdBy == void 0 ? void 0 : serializeUserBase(val.createdBy),
    ['created_at']: val.createdAt == void 0 ? void 0 : val.createdAt,
    ['locked_operations']:
      val.lockedOperations == void 0
        ? void 0
        : serializeFolderLockLockedOperationsField(val.lockedOperations),
    ['lock_type']: val.lockType == void 0 ? void 0 : val.lockType,
  };
}
export function deserializeFolderLock(val: any): FolderLock {
  const folder: undefined | FolderMini =
    val.folder == void 0 ? void 0 : deserializeFolderMini(val.folder);
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | string = val.type == void 0 ? void 0 : val.type;
  const createdBy: undefined | UserBase =
    val.created_by == void 0 ? void 0 : deserializeUserBase(val.created_by);
  const createdAt: undefined | string =
    val.created_at == void 0 ? void 0 : val.created_at;
  const lockedOperations: undefined | FolderLockLockedOperationsField =
    val.locked_operations == void 0
      ? void 0
      : deserializeFolderLockLockedOperationsField(val.locked_operations);
  const lockType: undefined | string =
    val.lock_type == void 0 ? void 0 : val.lock_type;
  return {
    folder: folder,
    id: id,
    type: type,
    createdBy: createdBy,
    createdAt: createdAt,
    lockedOperations: lockedOperations,
    lockType: lockType,
  } satisfies FolderLock;
}
export function serializeFolderLocks(val: FolderLocks): SerializedData {
  return {
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (item: FolderLock): any {
            return serializeFolderLock(item);
          }) as readonly any[]),
    ['limit']: val.limit == void 0 ? void 0 : val.limit,
    ['next_marker']: val.nextMarker == void 0 ? void 0 : val.nextMarker,
  };
}
export function deserializeFolderLocks(val: any): FolderLocks {
  const entries: undefined | readonly FolderLock[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (itm: SerializedData): any {
          return deserializeFolderLock(itm);
        }) as readonly any[])
      : [];
  const limit: undefined | string = val.limit == void 0 ? void 0 : val.limit;
  const nextMarker: undefined | string =
    val.next_marker == void 0 ? void 0 : val.next_marker;
  return {
    entries: entries,
    limit: limit,
    nextMarker: nextMarker,
  } satisfies FolderLocks;
}
export function serializeWatermarkWatermarkField(
  val: WatermarkWatermarkField
): SerializedData {
  return {
    ['created_at']: val.createdAt == void 0 ? void 0 : val.createdAt,
    ['modified_at']: val.modifiedAt == void 0 ? void 0 : val.modifiedAt,
  };
}
export function deserializeWatermarkWatermarkField(
  val: any
): WatermarkWatermarkField {
  const createdAt: undefined | string =
    val.created_at == void 0 ? void 0 : val.created_at;
  const modifiedAt: undefined | string =
    val.modified_at == void 0 ? void 0 : val.modified_at;
  return {
    createdAt: createdAt,
    modifiedAt: modifiedAt,
  } satisfies WatermarkWatermarkField;
}
export function serializeWatermark(val: Watermark): SerializedData {
  return {
    ['watermark']:
      val.watermark == void 0
        ? void 0
        : serializeWatermarkWatermarkField(val.watermark),
  };
}
export function deserializeWatermark(val: any): Watermark {
  const watermark: undefined | WatermarkWatermarkField =
    val.watermark == void 0
      ? void 0
      : deserializeWatermarkWatermarkField(val.watermark);
  return { watermark: watermark } satisfies Watermark;
}
export function serializeWebhookMiniTypeField(
  val: WebhookMiniTypeField
): SerializedData {
  return val;
}
export function deserializeWebhookMiniTypeField(
  val: any
): WebhookMiniTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "WebhookMiniTypeField"';
  }
  if (val == 'webhook') {
    return 'webhook';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeWebhookMiniTargetTypeField(
  val: WebhookMiniTargetTypeField
): SerializedData {
  return val;
}
export function deserializeWebhookMiniTargetTypeField(
  val: any
): WebhookMiniTargetTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "WebhookMiniTargetTypeField"';
  }
  if (val == 'file') {
    return 'file';
  }
  if (val == 'folder') {
    return 'folder';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeWebhookMiniTargetField(
  val: WebhookMiniTargetField
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0
        ? void 0
        : serializeWebhookMiniTargetTypeField(val.type),
  };
}
export function deserializeWebhookMiniTargetField(
  val: any
): WebhookMiniTargetField {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | WebhookMiniTargetTypeField =
    val.type == void 0
      ? void 0
      : deserializeWebhookMiniTargetTypeField(val.type);
  return { id: id, type: type } satisfies WebhookMiniTargetField;
}
export function serializeWebhookMini(val: WebhookMini): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0 ? void 0 : serializeWebhookMiniTypeField(val.type),
    ['target']:
      val.target == void 0
        ? void 0
        : serializeWebhookMiniTargetField(val.target),
  };
}
export function deserializeWebhookMini(val: any): WebhookMini {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | WebhookMiniTypeField =
    val.type == void 0 ? void 0 : deserializeWebhookMiniTypeField(val.type);
  const target: undefined | WebhookMiniTargetField =
    val.target == void 0
      ? void 0
      : deserializeWebhookMiniTargetField(val.target);
  return { id: id, type: type, target: target } satisfies WebhookMini;
}
export function serializeWebhooks(val: Webhooks): SerializedData {
  return {
    ['limit']: val.limit == void 0 ? void 0 : val.limit,
    ['next_marker']: val.nextMarker == void 0 ? void 0 : val.nextMarker,
    ['prev_marker']: val.prevMarker == void 0 ? void 0 : val.prevMarker,
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (item: WebhookMini): any {
            return serializeWebhookMini(item);
          }) as readonly any[]),
  };
}
export function deserializeWebhooks(val: any): Webhooks {
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
  const nextMarker: undefined | string =
    val.next_marker == void 0 ? void 0 : val.next_marker;
  const prevMarker: undefined | string =
    val.prev_marker == void 0 ? void 0 : val.prev_marker;
  const entries: undefined | readonly WebhookMini[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (itm: SerializedData): any {
          return deserializeWebhookMini(itm);
        }) as readonly any[])
      : [];
  return {
    limit: limit,
    nextMarker: nextMarker,
    prevMarker: prevMarker,
    entries: entries,
  } satisfies Webhooks;
}
export function serializeWebhookTriggersField(
  val: WebhookTriggersField
): SerializedData {
  return val;
}
export function deserializeWebhookTriggersField(
  val: any
): WebhookTriggersField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "WebhookTriggersField"';
  }
  if (val == 'FILE.UPLOADED') {
    return 'FILE.UPLOADED';
  }
  if (val == 'FILE.PREVIEWED') {
    return 'FILE.PREVIEWED';
  }
  if (val == 'FILE.DOWNLOADED') {
    return 'FILE.DOWNLOADED';
  }
  if (val == 'FILE.TRASHED') {
    return 'FILE.TRASHED';
  }
  if (val == 'FILE.DELETED') {
    return 'FILE.DELETED';
  }
  if (val == 'FILE.RESTORED') {
    return 'FILE.RESTORED';
  }
  if (val == 'FILE.COPIED') {
    return 'FILE.COPIED';
  }
  if (val == 'FILE.MOVED') {
    return 'FILE.MOVED';
  }
  if (val == 'FILE.LOCKED') {
    return 'FILE.LOCKED';
  }
  if (val == 'FILE.UNLOCKED') {
    return 'FILE.UNLOCKED';
  }
  if (val == 'FILE.RENAMED') {
    return 'FILE.RENAMED';
  }
  if (val == 'COMMENT.CREATED') {
    return 'COMMENT.CREATED';
  }
  if (val == 'COMMENT.UPDATED') {
    return 'COMMENT.UPDATED';
  }
  if (val == 'COMMENT.DELETED') {
    return 'COMMENT.DELETED';
  }
  if (val == 'TASK_ASSIGNMENT.CREATED') {
    return 'TASK_ASSIGNMENT.CREATED';
  }
  if (val == 'TASK_ASSIGNMENT.UPDATED') {
    return 'TASK_ASSIGNMENT.UPDATED';
  }
  if (val == 'METADATA_INSTANCE.CREATED') {
    return 'METADATA_INSTANCE.CREATED';
  }
  if (val == 'METADATA_INSTANCE.UPDATED') {
    return 'METADATA_INSTANCE.UPDATED';
  }
  if (val == 'METADATA_INSTANCE.DELETED') {
    return 'METADATA_INSTANCE.DELETED';
  }
  if (val == 'FOLDER.CREATED') {
    return 'FOLDER.CREATED';
  }
  if (val == 'FOLDER.RENAMED') {
    return 'FOLDER.RENAMED';
  }
  if (val == 'FOLDER.DOWNLOADED') {
    return 'FOLDER.DOWNLOADED';
  }
  if (val == 'FOLDER.RESTORED') {
    return 'FOLDER.RESTORED';
  }
  if (val == 'FOLDER.DELETED') {
    return 'FOLDER.DELETED';
  }
  if (val == 'FOLDER.COPIED') {
    return 'FOLDER.COPIED';
  }
  if (val == 'FOLDER.MOVED') {
    return 'FOLDER.MOVED';
  }
  if (val == 'FOLDER.TRASHED') {
    return 'FOLDER.TRASHED';
  }
  if (val == 'WEBHOOK.DELETED') {
    return 'WEBHOOK.DELETED';
  }
  if (val == 'COLLABORATION.CREATED') {
    return 'COLLABORATION.CREATED';
  }
  if (val == 'COLLABORATION.ACCEPTED') {
    return 'COLLABORATION.ACCEPTED';
  }
  if (val == 'COLLABORATION.REJECTED') {
    return 'COLLABORATION.REJECTED';
  }
  if (val == 'COLLABORATION.REMOVED') {
    return 'COLLABORATION.REMOVED';
  }
  if (val == 'COLLABORATION.UPDATED') {
    return 'COLLABORATION.UPDATED';
  }
  if (val == 'SHARED_LINK.DELETED') {
    return 'SHARED_LINK.DELETED';
  }
  if (val == 'SHARED_LINK.CREATED') {
    return 'SHARED_LINK.CREATED';
  }
  if (val == 'SHARED_LINK.UPDATED') {
    return 'SHARED_LINK.UPDATED';
  }
  if (val == 'SIGN_REQUEST.COMPLETED') {
    return 'SIGN_REQUEST.COMPLETED';
  }
  if (val == 'SIGN_REQUEST.DECLINED') {
    return 'SIGN_REQUEST.DECLINED';
  }
  if (val == 'SIGN_REQUEST.EXPIRED') {
    return 'SIGN_REQUEST.EXPIRED';
  }
  if (val == 'SIGN_REQUEST.SIGNER_EMAIL_BOUNCED') {
    return 'SIGN_REQUEST.SIGNER_EMAIL_BOUNCED';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeWebhook(val: Webhook): SerializedData {
  const base: any = serializeWebhookMini(val);
  if (!sdIsMap(base)) {
    throw 'Expecting a map for "Webhook"';
  }
  return {
    ...base,
    ...{
      ['created_by']:
        val.createdBy == void 0 ? void 0 : serializeUserMini(val.createdBy),
      ['created_at']: val.createdAt == void 0 ? void 0 : val.createdAt,
      ['address']: val.address == void 0 ? void 0 : val.address,
      ['triggers']:
        val.triggers == void 0
          ? void 0
          : (val.triggers.map(function (item: WebhookTriggersField): any {
              return serializeWebhookTriggersField(item);
            }) as readonly any[]),
    },
  };
}
export function deserializeWebhook(val: any): Webhook {
  const createdBy: undefined | UserMini =
    val.created_by == void 0 ? void 0 : deserializeUserMini(val.created_by);
  const createdAt: undefined | string =
    val.created_at == void 0 ? void 0 : val.created_at;
  const address: undefined | string =
    val.address == void 0 ? void 0 : val.address;
  const triggers: undefined | readonly WebhookTriggersField[] =
    val.triggers == void 0
      ? void 0
      : sdIsList(val.triggers)
      ? (val.triggers.map(function (itm: SerializedData): any {
          return deserializeWebhookTriggersField(itm);
        }) as readonly any[])
      : [];
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | WebhookMiniTypeField =
    val.type == void 0 ? void 0 : deserializeWebhookMiniTypeField(val.type);
  const target: undefined | WebhookMiniTargetField =
    val.target == void 0
      ? void 0
      : deserializeWebhookMiniTargetField(val.target);
  return {
    createdBy: createdBy,
    createdAt: createdAt,
    address: address,
    triggers: triggers,
    id: id,
    type: type,
    target: target,
  } satisfies Webhook;
}
export function serializeWebLinkBaseTypeField(
  val: WebLinkBaseTypeField
): SerializedData {
  return val;
}
export function deserializeWebLinkBaseTypeField(
  val: any
): WebLinkBaseTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "WebLinkBaseTypeField"';
  }
  if (val == 'web_link') {
    return 'web_link';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeWebLinkBase(val: WebLinkBase): SerializedData {
  return {
    ['id']: val.id,
    ['type']: serializeWebLinkBaseTypeField(val.type),
    ['etag']: val.etag == void 0 ? void 0 : val.etag,
  };
}
export function deserializeWebLinkBase(val: any): WebLinkBase {
  const id: string = val.id;
  const type: WebLinkBaseTypeField = deserializeWebLinkBaseTypeField(val.type);
  const etag: undefined | string = val.etag == void 0 ? void 0 : val.etag;
  return { id: id, type: type, etag: etag } satisfies WebLinkBase;
}
export function serializeWebLinkMini(val: WebLinkMini): SerializedData {
  const base: any = serializeWebLinkBase(val);
  if (!sdIsMap(base)) {
    throw 'Expecting a map for "WebLinkMini"';
  }
  return {
    ...base,
    ...{
      ['url']: val.url == void 0 ? void 0 : val.url,
      ['sequence_id']: val.sequenceId == void 0 ? void 0 : val.sequenceId,
      ['name']: val.name == void 0 ? void 0 : val.name,
    },
  };
}
export function deserializeWebLinkMini(val: any): WebLinkMini {
  const url: undefined | string = val.url == void 0 ? void 0 : val.url;
  const sequenceId: undefined | string =
    val.sequence_id == void 0 ? void 0 : val.sequence_id;
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const id: string = val.id;
  const type: WebLinkBaseTypeField = deserializeWebLinkBaseTypeField(val.type);
  const etag: undefined | string = val.etag == void 0 ? void 0 : val.etag;
  return {
    url: url,
    sequenceId: sequenceId,
    name: name,
    id: id,
    type: type,
    etag: etag,
  } satisfies WebLinkMini;
}
export function serializeWebLinkPathCollectionField(
  val: WebLinkPathCollectionField
): SerializedData {
  return {
    ['total_count']: val.totalCount,
    ['entries']: val.entries.map(function (item: FolderMini): any {
      return serializeFolderMini(item);
    }) as readonly any[],
  };
}
export function deserializeWebLinkPathCollectionField(
  val: any
): WebLinkPathCollectionField {
  const totalCount: number = val.total_count;
  const entries: readonly FolderMini[] = sdIsList(val.entries)
    ? (val.entries.map(function (itm: SerializedData): any {
        return deserializeFolderMini(itm);
      }) as readonly any[])
    : [];
  return {
    totalCount: totalCount,
    entries: entries,
  } satisfies WebLinkPathCollectionField;
}
export function serializeWebLinkSharedLinkAccessField(
  val: WebLinkSharedLinkAccessField
): SerializedData {
  return val;
}
export function deserializeWebLinkSharedLinkAccessField(
  val: any
): WebLinkSharedLinkAccessField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "WebLinkSharedLinkAccessField"';
  }
  if (val == 'open') {
    return 'open';
  }
  if (val == 'company') {
    return 'company';
  }
  if (val == 'collaborators') {
    return 'collaborators';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeWebLinkSharedLinkEffectiveAccessField(
  val: WebLinkSharedLinkEffectiveAccessField
): SerializedData {
  return val;
}
export function deserializeWebLinkSharedLinkEffectiveAccessField(
  val: any
): WebLinkSharedLinkEffectiveAccessField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "WebLinkSharedLinkEffectiveAccessField"';
  }
  if (val == 'open') {
    return 'open';
  }
  if (val == 'company') {
    return 'company';
  }
  if (val == 'collaborators') {
    return 'collaborators';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeWebLinkSharedLinkEffectivePermissionField(
  val: WebLinkSharedLinkEffectivePermissionField
): SerializedData {
  return val;
}
export function deserializeWebLinkSharedLinkEffectivePermissionField(
  val: any
): WebLinkSharedLinkEffectivePermissionField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "WebLinkSharedLinkEffectivePermissionField"';
  }
  if (val == 'can_edit') {
    return 'can_edit';
  }
  if (val == 'can_download') {
    return 'can_download';
  }
  if (val == 'can_preview') {
    return 'can_preview';
  }
  if (val == 'no_access') {
    return 'no_access';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeWebLinkSharedLinkPermissionsField(
  val: WebLinkSharedLinkPermissionsField
): SerializedData {
  return {
    ['can_download']: val.canDownload,
    ['can_preview']: val.canPreview,
    ['can_edit']: val.canEdit,
  };
}
export function deserializeWebLinkSharedLinkPermissionsField(
  val: any
): WebLinkSharedLinkPermissionsField {
  const canDownload: boolean = val.can_download;
  const canPreview: boolean = val.can_preview;
  const canEdit: boolean = val.can_edit;
  return {
    canDownload: canDownload,
    canPreview: canPreview,
    canEdit: canEdit,
  } satisfies WebLinkSharedLinkPermissionsField;
}
export function serializeWebLinkSharedLinkField(
  val: WebLinkSharedLinkField
): SerializedData {
  return {
    ['url']: val.url,
    ['download_url']: val.downloadUrl == void 0 ? void 0 : val.downloadUrl,
    ['vanity_url']: val.vanityUrl == void 0 ? void 0 : val.vanityUrl,
    ['vanity_name']: val.vanityName == void 0 ? void 0 : val.vanityName,
    ['access']:
      val.access == void 0
        ? void 0
        : serializeWebLinkSharedLinkAccessField(val.access),
    ['effective_access']: serializeWebLinkSharedLinkEffectiveAccessField(
      val.effectiveAccess
    ),
    ['effective_permission']:
      serializeWebLinkSharedLinkEffectivePermissionField(
        val.effectivePermission
      ),
    ['unshared_at']: val.unsharedAt == void 0 ? void 0 : val.unsharedAt,
    ['is_password_enabled']: val.isPasswordEnabled,
    ['permissions']:
      val.permissions == void 0
        ? void 0
        : serializeWebLinkSharedLinkPermissionsField(val.permissions),
    ['download_count']: val.downloadCount,
    ['preview_count']: val.previewCount,
  };
}
export function deserializeWebLinkSharedLinkField(
  val: any
): WebLinkSharedLinkField {
  const url: string = val.url;
  const downloadUrl: undefined | string =
    val.download_url == void 0 ? void 0 : val.download_url;
  const vanityUrl: undefined | string =
    val.vanity_url == void 0 ? void 0 : val.vanity_url;
  const vanityName: undefined | string =
    val.vanity_name == void 0 ? void 0 : val.vanity_name;
  const access: undefined | WebLinkSharedLinkAccessField =
    val.access == void 0
      ? void 0
      : deserializeWebLinkSharedLinkAccessField(val.access);
  const effectiveAccess: WebLinkSharedLinkEffectiveAccessField =
    deserializeWebLinkSharedLinkEffectiveAccessField(val.effective_access);
  const effectivePermission: WebLinkSharedLinkEffectivePermissionField =
    deserializeWebLinkSharedLinkEffectivePermissionField(
      val.effective_permission
    );
  const unsharedAt: undefined | string =
    val.unshared_at == void 0 ? void 0 : val.unshared_at;
  const isPasswordEnabled: boolean = val.is_password_enabled;
  const permissions: undefined | WebLinkSharedLinkPermissionsField =
    val.permissions == void 0
      ? void 0
      : deserializeWebLinkSharedLinkPermissionsField(val.permissions);
  const downloadCount: number = val.download_count;
  const previewCount: number = val.preview_count;
  return {
    url: url,
    downloadUrl: downloadUrl,
    vanityUrl: vanityUrl,
    vanityName: vanityName,
    access: access,
    effectiveAccess: effectiveAccess,
    effectivePermission: effectivePermission,
    unsharedAt: unsharedAt,
    isPasswordEnabled: isPasswordEnabled,
    permissions: permissions,
    downloadCount: downloadCount,
    previewCount: previewCount,
  } satisfies WebLinkSharedLinkField;
}
export function serializeWebLinkItemStatusField(
  val: WebLinkItemStatusField
): SerializedData {
  return val;
}
export function deserializeWebLinkItemStatusField(
  val: any
): WebLinkItemStatusField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "WebLinkItemStatusField"';
  }
  if (val == 'active') {
    return 'active';
  }
  if (val == 'trashed') {
    return 'trashed';
  }
  if (val == 'deleted') {
    return 'deleted';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeWebLink(val: WebLink): SerializedData {
  const base: any = serializeWebLinkMini(val);
  if (!sdIsMap(base)) {
    throw 'Expecting a map for "WebLink"';
  }
  return {
    ...base,
    ...{
      ['parent']:
        val.parent == void 0 ? void 0 : serializeFolderMini(val.parent),
      ['description']: val.description == void 0 ? void 0 : val.description,
      ['path_collection']:
        val.pathCollection == void 0
          ? void 0
          : serializeWebLinkPathCollectionField(val.pathCollection),
      ['created_at']: val.createdAt == void 0 ? void 0 : val.createdAt,
      ['modified_at']: val.modifiedAt == void 0 ? void 0 : val.modifiedAt,
      ['trashed_at']: val.trashedAt == void 0 ? void 0 : val.trashedAt,
      ['purged_at']: val.purgedAt == void 0 ? void 0 : val.purgedAt,
      ['created_by']:
        val.createdBy == void 0 ? void 0 : serializeUserMini(val.createdBy),
      ['modified_by']:
        val.modifiedBy == void 0 ? void 0 : serializeUserMini(val.modifiedBy),
      ['owned_by']:
        val.ownedBy == void 0 ? void 0 : serializeUserMini(val.ownedBy),
      ['shared_link']:
        val.sharedLink == void 0
          ? void 0
          : serializeWebLinkSharedLinkField(val.sharedLink),
      ['item_status']:
        val.itemStatus == void 0
          ? void 0
          : serializeWebLinkItemStatusField(val.itemStatus),
    },
  };
}
export function deserializeWebLink(val: any): WebLink {
  const parent: undefined | FolderMini =
    val.parent == void 0 ? void 0 : deserializeFolderMini(val.parent);
  const description: undefined | string =
    val.description == void 0 ? void 0 : val.description;
  const pathCollection: undefined | WebLinkPathCollectionField =
    val.path_collection == void 0
      ? void 0
      : deserializeWebLinkPathCollectionField(val.path_collection);
  const createdAt: undefined | string =
    val.created_at == void 0 ? void 0 : val.created_at;
  const modifiedAt: undefined | string =
    val.modified_at == void 0 ? void 0 : val.modified_at;
  const trashedAt: undefined | string =
    val.trashed_at == void 0 ? void 0 : val.trashed_at;
  const purgedAt: undefined | string =
    val.purged_at == void 0 ? void 0 : val.purged_at;
  const createdBy: undefined | UserMini =
    val.created_by == void 0 ? void 0 : deserializeUserMini(val.created_by);
  const modifiedBy: undefined | UserMini =
    val.modified_by == void 0 ? void 0 : deserializeUserMini(val.modified_by);
  const ownedBy: undefined | UserMini =
    val.owned_by == void 0 ? void 0 : deserializeUserMini(val.owned_by);
  const sharedLink: undefined | WebLinkSharedLinkField =
    val.shared_link == void 0
      ? void 0
      : deserializeWebLinkSharedLinkField(val.shared_link);
  const itemStatus: undefined | WebLinkItemStatusField =
    val.item_status == void 0
      ? void 0
      : deserializeWebLinkItemStatusField(val.item_status);
  const url: undefined | string = val.url == void 0 ? void 0 : val.url;
  const sequenceId: undefined | string =
    val.sequence_id == void 0 ? void 0 : val.sequence_id;
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const id: string = val.id;
  const type: WebLinkBaseTypeField = deserializeWebLinkBaseTypeField(val.type);
  const etag: undefined | string = val.etag == void 0 ? void 0 : val.etag;
  return {
    parent: parent,
    description: description,
    pathCollection: pathCollection,
    createdAt: createdAt,
    modifiedAt: modifiedAt,
    trashedAt: trashedAt,
    purgedAt: purgedAt,
    createdBy: createdBy,
    modifiedBy: modifiedBy,
    ownedBy: ownedBy,
    sharedLink: sharedLink,
    itemStatus: itemStatus,
    url: url,
    sequenceId: sequenceId,
    name: name,
    id: id,
    type: type,
    etag: etag,
  } satisfies WebLink;
}
export function serializeFileFullOrFolderMiniOrWebLink(
  val: FileFullOrFolderMiniOrWebLink
): SerializedData {
  if (val.type == 'file') {
    return serializeFileFull(val);
  }
  if (val.type == 'folder') {
    return serializeFolderMini(val);
  }
  if (val.type == 'web_link') {
    return serializeWebLink(val);
  }
  throw 'unknown type';
}
export function deserializeFileFullOrFolderMiniOrWebLink(
  val: any
): FileFullOrFolderMiniOrWebLink {
  if (!sdIsMap(val)) {
    throw 'Expecting a map for "FileFullOrFolderMiniOrWebLink"';
  }
  if (val.type == 'file') {
    return deserializeFileFull(val);
  }
  if (val.type == 'folder') {
    return deserializeFolderMini(val);
  }
  if (val.type == 'web_link') {
    return deserializeWebLink(val);
  }
  throw 'unknown type';
}
export function serializeItemsOrderDirectionField(
  val: ItemsOrderDirectionField
): SerializedData {
  return val;
}
export function deserializeItemsOrderDirectionField(
  val: any
): ItemsOrderDirectionField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "ItemsOrderDirectionField"';
  }
  if (val == 'ASC') {
    return 'ASC';
  }
  if (val == 'DESC') {
    return 'DESC';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeItemsOrderField(val: ItemsOrderField): SerializedData {
  return {
    ['by']: val.by == void 0 ? void 0 : val.by,
    ['direction']:
      val.direction == void 0
        ? void 0
        : serializeItemsOrderDirectionField(val.direction),
  };
}
export function deserializeItemsOrderField(val: any): ItemsOrderField {
  const by: undefined | string = val.by == void 0 ? void 0 : val.by;
  const direction: undefined | ItemsOrderDirectionField =
    val.direction == void 0
      ? void 0
      : deserializeItemsOrderDirectionField(val.direction);
  return { by: by, direction: direction } satisfies ItemsOrderField;
}
export function serializeItems(val: Items): SerializedData {
  return {
    ['total_count']: val.totalCount == void 0 ? void 0 : val.totalCount,
    ['limit']: val.limit == void 0 ? void 0 : val.limit,
    ['offset']: val.offset == void 0 ? void 0 : val.offset,
    ['order']:
      val.order == void 0
        ? void 0
        : (val.order.map(function (item: ItemsOrderField): any {
            return serializeItemsOrderField(item);
          }) as readonly any[]),
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (item: FileFullOrFolderMiniOrWebLink): any {
            return serializeFileFullOrFolderMiniOrWebLink(item);
          }) as readonly any[]),
  };
}
export function deserializeItems(val: any): Items {
  const totalCount: undefined | number =
    val.total_count == void 0 ? void 0 : val.total_count;
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
  const offset: undefined | number = val.offset == void 0 ? void 0 : val.offset;
  const order: undefined | readonly ItemsOrderField[] =
    val.order == void 0
      ? void 0
      : sdIsList(val.order)
      ? (val.order.map(function (itm: SerializedData): any {
          return deserializeItemsOrderField(itm);
        }) as readonly any[])
      : [];
  const entries: undefined | readonly FileFullOrFolderMiniOrWebLink[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (itm: SerializedData): any {
          return deserializeFileFullOrFolderMiniOrWebLink(itm);
        }) as readonly any[])
      : [];
  return {
    totalCount: totalCount,
    limit: limit,
    offset: offset,
    order: order,
    entries: entries,
  } satisfies Items;
}
export function serializeFolderPathCollectionField(
  val: FolderPathCollectionField
): SerializedData {
  return {
    ['total_count']: val.totalCount,
    ['entries']: val.entries.map(function (item: FolderMini): any {
      return serializeFolderMini(item);
    }) as readonly any[],
  };
}
export function deserializeFolderPathCollectionField(
  val: any
): FolderPathCollectionField {
  const totalCount: number = val.total_count;
  const entries: readonly FolderMini[] = sdIsList(val.entries)
    ? (val.entries.map(function (itm: SerializedData): any {
        return deserializeFolderMini(itm);
      }) as readonly any[])
    : [];
  return {
    totalCount: totalCount,
    entries: entries,
  } satisfies FolderPathCollectionField;
}
export function serializeFolderSharedLinkAccessField(
  val: FolderSharedLinkAccessField
): SerializedData {
  return val;
}
export function deserializeFolderSharedLinkAccessField(
  val: any
): FolderSharedLinkAccessField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "FolderSharedLinkAccessField"';
  }
  if (val == 'open') {
    return 'open';
  }
  if (val == 'company') {
    return 'company';
  }
  if (val == 'collaborators') {
    return 'collaborators';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeFolderSharedLinkEffectiveAccessField(
  val: FolderSharedLinkEffectiveAccessField
): SerializedData {
  return val;
}
export function deserializeFolderSharedLinkEffectiveAccessField(
  val: any
): FolderSharedLinkEffectiveAccessField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "FolderSharedLinkEffectiveAccessField"';
  }
  if (val == 'open') {
    return 'open';
  }
  if (val == 'company') {
    return 'company';
  }
  if (val == 'collaborators') {
    return 'collaborators';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeFolderSharedLinkEffectivePermissionField(
  val: FolderSharedLinkEffectivePermissionField
): SerializedData {
  return val;
}
export function deserializeFolderSharedLinkEffectivePermissionField(
  val: any
): FolderSharedLinkEffectivePermissionField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "FolderSharedLinkEffectivePermissionField"';
  }
  if (val == 'can_edit') {
    return 'can_edit';
  }
  if (val == 'can_download') {
    return 'can_download';
  }
  if (val == 'can_preview') {
    return 'can_preview';
  }
  if (val == 'no_access') {
    return 'no_access';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeFolderSharedLinkPermissionsField(
  val: FolderSharedLinkPermissionsField
): SerializedData {
  return {
    ['can_download']: val.canDownload,
    ['can_preview']: val.canPreview,
    ['can_edit']: val.canEdit,
  };
}
export function deserializeFolderSharedLinkPermissionsField(
  val: any
): FolderSharedLinkPermissionsField {
  const canDownload: boolean = val.can_download;
  const canPreview: boolean = val.can_preview;
  const canEdit: boolean = val.can_edit;
  return {
    canDownload: canDownload,
    canPreview: canPreview,
    canEdit: canEdit,
  } satisfies FolderSharedLinkPermissionsField;
}
export function serializeFolderSharedLinkField(
  val: FolderSharedLinkField
): SerializedData {
  return {
    ['url']: val.url,
    ['download_url']: val.downloadUrl == void 0 ? void 0 : val.downloadUrl,
    ['vanity_url']: val.vanityUrl == void 0 ? void 0 : val.vanityUrl,
    ['vanity_name']: val.vanityName == void 0 ? void 0 : val.vanityName,
    ['access']:
      val.access == void 0
        ? void 0
        : serializeFolderSharedLinkAccessField(val.access),
    ['effective_access']: serializeFolderSharedLinkEffectiveAccessField(
      val.effectiveAccess
    ),
    ['effective_permission']: serializeFolderSharedLinkEffectivePermissionField(
      val.effectivePermission
    ),
    ['unshared_at']: val.unsharedAt == void 0 ? void 0 : val.unsharedAt,
    ['is_password_enabled']: val.isPasswordEnabled,
    ['permissions']:
      val.permissions == void 0
        ? void 0
        : serializeFolderSharedLinkPermissionsField(val.permissions),
    ['download_count']: val.downloadCount,
    ['preview_count']: val.previewCount,
  };
}
export function deserializeFolderSharedLinkField(
  val: any
): FolderSharedLinkField {
  const url: string = val.url;
  const downloadUrl: undefined | string =
    val.download_url == void 0 ? void 0 : val.download_url;
  const vanityUrl: undefined | string =
    val.vanity_url == void 0 ? void 0 : val.vanity_url;
  const vanityName: undefined | string =
    val.vanity_name == void 0 ? void 0 : val.vanity_name;
  const access: undefined | FolderSharedLinkAccessField =
    val.access == void 0
      ? void 0
      : deserializeFolderSharedLinkAccessField(val.access);
  const effectiveAccess: FolderSharedLinkEffectiveAccessField =
    deserializeFolderSharedLinkEffectiveAccessField(val.effective_access);
  const effectivePermission: FolderSharedLinkEffectivePermissionField =
    deserializeFolderSharedLinkEffectivePermissionField(
      val.effective_permission
    );
  const unsharedAt: undefined | string =
    val.unshared_at == void 0 ? void 0 : val.unshared_at;
  const isPasswordEnabled: boolean = val.is_password_enabled;
  const permissions: undefined | FolderSharedLinkPermissionsField =
    val.permissions == void 0
      ? void 0
      : deserializeFolderSharedLinkPermissionsField(val.permissions);
  const downloadCount: number = val.download_count;
  const previewCount: number = val.preview_count;
  return {
    url: url,
    downloadUrl: downloadUrl,
    vanityUrl: vanityUrl,
    vanityName: vanityName,
    access: access,
    effectiveAccess: effectiveAccess,
    effectivePermission: effectivePermission,
    unsharedAt: unsharedAt,
    isPasswordEnabled: isPasswordEnabled,
    permissions: permissions,
    downloadCount: downloadCount,
    previewCount: previewCount,
  } satisfies FolderSharedLinkField;
}
export function serializeFolderFolderUploadEmailAccessField(
  val: FolderFolderUploadEmailAccessField
): SerializedData {
  return val;
}
export function deserializeFolderFolderUploadEmailAccessField(
  val: any
): FolderFolderUploadEmailAccessField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "FolderFolderUploadEmailAccessField"';
  }
  if (val == 'open') {
    return 'open';
  }
  if (val == 'collaborators') {
    return 'collaborators';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeFolderFolderUploadEmailField(
  val: FolderFolderUploadEmailField
): SerializedData {
  return {
    ['access']:
      val.access == void 0
        ? void 0
        : serializeFolderFolderUploadEmailAccessField(val.access),
    ['email']: val.email == void 0 ? void 0 : val.email,
  };
}
export function deserializeFolderFolderUploadEmailField(
  val: any
): FolderFolderUploadEmailField {
  const access: undefined | FolderFolderUploadEmailAccessField =
    val.access == void 0
      ? void 0
      : deserializeFolderFolderUploadEmailAccessField(val.access);
  const email: undefined | string = val.email == void 0 ? void 0 : val.email;
  return {
    access: access,
    email: email,
  } satisfies FolderFolderUploadEmailField;
}
export function serializeFolderItemStatusField(
  val: FolderItemStatusField
): SerializedData {
  return val;
}
export function deserializeFolderItemStatusField(
  val: any
): FolderItemStatusField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "FolderItemStatusField"';
  }
  if (val == 'active') {
    return 'active';
  }
  if (val == 'trashed') {
    return 'trashed';
  }
  if (val == 'deleted') {
    return 'deleted';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeFolder(val: Folder): SerializedData {
  const base: any = serializeFolderMini(val);
  if (!sdIsMap(base)) {
    throw 'Expecting a map for "Folder"';
  }
  return {
    ...base,
    ...{
      ['created_at']: val.createdAt == void 0 ? void 0 : val.createdAt,
      ['modified_at']: val.modifiedAt == void 0 ? void 0 : val.modifiedAt,
      ['description']: val.description == void 0 ? void 0 : val.description,
      ['size']: val.size == void 0 ? void 0 : val.size,
      ['path_collection']:
        val.pathCollection == void 0
          ? void 0
          : serializeFolderPathCollectionField(val.pathCollection),
      ['created_by']:
        val.createdBy == void 0 ? void 0 : serializeUserMini(val.createdBy),
      ['modified_by']:
        val.modifiedBy == void 0 ? void 0 : serializeUserMini(val.modifiedBy),
      ['trashed_at']: val.trashedAt == void 0 ? void 0 : val.trashedAt,
      ['purged_at']: val.purgedAt == void 0 ? void 0 : val.purgedAt,
      ['content_created_at']:
        val.contentCreatedAt == void 0 ? void 0 : val.contentCreatedAt,
      ['content_modified_at']:
        val.contentModifiedAt == void 0 ? void 0 : val.contentModifiedAt,
      ['owned_by']:
        val.ownedBy == void 0 ? void 0 : serializeUserMini(val.ownedBy),
      ['shared_link']:
        val.sharedLink == void 0
          ? void 0
          : serializeFolderSharedLinkField(val.sharedLink),
      ['folder_upload_email']:
        val.folderUploadEmail == void 0
          ? void 0
          : serializeFolderFolderUploadEmailField(val.folderUploadEmail),
      ['parent']:
        val.parent == void 0 ? void 0 : serializeFolderMini(val.parent),
      ['item_status']:
        val.itemStatus == void 0
          ? void 0
          : serializeFolderItemStatusField(val.itemStatus),
      ['item_collection']:
        val.itemCollection == void 0
          ? void 0
          : serializeItems(val.itemCollection),
    },
  };
}
export function deserializeFolder(val: any): Folder {
  const createdAt: undefined | string =
    val.created_at == void 0 ? void 0 : val.created_at;
  const modifiedAt: undefined | string =
    val.modified_at == void 0 ? void 0 : val.modified_at;
  const description: undefined | string =
    val.description == void 0 ? void 0 : val.description;
  const size: undefined | number = val.size == void 0 ? void 0 : val.size;
  const pathCollection: undefined | FolderPathCollectionField =
    val.path_collection == void 0
      ? void 0
      : deserializeFolderPathCollectionField(val.path_collection);
  const createdBy: undefined | UserMini =
    val.created_by == void 0 ? void 0 : deserializeUserMini(val.created_by);
  const modifiedBy: undefined | UserMini =
    val.modified_by == void 0 ? void 0 : deserializeUserMini(val.modified_by);
  const trashedAt: undefined | string =
    val.trashed_at == void 0 ? void 0 : val.trashed_at;
  const purgedAt: undefined | string =
    val.purged_at == void 0 ? void 0 : val.purged_at;
  const contentCreatedAt: undefined | string =
    val.content_created_at == void 0 ? void 0 : val.content_created_at;
  const contentModifiedAt: undefined | string =
    val.content_modified_at == void 0 ? void 0 : val.content_modified_at;
  const ownedBy: undefined | UserMini =
    val.owned_by == void 0 ? void 0 : deserializeUserMini(val.owned_by);
  const sharedLink: undefined | FolderSharedLinkField =
    val.shared_link == void 0
      ? void 0
      : deserializeFolderSharedLinkField(val.shared_link);
  const folderUploadEmail: undefined | FolderFolderUploadEmailField =
    val.folder_upload_email == void 0
      ? void 0
      : deserializeFolderFolderUploadEmailField(val.folder_upload_email);
  const parent: undefined | FolderMini =
    val.parent == void 0 ? void 0 : deserializeFolderMini(val.parent);
  const itemStatus: undefined | FolderItemStatusField =
    val.item_status == void 0
      ? void 0
      : deserializeFolderItemStatusField(val.item_status);
  const itemCollection: undefined | Items =
    val.item_collection == void 0
      ? void 0
      : deserializeItems(val.item_collection);
  const sequenceId: undefined | string =
    val.sequence_id == void 0 ? void 0 : val.sequence_id;
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const id: string = val.id;
  const etag: undefined | string = val.etag == void 0 ? void 0 : val.etag;
  const type: FolderBaseTypeField = deserializeFolderBaseTypeField(val.type);
  return {
    createdAt: createdAt,
    modifiedAt: modifiedAt,
    description: description,
    size: size,
    pathCollection: pathCollection,
    createdBy: createdBy,
    modifiedBy: modifiedBy,
    trashedAt: trashedAt,
    purgedAt: purgedAt,
    contentCreatedAt: contentCreatedAt,
    contentModifiedAt: contentModifiedAt,
    ownedBy: ownedBy,
    sharedLink: sharedLink,
    folderUploadEmail: folderUploadEmail,
    parent: parent,
    itemStatus: itemStatus,
    itemCollection: itemCollection,
    sequenceId: sequenceId,
    name: name,
    id: id,
    etag: etag,
    type: type,
  } satisfies Folder;
}
export function serializeEventSourceOrFileOrFolderOrUser(
  val: EventSourceOrFileOrFolderOrUser
): SerializedData {
  throw "Can't serialize EventSourceOrFileOrFolderOrUser";
}
export function deserializeEventSourceOrFileOrFolderOrUser(
  val: any
): EventSourceOrFileOrFolderOrUser {
  throw "Can't deserialize EventSourceOrFileOrFolderOrUser";
}
export function serializeEventEventTypeField(
  val: EventEventTypeField
): SerializedData {
  return val;
}
export function deserializeEventEventTypeField(val: any): EventEventTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "EventEventTypeField"';
  }
  if (val == 'ACCESS_GRANTED') {
    return 'ACCESS_GRANTED';
  }
  if (val == 'ACCESS_REVOKED') {
    return 'ACCESS_REVOKED';
  }
  if (val == 'ADD_DEVICE_ASSOCIATION') {
    return 'ADD_DEVICE_ASSOCIATION';
  }
  if (val == 'ADD_LOGIN_ACTIVITY_DEVICE') {
    return 'ADD_LOGIN_ACTIVITY_DEVICE';
  }
  if (val == 'ADMIN_LOGIN') {
    return 'ADMIN_LOGIN';
  }
  if (val == 'APPLICATION_CREATED') {
    return 'APPLICATION_CREATED';
  }
  if (val == 'APPLICATION_PUBLIC_KEY_ADDED') {
    return 'APPLICATION_PUBLIC_KEY_ADDED';
  }
  if (val == 'APPLICATION_PUBLIC_KEY_DELETED') {
    return 'APPLICATION_PUBLIC_KEY_DELETED';
  }
  if (val == 'CHANGE_ADMIN_ROLE') {
    return 'CHANGE_ADMIN_ROLE';
  }
  if (val == 'CHANGE_FOLDER_PERMISSION') {
    return 'CHANGE_FOLDER_PERMISSION';
  }
  if (val == 'COLLABORATION_ACCEPT') {
    return 'COLLABORATION_ACCEPT';
  }
  if (val == 'COLLABORATION_EXPIRATION') {
    return 'COLLABORATION_EXPIRATION';
  }
  if (val == 'COLLABORATION_INVITE') {
    return 'COLLABORATION_INVITE';
  }
  if (val == 'COLLABORATION_REMOVE') {
    return 'COLLABORATION_REMOVE';
  }
  if (val == 'COLLABORATION_ROLE_CHANGE') {
    return 'COLLABORATION_ROLE_CHANGE';
  }
  if (val == 'COLLAB_ADD_COLLABORATOR') {
    return 'COLLAB_ADD_COLLABORATOR';
  }
  if (val == 'COLLAB_INVITE_COLLABORATOR') {
    return 'COLLAB_INVITE_COLLABORATOR';
  }
  if (val == 'COLLAB_REMOVE_COLLABORATOR') {
    return 'COLLAB_REMOVE_COLLABORATOR';
  }
  if (val == 'COLLAB_ROLE_CHANGE') {
    return 'COLLAB_ROLE_CHANGE';
  }
  if (val == 'COMMENT_CREATE') {
    return 'COMMENT_CREATE';
  }
  if (val == 'COMMENT_DELETE') {
    return 'COMMENT_DELETE';
  }
  if (val == 'CONTENT_ACCESS') {
    return 'CONTENT_ACCESS';
  }
  if (val == 'CONTENT_WORKFLOW_ABNORMAL_DOWNLOAD_ACTIVITY') {
    return 'CONTENT_WORKFLOW_ABNORMAL_DOWNLOAD_ACTIVITY';
  }
  if (val == 'CONTENT_WORKFLOW_AUTOMATION_ADD') {
    return 'CONTENT_WORKFLOW_AUTOMATION_ADD';
  }
  if (val == 'CONTENT_WORKFLOW_AUTOMATION_DELETE') {
    return 'CONTENT_WORKFLOW_AUTOMATION_DELETE';
  }
  if (val == 'CONTENT_WORKFLOW_POLICY_ADD') {
    return 'CONTENT_WORKFLOW_POLICY_ADD';
  }
  if (val == 'CONTENT_WORKFLOW_SHARING_POLICY_VIOLATION') {
    return 'CONTENT_WORKFLOW_SHARING_POLICY_VIOLATION';
  }
  if (val == 'CONTENT_WORKFLOW_UPLOAD_POLICY_VIOLATION') {
    return 'CONTENT_WORKFLOW_UPLOAD_POLICY_VIOLATION';
  }
  if (val == 'COPY') {
    return 'COPY';
  }
  if (val == 'DATA_RETENTION_CREATE_RETENTION') {
    return 'DATA_RETENTION_CREATE_RETENTION';
  }
  if (val == 'DATA_RETENTION_REMOVE_RETENTION') {
    return 'DATA_RETENTION_REMOVE_RETENTION';
  }
  if (val == 'DELETE') {
    return 'DELETE';
  }
  if (val == 'DELETE_USER') {
    return 'DELETE_USER';
  }
  if (val == 'DEVICE_TRUST_CHECK_FAILED') {
    return 'DEVICE_TRUST_CHECK_FAILED';
  }
  if (val == 'DOWNLOAD') {
    return 'DOWNLOAD';
  }
  if (val == 'EDIT') {
    return 'EDIT';
  }
  if (val == 'EDIT_USER') {
    return 'EDIT_USER';
  }
  if (val == 'EMAIL_ALIAS_CONFIRM') {
    return 'EMAIL_ALIAS_CONFIRM';
  }
  if (val == 'EMAIL_ALIAS_REMOVE') {
    return 'EMAIL_ALIAS_REMOVE';
  }
  if (val == 'ENABLE_TWO_FACTOR_AUTH') {
    return 'ENABLE_TWO_FACTOR_AUTH';
  }
  if (val == 'ENTERPRISE_APP_AUTHORIZATION_UPDATE') {
    return 'ENTERPRISE_APP_AUTHORIZATION_UPDATE';
  }
  if (val == 'FAILED_LOGIN') {
    return 'FAILED_LOGIN';
  }
  if (val == 'FILE_MARKED_MALICIOUS') {
    return 'FILE_MARKED_MALICIOUS';
  }
  if (val == 'FILE_WATERMARKED_DOWNLOAD') {
    return 'FILE_WATERMARKED_DOWNLOAD';
  }
  if (val == 'GROUP_ADD_ITEM') {
    return 'GROUP_ADD_ITEM';
  }
  if (val == 'GROUP_ADD_USER') {
    return 'GROUP_ADD_USER';
  }
  if (val == 'GROUP_CREATION') {
    return 'GROUP_CREATION';
  }
  if (val == 'GROUP_DELETION') {
    return 'GROUP_DELETION';
  }
  if (val == 'GROUP_EDITED') {
    return 'GROUP_EDITED';
  }
  if (val == 'GROUP_REMOVE_ITEM') {
    return 'GROUP_REMOVE_ITEM';
  }
  if (val == 'GROUP_REMOVE_USER') {
    return 'GROUP_REMOVE_USER';
  }
  if (val == 'ITEM_COPY') {
    return 'ITEM_COPY';
  }
  if (val == 'ITEM_CREATE') {
    return 'ITEM_CREATE';
  }
  if (val == 'ITEM_DOWNLOAD') {
    return 'ITEM_DOWNLOAD';
  }
  if (val == 'ITEM_MAKE_CURRENT_VERSION') {
    return 'ITEM_MAKE_CURRENT_VERSION';
  }
  if (val == 'ITEM_MODIFY') {
    return 'ITEM_MODIFY';
  }
  if (val == 'ITEM_MOVE') {
    return 'ITEM_MOVE';
  }
  if (val == 'ITEM_OPEN') {
    return 'ITEM_OPEN';
  }
  if (val == 'ITEM_PREVIEW') {
    return 'ITEM_PREVIEW';
  }
  if (val == 'ITEM_RENAME') {
    return 'ITEM_RENAME';
  }
  if (val == 'ITEM_SHARED') {
    return 'ITEM_SHARED';
  }
  if (val == 'ITEM_SHARED_CREATE') {
    return 'ITEM_SHARED_CREATE';
  }
  if (val == 'ITEM_SHARED_UNSHARE') {
    return 'ITEM_SHARED_UNSHARE';
  }
  if (val == 'ITEM_SHARED_UPDATE') {
    return 'ITEM_SHARED_UPDATE';
  }
  if (val == 'ITEM_SYNC') {
    return 'ITEM_SYNC';
  }
  if (val == 'ITEM_TRASH') {
    return 'ITEM_TRASH';
  }
  if (val == 'ITEM_UNDELETE_VIA_TRASH') {
    return 'ITEM_UNDELETE_VIA_TRASH';
  }
  if (val == 'ITEM_UNSYNC') {
    return 'ITEM_UNSYNC';
  }
  if (val == 'ITEM_UPLOAD') {
    return 'ITEM_UPLOAD';
  }
  if (val == 'LEGAL_HOLD_ASSIGNMENT_CREATE') {
    return 'LEGAL_HOLD_ASSIGNMENT_CREATE';
  }
  if (val == 'LEGAL_HOLD_ASSIGNMENT_DELETE') {
    return 'LEGAL_HOLD_ASSIGNMENT_DELETE';
  }
  if (val == 'LEGAL_HOLD_POLICY_CREATE') {
    return 'LEGAL_HOLD_POLICY_CREATE';
  }
  if (val == 'LEGAL_HOLD_POLICY_DELETE') {
    return 'LEGAL_HOLD_POLICY_DELETE';
  }
  if (val == 'LEGAL_HOLD_POLICY_UPDATE') {
    return 'LEGAL_HOLD_POLICY_UPDATE';
  }
  if (val == 'LOCK') {
    return 'LOCK';
  }
  if (val == 'LOCK_CREATE') {
    return 'LOCK_CREATE';
  }
  if (val == 'LOCK_DESTROY') {
    return 'LOCK_DESTROY';
  }
  if (val == 'LOGIN') {
    return 'LOGIN';
  }
  if (val == 'MASTER_INVITE_ACCEPT') {
    return 'MASTER_INVITE_ACCEPT';
  }
  if (val == 'MASTER_INVITE_REJECT') {
    return 'MASTER_INVITE_REJECT';
  }
  if (val == 'METADATA_INSTANCE_CREATE') {
    return 'METADATA_INSTANCE_CREATE';
  }
  if (val == 'METADATA_INSTANCE_DELETE') {
    return 'METADATA_INSTANCE_DELETE';
  }
  if (val == 'METADATA_INSTANCE_UPDATE') {
    return 'METADATA_INSTANCE_UPDATE';
  }
  if (val == 'METADATA_TEMPLATE_CREATE') {
    return 'METADATA_TEMPLATE_CREATE';
  }
  if (val == 'METADATA_TEMPLATE_DELETE') {
    return 'METADATA_TEMPLATE_DELETE';
  }
  if (val == 'METADATA_TEMPLATE_UPDATE') {
    return 'METADATA_TEMPLATE_UPDATE';
  }
  if (val == 'MOVE') {
    return 'MOVE';
  }
  if (val == 'NEW_USER') {
    return 'NEW_USER';
  }
  if (val == 'PREVIEW') {
    return 'PREVIEW';
  }
  if (val == 'REMOVE_DEVICE_ASSOCIATION') {
    return 'REMOVE_DEVICE_ASSOCIATION';
  }
  if (val == 'REMOVE_LOGIN_ACTIVITY_DEVICE') {
    return 'REMOVE_LOGIN_ACTIVITY_DEVICE';
  }
  if (val == 'RENAME') {
    return 'RENAME';
  }
  if (val == 'RETENTION_POLICY_ASSIGNMENT_ADD') {
    return 'RETENTION_POLICY_ASSIGNMENT_ADD';
  }
  if (val == 'SHARE') {
    return 'SHARE';
  }
  if (val == 'SHARE_EXPIRATION') {
    return 'SHARE_EXPIRATION';
  }
  if (val == 'SHIELD_ALERT') {
    return 'SHIELD_ALERT';
  }
  if (val == 'SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED') {
    return 'SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED';
  }
  if (val == 'SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED_MISSING_JUSTIFICATION') {
    return 'SHIELD_EXTERNAL_COLLAB_ACCESS_BLOCKED_MISSING_JUSTIFICATION';
  }
  if (val == 'SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED') {
    return 'SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED';
  }
  if (val == 'SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED_MISSING_JUSTIFICATION') {
    return 'SHIELD_EXTERNAL_COLLAB_INVITE_BLOCKED_MISSING_JUSTIFICATION';
  }
  if (val == 'SHIELD_JUSTIFICATION_APPROVAL') {
    return 'SHIELD_JUSTIFICATION_APPROVAL';
  }
  if (val == 'SHIELD_SHARED_LINK_ACCESS_BLOCKED') {
    return 'SHIELD_SHARED_LINK_ACCESS_BLOCKED';
  }
  if (val == 'SHIELD_SHARED_LINK_STATUS_RESTRICTED_ON_CREATE') {
    return 'SHIELD_SHARED_LINK_STATUS_RESTRICTED_ON_CREATE';
  }
  if (val == 'SHIELD_SHARED_LINK_STATUS_RESTRICTED_ON_UPDATE') {
    return 'SHIELD_SHARED_LINK_STATUS_RESTRICTED_ON_UPDATE';
  }
  if (val == 'SIGN_DOCUMENT_ASSIGNED') {
    return 'SIGN_DOCUMENT_ASSIGNED';
  }
  if (val == 'SIGN_DOCUMENT_CANCELLED') {
    return 'SIGN_DOCUMENT_CANCELLED';
  }
  if (val == 'SIGN_DOCUMENT_COMPLETED') {
    return 'SIGN_DOCUMENT_COMPLETED';
  }
  if (val == 'SIGN_DOCUMENT_CONVERTED') {
    return 'SIGN_DOCUMENT_CONVERTED';
  }
  if (val == 'SIGN_DOCUMENT_CREATED') {
    return 'SIGN_DOCUMENT_CREATED';
  }
  if (val == 'SIGN_DOCUMENT_DECLINED') {
    return 'SIGN_DOCUMENT_DECLINED';
  }
  if (val == 'SIGN_DOCUMENT_EXPIRED') {
    return 'SIGN_DOCUMENT_EXPIRED';
  }
  if (val == 'SIGN_DOCUMENT_SIGNED') {
    return 'SIGN_DOCUMENT_SIGNED';
  }
  if (val == 'SIGN_DOCUMENT_VIEWED_BY_SIGNED') {
    return 'SIGN_DOCUMENT_VIEWED_BY_SIGNED';
  }
  if (val == 'SIGNER_DOWNLOADED') {
    return 'SIGNER_DOWNLOADED';
  }
  if (val == 'SIGNER_FORWARDED') {
    return 'SIGNER_FORWARDED';
  }
  if (val == 'STORAGE_EXPIRATION') {
    return 'STORAGE_EXPIRATION';
  }
  if (val == 'TAG_ITEM_CREATE') {
    return 'TAG_ITEM_CREATE';
  }
  if (val == 'TASK_ASSIGNMENT_CREATE') {
    return 'TASK_ASSIGNMENT_CREATE';
  }
  if (val == 'TASK_ASSIGNMENT_DELETE') {
    return 'TASK_ASSIGNMENT_DELETE';
  }
  if (val == 'TASK_ASSIGNMENT_UPDATE') {
    return 'TASK_ASSIGNMENT_UPDATE';
  }
  if (val == 'TASK_CREATE') {
    return 'TASK_CREATE';
  }
  if (val == 'TASK_UPDATE') {
    return 'TASK_UPDATE';
  }
  if (val == 'TERMS_OF_SERVICE_ACCEPT') {
    return 'TERMS_OF_SERVICE_ACCEPT';
  }
  if (val == 'TERMS_OF_SERVICE_REJECT') {
    return 'TERMS_OF_SERVICE_REJECT';
  }
  if (val == 'UNDELETE') {
    return 'UNDELETE';
  }
  if (val == 'UNLOCK') {
    return 'UNLOCK';
  }
  if (val == 'UNSHARE') {
    return 'UNSHARE';
  }
  if (val == 'UPDATE_COLLABORATION_EXPIRATION') {
    return 'UPDATE_COLLABORATION_EXPIRATION';
  }
  if (val == 'UPDATE_SHARE_EXPIRATION') {
    return 'UPDATE_SHARE_EXPIRATION';
  }
  if (val == 'UPLOAD') {
    return 'UPLOAD';
  }
  if (val == 'USER_AUTHENTICATE_OAUTH2_ACCESS_TOKEN_CREATE') {
    return 'USER_AUTHENTICATE_OAUTH2_ACCESS_TOKEN_CREATE';
  }
  if (val == 'WATERMARK_LABEL_CREATE') {
    return 'WATERMARK_LABEL_CREATE';
  }
  if (val == 'WATERMARK_LABEL_DELETE') {
    return 'WATERMARK_LABEL_DELETE';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeEventAdditionalDetailsField(
  val: EventAdditionalDetailsField
): SerializedData {
  return {};
}
export function deserializeEventAdditionalDetailsField(
  val: any
): EventAdditionalDetailsField {
  return {} satisfies EventAdditionalDetailsField;
}
export function serializeEvent(val: Event): SerializedData {
  return {
    ['type']: val.type == void 0 ? void 0 : val.type,
    ['created_at']: val.createdAt == void 0 ? void 0 : val.createdAt,
    ['recorded_at']: val.recordedAt == void 0 ? void 0 : val.recordedAt,
    ['event_id']: val.eventId == void 0 ? void 0 : val.eventId,
    ['created_by']:
      val.createdBy == void 0 ? void 0 : serializeUserMini(val.createdBy),
    ['event_type']:
      val.eventType == void 0
        ? void 0
        : serializeEventEventTypeField(val.eventType),
    ['session_id']: val.sessionId == void 0 ? void 0 : val.sessionId,
    ['source']:
      val.source == void 0
        ? void 0
        : serializeEventSourceOrFileOrFolderOrUser(val.source),
    ['additional_details']:
      val.additionalDetails == void 0
        ? void 0
        : serializeEventAdditionalDetailsField(val.additionalDetails),
  };
}
export function deserializeEvent(val: any): Event {
  const type: undefined | string = val.type == void 0 ? void 0 : val.type;
  const createdAt: undefined | string =
    val.created_at == void 0 ? void 0 : val.created_at;
  const recordedAt: undefined | string =
    val.recorded_at == void 0 ? void 0 : val.recorded_at;
  const eventId: undefined | string =
    val.event_id == void 0 ? void 0 : val.event_id;
  const createdBy: undefined | UserMini =
    val.created_by == void 0 ? void 0 : deserializeUserMini(val.created_by);
  const eventType: undefined | EventEventTypeField =
    val.event_type == void 0
      ? void 0
      : deserializeEventEventTypeField(val.event_type);
  const sessionId: undefined | string =
    val.session_id == void 0 ? void 0 : val.session_id;
  const source: undefined | EventSourceOrFileOrFolderOrUser =
    val.source == void 0
      ? void 0
      : deserializeEventSourceOrFileOrFolderOrUser(val.source);
  const additionalDetails: undefined | EventAdditionalDetailsField =
    val.additional_details == void 0
      ? void 0
      : deserializeEventAdditionalDetailsField(val.additional_details);
  return {
    type: type,
    createdAt: createdAt,
    recordedAt: recordedAt,
    eventId: eventId,
    createdBy: createdBy,
    eventType: eventType,
    sessionId: sessionId,
    source: source,
    additionalDetails: additionalDetails,
  } satisfies Event;
}
export function serializeEvents(val: Events): SerializedData {
  return {
    ['chunk_size']: val.chunkSize == void 0 ? void 0 : val.chunkSize,
    ['next_stream_position']:
      val.nextStreamPosition == void 0 ? void 0 : val.nextStreamPosition,
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (item: Event): any {
            return serializeEvent(item);
          }) as readonly any[]),
  };
}
export function deserializeEvents(val: any): Events {
  const chunkSize: undefined | number =
    val.chunk_size == void 0 ? void 0 : val.chunk_size;
  const nextStreamPosition: undefined | string =
    val.next_stream_position == void 0 ? void 0 : val.next_stream_position;
  const entries: undefined | readonly Event[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (itm: SerializedData): any {
          return deserializeEvent(itm);
        }) as readonly any[])
      : [];
  return {
    chunkSize: chunkSize,
    nextStreamPosition: nextStreamPosition,
    entries: entries,
  } satisfies Events;
}
export function serializeFileOrFolderOrWebLink(
  val: FileOrFolderOrWebLink
): SerializedData {
  if (val.type == 'file') {
    return serializeFile(val);
  }
  if (val.type == 'folder') {
    return serializeFolder(val);
  }
  if (val.type == 'web_link') {
    return serializeWebLink(val);
  }
  throw 'unknown type';
}
export function deserializeFileOrFolderOrWebLink(
  val: any
): FileOrFolderOrWebLink {
  if (!sdIsMap(val)) {
    throw 'Expecting a map for "FileOrFolderOrWebLink"';
  }
  if (val.type == 'file') {
    return deserializeFile(val);
  }
  if (val.type == 'folder') {
    return deserializeFolder(val);
  }
  if (val.type == 'web_link') {
    return deserializeWebLink(val);
  }
  throw 'unknown type';
}
export function serializeLegalHoldPolicyAssignment(
  val: LegalHoldPolicyAssignment
): SerializedData {
  const base: any = serializeLegalHoldPolicyAssignmentBase(val);
  if (!sdIsMap(base)) {
    throw 'Expecting a map for "LegalHoldPolicyAssignment"';
  }
  return {
    ...base,
    ...{
      ['legal_hold_policy']:
        val.legalHoldPolicy == void 0
          ? void 0
          : serializeLegalHoldPolicyMini(val.legalHoldPolicy),
      ['assigned_to']:
        val.assignedTo == void 0
          ? void 0
          : serializeFileOrFolderOrWebLink(val.assignedTo),
      ['assigned_by']:
        val.assignedBy == void 0 ? void 0 : serializeUserMini(val.assignedBy),
      ['assigned_at']: val.assignedAt == void 0 ? void 0 : val.assignedAt,
      ['deleted_at']: val.deletedAt == void 0 ? void 0 : val.deletedAt,
    },
  };
}
export function deserializeLegalHoldPolicyAssignment(
  val: any
): LegalHoldPolicyAssignment {
  const legalHoldPolicy: undefined | LegalHoldPolicyMini =
    val.legal_hold_policy == void 0
      ? void 0
      : deserializeLegalHoldPolicyMini(val.legal_hold_policy);
  const assignedTo: undefined | FileOrFolderOrWebLink =
    val.assigned_to == void 0
      ? void 0
      : deserializeFileOrFolderOrWebLink(val.assigned_to);
  const assignedBy: undefined | UserMini =
    val.assigned_by == void 0 ? void 0 : deserializeUserMini(val.assigned_by);
  const assignedAt: undefined | string =
    val.assigned_at == void 0 ? void 0 : val.assigned_at;
  const deletedAt: undefined | string =
    val.deleted_at == void 0 ? void 0 : val.deleted_at;
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | LegalHoldPolicyAssignmentBaseTypeField =
    val.type == void 0
      ? void 0
      : deserializeLegalHoldPolicyAssignmentBaseTypeField(val.type);
  return {
    legalHoldPolicy: legalHoldPolicy,
    assignedTo: assignedTo,
    assignedBy: assignedBy,
    assignedAt: assignedAt,
    deletedAt: deletedAt,
    id: id,
    type: type,
  } satisfies LegalHoldPolicyAssignment;
}
export function serializeLegalHoldPolicyAssignments(
  val: LegalHoldPolicyAssignments
): SerializedData {
  return {
    ['limit']: val.limit == void 0 ? void 0 : val.limit,
    ['next_marker']: val.nextMarker == void 0 ? void 0 : val.nextMarker,
    ['prev_marker']: val.prevMarker == void 0 ? void 0 : val.prevMarker,
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (item: LegalHoldPolicyAssignment): any {
            return serializeLegalHoldPolicyAssignment(item);
          }) as readonly any[]),
  };
}
export function deserializeLegalHoldPolicyAssignments(
  val: any
): LegalHoldPolicyAssignments {
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
  const nextMarker: undefined | string =
    val.next_marker == void 0 ? void 0 : val.next_marker;
  const prevMarker: undefined | string =
    val.prev_marker == void 0 ? void 0 : val.prev_marker;
  const entries: undefined | readonly LegalHoldPolicyAssignment[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (itm: SerializedData): any {
          return deserializeLegalHoldPolicyAssignment(itm);
        }) as readonly any[])
      : [];
  return {
    limit: limit,
    nextMarker: nextMarker,
    prevMarker: prevMarker,
    entries: entries,
  } satisfies LegalHoldPolicyAssignments;
}
export function serializeFileVersionLegalHoldTypeField(
  val: FileVersionLegalHoldTypeField
): SerializedData {
  return val;
}
export function deserializeFileVersionLegalHoldTypeField(
  val: any
): FileVersionLegalHoldTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "FileVersionLegalHoldTypeField"';
  }
  if (val == 'file_version_legal_hold') {
    return 'file_version_legal_hold';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeFileVersionLegalHold(
  val: FileVersionLegalHold
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0
        ? void 0
        : serializeFileVersionLegalHoldTypeField(val.type),
    ['file_version']:
      val.fileVersion == void 0
        ? void 0
        : serializeFileVersionMini(val.fileVersion),
    ['file']: val.file == void 0 ? void 0 : serializeFileMini(val.file),
    ['legal_hold_policy_assignments']:
      val.legalHoldPolicyAssignments == void 0
        ? void 0
        : (val.legalHoldPolicyAssignments.map(function (
            item: LegalHoldPolicyAssignment
          ): any {
            return serializeLegalHoldPolicyAssignment(item);
          }) as readonly any[]),
    ['deleted_at']: val.deletedAt == void 0 ? void 0 : val.deletedAt,
  };
}
export function deserializeFileVersionLegalHold(
  val: any
): FileVersionLegalHold {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | FileVersionLegalHoldTypeField =
    val.type == void 0
      ? void 0
      : deserializeFileVersionLegalHoldTypeField(val.type);
  const fileVersion: undefined | FileVersionMini =
    val.file_version == void 0
      ? void 0
      : deserializeFileVersionMini(val.file_version);
  const file: undefined | FileMini =
    val.file == void 0 ? void 0 : deserializeFileMini(val.file);
  const legalHoldPolicyAssignments:
    | undefined
    | readonly LegalHoldPolicyAssignment[] =
    val.legal_hold_policy_assignments == void 0
      ? void 0
      : sdIsList(val.legal_hold_policy_assignments)
      ? (val.legal_hold_policy_assignments.map(function (
          itm: SerializedData
        ): any {
          return deserializeLegalHoldPolicyAssignment(itm);
        }) as readonly any[])
      : [];
  const deletedAt: undefined | string =
    val.deleted_at == void 0 ? void 0 : val.deleted_at;
  return {
    id: id,
    type: type,
    fileVersion: fileVersion,
    file: file,
    legalHoldPolicyAssignments: legalHoldPolicyAssignments,
    deletedAt: deletedAt,
  } satisfies FileVersionLegalHold;
}
export function serializeFileVersionLegalHolds(
  val: FileVersionLegalHolds
): SerializedData {
  return {
    ['limit']: val.limit == void 0 ? void 0 : val.limit,
    ['next_marker']: val.nextMarker == void 0 ? void 0 : val.nextMarker,
    ['prev_marker']: val.prevMarker == void 0 ? void 0 : val.prevMarker,
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (item: FileVersionLegalHold): any {
            return serializeFileVersionLegalHold(item);
          }) as readonly any[]),
  };
}
export function deserializeFileVersionLegalHolds(
  val: any
): FileVersionLegalHolds {
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
  const nextMarker: undefined | string =
    val.next_marker == void 0 ? void 0 : val.next_marker;
  const prevMarker: undefined | string =
    val.prev_marker == void 0 ? void 0 : val.prev_marker;
  const entries: undefined | readonly FileVersionLegalHold[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (itm: SerializedData): any {
          return deserializeFileVersionLegalHold(itm);
        }) as readonly any[])
      : [];
  return {
    limit: limit,
    nextMarker: nextMarker,
    prevMarker: prevMarker,
    entries: entries,
  } satisfies FileVersionLegalHolds;
}
export function serializeCollaborationTypeField(
  val: CollaborationTypeField
): SerializedData {
  return val;
}
export function deserializeCollaborationTypeField(
  val: any
): CollaborationTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "CollaborationTypeField"';
  }
  if (val == 'collaboration') {
    return 'collaboration';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCollaborationRoleField(
  val: CollaborationRoleField
): SerializedData {
  return val;
}
export function deserializeCollaborationRoleField(
  val: any
): CollaborationRoleField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "CollaborationRoleField"';
  }
  if (val == 'editor') {
    return 'editor';
  }
  if (val == 'viewer') {
    return 'viewer';
  }
  if (val == 'previewer') {
    return 'previewer';
  }
  if (val == 'uploader') {
    return 'uploader';
  }
  if (val == 'previewer uploader') {
    return 'previewer uploader';
  }
  if (val == 'viewer uploader') {
    return 'viewer uploader';
  }
  if (val == 'co-owner') {
    return 'co-owner';
  }
  if (val == 'owner') {
    return 'owner';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCollaborationStatusField(
  val: CollaborationStatusField
): SerializedData {
  return val;
}
export function deserializeCollaborationStatusField(
  val: any
): CollaborationStatusField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "CollaborationStatusField"';
  }
  if (val == 'accepted') {
    return 'accepted';
  }
  if (val == 'pending') {
    return 'pending';
  }
  if (val == 'rejected') {
    return 'rejected';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCollaborationAcceptanceRequirementsStatusTermsOfServiceRequirementField(
  val: CollaborationAcceptanceRequirementsStatusTermsOfServiceRequirementField
): SerializedData {
  return {
    ['is_accepted']: val.isAccepted == void 0 ? void 0 : val.isAccepted,
    ['terms_of_service']:
      val.termsOfService == void 0
        ? void 0
        : serializeTermsOfServiceBase(val.termsOfService),
  };
}
export function deserializeCollaborationAcceptanceRequirementsStatusTermsOfServiceRequirementField(
  val: any
): CollaborationAcceptanceRequirementsStatusTermsOfServiceRequirementField {
  const isAccepted: undefined | boolean =
    val.is_accepted == void 0 ? void 0 : val.is_accepted;
  const termsOfService: undefined | TermsOfServiceBase =
    val.terms_of_service == void 0
      ? void 0
      : deserializeTermsOfServiceBase(val.terms_of_service);
  return {
    isAccepted: isAccepted,
    termsOfService: termsOfService,
  } satisfies CollaborationAcceptanceRequirementsStatusTermsOfServiceRequirementField;
}
export function serializeCollaborationAcceptanceRequirementsStatusStrongPasswordRequirementField(
  val: CollaborationAcceptanceRequirementsStatusStrongPasswordRequirementField
): SerializedData {
  return {
    ['enterprise_has_strong_password_required_for_external_users']:
      val.enterpriseHasStrongPasswordRequiredForExternalUsers == void 0
        ? void 0
        : val.enterpriseHasStrongPasswordRequiredForExternalUsers,
    ['user_has_strong_password']:
      val.userHasStrongPassword == void 0 ? void 0 : val.userHasStrongPassword,
  };
}
export function deserializeCollaborationAcceptanceRequirementsStatusStrongPasswordRequirementField(
  val: any
): CollaborationAcceptanceRequirementsStatusStrongPasswordRequirementField {
  const enterpriseHasStrongPasswordRequiredForExternalUsers:
    | undefined
    | boolean =
    val.enterprise_has_strong_password_required_for_external_users == void 0
      ? void 0
      : val.enterprise_has_strong_password_required_for_external_users;
  const userHasStrongPassword: undefined | boolean =
    val.user_has_strong_password == void 0
      ? void 0
      : val.user_has_strong_password;
  return {
    enterpriseHasStrongPasswordRequiredForExternalUsers:
      enterpriseHasStrongPasswordRequiredForExternalUsers,
    userHasStrongPassword: userHasStrongPassword,
  } satisfies CollaborationAcceptanceRequirementsStatusStrongPasswordRequirementField;
}
export function serializeCollaborationAcceptanceRequirementsStatusTwoFactorAuthenticationRequirementField(
  val: CollaborationAcceptanceRequirementsStatusTwoFactorAuthenticationRequirementField
): SerializedData {
  return {
    ['enterprise_has_two_factor_auth_enabled']:
      val.enterpriseHasTwoFactorAuthEnabled == void 0
        ? void 0
        : val.enterpriseHasTwoFactorAuthEnabled,
    ['user_has_two_factor_authentication_enabled']:
      val.userHasTwoFactorAuthenticationEnabled == void 0
        ? void 0
        : val.userHasTwoFactorAuthenticationEnabled,
  };
}
export function deserializeCollaborationAcceptanceRequirementsStatusTwoFactorAuthenticationRequirementField(
  val: any
): CollaborationAcceptanceRequirementsStatusTwoFactorAuthenticationRequirementField {
  const enterpriseHasTwoFactorAuthEnabled: undefined | boolean =
    val.enterprise_has_two_factor_auth_enabled == void 0
      ? void 0
      : val.enterprise_has_two_factor_auth_enabled;
  const userHasTwoFactorAuthenticationEnabled: undefined | boolean =
    val.user_has_two_factor_authentication_enabled == void 0
      ? void 0
      : val.user_has_two_factor_authentication_enabled;
  return {
    enterpriseHasTwoFactorAuthEnabled: enterpriseHasTwoFactorAuthEnabled,
    userHasTwoFactorAuthenticationEnabled:
      userHasTwoFactorAuthenticationEnabled,
  } satisfies CollaborationAcceptanceRequirementsStatusTwoFactorAuthenticationRequirementField;
}
export function serializeCollaborationAcceptanceRequirementsStatusField(
  val: CollaborationAcceptanceRequirementsStatusField
): SerializedData {
  return {
    ['terms_of_service_requirement']:
      val.termsOfServiceRequirement == void 0
        ? void 0
        : serializeCollaborationAcceptanceRequirementsStatusTermsOfServiceRequirementField(
            val.termsOfServiceRequirement
          ),
    ['strong_password_requirement']:
      val.strongPasswordRequirement == void 0
        ? void 0
        : serializeCollaborationAcceptanceRequirementsStatusStrongPasswordRequirementField(
            val.strongPasswordRequirement
          ),
    ['two_factor_authentication_requirement']:
      val.twoFactorAuthenticationRequirement == void 0
        ? void 0
        : serializeCollaborationAcceptanceRequirementsStatusTwoFactorAuthenticationRequirementField(
            val.twoFactorAuthenticationRequirement
          ),
  };
}
export function deserializeCollaborationAcceptanceRequirementsStatusField(
  val: any
): CollaborationAcceptanceRequirementsStatusField {
  const termsOfServiceRequirement:
    | undefined
    | CollaborationAcceptanceRequirementsStatusTermsOfServiceRequirementField =
    val.terms_of_service_requirement == void 0
      ? void 0
      : deserializeCollaborationAcceptanceRequirementsStatusTermsOfServiceRequirementField(
          val.terms_of_service_requirement
        );
  const strongPasswordRequirement:
    | undefined
    | CollaborationAcceptanceRequirementsStatusStrongPasswordRequirementField =
    val.strong_password_requirement == void 0
      ? void 0
      : deserializeCollaborationAcceptanceRequirementsStatusStrongPasswordRequirementField(
          val.strong_password_requirement
        );
  const twoFactorAuthenticationRequirement:
    | undefined
    | CollaborationAcceptanceRequirementsStatusTwoFactorAuthenticationRequirementField =
    val.two_factor_authentication_requirement == void 0
      ? void 0
      : deserializeCollaborationAcceptanceRequirementsStatusTwoFactorAuthenticationRequirementField(
          val.two_factor_authentication_requirement
        );
  return {
    termsOfServiceRequirement: termsOfServiceRequirement,
    strongPasswordRequirement: strongPasswordRequirement,
    twoFactorAuthenticationRequirement: twoFactorAuthenticationRequirement,
  } satisfies CollaborationAcceptanceRequirementsStatusField;
}
export function serializeCollaboration(val: Collaboration): SerializedData {
  return {
    ['id']: val.id,
    ['type']: serializeCollaborationTypeField(val.type),
    ['item']:
      val.item == void 0 ? void 0 : serializeFileOrFolderOrWebLink(val.item),
    ['accessible_by']:
      val.accessibleBy == void 0
        ? void 0
        : serializeGroupMiniOrUserCollaborations(val.accessibleBy),
    ['invite_email']: val.inviteEmail == void 0 ? void 0 : val.inviteEmail,
    ['role']:
      val.role == void 0 ? void 0 : serializeCollaborationRoleField(val.role),
    ['expires_at']: val.expiresAt == void 0 ? void 0 : val.expiresAt,
    ['is_access_only']: val.isAccessOnly == void 0 ? void 0 : val.isAccessOnly,
    ['status']:
      val.status == void 0
        ? void 0
        : serializeCollaborationStatusField(val.status),
    ['acknowledged_at']:
      val.acknowledgedAt == void 0 ? void 0 : val.acknowledgedAt,
    ['created_by']:
      val.createdBy == void 0
        ? void 0
        : serializeUserCollaborations(val.createdBy),
    ['created_at']: val.createdAt == void 0 ? void 0 : val.createdAt,
    ['modified_at']: val.modifiedAt == void 0 ? void 0 : val.modifiedAt,
    ['acceptance_requirements_status']:
      val.acceptanceRequirementsStatus == void 0
        ? void 0
        : serializeCollaborationAcceptanceRequirementsStatusField(
            val.acceptanceRequirementsStatus
          ),
  };
}
export function deserializeCollaboration(val: any): Collaboration {
  const id: string = val.id;
  const type: CollaborationTypeField = deserializeCollaborationTypeField(
    val.type
  );
  const item: undefined | FileOrFolderOrWebLink =
    val.item == void 0 ? void 0 : deserializeFileOrFolderOrWebLink(val.item);
  const accessibleBy: undefined | GroupMiniOrUserCollaborations =
    val.accessible_by == void 0
      ? void 0
      : deserializeGroupMiniOrUserCollaborations(val.accessible_by);
  const inviteEmail: undefined | string =
    val.invite_email == void 0 ? void 0 : val.invite_email;
  const role: undefined | CollaborationRoleField =
    val.role == void 0 ? void 0 : deserializeCollaborationRoleField(val.role);
  const expiresAt: undefined | string =
    val.expires_at == void 0 ? void 0 : val.expires_at;
  const isAccessOnly: undefined | boolean =
    val.is_access_only == void 0 ? void 0 : val.is_access_only;
  const status: undefined | CollaborationStatusField =
    val.status == void 0
      ? void 0
      : deserializeCollaborationStatusField(val.status);
  const acknowledgedAt: undefined | string =
    val.acknowledged_at == void 0 ? void 0 : val.acknowledged_at;
  const createdBy: undefined | UserCollaborations =
    val.created_by == void 0
      ? void 0
      : deserializeUserCollaborations(val.created_by);
  const createdAt: undefined | string =
    val.created_at == void 0 ? void 0 : val.created_at;
  const modifiedAt: undefined | string =
    val.modified_at == void 0 ? void 0 : val.modified_at;
  const acceptanceRequirementsStatus:
    | undefined
    | CollaborationAcceptanceRequirementsStatusField =
    val.acceptance_requirements_status == void 0
      ? void 0
      : deserializeCollaborationAcceptanceRequirementsStatusField(
          val.acceptance_requirements_status
        );
  return {
    id: id,
    type: type,
    item: item,
    accessibleBy: accessibleBy,
    inviteEmail: inviteEmail,
    role: role,
    expiresAt: expiresAt,
    isAccessOnly: isAccessOnly,
    status: status,
    acknowledgedAt: acknowledgedAt,
    createdBy: createdBy,
    createdAt: createdAt,
    modifiedAt: modifiedAt,
    acceptanceRequirementsStatus: acceptanceRequirementsStatus,
  } satisfies Collaboration;
}
export function serializeCollaborationsOrderDirectionField(
  val: CollaborationsOrderDirectionField
): SerializedData {
  return val;
}
export function deserializeCollaborationsOrderDirectionField(
  val: any
): CollaborationsOrderDirectionField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "CollaborationsOrderDirectionField"';
  }
  if (val == 'ASC') {
    return 'ASC';
  }
  if (val == 'DESC') {
    return 'DESC';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCollaborationsOrderField(
  val: CollaborationsOrderField
): SerializedData {
  return {
    ['by']: val.by == void 0 ? void 0 : val.by,
    ['direction']:
      val.direction == void 0
        ? void 0
        : serializeCollaborationsOrderDirectionField(val.direction),
  };
}
export function deserializeCollaborationsOrderField(
  val: any
): CollaborationsOrderField {
  const by: undefined | string = val.by == void 0 ? void 0 : val.by;
  const direction: undefined | CollaborationsOrderDirectionField =
    val.direction == void 0
      ? void 0
      : deserializeCollaborationsOrderDirectionField(val.direction);
  return { by: by, direction: direction } satisfies CollaborationsOrderField;
}
export function serializeCollaborations(val: Collaborations): SerializedData {
  return {
    ['total_count']: val.totalCount == void 0 ? void 0 : val.totalCount,
    ['limit']: val.limit == void 0 ? void 0 : val.limit,
    ['offset']: val.offset == void 0 ? void 0 : val.offset,
    ['order']:
      val.order == void 0
        ? void 0
        : (val.order.map(function (item: CollaborationsOrderField): any {
            return serializeCollaborationsOrderField(item);
          }) as readonly any[]),
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (item: Collaboration): any {
            return serializeCollaboration(item);
          }) as readonly any[]),
  };
}
export function deserializeCollaborations(val: any): Collaborations {
  const totalCount: undefined | number =
    val.total_count == void 0 ? void 0 : val.total_count;
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
  const offset: undefined | number = val.offset == void 0 ? void 0 : val.offset;
  const order: undefined | readonly CollaborationsOrderField[] =
    val.order == void 0
      ? void 0
      : sdIsList(val.order)
      ? (val.order.map(function (itm: SerializedData): any {
          return deserializeCollaborationsOrderField(itm);
        }) as readonly any[])
      : [];
  const entries: undefined | readonly Collaboration[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (itm: SerializedData): any {
          return deserializeCollaboration(itm);
        }) as readonly any[])
      : [];
  return {
    totalCount: totalCount,
    limit: limit,
    offset: offset,
    order: order,
    entries: entries,
  } satisfies Collaborations;
}
export function serializeFileOrFolder(val: FileOrFolder): SerializedData {
  if (val.type == 'file') {
    return serializeFile(val);
  }
  if (val.type == 'folder') {
    return serializeFolder(val);
  }
  throw 'unknown type';
}
export function deserializeFileOrFolder(val: any): FileOrFolder {
  if (!sdIsMap(val)) {
    throw 'Expecting a map for "FileOrFolder"';
  }
  if (val.type == 'file') {
    return deserializeFile(val);
  }
  if (val.type == 'folder') {
    return deserializeFolder(val);
  }
  throw 'unknown type';
}
export function serializeMetadataQueryResults(
  val: MetadataQueryResults
): SerializedData {
  return {
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (item: FileOrFolder): any {
            return serializeFileOrFolder(item);
          }) as readonly any[]),
    ['limit']: val.limit == void 0 ? void 0 : val.limit,
    ['next_marker']: val.nextMarker == void 0 ? void 0 : val.nextMarker,
  };
}
export function deserializeMetadataQueryResults(
  val: any
): MetadataQueryResults {
  const entries: undefined | readonly FileOrFolder[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (itm: SerializedData): any {
          return deserializeFileOrFolder(itm);
        }) as readonly any[])
      : [];
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
  const nextMarker: undefined | string =
    val.next_marker == void 0 ? void 0 : val.next_marker;
  return {
    entries: entries,
    limit: limit,
    nextMarker: nextMarker,
  } satisfies MetadataQueryResults;
}
export function serializeWebhookInvocationTypeField(
  val: WebhookInvocationTypeField
): SerializedData {
  return val;
}
export function deserializeWebhookInvocationTypeField(
  val: any
): WebhookInvocationTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "WebhookInvocationTypeField"';
  }
  if (val == 'webhook_event') {
    return 'webhook_event';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeWebhookInvocationTriggerField(
  val: WebhookInvocationTriggerField
): SerializedData {
  return val;
}
export function deserializeWebhookInvocationTriggerField(
  val: any
): WebhookInvocationTriggerField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "WebhookInvocationTriggerField"';
  }
  if (val == 'FILE.UPLOADED') {
    return 'FILE.UPLOADED';
  }
  if (val == 'FILE.PREVIEWED') {
    return 'FILE.PREVIEWED';
  }
  if (val == 'FILE.DOWNLOADED') {
    return 'FILE.DOWNLOADED';
  }
  if (val == 'FILE.TRASHED') {
    return 'FILE.TRASHED';
  }
  if (val == 'FILE.DELETED') {
    return 'FILE.DELETED';
  }
  if (val == 'FILE.RESTORED') {
    return 'FILE.RESTORED';
  }
  if (val == 'FILE.COPIED') {
    return 'FILE.COPIED';
  }
  if (val == 'FILE.MOVED') {
    return 'FILE.MOVED';
  }
  if (val == 'FILE.LOCKED') {
    return 'FILE.LOCKED';
  }
  if (val == 'FILE.UNLOCKED') {
    return 'FILE.UNLOCKED';
  }
  if (val == 'FILE.RENAMED') {
    return 'FILE.RENAMED';
  }
  if (val == 'COMMENT.CREATED') {
    return 'COMMENT.CREATED';
  }
  if (val == 'COMMENT.UPDATED') {
    return 'COMMENT.UPDATED';
  }
  if (val == 'COMMENT.DELETED') {
    return 'COMMENT.DELETED';
  }
  if (val == 'TASK_ASSIGNMENT.CREATED') {
    return 'TASK_ASSIGNMENT.CREATED';
  }
  if (val == 'TASK_ASSIGNMENT.UPDATED') {
    return 'TASK_ASSIGNMENT.UPDATED';
  }
  if (val == 'METADATA_INSTANCE.CREATED') {
    return 'METADATA_INSTANCE.CREATED';
  }
  if (val == 'METADATA_INSTANCE.UPDATED') {
    return 'METADATA_INSTANCE.UPDATED';
  }
  if (val == 'METADATA_INSTANCE.DELETED') {
    return 'METADATA_INSTANCE.DELETED';
  }
  if (val == 'FOLDER.CREATED') {
    return 'FOLDER.CREATED';
  }
  if (val == 'FOLDER.RENAMED') {
    return 'FOLDER.RENAMED';
  }
  if (val == 'FOLDER.DOWNLOADED') {
    return 'FOLDER.DOWNLOADED';
  }
  if (val == 'FOLDER.RESTORED') {
    return 'FOLDER.RESTORED';
  }
  if (val == 'FOLDER.DELETED') {
    return 'FOLDER.DELETED';
  }
  if (val == 'FOLDER.COPIED') {
    return 'FOLDER.COPIED';
  }
  if (val == 'FOLDER.MOVED') {
    return 'FOLDER.MOVED';
  }
  if (val == 'FOLDER.TRASHED') {
    return 'FOLDER.TRASHED';
  }
  if (val == 'WEBHOOK.DELETED') {
    return 'WEBHOOK.DELETED';
  }
  if (val == 'COLLABORATION.CREATED') {
    return 'COLLABORATION.CREATED';
  }
  if (val == 'COLLABORATION.ACCEPTED') {
    return 'COLLABORATION.ACCEPTED';
  }
  if (val == 'COLLABORATION.REJECTED') {
    return 'COLLABORATION.REJECTED';
  }
  if (val == 'COLLABORATION.REMOVED') {
    return 'COLLABORATION.REMOVED';
  }
  if (val == 'COLLABORATION.UPDATED') {
    return 'COLLABORATION.UPDATED';
  }
  if (val == 'SHARED_LINK.DELETED') {
    return 'SHARED_LINK.DELETED';
  }
  if (val == 'SHARED_LINK.CREATED') {
    return 'SHARED_LINK.CREATED';
  }
  if (val == 'SHARED_LINK.UPDATED') {
    return 'SHARED_LINK.UPDATED';
  }
  if (val == 'SIGN_REQUEST.COMPLETED') {
    return 'SIGN_REQUEST.COMPLETED';
  }
  if (val == 'SIGN_REQUEST.DECLINED') {
    return 'SIGN_REQUEST.DECLINED';
  }
  if (val == 'SIGN_REQUEST.EXPIRED') {
    return 'SIGN_REQUEST.EXPIRED';
  }
  if (val == 'SIGN_REQUEST.SIGNER_EMAIL_BOUNCED') {
    return 'SIGN_REQUEST.SIGNER_EMAIL_BOUNCED';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeWebhookInvocation(
  val: WebhookInvocation
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0
        ? void 0
        : serializeWebhookInvocationTypeField(val.type),
    ['webhook']: val.webhook == void 0 ? void 0 : serializeWebhook(val.webhook),
    ['created_by']:
      val.createdBy == void 0 ? void 0 : serializeUserMini(val.createdBy),
    ['created_at']: val.createdAt == void 0 ? void 0 : val.createdAt,
    ['trigger']:
      val.trigger == void 0
        ? void 0
        : serializeWebhookInvocationTriggerField(val.trigger),
    ['source']:
      val.source == void 0 ? void 0 : serializeFileOrFolder(val.source),
  };
}
export function deserializeWebhookInvocation(val: any): WebhookInvocation {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | WebhookInvocationTypeField =
    val.type == void 0
      ? void 0
      : deserializeWebhookInvocationTypeField(val.type);
  const webhook: undefined | Webhook =
    val.webhook == void 0 ? void 0 : deserializeWebhook(val.webhook);
  const createdBy: undefined | UserMini =
    val.created_by == void 0 ? void 0 : deserializeUserMini(val.created_by);
  const createdAt: undefined | string =
    val.created_at == void 0 ? void 0 : val.created_at;
  const trigger: undefined | WebhookInvocationTriggerField =
    val.trigger == void 0
      ? void 0
      : deserializeWebhookInvocationTriggerField(val.trigger);
  const source: undefined | FileOrFolder =
    val.source == void 0 ? void 0 : deserializeFileOrFolder(val.source);
  return {
    id: id,
    type: type,
    webhook: webhook,
    createdBy: createdBy,
    createdAt: createdAt,
    trigger: trigger,
    source: source,
  } satisfies WebhookInvocation;
}
export function serializeSkillInvocationTypeField(
  val: SkillInvocationTypeField
): SerializedData {
  return val;
}
export function deserializeSkillInvocationTypeField(
  val: any
): SkillInvocationTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "SkillInvocationTypeField"';
  }
  if (val == 'skill_invocation') {
    return 'skill_invocation';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeSkillInvocationSkillTypeField(
  val: SkillInvocationSkillTypeField
): SerializedData {
  return val;
}
export function deserializeSkillInvocationSkillTypeField(
  val: any
): SkillInvocationSkillTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "SkillInvocationSkillTypeField"';
  }
  if (val == 'skill') {
    return 'skill';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeSkillInvocationSkillField(
  val: SkillInvocationSkillField
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0
        ? void 0
        : serializeSkillInvocationSkillTypeField(val.type),
    ['name']: val.name == void 0 ? void 0 : val.name,
    ['api_key']: val.apiKey == void 0 ? void 0 : val.apiKey,
  };
}
export function deserializeSkillInvocationSkillField(
  val: any
): SkillInvocationSkillField {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | SkillInvocationSkillTypeField =
    val.type == void 0
      ? void 0
      : deserializeSkillInvocationSkillTypeField(val.type);
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const apiKey: undefined | string =
    val.api_key == void 0 ? void 0 : val.api_key;
  return {
    id: id,
    type: type,
    name: name,
    apiKey: apiKey,
  } satisfies SkillInvocationSkillField;
}
export function serializeSkillInvocationTokenReadTokenTypeField(
  val: SkillInvocationTokenReadTokenTypeField
): SerializedData {
  return val;
}
export function deserializeSkillInvocationTokenReadTokenTypeField(
  val: any
): SkillInvocationTokenReadTokenTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "SkillInvocationTokenReadTokenTypeField"';
  }
  if (val == 'bearer') {
    return 'bearer';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeSkillInvocationTokenReadField(
  val: SkillInvocationTokenReadField
): SerializedData {
  return {
    ['access_token']: val.accessToken == void 0 ? void 0 : val.accessToken,
    ['expires_in']: val.expiresIn == void 0 ? void 0 : val.expiresIn,
    ['token_type']:
      val.tokenType == void 0
        ? void 0
        : serializeSkillInvocationTokenReadTokenTypeField(val.tokenType),
    ['restricted_to']: val.restrictedTo == void 0 ? void 0 : val.restrictedTo,
  };
}
export function deserializeSkillInvocationTokenReadField(
  val: any
): SkillInvocationTokenReadField {
  const accessToken: undefined | string =
    val.access_token == void 0 ? void 0 : val.access_token;
  const expiresIn: undefined | number =
    val.expires_in == void 0 ? void 0 : val.expires_in;
  const tokenType: undefined | SkillInvocationTokenReadTokenTypeField =
    val.token_type == void 0
      ? void 0
      : deserializeSkillInvocationTokenReadTokenTypeField(val.token_type);
  const restrictedTo: undefined | string =
    val.restricted_to == void 0 ? void 0 : val.restricted_to;
  return {
    accessToken: accessToken,
    expiresIn: expiresIn,
    tokenType: tokenType,
    restrictedTo: restrictedTo,
  } satisfies SkillInvocationTokenReadField;
}
export function serializeSkillInvocationTokenWriteTokenTypeField(
  val: SkillInvocationTokenWriteTokenTypeField
): SerializedData {
  return val;
}
export function deserializeSkillInvocationTokenWriteTokenTypeField(
  val: any
): SkillInvocationTokenWriteTokenTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "SkillInvocationTokenWriteTokenTypeField"';
  }
  if (val == 'bearer') {
    return 'bearer';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeSkillInvocationTokenWriteField(
  val: SkillInvocationTokenWriteField
): SerializedData {
  return {
    ['access_token']: val.accessToken == void 0 ? void 0 : val.accessToken,
    ['expires_in']: val.expiresIn == void 0 ? void 0 : val.expiresIn,
    ['token_type']:
      val.tokenType == void 0
        ? void 0
        : serializeSkillInvocationTokenWriteTokenTypeField(val.tokenType),
    ['restricted_to']: val.restrictedTo == void 0 ? void 0 : val.restrictedTo,
  };
}
export function deserializeSkillInvocationTokenWriteField(
  val: any
): SkillInvocationTokenWriteField {
  const accessToken: undefined | string =
    val.access_token == void 0 ? void 0 : val.access_token;
  const expiresIn: undefined | number =
    val.expires_in == void 0 ? void 0 : val.expires_in;
  const tokenType: undefined | SkillInvocationTokenWriteTokenTypeField =
    val.token_type == void 0
      ? void 0
      : deserializeSkillInvocationTokenWriteTokenTypeField(val.token_type);
  const restrictedTo: undefined | string =
    val.restricted_to == void 0 ? void 0 : val.restricted_to;
  return {
    accessToken: accessToken,
    expiresIn: expiresIn,
    tokenType: tokenType,
    restrictedTo: restrictedTo,
  } satisfies SkillInvocationTokenWriteField;
}
export function serializeSkillInvocationTokenField(
  val: SkillInvocationTokenField
): SerializedData {
  return {
    ['read']:
      val.read == void 0
        ? void 0
        : serializeSkillInvocationTokenReadField(val.read),
    ['write']:
      val.write == void 0
        ? void 0
        : serializeSkillInvocationTokenWriteField(val.write),
  };
}
export function deserializeSkillInvocationTokenField(
  val: any
): SkillInvocationTokenField {
  const read: undefined | SkillInvocationTokenReadField =
    val.read == void 0
      ? void 0
      : deserializeSkillInvocationTokenReadField(val.read);
  const write: undefined | SkillInvocationTokenWriteField =
    val.write == void 0
      ? void 0
      : deserializeSkillInvocationTokenWriteField(val.write);
  return { read: read, write: write } satisfies SkillInvocationTokenField;
}
export function serializeSkillInvocationStatusStateField(
  val: SkillInvocationStatusStateField
): SerializedData {
  return val;
}
export function deserializeSkillInvocationStatusStateField(
  val: any
): SkillInvocationStatusStateField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "SkillInvocationStatusStateField"';
  }
  if (val == 'invoked') {
    return 'invoked';
  }
  if (val == 'processing') {
    return 'processing';
  }
  if (val == 'success') {
    return 'success';
  }
  if (val == 'transient_failure') {
    return 'transient_failure';
  }
  if (val == 'permanent_failure') {
    return 'permanent_failure';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeSkillInvocationStatusField(
  val: SkillInvocationStatusField
): SerializedData {
  return {
    ['state']:
      val.state == void 0
        ? void 0
        : serializeSkillInvocationStatusStateField(val.state),
    ['message']: val.message == void 0 ? void 0 : val.message,
    ['error_code']: val.errorCode == void 0 ? void 0 : val.errorCode,
    ['additional_info']:
      val.additionalInfo == void 0 ? void 0 : val.additionalInfo,
  };
}
export function deserializeSkillInvocationStatusField(
  val: any
): SkillInvocationStatusField {
  const state: undefined | SkillInvocationStatusStateField =
    val.state == void 0
      ? void 0
      : deserializeSkillInvocationStatusStateField(val.state);
  const message: undefined | string =
    val.message == void 0 ? void 0 : val.message;
  const errorCode: undefined | string =
    val.error_code == void 0 ? void 0 : val.error_code;
  const additionalInfo: undefined | string =
    val.additional_info == void 0 ? void 0 : val.additional_info;
  return {
    state: state,
    message: message,
    errorCode: errorCode,
    additionalInfo: additionalInfo,
  } satisfies SkillInvocationStatusField;
}
export function serializeSkillInvocationEnterpriseTypeField(
  val: SkillInvocationEnterpriseTypeField
): SerializedData {
  return val;
}
export function deserializeSkillInvocationEnterpriseTypeField(
  val: any
): SkillInvocationEnterpriseTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "SkillInvocationEnterpriseTypeField"';
  }
  if (val == 'enterprise') {
    return 'enterprise';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeSkillInvocationEnterpriseField(
  val: SkillInvocationEnterpriseField
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0
        ? void 0
        : serializeSkillInvocationEnterpriseTypeField(val.type),
    ['name']: val.name == void 0 ? void 0 : val.name,
  };
}
export function deserializeSkillInvocationEnterpriseField(
  val: any
): SkillInvocationEnterpriseField {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | SkillInvocationEnterpriseTypeField =
    val.type == void 0
      ? void 0
      : deserializeSkillInvocationEnterpriseTypeField(val.type);
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  return {
    id: id,
    type: type,
    name: name,
  } satisfies SkillInvocationEnterpriseField;
}
export function serializeSkillInvocation(val: SkillInvocation): SerializedData {
  return {
    ['type']:
      val.type == void 0 ? void 0 : serializeSkillInvocationTypeField(val.type),
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['skill']:
      val.skill == void 0
        ? void 0
        : serializeSkillInvocationSkillField(val.skill),
    ['token']:
      val.token == void 0
        ? void 0
        : serializeSkillInvocationTokenField(val.token),
    ['status']:
      val.status == void 0
        ? void 0
        : serializeSkillInvocationStatusField(val.status),
    ['created_at']: val.createdAt == void 0 ? void 0 : val.createdAt,
    ['trigger']: val.trigger == void 0 ? void 0 : val.trigger,
    ['enterprise']:
      val.enterprise == void 0
        ? void 0
        : serializeSkillInvocationEnterpriseField(val.enterprise),
    ['source']:
      val.source == void 0 ? void 0 : serializeFileOrFolder(val.source),
    ['event']: val.event == void 0 ? void 0 : serializeEvent(val.event),
  };
}
export function deserializeSkillInvocation(val: any): SkillInvocation {
  const type: undefined | SkillInvocationTypeField =
    val.type == void 0 ? void 0 : deserializeSkillInvocationTypeField(val.type);
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const skill: undefined | SkillInvocationSkillField =
    val.skill == void 0
      ? void 0
      : deserializeSkillInvocationSkillField(val.skill);
  const token: undefined | SkillInvocationTokenField =
    val.token == void 0
      ? void 0
      : deserializeSkillInvocationTokenField(val.token);
  const status: undefined | SkillInvocationStatusField =
    val.status == void 0
      ? void 0
      : deserializeSkillInvocationStatusField(val.status);
  const createdAt: undefined | string =
    val.created_at == void 0 ? void 0 : val.created_at;
  const trigger: undefined | string =
    val.trigger == void 0 ? void 0 : val.trigger;
  const enterprise: undefined | SkillInvocationEnterpriseField =
    val.enterprise == void 0
      ? void 0
      : deserializeSkillInvocationEnterpriseField(val.enterprise);
  const source: undefined | FileOrFolder =
    val.source == void 0 ? void 0 : deserializeFileOrFolder(val.source);
  const event: undefined | Event =
    val.event == void 0 ? void 0 : deserializeEvent(val.event);
  return {
    type: type,
    id: id,
    skill: skill,
    token: token,
    status: status,
    createdAt: createdAt,
    trigger: trigger,
    enterprise: enterprise,
    source: source,
    event: event,
  } satisfies SkillInvocation;
}
export function serializeFolderFullSyncStateField(
  val: FolderFullSyncStateField
): SerializedData {
  return val;
}
export function deserializeFolderFullSyncStateField(
  val: any
): FolderFullSyncStateField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "FolderFullSyncStateField"';
  }
  if (val == 'synced') {
    return 'synced';
  }
  if (val == 'not_synced') {
    return 'not_synced';
  }
  if (val == 'partially_synced') {
    return 'partially_synced';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeFolderFullPermissionsField(
  val: FolderFullPermissionsField
): SerializedData {
  return {
    ['can_delete']: val.canDelete,
    ['can_download']: val.canDownload,
    ['can_invite_collaborator']: val.canInviteCollaborator,
    ['can_rename']: val.canRename,
    ['can_set_share_access']: val.canSetShareAccess,
    ['can_share']: val.canShare,
    ['can_upload']: val.canUpload == void 0 ? void 0 : val.canUpload,
  };
}
export function deserializeFolderFullPermissionsField(
  val: any
): FolderFullPermissionsField {
  const canDelete: boolean = val.can_delete;
  const canDownload: boolean = val.can_download;
  const canInviteCollaborator: boolean = val.can_invite_collaborator;
  const canRename: boolean = val.can_rename;
  const canSetShareAccess: boolean = val.can_set_share_access;
  const canShare: boolean = val.can_share;
  const canUpload: undefined | boolean =
    val.can_upload == void 0 ? void 0 : val.can_upload;
  return {
    canDelete: canDelete,
    canDownload: canDownload,
    canInviteCollaborator: canInviteCollaborator,
    canRename: canRename,
    canSetShareAccess: canSetShareAccess,
    canShare: canShare,
    canUpload: canUpload,
  } satisfies FolderFullPermissionsField;
}
export function serializeFolderFullMetadataField(
  val: FolderFullMetadataField
): SerializedData {
  return { ...{}, ...val.extraData };
}
export function deserializeFolderFullMetadataField(
  val: any
): FolderFullMetadataField {
  const extraData:
    | undefined
    | {
        readonly [key: string]: {
          readonly [key: string]: Metadata;
        };
      } = val == void 0 ? void 0 : val;
  return { extraData: extraData } satisfies FolderFullMetadataField;
}
export function serializeFolderFullAllowedSharedLinkAccessLevelsField(
  val: FolderFullAllowedSharedLinkAccessLevelsField
): SerializedData {
  return val;
}
export function deserializeFolderFullAllowedSharedLinkAccessLevelsField(
  val: any
): FolderFullAllowedSharedLinkAccessLevelsField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "FolderFullAllowedSharedLinkAccessLevelsField"';
  }
  if (val == 'open') {
    return 'open';
  }
  if (val == 'company') {
    return 'company';
  }
  if (val == 'collaborators') {
    return 'collaborators';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeFolderFullAllowedInviteeRolesField(
  val: FolderFullAllowedInviteeRolesField
): SerializedData {
  return val;
}
export function deserializeFolderFullAllowedInviteeRolesField(
  val: any
): FolderFullAllowedInviteeRolesField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "FolderFullAllowedInviteeRolesField"';
  }
  if (val == 'editor') {
    return 'editor';
  }
  if (val == 'viewer') {
    return 'viewer';
  }
  if (val == 'previewer') {
    return 'previewer';
  }
  if (val == 'uploader') {
    return 'uploader';
  }
  if (val == 'previewer uploader') {
    return 'previewer uploader';
  }
  if (val == 'viewer uploader') {
    return 'viewer uploader';
  }
  if (val == 'co-owner') {
    return 'co-owner';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeFolderFullWatermarkInfoField(
  val: FolderFullWatermarkInfoField
): SerializedData {
  return {
    ['is_watermarked']:
      val.isWatermarked == void 0 ? void 0 : val.isWatermarked,
  };
}
export function deserializeFolderFullWatermarkInfoField(
  val: any
): FolderFullWatermarkInfoField {
  const isWatermarked: undefined | boolean =
    val.is_watermarked == void 0 ? void 0 : val.is_watermarked;
  return {
    isWatermarked: isWatermarked,
  } satisfies FolderFullWatermarkInfoField;
}
export function serializeFolderFullClassificationField(
  val: FolderFullClassificationField
): SerializedData {
  return {
    ['name']: val.name == void 0 ? void 0 : val.name,
    ['definition']: val.definition == void 0 ? void 0 : val.definition,
    ['color']: val.color == void 0 ? void 0 : val.color,
  };
}
export function deserializeFolderFullClassificationField(
  val: any
): FolderFullClassificationField {
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const definition: undefined | string =
    val.definition == void 0 ? void 0 : val.definition;
  const color: undefined | string = val.color == void 0 ? void 0 : val.color;
  return {
    name: name,
    definition: definition,
    color: color,
  } satisfies FolderFullClassificationField;
}
export function serializeFolderFull(val: FolderFull): SerializedData {
  const base: any = serializeFolder(val);
  if (!sdIsMap(base)) {
    throw 'Expecting a map for "FolderFull"';
  }
  return {
    ...base,
    ...{
      ['sync_state']:
        val.syncState == void 0
          ? void 0
          : serializeFolderFullSyncStateField(val.syncState),
      ['has_collaborations']:
        val.hasCollaborations == void 0 ? void 0 : val.hasCollaborations,
      ['permissions']:
        val.permissions == void 0
          ? void 0
          : serializeFolderFullPermissionsField(val.permissions),
      ['tags']:
        val.tags == void 0
          ? void 0
          : (val.tags.map(function (item: string): any {
              return item;
            }) as readonly any[]),
      ['can_non_owners_invite']:
        val.canNonOwnersInvite == void 0 ? void 0 : val.canNonOwnersInvite,
      ['is_externally_owned']:
        val.isExternallyOwned == void 0 ? void 0 : val.isExternallyOwned,
      ['metadata']:
        val.metadata == void 0
          ? void 0
          : serializeFolderFullMetadataField(val.metadata),
      ['is_collaboration_restricted_to_enterprise']:
        val.isCollaborationRestrictedToEnterprise == void 0
          ? void 0
          : val.isCollaborationRestrictedToEnterprise,
      ['allowed_shared_link_access_levels']:
        val.allowedSharedLinkAccessLevels == void 0
          ? void 0
          : (val.allowedSharedLinkAccessLevels.map(function (
              item: FolderFullAllowedSharedLinkAccessLevelsField
            ): any {
              return serializeFolderFullAllowedSharedLinkAccessLevelsField(
                item
              );
            }) as readonly any[]),
      ['allowed_invitee_roles']:
        val.allowedInviteeRoles == void 0
          ? void 0
          : (val.allowedInviteeRoles.map(function (
              item: FolderFullAllowedInviteeRolesField
            ): any {
              return serializeFolderFullAllowedInviteeRolesField(item);
            }) as readonly any[]),
      ['watermark_info']:
        val.watermarkInfo == void 0
          ? void 0
          : serializeFolderFullWatermarkInfoField(val.watermarkInfo),
      ['is_accessible_via_shared_link']:
        val.isAccessibleViaSharedLink == void 0
          ? void 0
          : val.isAccessibleViaSharedLink,
      ['can_non_owners_view_collaborators']:
        val.canNonOwnersViewCollaborators == void 0
          ? void 0
          : val.canNonOwnersViewCollaborators,
      ['classification']:
        val.classification == void 0
          ? void 0
          : serializeFolderFullClassificationField(val.classification),
    },
  };
}
export function deserializeFolderFull(val: any): FolderFull {
  const syncState: undefined | FolderFullSyncStateField =
    val.sync_state == void 0
      ? void 0
      : deserializeFolderFullSyncStateField(val.sync_state);
  const hasCollaborations: undefined | boolean =
    val.has_collaborations == void 0 ? void 0 : val.has_collaborations;
  const permissions: undefined | FolderFullPermissionsField =
    val.permissions == void 0
      ? void 0
      : deserializeFolderFullPermissionsField(val.permissions);
  const tags: undefined | readonly string[] =
    val.tags == void 0
      ? void 0
      : sdIsList(val.tags)
      ? (val.tags.map(function (itm: SerializedData): any {
          return itm;
        }) as readonly any[])
      : [];
  const canNonOwnersInvite: undefined | boolean =
    val.can_non_owners_invite == void 0 ? void 0 : val.can_non_owners_invite;
  const isExternallyOwned: undefined | boolean =
    val.is_externally_owned == void 0 ? void 0 : val.is_externally_owned;
  const metadata: undefined | FolderFullMetadataField =
    val.metadata == void 0
      ? void 0
      : deserializeFolderFullMetadataField(val.metadata);
  const isCollaborationRestrictedToEnterprise: undefined | boolean =
    val.is_collaboration_restricted_to_enterprise == void 0
      ? void 0
      : val.is_collaboration_restricted_to_enterprise;
  const allowedSharedLinkAccessLevels:
    | undefined
    | readonly FolderFullAllowedSharedLinkAccessLevelsField[] =
    val.allowed_shared_link_access_levels == void 0
      ? void 0
      : sdIsList(val.allowed_shared_link_access_levels)
      ? (val.allowed_shared_link_access_levels.map(function (
          itm: SerializedData
        ): any {
          return deserializeFolderFullAllowedSharedLinkAccessLevelsField(itm);
        }) as readonly any[])
      : [];
  const allowedInviteeRoles:
    | undefined
    | readonly FolderFullAllowedInviteeRolesField[] =
    val.allowed_invitee_roles == void 0
      ? void 0
      : sdIsList(val.allowed_invitee_roles)
      ? (val.allowed_invitee_roles.map(function (itm: SerializedData): any {
          return deserializeFolderFullAllowedInviteeRolesField(itm);
        }) as readonly any[])
      : [];
  const watermarkInfo: undefined | FolderFullWatermarkInfoField =
    val.watermark_info == void 0
      ? void 0
      : deserializeFolderFullWatermarkInfoField(val.watermark_info);
  const isAccessibleViaSharedLink: undefined | boolean =
    val.is_accessible_via_shared_link == void 0
      ? void 0
      : val.is_accessible_via_shared_link;
  const canNonOwnersViewCollaborators: undefined | boolean =
    val.can_non_owners_view_collaborators == void 0
      ? void 0
      : val.can_non_owners_view_collaborators;
  const classification: undefined | FolderFullClassificationField =
    val.classification == void 0
      ? void 0
      : deserializeFolderFullClassificationField(val.classification);
  const createdAt: undefined | string =
    val.created_at == void 0 ? void 0 : val.created_at;
  const modifiedAt: undefined | string =
    val.modified_at == void 0 ? void 0 : val.modified_at;
  const description: undefined | string =
    val.description == void 0 ? void 0 : val.description;
  const size: undefined | number = val.size == void 0 ? void 0 : val.size;
  const pathCollection: undefined | FolderPathCollectionField =
    val.path_collection == void 0
      ? void 0
      : deserializeFolderPathCollectionField(val.path_collection);
  const createdBy: undefined | UserMini =
    val.created_by == void 0 ? void 0 : deserializeUserMini(val.created_by);
  const modifiedBy: undefined | UserMini =
    val.modified_by == void 0 ? void 0 : deserializeUserMini(val.modified_by);
  const trashedAt: undefined | string =
    val.trashed_at == void 0 ? void 0 : val.trashed_at;
  const purgedAt: undefined | string =
    val.purged_at == void 0 ? void 0 : val.purged_at;
  const contentCreatedAt: undefined | string =
    val.content_created_at == void 0 ? void 0 : val.content_created_at;
  const contentModifiedAt: undefined | string =
    val.content_modified_at == void 0 ? void 0 : val.content_modified_at;
  const ownedBy: undefined | UserMini =
    val.owned_by == void 0 ? void 0 : deserializeUserMini(val.owned_by);
  const sharedLink: undefined | FolderSharedLinkField =
    val.shared_link == void 0
      ? void 0
      : deserializeFolderSharedLinkField(val.shared_link);
  const folderUploadEmail: undefined | FolderFolderUploadEmailField =
    val.folder_upload_email == void 0
      ? void 0
      : deserializeFolderFolderUploadEmailField(val.folder_upload_email);
  const parent: undefined | FolderMini =
    val.parent == void 0 ? void 0 : deserializeFolderMini(val.parent);
  const itemStatus: undefined | FolderItemStatusField =
    val.item_status == void 0
      ? void 0
      : deserializeFolderItemStatusField(val.item_status);
  const itemCollection: undefined | Items =
    val.item_collection == void 0
      ? void 0
      : deserializeItems(val.item_collection);
  const sequenceId: undefined | string =
    val.sequence_id == void 0 ? void 0 : val.sequence_id;
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const id: string = val.id;
  const etag: undefined | string = val.etag == void 0 ? void 0 : val.etag;
  const type: FolderBaseTypeField = deserializeFolderBaseTypeField(val.type);
  return {
    syncState: syncState,
    hasCollaborations: hasCollaborations,
    permissions: permissions,
    tags: tags,
    canNonOwnersInvite: canNonOwnersInvite,
    isExternallyOwned: isExternallyOwned,
    metadata: metadata,
    isCollaborationRestrictedToEnterprise:
      isCollaborationRestrictedToEnterprise,
    allowedSharedLinkAccessLevels: allowedSharedLinkAccessLevels,
    allowedInviteeRoles: allowedInviteeRoles,
    watermarkInfo: watermarkInfo,
    isAccessibleViaSharedLink: isAccessibleViaSharedLink,
    canNonOwnersViewCollaborators: canNonOwnersViewCollaborators,
    classification: classification,
    createdAt: createdAt,
    modifiedAt: modifiedAt,
    description: description,
    size: size,
    pathCollection: pathCollection,
    createdBy: createdBy,
    modifiedBy: modifiedBy,
    trashedAt: trashedAt,
    purgedAt: purgedAt,
    contentCreatedAt: contentCreatedAt,
    contentModifiedAt: contentModifiedAt,
    ownedBy: ownedBy,
    sharedLink: sharedLink,
    folderUploadEmail: folderUploadEmail,
    parent: parent,
    itemStatus: itemStatus,
    itemCollection: itemCollection,
    sequenceId: sequenceId,
    name: name,
    id: id,
    etag: etag,
    type: type,
  } satisfies FolderFull;
}
export function serializeFileFullOrFolderFullOrWebLink(
  val: FileFullOrFolderFullOrWebLink
): SerializedData {
  if (val.type == 'file') {
    return serializeFileFull(val);
  }
  if (val.type == 'folder') {
    return serializeFolderFull(val);
  }
  if (val.type == 'web_link') {
    return serializeWebLink(val);
  }
  throw 'unknown type';
}
export function deserializeFileFullOrFolderFullOrWebLink(
  val: any
): FileFullOrFolderFullOrWebLink {
  if (!sdIsMap(val)) {
    throw 'Expecting a map for "FileFullOrFolderFullOrWebLink"';
  }
  if (val.type == 'file') {
    return deserializeFileFull(val);
  }
  if (val.type == 'folder') {
    return deserializeFolderFull(val);
  }
  if (val.type == 'web_link') {
    return deserializeWebLink(val);
  }
  throw 'unknown type';
}
export function serializeSearchResultWithSharedLink(
  val: SearchResultWithSharedLink
): SerializedData {
  return {
    ['accessible_via_shared_link']:
      val.accessibleViaSharedLink == void 0
        ? void 0
        : val.accessibleViaSharedLink,
    ['item']:
      val.item == void 0
        ? void 0
        : serializeFileFullOrFolderFullOrWebLink(val.item),
    ['type']: val.type == void 0 ? void 0 : val.type,
  };
}
export function deserializeSearchResultWithSharedLink(
  val: any
): SearchResultWithSharedLink {
  const accessibleViaSharedLink: undefined | string =
    val.accessible_via_shared_link == void 0
      ? void 0
      : val.accessible_via_shared_link;
  const item: undefined | FileFullOrFolderFullOrWebLink =
    val.item == void 0
      ? void 0
      : deserializeFileFullOrFolderFullOrWebLink(val.item);
  const type: undefined | string = val.type == void 0 ? void 0 : val.type;
  return {
    accessibleViaSharedLink: accessibleViaSharedLink,
    item: item,
    type: type,
  } satisfies SearchResultWithSharedLink;
}
export function serializeSearchResultsWithSharedLinksTypeField(
  val: SearchResultsWithSharedLinksTypeField
): SerializedData {
  return val;
}
export function deserializeSearchResultsWithSharedLinksTypeField(
  val: any
): SearchResultsWithSharedLinksTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "SearchResultsWithSharedLinksTypeField"';
  }
  if (val == 'search_results_with_shared_links') {
    return 'search_results_with_shared_links';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeSearchResultsWithSharedLinks(
  val: SearchResultsWithSharedLinks
): SerializedData {
  return {
    ['total_count']: val.totalCount == void 0 ? void 0 : val.totalCount,
    ['limit']: val.limit == void 0 ? void 0 : val.limit,
    ['offset']: val.offset == void 0 ? void 0 : val.offset,
    ['type']: serializeSearchResultsWithSharedLinksTypeField(val.type),
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (item: SearchResultWithSharedLink): any {
            return serializeSearchResultWithSharedLink(item);
          }) as readonly any[]),
  };
}
export function deserializeSearchResultsWithSharedLinks(
  val: any
): SearchResultsWithSharedLinks {
  const totalCount: undefined | number =
    val.total_count == void 0 ? void 0 : val.total_count;
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
  const offset: undefined | number = val.offset == void 0 ? void 0 : val.offset;
  const type: SearchResultsWithSharedLinksTypeField =
    deserializeSearchResultsWithSharedLinksTypeField(val.type);
  const entries: undefined | readonly SearchResultWithSharedLink[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (itm: SerializedData): any {
          return deserializeSearchResultWithSharedLink(itm);
        }) as readonly any[])
      : [];
  return {
    totalCount: totalCount,
    limit: limit,
    offset: offset,
    type: type,
    entries: entries,
  } satisfies SearchResultsWithSharedLinks;
}
export function serializeSearchResultsTypeField(
  val: SearchResultsTypeField
): SerializedData {
  return val;
}
export function deserializeSearchResultsTypeField(
  val: any
): SearchResultsTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "SearchResultsTypeField"';
  }
  if (val == 'search_results_items') {
    return 'search_results_items';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeSearchResults(val: SearchResults): SerializedData {
  return {
    ['total_count']: val.totalCount == void 0 ? void 0 : val.totalCount,
    ['limit']: val.limit == void 0 ? void 0 : val.limit,
    ['offset']: val.offset == void 0 ? void 0 : val.offset,
    ['type']: serializeSearchResultsTypeField(val.type),
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (item: FileFullOrFolderFullOrWebLink): any {
            return serializeFileFullOrFolderFullOrWebLink(item);
          }) as readonly any[]),
  };
}
export function deserializeSearchResults(val: any): SearchResults {
  const totalCount: undefined | number =
    val.total_count == void 0 ? void 0 : val.total_count;
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
  const offset: undefined | number = val.offset == void 0 ? void 0 : val.offset;
  const type: SearchResultsTypeField = deserializeSearchResultsTypeField(
    val.type
  );
  const entries: undefined | readonly FileFullOrFolderFullOrWebLink[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (itm: SerializedData): any {
          return deserializeFileFullOrFolderFullOrWebLink(itm);
        }) as readonly any[])
      : [];
  return {
    totalCount: totalCount,
    limit: limit,
    offset: offset,
    type: type,
    entries: entries,
  } satisfies SearchResults;
}
export function serializeSearchResultsOrSearchResultsWithSharedLinks(
  val: SearchResultsOrSearchResultsWithSharedLinks
): SerializedData {
  if (val.type == 'search_results_items') {
    return serializeSearchResults(val);
  }
  if (val.type == 'search_results_with_shared_links') {
    return serializeSearchResultsWithSharedLinks(val);
  }
  throw 'unknown type';
}
export function deserializeSearchResultsOrSearchResultsWithSharedLinks(
  val: any
): SearchResultsOrSearchResultsWithSharedLinks {
  if (!sdIsMap(val)) {
    throw 'Expecting a map for "SearchResultsOrSearchResultsWithSharedLinks"';
  }
  if (val.type == 'search_results_items') {
    return deserializeSearchResults(val);
  }
  if (val.type == 'search_results_with_shared_links') {
    return deserializeSearchResultsWithSharedLinks(val);
  }
  throw 'unknown type';
}
export function serializeRecentItemInteractionTypeField(
  val: RecentItemInteractionTypeField
): SerializedData {
  return val;
}
export function deserializeRecentItemInteractionTypeField(
  val: any
): RecentItemInteractionTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "RecentItemInteractionTypeField"';
  }
  if (val == 'item_preview') {
    return 'item_preview';
  }
  if (val == 'item_upload') {
    return 'item_upload';
  }
  if (val == 'item_comment') {
    return 'item_comment';
  }
  if (val == 'item_open') {
    return 'item_open';
  }
  if (val == 'item_modify') {
    return 'item_modify';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeRecentItem(val: RecentItem): SerializedData {
  return {
    ['type']: val.type == void 0 ? void 0 : val.type,
    ['item']:
      val.item == void 0
        ? void 0
        : serializeFileFullOrFolderFullOrWebLink(val.item),
    ['interaction_type']:
      val.interactionType == void 0
        ? void 0
        : serializeRecentItemInteractionTypeField(val.interactionType),
    ['interacted_at']: val.interactedAt == void 0 ? void 0 : val.interactedAt,
    ['interaction_shared_link']:
      val.interactionSharedLink == void 0 ? void 0 : val.interactionSharedLink,
  };
}
export function deserializeRecentItem(val: any): RecentItem {
  const type: undefined | string = val.type == void 0 ? void 0 : val.type;
  const item: undefined | FileFullOrFolderFullOrWebLink =
    val.item == void 0
      ? void 0
      : deserializeFileFullOrFolderFullOrWebLink(val.item);
  const interactionType: undefined | RecentItemInteractionTypeField =
    val.interaction_type == void 0
      ? void 0
      : deserializeRecentItemInteractionTypeField(val.interaction_type);
  const interactedAt: undefined | string =
    val.interacted_at == void 0 ? void 0 : val.interacted_at;
  const interactionSharedLink: undefined | string =
    val.interaction_shared_link == void 0
      ? void 0
      : val.interaction_shared_link;
  return {
    type: type,
    item: item,
    interactionType: interactionType,
    interactedAt: interactedAt,
    interactionSharedLink: interactionSharedLink,
  } satisfies RecentItem;
}
export function serializeRecentItems(val: RecentItems): SerializedData {
  return {
    ['limit']: val.limit == void 0 ? void 0 : val.limit,
    ['next_marker']: val.nextMarker == void 0 ? void 0 : val.nextMarker,
    ['prev_marker']: val.prevMarker == void 0 ? void 0 : val.prevMarker,
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (item: RecentItem): any {
            return serializeRecentItem(item);
          }) as readonly any[]),
  };
}
export function deserializeRecentItems(val: any): RecentItems {
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
  const nextMarker: undefined | string =
    val.next_marker == void 0 ? void 0 : val.next_marker;
  const prevMarker: undefined | string =
    val.prev_marker == void 0 ? void 0 : val.prev_marker;
  const entries: undefined | readonly RecentItem[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (itm: SerializedData): any {
          return deserializeRecentItem(itm);
        }) as readonly any[])
      : [];
  return {
    limit: limit,
    nextMarker: nextMarker,
    prevMarker: prevMarker,
    entries: entries,
  } satisfies RecentItems;
}
export function serializeWorkflowMiniTypeField(
  val: WorkflowMiniTypeField
): SerializedData {
  return val;
}
export function deserializeWorkflowMiniTypeField(
  val: any
): WorkflowMiniTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "WorkflowMiniTypeField"';
  }
  if (val == 'workflow') {
    return 'workflow';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeWorkflowMini(val: WorkflowMini): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0 ? void 0 : serializeWorkflowMiniTypeField(val.type),
    ['name']: val.name == void 0 ? void 0 : val.name,
    ['description']: val.description == void 0 ? void 0 : val.description,
    ['is_enabled']: val.isEnabled == void 0 ? void 0 : val.isEnabled,
  };
}
export function deserializeWorkflowMini(val: any): WorkflowMini {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | WorkflowMiniTypeField =
    val.type == void 0 ? void 0 : deserializeWorkflowMiniTypeField(val.type);
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const description: undefined | string =
    val.description == void 0 ? void 0 : val.description;
  const isEnabled: undefined | boolean =
    val.is_enabled == void 0 ? void 0 : val.is_enabled;
  return {
    id: id,
    type: type,
    name: name,
    description: description,
    isEnabled: isEnabled,
  } satisfies WorkflowMini;
}
export function serializeWorkflowFlowsTypeField(
  val: WorkflowFlowsTypeField
): SerializedData {
  return val;
}
export function deserializeWorkflowFlowsTypeField(
  val: any
): WorkflowFlowsTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "WorkflowFlowsTypeField"';
  }
  if (val == 'flow') {
    return 'flow';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeWorkflowFlowsTriggerTypeField(
  val: WorkflowFlowsTriggerTypeField
): SerializedData {
  return val;
}
export function deserializeWorkflowFlowsTriggerTypeField(
  val: any
): WorkflowFlowsTriggerTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "WorkflowFlowsTriggerTypeField"';
  }
  if (val == 'trigger') {
    return 'trigger';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeWorkflowFlowsTriggerTriggerTypeField(
  val: WorkflowFlowsTriggerTriggerTypeField
): SerializedData {
  return val;
}
export function deserializeWorkflowFlowsTriggerTriggerTypeField(
  val: any
): WorkflowFlowsTriggerTriggerTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "WorkflowFlowsTriggerTriggerTypeField"';
  }
  if (val == 'WORKFLOW_MANUAL_START') {
    return 'WORKFLOW_MANUAL_START';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeWorkflowFlowsTriggerScopeTypeField(
  val: WorkflowFlowsTriggerScopeTypeField
): SerializedData {
  return val;
}
export function deserializeWorkflowFlowsTriggerScopeTypeField(
  val: any
): WorkflowFlowsTriggerScopeTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "WorkflowFlowsTriggerScopeTypeField"';
  }
  if (val == 'trigger_scope') {
    return 'trigger_scope';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeWorkflowFlowsTriggerScopeObjectTypeField(
  val: WorkflowFlowsTriggerScopeObjectTypeField
): SerializedData {
  return val;
}
export function deserializeWorkflowFlowsTriggerScopeObjectTypeField(
  val: any
): WorkflowFlowsTriggerScopeObjectTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "WorkflowFlowsTriggerScopeObjectTypeField"';
  }
  if (val == 'folder') {
    return 'folder';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeWorkflowFlowsTriggerScopeObjectField(
  val: WorkflowFlowsTriggerScopeObjectField
): SerializedData {
  return {
    ['type']:
      val.type == void 0
        ? void 0
        : serializeWorkflowFlowsTriggerScopeObjectTypeField(val.type),
    ['id']: val.id == void 0 ? void 0 : val.id,
  };
}
export function deserializeWorkflowFlowsTriggerScopeObjectField(
  val: any
): WorkflowFlowsTriggerScopeObjectField {
  const type: undefined | WorkflowFlowsTriggerScopeObjectTypeField =
    val.type == void 0
      ? void 0
      : deserializeWorkflowFlowsTriggerScopeObjectTypeField(val.type);
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  return { type: type, id: id } satisfies WorkflowFlowsTriggerScopeObjectField;
}
export function serializeWorkflowFlowsTriggerScopeField(
  val: WorkflowFlowsTriggerScopeField
): SerializedData {
  return {
    ['type']:
      val.type == void 0
        ? void 0
        : serializeWorkflowFlowsTriggerScopeTypeField(val.type),
    ['ref']: val.ref == void 0 ? void 0 : val.ref,
    ['object']:
      val.object == void 0
        ? void 0
        : serializeWorkflowFlowsTriggerScopeObjectField(val.object),
  };
}
export function deserializeWorkflowFlowsTriggerScopeField(
  val: any
): WorkflowFlowsTriggerScopeField {
  const type: undefined | WorkflowFlowsTriggerScopeTypeField =
    val.type == void 0
      ? void 0
      : deserializeWorkflowFlowsTriggerScopeTypeField(val.type);
  const ref: undefined | string = val.ref == void 0 ? void 0 : val.ref;
  const object: undefined | WorkflowFlowsTriggerScopeObjectField =
    val.object == void 0
      ? void 0
      : deserializeWorkflowFlowsTriggerScopeObjectField(val.object);
  return {
    type: type,
    ref: ref,
    object: object,
  } satisfies WorkflowFlowsTriggerScopeField;
}
export function serializeWorkflowFlowsTriggerField(
  val: WorkflowFlowsTriggerField
): SerializedData {
  return {
    ['type']:
      val.type == void 0
        ? void 0
        : serializeWorkflowFlowsTriggerTypeField(val.type),
    ['trigger_type']:
      val.triggerType == void 0
        ? void 0
        : serializeWorkflowFlowsTriggerTriggerTypeField(val.triggerType),
    ['scope']:
      val.scope == void 0
        ? void 0
        : (val.scope.map(function (item: WorkflowFlowsTriggerScopeField): any {
            return serializeWorkflowFlowsTriggerScopeField(item);
          }) as readonly any[]),
  };
}
export function deserializeWorkflowFlowsTriggerField(
  val: any
): WorkflowFlowsTriggerField {
  const type: undefined | WorkflowFlowsTriggerTypeField =
    val.type == void 0
      ? void 0
      : deserializeWorkflowFlowsTriggerTypeField(val.type);
  const triggerType: undefined | WorkflowFlowsTriggerTriggerTypeField =
    val.trigger_type == void 0
      ? void 0
      : deserializeWorkflowFlowsTriggerTriggerTypeField(val.trigger_type);
  const scope: undefined | readonly WorkflowFlowsTriggerScopeField[] =
    val.scope == void 0
      ? void 0
      : sdIsList(val.scope)
      ? (val.scope.map(function (itm: SerializedData): any {
          return deserializeWorkflowFlowsTriggerScopeField(itm);
        }) as readonly any[])
      : [];
  return {
    type: type,
    triggerType: triggerType,
    scope: scope,
  } satisfies WorkflowFlowsTriggerField;
}
export function serializeWorkflowFlowsOutcomesTypeField(
  val: WorkflowFlowsOutcomesTypeField
): SerializedData {
  return val;
}
export function deserializeWorkflowFlowsOutcomesTypeField(
  val: any
): WorkflowFlowsOutcomesTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "WorkflowFlowsOutcomesTypeField"';
  }
  if (val == 'outcome') {
    return 'outcome';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeWorkflowFlowsOutcomesActionTypeField(
  val: WorkflowFlowsOutcomesActionTypeField
): SerializedData {
  return val;
}
export function deserializeWorkflowFlowsOutcomesActionTypeField(
  val: any
): WorkflowFlowsOutcomesActionTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "WorkflowFlowsOutcomesActionTypeField"';
  }
  if (val == 'add_metadata') {
    return 'add_metadata';
  }
  if (val == 'assign_task') {
    return 'assign_task';
  }
  if (val == 'copy_file') {
    return 'copy_file';
  }
  if (val == 'copy_folder') {
    return 'copy_folder';
  }
  if (val == 'create_folder') {
    return 'create_folder';
  }
  if (val == 'delete_file') {
    return 'delete_file';
  }
  if (val == 'delete_folder') {
    return 'delete_folder';
  }
  if (val == 'lock_file') {
    return 'lock_file';
  }
  if (val == 'move_file') {
    return 'move_file';
  }
  if (val == 'move_folder') {
    return 'move_folder';
  }
  if (val == 'remove_watermark_file') {
    return 'remove_watermark_file';
  }
  if (val == 'rename_folder') {
    return 'rename_folder';
  }
  if (val == 'restore_folder') {
    return 'restore_folder';
  }
  if (val == 'share_file') {
    return 'share_file';
  }
  if (val == 'share_folder') {
    return 'share_folder';
  }
  if (val == 'unlock_file') {
    return 'unlock_file';
  }
  if (val == 'upload_file') {
    return 'upload_file';
  }
  if (val == 'wait_for_task') {
    return 'wait_for_task';
  }
  if (val == 'watermark_file') {
    return 'watermark_file';
  }
  if (val == 'go_back_to_step') {
    return 'go_back_to_step';
  }
  if (val == 'apply_file_classification') {
    return 'apply_file_classification';
  }
  if (val == 'apply_folder_classification') {
    return 'apply_folder_classification';
  }
  if (val == 'send_notification') {
    return 'send_notification';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeWorkflowFlowsOutcomesIfRejectedTypeField(
  val: WorkflowFlowsOutcomesIfRejectedTypeField
): SerializedData {
  return val;
}
export function deserializeWorkflowFlowsOutcomesIfRejectedTypeField(
  val: any
): WorkflowFlowsOutcomesIfRejectedTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "WorkflowFlowsOutcomesIfRejectedTypeField"';
  }
  if (val == 'outcome') {
    return 'outcome';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeWorkflowFlowsOutcomesIfRejectedActionTypeField(
  val: WorkflowFlowsOutcomesIfRejectedActionTypeField
): SerializedData {
  return val;
}
export function deserializeWorkflowFlowsOutcomesIfRejectedActionTypeField(
  val: any
): WorkflowFlowsOutcomesIfRejectedActionTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "WorkflowFlowsOutcomesIfRejectedActionTypeField"';
  }
  if (val == 'add_metadata') {
    return 'add_metadata';
  }
  if (val == 'assign_task') {
    return 'assign_task';
  }
  if (val == 'copy_file') {
    return 'copy_file';
  }
  if (val == 'copy_folder') {
    return 'copy_folder';
  }
  if (val == 'create_folder') {
    return 'create_folder';
  }
  if (val == 'delete_file') {
    return 'delete_file';
  }
  if (val == 'delete_folder') {
    return 'delete_folder';
  }
  if (val == 'lock_file') {
    return 'lock_file';
  }
  if (val == 'move_file') {
    return 'move_file';
  }
  if (val == 'move_folder') {
    return 'move_folder';
  }
  if (val == 'remove_watermark_file') {
    return 'remove_watermark_file';
  }
  if (val == 'rename_folder') {
    return 'rename_folder';
  }
  if (val == 'restore_folder') {
    return 'restore_folder';
  }
  if (val == 'share_file') {
    return 'share_file';
  }
  if (val == 'share_folder') {
    return 'share_folder';
  }
  if (val == 'unlock_file') {
    return 'unlock_file';
  }
  if (val == 'upload_file') {
    return 'upload_file';
  }
  if (val == 'wait_for_task') {
    return 'wait_for_task';
  }
  if (val == 'watermark_file') {
    return 'watermark_file';
  }
  if (val == 'go_back_to_step') {
    return 'go_back_to_step';
  }
  if (val == 'apply_file_classification') {
    return 'apply_file_classification';
  }
  if (val == 'apply_folder_classification') {
    return 'apply_folder_classification';
  }
  if (val == 'send_notification') {
    return 'send_notification';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeWorkflowFlowsOutcomesIfRejectedField(
  val: WorkflowFlowsOutcomesIfRejectedField
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0
        ? void 0
        : serializeWorkflowFlowsOutcomesIfRejectedTypeField(val.type),
    ['name']: val.name == void 0 ? void 0 : val.name,
    ['action_type']:
      val.actionType == void 0
        ? void 0
        : serializeWorkflowFlowsOutcomesIfRejectedActionTypeField(
            val.actionType
          ),
  };
}
export function deserializeWorkflowFlowsOutcomesIfRejectedField(
  val: any
): WorkflowFlowsOutcomesIfRejectedField {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | WorkflowFlowsOutcomesIfRejectedTypeField =
    val.type == void 0
      ? void 0
      : deserializeWorkflowFlowsOutcomesIfRejectedTypeField(val.type);
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const actionType: undefined | WorkflowFlowsOutcomesIfRejectedActionTypeField =
    val.action_type == void 0
      ? void 0
      : deserializeWorkflowFlowsOutcomesIfRejectedActionTypeField(
          val.action_type
        );
  return {
    id: id,
    type: type,
    name: name,
    actionType: actionType,
  } satisfies WorkflowFlowsOutcomesIfRejectedField;
}
export function serializeWorkflowFlowsOutcomesField(
  val: WorkflowFlowsOutcomesField
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0
        ? void 0
        : serializeWorkflowFlowsOutcomesTypeField(val.type),
    ['name']: val.name == void 0 ? void 0 : val.name,
    ['action_type']:
      val.actionType == void 0
        ? void 0
        : serializeWorkflowFlowsOutcomesActionTypeField(val.actionType),
    ['if_rejected']:
      val.ifRejected == void 0
        ? void 0
        : (val.ifRejected.map(function (
            item: WorkflowFlowsOutcomesIfRejectedField
          ): any {
            return serializeWorkflowFlowsOutcomesIfRejectedField(item);
          }) as readonly any[]),
  };
}
export function deserializeWorkflowFlowsOutcomesField(
  val: any
): WorkflowFlowsOutcomesField {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | WorkflowFlowsOutcomesTypeField =
    val.type == void 0
      ? void 0
      : deserializeWorkflowFlowsOutcomesTypeField(val.type);
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const actionType: undefined | WorkflowFlowsOutcomesActionTypeField =
    val.action_type == void 0
      ? void 0
      : deserializeWorkflowFlowsOutcomesActionTypeField(val.action_type);
  const ifRejected:
    | undefined
    | readonly WorkflowFlowsOutcomesIfRejectedField[] =
    val.if_rejected == void 0
      ? void 0
      : sdIsList(val.if_rejected)
      ? (val.if_rejected.map(function (itm: SerializedData): any {
          return deserializeWorkflowFlowsOutcomesIfRejectedField(itm);
        }) as readonly any[])
      : [];
  return {
    id: id,
    type: type,
    name: name,
    actionType: actionType,
    ifRejected: ifRejected,
  } satisfies WorkflowFlowsOutcomesField;
}
export function serializeWorkflowFlowsField(
  val: WorkflowFlowsField
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0 ? void 0 : serializeWorkflowFlowsTypeField(val.type),
    ['trigger']:
      val.trigger == void 0
        ? void 0
        : serializeWorkflowFlowsTriggerField(val.trigger),
    ['outcomes']:
      val.outcomes == void 0
        ? void 0
        : (val.outcomes.map(function (item: WorkflowFlowsOutcomesField): any {
            return serializeWorkflowFlowsOutcomesField(item);
          }) as readonly any[]),
    ['created_at']: val.createdAt == void 0 ? void 0 : val.createdAt,
    ['created_by']:
      val.createdBy == void 0 ? void 0 : serializeUserBase(val.createdBy),
  };
}
export function deserializeWorkflowFlowsField(val: any): WorkflowFlowsField {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | WorkflowFlowsTypeField =
    val.type == void 0 ? void 0 : deserializeWorkflowFlowsTypeField(val.type);
  const trigger: undefined | WorkflowFlowsTriggerField =
    val.trigger == void 0
      ? void 0
      : deserializeWorkflowFlowsTriggerField(val.trigger);
  const outcomes: undefined | readonly WorkflowFlowsOutcomesField[] =
    val.outcomes == void 0
      ? void 0
      : sdIsList(val.outcomes)
      ? (val.outcomes.map(function (itm: SerializedData): any {
          return deserializeWorkflowFlowsOutcomesField(itm);
        }) as readonly any[])
      : [];
  const createdAt: undefined | string =
    val.created_at == void 0 ? void 0 : val.created_at;
  const createdBy: undefined | UserBase =
    val.created_by == void 0 ? void 0 : deserializeUserBase(val.created_by);
  return {
    id: id,
    type: type,
    trigger: trigger,
    outcomes: outcomes,
    createdAt: createdAt,
    createdBy: createdBy,
  } satisfies WorkflowFlowsField;
}
export function serializeWorkflow(val: Workflow): SerializedData {
  const base: any = serializeWorkflowMini(val);
  if (!sdIsMap(base)) {
    throw 'Expecting a map for "Workflow"';
  }
  return {
    ...base,
    ...{
      ['flows']:
        val.flows == void 0
          ? void 0
          : (val.flows.map(function (item: WorkflowFlowsField): any {
              return serializeWorkflowFlowsField(item);
            }) as readonly any[]),
    },
  };
}
export function deserializeWorkflow(val: any): Workflow {
  const flows: undefined | readonly WorkflowFlowsField[] =
    val.flows == void 0
      ? void 0
      : sdIsList(val.flows)
      ? (val.flows.map(function (itm: SerializedData): any {
          return deserializeWorkflowFlowsField(itm);
        }) as readonly any[])
      : [];
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | WorkflowMiniTypeField =
    val.type == void 0 ? void 0 : deserializeWorkflowMiniTypeField(val.type);
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const description: undefined | string =
    val.description == void 0 ? void 0 : val.description;
  const isEnabled: undefined | boolean =
    val.is_enabled == void 0 ? void 0 : val.is_enabled;
  return {
    flows: flows,
    id: id,
    type: type,
    name: name,
    description: description,
    isEnabled: isEnabled,
  } satisfies Workflow;
}
export function serializeWorkflows(val: Workflows): SerializedData {
  return {
    ['limit']: val.limit == void 0 ? void 0 : val.limit,
    ['next_marker']: val.nextMarker == void 0 ? void 0 : val.nextMarker,
    ['prev_marker']: val.prevMarker == void 0 ? void 0 : val.prevMarker,
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (item: Workflow): any {
            return serializeWorkflow(item);
          }) as readonly any[]),
  };
}
export function deserializeWorkflows(val: any): Workflows {
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
  const nextMarker: undefined | string =
    val.next_marker == void 0 ? void 0 : val.next_marker;
  const prevMarker: undefined | string =
    val.prev_marker == void 0 ? void 0 : val.prev_marker;
  const entries: undefined | readonly Workflow[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (itm: SerializedData): any {
          return deserializeWorkflow(itm);
        }) as readonly any[])
      : [];
  return {
    limit: limit,
    nextMarker: nextMarker,
    prevMarker: prevMarker,
    entries: entries,
  } satisfies Workflows;
}
export function serializeWorkflowFull(val: WorkflowFull): SerializedData {
  const base: any = serializeWorkflow(val);
  if (!sdIsMap(base)) {
    throw 'Expecting a map for "WorkflowFull"';
  }
  return {
    ...base,
    ...{
      ['created_at']: val.createdAt == void 0 ? void 0 : val.createdAt,
      ['modified_at']: val.modifiedAt == void 0 ? void 0 : val.modifiedAt,
      ['created_by']:
        val.createdBy == void 0 ? void 0 : serializeUserBase(val.createdBy),
      ['modified_by']:
        val.modifiedBy == void 0 ? void 0 : serializeUserBase(val.modifiedBy),
    },
  };
}
export function deserializeWorkflowFull(val: any): WorkflowFull {
  const createdAt: undefined | string =
    val.created_at == void 0 ? void 0 : val.created_at;
  const modifiedAt: undefined | string =
    val.modified_at == void 0 ? void 0 : val.modified_at;
  const createdBy: undefined | UserBase =
    val.created_by == void 0 ? void 0 : deserializeUserBase(val.created_by);
  const modifiedBy: undefined | UserBase =
    val.modified_by == void 0 ? void 0 : deserializeUserBase(val.modified_by);
  const flows: undefined | readonly WorkflowFlowsField[] =
    val.flows == void 0
      ? void 0
      : sdIsList(val.flows)
      ? (val.flows.map(function (itm: SerializedData): any {
          return deserializeWorkflowFlowsField(itm);
        }) as readonly any[])
      : [];
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | WorkflowMiniTypeField =
    val.type == void 0 ? void 0 : deserializeWorkflowMiniTypeField(val.type);
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const description: undefined | string =
    val.description == void 0 ? void 0 : val.description;
  const isEnabled: undefined | boolean =
    val.is_enabled == void 0 ? void 0 : val.is_enabled;
  return {
    createdAt: createdAt,
    modifiedAt: modifiedAt,
    createdBy: createdBy,
    modifiedBy: modifiedBy,
    flows: flows,
    id: id,
    type: type,
    name: name,
    description: description,
    isEnabled: isEnabled,
  } satisfies WorkflowFull;
}
export function serializeZipDownloadNameConflictsTypeField(
  val: ZipDownloadNameConflictsTypeField
): SerializedData {
  return val;
}
export function deserializeZipDownloadNameConflictsTypeField(
  val: any
): ZipDownloadNameConflictsTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "ZipDownloadNameConflictsTypeField"';
  }
  if (val == 'file') {
    return 'file';
  }
  if (val == 'folder') {
    return 'folder';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeZipDownloadNameConflictsField(
  val: ZipDownloadNameConflictsField
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0
        ? void 0
        : serializeZipDownloadNameConflictsTypeField(val.type),
    ['original_name']: val.originalName == void 0 ? void 0 : val.originalName,
    ['download_name']: val.downloadName == void 0 ? void 0 : val.downloadName,
  };
}
export function deserializeZipDownloadNameConflictsField(
  val: any
): ZipDownloadNameConflictsField {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | ZipDownloadNameConflictsTypeField =
    val.type == void 0
      ? void 0
      : deserializeZipDownloadNameConflictsTypeField(val.type);
  const originalName: undefined | string =
    val.original_name == void 0 ? void 0 : val.original_name;
  const downloadName: undefined | string =
    val.download_name == void 0 ? void 0 : val.download_name;
  return {
    id: id,
    type: type,
    originalName: originalName,
    downloadName: downloadName,
  } satisfies ZipDownloadNameConflictsField;
}
export function serializeZipDownload(val: ZipDownload): SerializedData {
  return {
    ['download_url']: val.downloadUrl == void 0 ? void 0 : val.downloadUrl,
    ['status_url']: val.statusUrl == void 0 ? void 0 : val.statusUrl,
    ['expires_at']: val.expiresAt == void 0 ? void 0 : val.expiresAt,
    ['name_conflicts']:
      val.nameConflicts == void 0
        ? void 0
        : (val.nameConflicts.map(function (
            item: readonly ZipDownloadNameConflictsField[]
          ): any {
            return item.map(function (
              item: ZipDownloadNameConflictsField
            ): any {
              return serializeZipDownloadNameConflictsField(item);
            }) as readonly any[];
          }) as readonly any[]),
  };
}
export function deserializeZipDownload(val: any): ZipDownload {
  const downloadUrl: undefined | string =
    val.download_url == void 0 ? void 0 : val.download_url;
  const statusUrl: undefined | string =
    val.status_url == void 0 ? void 0 : val.status_url;
  const expiresAt: undefined | string =
    val.expires_at == void 0 ? void 0 : val.expires_at;
  const nameConflicts:
    | undefined
    | readonly (readonly ZipDownloadNameConflictsField[])[] =
    val.name_conflicts == void 0
      ? void 0
      : sdIsList(val.name_conflicts)
      ? (val.name_conflicts.map(function (itm: SerializedData): any {
          return sdIsList(itm)
            ? (itm.map(function (itm: SerializedData): any {
                return deserializeZipDownloadNameConflictsField(itm);
              }) as readonly any[])
            : [];
        }) as readonly any[])
      : [];
  return {
    downloadUrl: downloadUrl,
    statusUrl: statusUrl,
    expiresAt: expiresAt,
    nameConflicts: nameConflicts,
  } satisfies ZipDownload;
}
export function serializeZipDownloadStatusStateField(
  val: ZipDownloadStatusStateField
): SerializedData {
  return val;
}
export function deserializeZipDownloadStatusStateField(
  val: any
): ZipDownloadStatusStateField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "ZipDownloadStatusStateField"';
  }
  if (val == 'in_progress') {
    return 'in_progress';
  }
  if (val == 'failed') {
    return 'failed';
  }
  if (val == 'succeeded') {
    return 'succeeded';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeZipDownloadStatus(
  val: ZipDownloadStatus
): SerializedData {
  return {
    ['total_file_count']:
      val.totalFileCount == void 0 ? void 0 : val.totalFileCount,
    ['downloaded_file_count']:
      val.downloadedFileCount == void 0 ? void 0 : val.downloadedFileCount,
    ['skipped_file_count']:
      val.skippedFileCount == void 0 ? void 0 : val.skippedFileCount,
    ['skipped_folder_count']:
      val.skippedFolderCount == void 0 ? void 0 : val.skippedFolderCount,
    ['state']:
      val.state == void 0
        ? void 0
        : serializeZipDownloadStatusStateField(val.state),
  };
}
export function deserializeZipDownloadStatus(val: any): ZipDownloadStatus {
  const totalFileCount: undefined | number =
    val.total_file_count == void 0 ? void 0 : val.total_file_count;
  const downloadedFileCount: undefined | number =
    val.downloaded_file_count == void 0 ? void 0 : val.downloaded_file_count;
  const skippedFileCount: undefined | number =
    val.skipped_file_count == void 0 ? void 0 : val.skipped_file_count;
  const skippedFolderCount: undefined | number =
    val.skipped_folder_count == void 0 ? void 0 : val.skipped_folder_count;
  const state: undefined | ZipDownloadStatusStateField =
    val.state == void 0
      ? void 0
      : deserializeZipDownloadStatusStateField(val.state);
  return {
    totalFileCount: totalFileCount,
    downloadedFileCount: downloadedFileCount,
    skippedFileCount: skippedFileCount,
    skippedFolderCount: skippedFolderCount,
    state: state,
  } satisfies ZipDownloadStatus;
}
export function serializeKeywordSkillCardTypeField(
  val: KeywordSkillCardTypeField
): SerializedData {
  return val;
}
export function deserializeKeywordSkillCardTypeField(
  val: any
): KeywordSkillCardTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "KeywordSkillCardTypeField"';
  }
  if (val == 'skill_card') {
    return 'skill_card';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeKeywordSkillCardSkillCardTypeField(
  val: KeywordSkillCardSkillCardTypeField
): SerializedData {
  return val;
}
export function deserializeKeywordSkillCardSkillCardTypeField(
  val: any
): KeywordSkillCardSkillCardTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "KeywordSkillCardSkillCardTypeField"';
  }
  if (val == 'keyword') {
    return 'keyword';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeKeywordSkillCardSkillCardTitleField(
  val: KeywordSkillCardSkillCardTitleField
): SerializedData {
  return {
    ['code']: val.code == void 0 ? void 0 : val.code,
    ['message']: val.message,
  };
}
export function deserializeKeywordSkillCardSkillCardTitleField(
  val: any
): KeywordSkillCardSkillCardTitleField {
  const code: undefined | string = val.code == void 0 ? void 0 : val.code;
  const message: string = val.message;
  return {
    code: code,
    message: message,
  } satisfies KeywordSkillCardSkillCardTitleField;
}
export function serializeKeywordSkillCardSkillTypeField(
  val: KeywordSkillCardSkillTypeField
): SerializedData {
  return val;
}
export function deserializeKeywordSkillCardSkillTypeField(
  val: any
): KeywordSkillCardSkillTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "KeywordSkillCardSkillTypeField"';
  }
  if (val == 'service') {
    return 'service';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeKeywordSkillCardSkillField(
  val: KeywordSkillCardSkillField
): SerializedData {
  return {
    ['type']: serializeKeywordSkillCardSkillTypeField(val.type),
    ['id']: val.id,
  };
}
export function deserializeKeywordSkillCardSkillField(
  val: any
): KeywordSkillCardSkillField {
  const type: KeywordSkillCardSkillTypeField =
    deserializeKeywordSkillCardSkillTypeField(val.type);
  const id: string = val.id;
  return { type: type, id: id } satisfies KeywordSkillCardSkillField;
}
export function serializeKeywordSkillCardInvocationTypeField(
  val: KeywordSkillCardInvocationTypeField
): SerializedData {
  return val;
}
export function deserializeKeywordSkillCardInvocationTypeField(
  val: any
): KeywordSkillCardInvocationTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "KeywordSkillCardInvocationTypeField"';
  }
  if (val == 'skill_invocation') {
    return 'skill_invocation';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeKeywordSkillCardInvocationField(
  val: KeywordSkillCardInvocationField
): SerializedData {
  return {
    ['type']: serializeKeywordSkillCardInvocationTypeField(val.type),
    ['id']: val.id,
  };
}
export function deserializeKeywordSkillCardInvocationField(
  val: any
): KeywordSkillCardInvocationField {
  const type: KeywordSkillCardInvocationTypeField =
    deserializeKeywordSkillCardInvocationTypeField(val.type);
  const id: string = val.id;
  return { type: type, id: id } satisfies KeywordSkillCardInvocationField;
}
export function serializeKeywordSkillCardEntriesField(
  val: KeywordSkillCardEntriesField
): SerializedData {
  return { ['text']: val.text == void 0 ? void 0 : val.text };
}
export function deserializeKeywordSkillCardEntriesField(
  val: any
): KeywordSkillCardEntriesField {
  const text: undefined | string = val.text == void 0 ? void 0 : val.text;
  return { text: text } satisfies KeywordSkillCardEntriesField;
}
export function serializeKeywordSkillCard(
  val: KeywordSkillCard
): SerializedData {
  return {
    ['created_at']: val.createdAt == void 0 ? void 0 : val.createdAt,
    ['type']: serializeKeywordSkillCardTypeField(val.type),
    ['skill_card_type']: serializeKeywordSkillCardSkillCardTypeField(
      val.skillCardType
    ),
    ['skill_card_title']:
      val.skillCardTitle == void 0
        ? void 0
        : serializeKeywordSkillCardSkillCardTitleField(val.skillCardTitle),
    ['skill']: serializeKeywordSkillCardSkillField(val.skill),
    ['invocation']: serializeKeywordSkillCardInvocationField(val.invocation),
    ['entries']: val.entries.map(function (
      item: KeywordSkillCardEntriesField
    ): any {
      return serializeKeywordSkillCardEntriesField(item);
    }) as readonly any[],
  };
}
export function deserializeKeywordSkillCard(val: any): KeywordSkillCard {
  const createdAt: undefined | string =
    val.created_at == void 0 ? void 0 : val.created_at;
  const type: KeywordSkillCardTypeField = deserializeKeywordSkillCardTypeField(
    val.type
  );
  const skillCardType: KeywordSkillCardSkillCardTypeField =
    deserializeKeywordSkillCardSkillCardTypeField(val.skill_card_type);
  const skillCardTitle: undefined | KeywordSkillCardSkillCardTitleField =
    val.skill_card_title == void 0
      ? void 0
      : deserializeKeywordSkillCardSkillCardTitleField(val.skill_card_title);
  const skill: KeywordSkillCardSkillField =
    deserializeKeywordSkillCardSkillField(val.skill);
  const invocation: KeywordSkillCardInvocationField =
    deserializeKeywordSkillCardInvocationField(val.invocation);
  const entries: readonly KeywordSkillCardEntriesField[] = sdIsList(val.entries)
    ? (val.entries.map(function (itm: SerializedData): any {
        return deserializeKeywordSkillCardEntriesField(itm);
      }) as readonly any[])
    : [];
  return {
    createdAt: createdAt,
    type: type,
    skillCardType: skillCardType,
    skillCardTitle: skillCardTitle,
    skill: skill,
    invocation: invocation,
    entries: entries,
  } satisfies KeywordSkillCard;
}
export function serializeIntegrationMappingSlackOptions(
  val: IntegrationMappingSlackOptions
): SerializedData {
  return {
    ['is_access_management_disabled']:
      val.isAccessManagementDisabled == void 0
        ? void 0
        : val.isAccessManagementDisabled,
  };
}
export function deserializeIntegrationMappingSlackOptions(
  val: any
): IntegrationMappingSlackOptions {
  const isAccessManagementDisabled: undefined | boolean =
    val.is_access_management_disabled == void 0
      ? void 0
      : val.is_access_management_disabled;
  return {
    isAccessManagementDisabled: isAccessManagementDisabled,
  } satisfies IntegrationMappingSlackOptions;
}
export function serializeIntegrationMappingPartnerItemSlackTypeField(
  val: IntegrationMappingPartnerItemSlackTypeField
): SerializedData {
  return val;
}
export function deserializeIntegrationMappingPartnerItemSlackTypeField(
  val: any
): IntegrationMappingPartnerItemSlackTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "IntegrationMappingPartnerItemSlackTypeField"';
  }
  if (val == 'channel') {
    return 'channel';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeIntegrationMappingPartnerItemSlack(
  val: IntegrationMappingPartnerItemSlack
): SerializedData {
  return {
    ['type']: serializeIntegrationMappingPartnerItemSlackTypeField(val.type),
    ['id']: val.id,
    ['slack_workspace_id']:
      val.slackWorkspaceId == void 0 ? void 0 : val.slackWorkspaceId,
    ['slack_org_id']: val.slackOrgId == void 0 ? void 0 : val.slackOrgId,
  };
}
export function deserializeIntegrationMappingPartnerItemSlack(
  val: any
): IntegrationMappingPartnerItemSlack {
  const type: IntegrationMappingPartnerItemSlackTypeField =
    deserializeIntegrationMappingPartnerItemSlackTypeField(val.type);
  const id: string = val.id;
  const slackWorkspaceId: undefined | string =
    val.slack_workspace_id == void 0 ? void 0 : val.slack_workspace_id;
  const slackOrgId: undefined | string =
    val.slack_org_id == void 0 ? void 0 : val.slack_org_id;
  return {
    type: type,
    id: id,
    slackWorkspaceId: slackWorkspaceId,
    slackOrgId: slackOrgId,
  } satisfies IntegrationMappingPartnerItemSlack;
}
export function serializeIntegrationMappingTypeField(
  val: IntegrationMappingTypeField
): SerializedData {
  return val;
}
export function deserializeIntegrationMappingTypeField(
  val: any
): IntegrationMappingTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "IntegrationMappingTypeField"';
  }
  if (val == 'integration_mapping') {
    return 'integration_mapping';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeIntegrationMapping(
  val: IntegrationMapping
): SerializedData {
  const base: any = serializeIntegrationMappingBase(val);
  if (!sdIsMap(base)) {
    throw 'Expecting a map for "IntegrationMapping"';
  }
  return {
    ...base,
    ...{
      ['type']: serializeIntegrationMappingTypeField(val.type),
      ['partner_item']: serializeIntegrationMappingPartnerItemSlack(
        val.partnerItem
      ),
      ['box_item']: serializeFolderMini(val.boxItem),
      ['is_manually_created']:
        val.isManuallyCreated == void 0 ? void 0 : val.isManuallyCreated,
      ['options']:
        val.options == void 0
          ? void 0
          : serializeIntegrationMappingSlackOptions(val.options),
      ['created_by']:
        val.createdBy == void 0
          ? void 0
          : serializeUserIntegrationMappings(val.createdBy),
      ['modified_by']:
        val.modifiedBy == void 0
          ? void 0
          : serializeUserIntegrationMappings(val.modifiedBy),
      ['created_at']: val.createdAt == void 0 ? void 0 : val.createdAt,
      ['modified_at']: val.modifiedAt == void 0 ? void 0 : val.modifiedAt,
    },
  };
}
export function deserializeIntegrationMapping(val: any): IntegrationMapping {
  const type: IntegrationMappingTypeField =
    deserializeIntegrationMappingTypeField(val.type);
  const partnerItem: IntegrationMappingPartnerItemSlack =
    deserializeIntegrationMappingPartnerItemSlack(val.partner_item);
  const boxItem: FolderMini = deserializeFolderMini(val.box_item);
  const isManuallyCreated: undefined | boolean =
    val.is_manually_created == void 0 ? void 0 : val.is_manually_created;
  const options: undefined | IntegrationMappingSlackOptions =
    val.options == void 0
      ? void 0
      : deserializeIntegrationMappingSlackOptions(val.options);
  const createdBy: undefined | UserIntegrationMappings =
    val.created_by == void 0
      ? void 0
      : deserializeUserIntegrationMappings(val.created_by);
  const modifiedBy: undefined | UserIntegrationMappings =
    val.modified_by == void 0
      ? void 0
      : deserializeUserIntegrationMappings(val.modified_by);
  const createdAt: undefined | string =
    val.created_at == void 0 ? void 0 : val.created_at;
  const modifiedAt: undefined | string =
    val.modified_at == void 0 ? void 0 : val.modified_at;
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const integrationType:
    | undefined
    | IntegrationMappingBaseIntegrationTypeField =
    val.integration_type == void 0
      ? void 0
      : deserializeIntegrationMappingBaseIntegrationTypeField(
          val.integration_type
        );
  return {
    type: type,
    partnerItem: partnerItem,
    boxItem: boxItem,
    isManuallyCreated: isManuallyCreated,
    options: options,
    createdBy: createdBy,
    modifiedBy: modifiedBy,
    createdAt: createdAt,
    modifiedAt: modifiedAt,
    id: id,
    integrationType: integrationType,
  } satisfies IntegrationMapping;
}
export function serializeIntegrationMappings(
  val: IntegrationMappings
): SerializedData {
  return {
    ['limit']: val.limit == void 0 ? void 0 : val.limit,
    ['next_marker']: val.nextMarker == void 0 ? void 0 : val.nextMarker,
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (item: IntegrationMapping): any {
            return serializeIntegrationMapping(item);
          }) as readonly any[]),
  };
}
export function deserializeIntegrationMappings(val: any): IntegrationMappings {
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
  const nextMarker: undefined | string =
    val.next_marker == void 0 ? void 0 : val.next_marker;
  const entries: undefined | readonly IntegrationMapping[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (itm: SerializedData): any {
          return deserializeIntegrationMapping(itm);
        }) as readonly any[])
      : [];
  return {
    limit: limit,
    nextMarker: nextMarker,
    entries: entries,
  } satisfies IntegrationMappings;
}
export function serializeIntegrationMappingBoxItemSlackTypeField(
  val: IntegrationMappingBoxItemSlackTypeField
): SerializedData {
  return val;
}
export function deserializeIntegrationMappingBoxItemSlackTypeField(
  val: any
): IntegrationMappingBoxItemSlackTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "IntegrationMappingBoxItemSlackTypeField"';
  }
  if (val == 'folder') {
    return 'folder';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeIntegrationMappingBoxItemSlack(
  val: IntegrationMappingBoxItemSlack
): SerializedData {
  return {
    ['type']: serializeIntegrationMappingBoxItemSlackTypeField(val.type),
    ['id']: val.id,
  };
}
export function deserializeIntegrationMappingBoxItemSlack(
  val: any
): IntegrationMappingBoxItemSlack {
  const type: IntegrationMappingBoxItemSlackTypeField =
    deserializeIntegrationMappingBoxItemSlackTypeField(val.type);
  const id: string = val.id;
  return { type: type, id: id } satisfies IntegrationMappingBoxItemSlack;
}
export function serializeIntegrationMappingSlackCreateRequest(
  val: IntegrationMappingSlackCreateRequest
): SerializedData {
  return {
    ['partner_item']: serializeIntegrationMappingPartnerItemSlack(
      val.partnerItem
    ),
    ['box_item']: serializeIntegrationMappingBoxItemSlack(val.boxItem),
    ['options']:
      val.options == void 0
        ? void 0
        : serializeIntegrationMappingSlackOptions(val.options),
  };
}
export function deserializeIntegrationMappingSlackCreateRequest(
  val: any
): IntegrationMappingSlackCreateRequest {
  const partnerItem: IntegrationMappingPartnerItemSlack =
    deserializeIntegrationMappingPartnerItemSlack(val.partner_item);
  const boxItem: IntegrationMappingBoxItemSlack =
    deserializeIntegrationMappingBoxItemSlack(val.box_item);
  const options: undefined | IntegrationMappingSlackOptions =
    val.options == void 0
      ? void 0
      : deserializeIntegrationMappingSlackOptions(val.options);
  return {
    partnerItem: partnerItem,
    boxItem: boxItem,
    options: options,
  } satisfies IntegrationMappingSlackCreateRequest;
}
export function serializeTimelineSkillCardTypeField(
  val: TimelineSkillCardTypeField
): SerializedData {
  return val;
}
export function deserializeTimelineSkillCardTypeField(
  val: any
): TimelineSkillCardTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "TimelineSkillCardTypeField"';
  }
  if (val == 'skill_card') {
    return 'skill_card';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeTimelineSkillCardSkillCardTypeField(
  val: TimelineSkillCardSkillCardTypeField
): SerializedData {
  return val;
}
export function deserializeTimelineSkillCardSkillCardTypeField(
  val: any
): TimelineSkillCardSkillCardTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "TimelineSkillCardSkillCardTypeField"';
  }
  if (val == 'timeline') {
    return 'timeline';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeTimelineSkillCardSkillCardTitleField(
  val: TimelineSkillCardSkillCardTitleField
): SerializedData {
  return {
    ['code']: val.code == void 0 ? void 0 : val.code,
    ['message']: val.message,
  };
}
export function deserializeTimelineSkillCardSkillCardTitleField(
  val: any
): TimelineSkillCardSkillCardTitleField {
  const code: undefined | string = val.code == void 0 ? void 0 : val.code;
  const message: string = val.message;
  return {
    code: code,
    message: message,
  } satisfies TimelineSkillCardSkillCardTitleField;
}
export function serializeTimelineSkillCardSkillTypeField(
  val: TimelineSkillCardSkillTypeField
): SerializedData {
  return val;
}
export function deserializeTimelineSkillCardSkillTypeField(
  val: any
): TimelineSkillCardSkillTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "TimelineSkillCardSkillTypeField"';
  }
  if (val == 'service') {
    return 'service';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeTimelineSkillCardSkillField(
  val: TimelineSkillCardSkillField
): SerializedData {
  return {
    ['type']: serializeTimelineSkillCardSkillTypeField(val.type),
    ['id']: val.id,
  };
}
export function deserializeTimelineSkillCardSkillField(
  val: any
): TimelineSkillCardSkillField {
  const type: TimelineSkillCardSkillTypeField =
    deserializeTimelineSkillCardSkillTypeField(val.type);
  const id: string = val.id;
  return { type: type, id: id } satisfies TimelineSkillCardSkillField;
}
export function serializeTimelineSkillCardInvocationTypeField(
  val: TimelineSkillCardInvocationTypeField
): SerializedData {
  return val;
}
export function deserializeTimelineSkillCardInvocationTypeField(
  val: any
): TimelineSkillCardInvocationTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "TimelineSkillCardInvocationTypeField"';
  }
  if (val == 'skill_invocation') {
    return 'skill_invocation';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeTimelineSkillCardInvocationField(
  val: TimelineSkillCardInvocationField
): SerializedData {
  return {
    ['type']: serializeTimelineSkillCardInvocationTypeField(val.type),
    ['id']: val.id,
  };
}
export function deserializeTimelineSkillCardInvocationField(
  val: any
): TimelineSkillCardInvocationField {
  const type: TimelineSkillCardInvocationTypeField =
    deserializeTimelineSkillCardInvocationTypeField(val.type);
  const id: string = val.id;
  return { type: type, id: id } satisfies TimelineSkillCardInvocationField;
}
export function serializeTimelineSkillCardEntriesAppearsField(
  val: TimelineSkillCardEntriesAppearsField
): SerializedData {
  return {
    ['start']: val.start == void 0 ? void 0 : val.start,
    ['end']: val.end == void 0 ? void 0 : val.end,
  };
}
export function deserializeTimelineSkillCardEntriesAppearsField(
  val: any
): TimelineSkillCardEntriesAppearsField {
  const start: undefined | number = val.start == void 0 ? void 0 : val.start;
  const end: undefined | number = val.end == void 0 ? void 0 : val.end;
  return {
    start: start,
    end: end,
  } satisfies TimelineSkillCardEntriesAppearsField;
}
export function serializeTimelineSkillCardEntriesField(
  val: TimelineSkillCardEntriesField
): SerializedData {
  return {
    ['text']: val.text == void 0 ? void 0 : val.text,
    ['appears']:
      val.appears == void 0
        ? void 0
        : (val.appears.map(function (
            item: TimelineSkillCardEntriesAppearsField
          ): any {
            return serializeTimelineSkillCardEntriesAppearsField(item);
          }) as readonly any[]),
    ['image_url']: val.imageUrl == void 0 ? void 0 : val.imageUrl,
  };
}
export function deserializeTimelineSkillCardEntriesField(
  val: any
): TimelineSkillCardEntriesField {
  const text: undefined | string = val.text == void 0 ? void 0 : val.text;
  const appears: undefined | readonly TimelineSkillCardEntriesAppearsField[] =
    val.appears == void 0
      ? void 0
      : sdIsList(val.appears)
      ? (val.appears.map(function (itm: SerializedData): any {
          return deserializeTimelineSkillCardEntriesAppearsField(itm);
        }) as readonly any[])
      : [];
  const imageUrl: undefined | string =
    val.image_url == void 0 ? void 0 : val.image_url;
  return {
    text: text,
    appears: appears,
    imageUrl: imageUrl,
  } satisfies TimelineSkillCardEntriesField;
}
export function serializeTimelineSkillCard(
  val: TimelineSkillCard
): SerializedData {
  return {
    ['created_at']: val.createdAt == void 0 ? void 0 : val.createdAt,
    ['type']: serializeTimelineSkillCardTypeField(val.type),
    ['skill_card_type']: serializeTimelineSkillCardSkillCardTypeField(
      val.skillCardType
    ),
    ['skill_card_title']:
      val.skillCardTitle == void 0
        ? void 0
        : serializeTimelineSkillCardSkillCardTitleField(val.skillCardTitle),
    ['skill']: serializeTimelineSkillCardSkillField(val.skill),
    ['invocation']: serializeTimelineSkillCardInvocationField(val.invocation),
    ['duration']: val.duration == void 0 ? void 0 : val.duration,
    ['entries']: val.entries.map(function (
      item: TimelineSkillCardEntriesField
    ): any {
      return serializeTimelineSkillCardEntriesField(item);
    }) as readonly any[],
  };
}
export function deserializeTimelineSkillCard(val: any): TimelineSkillCard {
  const createdAt: undefined | string =
    val.created_at == void 0 ? void 0 : val.created_at;
  const type: TimelineSkillCardTypeField =
    deserializeTimelineSkillCardTypeField(val.type);
  const skillCardType: TimelineSkillCardSkillCardTypeField =
    deserializeTimelineSkillCardSkillCardTypeField(val.skill_card_type);
  const skillCardTitle: undefined | TimelineSkillCardSkillCardTitleField =
    val.skill_card_title == void 0
      ? void 0
      : deserializeTimelineSkillCardSkillCardTitleField(val.skill_card_title);
  const skill: TimelineSkillCardSkillField =
    deserializeTimelineSkillCardSkillField(val.skill);
  const invocation: TimelineSkillCardInvocationField =
    deserializeTimelineSkillCardInvocationField(val.invocation);
  const duration: undefined | number =
    val.duration == void 0 ? void 0 : val.duration;
  const entries: readonly TimelineSkillCardEntriesField[] = sdIsList(
    val.entries
  )
    ? (val.entries.map(function (itm: SerializedData): any {
        return deserializeTimelineSkillCardEntriesField(itm);
      }) as readonly any[])
    : [];
  return {
    createdAt: createdAt,
    type: type,
    skillCardType: skillCardType,
    skillCardTitle: skillCardTitle,
    skill: skill,
    invocation: invocation,
    duration: duration,
    entries: entries,
  } satisfies TimelineSkillCard;
}
export function serializeTranscriptSkillCardTypeField(
  val: TranscriptSkillCardTypeField
): SerializedData {
  return val;
}
export function deserializeTranscriptSkillCardTypeField(
  val: any
): TranscriptSkillCardTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "TranscriptSkillCardTypeField"';
  }
  if (val == 'skill_card') {
    return 'skill_card';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeTranscriptSkillCardSkillCardTypeField(
  val: TranscriptSkillCardSkillCardTypeField
): SerializedData {
  return val;
}
export function deserializeTranscriptSkillCardSkillCardTypeField(
  val: any
): TranscriptSkillCardSkillCardTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "TranscriptSkillCardSkillCardTypeField"';
  }
  if (val == 'transcript') {
    return 'transcript';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeTranscriptSkillCardSkillCardTitleField(
  val: TranscriptSkillCardSkillCardTitleField
): SerializedData {
  return {
    ['code']: val.code == void 0 ? void 0 : val.code,
    ['message']: val.message,
  };
}
export function deserializeTranscriptSkillCardSkillCardTitleField(
  val: any
): TranscriptSkillCardSkillCardTitleField {
  const code: undefined | string = val.code == void 0 ? void 0 : val.code;
  const message: string = val.message;
  return {
    code: code,
    message: message,
  } satisfies TranscriptSkillCardSkillCardTitleField;
}
export function serializeTranscriptSkillCardSkillTypeField(
  val: TranscriptSkillCardSkillTypeField
): SerializedData {
  return val;
}
export function deserializeTranscriptSkillCardSkillTypeField(
  val: any
): TranscriptSkillCardSkillTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "TranscriptSkillCardSkillTypeField"';
  }
  if (val == 'service') {
    return 'service';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeTranscriptSkillCardSkillField(
  val: TranscriptSkillCardSkillField
): SerializedData {
  return {
    ['type']: serializeTranscriptSkillCardSkillTypeField(val.type),
    ['id']: val.id,
  };
}
export function deserializeTranscriptSkillCardSkillField(
  val: any
): TranscriptSkillCardSkillField {
  const type: TranscriptSkillCardSkillTypeField =
    deserializeTranscriptSkillCardSkillTypeField(val.type);
  const id: string = val.id;
  return { type: type, id: id } satisfies TranscriptSkillCardSkillField;
}
export function serializeTranscriptSkillCardInvocationTypeField(
  val: TranscriptSkillCardInvocationTypeField
): SerializedData {
  return val;
}
export function deserializeTranscriptSkillCardInvocationTypeField(
  val: any
): TranscriptSkillCardInvocationTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "TranscriptSkillCardInvocationTypeField"';
  }
  if (val == 'skill_invocation') {
    return 'skill_invocation';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeTranscriptSkillCardInvocationField(
  val: TranscriptSkillCardInvocationField
): SerializedData {
  return {
    ['type']: serializeTranscriptSkillCardInvocationTypeField(val.type),
    ['id']: val.id,
  };
}
export function deserializeTranscriptSkillCardInvocationField(
  val: any
): TranscriptSkillCardInvocationField {
  const type: TranscriptSkillCardInvocationTypeField =
    deserializeTranscriptSkillCardInvocationTypeField(val.type);
  const id: string = val.id;
  return { type: type, id: id } satisfies TranscriptSkillCardInvocationField;
}
export function serializeTranscriptSkillCardEntriesAppearsField(
  val: TranscriptSkillCardEntriesAppearsField
): SerializedData {
  return { ['start']: val.start == void 0 ? void 0 : val.start };
}
export function deserializeTranscriptSkillCardEntriesAppearsField(
  val: any
): TranscriptSkillCardEntriesAppearsField {
  const start: undefined | number = val.start == void 0 ? void 0 : val.start;
  return { start: start } satisfies TranscriptSkillCardEntriesAppearsField;
}
export function serializeTranscriptSkillCardEntriesField(
  val: TranscriptSkillCardEntriesField
): SerializedData {
  return {
    ['text']: val.text == void 0 ? void 0 : val.text,
    ['appears']:
      val.appears == void 0
        ? void 0
        : (val.appears.map(function (
            item: TranscriptSkillCardEntriesAppearsField
          ): any {
            return serializeTranscriptSkillCardEntriesAppearsField(item);
          }) as readonly any[]),
  };
}
export function deserializeTranscriptSkillCardEntriesField(
  val: any
): TranscriptSkillCardEntriesField {
  const text: undefined | string = val.text == void 0 ? void 0 : val.text;
  const appears: undefined | readonly TranscriptSkillCardEntriesAppearsField[] =
    val.appears == void 0
      ? void 0
      : sdIsList(val.appears)
      ? (val.appears.map(function (itm: SerializedData): any {
          return deserializeTranscriptSkillCardEntriesAppearsField(itm);
        }) as readonly any[])
      : [];
  return {
    text: text,
    appears: appears,
  } satisfies TranscriptSkillCardEntriesField;
}
export function serializeTranscriptSkillCard(
  val: TranscriptSkillCard
): SerializedData {
  return {
    ['created_at']: val.createdAt == void 0 ? void 0 : val.createdAt,
    ['type']: serializeTranscriptSkillCardTypeField(val.type),
    ['skill_card_type']: serializeTranscriptSkillCardSkillCardTypeField(
      val.skillCardType
    ),
    ['skill_card_title']:
      val.skillCardTitle == void 0
        ? void 0
        : serializeTranscriptSkillCardSkillCardTitleField(val.skillCardTitle),
    ['skill']: serializeTranscriptSkillCardSkillField(val.skill),
    ['invocation']: serializeTranscriptSkillCardInvocationField(val.invocation),
    ['duration']: val.duration == void 0 ? void 0 : val.duration,
    ['entries']: val.entries.map(function (
      item: TranscriptSkillCardEntriesField
    ): any {
      return serializeTranscriptSkillCardEntriesField(item);
    }) as readonly any[],
  };
}
export function deserializeTranscriptSkillCard(val: any): TranscriptSkillCard {
  const createdAt: undefined | string =
    val.created_at == void 0 ? void 0 : val.created_at;
  const type: TranscriptSkillCardTypeField =
    deserializeTranscriptSkillCardTypeField(val.type);
  const skillCardType: TranscriptSkillCardSkillCardTypeField =
    deserializeTranscriptSkillCardSkillCardTypeField(val.skill_card_type);
  const skillCardTitle: undefined | TranscriptSkillCardSkillCardTitleField =
    val.skill_card_title == void 0
      ? void 0
      : deserializeTranscriptSkillCardSkillCardTitleField(val.skill_card_title);
  const skill: TranscriptSkillCardSkillField =
    deserializeTranscriptSkillCardSkillField(val.skill);
  const invocation: TranscriptSkillCardInvocationField =
    deserializeTranscriptSkillCardInvocationField(val.invocation);
  const duration: undefined | number =
    val.duration == void 0 ? void 0 : val.duration;
  const entries: readonly TranscriptSkillCardEntriesField[] = sdIsList(
    val.entries
  )
    ? (val.entries.map(function (itm: SerializedData): any {
        return deserializeTranscriptSkillCardEntriesField(itm);
      }) as readonly any[])
    : [];
  return {
    createdAt: createdAt,
    type: type,
    skillCardType: skillCardType,
    skillCardTitle: skillCardTitle,
    skill: skill,
    invocation: invocation,
    duration: duration,
    entries: entries,
  } satisfies TranscriptSkillCard;
}
export function serializeStatusSkillCardTypeField(
  val: StatusSkillCardTypeField
): SerializedData {
  return val;
}
export function deserializeStatusSkillCardTypeField(
  val: any
): StatusSkillCardTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "StatusSkillCardTypeField"';
  }
  if (val == 'skill_card') {
    return 'skill_card';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeStatusSkillCardSkillCardTypeField(
  val: StatusSkillCardSkillCardTypeField
): SerializedData {
  return val;
}
export function deserializeStatusSkillCardSkillCardTypeField(
  val: any
): StatusSkillCardSkillCardTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "StatusSkillCardSkillCardTypeField"';
  }
  if (val == 'status') {
    return 'status';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeStatusSkillCardSkillCardTitleField(
  val: StatusSkillCardSkillCardTitleField
): SerializedData {
  return {
    ['code']: val.code == void 0 ? void 0 : val.code,
    ['message']: val.message,
  };
}
export function deserializeStatusSkillCardSkillCardTitleField(
  val: any
): StatusSkillCardSkillCardTitleField {
  const code: undefined | string = val.code == void 0 ? void 0 : val.code;
  const message: string = val.message;
  return {
    code: code,
    message: message,
  } satisfies StatusSkillCardSkillCardTitleField;
}
export function serializeStatusSkillCardStatusCodeField(
  val: StatusSkillCardStatusCodeField
): SerializedData {
  return val;
}
export function deserializeStatusSkillCardStatusCodeField(
  val: any
): StatusSkillCardStatusCodeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "StatusSkillCardStatusCodeField"';
  }
  if (val == 'invoked') {
    return 'invoked';
  }
  if (val == 'processing') {
    return 'processing';
  }
  if (val == 'success') {
    return 'success';
  }
  if (val == 'transient_failure') {
    return 'transient_failure';
  }
  if (val == 'permanent_failure') {
    return 'permanent_failure';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeStatusSkillCardStatusField(
  val: StatusSkillCardStatusField
): SerializedData {
  return {
    ['code']: serializeStatusSkillCardStatusCodeField(val.code),
    ['message']: val.message == void 0 ? void 0 : val.message,
  };
}
export function deserializeStatusSkillCardStatusField(
  val: any
): StatusSkillCardStatusField {
  const code: StatusSkillCardStatusCodeField =
    deserializeStatusSkillCardStatusCodeField(val.code);
  const message: undefined | string =
    val.message == void 0 ? void 0 : val.message;
  return { code: code, message: message } satisfies StatusSkillCardStatusField;
}
export function serializeStatusSkillCardSkillTypeField(
  val: StatusSkillCardSkillTypeField
): SerializedData {
  return val;
}
export function deserializeStatusSkillCardSkillTypeField(
  val: any
): StatusSkillCardSkillTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "StatusSkillCardSkillTypeField"';
  }
  if (val == 'service') {
    return 'service';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeStatusSkillCardSkillField(
  val: StatusSkillCardSkillField
): SerializedData {
  return {
    ['type']: serializeStatusSkillCardSkillTypeField(val.type),
    ['id']: val.id,
  };
}
export function deserializeStatusSkillCardSkillField(
  val: any
): StatusSkillCardSkillField {
  const type: StatusSkillCardSkillTypeField =
    deserializeStatusSkillCardSkillTypeField(val.type);
  const id: string = val.id;
  return { type: type, id: id } satisfies StatusSkillCardSkillField;
}
export function serializeStatusSkillCardInvocationTypeField(
  val: StatusSkillCardInvocationTypeField
): SerializedData {
  return val;
}
export function deserializeStatusSkillCardInvocationTypeField(
  val: any
): StatusSkillCardInvocationTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "StatusSkillCardInvocationTypeField"';
  }
  if (val == 'skill_invocation') {
    return 'skill_invocation';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeStatusSkillCardInvocationField(
  val: StatusSkillCardInvocationField
): SerializedData {
  return {
    ['type']: serializeStatusSkillCardInvocationTypeField(val.type),
    ['id']: val.id,
  };
}
export function deserializeStatusSkillCardInvocationField(
  val: any
): StatusSkillCardInvocationField {
  const type: StatusSkillCardInvocationTypeField =
    deserializeStatusSkillCardInvocationTypeField(val.type);
  const id: string = val.id;
  return { type: type, id: id } satisfies StatusSkillCardInvocationField;
}
export function serializeStatusSkillCard(val: StatusSkillCard): SerializedData {
  return {
    ['created_at']: val.createdAt == void 0 ? void 0 : val.createdAt,
    ['type']: serializeStatusSkillCardTypeField(val.type),
    ['skill_card_type']: serializeStatusSkillCardSkillCardTypeField(
      val.skillCardType
    ),
    ['skill_card_title']:
      val.skillCardTitle == void 0
        ? void 0
        : serializeStatusSkillCardSkillCardTitleField(val.skillCardTitle),
    ['status']: serializeStatusSkillCardStatusField(val.status),
    ['skill']: serializeStatusSkillCardSkillField(val.skill),
    ['invocation']: serializeStatusSkillCardInvocationField(val.invocation),
  };
}
export function deserializeStatusSkillCard(val: any): StatusSkillCard {
  const createdAt: undefined | string =
    val.created_at == void 0 ? void 0 : val.created_at;
  const type: StatusSkillCardTypeField = deserializeStatusSkillCardTypeField(
    val.type
  );
  const skillCardType: StatusSkillCardSkillCardTypeField =
    deserializeStatusSkillCardSkillCardTypeField(val.skill_card_type);
  const skillCardTitle: undefined | StatusSkillCardSkillCardTitleField =
    val.skill_card_title == void 0
      ? void 0
      : deserializeStatusSkillCardSkillCardTitleField(val.skill_card_title);
  const status: StatusSkillCardStatusField =
    deserializeStatusSkillCardStatusField(val.status);
  const skill: StatusSkillCardSkillField = deserializeStatusSkillCardSkillField(
    val.skill
  );
  const invocation: StatusSkillCardInvocationField =
    deserializeStatusSkillCardInvocationField(val.invocation);
  return {
    createdAt: createdAt,
    type: type,
    skillCardType: skillCardType,
    skillCardTitle: skillCardTitle,
    status: status,
    skill: skill,
    invocation: invocation,
  } satisfies StatusSkillCard;
}
export function serializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard(
  val: KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard
): SerializedData {
  throw "Can't serialize KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard";
}
export function deserializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard(
  val: any
): KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard {
  throw "Can't deserialize KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard";
}
export function serializeSkillCardsMetadata(
  val: SkillCardsMetadata
): SerializedData {
  return {
    ['$canEdit']: val.canEdit == void 0 ? void 0 : val.canEdit,
    ['$id']: val.id == void 0 ? void 0 : val.id,
    ['$parent']: val.parent == void 0 ? void 0 : val.parent,
    ['$scope']: val.scope == void 0 ? void 0 : val.scope,
    ['$template']: val.template == void 0 ? void 0 : val.template,
    ['$type']: val.type == void 0 ? void 0 : val.type,
    ['$typeVersion']: val.typeVersion == void 0 ? void 0 : val.typeVersion,
    ['$version']: val.version == void 0 ? void 0 : val.version,
    ['cards']:
      val.cards == void 0
        ? void 0
        : (val.cards.map(function (
            item: KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard
          ): any {
            return serializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard(
              item
            );
          }) as readonly any[]),
  };
}
export function deserializeSkillCardsMetadata(val: any): SkillCardsMetadata {
  const canEdit: undefined | boolean =
    val.$canEdit == void 0 ? void 0 : val.$canEdit;
  const id: undefined | string = val.$id == void 0 ? void 0 : val.$id;
  const parent: undefined | string =
    val.$parent == void 0 ? void 0 : val.$parent;
  const scope: undefined | string = val.$scope == void 0 ? void 0 : val.$scope;
  const template: undefined | string =
    val.$template == void 0 ? void 0 : val.$template;
  const type: undefined | string = val.$type == void 0 ? void 0 : val.$type;
  const typeVersion: undefined | number =
    val.$typeVersion == void 0 ? void 0 : val.$typeVersion;
  const version: undefined | number =
    val.$version == void 0 ? void 0 : val.$version;
  const cards:
    | undefined
    | readonly KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard[] =
    val.cards == void 0
      ? void 0
      : sdIsList(val.cards)
      ? (val.cards.map(function (itm: SerializedData): any {
          return deserializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard(
            itm
          );
        }) as readonly any[])
      : [];
  return {
    canEdit: canEdit,
    id: id,
    parent: parent,
    scope: scope,
    template: template,
    type: type,
    typeVersion: typeVersion,
    version: version,
    cards: cards,
  } satisfies SkillCardsMetadata;
}
export function serializeSignRequestCreateSignerRoleField(
  val: SignRequestCreateSignerRoleField
): SerializedData {
  return val;
}
export function deserializeSignRequestCreateSignerRoleField(
  val: any
): SignRequestCreateSignerRoleField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "SignRequestCreateSignerRoleField"';
  }
  if (val == 'signer') {
    return 'signer';
  }
  if (val == 'approver') {
    return 'approver';
  }
  if (val == 'final_copy_reader') {
    return 'final_copy_reader';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeSignRequestCreateSigner(
  val: SignRequestCreateSigner
): SerializedData {
  return {
    ['email']: val.email == void 0 ? void 0 : val.email,
    ['role']:
      val.role == void 0
        ? void 0
        : serializeSignRequestCreateSignerRoleField(val.role),
    ['is_in_person']: val.isInPerson == void 0 ? void 0 : val.isInPerson,
    ['order']: val.order == void 0 ? void 0 : val.order,
    ['embed_url_external_user_id']:
      val.embedUrlExternalUserId == void 0
        ? void 0
        : val.embedUrlExternalUserId,
    ['redirect_url']: val.redirectUrl == void 0 ? void 0 : val.redirectUrl,
    ['declined_redirect_url']:
      val.declinedRedirectUrl == void 0 ? void 0 : val.declinedRedirectUrl,
    ['login_required']:
      val.loginRequired == void 0 ? void 0 : val.loginRequired,
    ['verification_phone_number']:
      val.verificationPhoneNumber == void 0
        ? void 0
        : val.verificationPhoneNumber,
    ['password']: val.password == void 0 ? void 0 : val.password,
    ['signer_group_id']:
      val.signerGroupId == void 0 ? void 0 : val.signerGroupId,
  };
}
export function deserializeSignRequestCreateSigner(
  val: any
): SignRequestCreateSigner {
  const email: undefined | string = val.email == void 0 ? void 0 : val.email;
  const role: undefined | SignRequestCreateSignerRoleField =
    val.role == void 0
      ? void 0
      : deserializeSignRequestCreateSignerRoleField(val.role);
  const isInPerson: undefined | boolean =
    val.is_in_person == void 0 ? void 0 : val.is_in_person;
  const order: undefined | number = val.order == void 0 ? void 0 : val.order;
  const embedUrlExternalUserId: undefined | string =
    val.embed_url_external_user_id == void 0
      ? void 0
      : val.embed_url_external_user_id;
  const redirectUrl: undefined | string =
    val.redirect_url == void 0 ? void 0 : val.redirect_url;
  const declinedRedirectUrl: undefined | string =
    val.declined_redirect_url == void 0 ? void 0 : val.declined_redirect_url;
  const loginRequired: undefined | boolean =
    val.login_required == void 0 ? void 0 : val.login_required;
  const verificationPhoneNumber: undefined | string =
    val.verification_phone_number == void 0
      ? void 0
      : val.verification_phone_number;
  const password: undefined | string =
    val.password == void 0 ? void 0 : val.password;
  const signerGroupId: undefined | string =
    val.signer_group_id == void 0 ? void 0 : val.signer_group_id;
  return {
    email: email,
    role: role,
    isInPerson: isInPerson,
    order: order,
    embedUrlExternalUserId: embedUrlExternalUserId,
    redirectUrl: redirectUrl,
    declinedRedirectUrl: declinedRedirectUrl,
    loginRequired: loginRequired,
    verificationPhoneNumber: verificationPhoneNumber,
    password: password,
    signerGroupId: signerGroupId,
  } satisfies SignRequestCreateSigner;
}
export function serializeSignRequestPrefillTag(
  val: SignRequestPrefillTag
): SerializedData {
  return {
    ['document_tag_id']:
      val.documentTagId == void 0 ? void 0 : val.documentTagId,
    ['text_value']: val.textValue == void 0 ? void 0 : val.textValue,
    ['checkbox_value']:
      val.checkboxValue == void 0 ? void 0 : val.checkboxValue,
    ['date_value']: val.dateValue == void 0 ? void 0 : val.dateValue,
  };
}
export function deserializeSignRequestPrefillTag(
  val: any
): SignRequestPrefillTag {
  const documentTagId: undefined | string =
    val.document_tag_id == void 0 ? void 0 : val.document_tag_id;
  const textValue: undefined | string =
    val.text_value == void 0 ? void 0 : val.text_value;
  const checkboxValue: undefined | boolean =
    val.checkbox_value == void 0 ? void 0 : val.checkbox_value;
  const dateValue: undefined | string =
    val.date_value == void 0 ? void 0 : val.date_value;
  return {
    documentTagId: documentTagId,
    textValue: textValue,
    checkboxValue: checkboxValue,
    dateValue: dateValue,
  } satisfies SignRequestPrefillTag;
}
export function serializeSignRequestSignerInputTypeField(
  val: SignRequestSignerInputTypeField
): SerializedData {
  return val;
}
export function deserializeSignRequestSignerInputTypeField(
  val: any
): SignRequestSignerInputTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "SignRequestSignerInputTypeField"';
  }
  if (val == 'signature') {
    return 'signature';
  }
  if (val == 'date') {
    return 'date';
  }
  if (val == 'text') {
    return 'text';
  }
  if (val == 'checkbox') {
    return 'checkbox';
  }
  if (val == 'radio') {
    return 'radio';
  }
  if (val == 'dropdown') {
    return 'dropdown';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeSignRequestSignerInputContentTypeField(
  val: SignRequestSignerInputContentTypeField
): SerializedData {
  return val;
}
export function deserializeSignRequestSignerInputContentTypeField(
  val: any
): SignRequestSignerInputContentTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "SignRequestSignerInputContentTypeField"';
  }
  if (val == 'signature') {
    return 'signature';
  }
  if (val == 'initial') {
    return 'initial';
  }
  if (val == 'stamp') {
    return 'stamp';
  }
  if (val == 'date') {
    return 'date';
  }
  if (val == 'checkbox') {
    return 'checkbox';
  }
  if (val == 'text') {
    return 'text';
  }
  if (val == 'full_name') {
    return 'full_name';
  }
  if (val == 'first_name') {
    return 'first_name';
  }
  if (val == 'last_name') {
    return 'last_name';
  }
  if (val == 'company') {
    return 'company';
  }
  if (val == 'title') {
    return 'title';
  }
  if (val == 'email') {
    return 'email';
  }
  if (val == 'attachment') {
    return 'attachment';
  }
  if (val == 'radio') {
    return 'radio';
  }
  if (val == 'dropdown') {
    return 'dropdown';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeSignRequestSignerInput(
  val: SignRequestSignerInput
): SerializedData {
  const base: any = serializeSignRequestPrefillTag(val);
  if (!sdIsMap(base)) {
    throw 'Expecting a map for "SignRequestSignerInput"';
  }
  return {
    ...base,
    ...{
      ['type']:
        val.type == void 0
          ? void 0
          : serializeSignRequestSignerInputTypeField(val.type),
      ['content_type']:
        val.contentType == void 0
          ? void 0
          : serializeSignRequestSignerInputContentTypeField(val.contentType),
      ['page_index']: val.pageIndex,
    },
  };
}
export function deserializeSignRequestSignerInput(
  val: any
): SignRequestSignerInput {
  const type: undefined | SignRequestSignerInputTypeField =
    val.type == void 0
      ? void 0
      : deserializeSignRequestSignerInputTypeField(val.type);
  const contentType: undefined | SignRequestSignerInputContentTypeField =
    val.content_type == void 0
      ? void 0
      : deserializeSignRequestSignerInputContentTypeField(val.content_type);
  const pageIndex: number = val.page_index;
  const documentTagId: undefined | string =
    val.document_tag_id == void 0 ? void 0 : val.document_tag_id;
  const textValue: undefined | string =
    val.text_value == void 0 ? void 0 : val.text_value;
  const checkboxValue: undefined | boolean =
    val.checkbox_value == void 0 ? void 0 : val.checkbox_value;
  const dateValue: undefined | string =
    val.date_value == void 0 ? void 0 : val.date_value;
  return {
    type: type,
    contentType: contentType,
    pageIndex: pageIndex,
    documentTagId: documentTagId,
    textValue: textValue,
    checkboxValue: checkboxValue,
    dateValue: dateValue,
  } satisfies SignRequestSignerInput;
}
export function serializeSignRequestSignerSignerDecisionTypeField(
  val: SignRequestSignerSignerDecisionTypeField
): SerializedData {
  return val;
}
export function deserializeSignRequestSignerSignerDecisionTypeField(
  val: any
): SignRequestSignerSignerDecisionTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "SignRequestSignerSignerDecisionTypeField"';
  }
  if (val == 'signed') {
    return 'signed';
  }
  if (val == 'declined') {
    return 'declined';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeSignRequestSignerSignerDecisionField(
  val: SignRequestSignerSignerDecisionField
): SerializedData {
  return {
    ['type']:
      val.type == void 0
        ? void 0
        : serializeSignRequestSignerSignerDecisionTypeField(val.type),
    ['finalized_at']: val.finalizedAt == void 0 ? void 0 : val.finalizedAt,
    ['additional_info']:
      val.additionalInfo == void 0 ? void 0 : val.additionalInfo,
  };
}
export function deserializeSignRequestSignerSignerDecisionField(
  val: any
): SignRequestSignerSignerDecisionField {
  const type: undefined | SignRequestSignerSignerDecisionTypeField =
    val.type == void 0
      ? void 0
      : deserializeSignRequestSignerSignerDecisionTypeField(val.type);
  const finalizedAt: undefined | string =
    val.finalized_at == void 0 ? void 0 : val.finalized_at;
  const additionalInfo: undefined | string =
    val.additional_info == void 0 ? void 0 : val.additional_info;
  return {
    type: type,
    finalizedAt: finalizedAt,
    additionalInfo: additionalInfo,
  } satisfies SignRequestSignerSignerDecisionField;
}
export function serializeSignRequestSigner(
  val: SignRequestSigner
): SerializedData {
  const base: any = serializeSignRequestCreateSigner(val);
  if (!sdIsMap(base)) {
    throw 'Expecting a map for "SignRequestSigner"';
  }
  return {
    ...base,
    ...{
      ['has_viewed_document']:
        val.hasViewedDocument == void 0 ? void 0 : val.hasViewedDocument,
      ['signer_decision']:
        val.signerDecision == void 0
          ? void 0
          : serializeSignRequestSignerSignerDecisionField(val.signerDecision),
      ['inputs']:
        val.inputs == void 0
          ? void 0
          : (val.inputs.map(function (item: SignRequestSignerInput): any {
              return serializeSignRequestSignerInput(item);
            }) as readonly any[]),
      ['embed_url']: val.embedUrl == void 0 ? void 0 : val.embedUrl,
      ['iframeable_embed_url']:
        val.iframeableEmbedUrl == void 0 ? void 0 : val.iframeableEmbedUrl,
    },
  };
}
export function deserializeSignRequestSigner(val: any): SignRequestSigner {
  const hasViewedDocument: undefined | boolean =
    val.has_viewed_document == void 0 ? void 0 : val.has_viewed_document;
  const signerDecision: undefined | SignRequestSignerSignerDecisionField =
    val.signer_decision == void 0
      ? void 0
      : deserializeSignRequestSignerSignerDecisionField(val.signer_decision);
  const inputs: undefined | readonly SignRequestSignerInput[] =
    val.inputs == void 0
      ? void 0
      : sdIsList(val.inputs)
      ? (val.inputs.map(function (itm: SerializedData): any {
          return deserializeSignRequestSignerInput(itm);
        }) as readonly any[])
      : [];
  const embedUrl: undefined | string =
    val.embed_url == void 0 ? void 0 : val.embed_url;
  const iframeableEmbedUrl: undefined | string =
    val.iframeable_embed_url == void 0 ? void 0 : val.iframeable_embed_url;
  const email: undefined | string = val.email == void 0 ? void 0 : val.email;
  const role: undefined | SignRequestCreateSignerRoleField =
    val.role == void 0
      ? void 0
      : deserializeSignRequestCreateSignerRoleField(val.role);
  const isInPerson: undefined | boolean =
    val.is_in_person == void 0 ? void 0 : val.is_in_person;
  const order: undefined | number = val.order == void 0 ? void 0 : val.order;
  const embedUrlExternalUserId: undefined | string =
    val.embed_url_external_user_id == void 0
      ? void 0
      : val.embed_url_external_user_id;
  const redirectUrl: undefined | string =
    val.redirect_url == void 0 ? void 0 : val.redirect_url;
  const declinedRedirectUrl: undefined | string =
    val.declined_redirect_url == void 0 ? void 0 : val.declined_redirect_url;
  const loginRequired: undefined | boolean =
    val.login_required == void 0 ? void 0 : val.login_required;
  const verificationPhoneNumber: undefined | string =
    val.verification_phone_number == void 0
      ? void 0
      : val.verification_phone_number;
  const password: undefined | string =
    val.password == void 0 ? void 0 : val.password;
  const signerGroupId: undefined | string =
    val.signer_group_id == void 0 ? void 0 : val.signer_group_id;
  return {
    hasViewedDocument: hasViewedDocument,
    signerDecision: signerDecision,
    inputs: inputs,
    embedUrl: embedUrl,
    iframeableEmbedUrl: iframeableEmbedUrl,
    email: email,
    role: role,
    isInPerson: isInPerson,
    order: order,
    embedUrlExternalUserId: embedUrlExternalUserId,
    redirectUrl: redirectUrl,
    declinedRedirectUrl: declinedRedirectUrl,
    loginRequired: loginRequired,
    verificationPhoneNumber: verificationPhoneNumber,
    password: password,
    signerGroupId: signerGroupId,
  } satisfies SignRequestSigner;
}
export function serializeSignRequestBase(val: SignRequestBase): SerializedData {
  return {
    ['is_document_preparation_needed']:
      val.isDocumentPreparationNeeded == void 0
        ? void 0
        : val.isDocumentPreparationNeeded,
    ['redirect_url']: val.redirectUrl == void 0 ? void 0 : val.redirectUrl,
    ['declined_redirect_url']:
      val.declinedRedirectUrl == void 0 ? void 0 : val.declinedRedirectUrl,
    ['are_text_signatures_enabled']:
      val.areTextSignaturesEnabled == void 0
        ? void 0
        : val.areTextSignaturesEnabled,
    ['email_subject']: val.emailSubject == void 0 ? void 0 : val.emailSubject,
    ['email_message']: val.emailMessage == void 0 ? void 0 : val.emailMessage,
    ['are_reminders_enabled']:
      val.areRemindersEnabled == void 0 ? void 0 : val.areRemindersEnabled,
    ['parent_folder']: serializeFolderMini(val.parentFolder),
    ['name']: val.name == void 0 ? void 0 : val.name,
    ['prefill_tags']:
      val.prefillTags == void 0
        ? void 0
        : (val.prefillTags.map(function (item: SignRequestPrefillTag): any {
            return serializeSignRequestPrefillTag(item);
          }) as readonly any[]),
    ['days_valid']: val.daysValid == void 0 ? void 0 : val.daysValid,
    ['external_id']: val.externalId == void 0 ? void 0 : val.externalId,
    ['is_phone_verification_required_to_view']:
      val.isPhoneVerificationRequiredToView == void 0
        ? void 0
        : val.isPhoneVerificationRequiredToView,
    ['template_id']: val.templateId == void 0 ? void 0 : val.templateId,
  };
}
export function deserializeSignRequestBase(val: any): SignRequestBase {
  const isDocumentPreparationNeeded: undefined | boolean =
    val.is_document_preparation_needed == void 0
      ? void 0
      : val.is_document_preparation_needed;
  const redirectUrl: undefined | string =
    val.redirect_url == void 0 ? void 0 : val.redirect_url;
  const declinedRedirectUrl: undefined | string =
    val.declined_redirect_url == void 0 ? void 0 : val.declined_redirect_url;
  const areTextSignaturesEnabled: undefined | boolean =
    val.are_text_signatures_enabled == void 0
      ? void 0
      : val.are_text_signatures_enabled;
  const emailSubject: undefined | string =
    val.email_subject == void 0 ? void 0 : val.email_subject;
  const emailMessage: undefined | string =
    val.email_message == void 0 ? void 0 : val.email_message;
  const areRemindersEnabled: undefined | boolean =
    val.are_reminders_enabled == void 0 ? void 0 : val.are_reminders_enabled;
  const parentFolder: FolderMini = deserializeFolderMini(val.parent_folder);
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const prefillTags: undefined | readonly SignRequestPrefillTag[] =
    val.prefill_tags == void 0
      ? void 0
      : sdIsList(val.prefill_tags)
      ? (val.prefill_tags.map(function (itm: SerializedData): any {
          return deserializeSignRequestPrefillTag(itm);
        }) as readonly any[])
      : [];
  const daysValid: undefined | number =
    val.days_valid == void 0 ? void 0 : val.days_valid;
  const externalId: undefined | string =
    val.external_id == void 0 ? void 0 : val.external_id;
  const isPhoneVerificationRequiredToView: undefined | boolean =
    val.is_phone_verification_required_to_view == void 0
      ? void 0
      : val.is_phone_verification_required_to_view;
  const templateId: undefined | string =
    val.template_id == void 0 ? void 0 : val.template_id;
  return {
    isDocumentPreparationNeeded: isDocumentPreparationNeeded,
    redirectUrl: redirectUrl,
    declinedRedirectUrl: declinedRedirectUrl,
    areTextSignaturesEnabled: areTextSignaturesEnabled,
    emailSubject: emailSubject,
    emailMessage: emailMessage,
    areRemindersEnabled: areRemindersEnabled,
    parentFolder: parentFolder,
    name: name,
    prefillTags: prefillTags,
    daysValid: daysValid,
    externalId: externalId,
    isPhoneVerificationRequiredToView: isPhoneVerificationRequiredToView,
    templateId: templateId,
  } satisfies SignRequestBase;
}
export function serializeSignRequestTypeField(
  val: SignRequestTypeField
): SerializedData {
  return val;
}
export function deserializeSignRequestTypeField(
  val: any
): SignRequestTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "SignRequestTypeField"';
  }
  if (val == 'sign-request') {
    return 'sign-request';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeSignRequestStatusField(
  val: SignRequestStatusField
): SerializedData {
  return val;
}
export function deserializeSignRequestStatusField(
  val: any
): SignRequestStatusField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "SignRequestStatusField"';
  }
  if (val == 'converting') {
    return 'converting';
  }
  if (val == 'created') {
    return 'created';
  }
  if (val == 'sent') {
    return 'sent';
  }
  if (val == 'viewed') {
    return 'viewed';
  }
  if (val == 'signed') {
    return 'signed';
  }
  if (val == 'cancelled') {
    return 'cancelled';
  }
  if (val == 'declined') {
    return 'declined';
  }
  if (val == 'error_converting') {
    return 'error_converting';
  }
  if (val == 'error_sending') {
    return 'error_sending';
  }
  if (val == 'expired') {
    return 'expired';
  }
  if (val == 'finalizing') {
    return 'finalizing';
  }
  if (val == 'error_finalizing') {
    return 'error_finalizing';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeSignRequestSignFilesField(
  val: SignRequestSignFilesField
): SerializedData {
  return {
    ['files']:
      val.files == void 0
        ? void 0
        : (val.files.map(function (item: FileMini): any {
            return serializeFileMini(item);
          }) as readonly any[]),
    ['is_ready_for_download']:
      val.isReadyForDownload == void 0 ? void 0 : val.isReadyForDownload,
  };
}
export function deserializeSignRequestSignFilesField(
  val: any
): SignRequestSignFilesField {
  const files: undefined | readonly FileMini[] =
    val.files == void 0
      ? void 0
      : sdIsList(val.files)
      ? (val.files.map(function (itm: SerializedData): any {
          return deserializeFileMini(itm);
        }) as readonly any[])
      : [];
  const isReadyForDownload: undefined | boolean =
    val.is_ready_for_download == void 0 ? void 0 : val.is_ready_for_download;
  return {
    files: files,
    isReadyForDownload: isReadyForDownload,
  } satisfies SignRequestSignFilesField;
}
export function serializeSignRequest(val: SignRequest): SerializedData {
  const base: any = serializeSignRequestBase(val);
  if (!sdIsMap(base)) {
    throw 'Expecting a map for "SignRequest"';
  }
  return {
    ...base,
    ...{
      ['type']:
        val.type == void 0 ? void 0 : serializeSignRequestTypeField(val.type),
      ['source_files']:
        val.sourceFiles == void 0
          ? void 0
          : (val.sourceFiles.map(function (item: FileBase): any {
              return serializeFileBase(item);
            }) as readonly any[]),
      ['signers']:
        val.signers == void 0
          ? void 0
          : (val.signers.map(function (item: SignRequestSigner): any {
              return serializeSignRequestSigner(item);
            }) as readonly any[]),
      ['signature_color']:
        val.signatureColor == void 0 ? void 0 : val.signatureColor,
      ['id']: val.id == void 0 ? void 0 : val.id,
      ['prepare_url']: val.prepareUrl == void 0 ? void 0 : val.prepareUrl,
      ['signing_log']:
        val.signingLog == void 0 ? void 0 : serializeFileMini(val.signingLog),
      ['status']:
        val.status == void 0
          ? void 0
          : serializeSignRequestStatusField(val.status),
      ['sign_files']:
        val.signFiles == void 0
          ? void 0
          : serializeSignRequestSignFilesField(val.signFiles),
      ['auto_expire_at']:
        val.autoExpireAt == void 0 ? void 0 : val.autoExpireAt,
    },
  };
}
export function deserializeSignRequest(val: any): SignRequest {
  const type: undefined | SignRequestTypeField =
    val.type == void 0 ? void 0 : deserializeSignRequestTypeField(val.type);
  const sourceFiles: undefined | readonly FileBase[] =
    val.source_files == void 0
      ? void 0
      : sdIsList(val.source_files)
      ? (val.source_files.map(function (itm: SerializedData): any {
          return deserializeFileBase(itm);
        }) as readonly any[])
      : [];
  const signers: undefined | readonly SignRequestSigner[] =
    val.signers == void 0
      ? void 0
      : sdIsList(val.signers)
      ? (val.signers.map(function (itm: SerializedData): any {
          return deserializeSignRequestSigner(itm);
        }) as readonly any[])
      : [];
  const signatureColor: undefined | string =
    val.signature_color == void 0 ? void 0 : val.signature_color;
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const prepareUrl: undefined | string =
    val.prepare_url == void 0 ? void 0 : val.prepare_url;
  const signingLog: undefined | FileMini =
    val.signing_log == void 0 ? void 0 : deserializeFileMini(val.signing_log);
  const status: undefined | SignRequestStatusField =
    val.status == void 0
      ? void 0
      : deserializeSignRequestStatusField(val.status);
  const signFiles: undefined | SignRequestSignFilesField =
    val.sign_files == void 0
      ? void 0
      : deserializeSignRequestSignFilesField(val.sign_files);
  const autoExpireAt: undefined | string =
    val.auto_expire_at == void 0 ? void 0 : val.auto_expire_at;
  const isDocumentPreparationNeeded: undefined | boolean =
    val.is_document_preparation_needed == void 0
      ? void 0
      : val.is_document_preparation_needed;
  const redirectUrl: undefined | string =
    val.redirect_url == void 0 ? void 0 : val.redirect_url;
  const declinedRedirectUrl: undefined | string =
    val.declined_redirect_url == void 0 ? void 0 : val.declined_redirect_url;
  const areTextSignaturesEnabled: undefined | boolean =
    val.are_text_signatures_enabled == void 0
      ? void 0
      : val.are_text_signatures_enabled;
  const emailSubject: undefined | string =
    val.email_subject == void 0 ? void 0 : val.email_subject;
  const emailMessage: undefined | string =
    val.email_message == void 0 ? void 0 : val.email_message;
  const areRemindersEnabled: undefined | boolean =
    val.are_reminders_enabled == void 0 ? void 0 : val.are_reminders_enabled;
  const parentFolder: FolderMini = deserializeFolderMini(val.parent_folder);
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const prefillTags: undefined | readonly SignRequestPrefillTag[] =
    val.prefill_tags == void 0
      ? void 0
      : sdIsList(val.prefill_tags)
      ? (val.prefill_tags.map(function (itm: SerializedData): any {
          return deserializeSignRequestPrefillTag(itm);
        }) as readonly any[])
      : [];
  const daysValid: undefined | number =
    val.days_valid == void 0 ? void 0 : val.days_valid;
  const externalId: undefined | string =
    val.external_id == void 0 ? void 0 : val.external_id;
  const isPhoneVerificationRequiredToView: undefined | boolean =
    val.is_phone_verification_required_to_view == void 0
      ? void 0
      : val.is_phone_verification_required_to_view;
  const templateId: undefined | string =
    val.template_id == void 0 ? void 0 : val.template_id;
  return {
    type: type,
    sourceFiles: sourceFiles,
    signers: signers,
    signatureColor: signatureColor,
    id: id,
    prepareUrl: prepareUrl,
    signingLog: signingLog,
    status: status,
    signFiles: signFiles,
    autoExpireAt: autoExpireAt,
    isDocumentPreparationNeeded: isDocumentPreparationNeeded,
    redirectUrl: redirectUrl,
    declinedRedirectUrl: declinedRedirectUrl,
    areTextSignaturesEnabled: areTextSignaturesEnabled,
    emailSubject: emailSubject,
    emailMessage: emailMessage,
    areRemindersEnabled: areRemindersEnabled,
    parentFolder: parentFolder,
    name: name,
    prefillTags: prefillTags,
    daysValid: daysValid,
    externalId: externalId,
    isPhoneVerificationRequiredToView: isPhoneVerificationRequiredToView,
    templateId: templateId,
  } satisfies SignRequest;
}
export function serializeSignRequests(val: SignRequests): SerializedData {
  return {
    ['limit']: val.limit == void 0 ? void 0 : val.limit,
    ['next_marker']: val.nextMarker == void 0 ? void 0 : val.nextMarker,
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (item: SignRequest): any {
            return serializeSignRequest(item);
          }) as readonly any[]),
  };
}
export function deserializeSignRequests(val: any): SignRequests {
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
  const nextMarker: undefined | string =
    val.next_marker == void 0 ? void 0 : val.next_marker;
  const entries: undefined | readonly SignRequest[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (itm: SerializedData): any {
          return deserializeSignRequest(itm);
        }) as readonly any[])
      : [];
  return {
    limit: limit,
    nextMarker: nextMarker,
    entries: entries,
  } satisfies SignRequests;
}
export function serializeSignRequestCreateRequestSignatureColorField(
  val: SignRequestCreateRequestSignatureColorField
): SerializedData {
  return val;
}
export function deserializeSignRequestCreateRequestSignatureColorField(
  val: any
): SignRequestCreateRequestSignatureColorField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "SignRequestCreateRequestSignatureColorField"';
  }
  if (val == 'blue') {
    return 'blue';
  }
  if (val == 'black') {
    return 'black';
  }
  if (val == 'red') {
    return 'red';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeSignRequestCreateRequest(
  val: SignRequestCreateRequest
): SerializedData {
  const base: any = serializeSignRequestBase(val);
  if (!sdIsMap(base)) {
    throw 'Expecting a map for "SignRequestCreateRequest"';
  }
  return {
    ...base,
    ...{
      ['source_files']:
        val.sourceFiles == void 0
          ? void 0
          : (val.sourceFiles.map(function (item: FileBase): any {
              return serializeFileBase(item);
            }) as readonly any[]),
      ['signature_color']:
        val.signatureColor == void 0
          ? void 0
          : serializeSignRequestCreateRequestSignatureColorField(
              val.signatureColor
            ),
      ['signers']: val.signers.map(function (
        item: SignRequestCreateSigner
      ): any {
        return serializeSignRequestCreateSigner(item);
      }) as readonly any[],
    },
  };
}
export function deserializeSignRequestCreateRequest(
  val: any
): SignRequestCreateRequest {
  const sourceFiles: undefined | readonly FileBase[] =
    val.source_files == void 0
      ? void 0
      : sdIsList(val.source_files)
      ? (val.source_files.map(function (itm: SerializedData): any {
          return deserializeFileBase(itm);
        }) as readonly any[])
      : [];
  const signatureColor:
    | undefined
    | SignRequestCreateRequestSignatureColorField =
    val.signature_color == void 0
      ? void 0
      : deserializeSignRequestCreateRequestSignatureColorField(
          val.signature_color
        );
  const signers: readonly SignRequestCreateSigner[] = sdIsList(val.signers)
    ? (val.signers.map(function (itm: SerializedData): any {
        return deserializeSignRequestCreateSigner(itm);
      }) as readonly any[])
    : [];
  const isDocumentPreparationNeeded: undefined | boolean =
    val.is_document_preparation_needed == void 0
      ? void 0
      : val.is_document_preparation_needed;
  const redirectUrl: undefined | string =
    val.redirect_url == void 0 ? void 0 : val.redirect_url;
  const declinedRedirectUrl: undefined | string =
    val.declined_redirect_url == void 0 ? void 0 : val.declined_redirect_url;
  const areTextSignaturesEnabled: undefined | boolean =
    val.are_text_signatures_enabled == void 0
      ? void 0
      : val.are_text_signatures_enabled;
  const emailSubject: undefined | string =
    val.email_subject == void 0 ? void 0 : val.email_subject;
  const emailMessage: undefined | string =
    val.email_message == void 0 ? void 0 : val.email_message;
  const areRemindersEnabled: undefined | boolean =
    val.are_reminders_enabled == void 0 ? void 0 : val.are_reminders_enabled;
  const parentFolder: FolderMini = deserializeFolderMini(val.parent_folder);
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const prefillTags: undefined | readonly SignRequestPrefillTag[] =
    val.prefill_tags == void 0
      ? void 0
      : sdIsList(val.prefill_tags)
      ? (val.prefill_tags.map(function (itm: SerializedData): any {
          return deserializeSignRequestPrefillTag(itm);
        }) as readonly any[])
      : [];
  const daysValid: undefined | number =
    val.days_valid == void 0 ? void 0 : val.days_valid;
  const externalId: undefined | string =
    val.external_id == void 0 ? void 0 : val.external_id;
  const isPhoneVerificationRequiredToView: undefined | boolean =
    val.is_phone_verification_required_to_view == void 0
      ? void 0
      : val.is_phone_verification_required_to_view;
  const templateId: undefined | string =
    val.template_id == void 0 ? void 0 : val.template_id;
  return {
    sourceFiles: sourceFiles,
    signatureColor: signatureColor,
    signers: signers,
    isDocumentPreparationNeeded: isDocumentPreparationNeeded,
    redirectUrl: redirectUrl,
    declinedRedirectUrl: declinedRedirectUrl,
    areTextSignaturesEnabled: areTextSignaturesEnabled,
    emailSubject: emailSubject,
    emailMessage: emailMessage,
    areRemindersEnabled: areRemindersEnabled,
    parentFolder: parentFolder,
    name: name,
    prefillTags: prefillTags,
    daysValid: daysValid,
    externalId: externalId,
    isPhoneVerificationRequiredToView: isPhoneVerificationRequiredToView,
    templateId: templateId,
  } satisfies SignRequestCreateRequest;
}
export function serializeTemplateSignerInputTypeField(
  val: TemplateSignerInputTypeField
): SerializedData {
  return val;
}
export function deserializeTemplateSignerInputTypeField(
  val: any
): TemplateSignerInputTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "TemplateSignerInputTypeField"';
  }
  if (val == 'signature') {
    return 'signature';
  }
  if (val == 'date') {
    return 'date';
  }
  if (val == 'text') {
    return 'text';
  }
  if (val == 'checkbox') {
    return 'checkbox';
  }
  if (val == 'attachment') {
    return 'attachment';
  }
  if (val == 'radio') {
    return 'radio';
  }
  if (val == 'dropdown') {
    return 'dropdown';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeTemplateSignerInputContentTypeField(
  val: TemplateSignerInputContentTypeField
): SerializedData {
  return val;
}
export function deserializeTemplateSignerInputContentTypeField(
  val: any
): TemplateSignerInputContentTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "TemplateSignerInputContentTypeField"';
  }
  if (val == 'signature') {
    return 'signature';
  }
  if (val == 'initial') {
    return 'initial';
  }
  if (val == 'stamp') {
    return 'stamp';
  }
  if (val == 'date') {
    return 'date';
  }
  if (val == 'checkbox') {
    return 'checkbox';
  }
  if (val == 'text') {
    return 'text';
  }
  if (val == 'full_name') {
    return 'full_name';
  }
  if (val == 'first_name') {
    return 'first_name';
  }
  if (val == 'last_name') {
    return 'last_name';
  }
  if (val == 'company') {
    return 'company';
  }
  if (val == 'title') {
    return 'title';
  }
  if (val == 'email') {
    return 'email';
  }
  if (val == 'attachment') {
    return 'attachment';
  }
  if (val == 'radio') {
    return 'radio';
  }
  if (val == 'dropdown') {
    return 'dropdown';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeTemplateSignerInputCoordinatesField(
  val: TemplateSignerInputCoordinatesField
): SerializedData {
  return {
    ['x']: val.x == void 0 ? void 0 : val.x,
    ['y']: val.y == void 0 ? void 0 : val.y,
  };
}
export function deserializeTemplateSignerInputCoordinatesField(
  val: any
): TemplateSignerInputCoordinatesField {
  const x: undefined | number = val.x == void 0 ? void 0 : val.x;
  const y: undefined | number = val.y == void 0 ? void 0 : val.y;
  return { x: x, y: y } satisfies TemplateSignerInputCoordinatesField;
}
export function serializeTemplateSignerInputDimensionsField(
  val: TemplateSignerInputDimensionsField
): SerializedData {
  return {
    ['width']: val.width == void 0 ? void 0 : val.width,
    ['height']: val.height == void 0 ? void 0 : val.height,
  };
}
export function deserializeTemplateSignerInputDimensionsField(
  val: any
): TemplateSignerInputDimensionsField {
  const width: undefined | number = val.width == void 0 ? void 0 : val.width;
  const height: undefined | number = val.height == void 0 ? void 0 : val.height;
  return {
    width: width,
    height: height,
  } satisfies TemplateSignerInputDimensionsField;
}
export function serializeTemplateSignerInput(
  val: TemplateSignerInput
): SerializedData {
  const base: any = serializeSignRequestPrefillTag(val);
  if (!sdIsMap(base)) {
    throw 'Expecting a map for "TemplateSignerInput"';
  }
  return {
    ...base,
    ...{
      ['type']:
        val.type == void 0
          ? void 0
          : serializeTemplateSignerInputTypeField(val.type),
      ['content_type']:
        val.contentType == void 0
          ? void 0
          : serializeTemplateSignerInputContentTypeField(val.contentType),
      ['is_required']: val.isRequired == void 0 ? void 0 : val.isRequired,
      ['page_index']: val.pageIndex,
      ['document_id']: val.documentId == void 0 ? void 0 : val.documentId,
      ['dropdown_choices']:
        val.dropdownChoices == void 0
          ? void 0
          : (val.dropdownChoices.map(function (item: string): any {
              return item;
            }) as readonly any[]),
      ['group_id']: val.groupId == void 0 ? void 0 : val.groupId,
      ['coordinates']:
        val.coordinates == void 0
          ? void 0
          : serializeTemplateSignerInputCoordinatesField(val.coordinates),
      ['dimensions']:
        val.dimensions == void 0
          ? void 0
          : serializeTemplateSignerInputDimensionsField(val.dimensions),
      ['label']: val.label == void 0 ? void 0 : val.label,
    },
  };
}
export function deserializeTemplateSignerInput(val: any): TemplateSignerInput {
  const type: undefined | TemplateSignerInputTypeField =
    val.type == void 0
      ? void 0
      : deserializeTemplateSignerInputTypeField(val.type);
  const contentType: undefined | TemplateSignerInputContentTypeField =
    val.content_type == void 0
      ? void 0
      : deserializeTemplateSignerInputContentTypeField(val.content_type);
  const isRequired: undefined | boolean =
    val.is_required == void 0 ? void 0 : val.is_required;
  const pageIndex: number = val.page_index;
  const documentId: undefined | string =
    val.document_id == void 0 ? void 0 : val.document_id;
  const dropdownChoices: undefined | readonly string[] =
    val.dropdown_choices == void 0
      ? void 0
      : sdIsList(val.dropdown_choices)
      ? (val.dropdown_choices.map(function (itm: SerializedData): any {
          return itm;
        }) as readonly any[])
      : [];
  const groupId: undefined | string =
    val.group_id == void 0 ? void 0 : val.group_id;
  const coordinates: undefined | TemplateSignerInputCoordinatesField =
    val.coordinates == void 0
      ? void 0
      : deserializeTemplateSignerInputCoordinatesField(val.coordinates);
  const dimensions: undefined | TemplateSignerInputDimensionsField =
    val.dimensions == void 0
      ? void 0
      : deserializeTemplateSignerInputDimensionsField(val.dimensions);
  const label: undefined | string = val.label == void 0 ? void 0 : val.label;
  const documentTagId: undefined | string =
    val.document_tag_id == void 0 ? void 0 : val.document_tag_id;
  const textValue: undefined | string =
    val.text_value == void 0 ? void 0 : val.text_value;
  const checkboxValue: undefined | boolean =
    val.checkbox_value == void 0 ? void 0 : val.checkbox_value;
  const dateValue: undefined | string =
    val.date_value == void 0 ? void 0 : val.date_value;
  return {
    type: type,
    contentType: contentType,
    isRequired: isRequired,
    pageIndex: pageIndex,
    documentId: documentId,
    dropdownChoices: dropdownChoices,
    groupId: groupId,
    coordinates: coordinates,
    dimensions: dimensions,
    label: label,
    documentTagId: documentTagId,
    textValue: textValue,
    checkboxValue: checkboxValue,
    dateValue: dateValue,
  } satisfies TemplateSignerInput;
}
export function serializeTemplateSignerRoleField(
  val: TemplateSignerRoleField
): SerializedData {
  return val;
}
export function deserializeTemplateSignerRoleField(
  val: any
): TemplateSignerRoleField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "TemplateSignerRoleField"';
  }
  if (val == 'signer') {
    return 'signer';
  }
  if (val == 'approver') {
    return 'approver';
  }
  if (val == 'final_copy_reader') {
    return 'final_copy_reader';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeTemplateSigner(val: TemplateSigner): SerializedData {
  return {
    ['inputs']:
      val.inputs == void 0
        ? void 0
        : (val.inputs.map(function (item: TemplateSignerInput): any {
            return serializeTemplateSignerInput(item);
          }) as readonly any[]),
    ['email']: val.email == void 0 ? void 0 : val.email,
    ['role']:
      val.role == void 0 ? void 0 : serializeTemplateSignerRoleField(val.role),
    ['is_in_person']: val.isInPerson == void 0 ? void 0 : val.isInPerson,
    ['order']: val.order == void 0 ? void 0 : val.order,
    ['signer_group_id']:
      val.signerGroupId == void 0 ? void 0 : val.signerGroupId,
  };
}
export function deserializeTemplateSigner(val: any): TemplateSigner {
  const inputs: undefined | readonly TemplateSignerInput[] =
    val.inputs == void 0
      ? void 0
      : sdIsList(val.inputs)
      ? (val.inputs.map(function (itm: SerializedData): any {
          return deserializeTemplateSignerInput(itm);
        }) as readonly any[])
      : [];
  const email: undefined | string = val.email == void 0 ? void 0 : val.email;
  const role: undefined | TemplateSignerRoleField =
    val.role == void 0 ? void 0 : deserializeTemplateSignerRoleField(val.role);
  const isInPerson: undefined | boolean =
    val.is_in_person == void 0 ? void 0 : val.is_in_person;
  const order: undefined | number = val.order == void 0 ? void 0 : val.order;
  const signerGroupId: undefined | string =
    val.signer_group_id == void 0 ? void 0 : val.signer_group_id;
  return {
    inputs: inputs,
    email: email,
    role: role,
    isInPerson: isInPerson,
    order: order,
    signerGroupId: signerGroupId,
  } satisfies TemplateSigner;
}
export function serializeSignTemplateTypeField(
  val: SignTemplateTypeField
): SerializedData {
  return val;
}
export function deserializeSignTemplateTypeField(
  val: any
): SignTemplateTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "SignTemplateTypeField"';
  }
  if (val == 'sign-template') {
    return 'sign-template';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeSignTemplateAdditionalInfoNonEditableField(
  val: SignTemplateAdditionalInfoNonEditableField
): SerializedData {
  return val;
}
export function deserializeSignTemplateAdditionalInfoNonEditableField(
  val: any
): SignTemplateAdditionalInfoNonEditableField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "SignTemplateAdditionalInfoNonEditableField"';
  }
  if (val == 'email_subject') {
    return 'email_subject';
  }
  if (val == 'email_message') {
    return 'email_message';
  }
  if (val == 'name') {
    return 'name';
  }
  if (val == 'days_valid') {
    return 'days_valid';
  }
  if (val == 'signers') {
    return 'signers';
  }
  if (val == 'source_files') {
    return 'source_files';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeSignTemplateAdditionalInfoRequiredSignersField(
  val: SignTemplateAdditionalInfoRequiredSignersField
): SerializedData {
  return val;
}
export function deserializeSignTemplateAdditionalInfoRequiredSignersField(
  val: any
): SignTemplateAdditionalInfoRequiredSignersField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "SignTemplateAdditionalInfoRequiredSignersField"';
  }
  if (val == 'email') {
    return 'email';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeSignTemplateAdditionalInfoRequiredField(
  val: SignTemplateAdditionalInfoRequiredField
): SerializedData {
  return {
    ['signers']:
      val.signers == void 0
        ? void 0
        : (val.signers.map(function (
            item: readonly SignTemplateAdditionalInfoRequiredSignersField[]
          ): any {
            return item.map(function (
              item: SignTemplateAdditionalInfoRequiredSignersField
            ): any {
              return serializeSignTemplateAdditionalInfoRequiredSignersField(
                item
              );
            }) as readonly any[];
          }) as readonly any[]),
  };
}
export function deserializeSignTemplateAdditionalInfoRequiredField(
  val: any
): SignTemplateAdditionalInfoRequiredField {
  const signers:
    | undefined
    | readonly (readonly SignTemplateAdditionalInfoRequiredSignersField[])[] =
    val.signers == void 0
      ? void 0
      : sdIsList(val.signers)
      ? (val.signers.map(function (itm: SerializedData): any {
          return sdIsList(itm)
            ? (itm.map(function (itm: SerializedData): any {
                return deserializeSignTemplateAdditionalInfoRequiredSignersField(
                  itm
                );
              }) as readonly any[])
            : [];
        }) as readonly any[])
      : [];
  return { signers: signers } satisfies SignTemplateAdditionalInfoRequiredField;
}
export function serializeSignTemplateAdditionalInfoField(
  val: SignTemplateAdditionalInfoField
): SerializedData {
  return {
    ['non_editable']:
      val.nonEditable == void 0
        ? void 0
        : (val.nonEditable.map(function (
            item: SignTemplateAdditionalInfoNonEditableField
          ): any {
            return serializeSignTemplateAdditionalInfoNonEditableField(item);
          }) as readonly any[]),
    ['required']:
      val.required == void 0
        ? void 0
        : serializeSignTemplateAdditionalInfoRequiredField(val.required),
  };
}
export function deserializeSignTemplateAdditionalInfoField(
  val: any
): SignTemplateAdditionalInfoField {
  const nonEditable:
    | undefined
    | readonly SignTemplateAdditionalInfoNonEditableField[] =
    val.non_editable == void 0
      ? void 0
      : sdIsList(val.non_editable)
      ? (val.non_editable.map(function (itm: SerializedData): any {
          return deserializeSignTemplateAdditionalInfoNonEditableField(itm);
        }) as readonly any[])
      : [];
  const required: undefined | SignTemplateAdditionalInfoRequiredField =
    val.required == void 0
      ? void 0
      : deserializeSignTemplateAdditionalInfoRequiredField(val.required);
  return {
    nonEditable: nonEditable,
    required: required,
  } satisfies SignTemplateAdditionalInfoField;
}
export function serializeSignTemplateReadySignLinkField(
  val: SignTemplateReadySignLinkField
): SerializedData {
  return {
    ['url']: val.url == void 0 ? void 0 : val.url,
    ['name']: val.name == void 0 ? void 0 : val.name,
    ['instructions']: val.instructions == void 0 ? void 0 : val.instructions,
    ['folder_id']: val.folderId == void 0 ? void 0 : val.folderId,
    ['is_notification_disabled']:
      val.isNotificationDisabled == void 0
        ? void 0
        : val.isNotificationDisabled,
    ['is_active']: val.isActive == void 0 ? void 0 : val.isActive,
  };
}
export function deserializeSignTemplateReadySignLinkField(
  val: any
): SignTemplateReadySignLinkField {
  const url: undefined | string = val.url == void 0 ? void 0 : val.url;
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const instructions: undefined | string =
    val.instructions == void 0 ? void 0 : val.instructions;
  const folderId: undefined | string =
    val.folder_id == void 0 ? void 0 : val.folder_id;
  const isNotificationDisabled: undefined | boolean =
    val.is_notification_disabled == void 0
      ? void 0
      : val.is_notification_disabled;
  const isActive: undefined | boolean =
    val.is_active == void 0 ? void 0 : val.is_active;
  return {
    url: url,
    name: name,
    instructions: instructions,
    folderId: folderId,
    isNotificationDisabled: isNotificationDisabled,
    isActive: isActive,
  } satisfies SignTemplateReadySignLinkField;
}
export function serializeSignTemplateCustomBrandingField(
  val: SignTemplateCustomBrandingField
): SerializedData {
  return {
    ['company_name']: val.companyName == void 0 ? void 0 : val.companyName,
    ['logo_uri']: val.logoUri == void 0 ? void 0 : val.logoUri,
    ['branding_color']:
      val.brandingColor == void 0 ? void 0 : val.brandingColor,
    ['email_footer_text']:
      val.emailFooterText == void 0 ? void 0 : val.emailFooterText,
  };
}
export function deserializeSignTemplateCustomBrandingField(
  val: any
): SignTemplateCustomBrandingField {
  const companyName: undefined | string =
    val.company_name == void 0 ? void 0 : val.company_name;
  const logoUri: undefined | string =
    val.logo_uri == void 0 ? void 0 : val.logo_uri;
  const brandingColor: undefined | string =
    val.branding_color == void 0 ? void 0 : val.branding_color;
  const emailFooterText: undefined | string =
    val.email_footer_text == void 0 ? void 0 : val.email_footer_text;
  return {
    companyName: companyName,
    logoUri: logoUri,
    brandingColor: brandingColor,
    emailFooterText: emailFooterText,
  } satisfies SignTemplateCustomBrandingField;
}
export function serializeSignTemplate(val: SignTemplate): SerializedData {
  return {
    ['type']:
      val.type == void 0 ? void 0 : serializeSignTemplateTypeField(val.type),
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['name']: val.name == void 0 ? void 0 : val.name,
    ['email_subject']: val.emailSubject == void 0 ? void 0 : val.emailSubject,
    ['email_message']: val.emailMessage == void 0 ? void 0 : val.emailMessage,
    ['days_valid']: val.daysValid == void 0 ? void 0 : val.daysValid,
    ['parent_folder']:
      val.parentFolder == void 0
        ? void 0
        : serializeFolderMini(val.parentFolder),
    ['source_files']:
      val.sourceFiles == void 0
        ? void 0
        : (val.sourceFiles.map(function (item: FileMini): any {
            return serializeFileMini(item);
          }) as readonly any[]),
    ['are_fields_locked']:
      val.areFieldsLocked == void 0 ? void 0 : val.areFieldsLocked,
    ['are_options_locked']:
      val.areOptionsLocked == void 0 ? void 0 : val.areOptionsLocked,
    ['are_recipients_locked']:
      val.areRecipientsLocked == void 0 ? void 0 : val.areRecipientsLocked,
    ['are_email_settings_locked']:
      val.areEmailSettingsLocked == void 0
        ? void 0
        : val.areEmailSettingsLocked,
    ['are_files_locked']:
      val.areFilesLocked == void 0 ? void 0 : val.areFilesLocked,
    ['signers']:
      val.signers == void 0
        ? void 0
        : (val.signers.map(function (item: TemplateSigner): any {
            return serializeTemplateSigner(item);
          }) as readonly any[]),
    ['additional_info']:
      val.additionalInfo == void 0
        ? void 0
        : serializeSignTemplateAdditionalInfoField(val.additionalInfo),
    ['ready_sign_link']:
      val.readySignLink == void 0
        ? void 0
        : serializeSignTemplateReadySignLinkField(val.readySignLink),
    ['custom_branding']:
      val.customBranding == void 0
        ? void 0
        : serializeSignTemplateCustomBrandingField(val.customBranding),
  };
}
export function deserializeSignTemplate(val: any): SignTemplate {
  const type: undefined | SignTemplateTypeField =
    val.type == void 0 ? void 0 : deserializeSignTemplateTypeField(val.type);
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const emailSubject: undefined | string =
    val.email_subject == void 0 ? void 0 : val.email_subject;
  const emailMessage: undefined | string =
    val.email_message == void 0 ? void 0 : val.email_message;
  const daysValid: undefined | number =
    val.days_valid == void 0 ? void 0 : val.days_valid;
  const parentFolder: undefined | FolderMini =
    val.parent_folder == void 0
      ? void 0
      : deserializeFolderMini(val.parent_folder);
  const sourceFiles: undefined | readonly FileMini[] =
    val.source_files == void 0
      ? void 0
      : sdIsList(val.source_files)
      ? (val.source_files.map(function (itm: SerializedData): any {
          return deserializeFileMini(itm);
        }) as readonly any[])
      : [];
  const areFieldsLocked: undefined | boolean =
    val.are_fields_locked == void 0 ? void 0 : val.are_fields_locked;
  const areOptionsLocked: undefined | boolean =
    val.are_options_locked == void 0 ? void 0 : val.are_options_locked;
  const areRecipientsLocked: undefined | boolean =
    val.are_recipients_locked == void 0 ? void 0 : val.are_recipients_locked;
  const areEmailSettingsLocked: undefined | boolean =
    val.are_email_settings_locked == void 0
      ? void 0
      : val.are_email_settings_locked;
  const areFilesLocked: undefined | boolean =
    val.are_files_locked == void 0 ? void 0 : val.are_files_locked;
  const signers: undefined | readonly TemplateSigner[] =
    val.signers == void 0
      ? void 0
      : sdIsList(val.signers)
      ? (val.signers.map(function (itm: SerializedData): any {
          return deserializeTemplateSigner(itm);
        }) as readonly any[])
      : [];
  const additionalInfo: undefined | SignTemplateAdditionalInfoField =
    val.additional_info == void 0
      ? void 0
      : deserializeSignTemplateAdditionalInfoField(val.additional_info);
  const readySignLink: undefined | SignTemplateReadySignLinkField =
    val.ready_sign_link == void 0
      ? void 0
      : deserializeSignTemplateReadySignLinkField(val.ready_sign_link);
  const customBranding: undefined | SignTemplateCustomBrandingField =
    val.custom_branding == void 0
      ? void 0
      : deserializeSignTemplateCustomBrandingField(val.custom_branding);
  return {
    type: type,
    id: id,
    name: name,
    emailSubject: emailSubject,
    emailMessage: emailMessage,
    daysValid: daysValid,
    parentFolder: parentFolder,
    sourceFiles: sourceFiles,
    areFieldsLocked: areFieldsLocked,
    areOptionsLocked: areOptionsLocked,
    areRecipientsLocked: areRecipientsLocked,
    areEmailSettingsLocked: areEmailSettingsLocked,
    areFilesLocked: areFilesLocked,
    signers: signers,
    additionalInfo: additionalInfo,
    readySignLink: readySignLink,
    customBranding: customBranding,
  } satisfies SignTemplate;
}
export function serializeSignTemplates(val: SignTemplates): SerializedData {
  return {
    ['limit']: val.limit == void 0 ? void 0 : val.limit,
    ['next_marker']: val.nextMarker == void 0 ? void 0 : val.nextMarker,
    ['prev_marker']: val.prevMarker == void 0 ? void 0 : val.prevMarker,
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (item: SignTemplate): any {
            return serializeSignTemplate(item);
          }) as readonly any[]),
  };
}
export function deserializeSignTemplates(val: any): SignTemplates {
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
  const nextMarker: undefined | string =
    val.next_marker == void 0 ? void 0 : val.next_marker;
  const prevMarker: undefined | string =
    val.prev_marker == void 0 ? void 0 : val.prev_marker;
  const entries: undefined | readonly SignTemplate[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (itm: SerializedData): any {
          return deserializeSignTemplate(itm);
        }) as readonly any[])
      : [];
  return {
    limit: limit,
    nextMarker: nextMarker,
    prevMarker: prevMarker,
    entries: entries,
  } satisfies SignTemplates;
}
export function serializeShieldInformationBarrierReportDetailsDetailsField(
  val: ShieldInformationBarrierReportDetailsDetailsField
): SerializedData {
  return { ['folder_id']: val.folderId == void 0 ? void 0 : val.folderId };
}
export function deserializeShieldInformationBarrierReportDetailsDetailsField(
  val: any
): ShieldInformationBarrierReportDetailsDetailsField {
  const folderId: undefined | string =
    val.folder_id == void 0 ? void 0 : val.folder_id;
  return {
    folderId: folderId,
  } satisfies ShieldInformationBarrierReportDetailsDetailsField;
}
export function serializeShieldInformationBarrierReportDetails(
  val: ShieldInformationBarrierReportDetails
): SerializedData {
  return {
    ['details']:
      val.details == void 0
        ? void 0
        : serializeShieldInformationBarrierReportDetailsDetailsField(
            val.details
          ),
  };
}
export function deserializeShieldInformationBarrierReportDetails(
  val: any
): ShieldInformationBarrierReportDetails {
  const details: undefined | ShieldInformationBarrierReportDetailsDetailsField =
    val.details == void 0
      ? void 0
      : deserializeShieldInformationBarrierReportDetailsDetailsField(
          val.details
        );
  return { details: details } satisfies ShieldInformationBarrierReportDetails;
}
export function serializeShieldInformationBarrierReportStatusField(
  val: ShieldInformationBarrierReportStatusField
): SerializedData {
  return val;
}
export function deserializeShieldInformationBarrierReportStatusField(
  val: any
): ShieldInformationBarrierReportStatusField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "ShieldInformationBarrierReportStatusField"';
  }
  if (val == 'pending') {
    return 'pending';
  }
  if (val == 'error') {
    return 'error';
  }
  if (val == 'done') {
    return 'done';
  }
  if (val == 'cancelled') {
    return 'cancelled';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeShieldInformationBarrierReport(
  val: ShieldInformationBarrierReport
): SerializedData {
  const base: any = serializeShieldInformationBarrierReportBase(val);
  if (!sdIsMap(base)) {
    throw 'Expecting a map for "ShieldInformationBarrierReport"';
  }
  return {
    ...base,
    ...{
      ['shield_information_barrier']:
        val.shieldInformationBarrier == void 0
          ? void 0
          : serializeShieldInformationBarrierReference(
              val.shieldInformationBarrier
            ),
      ['status']:
        val.status == void 0
          ? void 0
          : serializeShieldInformationBarrierReportStatusField(val.status),
      ['details']:
        val.details == void 0
          ? void 0
          : serializeShieldInformationBarrierReportDetails(val.details),
      ['created_at']: val.createdAt == void 0 ? void 0 : val.createdAt,
      ['created_by']:
        val.createdBy == void 0 ? void 0 : serializeUserBase(val.createdBy),
      ['updated_at']: val.updatedAt == void 0 ? void 0 : val.updatedAt,
    },
  };
}
export function deserializeShieldInformationBarrierReport(
  val: any
): ShieldInformationBarrierReport {
  const shieldInformationBarrier:
    | undefined
    | ShieldInformationBarrierReference =
    val.shield_information_barrier == void 0
      ? void 0
      : deserializeShieldInformationBarrierReference(
          val.shield_information_barrier
        );
  const status: undefined | ShieldInformationBarrierReportStatusField =
    val.status == void 0
      ? void 0
      : deserializeShieldInformationBarrierReportStatusField(val.status);
  const details: undefined | ShieldInformationBarrierReportDetails =
    val.details == void 0
      ? void 0
      : deserializeShieldInformationBarrierReportDetails(val.details);
  const createdAt: undefined | string =
    val.created_at == void 0 ? void 0 : val.created_at;
  const createdBy: undefined | UserBase =
    val.created_by == void 0 ? void 0 : deserializeUserBase(val.created_by);
  const updatedAt: undefined | string =
    val.updated_at == void 0 ? void 0 : val.updated_at;
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | ShieldInformationBarrierReportBaseTypeField =
    val.type == void 0
      ? void 0
      : deserializeShieldInformationBarrierReportBaseTypeField(val.type);
  return {
    shieldInformationBarrier: shieldInformationBarrier,
    status: status,
    details: details,
    createdAt: createdAt,
    createdBy: createdBy,
    updatedAt: updatedAt,
    id: id,
    type: type,
  } satisfies ShieldInformationBarrierReport;
}
export function serializeShieldInformationBarrierReports(
  val: ShieldInformationBarrierReports
): SerializedData {
  return {
    ['limit']: val.limit == void 0 ? void 0 : val.limit,
    ['next_marker']: val.nextMarker == void 0 ? void 0 : val.nextMarker,
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (
            item: ShieldInformationBarrierReport
          ): any {
            return serializeShieldInformationBarrierReport(item);
          }) as readonly any[]),
  };
}
export function deserializeShieldInformationBarrierReports(
  val: any
): ShieldInformationBarrierReports {
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
  const nextMarker: undefined | string =
    val.next_marker == void 0 ? void 0 : val.next_marker;
  const entries: undefined | readonly ShieldInformationBarrierReport[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (itm: SerializedData): any {
          return deserializeShieldInformationBarrierReport(itm);
        }) as readonly any[])
      : [];
  return {
    limit: limit,
    nextMarker: nextMarker,
    entries: entries,
  } satisfies ShieldInformationBarrierReports;
}
export function serializeTrackingCodeTypeField(
  val: TrackingCodeTypeField
): SerializedData {
  return val;
}
export function deserializeTrackingCodeTypeField(
  val: any
): TrackingCodeTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "TrackingCodeTypeField"';
  }
  if (val == 'tracking_code') {
    return 'tracking_code';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeTrackingCode(val: TrackingCode): SerializedData {
  return {
    ['type']:
      val.type == void 0 ? void 0 : serializeTrackingCodeTypeField(val.type),
    ['name']: val.name == void 0 ? void 0 : val.name,
    ['value']: val.value == void 0 ? void 0 : val.value,
  };
}
export function deserializeTrackingCode(val: any): TrackingCode {
  const type: undefined | TrackingCodeTypeField =
    val.type == void 0 ? void 0 : deserializeTrackingCodeTypeField(val.type);
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const value: undefined | string = val.value == void 0 ? void 0 : val.value;
  return { type: type, name: name, value: value } satisfies TrackingCode;
}
export function serializeUserFullRoleField(
  val: UserFullRoleField
): SerializedData {
  return val;
}
export function deserializeUserFullRoleField(val: any): UserFullRoleField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "UserFullRoleField"';
  }
  if (val == 'admin') {
    return 'admin';
  }
  if (val == 'coadmin') {
    return 'coadmin';
  }
  if (val == 'user') {
    return 'user';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeUserFullEnterpriseTypeField(
  val: UserFullEnterpriseTypeField
): SerializedData {
  return val;
}
export function deserializeUserFullEnterpriseTypeField(
  val: any
): UserFullEnterpriseTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "UserFullEnterpriseTypeField"';
  }
  if (val == 'enterprise') {
    return 'enterprise';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeUserFullEnterpriseField(
  val: UserFullEnterpriseField
): SerializedData {
  return {
    ['id']: val.id == void 0 ? void 0 : val.id,
    ['type']:
      val.type == void 0
        ? void 0
        : serializeUserFullEnterpriseTypeField(val.type),
    ['name']: val.name == void 0 ? void 0 : val.name,
  };
}
export function deserializeUserFullEnterpriseField(
  val: any
): UserFullEnterpriseField {
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  const type: undefined | UserFullEnterpriseTypeField =
    val.type == void 0
      ? void 0
      : deserializeUserFullEnterpriseTypeField(val.type);
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  return { id: id, type: type, name: name } satisfies UserFullEnterpriseField;
}
export function serializeUserFull(val: UserFull): SerializedData {
  const base: any = serializeUser(val);
  if (!sdIsMap(base)) {
    throw 'Expecting a map for "UserFull"';
  }
  return {
    ...base,
    ...{
      ['role']:
        val.role == void 0 ? void 0 : serializeUserFullRoleField(val.role),
      ['tracking_codes']:
        val.trackingCodes == void 0
          ? void 0
          : (val.trackingCodes.map(function (item: TrackingCode): any {
              return serializeTrackingCode(item);
            }) as readonly any[]),
      ['can_see_managed_users']:
        val.canSeeManagedUsers == void 0 ? void 0 : val.canSeeManagedUsers,
      ['is_sync_enabled']:
        val.isSyncEnabled == void 0 ? void 0 : val.isSyncEnabled,
      ['is_external_collab_restricted']:
        val.isExternalCollabRestricted == void 0
          ? void 0
          : val.isExternalCollabRestricted,
      ['is_exempt_from_device_limits']:
        val.isExemptFromDeviceLimits == void 0
          ? void 0
          : val.isExemptFromDeviceLimits,
      ['is_exempt_from_login_verification']:
        val.isExemptFromLoginVerification == void 0
          ? void 0
          : val.isExemptFromLoginVerification,
      ['enterprise']:
        val.enterprise == void 0
          ? void 0
          : serializeUserFullEnterpriseField(val.enterprise),
      ['my_tags']:
        val.myTags == void 0
          ? void 0
          : (val.myTags.map(function (item: string): any {
              return item;
            }) as readonly any[]),
      ['hostname']: val.hostname == void 0 ? void 0 : val.hostname,
      ['is_platform_access_only']:
        val.isPlatformAccessOnly == void 0 ? void 0 : val.isPlatformAccessOnly,
      ['external_app_user_id']:
        val.externalAppUserId == void 0 ? void 0 : val.externalAppUserId,
    },
  };
}
export function deserializeUserFull(val: any): UserFull {
  const role: undefined | UserFullRoleField =
    val.role == void 0 ? void 0 : deserializeUserFullRoleField(val.role);
  const trackingCodes: undefined | readonly TrackingCode[] =
    val.tracking_codes == void 0
      ? void 0
      : sdIsList(val.tracking_codes)
      ? (val.tracking_codes.map(function (itm: SerializedData): any {
          return deserializeTrackingCode(itm);
        }) as readonly any[])
      : [];
  const canSeeManagedUsers: undefined | boolean =
    val.can_see_managed_users == void 0 ? void 0 : val.can_see_managed_users;
  const isSyncEnabled: undefined | boolean =
    val.is_sync_enabled == void 0 ? void 0 : val.is_sync_enabled;
  const isExternalCollabRestricted: undefined | boolean =
    val.is_external_collab_restricted == void 0
      ? void 0
      : val.is_external_collab_restricted;
  const isExemptFromDeviceLimits: undefined | boolean =
    val.is_exempt_from_device_limits == void 0
      ? void 0
      : val.is_exempt_from_device_limits;
  const isExemptFromLoginVerification: undefined | boolean =
    val.is_exempt_from_login_verification == void 0
      ? void 0
      : val.is_exempt_from_login_verification;
  const enterprise: undefined | UserFullEnterpriseField =
    val.enterprise == void 0
      ? void 0
      : deserializeUserFullEnterpriseField(val.enterprise);
  const myTags: undefined | readonly string[] =
    val.my_tags == void 0
      ? void 0
      : sdIsList(val.my_tags)
      ? (val.my_tags.map(function (itm: SerializedData): any {
          return itm;
        }) as readonly any[])
      : [];
  const hostname: undefined | string =
    val.hostname == void 0 ? void 0 : val.hostname;
  const isPlatformAccessOnly: undefined | boolean =
    val.is_platform_access_only == void 0
      ? void 0
      : val.is_platform_access_only;
  const externalAppUserId: undefined | string =
    val.external_app_user_id == void 0 ? void 0 : val.external_app_user_id;
  const createdAt: undefined | string =
    val.created_at == void 0 ? void 0 : val.created_at;
  const modifiedAt: undefined | string =
    val.modified_at == void 0 ? void 0 : val.modified_at;
  const language: undefined | string =
    val.language == void 0 ? void 0 : val.language;
  const timezone: undefined | string =
    val.timezone == void 0 ? void 0 : val.timezone;
  const spaceAmount: undefined | number =
    val.space_amount == void 0 ? void 0 : val.space_amount;
  const spaceUsed: undefined | number =
    val.space_used == void 0 ? void 0 : val.space_used;
  const maxUploadSize: undefined | number =
    val.max_upload_size == void 0 ? void 0 : val.max_upload_size;
  const status: undefined | UserStatusField =
    val.status == void 0 ? void 0 : deserializeUserStatusField(val.status);
  const jobTitle: undefined | string =
    val.job_title == void 0 ? void 0 : val.job_title;
  const phone: undefined | string = val.phone == void 0 ? void 0 : val.phone;
  const address: undefined | string =
    val.address == void 0 ? void 0 : val.address;
  const avatarUrl: undefined | string =
    val.avatar_url == void 0 ? void 0 : val.avatar_url;
  const notificationEmail: undefined | UserNotificationEmailField =
    val.notification_email == void 0
      ? void 0
      : deserializeUserNotificationEmailField(val.notification_email);
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const login: undefined | string = val.login == void 0 ? void 0 : val.login;
  const id: string = val.id;
  const type: UserBaseTypeField = deserializeUserBaseTypeField(val.type);
  return {
    role: role,
    trackingCodes: trackingCodes,
    canSeeManagedUsers: canSeeManagedUsers,
    isSyncEnabled: isSyncEnabled,
    isExternalCollabRestricted: isExternalCollabRestricted,
    isExemptFromDeviceLimits: isExemptFromDeviceLimits,
    isExemptFromLoginVerification: isExemptFromLoginVerification,
    enterprise: enterprise,
    myTags: myTags,
    hostname: hostname,
    isPlatformAccessOnly: isPlatformAccessOnly,
    externalAppUserId: externalAppUserId,
    createdAt: createdAt,
    modifiedAt: modifiedAt,
    language: language,
    timezone: timezone,
    spaceAmount: spaceAmount,
    spaceUsed: spaceUsed,
    maxUploadSize: maxUploadSize,
    status: status,
    jobTitle: jobTitle,
    phone: phone,
    address: address,
    avatarUrl: avatarUrl,
    notificationEmail: notificationEmail,
    name: name,
    login: login,
    id: id,
    type: type,
  } satisfies UserFull;
}
export function serializeUsersOrderDirectionField(
  val: UsersOrderDirectionField
): SerializedData {
  return val;
}
export function deserializeUsersOrderDirectionField(
  val: any
): UsersOrderDirectionField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "UsersOrderDirectionField"';
  }
  if (val == 'ASC') {
    return 'ASC';
  }
  if (val == 'DESC') {
    return 'DESC';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeUsersOrderField(val: UsersOrderField): SerializedData {
  return {
    ['by']: val.by == void 0 ? void 0 : val.by,
    ['direction']:
      val.direction == void 0
        ? void 0
        : serializeUsersOrderDirectionField(val.direction),
  };
}
export function deserializeUsersOrderField(val: any): UsersOrderField {
  const by: undefined | string = val.by == void 0 ? void 0 : val.by;
  const direction: undefined | UsersOrderDirectionField =
    val.direction == void 0
      ? void 0
      : deserializeUsersOrderDirectionField(val.direction);
  return { by: by, direction: direction } satisfies UsersOrderField;
}
export function serializeUsers(val: Users): SerializedData {
  return {
    ['total_count']: val.totalCount == void 0 ? void 0 : val.totalCount,
    ['limit']: val.limit == void 0 ? void 0 : val.limit,
    ['offset']: val.offset == void 0 ? void 0 : val.offset,
    ['order']:
      val.order == void 0
        ? void 0
        : (val.order.map(function (item: UsersOrderField): any {
            return serializeUsersOrderField(item);
          }) as readonly any[]),
    ['entries']:
      val.entries == void 0
        ? void 0
        : (val.entries.map(function (item: UserFull): any {
            return serializeUserFull(item);
          }) as readonly any[]),
  };
}
export function deserializeUsers(val: any): Users {
  const totalCount: undefined | number =
    val.total_count == void 0 ? void 0 : val.total_count;
  const limit: undefined | number = val.limit == void 0 ? void 0 : val.limit;
  const offset: undefined | number = val.offset == void 0 ? void 0 : val.offset;
  const order: undefined | readonly UsersOrderField[] =
    val.order == void 0
      ? void 0
      : sdIsList(val.order)
      ? (val.order.map(function (itm: SerializedData): any {
          return deserializeUsersOrderField(itm);
        }) as readonly any[])
      : [];
  const entries: undefined | readonly UserFull[] =
    val.entries == void 0
      ? void 0
      : sdIsList(val.entries)
      ? (val.entries.map(function (itm: SerializedData): any {
          return deserializeUserFull(itm);
        }) as readonly any[])
      : [];
  return {
    totalCount: totalCount,
    limit: limit,
    offset: offset,
    order: order,
    entries: entries,
  } satisfies Users;
}
export function serializeMetadataFieldFilterString(
  val: MetadataFieldFilterString
): SerializedData {
  return val;
}
export function deserializeMetadataFieldFilterString(
  val: any
): MetadataFieldFilterString {
  return val;
}
export function serializeMetadataFieldFilterFloat(
  val: MetadataFieldFilterFloat
): SerializedData {
  return val;
}
export function deserializeMetadataFieldFilterFloat(
  val: any
): MetadataFieldFilterFloat {
  return val;
}
export function serializeMetadataFieldFilterMultiSelect(
  val: MetadataFieldFilterMultiSelect
): SerializedData {
  return Object.fromEntries(
    Object.entries(val).map(([k, v]: [string, any]) => [
      k,
      (function (v: any): any {
        return v.map(function (item: string): any {
          return item;
        }) as readonly any[];
      })(v),
    ])
  ) as {
    readonly [key: string]: any;
  };
}
export function deserializeMetadataFieldFilterMultiSelect(
  val: any
): MetadataFieldFilterMultiSelect {
  return val;
}
export function serializeMetadataFieldFilterFloatRangeValue(
  val: MetadataFieldFilterFloatRangeValue
): SerializedData {
  return {
    ['lt']: val.lt == void 0 ? void 0 : val.lt,
    ['gt']: val.gt == void 0 ? void 0 : val.gt,
  };
}
export function deserializeMetadataFieldFilterFloatRangeValue(
  val: any
): MetadataFieldFilterFloatRangeValue {
  const lt: undefined | number = val.lt == void 0 ? void 0 : val.lt;
  const gt: undefined | number = val.gt == void 0 ? void 0 : val.gt;
  return { lt: lt, gt: gt } satisfies MetadataFieldFilterFloatRangeValue;
}
export function serializeMetadataFieldFilterFloatRange(
  val: MetadataFieldFilterFloatRange
): SerializedData {
  return Object.fromEntries(
    Object.entries(val).map(([k, v]: [string, any]) => [
      k,
      serializeMetadataFieldFilterFloatRangeValue(v),
    ])
  ) as {
    readonly [key: string]: any;
  };
}
export function deserializeMetadataFieldFilterFloatRange(
  val: any
): MetadataFieldFilterFloatRange {
  return val;
}
export function serializeMetadataFieldFilterDateRangeValue(
  val: MetadataFieldFilterDateRangeValue
): SerializedData {
  return {
    ['lt']: val.lt == void 0 ? void 0 : val.lt,
    ['gt']: val.gt == void 0 ? void 0 : val.gt,
  };
}
export function deserializeMetadataFieldFilterDateRangeValue(
  val: any
): MetadataFieldFilterDateRangeValue {
  const lt: undefined | string = val.lt == void 0 ? void 0 : val.lt;
  const gt: undefined | string = val.gt == void 0 ? void 0 : val.gt;
  return { lt: lt, gt: gt } satisfies MetadataFieldFilterDateRangeValue;
}
export function serializeMetadataFieldFilterDateRange(
  val: MetadataFieldFilterDateRange
): SerializedData {
  return Object.fromEntries(
    Object.entries(val).map(([k, v]: [string, any]) => [
      k,
      serializeMetadataFieldFilterDateRangeValue(v),
    ])
  ) as {
    readonly [key: string]: any;
  };
}
export function deserializeMetadataFieldFilterDateRange(
  val: any
): MetadataFieldFilterDateRange {
  return val;
}
export function serializeMetadataFilterScopeField(
  val: MetadataFilterScopeField
): SerializedData {
  return val;
}
export function deserializeMetadataFilterScopeField(
  val: any
): MetadataFilterScopeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "MetadataFilterScopeField"';
  }
  if (val == 'global') {
    return 'global';
  }
  if (val == 'enterprise') {
    return 'enterprise';
  }
  if (val == 'enterprise_{enterprise_id}') {
    return 'enterprise_{enterprise_id}';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeMetadataFilterFiltersField(
  val: MetadataFilterFiltersField
): SerializedData {
  throw "Can't serialize MetadataFilterFiltersField";
}
export function deserializeMetadataFilterFiltersField(
  val: any
): MetadataFilterFiltersField {
  throw "Can't deserialize MetadataFilterFiltersField";
}
export function serializeMetadataFilter(val: MetadataFilter): SerializedData {
  return {
    ['scope']:
      val.scope == void 0
        ? void 0
        : serializeMetadataFilterScopeField(val.scope),
    ['templateKey']: val.templateKey == void 0 ? void 0 : val.templateKey,
    ['filters']:
      val.filters == void 0
        ? void 0
        : serializeMetadataFilterFiltersField(val.filters),
  };
}
export function deserializeMetadataFilter(val: any): MetadataFilter {
  const scope: undefined | MetadataFilterScopeField =
    val.scope == void 0
      ? void 0
      : deserializeMetadataFilterScopeField(val.scope);
  const templateKey: undefined | string =
    val.templateKey == void 0 ? void 0 : val.templateKey;
  const filters: undefined | MetadataFilterFiltersField =
    val.filters == void 0
      ? void 0
      : deserializeMetadataFilterFiltersField(val.filters);
  return {
    scope: scope,
    templateKey: templateKey,
    filters: filters,
  } satisfies MetadataFilter;
}
