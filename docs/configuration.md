# Configuration

<!-- box-typescript-sdk-gen deprecation banner -->
> [!CAUTION]
> **`box-typescript-sdk-gen` is deprecated and no longer maintained.** As of September 17, 2025, it receives no new features, bug fixes, or security patches. Do not use it for new projects.
>
> Use [`box-node-sdk`](https://github.com/box/box-node-sdk) v10+ instead: `npm install box-node-sdk`.
> The equivalent of this page is [box-node-sdk/docs/configuration.md](https://github.com/box/box-node-sdk/blob/main/docs/configuration.md). To migrate existing code, see the [migration guide](https://github.com/box/box-node-sdk/blob/main/migration-guides/from-box-typescript-sdk-gen-v1-to-box-node-sdk.md).

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Max retry attempts](#max-retry-attempts)
- [Custom retry strategy](#custom-retry-strategy)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Max retry attempts

The default maximum number of retries in case of failed API call is 5.
To change this number you should initialize `BoxRetryStrategy` with the new value and pass it to `NetworkSession`.

```js
const auth = new BoxDeveloperTokenAuth({ token: 'DEVELOPER_TOKEN_GOES_HERE' });
const networkSession = new NetworkSession({
  retryStrategy: new BoxRetryStrategy({ maxAttempts: 6 }),
});
const client = new BoxClient({ auth, networkSession });
```

## Custom retry strategy

You can also implement your own retry strategy by subclassing `RetryStrategy` and overriding `shouldRetry` and `retryAfter` methods.
This example shows how to set custom strategy that retries on 5xx status codes and waits 1 second between retries.

```ts
export class CustomRetryStrategy implements RetryStrategy {
  async shouldRetry(
    fetchOptions: FetchOptions,
    fetchResponse: FetchResponse,
    attemptNumber: number,
  ): Promise<boolean> {
    return false;
  }

  retryAfter(
    fetchOptions: FetchOptions,
    fetchResponse: FetchResponse,
    attemptNumber: number,
  ): number {
    return 1.0;
  }
}

const auth = new BoxDeveloperTokenAuth({ token: 'DEVELOPER_TOKEN_GOES_HERE' });
const networkSession = new NetworkSession({
  retryStrategy: new CustomRetryStrategy(),
});
const client = new BoxClient({ auth, networkSession });
```
