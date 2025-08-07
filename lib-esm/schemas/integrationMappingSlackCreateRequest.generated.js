import { serializeIntegrationMappingPartnerItemSlack } from './integrationMappingPartnerItemSlack.generated.js';
import { deserializeIntegrationMappingPartnerItemSlack } from './integrationMappingPartnerItemSlack.generated.js';
import { serializeIntegrationMappingBoxItemSlack } from './integrationMappingBoxItemSlack.generated.js';
import { deserializeIntegrationMappingBoxItemSlack } from './integrationMappingBoxItemSlack.generated.js';
import { serializeIntegrationMappingSlackOptions } from './integrationMappingSlackOptions.generated.js';
import { deserializeIntegrationMappingSlackOptions } from './integrationMappingSlackOptions.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeIntegrationMappingSlackCreateRequest(val) {
    return {
        ['partner_item']: serializeIntegrationMappingPartnerItemSlack(val.partnerItem),
        ['box_item']: serializeIntegrationMappingBoxItemSlack(val.boxItem),
        ['options']: val.options == void 0
            ? val.options
            : serializeIntegrationMappingSlackOptions(val.options),
    };
}
export function deserializeIntegrationMappingSlackCreateRequest(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "IntegrationMappingSlackCreateRequest"',
        });
    }
    if (val.partner_item == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "partner_item" of type "IntegrationMappingSlackCreateRequest" to be defined',
        });
    }
    const partnerItem = deserializeIntegrationMappingPartnerItemSlack(val.partner_item);
    if (val.box_item == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "box_item" of type "IntegrationMappingSlackCreateRequest" to be defined',
        });
    }
    const boxItem = deserializeIntegrationMappingBoxItemSlack(val.box_item);
    const options = val.options == void 0
        ? void 0
        : deserializeIntegrationMappingSlackOptions(val.options);
    return {
        partnerItem: partnerItem,
        boxItem: boxItem,
        options: options,
    };
}
//# sourceMappingURL=integrationMappingSlackCreateRequest.generated.js.map