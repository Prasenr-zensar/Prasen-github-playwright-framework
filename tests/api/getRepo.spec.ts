import { test, expect, request } from '@playwright/test';

test('Get Repository Details', async () => {

    const context = await request.newContext({
        ignoreHTTPSErrors: true
    });

    const response = await context.get(
        'https://api.github.com/repos/microsoft/playwright'
    );

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.name).toBe('playwright');
});