const { test, expect } = require('@playwright/test');

test('Login testing', async ({page})=>{
    await page.goto('https://rahulshettyacademy.com/angularpractice/');
    await page.locator('[name="name"]').first().fill('Anika');
    await page.locator('[name="email"]').fill('demo@gmail.com');

    //GETBYLABEL if just to click or check, or dropdown:(if you will click on Label and its highlitning, 
    //it would work)


    //checkbox:
    await page.getByLabel('Check me out if you Love IceCreams!').check();
    //radiobutton:
    await page.getByLabel('Employed').click();
    //select gender option
    await page.getByLabel('Gender').selectOption('Female');

    //GETbyPlaceholder:

    //Password fill
    await page.getByPlaceholder('Password').fill('111111');
    //Email fill

    //Get by Role:
    //Click on button
    await page.getByRole('button', { name: 'Submit'} ).click();

    //Verify Succase message
    await page.getByText('Success! The Form has been submitted successfully!.').isVisible();
    //Click on tab SHOP
    await page.getByRole('link', { name : 'Home'}).click();

});

test('Iphone shop', async ({ page })=>{
    await page.goto('https://rahulshettyacademy.com/angularpractice/shop');
    await page.locator('app-card').filter({hasText: 'Nokia Edge'}).getByRole('button').click();
    await expect(page.getByRole('button')).toBeTruthy();
    await page.locator('text=Checkout').click();
    await expect(page.locator('text=Nokia Edge')).toBeTruthy();

});

test('GreenKart', async ({ page }) => {
    const productName = 'Cucumber - 1 Kg';
    const products = page.locator('.product');
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');
    const count = await products.count();
    for (let i = 0; i < count; ++i) {
        const productTitle = await products.nth(i).locator('h4').textContent();
        if (productTitle === productName) {
            await products.nth(i).locator('text=ADD TO CART').click();
            break;
        }
    }
    await page.locator('.cart-icon').click();
    await page.getByText('PROCEED TO CHECKOUT').click();
    await expect(page.locator('tbody').getByText('Cucumber - 1 Kg')).toHaveText('Cucumber - 1 Kg', { exact: true});

    await page.getByRole('button', { name: 'Place Order'}).click();
    await page.locator('div select').selectOption('Albania');
    await page.locator('.chkAgree').check();
    await expect(page.locator('a')).toHaveText('Terms & Conditions');

    await page.getByText('Proceed').click();
    //await expect(page.locator('.success-message')).toContainText('Thank you, your order has been placed successfully');

});

test('Naveenlabs register', async ({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    await page.getByPlaceholder('First Name').fill('Alyka');
    await page.getByPlaceholder('Last Name').fill('Ross');
    await page.getByPlaceholder('E-Mail').fill('alyka.ross@gmail.com');
    await page.getByPlaceholder('Telephone').fill('3032334545');
    await page.getByPlaceholder('Password').first().fill('123456');
    await page.getByPlaceholder('Password Confirm').fill('123456');
    await page.locator('label:has-text("Yes")').click();
    await page.locator('[name="agree"]').check();

});
