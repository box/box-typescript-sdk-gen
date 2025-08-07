import { serializeAppItem } from './appItem.generated.js';
import { deserializeAppItem } from './appItem.generated.js';
import { serializeFileBaseOrFolderBaseOrWebLinkBase } from './fileBaseOrFolderBaseOrWebLinkBase.generated.js';
import { deserializeFileBaseOrFolderBaseOrWebLinkBase } from './fileBaseOrFolderBaseOrWebLinkBase.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class AppItemAssociation {
    constructor(fields) {
        /**
         * The value will always be `app_item_association`. */
        this.type = 'app_item_association';
        if (fields.id !== undefined) {
            this.id = fields.id;
        }
        if (fields.type !== undefined) {
            this.type = fields.type;
        }
        if (fields.appItem !== undefined) {
            this.appItem = fields.appItem;
        }
        if (fields.item !== undefined) {
            this.item = fields.item;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
export function serializeAppItemAssociationTypeField(val) {
    return val;
}
export function deserializeAppItemAssociationTypeField(val) {
    if (val == 'app_item_association') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize AppItemAssociationTypeField",
    });
}
export function serializeAppItemAssociation(val) {
    return {
        ['id']: val.id,
        ['type']: serializeAppItemAssociationTypeField(val.type),
        ['app_item']: serializeAppItem(val.appItem),
        ['item']: serializeFileBaseOrFolderBaseOrWebLinkBase(val.item),
    };
}
export function deserializeAppItemAssociation(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "AppItemAssociation"',
        });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "AppItemAssociation" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "AppItemAssociation"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "AppItemAssociation" to be defined',
        });
    }
    const type = deserializeAppItemAssociationTypeField(val.type);
    if (val.app_item == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "app_item" of type "AppItemAssociation" to be defined',
        });
    }
    const appItem = deserializeAppItem(val.app_item);
    if (val.item == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "item" of type "AppItemAssociation" to be defined',
        });
    }
    const item = deserializeFileBaseOrFolderBaseOrWebLinkBase(val.item);
    return {
        id: id,
        type: type,
        appItem: appItem,
        item: item,
    };
}
export function serializeAppItemAssociationInput(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeAppItemAssociationTypeField(val.type),
        ['app_item']: serializeAppItem(val.appItem),
        ['item']: serializeFileBaseOrFolderBaseOrWebLinkBase(val.item),
    };
}
export function deserializeAppItemAssociationInput(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "AppItemAssociationInput"',
        });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "AppItemAssociationInput" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "AppItemAssociationInput"',
        });
    }
    const id = val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeAppItemAssociationTypeField(val.type);
    if (val.app_item == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "app_item" of type "AppItemAssociationInput" to be defined',
        });
    }
    const appItem = deserializeAppItem(val.app_item);
    if (val.item == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "item" of type "AppItemAssociationInput" to be defined',
        });
    }
    const item = deserializeFileBaseOrFolderBaseOrWebLinkBase(val.item);
    return {
        id: id,
        type: type,
        appItem: appItem,
        item: item,
    };
}
//# sourceMappingURL=appItemAssociation.generated.js.map