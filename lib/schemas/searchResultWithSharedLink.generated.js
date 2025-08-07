"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeSearchResultWithSharedLink = serializeSearchResultWithSharedLink;
exports.deserializeSearchResultWithSharedLink = deserializeSearchResultWithSharedLink;
const fileFullOrFolderFullOrWebLink_generated_js_1 = require("./fileFullOrFolderFullOrWebLink.generated.js");
const fileFullOrFolderFullOrWebLink_generated_js_2 = require("./fileFullOrFolderFullOrWebLink.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
function serializeSearchResultWithSharedLink(val) {
    return {
        ['accessible_via_shared_link']: val.accessibleViaSharedLink,
        ['item']: val.item == void 0
            ? val.item
            : (0, fileFullOrFolderFullOrWebLink_generated_js_1.serializeFileFullOrFolderFullOrWebLink)(val.item),
        ['type']: val.type,
    };
}
function deserializeSearchResultWithSharedLink(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "SearchResultWithSharedLink"',
        });
    }
    if (!(val.accessible_via_shared_link == void 0) &&
        !(0, json_js_1.sdIsString)(val.accessible_via_shared_link)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "accessible_via_shared_link" of type "SearchResultWithSharedLink"',
        });
    }
    const accessibleViaSharedLink = val.accessible_via_shared_link == void 0
        ? void 0
        : val.accessible_via_shared_link;
    const item = val.item == void 0
        ? void 0
        : (0, fileFullOrFolderFullOrWebLink_generated_js_2.deserializeFileFullOrFolderFullOrWebLink)(val.item);
    if (!(val.type == void 0) && !(0, json_js_1.sdIsString)(val.type)) {
        throw new errors_js_1.BoxSdkError({
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