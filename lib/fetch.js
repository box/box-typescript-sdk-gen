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
exports.fetch = exports.xBoxUaHeader = exports.userAgentHeader = void 0;
const crypto_1 = require("crypto");
const form_data_1 = __importDefault(require("form-data"));
const node_fetch_1 = __importDefault(require("node-fetch"));
const stream_1 = require("stream");
const sdkVersion = '0.1.0';
exports.userAgentHeader = `Box JavaScript generated SDK v${sdkVersion} (Node ${process.version})`;
exports.xBoxUaHeader = constructBoxUAHeader();
function createFetchOptions(options) {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function* () {
        const { method = 'GET', headers = {}, params = {}, body } = options;
        let fetchOptions = {};
        let contentType = (_a = options.contentType) !== null && _a !== void 0 ? _a : 'application/json';
        let requestBody = body;
        if (options.multipartData) {
            const formData = new form_data_1.default();
            for (const item of options.multipartData) {
                if (item.fileStream) {
                    let buffer;
                    if (item.fileStream instanceof stream_1.Readable) {
                        // We need to read the stream to calculate the MD5 hash
                        buffer = yield readStream(item.fileStream);
                    }
                    else {
                        // We already have the buffer or input is a string
                        buffer = item.fileStream;
                    }
                    headers['content-md5'] = calculateMD5Hash(buffer);
                    formData.append(item.partName, buffer, {
                        filename: (_b = item.fileName) !== null && _b !== void 0 ? _b : 'file',
                        contentType: (_c = item.contentType) !== null && _c !== void 0 ? _c : 'application/octet-stream',
                    });
                }
                else if (item.body) {
                    formData.append(item.partName, item.body);
                }
                else {
                    throw new Error('Multipart item must have either body or fileStream');
                }
            }
            contentType = `multipart/form-data; boundary=${formData.getBoundary()}`;
            requestBody = formData;
        }
        fetchOptions = {
            method,
            headers: Object.assign(Object.assign(Object.assign({ 'Content-Type': contentType }, Object.fromEntries(Object.entries(params).filter((entry) => typeof entry[1] === 'string'))), (options.auth && {
                Authorization: `Bearer ${yield options.auth.retrieveToken(options.networkSession)}`,
            })), { 'User-Agent': exports.userAgentHeader, 'X-Box-UA': exports.xBoxUaHeader }),
            body: requestBody,
        };
        return fetchOptions;
    });
}
function fetch(resource, options) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const { params = {} } = options;
        let fetchOptions = yield createFetchOptions(options);
        const response = yield (0, node_fetch_1.default)(''.concat(resource, Object.keys(params).length === 0 || resource.endsWith('?') ? '' : '?', new URLSearchParams(Object.fromEntries(Object.entries(params)
            .map(([key, value]) => {
            if (typeof value === 'string' || value == null) {
                return [key, value];
            }
            return [key, String(value)];
        })
            .filter((entry) => typeof entry[1] === 'string'))).toString()), fetchOptions);
        if (!response.ok) {
            let responseBody = yield response.text();
            if ((_a = response.headers.get('content-type')) === null || _a === void 0 ? void 0 : _a.startsWith('application/json')) {
                try {
                    responseBody = JSON.stringify(JSON.parse(responseBody), null, 2);
                }
                catch (e) {
                    // ignore
                }
            }
            throw new Error(`Request failed, status code ${response.status}: ${response.statusText}\n
      ${responseBody}`);
        }
        const responseBytesBuffer = yield response.buffer();
        return {
            status: response.status,
            text: new TextDecoder().decode(responseBytesBuffer),
            content: responseBytesBuffer,
        };
    });
}
exports.fetch = fetch;
function calculateMD5Hash(data) {
    /**
     * Calculate the SHA1 hash of the data
     */
    return (0, crypto_1.createHash)('sha1').update(data).digest('hex');
}
function readStream(fileStream) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            const chunks = [];
            fileStream.on('data', (chunk) => chunks.push(chunk));
            fileStream.on('end', () => {
                resolve(Buffer.concat(chunks));
            });
            fileStream.on('error', (err) => reject(err));
        });
    });
}
function constructBoxUAHeader() {
    const analyticsIdentifiers = {
        agent: `box-javascript-generated-sdk/${sdkVersion}`,
        env: `Node/${process.version.replace('v', '')}`,
    };
    return Object.keys(analyticsIdentifiers)
        .map((k) => `${k}=${analyticsIdentifiers[k]}`)
        .join('; ');
}
//# sourceMappingURL=fetch.js.map