const{ test, expect } =require('@playwright/test')
test("Handel checkbox", async ({ page }) => {
   
    await page.goto('https://demo.nopcommerce.com/register?returnUrl=%2Fwishlist');
//await page . locator ("select[name='DateOfBirthDay']").selectOption({label:'3'});
//value or visible text
await page . locator ("select[name='DateOfBirthDay']").selectOption('4');
//await page.selectOption ( "locator",'value');
//add assersion
const options= await page.locator ("select[name='DateOfBirthMonth'] option")
await expect(options).toHaveCount(13);
await console.log(options);

await page.waitForTimeout(5000);

})