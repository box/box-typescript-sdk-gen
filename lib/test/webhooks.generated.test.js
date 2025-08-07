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
exports.client = void 0;
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const utils_js_3 = require("../internal/utils.js");
const utils_js_4 = require("../internal/utils.js");
const utils_js_5 = require("../internal/utils.js");
const utils_js_6 = require("../internal/utils.js");
const webhooks_generated_js_1 = require("../managers/webhooks.generated.js");
const commons_generated_js_1 = require("./commons.generated.js");
const utils_js_7 = require("../internal/utils.js");
exports.client = (0, commons_generated_js_1.getDefaultClient)();
test('testWebhooksCRUD', function testWebhooksCRUD() {
    return __awaiter(this, void 0, void 0, function* () {
        const folder = yield exports.client.folders.createFolder({
            name: (0, utils_js_1.getUuid)(),
            parent: { id: '0' },
        });
        const webhook = yield exports.client.webhooks.createWebhook({
            target: {
                id: folder.id,
                type: 'folder',
            },
            address: 'https://example.com/new-webhook',
            triggers: ['FILE.UPLOADED'],
        });
        if (!(webhook.target.id == folder.id)) {
            throw new Error('Assertion failed');
        }
        if (!((0, utils_js_7.toString)(webhook.target.type) == 'folder')) {
            throw new Error('Assertion failed');
        }
        if (!(webhook.triggers.length == ['FILE.UPLOADED'].length)) {
            throw new Error('Assertion failed');
        }
        if (!(webhook.address == 'https://example.com/new-webhook')) {
            throw new Error('Assertion failed');
        }
        const webhooks = yield exports.client.webhooks.getWebhooks();
        if (!(webhooks.entries.length > 0)) {
            throw new Error('Assertion failed');
        }
        const webhookFromApi = yield exports.client.webhooks.getWebhookById(webhook.id);
        if (!(webhook.id == webhookFromApi.id)) {
            throw new Error('Assertion failed');
        }
        if (!(webhook.target.id == webhookFromApi.target.id)) {
            throw new Error('Assertion failed');
        }
        if (!(webhook.address == webhookFromApi.address)) {
            throw new Error('Assertion failed');
        }
        const updatedWebhook = yield exports.client.webhooks.updateWebhookById(webhook.id, {
            requestBody: {
                address: 'https://example.com/updated-webhook',
            },
        });
        if (!(updatedWebhook.id == webhook.id)) {
            throw new Error('Assertion failed');
        }
        if (!(updatedWebhook.address == 'https://example.com/updated-webhook')) {
            throw new Error('Assertion failed');
        }
        yield exports.client.webhooks.deleteWebhookById(webhook.id);
        yield expect(() => __awaiter(this, void 0, void 0, function* () {
            yield exports.client.webhooks.deleteWebhookById(webhook.id);
        })).rejects.toThrow();
        yield exports.client.folders.deleteFolderById(folder.id);
    });
});
test('testWebhookValidation', function testWebhookValidation() {
    return __awaiter(this, void 0, void 0, function* () {
        const primaryKey = 'SamplePrimaryKey';
        const secondaryKey = 'SampleSecondaryKey';
        const incorrectKey = 'IncorrectKey';
        const body = '{"type":"webhook_event","webhook":{"id":"1234567890"},"trigger":"FILE.UPLOADED","source":{"id":"1234567890","type":"file","name":"Test.txt"}}';
        const bodyWithJapanese = '{"webhook":{"id":"1234567890"},"trigger":"FILE.UPLOADED","source":{"id":"1234567890","type":"file","name":"\u30B9\u30AF\u30EA\u30FC\u30F3\u30B7\u30E7\u30C3\u30C8 2020-08-05.txt"}}';
        const bodyWithEmoji = '{"webhook":{"id":"1234567890"},"trigger":"FILE.UPLOADED","source":{"id":"1234567890","type":"file","name":"\uD83D\uDE00 2020-08-05.txt"}}';
        const bodyWithCarriageReturn = '{"webhook":{"id":"1234567890"},"trigger":"FILE.UPLOADED","source":{"id":"1234567890","type":"file","name":"test \\r"}}';
        const bodyWithForwardSlash = '{"webhook":{"id":"1234567890"},"trigger":"FILE.UPLOADED","source":{"id":"1234567890","type":"file","name":"\\/"}}';
        const bodyWithBackSlash = '{"webhook":{"id":"1234567890"},"trigger":"FILE.UPLOADED","source":{"id":"1234567890","type":"file","name":"\\\\"}}';
        const headers = {
            ['box-delivery-id']: 'f96bb54b-ee16-4fc5-aa65-8c2d9e5b546f',
            ['box-delivery-timestamp']: '2020-01-01T00:00:00-07:00',
            ['box-signature-algorithm']: 'HmacSHA256',
            ['box-signature-primary']: '6TfeAW3A1PASkgboxxA5yqHNKOwFyMWuEXny/FPD5hI=',
            ['box-signature-secondary']: 'v+1CD1Jdo3muIcbpv5lxxgPglOqMfsNHPV899xWYydo=',
            ['box-signature-version']: '1',
        };
        const headersWithJapanese = Object.assign(Object.assign({}, headers), {
            ['box-signature-primary']: 'LV2uCu+5NJtIHrCXDYgZ0v/PP5THGRuegw3RtdnEyuE=',
        });
        const headersWithEmoji = Object.assign(Object.assign({}, headers), {
            ['box-signature-primary']: 'xF/SDZosX4le+v4A0Qn59sZhuD1RqY5KRUKzVMSbh0E=',
        });
        const headersWithCarriageReturn = Object.assign(Object.assign({}, headers), {
            ['box-signature-primary']: 'SVkbKgy3dEEf2PbbzpNu2lDZS7zZ/aboU7HOZgBGrJk=',
        });
        const headersWithForwardSlash = Object.assign(Object.assign({}, headers), {
            ['box-signature-primary']: 't41PWT5ZB6OcysnD6SDy9Ud+p9hdXxIdXqcdweyZv/Q=',
        });
        const headersWithBackSlash = Object.assign(Object.assign({}, headers), {
            ['box-signature-primary']: 'ERpMZwUQsGDTfj82ehdX6VvDZfvOhK5ULNfVmwVAGe0=',
        });
        const currentDatetime = (0, utils_js_2.dateTimeToString)((0, utils_js_3.epochSecondsToDateTime)((0, utils_js_4.getEpochTimeInSeconds)()));
        const futureDatetime = (0, utils_js_2.dateTimeToString)((0, utils_js_3.epochSecondsToDateTime)((0, utils_js_4.getEpochTimeInSeconds)() + 1200));
        const pastDatetime = (0, utils_js_2.dateTimeToString)((0, utils_js_3.epochSecondsToDateTime)((0, utils_js_4.getEpochTimeInSeconds)() - 1200));
        const headersWithCorrectDatetime = Object.assign(Object.assign({}, headers), {
            ['box-delivery-timestamp']: currentDatetime,
            ['box-signature-primary']: (yield (0, utils_js_5.computeWebhookSignature)(body, Object.assign(Object.assign({}, headers), { ['box-delivery-timestamp']: currentDatetime }), primaryKey, true)),
            ['box-signature-secondary']: (yield (0, utils_js_5.computeWebhookSignature)(body, Object.assign(Object.assign({}, headers), { ['box-delivery-timestamp']: currentDatetime }), secondaryKey, true)),
        });
        const headersWithJapaneseWithCorrectDatetime = Object.assign(Object.assign({}, headersWithJapanese), {
            ['box-delivery-timestamp']: currentDatetime,
            ['box-signature-primary']: (yield (0, utils_js_5.computeWebhookSignature)(bodyWithJapanese, Object.assign(Object.assign({}, headersWithJapanese), { ['box-delivery-timestamp']: currentDatetime }), primaryKey, true)),
            ['box-signature-secondary']: (yield (0, utils_js_5.computeWebhookSignature)(bodyWithJapanese, Object.assign(Object.assign({}, headersWithJapanese), { ['box-delivery-timestamp']: currentDatetime }), secondaryKey, true)),
        });
        const headersWithFutureDatetime = Object.assign(Object.assign({}, headers), {
            ['box-delivery-timestamp']: futureDatetime,
            ['box-signature-primary']: (yield (0, utils_js_5.computeWebhookSignature)(body, Object.assign(Object.assign({}, headers), { ['box-delivery-timestamp']: futureDatetime }), primaryKey, true)),
            ['box-signature-secondary']: (yield (0, utils_js_5.computeWebhookSignature)(body, Object.assign(Object.assign({}, headers), { ['box-delivery-timestamp']: futureDatetime }), secondaryKey, true)),
        });
        const headersWithPastDatetime = Object.assign(Object.assign({}, headers), {
            ['box-delivery-timestamp']: pastDatetime,
            ['box-signature-primary']: (yield (0, utils_js_5.computeWebhookSignature)(body, Object.assign(Object.assign({}, headers), { ['box-delivery-timestamp']: pastDatetime }), primaryKey, true)),
            ['box-signature-secondary']: (yield (0, utils_js_5.computeWebhookSignature)(body, Object.assign(Object.assign({}, headers), { ['box-delivery-timestamp']: pastDatetime }), secondaryKey, true)),
        });
        const headersWithWrongSignatureVersion = Object.assign(Object.assign({}, headers), { ['box-signature-version']: '2' });
        const headersWithWrongSignatureAlgorithm = Object.assign(Object.assign({}, headers), { ['box-signature-algorithm']: 'HmacSHA1' });
        if (!(yield (0, utils_js_6.compareSignatures)(yield (0, utils_js_5.computeWebhookSignature)(body, headers, primaryKey, true), headers['box-signature-primary']))) {
            throw new Error('Assertion failed');
        }
        if (!(yield (0, utils_js_6.compareSignatures)(yield (0, utils_js_5.computeWebhookSignature)(body, headers, secondaryKey, true), headers['box-signature-secondary']))) {
            throw new Error('Assertion failed');
        }
        if (!!(yield (0, utils_js_6.compareSignatures)(yield (0, utils_js_5.computeWebhookSignature)(body, headers, incorrectKey, true), headers['box-signature-primary']))) {
            throw new Error('Assertion failed');
        }
        if (!(yield (0, utils_js_6.compareSignatures)(yield (0, utils_js_5.computeWebhookSignature)(bodyWithJapanese, headersWithJapanese, primaryKey, true), headersWithJapanese['box-signature-primary']))) {
            throw new Error('Assertion failed');
        }
        if (!(yield (0, utils_js_6.compareSignatures)(yield (0, utils_js_5.computeWebhookSignature)(bodyWithEmoji, headersWithEmoji, primaryKey, true), headersWithEmoji['box-signature-primary']))) {
            throw new Error('Assertion failed');
        }
        if (!(yield (0, utils_js_6.compareSignatures)(yield (0, utils_js_5.computeWebhookSignature)(bodyWithCarriageReturn, headersWithCarriageReturn, primaryKey, true), headersWithCarriageReturn['box-signature-primary']))) {
            throw new Error('Assertion failed');
        }
        if (!(yield (0, utils_js_6.compareSignatures)(yield (0, utils_js_5.computeWebhookSignature)(bodyWithForwardSlash, headersWithForwardSlash, primaryKey, true), headersWithForwardSlash['box-signature-primary']))) {
            throw new Error('Assertion failed');
        }
        if (!(yield (0, utils_js_6.compareSignatures)(yield (0, utils_js_5.computeWebhookSignature)(bodyWithBackSlash, headersWithBackSlash, primaryKey, true), headersWithBackSlash['box-signature-primary']))) {
            throw new Error('Assertion failed');
        }
        if (!(yield webhooks_generated_js_1.WebhooksManager.validateMessage(body, headersWithCorrectDatetime, primaryKey, { secondaryKey: secondaryKey }))) {
            throw new Error('Assertion failed');
        }
        if (!(yield webhooks_generated_js_1.WebhooksManager.validateMessage(body, headersWithCorrectDatetime, primaryKey, { secondaryKey: incorrectKey }))) {
            throw new Error('Assertion failed');
        }
        if (!(yield webhooks_generated_js_1.WebhooksManager.validateMessage(body, headersWithCorrectDatetime, incorrectKey, { secondaryKey: secondaryKey }))) {
            throw new Error('Assertion failed');
        }
        if (!!(yield webhooks_generated_js_1.WebhooksManager.validateMessage(body, headersWithCorrectDatetime, incorrectKey, { secondaryKey: incorrectKey }))) {
            throw new Error('Assertion failed');
        }
        if (!!(yield webhooks_generated_js_1.WebhooksManager.validateMessage(body, headersWithFutureDatetime, primaryKey, { secondaryKey: secondaryKey }))) {
            throw new Error('Assertion failed');
        }
        if (!!(yield webhooks_generated_js_1.WebhooksManager.validateMessage(body, headersWithPastDatetime, primaryKey, { secondaryKey: secondaryKey }))) {
            throw new Error('Assertion failed');
        }
        if (!!(yield webhooks_generated_js_1.WebhooksManager.validateMessage(body, headersWithWrongSignatureVersion, primaryKey, { secondaryKey: secondaryKey }))) {
            throw new Error('Assertion failed');
        }
        if (!!(yield webhooks_generated_js_1.WebhooksManager.validateMessage(body, headersWithWrongSignatureAlgorithm, primaryKey, { secondaryKey: secondaryKey }))) {
            throw new Error('Assertion failed');
        }
        if (!(yield webhooks_generated_js_1.WebhooksManager.validateMessage(bodyWithJapanese, headersWithJapaneseWithCorrectDatetime, primaryKey, { secondaryKey: secondaryKey }))) {
            throw new Error('Assertion failed');
        }
        if (!(yield webhooks_generated_js_1.WebhooksManager.validateMessage(bodyWithJapanese, headersWithJapaneseWithCorrectDatetime, primaryKey, { secondaryKey: incorrectKey }))) {
            throw new Error('Assertion failed');
        }
        if (!(yield webhooks_generated_js_1.WebhooksManager.validateMessage(bodyWithJapanese, headersWithJapaneseWithCorrectDatetime, incorrectKey, { secondaryKey: secondaryKey }))) {
            throw new Error('Assertion failed');
        }
        if (!!(yield webhooks_generated_js_1.WebhooksManager.validateMessage(bodyWithJapanese, headersWithJapanese, primaryKey, { secondaryKey: secondaryKey }))) {
            throw new Error('Assertion failed');
        }
    });
});
//# sourceMappingURL=webhooks.generated.test.js.map