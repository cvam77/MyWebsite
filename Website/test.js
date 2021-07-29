// plane 2
const geometry = new THREE.PlaneGeometry( 1,1 );
const material = new THREE.MeshBasicMaterial( {color: 0xff0000, side: THREE.DoubleSide} );
const plane2 = new THREE.Mesh( geometry, material );
scene.add( plane2 );
// plane2.position.setX(1);
// plane2.position.setZ(50);

const planeFolder2 = gui.addFolder("plane2");
planeFolder2.add(plane2.position,"x",-50,50);
planeFolder2.add(plane2.position,"y",-50,50);
planeFolder2.add(plane2.position,"z",-50,50);
planeFolder2.add(plane2.rotation,"x",-Math.PI*2,Math.PI*2);
planeFolder2.add(plane2.rotation,"y",-Math.PI*2,Math.PI*2);
planeFolder2.add(plane2.rotation,"z",-Math.PI*2,Math.PI*2);
planeFolder2.open();