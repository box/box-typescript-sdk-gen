import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type IntegrationMappingBoxItemSlackTypeField = 'folder';
export class IntegrationMappingBoxItemSlack {
  readonly type: IntegrationMappingBoxItemSlackTypeField =
    'folder' as IntegrationMappingBoxItemSlackTypeField;
  readonly id!: string;
  constructor(
    fields: Omit<IntegrationMappingBoxItemSlack, 'type'> &
      Partial<Pick<IntegrationMappingBoxItemSlack, 'type'>>
  ) {
    if (fields.type) {
      this.type = fields.type;
    }
    if (fields.id) {
      this.id = fields.id;
    }
  }
}
export interface IntegrationMappingBoxItemSlackInput {
  readonly type?: IntegrationMappingBoxItemSlackTypeField;
  readonly id: string;
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
    throw new BoxSdkError({
      message:
        'Expecting a string for "IntegrationMappingBoxItemSlackTypeField"',
    });
  }
  if (val == 'folder') {
    return 'folder';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
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
export function serializeIntegrationMappingBoxItemSlackInput(
  val: IntegrationMappingBoxItemSlackInput
): SerializedData {
  return {
    ['type']:
      val.type == void 0
        ? void 0
        : serializeIntegrationMappingBoxItemSlackTypeField(val.type),
    ['id']: val.id,
  };
}
export function deserializeIntegrationMappingBoxItemSlackInput(
  val: any
): IntegrationMappingBoxItemSlackInput {
  const type: undefined | IntegrationMappingBoxItemSlackTypeField =
    val.type == void 0
      ? void 0
      : deserializeIntegrationMappingBoxItemSlackTypeField(val.type);
  const id: string = val.id;
  return { type: type, id: id } satisfies IntegrationMappingBoxItemSlackInput;
}
