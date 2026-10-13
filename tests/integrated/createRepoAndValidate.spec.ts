import { test, expect, request } from '@playwright/test';

test('API and UI Validation', async ({ page }) => {

    const context = await request.newContext({
        ignoreHTTPSErrors: true
    });

    const response = await context.get(
        'https://api.github.com/repos/microsoft/playwright'
    );

    expect(response.status()).toBe(200);

    await page.goto(
        'https://github.com/microsoft/playwright'
    );

    await expect(page).toHaveTitle(/playwright/i);
});