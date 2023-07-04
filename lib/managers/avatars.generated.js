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
exports.AvatarsManager = void 0;
const schemas_generated_js_1 = require("../schemas.generated.js");
const fetch_js_1 = require("../fetch.js");
const json_js_1 = require("../json.js");
class AvatarsManager {
    constructor(fields) {
        Object.assign(this, fields);
    }
    getUserAvatar(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/users/", userId, "/avatar"), { method: "GET", auth: this.auth, networkSession: this.networkSession });
            return response.content;
        });
    }
    createUserAvatar(userId, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/users/", userId, "/avatar"), { method: "POST", multipartData: [{ partName: "pic", fileStream: requestBody.pic }], contentType: "multipart/form-data", auth: this.auth, networkSession: this.networkSession });
            return (0, schemas_generated_js_1.newDeserializeUserAvatar)((0, json_js_1.deserializeJson)(response.text));
        });
    }
    deleteUserAvatar(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, fetch_js_1.fetch)("".concat("https://api.box.com/2.0/users/", userId, "/avatar"), { method: "DELETE", auth: this.auth, networkSession: this.networkSession });
            return response.content;
        });
    }
}
exports.AvatarsManager = AvatarsManager;
//# sourceMappingURL=avatars.generated.js.map