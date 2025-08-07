import { SerializedData } from '../serialization/json.js';
export type IntegrationMappingPartnerItemSlackTypeField = 'channel';
export declare class IntegrationMappingPartnerItemSlack {
    /**
     * Type of the mapped item referenced in `id`. */
    readonly type: IntegrationMappingPartnerItemSlackTypeField;
    /**
     * ID of the mapped item (of type referenced in `type`). */
    readonly id: string;
    /**
     * ID of the Slack workspace with which the item is associated. Use this parameter if Box for Slack is installed at a workspace level. Do not use `slack_org_id` at the same time. */
    readonly slackWorkspaceId?: string | null;
    /**
     * ID of the Slack org with which the item is associated. Use this parameter if Box for Slack is installed at the org level. Do not use `slack_workspace_id` at the same time. */
    readonly slackOrgId?: string | null;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<IntegrationMappingPartnerItemSlack, 'type'> & Partial<Pick<IntegrationMappingPartnerItemSlack, 'type'>>);
}
export interface IntegrationMappingPartnerItemSlackInput {
    /**
     * Type of the mapped item referenced in `id`. */
    readonly type?: IntegrationMappingPartnerItemSlackTypeField;
    /**
     * ID of the mapped item (of type referenced in `type`). */
    readonly id: string;
    /**
     * ID of the Slack workspace with which the item is associated. Use this parameter if Box for Slack is installed at a workspace level. Do not use `slack_org_id` at the same time. */
    readonly slackWorkspaceId?: string | null;
    /**
     * ID of the Slack org with which the item is associated. Use this parameter if Box for Slack is installed at the org level. Do not use `slack_workspace_id` at the same time. */
    readonly slackOrgId?: string | null;
    readonly rawData?: SerializedData;
}
export declare function serializeIntegrationMappingPartnerItemSlackTypeField(val: IntegrationMappingPartnerItemSlackTypeField): SerializedData;
export declare function deserializeIntegrationMappingPartnerItemSlackTypeField(val: SerializedData): IntegrationMappingPartnerItemSlackTypeField;
export declare function serializeIntegrationMappingPartnerItemSlack(val: IntegrationMappingPartnerItemSlack): SerializedData;
export declare function deserializeIntegrationMappingPartnerItemSlack(val: SerializedData): IntegrationMappingPartnerItemSlack;
export declare function serializeIntegrationMappingPartnerItemSlackInput(val: IntegrationMappingPartnerItemSlackInput): SerializedData;
export declare function deserializeIntegrationMappingPartnerItemSlackInput(val: SerializedData): IntegrationMappingPartnerItemSlackInput;
//# sourceMappingURL=integrationMappingPartnerItemSlack.generated.d.ts.map