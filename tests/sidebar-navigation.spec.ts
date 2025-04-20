import { test, expect } from '../core/fixtures';
import { credentials } from '../test-data/credentials';

test.describe('Sidebar Page', () => {
    test.beforeEach(async ({ loginFlow }) => {
        await loginFlow.loginAs(credentials.validUser);
    });

    test('should navigate to Dashboards page', async ({ page, sidebarPage }) => {
        await sidebarPage.openDashboards();
        await expect(page).toHaveURL(/dashboard/);
    });

    test('should navigate to Launches page', async ({ page, sidebarPage }) => {
        await sidebarPage.openLaunches();
        await expect(page).toHaveURL(/launches/);
    });

    test('should navigate to Filters page', async ({ page, sidebarPage }) => {
        await sidebarPage.openFilters();
        await expect(page).toHaveURL(/filters/);
    });

    test('should navigate to Debug page', async ({ page, sidebarPage }) => {
        await sidebarPage.openDebug();
        await expect(page).toHaveURL(/userdebug\/all/);
    });

    test('should navigate to Project Members page', async ({ page, sidebarPage }) => {
        await sidebarPage.openMembers();
        await expect(page).toHaveURL(/members/);
    });

    test('should navigate to Project Settings page', async ({ page, sidebarPage }) => {
        await sidebarPage.openSettings();
        await expect(page).toHaveURL(/settings/);
    });
});
