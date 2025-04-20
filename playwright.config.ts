import { defineConfig } from '@playwright/test';

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
    reporter: [['html', { open: 'never' }]],
    workers: undefined
});
