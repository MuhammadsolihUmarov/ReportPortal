import { test, expect } from '../core/fixtures';
import { credentials } from '../test-data/credentials';

test.describe('Login Page', () => {
    test('should login successfully with valid user', async ({ page, loginFlow }) => {
        await loginFlow.loginAs(credentials.validUser);
        await expect(page).toHaveURL(/launches/);
    });
});
