const { test, expect } = require('@playwright/test'); 

test.beforeEach(async ({ page }) => {
    await page.goto('https://login.pultemortgage.com/registernow');
    await page.getByLabel('Yes').click();
});
    

test('Registration with Missing First Name', async ({ page }) => {
    await page.locator('#middleInitial').fill('O');
    await page.locator('#lastName').fill('Porter');
    await page.locator('#emailAddress').fill('katerina.porter@gmail.com');
    await page.locator('#confirmEmailAddress').fill('katerina.porter@gmail.com');
    await page.locator('#newPassword').fill('12345678kat');
    await page.locator('#confirmPassword').fill('12345678kat');
    await page.locator('[role="checkbox"]').click();
    await page.getByRole('button', { name: 'Register now' }).click();
    await expect(page.locator('.text-danger').first()).toHaveText('Enter first name');
    await expect(page.locator('.text-danger').nth(1)).toHaveText('Enter date of birth');
 });


 test('Registration with Invalid Email', async ({ page }) => {
    await page.locator('#firstName').fill('Katerina');
    await page.locator('#middleInitial').fill('O');
    await page.locator('#lastName').fill('Porter');
    await page.locator('#emailAddress').fill('katerina.portergmail.com');
    await page.locator('#confirmEmailAddress').fill('katerina.portergmail.com');
    await page.locator('#newPassword').fill('12345678kat');
    await page.locator('#confirmPassword').fill('12345678kat');
    await page.locator('[role="checkbox"]').click();
    await page.getByRole('button', { name: 'Register now' }).click();

    const errors = await page.locator('.text-danger').allTextContents();
    console.log('Error messages:', errors);

    await expect(page.locator('.text-danger').first()).toHaveText('Enter date of birth');
    await expect(page.locator('.text-danger').nth(1)).toHaveText('Enter a valid email address');  
 });


 test('Registration with Password Mismatch', async ({ page }) => {
    await page.locator('#firstName').fill('Katerina');
    await page.locator('#middleInitial').fill('O');
    await page.locator('#lastName').fill('Porter');
    await page.locator('#emailAddress').fill('katerina.porter@gmail.com');
    await page.locator('#confirmEmailAddress').fill('katerina.porter@gmail.com');
    await page.locator('#newPassword').fill('12345678kat');
    await page.locator('#confirmPassword').fill('12345678different');
    await page.locator('[role="checkbox"]').click();
    await page.getByRole('button', { name: 'Register now' }).click();
    await expect(page.locator('.text-danger').first()).toHaveText('Enter date of birth');
    await expect(page.locator('.text-danger').nth(1)).toHaveText('Your passwords do not match. Please try again.')
 });


 test('Registration without Agreeing to Terms', async ({ page }) => {
    await page.locator('#firstName').fill('Katerina');
    await page.locator('#middleInitial').fill('O');
    await page.locator('#lastName').fill('Porter');
    await page.locator('#emailAddress').fill('katerina.porter@gmail.com');
    await page.locator('#confirmEmailAddress').fill('katerina.porter@gmail.com');
    await page.locator('#newPassword').fill('12345678kat');
    await page.locator('#confirmPassword').fill('12345678kat');
    await page.getByRole('button', { name: 'Register now' }).click();
    await expect(page.locator('.checkbox-label')).toHaveText('I have read and agree to the Privacy Policy of this website');

 });


 test('Registration with Missing Date of Birth', async ({ page }) => {
    await page.locator('#firstName').fill('Katerina');
    await page.locator('#middleInitial').fill('O');
    await page.locator('#lastName').fill('Porter');
    await page.locator('#emailAddress').fill('katerina.porter@gmail.com');
    await page.locator('#confirmEmailAddress').fill('katerina.porter@gmail.com');
    await page.locator('#newPassword').fill('12345678kat');
    await page.locator('#confirmPassword').fill('12345678kat');
    await page.locator('[role="checkbox"]').click();
    await page.getByRole('button', { name: 'Register now' }).click();
    await expect(page.locator('.text-danger').first()).toHaveText('Enter date of birth');
});



