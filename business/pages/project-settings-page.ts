import { Page, Locator } from '@playwright/test';
import { BasePage } from "../../core/drivers/base-page";

export class ProjectSettingsPage extends BasePage{
    constructor(page: Page) {
        super(page);
    }
    getSettingsSubPageLink(href: string): Locator {
        return this.page.locator(`//ul[contains(@class, 'navMenu__menu')]//a[@href="${href}"]`);
    }

    async openSubPage(href: string) {
        const link = this.getSettingsSubPageLink(href);
        await link.click();
    }
}
