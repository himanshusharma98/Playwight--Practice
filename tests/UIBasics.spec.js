import { test,expect } from '@playwright/test';

test(
    ' Browser Context Basic UI Tests',  async ({browser})=>
    {

        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://playwright.dev/');
        console.log(await page.title());
    });

    test(
        'Page Basic UI Tests2',  async ({page})=>
        {
            await page.goto('https://google.com/');
            console.log(await page.title());
            expect( await page.title()).toBe("Google");
            
            
        });
