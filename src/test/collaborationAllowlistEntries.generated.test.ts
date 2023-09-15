import { serializeCollaborationAllowlistEntries } from '../schemas.generated.js';
import { deserializeCollaborationAllowlistEntries } from '../schemas.generated.js';
import { serializeCollaborationAllowlistEntry } from '../schemas.generated.js';
import { deserializeCollaborationAllowlistEntry } from '../schemas.generated.js';
import { serializeCreateCollaborationWhitelistEntryRequestBodyArg } from '../managers/collaborationAllowlistEntries.generated.js';
import { deserializeCreateCollaborationWhitelistEntryRequestBodyArg } from '../managers/collaborationAllowlistEntries.generated.js';
import { CollaborationAllowlistEntries } from '../schemas.generated.js';
import { CollaborationAllowlistEntry } from '../schemas.generated.js';
import { CreateCollaborationWhitelistEntryRequestBodyArg } from '../managers/collaborationAllowlistEntries.generated.js';
import { decodeBase64 } from '../utils.js';
import { getEnvVar } from '../utils.js';
import { getUuid } from '../utils.js';
import { BoxClient } from '../client.generated.js';
import { BoxJwtAuth } from '../jwtAuth.js';
import { JwtConfig } from '../jwtAuth.js';
const client: any = new BoxClient({
  auth: new BoxJwtAuth({
    config: JwtConfig.fromConfigJsonString(
      decodeBase64(getEnvVar('JWT_CONFIG_BASE_64'))
    ),
  }),
});
test('collaborationAllowlistEntries', async function collaborationAllowlistEntries(): Promise<any> {
  const allowlist: any =
    await client.collaborationAllowlistEntries.getCollaborationWhitelistEntries();
  if (!(allowlist.entries.length >= 0)) {
    throw 'Assertion failed';
  }
  const direction: any = 'inbound';
  const domain: any = 'example.com';
  const newEntry: any =
    await client.collaborationAllowlistEntries.createCollaborationWhitelistEntry(
      {
        direction: direction,
        domain: domain,
      } satisfies CreateCollaborationWhitelistEntryRequestBodyArg
    );
  if (!(newEntry.type == 'collaboration_whitelist_entry')) {
    throw 'Assertion failed';
  }
  if (!(newEntry.direction == direction)) {
    throw 'Assertion failed';
  }
  if (!(newEntry.domain == domain)) {
    throw 'Assertion failed';
  }
  const entry: any =
    await client.collaborationAllowlistEntries.getCollaborationWhitelistEntryById(
      newEntry.id
    );
  if (!(entry.id == newEntry.id)) {
    throw 'Assertion failed';
  }
  if (!(entry.direction == direction)) {
    throw 'Assertion failed';
  }
  if (!(entry.domain == domain)) {
    throw 'Assertion failed';
  }
  await client.collaborationAllowlistEntries.deleteCollaborationWhitelistEntryById(
    entry.id
  );
  expect(async () => {
    await client.collaborationAllowlistEntries.getCollaborationWhitelistEntryById(
      entry.id
    );
  }).rejects.toThrow();
});
export {};
