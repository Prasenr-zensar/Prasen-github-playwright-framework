import { test, expect } from '@playwright/test';

test('Invalid Repository Search', async ({ page }) => {

  await page.goto(
    'https://github.com/search?q=invalidrepository123456&type=repositories'
  );

  await expect(page.locator('body')).toContainText('repository');
});