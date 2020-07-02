import * as THREE from 'three';
import {sunlight, sun} from './objects/sun.js';

//main vars
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1000 );
camera.position.z = 100;

var light = new THREE.AmbientLight( 0x909009 ); // soft white light
scene.add( light );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//sun
//scene.add(sun);
scene.add( sunlight );

var animate = function () {
    requestAnimationFrame( animate );

    renderer.render( scene, camera );
};

animate();
