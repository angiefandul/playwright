const { test, expect } = require('@playwright/test'); 

// test.beforeEach(async ({ page }) => {
//     await page.goto('https://login.pultemortgage.com');
//   });
  

test('First Test', async ({ page }) => {
    await page.goto('https://login.pultemortgage.com');
    await expect(page).toHaveTitle(/Finance your new home today./);

    await page.getByRole('link', { name: 'About'}).first().click();
    await expect(page.getByRole('heading', {name: 'The value behind our name...'})).toBeVisible();

  });

  test('Navigate to carreer section and select job', async ({ browser } ) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    //const userName = page.locator('#sername);

    await page.goto('https://login.pultemortgage.com');

    const carreerLink = await page.getByText('External Candidates');

    const [newPage] = await Promise.all(
    [
        context.waitForEvent('page'), //listen for new page to open promise-pending,rejected,fulfilled.
        carreerLink.click(), //will open on new page/child window
    
    ])

    const text = await newPage.locator('h2.updated-about-module-profile-info__company-name').textContent();
    console.log(text);
    
    //Click on view ALL of the positions
    await newPage.mouse.down();
    await newPage.getByRole('link', { name: 'VIEW ALL JOBS' }).click();
  });

  test('Select QA position from a list page', async ({ page })=>{
    const positionTitle = 'QA Engineer III (Pulte Mortgage) (Must reside in Colorado)';
    await page.goto('https://www.themuse.com/search/company/pultemortgage/');
    await page.waitForSelector('.JobCard_jobName__qPJZv', { state: 'visible', timeout: 60000 });
    
    const titleElements = await page.locator('.JobCard_jobName__qPJZv');
     //Select all of the positions -('.JobCard_contentContainer__afyc1)
    //To get a title from position ('.JobCard_contentContainer__afyc1 h2')
    //You have to iterate over positions (array)
    const count = await titleElements.count();

    for (let i=0; i<count; ++i)
        
        {
            const title = await titleElements.nth(i).textContent();

            if (title === positionTitle) {
                await titleElements.nth(i).locator('..').locator('..').locator('..').locator('a.JobCard_viewJobLink__Gesny').click();        
                break;
            }
    }
  });

  