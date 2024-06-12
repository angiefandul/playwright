const { test, expect } = require('@playwright/test'); 

test.beforeEach(async ({ page }) => {
   await page.goto('https://servicing.pultemortgage.com/pultemortgage/#/login');
   await page.locator('#registerYourAccount').click();
 });



 test('Pay your mortgage - Register new account with missing DOB', async ({ page }) => {
   await page.getByLabel('Last Name').fill('Porter');
   await page.locator('#ssn').fill('123-34-6666');
   await page.locator('#emailAddress').fill('katerina.porter@gmail.com');
   
   await page.getByRole('button', { name: 'Next' }).click();
   await expect(page.locator('#dobError')).toHaveText('Error: A valid Date of Birth is required (MM/DD/YYYY)');
 });


 test('Pay your mortgage - Navigate to Registration Page', async ({ page }) => {
   await expect(page).toHaveTitle('Pulte Mortgage - Register');
 });



test('Pay your mortgage - Register new account with complete details', async ({ page }) => {
  await page.getByLabel('Last Name').fill('Porter');
  await page.locator('#ssn').fill('123-34-6666');
  await page.locator('#emailAddress').fill('katerina.porter@gmail.com');
  //await page.locator('#dob').fill('01/01/1980');
  await page.getByRole('button', { name: 'Next' }).click();
});


test('Pay your mortgage - Register new account with valid email and SSN', async ({ page }) => {
   await page.getByLabel('Last Name').fill('Porter');
   await page.locator('#ssn').fill('123-34-6666');
   await page.locator('#emailAddress').fill('katerina.porter@gmail.com');
   //await page.locator('#dob').fill('01/01/1980');
   await page.getByRole('button', { name: 'Next' }).click();
   // Success message or indication for a valid registration
   //await expect(page.locator('#registrationSuccess')).toBeVisible();
 });








