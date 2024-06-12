const { test, expect } = require('@playwright/test'); 

test.beforeEach(async ({ page }) => {
   await page.goto('https://servicing.pultemortgage.com/pultemortgage/#/login');
   await page.locator('#registerYourAccount').click();
});


 test('Pay your mortgage - Register new account with missing last name', async ({ page }) => {
    await page.locator('#ssn').fill('123-34-6666');
    await page.locator('#emailAddress').fill('katerina.porter@gmail.com');
    //await page.locator('#dob').fill('01/01/1980');
    await page.getByRole('button', { name: 'Next' }).click();
    await expect(page.getByLabel('Error: Lastname is required.')).toBeTruthy();
});


test('Pay your mortgage - Register new account with invalid SSN', async ({ page }) => {
  await page.getByLabel('Last Name').fill('Porter');
  await page.locator('#ssn').fill('1@121234');
  await page.locator('#emailAddress').fill('katerina.porter@gmail.com');
  //await page.locator('#dob').fill('01/01/1980');
  await page.getByRole('button', { name: 'Next' }).click();
  await expect(page.getByLabel('Error: A valid SSN is required')).toBeTruthy();
});


test('Pay your mortgage - Register new account with invalid email', async ({ page }) => {
    await page.getByLabel('Last Name').fill('Porter');
    await page.locator('#ssn').fill('123-34-6666');
    await page.locator('#emailAddress').fill('katerina.porter@invalid');
    //await page.locator('#dob').fill('01/01/1980');
    await page.getByRole('button', { name: 'Next' }).click();
    await expect(page.getByLabel('Error: A valid Email Address is required')).toBeTruthy();
});


test('Pay your mortgage - Register new account with missing DOB', async ({ page }) => {
    await page.getByLabel('Last Name').fill('Porter');
    await page.locator('#ssn').fill('123-34-6666');
    await page.locator('#emailAddress').fill('katerina.porter@gmail.com');
    await page.getByRole('button', { name: 'Next' }).click();
    await expect(page.locator('#dobError')).toHaveText('Error: A valid Date of Birth is required (MM/DD/YYYY)');
});

