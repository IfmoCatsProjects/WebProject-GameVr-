AFRAME.registerComponent('capture-mouse', {
    grabbed: null,
    startPosition: null,
    keyIsDown: false,
    pointerStartPosition: null,

    init() {
        this.pointer = this.el;
        this.camera = document.getElementById('a-camera');

        this.keyDownHandler = this.keyDownHandler.bind(this);
        this.keyUpHandler = this.keyUpHandler.bind(this);
        this.grabStart = this.grabStart.bind(this);
        this.grabEnd = this.grabEnd.bind(this);
        this.trackPadDownHandler = this.trackPadDownHandler.bind(this);
        this.trackPadUpHandler = this.trackPadUpHandler.bind(this);
        this.bodyLoadedHandler = this.bodyLoadedHandler.bind(this);

        this.el.sceneEl.addEventListener('grab-start', this.grabStart);
        this.el.sceneEl.addEventListener('grab-end', this.grabEnd);

        this.pointer.addEventListener('buttondown', this.trackPadDownHandler);
        this.pointer.addEventListener('buttonup', this.trackPadUpHandler);

        document.body.addEventListener('keydown', this.keyDownHandler);
        document.body.addEventListener('keyup', this.keyUpHandler);

        this.pointer.addEventListener('body-loaded', this.bodyLoadedHandler);
    },

    remove() {
        this.el.sceneEl.removeEventListener('grab-start', this.grabStart);
        this.el.sceneEl.removeEventListener('grab-end', this.grabEnd);

        this.pointer.removeEventListener('trackpaddown', this.trackPadDownHandler);
        this.pointer.removeEventListener('trackpadup', this.trackPadUpHandler);

        document.body.removeEventListener('keydown', this.keyDownHandler);
        document.body.removeEventListener('keyup', this.keyUpHandler);

        this.pointer.removeEventListener('body-loaded', this.bodyLoadedHandler);
    },

    grabStart(e) {
        if (e.detail) {
            this.grabbed = e.detail.target;
        }
    },

    grabEnd(e) {
        this.grabbed = null;
    },

    bodyLoadedHandler(e) {
        this.pointerStartPosition = Object.assign(
            {},
            this.pointer.object3D.position,
        );
    },

    keyDownHandler(e) {
        if (e.keyCode === 32 && !this.keyIsDown) {
            this.keyIsDown = true;
        }
    },

    trackPadDownHandler(e) {
        if (e.detail.id === 4 && !this.keyIsDown) {
            this.keyIsDown = true;
        }
    },

    keyUpHandler(e) {
        if (e.keyCode === 32) {
            this.forceGrabEnd(e);
            this.keyIsDown = false;
        }
    },

    trackPadUpHandler(e) {
        if (e.detail.id === 4) {
            this.forceGrabEnd(e);
            this.keyIsDown = false;
        }
    },

    forceGrabEnd(e) {
        this.pointer.components['super-hands'].onGrabEndButton(e);
    },
});
