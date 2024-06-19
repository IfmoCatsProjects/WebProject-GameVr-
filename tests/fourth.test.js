const { test, expect } = require('@playwright/test');

test('wall component should have correct geometry and material', async ({ page }) => {
    await page.goto('http://localhost:3333');

    const wall = await page.$('[wall]');
    expect(wall).not.toBeNull();

    const geometry = await page.evaluate((wall) => {
        return wall.getObject3D('mesh').geometry.parameters;
    }, wall);
    expect(geometry.width).toBe(10);
    expect(geometry.height).toBe(5);
    expect(geometry.depth).toBe(0.1);

    const material = await page.evaluate((wall) => {
        return wall.getObject3D('mesh').material.color.getHex();
    }, wall);
    expect(material).toBe(0xFFFFFF);
});
