import { serializeFileFullOrFolderFullOrWebLink } from './fileFullOrFolderFullOrWebLink.generated.js';
import { deserializeFileFullOrFolderFullOrWebLink } from './fileFullOrFolderFullOrWebLink.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeSearchResultWithSharedLink(val) {
    return {
        ['accessible_via_shared_link']: val.accessibleViaSharedLink,
        ['item']: val.item == void 0
            ? val.item
            : serializeFileFullOrFolderFullOrWebLink(val.item),
        ['type']: val.type,
    };
}
export function deserializeSearchResultWithSharedLink(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "SearchResultWithSharedLink"',
        });
    }
    if (!(val.accessible_via_shared_link == void 0) &&
        !sdIsString(val.accessible_via_shared_link)) {
        throw new BoxSdkError({
            message: 'Expecting string for "accessible_via_shared_link" of type "SearchResultWithSharedLink"',
        });
    }
    const accessibleViaSharedLink = val.accessible_via_shared_link == void 0
        ? void 0
        : val.accessible_via_shared_link;
    const item = val.item == void 0
        ? void 0
        : deserializeFileFullOrFolderFullOrWebLink(val.item);
    if (!(val.type == void 0) && !sdIsString(val.type)) {
        throw new BoxSdkError({
            message: 'Expecting string for "type" of type "SearchResultWithSharedLink"',
        });
    }
    const type = val.type == void 0 ? void 0 : val.type;
    return {
        accessibleViaSharedLink: accessibleViaSharedLink,
        item: item,
        type: type,
    };
}
//# sourceMappingURL=searchResultWithSharedLink.generated.js.map