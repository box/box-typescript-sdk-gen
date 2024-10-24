import {
  sdToJson,
  jsonToSerializedData,
  sdIsNumber,
  sdIsBoolean,
  sdIsMap,
} from './json';

test('sdToJson', () =>
  expect(
    sdToJson({
      firstName: 'John',
      lastName: 'Smith',
    })
  ).toBe('{"firstName":"John","lastName":"Smith"}'));

test('jsonToSerializedData', () =>
  expect(
    jsonToSerializedData('{"firstName":"John","lastName":"Smith"}')
  ).toEqual({
    firstName: 'John',
    lastName: 'Smith',
  }));

test('isJSON', () => {
  expect(sdIsNumber(5)).toBe(true);
  expect(sdIsBoolean(5)).toBe(false);
  expect(sdIsMap({})).toBe(true);
});
