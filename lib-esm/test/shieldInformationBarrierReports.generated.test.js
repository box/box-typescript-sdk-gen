import { getEnvVar } from '../internal/utils.js';
import { getDefaultClientWithUserSubject } from './commons.generated.js';
import { getOrCreateShieldInformationBarrier } from './commons.generated.js';
import { toString } from '../internal/utils.js';
test('testShieldInformationBarrierReports', async function testShieldInformationBarrierReports() {
    const client = getDefaultClientWithUserSubject(getEnvVar('USER_ID'));
    const enterpriseId = getEnvVar('ENTERPRISE_ID');
    const barrier = await getOrCreateShieldInformationBarrier(client, enterpriseId);
    if (!(toString(barrier.status) == 'draft')) {
        throw new Error('Assertion failed');
    }
    if (!(toString(barrier.type) == 'shield_information_barrier')) {
        throw new Error('Assertion failed');
    }
    if (!(barrier.enterprise.id == enterpriseId)) {
        throw new Error('Assertion failed');
    }
    if (!(toString(barrier.enterprise.type) == 'enterprise')) {
        throw new Error('Assertion failed');
    }
    const barrierId = barrier.id;
    const existingReports = await client.shieldInformationBarrierReports.getShieldInformationBarrierReports({
        shieldInformationBarrierId: barrierId,
    });
    if (existingReports.entries.length > 0) {
        return void 0;
    }
    const createdReport = await client.shieldInformationBarrierReports.createShieldInformationBarrierReport({
        shieldInformationBarrier: {
            id: barrierId,
            type: 'shield_information_barrier',
        },
    });
    if (!(createdReport.shieldInformationBarrier.shieldInformationBarrier.id ==
        barrierId)) {
        throw new Error('Assertion failed');
    }
    const retrievedReport = await client.shieldInformationBarrierReports.getShieldInformationBarrierReportById(createdReport.id);
    if (!(retrievedReport.id == createdReport.id)) {
        throw new Error('Assertion failed');
    }
    const retrievedReports = await client.shieldInformationBarrierReports.getShieldInformationBarrierReports({
        shieldInformationBarrierId: barrierId,
    });
    if (!(retrievedReports.entries.length > 0)) {
        throw new Error('Assertion failed');
    }
});
//# sourceMappingURL=shieldInformationBarrierReports.generated.test.js.map