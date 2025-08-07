import { DocGenTemplateBaseV2025R0 } from './docGenTemplateBaseV2025R0.generated.js';
import { SerializedData } from '../../serialization/json.js';
export type DocGenTemplateV2025R0 = DocGenTemplateBaseV2025R0 & {
    /**
     * The name of the template. */
    readonly fileName?: string | null;
};
export declare function serializeDocGenTemplateV2025R0(val: DocGenTemplateV2025R0): SerializedData;
export declare function deserializeDocGenTemplateV2025R0(val: SerializedData): DocGenTemplateV2025R0;
