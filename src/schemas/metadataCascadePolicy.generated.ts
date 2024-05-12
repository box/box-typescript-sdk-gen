import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
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
export class MetadataCascadePolicy {
  readonly id!: string;
  readonly type: MetadataCascadePolicyTypeField =
    'metadata_cascade_policy' as MetadataCascadePolicyTypeField;
  readonly ownerEnterprise?: MetadataCascadePolicyOwnerEnterpriseField;
  readonly parent?: MetadataCascadePolicyParentField;
  readonly scope?: string;
  readonly templateKey?: string;
  constructor(
    fields: Omit<MetadataCascadePolicy, 'type'> &
      Partial<Pick<MetadataCascadePolicy, 'type'>>
  ) {
    if (fields.id) {
      this.id = fields.id;
    }
    if (fields.type) {
      this.type = fields.type;
    }
    if (fields.ownerEnterprise) {
      this.ownerEnterprise = fields.ownerEnterprise;
    }
    if (fields.parent) {
      this.parent = fields.parent;
    }
    if (fields.scope) {
      this.scope = fields.scope;
    }
    if (fields.templateKey) {
      this.templateKey = fields.templateKey;
    }
  }
}
export interface MetadataCascadePolicyInput {
  readonly id: string;
  readonly type?: MetadataCascadePolicyTypeField;
  readonly ownerEnterprise?: MetadataCascadePolicyOwnerEnterpriseField;
  readonly parent?: MetadataCascadePolicyParentField;
  readonly scope?: string;
  readonly templateKey?: string;
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
    throw new BoxSdkError({
      message: 'Expecting a string for "MetadataCascadePolicyTypeField"',
    });
  }
  if (val == 'metadata_cascade_policy') {
    return 'metadata_cascade_policy';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
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
    throw new BoxSdkError({
      message:
        'Expecting a string for "MetadataCascadePolicyOwnerEnterpriseTypeField"',
    });
  }
  if (val == 'enterprise') {
    return 'enterprise';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
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
    throw new BoxSdkError({
      message: 'Expecting a string for "MetadataCascadePolicyParentTypeField"',
    });
  }
  if (val == 'folder') {
    return 'folder';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
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
export function serializeMetadataCascadePolicyInput(
  val: MetadataCascadePolicyInput
): SerializedData {
  return {
    ['id']: val.id,
    ['type']:
      val.type == void 0
        ? void 0
        : serializeMetadataCascadePolicyTypeField(val.type),
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
export function deserializeMetadataCascadePolicyInput(
  val: any
): MetadataCascadePolicyInput {
  const id: string = val.id;
  const type: undefined | MetadataCascadePolicyTypeField =
    val.type == void 0
      ? void 0
      : deserializeMetadataCascadePolicyTypeField(val.type);
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
  } satisfies MetadataCascadePolicyInput;
}
