"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeCollectionTypeField = serializeCollectionTypeField;
exports.deserializeCollectionTypeField = deserializeCollectionTypeField;
exports.serializeCollectionNameField = serializeCollectionNameField;
exports.deserializeCollectionNameField = deserializeCollectionNameField;
exports.serializeCollectionCollectionTypeField = serializeCollectionCollectionTypeField;
exports.deserializeCollectionCollectionTypeField = deserializeCollectionCollectionTypeField;
exports.serializeCollection = serializeCollection;
exports.deserializeCollection = deserializeCollection;
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
function serializeCollectionTypeField(val) {
    return val;
}
function deserializeCollectionTypeField(val) {
    if (val == 'collection') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({ message: "Can't deserialize CollectionTypeField" });
}
function serializeCollectionNameField(val) {
    return val;
}
function deserializeCollectionNameField(val) {
    if (val == 'Favorites') {
        return val;
    }
    if ((0, json_js_1.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({ message: "Can't deserialize CollectionNameField" });
}
function serializeCollectionCollectionTypeField(val) {
    return val;
}
function deserializeCollectionCollectionTypeField(val) {
    if (val == 'favorites') {
        return val;
    }
    if ((0, json_js_1.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize CollectionCollectionTypeField",
    });
}
function serializeCollection(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0 ? val.type : serializeCollectionTypeField(val.type),
        ['name']: val.name == void 0 ? val.name : serializeCollectionNameField(val.name),
        ['collection_type']: val.collectionType == void 0
            ? val.collectionType
            : serializeCollectionCollectionTypeField(val.collectionType),
    };
}
function deserializeCollection(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "Collection"' });
    }
    if (!(val.id == void 0) && !(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "Collection"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0 ? void 0 : deserializeCollectionTypeField(val.type);
    const name = val.name == void 0 ? void 0 : deserializeCollectionNameField(val.name);
    const collectionType = val.collection_type == void 0
        ? void 0
        : deserializeCollectionCollectionTypeField(val.collection_type);
    return {
        id: id,
        type: type,
        name: name,
        collectionType: collectionType,
    };
}
//# sourceMappingURL=collection.generated.js.map