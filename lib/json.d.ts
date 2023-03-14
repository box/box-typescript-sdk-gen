export type JSON = readonly JSON[] | boolean | null | number | {
    readonly [key: string]: JSON | void;
} | string;
export declare function serializeJSON(value: JSON): string;
export declare function deserializeJSON(text: string): JSON;
export declare function isJSON(value: JSON | void, type: 'array'): value is JSON[];
export declare function isJSON(value: JSON | void, type: 'boolean'): value is boolean;
export declare function isJSON(value: JSON | void, type: 'null'): value is null;
export declare function isJSON(value: JSON | void, type: 'number'): value is number;
export declare function isJSON(value: JSON | void, type: 'object'): value is {
    [key: string]: JSON | void;
};
export declare function isJSON(value: JSON | void, type: 'string'): value is string;
