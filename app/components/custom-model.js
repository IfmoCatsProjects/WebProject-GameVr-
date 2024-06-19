AFRAME.registerComponent('custom-model', html`
            <a-assets>
                <a-asset-item
                        id="apple"
                        src="C:\\Users\\danil\\WebstormProjects\\WebProject-GameVr-\\app\\assets\\models\\apple.gltf"
                ></a-asset-item>

            </a-assets>
            <a-entity id="apple" gltf-model="#apple"></a-entity>

    `,
);

