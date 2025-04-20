import { Page, Locator } from '@playwright/test';
import { BasePage } from "../../core/drivers/base-page";

export class SidebarPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }
    getSidebarLinkByHref(href: string): Locator {
        return this.page.locator(`//a[@href="${href}"]`);
    }

    async openDashboards() {
        const dashboardsLink = this.getSidebarLinkByHref('#default_personal/dashboard').first();
        await dashboardsLink.click();
    }

    async openLaunches() {
        const launchesLink = this.getSidebarLinkByHref('#default_personal/launches');
        await launchesLink.click();
    }

    async openFilters() {
        const filtersLink = this.getSidebarLinkByHref('#default_personal/filters');
        await filtersLink.click();
    }

    async openDebug() {
        const debugLink = this.getSidebarLinkByHref('#default_personal/userdebug/all');
        await debugLink.click();
    }

    async openMembers() {
        const membersLink = this.getSidebarLinkByHref('#default_personal/members');
        await membersLink.click();
    }

    async openSettings() {
        const settingsLink = this.getSidebarLinkByHref('#default_personal/settings');
        await settingsLink.click();
    }
}
