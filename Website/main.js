import './style.css'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

let scene, camera, renderer;
function init(){
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xdddddd);

  camera = new THREE.PerspectiveCamera(40,window.innerWidth/window.innerHeight,1,5000);
  camera.rotation.y = 45/180 * Math.PI;
  camera.position.x = 800;
  camera.position.y = 100;
  camera.position.z = 1000;

  renderer = new THREE.WebGLRenderer({antialias: true});
  renderer.setSize(window.innerWidth,window.innerHeight);
  document.body.appendChild(renderer.domElement);
  
  const controls = new OrbitControls(camera,renderer.domElement);
  // controls.addEventListener('change',renderer);

  const hlight = new THREE.AmbientLight(0x404040,100);

  scene.add(hlight);

  const pointLight = new THREE.PointLight(0xffffff);
  pointLight.position.set(200,400,200);
  scene.add(pointLight);

  const lightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(200,50);
scene.add(lightHelper,gridHelper);

  // const directionalLight = new THREE.DirectionalLight(0xffffff,100);
  // directionalLight.position.set(0,1,0);
  // directionalLight.castShadow = true;
  // scene.add(directionalLight);

  // const light = new THREE.PointLight(0xc4c4c4,10);
  // light.position.set(0,300,500);
  // scene.add(light);

  // const light2 = new THREE.PointLight(0xc4c4c4,10);
  // light2.position.set(500,100,100);
  // scene.add(light2);

  // const light3 = new THREE.PointLight(0xc4c4c4,10);
  // light3.position.set(0,100,500);
  // scene.add(light3);

  // const light4 = new THREE.PointLight(0xc4c4c4,10);
  // light4.position.set(-500,300,100);
  // scene.add(light4);
  
  

  let loader = new GLTFLoader();
  loader.load('scene.gltf',function(gltf){
    const desk = gltf.scene.children[0];
    console.log(desk);
    desk.scale.set(140,140,140);
    scene.add(gltf.scene);
    animate();
  });
}

function animate(){

  renderer.render(scene,camera);
  requestAnimationFrame(animate);
}

init();




//The first three js website part - moon, Shivam, mobile, torusgeometry

// const scene = new THREE.Scene();

// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight,0.1,1000);

// const renderer = new THREE.WebGLRenderer({
//   canvas: document.querySelector('#bg'),
// })

// renderer.setPixelRatio(window.devicePixelRatio);

// renderer.setSize(window.innerWidth,window.innerHeight);

// camera.position.setZ(30);

// renderer.render(scene,camera);

// const geometry = new THREE.TorusGeometry(10, 3, 16, 100);

// const material = new THREE.MeshStandardMaterial({color: 0xFF6347});
// const torus = new THREE.Mesh(geometry,material);

// // scene.add(torus)

// const pointLight = new THREE.PointLight(0xffffff);
// pointLight.position.set(5,5,5);

// const ambientLight = new THREE.AmbientLight(0xffffff);
// scene.add(pointLight,ambientLight);

// const lightHelper = new THREE.PointLightHelper(pointLight);
// const gridHelper = new THREE.GridHelper(200,50);
// scene.add(lightHelper,gridHelper);

// const controls = new OrbitControls(camera, renderer.domElement);

// function addStar(){
//   const geometry = new THREE.SphereGeometry(0.25,24,24);
//   const material = new THREE.MeshStandardMaterial({color: 0xffffff})
//   const star = new THREE.Mesh(geometry,material);

//   const [x,y,z] = Array(3).fill().map(()=> THREE.MathUtils.randFloatSpread(100));

//   star.position.set(x,y,z);
//   scene.add(star);
// }

// Array(200).fill().forEach(addStar);

// const spaceTexture = new THREE.TextureLoader().load('./images/space.jpg');
// scene.background = spaceTexture;

// const shivamTexture = new THREE.TextureLoader().load('./images/shivam.jpg');

// const shivam = new THREE.Mesh(
//   new THREE.BoxGeometry(3,3,3),
//   new THREE.MeshBasicMaterial({ map: shivamTexture })
// );

// // scene.add(shivam);

// const mobileTexture = new THREE.TextureLoader().load('./images/mob.jpg');

// const mobile = new THREE.Mesh(
//   new THREE.PlaneGeometry(10,10),
//   new THREE.MeshBasicMaterial({ map: mobileTexture })
// );


// // mobile.position.z = 8;
// mobile.position.setX(30);

// // scene.add(mobile)

// function moveCamera(){

//   const t = document.body.getBoundingClientRect().top;
//   mobile.rotation.x += 0.05;
//   mobile.rotation.y += 0.075;
//   mobile.rotation.z += 0.05;

//   shivam.rotation.y += 0.01;
//   shivam.rotation.z += 0.01;

//   camera.position.z = t * -0.01;
//   camera.position.x = t * -0.0002;
//   camera.position.y = t * -0.0002;
// }

// document.body.onscroll = moveCamera


// function animate(){
//   requestAnimationFrame(animate);

//   torus.rotation.x += 0.01;
//   torus.rotation.y += 0.005;
//   torus.rotation.z += 0.01;

//   controls.update();
  
//   renderer.render(scene,camera);
// }

// animate()