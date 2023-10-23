import { serializeSignTemplates } from '../schemas.generated.js';
import { deserializeSignTemplates } from '../schemas.generated.js';
import { serializeSignTemplate } from '../schemas.generated.js';
import { deserializeSignTemplate } from '../schemas.generated.js';
import { SignTemplates } from '../schemas.generated.js';
import { GetSignTemplatesQueryParamsArg } from '../managers/signTemplates.generated.js';
import { SignTemplate } from '../schemas.generated.js';
import { decodeBase64 } from '../utils.js';
import { getEnvVar } from '../utils.js';
import { BoxClient } from '../client.generated.js';
import { BoxJwtAuth } from '../jwtAuth.js';
import { JwtConfig } from '../jwtAuth.js';
const jwtConfig: JwtConfig = JwtConfig.fromConfigJsonString(
  decodeBase64(getEnvVar('JWT_CONFIG_BASE_64'))
);
const auth: BoxJwtAuth = new BoxJwtAuth({ config: jwtConfig });
const client: BoxClient = new BoxClient({ auth: auth });
test('testGetSignTemplates', async function testGetSignTemplates(): Promise<any> {
  await auth.asUser(getEnvVar('USER_ID'));
  const signTemplates: SignTemplates =
    await client.signTemplates.getSignTemplates({
      limit: 2,
    } satisfies GetSignTemplatesQueryParamsArg);
  if (!(signTemplates.entries!.length >= 0)) {
    throw 'Assertion failed';
  }
});
test('testGetSignTemplate', async function testGetSignTemplate(): Promise<any> {
  await auth.asUser(getEnvVar('USER_ID'));
  const signTemplates: SignTemplates =
    await client.signTemplates.getSignTemplates({
      limit: 2,
    } satisfies GetSignTemplatesQueryParamsArg);
  if (!(signTemplates.entries!.length >= 0)) {
    throw 'Assertion failed';
  }
  if (signTemplates.entries!.length > 0) {
    const signTemplate: SignTemplate =
      await client.signTemplates.getSignTemplateById(
        signTemplates.entries![0].id!
      );
    if (!(signTemplate.id == signTemplates.entries![0].id)) {
      throw 'Assertion failed';
    }
    if (!(signTemplate.sourceFiles!.length > 0)) {
      throw 'Assertion failed';
    }
    if (!!(signTemplate.name == '')) {
      throw 'Assertion failed';
    }
    if (!!(signTemplate.parentFolder!.id == '')) {
      throw 'Assertion failed';
    }
  }
});
export {};
