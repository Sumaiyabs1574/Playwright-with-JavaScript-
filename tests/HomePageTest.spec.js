const{test,expect}=require('@playwright/test');

test('Home Page',async({page})=>{

await page.goto('https://www.demoblaze.com/');
 const pageTitle= await page.title();
 console.log ('page tittle',pageTitle);

await expect(page).toHaveTitle('STORE');
await page .close();



})