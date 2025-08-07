import { getDefaultClient } from './commons.generated.js';
import { getEpochTimeInSeconds } from '../internal/utils.js';
import { epochSecondsToDateTime } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
export const client = getDefaultClient();
test('testEvents', async function testEvents() {
    const events = await client.events.getEvents();
    if (!(events.entries.length > 0)) {
        throw new Error('Assertion failed');
    }
    const firstEvent = events.entries[0];
    if (!(toString(firstEvent.createdBy.type) == 'user')) {
        throw new Error('Assertion failed');
    }
    if (!!(toString(firstEvent.eventType) == '')) {
        throw new Error('Assertion failed');
    }
});
test('testEventUpload', async function testEventUpload() {
    const events = await client.events.getEvents({
        streamType: 'admin_logs',
        eventType: ['UPLOAD'],
    });
    if (!(events.entries.length > 0)) {
        throw new Error('Assertion failed');
    }
    const firstEvent = events.entries[0];
    if (!(toString(firstEvent.eventType) == 'UPLOAD')) {
        throw new Error('Assertion failed');
    }
    const source = firstEvent.source;
    if (!(toString(source.itemType) == 'file' ||
        toString(source.itemType) == 'folder')) {
        throw new Error('Assertion failed');
    }
    if (!!(source.itemId == '')) {
        throw new Error('Assertion failed');
    }
    if (!!(source.itemName == '')) {
        throw new Error('Assertion failed');
    }
});
test('testEventDeleteUser', async function testEventDeleteUser() {
    const events = await client.events.getEvents({
        streamType: 'admin_logs',
        eventType: ['DELETE_USER'],
    });
    if (!(events.entries.length > 0)) {
        throw new Error('Assertion failed');
    }
    const firstEvent = events.entries[0];
    if (!(toString(firstEvent.eventType) == 'DELETE_USER')) {
        throw new Error('Assertion failed');
    }
    const source = firstEvent.source;
    if (!(toString(source.type) == 'user')) {
        throw new Error('Assertion failed');
    }
    if (!!(source.id == '')) {
        throw new Error('Assertion failed');
    }
});
test('testEventSourceFileOrFolder', async function testEventSourceFileOrFolder() {
    const events = await client.events.getEvents({
        streamType: 'changes',
    });
    if (!(events.entries.length > 0)) {
        throw new Error('Assertion failed');
    }
});
test('testGetEventsWithLongPolling', async function testGetEventsWithLongPolling() {
    const servers = await client.events.getEventsWithLongPolling();
    if (!(servers.entries.length > 0)) {
        throw new Error('Assertion failed');
    }
    const server = servers.entries[0];
    if (!(toString(server.type) == 'realtime_server')) {
        throw new Error('Assertion failed');
    }
    if (!!(server.url == '')) {
        throw new Error('Assertion failed');
    }
});
test('testGetEventsWithDateFilters', async function testGetEventsWithDateFilters() {
    const currentEpochTimeInSeconds = getEpochTimeInSeconds();
    const epochTimeInSecondsAWeekAgo = currentEpochTimeInSeconds - 7 * 24 * 60 * 60;
    const createdAfterDate = epochSecondsToDateTime(epochTimeInSecondsAWeekAgo);
    const createdBeforeDate = epochSecondsToDateTime(currentEpochTimeInSeconds);
    const servers = await client.events.getEvents({
        streamType: 'admin_logs',
        limit: 1,
        createdAfter: createdAfterDate,
        createdBefore: createdBeforeDate,
    });
    if (!(servers.entries.length == 1)) {
        throw new Error('Assertion failed');
    }
});
//# sourceMappingURL=events.generated.test.js.map