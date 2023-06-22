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
const utils_js_1 = require("../utils.js");
const utils_js_2 = require("../utils.js");
const utils_js_3 = require("../utils.js");
const commons_generated_js_1 = require("./commons.generated.js");
const commons_generated_js_2 = require("./commons.generated.js");
const client_generated_js_1 = require("../client.generated.js");
const jwtAuth_js_1 = require("../jwtAuth.js");
const jwtAuth_js_2 = require("../jwtAuth.js");
const jwtConfig = jwtAuth_js_2.JwtConfig.fromConfigJsonString((0, utils_js_1.decodeBase64)((0, utils_js_2.getEnvVar)("JWT_CONFIG_BASE_64")));
const auth = new jwtAuth_js_1.JwtAuth({ config: jwtConfig });
const client = new client_generated_js_1.Client({ auth: auth });
test("test_create_get_cancel_and_list_sign_request", function test_create_get_cancel_and_list_sign_request() {
    return __awaiter(this, void 0, void 0, function* () {
        const signerEmail = "".concat((0, utils_js_3.getUuid)(), "@box.com");
        const fileToSign = yield (0, commons_generated_js_1.uploadNewFile)();
        const destinationFolder = yield (0, commons_generated_js_2.createNewFolder)();
        const createdSignRequest = yield client.signRequests.createSignRequest({ signers: [{ email: signerEmail }], parentFolder: { id: destinationFolder.id, type: "folder" }, sourceFiles: [{ id: fileToSign.id, type: "file" }] });
        if (!(createdSignRequest.signFiles.files[0].name == fileToSign.name)) {
            throw "Assertion failed";
        }
        if (!(createdSignRequest.signers[1].email == signerEmail)) {
            throw "Assertion failed";
        }
        if (!(createdSignRequest.parentFolder.id == destinationFolder.id)) {
            throw "Assertion failed";
        }
        const newSignRequest = yield client.signRequests.getSignRequestById(createdSignRequest.id);
        if (!(newSignRequest.signFiles.files[0].name == fileToSign.name)) {
            throw "Assertion failed";
        }
        if (!(newSignRequest.signers[1].email == signerEmail)) {
            throw "Assertion failed";
        }
        if (!(newSignRequest.parentFolder.id == destinationFolder.id)) {
            throw "Assertion failed";
        }
        const cancelledSignRequest = yield client.signRequests.cancelSignRequest(createdSignRequest.id);
        if (!(cancelledSignRequest.status == "cancelled")) {
            throw "Assertion failed";
        }
        const signRequests = yield client.signRequests.getSignRequests();
        if (!(signRequests.entries[0].type == "sign-request")) {
            throw "Assertion failed";
        }
        yield client.folders.deleteFolderById(destinationFolder.id, { recursive: true });
        yield client.files.deleteFileById(fileToSign.id);
    });
});
//# sourceMappingURL=signRequests.generated.test.js.map