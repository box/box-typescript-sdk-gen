import { getUuid } from '../internal/utils.js';
import { getEnvVar } from '../internal/utils.js';
import { getDefaultClientWithUserSubject } from './commons.generated.js';
import { ShieldListContentCountryV2025R0 } from '../schemas/v2025R0/shieldListContentCountryV2025R0.generated.js';
import { ShieldListContentDomainV2025R0 } from '../schemas/v2025R0/shieldListContentDomainV2025R0.generated.js';
import { ShieldListContentEmailV2025R0 } from '../schemas/v2025R0/shieldListContentEmailV2025R0.generated.js';
import { ShieldListContentIpV2025R0 } from '../schemas/v2025R0/shieldListContentIpV2025R0.generated.js';
export const userId = getEnvVar('USER_ID');
export const client = getDefaultClientWithUserSubject(userId);
test('testCreateGetUpdateDeleteShieldList', async function testCreateGetUpdateDeleteShieldList() {
    const shieldListCountryName = ''.concat(getUuid(), 'shieldListCountry');
    const shieldListCountry = await client.shieldLists.createShieldListV2025R0({
        name: shieldListCountryName,
        description: 'A list of things that are shielded',
        content: new ShieldListContentCountryV2025R0({
            type: 'country',
            countryCodes: ['US', 'PL'],
        }),
    });
    const shieldListContentDomainName = ''.concat(getUuid(), 'shieldListContentDomain');
    const shieldListContentDomain = await client.shieldLists.createShieldListV2025R0({
        name: shieldListContentDomainName,
        description: 'A list of things that are shielded',
        content: new ShieldListContentDomainV2025R0({
            type: 'domain',
            domains: ['box.com', 'example.com'],
        }),
    });
    const shieldListContentEmailName = ''.concat(getUuid(), 'shieldListContentEmail');
    const shieldListContentEmail = await client.shieldLists.createShieldListV2025R0({
        name: shieldListContentEmailName,
        description: 'A list of things that are shielded',
        content: new ShieldListContentEmailV2025R0({
            type: 'email',
            emailAddresses: ['test@box.com', 'test@example.com'],
        }),
    });
    const shieldListContentIpName = ''.concat(getUuid(), 'shieldListContentIp');
    const shieldListContentIp = await client.shieldLists.createShieldListV2025R0({
        name: shieldListContentIpName,
        description: 'A list of things that are shielded',
        content: new ShieldListContentIpV2025R0({
            type: 'ip',
            ipAddresses: ['127.0.0.1', '80.12.12.12/24'],
        }),
    });
    const shieldLists = await client.shieldLists.getShieldListsV2025R0();
    if (!(shieldLists.entries.length > 0)) {
        throw new Error('Assertion failed');
    }
    const getShieldListCountry = await client.shieldLists.getShieldListByIdV2025R0(shieldListCountry.id);
    if (!(getShieldListCountry.name == shieldListCountryName)) {
        throw new Error('Assertion failed');
    }
    if (!(getShieldListCountry.description == 'A list of things that are shielded')) {
        throw new Error('Assertion failed');
    }
    await client.shieldLists.updateShieldListByIdV2025R0(shieldListCountry.id, {
        name: shieldListCountryName,
        description: 'Updated description',
        content: new ShieldListContentCountryV2025R0({
            type: 'country',
            countryCodes: ['US'],
        }),
    });
    const getShieldListCountryUpdated = await client.shieldLists.getShieldListByIdV2025R0(shieldListCountry.id);
    if (!(getShieldListCountryUpdated.description == 'Updated description')) {
        throw new Error('Assertion failed');
    }
    await client.shieldLists.deleteShieldListByIdV2025R0(shieldListCountry.id);
    await client.shieldLists.deleteShieldListByIdV2025R0(shieldListContentDomain.id);
    await client.shieldLists.deleteShieldListByIdV2025R0(shieldListContentEmail.id);
    await client.shieldLists.deleteShieldListByIdV2025R0(shieldListContentIp.id);
});
//# sourceMappingURL=shieldLists.generated.test.js.map