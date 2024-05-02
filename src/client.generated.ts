import { serializeBaseUrls } from './networking/baseUrls.generated.js';
import { deserializeBaseUrls } from './networking/baseUrls.generated.js';
import { BaseUrlsInput } from './networking/baseUrls.generated.js';
import { AuthorizationManager } from './managers/authorization.generated.js';
import { FilesManager } from './managers/files.generated.js';
import { TrashedFilesManager } from './managers/trashedFiles.generated.js';
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
import { Authentication } from './networking/auth.generated.js';
import { NetworkSession } from './networking/network.generated.js';
import { BaseUrls } from './networking/baseUrls.generated.js';
import { AgentOptions } from './internal/utils.js';
import { Interceptor } from './networking/interceptors.generated.js';
import { SerializedData } from './serialization/json.js';
import { sdIsEmpty } from './serialization/json.js';
import { sdIsBoolean } from './serialization/json.js';
import { sdIsNumber } from './serialization/json.js';
import { sdIsString } from './serialization/json.js';
import { sdIsList } from './serialization/json.js';
import { sdIsMap } from './serialization/json.js';
export class BoxClient {
  readonly auth!: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({
    baseUrls: new BaseUrls({}),
  });
  readonly authorization: AuthorizationManager;
  readonly files: FilesManager;
  readonly trashedFiles: TrashedFilesManager;
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
  constructor(
    fields: Omit<
      BoxClient,
      | 'authorization'
      | 'files'
      | 'trashedFiles'
      | 'downloads'
      | 'uploads'
      | 'chunkedUploads'
      | 'listCollaborations'
      | 'comments'
      | 'tasks'
      | 'fileVersions'
      | 'fileMetadata'
      | 'fileClassifications'
      | 'skills'
      | 'fileWatermarks'
      | 'fileRequests'
      | 'folders'
      | 'trashedFolders'
      | 'folderMetadata'
      | 'folderClassifications'
      | 'trashedItems'
      | 'folderWatermarks'
      | 'folderLocks'
      | 'metadataTemplates'
      | 'classifications'
      | 'metadataCascadePolicies'
      | 'search'
      | 'userCollaborations'
      | 'taskAssignments'
      | 'sharedLinksFiles'
      | 'sharedLinksFolders'
      | 'webLinks'
      | 'trashedWebLinks'
      | 'sharedLinksWebLinks'
      | 'users'
      | 'sessionTermination'
      | 'avatars'
      | 'transfer'
      | 'emailAliases'
      | 'memberships'
      | 'invites'
      | 'groups'
      | 'webhooks'
      | 'events'
      | 'collections'
      | 'recentItems'
      | 'retentionPolicies'
      | 'retentionPolicyAssignments'
      | 'legalHoldPolicies'
      | 'legalHoldPolicyAssignments'
      | 'fileVersionRetentions'
      | 'fileVersionLegalHolds'
      | 'shieldInformationBarriers'
      | 'shieldInformationBarrierReports'
      | 'shieldInformationBarrierSegments'
      | 'shieldInformationBarrierSegmentMembers'
      | 'shieldInformationBarrierSegmentRestrictions'
      | 'devicePinners'
      | 'termsOfServices'
      | 'termsOfServiceUserStatuses'
      | 'collaborationAllowlistEntries'
      | 'collaborationAllowlistExemptTargets'
      | 'storagePolicies'
      | 'storagePolicyAssignments'
      | 'zipDownloads'
      | 'signRequests'
      | 'workflows'
      | 'signTemplates'
      | 'integrationMappings'
      | 'ai'
      | 'networkSession'
      | 'withAsUserHeader'
      | 'withSuppressedNotifications'
      | 'withExtraHeaders'
      | 'withCustomBaseUrls'
      | 'withCustomAgentOptions'
      | 'withInterceptors'
    > &
      Partial<Pick<BoxClient, 'networkSession'>>
  ) {
    if (fields.auth) {
      this.auth = fields.auth;
    }
    if (fields.networkSession) {
      this.networkSession = fields.networkSession;
    }
    this.authorization = new AuthorizationManager({
      auth: this.auth,
      networkSession: this.networkSession,
    });
    this.files = new FilesManager({
      auth: this.auth,
      networkSession: this.networkSession,
    });
    this.trashedFiles = new TrashedFilesManager({
      auth: this.auth,
      networkSession: this.networkSession,
    });
    this.downloads = new DownloadsManager({
      auth: this.auth,
      networkSession: this.networkSession,
    });
    this.uploads = new UploadsManager({
      auth: this.auth,
      networkSession: this.networkSession,
    });
    this.chunkedUploads = new ChunkedUploadsManager({
      auth: this.auth,
      networkSession: this.networkSession,
    });
    this.listCollaborations = new ListCollaborationsManager({
      auth: this.auth,
      networkSession: this.networkSession,
    });
    this.comments = new CommentsManager({
      auth: this.auth,
      networkSession: this.networkSession,
    });
    this.tasks = new TasksManager({
      auth: this.auth,
      networkSession: this.networkSession,
    });
    this.fileVersions = new FileVersionsManager({
      auth: this.auth,
      networkSession: this.networkSession,
    });
    this.fileMetadata = new FileMetadataManager({
      auth: this.auth,
      networkSession: this.networkSession,
    });
    this.fileClassifications = new FileClassificationsManager({
      auth: this.auth,
      networkSession: this.networkSession,
    });
    this.skills = new SkillsManager({
      auth: this.auth,
      networkSession: this.networkSession,
    });
    this.fileWatermarks = new FileWatermarksManager({
      auth: this.auth,
      networkSession: this.networkSession,
    });
    this.fileRequests = new FileRequestsManager({
      auth: this.auth,
      networkSession: this.networkSession,
    });
    this.folders = new FoldersManager({
      auth: this.auth,
      networkSession: this.networkSession,
    });
    this.trashedFolders = new TrashedFoldersManager({
      auth: this.auth,
      networkSession: this.networkSession,
    });
    this.folderMetadata = new FolderMetadataManager({
      auth: this.auth,
      networkSession: this.networkSession,
    });
    this.folderClassifications = new FolderClassificationsManager({
      auth: this.auth,
      networkSession: this.networkSession,
    });
    this.trashedItems = new TrashedItemsManager({
      auth: this.auth,
      networkSession: this.networkSession,
    });
    this.folderWatermarks = new FolderWatermarksManager({
      auth: this.auth,
      networkSession: this.networkSession,
    });
    this.folderLocks = new FolderLocksManager({
      auth: this.auth,
      networkSession: this.networkSession,
    });
    this.metadataTemplates = new MetadataTemplatesManager({
      auth: this.auth,
      networkSession: this.networkSession,
    });
    this.classifications = new ClassificationsManager({
      auth: this.auth,
      networkSession: this.networkSession,
    });
    this.metadataCascadePolicies = new MetadataCascadePoliciesManager({
      auth: this.auth,
      networkSession: this.networkSession,
    });
    this.search = new SearchManager({
      auth: this.auth,
      networkSession: this.networkSession,
    });
    this.userCollaborations = new UserCollaborationsManager({
      auth: this.auth,
      networkSession: this.networkSession,
    });
    this.taskAssignments = new TaskAssignmentsManager({
      auth: this.auth,
      networkSession: this.networkSession,
    });
    this.sharedLinksFiles = new SharedLinksFilesManager({
      auth: this.auth,
      networkSession: this.networkSession,
    });
    this.sharedLinksFolders = new SharedLinksFoldersManager({
      auth: this.auth,
      networkSession: this.networkSession,
    });
    this.webLinks = new WebLinksManager({
      auth: this.auth,
      networkSession: this.networkSession,
    });
    this.trashedWebLinks = new TrashedWebLinksManager({
      auth: this.auth,
      networkSession: this.networkSession,
    });
    this.sharedLinksWebLinks = new SharedLinksWebLinksManager({
      auth: this.auth,
      networkSession: this.networkSession,
    });
    this.users = new UsersManager({
      auth: this.auth,
      networkSession: this.networkSession,
    });
    this.sessionTermination = new SessionTerminationManager({
      auth: this.auth,
      networkSession: this.networkSession,
    });
    this.avatars = new AvatarsManager({
      auth: this.auth,
      networkSession: this.networkSession,
    });
    this.transfer = new TransferManager({
      auth: this.auth,
      networkSession: this.networkSession,
    });
    this.emailAliases = new EmailAliasesManager({
      auth: this.auth,
      networkSession: this.networkSession,
    });
    this.memberships = new MembershipsManager({
      auth: this.auth,
      networkSession: this.networkSession,
    });
    this.invites = new InvitesManager({
      auth: this.auth,
      networkSession: this.networkSession,
    });
    this.groups = new GroupsManager({
      auth: this.auth,
      networkSession: this.networkSession,
    });
    this.webhooks = new WebhooksManager({
      auth: this.auth,
      networkSession: this.networkSession,
    });
    this.events = new EventsManager({
      auth: this.auth,
      networkSession: this.networkSession,
    });
    this.collections = new CollectionsManager({
      auth: this.auth,
      networkSession: this.networkSession,
    });
    this.recentItems = new RecentItemsManager({
      auth: this.auth,
      networkSession: this.networkSession,
    });
    this.retentionPolicies = new RetentionPoliciesManager({
      auth: this.auth,
      networkSession: this.networkSession,
    });
    this.retentionPolicyAssignments = new RetentionPolicyAssignmentsManager({
      auth: this.auth,
      networkSession: this.networkSession,
    });
    this.legalHoldPolicies = new LegalHoldPoliciesManager({
      auth: this.auth,
      networkSession: this.networkSession,
    });
    this.legalHoldPolicyAssignments = new LegalHoldPolicyAssignmentsManager({
      auth: this.auth,
      networkSession: this.networkSession,
    });
    this.fileVersionRetentions = new FileVersionRetentionsManager({
      auth: this.auth,
      networkSession: this.networkSession,
    });
    this.fileVersionLegalHolds = new FileVersionLegalHoldsManager({
      auth: this.auth,
      networkSession: this.networkSession,
    });
    this.shieldInformationBarriers = new ShieldInformationBarriersManager({
      auth: this.auth,
      networkSession: this.networkSession,
    });
    this.shieldInformationBarrierReports =
      new ShieldInformationBarrierReportsManager({
        auth: this.auth,
        networkSession: this.networkSession,
      });
    this.shieldInformationBarrierSegments =
      new ShieldInformationBarrierSegmentsManager({
        auth: this.auth,
        networkSession: this.networkSession,
      });
    this.shieldInformationBarrierSegmentMembers =
      new ShieldInformationBarrierSegmentMembersManager({
        auth: this.auth,
        networkSession: this.networkSession,
      });
    this.shieldInformationBarrierSegmentRestrictions =
      new ShieldInformationBarrierSegmentRestrictionsManager({
        auth: this.auth,
        networkSession: this.networkSession,
      });
    this.devicePinners = new DevicePinnersManager({
      auth: this.auth,
      networkSession: this.networkSession,
    });
    this.termsOfServices = new TermsOfServicesManager({
      auth: this.auth,
      networkSession: this.networkSession,
    });
    this.termsOfServiceUserStatuses = new TermsOfServiceUserStatusesManager({
      auth: this.auth,
      networkSession: this.networkSession,
    });
    this.collaborationAllowlistEntries =
      new CollaborationAllowlistEntriesManager({
        auth: this.auth,
        networkSession: this.networkSession,
      });
    this.collaborationAllowlistExemptTargets =
      new CollaborationAllowlistExemptTargetsManager({
        auth: this.auth,
        networkSession: this.networkSession,
      });
    this.storagePolicies = new StoragePoliciesManager({
      auth: this.auth,
      networkSession: this.networkSession,
    });
    this.storagePolicyAssignments = new StoragePolicyAssignmentsManager({
      auth: this.auth,
      networkSession: this.networkSession,
    });
    this.zipDownloads = new ZipDownloadsManager({
      auth: this.auth,
      networkSession: this.networkSession,
    });
    this.signRequests = new SignRequestsManager({
      auth: this.auth,
      networkSession: this.networkSession,
    });
    this.workflows = new WorkflowsManager({
      auth: this.auth,
      networkSession: this.networkSession,
    });
    this.signTemplates = new SignTemplatesManager({
      auth: this.auth,
      networkSession: this.networkSession,
    });
    this.integrationMappings = new IntegrationMappingsManager({
      auth: this.auth,
      networkSession: this.networkSession,
    });
    this.ai = new AiManager({
      auth: this.auth,
      networkSession: this.networkSession,
    });
  }
  withAsUserHeader(userId: string): BoxClient {
    return new BoxClient({
      auth: this.auth,
      networkSession: this.networkSession.withAdditionalHeaders({
        ['As-User']: userId,
      }),
    });
  }
  withSuppressedNotifications(): BoxClient {
    return new BoxClient({
      auth: this.auth,
      networkSession: this.networkSession.withAdditionalHeaders({
        ['Box-Notifications']: 'off',
      }),
    });
  }
  withExtraHeaders(
    extraHeaders: {
      readonly [key: string]: string;
    } = {}
  ): BoxClient {
    return new BoxClient({
      auth: this.auth,
      networkSession: this.networkSession.withAdditionalHeaders(extraHeaders),
    });
  }
  withCustomBaseUrls(baseUrlsInput: BaseUrlsInput): BoxClient {
    const baseUrls: BaseUrls = new BaseUrls({
      baseUrl: baseUrlsInput.baseUrl,
      uploadUrl: baseUrlsInput.uploadUrl,
      oauth2Url: baseUrlsInput.oauth2Url,
    });
    return new BoxClient({
      auth: this.auth,
      networkSession: this.networkSession.withCustomBaseUrls(baseUrls),
    });
  }
  withCustomAgentOptions(agentOptions: AgentOptions): BoxClient {
    return new BoxClient({
      auth: this.auth,
      networkSession: this.networkSession.withCustomAgentOptions(agentOptions),
    });
  }
  withInterceptors(interceptors: readonly Interceptor[]): BoxClient {
    return new BoxClient({
      auth: this.auth,
      networkSession: this.networkSession.withInterceptors(interceptors),
    });
  }
}
export interface BoxClientInput {
  readonly auth: Authentication;
  readonly networkSession?: NetworkSession;
}
