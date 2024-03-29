/**
 * @fileoverview 
 * This file imports all our required packages.
 * It also includes 3rd party A-Frame components.
 * Finally, it mounts the app to the root node.
 */

import 'aframe'
import 'aframe-animation-component'
import 'aframe-ui-widgets'
import 'aframe-event-set-component'
import 'aframe-particle-system-component'
import './components/aframe-custom'
import './components/aframe-environment'
import './components/aframe-effects'
import './components/capture-mouse'
import './components/color-randomizer'
import './components/phase-shift'
import 'super-hands'
import 'aframe-physics-system'
import './components/wall-component'
import './components/cube-custom'
import './components/restrict-position'


import { h, render } from 'preact'
import Main from './main'


document.addEventListener('DOMContentLoaded', () => {
  render(<Main />, document.querySelector('#app'))
})
