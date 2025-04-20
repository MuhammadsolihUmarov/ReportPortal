import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from "../../core/drivers/base-page";

export class DebugPage extends BasePage{
    constructor(page: Page) {
        super(page);
    }

    async compareBaselineScreenshot(filename: string) {
        expect(await this.page.screenshot({ fullPage: true })).toMatchSnapshot(filename);
    }
}
