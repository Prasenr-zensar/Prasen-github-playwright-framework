import { test, expect } from '@playwright/test';

test('Open GitHub Home Page', async ({ page }) => {
  await page.goto('https://github.com');
  await expect(page).toHaveTitle(/GitHub/);
});