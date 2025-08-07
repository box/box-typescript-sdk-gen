import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeIntegrationMappingPartnerItemTeamsTypeField(val) {
    return val;
}
export function deserializeIntegrationMappingPartnerItemTeamsTypeField(val) {
    if (val == 'channel') {
        return val;
    }
    if (val == 'team') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize IntegrationMappingPartnerItemTeamsTypeField",
    });
}
export function serializeIntegrationMappingPartnerItemTeams(val) {
    return {
        ['type']: serializeIntegrationMappingPartnerItemTeamsTypeField(val.type),
        ['id']: val.id,
        ['tenant_id']: val.tenantId,
    };
}
export function deserializeIntegrationMappingPartnerItemTeams(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "IntegrationMappingPartnerItemTeams"',
        });
    }
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "IntegrationMappingPartnerItemTeams" to be defined',
        });
    }
    const type = deserializeIntegrationMappingPartnerItemTeamsTypeField(val.type);
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "IntegrationMappingPartnerItemTeams" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "IntegrationMappingPartnerItemTeams"',
        });
    }
    const id = val.id;
    if (val.tenant_id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "tenant_id" of type "IntegrationMappingPartnerItemTeams" to be defined',
        });
    }
    if (!sdIsString(val.tenant_id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "tenant_id" of type "IntegrationMappingPartnerItemTeams"',
        });
    }
    const tenantId = val.tenant_id;
    return {
        type: type,
        id: id,
        tenantId: tenantId,
    };
}
//# sourceMappingURL=integrationMappingPartnerItemTeams.generated.js.map