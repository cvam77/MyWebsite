const material3 = new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide, map: websiteTexture} );
const plane6 = new THREE.Mesh( geometry, material3 );
scene.add( plane6 );
plane6.position.setX(3);
plane6.position.setY(-3);
plane6.position.setZ(50);