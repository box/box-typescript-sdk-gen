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
const folderWatermarks_generated_js_1 = require("../managers/folderWatermarks.generated.js");
const utils_js_1 = require("../internal/utils.js");
const commons_generated_js_1 = require("./commons.generated.js");
exports.client = (0, commons_generated_js_1.getDefaultClient)();
test('testCreateGetDeleteFolderWatermark', function testCreateGetDeleteFolderWatermark() {
    return __awaiter(this, void 0, void 0, function* () {
        const folderName = (0, utils_js_1.getUuid)();
        const folder = yield exports.client.folders.createFolder({
            name: folderName,
            parent: { id: '0' },
        });
        const createdWatermark = yield exports.client.folderWatermarks.updateFolderWatermark(folder.id, {
            watermark: new folderWatermarks_generated_js_1.UpdateFolderWatermarkRequestBodyWatermarkField({
                imprint: 'default',
            }),
        });
        const watermark = yield exports.client.folderWatermarks.getFolderWatermark(folder.id);
        yield exports.client.folderWatermarks.deleteFolderWatermark(folder.id);
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield exports.client.folderWatermarks.getFolderWatermark(folder.id);
        })).rejects.toThrow();
        yield exports.client.folders.deleteFolderById(folder.id);
    });
});
//# sourceMappingURL=folderWatermarks.generated.test.js.map