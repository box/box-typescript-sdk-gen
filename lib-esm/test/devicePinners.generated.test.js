import { getDefaultClient } from './commons.generated.js';
import { getEnvVar } from '../internal/utils.js';
export const client = getDefaultClient();
test('testDevicePinners', async function testDevicePinners() {
    const enterpriseId = getEnvVar('ENTERPRISE_ID');
    const devicePinners = await client.devicePinners.getEnterpriseDevicePinners(enterpriseId);
    if (!(devicePinners.entries.length >= 0)) {
        throw new Error('Assertion failed');
    }
    const devicePinnersInDescDirection = await client.devicePinners.getEnterpriseDevicePinners(enterpriseId, {
        queryParams: {
            direction: 'desc',
        },
    });
    if (!(devicePinnersInDescDirection.entries.length >= 0)) {
        throw new Error('Assertion failed');
    }
    const devicePinnerId = '123456';
    await expect(async () => {
        await client.devicePinners.getDevicePinnerById(devicePinnerId);
    }).rejects.toThrow();
    await expect(async () => {
        await client.devicePinners.deleteDevicePinnerById(devicePinnerId);
    }).rejects.toThrow();
});
//# sourceMappingURL=devicePinners.generated.test.js.map