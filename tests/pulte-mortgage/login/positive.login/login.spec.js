import { test, expect } from '@playwright/test'; 
import {LoginPage} from '../../../page-objects/LoginPage';
import { loginData }  from '../../../utils/testData';


test.beforeEach(async ({ page }) => {
    // await page.goto('https://login.pultemortgage.com/login');  
    const loginPage = new LoginPage(page);
    loginPage.goTo(); 
});


test('Verifying login functionality', async ({ page })=> {
    const loginPage = new LoginPage(page);
    const { username, password } = loginData;
    loginPage.validLogin(username, password);

    await expect(loginPage.userName).toHaveValue(username);
    // await expect(loginPage.password).toHaveValue(password);
    await expect(loginPage.checkMe).toBeChecked(); 
});


test('Remember Me Checkbox Checked', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.checkMe.check();
    await expect(loginPage.checkMe).toBeChecked();
});


test('Correct Username Entry', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const { username, password } = loginData;

    await loginPage.userName.fill(username);
    await expect(loginPage.userName).toHaveValue(username);
});


test('Correct Password Entry', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const { username, password } = loginData;

    await loginPage.password.fill(password);
    await expect(loginPage.password).toHaveValue(password);
});


test('Login Button Click', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.signInbutton.click();
});