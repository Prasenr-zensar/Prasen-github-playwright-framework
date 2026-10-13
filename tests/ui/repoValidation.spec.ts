import { test, expect } from '@playwright/test';

test('Validate Repository', async ({ page }) => {

    await page.goto(
        'https://github.com/microsoft/playwright'
    );

    await expect(page).toHaveTitle(/playwright/i);
});