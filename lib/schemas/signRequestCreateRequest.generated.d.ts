import { SignRequestBase } from './signRequestBase.generated.js';
import { FileBase } from './fileBase.generated.js';
import { SignRequestCreateSigner } from './signRequestCreateSigner.generated.js';
import { FolderMini } from './folderMini.generated.js';
import { SerializedData } from '../serialization/json.js';
export type SignRequestCreateRequestSignatureColorField = 'blue' | 'black' | 'red' | string;
export type SignRequestCreateRequest = SignRequestBase & {
    /**
     * List of files to create a signing document from. This is currently limited to ten files. Only the ID and type fields are required for each file. */
    readonly sourceFiles?: readonly FileBase[] | null;
    /**
     * Force a specific color for the signature (blue, black, or red). */
    readonly signatureColor?: SignRequestCreateRequestSignatureColorField | null;
    /**
     * Array of signers for the signature request. 35 is the
     * max number of signers permitted.
     *
     * **Note**: It may happen that some signers belong to conflicting [segments](r://shield-information-barrier-segment-member) (user groups).
     * This means that due to the security policies, users are assigned to segments to prevent exchanges or communication that could lead to ethical conflicts.
     * In such a case, an attempt to send the sign request will result in an error.
     *
     * Read more about [segments and ethical walls](https://support.box.com/hc/en-us/articles/9920431507603-Understanding-Information-Barriers#h_01GFVJEHQA06N7XEZ4GCZ9GFAQ). */
    readonly signers: readonly SignRequestCreateSigner[];
    readonly parentFolder?: FolderMini;
};
export declare function serializeSignRequestCreateRequestSignatureColorField(val: SignRequestCreateRequestSignatureColorField): SerializedData;
export declare function deserializeSignRequestCreateRequestSignatureColorField(val: SerializedData): SignRequestCreateRequestSignatureColorField;
export declare function serializeSignRequestCreateRequest(val: SignRequestCreateRequest): SerializedData;
export declare function deserializeSignRequestCreateRequest(val: SerializedData): SignRequestCreateRequest;
//# sourceMappingURL=signRequestCreateRequest.generated.d.ts.map