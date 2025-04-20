import { test as base, expect as baseExpect } from '@playwright/test';
import { LoginFlow } from '../../business/flows/login-flow';
import { SidebarPage } from '../../business/pages/sidebar-page';
import { DashboardPage } from '../../business/pages/dashboard-page';
import { DebugPage } from "../../business/pages/debug-page";
import { ProjectSettingsPage } from "../../business/pages/project-settings-page";

type Fixtures = {
    loginFlow: LoginFlow;
    sidebarPage: SidebarPage;
    dashboardPage: DashboardPage;
    debugPage: DebugPage;
    projectSettingsPage: ProjectSettingsPage;
};

export const test = base.extend<Fixtures>({
    page: async ({ page }, use) => {
        await page.goto('/');
        await use(page);
    },
    loginFlow: async ({ page }, use) => {
        await use(new LoginFlow(page));
    },
    sidebarPage: async ({ page }, use) => {
        await use(new SidebarPage(page));
    },
    dashboardPage: async ({ page }, use) => {
        await use(new DashboardPage(page));
    },
    debugPage: async ({ page }, use) => {
        await use(new DebugPage(page));
    },
    projectSettingsPage: async ({ page }, use) => {
        await use(new ProjectSettingsPage(page));
    },
});

export const expect = baseExpect;
