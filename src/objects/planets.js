import {buildARock} from './build-a-rock.js';
import mercuryMap from '../imgs/2k_mercury.jpg';
import venusMap from '../imgs/2k_venus_surface.jpg';
import earthMap from '../imgs/2k_earth_daymap.jpg';
import marsMap from '../imgs/2k_mars.jpg';
import jupiterMap from '../imgs/2k_jupiter.jpg';
import saturnMap from '../imgs/2k_saturn.jpg';
import uranusMap from '../imgs/2k_uranus.jpg';
import neptuneMap from '../imgs/2k_neptune.jpg';
import plutoMap from '../imgs/Pluto_-_Surface_Diversity.jpg';

var mercury = buildARock(2,'planet', 0xDBCECA, true, true, 0, 0, 1128, mercuryMap, 0.00017453292519943296, false );
var venus = buildARock(4.5,'planet', 0xe39e1c, true, true, 0, 0, 1162, venusMap, 0.0460766922526503, false );
var earth = buildARock(5,'planet', 0x688d3c, true, true, 0, 0, 1190, earthMap, 0.40910517666747087, false );
var mars = buildARock(2.6,'planet', 0xa1251b, true, true, 0, 0, 1242, marsMap, 0.4396484385773716, false );
var jupiter = buildARock(56,'planet', 0x838586, true, true, 0, 0, 1610, jupiterMap, 0.054628805587422516, false );
var saturn = buildARock(47,'planet', 0xceb8b8, true, true, 0, 0, 2044, saturnMap, 0.4665265090580843, true, 6, 2.5, 0.4665265090580843);
var uranus = buildARock(19.9,'planet', 0x7fabc3, true, true, 0, 0, 3012, uranusMap, 1.706408409674856, false );
var neptune = buildARock(19,'planet', 0x212354, true, true, 0, 0, 4096, neptuneMap, 0.4954989746411902, false );
var pluto = buildARock(1.2,'planet', 0x3B53C2, true, true, 0, 0, 5040, plutoMap, 2.0875883183104174, false );

export {mercury, venus, earth, mars, jupiter, saturn, uranus, neptune, pluto};