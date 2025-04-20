import { test, expect } from '../core/fixtures';
import { users } from '../test-data/users';

const subPages = [
    { name: 'General', href: '#default_personal/settings/general' },
    { name: 'Integrations', href: '#default_personal/settings/integrations' },
    { name: 'Notifications', href: '#default_personal/settings/notifications' },
    { name: 'Defect types', href: '#default_personal/settings/defect' },
    { name: 'Analyzer', href: '#default_personal/settings/autoAnalysis' },
    { name: 'Pattern-analysis', href: '#default_personal/settings/patternAnalysis' },
    { name: 'Demo data', href: '#default_personal/settings/demoData' },
    { name: 'Quality gates', href: '#default_personal/settings/qualityGates' }
];

test.describe('Project Settings Page', () => {
    test.beforeEach(async ({ loginFlow, sidebarPage }) => {
        await loginFlow.loginAs(users.validUser);
        await sidebarPage.openSettings();
    });

    subPages.forEach(subPage => {
        test(`should navigate to ${subPage.name} page`, async ({ page, projectSettingsPage }) => {
            await projectSettingsPage.openSubPage(subPage.href);
            await expect(page).toHaveURL(new RegExp(subPage.href.replace('#', '')));
        });
    });
});
