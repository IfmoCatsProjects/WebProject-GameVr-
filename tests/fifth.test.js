const { test, expect } = require('@playwright/test');

test('models should load correctly', async ({ page }) => {
    await page.goto('http://localhost:3333');

    await page.waitForSelector('a-entity[gltf-model="apple.gltf"]', { timeout: 5000 });
    const appleModel = await page.$('a-entity[gltf-model="apple.gltf"]');
    expect(appleModel).not.toBeNull();

    await page.waitForSelector('a-entity[gltf-model="extinguisher.gltf"]', { timeout: 5000 });
    const extinguisherModel = await page.$('a-entity[gltf-model="extinguisher.gltf"]');
    expect(extinguisherModel).not.toBeNull();
});
