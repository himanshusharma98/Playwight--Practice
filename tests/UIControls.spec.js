import { test, expect } from '@playwright/test';

test(
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

test.only(
    'Child Window', async ({ browser }) => {
  const page = await browser.newPage(); // create a new page
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  await page.waitForLoadState();
  console.log(await page.title());
  const blinkingText = page.locator('.blinkingText');

  const newPagePromise = page.waitForEvent('page'); // wait for a new page event
  const clickPromise = blinkingText.click(); // click the blinking text element

  const [newPage] = await Promise.all([
    newPagePromise,
    clickPromise,
  ]);

  const text = await newPage.locator('.red').textContent();
  console.log(text);
});

      

