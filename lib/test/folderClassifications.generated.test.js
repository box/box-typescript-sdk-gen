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
exports.getOrCreateSecondClassification = getOrCreateSecondClassification;
const classifications_generated_js_1 = require("../managers/classifications.generated.js");
const folderClassifications_generated_js_1 = require("../managers/folderClassifications.generated.js");
const utils_js_1 = require("../internal/utils.js");
const commons_generated_js_1 = require("./commons.generated.js");
const commons_generated_js_2 = require("./commons.generated.js");
const commons_generated_js_3 = require("./commons.generated.js");
const commons_generated_js_4 = require("./commons.generated.js");
const classificationTemplate_generated_js_1 = require("../schemas/classificationTemplate.generated.js");
exports.client = (0, commons_generated_js_1.getDefaultClient)();
function getOrCreateSecondClassification(classificationTemplateInput) {
    return __awaiter(this, void 0, void 0, function* () {
        const classificationTemplate = new classificationTemplate_generated_js_1.ClassificationTemplate({
            id: classificationTemplateInput.id,
            type: classificationTemplateInput.type,
            scope: classificationTemplateInput.scope,
            templateKey: classificationTemplateInput.templateKey,
            displayName: classificationTemplateInput.displayName,
            hidden: classificationTemplateInput.hidden,
            copyInstanceOnItemCopy: classificationTemplateInput.copyInstanceOnItemCopy,
            fields: classificationTemplateInput.fields,
        });
        const classifications = classificationTemplate.fields[0].options;
        const currentNumberOfClassifications = classifications.length;
        if (currentNumberOfClassifications == 1) {
            const classificationTemplateWithNewClassification = yield exports.client.classifications.addClassification([
                new classifications_generated_js_1.AddClassificationRequestBody({
                    data: {
                        key: (0, utils_js_1.getUuid)(),
                        staticConfig: {
                            classification: {
                                colorId: 4,
                                classificationDefinition: 'Other description',
                            },
                        },
                    },
                }),
            ]);
            return classificationTemplateWithNewClassification.fields[0].options[1];
        }
        return classifications[1];
    });
}
test('testFolderClassifications', function testFolderClassifications() {
    return __awaiter(this, void 0, void 0, function* () {
        const classificationTemplate = yield (0, commons_generated_js_3.getOrCreateClassificationTemplate)();
        const classification = yield (0, commons_generated_js_4.getOrCreateClassification)(classificationTemplate);
        const folder = yield (0, commons_generated_js_2.createNewFolder)();
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield exports.client.folderClassifications.getClassificationOnFolder(folder.id);
        })).rejects.toThrow();
        const createdFolderClassification = yield exports.client.folderClassifications.addClassificationToFolder(folder.id, {
            requestBody: {
                boxSecurityClassificationKey: classification.key,
            },
        });
        if (!(createdFolderClassification.boxSecurityClassificationKey ==
            classification.key)) {
            throw new Error('Assertion failed');
        }
        const folderClassification = yield exports.client.folderClassifications.getClassificationOnFolder(folder.id);
        if (!(folderClassification.boxSecurityClassificationKey == classification.key)) {
            throw new Error('Assertion failed');
        }
        const secondClassification = yield getOrCreateSecondClassification(classificationTemplate);
        const updatedFolderClassification = yield exports.client.folderClassifications.updateClassificationOnFolder(folder.id, [
            new folderClassifications_generated_js_1.UpdateClassificationOnFolderRequestBody({
                value: secondClassification.key,
            }),
        ]);
        if (!(updatedFolderClassification.boxSecurityClassificationKey ==
            secondClassification.key)) {
            throw new Error('Assertion failed');
        }
        yield exports.client.folderClassifications.deleteClassificationFromFolder(folder.id);
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield exports.client.folderClassifications.getClassificationOnFolder(folder.id);
        })).rejects.toThrow();
        yield exports.client.folders.deleteFolderById(folder.id);
    });
});
//# sourceMappingURL=folderClassifications.generated.test.js.map