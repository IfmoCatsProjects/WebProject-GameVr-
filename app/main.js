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
                        restrict-position
                        body="type: static; shape: sphere; sphereRadius: 0.001"
                        raycaster cursor="rayOrigin:mouse"
                        super-hands="colliderEvent: raycaster-intersection;
                                colliderEventProperty: els;
                                colliderEndEvent: raycaster-intersection-cleared;
                                colliderEndEventProperty: clearedEls;"
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
                <a-assets>
                    <a-asset-item id="fire" src="app/assets/models/extinguisher.gltf"></a-asset-item>
                </a-assets>
                <Entity
                    gltf-model="#extinguisher.gltf" // Reference to the model asset
                    position="0 1 -5"
                >
            </Entity>


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
