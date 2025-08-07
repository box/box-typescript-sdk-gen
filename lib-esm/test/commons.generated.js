import { AddClassificationRequestBody } from '../managers/classifications.generated.js';
import { CreateClassificationTemplateRequestBodyFieldsField } from '../managers/classifications.generated.js';
import { decodeBase64 } from '../internal/utils.js';
import { getEnvVar } from '../internal/utils.js';
import { getUuid } from '../internal/utils.js';
import { generateByteStream } from '../internal/utils.js';
import { BoxClient } from '../client.generated.js';
import { ClassificationTemplate } from '../schemas/classificationTemplate.generated.js';
import { BoxCcgAuth } from '../box/ccgAuth.generated.js';
import { CcgConfig } from '../box/ccgAuth.generated.js';
import { isBrowser } from '../internal/utils.js';
import { BoxJwtAuth } from '../box/jwtAuth.generated.js';
import { JwtConfig } from '../box/jwtAuth.generated.js';
import { toString } from '../internal/utils.js';
export function getCcgAuth() {
    const ccgConfig = new CcgConfig({
        clientId: getEnvVar('CLIENT_ID'),
        clientSecret: getEnvVar('CLIENT_SECRET'),
        enterpriseId: getEnvVar('ENTERPRISE_ID'),
    });
    const auth = new BoxCcgAuth({ config: ccgConfig });
    return auth;
}
export function getJwtAuth() {
    const jwtConfig = JwtConfig.fromConfigJsonString(decodeBase64(getEnvVar('JWT_CONFIG_BASE_64')));
    const auth = new BoxJwtAuth({ config: jwtConfig });
    return auth;
}
export function getDefaultClientWithUserSubject(userId) {
    if (isBrowser()) {
        const ccgAuth = getCcgAuth();
        const ccgAuthUser = ccgAuth.withUserSubject(userId);
        return new BoxClient({ auth: ccgAuthUser });
    }
    const auth = getJwtAuth();
    const authUser = auth.withUserSubject(userId);
    return new BoxClient({ auth: authUser });
}
export function getDefaultClient() {
    const client = new BoxClient({
        auth: isBrowser() ? getCcgAuth() : getJwtAuth(),
    });
    return client;
}
export async function createNewFolder() {
    const client = getDefaultClient();
    const newFolderName = getUuid();
    return await client.folders.createFolder({
        name: newFolderName,
        parent: { id: '0' },
    });
}
export async function uploadNewFile() {
    const client = getDefaultClient();
    const newFileName = ''.concat(getUuid(), '.pdf');
    const fileContentStream = generateByteStream(1024 * 1024);
    const uploadedFiles = await client.uploads.uploadFile({
        attributes: {
            name: newFileName,
            parent: { id: '0' },
        },
        file: fileContentStream,
    });
    return uploadedFiles.entries[0];
}
export async function getOrCreateTermsOfServices() {
    const client = getDefaultClient();
    const tos = await client.termsOfServices.getTermsOfService();
    const numberOfTos = tos.entries.length;
    if (numberOfTos >= 1) {
        const firstTos = tos.entries[0];
        if (toString(firstTos.tosType) == 'managed') {
            return firstTos;
        }
    }
    if (numberOfTos >= 2) {
        const secondTos = tos.entries[1];
        if (toString(secondTos.tosType) == 'managed') {
            return secondTos;
        }
    }
    return await client.termsOfServices.createTermsOfService({
        status: 'disabled',
        tosType: 'managed',
        text: 'Test TOS',
    });
}
export async function getOrCreateClassification(classificationTemplateInput) {
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
    const client = getDefaultClient();
    const classifications = classificationTemplate.fields[0].options;
    const currentNumberOfClassifications = classifications.length;
    if (currentNumberOfClassifications == 0) {
        const classificationTemplateWithNewClassification = await client.classifications.addClassification([
            new AddClassificationRequestBody({
                data: {
                    key: getUuid(),
                    staticConfig: {
                        classification: {
                            colorId: 3,
                            classificationDefinition: 'Some description',
                        },
                    },
                },
            }),
        ]);
        return classificationTemplateWithNewClassification.fields[0].options[0];
    }
    return classifications[0];
}
export async function getOrCreateClassificationTemplate() {
    const client = getDefaultClient();
    try {
        return await client.classifications.getClassificationTemplate();
    }
    catch (error) {
        return await client.classifications.createClassificationTemplate({
            fields: [
                new CreateClassificationTemplateRequestBodyFieldsField({ options: [] }),
            ],
        });
    }
    finally {
    }
}
export async function getOrCreateShieldInformationBarrier(clientInput, enterpriseId) {
    const client = new BoxClient({
        auth: clientInput.auth,
        networkSession: clientInput.networkSession,
    });
    const barriers = await client.shieldInformationBarriers.getShieldInformationBarriers();
    const numberOfBarriers = barriers.entries.length;
    if (numberOfBarriers == 0) {
        return await client.shieldInformationBarriers.createShieldInformationBarrier({
            enterprise: { id: enterpriseId },
        });
    }
    return barriers.entries[numberOfBarriers - 1];
}
//# sourceMappingURL=commons.generated.js.map