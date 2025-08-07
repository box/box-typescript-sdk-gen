import { getDefaultClient } from './commons.generated.js';
export const client = getDefaultClient();
test('testGetFileVersionLegalHolds', async function testGetFileVersionLegalHolds() {
    const policyId = '1234567890';
    const fileVersionLegalHolds = await client.fileVersionLegalHolds.getFileVersionLegalHolds({
        policyId: policyId,
    });
    const fileVersionLegalHoldsCount = fileVersionLegalHolds.entries.length;
    if (!(fileVersionLegalHoldsCount >= 0)) {
        throw new Error('Assertion failed');
    }
});
test('testGetFileVersionLegalHoldById', async function testGetFileVersionLegalHoldById() {
    const fileVersionLegalHoldId = '987654321';
    await expect(async () => {
        await client.fileVersionLegalHolds.getFileVersionLegalHoldById(fileVersionLegalHoldId);
    }).rejects.toThrow();
});
//# sourceMappingURL=fileVersionLegalHolds.generated.test.js.map