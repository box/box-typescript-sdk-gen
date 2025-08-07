import { BoxSdkError } from '../../box/errors.js';
import { sdIsString } from '../../serialization/json.js';
import { sdIsList } from '../../serialization/json.js';
import { sdIsMap } from '../../serialization/json.js';
export function serializeDocGenTagV2025R0TagTypeField(val) {
    return val;
}
export function deserializeDocGenTagV2025R0TagTypeField(val) {
    if (val == 'text') {
        return val;
    }
    if (val == 'arithmetic') {
        return val;
    }
    if (val == 'conditional') {
        return val;
    }
    if (val == 'for-loop') {
        return val;
    }
    if (val == 'table-loop') {
        return val;
    }
    if (val == 'image') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize DocGenTagV2025R0TagTypeField",
    });
}
export function serializeDocGenTagV2025R0(val) {
    return {
        ['tag_content']: val.tagContent,
        ['tag_type']: serializeDocGenTagV2025R0TagTypeField(val.tagType),
        ['json_paths']: val.jsonPaths.map(function (item) {
            return item;
        }),
    };
}
export function deserializeDocGenTagV2025R0(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "DocGenTagV2025R0"',
        });
    }
    if (val.tag_content == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "tag_content" of type "DocGenTagV2025R0" to be defined',
        });
    }
    if (!sdIsString(val.tag_content)) {
        throw new BoxSdkError({
            message: 'Expecting string for "tag_content" of type "DocGenTagV2025R0"',
        });
    }
    const tagContent = val.tag_content;
    if (val.tag_type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "tag_type" of type "DocGenTagV2025R0" to be defined',
        });
    }
    const tagType = deserializeDocGenTagV2025R0TagTypeField(val.tag_type);
    if (val.json_paths == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "json_paths" of type "DocGenTagV2025R0" to be defined',
        });
    }
    if (!sdIsList(val.json_paths)) {
        throw new BoxSdkError({
            message: 'Expecting array for "json_paths" of type "DocGenTagV2025R0"',
        });
    }
    const jsonPaths = sdIsList(val.json_paths)
        ? val.json_paths.map(function (itm) {
            if (!sdIsString(itm)) {
                throw new BoxSdkError({
                    message: 'Expecting string for "DocGenTagV2025R0"',
                });
            }
            return itm;
        })
        : [];
    return {
        tagContent: tagContent,
        tagType: tagType,
        jsonPaths: jsonPaths,
    };
}
//# sourceMappingURL=docGenTagV2025R0.generated.js.map