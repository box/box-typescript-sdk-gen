import { sanitizeMap } from './utils.js';
import { sanitizeSerializedData } from '../serialization/json.js';
export class DataSanitizer {
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
        return sanitizeMap(headers, this.keysToSanitize);
    }
    /**
     * @param {SerializedData} body
     * @returns {SerializedData}
     */
    sanitizeBody(body) {
        return sanitizeSerializedData(body, this.keysToSanitize);
    }
}
//# sourceMappingURL=logging.generated.js.map