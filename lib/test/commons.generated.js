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
exports.getCcgAuth = getCcgAuth;
exports.getJwtAuth = getJwtAuth;
exports.getDefaultClientWithUserSubject = getDefaultClientWithUserSubject;
exports.getDefaultClient = getDefaultClient;
exports.createNewFolder = createNewFolder;
exports.uploadNewFile = uploadNewFile;
exports.getOrCreateTermsOfServices = getOrCreateTermsOfServices;
exports.getOrCreateClassification = getOrCreateClassification;
exports.getOrCreateClassificationTemplate = getOrCreateClassificationTemplate;
exports.getOrCreateShieldInformationBarrier = getOrCreateShieldInformationBarrier;
const classifications_generated_js_1 = require("../managers/classifications.generated.js");
const classifications_generated_js_2 = require("../managers/classifications.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const utils_js_3 = require("../internal/utils.js");
const utils_js_4 = require("../internal/utils.js");
const client_generated_js_1 = require("../client.generated.js");
const classificationTemplate_generated_js_1 = require("../schemas/classificationTemplate.generated.js");
const ccgAuth_generated_js_1 = require("../box/ccgAuth.generated.js");
const ccgAuth_generated_js_2 = require("../box/ccgAuth.generated.js");
const utils_js_5 = require("../internal/utils.js");
const jwtAuth_generated_js_1 = require("../box/jwtAuth.generated.js");
const jwtAuth_generated_js_2 = require("../box/jwtAuth.generated.js");
const utils_js_6 = require("../internal/utils.js");
function getCcgAuth() {
    const ccgConfig = new ccgAuth_generated_js_2.CcgConfig({
        clientId: (0, utils_js_2.getEnvVar)('CLIENT_ID'),
        clientSecret: (0, utils_js_2.getEnvVar)('CLIENT_SECRET'),
        enterpriseId: (0, utils_js_2.getEnvVar)('ENTERPRISE_ID'),
    });
    const auth = new ccgAuth_generated_js_1.BoxCcgAuth({ config: ccgConfig });
    return auth;
}
function getJwtAuth() {
    const jwtConfig = jwtAuth_generated_js_2.JwtConfig.fromConfigJsonString((0, utils_js_1.decodeBase64)((0, utils_js_2.getEnvVar)('JWT_CONFIG_BASE_64')));
    const auth = new jwtAuth_generated_js_1.BoxJwtAuth({ config: jwtConfig });
    return auth;
}
function getDefaultClientWithUserSubject(userId) {
    if ((0, utils_js_5.isBrowser)()) {
        const ccgAuth = getCcgAuth();
        const ccgAuthUser = ccgAuth.withUserSubject(userId);
        return new client_generated_js_1.BoxClient({ auth: ccgAuthUser });
    }
    const auth = getJwtAuth();
    const authUser = auth.withUserSubject(userId);
    return new client_generated_js_1.BoxClient({ auth: authUser });
}
function getDefaultClient() {
    const client = new client_generated_js_1.BoxClient({
        auth: (0, utils_js_5.isBrowser)() ? getCcgAuth() : getJwtAuth(),
    });
    return client;
}
function createNewFolder() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = getDefaultClient();
        const newFolderName = (0, utils_js_3.getUuid)();
        return yield client.folders.createFolder({
            name: newFolderName,
            parent: { id: '0' },
        });
    });
}
function uploadNewFile() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = getDefaultClient();
        const newFileName = ''.concat((0, utils_js_3.getUuid)(), '.pdf');
        const fileContentStream = (0, utils_js_4.generateByteStream)(1024 * 1024);
        const uploadedFiles = yield client.uploads.uploadFile({
            attributes: {
                name: newFileName,
                parent: { id: '0' },
            },
            file: fileContentStream,
        });
        return uploadedFiles.entries[0];
    });
}
function getOrCreateTermsOfServices() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = getDefaultClient();
        const tos = yield client.termsOfServices.getTermsOfService();
        const numberOfTos = tos.entries.length;
        if (numberOfTos >= 1) {
            const firstTos = tos.entries[0];
            if ((0, utils_js_6.toString)(firstTos.tosType) == 'managed') {
                return firstTos;
            }
        }
        if (numberOfTos >= 2) {
            const secondTos = tos.entries[1];
            if ((0, utils_js_6.toString)(secondTos.tosType) == 'managed') {
                return secondTos;
            }
        }
        return yield client.termsOfServices.createTermsOfService({
            status: 'disabled',
            tosType: 'managed',
            text: 'Test TOS',
        });
    });
}
function getOrCreateClassification(classificationTemplateInput) {
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
        const client = getDefaultClient();
        const classifications = classificationTemplate.fields[0].options;
        const currentNumberOfClassifications = classifications.length;
        if (currentNumberOfClassifications == 0) {
            const classificationTemplateWithNewClassification = yield client.classifications.addClassification([
                new classifications_generated_js_1.AddClassificationRequestBody({
                    data: {
                        key: (0, utils_js_3.getUuid)(),
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
    });
}
function getOrCreateClassificationTemplate() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = getDefaultClient();
        try {
            return yield client.classifications.getClassificationTemplate();
        }
        catch (error) {
            return yield client.classifications.createClassificationTemplate({
                fields: [
                    new classifications_generated_js_2.CreateClassificationTemplateRequestBodyFieldsField({ options: [] }),
                ],
            });
        }
        finally {
        }
    });
}
function getOrCreateShieldInformationBarrier(clientInput, enterpriseId) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new client_generated_js_1.BoxClient({
            auth: clientInput.auth,
            networkSession: clientInput.networkSession,
        });
        const barriers = yield client.shieldInformationBarriers.getShieldInformationBarriers();
        const numberOfBarriers = barriers.entries.length;
        if (numberOfBarriers == 0) {
            return yield client.shieldInformationBarriers.createShieldInformationBarrier({
                enterprise: { id: enterpriseId },
            });
        }
        return barriers.entries[numberOfBarriers - 1];
    });
}
//# sourceMappingURL=commons.generated.js.map