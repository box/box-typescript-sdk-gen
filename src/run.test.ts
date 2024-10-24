import { Readable } from 'stream';
import run from './run';

test('Uses standard input/output', async () => {
  const args = [2, 2];

  process = Object.create(process, {
    stdin: {
      value: Readable.from(Buffer.from(JSON.stringify(args), 'utf-8')),
    },
  });

  jest.spyOn(global.console, 'log').mockImplementation();

  await run(async (a: number, b: number) => 2 + 2);

  expect(console.log).toBeCalledTimes(1);
  expect(console.log).toBeCalledWith(4);
});
