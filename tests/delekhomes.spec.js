import { test, expect } from '@playwright/test';

test('title', async ({page})=> {
    await page.goto('https://dev.delekhomes.com/auth/login');
    await page.locator('[name="email"]').fill('admin@gmail.com');
    await page.locator('[name="password"]').fill('DontTestMe');
    await page.locator('[type="submit"]').click();

    await expect(page).toHaveTitle("User: Profile | Delek Homes");


})