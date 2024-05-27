import { test, expect } from '@playwright/test';

test('assersion', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/register');
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')
    await expect.soft(page).toHaveTitle("nopCommerce demo store")
    const searchbox= await page .locator ('#small-searchterms')
    await expect(searchbox).toBeEnabled();
    const mRadioButton = await page .locator ('#gender-male')
    mRadioButton.click()
    await expect(mRadioButton).toBeChecked()

})