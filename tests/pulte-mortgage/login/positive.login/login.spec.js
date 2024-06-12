const { test, expect } = require('@playwright/test'); 

test.beforeEach(async ({ page }) => {
    await page.goto('https://login.pultemortgage.com/login');
    
    
});

test('Verifying login functionality', async ({ page })=> {
    await page.getByRole('textbox', { name: 'Username' }).fill('katerina.porter@gmail.com');
    await expect(page.getByRole('textbox', { name: 'Username' })).toHaveValue('katerina.porter@gmail.com');

    await page.getByRole('textbox', { name: 'Password' }).fill('12345678kat');
    await expect(page.getByRole('textbox', { name: 'Password' })).toHaveValue('12345678kat');
    await page.locator('#chkrememberMe').check();
    await expect(page.locator('#chkrememberMe')).toBeChecked();
    //await page.getByRole('button', { name: 'Log In'}).click();
     
});

test('Remember Me Checkbox Checked', async ({ page }) => {
    await page.locator('#chkrememberMe').check();
    await expect(page.locator('#chkrememberMe')).toBeChecked();
});

test('Correct Username Entry', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Username' }).fill('katerina.porter@gmail.com');
    await expect(page.getByRole('textbox', { name: 'Username' })).toHaveValue('katerina.porter@gmail.com');
});

test('Correct Password Entry', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Password' }).fill('12345678kat');
    await expect(page.getByRole('textbox', { name: 'Password' })).toHaveValue('12345678kat');
});

test('Login Button Click', async ({ page }) => {
    await page.getByRole('button', { name: 'Log In' }).click();
    // Check for a response to the login attempt (e.g., error message or success)
});