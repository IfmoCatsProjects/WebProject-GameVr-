AFRAME.registerTemplate(
    'controls',
    () => html`
    <a-entity id="controls" controls-checker>
      <a-camera
        id="camera"
        position="0 1.6 0"
        look-controls="pointerLockEnabled: true"
        restrict-position>
      </a-camera>
    </a-entity>
  `,
);
