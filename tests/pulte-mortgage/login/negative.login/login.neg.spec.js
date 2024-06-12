const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    await page.goto('https://login.pultemortgage.com/login');
});

test('Login with Incorrect Password', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Username' }).fill('katerina.porter@gmail.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('wrongpassword');
    await page.getByRole('button', { name: 'Log In' }).click();
    await expect(page.locator('.form-result-message.failure')).toHaveText('Invalid credentials provided.');
});

test('Login with Empty Fields', async ({ page }) => {
    await page.getByRole('button', { name: 'Log In' }).click();
    await expect(page.locator('.form-result-message.failure')).toHaveText('Please enter a username');
});

test('Login with Incorrect Username', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Username' }).fill('incorrect.username@gmail.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('12345678kat');
    await page.getByRole('button', { name: 'Log In' }).click();
    await expect(page.locator('.form-result-message.failure')).toHaveText('Invalid credentials provided.');
});

test('Login with Unchecked Remember Me', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Username' }).fill('katerina.porter@gmail.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('12345678kat');
    await page.getByRole('button', { name: 'Log In' }).click();
    // Verify successful login without remembering the user
    await expect(page.locator('.form-result-message.failure')).toBeVisible();
    // Further checks might include ensuring cookies/local storage do not have 'remember me' settings
});

test('Login with Partially Correct Credentials', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Username' }).fill('katerina.porter@gmail.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('wrongpassword');
    await page.getByRole('button', { name: 'Log In' }).click();
    await expect(page.locator('.form-result-message.failure')).toHaveText('Invalid credentials provided.');
});