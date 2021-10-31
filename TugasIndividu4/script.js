import * as THREE from "./three/three.module.js";
import { OrbitControls } from "./three/jsm/controls/OrbitControls.js";
import { FBXLoader } from './three/jsm/loaders/FBXLoader.js';

// Get Canvas and set Renderer
const canvas = document.getElementById("c");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.outputEncoding = THREE.sRGBEncoding;

const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0xfefefe, 1, 900);

// Create the world
const worldGeometry = new THREE.SphereGeometry(700, 80, 80);
const worldTexture = new THREE.TextureLoader().load("R.jpg");
const worldMaterial = new THREE.MeshBasicMaterial({ color: 0xFFFFFF, map: worldTexture, side: THREE.DoubleSide });
const worldMesh = new THREE.Mesh(worldGeometry, worldMaterial);
worldMesh.castShadow = true;
worldMesh.receiveShadow = true;
scene.add(worldMesh);

const worldFloor = new THREE.BoxGeometry(200, 2, 100);
const floorMaterial = new THREE.MeshPhysicalMaterial({ color: 0x10a0b0, side: THREE.DoubleSide });
const floorMesh = new THREE.Mesh(worldFloor, floorMaterial);
floorMesh.position.set(0, -1, 0);
floorMesh.receiveShadow = true;
scene.add(floorMesh);

// Add Light
const light = new THREE.PointLight(0xFFFFFF, 1);
light.position.set(100, 100, 10);
light.castShadow = true;
light.shadow.radius = 3;
scene.add(light);

const alight = new THREE.AmbientLight();
scene.add(alight);

// Add Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.set(10, 100, 0);
scene.add(camera);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
controls.dampingFactor = 0.05;
controls.screenSpacePanning = false;

// Positions for Beriev-A50 object
let pos = [];
pos.push(25, 300, 375);
pos.push(-15, 300, 335);
pos.push(55, 300, 335);
pos.push(-45, 300, 305);
pos.push(85, 300, 305);

// Load object and add to scene
for (let i = 0; i < pos.length; i += 3) {
    const loader = new FBXLoader();
    loader.load(
        './model/Beriev_A50/BerievA50.FBX',
        function (object) {
            object.position.set(pos[i], pos[i + 1], pos[i + 2]);
            object.scale.set(0.3, 0.3, 0.3);
            scene.add(object);
        },

        function (xhr) {
            console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        },

        function (error) {
            console.log('An error happened');
        }
    );
}

const reflText = worldTexture;
reflText.mapping = THREE.EquirectangularReflectionMapping;
reflText.encoding = THREE.GammaEncoding;

let newGeo = new THREE.SphereGeometry(10, 8, 8);
let newMat = new THREE.MeshPhysicalMaterial({
    clearcoat: 1.0,
    cleacoatRoughness: 0.1,
    metalness: 0.9,
    color: 0xffffff,
    transmission: 1,
    opacity: 1,
    envMap: reflText
});
newMat.envMapIntensity = 1;
let newMesh = new THREE.Mesh(newGeo, newMat);
newMesh.castShadow = true;
newMesh.receiveShadow = true;
newMesh.position.set(-10, 10, -10);
scene.add(newMesh);

// Rin wangi wangi, texture nya transparan :(
const rinLoader = new FBXLoader();
rinLoader.load(
    './model/Rin/Rin.fbx',
    function (object) {
        object.position.set(10, 1, 10);
        object.scale.set(0.3, 0.3, 0.3);
        object.traverse(function (child) {
            if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = false;
            }
        });
        scene.add(object);
    },

    function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },

    function (error) {
        console.log('An error happened');
    }
);

window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    render()
}

function render(time) {
    renderer.render(scene, camera);
    controls.update();
    requestAnimationFrame(render);
}

requestAnimationFrame(render);