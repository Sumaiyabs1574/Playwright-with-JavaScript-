const{ test, expect } =require('@playwright/test')
test("autosuggetion", async ({ page }) => {
   
    await page.goto('https://www.redbus.in/');
await page.locator('#src').fill('Delhi');

await page.waitForTimeout(2000);
await page.waitForSelector("//li[contains(@class,'sc-iwsKbI')] /div/text [1]")
const cityoptions = await page .$$ ("//li[contains(@class,'sc-iwsKbI')] /div/text [1]")
for (let option of cityoptions)

{

const value = await option.textContent();
//console.log(value);

if(value.includes('Badarpur'))
    {
await option.click()
break;

    }


}

await page.waitForTimeout(4000);


})