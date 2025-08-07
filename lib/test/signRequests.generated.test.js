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
const folderMini_generated_js_1 = require("../schemas/folderMini.generated.js");
const fileBase_generated_js_1 = require("../schemas/fileBase.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const utils_js_3 = require("../internal/utils.js");
const commons_generated_js_1 = require("./commons.generated.js");
const commons_generated_js_2 = require("./commons.generated.js");
const commons_generated_js_3 = require("./commons.generated.js");
const utils_js_4 = require("../internal/utils.js");
exports.client = (0, commons_generated_js_3.getDefaultClient)();
test('testCreateGetCancelAndListSignRequest', function testCreateGetCancelAndListSignRequest() {
    return __awaiter(this, void 0, void 0, function* () {
        const signerEmail = ''.concat((0, utils_js_1.getUuid)(), '@box.com');
        const fileToSign = yield (0, commons_generated_js_1.uploadNewFile)();
        const destinationFolder = yield (0, commons_generated_js_2.createNewFolder)();
        const createdSignRequest = yield exports.client.signRequests.createSignRequest({
            signers: [
                {
                    email: signerEmail,
                    suppressNotifications: true,
                    declinedRedirectUrl: 'https://www.box.com',
                    embedUrlExternalUserId: '123',
                    isInPerson: false,
                    loginRequired: false,
                    password: 'password',
                    role: 'signer',
                },
            ],
            areRemindersEnabled: true,
            areTextSignaturesEnabled: true,
            daysValid: 30,
            declinedRedirectUrl: 'https://www.box.com',
            emailMessage: 'Please sign this document',
            emailSubject: 'Sign this document',
            externalId: '123',
            externalSystemName: 'BoxSignIntegration',
            isDocumentPreparationNeeded: false,
            name: 'Sign Request',
            parentFolder: new folderMini_generated_js_1.FolderMini({ id: destinationFolder.id }),
            redirectUrl: 'https://www.box.com',
            prefillTags: [
                {
                    dateValue: (0, utils_js_2.dateFromString)('2035-01-01'),
                    documentTagId: '0',
                },
            ],
            sourceFiles: [new fileBase_generated_js_1.FileBase({ id: fileToSign.id })],
        });
        if (!(createdSignRequest.areRemindersEnabled == true)) {
            throw new Error('Assertion failed');
        }
        if (!(createdSignRequest.areTextSignaturesEnabled == true)) {
            throw new Error('Assertion failed');
        }
        if (!(createdSignRequest.daysValid == 30)) {
            throw new Error('Assertion failed');
        }
        if (!(createdSignRequest.declinedRedirectUrl == 'https://www.box.com')) {
            throw new Error('Assertion failed');
        }
        if (!(createdSignRequest.emailMessage == 'Please sign this document')) {
            throw new Error('Assertion failed');
        }
        if (!(createdSignRequest.emailSubject == 'Sign this document')) {
            throw new Error('Assertion failed');
        }
        if (!(createdSignRequest.externalId == '123')) {
            throw new Error('Assertion failed');
        }
        if (!(createdSignRequest.externalSystemName == 'BoxSignIntegration')) {
            throw new Error('Assertion failed');
        }
        if (!(createdSignRequest.isDocumentPreparationNeeded == false)) {
            throw new Error('Assertion failed');
        }
        if (!(createdSignRequest.name == 'Sign Request.pdf')) {
            throw new Error('Assertion failed');
        }
        if (!(createdSignRequest.redirectUrl == 'https://www.box.com')) {
            throw new Error('Assertion failed');
        }
        if (!(createdSignRequest.signFiles.files[0].name == createdSignRequest.name)) {
            throw new Error('Assertion failed');
        }
        if (!(createdSignRequest.signers[1].email == signerEmail)) {
            throw new Error('Assertion failed');
        }
        if (!(createdSignRequest.signers[1].suppressNotifications == true)) {
            throw new Error('Assertion failed');
        }
        if (!(createdSignRequest.signers[1].declinedRedirectUrl ==
            'https://www.box.com')) {
            throw new Error('Assertion failed');
        }
        if (!(createdSignRequest.signers[1].embedUrlExternalUserId == '123')) {
            throw new Error('Assertion failed');
        }
        if (!(createdSignRequest.signers[1].isInPerson == false)) {
            throw new Error('Assertion failed');
        }
        if (!(createdSignRequest.signers[1].loginRequired == false)) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_4.toString)(createdSignRequest.signers[1].role) == 'signer')) {
            throw new Error('Assertion failed');
        }
        if (!(createdSignRequest.parentFolder.id == destinationFolder.id)) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_3.dateToString)(createdSignRequest.prefillTags[0].dateValue) ==
            '2035-01-01')) {
            throw new Error('Assertion failed');
        }
        const newSignRequest = yield exports.client.signRequests.getSignRequestById(createdSignRequest.id);
        if (!(newSignRequest.signFiles.files[0].name == createdSignRequest.name)) {
            throw new Error('Assertion failed');
        }
        if (!(newSignRequest.signers[1].email == signerEmail)) {
            throw new Error('Assertion failed');
        }
        if (!(newSignRequest.parentFolder.id == destinationFolder.id)) {
            throw new Error('Assertion failed');
        }
        const cancelledSignRequest = yield exports.client.signRequests.cancelSignRequest(createdSignRequest.id);
        if (!((0, utils_js_4.toString)(cancelledSignRequest.status) == 'cancelled')) {
            throw new Error('Assertion failed');
        }
        const signRequests = yield exports.client.signRequests.getSignRequests();
        if (!((0, utils_js_4.toString)(signRequests.entries[0].type) == 'sign-request')) {
            throw new Error('Assertion failed');
        }
        yield exports.client.folders.deleteFolderById(destinationFolder.id, {
            queryParams: { recursive: true },
        });
        yield exports.client.files.deleteFileById(fileToSign.id);
    });
});
test('testCreateSignRequestWithSignerGroupId', function testCreateSignRequestWithSignerGroupId() {
    return __awaiter(this, void 0, void 0, function* () {
        const signer1Email = ''.concat((0, utils_js_1.getUuid)(), '@box.com');
        const signer2Email = ''.concat((0, utils_js_1.getUuid)(), '@box.com');
        const fileToSign = yield (0, commons_generated_js_1.uploadNewFile)();
        const destinationFolder = yield (0, commons_generated_js_2.createNewFolder)();
        const createdSignRequest = yield exports.client.signRequests.createSignRequest({
            signers: [
                {
                    email: signer1Email,
                    signerGroupId: 'user',
                },
                {
                    email: signer2Email,
                    signerGroupId: 'user',
                },
            ],
            parentFolder: new folderMini_generated_js_1.FolderMini({ id: destinationFolder.id }),
            sourceFiles: [new fileBase_generated_js_1.FileBase({ id: fileToSign.id })],
        });
        if (!(createdSignRequest.signers.length == 3)) {
            throw new Error('Assertion failed');
        }
        if (!!(createdSignRequest.signers[1].signerGroupId == void 0)) {
            throw new Error('Assertion failed');
        }
        if (!(createdSignRequest.signers[1].signerGroupId ==
            createdSignRequest.signers[2].signerGroupId)) {
            throw new Error('Assertion failed');
        }
        yield exports.client.folders.deleteFolderById(destinationFolder.id, {
            queryParams: { recursive: true },
        });
        yield exports.client.files.deleteFileById(fileToSign.id);
    });
});
//# sourceMappingURL=signRequests.generated.test.js.map