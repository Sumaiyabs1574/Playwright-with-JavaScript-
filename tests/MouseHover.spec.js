import { test, expect } from '@playwright/test';

test('mouseHover', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/register');

 const computer = await page.locator("//ul[@class='top-menu notmobile']//a[normalize-space()='Computers']")
 const  software = await page.locator ("//ul[@class='top-menu notmobile']//a[normalize-space()='Software']")

 await computer.hover()
 await page.waitForTimeout(3000)
 await software.hover()
 await page.waitForTimeout(3000)

})