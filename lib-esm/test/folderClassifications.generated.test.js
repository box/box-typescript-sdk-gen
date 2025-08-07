import { AddClassificationRequestBody } from '../managers/classifications.generated.js';
import { UpdateClassificationOnFolderRequestBody } from '../managers/folderClassifications.generated.js';
import { getUuid } from '../internal/utils.js';
import { getDefaultClient } from './commons.generated.js';
import { createNewFolder } from './commons.generated.js';
import { getOrCreateClassificationTemplate } from './commons.generated.js';
import { getOrCreateClassification } from './commons.generated.js';
import { ClassificationTemplate } from '../schemas/classificationTemplate.generated.js';
export const client = getDefaultClient();
export async function getOrCreateSecondClassification(classificationTemplateInput) {
    const classificationTemplate = new ClassificationTemplate({
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
        const classificationTemplateWithNewClassification = await client.classifications.addClassification([
            new AddClassificationRequestBody({
                data: {
                    key: getUuid(),
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
}
test('testFolderClassifications', async function testFolderClassifications() {
    const classificationTemplate = await getOrCreateClassificationTemplate();
    const classification = await getOrCreateClassification(classificationTemplate);
    const folder = await createNewFolder();
    await expect(async () => {
        await client.folderClassifications.getClassificationOnFolder(folder.id);
    }).rejects.toThrow();
    const createdFolderClassification = await client.folderClassifications.addClassificationToFolder(folder.id, {
        requestBody: {
            boxSecurityClassificationKey: classification.key,
        },
    });
    if (!(createdFolderClassification.boxSecurityClassificationKey ==
        classification.key)) {
        throw new Error('Assertion failed');
    }
    const folderClassification = await client.folderClassifications.getClassificationOnFolder(folder.id);
    if (!(folderClassification.boxSecurityClassificationKey == classification.key)) {
        throw new Error('Assertion failed');
    }
    const secondClassification = await getOrCreateSecondClassification(classificationTemplate);
    const updatedFolderClassification = await client.folderClassifications.updateClassificationOnFolder(folder.id, [
        new UpdateClassificationOnFolderRequestBody({
            value: secondClassification.key,
        }),
    ]);
    if (!(updatedFolderClassification.boxSecurityClassificationKey ==
        secondClassification.key)) {
        throw new Error('Assertion failed');
    }
    await client.folderClassifications.deleteClassificationFromFolder(folder.id);
    await expect(async () => {
        await client.folderClassifications.getClassificationOnFolder(folder.id);
    }).rejects.toThrow();
    await client.folders.deleteFolderById(folder.id);
});
//# sourceMappingURL=folderClassifications.generated.test.js.map