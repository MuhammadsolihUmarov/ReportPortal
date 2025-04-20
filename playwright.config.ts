import { defineConfig } from '@playwright/test';
import RPconfig from "./core/config/report-portal.config";

export default defineConfig({
    use: {
        headless: true,
        baseURL: 'https://demo.reportportal.io',
        screenshot: 'only-on-failure',
        trace: 'retain-on-failure',
    },
    expect: {
        toMatchSnapshot: {
            threshold: 0.02,
            maxDiffPixelRatio: 0.02
        },
    },
    reporter: [
        ['html', { open: 'never' }],
        ['@reportportal/agent-js-playwright', RPconfig],
    ],
    workers: undefined
});
