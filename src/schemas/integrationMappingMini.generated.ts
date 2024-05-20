import { serializeIntegrationMappingBaseIntegrationTypeField } from './integrationMappingBase.generated.js';
import { deserializeIntegrationMappingBaseIntegrationTypeField } from './integrationMappingBase.generated.js';
import { serializeIntegrationMappingBase } from './integrationMappingBase.generated.js';
import { deserializeIntegrationMappingBase } from './integrationMappingBase.generated.js';
import { IntegrationMappingBaseIntegrationTypeField } from './integrationMappingBase.generated.js';
import { IntegrationMappingBase } from './integrationMappingBase.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type IntegrationMappingMiniPartnerItemTypeField = 'channel';
export type IntegrationMappingMiniBoxItemTypeField = 'folder';
export type IntegrationMappingMini = IntegrationMappingBase & {
  readonly partnerItemId?: string;
  readonly partnerItemType?: IntegrationMappingMiniPartnerItemTypeField;
  readonly boxItemId?: string;
  readonly boxItemType?: IntegrationMappingMiniBoxItemTypeField;
};
export function serializeIntegrationMappingMiniPartnerItemTypeField(
  val: IntegrationMappingMiniPartnerItemTypeField
): SerializedData {
  return val;
}
export function deserializeIntegrationMappingMiniPartnerItemTypeField(
  val: SerializedData
): IntegrationMappingMiniPartnerItemTypeField {
  if (val == 'channel') {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize IntegrationMappingMiniPartnerItemTypeField",
  });
}
export function serializeIntegrationMappingMiniBoxItemTypeField(
  val: IntegrationMappingMiniBoxItemTypeField
): SerializedData {
  return val;
}
export function deserializeIntegrationMappingMiniBoxItemTypeField(
  val: SerializedData
): IntegrationMappingMiniBoxItemTypeField {
  if (val == 'folder') {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize IntegrationMappingMiniBoxItemTypeField",
  });
}
export function serializeIntegrationMappingMini(
  val: IntegrationMappingMini
): SerializedData {
  const base: any = serializeIntegrationMappingBase(val);
  if (!sdIsMap(base)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "IntegrationMappingMini"',
    });
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
  val: SerializedData
): IntegrationMappingMini {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "IntegrationMappingMini"',
    });
  }
  if (!(val.partner_item_id == void 0) && !sdIsString(val.partner_item_id)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "partner_item_id" of type "IntegrationMappingMini"',
    });
  }
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
  if (!(val.box_item_id == void 0) && !sdIsString(val.box_item_id)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "box_item_id" of type "IntegrationMappingMini"',
    });
  }
  const boxItemId: undefined | string =
    val.box_item_id == void 0 ? void 0 : val.box_item_id;
  const boxItemType: undefined | IntegrationMappingMiniBoxItemTypeField =
    val.box_item_type == void 0
      ? void 0
      : deserializeIntegrationMappingMiniBoxItemTypeField(val.box_item_type);
  if (!(val.id == void 0) && !sdIsString(val.id)) {
    throw new BoxSdkError({
      message: 'Expecting string for "id" of type "IntegrationMappingMini"',
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
    partnerItemId: partnerItemId,
    partnerItemType: partnerItemType,
    boxItemId: boxItemId,
    boxItemType: boxItemType,
    id: id,
    integrationType: integrationType,
  } satisfies IntegrationMappingMini;
}
