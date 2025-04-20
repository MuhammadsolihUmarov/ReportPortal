import { Page } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { User } from '../models/user.model';

export class LoginFlow {
    private loginPage: LoginPage;

    constructor(private page: Page) {
        this.loginPage = new LoginPage(page);
    }

    async loginAs(user: User) {
        await this.loginPage.login(user.username, user.password);
    }
}
