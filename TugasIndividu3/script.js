import * as THREE from 'three';
import { OrbitControls } from './three/examples/js/controls/OrbitControls.js';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js';

let renderer, scene, camera, controls;
let sphere, cube, torus;
const objects = [];

function _init() {
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    document.body.appendChild(renderer.domElement);
    
    scene = new THREE.Scene();
    scene.background = new THREE.Color("rgb(186, 237, 255)");
    
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.set(0, 1.5, 0);
    // camera.position.set(15, 10, 25);
    
    // controls = new OrbitControls(camera, renderer.domElement);
    // controls.screenSpacePanning = false ;

    controls = new PointerLockControls(camera, renderer.domElement);
    scene.add(controls);


}


let setLight = () => {
    const lightTop = new THREE.DirectionalLight(0xffffff, 1);
    lightTop.position.set(0, 100, 0);
    scene.add(lightTop);
    const lightFront = new THREE.DirectionalLight(0xffffff, 1);
    lightFront.position.set(0, 0, -100);
    scene.add(lightFront);
    const lightBack = new THREE.DirectionalLight(0xffffff, 1);
    lightBack.position.set(0, 0, 100);
    scene.add(lightBack);
    const lightLeft = new THREE.DirectionalLight(0xffffff, 1);
    lightLeft.position.set(-100, 0, 0);
    scene.add(lightLeft);
    const lightRight = new THREE.DirectionalLight(0xffffff, 1);
    lightRight.position.set(100, 0, 0);
    scene.add(lightRight);
}

let addGeometry = () => { 
    const planeGeometry = new THREE.PlaneGeometry(150, 2, 1, 1);
    const planeMaterial = new THREE.MeshStandardMaterial({color: 0x4dff6a});
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.position.set(0,0,0);
    scene.add(plane);
  
}

function main() {
    _init();

    setLight();
    
    addGeometry();

    function render() {
        renderer.render(scene, camera);
        controls.update();
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}

main();