import { SerializedData } from '../serialization/json.js';
export declare class DataSanitizer {
    private readonly keysToSanitize;
    constructor(fields: Omit<DataSanitizer, 'keysToSanitize' | 'sanitizeHeaders' | 'sanitizeBody'>);
    /**
       * @param {{
          readonly [key: string]: string;
      }} headers
       * @returns {{
          readonly [key: string]: string;
      }}
       */
    sanitizeHeaders(headers: {
        readonly [key: string]: string;
    }): {
        readonly [key: string]: string;
    };
    /**
     * @param {SerializedData} body
     * @returns {SerializedData}
     */
    sanitizeBody(body: SerializedData): SerializedData;
}
export interface DataSanitizerInput {
}
