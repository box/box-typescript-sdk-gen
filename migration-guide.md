# Migration Guide: From `Box Node SDK` to `Box TypeScript SDK`

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Introduction](#introduction)
- [Installation](#installation)
- [Highlighting the Key Differences](#highlighting-the-key-differences)
  - [Native support for async-await and Promises](#native-support-for-async-await-and-promises)
  - [Embracing Explicitly Defined Schemas](#embracing-explicitly-defined-schemas)
- [Diving into Authentication](#diving-into-authentication)
  - [Developer Token](#developer-token)
  - [JWT Authentication](#jwt-authentication)
    - [Leveraging the JWT Configuration File](#leveraging-the-jwt-configuration-file)
    - [Manually Providing JWT Configuration](#manually-providing-jwt-configuration)
    - [User Authentication Simplified](#user-authentication-simplified)
  - [Client Credentials Grant](#client-credentials-grant)
    - [Service Account Token Acquisition](#service-account-token-acquisition)
    - [User Token Acquisition](#user-token-acquisition)
  - [Smooth Switching between Service Account and User](#smooth-switching-between-service-account-and-user)
  - [OAuth 2.0 Authentication](#oauth-20-authentication)
    - [Fetching the Authorization URL](#fetching-the-authorization-url)
    - [Seamless Authentication](#seamless-authentication)
  - [Customizable Token Storage and Retrieval Callbacks](#customizable-token-storage-and-retrieval-callbacks)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Introduction

Welcome to the `Box TypeScript SDK`, the pinnacle of Box's SDK evolution tailored for developers eager to integrate with the Box API using TypeScript. This next-generation toolkit is meticulously crafted with contemporary development practices, ensuring an unparalleled, seamless experience.

While the `Box Node SDK` served its purpose well, the `Box TypeScript SDK` elevates the experience to new heights. One of its standout features is its auto-generation directly from the Open API Specification. This guarantees that developers are always equipped with the latest Box API features, eliminating any lag or discrepancies.

This guide is your compass, offering insights and directions for a smooth migration from the legacy `Box Node SDK` to the state-of-the-art `Box TypeScript SDK`. As we journey through, we'll spotlight the key differences, enhanced functionalities, and the myriad benefits that await.

For those who wish to delve deeper into the intricacies and advantages of the new SDK, the [official README](https://github.com/box/box-typescript-sdk-gen/blob/main/README.md) is a treasure trove of information.

## Installation

Embarking on your journey with the `Box TypeScript SDK` is straightforward. Here's how you can set it up:

```console
npm install box-typescript-sdk-gen
```

For those who are hesitant to make the full leap, fear not. The `Box TypeScript SDK` can coexist peacefully alongside the legacy `Box Node SDK` within the same project. This coexistence offers a gentle migration path, allowing developers to transition at their own pace. However, for an optimal experience, a complete transition to the new SDK is recommended in due course.

## Highlighting the Key Differences

### Native support for async-await and Promises

The new SDK introduces a more organized and intuitive method of interacting with the Box API. Let's explore the changes:

**Legacy (`Box Node SDK`):**

In the older SDK, API interactions allowed for passing `callback` as the last argument

```typescript
function callback(user) {
  console.log('hello', user);
}
client.users.get('123456', {} /* options */, callback);
```

If you didn't provide the `callback` a Promise would be returned.

**Modern (`Box TypeScript SDK`):**

The new SDK ensures promises are used consistently across the full SDK.

```typescript
const user = await client.users.getUserById('123456');
```

### Embracing Explicitly Defined Schemas

The new SDK brings clarity to data interactions by providing explicit data type definitions:

**Legacy (`Box Node SDK`):**

The older SDK was more ambiguous, which could lead to potential issues:

```typescript
const file = await client.files.get('12345678');
/* file has generic Object type */
```

**Modern (`Box TypeScript SDK`):**

With the new SDK, developers can be confident in the data structures they're working with:

```typescript
interface FileBase {
  id: string;
  type: FileBaseTypeField;
  etag?: string;
}
```

## Diving into Authentication

Authentication is a crucial aspect of any SDK. Let's delve into the authentication methods supported by both SDKs and understand the enhancements in the new version:

### Developer Token

The Developer Token remains a straightforward method for authentication:

**Legacy (`Box Node SDK`):**

```typescript
var BoxSDK = require('box-node-sdk');
var sdk = new BoxSDK({
  clientID: 'YOUR-CLIENT-ID',
  clientSecret: 'YOUR-CLIENT_SECRET',
});

var client = sdk.getBasicClient('YOUR-DEVELOPER-TOKEN');
```

**Modern (`Box TypeScript SDK`):**

The new SDK offers a more streamlined approach:

```typescript
import { Client, BoxDeveloperTokenAuth } from 'box-typescript-sdk-gen';

const auth = new BoxDeveloperTokenAuth('DEVELOPER_TOKEN_GOES_HERE');
const client = new Client(auth);
```

### JWT Authentication

JSON Web Tokens (JWT) offer a secure method of authentication. Here's how the process has evolved:

#### Leveraging the JWT Configuration File

**Legacy (`Box Node SDK`):**

```typescript
var BoxSDK = require('box-node-sdk');
var jsonConfig = require('/path/to/config.json');
var sdk = BoxSDK.getPreconfiguredInstance(jsonConfig);

var serviceAccountClient = sdk.getAppAuthClient('enterprise');
```

**Modern (`Box TypeScript SDK`):**

The new SDK provides a more organized approach:

```typescript
import { Client, BoxJWTAuth, JWTConfig } from 'box-typescript-sdk-gen';

const jwtConfig = JWTConfig.fromConfigFile('/path/to/config.json');
const auth = new BoxJWTAuth(jwtConfig);
const client = new Client(auth);
```

#### Manually Providing JWT Configuration

For those who prefer manual configurations, both SDKs offer flexibility:

**Legacy (`Box Node SDK`):**

```typescript
var BoxSDK = require('box-node-sdk');
var sdk = new BoxSDK({
  clientID: 'YOUR-CLIENT-ID',
  clientSecret: 'YOUR-CLIENT_SECRET',
  appAuth: {
    keyID: 'YOUR-KEY-ID',
    privateKey: 'YOUR-PRIVATE_KEY',
    passphrase: 'YOUR-PRIVATE-KEY-PASSPHRASE',
  },
});

var serviceAccountClient = sdk.getAppAuthClient(
  'enterprise',
  'YOUR-ENTERPRISE-ID'
);
```

**Modern (`Box TypeScript SDK`):**

The new SDK introduces a more structured approach:

```typescript
import { BoxJWTAuth, JWTConfig } from 'box-typescript-sdk-gen';

const jwtConfig = new JWTConfig({
  clientId: 'YOUR_CLIENT_ID',
  clientSecret: 'YOUR_CLIENT_SECRET',
  enterpriseId: 'YOUR_ENTERPRISE_ID',
  userId: 'USER_ID',
  jwtKeyId: 'YOUR_JWT_KEY_ID',
  privateKey: 'YOUR_PRIVATE_KEY',
  privateKeyPassphrase: 'PASSPHRASE',
  jwtAlgorithm: 'RS256',
});
const auth = new BoxJWTAuth(jwtConfig);
```

#### User Authentication Simplified

Authenticating as a user has been made even more straightforward:

**Legacy (`Box Node SDK`):**

```typescript
client.asUser('USER-ID');
```

**Modern (`Box TypeScript SDK`):**

The new SDK makes this method more organised:

```typescript
client.networkSession.setAsUser('USER_ID');
```

### Client Credentials Grant

The Client Credentials Grant method is a popular choice for many developers. Let's see how it's been enhanced:

#### Service Account Token Acquisition

**Legacy (`Box Node SDK`):**

```typescript
const BoxSDK = require('box-node-sdk');
const sdkConfig = {
  boxAppSettings: {
    clientID: 'CLIENT_ID',
    clientSecret: 'CLIENT_SECRET',
  },
  enterpriseID: 'ENTERPRISE_ID',
};
const sdk = BoxSDK.getPreconfiguredInstance(sdkConfig);

const client = sdk.getAnonymousClient();
```

**Modern (`Box TypeScript SDK`):**

The new SDK offers a more organized structure:

```typescript
import { BoxClient, BoxCCGAuth, CCGConfig } from 'box-typescript-sdk-gen';

const ccgConfig = new CCGConfig({
  clientId: 'YOUR_CLIENT_ID',
  clientSecret: 'YOUR_CLIENT_SECRET',
  enterpriseId: 'YOUR_ENTERPRISE_ID',
});
const auth = new BoxCCGAuth(ccgConfig);
const client = new BoxClient(auth);
```

#### User Token Acquisition

**Legacy (`Box Node SDK`):**

```typescript
const BoxSDK = require('box-node-sdk');
const sdkConfig = {
  boxAppSettings: {
    clientID: 'CLIENT_ID',
    clientSecret: 'CLIENT_SECRET',
  },
  enterpriseID: 'ENTERPRISE_ID', // The enterprise id in this case is optional and can be omitted.
};
const sdk = BoxSDK.getPreconfiguredInstance(sdkConfig);

const client = sdk.getCCGClientForUser('USER_ID');
```

**Modern (`Box TypeScript SDK`):**

The new SDK streamlines the process:

```typescript
const ccgConfig = new CCGConfig({
  clientId: 'YOUR_CLIENT_ID',
  clientSecret: 'YOUR_CLIENT_SECRET',
  userId: 'YOUR_USER_ID',
});
const auth = new BoxCCGAuth(ccgConfig);
```

### Smooth Switching between Service Account and User

Transitioning between account types is now more intuitive:

**Modern (`Box TypeScript SDK`):**

```typescript
auth.asEnterprise('YOUR_ENTERPRISE_ID');
```

### OAuth 2.0 Authentication

OAuth 2.0 remains a robust authentication method. Let's explore the improvements:

#### Fetching the Authorization URL

**Legacy (`Box Node SDK`):**

```typescript
var BoxSDK = require('box-node-sdk');
var sdk = new BoxSDK({
  clientID: 'YOUR-CLIENT-ID',
  clientSecret: 'YOUR-CLIENT_SECRET',
});

// the URL to redirect the user to
var authorize_url = sdk.getAuthorizeURL({
  response_type: 'code',
});
```

**Modern (`Box TypeScript SDK`):**

The new SDK provides more flexibility:

```typescript
import { GetAuthorizeUrlOptions } from 'box-typescript-sdk-gen';

const authUrl = auth.getAuthorizeUrl({
  redirectUri: 'http://YOUR_REDIRECT_URL',
} satisfies GetAuthorizeUrlOptions);
```

#### Seamless Authentication

**Legacy (`Box Node SDK`):**

```typescript
sdk.getTokensAuthorizationCodeGrant('<CODE>', null, function (err, tokenInfo) {
  if (err) {
    // handle error
  }

  var tokenStore = new TokenStore();
  tokenStore.write(tokenInfo, function (storeErr) {
    if (storeErr) {
      // handle token write error
    }

    var client = sdk.getPersistentClient(tokenInfo, tokenStore);
  });
});
```

**Modern (`Box TypeScript SDK`):**

The new SDK simplifies the process:

```typescript
const accessToken = auth.getTokensAuthorizationCodeGrant('YOUR_AUTH_CODE');
```

### Customizable Token Storage and Retrieval Callbacks

Token management is crucial for maintaining secure sessions. The new SDK offers enhanced flexibility:

**Legacy (`Box Node SDK`):**

```typescript
function TokenStore() {
  // The token store constructor should create a specific store instance
  // for the user in question — it may need to take in a user ID or other
  // identifier.
}

TokenStore.prototype.read = function (callback) {
  // Read the user's tokens from your data store and
  // call the callback.
  // callback(error) if some error occured
  // callback(null, tokenInfo) if the read succeeded
};

TokenStore.prototype.write = function (tokenInfo, callback) {
  // Write the token information to the store.
  // The tokenInfo argument is an Object, and can be
  // serialized as JSON for storage.
  // Call the callback after the write.
  // callback(error) if some error occured
  // callback(null) if the write succeeded
};

TokenStore.prototype.clear = function (callback) {
  // Delete the user's token information from the store,
  // and call the callback after the write.
  // callback(error) if some error occured
  // callback(null) if the deletion succeeded
};
```

**Modern (`Box TypeScript SDK`):**

The new SDK allows developers to define custom classes for token storage:

```typescript
import { TokenStorage } from 'box-typescript-sdk-gen';

class CustomTokenStorage extends TokenStorage {
  store(token) {
    // Store token
  }

  get() {
    // Retrieve token
    return token;
  }

  clear() {
    // Clear token
  }
}

const tokenStorage = new CustomTokenStorage();
const authConfig = { /* ... , */ tokenStorage };
const auth = new BoxAuth(authConfig);
```
