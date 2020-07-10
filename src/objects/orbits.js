import * as PLANETS from './planets.js';

let planets = [
    PLANETS.mercury,
    PLANETS.venus,
    PLANETS.earth,
    PLANETS.mars,
    PLANETS.jupiter,
    PLANETS.saturn,
    PLANETS.uranus,
    PLANETS.neptune,
    PLANETS.pluto
];

let mercuryOrbit = new THREE.Object3D().add(PLANETS.mercury);
let venusOrbit = new THREE.Object3D().add(PLANETS.venus);
let earthOrbit = new THREE.Object3D().add(PLANETS.earth);
let marsOrbit = new THREE.Object3D().add(PLANETS.mars);
let jupiterOrbit = new THREE.Object3D().add(PLANETS.jupiter);
let saturnOrbit = new THREE.Object3D().add(PLANETS.saturn);
let uranusOrbit = new THREE.Object3D().add(PLANETS.uranus);
let neptuneOrbit = new THREE.Object3D().add(PLANETS.neptune);
let plutoOrbit = new THREE.Object3D().add(PLANETS.pluto);


// mercuryOrbit.add(PLANETS.mercury);
// venusOrbit.add(PLANETS.venus);
// earthOrbit.add(PLANETS.earth);
// marsOrbit.add(PLANETS.mars);
// jupiterOrbit.add(PLANETS.jupiter);
// saturnOrbit.add(PLANETS.saturn);
// uranusOrbit.add(PLANETS.uranus);
// neptuneOrbit.add(PLANETS.neptune);
// plutoOrbit.add(PLANETS.pluto);

let orbits = [mercuryOrbit, venusOrbit, earthOrbit, marsOrbit, jupiterOrbit, saturnOrbit, uranusOrbit, neptuneOrbit, plutoOrbit];

export {orbits}