import { test } from '../core/fixtures';
import { credentials } from '../test-data/credentials';

test.describe('Debug Page', () => {
    test('should match the baseline screenshot', async ({ loginFlow, sidebarPage, debugPage }) => {
        await loginFlow.loginAs(credentials.validUser);
        await sidebarPage.openDebug();
        await debugPage.compareBaselineScreenshot('debug-page-baseline.png');
    });
});
