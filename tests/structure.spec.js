// import {test} from '@playwright/test'


// test.beforeEach(async ({page})=> {
//     await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');
// })



// test.describe('suite 1', ({ page }) => { //pass as argument page/browser as fixture
//     test.beforeEach(async ({page}) => {
//         await page.getByText('Top Deals').click();
//     })
    
//     test('the first test', async ({page})=> {
//         await page.getByText('Next').click();
//     })

//     test('the first test', async ({page})=> {
//         await page.getByText('Next').click();
//     })


// test.describe('suite 2', ({ page }) => {
//     test.beforeEach(async ({page}) => {
//         await page.getByText('Top Deals main').click();
//      })
       
//     test('the first test', async ({page})=> {
//         await page.getByText('Back').click();
//     })
    
//     test('the first test', async ({page})=> {
//         await page.getByText('Next').click();
//     })
//  });
// });


// // please avoid using it - test.afterEach() - delete test data. Better relocate to before hook, will improve stability
