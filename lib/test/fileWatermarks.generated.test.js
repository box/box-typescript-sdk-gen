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
const fileWatermarks_generated_js_1 = require("../managers/fileWatermarks.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const commons_generated_js_1 = require("./commons.generated.js");
exports.client = (0, commons_generated_js_1.getDefaultClient)();
test('testCreateGetDeleteFileWatermark', function testCreateGetDeleteFileWatermark() {
    return __awaiter(this, void 0, void 0, function* () {
        const fileName = ''.concat((0, utils_js_1.getUuid)(), '.txt');
        const uploadedFiles = yield exports.client.uploads.uploadFile({
            attributes: {
                name: fileName,
                parent: { id: '0' },
            },
            file: (0, utils_js_2.generateByteStream)(10),
        });
        const file = uploadedFiles.entries[0];
        const createdWatermark = yield exports.client.fileWatermarks.updateFileWatermark(file.id, {
            watermark: new fileWatermarks_generated_js_1.UpdateFileWatermarkRequestBodyWatermarkField({
                imprint: 'default',
            }),
        });
        const watermark = yield exports.client.fileWatermarks.getFileWatermark(file.id);
        yield exports.client.fileWatermarks.deleteFileWatermark(file.id);
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield exports.client.fileWatermarks.getFileWatermark(file.id);
        })).rejects.toThrow();
        yield exports.client.files.deleteFileById(file.id);
    });
});
//# sourceMappingURL=fileWatermarks.generated.test.js.map