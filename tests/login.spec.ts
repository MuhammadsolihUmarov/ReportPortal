import { test, expect } from '../core/fixtures';
import { users } from '../test-data/users';

test.describe('Login Page', () => {
    test('should login successfully with valid user', async ({ page, loginFlow }) => {
        await loginFlow.loginAs(users.validUser);
        await expect(page).toHaveURL(/launches/);
    });
});
