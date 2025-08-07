import { BoxClient } from '../client.generated.js';
import { FileFull } from '../schemas/fileFull.generated.js';
import { ByteStream } from '../internal/utils.js';
export declare const client: BoxClient;
export declare function uploadFile(fileName: string, fileStream: ByteStream): Promise<FileFull>;
export {};
//# sourceMappingURL=files.generated.test.d.ts.map