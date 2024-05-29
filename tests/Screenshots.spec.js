const{test,expect}=require('@playwright/test');

test('page Screenshots',async({page})=>{

await page.goto('https://www.demoblaze.com/');
await page.screenshot({ path:'Screenshots'+Date.now() +'screenshot.png' });
})

test('fullpage Screenshots',async({page})=>{

    await page.goto('https://www.demoblaze.com/');
    await page.screenshot({ path:''+Date.now() +'fullpagescreenshot2.png',fullPage:true });


})

test.only('element Screenshots',async({page})=>{


await page.goto('https://www.demoblaze.com/');
await page.locator("//div[@id='contcont']//div[5]//div[1]//div[1]").screenshot({ path:'Screenshots'+Date.now() +'elementscreenshot.png' });

})