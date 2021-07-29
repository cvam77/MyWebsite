import './project.css'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as dat from 'dat.gui';
// import * as THREEx from 'threex.domevents';

// var THREE = require('three') // require peer dependency
// var initializeDomEvents = require('threex.domevents')
// var THREEx = {}
// initializeDomEvents(THREE, THREEx)


let scene, renderer;
const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);

function init(){
  

  // var domEvents	= new THREEx.DomEvents(camera, renderer.domElement)

 
  
  scene = new THREE.Scene();
  // const spaceTexture = new THREE.TextureLoader().load('./images/black.jpg');
  // scene.background = spaceTexture;

  // camera.rotation.y = 45/180 * Math.PI;
  // camera.position.x = 800;
  // camera.position.y = 0;

  // FOR FUTURE
  // camera.position.z = -20; 
  // camera.position.z = 100;
  
  renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#projectone'),
  })
  
  // renderer.setSize(350,350);
  renderer.setSize(window.innerWidth,window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  renderer.render(scene,camera);


  
  // const controls = new OrbitControls(camera,renderer.domElement);    

  const ambientLight = new THREE.AmbientLight(0x404040,100);
  scene.add(ambientLight)

  scene.add(new THREE.AxesHelper(500));
  const gridHelper = new THREE.GridHelper(200,50);
  // scene.add(lightHelper,gridHelper);
  scene.add(gridHelper);  

  const gui = new dat.GUI();
  const cameraFolder = gui.addFolder("Camera");
  cameraFolder.add(camera.position,"x",-200,200);
  cameraFolder.add(camera.position,"y",-200,200);
  cameraFolder.add(camera.position,"z",-200,200);
  cameraFolder.open();

  // plane 1

  const shivamTexture = new THREE.TextureLoader().load('./images/zayve-para.png');

  const geometry = new THREE.PlaneGeometry( 12,2 );
  const material = new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide, map: shivamTexture} );
  const plane1 = new THREE.Mesh( geometry, material );
  scene.add( plane1 );
  plane1.position.setX(4.5);
  plane1.position.setY(-3);
  plane1.position.setZ(0);
  // plane1.position.setZ(50);
  // plane1.rotation.y = 1;

  const planeFolder1 = gui.addFolder("Plane1");
  planeFolder1.add(plane1.position,"x",-50,50);
  planeFolder1.add(plane1.position,"y",-50,50);
  planeFolder1.add(plane1.position,"z",-50,50);
  planeFolder1.add(plane1.rotation,"x",-Math.PI*2,Math.PI*2);
  planeFolder1.add(plane1.rotation,"y",-Math.PI*2,Math.PI*2);
  planeFolder1.add(plane1.rotation,"z",-Math.PI*2,Math.PI*2);
  planeFolder1.open();
  // gui.add(plane.position,"x",0,200);
  // gui.add(plane.rotation,"y",0,Math.PI*2);
  // gui.add(plane.rotation,"z",0,Math.PI*2);
  // gui.add(plane.scale,"x",0,200);

  // plane 2
  const geometry2 = new THREE.PlaneGeometry( 12,2 );
  const material2 = new THREE.MeshBasicMaterial( {color: 0x0000ff, side: THREE.DoubleSide, map: shivamTexture} );
  const plane2 = new THREE.Mesh( geometry2, material2 );
  scene.add( plane2 );
  plane2.position.setX(-4.5);
  plane2.position.setY(3);
  plane2.position.setZ(10);
  // plane2.rotation.Y = 1;



  const planeFolder2 = gui.addFolder("plane2");
  planeFolder2.add(plane2.position,"x",-50,50);
  planeFolder2.add(plane2.position,"y",-50,50);
  planeFolder2.add(plane2.position,"z",-50,50);
  planeFolder2.add(plane2.rotation,"x",-Math.PI*2,Math.PI*2);
  planeFolder2.add(plane2.rotation,"y",-Math.PI*2,Math.PI*2);
  planeFolder2.add(plane2.rotation,"z",-Math.PI*2,Math.PI*2);
  planeFolder2.open();
  
  // const domEvents = new THREEx.DomEvents();
  // var domEvents = new THREEx.DomEvents(camera, renderer.domElement)

  // domEvents.addEventListener(plane2,'click', (event) => {
  //   console.log("yoooo")
  // })

  //plane 3
  const material3 = new THREE.MeshBasicMaterial( {color: 0xff0000, side: THREE.DoubleSide, map: shivamTexture} );
  const plane3 = new THREE.Mesh( geometry, material3 );
  scene.add( plane3 );
  plane3.position.setX(3);
  plane3.position.setY(3);
  plane3.position.setZ(20);

  const material4 = new THREE.MeshBasicMaterial( {color: 0x00ff00, side: THREE.DoubleSide, map: shivamTexture} );
  const plane4 = new THREE.Mesh( geometry, material4 );
  scene.add( plane4 );
  plane4.position.setX(-3);
  plane4.position.setY(-3);
  plane4.position.setZ(30);

  Array(200).fill().forEach(addStar);

  animate()
}


window.addEventListener('scroll', function() {
  translate(5,10,'one',1)
  translate(15,21,'two',2)
  translate(25,30,'three',1)
  translate(35,40,'four',2)
  
})

function translate(start, end, divname, order){
  
  
    if(camera.position.z > start && camera.position.z < end )
    {
      document.querySelector(`.each-project.${divname}`).style.transform = 'translateX(0px)';
    } else{
      if(order === 1)
      {
        document.querySelector(`.each-project.${divname}`).style.transform = 'translateX(-1000px)';
      } else if(order == 2)
      {
        document.querySelector(`.each-project.${divname}`).style.transform = 'translateX(1000px)';

      }
    }
  
}

function animate(){
  
  renderer.render(scene,camera);

  

  requestAnimationFrame(animate);
}

init();
document.body.onscroll = moveCamera


function addStar(){
  const geometry = new THREE.SphereGeometry(0.25,24,24);
  const material = new THREE.MeshStandardMaterial({color: 0xffffff})
  const star = new THREE.Mesh(geometry,material);

  const [x,y,z] = Array(3).fill().map(()=> THREE.MathUtils.randFloatSpread(100));

  star.position.set(x,y,z);
  scene.add(star);
}

function moveCamera(){

  const t = document.body.getBoundingClientRect().top;
  // console.log(t);
  // mobile.rotation.x += 0.05;
  // mobile.rotation.y += 0.075;
  // mobile.rotation.z += 0.05;

  // shivam.rotation.y += 0.01;
  // shivam.rotation.z += 0.01;

  // For FUTURE
    camera.position.z = t * -0.02;
    console.log(camera.position.z);
    // camera.position.z =  camera.position.z* 0.9;

    // console.log(camera.position);

  // camera.position.x = t * -0.0002;
  // camera.position.y = t * -0.0002;
  // console.log("camera position");
  // console.log(camera.position);
  // console.log("");
}


