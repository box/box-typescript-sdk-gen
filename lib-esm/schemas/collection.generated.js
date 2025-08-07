import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeCollectionTypeField(val) {
    return val;
}
export function deserializeCollectionTypeField(val) {
    if (val == 'collection') {
        return val;
    }
    throw new BoxSdkError({ message: "Can't deserialize CollectionTypeField" });
}
export function serializeCollectionNameField(val) {
    return val;
}
export function deserializeCollectionNameField(val) {
    if (val == 'Favorites') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({ message: "Can't deserialize CollectionNameField" });
}
export function serializeCollectionCollectionTypeField(val) {
    return val;
}
export function deserializeCollectionCollectionTypeField(val) {
    if (val == 'favorites') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize CollectionCollectionTypeField",
    });
}
export function serializeCollection(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0 ? val.type : serializeCollectionTypeField(val.type),
        ['name']: val.name == void 0 ? val.name : serializeCollectionNameField(val.name),
        ['collection_type']: val.collectionType == void 0
            ? val.collectionType
            : serializeCollectionCollectionTypeField(val.collectionType),
    };
}
export function deserializeCollection(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "Collection"' });
    }
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
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