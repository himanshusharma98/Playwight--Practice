import { test, expect } from '@playwright/test';

test.only(
    'UI Controls', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await page.waitForLoadState();
    console.log(await page.title());
    const username = page.locator('#username');
    const submit = page.locator('#signInBtn');
    const dropDown = page.locator('select[class="form-control"]');
    const selectRadio = page.locator('label:nth-child(2) span:nth-child(1)')
    const okButton = page.locator('#okayBtn');
    const termsAndConditions = page.locator('#terms');
    const blinkingText = page.locator('.blinkingText');

    await dropDown.selectOption('consult');
    await selectRadio.last().check();
    await okButton.click();
    await expect(selectRadio.last()).toBeChecked();
    await termsAndConditions.check();
    await expect(termsAndConditions).toBeChecked();
    await expect(blinkingText).toHaveAttribute('class', 'blinkingText');
    await page.pause();
    
});
