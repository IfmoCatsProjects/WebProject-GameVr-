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

            <Scene physics="debug: true" environment={{ preset: 'tron', shadow: true }}>

                <Entity primitive="a-camera" look-controls restrict-position>
                    <Entity
                        body="type: static; shape: sphere; sphereRadius: 0.001"
                        super-hands="colliderEvent: raycaster-intersection;
                             colliderEventProperty: els;
                             colliderEndEvent:raycaster-intersection-clearedEls;
                             colliderEndEventProperty: clearedEls;"
                        primitive="a-cursor"
                        cursor={{ fuse: false }}
                        material={{ color: 'white', shader: 'flat', opacity: 0.75 }}
                        geometry={{ radiusInner: 0.005, radiusOuter: 0.007 }}
                        event-set__1={{
                            _event: 'mouseenter',
                            scale: { x: 1.4, y: 1.4, z: 1.4 }
                        }}
                        event-set__2={{
                            _event: 'mouseleave',
                            scale: { x: 1, y: 1, z: 1 }
                        }}
                        raycaster={{
                            objects: '.clickable'
                        }}
                    />
                </Entity>

                <Entity
                    class="transformer"
                    position="0 1.6 -1"
                    color-randomizer=""
                    droppable=""
                    body="type: static; shape: none"
                    shape="shape: box; halfExtents: 0.25 0.25 0.25"
                    geometry="primitive: box; width: 0.5; height: 0.5; depth: 0.5"
                    event-set__dragon="_event: dragover-start; material.color: orange"
                    event-set__dragoff="_event: dragover-end; material.color: purple"
                    material="color:purple"
                    shadow
                >
                    <Entity
                        text="value: Drag&drop to change color; width: 0.5; wrapCount: 12; align: center"
                        position="0 0 0.25"
                    ></Entity>
                </Entity>

                <Entity class="cube clickable" dynamic-body capture-mouse position="0 0.265 -1" custom-cube></Entity>

                {[
                    { position: '0 2 5', rotation: '0 0 0' },
                    { position: '5 2 0', rotation: '0 90 0' },
                    { position: '-5 2 0', rotation: '0 90 0' },
                    { position: '0 2 -5', rotation: '0 0 0' },
                ].map((wall, index) => (
                    <Entity key={index} wall  position={wall.position} rotation={wall.rotation} />
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
