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

var mercury = buildARock(2,'planet', 0xDBCECA,true,true,0,0,1128,0, mercuryMap );
var venus = buildARock(4.5,'planet', 0xe39e1c,true,true,0,0,1162,0, venusMap );
var earth = buildARock(5,'planet', 0x688d3c,true,true,0,0,1190,0, earthMap );
var mars = buildARock(2.6,'planet', 0xa1251b,true,true,0,0,1242,0, marsMap );
var jupiter = buildARock(56,'planet', 0x838586,true,true,0,0,1610,0, jupiterMap );
var saturn = buildARock(47,'planet', 0xceb8b8,true,true,0,0,2044,1, saturnMap );
var uranus = buildARock(19.9,'planet', 0x7fabc3,true,true,0,0,3012,0, uranusMap );
var neptune = buildARock(19,'planet', 0x212354,true,true,0,0,4096,0, neptuneMap );
var pluto = buildARock(1.2,'planet', 0x3B53C2,true,true,0,0,5040,0, plutoMap );

export {mercury, venus, earth, mars, jupiter, saturn, uranus, neptune, pluto};