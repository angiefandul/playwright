import { test, expect } from '@playwright/test'; 
import { RegistrationPage } from '../../../page-objects/RegistrationPage';
import { registrationData }  from '../../../utils/testData';



test.beforeEach(async ({ page }) => {
    const registrationPage = new RegistrationPage(page);
    registrationPage.goTo();
    });


test('Verify Successful Registration e2e', async ({ page }) => {

    const registrationPage = new RegistrationPage(page);
    const { firstname, middleinitial, lastname, username, password } = registrationData;

    registrationPage.validRegistration(firstname, username, middleinitial, lastname, password);
    await expect(registrationPage.firstName).toHaveValue(firstname);
    await expect(registrationPage.middleInitial).toHaveValue(middleinitial)
    
    const checkbox = page.locator('[role="checkbox"]');
    await expect(checkbox).toBeChecked;

    //await page.getByRole('button', { name: 'Register now'}).click();
    //await expect(page.locator('.success-message')).toBeVisible();
});

test('Navigate to Register Page', async ({ page }) => {
    const registrationPage = new RegistrationPage(page);
    await expect(page).toHaveURL(/registernow/);
    
});


test('Success message on your UC', async ({ page }) => {
    const registrationPage = new RegistrationPage(page);
    const { firstname, middleinitial, lastname, username, password } = registrationData;

    await expect(page.locator('strong').last()).toHaveText('Congratulations on being under contract with your new home!');
});


test('Fill out Registration Form with Valid Data', async ({ page }) => {
    const registrationPage = new RegistrationPage(page);
    const { firstname, middleinitial, lastname, username, password } = registrationData;

    await registrationPage.firstName.fill(firstname);
    await expect(registrationPage.firstName).toHaveValue(firstname);

    await registrationPage.middleInitial.fill(middleinitial);
    await expect(registrationPage.middleInitial).toHaveValue(middleinitial)

    await registrationPage.lastName.fill(lastname);
    await expect(registrationPage.lastName).toHaveValue(lastname);

    await registrationPage.emailAddress.fill(username);
    await expect(registrationPage.emailAddress).toHaveValue(username);

    await registrationPage.confirmEmail.fill(username);

    await registrationPage.newPassword.fill(password);
    await expect(registrationPage.newPassword).toHaveValue(password);

    await registrationPage.confirmPassword.fill(password);
});


test('Check I Agree Checkbox', async ({ page })=> {
    const registrationPage = new RegistrationPage(page);

    await registrationPage.checkBox.click();
    await page.waitForLoadState();
    //await expect(registrationPage.checkBox).toBeChecked();
});


test('Submit Registration form', async ({ page }) => {
    const registrationPage = new RegistrationPage(page);
    const { firstname, middleinitial, lastname, username, password } = registrationData;

    await registrationPage.firstName.fill(firstname);
    await expect(registrationPage.firstName).toHaveValue(firstname);
    await registrationPage.middleInitial.fill(middleinitial);
    await expect(registrationPage.middleInitial).toHaveValue(middleinitial)
    await registrationPage.lastName.fill(lastname);
    //Date of birth
    
    await registrationPage.emailAddress.fill(username);
    await registrationPage.confirmEmail.fill(username);
    await registrationPage.newPassword.fill(password);
    await registrationPage.confirmPassword.fill(password);
    await registrationPage.checkBox.click();
    await expect(registrationPage.checkBox).toBeChecked;

    //expect(response.status()).toBe(200);
});






