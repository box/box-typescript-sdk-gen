import { serializeFileOrFolderOrWebLink } from './fileOrFolderOrWebLink.generated.js';
import { deserializeFileOrFolderOrWebLink } from './fileOrFolderOrWebLink.generated.js';
import { serializeGroupMiniOrUserCollaborations } from './groupMiniOrUserCollaborations.generated.js';
import { deserializeGroupMiniOrUserCollaborations } from './groupMiniOrUserCollaborations.generated.js';
import { serializeUserCollaborations } from './userCollaborations.generated.js';
import { deserializeUserCollaborations } from './userCollaborations.generated.js';
import { serializeTermsOfServiceBase } from './termsOfServiceBase.generated.js';
import { deserializeTermsOfServiceBase } from './termsOfServiceBase.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { FileOrFolderOrWebLink } from './fileOrFolderOrWebLink.generated.js';
import { GroupMiniOrUserCollaborations } from './groupMiniOrUserCollaborations.generated.js';
import { UserCollaborations } from './userCollaborations.generated.js';
import { TermsOfServiceBase } from './termsOfServiceBase.generated.js';
import { DateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
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
export class Collaboration {
  readonly id!: string;
  readonly type: CollaborationTypeField =
    'collaboration' as CollaborationTypeField;
  readonly item?: FileOrFolderOrWebLink;
  readonly accessibleBy?: GroupMiniOrUserCollaborations;
  readonly inviteEmail?: string;
  readonly role?: CollaborationRoleField;
  readonly expiresAt?: DateTime;
  readonly isAccessOnly?: boolean;
  readonly status?: CollaborationStatusField;
  readonly acknowledgedAt?: DateTime;
  readonly createdBy?: UserCollaborations;
  readonly createdAt?: DateTime;
  readonly modifiedAt?: DateTime;
  readonly acceptanceRequirementsStatus?: CollaborationAcceptanceRequirementsStatusField;
  constructor(
    fields: Omit<Collaboration, 'type'> & Partial<Pick<Collaboration, 'type'>>
  ) {
    if (fields.id) {
      this.id = fields.id;
    }
    if (fields.type) {
      this.type = fields.type;
    }
    if (fields.item) {
      this.item = fields.item;
    }
    if (fields.accessibleBy) {
      this.accessibleBy = fields.accessibleBy;
    }
    if (fields.inviteEmail) {
      this.inviteEmail = fields.inviteEmail;
    }
    if (fields.role) {
      this.role = fields.role;
    }
    if (fields.expiresAt) {
      this.expiresAt = fields.expiresAt;
    }
    if (fields.isAccessOnly) {
      this.isAccessOnly = fields.isAccessOnly;
    }
    if (fields.status) {
      this.status = fields.status;
    }
    if (fields.acknowledgedAt) {
      this.acknowledgedAt = fields.acknowledgedAt;
    }
    if (fields.createdBy) {
      this.createdBy = fields.createdBy;
    }
    if (fields.createdAt) {
      this.createdAt = fields.createdAt;
    }
    if (fields.modifiedAt) {
      this.modifiedAt = fields.modifiedAt;
    }
    if (fields.acceptanceRequirementsStatus) {
      this.acceptanceRequirementsStatus = fields.acceptanceRequirementsStatus;
    }
  }
}
export interface CollaborationInput {
  readonly id: string;
  readonly type?: CollaborationTypeField;
  readonly item?: FileOrFolderOrWebLink;
  readonly accessibleBy?: GroupMiniOrUserCollaborations;
  readonly inviteEmail?: string;
  readonly role?: CollaborationRoleField;
  readonly expiresAt?: DateTime;
  readonly isAccessOnly?: boolean;
  readonly status?: CollaborationStatusField;
  readonly acknowledgedAt?: DateTime;
  readonly createdBy?: UserCollaborations;
  readonly createdAt?: DateTime;
  readonly modifiedAt?: DateTime;
  readonly acceptanceRequirementsStatus?: CollaborationAcceptanceRequirementsStatusField;
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
    throw new BoxSdkError({
      message: 'Expecting a string for "CollaborationTypeField"',
    });
  }
  if (val == 'collaboration') {
    return 'collaboration';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
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
    throw new BoxSdkError({
      message: 'Expecting a string for "CollaborationRoleField"',
    });
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
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
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
    throw new BoxSdkError({
      message: 'Expecting a string for "CollaborationStatusField"',
    });
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
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
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
    ['expires_at']:
      val.expiresAt == void 0 ? void 0 : serializeDateTime(val.expiresAt),
    ['is_access_only']: val.isAccessOnly == void 0 ? void 0 : val.isAccessOnly,
    ['status']:
      val.status == void 0
        ? void 0
        : serializeCollaborationStatusField(val.status),
    ['acknowledged_at']:
      val.acknowledgedAt == void 0
        ? void 0
        : serializeDateTime(val.acknowledgedAt),
    ['created_by']:
      val.createdBy == void 0
        ? void 0
        : serializeUserCollaborations(val.createdBy),
    ['created_at']:
      val.createdAt == void 0 ? void 0 : serializeDateTime(val.createdAt),
    ['modified_at']:
      val.modifiedAt == void 0 ? void 0 : serializeDateTime(val.modifiedAt),
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
  const expiresAt: undefined | DateTime =
    val.expires_at == void 0 ? void 0 : deserializeDateTime(val.expires_at);
  const isAccessOnly: undefined | boolean =
    val.is_access_only == void 0 ? void 0 : val.is_access_only;
  const status: undefined | CollaborationStatusField =
    val.status == void 0
      ? void 0
      : deserializeCollaborationStatusField(val.status);
  const acknowledgedAt: undefined | DateTime =
    val.acknowledged_at == void 0
      ? void 0
      : deserializeDateTime(val.acknowledged_at);
  const createdBy: undefined | UserCollaborations =
    val.created_by == void 0
      ? void 0
      : deserializeUserCollaborations(val.created_by);
  const createdAt: undefined | DateTime =
    val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
  const modifiedAt: undefined | DateTime =
    val.modified_at == void 0 ? void 0 : deserializeDateTime(val.modified_at);
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
export function serializeCollaborationInput(
  val: CollaborationInput
): SerializedData {
  return {
    ['id']: val.id,
    ['type']:
      val.type == void 0 ? void 0 : serializeCollaborationTypeField(val.type),
    ['item']:
      val.item == void 0 ? void 0 : serializeFileOrFolderOrWebLink(val.item),
    ['accessible_by']:
      val.accessibleBy == void 0
        ? void 0
        : serializeGroupMiniOrUserCollaborations(val.accessibleBy),
    ['invite_email']: val.inviteEmail == void 0 ? void 0 : val.inviteEmail,
    ['role']:
      val.role == void 0 ? void 0 : serializeCollaborationRoleField(val.role),
    ['expires_at']:
      val.expiresAt == void 0 ? void 0 : serializeDateTime(val.expiresAt),
    ['is_access_only']: val.isAccessOnly == void 0 ? void 0 : val.isAccessOnly,
    ['status']:
      val.status == void 0
        ? void 0
        : serializeCollaborationStatusField(val.status),
    ['acknowledged_at']:
      val.acknowledgedAt == void 0
        ? void 0
        : serializeDateTime(val.acknowledgedAt),
    ['created_by']:
      val.createdBy == void 0
        ? void 0
        : serializeUserCollaborations(val.createdBy),
    ['created_at']:
      val.createdAt == void 0 ? void 0 : serializeDateTime(val.createdAt),
    ['modified_at']:
      val.modifiedAt == void 0 ? void 0 : serializeDateTime(val.modifiedAt),
    ['acceptance_requirements_status']:
      val.acceptanceRequirementsStatus == void 0
        ? void 0
        : serializeCollaborationAcceptanceRequirementsStatusField(
            val.acceptanceRequirementsStatus
          ),
  };
}
export function deserializeCollaborationInput(val: any): CollaborationInput {
  const id: string = val.id;
  const type: undefined | CollaborationTypeField =
    val.type == void 0 ? void 0 : deserializeCollaborationTypeField(val.type);
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
  const expiresAt: undefined | DateTime =
    val.expires_at == void 0 ? void 0 : deserializeDateTime(val.expires_at);
  const isAccessOnly: undefined | boolean =
    val.is_access_only == void 0 ? void 0 : val.is_access_only;
  const status: undefined | CollaborationStatusField =
    val.status == void 0
      ? void 0
      : deserializeCollaborationStatusField(val.status);
  const acknowledgedAt: undefined | DateTime =
    val.acknowledged_at == void 0
      ? void 0
      : deserializeDateTime(val.acknowledged_at);
  const createdBy: undefined | UserCollaborations =
    val.created_by == void 0
      ? void 0
      : deserializeUserCollaborations(val.created_by);
  const createdAt: undefined | DateTime =
    val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
  const modifiedAt: undefined | DateTime =
    val.modified_at == void 0 ? void 0 : deserializeDateTime(val.modified_at);
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
  } satisfies CollaborationInput;
}
