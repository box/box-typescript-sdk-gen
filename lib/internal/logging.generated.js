"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataSanitizer = void 0;
const utils_js_1 = require("./utils.js");
const json_js_1 = require("../serialization/json.js");
class DataSanitizer {
    constructor(fields) {
        this.keysToSanitize = {
            ['authorization']: '',
            ['access_token']: '',
            ['refresh_token']: '',
            ['subject_token']: '',
            ['token']: '',
            ['client_id']: '',
            ['client_secret']: '',
            ['shared_link']: '',
            ['download_url']: '',
            ['jwt_private_key']: '',
            ['jwt_private_key_passphrase']: '',
            ['password']: '',
        };
    }
    /**
       * @param {{
          readonly [key: string]: string;
      }} headers
       * @returns {{
          readonly [key: string]: string;
      }}
       */
    sanitizeHeaders(headers) {
        return (0, utils_js_1.sanitizeMap)(headers, this.keysToSanitize);
    }
    /**
     * @param {SerializedData} body
     * @returns {SerializedData}
     */
    sanitizeBody(body) {
        return (0, json_js_1.sanitizeSerializedData)(body, this.keysToSanitize);
    }
}
exports.DataSanitizer = DataSanitizer;
//# sourceMappingURL=logging.generated.js.map