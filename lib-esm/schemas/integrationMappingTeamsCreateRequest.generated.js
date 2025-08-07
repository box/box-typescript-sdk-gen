import { serializeIntegrationMappingPartnerItemTeamsCreateRequest } from './integrationMappingPartnerItemTeamsCreateRequest.generated.js';
import { deserializeIntegrationMappingPartnerItemTeamsCreateRequest } from './integrationMappingPartnerItemTeamsCreateRequest.generated.js';
import { serializeFolderReference } from './folderReference.generated.js';
import { deserializeFolderReference } from './folderReference.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeIntegrationMappingTeamsCreateRequest(val) {
    return {
        ['partner_item']: serializeIntegrationMappingPartnerItemTeamsCreateRequest(val.partnerItem),
        ['box_item']: serializeFolderReference(val.boxItem),
    };
}
export function deserializeIntegrationMappingTeamsCreateRequest(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "IntegrationMappingTeamsCreateRequest"',
        });
    }
    if (val.partner_item == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "partner_item" of type "IntegrationMappingTeamsCreateRequest" to be defined',
        });
    }
    const partnerItem = deserializeIntegrationMappingPartnerItemTeamsCreateRequest(val.partner_item);
    if (val.box_item == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "box_item" of type "IntegrationMappingTeamsCreateRequest" to be defined',
        });
    }
    const boxItem = deserializeFolderReference(val.box_item);
    return {
        partnerItem: partnerItem,
        boxItem: boxItem,
    };
}
//# sourceMappingURL=integrationMappingTeamsCreateRequest.generated.js.map