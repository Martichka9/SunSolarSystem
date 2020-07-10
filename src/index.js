import * as THREE from 'three';
import {sunlight, sun} from './objects/sun.js';
import * as PLANETS from './objects/planets.js';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';

let planets =  [PLANETS.mercury,
                PLANETS.venus,
                PLANETS.earth,
                PLANETS.mars,
                PLANETS.jupiter,
                PLANETS.saturn,
                PLANETS.uranus,
                PLANETS.neptune,
                PLANETS.pluto];

//body and canvas styles set
document.getElementsByTagName('body')[0].style.margin = 0;
document.getElementsByTagName('body')[0].style.overflow = 'hidden';

//main vars
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 43, window.innerWidth / window.innerHeight, 1, 10000 );
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
planets.forEach((x) => {scene.add(x);});
// scene.add();

//Get planets tilt in radians for the rotation function
// console.log("Меркурий", THREE.Math.degToRad(0.01));//0.00017453292519943296
// console.log("Венера", THREE.Math.degToRad(2.64));//0.0460766922526503
// console.log("Земя", THREE.Math.degToRad(23.44));//0.40910517666747087
// console.log("Марс", THREE.Math.degToRad(25.19));//0.4396484385773716
// console.log("Юпитер", THREE.Math.degToRad(3.13));//0.054628805587422516
// console.log("Сатурн", THREE.Math.degToRad(26.73));//0.4665265090580843
// console.log("Уран", THREE.Math.degToRad(97.77));//1.706408409674856
// console.log("Нептун", THREE.Math.degToRad(28.39));//0.4954989746411902
// console.log("Плутон", THREE.Math.degToRad(119.61));//2.0875883183104174

var animate = function () {
    requestAnimationFrame( animate );

    PLANETS.earth.rotation.set(0.001,0.01,0.1);
    controls.update();
    renderer.render( scene, camera );
};

animate();
