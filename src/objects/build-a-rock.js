import sRings from '../imgs/552-5527537_-mr2.png';
import { TextureLoader } from 'three';

//function to build the system elements
export function buildARock (size,type,color,cShadow,rShadow,x,y,z,haveRings, texture){
// export function buildARock (size,type,color,cShadow,rShadow,x,y,z,haveRings){
    let geo, mater, rock, rings; 
    geo = new THREE.SphereBufferGeometry(size,32,32);

    if(type === 'star'){
        mater = addTexture(texture);
        //mater = new THREE.MeshPhysicalMaterial( {color: color, transparent: true, opacity: 0.5} )
    }
    else if(type === 'planet'){
        mater = addTexture(texture);
        //mater = new THREE.MeshLambertMaterial( {color: color} )
        if(haveRings === 1){
            rings = addRings(size+6,size*2);
        }
    }

    rock = new THREE.Mesh(geo,mater);
    rock.castShadow = cShadow;
    rock.receiveShadow = rShadow;

    if(rings != undefined){
        let planetWithRings = new THREE.Object3D();
        planetWithRings.add(rock, rings);
        planetWithRings.position.set(x,y,z);
        return planetWithRings;
    }
    else {
        rock.position.set(x,y,z);
        return rock;
    }
}


//create rings
function addRings (innerR,outerR,){
    let geo, mater, rings; 
    geo = new THREE.RingBufferGeometry( 55, 100, 30, 30, 0, 6.3);
    let ringMap = new THREE.TextureLoader().load(sRings);
    mater = new THREE.MeshPhysicalMaterial( { map: ringMap, side: THREE.DoubleSide, transparent: true, opacity:0.8} );
    rings = new THREE.Mesh( geo, mater );
    rings.castShadow = false;
    rings.receiveShadow = false;
    rings.rotateX(Math.PI/1.69);

    return rings;
}

//textures
function addTexture(imgPath){
    var img = new THREE.TextureLoader().load(imgPath);
    var texturedMater = new THREE.MeshLambertMaterial( { map: img } );

    return texturedMater;
}