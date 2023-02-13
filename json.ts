import * as Immutable from 'immutable';

export type JSON =
  | Immutable.List<JSON>
  | boolean
  | null
  | number
  | Immutable.Map<string, JSON>
  | string;

export function serializeJSON(value: JSON): string {
  return JSON.stringify(Immutable.isImmutable(value) ? value.toJS() : value);
}

export function deserializeJSON(text: string): JSON {
  return Immutable.fromJS(JSON.parse(text)) as JSON;
}

export function isJSON(
  value: JSON,
  type: 'array' | 'boolean' | 'null' | 'number' | 'object' | 'string'
) {
  switch (type) {
    case 'array':
      return Immutable.List.isList(value);

    case 'boolean':
      return typeof value === 'boolean';

    case 'null':
      return value === null;

    case 'number':
      return typeof value === 'number';

    case 'object':
      return Immutable.Map.isMap(value);

    case 'string':
      return typeof value === 'string';

    default:
      throw new Error(`Invalid type provided to isJSON: "${type}"`);
  }
}
