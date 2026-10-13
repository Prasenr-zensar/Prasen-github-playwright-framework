import { test, expect, request } from '@playwright/test';

test('Get GitHub User', async () => {

    const context = await request.newContext({
        ignoreHTTPSErrors: true
    });

    const response = await context.get(
        'https://api.github.com/users/microsoft'
    );

    expect(response.status()).toBe(200);
});