import { test, expect, request } from '@playwright/test';

test('List Repositories', async () => {

    const context = await request.newContext({
        ignoreHTTPSErrors: true
    });

    const response = await context.get(
        'https://api.github.com/users/microsoft/repos'
    );

    expect(response.status()).toBe(200);
});