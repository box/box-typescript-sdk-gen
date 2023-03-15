export type Json = readonly Json[] | boolean | null | number | {
    readonly [key: string]: Json | void;
} | string;
export declare function serializeJson(value: Json): string;
export declare function deserializeJson(text: string): Json;
export declare function isJson(value: Json | void, type: 'array'): value is Json[];
export declare function isJson(value: Json | void, type: 'boolean'): value is boolean;
export declare function isJson(value: Json | void, type: 'null'): value is null;
export declare function isJson(value: Json | void, type: 'number'): value is number;
export declare function isJson(value: Json | void, type: 'object'): value is {
    [key: string]: Json | void;
};
export declare function isJson(value: Json | void, type: 'string'): value is string;
