import { getUuid } from '../internal/utils.js';
import { dateTimeToString } from '../internal/utils.js';
import { epochSecondsToDateTime } from '../internal/utils.js';
import { getEpochTimeInSeconds } from '../internal/utils.js';
import { computeWebhookSignature } from '../internal/utils.js';
import { compareSignatures } from '../internal/utils.js';
import { WebhooksManager } from '../managers/webhooks.generated.js';
import { getDefaultClient } from './commons.generated.js';
import { toString } from '../internal/utils.js';
export const client = getDefaultClient();
test('testWebhooksCRUD', async function testWebhooksCRUD() {
    const folder = await client.folders.createFolder({
        name: getUuid(),
        parent: { id: '0' },
    });
    const webhook = await client.webhooks.createWebhook({
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
    if (!(toString(webhook.target.type) == 'folder')) {
        throw new Error('Assertion failed');
    }
    if (!(webhook.triggers.length == ['FILE.UPLOADED'].length)) {
        throw new Error('Assertion failed');
    }
    if (!(webhook.address == 'https://example.com/new-webhook')) {
        throw new Error('Assertion failed');
    }
    const webhooks = await client.webhooks.getWebhooks();
    if (!(webhooks.entries.length > 0)) {
        throw new Error('Assertion failed');
    }
    const webhookFromApi = await client.webhooks.getWebhookById(webhook.id);
    if (!(webhook.id == webhookFromApi.id)) {
        throw new Error('Assertion failed');
    }
    if (!(webhook.target.id == webhookFromApi.target.id)) {
        throw new Error('Assertion failed');
    }
    if (!(webhook.address == webhookFromApi.address)) {
        throw new Error('Assertion failed');
    }
    const updatedWebhook = await client.webhooks.updateWebhookById(webhook.id, {
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
    await client.webhooks.deleteWebhookById(webhook.id);
    await expect(async () => {
        await client.webhooks.deleteWebhookById(webhook.id);
    }).rejects.toThrow();
    await client.folders.deleteFolderById(folder.id);
});
test('testWebhookValidation', async function testWebhookValidation() {
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
    const headersWithJapanese = {
        ...headers,
        ...{
            ['box-signature-primary']: 'LV2uCu+5NJtIHrCXDYgZ0v/PP5THGRuegw3RtdnEyuE=',
        },
    };
    const headersWithEmoji = {
        ...headers,
        ...{
            ['box-signature-primary']: 'xF/SDZosX4le+v4A0Qn59sZhuD1RqY5KRUKzVMSbh0E=',
        },
    };
    const headersWithCarriageReturn = {
        ...headers,
        ...{
            ['box-signature-primary']: 'SVkbKgy3dEEf2PbbzpNu2lDZS7zZ/aboU7HOZgBGrJk=',
        },
    };
    const headersWithForwardSlash = {
        ...headers,
        ...{
            ['box-signature-primary']: 't41PWT5ZB6OcysnD6SDy9Ud+p9hdXxIdXqcdweyZv/Q=',
        },
    };
    const headersWithBackSlash = {
        ...headers,
        ...{
            ['box-signature-primary']: 'ERpMZwUQsGDTfj82ehdX6VvDZfvOhK5ULNfVmwVAGe0=',
        },
    };
    const currentDatetime = dateTimeToString(epochSecondsToDateTime(getEpochTimeInSeconds()));
    const futureDatetime = dateTimeToString(epochSecondsToDateTime(getEpochTimeInSeconds() + 1200));
    const pastDatetime = dateTimeToString(epochSecondsToDateTime(getEpochTimeInSeconds() - 1200));
    const headersWithCorrectDatetime = {
        ...headers,
        ...{
            ['box-delivery-timestamp']: currentDatetime,
            ['box-signature-primary']: (await computeWebhookSignature(body, { ...headers, ...{ ['box-delivery-timestamp']: currentDatetime } }, primaryKey, true)),
            ['box-signature-secondary']: (await computeWebhookSignature(body, { ...headers, ...{ ['box-delivery-timestamp']: currentDatetime } }, secondaryKey, true)),
        },
    };
    const headersWithJapaneseWithCorrectDatetime = {
        ...headersWithJapanese,
        ...{
            ['box-delivery-timestamp']: currentDatetime,
            ['box-signature-primary']: (await computeWebhookSignature(bodyWithJapanese, {
                ...headersWithJapanese,
                ...{ ['box-delivery-timestamp']: currentDatetime },
            }, primaryKey, true)),
            ['box-signature-secondary']: (await computeWebhookSignature(bodyWithJapanese, {
                ...headersWithJapanese,
                ...{ ['box-delivery-timestamp']: currentDatetime },
            }, secondaryKey, true)),
        },
    };
    const headersWithFutureDatetime = {
        ...headers,
        ...{
            ['box-delivery-timestamp']: futureDatetime,
            ['box-signature-primary']: (await computeWebhookSignature(body, { ...headers, ...{ ['box-delivery-timestamp']: futureDatetime } }, primaryKey, true)),
            ['box-signature-secondary']: (await computeWebhookSignature(body, { ...headers, ...{ ['box-delivery-timestamp']: futureDatetime } }, secondaryKey, true)),
        },
    };
    const headersWithPastDatetime = {
        ...headers,
        ...{
            ['box-delivery-timestamp']: pastDatetime,
            ['box-signature-primary']: (await computeWebhookSignature(body, { ...headers, ...{ ['box-delivery-timestamp']: pastDatetime } }, primaryKey, true)),
            ['box-signature-secondary']: (await computeWebhookSignature(body, { ...headers, ...{ ['box-delivery-timestamp']: pastDatetime } }, secondaryKey, true)),
        },
    };
    const headersWithWrongSignatureVersion = { ...headers, ...{ ['box-signature-version']: '2' } };
    const headersWithWrongSignatureAlgorithm = { ...headers, ...{ ['box-signature-algorithm']: 'HmacSHA1' } };
    if (!(await compareSignatures(await computeWebhookSignature(body, headers, primaryKey, true), headers['box-signature-primary']))) {
        throw new Error('Assertion failed');
    }
    if (!(await compareSignatures(await computeWebhookSignature(body, headers, secondaryKey, true), headers['box-signature-secondary']))) {
        throw new Error('Assertion failed');
    }
    if (!!(await compareSignatures(await computeWebhookSignature(body, headers, incorrectKey, true), headers['box-signature-primary']))) {
        throw new Error('Assertion failed');
    }
    if (!(await compareSignatures(await computeWebhookSignature(bodyWithJapanese, headersWithJapanese, primaryKey, true), headersWithJapanese['box-signature-primary']))) {
        throw new Error('Assertion failed');
    }
    if (!(await compareSignatures(await computeWebhookSignature(bodyWithEmoji, headersWithEmoji, primaryKey, true), headersWithEmoji['box-signature-primary']))) {
        throw new Error('Assertion failed');
    }
    if (!(await compareSignatures(await computeWebhookSignature(bodyWithCarriageReturn, headersWithCarriageReturn, primaryKey, true), headersWithCarriageReturn['box-signature-primary']))) {
        throw new Error('Assertion failed');
    }
    if (!(await compareSignatures(await computeWebhookSignature(bodyWithForwardSlash, headersWithForwardSlash, primaryKey, true), headersWithForwardSlash['box-signature-primary']))) {
        throw new Error('Assertion failed');
    }
    if (!(await compareSignatures(await computeWebhookSignature(bodyWithBackSlash, headersWithBackSlash, primaryKey, true), headersWithBackSlash['box-signature-primary']))) {
        throw new Error('Assertion failed');
    }
    if (!(await WebhooksManager.validateMessage(body, headersWithCorrectDatetime, primaryKey, { secondaryKey: secondaryKey }))) {
        throw new Error('Assertion failed');
    }
    if (!(await WebhooksManager.validateMessage(body, headersWithCorrectDatetime, primaryKey, { secondaryKey: incorrectKey }))) {
        throw new Error('Assertion failed');
    }
    if (!(await WebhooksManager.validateMessage(body, headersWithCorrectDatetime, incorrectKey, { secondaryKey: secondaryKey }))) {
        throw new Error('Assertion failed');
    }
    if (!!(await WebhooksManager.validateMessage(body, headersWithCorrectDatetime, incorrectKey, { secondaryKey: incorrectKey }))) {
        throw new Error('Assertion failed');
    }
    if (!!(await WebhooksManager.validateMessage(body, headersWithFutureDatetime, primaryKey, { secondaryKey: secondaryKey }))) {
        throw new Error('Assertion failed');
    }
    if (!!(await WebhooksManager.validateMessage(body, headersWithPastDatetime, primaryKey, { secondaryKey: secondaryKey }))) {
        throw new Error('Assertion failed');
    }
    if (!!(await WebhooksManager.validateMessage(body, headersWithWrongSignatureVersion, primaryKey, { secondaryKey: secondaryKey }))) {
        throw new Error('Assertion failed');
    }
    if (!!(await WebhooksManager.validateMessage(body, headersWithWrongSignatureAlgorithm, primaryKey, { secondaryKey: secondaryKey }))) {
        throw new Error('Assertion failed');
    }
    if (!(await WebhooksManager.validateMessage(bodyWithJapanese, headersWithJapaneseWithCorrectDatetime, primaryKey, { secondaryKey: secondaryKey }))) {
        throw new Error('Assertion failed');
    }
    if (!(await WebhooksManager.validateMessage(bodyWithJapanese, headersWithJapaneseWithCorrectDatetime, primaryKey, { secondaryKey: incorrectKey }))) {
        throw new Error('Assertion failed');
    }
    if (!(await WebhooksManager.validateMessage(bodyWithJapanese, headersWithJapaneseWithCorrectDatetime, incorrectKey, { secondaryKey: secondaryKey }))) {
        throw new Error('Assertion failed');
    }
    if (!!(await WebhooksManager.validateMessage(bodyWithJapanese, headersWithJapanese, primaryKey, { secondaryKey: secondaryKey }))) {
        throw new Error('Assertion failed');
    }
});
//# sourceMappingURL=webhooks.generated.test.js.map