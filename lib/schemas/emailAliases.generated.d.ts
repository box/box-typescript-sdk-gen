import { EmailAlias } from './emailAlias.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface EmailAliases {
    /**
     * The number of email aliases. */
    readonly totalCount?: number;
    /**
     * A list of email aliases. */
    readonly entries?: readonly EmailAlias[];
    readonly rawData?: SerializedData;
}
export declare function serializeEmailAliases(val: EmailAliases): SerializedData;
export declare function deserializeEmailAliases(val: SerializedData): EmailAliases;
//# sourceMappingURL=emailAliases.generated.d.ts.map