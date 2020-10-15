function lookAtPlanet(planet, camera){
    let planetPos = new THREE.Vector3();
    planetPos.setFromMatrixPosition( planet.matrixWorld); //get planet's position
    let quaternion = new THREE.Quaternion(planetPos.x, planetPos.y, planetPos.z, 1);//pass position to quaternion
    zoomCam(camera);
    camera.applyQuaternion(quaternion); // Apply Quaternion
    camera.quaternion.normalize();
    camera.lookAt(planetPos);//Look at object
    camera.updateProjectionMatrix();
    // camera.updateWorldMatrix();
}

function zoomCam(camera){
    //zoom slowly to selected planet
    if (camera.fov > 0.2 && camera.fov > 3) {
        camera.fov -= 0.1;
    }
    else if (camera.fov > 0.2 && camera.fov < 3){
        camera.fov -= 0.02;
    }
}

export {lookAtPlanet,zoomCam};