import { SerializedData } from '../serialization/json.js';
export declare class BaseUrls {
    readonly baseUrl: string;
    readonly uploadUrl: string;
    readonly oauth2Url: string;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<BaseUrls, 'baseUrl' | 'uploadUrl' | 'oauth2Url'> & Partial<Pick<BaseUrls, 'baseUrl' | 'uploadUrl' | 'oauth2Url'>>);
}
export interface BaseUrlsInput {
    readonly baseUrl?: string;
    readonly uploadUrl?: string;
    readonly oauth2Url?: string;
    readonly rawData?: SerializedData;
}
export declare function serializeBaseUrls(val: BaseUrls): SerializedData;
export declare function deserializeBaseUrls(val: SerializedData): BaseUrls;
export declare function serializeBaseUrlsInput(val: BaseUrlsInput): SerializedData;
export declare function deserializeBaseUrlsInput(val: SerializedData): BaseUrlsInput;
//# sourceMappingURL=baseUrls.generated.d.ts.map