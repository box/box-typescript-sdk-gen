import { SerializedData } from '../serialization/json.js';
export type GenericSource = {
    readonly [key: string]: any;
};
export declare function serializeGenericSource(val: GenericSource): SerializedData;
export declare function deserializeGenericSource(val: SerializedData): GenericSource;
//# sourceMappingURL=genericSource.generated.d.ts.map