// @ts-check
const { test, expect } = require('@playwright/test');


test('First Test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  console.log(await page.title());
  //css
  await page.locator('[name="username"]').fill('rahulshetty');
  await page.locator('[name="password"]').fill('learning');
  await page.locator('[name="signin"]').click();
  //automatically waits untill will show up in the DOM (even if takes time)
  console.log(await page.locator("[style*='block']").textContent());
  await expect(page.locator("[style*='block']")).toContainText('Incorrect');

});

test('Second Test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  await page.locator('[name="username"]').fill('rahulshettyacademy');
  await page.locator('[name="password"]').fill('learning');
  await page.locator('[name="signin"]').click();

  //Multiple element on page: grabbing title of elements:
  console.log(await page.locator('.card-body a').first().textContent());
  console.log(await page.locator('.card-body a').nth(1).textContent());
  const allTitles = await page.locator('.card-body a').allTextContents();
  console.log(allTitles);
});


test('Register test ', async({page})=>{
  await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home');
  await page.getByText('My Account').first().click();
  await page.getByText('Register').click();
  await page.locator('[name="firstname"]').fill('Alina');
  await page.locator('[name="lastname"]').fill('Kruvko');
  await page.locator('[name="email"]').fill('demo@gmail.com');
  await page.locator('[name="telephone"]').fill('7203034343')
  await page.locator('[name="password"]').fill('123456');
  await page.locator('[name="confirm"]').fill('123456')
  await page.locator('[type="submit"]').click();
});


test('Login test', async({page})=>{
  await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home');
  await page.getByText('My Account').first().click();
  await page.getByText('Login').click();
  await page.locator('[name="email"]').fill('demo@gmail.com');
  await page.locator('[type="password"]').fill('123456');
  await page.locator('[type="submit"]').click();
});


test('Shopping test', async({page})=>{
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  await page.locator('[name="username"]').fill('demo@gmail.com');
  await page.locator('[type="password"]').fill('111111');
  await page.locator('select.form-control').selectOption('Consultant');
  await page.locator('.radiotextsty').last().click();
  await page.locator('#okayBtn').click();
  //assertion
});


test.describe('test suite 1', ()=> {
  test('the first test', () => {

  })

  test('the second test', () => {

  })

  test('the third test', () => {

  })

});

test.describe('test suite 2', ()=> {
  test('the first test', () => {

  })

  test('the second test', () => {

  })

  test('the third test', () => {

  })

})