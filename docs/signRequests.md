# Sign Requests

Sign Requests are used to request e-signatures on documents from signers.  
A Sign Request can refer to one or more Box Files and can be sent to one or more Box Sign Request Signers.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Create Sign Request](#create-sign-request)
- [Get All Sign Requests](#get-all-sign-requests)
- [Get Sign Request by ID](#get-sign-request-by-id)
- [Cancel Sign Request](#cancel-sign-request)
- [Resend Sign Request](#resend-sign-request)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Create Sign Request

The `createSignRequest`method will create a Sign Request. You need to provide at least one file
(from which the signing document will be created) and at least one signer to receive the Sign Request.

```js
const destinationFolderId = '12345';
const fileToSignId = '11111';
const signerEmail = 'signer@box.com';

const createdSignRequest = await client.signRequests.createSignRequest({
  signers: [{ email: signerEmail }],
  parentFolder: { id: destinationFolderId, type: 'folder' },
  sourceFiles: [{ id: fileToSignId, type: 'file' }],
});

console.log(`(Sign Request ID: ${createdSignRequest.id})`);
```

If you set `isDocumentPreparationNeeded` flag to true, you need to visit `prepareUrl` before the Sign Request will be sent.
For more information on `isDocumentPreparationNeeded` and the other parameters available, please refer to the [developer documentation](https://developer.box.com/guides/sign-request/).

# Get All Sign Requests

Calling the `getSignRequests` will return `SignRequests` object that will allow getting access to all the Sign Requests.

```js
const signRequests = await client.signRequests.getSignRequests();
signRequests.entries.forEach((signRequest) =>
  console.log(`Sign Request ID: ${signRequest.id}`)
);
```

# Get Sign Request by ID

Calling `getSignRequestById` will return `SignRequest` object containing information about the Sign Request.

```js
const signRequest = await client.signRequests.getSignRequestById('123456');
console.log(`Sign Request ID is ${signRequest.id}`);
```

# Cancel Sign Request

Calling `cancelSignRequest` will cancel a created Sign Request.

```js
const cancelledSignRequest = client.signRequests.cancelSignRequest('123456');
console.log(`Cancelled Sign Request status is ${cancelledSignRequest.status}`);
```

# Resend Sign Request

Calling `resendSignRequest` will resend a Sign Request to all signers that have not signed it yet.
There is an 10-minute cooling-off period between re-sending reminder emails.

```js
const signRequestToResendId = '123456';
await client.signRequests.resendSignRequest(signRequestToResendId);
console.log(`Sign Request with ID ${sign_request_to_resend_id} was resent`);
```
