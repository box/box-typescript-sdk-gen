import { FetchOptionsInput } from './networking/fetchOptions.generated.js';
import { BaseUrlsInput } from './networking/baseUrls.generated.js';
import { AuthorizationManager } from './managers/authorization.generated.js';
import { FilesManager } from './managers/files.generated.js';
import { TrashedFilesManager } from './managers/trashedFiles.generated.js';
import { AppItemAssociationsManager } from './managers/appItemAssociations.generated.js';
import { DownloadsManager } from './managers/downloads.generated.js';
import { UploadsManager } from './managers/uploads.generated.js';
import { ChunkedUploadsManager } from './managers/chunkedUploads.generated.js';
import { ListCollaborationsManager } from './managers/listCollaborations.generated.js';
import { CommentsManager } from './managers/comments.generated.js';
import { TasksManager } from './managers/tasks.generated.js';
import { FileVersionsManager } from './managers/fileVersions.generated.js';
import { FileMetadataManager } from './managers/fileMetadata.generated.js';
import { FileClassificationsManager } from './managers/fileClassifications.generated.js';
import { SkillsManager } from './managers/skills.generated.js';
import { FileWatermarksManager } from './managers/fileWatermarks.generated.js';
import { FileRequestsManager } from './managers/fileRequests.generated.js';
import { FoldersManager } from './managers/folders.generated.js';
import { TrashedFoldersManager } from './managers/trashedFolders.generated.js';
import { FolderMetadataManager } from './managers/folderMetadata.generated.js';
import { FolderClassificationsManager } from './managers/folderClassifications.generated.js';
import { TrashedItemsManager } from './managers/trashedItems.generated.js';
import { FolderWatermarksManager } from './managers/folderWatermarks.generated.js';
import { FolderLocksManager } from './managers/folderLocks.generated.js';
import { MetadataTemplatesManager } from './managers/metadataTemplates.generated.js';
import { ClassificationsManager } from './managers/classifications.generated.js';
import { MetadataCascadePoliciesManager } from './managers/metadataCascadePolicies.generated.js';
import { SearchManager } from './managers/search.generated.js';
import { UserCollaborationsManager } from './managers/userCollaborations.generated.js';
import { TaskAssignmentsManager } from './managers/taskAssignments.generated.js';
import { SharedLinksFilesManager } from './managers/sharedLinksFiles.generated.js';
import { SharedLinksFoldersManager } from './managers/sharedLinksFolders.generated.js';
import { WebLinksManager } from './managers/webLinks.generated.js';
import { TrashedWebLinksManager } from './managers/trashedWebLinks.generated.js';
import { SharedLinksWebLinksManager } from './managers/sharedLinksWebLinks.generated.js';
import { SharedLinksAppItemsManager } from './managers/sharedLinksAppItems.generated.js';
import { UsersManager } from './managers/users.generated.js';
import { SessionTerminationManager } from './managers/sessionTermination.generated.js';
import { AvatarsManager } from './managers/avatars.generated.js';
import { TransferManager } from './managers/transfer.generated.js';
import { EmailAliasesManager } from './managers/emailAliases.generated.js';
import { MembershipsManager } from './managers/memberships.generated.js';
import { InvitesManager } from './managers/invites.generated.js';
import { GroupsManager } from './managers/groups.generated.js';
import { WebhooksManager } from './managers/webhooks.generated.js';
import { EventsManager } from './managers/events.generated.js';
import { CollectionsManager } from './managers/collections.generated.js';
import { RecentItemsManager } from './managers/recentItems.generated.js';
import { RetentionPoliciesManager } from './managers/retentionPolicies.generated.js';
import { RetentionPolicyAssignmentsManager } from './managers/retentionPolicyAssignments.generated.js';
import { LegalHoldPoliciesManager } from './managers/legalHoldPolicies.generated.js';
import { LegalHoldPolicyAssignmentsManager } from './managers/legalHoldPolicyAssignments.generated.js';
import { FileVersionRetentionsManager } from './managers/fileVersionRetentions.generated.js';
import { FileVersionLegalHoldsManager } from './managers/fileVersionLegalHolds.generated.js';
import { ShieldInformationBarriersManager } from './managers/shieldInformationBarriers.generated.js';
import { ShieldInformationBarrierReportsManager } from './managers/shieldInformationBarrierReports.generated.js';
import { ShieldInformationBarrierSegmentsManager } from './managers/shieldInformationBarrierSegments.generated.js';
import { ShieldInformationBarrierSegmentMembersManager } from './managers/shieldInformationBarrierSegmentMembers.generated.js';
import { ShieldInformationBarrierSegmentRestrictionsManager } from './managers/shieldInformationBarrierSegmentRestrictions.generated.js';
import { DevicePinnersManager } from './managers/devicePinners.generated.js';
import { TermsOfServicesManager } from './managers/termsOfServices.generated.js';
import { TermsOfServiceUserStatusesManager } from './managers/termsOfServiceUserStatuses.generated.js';
import { CollaborationAllowlistEntriesManager } from './managers/collaborationAllowlistEntries.generated.js';
import { CollaborationAllowlistExemptTargetsManager } from './managers/collaborationAllowlistExemptTargets.generated.js';
import { StoragePoliciesManager } from './managers/storagePolicies.generated.js';
import { StoragePolicyAssignmentsManager } from './managers/storagePolicyAssignments.generated.js';
import { ZipDownloadsManager } from './managers/zipDownloads.generated.js';
import { SignRequestsManager } from './managers/signRequests.generated.js';
import { WorkflowsManager } from './managers/workflows.generated.js';
import { SignTemplatesManager } from './managers/signTemplates.generated.js';
import { IntegrationMappingsManager } from './managers/integrationMappings.generated.js';
import { AiManager } from './managers/ai.generated.js';
import { AiStudioManager } from './managers/aiStudio.generated.js';
import { DocgenTemplateManager } from './managers/docgenTemplate.generated.js';
import { DocgenManager } from './managers/docgen.generated.js';
import { HubsManager } from './managers/hubs.generated.js';
import { HubCollaborationsManager } from './managers/hubCollaborations.generated.js';
import { HubItemsManager } from './managers/hubItems.generated.js';
import { ShieldListsManager } from './managers/shieldLists.generated.js';
import { ArchivesManager } from './managers/archives.generated.js';
import { Authentication } from './networking/auth.generated.js';
import { NetworkSession } from './networking/network.generated.js';
import { FetchResponse } from './networking/fetchResponse.generated.js';
import { ProxyConfig } from './networking/proxyConfig.generated.js';
import { AgentOptions } from './internal/utils.js';
import { Interceptor } from './networking/interceptors.generated.js';
export declare class BoxClient {
    readonly auth: Authentication;
    readonly networkSession: NetworkSession;
    readonly authorization: AuthorizationManager;
    readonly files: FilesManager;
    readonly trashedFiles: TrashedFilesManager;
    readonly appItemAssociations: AppItemAssociationsManager;
    readonly downloads: DownloadsManager;
    readonly uploads: UploadsManager;
    readonly chunkedUploads: ChunkedUploadsManager;
    readonly listCollaborations: ListCollaborationsManager;
    readonly comments: CommentsManager;
    readonly tasks: TasksManager;
    readonly fileVersions: FileVersionsManager;
    readonly fileMetadata: FileMetadataManager;
    readonly fileClassifications: FileClassificationsManager;
    readonly skills: SkillsManager;
    readonly fileWatermarks: FileWatermarksManager;
    readonly fileRequests: FileRequestsManager;
    readonly folders: FoldersManager;
    readonly trashedFolders: TrashedFoldersManager;
    readonly folderMetadata: FolderMetadataManager;
    readonly folderClassifications: FolderClassificationsManager;
    readonly trashedItems: TrashedItemsManager;
    readonly folderWatermarks: FolderWatermarksManager;
    readonly folderLocks: FolderLocksManager;
    readonly metadataTemplates: MetadataTemplatesManager;
    readonly classifications: ClassificationsManager;
    readonly metadataCascadePolicies: MetadataCascadePoliciesManager;
    readonly search: SearchManager;
    readonly userCollaborations: UserCollaborationsManager;
    readonly taskAssignments: TaskAssignmentsManager;
    readonly sharedLinksFiles: SharedLinksFilesManager;
    readonly sharedLinksFolders: SharedLinksFoldersManager;
    readonly webLinks: WebLinksManager;
    readonly trashedWebLinks: TrashedWebLinksManager;
    readonly sharedLinksWebLinks: SharedLinksWebLinksManager;
    readonly sharedLinksAppItems: SharedLinksAppItemsManager;
    readonly users: UsersManager;
    readonly sessionTermination: SessionTerminationManager;
    readonly avatars: AvatarsManager;
    readonly transfer: TransferManager;
    readonly emailAliases: EmailAliasesManager;
    readonly memberships: MembershipsManager;
    readonly invites: InvitesManager;
    readonly groups: GroupsManager;
    readonly webhooks: WebhooksManager;
    readonly events: EventsManager;
    readonly collections: CollectionsManager;
    readonly recentItems: RecentItemsManager;
    readonly retentionPolicies: RetentionPoliciesManager;
    readonly retentionPolicyAssignments: RetentionPolicyAssignmentsManager;
    readonly legalHoldPolicies: LegalHoldPoliciesManager;
    readonly legalHoldPolicyAssignments: LegalHoldPolicyAssignmentsManager;
    readonly fileVersionRetentions: FileVersionRetentionsManager;
    readonly fileVersionLegalHolds: FileVersionLegalHoldsManager;
    readonly shieldInformationBarriers: ShieldInformationBarriersManager;
    readonly shieldInformationBarrierReports: ShieldInformationBarrierReportsManager;
    readonly shieldInformationBarrierSegments: ShieldInformationBarrierSegmentsManager;
    readonly shieldInformationBarrierSegmentMembers: ShieldInformationBarrierSegmentMembersManager;
    readonly shieldInformationBarrierSegmentRestrictions: ShieldInformationBarrierSegmentRestrictionsManager;
    readonly devicePinners: DevicePinnersManager;
    readonly termsOfServices: TermsOfServicesManager;
    readonly termsOfServiceUserStatuses: TermsOfServiceUserStatusesManager;
    readonly collaborationAllowlistEntries: CollaborationAllowlistEntriesManager;
    readonly collaborationAllowlistExemptTargets: CollaborationAllowlistExemptTargetsManager;
    readonly storagePolicies: StoragePoliciesManager;
    readonly storagePolicyAssignments: StoragePolicyAssignmentsManager;
    readonly zipDownloads: ZipDownloadsManager;
    readonly signRequests: SignRequestsManager;
    readonly workflows: WorkflowsManager;
    readonly signTemplates: SignTemplatesManager;
    readonly integrationMappings: IntegrationMappingsManager;
    readonly ai: AiManager;
    readonly aiStudio: AiStudioManager;
    readonly docgenTemplate: DocgenTemplateManager;
    readonly docgen: DocgenManager;
    readonly hubs: HubsManager;
    readonly hubCollaborations: HubCollaborationsManager;
    readonly hubItems: HubItemsManager;
    readonly shieldLists: ShieldListsManager;
    readonly archives: ArchivesManager;
    constructor(fields: Omit<BoxClient, 'authorization' | 'files' | 'trashedFiles' | 'appItemAssociations' | 'downloads' | 'uploads' | 'chunkedUploads' | 'listCollaborations' | 'comments' | 'tasks' | 'fileVersions' | 'fileMetadata' | 'fileClassifications' | 'skills' | 'fileWatermarks' | 'fileRequests' | 'folders' | 'trashedFolders' | 'folderMetadata' | 'folderClassifications' | 'trashedItems' | 'folderWatermarks' | 'folderLocks' | 'metadataTemplates' | 'classifications' | 'metadataCascadePolicies' | 'search' | 'userCollaborations' | 'taskAssignments' | 'sharedLinksFiles' | 'sharedLinksFolders' | 'webLinks' | 'trashedWebLinks' | 'sharedLinksWebLinks' | 'sharedLinksAppItems' | 'users' | 'sessionTermination' | 'avatars' | 'transfer' | 'emailAliases' | 'memberships' | 'invites' | 'groups' | 'webhooks' | 'events' | 'collections' | 'recentItems' | 'retentionPolicies' | 'retentionPolicyAssignments' | 'legalHoldPolicies' | 'legalHoldPolicyAssignments' | 'fileVersionRetentions' | 'fileVersionLegalHolds' | 'shieldInformationBarriers' | 'shieldInformationBarrierReports' | 'shieldInformationBarrierSegments' | 'shieldInformationBarrierSegmentMembers' | 'shieldInformationBarrierSegmentRestrictions' | 'devicePinners' | 'termsOfServices' | 'termsOfServiceUserStatuses' | 'collaborationAllowlistEntries' | 'collaborationAllowlistExemptTargets' | 'storagePolicies' | 'storagePolicyAssignments' | 'zipDownloads' | 'signRequests' | 'workflows' | 'signTemplates' | 'integrationMappings' | 'ai' | 'aiStudio' | 'docgenTemplate' | 'docgen' | 'hubs' | 'hubCollaborations' | 'hubItems' | 'shieldLists' | 'archives' | 'networkSession' | 'makeRequest' | 'withAsUserHeader' | 'withSuppressedNotifications' | 'withExtraHeaders' | 'withCustomBaseUrls' | 'withProxy' | 'withCustomAgentOptions' | 'withInterceptors'> & Partial<Pick<BoxClient, 'networkSession'>>);
    /**
     * Make a custom http request using the client authentication and network session.
     * @param {FetchOptionsInput} fetchOptionsInput Options to be passed to the fetch call
     * @returns {Promise<FetchResponse>}
     */
    makeRequest(fetchOptionsInput: FetchOptionsInput): Promise<FetchResponse>;
    /**
     * Create a new client to impersonate user with the provided ID. All calls made with the new client will be made in context of the impersonated user, leaving the original client unmodified.
     * @param {string} userId ID of an user to impersonate
     * @returns {BoxClient}
     */
    withAsUserHeader(userId: string): BoxClient;
    /**
     * Create a new client with suppressed notifications. Calls made with the new client will not trigger email or webhook notifications
     * @returns {BoxClient}
     */
    withSuppressedNotifications(): BoxClient;
    /**
       * Create a new client with a custom set of headers that will be included in every API call
       * @param {{
          readonly [key: string]: string;
      }} extraHeaders Custom set of headers that will be included in every API call
       * @returns {BoxClient}
       */
    withExtraHeaders(extraHeaders?: {
        readonly [key: string]: string;
    }): BoxClient;
    /**
     * Create a new client with a custom set of base urls that will be used for every API call
     * @param {BaseUrlsInput} baseUrlsInput Custom set of base urls that will be used for every API call
     * @returns {BoxClient}
     */
    withCustomBaseUrls(baseUrlsInput: BaseUrlsInput): BoxClient;
    /**
     * Create a new client with a custom proxy that will be used for every API call
     * @param {ProxyConfig} config
     * @returns {BoxClient}
     */
    withProxy(config: ProxyConfig): BoxClient;
    /**
     * Create a new client with a custom set of agent options that will be used for every API call
     * @param {AgentOptions} agentOptions Custom set of agent options that will be used for every API call
     * @returns {BoxClient}
     */
    withCustomAgentOptions(agentOptions: AgentOptions): BoxClient;
    /**
     * Create a new client with a custom set of interceptors that will be used for every API call
     * @param {readonly Interceptor[]} interceptors Custom set of interceptors that will be used for every API call
     * @returns {BoxClient}
     */
    withInterceptors(interceptors: readonly Interceptor[]): BoxClient;
}
export interface BoxClientInput {
    readonly auth: Authentication;
    readonly networkSession?: NetworkSession;
}
//# sourceMappingURL=client.generated.d.ts.map