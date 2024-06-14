const { test, expect } = require('@playwright/test'); 
const { RegistrationPage } = require('../../../page-objects/RegistrationPage');
const { registrationData }  = require('../../../utils/testData');



test.beforeEach(async ({ page }) => {
   const registrationPage = new RegistrationPage(page);
   await registrationPage.goTo();
});
   

test('Registration with Missing First Name', async ({ page }) => {
   const registrationPage = new RegistrationPage(page);
   const { middleinitial, lastname, username, password } = registrationData;

   await registrationPage.middleInitial.fill(middleinitial);
   await registrationPage.lastName.fill(lastname);
   await registrationPage.emailAddress.fill(username);
   await registrationPage.confirmEmail.fill(username);
   await registrationPage.newPassword.fill(password);
   await registrationPage.confirmPassword.fill(password);
   await registrationPage.checkBox.click();
   await registrationPage.registerButton.click();

   await expect(page.locator('.text-danger').first()).toHaveText('Enter first name');
   await expect(page.locator('.text-danger').nth(1)).toHaveText('Enter date of birth');
});


 test('Registration with Invalid Email', async ({ page }) => {
   const registrationPage = new RegistrationPage(page);
   const { firstname, middleinitial, lastname, username, password } = registrationData;


    await registrationPage.firstName.fill(firstname);
    await registrationPage.middleInitial.fill(middleinitial);
    await registrationPage.lastName.fill(lastname);
    await registrationPage.emailAddress.fill('katerina.portergmail.com');
    await registrationPage.confirmEmail.fill('katerina.portergmail.com');
    await registrationPage.newPassword.fill(password);
    await registrationPage.confirmPassword.fill(password);
    await registrationPage.checkBox.click();
    await registrationPage.registerButton.click();

    const errors = await page.locator('.text-danger').allTextContents();
    console.log('Error messages:', errors);

    await expect(page.locator('.text-danger').first()).toHaveText('Enter date of birth');
    await expect(page.locator('.text-danger').nth(1)).toHaveText('Enter a valid email address');  
 });


 test('Registration with Password Mismatch', async ({ page }) => {
   const registrationPage = new RegistrationPage(page);
   const { firstname, middleinitial, lastname, username, password } = registrationData;


   await registrationPage.firstName.fill(firstname);
   await registrationPage.middleInitial.fill(middleinitial);
   await registrationPage.lastName.fill(lastname);
   await registrationPage.emailAddress.fill(username);
   await registrationPage.confirmEmail.fill(username);
    await registrationPage.newPassword.fill(password);
    await registrationPage.confirmPassword.fill('12345678different');
    await registrationPage.checkBox.click();
    await registrationPage.registerButton.click();
    await expect(page.locator('.text-danger').first()).toHaveText('Enter date of birth');
    await expect(page.locator('.text-danger').nth(1)).toHaveText('Your passwords do not match. Please try again.')
 });


 test('Registration without Agreeing to Terms', async ({ page }) => {
   const registrationPage = new RegistrationPage(page);
   const { firstname, middleinitial, lastname, username, password } = registrationData;


   await registrationPage.firstName.fill(firstname);
   await registrationPage.middleInitial.fill(middleinitial);
   await registrationPage.lastName.fill(lastname);
   await registrationPage.emailAddress.fill(username);
   await registrationPage.confirmEmail.fill(username);
   await registrationPage.newPassword.fill(password);
   await registrationPage.confirmPassword.fill(password);
   await registrationPage.registerButton.click();
   await expect(page.locator('.checkbox-label')).toHaveText('I have read and agree to the Privacy Policy of this website');
 });


 test('Registration with Missing Date of Birth', async ({ page }) => {
   const registrationPage = new RegistrationPage(page);
   const { firstname, middleinitial, lastname, username, password } = registrationData;

    await registrationPage.firstName.fill(firstname);
    await registrationPage.middleInitial.fill(middleinitial);
    await registrationPage.lastName.fill(lastname);
    await registrationPage.emailAddress.fill(username);
    await registrationPage.confirmEmail.fill(username);
    await registrationPage.newPassword.fill(password);
    await registrationPage.confirmPassword.fill(password);
    await registrationPage.checkBox.click();
    await registrationPage.registerButton.click();
    await expect(page.locator('.text-danger').first()).toHaveText('Enter date of birth');
});



