import { deserializeIntegrationMappingBaseTypeField } from './integrationMappingBase.generated.js';
import { serializeIntegrationMappingBase } from './integrationMappingBase.generated.js';
import { serializeIntegrationMappingPartnerItemTeamsUnion } from './integrationMappingPartnerItemTeamsUnion.generated.js';
import { deserializeIntegrationMappingPartnerItemTeamsUnion } from './integrationMappingPartnerItemTeamsUnion.generated.js';
import { serializeFolderReference } from './folderReference.generated.js';
import { deserializeFolderReference } from './folderReference.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { IntegrationMappingBase } from './integrationMappingBase.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class IntegrationMappingTeams extends IntegrationMappingBase {
    constructor(fields) {
        super(fields);
        if (fields.integrationType !== undefined) {
            this.integrationType = fields.integrationType;
        }
        if (fields.isOverriddenByManualMapping !== undefined) {
            this.isOverriddenByManualMapping = fields.isOverriddenByManualMapping;
        }
        if (fields.partnerItem !== undefined) {
            this.partnerItem = fields.partnerItem;
        }
        if (fields.boxItem !== undefined) {
            this.boxItem = fields.boxItem;
        }
        if (fields.createdAt !== undefined) {
            this.createdAt = fields.createdAt;
        }
        if (fields.modifiedAt !== undefined) {
            this.modifiedAt = fields.modifiedAt;
        }
    }
}
export function serializeIntegrationMappingTeamsIntegrationTypeField(val) {
    return val;
}
export function deserializeIntegrationMappingTeamsIntegrationTypeField(val) {
    if (val == 'teams') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize IntegrationMappingTeamsIntegrationTypeField",
    });
}
export function serializeIntegrationMappingTeams(val) {
    const base = serializeIntegrationMappingBase(val);
    if (!sdIsMap(base)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "IntegrationMappingTeams"',
        });
    }
    return {
        ...base,
        ...{
            ['integration_type']: val.integrationType == void 0
                ? val.integrationType
                : serializeIntegrationMappingTeamsIntegrationTypeField(val.integrationType),
            ['is_overridden_by_manual_mapping']: val.isOverriddenByManualMapping,
            ['partner_item']: serializeIntegrationMappingPartnerItemTeamsUnion(val.partnerItem),
            ['box_item']: serializeFolderReference(val.boxItem),
            ['created_at']: val.createdAt == void 0
                ? val.createdAt
                : serializeDateTime(val.createdAt),
            ['modified_at']: val.modifiedAt == void 0
                ? val.modifiedAt
                : serializeDateTime(val.modifiedAt),
        },
    };
}
export function deserializeIntegrationMappingTeams(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "IntegrationMappingTeams"',
        });
    }
    const integrationType = val.integration_type == void 0
        ? void 0
        : deserializeIntegrationMappingTeamsIntegrationTypeField(val.integration_type);
    if (!(val.is_overridden_by_manual_mapping == void 0) &&
        !sdIsBoolean(val.is_overridden_by_manual_mapping)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "is_overridden_by_manual_mapping" of type "IntegrationMappingTeams"',
        });
    }
    const isOverriddenByManualMapping = val.is_overridden_by_manual_mapping == void 0
        ? void 0
        : val.is_overridden_by_manual_mapping;
    if (val.partner_item == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "partner_item" of type "IntegrationMappingTeams" to be defined',
        });
    }
    const partnerItem = deserializeIntegrationMappingPartnerItemTeamsUnion(val.partner_item);
    if (val.box_item == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "box_item" of type "IntegrationMappingTeams" to be defined',
        });
    }
    const boxItem = deserializeFolderReference(val.box_item);
    if (!(val.created_at == void 0) && !sdIsString(val.created_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "created_at" of type "IntegrationMappingTeams"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
    if (!(val.modified_at == void 0) && !sdIsString(val.modified_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "modified_at" of type "IntegrationMappingTeams"',
        });
    }
    const modifiedAt = val.modified_at == void 0 ? void 0 : deserializeDateTime(val.modified_at);
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "IntegrationMappingTeams" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "IntegrationMappingTeams"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "IntegrationMappingTeams" to be defined',
        });
    }
    const type = deserializeIntegrationMappingBaseTypeField(val.type);
    return {
        integrationType: integrationType,
        isOverriddenByManualMapping: isOverriddenByManualMapping,
        partnerItem: partnerItem,
        boxItem: boxItem,
        createdAt: createdAt,
        modifiedAt: modifiedAt,
        id: id,
        type: type,
    };
}
//# sourceMappingURL=integrationMappingTeams.generated.js.map