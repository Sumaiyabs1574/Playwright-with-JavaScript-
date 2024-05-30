const{test,expect}=require('@playwright/test');
const { login } = require('../Pages/login');

test('page Screenshots',async({page})=>{

//login

const loginf =new login(page);
await loginf.gotologin();
await  loginf.loginfuntion("sumaiya","1qaz0plm");
await page.waitForTimeout(3000);

//home








//cart










});
