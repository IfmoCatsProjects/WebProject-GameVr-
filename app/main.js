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

                <Entity template="camera"></Entity>

                {[
                    { position: '0 2 5', rotation: '0 0 0' },
                    { position: '5 2 0', rotation: '0 90 0' },
                    { position: '-5 2 0', rotation: '0 90 0' },
                    { position: '0 2 -5', rotation: '0 0 0' },
                ].map((wall, index) => (
                    <Entity key={index} wall  position={wall.position} rotation={wall.rotation} />
                ))}
                <a-mixin id="cube" geometry="primitive: box; width: 0.33; height: 0.33; depth: 0.33"
                         hoverable="" grabbable="maxGrabbers: NaN" stretchable="" draggable="" droppable=""
                             event-set__hoveron="_event: hover-start; material.opacity: 0.7; transparent: true"
                             event-set__hoveroff="_event: hover-end; material.opacity: 1; transparent: false"
                             body="shape: none" shape="shape: box; halfExtents: 0.165 0.165 0.165" shadow></a-mixin>
                <a-entity className="cube" mixin="cube" position="0 0.265 -1" material="color: red"></a-entity>
                <a-entity className="cube" mixin="cube" position="0 0.265 -0.5" material="color: red"></a-entity>
                <a-entity className="cube" mixin="cube" position="-1 0.265 -1" material="color: blue"></a-entity>
                <a-entity className="cube" mixin="cube" position="-1 0.265 -0.5" material="color: blue"></a-entity>
                <a-entity className="cube" mixin="cube" position="1 0.265 -1" material="color: green"></a-entity>
                <a-entity className="cube" mixin="cube" position="1 0.265 -0.5" material="color: green"></a-entity>
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
