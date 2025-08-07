export class InMemoryTokenStorage {
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
    async store(token) {
        this.token = token;
        return void 0;
    }
    /**
     * @returns {Promise<undefined | AccessToken>}
     */
    async get() {
        return this.token;
    }
    /**
     * @returns {Promise<undefined>}
     */
    async clear() {
        this.token = void 0;
        return void 0;
    }
}
//# sourceMappingURL=tokenStorage.generated.js.map