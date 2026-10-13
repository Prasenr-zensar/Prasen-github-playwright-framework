import { test, expect } from '@playwright/test';

test.describe('Integrated Testing - Negative Scenario', () => {
  test('Invalid Repository Validation', async ({ page }) => {

    const invalidRepo = 'repository-does-not-exist-123456789';

    await page.goto(`https://github.com/${invalidRepo}`);

    await page.waitForLoadState('networkidle');

    await expect(page.locator('body')).toContainText(
      'Find code, projects, and people on GitHub'
    );
  });
});
