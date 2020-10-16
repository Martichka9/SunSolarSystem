let zoomAccelerations = [
    2000,//Mercury
    2000,//Venus
    2000,//Earth
    2000,//Mars
    2000,//Jupiter
    3000,//Saturn
    4000,//Uranus
    5000,//Neptune
    6000 //Pluto
]

let currentCam, targetXY, targetZ, move, planetPos, quaternion, zSpeed;

function lookAtPlanet(planet, camera,size,index){
    //zoomCam(camera);
    zoomCam2(camera,planet,size,zoomAccelerations[index]);
    planetPos = new THREE.Vector3();
    planetPos.setFromMatrixPosition( planet.matrixWorld); //get planet's position
    quaternion = new THREE.Quaternion(planetPos.x, planetPos.y, planetPos.z, 1);//pass position to quaternion
    // camera.position.set(planet.position.x+15, planet.position.y, planet.position.z+15)
    camera.applyQuaternion(quaternion); // Apply Quaternion
    camera.quaternion.normalize();
    camera.lookAt(planetPos);//Look at object
    camera.updateProjectionMatrix();
    // camera.updateWorldMatrix();
}

//zoom by fov change
function zoomCam(camera){
    //zoom slowly to selected planet
    if (camera.fov > 0.2 && camera.fov > 3) {
        camera.fov -= 0.1;
    }
    else if (camera.fov > 0.2 && camera.fov < 3){
        camera.fov -= 0.02;
    }
}

function zoomCam2(camera,planet,size,accelerationAfter){
    currentCam = camera.position;
    targetXY = 15;
    targetZ = planet.position.z-size;
    move = new THREE.Vector3();
    move.x=currentCam.x;
    move.y=currentCam.y;
    move.z=currentCam.z;

    switch(accelerationAfter){
        case 2000:
            zSpeed = 9.9;
            break;
        // case 2001: earth
        //     zSpeed = 6.9;
        //     break;
        case 3000:
            zSpeed = 5.0;
            break;
        case 4000:
            zSpeed = 3.9;
            break;
        // case 4001: jupiter
        //     zSpeed = 4.0;
        //     break;
        default:
            zSpeed = 1.0;
    }

    if((Math.floor(currentCam.x) != targetXY
    || Math.floor(currentCam.y) != targetXY
    || Math.floor(currentCam.z) != targetZ)){
        if (Math.floor(currentCam.x) < targetXY
        && currentCam.z < accelerationAfter){move.x = Math.floor(currentCam.x+1.0)*1.0;}
        else if(Math.floor(currentCam.x) > targetXY
        && currentCam.z < accelerationAfter){move.x = Math.floor(currentCam.x-1.0)*1.0;}
        if (Math.floor(currentCam.y) < targetXY
        && currentCam.z < accelerationAfter){move.y = Math.floor(currentCam.y+1.0)*1.0;}
        else if(Math.floor(currentCam.y) > targetXY
        && currentCam.z < accelerationAfter){move.y = Math.floor(currentCam.y-1.0)*1.0;}
        if (Math.floor(currentCam.z) < targetZ){move.z = Math.floor(currentCam.z+zSpeed)*1.0;}
        else if(Math.floor(currentCam.z) > targetZ){move.z = Math.floor(currentCam.z-zSpeed)*1.0;} 
        
        camera.position.set(move.x,move.y,move.z); 
        console.log(currentCam);
    }
    // else{accelerationAfter.rotation.z -= 0.05;}
}

export {lookAtPlanet,zoomCam};