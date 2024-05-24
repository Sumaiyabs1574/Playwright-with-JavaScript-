import {test,expect}from '@playwright/test'
test('locators',async({page})=>
{
await page.goto('https://www.demoblaze.com/index.html')
await page.click('#login2')
await page.fill('#loginusername','sumaiya')
await page.type ('#loginpassword','1qaz0plm')
await page.click ("(//button[normalize-space()='Log in'])[1]")
  const logoutlink=await page.locator("//a[@id='logout2']")
await expect (logoutlink).toBeVisible();
await page.close()
})