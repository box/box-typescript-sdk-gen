import { SerializedData } from '../../serialization/json.js';
export type ArchiveV2025R0TypeField = 'archive';
export declare class ArchiveV2025R0 {
    /**
     * The unique identifier that represents an archive. */
    readonly id: string;
    /**
     * The value will always be `archive`. */
    readonly type: ArchiveV2025R0TypeField;
    /**
     * The name of the archive.
     *
     * The following restrictions to the archive name apply: names containing
     * non-printable ASCII characters, forward and backward slashes
     * (`/`, `\`), names with trailing spaces, and names `.` and `..` are
     * not allowed. */
    readonly name: string;
    /**
     * The size of the archive in bytes. */
    readonly size: number;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<ArchiveV2025R0, 'type'> & Partial<Pick<ArchiveV2025R0, 'type'>>);
}
export interface ArchiveV2025R0Input {
    /**
     * The unique identifier that represents an archive. */
    readonly id: string;
    /**
     * The value will always be `archive`. */
    readonly type?: ArchiveV2025R0TypeField;
    /**
     * The name of the archive.
     *
     * The following restrictions to the archive name apply: names containing
     * non-printable ASCII characters, forward and backward slashes
     * (`/`, `\`), names with trailing spaces, and names `.` and `..` are
     * not allowed. */
    readonly name: string;
    /**
     * The size of the archive in bytes. */
    readonly size: number;
    readonly rawData?: SerializedData;
}
export declare function serializeArchiveV2025R0TypeField(val: ArchiveV2025R0TypeField): SerializedData;
export declare function deserializeArchiveV2025R0TypeField(val: SerializedData): ArchiveV2025R0TypeField;
export declare function serializeArchiveV2025R0(val: ArchiveV2025R0): SerializedData;
export declare function deserializeArchiveV2025R0(val: SerializedData): ArchiveV2025R0;
export declare function serializeArchiveV2025R0Input(val: ArchiveV2025R0Input): SerializedData;
export declare function deserializeArchiveV2025R0Input(val: SerializedData): ArchiveV2025R0Input;
//# sourceMappingURL=archiveV2025R0.generated.d.ts.map