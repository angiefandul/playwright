const { test, expect } = require('@playwright/test'); 

test.beforeEach(async ({ page }) => {
       await page.goto('https://login.pultemortgage.com');
       await page.mouse.down();
       await page.locator('a.listitem').filter({ hasText: 'Register'}).click();
       await page.getByLabel('Yes').click();
      });


test('Verify Successful Registration e2e', async ({ page }) => {
    await page.locator('#firstName').fill('Katerina');
    await expect(page.locator('#firstName')).toHaveValue('Katerina');
    await page.locator('#middleInitial').fill('O');
    await expect(page.locator('#middleInitial')).toHaveValue('O')
    await page.locator('#lastName').fill('Porter');
    //Date of birth
    

    await page.locator('#emailAddress').fill('katerina.porter@gmail.com');
    await page.locator('#confirmEmailAddress').fill('katerina.porter@gmail.com');
    await page.locator('#newPassword').fill('12345678kat');
    await page.locator('#confirmPassword').fill('12345678kat');
    await page.locator('[role="checkbox"]').click();
    const checkbox = page.locator('[role="checkbox"]');
    await expect(checkbox).toBeChecked;

    //await page.getByRole('button', { name: 'Register now'}).click();
     //await expect(page.locator('.success-message')).toBeVisible();

});

test('Navigate to Register Page', async ({ page }) => {
    await expect(page).toHaveURL(/registernow/);
    
});


test('Agree to Terms', async ({ page }) => {
    await expect(page.getByLabel).toBeTruthy;

});

test('Fill out Registration Form with Valid Data', async ({ page }) => {
    await page.locator('#firstName').fill('Katerina');
    await expect(page.locator('#firstName')).toHaveValue('Katerina');

    await page.locator('#middleInitial').fill('O');
    await expect(page.locator('#middleInitial')).toHaveValue('O')

    await page.locator('#lastName').fill('Porter');
    await expect(page.locator('#lastName')).toHaveValue('Porter');

    await page.locator('#emailAddress').fill('katerina.porter@gmail.com');
    await expect(page.locator('#emailAddress')).toHaveValue('katerina.porter@gmail.com');

    await page.locator('#confirmEmailAddress').fill('katerina.porter@gmail.com');

    await page.locator('#newPassword').fill('12345678kat');
    await expect(page.locator('#newPassword')).toHaveValue('12345678kat');

    await page.locator('#confirmPassword').fill('12345678kat');
});


test('Check I Agree Checkbox', async ({ page })=> {
    const checkbox = page.locator('[role="checkbox"]');
    await checkbox.click();
    // Wait for a brief moment to ensure the state is updated
    await page.waitForTimeout(500);
    // Assert that the checkbox is checked
    //await expect(checkbox).toBeChecked();
});


test('Submit Registration form', async ({ page }) => {
    await page.locator('#firstName').fill('Katerina');
    await expect(page.locator('#firstName')).toHaveValue('Katerina');
    await page.locator('#middleInitial').fill('O');
    await expect(page.locator('#middleInitial')).toHaveValue('O')
    await page.locator('#lastName').fill('Porter');
    //Date of birth
    

    await page.locator('#emailAddress').fill('katerina.porter@gmail.com');
    await page.locator('#confirmEmailAddress').fill('katerina.porter@gmail.com');
    await page.locator('#newPassword').fill('12345678kat');
    await page.locator('#confirmPassword').fill('12345678kat');
    await page.locator('[role="checkbox"]').click();
    const checkbox = page.locator('[role="checkbox"]');
    await expect(checkbox).toBeChecked;

    //expect(response.status()).toBe(200);

});






