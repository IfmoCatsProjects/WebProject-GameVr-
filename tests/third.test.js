const { test, expect } = require('@playwright/test');

test('restrict-position component should keep object within radius', async ({ page }) => {
    await page.setContent(`
        <html>
        <head>
            <script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>
            <script>
                AFRAME.registerComponent('restrict-position', {
                    schema: {},

                    init: function () {
                        this.active = true;
                        this.radius = 2;
                    },

                    tick: function (time, delta) {
                        if (!this.active) { return; }
                        const fromCircleToObject = new THREE.Vector3();
                        const y = this.el.object3D.position.y;
                        fromCircleToObject.copy(this.el.object3D.position);
                        const len = this.radius / fromCircleToObject.length();
                        if (len < 0.98) {
                            fromCircleToObject.multiplyScalar(this.radius / fromCircleToObject.length());
                            this.el.setAttribute('position', {
                                x: fromCircleToObject.x,
                                y: y,
                                z: fromCircleToObject.z
                            });
                        }
                    }
                });
            </script>
        </head>
        <body>
            <a-scene>
                <a-entity id="object" restrict-position position="5 0 0"></a-entity>
            </a-scene>
        </body>
        </html>
    `);

    await page.waitForTimeout(500);

    const position = await page.evaluate(() => {
        const object = document.querySelector('#object');
        return object.getAttribute('position');
    });

    const distance = Math.sqrt(position.x ** 2 + position.z ** 2);
    expect(distance).toBeLessThanOrEqual(2);
});
