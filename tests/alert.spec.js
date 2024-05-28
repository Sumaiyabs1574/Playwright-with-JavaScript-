const{ test, expect } =require('@playwright/test')
// test.skip ("alart ok ", async ({ page }) => {
   
//     //await page.goto('https://demo.seleniumeasy.com/javascript-alert-box-demo.html');
// //enable alrt handeling
// page.on('dialog',async dialog =>{

// expect(dialog.type()).toContain('alert')
// expect(dialog.message()).toContain('I am an alert box!')
// await dialog.accept();
// })

// await page.click("button[class='btn btn-default']");
// await page.waitForTimeout(6000);

// })


test("alart confarmation with ok and cancel ", async ({ page }) => {
   
    await page.goto('https://demo.seleniumeasy.com/bootstrap-modal-demo.html');
//enable alrt handeling
page.on('dialog',async dialog =>{

expect(dialog.type()).toContain('confirm')
expect(dialog.message()).toContain('This is the place where the content for the modal dialog displays')
//await dialog.accept();
await dialog.dismiss();
})

await page.click("(//a[@class='btn btn-primary'][normalize-space()='Launch modal'])[1]");
await page.waitForTimeout(6000);

})