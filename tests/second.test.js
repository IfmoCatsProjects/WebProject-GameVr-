const { test, expect } = require('@playwright/test');

test('page should load 3D scene', async ({ page }) => {
    await page.goto('http://localhost:3333');
    const scene = await page.$('a-scene');
    expect(scene).not.toBeNull();
});
