import { test, expect } from '@playwright/test';
import { text } from 'stream/consumers';
test.only(
    'Page Basic UI Tests3', async ({ page }) => {
        //--Locators
        const userEmail = page.locator('#userEmail');
        const userPassword = page.locator('#userPassword');
        const loginButton = page.locator('#login');
        const url = page.goto('https://rahulshettyacademy.com/client/');
        const products = page.locator('.card-body');
        const allTitles = page.locator('.card-body b');
        const productName = 'ZARA COAT 3';
        const cart = page.locator('[routerlink*="cart"]');
        const productNameLabel = page.locator('h3:has-text("ZARA COAT 3")');
        const productList = page.locator('div li')
        const checkoutClick  = page.locator('text=Checkout');
        const enterCounty = page.locator('[plaaceholder*="Country"]');
        const countryDropdown = page.locator('.ta-results');
    
        await url;
        //await expect(page).toHaveURL('https://rahulshettyacademy.com/client/');
        console.log(url);
        await userEmail.fill('john.jackson@yopmail.com');
        await userPassword.fill ('Test@123');
        await loginButton.click();
        await page.waitForLoadState('networkidle');
        console.log(await allTitles.allTextContents());
        const count = await products.count();
        for (let i = 0; i < count; ++i) {
            if (await products.nth(i).locator("b").textContent() === productName) {
               //add to cart
               await products.nth(i).locator("text= Add To Cart").click();
               break;
            }
         }
        await cart.click();
        await productList.first().waitFor();
        const bool = await productNameLabel.isVisible();
        expect(bool).toBeTruthy();
        await checkoutClick.click();
        await enterCounty.pressSequentially("ind",{delay:100});
        await countryDropdown.waitFor();
        const optionCount = await countryDropdown.locator('button').count();
        for (let i = 0; i < optionCount; ++i) {
         const  text = await  countryDropdown.locator('button').nth(i).textContent();
          if(text === " India") {
            await countryDropdown.locator('button').nth(i).click();
            break;

          }
        }
        
    
});
