import { serializeAiAgentAsk } from '../schemas/aiAgentAsk.generated';
import { deserializeAiAgentAsk } from '../schemas/aiAgentAsk.generated';
import { serializeAiAgentExtract } from '../schemas/aiAgentExtract.generated';
import { deserializeAiAgentExtract } from '../schemas/aiAgentExtract.generated';
import { serializeAiAgentExtractStructured } from '../schemas/aiAgentExtractStructured.generated';
import { deserializeAiAgentExtractStructured } from '../schemas/aiAgentExtractStructured.generated';
import { serializeAiAgentTextGen } from '../schemas/aiAgentTextGen.generated';
import { deserializeAiAgentTextGen } from '../schemas/aiAgentTextGen.generated';
import { serializeAiResponseFull } from '../schemas/aiResponseFull.generated';
import { deserializeAiResponseFull } from '../schemas/aiResponseFull.generated';
import { serializeClientError } from '../schemas/clientError.generated';
import { deserializeClientError } from '../schemas/clientError.generated';
import { serializeAiAsk } from '../schemas/aiAsk.generated';
import { deserializeAiAsk } from '../schemas/aiAsk.generated';
import { serializeAiResponse } from '../schemas/aiResponse.generated';
import { deserializeAiResponse } from '../schemas/aiResponse.generated';
import { serializeAiTextGen } from '../schemas/aiTextGen.generated';
import { deserializeAiTextGen } from '../schemas/aiTextGen.generated';
import { serializeAiAgentAskOrAiAgentExtractOrAiAgentExtractStructuredOrAiAgentTextGen } from '../schemas/aiAgentAskOrAiAgentExtractOrAiAgentExtractStructuredOrAiAgentTextGen.generated';
import { deserializeAiAgentAskOrAiAgentExtractOrAiAgentExtractStructuredOrAiAgentTextGen } from '../schemas/aiAgentAskOrAiAgentExtractOrAiAgentExtractStructuredOrAiAgentTextGen.generated';
import { serializeAiExtract } from '../schemas/aiExtract.generated';
import { deserializeAiExtract } from '../schemas/aiExtract.generated';
import { serializeAiExtractStructuredResponse } from '../schemas/aiExtractStructuredResponse.generated';
import { deserializeAiExtractStructuredResponse } from '../schemas/aiExtractStructuredResponse.generated';
import { serializeAiExtractStructured } from '../schemas/aiExtractStructured.generated';
import { deserializeAiExtractStructured } from '../schemas/aiExtractStructured.generated';
import { ResponseFormat } from '../networking/fetchOptions.generated';
import { AiAgentAsk } from '../schemas/aiAgentAsk.generated';
import { AiAgentExtract } from '../schemas/aiAgentExtract.generated';
import { AiAgentExtractStructured } from '../schemas/aiAgentExtractStructured.generated';
import { AiAgentTextGen } from '../schemas/aiAgentTextGen.generated';
import { AiResponseFull } from '../schemas/aiResponseFull.generated';
import { ClientError } from '../schemas/clientError.generated';
import { AiAsk } from '../schemas/aiAsk.generated';
import { AiResponse } from '../schemas/aiResponse.generated';
import { AiTextGen } from '../schemas/aiTextGen.generated';
import { AiAgentAskOrAiAgentExtractOrAiAgentExtractStructuredOrAiAgentTextGen } from '../schemas/aiAgentAskOrAiAgentExtractOrAiAgentExtractStructuredOrAiAgentTextGen.generated';
import { AiExtract } from '../schemas/aiExtract.generated';
import { AiExtractStructuredResponse } from '../schemas/aiExtractStructuredResponse.generated';
import { AiExtractStructured } from '../schemas/aiExtractStructured.generated';
import { BoxSdkError } from '../box/errors';
import { Authentication } from '../networking/auth.generated';
import { NetworkSession } from '../networking/network.generated';
import { FetchOptions } from '../networking/fetchOptions.generated';
import { FetchResponse } from '../networking/fetchResponse.generated';
import { prepareParams } from '../internal/utils';
import { toString } from '../internal/utils';
import { ByteStream } from '../internal/utils';
import { CancellationToken } from '../internal/utils';
import { SerializedData } from '../serialization/json';
import { sdToJson } from '../serialization/json';
import { sdIsEmpty } from '../serialization/json';
import { sdIsBoolean } from '../serialization/json';
import { sdIsNumber } from '../serialization/json';
import { sdIsString } from '../serialization/json';
import { sdIsList } from '../serialization/json';
import { sdIsMap } from '../serialization/json';
export class CreateAiAskOptionals {
  readonly headers: CreateAiAskHeaders = new CreateAiAskHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<CreateAiAskOptionals, 'headers' | 'cancellationToken'> &
      Partial<Pick<CreateAiAskOptionals, 'headers' | 'cancellationToken'>>,
  ) {
    if (fields.headers !== undefined) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken !== undefined) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface CreateAiAskOptionalsInput {
  readonly headers?: CreateAiAskHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class CreateAiTextGenOptionals {
  readonly headers: CreateAiTextGenHeaders = new CreateAiTextGenHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<CreateAiTextGenOptionals, 'headers' | 'cancellationToken'> &
      Partial<Pick<CreateAiTextGenOptionals, 'headers' | 'cancellationToken'>>,
  ) {
    if (fields.headers !== undefined) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken !== undefined) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface CreateAiTextGenOptionalsInput {
  readonly headers?: CreateAiTextGenHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class GetAiAgentDefaultConfigOptionals {
  readonly headers: GetAiAgentDefaultConfigHeaders =
    new GetAiAgentDefaultConfigHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      GetAiAgentDefaultConfigOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<GetAiAgentDefaultConfigOptionals, 'headers' | 'cancellationToken'>
      >,
  ) {
    if (fields.headers !== undefined) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken !== undefined) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface GetAiAgentDefaultConfigOptionalsInput {
  readonly headers?: GetAiAgentDefaultConfigHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class CreateAiExtractOptionals {
  readonly headers: CreateAiExtractHeaders = new CreateAiExtractHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<CreateAiExtractOptionals, 'headers' | 'cancellationToken'> &
      Partial<Pick<CreateAiExtractOptionals, 'headers' | 'cancellationToken'>>,
  ) {
    if (fields.headers !== undefined) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken !== undefined) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface CreateAiExtractOptionalsInput {
  readonly headers?: CreateAiExtractHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class CreateAiExtractStructuredOptionals {
  readonly headers: CreateAiExtractStructuredHeaders =
    new CreateAiExtractStructuredHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      CreateAiExtractStructuredOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          CreateAiExtractStructuredOptionals,
          'headers' | 'cancellationToken'
        >
      >,
  ) {
    if (fields.headers !== undefined) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken !== undefined) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface CreateAiExtractStructuredOptionalsInput {
  readonly headers?: CreateAiExtractStructuredHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class CreateAiAskHeaders {
  /**
   * Extra headers that will be included in the HTTP request. */
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<CreateAiAskHeaders, 'extraHeaders'> &
      Partial<Pick<CreateAiAskHeaders, 'extraHeaders'>>,
  ) {
    if (fields.extraHeaders !== undefined) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface CreateAiAskHeadersInput {
  /**
   * Extra headers that will be included in the HTTP request. */
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class CreateAiTextGenHeaders {
  /**
   * Extra headers that will be included in the HTTP request. */
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<CreateAiTextGenHeaders, 'extraHeaders'> &
      Partial<Pick<CreateAiTextGenHeaders, 'extraHeaders'>>,
  ) {
    if (fields.extraHeaders !== undefined) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface CreateAiTextGenHeadersInput {
  /**
   * Extra headers that will be included in the HTTP request. */
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export type GetAiAgentDefaultConfigQueryParamsModeField =
  | 'ask'
  | 'text_gen'
  | 'extract'
  | 'extract_structured'
  | string;
export interface GetAiAgentDefaultConfigQueryParams {
  /**
   * The mode to filter the agent config to return. */
  readonly mode: GetAiAgentDefaultConfigQueryParamsModeField;
  /**
   * The ISO language code to return the agent config for.
   * If the language is not supported the default agent config is returned. */
  readonly language?: string;
  /**
   * The model to return the default agent config for. */
  readonly model?: string;
}
export class GetAiAgentDefaultConfigHeaders {
  /**
   * Extra headers that will be included in the HTTP request. */
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<GetAiAgentDefaultConfigHeaders, 'extraHeaders'> &
      Partial<Pick<GetAiAgentDefaultConfigHeaders, 'extraHeaders'>>,
  ) {
    if (fields.extraHeaders !== undefined) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetAiAgentDefaultConfigHeadersInput {
  /**
   * Extra headers that will be included in the HTTP request. */
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class CreateAiExtractHeaders {
  /**
   * Extra headers that will be included in the HTTP request. */
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<CreateAiExtractHeaders, 'extraHeaders'> &
      Partial<Pick<CreateAiExtractHeaders, 'extraHeaders'>>,
  ) {
    if (fields.extraHeaders !== undefined) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface CreateAiExtractHeadersInput {
  /**
   * Extra headers that will be included in the HTTP request. */
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class CreateAiExtractStructuredHeaders {
  /**
   * Extra headers that will be included in the HTTP request. */
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<CreateAiExtractStructuredHeaders, 'extraHeaders'> &
      Partial<Pick<CreateAiExtractStructuredHeaders, 'extraHeaders'>>,
  ) {
    if (fields.extraHeaders !== undefined) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface CreateAiExtractStructuredHeadersInput {
  /**
   * Extra headers that will be included in the HTTP request. */
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class AiManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields: Omit<
      AiManager,
      | 'networkSession'
      | 'createAiAsk'
      | 'createAiTextGen'
      | 'getAiAgentDefaultConfig'
      | 'createAiExtract'
      | 'createAiExtractStructured'
    > &
      Partial<Pick<AiManager, 'networkSession'>>,
  ) {
    if (fields.auth !== undefined) {
      this.auth = fields.auth;
    }
    if (fields.networkSession !== undefined) {
      this.networkSession = fields.networkSession;
    }
  }
  /**
   * Sends an AI request to supported LLMs and returns an answer specifically focused on the user's question given the provided context.
   * @param {AiAsk} requestBody Request body of createAiAsk method
   * @param {CreateAiAskOptionalsInput} optionalsInput
   * @returns {Promise<undefined | AiResponseFull>}
   */
  async createAiAsk(
    requestBody: AiAsk,
    optionalsInput: CreateAiAskOptionalsInput = {},
  ): Promise<undefined | AiResponseFull> {
    const optionals: CreateAiAskOptionals = new CreateAiAskOptionals({
      headers: optionalsInput.headers,
      cancellationToken: optionalsInput.cancellationToken,
    });
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse =
      await this.networkSession.networkClient.fetch(
        new FetchOptions({
          url: ''.concat(
            this.networkSession.baseUrls.baseUrl,
            '/2.0/ai/ask',
          ) as string,
          method: 'POST',
          headers: headersMap,
          data: serializeAiAsk(requestBody),
          contentType: 'application/json',
          responseFormat: 'json' as ResponseFormat,
          auth: this.auth,
          networkSession: this.networkSession,
          cancellationToken: cancellationToken,
        }),
      );
    if ((toString(response.status) as string) == '204') {
      return void 0;
    }
    return {
      ...deserializeAiResponseFull(response.data!),
      rawData: response.data!,
    };
  }
  /**
   * Sends an AI request to supported Large Language Models (LLMs) and returns generated text based on the provided prompt.
   * @param {AiTextGen} requestBody Request body of createAiTextGen method
   * @param {CreateAiTextGenOptionalsInput} optionalsInput
   * @returns {Promise<AiResponse>}
   */
  async createAiTextGen(
    requestBody: AiTextGen,
    optionalsInput: CreateAiTextGenOptionalsInput = {},
  ): Promise<AiResponse> {
    const optionals: CreateAiTextGenOptionals = new CreateAiTextGenOptionals({
      headers: optionalsInput.headers,
      cancellationToken: optionalsInput.cancellationToken,
    });
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse =
      await this.networkSession.networkClient.fetch(
        new FetchOptions({
          url: ''.concat(
            this.networkSession.baseUrls.baseUrl,
            '/2.0/ai/text_gen',
          ) as string,
          method: 'POST',
          headers: headersMap,
          data: serializeAiTextGen(requestBody),
          contentType: 'application/json',
          responseFormat: 'json' as ResponseFormat,
          auth: this.auth,
          networkSession: this.networkSession,
          cancellationToken: cancellationToken,
        }),
      );
    return {
      ...deserializeAiResponse(response.data!),
      rawData: response.data!,
    };
  }
  /**
   * Get the AI agent default config.
   * @param {GetAiAgentDefaultConfigQueryParams} queryParams Query parameters of getAiAgentDefaultConfig method
   * @param {GetAiAgentDefaultConfigOptionalsInput} optionalsInput
   * @returns {Promise<AiAgentAskOrAiAgentExtractOrAiAgentExtractStructuredOrAiAgentTextGen>}
   */
  async getAiAgentDefaultConfig(
    queryParams: GetAiAgentDefaultConfigQueryParams,
    optionalsInput: GetAiAgentDefaultConfigOptionalsInput = {},
  ): Promise<AiAgentAskOrAiAgentExtractOrAiAgentExtractStructuredOrAiAgentTextGen> {
    const optionals: GetAiAgentDefaultConfigOptionals =
      new GetAiAgentDefaultConfigOptionals({
        headers: optionalsInput.headers,
        cancellationToken: optionalsInput.cancellationToken,
      });
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['mode']: toString(queryParams.mode) as string,
      ['language']: toString(queryParams.language) as string,
      ['model']: toString(queryParams.model) as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse =
      await this.networkSession.networkClient.fetch(
        new FetchOptions({
          url: ''.concat(
            this.networkSession.baseUrls.baseUrl,
            '/2.0/ai_agent_default',
          ) as string,
          method: 'GET',
          params: queryParamsMap,
          headers: headersMap,
          responseFormat: 'json' as ResponseFormat,
          auth: this.auth,
          networkSession: this.networkSession,
          cancellationToken: cancellationToken,
        }),
      );
    return {
      ...deserializeAiAgentAskOrAiAgentExtractOrAiAgentExtractStructuredOrAiAgentTextGen(
        response.data!,
      ),
      rawData: response.data!,
    };
  }
  /**
   * Sends an AI request to supported Large Language Models (LLMs) and extracts metadata in form of key-value pairs.
   * In this request, both the prompt and the output can be freeform.
   * Metadata template setup before sending the request is not required.
   * @param {AiExtract} requestBody Request body of createAiExtract method
   * @param {CreateAiExtractOptionalsInput} optionalsInput
   * @returns {Promise<AiResponse>}
   */
  async createAiExtract(
    requestBody: AiExtract,
    optionalsInput: CreateAiExtractOptionalsInput = {},
  ): Promise<AiResponse> {
    const optionals: CreateAiExtractOptionals = new CreateAiExtractOptionals({
      headers: optionalsInput.headers,
      cancellationToken: optionalsInput.cancellationToken,
    });
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse =
      await this.networkSession.networkClient.fetch(
        new FetchOptions({
          url: ''.concat(
            this.networkSession.baseUrls.baseUrl,
            '/2.0/ai/extract',
          ) as string,
          method: 'POST',
          headers: headersMap,
          data: serializeAiExtract(requestBody),
          contentType: 'application/json',
          responseFormat: 'json' as ResponseFormat,
          auth: this.auth,
          networkSession: this.networkSession,
          cancellationToken: cancellationToken,
        }),
      );
    return {
      ...deserializeAiResponse(response.data!),
      rawData: response.data!,
    };
  }
  /**
   * Sends an AI request to supported Large Language Models (LLMs) and returns extracted metadata as a set of key-value pairs.
   * For this request, you either need a metadata template or a list of fields you want to extract.
   * Input is **either** a metadata template or a list of fields to ensure the structure.
   * To learn more about creating templates, see [Creating metadata templates in the Admin Console](https://support.box.com/hc/en-us/articles/360044194033-Customizing-Metadata-Templates)
   * or use the [metadata template API](g://metadata/templates/create).
   * @param {AiExtractStructured} requestBody Request body of createAiExtractStructured method
   * @param {CreateAiExtractStructuredOptionalsInput} optionalsInput
   * @returns {Promise<AiExtractStructuredResponse>}
   */
  async createAiExtractStructured(
    requestBody: AiExtractStructured,
    optionalsInput: CreateAiExtractStructuredOptionalsInput = {},
  ): Promise<AiExtractStructuredResponse> {
    const optionals: CreateAiExtractStructuredOptionals =
      new CreateAiExtractStructuredOptionals({
        headers: optionalsInput.headers,
        cancellationToken: optionalsInput.cancellationToken,
      });
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse =
      await this.networkSession.networkClient.fetch(
        new FetchOptions({
          url: ''.concat(
            this.networkSession.baseUrls.baseUrl,
            '/2.0/ai/extract_structured',
          ) as string,
          method: 'POST',
          headers: headersMap,
          data: serializeAiExtractStructured(requestBody),
          contentType: 'application/json',
          responseFormat: 'json' as ResponseFormat,
          auth: this.auth,
          networkSession: this.networkSession,
          cancellationToken: cancellationToken,
        }),
      );
    return {
      ...deserializeAiExtractStructuredResponse(response.data!),
      rawData: response.data!,
    };
  }
}
export interface AiManagerInput {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
}
export function serializeGetAiAgentDefaultConfigQueryParamsModeField(
  val: GetAiAgentDefaultConfigQueryParamsModeField,
): SerializedData {
  return val;
}
export function deserializeGetAiAgentDefaultConfigQueryParamsModeField(
  val: SerializedData,
): GetAiAgentDefaultConfigQueryParamsModeField {
  if (val == 'ask') {
    return val;
  }
  if (val == 'text_gen') {
    return val;
  }
  if (val == 'extract') {
    return val;
  }
  if (val == 'extract_structured') {
    return val;
  }
  if (sdIsString(val)) {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize GetAiAgentDefaultConfigQueryParamsModeField",
  });
}
