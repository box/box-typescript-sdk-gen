import { Hash } from '../internal/utils.js';
import { UploadPart } from '../schemas/uploadPart.generated.js';
import { BoxClient } from '../client.generated.js';
export declare const client: BoxClient;
export declare class TestPartAccumulator {
    readonly lastIndex: number;
    readonly parts: readonly UploadPart[];
    readonly fileSize: number;
    readonly uploadPartUrl: string;
    readonly uploadSessionId: string;
    readonly fileHash: Hash;
    constructor(fields: Omit<TestPartAccumulator, 'uploadPartUrl' | 'uploadSessionId'> & Partial<Pick<TestPartAccumulator, 'uploadPartUrl' | 'uploadSessionId'>>);
}
export interface TestPartAccumulatorInput {
    readonly lastIndex: number;
    readonly parts: readonly UploadPart[];
    readonly fileSize: number;
    readonly uploadPartUrl?: string;
    readonly uploadSessionId?: string;
    readonly fileHash: Hash;
}
export {};
//# sourceMappingURL=chunkedUploads.generated.test.d.ts.map