# AiManager

- [Send AI question request](#send-ai-question-request)
- [Send AI request to generate text](#send-ai-request-to-generate-text)
- [Get AI agent default configuration](#get-ai-agent-default-configuration)

## Send AI question request

Sends an AI request to supported LLMs and returns an answer specifically focused on the user's question given the provided context.

This operation is performed by calling function `createAiAsk`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/post-ai-ask/).

<!-- sample post_ai_ask -->

```ts
await client.ai.createAiAsk({
  mode: 'multiple_item_qa' as AiAskModeField,
  prompt: 'Which direction sun rises?',
  items: [
    new AiAskItemsField({
      id: fileToAsk1.id,
      type: 'file' as AiAskItemsTypeField,
      content: 'Earth goes around the sun',
    }),
    new AiAskItemsField({
      id: fileToAsk2.id,
      type: 'file' as AiAskItemsTypeField,
      content: 'Sun rises in the East in the morning',
    }),
  ],
} satisfies AiAsk);
```

### Arguments

- requestBody `AiAsk`
  - Request body of createAiAsk method
- optionalsInput `CreateAiAskOptionalsInput`
  -

### Returns

This function returns a value of type `AiResponse`.

A successful response including the answer from the LLM.

## Send AI request to generate text

Sends an AI request to supported LLMs and returns an answer specifically focused on the creation of new text.

This operation is performed by calling function `createAiTextGen`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/post-ai-text-gen/).

<!-- sample post_ai_text_gen -->

```ts
await client.ai.createAiTextGen({
  prompt: 'Parapharse the document.s',
  items: [
    {
      id: fileToAsk.id,
      type: 'file' as AiTextGenItemsTypeField,
      content:
        'The Earth goes around the sun. Sun rises in the East in the morning.',
    } satisfies AiTextGenItemsField,
  ],
  dialogueHistory: [
    {
      prompt: 'What does the earth go around?',
      answer: 'The sun',
      createdAt: dateTimeFromString('2021-01-01T00:00:00Z'),
    } satisfies AiTextGenDialogueHistoryField,
    {
      prompt: 'On Earth, where does the sun rise?',
      answer: 'East',
      createdAt: dateTimeFromString('2021-01-01T00:00:00Z'),
    } satisfies AiTextGenDialogueHistoryField,
  ],
} satisfies AiTextGen);
```

### Arguments

- requestBody `AiTextGen`
  - Request body of createAiTextGen method
- optionalsInput `CreateAiTextGenOptionalsInput`
  -

### Returns

This function returns a value of type `AiResponse`.

A successful response including the answer from the LLM.

## Get AI agent default configuration

Get the AI agent default config

This operation is performed by calling function `getAiAgentDefault`.

See the endpoint docs at
[API Reference](https://developer.box.com/reference/get-ai-agent-default/).

_Currently we don't have an example for calling `getAiAgentDefault` in integration tests_

### Arguments

- queryParams `GetAiAgentDefaultQueryParams`
  - Query parameters of getAiAgentDefault method
- optionalsInput `GetAiAgentDefaultOptionalsInput`
  -

### Returns

This function returns a value of type `AiAgentAskOrAiAgentTextGen`.

A successful response including the default agent configuration.
This response can be one of the following two objects:
AI agent for questions and AI agent for text generation. The response
depends on the agent configuration requested in this endpoint.
