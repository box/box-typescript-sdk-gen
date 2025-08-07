"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const utils_js_1 = require("../internal/utils.js");
const commons_generated_js_1 = require("./commons.generated.js");
exports.client = (0, commons_generated_js_1.getDefaultClient)();
test('test_get_groups', function test_get_groups() {
    return __awaiter(this, void 0, void 0, function* () {
        const groups = yield exports.client.groups.getGroups();
        if (!(groups.totalCount >= 0)) {
            throw new Error('Assertion failed');
        }
    });
});
test('test_create_get_delete_group', function test_create_get_delete_group() {
    return __awaiter(this, void 0, void 0, function* () {
        const groupName = (0, utils_js_1.getUuid)();
        const groupDescription = 'Group description';
        const group = yield exports.client.groups.createGroup({
            name: groupName,
            description: groupDescription,
        });
        if (!(group.name == groupName)) {
            throw new Error('Assertion failed');
        }
        const groupById = yield exports.client.groups.getGroupById(group.id, {
            queryParams: {
                fields: ['id', 'name', 'description', 'group_type'],
            },
        });
        if (!(groupById.id == group.id)) {
            throw new Error('Assertion failed');
        }
        if (!(groupById.description == groupDescription)) {
            throw new Error('Assertion failed');
        }
        const updatedGroupName = (0, utils_js_1.getUuid)();
        const updatedGroup = yield exports.client.groups.updateGroupById(group.id, {
            requestBody: {
                name: updatedGroupName,
            },
        });
        if (!(updatedGroup.name == updatedGroupName)) {
            throw new Error('Assertion failed');
        }
        yield exports.client.groups.deleteGroupById(group.id);
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield exports.client.groups.getGroupById(group.id);
        })).rejects.toThrow();
    });
});
//# sourceMappingURL=groups.generated.test.js.map