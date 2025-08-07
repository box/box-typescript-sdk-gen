import { serializeTermsOfService } from './termsOfService.generated.js';
import { deserializeTermsOfService } from './termsOfService.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeTermsOfServices(val) {
    return {
        ['total_count']: val.totalCount,
        ['entries']: val.entries == void 0
            ? val.entries
            : val.entries.map(function (item) {
                return serializeTermsOfService(item);
            }),
    };
}
export function deserializeTermsOfServices(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "TermsOfServices"' });
    }
    if (!(val.total_count == void 0) && !sdIsNumber(val.total_count)) {
        throw new BoxSdkError({
            message: 'Expecting number for "total_count" of type "TermsOfServices"',
        });
    }
    const totalCount = val.total_count == void 0 ? void 0 : val.total_count;
    if (!(val.entries == void 0) && !sdIsList(val.entries)) {
        throw new BoxSdkError({
            message: 'Expecting array for "entries" of type "TermsOfServices"',
        });
    }
    const entries = val.entries == void 0
        ? void 0
        : sdIsList(val.entries)
            ? val.entries.map(function (itm) {
                return deserializeTermsOfService(itm);
            })
            : [];
    return { totalCount: totalCount, entries: entries };
}
//# sourceMappingURL=termsOfServices.generated.js.map