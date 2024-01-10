AFRAME.registerTemplate(
    'camera',
    () => html`
        <a-entity camera look-controls wasd-controls position="0 1 1"
                  raycaster cursor="rayOrigin:mouse"
                  body="type: static; shape: sphere; sphereRadius: 0.001"
                  super-hands="colliderEvent: raycaster-intersection;
                             colliderEventProperty: els;
                             colliderEndEvent:raycaster-intersection-cleared;
                             colliderEndEventProperty: clearedEls;">
        </a-entity>
  `,
);
