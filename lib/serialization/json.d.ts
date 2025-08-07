export type SerializedData = undefined | null | boolean | number | string | SerializedDataList | SerializedDataMap;
type SerializedDataList = readonly SerializedData[];
type SerializedDataMap = {
    readonly [key: string]: SerializedData | undefined;
};
export declare function jsonToSerializedData(text: string): SerializedData;
export declare function sdToJson(data: SerializedData): string;
export declare function sdToUrlParams(data: SerializedData): string;
export declare function getSdValueByKey(obj: SerializedData, key: string): string;
export declare function sdIsEmpty(data: SerializedData): data is undefined | null;
export declare function sdIsBoolean(data: SerializedData): data is boolean;
export declare function sdIsNumber(data: SerializedData): data is number;
export declare function sdIsString(data: SerializedData): data is string;
export declare function sdIsList(data: SerializedData): data is SerializedDataList;
export declare function sdIsMap(data: SerializedData): data is SerializedDataMap;
/**
 * Returns a string replacement for sensitive data.
 */
export declare function sanitizedValue(): string;
/**
 * Sanitize serialized data by replacing sensitive values with a placeholder.
 * @param sd SerializedData to sanitize
 * @param keysToSanitize Keys to sanitize
 */
export declare function sanitizeSerializedData(sd: SerializedData, keysToSanitize: Record<string, string>): SerializedData;
export {};
//# sourceMappingURL=json.d.ts.map