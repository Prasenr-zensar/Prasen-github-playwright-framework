import { request } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export class GitHubApi {
    async getUser(token: string) {

        const apiContext = await request.newContext({
            ignoreHTTPSErrors: true,
            extraHTTPHeaders: {
                Authorization: `Bearer ${token}`
            }
        });

        return await apiContext.get('https://api.github.com/user');
    }
}