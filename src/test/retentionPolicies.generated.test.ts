import { serializeRetentionPolicy } from "../schemas.generated.js";
import { deserializeRetentionPolicy } from "../schemas.generated.js";
import { serializeCreateRetentionPolicyRequestBodyArg } from "../managers/retentionPolicies.generated.js";
import { deserializeCreateRetentionPolicyRequestBodyArg } from "../managers/retentionPolicies.generated.js";
import { serializeCreateRetentionPolicyRequestBodyArgPolicyTypeField } from "../managers/retentionPolicies.generated.js";
import { deserializeCreateRetentionPolicyRequestBodyArgPolicyTypeField } from "../managers/retentionPolicies.generated.js";
import { serializeCreateRetentionPolicyRequestBodyArgDispositionActionField } from "../managers/retentionPolicies.generated.js";
import { deserializeCreateRetentionPolicyRequestBodyArgDispositionActionField } from "../managers/retentionPolicies.generated.js";
import { serializeCreateRetentionPolicyRequestBodyArgRetentionTypeField } from "../managers/retentionPolicies.generated.js";
import { deserializeCreateRetentionPolicyRequestBodyArgRetentionTypeField } from "../managers/retentionPolicies.generated.js";
import { serializeRetentionPolicies } from "../schemas.generated.js";
import { deserializeRetentionPolicies } from "../schemas.generated.js";
import { serializeUpdateRetentionPolicyByIdRequestBodyArg } from "../managers/retentionPolicies.generated.js";
import { deserializeUpdateRetentionPolicyByIdRequestBodyArg } from "../managers/retentionPolicies.generated.js";
import { RetentionPolicy } from "../schemas.generated.js";
import { CreateRetentionPolicyRequestBodyArg } from "../managers/retentionPolicies.generated.js";
import { CreateRetentionPolicyRequestBodyArgPolicyTypeField } from "../managers/retentionPolicies.generated.js";
import { CreateRetentionPolicyRequestBodyArgDispositionActionField } from "../managers/retentionPolicies.generated.js";
import { CreateRetentionPolicyRequestBodyArgRetentionTypeField } from "../managers/retentionPolicies.generated.js";
import { RetentionPolicies } from "../schemas.generated.js";
import { UpdateRetentionPolicyByIdRequestBodyArg } from "../managers/retentionPolicies.generated.js";
import { decodeBase64 } from "../utils.js";
import { getEnvVar } from "../utils.js";
import { getUuid } from "../utils.js";
import { Client } from "../client.generated.js";
import { JwtAuth } from "../jwtAuth.js";
import { JwtConfig } from "../jwtAuth.js";
const jwtConfig: any = JwtConfig.fromConfigJsonString(decodeBase64(getEnvVar("JWT_CONFIG_BASE_64")));
const auth: any = new JwtAuth({ config: jwtConfig });
const client: any = new Client({ auth: auth });
test("testCreateUpdateGetDeleteRetentionPolicy", async function testCreateUpdateGetDeleteRetentionPolicy(): Promise<any> {
    const retentionPolicyName: any = getUuid();
    const retentionDescription: any = "test description";
    const retentionPolicy: any = await client.retentionPolicies.createRetentionPolicy({ policyName: retentionPolicyName, policyType: "finite" as CreateRetentionPolicyRequestBodyArgPolicyTypeField, areOwnersNotified: true, canOwnerExtendRetention: true, description: retentionDescription, dispositionAction: "remove_retention" as CreateRetentionPolicyRequestBodyArgDispositionActionField, retentionLength: "1", retentionType: "modifiable" as CreateRetentionPolicyRequestBodyArgRetentionTypeField } satisfies CreateRetentionPolicyRequestBodyArg);
    if (!(retentionPolicy.policyName == retentionPolicyName)) {
        throw "Assertion failed";
    }
    if (!(retentionPolicy.description == retentionDescription)) {
        throw "Assertion failed";
    }
    const retentionPolicyById: any = await client.retentionPolicies.getRetentionPolicyById(retentionPolicy.id);
    if (!(retentionPolicyById.id == retentionPolicy.id)) {
        throw "Assertion failed";
    }
    const retentionPolicies: any = await client.retentionPolicies.getRetentionPolicies();
    if (!(retentionPolicies.entries.length > 0)) {
        throw "Assertion failed";
    }
    const updatedRetentionPolicyName: any = getUuid();
    const updatedRetentionPolicy: any = await client.retentionPolicies.updateRetentionPolicyById(retentionPolicy.id, { policyName: updatedRetentionPolicyName } satisfies UpdateRetentionPolicyByIdRequestBodyArg);
    if (!(updatedRetentionPolicy.policyName == updatedRetentionPolicyName)) {
        throw "Assertion failed";
    }
    await client.retentionPolicies.deleteRetentionPolicyById(retentionPolicy.id)
});
export {};
