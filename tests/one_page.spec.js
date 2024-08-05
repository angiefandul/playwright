const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page })=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
});

test('Checkbox', async ({page})=> {

    await page.locator('#checkBoxOption1').check();
    await expect(page.locator('#checkBoxOption1')).toBeChecked();

    await page.locator('#checkBoxOption3').check();
    await expect(page.locator('#checkBoxOption3')).toBeChecked();


});

test('Radiobuttons', async ({page})=>{

    await page.locator('[name="radioButton"]').first().check();
    await expect(page.locator('[name="radioButton"]').first()).toBeChecked();
})

test('Autocomplete', async ({page})=>{

    await page.locator('#autocomplete').fill('au');
   //await page.locator('.ui-menu-item-wrapper').locator('text=Palau').click();

   await page.waitForSelector('.ui-menu-item-wrapper');

   const suggestion = await page.locator('.ui-menu-item-wrapper').filter({hasText: 'Australia'});
   await suggestion.click();
   
   await expect(page.locator('#autocomplete')).toHaveValue('Australia');
});


test('Dropdown', async ({page})=>{

    await page.selectOption('select', 'option2');

    const selectedValue = await page.locator('select').inputValue();
    await expect(selectedValue).toBe('option2');
})

test('Alerts', async ({ page })=>{
    await page.locator('#name').fill('Angie');
    await page.locator('[value="Alert"]').click();

    page.on('dialog', async (dialog)=>{
        expect(dialog.message()).toBe('Hello Angie, share this practice page and share your knowledge');
        await dialog.accept();
        await page.locator('[value="Alerts"]').click();
    });
});

test('Open new tab-child window', async ({ page, context })=>{
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        page.locator('#opentab').click()
    ]);

    await newPage.waitForLoadState();
    await newPage.locator('#navbarSupportedContent a[href*="about"]').click();
    await newPage.waitForTimeout(2000);
    await expect(newPage.locator('.mt-50 h2')).toContainText('QAClick Academy');
});