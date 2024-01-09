AFRAME.registerTemplate(
    'controls',
    () => html`
    <a-entity id="controls" controls-checker>
      <a-camera
        id="camera"
        position="0 1.6 0"
        look-controls="pointerLockEnabled: true"
        restrict-position
        id="point"
        collision-filter="collisionForces: false"
        static-body="shape: sphere; sphereRadius: 0.01"
        capture-mouse
        raycaster="showLine: true; far: 5;"
        super-hands="colliderEvent: raycaster-intersection;
                                colliderEventProperty: els;
                                colliderEndEvent: raycaster-intersection-cleared;
                                colliderEndEventProperty: clearedEls;">
      </a-camera>
    </a-entity>
  `,
);
