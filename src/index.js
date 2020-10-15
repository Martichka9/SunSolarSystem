import * as THREE from 'three';
import {sunlight, sun} from './objects/sun.js';
import {planets, planetarDay} from './objects/planets.js';
import {orbits, orbitalPeriods} from './objects/orbits.js';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import * as MOVECAM from './cam-movement.js';
import { Plane } from 'three';
import './imgs/mkw.png';
import './imgs/stars-center.png';
import './imgs/8k_stars_milky_way.jpg';

//body and canvas styles set
document.getElementsByTagName('body')[0].style.margin = 0;
document.getElementsByTagName('body')[0].style.overflow = 'hidden';

//main vars
let scene = new THREE.Scene();
scene.background = new THREE.CubeTextureLoader()
	.setPath( './imgs/' )
	.load( [
		'mkw.png',
		'stars-center.png',
		'stars-center.png',
		'stars-center.png',
		'stars-center.png',
		'stars-center.png'
    ] );
let camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );
camera.position.set(1090,1000,5000);
camera.aspect = window.innerWidth / window.innerHeight;
//grouping camera with the planet that it will track
orbits[2].add(camera);

let light = new THREE.AmbientLight( 0x909009 ); // soft white light
scene.add( light );

let renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// let axesHelper = new THREE.AxesHelper( 6000 );
// scene.add( axesHelper );
// let controls = new OrbitControls( camera, renderer.domElement );

//sun
scene.add(sun);
scene.add( sunlight );

//planets
orbits.forEach((x) => {scene.add(x);});

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

let animate = function () {
    requestAnimationFrame( animate );

    //rotations of planets
    planets.forEach((planet,index) => {
        planet.rotation.y += planetarDay[index];
    });
    orbits.forEach((planet,index) => {
        planet.rotation.y += orbitalPeriods[index];
    });

    // controls.update();
    scene.updateMatrixWorld(); //Update world positions, so when planet is zoomed it will be centered
    //zoom to the Earth
    MOVECAM.lookAtPlanet(planets[2],camera);
    scene.updateWorldMatrix();
    renderer.render( scene, camera );
};

animate();
