import {
  dateFromString,
  dateTimeFromString,
  dateTimeToString,
  dateToString,
  generateByteStream,
  hexStrToBase64,
  readByteStream,
} from './utils';

test('stream', async () => {
  const size = 1024 * 1024;
  const buffer = await readByteStream(generateByteStream(size));
  expect(buffer.length).toBe(size);
});

test('hexStrToBase64', () => {
  const hexStr = 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3';
  const base64 = 'qUqP5cyxm6YcTAhz05Hph5gvu9M=';
  expect(hexStrToBase64(hexStr)).toBe(base64);
});

describe('date conversions', () => {
  test('dateFromString and dateToString', () => {
    const dateString = '2024-04-25';
    const dateWrapper = dateFromString(dateString);
    const result = dateToString(dateWrapper);
    expect(result).toBe(dateString);
  });
});

describe('datetime conversions', () => {
  test('dateTimeFromString and dateTimeToString', () => {
    const dateTimeString = '2024-04-25T12:30:00+00:00';
    const dateTimeWrapper = dateTimeFromString(dateTimeString);
    const result = dateTimeToString(dateTimeWrapper);
    expect(result).toBe('2024-04-25T12:30:00+00:00');
  });
});
