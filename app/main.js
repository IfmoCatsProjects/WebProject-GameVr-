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
            <Scene physics="" environment={{ preset: 'tron', shadow: true }}>
                <Entity
                    camera=""
                    look-controls=""
                    wasd-controls=""
                    position="0 1 1"
                    capture-mouse=""
                    raycaster=""
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

                <Entity  class="cube clickable"
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
                         position="0 0.265 -1"
                         material="color: red"
                         super-hands={{
                            grabbable: true,
                            droppable: true,
                            events: {
                                hoverstart: function (e) {
                                    e.detail.dropped.setAttribute('material', 'opacity: 0.7; transparent: true');
                                },
                                hoverend: function (e) {
                                    e.detail.dropped.setAttribute('material', 'opacity: 1; transparent: false');
                                },
                            },
                        }}
                ></Entity>
                <Entity
                    class="cube"
                    position="-0.002679314229573926 0.16549986912581263 -1.0022609326291367"
                    material="color: red"
                    hoverable=""
                    grabbable="maxGrabbers: NaN"
                    stretchable=""
                    draggable=""
                    droppable=""
                    event-set__hoveron={{ _event: 'hover-start', material: { opacity: 0.7, transparent: true } }}
                    event-set__hoveroff={{ _event: 'hover-end', material: { opacity: 1, transparent: false } }}
                    velocity=""
                    body="sphereRadius: NaN"
                    shadow=""
                    transparent="false"
                    rotation="-0.000012777856045283518 0.7967365733314564 -0.00001618241056578558"
                    ammo-body=""
                ></Entity>

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
