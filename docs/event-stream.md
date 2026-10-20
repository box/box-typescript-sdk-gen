# Event Stream

<!-- box-typescript-sdk-gen deprecation banner -->
> [!CAUTION]
> **`box-typescript-sdk-gen` is deprecated and no longer maintained.** As of September 17, 2025, it receives no new features, bug fixes, or security patches. Do not use it for new projects.
>
> Use [`box-node-sdk`](https://github.com/box/box-node-sdk) v10+ instead: `npm install box-node-sdk`.
> The equivalent of this page is [box-node-sdk/docs/event-stream.md](https://github.com/box/box-node-sdk/blob/main/docs/event-stream.md). To migrate existing code, see the [migration guide](https://github.com/box/box-node-sdk/blob/main/migration-guides/from-box-typescript-sdk-gen-v1-to-box-node-sdk.md).

The Event Stream class utilizes long-polling to receive real-time events from Box. The SDK provides an easy way to set up and manage the event stream which is extended from the stream.Readable class.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Event Stream](#event-stream)
  - [Listening to the Event Stream](#listening-to-the-event-stream)
  - [Deduplication](#deduplication)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Listening to the Event Stream

When the `EventStream` is started, it will begin long-polling asynchronously. Events received from the API are then forwarded to all listeners.

You can also listen for errors and the end of the stream using the `error` and `end` events respectively.

```ts
const eventsStream = await client.events.getEventStream();
eventsStream.on('data', (event) => {
  console.log('Received event:', event);
});
eventsStream.on('error', (error) => {
  console.error('Error in events stream:', error);
});
eventsStream.on('end', () => {
  console.log('Events stream ended');
});
```

## Deduplication

The `EventStream` class automatically deduplicates events based on their `event_id`. This means that if the same event is received multiple times, it will only be emitted once to the listeners.
