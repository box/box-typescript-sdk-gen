export type SerializedData =
  | undefined
  | null
  | boolean
  | number
  | string
  | SerializedDataList
  | SerializedDataMap;

type SerializedDataList = readonly SerializedData[];
type SerializedDataMap = { readonly [key: string]: SerializedData | undefined };

export function jsonToSerializedData(text: string): SerializedData {
  return JSON.parse(text);
}

export function sdToJson(data: SerializedData): string {
  return JSON.stringify(data);
}

export function sdToUrlParams(data: SerializedData): string {
  if (!sdIsMap(data) && !sdIsString(data)) {
    throw new Error(
      'Expecting an object or string as an argument for sdToUrlParams'
    );
  }
  const dataAsMap: SerializedDataMap = sdIsString(data)
    ? JSON.parse(data)
    : data;
  return new URLSearchParams(
    Object.fromEntries(
      Object.entries(dataAsMap).filter(([key, value]) => value != null)
    ) as Record<string, string>
  ).toString();
}

export function sdIsEmpty(data: SerializedData): data is undefined | null {
  return data == null;
}

export function sdIsBoolean(data: SerializedData): data is boolean {
  return typeof data == 'boolean';
}

export function sdIsNumber(data: SerializedData): data is number {
  return typeof data == 'number';
}

export function sdIsString(data: SerializedData): data is string {
  return typeof data == 'string';
}

export function sdIsList(data: SerializedData): data is SerializedDataList {
  return Array.isArray(data);
}

export function sdIsMap(data: SerializedData): data is SerializedDataMap {
  return typeof data === 'object' && data != null && !Array.isArray(data);
}
