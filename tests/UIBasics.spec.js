import { test, expect } from '@playwright/test';

test(
    ' Browser Context Basic UI Tests', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://playwright.dev/');
    console.log(await page.title());
});

test.only(
    'Page Basic UI Tests2', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await page.waitForLoadState();
    console.log(await page.title());
    const username = page.locator('#username');
    const password = page.locator('#password');
    const submit = page.locator('#signInBtn');
    const cardTitle = page.locator('.card-body a');
         //console.log(await page.locator('[style*="block"]').textContent());
     //expect(await page.locator('[style*="block"]').textContent()).toContain('Incorrect');
     await username.fill('rahulshettyacademy');
     await password.fill('learning');
     await submit.click();
    console.log( await cardTitle.first().textContent());
    console.log(await cardTitle .nth(1).textContent());
    const allTitles = await cardTitle.allTextContents();
    console.log(allTitles);

 

});
