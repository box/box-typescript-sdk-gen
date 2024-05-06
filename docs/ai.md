# AiManager

- [Send AI Ask request](#send-ai-ask-request)
- [Send AI Text Gen request](#send-ai-text-gen-request)

## Send AI Ask request

Sends an AI request to supported LLMs and returns an answer specifically focused on the user's question given the provided context.

This operation is performed by calling function `createAiAsk`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/post-ai-ask/).

_Currently we don't have an example for calling `createAiAsk` in integration tests_

### Arguments

- requestBody `AiAsk`
  - Request body of createAiAsk method
- optionalsInput `CreateAiAskOptionalsInput`
  -

### Returns

This function returns a value of type `AiResponse`.

A successful response including the answer from the LLM.

## Send AI Text Gen request

Sends an AI request to supported LLMs and returns an answer specifically focused on the creation of new text.

This operation is performed by calling function `createAiTextGen`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/post-ai-text-gen/).

_Currently we don't have an example for calling `createAiTextGen` in integration tests_

### Arguments

- requestBody `AiTextGen`
  - Request body of createAiTextGen method
- optionalsInput `CreateAiTextGenOptionalsInput`
  -

### Returns

This function returns a value of type `AiResponse`.

A successful response including the answer from the LLM.
