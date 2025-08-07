import { ShieldListContentCountryV2025R0 } from './shieldListContentCountryV2025R0.generated.js';
import { ShieldListContentDomainV2025R0 } from './shieldListContentDomainV2025R0.generated.js';
import { ShieldListContentEmailV2025R0 } from './shieldListContentEmailV2025R0.generated.js';
import { ShieldListContentIpV2025R0 } from './shieldListContentIpV2025R0.generated.js';
import { SerializedData } from '../../serialization/json.js';
export type ShieldListContentRequestV2025R0 = ShieldListContentCountryV2025R0 | ShieldListContentDomainV2025R0 | ShieldListContentEmailV2025R0 | ShieldListContentIpV2025R0;
export declare function serializeShieldListContentRequestV2025R0(val: any): SerializedData;
export declare function deserializeShieldListContentRequestV2025R0(val: SerializedData): ShieldListContentRequestV2025R0;
