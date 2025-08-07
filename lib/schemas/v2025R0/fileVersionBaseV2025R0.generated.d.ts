import { SerializedData } from '../../serialization/json.js';
export type FileVersionBaseV2025R0TypeField = 'file_version';
export declare class FileVersionBaseV2025R0 {
    /**
     * The unique identifier that represent a file version. */
    readonly id: string;
    /**
     * The value will always be `file_version`. */
    readonly type: FileVersionBaseV2025R0TypeField;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<FileVersionBaseV2025R0, 'type'> & Partial<Pick<FileVersionBaseV2025R0, 'type'>>);
}
export interface FileVersionBaseV2025R0Input {
    /**
     * The unique identifier that represent a file version. */
    readonly id: string;
    /**
     * The value will always be `file_version`. */
    readonly type?: FileVersionBaseV2025R0TypeField;
    readonly rawData?: SerializedData;
}
export declare function serializeFileVersionBaseV2025R0TypeField(val: FileVersionBaseV2025R0TypeField): SerializedData;
export declare function deserializeFileVersionBaseV2025R0TypeField(val: SerializedData): FileVersionBaseV2025R0TypeField;
export declare function serializeFileVersionBaseV2025R0(val: FileVersionBaseV2025R0): SerializedData;
export declare function deserializeFileVersionBaseV2025R0(val: SerializedData): FileVersionBaseV2025R0;
export declare function serializeFileVersionBaseV2025R0Input(val: FileVersionBaseV2025R0Input): SerializedData;
export declare function deserializeFileVersionBaseV2025R0Input(val: SerializedData): FileVersionBaseV2025R0Input;
//# sourceMappingURL=fileVersionBaseV2025R0.generated.d.ts.map