import { test } from '../core/fixtures';
import { users } from '../test-data/users';

test.describe('Debug Page', () => {
    test('should match the baseline screenshot', async ({ loginFlow, sidebarPage, debugPage }) => {
        await loginFlow.loginAs(users.validUser);
        await sidebarPage.openDebug();
        await debugPage.compareBaselineScreenshot('debug-page-baseline.png');
    });
});
