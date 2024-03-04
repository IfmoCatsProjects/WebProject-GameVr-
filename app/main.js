/**
 * @fileoverview
 * This is our main A-Frame application.
 * It defines the main A-Frame Scene which gets mounted root div.
 */

import {h, Component} from 'preact'
import {Entity, Scene} from 'aframe-react'

class Main extends Component {
    render() {
        return (
            <Scene physics="debug: true" environment={{preset: 'egypt', shadow: true}}>

                <Entity camera look-controls wasd-controls position="0 1 1"
                        restrict-position /* ограничение игрока */
                        body="type: static; shape: sphere; sphereRadius: 0.001"
                        raycaster cursor="rayOrigin:mouse"
                        super-hands={{
                            colliderEvent: 'raycaster-intersection',
                            colliderEventProperty: 'els',
                            colliderEndEvent: 'raycaster-intersection-cleared',
                            colliderEndEventProperty: 'clearedEls'
                        }}
                >
                    <Entity
                        primitive="a-cursor"
                        cursor={{fuse: false}}
                        material={{color: 'white', shader: 'flat', opacity: 0.75}}
                        geometry={{radiusInner: 0.005, radiusOuter: 0.007}}
                        event-set__1={{
                            _event: 'mouseenter',
                            scale: {x: 1.4, y: 1.4, z: 1.4}
                        }}
                        event-set__2={{
                            _event: 'mouseleave',
                            scale: {x: 1, y: 1, z: 1}
                        }}
                        raycaster={{
                            objects: '.clickable'
                        }}
                    />
                </Entity>

                {/*контроллеры для вр-сета*/}
                {/*hoverable grabbable="startButtons: triggerdown; endButtons: trackpadup"*/}
                <Entity hand-controls="hand: left" id="controller"
                        super-hands
                        static-body="shape: sphere; sphereRadius: 0.02;"
                ></Entity>
                <Entity hand-controls="hand: right" id="controller"
                        super-hands
                        static-body="shape: sphere; sphereRadius: 0.02;"
                ></Entity>

                {/* кубик для взаимодествия, + добавлено измение цвета при "фиксации" на нём
                при поднятии и отпускании обоих кубов (драгНдроп) каждый меняется на сферу (пытаюсь в объединение)
                */}

                <Entity class="cube clickable" dynamic-body capture-mouse position="0 0.265 -1" custom-cube
                        event-set__dragdrop="_event: drag-drop; geometry.primitive: sphere; geometry.radius: 0.25"
                        event-set__hoveron="_event: hover-start; material.opacity: 0.7; transparent: true"
                        event-set__hoveroff="_event: hover-end; material.opacity: 1; transparent: false"
                        event-set__dragon="_event: dragover-start; material.wireframe: true"
                        event-set__dragoff="_event: dragover-end; material.wireframe: false"></Entity>
                <Entity class="cube clickable" dynamic-body capture-mouse position="0 0.965 -1" custom-cube
                        event-set__dragdrop="_event: drag-drop; geometry.primitive: sphere; geometry.radius: 0.25"
                        event-set__hoveron="_event: hover-start; material.opacity: 0.7; transparent: true"
                        event-set__hoveroff="_event: hover-end; material.opacity: 1; transparent: false"
                        event-set__dragon="_event: dragover-start; material.wireframe: true"
                        event-set__dragoff="_event: dragover-end; material.wireframe: false"></Entity>

                {/*пример из документации реакт+a-frame*/}
                <Entity gltf-model={{src: 'extinguisher.gltf'}}/>


                {/*walls*/}
                {[
                    {position: '0 2 5', rotation: '0 0 0'},
                    {position: '5 2 0', rotation: '0 90 0'},
                    {position: '-5 2 0', rotation: '0 90 0'},
                    {position: '0 2 -5', rotation: '0 0 0'},
                ].map((wall, index) => (
                    <Entity key={index} wall position={wall.position} rotation={wall.rotation}/>
                ))}
                {/* Ground collider, предотвращающий падение объектов */}
                <Entity
                    primitive="a-box"
                    body="type: static; shape: none"
                    shape="shape: box; halfExtents: 50 0.0005 50"
                    width={100}
                    height={0.001}
                    depth={100}
                    visible={false}
                ></Entity>
            </Scene>
        );
    }
}

export default Main;
