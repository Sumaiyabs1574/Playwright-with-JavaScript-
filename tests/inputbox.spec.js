import { test, expect } from '@playwright/test';

test('handelinputbox', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/register');
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')
await expect (await page. locator("(//input[@id='FirstName'])[1]")).toBeVisible();
await expect (await page. locator("(//input[@id='FirstName'])[1]")).toBeEmpty();
await expect (await page. locator("(//input[@id='FirstName'])[1]")).toBeEditable();
await expect (await page. locator("(//input[@id='FirstName'])[1]")).toBeEnabled();
await page.locator("//input[@id='FirstName']").fill("sumaiya")
await page.waitForTimeout(5000);

})