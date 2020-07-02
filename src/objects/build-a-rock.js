//function to build the system elements
export function buildARock (size,type,color,cShadow,rShadow,x,y,z){
    let geo, mater, rock; 
    geo = new THREE.SphereBufferGeometry(size,32,32);

    if(type === 'star'){
        mater = new THREE.MeshPhysicalMaterial( {color: color, transparent: true, opacity: 0.2} )
    }
    else if(type === 'planet'){
        mater = new THREE.MeshLambertMaterial( {color: color} )
    }

    rock = new THREE.Mesh(geo,mater);
    rock.castShadow = false;
    rock.receiveShadow = false;
    rock.position.set(0,0,0);

    return rock;
}
