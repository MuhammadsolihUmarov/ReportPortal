import { test } from '../core/fixtures';
import { credentials } from '../test-data/credentials';

test.describe('Dashboard page', () => {
    test.beforeEach(async ({ page, loginFlow, sidebarPage }) => {
        await loginFlow.loginAs(credentials.validUser);
        await sidebarPage.openDashboards();
    });

    test('should display the dashboard heading', async ({ dashboardPage }) => {
        await dashboardPage.verifyDashboardVisible();
    });

    test('should search for a dashboard and verify the result', async ({ dashboardPage }) => {
        await dashboardPage.searchText('test');
        await dashboardPage.verifyDashboardDisplayed('test');
    });

    test('should open inner widgets of a dashboard', async ({ dashboardPage }) => {
        await dashboardPage.clickDashboardName();
        await dashboardPage.verifyWidgetsVisible();
    });
});
