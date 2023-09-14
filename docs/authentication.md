# Authentication

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Authentication methods](#authentication-methods)
  - [Developer Token](#developer-token)
  - [JWT Auth](#jwt-auth)
    - [Authenticate Enterprise](#authenticate-enterprise)
    - [Authenticate user](#authenticate-user)
  - [Client Credentials Grant](#client-credentials-grant)
    - [Obtaining Service Account token](#obtaining-service-account-token)
    - [Obtaining User token](#obtaining-user-token)
    - [Switching between Service Account and User](#switching-between-service-account-and-user)
  - [OAuth 2.0 Auth](#oauth-20-auth)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Authentication methods

## Developer Token

The fastest way to get started using the API is with developer token. A
developer token is simply a short-lived access token that cannot be refreshed
and can only be used with your own account. Therefore, they're only useful for
testing an app and aren't suitable for production. You can obtain a developer
token from your application's [developer console][dev_console] page.

To create a `Client` with a developer token, construct an `DeveloperTokenAuth`
object with the `token` set to the developer token and construct the client with that.

<!-- sample x_auth init_with_dev_token -->

```js
const { Client } = require('box-typescript-sdk-gen/lib/client.generated.js');
const {
  DeveloperTokenAuth,
} = require('box-typescript-sdk-gen/lib/developerTokenAuth.js');

const auth = new DeveloperTokenAuth({ token: 'DEVELOPER_TOKEN_GOES_HERE' });
const client = new Client({ auth });

const me = await client.users.getUserMe();
console.log(`My user ID is ${me.id}`);
```

[dev_console]: https://app.box.com/developers/console

## JWT Auth

Before using JWT Auth make sure you set up correctly your Box App.
The guide with all required steps can be found here: [Setup with JWT][jwt_guide]

### Authenticate Enterprise

JWT auth allows your application to authenticate itself with the Box API
for a given enterprise. By default, your application has a [Service Account][service_account]
that represents it and can perform API calls. The Service Account is separate
from the Box accounts of the application developer and the enterprise admin of
any enterprise that has authorized the app — files stored in that account are
not accessible in any other account by default, and vice versa.

If you generated your public and private keys automatically through the
[Box Developer Console][dev_console], you can use the JSON file created there
to configure your SDK instance and create a client to make calls as the
Service Account. Call one of static `JwtAuth` method:
`JwtConfig.fromConfigFile(configFilePath)` and pass JSON file local path
or `JwtConfig.fromConfigJsonString(configJsonString)` and pass JSON config file content as string.

```js
const { Client } = require('box-typescript-sdk-gen/lib/client.generated.js');
const { JwtAuth, JwtConfig } = require('box-typescript-sdk-gen/lib/jwtAuth.js');

const jwtConfig = JwtConfig.fromConfigFile('/path/to/settings.json');
const jwtAuth = new JwtAuth({ config: jwtConfig });
const client = new Client({ auth: jwtAuth });

const me = await client.users.getUserMe();
console.log(`My user ID is ${me.id}`);
```

Otherwise, you'll need to provide the necessary configuration fields directly to the `JwtConfig` constructor:

```js
const { Client } = require('box-typescript-sdk-gen/lib/client.generated.js');
const { JwtAuth, JwtConfig } = require('box-typescript-sdk-gen/lib/jwtAuth.js');

const jwtConfig = new JwtConfig({
  clientId: 'YOUR_CLIENT_ID',
  clientSecret: 'YOUR_CLIENT_SECRET',
  jwtKeyId: 'YOUR_JWT_KEY_ID',
  privateKey: 'YOUR_PRIVATE_KEY',
  privateKeyPassphrase: 'PASSPHRASE',
  enterpriseId: 'YOUR_ENTERPRISE_ID',
});
const jwtAuth = new JwtAuth({ config: jwtConfig });
const serviceAccountClient = new Client({ auth: jwtAuth });
```

### Authenticate user

App auth applications also often have associated [App Users][app_user], which are
created and managed directly by the application — they do not have normal login credentials,
and can only be accessed through the Box API by the application that created them.
You may authenticate as the Service Account to provision and manage users, or as an individual app user to
make calls as that user. See the [API documentation](https://developer.box.com/)
for detailed instructions on how to use app auth.

Clients for making calls as an App User can be created with the same JSON JWT config file generated through the
[Box Developer Console][dev_console], but it is also required to call `jwtAuth.asUser('USER_ID')`, with
a user ID you want to authenticate.

```js
const { Client } = require('box-typescript-sdk-gen/lib/client.generated.js');
const { JwtAuth, JwtConfig } = require('box-typescript-sdk-gen/lib/jwtAuth.js');

const jwtConfig = JwtConfig.fromConfigFile('/path/to/settings.json');
const jwtAuth = new JwtAuth({ config: jwtConfig });
jwtAuth.asUser('USER_ID');
const userClient = new Client({ auth: jwtAuth });
```

Alternatively, clients for making calls as an App User can be created with the same `JwtConfig`
constructor as in the above examples, similarly to creating a Service Account client. Simply pass the
`userId` instead of `enterpriseId` when constructing the auth config instance:

```js
const { Client } = require('box-typescript-sdk-gen/lib/client.generated.js');
const { JwtAuth, JwtConfig } = require('box-typescript-sdk-gen/lib/jwtAuth.js');

const jwtConfig = new JwtConfig({
  clientId: 'YOUR_CLIENT_ID',
  clientSecret: 'YOUR_CLIENT_SECRET',
  jwtKeyId: 'YOUR_JWT_KEY_ID',
  privateKey: 'YOUR_PRIVATE_KEY',
  privateKeyPassphrase: 'PASSPHRASE',
  userId: 'USER_ID',
});
const jwtAuth = new JwtAuth({ config: jwtConfig });
const userClient = new Client({ auth: jwtAuth });
```

[jwt_guide]: https://developer.box.com/guides/authentication/jwt/jwt-setup/
[service_account]: https://developer.box.com/guides/getting-started/user-types/service-account/
[app_user]: https://developer.box.com/guides/getting-started/user-types/app-users/

## Client Credentials Grant

Before using Client Credentials Grant Auth make sure you set up correctly your Box App.
The guide with all required steps can be found here: [Setup with Client Credentials Grant][ccg_guide]

Client Credentials Grant Auth method allows you to obtain an access token by having client credentials
and secret with enterprise or user ID, which allows you to work using service or user account.

You can use `CCGAuth` to initialize a client object the same way as for other authentication types:

```js
const { Client } = require('box-typescript-sdk-gen/lib/client.generated.js');
const { CcgAuth } = require('box-typescript-sdk-gen/lib/ccgAuth.js');

const ccgConfig = {
  userId: 'YOUR_USER_ID',
  clientId: 'YOUR_CLIENT_ID',
  clientSecret: 'YOUR_CLIENT_SECRET',
};
const ccgAuth = new CcgAuth({ config: ccgConfig });
const client = new Client({ auth: ccgAuth });

const me = await client.users.getUserMe();
console.log(`My user ID is ${me.id}`);
```

Obtained token is valid for specified amount of time, it will be refreshed automatically by default.

### Obtaining Service Account token

The [Service Account](https://developer.box.com/guides/getting-started/user-types/service-account//)
is separate from the Box accounts of the application developer and the
enterprise admin of any enterprise that has authorized the app — files stored in that account
are not accessible in any other account by default, and vice versa.
To obtain service account you will have to provide enterprise ID with client id and secret:

```js
const { Client } = require('box-typescript-sdk-gen/lib/client.generated.js');
const { CcgAuth } = require('box-typescript-sdk-gen/lib/ccgAuth.js');

const ccgConfig = {
  enterpriseId: 'YOUR_ENTERPRISE_ID',
  clientId: 'YOUR_CLIENT_ID',
  clientSecret: 'YOUR_CLIENT_SECRET',
};
const ccgAuth = new CcgAuth({ config: ccgConfig });
const client = new Client({ auth: ccgAuth });
```

### Obtaining User token

In order to enable obtaining user token you have to go to your application configuration that can be found
[here][dev_console]. In `Configuration` tab, in section `Advanced Features`
select `Generate user access tokens`. Do not forget to re-authorize application if it was already authorized.

To obtain user account you will have to provide user ID with client id and secret.

```js
const { Client } = require('box-typescript-sdk-gen/lib/client.generated.js');
const { CcgAuth } = require('box-typescript-sdk-gen/lib/ccgAuth.js');

const ccgConfig = {
  userId: 'YOUR_USER_ID',
  clientId: 'YOUR_CLIENT_ID',
  clientSecret: 'YOUR_CLIENT_SECRET',
};
const ccgAuth = new CcgAuth({ config: ccgConfig });
const client = new Client({ auth: ccgAuth });
```

### Switching between Service Account and User

In order to switch between being authenticated as Service Account and a User you can call:

```js
ccgAuth.asEnterprise('YOUR_ENTERPRISE_ID');
```

to authenticate as enterprise or

```js
ccgAuth.asUser('YOUR_USER_ID');
```

to authenticate as User with provided ID. The new token will be automatically fetched with a next API call.

[ccg_guide]: https://developer.box.com/guides/authentication/client-credentials/client-credentials-setup/

## OAuth 2.0 Auth

If your application needs to integrate with existing Box users who will provide
their login credentials to grant your application access to their account, you
will need to go through the standard OAuth2 login flow. A detailed guide for
this process is available in the
[Authentication with OAuth API documentation](https://developer.box.com/en/guides/authentication/oauth2/).

Using an auth code is the most common way of authenticating with the Box API for
existing Box users, to integrate with their accounts.
Your application must provide a way for the user to login to Box (usually with a
browser or web view) in order to obtain an auth code.

<!-- sample get_authorize -->

```js
const { OAuth, OAuthConfig } = require('box-typescript-sdk-gen/lib/oauth.js');

const config = {
  clientId: 'OAUTH_CLIENT_ID',
  clientSecret: 'OAUTH_CLIENT_SECRET',
};
const oauth = new OAuth({ config: config });

// the URL to redirect the user to
var authorize_url = oauth.getAuthorizeUrl();
```

After a user logs in and grants your application access to their Box account,
they will be redirected to your application's `redirect_uri` which will contain
an auth code. This auth code can then be used along with your client ID and
client secret to establish an API connection.
You need to provide the auth code to the SDK to obtain an access token, then you can use the SDK as usual.

<!-- sample post_oauth2_token --->

```js
await oauth.getTokensAuthorizationCodeGrant('code');
```

# Token storage

## In-memory token storage

By default, the SDK stores the access token in volatile memory. When rerunning your application,
the access token won't be reused from the previous run; a new token has to be obtained again.
To use in-memory token storage, you don't need to do anything more than
create an Auth class using AuthConfig, for example, for OAuth:

```js
const config = {
  clientId: 'OAUTH_CLIENT_ID',
  clientSecret: 'OAUTH_CLIENT_SECRET',
};
const oauth = new OAuth({ config: config });
```

## Custom storage

You can also provide a custom token storage class. All you need to do is create a class that implements `TokenStorage`
interface and pass an instance of your class to the AuthConfig constructor.

```js
const config = {
  clientId: 'OAUTH_CLIENT_ID',
  clientSecret: 'OAUTH_CLIENT_SECRET',
  tokenStorage: new MyCustomTokenStorage(),
};
const oauth = new OAuth({ config: config });
```
