import { serializeIntegrationMappingBaseIntegrationTypeField } from './integrationMappingBase.generated.js';
import { deserializeIntegrationMappingBaseIntegrationTypeField } from './integrationMappingBase.generated.js';
import { serializeIntegrationMappingBase } from './integrationMappingBase.generated.js';
import { deserializeIntegrationMappingBase } from './integrationMappingBase.generated.js';
import { serializeIntegrationMappingPartnerItemSlackUnion } from './integrationMappingPartnerItemSlackUnion.generated.js';
import { deserializeIntegrationMappingPartnerItemSlackUnion } from './integrationMappingPartnerItemSlackUnion.generated.js';
import { serializeFolderMini } from './folderMini.generated.js';
import { deserializeFolderMini } from './folderMini.generated.js';
import { serializeIntegrationMappingSlackOptions } from './integrationMappingSlackOptions.generated.js';
import { deserializeIntegrationMappingSlackOptions } from './integrationMappingSlackOptions.generated.js';
import { serializeUserIntegrationMappings } from './userIntegrationMappings.generated.js';
import { deserializeUserIntegrationMappings } from './userIntegrationMappings.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { IntegrationMappingBaseIntegrationTypeField } from './integrationMappingBase.generated.js';
import { IntegrationMappingBase } from './integrationMappingBase.generated.js';
import { IntegrationMappingPartnerItemSlackUnion } from './integrationMappingPartnerItemSlackUnion.generated.js';
import { FolderMini } from './folderMini.generated.js';
import { IntegrationMappingSlackOptions } from './integrationMappingSlackOptions.generated.js';
import { UserIntegrationMappings } from './userIntegrationMappings.generated.js';
import { DateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type IntegrationMappingTypeField = 'integration_mapping';
export class IntegrationMapping implements IntegrationMappingBase {
  readonly id?: string;
  readonly integrationType?: IntegrationMappingBaseIntegrationTypeField;
  readonly type: IntegrationMappingTypeField =
    'integration_mapping' as IntegrationMappingTypeField;
  readonly partnerItem!: IntegrationMappingPartnerItemSlackUnion;
  readonly boxItem!: FolderMini;
  readonly isManuallyCreated?: boolean;
  readonly options?: IntegrationMappingSlackOptions;
  readonly createdBy?: UserIntegrationMappings;
  readonly modifiedBy?: UserIntegrationMappings;
  readonly createdAt?: DateTime;
  readonly modifiedAt?: DateTime;
  constructor(
    fields: Omit<IntegrationMapping, 'type'> &
      Partial<Pick<IntegrationMapping, 'type'>>
  ) {
    if (fields.id) {
      this.id = fields.id;
    }
    if (fields.integrationType) {
      this.integrationType = fields.integrationType;
    }
    if (fields.type) {
      this.type = fields.type;
    }
    if (fields.partnerItem) {
      this.partnerItem = fields.partnerItem;
    }
    if (fields.boxItem) {
      this.boxItem = fields.boxItem;
    }
    if (fields.isManuallyCreated) {
      this.isManuallyCreated = fields.isManuallyCreated;
    }
    if (fields.options) {
      this.options = fields.options;
    }
    if (fields.createdBy) {
      this.createdBy = fields.createdBy;
    }
    if (fields.modifiedBy) {
      this.modifiedBy = fields.modifiedBy;
    }
    if (fields.createdAt) {
      this.createdAt = fields.createdAt;
    }
    if (fields.modifiedAt) {
      this.modifiedAt = fields.modifiedAt;
    }
  }
}
export function serializeIntegrationMappingTypeField(
  val: IntegrationMappingTypeField
): SerializedData {
  return val;
}
export function deserializeIntegrationMappingTypeField(
  val: SerializedData
): IntegrationMappingTypeField {
  if (val == 'integration_mapping') {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize IntegrationMappingTypeField",
  });
}
export function serializeIntegrationMapping(
  val: IntegrationMapping
): SerializedData {
  const base: any = serializeIntegrationMappingBase(val);
  if (!sdIsMap(base)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "IntegrationMapping"',
    });
  }
  return {
    ...base,
    ...{
      ['type']: serializeIntegrationMappingTypeField(val.type),
      ['partner_item']: serializeIntegrationMappingPartnerItemSlackUnion(
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
      ['created_at']:
        val.createdAt == void 0 ? void 0 : serializeDateTime(val.createdAt),
      ['modified_at']:
        val.modifiedAt == void 0 ? void 0 : serializeDateTime(val.modifiedAt),
    },
  };
}
export function deserializeIntegrationMapping(
  val: SerializedData
): IntegrationMapping {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "IntegrationMapping"',
    });
  }
  if (val.type == void 0) {
    throw new BoxSdkError({
      message: 'Expecting "type" of type "IntegrationMapping" to be defined',
    });
  }
  const type: IntegrationMappingTypeField =
    deserializeIntegrationMappingTypeField(val.type);
  if (val.partner_item == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "partner_item" of type "IntegrationMapping" to be defined',
    });
  }
  const partnerItem: IntegrationMappingPartnerItemSlackUnion =
    deserializeIntegrationMappingPartnerItemSlackUnion(val.partner_item);
  if (val.box_item == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "box_item" of type "IntegrationMapping" to be defined',
    });
  }
  const boxItem: FolderMini = deserializeFolderMini(val.box_item);
  if (
    !(val.is_manually_created == void 0) &&
    !sdIsBoolean(val.is_manually_created)
  ) {
    throw new BoxSdkError({
      message:
        'Expecting boolean for "is_manually_created" of type "IntegrationMapping"',
    });
  }
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
  if (!(val.created_at == void 0) && !sdIsString(val.created_at)) {
    throw new BoxSdkError({
      message: 'Expecting string for "created_at" of type "IntegrationMapping"',
    });
  }
  const createdAt: undefined | DateTime =
    val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
  if (!(val.modified_at == void 0) && !sdIsString(val.modified_at)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "modified_at" of type "IntegrationMapping"',
    });
  }
  const modifiedAt: undefined | DateTime =
    val.modified_at == void 0 ? void 0 : deserializeDateTime(val.modified_at);
  if (!(val.id == void 0) && !sdIsString(val.id)) {
    throw new BoxSdkError({
      message: 'Expecting string for "id" of type "IntegrationMapping"',
    });
  }
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
