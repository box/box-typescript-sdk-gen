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
const classifications_generated_js_1 = require("../managers/classifications.generated.js");
const utils_js_1 = require("../internal/utils.js");
const commons_generated_js_1 = require("./commons.generated.js");
const commons_generated_js_2 = require("./commons.generated.js");
const commons_generated_js_3 = require("./commons.generated.js");
exports.client = (0, commons_generated_js_1.getDefaultClient)();
test('testClassifications', function testClassifications() {
    return __awaiter(this, void 0, void 0, function* () {
        const classificationTemplate = yield (0, commons_generated_js_2.getOrCreateClassificationTemplate)();
        const classification = yield (0, commons_generated_js_3.getOrCreateClassification)(classificationTemplate);
        if (!!(classification.key == '')) {
            throw new Error('Assertion failed');
        }
        if (!!(classification.staticConfig.classification.colorId == 100)) {
            throw new Error('Assertion failed');
        }
        if (!!(classification.staticConfig.classification.classificationDefinition ==
            '')) {
            throw new Error('Assertion failed');
        }
        const updatedClassificationName = (0, utils_js_1.getUuid)();
        const updatedClassificationDescription = (0, utils_js_1.getUuid)();
        const classificationTemplateWithUpdatedClassification = yield exports.client.classifications.updateClassification([
            new classifications_generated_js_1.UpdateClassificationRequestBody({
                enumOptionKey: classification.key,
                data: {
                    key: updatedClassificationName,
                    staticConfig: {
                        classification: {
                            colorId: 2,
                            classificationDefinition: updatedClassificationDescription,
                        },
                    },
                },
            }),
        ]);
        const updatedClassifications = classificationTemplateWithUpdatedClassification.fields[0].options;
        const updatedClassification = updatedClassifications[0];
        if (!(updatedClassification.key == updatedClassificationName)) {
            throw new Error('Assertion failed');
        }
        if (!(updatedClassification.staticConfig.classification.colorId == 2)) {
            throw new Error('Assertion failed');
        }
        if (!(updatedClassification.staticConfig.classification
            .classificationDefinition == updatedClassificationDescription)) {
            throw new Error('Assertion failed');
        }
    });
});
//# sourceMappingURL=classifications.generated.test.js.map