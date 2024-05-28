const{ test, expect } =require('@playwright/test')
test("autosuggetion", async ({ page }) => {
 await page.goto('https://letcode.in/frame');

//total frame
const allframe= await page.frames()
 console.log ("number of fream",allframe.length)

 //using name url
 const frame = await page.frame('frame-login');


})