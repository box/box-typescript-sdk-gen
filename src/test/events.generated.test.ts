import { serializeEvents } from '../schemas.generated.js';
import { deserializeEvents } from '../schemas.generated.js';
import { serializeEvent } from '../schemas.generated.js';
import { deserializeEvent } from '../schemas.generated.js';
import { serializeGetEventsQueryParamsStreamTypeField } from '../managers/events.generated.js';
import { deserializeGetEventsQueryParamsStreamTypeField } from '../managers/events.generated.js';
import { serializeGetEventsQueryParamsEventTypeField } from '../managers/events.generated.js';
import { deserializeGetEventsQueryParamsEventTypeField } from '../managers/events.generated.js';
import { serializeRealtimeServers } from '../schemas.generated.js';
import { deserializeRealtimeServers } from '../schemas.generated.js';
import { serializeRealtimeServer } from '../schemas.generated.js';
import { deserializeRealtimeServer } from '../schemas.generated.js';
import { serializeEventSource } from '../schemas.generated.js';
import { deserializeEventSource } from '../schemas.generated.js';
import { serializeFile } from '../schemas.generated.js';
import { deserializeFile } from '../schemas.generated.js';
import { serializeFolder } from '../schemas.generated.js';
import { deserializeFolder } from '../schemas.generated.js';
import { serializeUser } from '../schemas.generated.js';
import { deserializeUser } from '../schemas.generated.js';
import { BoxClient } from '../client.generated.js';
import { Events } from '../schemas.generated.js';
import { Event } from '../schemas.generated.js';
import { GetEventsQueryParams } from '../managers/events.generated.js';
import { GetEventsQueryParamsStreamTypeField } from '../managers/events.generated.js';
import { GetEventsQueryParamsEventTypeField } from '../managers/events.generated.js';
import { RealtimeServers } from '../schemas.generated.js';
import { RealtimeServer } from '../schemas.generated.js';
import { getDefaultClient } from './commons.generated.js';
import { EventSource } from '../schemas.generated.js';
import { File } from '../schemas.generated.js';
import { Folder } from '../schemas.generated.js';
import { User } from '../schemas.generated.js';
import { toString } from '../internal/utils.js';
import { sdToJson } from '../serialization/json.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export const client: BoxClient = getDefaultClient();
test('testEvents', async function testEvents(): Promise<any> {
  const events: Events = await client.events.getEvents();
  if (!(events.entries!.length > 0)) {
    throw new Error('Assertion failed');
  }
  const event: Event = events.entries![0];
  if (!((toString(event.createdBy!.type) as string) == 'user')) {
    throw new Error('Assertion failed');
  }
  if (!!((toString(event.eventType!) as string) == '')) {
    throw new Error('Assertion failed');
  }
});
test('testEventUpload', async function testEventUpload(): Promise<any> {
  const events: Events = await client.events.getEvents({
    streamType: 'admin_logs' as GetEventsQueryParamsStreamTypeField,
    eventType: ['UPLOAD' as GetEventsQueryParamsEventTypeField],
  } satisfies GetEventsQueryParams);
  if (!(events.entries!.length > 0)) {
    throw new Error('Assertion failed');
  }
  const event: Event = events.entries![0];
  if (!((toString(event.eventType!) as string) == 'UPLOAD')) {
    throw new Error('Assertion failed');
  }
  const source: EventSource = event.source! as EventSource;
  if (
    !(
      (toString(source.itemType) as string) == 'file' ||
      (toString(source.itemType) as string) == 'folder'
    )
  ) {
    throw new Error('Assertion failed');
  }
  if (!!(source.itemId == '')) {
    throw new Error('Assertion failed');
  }
  if (!!(source.itemName == '')) {
    throw new Error('Assertion failed');
  }
});
test('testEventDeleteUser', async function testEventDeleteUser(): Promise<any> {
  const events: Events = await client.events.getEvents({
    streamType: 'admin_logs' as GetEventsQueryParamsStreamTypeField,
    eventType: ['DELETE_USER' as GetEventsQueryParamsEventTypeField],
  } satisfies GetEventsQueryParams);
  if (!(events.entries!.length > 0)) {
    throw new Error('Assertion failed');
  }
  const event: Event = events.entries![0];
  if (!((toString(event.eventType!) as string) == 'DELETE_USER')) {
    throw new Error('Assertion failed');
  }
  const source: User = event.source! as User;
  if (!((toString(source.type) as string) == 'user')) {
    throw new Error('Assertion failed');
  }
  if (!!(source.id == '')) {
    throw new Error('Assertion failed');
  }
});
test('testEventSourceFileOrFolder', async function testEventSourceFileOrFolder(): Promise<any> {
  const events: Events = await client.events.getEvents({
    streamType: 'changes' as GetEventsQueryParamsStreamTypeField,
  } satisfies GetEventsQueryParams);
  if (!(events.entries!.length > 0)) {
    throw new Error('Assertion failed');
  }
  const event: Event = events.entries![0];
  const source: File = event.source! as File;
  if (
    !(
      (toString(source.type) as string) == 'file' ||
      (toString(source.type) as string) == 'folder'
    )
  ) {
    throw new Error('Assertion failed');
  }
  if (!!(source.id == '')) {
    throw new Error('Assertion failed');
  }
});
test('testGetEventsWithLongPolling', async function testGetEventsWithLongPolling(): Promise<any> {
  const servers: RealtimeServers =
    await client.events.getEventsWithLongPolling();
  if (!(servers.entries!.length > 0)) {
    throw new Error('Assertion failed');
  }
  const server: RealtimeServer = servers.entries![0];
  if (!((toString(server.type!) as string) == 'realtime_server')) {
    throw new Error('Assertion failed');
  }
  if (!!(server.url! == '')) {
    throw new Error('Assertion failed');
  }
});
export {};
