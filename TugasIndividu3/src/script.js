import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

const scene = new THREE.Scene();
scene.background = new THREE.Color("rgb(186, 237, 255)");

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);

camera.position.z = 20;

const controls = new OrbitControls(camera, renderer.domElement);

const rayCaster = new THREE.Raycaster()

const objects = [];
let selected, clicked, mouse, clickedColor, selectedSavedColor;
let score = 0;

function randomInRange(from, to) {
    let x = Math.random() * (to - from);
    return x + from;
}

let setLight = () => {
    const lightTop = new THREE.DirectionalLight(0xffffff, 1);
    lightTop.position.set(20, 100, 0);
    scene.add(lightTop);
    const lightFront = new THREE.DirectionalLight(0xffffff, 1);
    lightFront.position.set(20, 0, -100);
    scene.add(lightFront);
    const lightBack = new THREE.DirectionalLight(0xffffff, 1);
    lightBack.position.set(20, 0, 100);
    scene.add(lightBack);
    const lightLeft = new THREE.DirectionalLight(0xffffff, 1);
    lightLeft.position.set(-120, 0, 0);
    scene.add(lightLeft);
    const lightRight = new THREE.DirectionalLight(0xffffff, 1);
    lightRight.position.set(120, 0, 0);
    scene.add(lightRight);
}

function addGeometry(obj, col) {
    let rChannel = [];
    let gChannel = [];
    let bChannel = [];
    for (let j = 0; j < col; j++) {
        rChannel.push(randomInRange(0, 250));
        gChannel.push(randomInRange(0, 250));
        bChannel.push(randomInRange(0, 250));
    }

    let boxGeometry = new THREE.BoxGeometry(5, 5, 5);
    let sphereGeometry = new THREE.SphereGeometry(2.5, 8, 8);
    let xPos = -30;
    let yPos = -20;
    let zPos = -20;
    for (let i = 0; i < obj; i++) {
        let getPos = () => {
            xPos = randomInRange(-40, 40);
            yPos = randomInRange(-20-10, 40-10);
            zPos = randomInRange(-20, -60);
        }
        let materialCube = new THREE.MeshPhysicalMaterial({
            roughness: 0,
            clearcoatRoughness: 0,
            clearcoat: .5,
            transmission: 0
        });
        let j = i % rChannel.length;
        let color = new THREE.Color("rgb(" + Math.floor(rChannel[j]) + ","
        + Math.floor(gChannel[j]) + "," + Math.floor(bChannel[j]) + ")");

        materialCube.color.set(color);
        let cube = new THREE.Mesh(boxGeometry, materialCube);
        getPos();
        cube.position.set(xPos, yPos, zPos);
        objects.push(cube);
        scene.add(cube);

        let materialSphere = new THREE.MeshPhongMaterial({
            side: THREE.DoubleSide
          });
        materialSphere.color.set(color);
        let sphere = new THREE.Mesh(sphereGeometry, materialSphere);
        getPos();
        sphere.position.set(xPos, yPos, zPos);
        objects.push(sphere);
        scene.add(sphere);
    }
}

class PickHelper {
    constructor() {
        this.raycaster = new THREE.Raycaster();
        this.pickedObject = null;
        this.pickedObjectSavedColor = 0;
    }
    pick(normalizedPosition, scene, camera, time) {
        // restore the color if there is a picked object
        if (this.pickedObject) {
            this.pickedObject.material.emissive.setHex(this.pickedObjectSavedColor);
            this.pickedObject = undefined;
        }

        // cast a ray through the frustum
        this.raycaster.setFromCamera(normalizedPosition, camera);
        // get the list of objects the ray intersected
        const intersectedObjects = this.raycaster.intersectObjects(scene.children);
        if (intersectedObjects.length) {
            // pick the first object. It's the closest one
            this.pickedObject = intersectedObjects[0].object;
            // save its color
            this.pickedObjectSavedColor = this.pickedObject.material.emissive.getHex();
            // set its emissive color to flashing red/yellow
            this.pickedObject.material.emissive.setHex((time * 8) % 2 > 1 ? 0xFFFFFF : this.pickedObjectSavedColor);

        }
        selected = this.pickedObject;
        selectedSavedColor = this.pickedObjectSavedColor;
    }
}


function setPickPosition(e) {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (e.clientY / window.innerHeight) * 2 + 1;
}

function clearPickPosition() {
    mouse.x = -100000;
    mouse.y = -100000;
    selected = undefined;
    selectedSavedColor = null;
}

function selectObject() {
    if (clicked) {
        if(selected instanceof THREE.Mesh) {
            if(selected === clicked) 
            {
                clicked.material.emissive.setHex(clickedColor);
                clicked = undefined;
            }
            else if((selected.geometry instanceof THREE.SphereGeometry && clicked.geometry instanceof THREE.SphereGeometry)
            || (selected.geometry instanceof THREE.BoxGeometry && clicked.geometry instanceof THREE.BoxGeometry)) 
            {
                let selectCol = selected.material.color.getHex();
                let clickCol = clicked.material.color.getHex();
                if(selectCol === clickCol) {
                    objects.splice(objects.indexOf(selected), 1);
                    objects.splice(objects.indexOf(clicked), 1);
                    scene.remove(clicked);
                    scene.remove(selected);
                    clicked = undefined;
                    clearPickPosition;
                    score += 250;
                }
                else {
                    clicked.material.emissive.setHex(clickedColor);
                    clicked = undefined;
                    score -= 10;
                }
            } else {
                clicked.material.emissive.setHex(clickedColor);
                clicked = undefined;
                score -= 10;    
            }
        } 
        else {
            clicked.material.emissive.setHex(clickedColor);
            clicked = undefined;
        }
    }
    else {
        if(selected instanceof THREE.Mesh) {
            clicked = selected;
            clickedColor = selectedSavedColor;
            clearPickPosition();
        }
    }
}

function renderClicked(time) {
    clicked.material.emissive.setHex((time * 8) % 2 > 1 ? 0xFFFFFF : clickedColor);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    
    renderer.setSize(window.innerWidth, window.innerHeight);
}

const pickHelper = new PickHelper();

function main() {
    mouse = new THREE.Vector2();
    mouse.x = mouse.y = 0;
    
    setLight();

    addGeometry(70, 10);

    document.addEventListener('mousemove', setPickPosition);
    document.addEventListener('mouseout', clearPickPosition);
    document.addEventListener('mouseleave', clearPickPosition);

    document.addEventListener('touchstart', (event) => {
        event.preventDefault();
        setPickPosition(event.touches[0]);
    }, { passive: false });

    document.addEventListener('touchmove', (event) => {
        setPickPosition(event.touches[0]);
    })

    document.addEventListener('click', selectObject);

    document.addEventListener('touchend', clearPickPosition);

    let counter = 0;
    let speedup = 0.00069;
    function render(time) {
        time *= 0.001;
        window.addEventListener('resize', onWindowResize);
        pickHelper.pick(mouse, scene, camera, time);

        if(clicked != null) renderClicked(time);

        if(objects.length < 200){
            counter += speedup;
            if(counter >= 1) {
                console.log(time);
                counter = 0;
                if(Math.floor(speedup*1000) < 2) {
                    speedup += 0.0002;
                }
                addGeometry(4, 2);
            }
        }
        console.log(objects.length);

        controls.update();

        document.getElementById('score').textContent = score;
        document.getElementById('objects').textContent = objects.length;

        renderer.render(scene, camera);
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}

main();