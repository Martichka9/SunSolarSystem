//function to build the system elements
export function buildARock (size,type,color,cShadow,rShadow,x,y,z,haveRings){
    let geo, mater, rock, rings; 
    geo = new THREE.SphereBufferGeometry(size,32,32);

    if(type === 'star'){
        mater = new THREE.MeshPhysicalMaterial( {color: color, transparent: true, opacity: 0.5} )
    }
    else if(type === 'planet'){
        mater = new THREE.MeshLambertMaterial( {color: color} )
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
        planetWithRings.rotateX(Math.PI/1.69);
        return planetWithRings;
    }
    else {
        rock.position.set(x,y,z);
        return rock;
    }
}

function addRings (innerR,outerR){
    let geo, mater, rings; 
    geo = new THREE.RingBufferGeometry( 100, 200, 30, 30, 0, 6.3);
    mater = new THREE.MeshBasicMaterial( { color: 0xc1c1c1, side: THREE.DoubleSide } );
    rings = new THREE.Mesh( geo, mater );
    rings.castShadow = false;
    rings.receiveShadow = false;

    return rings;
}