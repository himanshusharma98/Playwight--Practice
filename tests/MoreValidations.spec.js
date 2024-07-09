import { test, expect } from '@playwright/test';

test('More Validations', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    expect(await page.locator('#displayed-text')).toBeVisible();
    await page.locator('#hide-textbox').click();
    expect(await page.locator('#displayed-text')).toBeHidden();
    page.on('dialog', dialog => dialog.accept());
    await page.locator('#confirmbtn').click();
    // await page.locator('#mousehover').hover();
    const framesPage = page.frameLocator('#courses-iframe');
    await framesPage.locator('.li a[href*="lifetime-access"]:visible').click();
    const textCheck = await framesPage.locator('.text h2').textContent();
    console.log(textCheck.split(' ')[1]);

});