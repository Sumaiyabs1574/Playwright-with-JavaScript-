const{ test, expect } =require('@playwright/test')
test("Handel checkbox", async ({ page }) => {
   
    await page.goto('https://demo.seleniumeasy.com/basic-checkbox-demo.html');
//handel single checkbox
 // await page.locator("//label[normalize-space()='Option 1']").check();
 // expect(await page.locator("//label[normalize-space()='Option 1']")).toBeChecked();
 // expect(await page.locator("//label[normalize-space()='Option 1']")).isChecked().toBetruthy();
//multiple

const checkboxlocators=[

"//label[normalize-space()='Option 4']",
"//label[normalize-space()='Option 3']",
"//label[normalize-space()='Option 2']"
];

for (const locator of checkboxlocators)
   {
await page.locator (locator).check();
   }
   await page.waitForTimeout(5000);


 for (const locator of checkboxlocators)
    {
        if(await page.locator(locator).isChecked())
 await page.locator (locator).uncheck();
    }

  await page.waitForTimeout(5000);
})