import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeIntegrationMappingPartnerItemTeamsCreateRequestTypeField(val) {
    return val;
}
export function deserializeIntegrationMappingPartnerItemTeamsCreateRequestTypeField(val) {
    if (val == 'channel') {
        return val;
    }
    if (val == 'team') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize IntegrationMappingPartnerItemTeamsCreateRequestTypeField",
    });
}
export function serializeIntegrationMappingPartnerItemTeamsCreateRequest(val) {
    return {
        ['type']: serializeIntegrationMappingPartnerItemTeamsCreateRequestTypeField(val.type),
        ['id']: val.id,
        ['tenant_id']: val.tenantId,
        ['team_id']: val.teamId,
    };
}
export function deserializeIntegrationMappingPartnerItemTeamsCreateRequest(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "IntegrationMappingPartnerItemTeamsCreateRequest"',
        });
    }
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "IntegrationMappingPartnerItemTeamsCreateRequest" to be defined',
        });
    }
    const type = deserializeIntegrationMappingPartnerItemTeamsCreateRequestTypeField(val.type);
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "IntegrationMappingPartnerItemTeamsCreateRequest" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "IntegrationMappingPartnerItemTeamsCreateRequest"',
        });
    }
    const id = val.id;
    if (val.tenant_id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "tenant_id" of type "IntegrationMappingPartnerItemTeamsCreateRequest" to be defined',
        });
    }
    if (!sdIsString(val.tenant_id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "tenant_id" of type "IntegrationMappingPartnerItemTeamsCreateRequest"',
        });
    }
    const tenantId = val.tenant_id;
    if (val.team_id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "team_id" of type "IntegrationMappingPartnerItemTeamsCreateRequest" to be defined',
        });
    }
    if (!sdIsString(val.team_id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "team_id" of type "IntegrationMappingPartnerItemTeamsCreateRequest"',
        });
    }
    const teamId = val.team_id;
    return {
        type: type,
        id: id,
        tenantId: tenantId,
        teamId: teamId,
    };
}
//# sourceMappingURL=integrationMappingPartnerItemTeamsCreateRequest.generated.js.map