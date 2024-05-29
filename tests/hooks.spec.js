import { test, expect } from '@playwright/test';
let page;

test.beforeAll(async({browser})=>{
  page = await browser.newPage();
  await page.goto('https://www.demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('sumaiya');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('1qaz0plm');
  await page.getByRole('button', { name: 'Log in' }).click();
});

test.afterAll( async ({ browser}) => {
  await page.locator('#logout2').click()
});



test('cart', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.waitForTimeout(6000);
});



test('laptop', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Laptops' }).click();
  await page.getByRole('link', { name: 'Dell 15.6 Inch' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.waitForTimeout(6000);
});








