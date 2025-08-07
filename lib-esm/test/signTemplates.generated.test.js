import { getEnvVar } from '../internal/utils.js';
import { getDefaultClientWithUserSubject } from './commons.generated.js';
test('testGetSignTemplates', async function testGetSignTemplates() {
    const client = getDefaultClientWithUserSubject(getEnvVar('USER_ID'));
    const signTemplates = await client.signTemplates.getSignTemplates({
        limit: 2,
    });
    if (!(signTemplates.entries.length >= 0)) {
        throw new Error('Assertion failed');
    }
});
test('testGetSignTemplate', async function testGetSignTemplate() {
    const client = getDefaultClientWithUserSubject(getEnvVar('USER_ID'));
    const signTemplates = await client.signTemplates.getSignTemplates({
        limit: 2,
    });
    if (!(signTemplates.entries.length >= 0)) {
        throw new Error('Assertion failed');
    }
    if (signTemplates.entries.length > 0) {
        const signTemplate = await client.signTemplates.getSignTemplateById(signTemplates.entries[0].id);
        if (!(signTemplate.id == signTemplates.entries[0].id)) {
            throw new Error('Assertion failed');
        }
        if (!(signTemplate.sourceFiles.length > 0)) {
            throw new Error('Assertion failed');
        }
        if (!!(signTemplate.name == '')) {
            throw new Error('Assertion failed');
        }
        if (!!(signTemplate.parentFolder.id == '')) {
            throw new Error('Assertion failed');
        }
    }
});
//# sourceMappingURL=signTemplates.generated.test.js.map