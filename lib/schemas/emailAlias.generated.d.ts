import { SerializedData } from '../serialization/json.js';
export type EmailAliasTypeField = 'email_alias';
export interface EmailAlias {
    /**
     * The unique identifier for this object. */
    readonly id?: string;
    /**
     * The value will always be `email_alias`. */
    readonly type?: EmailAliasTypeField;
    /**
     * The email address. */
    readonly email?: string;
    /**
     * Whether the email address has been confirmed. */
    readonly isConfirmed?: boolean;
    readonly rawData?: SerializedData;
}
export declare function serializeEmailAliasTypeField(val: EmailAliasTypeField): SerializedData;
export declare function deserializeEmailAliasTypeField(val: SerializedData): EmailAliasTypeField;
export declare function serializeEmailAlias(val: EmailAlias): SerializedData;
export declare function deserializeEmailAlias(val: SerializedData): EmailAlias;
//# sourceMappingURL=emailAlias.generated.d.ts.map