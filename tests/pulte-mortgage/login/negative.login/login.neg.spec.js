import { test, expect } from '@playwright/test';
import {LoginPage} from '../../../page-objects/LoginPage';
import { loginData }  from '../../../utils/testData';



test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    loginPage.goTo();
});


test('Login with Incorrect Password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const { username, password, invalidpassword, invalidusername } = loginData;

    await loginPage.userName.fill(username);
    await loginPage.password.fill(invalidpassword);
    await loginPage.signInbutton.click();
    await expect(page.locator('.form-result-message.failure')).toHaveText('Invalid credentials provided.');
});


test('Login with Empty Fields', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.signInbutton.click();
    await expect(page.locator('.form-result-message.failure')).toHaveText('Please enter a username');
});


test('Login with Incorrect Username', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const { username, password, invalidpassword, invalidusername } = loginData;

    await loginPage.userName.fill(invalidusername);
    await loginPage.password.fill(password);
    await loginPage.signInbutton.click();
    await expect(page.locator('.form-result-message.failure')).toHaveText('Invalid credentials provided.');
});


test('Login with Unchecked Remember Me', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const { username, password, invalidpassword, invalidusername } = loginData;

    await loginPage.userName.fill(username);
    await loginPage.password.fill(password);
    await loginPage.signInbutton.click();
    // Verify successful login without remembering the user
    await expect(page.locator('.form-result-message.failure')).toBeVisible();   
});

