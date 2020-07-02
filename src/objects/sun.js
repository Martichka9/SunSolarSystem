import { Lensflare, LensflareElement } from 'three/examples/jsm/objects/Lensflare.js';
import img0 from '../imgs/lensflare0.png';
import img3 from '../imgs/lensflare3.png';
import {buildARock} from './build-a-rock.js';

//build sunlight similar light
function addLight( h, s, l, x, y, z ) {

    // lensflares
    var textureLoader = new THREE.TextureLoader();
    var textureFlare0 = textureLoader.load( img0 );
    var textureFlare3 = textureLoader.load( img3 );

    var light = new THREE.PointLight( 0xff0000, 2, 5000 );
    light.color.setHSL( h, s, l );
    light.position.set( x, y, z );

    var lensflare = new Lensflare();
    lensflare.addElement( new LensflareElement( textureFlare0, 1090, 0, light.color ) );
    lensflare.addElement( new LensflareElement( textureFlare3, 800, 0.6 ) );
    lensflare.addElement( new LensflareElement( textureFlare3, 1190, 0.7 ) );
    lensflare.addElement( new LensflareElement( textureFlare3, 600, 0.9 ) );
    lensflare.addElement( new LensflareElement( textureFlare3, 300, 1 ) );
    light.add( lensflare );

    return light;
}

var sunlight = addLight( 0.08, 0.8, 0.5, 0, 0, 0 );

//sun
var sun = buildARock(1090,'star','0xffae42',false,false,0,0,0);

export {sunlight,sun};