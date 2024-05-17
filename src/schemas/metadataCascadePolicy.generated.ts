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
  val: SerializedData
): MetadataCascadePolicyTypeField {
  if (val == 'metadata_cascade_policy') {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize MetadataCascadePolicyTypeField",
  });
}
export function serializeMetadataCascadePolicyOwnerEnterpriseTypeField(
  val: MetadataCascadePolicyOwnerEnterpriseTypeField
): SerializedData {
  return val;
}
export function deserializeMetadataCascadePolicyOwnerEnterpriseTypeField(
  val: SerializedData
): MetadataCascadePolicyOwnerEnterpriseTypeField {
  if (val == 'enterprise') {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize MetadataCascadePolicyOwnerEnterpriseTypeField",
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
  val: SerializedData
): MetadataCascadePolicyOwnerEnterpriseField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a map for "MetadataCascadePolicyOwnerEnterpriseField"',
    });
  }
  const type: undefined | MetadataCascadePolicyOwnerEnterpriseTypeField =
    val.type == void 0
      ? void 0
      : deserializeMetadataCascadePolicyOwnerEnterpriseTypeField(val.type);
  if (!(val.id == void 0) && !sdIsString(val.id)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "id" of type "MetadataCascadePolicyOwnerEnterpriseField"',
    });
  }
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
  val: SerializedData
): MetadataCascadePolicyParentTypeField {
  if (val == 'folder') {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize MetadataCascadePolicyParentTypeField",
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
  val: SerializedData
): MetadataCascadePolicyParentField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "MetadataCascadePolicyParentField"',
    });
  }
  const type: undefined | MetadataCascadePolicyParentTypeField =
    val.type == void 0
      ? void 0
      : deserializeMetadataCascadePolicyParentTypeField(val.type);
  if (!(val.id == void 0) && !sdIsString(val.id)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "id" of type "MetadataCascadePolicyParentField"',
    });
  }
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
  val: SerializedData
): MetadataCascadePolicy {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "MetadataCascadePolicy"',
    });
  }
  if (val.id == void 0) {
    throw new BoxSdkError({
      message: 'Expecting "id" of type "MetadataCascadePolicy" to be defined',
    });
  }
  if (!sdIsString(val.id)) {
    throw new BoxSdkError({
      message: 'Expecting string for "id" of type "MetadataCascadePolicy"',
    });
  }
  const id: string = val.id;
  if (val.type == void 0) {
    throw new BoxSdkError({
      message: 'Expecting "type" of type "MetadataCascadePolicy" to be defined',
    });
  }
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
  if (!(val.scope == void 0) && !sdIsString(val.scope)) {
    throw new BoxSdkError({
      message: 'Expecting string for "scope" of type "MetadataCascadePolicy"',
    });
  }
  const scope: undefined | string = val.scope == void 0 ? void 0 : val.scope;
  if (!(val.templateKey == void 0) && !sdIsString(val.templateKey)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "templateKey" of type "MetadataCascadePolicy"',
    });
  }
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
  val: SerializedData
): MetadataCascadePolicyInput {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "MetadataCascadePolicyInput"',
    });
  }
  if (val.id == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "id" of type "MetadataCascadePolicyInput" to be defined',
    });
  }
  if (!sdIsString(val.id)) {
    throw new BoxSdkError({
      message: 'Expecting string for "id" of type "MetadataCascadePolicyInput"',
    });
  }
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
  if (!(val.scope == void 0) && !sdIsString(val.scope)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "scope" of type "MetadataCascadePolicyInput"',
    });
  }
  const scope: undefined | string = val.scope == void 0 ? void 0 : val.scope;
  if (!(val.templateKey == void 0) && !sdIsString(val.templateKey)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "templateKey" of type "MetadataCascadePolicyInput"',
    });
  }
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
