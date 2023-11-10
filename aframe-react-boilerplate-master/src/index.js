import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'red',
            spherePosition: {x: 0, y: 1, z: -5},
            userInput: '',
            rotation: {x: 0, y: 0, z: 0},
            scale: {x: 1, y: 1, z: 1},
            cylinderPosition: {x: 3, y: 0.5, z: -4},
            pyramidPosition: {x: -3, y: 0.5, z: -6}
        };
    }

    moveCylinder() {
        setInterval(() => {
            const newPosition = {
                x: this.state.cylinderPosition.x - 0.005,
                y: this.state.cylinderPosition.y,
                z: this.state.cylinderPosition.z
            };
            this.setState({
                cylinderPosition: newPosition
            });
        }, 50);
    }

    movePyramid() {
        setInterval(() => {
            const newPosition = {
                x: this.state.pyramidPosition.x + 0.005,
                y: this.state.pyramidPosition.y,
                z: this.state.pyramidPosition.z
            };
            this.setState({
                pyramidPosition: newPosition
            });
        }, 50);
    }



    componentDidMount() {
        this.moveCylinder();
        this.movePyramid();
    }


    changeColor() {
        const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
        this.setState({
            color: colors[Math.floor(Math.random() * colors.length)]
        });
    }

    render() {
        return (
            <Scene>
                <a-assets>
                    <img id="groundTexture" src="https://cdn.aframe.io/a-painter/images/floor.jpg"/>
                    <img id="skyTexture" src="https://cdn.aframe.io/a-painter/images/sky.jpg"/>
                </a-assets>

                <Entity primitive="a-plane" src="#groundTexture" rotation="-90 0 0" height="100" width="100"/>
                <Entity primitive="a-light" type="ambient" color="#445451"/>
                <Entity primitive="a-light" type="point" intensity="2" position="2 4 4"/>
                <Entity primitive="a-sky" height="2048" radius="30" src="#skyTexture" theta-length="90" width="2048"/>
                <Entity particle-system={{preset: 'snow', particleCount: 2000}}/>
                <Entity text={{value: 'Hello, A-Frame React!', align: 'center'}} position={{x: 0, y: 2, z: -1}}/>
                <Entity
                    geometry={{primitive: 'cylinder', radius: 0.5, height: 1}}
                    material={{color: 'green', opacity: 0.6}}
                    position={this.state.cylinderPosition}/>

                <Entity
                    geometry={{primitive: 'tetrahedron', radius: 0.5}}
                    material={{color: 'blue', opacity: 0.6}}
                    position={this.state.pyramidPosition}
                />


                <Entity
                    id="box"
                    geometry={{ primitive: 'box' }}
                    material={{ color: this.state.color, opacity: 0.6 }}
                    animation__rotate={{
                        property: 'rotation',
                        dur: 2000,
                        easing: 'linear',
                        loop: true,
                        to: '0 360 0'
                    }}
                    animation__scale={{
                        property: 'scale',
                        dir: 'alternate',
                        dur: 1000,
                        easing: 'easeInOutQuad',
                        loop: true,
                        to: '1.1 1.1 1.1'
                    }}
                    position={{ x: 0, y: 1, z: -3 }}
                    events={{ click: this.changeColor.bind(this) }}
                >
                    <Entity
                        animation__scale={{
                            property: 'scale',
                            dir: 'alternate',
                            dur: 1000,
                            loop: true,
                            to: '2 2 2'
                        }}
                        geometry={{ primitive: 'box', depth: 0.2, height: 0.2, width: 0.2 }}
                        material={{ color: '#24CAFF' }}
                    />
                </Entity>
            </Scene>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#sceneContainer'));
