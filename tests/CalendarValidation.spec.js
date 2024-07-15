import { test, expect } from "@playwright/test";

test("Calendar validations", async ({ page }) => {

    const monthNumber = '6';
    const year = '2027';
    const date = '15';
    const expectedList = [monthNumber, date, year];
    page.goto('https://rahulshettyacademy.com/seleniumPractise/#/offers')
    await page.locator(".react-date-picker__inputGroup").click();
    await page.locator(".react-calendar__navigation__label").click();
    await page.locator(".react-calendar__navigation__label").click();
    await page.getByText(year).click();
    await page.locator(".react-calendar__year-view__months__month").nth(Number(monthNumber) - 1).click();
    await page.locator("//abbr[text()='" + date + "']").click();
    const input = await page.locator(".react-date-picker__inputGroup input");
    for (let index = 0; index < input.length; index++) {
        const value = input[index].getAttribute('value');
        expect(value).toEqual(expectedList[index]);
    }
}
)
