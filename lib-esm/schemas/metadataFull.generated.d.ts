import { Metadata } from './metadata.generated.js';
import { SerializedData } from '../serialization/json.js';
export type MetadataFull = Metadata & {
    /**
     * Whether the user can edit this metadata instance. */
    readonly canEdit?: boolean;
    /**
     * A UUID to identify the metadata instance. */
    readonly id?: string;
    /**
     * A unique identifier for the "type" of this instance. This is an
     * internal system property and should not be used by a client
     * application. */
    readonly type?: string;
    /**
     * The last-known version of the template of the object. This is an
     * internal system property and should not be used by a client
     * application. */
    readonly typeVersion?: number;
    readonly extraData?: {
        readonly [key: string]: any;
    };
};
export declare function serializeMetadataFull(val: MetadataFull): SerializedData;
export declare function deserializeMetadataFull(val: SerializedData): MetadataFull;
