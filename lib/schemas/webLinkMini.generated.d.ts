import { WebLinkBase } from './webLinkBase.generated.js';
import { SerializedData } from '../serialization/json.js';
export declare class WebLinkMini extends WebLinkBase {
    readonly url?: string;
    readonly sequenceId?: string;
    readonly name?: string;
    constructor(fields: WebLinkMini);
}
export declare function serializeWebLinkMini(val: WebLinkMini): SerializedData;
export declare function deserializeWebLinkMini(val: SerializedData): WebLinkMini;
//# sourceMappingURL=webLinkMini.generated.d.ts.map