AFRAME.registerComponent('wall', {
    init: function () {
        // Создаем геометрию стены
        const geometry = new THREE.BoxGeometry(10, 5, 0.1);

        // Создаем материал стены
        const material = new THREE.MeshStandardMaterial({ color: new THREE.Color('#FFFFFF') });

        // Создаем меш стены
        const wallMesh = new THREE.Mesh(geometry, material);

        // Добавляем меш стены в сцену
        this.el.setObject3D('mesh', wallMesh);

        this.el.setAttribute('body', 'type: static; shape: none');
        this.el.setAttribute('shape', 'shape: box; halfExtents: 5 2.5 0.05');
        this.el.setAttribute('dynamic-body', '');

    },
});
