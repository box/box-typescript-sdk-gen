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
const fileReferenceV2025R0_generated_js_1 = require("../schemas/v2025R0/fileReferenceV2025R0.generated.js");
const commons_generated_js_1 = require("./commons.generated.js");
const commons_generated_js_2 = require("./commons.generated.js");
exports.client = (0, commons_generated_js_1.getDefaultClient)();
test('testDocgenTemplateCRUD', function testDocgenTemplateCRUD() {
    return __awaiter(this, void 0, void 0, function* () {
        const file = yield (0, commons_generated_js_2.uploadNewFile)();
        const createdDocgenTemplate = yield exports.client.docgenTemplate.createDocgenTemplateV2025R0({
            file: new fileReferenceV2025R0_generated_js_1.FileReferenceV2025R0({ id: file.id }),
        });
        const docgenTemplates = yield exports.client.docgenTemplate.getDocgenTemplatesV2025R0();
        if (!(docgenTemplates.entries.length > 0)) {
            throw new Error('Assertion failed');
        }
        const fetchedDocgenTemplate = yield exports.client.docgenTemplate.getDocgenTemplateByIdV2025R0(createdDocgenTemplate.file.id);
        if (!(fetchedDocgenTemplate.file.id == createdDocgenTemplate.file.id)) {
            throw new Error('Assertion failed');
        }
        const docgenTemplateTags = yield exports.client.docgenTemplate.getDocgenTemplateTagsV2025R0(fetchedDocgenTemplate.file.id);
        const docgenTemplateJobs = yield exports.client.docgenTemplate.getDocgenTemplateJobByIdV2025R0(fetchedDocgenTemplate.file.id);
        if (!(docgenTemplateJobs.entries.length == 0)) {
            throw new Error('Assertion failed');
        }
        yield exports.client.docgenTemplate.deleteDocgenTemplateByIdV2025R0(createdDocgenTemplate.file.id);
        yield exports.client.files.deleteFileById(file.id);
    });
});
//# sourceMappingURL=docgenTemplate.generated.test.js.map