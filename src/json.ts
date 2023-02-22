export type JSON =
  | readonly JSON[]
  | boolean
  | null
  | number
  | { readonly [key: string]: JSON | void }
  | string;

export function serializeJSON(value: JSON): string {
  return JSON.stringify(value);
}

export function deserializeJSON(text: string): JSON {
  return JSON.parse(text);
}

export function isJSON(value: JSON | void, type: 'array'): value is JSON[];
export function isJSON(value: JSON | void, type: 'boolean'): value is boolean;
export function isJSON(value: JSON | void, type: 'null'): value is null;
export function isJSON(value: JSON | void, type: 'number'): value is number;
export function isJSON(
  value: JSON | void,
  type: 'object'
): value is { [key: string]: JSON | void };
export function isJSON(value: JSON | void, type: 'string'): value is string;
export function isJSON(
  value: JSON | void,
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
