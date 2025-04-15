import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

type ResponseData = {
  testFiles: string[];
  error?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  try {
    const testDir = path.resolve(
      process.cwd(),
      'node_modules/box-typescript-sdk-gen/lib/test',
    );
    const files = fs.readdirSync(testDir);

    // Filter for .generated.test.js files and remove the .js extension
    const testFiles = files
      .filter((file) => file.endsWith('.generated.test.js'))
      .map((file) => file.replace('.js', ''));

    res.status(200).json({ testFiles });
  } catch (error) {
    res.status(500).json({
      testFiles: [],
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}
