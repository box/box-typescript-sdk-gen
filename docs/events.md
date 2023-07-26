# EventsManager

## List user and enterprise events

Returns up to a year of past events for a given user
or for the entire enterprise.

By default this returns events for the authenticated user. To retrieve events
for the entire enterprise, set the &#x60;stream_type&#x60; to &#x60;admin_logs_streaming&#x60;
for live monitoring of new events, or &#x60;admin_logs&#x60; for querying across
historical events. The user making the API call will
need to have admin privileges, and the application will need to have the
scope &#x60;manage enterprise properties&#x60; checked.

This operation is performed by calling function `getEvents`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-events/).

*Currently we don't have an example for calling `getEvents` in integration tests*

### Arguments

- queryParams `undefined | GetEventsQueryParamsArg`
  - Used as queryParams for the API call


### Returns

This function returns a value of type `Events`.

Returns a list of event objects.

Events objects are returned in pages, with each page (chunk)
including a list of event objects. The response includes a
&#x60;chunk_size&#x60; parameter indicating how many events were returned in this
chunk, as well as the next &#x60;stream_position&#x60; that can be
queried.


## Get events long poll endpoint

Returns a list of real-time servers that can be used for long-polling updates
to the [event stream](#get-events).

Long polling is the concept where a HTTP request is kept open until the
server sends a response, then repeating the process over and over to receive
updated responses.

Long polling the event stream can only be used for user events, not for
enterprise events.

To use long polling, first use this endpoint to retrieve a list of long poll
URLs. Next, make a long poll request to any of the provided URLs.

When an event occurs in monitored account a response with the value
&#x60;new_change&#x60; will be sent. The response contains no other details as
it only serves as a prompt to take further action such as sending a
request to the [events endpoint](#get-events) with the last known
&#x60;stream_position&#x60;.

After the server sends this response it closes the connection. You must now
repeat the long poll process to begin listening for events again.

If no events occur for a while and the connection times out you will
receive a response with the value &#x60;reconnect&#x60;. When you receive this response
you’ll make another call to this endpoint to restart the process.

If you receive no events in &#x60;retry_timeout&#x60; seconds then you will need to
make another request to the real-time server (one of the URLs in the response
for this endpoint). This might be necessary due to network errors.

Finally, if you receive a &#x60;max_retries&#x60; error when making a request to the
real-time server, you should start over by making a call to this endpoint
first.

This operation is performed by calling function `getEventsWithLongPolling`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/options-events/).

*Currently we don't have an example for calling `getEventsWithLongPolling` in integration tests*


### Returns

This function returns a value of type `RealtimeServers`.

Returns a paginated array of servers that can be used
instead of the regular endpoints for long-polling events.

