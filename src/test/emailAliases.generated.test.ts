import { serializeUser } from "../schemas.generated.js";
import { deserializeUser } from "../schemas.generated.js";
import { serializeCreateUserRequestBodyArg } from "../managers/users.generated.js";
import { deserializeCreateUserRequestBodyArg } from "../managers/users.generated.js";
import { serializeEmailAliases } from "../schemas.generated.js";
import { deserializeEmailAliases } from "../schemas.generated.js";
import { serializeEmailAlias } from "../schemas.generated.js";
import { deserializeEmailAlias } from "../schemas.generated.js";
import { serializeCreateUserEmailAliasRequestBodyArg } from "../managers/emailAliases.generated.js";
import { deserializeCreateUserEmailAliasRequestBodyArg } from "../managers/emailAliases.generated.js";
import { User } from "../schemas.generated.js";
import { CreateUserRequestBodyArg } from "../managers/users.generated.js";
import { EmailAliases } from "../schemas.generated.js";
import { EmailAlias } from "../schemas.generated.js";
import { CreateUserEmailAliasRequestBodyArg } from "../managers/emailAliases.generated.js";
import { decodeBase64 } from "../utils.js";
import { getEnvVar } from "../utils.js";
import { getUuid } from "../utils.js";
import { Client } from "../client.generated.js";
import { JwtAuth } from "../jwtAuth.js";
import { JwtConfig } from "../jwtAuth.js";
const jwtConfig: any = JwtConfig.fromConfigJsonString(decodeBase64(getEnvVar("JWT_CONFIG_BASE_64")));
const auth: any = new JwtAuth({ config: jwtConfig });
const client: any = new Client({ auth: auth });
test("testEmailAliases", async function testEmailAliases(): Promise<any> {
    const newUserName: any = getUuid();
    const newUserLogin: any = "".concat(getUuid(), "@boxdemo.com") as string;
    const newUser: any = await client.users.createUser({ name: newUserName, login: newUserLogin } satisfies CreateUserRequestBodyArg);
    const aliases: any = await client.emailAliases.getUserEmailAliases(newUser.id);
    if (!(aliases.totalCount == 0)) {
        throw "Assertion failed";
    }
    const newAliasEmail: any = "".concat(newUser.id, "@boxdemo.com") as string;
    const newAlias: any = await client.emailAliases.createUserEmailAlias(newUser.id, { email: newAliasEmail } satisfies CreateUserEmailAliasRequestBodyArg);
    const updatedAliases: any = await client.emailAliases.getUserEmailAliases(newUser.id);
    if (!(updatedAliases.totalCount == 1)) {
        throw "Assertion failed";
    }
    if (!(updatedAliases.entries[0].email == newAliasEmail)) {
        throw "Assertion failed";
    }
    await client.emailAliases.deleteUserEmailAliasById(newUser.id, newAlias.id)
    const finalAliases: any = await client.emailAliases.getUserEmailAliases(newUser.id);
    if (!(finalAliases.totalCount == 0)) {
        throw "Assertion failed";
    }
    await client.users.deleteUserById(newUser.id)
});
export {};
