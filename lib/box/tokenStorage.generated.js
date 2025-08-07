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
exports.InMemoryTokenStorage = void 0;
class InMemoryTokenStorage {
    constructor(fields) {
        this.token = void 0;
        if (fields.token !== undefined) {
            this.token = fields.token;
        }
    }
    /**
     * @param {AccessToken} token
     * @returns {Promise<undefined>}
     */
    store(token) {
        return __awaiter(this, void 0, void 0, function* () {
            this.token = token;
            return void 0;
        });
    }
    /**
     * @returns {Promise<undefined | AccessToken>}
     */
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.token;
        });
    }
    /**
     * @returns {Promise<undefined>}
     */
    clear() {
        return __awaiter(this, void 0, void 0, function* () {
            this.token = void 0;
            return void 0;
        });
    }
}
exports.InMemoryTokenStorage = InMemoryTokenStorage;
//# sourceMappingURL=tokenStorage.generated.js.map