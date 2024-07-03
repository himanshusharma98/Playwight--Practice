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
     await page.locator('#username').fill('rahulshetty'); 
     await page.locator('#password').fill('learning');
     await page.locator('#signInBtn').click();
     console.log(await page.locator('[style*="block"]').textContent());
     expect(await page.locator('[style*="block"]').textContent()).toContain('Incorrect');

});
