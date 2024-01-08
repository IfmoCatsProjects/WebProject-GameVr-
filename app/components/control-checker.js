AFRAME.registerComponent('controls-checker', {
    schema: {
        isDesktop: {
            type: 'boolean',
        },
        isGearVR: {
            type: 'boolean',
        },
    },
    init() {
        this.headsetConnected = AFRAME.utils.device.checkHeadsetConnected();
        if (this.headsetConnected && window.ga) {
            window.ga('send', 'event', 'device', 'headset');
        }
        this.isDesktop = this.headsetConnected && !this.isMobile;
        this.camera = document.getElementById('a-camera');

        this.setupControls();
    },
    setupControls() {
        if (!this.isDesktop && !this.isMobileVR) {
            this.createCursor();
        }
    },
    createCursor() {
        const camera = document.getElementById('a-camera');
        const cursor = document.createElement('a-cursor');
        cursor.id = 'a-cursor';
        cursor.setAttribute('mixin', 'point');
        camera.appendChild(cursor);
    },
});
