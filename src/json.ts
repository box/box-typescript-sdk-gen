export type Json =
  | readonly Json[]
  | boolean
  | null
  | number
  | { readonly [key: string]: Json | void }
  | string;

export function serializeJson(value: Json): string {
  return JSON.stringify(value);
}

export function deserializeJson(text: string): Json {
  return JSON.parse(text);
}

export function isJson(value: Json | void, type: 'array'): value is Json[];
export function isJson(value: Json | void, type: 'boolean'): value is boolean;
export function isJson(value: Json | void, type: 'null'): value is null;
export function isJson(value: Json | void, type: 'number'): value is number;
export function isJson(
  value: Json | void,
  type: 'object'
): value is { [key: string]: Json | void };
export function isJson(value: Json | void, type: 'string'): value is string;
export function isJson(
  value: Json | void,
  type: 'array' | 'boolean' | 'null' | 'number' | 'object' | 'string'
) {
  if (typeof value === 'undefined') {
    return false;
  }

  switch (type) {
    case 'array':
      return Array.isArray(value);

    case 'boolean':
      return typeof value === 'boolean';

    case 'null':
      return value === null;

    case 'number':
      return typeof value === 'number';

    case 'object':
      return value && typeof value === 'object' && !Array.isArray(value);

    case 'string':
      return typeof value === 'string';

    default:
      throw new Error(`Invalid type provided to isJSON: "${type}"`);
  }
}
