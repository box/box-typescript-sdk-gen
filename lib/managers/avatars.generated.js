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
exports.AvatarsManager = exports.DeleteUserAvatarHeadersArg = exports.CreateUserAvatarHeadersArg = exports.GetUserAvatarHeadersArg = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const utils_js_1 = require("../utils.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
class GetUserAvatarHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.GetUserAvatarHeadersArg = GetUserAvatarHeadersArg;
class CreateUserAvatarHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.CreateUserAvatarHeadersArg = CreateUserAvatarHeadersArg;
class DeleteUserAvatarHeadersArg {
    constructor(fields) {
        this.extraHeaders = {};
        Object.assign(this, fields);
    }
}
exports.DeleteUserAvatarHeadersArg = DeleteUserAvatarHeadersArg;
class AvatarsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getUserAvatar(userId, headers = new GetUserAvatarHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/users/", userId, "/avatar"), { method: "GET", headers: headersMap, responseFormat: "binary", auth: this.auth, networkSession: this.networkSession });
            return response.content;
        });
    }
    createUserAvatar(userId, requestBody, headers = new CreateUserAvatarHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/users/", userId, "/avatar"), { method: "POST", headers: headersMap, multipartData: [{ partName: "pic", fileStream: requestBody.pic, contentType: requestBody.picContentType, fileName: requestBody.picFileName }], contentType: "multipart/form-data", responseFormat: "json", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.deserializeUserAvatar)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteUserAvatar(userId, headers = new DeleteUserAvatarHeadersArg({})) {
        return __awaiter(this, void 0, void 0, function* () {
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/users/", userId, "/avatar"), { method: "DELETE", headers: headersMap, responseFormat: void 0, auth: this.auth, networkSession: this.networkSession });
            return void 0;
        });
    }
}
exports.AvatarsManager = AvatarsManager;
//# sourceMappingURL=avatars.generated.js.map