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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetch = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
function fetch(resource, options) {
    return __awaiter(this, void 0, void 0, function* () {
        const { method = 'GET', headers = {}, params = {}, body } = options;
        const response = yield (0, node_fetch_1.default)(''.concat(resource, Object.keys(params).length === 0 || resource.endsWith('?') ? '' : '?', new URLSearchParams(Object.fromEntries(Object.entries(params)
            .map(([key, value]) => {
            if (typeof value === 'string' || value == null) {
                return [key, value];
            }
            return [key, String(value)];
        })
            .filter((entry) => typeof entry[1] === 'string'))).toString()), {
            method,
            headers: Object.assign(Object.assign({ 'Content-Type': 'application/json' }, Object.fromEntries(Object.entries(params).filter((entry) => typeof entry[1] === 'string'))), (options.auth && {
                Authorization: `Bearer ${yield options.auth.retrieveToken()}`,
            })),
            body,
        });
        const responseBytesBuffer = yield response.arrayBuffer();
        return {
            status: response.status,
            text: new TextDecoder().decode(responseBytesBuffer),
            content: responseBytesBuffer,
        };
    });
}
exports.fetch = fetch;
//# sourceMappingURL=fetch.js.map