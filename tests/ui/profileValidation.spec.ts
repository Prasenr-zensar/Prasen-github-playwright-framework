// import { test, expect } from '@playwright/test';

// test('Validate GitHub Profile', async ({ page }) => {

//   await page.goto('https://github.com/SunainaN04');

//   await expect(page).toHaveURL(/SunainaN04/);

// });
import { test, expect } from '@playwright/test';

test('Validate GitHub Profile', async ({ page }) => {

  await page.goto('https://github.com/SunainaN04');

  await expect(page).toHaveURL(/SunainaN04/);

});