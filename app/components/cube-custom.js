AFRAME.registerComponent('custom-cube', { ///test custom object(template for ингридиент)
    schema: {
    },

    init: function () {
        this.el.setAttribute('geometry', {
            primitive: 'box',
            width: 0.33,
            height: 0.33,
            depth: 0.33,
        });

        const position = this.el.getAttribute('position');


        this.initialPosition = { x: position.x, y: position.y, z: position.z };

        this.isGrabbed = false;

        this.el.addEventListener('hover-start', this.handleHoverStart.bind(this));
        this.el.addEventListener('hover-end', this.handleHoverEnd.bind(this));

        this.el.setAttribute('position', { x: 0, y: 0.265, z: -1 });
        this.el.setAttribute('material', { color: 'red' });


        this.el.setAttribute('super-hands', {
            grabbable: true,
            droppable: true,
            stretchable: true,
            draggable: true,
        });
        this.el.setAttribute('hoverable', {});
        this.el.setAttribute('grabbable', {});
        this.el.setAttribute('stretchable', {});
        this.el.setAttribute('draggable', {});
        this.el.setAttribute('droppable', {});

        this.el.addEventListener('grab-start', this.handleGrabStart.bind(this));
        this.el.addEventListener('grab-end', this.handleGrabEnd.bind(this));

        this.el.addEventListener('release-end', this.handleReleaseEnd.bind(this));


    },

    handleHoverStart: function () {
        this.el.setAttribute('material', 'opacity: 0.7; transparent: true');
    },

    handleHoverEnd: function () {
        this.el.setAttribute('material', 'opacity: 1; transparent: false');
    },

    handleGrabStart: function (event) {
        this.el.setAttribute('material', 'color: yellow');
        this.isGrabbed = true;
    },

    handleGrabEnd: function (event) {
        this.el.setAttribute('material', 'color: red');
        this.isGrabbed = false;

    },
    handleReleaseEnd: function (event) {
        this.el.setAttribute('position', this.initialPosition);
    },

});
