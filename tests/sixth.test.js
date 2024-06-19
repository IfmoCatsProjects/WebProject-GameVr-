/*
const { test, expect, chromium } = require('@playwright/test');


test('Test A-Frame Application', async ({ page }) => {
    await page.goto('http://localhost:3333');

    await page.waitForSelector('a-scene');

    await page.waitForSelector('a-cursor');

    await page.waitForSelector('.cube');

    const initialColor = await page.$eval('.cube', el => el.getAttribute('material').color);
    expect(initialColor).toEqual('red');

    await page.waitForSelector('[hand-controls]');

    // Пример использования функций Playwright для интеракции с A-Frame элементами:
    // await page.click('#myButton');
    // await page.type('#myInput', 'Hello, World!');
    // const isVisible = await page.isVisible('#myElement');
    // expect(isVisible).toBe(true);
});
*/
