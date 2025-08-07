import { serializeTermsOfServiceUserStatus } from './termsOfServiceUserStatus.generated.js';
import { deserializeTermsOfServiceUserStatus } from './termsOfServiceUserStatus.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeTermsOfServiceUserStatuses(val) {
    return {
        ['total_count']: val.totalCount,
        ['entries']: val.entries == void 0
            ? val.entries
            : val.entries.map(function (item) {
                return serializeTermsOfServiceUserStatus(item);
            }),
    };
}
export function deserializeTermsOfServiceUserStatuses(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "TermsOfServiceUserStatuses"',
        });
    }
    if (!(val.total_count == void 0) && !sdIsNumber(val.total_count)) {
        throw new BoxSdkError({
            message: 'Expecting number for "total_count" of type "TermsOfServiceUserStatuses"',
        });
    }
    const totalCount = val.total_count == void 0 ? void 0 : val.total_count;
    if (!(val.entries == void 0) && !sdIsList(val.entries)) {
        throw new BoxSdkError({
            message: 'Expecting array for "entries" of type "TermsOfServiceUserStatuses"',
        });
    }
    const entries = val.entries == void 0
        ? void 0
        : sdIsList(val.entries)
            ? val.entries.map(function (itm) {
                return deserializeTermsOfServiceUserStatus(itm);
            })
            : [];
    return {
        totalCount: totalCount,
        entries: entries,
    };
}
//# sourceMappingURL=termsOfServiceUserStatuses.generated.js.map