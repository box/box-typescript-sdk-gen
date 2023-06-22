import { FolderBaseTypeField } from "../schemas.generated.js";
import { FileBaseTypeField } from "../schemas.generated.js";
import { DeleteFolderByIdOptionsArg } from "../managers/folders.generated.js";
import { decodeBase64 } from "../utils.js";
import { getEnvVar } from "../utils.js";
import { getUuid } from "../utils.js";
import { uploadNewFile } from "./commons.generated.js";
import { createNewFolder } from "./commons.generated.js";
import { SignRequestCreateRequest } from "../schemas.generated.js";
import { SignRequestCreateSigner } from "../schemas.generated.js";
import { FolderMini } from "../schemas.generated.js";
import { FileBase } from "../schemas.generated.js";
import { Client } from "../client.generated.js";
import { JwtAuth } from "../jwtAuth.js";
import { JwtConfig } from "../jwtAuth.js";
const jwtConfig: any = JwtConfig.fromConfigJsonString(decodeBase64(getEnvVar("JWT_CONFIG_BASE_64")));
const auth: JwtAuth = new JwtAuth({ config: jwtConfig });
const client: Client = new Client({ auth: auth });
test("test_create_get_cancel_and_list_sign_request", async function test_create_get_cancel_and_list_sign_request(): Promise<any> {
    const signerEmail: string = "".concat(getUuid(), "@box.com") as string;
    const fileToSign: any = await uploadNewFile();
    const destinationFolder: any = await createNewFolder();
    const createdSignRequest: any = await client.signRequests.createSignRequest({ signers: [{ email: signerEmail } satisfies SignRequestCreateSigner], parentFolder: { id: destinationFolder.id, type: "folder" as FolderBaseTypeField } satisfies FolderMini, sourceFiles: [{ id: fileToSign.id, type: "file" as FileBaseTypeField } satisfies FileBase] } satisfies SignRequestCreateRequest);
    if (!(createdSignRequest.signFiles.files[0].name == fileToSign.name)) {
        throw "Assertion failed";
    }
    if (!(createdSignRequest.signers[1].email == signerEmail)) {
        throw "Assertion failed";
    }
    if (!(createdSignRequest.parentFolder.id == destinationFolder.id)) {
        throw "Assertion failed";
    }
    const newSignRequest: any = await client.signRequests.getSignRequestById(createdSignRequest.id);
    if (!(newSignRequest.signFiles.files[0].name == fileToSign.name)) {
        throw "Assertion failed";
    }
    if (!(newSignRequest.signers[1].email == signerEmail)) {
        throw "Assertion failed";
    }
    if (!(newSignRequest.parentFolder.id == destinationFolder.id)) {
        throw "Assertion failed";
    }
    const cancelledSignRequest: any = await client.signRequests.cancelSignRequest(createdSignRequest.id);
    if (!(cancelledSignRequest.status == "cancelled")) {
        throw "Assertion failed";
    }
    const signRequests: any = await client.signRequests.getSignRequests();
    if (!(signRequests.entries[0].type == "sign-request")) {
        throw "Assertion failed";
    }
    await client.folders.deleteFolderById(destinationFolder.id, { recursive: true } satisfies DeleteFolderByIdOptionsArg)
    await client.files.deleteFileById(fileToSign.id)
});
export {};
