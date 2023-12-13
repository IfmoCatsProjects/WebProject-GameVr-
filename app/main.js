/**
 * @fileoverview
 * This is our main A-Frame application.
 * It defines the main A-Frame Scene which gets mounted root div.
 */

import {h, Component} from 'preact'
import {Entity, Scene} from 'aframe-react'
import 'super-hands';


const COLORS = ['#D92B6A', '#9564F2', '#FFCF59']

class Main extends Component {
    render() {
        return (
            <Scene physics environment={{ preset: 'tron', shadow: true }}>
                <a-assets>
                    <a-mixin
                        id="cube"
                        geometry="primitive: box; width: 0.33; height: 0.33; depth: 0.33"
                        hoverable
                        grabbable
                        stretchable
                        draggable
                        droppable
                        event-set__hoveron="_event: hover-start; material.opacity: 0.7; transparent: true"
                        event-set__hoveroff="_event: hover-end; material.opacity: 1; transparent: false"
                        body="shape: none"
                        shape="shape: box; halfExtents: 0.165 0.165 0.165"
                        shadow
                    ></a-mixin>
                </a-assets>

                <Entity
                    camera
                    look-controls
                    wasd-controls
                    position="0 1 1"
                    capture-mouse
                    raycaster
                    cursor="rayOrigin: mouse"
                    body="type: static; shape: sphere; sphereRadius: 0.001"
                    super-hands="colliderEvent: raycaster-intersection;
                 colliderEventProperty: els;
                 colliderEndEvent: raycaster-intersection-cleared;
                 colliderEndEventProperty: clearedEls;"
                ></Entity>

                <Entity
                    class="transformer"
                    position="0 1.6 -1"
                    color-randomizer
                    droppable
                    body="type: static; shape: none"
                    shape="shape: box; halfExtents: 0.25 0.25 0.25"
                    geometry="primitive: box; width: 0.5; height: 0.5; depth: 0.5"
                    event-set__dragon="_event: dragover-start; material.color: orange"
                    event-set__dragoff="_event: dragover-end; material.color: purple"
                    material="color: purple"
                    shadow
                >
                    <Entity text="value: Drag&drop to change color; width: 0.5; wrapCount: 12; align: center" position="0 0 0.25"></Entity>
                </Entity>

                <Entity class="cube" mixin="cube" position="0 0.265 -1" material="color: red"></Entity>
                <Entity class="cube" mixin="cube" position="0 0.265 -0.5" material="color: red"></Entity>

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
