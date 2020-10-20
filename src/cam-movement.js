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

let currentCam, targetXY, targetZ, planetPos, quaternion, zSpeed;
let move = new THREE.Vector3();
let backX = 100;
let backY = 100;

function lookAtPlanet(planet, camera, size, index, rotateCamera){
    // console.log("check planet ",index);
    if (rotateCamera == true){
        backX = camera.position.x < 0 ? -100: 100;
        backY = camera.position.y < 0 ? -100: 100;
        camMoveBack(camera, backX, backY, planet, size, index, rotateCamera); 
    }
    else {
        updateLookAt(camera,planet);
        zoomCam2(camera,planet,size,zoomAccelerations[index]);
    }
}

function camMoveBack(camera,backX,backY, planet, size, index) {
    if(camera.position.x != backX || camera.position.y != backY){
        move.x = camera.position.x < 0 ? camera.position.x-1.0 : camera.position.x +1.0;
        move.y = camera.position.y < 0 ? camera.position.y-1.0 : camera.position.y +1.0;
        move.z = camera.position.z > 0 ? camera.position.z + 10.0 : camera.position.z - 10.0;

        camera.position.set(move.x, move.y, move.z);
    }
    else {
        lookAtPlanet(planet, camera, size, index, false);
    }
}

function updateLookAt(camera,planet){
    planetPos = new THREE.Vector3();
    planetPos.setFromMatrixPosition( planet.matrixWorld); //get planet's position
    quaternion = new THREE.Quaternion(planetPos.x, planetPos.y, planetPos.z, 1);//pass position to quaternion
    camera.applyQuaternion(quaternion); // Apply Quaternion
    camera.quaternion.normalize();
    camera.lookAt(planetPos);//Look at object
    camera.updateProjectionMatrix();
    // camera.updateWorldMatrix();
}

function zoomCam2(camera,planet,size,accelerationAfter){
    currentCam = camera.position;
    targetXY = 15;
    targetZ = planet.position.z-size;
    move.x=currentCam.x;
    move.y=currentCam.y;
    move.z=currentCam.z;
    
    //acceleration for z axis
    switch(accelerationAfter){
        case 2000:
            zSpeed = 9.9;
            break;
        case 3000:
            zSpeed = 5.0;
            break;
        case 4000:
            zSpeed = 3.9;
            break;
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
    }
    else {
        console.log("on target reached",targetZ);
        console.log("cam", camera.position.z);
    }
}

function camSetMoveBack(camera) {
    backX = camera.position.x < 0 ? -100: 100;
    backY = camera.position.y < 0 ? -100: 100;
    if(camera.position.x < backX || camera.position.y < backY){
        return true;
    }
    else {return false;}
}

export {lookAtPlanet, camSetMoveBack};