import * as THREE from 'three';
import {sunlight, sun} from './objects/sun.js';
import * as PLANETS from './objects/planets.js';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';

//body and canvas styles set
document.getElementsByTagName('body')[0].style.margin = 0;
document.getElementsByTagName('body')[0].style.overflow = 'hidden';

//main vars
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 10000 );
camera.position.set(5000,5000,5000);
camera.aspect = window.innerWidth / window.innerHeight;

var light = new THREE.AmbientLight( 0x909009 ); // soft white light
scene.add( light );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var axesHelper = new THREE.AxesHelper( 6000 );
scene.add( axesHelper );
var controls = new OrbitControls( camera, renderer.domElement );

//sun
// scene.add(sun);
scene.add( sunlight );

//planets
scene.add(PLANETS.mercury,
          PLANETS.venus,
          PLANETS.earth,
          PLANETS.mars,
          PLANETS.jupiter,
          PLANETS.saturn,
          PLANETS.uranus,
          PLANETS.neptune,
          PLANETS.pluto);

var animate = function () {
    requestAnimationFrame( animate );

    PLANETS.earth.rotation.set(0.001,0.01,0.1);
    controls.update();
    renderer.render( scene, camera );
};

animate();
