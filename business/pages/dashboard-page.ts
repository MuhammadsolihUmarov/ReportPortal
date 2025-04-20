import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from "../../core/drivers/base-page";

export class DashboardPage extends BasePage{
    readonly dashboardHeading: Locator;
    readonly searchField: Locator;
    readonly dashboardName: Locator;
    readonly widgets: Locator;

    constructor(page: Page) {
        super(page);
        this.dashboardHeading = page.locator('//span[@title="All Dashboards"]');
        this.dashboardName = page.locator('//div[@class="grid__grid--W4yQA dashboardTable__dashboard-table--oK3Zi"]/div[2]//a');
        this.searchField = page.locator('//input[@placeholder="Search by name"]');
        this.widgets = page.locator('//div[@class="widgets-grid"]');
    }

    async verifyDashboardVisible() {
        await expect(this.dashboardHeading).toBeVisible();
    }

    async verifyWidgetsVisible() {
        await expect(this.widgets).toBeVisible();
    }

    async clickDashboardName() {
        await this.dashboardName.click();
    }

    async searchText(text: string) {
        await this.searchField.click();
        await this.searchField.fill(text);
    }

    async verifyDashboardDisplayed(expectedText: string) {
        await expect(this.dashboardName).toContainText(expectedText);
    }
}
