import { test, expect } from '@playwright/test';
test.only(
    'Page Basic UI Tests3', async ({ page }) => {
        //--Locators
        const userEmail = page.locator('#userEmail');
        const userPassword = page.locator('#userPassword');
        const loginButton = page.locator('#login');
        const url = page.goto('https://rahulshettyacademy.com/client/');
        //const allTitles = page.locator('.card-body b');
    
        await url;
        //await expect(page).toHaveURL('https://rahulshettyacademy.com/client/');
        console.log(url);
        await userEmail.fill('anshika@gmail.com');
        await userPassword.fill ('Iamking@000');
        await loginButton.click();
        await page.waitForLoadState('networkidle');
        console.log(await page.locator(".card-body b").allTextContents());
    
});
