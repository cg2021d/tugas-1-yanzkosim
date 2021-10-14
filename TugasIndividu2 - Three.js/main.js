import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r132/build/three.module.js';

const canvas = document.getElementById('mycanvas');
const renderer = new THREE.WebGLRenderer({ canvas });

const fov = 40;
const aspect = 2;  // the canvas default
const near = 0.1;
const far = 1000;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 120;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xAAAAAA);

const objects = [];
const lights = [];
const spread = 15;

let particleLight;

function main() {
  
  particleLight = new THREE.Mesh( new THREE.SphereGeometry( 4, 8, 8 ), new THREE.MeshBasicMaterial( { color: 0xffffff } ) );
	scene.add( particleLight );

  {
    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.AmbientLight(color, intensity);
    // light.position.set(0, 5, 50);
    scene.add(light);
    lights.push(light);
  }
  
  {
    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.HemisphereLight(color, intensity);
    // light.position.set(0, 5, 50);
    scene.add(light);
    lights.push(light);
  }
  
  {
    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    // light.position.set(0, 5, 50);
    scene.add(light);
    lights.push(light);
  }
  
  {
    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.PointLight(color, intensity);
    // light.position.set(0, 5, 50);
    scene.add(light);
    lights.push(light);
  }
  
  {
    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.SpotLight(color, intensity);
    // light.position.set(0, 5, 50);
    scene.add(light);
    lights.push(light);
  }
  
  lights.forEach((light) => {
    light.visible = false;
  });
  
  lights[2].visible = true;
  
  function addObject(x, y, obj) {
    obj.position.x = x * spread;
    obj.position.y = y * spread;
    
    scene.add(obj);
    objects.push(obj);
  }
  
  function createMaterial() {
    const material = new THREE.MeshPhongMaterial({
      side: THREE.DoubleSide,
    });
    
    const hue = Math.random();
    const saturation = 1;
    const luminance = .5;
    material.color.setHSL(hue, saturation, luminance);
    
    return material;
  }
  
  function addSolidGeometry(x, y, geometry) {
    const mesh = new THREE.Mesh(geometry, createMaterial());
    addObject(x, y, mesh);
  }
  
  function addCustomSolidGeometry(x, y, geometry, material) {
    const mesh = new THREE.Mesh(geometry, material);
    addObject(x, y, mesh);
  }

  
  {
    const width = 8;
    const height = 8;
    const depth = 8;
    addCustomSolidGeometry(-2, 0, new THREE.BoxGeometry(width, height, depth),
    new THREE.MeshStandardMaterial({ 
      color: 0x4bc846, 
      metalness: 0.5,
      roughness: 0.0
    }));
  }

  {
    const radius = 7;
    const segments = 24;
    addSolidGeometry(-1, 0, new THREE.CircleGeometry(radius, segments));
  }

  {
    const radius = 7;
    const widthSegments = 12;
    const heightSegments = 8;
    addCustomSolidGeometry(0, 2, new THREE.SphereGeometry(radius, widthSegments, heightSegments),
    new THREE.MeshPhysicalMaterial( {
      color: 0xc84599,
      clearcoat: 1.0,
      clearcoatRoughness: 1.0,
      roughness: 0.3
    }));
  }

  {
    const radius = 6;
    const height = 8;
    const segments = 32;
    addCustomSolidGeometry(0, 0, new THREE.ConeGeometry(radius, height, segments),
      new THREE.MeshLambertMaterial({ color: 0x448800, emissive: 0x0, wireframe: true }));
  }
  {
    const radiusTop = 4;
    const radiusBottom = 4;
    const height = 8;
    const radialSegments = 12;
    addCustomSolidGeometry(1, 0, new THREE.CylinderGeometry(radiusTop, radiusBottom, height, radialSegments),
    new THREE.MeshNormalMaterial());
  }
  {
    const radius = 4.5;
    const tube = 2.5;
    const radialSegments = 8;
    const tubularSegments = 128;
    const p = 4;
    const q = 5;
    addCustomSolidGeometry(2, 0, new THREE.TorusKnotGeometry(radius, tube, tubularSegments, radialSegments, p, q),
    new THREE.MeshToonMaterial( {
      color: 0xffff00,
      wireframe: true
    }));
  }
  // {
  //   const loader = new THREE.FontLoader();
  //   // promisify font loading
  //   function loadFont(url) {
  //     return new Promise((resolve, reject) => {
  //       loader.load(url, resolve, undefined, reject);
  //     });
  //   }

  //   async function doit() {
  //     const font = await loadFont('https://threejsfundamentals.org/threejs/resources/threejs/fonts/helvetiker_regular.typeface.json');  
  //     const geometry = new THREE.TextGeometry('daeho', {
  //       font: font,
  //       size: 3.0,
  //       height: .2,
  //       curveSegments: 12,
  //       bevelEnabled: true,
  //       bevelThickness: 0.15,
  //       bevelSize: .3,
  //       bevelSegments: 5,
  //     });
  //     const mesh = new THREE.Mesh(geometry, createMaterial());
  //     geometry.computeBoundingBox();
  //     geometry.boundingBox.getCenter(mesh.position).multiplyScalar(-1);

  //     const parent = new THREE.Object3D();
  //     parent.add(mesh);

  //     addObject(0, -1, parent);
  //   }
  //   doit();
  // } 
  {
    const loader = new THREE.FontLoader();
    loader.load('https://threejsfundamentals.org/threejs/resources/threejs/fonts/helvetiker_regular.typeface.json', 
      function ( font ) {
        const geometry = new THREE.TextGeometry('daeho', {
          font: font,
          size: 3.0,
          height: .2,
          curveSegments: 12,
          bevelEnabled: true,
          bevelThickness: 0.15,
          bevelSize: .3,
          bevelSegments: 5,
        });

        const mesh = new THREE.Mesh(geometry, createMaterial());
        geometry.computeBoundingBox();
        geometry.boundingBox.getCenter(mesh.position).multiplyScalar(-1);
        const parent = new THREE.Object3D();
        parent.add(mesh);
    
        addObject(0, -1, parent);
      })
  }

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );
  }

  const opt = document.getElementById("light-type");
  opt.addEventListener('change', (e) => {
    const selected = e.target.value;
    lights.forEach((light) => {
        light.visible = false;
    });
    lights[selected].visible = true;
  });

  function render(time) {
    time *= 0.001;

    objects.forEach((obj, ndx) => {
      const speed = .1 + ndx * .05;
      const rot = time * speed;
      obj.rotation.x = rot;
      obj.rotation.y = rot;
    });

    lights.forEach((light, ndx) => {
      const speed = .1 + ndx * 0.05;
      const orbit = time * 0.05;
      light.position.x = Math.sin(orbit * 7) * 100;
      light.position.y = Math.cos(orbit * 5) * 100;
      light.position.z = Math.cos(orbit * 3) * 100;

      particleLight.position.x = Math.sin(orbit * 7) * 100;
      particleLight.position.y = Math.cos(orbit * 5) * 100;
      particleLight.position.z = Math.cos(orbit * 3) * 100;
    })

    window.addEventListener('resize', onWindowResize);

    renderer.render(scene, camera);

    requestAnimationFrame(render);
  }

  
  requestAnimationFrame(render);
  
}

main();