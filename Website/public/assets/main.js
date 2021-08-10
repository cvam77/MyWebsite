// // import './style.css'
// // import * as THREE from '../node_modules/three/build/three.module.js';
// // import { OrbitControls } from '../node_modules/three/examples/jsm/controls/OrbitControls';
// // import { GLTFLoader } from '../node_modules/three/examples/jsm/loaders/GLTFLoader';

// let scene, camera, renderer,desk;
// let deskSwitch = false;
// function init(){
//   scene = new THREE.Scene();
//   scene.background = new THREE.Color(0x414a4c);

//   camera = new THREE.PerspectiveCamera(40,window.innerWidth/window.innerHeight,1,5000);
//   camera.rotation.y = 45/180 * Math.PI;
//   camera.position.x = 800;
//   camera.position.y = 100;
//   camera.position.z = 1000;

//   // renderer = new THREE.WebGLRenderer({antialias: true});
  
//   renderer = new THREE.WebGLRenderer({
//     canvas: document.querySelector('#bg'),
//   })
  
//   // renderer.setSize(window.innerWidth,window.innerHeight);
//   renderer.setSize(500,400);
//   renderer.setPixelRatio(window.devicePixelRatio);

//   // document.body.appendChild(renderer.domElement);
//   renderer.render(scene,camera);

  
//   const controls = new OrbitControls(camera,renderer.domElement);
//   // console.log(controls);
//   // controls.addEventListener('change',renderer);

//   const hlight = new THREE.AmbientLight(0x404040,100);

//   // scene.add(hlight);

//   // scene.background = 0x999999;
//   const pointLight = new THREE.PointLight(0xffffff);
//   pointLight.position.set(70,160,0);
//   // scene.add(pointLight);

//   var hemiLight = new THREE.HemisphereLight(0x000000,0xffffff,20);
//   // scene.add(hemiLight);

//   scene.add(new THREE.AxesHelper(500));
//   // const lightHelper = new THREE.PointLightHelper(pointLight);
//   const gridHelper = new THREE.GridHelper(200,50);
//   // scene.add(lightHelper,gridHelper);
//   scene.add(gridHelper);

//   const directionalLight = new THREE.DirectionalLight(0xffffff,10);
//   directionalLight.position.set(1,1,0);
//   directionalLight.castShadow = true;
//   const helper = new THREE.DirectionalLightHelper( directionalLight);
//   scene.add(helper,directionalLight);

//   //background color
//   // scene.background = new THREE.Color( 0x777777 );
  
//   // const light = new THREE.PointLight(0xc4c4c4,10);
//   // light.position.set(0,300,500);
//   // scene.add(light);
  
//   // const light2 = new THREE.PointLight(0xc4c4c4,10);
//   // light2.position.set(500,100,100);
//   // scene.add(light2);
  
//   // const light3 = new THREE.PointLight(0xc4c4c4,10);
//   // light3.position.set(0,100,500);
//   // scene.add(light3);
  
//   // const light4 = new THREE.PointLight(0xc4c4c4,10);
//   // light4.position.set(-500,300,100);
//   // scene.add(light4);
  
  
//   // const spaceTexture = new THREE.TextureLoader().load('./images/black.jpg');
//   // scene.background = spaceTexture;

//   let loader = new GLTFLoader();
  
//   let i = 0;
//   loader.load('scene.gltf',function(gltf){
//     desk = gltf.scene.children[0];
//     // console.log(desk);
//     desk.scale.set(70,60,55);
//     // desk.position.set(0,0,0);
//     // desk.rotation.z += 30;

//     desk.rotation.x +=0.3;
//     desk.rotation.y +=0.3;
//     desk.rotation.z +=-2.1;

//     // desk.rotation.x +=i;
//     // desk.rotation.y +=i;
//     // desk.rotation.z +=-i;
 
//     scene.add(gltf.scene);
//     deskSwitch = true;
//     animate();
//   });
// }


// function animate(){

//   if(deskSwitch){
//     // desk.rotation.z +=0.005;
//   }

//   renderer.render(scene,camera);
//   // console.log(scene);
//   requestAnimationFrame(animate);
// }

// init();




// //The first three js website part - moon, Shivam, mobile, torusgeometry

// // const scene = new THREE.Scene();

// // const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight,0.1,1000);

// // const renderer = new THREE.WebGLRenderer({
// //   canvas: document.querySelector('#bg'),
// // })

// // renderer.setPixelRatio(window.devicePixelRatio);

// // renderer.setSize(window.innerWidth,window.innerHeight);

// // camera.position.setZ(30);

// // renderer.render(scene,camera);

// // const geometry = new THREE.TorusGeometry(10, 3, 16, 100);

// // const material = new THREE.MeshStandardMaterial({color: 0xFF6347});
// // const torus = new THREE.Mesh(geometry,material);

// // // scene.add(torus)

// // const pointLight = new THREE.PointLight(0xffffff);
// // pointLight.position.set(5,5,5);

// // const ambientLight = new THREE.AmbientLight(0xffffff);
// // scene.add(pointLight,ambientLight);

// // const lightHelper = new THREE.PointLightHelper(pointLight);
// // const gridHelper = new THREE.GridHelper(200,50);
// // scene.add(lightHelper,gridHelper);

// // const controls = new OrbitControls(camera, renderer.domElement);

// // function addStar(){
// //   const geometry = new THREE.SphereGeometry(0.25,24,24);
// //   const material = new THREE.MeshStandardMaterial({color: 0xffffff})
// //   const star = new THREE.Mesh(geometry,material);

// //   const [x,y,z] = Array(3).fill().map(()=> THREE.MathUtils.randFloatSpread(100));

// //   star.position.set(x,y,z);
// //   scene.add(star);
// // }

// // Array(200).fill().forEach(addStar);


// // const shivamTexture = new THREE.TextureLoader().load('./images/shivam.jpg');

// // const shivam = new THREE.Mesh(
// //   new THREE.BoxGeometry(3,3,3),
// //   new THREE.MeshBasicMaterial({ map: shivamTexture })
// // );

// // // scene.add(shivam);

// // const mobileTexture = new THREE.TextureLoader().load('./images/mob.jpg');

// // const mobile = new THREE.Mesh(
// //   new THREE.PlaneGeometry(10,10),
// //   new THREE.MeshBasicMaterial({ map: mobileTexture })
// // );


// // // mobile.position.z = 8;
// // mobile.position.setX(30);

// // // scene.add(mobile)

// // function moveCamera(){

// //   const t = document.body.getBoundingClientRect().top;
// //   mobile.rotation.x += 0.05;
// //   mobile.rotation.y += 0.075;
// //   mobile.rotation.z += 0.05;

// //   shivam.rotation.y += 0.01;
// //   shivam.rotation.z += 0.01;

// //   camera.position.z = t * -0.01;
// //   camera.position.x = t * -0.0002;
// //   camera.position.y = t * -0.0002;
// // }

// // document.body.onscroll = moveCamera


// // function animate(){
// //   requestAnimationFrame(animate);

// //   torus.rotation.x += 0.01;
// //   torus.rotation.y += 0.005;
// //   torus.rotation.z += 0.01;

// //   controls.update();
  
// //   renderer.render(scene,camera);
// // }

// // animate()