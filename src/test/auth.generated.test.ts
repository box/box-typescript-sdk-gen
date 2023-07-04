import { newSerializeGetUserMeQueryParamsArg } from "../managers/users.generated.js";
import { newDeserializeGetUserMeQueryParamsArg } from "../managers/users.generated.js";
import { newSerializeUserFull } from "../schemas.generated.js";
import { newDeserializeUserFull } from "../schemas.generated.js";
import { GetUserMeQueryParamsArg } from "../managers/users.generated.js";
import { decodeBase64 } from "../utils.js";
import { getEnvVar } from "../utils.js";
import { Client } from "../client.generated.js";
import { JwtAuth } from "../jwtAuth.js";
import { JwtConfig } from "../jwtAuth.js";
import { CcgAuth } from "../ccgAuth.js";
import { CcgConfig } from "../ccgAuth.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { OAuth } from "../oauth.js";
import { OAuthConfig } from "../oauth.js";
import { UserFull } from "../schemas.generated.js";
test("test_ccg_auth", async function test_ccg_auth(): Promise<any> {
    const userId: any = getEnvVar("USER_ID");
    const enterpriseId: any = getEnvVar("ENTERPRISE_ID");
    const ccgConfig: any = { clientId: getEnvVar("CLIENT_ID"), clientSecret: getEnvVar("CLIENT_SECRET"), enterpriseId: enterpriseId, userId: userId } satisfies CcgConfig;
    const auth: any = new CcgAuth({ config: ccgConfig });
    const client: any = new Client({ auth: auth });
    auth.asUser(userId)
    const currentUser: any = await client.users.getUserMe();
    if (!(currentUser.id == userId)) {
        throw "Assertion failed";
    }
    auth.asEnterprise(enterpriseId)
    const newUser: any = await client.users.getUserMe({ fields: "enterprise" } satisfies GetUserMeQueryParamsArg);
    if (!(!(newUser.enterprise == void 0) && newUser.enterprise.id == enterpriseId)) {
        throw "Assertion failed";
    }
    if (!!(newUser.id == userId)) {
        throw "Assertion failed";
    }
});
test("test_jwt_auth", async function test_jwt_auth(): Promise<any> {
    const userId: any = getEnvVar("USER_ID");
    const enterpriseId: any = getEnvVar("ENTERPRISE_ID");
    const jwtConfig: any = JwtConfig.fromConfigJsonString(decodeBase64(getEnvVar("JWT_CONFIG_BASE_64")));
    const auth: any = new JwtAuth({ config: jwtConfig });
    const client: any = new Client({ auth: auth });
    auth.asUser(userId)
    const currentUser: any = await client.users.getUserMe();
    if (!(currentUser.id == userId)) {
        throw "Assertion failed";
    }
    auth.asEnterprise(enterpriseId)
    const newUser: any = await client.users.getUserMe({ fields: "enterprise" } satisfies GetUserMeQueryParamsArg);
    if (!(!(newUser.enterprise == void 0) && newUser.enterprise.id == enterpriseId)) {
        throw "Assertion failed";
    }
    if (!!(newUser.id == userId)) {
        throw "Assertion failed";
    }
});
test("test_developer_token_auth", async function test_developer_token_auth(): Promise<any> {
    const userId: any = getEnvVar("USER_ID");
    const jwtConfig: any = JwtConfig.fromConfigJsonString(decodeBase64(getEnvVar("JWT_CONFIG_BASE_64")));
    const auth: any = new JwtAuth({ config: jwtConfig });
    auth.asUser(userId)
    const token: any = await auth.retrieveToken();
    const devAuth: any = new DeveloperTokenAuth({ token: token });
    const client: any = new Client({ auth: devAuth });
    const currentUser: any = await client.users.getUserMe();
    if (!(currentUser.id == userId)) {
        throw "Assertion failed";
    }
});
test("test_oauth_auth", function test_oauth_auth(): any {
    const config: any = { clientId: "OAUTH_CLIENT_ID", clientSecret: "OAUTH_CLIENT_SECRET" } satisfies OAuthConfig;
    const auth: any = new OAuth({ config: config });
    const authUrl: any = auth.getAuthorizeUrl();
    const expectedAuthUrl: any = "https://account.box.com/api/oauth2/authorize?client_id=OAUTH_CLIENT_ID&response_type=code";
    if (!(authUrl == expectedAuthUrl)) {
        throw "Assertion failed";
    }
});
export {};
