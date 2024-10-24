import fetch from 'node-fetch';
import { fetch as builtInFetch, userAgentHeader, xBoxUaHeader } from './fetch';
import { prepareParams, toString } from '../internal/utils';

jest.mock('node-fetch', () =>
  jest.fn(async () => ({
    text: async () => '',
    arrayBuffer: async () => new ArrayBuffer(0),
  }))
);

// The fetch method is using NetworkSession, but NetworkSession using BaseUrls
// which is generated during the build process.
// Skip this test for now
test.skip('fetch parses headers correctly and adds analytic headers', async () => {
  // The request will fail but we ignore that
  // await expect(
  //   builtInFetch('url', {
  //     params: prepareParams(
  //       Object.fromEntries([
  //         ['key1', toString('value1')],
  //         ['key2', toString(null)],
  //         ['key3', toString('value3')],
  //         ['key4', toString(void 0)],
  //         ['key5', toString(42)],
  //         ['key6', toString(true)],
  //       ])
  //     ),
  //     headers: prepareParams(
  //       Object.fromEntries([
  //         ['key1', toString('value1')],
  //         ['key2', toString(null)],
  //         ['key3', toString('value3')],
  //         ['key4', toString(void 0)],
  //       ])
  //     ),
  //   })
  // ).rejects.toThrow();
  // expect(fetch as jest.Mock).toBeCalledWith(
  //   'url?key1=value1&key3=value3&key5=42&key6=true',
  //   {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       key1: 'value1',
  //       key3: 'value3',
  //       'User-Agent': userAgentHeader,
  //       'X-Box-UA': xBoxUaHeader,
  //     },
  //   }
  // );
});
