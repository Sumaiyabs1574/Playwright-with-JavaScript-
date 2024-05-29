const{ test, expect } =require('@playwright/test')
test("datePicker", async ({ page }) => {
   
//await page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo');
//await page.fill ("//input[@id='birthday']",'1995-02-08');
//await page.waitForTimeout(4000);
await page.goto('https://www.redbus.in/');
const year="2024"
const month="March"
const date ="20"

await page .click ("//span[@class='dateText']")













})