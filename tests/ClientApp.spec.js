import { test, expect } from '@playwright/test';

test.only('Page Basic UI Tests3', async ({ page }) => {
  // --Locators
  const userEmail = page.locator('#userEmail');
  const userPassword = page.locator('#userPassword');
  const loginButton = page.locator('#login');
  const products = page.locator('.card-body');
  const allTitles = page.locator('.card-body b');
  const productName = 'ZARA COAT 3';
  const cart = page.locator('[routerlink*="cart"]');
  const productNameLabel = page.locator('h3:has-text("ZARA COAT 3")');
  const productList = page.locator('div li');
  const checkoutClick = page.locator('text=Checkout');
  const enterCounty = page.locator('[placeholder*="Country"]');
  const countryDropdown = page.locator('.ta-results');
  const email = 'john.jackson@yopmail.com';
  const validateEmail = page.locator('.user__name [type="text"]');
  const placeOrderClick = page.locator('.action__submit');
  const orderConfirmation = page.locator('.hero-primary');
  const viewOrderId = page.locator(".em-spacer-1 .ng-star-inserted");

  await page.goto('https://rahulshettyacademy.com/client/');
  //await expect(page).toHaveURL('https://rahulshettyacademy.com/client/');

  await userEmail.fill(email);
  await userPassword.fill('Test@123');
  await loginButton.click();
  await page.waitForLoadState('networkidle');

  console.log(await allTitles.allTextContents());
  const count = await products.count();
  for (let i = 0; i < count; ++i) {
    if (await products.nth(i).locator("b").textContent() === productName) {
      // add to cart
      await products.nth(i).locator("text= Add To Cart").click();
      break;
    }
  }

  await cart.click();
  await productList.first().waitFor();
  const bool = await productNameLabel.isVisible();
  expect(bool).toBeTruthy();

  await checkoutClick.click();
  await enterCounty.fill('ind');
  await enterCounty.press('ArrowDown');
  await enterCounty.press('Enter');
  await countryDropdown.waitFor({timeout:60000});
  const optionCount = await countryDropdown.locator('button').count();
  for (let i = 0; i < optionCount; ++i) {
    const text = await countryDropdown.locator('button').nth(i).textContent();
    if (text === " India") {
      await countryDropdown.locator('button').nth(i).click();
      break;
    }
  }

  expect(validateEmail.first()).toHaveText(email);
  await placeOrderClick.click();
  await expect(orderConfirmation).toHaveText(' Thankyou for the order. ');

  const orderId = await viewOrderId.textContent();
  console.log(orderId);
});