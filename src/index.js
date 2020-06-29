import * as THREE from 'three';
import { Lensflare, LensflareElement } from 'three/examples/jsm/objects/Lensflare.js';
import img0 from './imgs/lensflare0.png';
import img3 from './imgs/lensflare3.png';

//main vars
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1000 );
camera.position.z = 100;

var light = new THREE.AmbientLight( 0x909009 ); // soft white light
scene.add( light );

//sunlight
var sunlight = new THREE.PointLight( 0xffffff, 2, 0 );
sunlight.position.set( 0, 0, 0 );
sunlight.castShadow = true;
scene.add( sunlight ); 

var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 ); 
scene.add( directionalLight );

// lensflares
var textureLoader = new THREE.TextureLoader();

var textureFlare0 = textureLoader.load( img0 );
var textureFlare3 = textureLoader.load( img3 );

addLight( 0.08, 0.8, 0.5, 0, 0, 0 );

function addLight( h, s, l, x, y, z ) {

    var light = new THREE.PointLight( 0xff0000, 1.5, 2000 );
    light.color.setHSL( h, s, l );
    light.position.set( x, y, z );

    var lensflare = new Lensflare();
    lensflare.addElement( new LensflareElement( textureFlare0, 700, 0, light.color ) );
    lensflare.addElement( new LensflareElement( textureFlare3, 60, 0.6 ) );
    lensflare.addElement( new LensflareElement( textureFlare3, 70, 0.7 ) );
    lensflare.addElement( new LensflareElement( textureFlare3, 120, 0.9 ) );
    lensflare.addElement( new LensflareElement( textureFlare3, 70, 1 ) );
    light.add( lensflare );

    
    scene.add( light );
}


//sun
// var sunGeo = new THREE.SphereBufferGeometry(10,32,32);
// var sunMater = new THREE.MeshPhysicalMaterial( {color: 0xffae42, transparent: true} )
// var sun = new THREE.Mesh(sunGeo,sunMater);
// sun.castShadow = false;
// sun.receiveShadow = false;
// sun.position.set(0,0,0);
// scene.add(sun);

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshLambertMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
cube.receiveShadow = true;
cube.castShadow = true;

cube.position.set( 20, 0, 0 );
scene.add( cube );


var animate = function () {
    requestAnimationFrame( animate );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render( scene, camera );
};

animate();
