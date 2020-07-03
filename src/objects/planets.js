import {buildARock} from './build-a-rock.js';

var mercury = buildARock(2,'planet', 0xDBCECA,true,true,0,0,1128,0);
var venus = buildARock(4.5,'planet', 0xe39e1c,true,true,0,0,1162,0);
var earth = buildARock(5,'planet', 0x688d3c,true,true,0,0,1190,0);
var mars = buildARock(2.6,'planet', 0xa1251b,true,true,0,0,1242,0);
var jupiter = buildARock(56,'planet', 0x838586,true,true,0,0,1610,0);
var saturn = buildARock(47,'planet', 0xceb8b8,true,true,0,0,2044,1);
var uranus = buildARock(19.9,'planet', 0x7fabc3,true,true,0,0,3012,0);
var neptune = buildARock(19,'planet', 0x212354,true,true,0,0,4096,0);
var pluto = buildARock(1.2,'planet', 0x3B53C2,true,true,0,0,5040,0);

export {mercury, venus, earth, mars, jupiter, saturn, uranus, neptune, pluto};