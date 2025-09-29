import { serializeEvents } from '@/schemas/events.generated';
import { deserializeEvents } from '@/schemas/events.generated';
import { serializeEvent } from '@/schemas/event.generated';
import { deserializeEvent } from '@/schemas/event.generated';
import { serializeGetEventsQueryParamsStreamTypeField } from '@/managers/events.generated';
import { deserializeGetEventsQueryParamsStreamTypeField } from '@/managers/events.generated';
import { serializeGetEventsQueryParamsEventTypeField } from '@/managers/events.generated';
import { deserializeGetEventsQueryParamsEventTypeField } from '@/managers/events.generated';
import { serializeRealtimeServers } from '@/schemas/realtimeServers.generated';
import { deserializeRealtimeServers } from '@/schemas/realtimeServers.generated';
import { serializeRealtimeServer } from '@/schemas/realtimeServer.generated';
import { deserializeRealtimeServer } from '@/schemas/realtimeServer.generated';
import { serializeDateTime } from '@/internal/utils';
import { deserializeDateTime } from '@/internal/utils';
import { serializeEventSource } from '@/schemas/eventSource.generated';
import { deserializeEventSource } from '@/schemas/eventSource.generated';
import { serializeFile } from '@/schemas/file.generated';
import { deserializeFile } from '@/schemas/file.generated';
import { serializeFolder } from '@/schemas/folder.generated';
import { deserializeFolder } from '@/schemas/folder.generated';
import { serializeUser } from '@/schemas/user.generated';
import { deserializeUser } from '@/schemas/user.generated';
import { BoxClient } from '@/client.generated';
import { Events } from '@/schemas/events.generated';
import { Event } from '@/schemas/event.generated';
import { GetEventsQueryParams } from '@/managers/events.generated';
import { GetEventsQueryParamsStreamTypeField } from '@/managers/events.generated';
import { GetEventsQueryParamsEventTypeField } from '@/managers/events.generated';
import { RealtimeServers } from '@/schemas/realtimeServers.generated';
import { RealtimeServer } from '@/schemas/realtimeServer.generated';
import { DateTime } from '@/internal/utils';
import { EventStream } from '@/box/eventStream';
import { getDefaultClient } from './commons.generated';
import { EventSource } from '@/schemas/eventSource.generated';
import { File } from '@/schemas/file.generated';
import { Folder } from '@/schemas/folder.generated';
import { User } from '@/schemas/user.generated';
import { dateTimeFromString } from '@/internal/utils';
import { getEpochTimeInSeconds } from '@/internal/utils';
import { epochSecondsToDateTime } from '@/internal/utils';
import { toString } from '@/internal/utils';
import { sdToJson } from '@/serialization/json';
import { SerializedData } from '@/serialization/json';
import { sdIsEmpty } from '@/serialization/json';
import { sdIsBoolean } from '@/serialization/json';
import { sdIsNumber } from '@/serialization/json';
import { sdIsString } from '@/serialization/json';
import { sdIsList } from '@/serialization/json';
import { sdIsMap } from '@/serialization/json';
export const client: BoxClient = getDefaultClient();
test('testEvents', async function testEvents(): Promise<any> {
  const events: Events = await client.events.getEvents();
  if (!(events.entries!.length > 0)) {
    throw new Error('Assertion failed');
  }
  const firstEvent: Event = events.entries![0];
  if (!((toString(firstEvent.createdBy!.type) as string) == 'user')) {
    throw new Error('Assertion failed');
  }
  if (!!((toString(firstEvent.eventType!) as string) == '')) {
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
  const firstEvent: Event = events.entries![0];
  if (!((toString(firstEvent.eventType!) as string) == 'UPLOAD')) {
    throw new Error('Assertion failed');
  }
  const source: EventSource = firstEvent.source! as EventSource;
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
  const firstEvent: Event = events.entries![0];
  if (!((toString(firstEvent.eventType!) as string) == 'DELETE_USER')) {
    throw new Error('Assertion failed');
  }
  const source: User = firstEvent.source! as User;
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
test('testGetEventsWithDateFilters', async function testGetEventsWithDateFilters(): Promise<any> {
  const currentEpochTimeInSeconds: number = getEpochTimeInSeconds();
  const epochTimeInSecondsAWeekAgo: number =
    currentEpochTimeInSeconds - 7 * 24 * 60 * 60;
  const createdAfterDate: DateTime = epochSecondsToDateTime(
    epochTimeInSecondsAWeekAgo,
  );
  const createdBeforeDate: DateTime = epochSecondsToDateTime(
    currentEpochTimeInSeconds,
  );
  const servers: Events = await client.events.getEvents({
    streamType: 'admin_logs' as GetEventsQueryParamsStreamTypeField,
    limit: 1,
    createdAfter: createdAfterDate,
    createdBefore: createdBeforeDate,
  } satisfies GetEventsQueryParams);
  if (!(servers.entries!.length == 1)) {
    throw new Error('Assertion failed');
  }
});
test('testGetEventStream', function testGetEventStream(): any {
  const eventStream: EventStream = client.events.getEventStream();
  if (!!(eventStream == void 0)) {
    throw new Error('Assertion failed');
  }
});
export {};
