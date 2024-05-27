import { test, expect } from '@playwright/test';

test('locatingMultipleElements', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html');

    // Wait for the selector to be available
    await page.waitForSelector("//div[@id='tbodyid']//h4/a");

    // Use XPath selector to get the product links
    const products = await page.$$("//div[@id='tbodyid']//h4/a");

    for (const product of products) {
        // Extract the text content of each product link
        const productName = await product.textContent();
        console.log(productName);
    }
});

