/**
 * @fileoverview
 * This is our main A-Frame application.
 * It defines the main A-Frame Scene which gets mounted root div.
 */

import {h, Component} from 'preact'
import {Entity, Scene} from 'aframe-react'

const COLORS = ['#D92B6A', '#9564F2', '#FFCF59']

class Main extends Component {

    render() {
        return (
            <Scene
                environment={{
                    preset: 'japan',
                    seed: 1,
                    skyType: 'gradient',
                    lightPosition: 'distant',
                    fog: 0,
                    ground: 'flat',
                    groundYScale: 5.0,
                    groundTexture: 'squares',
                    groundColor: '#755b5c',
                    grid: 'dots'
                }}
            >
                <Entity primitive="a-camera" look-controls>
                    <Entity
                        primitive="a-cursor"
                        cursor={{fuse: false}}
                        material={{color: 'white', shader: 'flat', opacity: 0.75}}
                        geometry={{radiusInner: 0.005, radiusOuter: 0.007}}
                        raycaster crawling-cursor
                    />
                </Entity>
                <Entity
                    primitive="a-octahedron"
                    detail={2}
                    radius={2}
                    position={{ x: 2.5, y: 0.0, z: 0.0 }}
                    color="#FAFAF1"
                />

            </Scene>

        )
    }

    _handleClick() {
        this.setState({
            colorIndex: (this.state.colorIndex + 1) % COLORS.length
        })
    }
}

export default Main