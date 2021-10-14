import Scene from "./WEBGL/Scene.js";
import Geometry from "./WEBGL/Geometry.js";
import Vector3 from "./WEBGL/Vector3.js";
import Face from "./WEBGL/Face.js";
import Color from "./WEBGL/Color.js";

let canvas, scene;
let geometryLeft;
let geometryRight;

let offset = 0.6;

function main() {
    canvas = document.getElementById("glCanvas");
    scene = new Scene(canvas);

    geometryLeft = new Geometry();
    geometryRight = new Geometry();

    addGeometryLeft();

    addColorLeft();

    geometryLeft.setMovement(0.0, 0.0, 0.0);

    addFaceLeft();

    scene.add(geometryLeft);

    addGeometryRight();

    addColorRight();

    geometryRight.setMovement(0.0, 0.0096, 0.0);

    addFaceRight();

    scene.add(geometryRight);
}

function update() {
    scene.render();
}

function animate() {
    requestAnimationFrame(animate);
    update();
}

window.onload = () => {
    main();
    animate();
};

function addGeometryLeft() {
    //1
    geometryLeft.addVertice(new Vector3(-0.3 - offset + 0.1, 0.15, 0));
    geometryLeft.addVertice(new Vector3(-0.2 - offset + 0.1, 0.15, 0));
    geometryLeft.addVertice(new Vector3(-0.2 - offset + 0.1, -0.15, 0));
    // 2
    geometryLeft.addVertice(new Vector3(-0.3 - offset + 0.1, 0.15, 0));
    geometryLeft.addVertice(new Vector3(-0.3 - offset + 0.1, -0.15, 0));
    geometryLeft.addVertice(new Vector3(-0.2 - offset + 0.1, -0.15, 0));
    // 3
    geometryLeft.addVertice(new Vector3(-0.3 - offset + 0.1, 0.15, 0));
    geometryLeft.addVertice(new Vector3(-0.28 - offset + 0.1, 0.15, 0));
    geometryLeft.addVertice(new Vector3(-0.28 - offset + 0.1, 0.16, 0));
    // 4
    geometryLeft.addVertice(new Vector3(-0.274 - offset + 0.1, 0.161, 0));
    geometryLeft.addVertice(new Vector3(-0.28 - offset + 0.1, 0.15, 0));
    geometryLeft.addVertice(new Vector3(-0.28 - offset + 0.1, 0.16, 0));
    // 5
    geometryLeft.addVertice(new Vector3(-0.274 - offset + 0.1, 0.161, 0));
    geometryLeft.addVertice(new Vector3(-0.28 - offset + 0.1, 0.15, 0));
    geometryLeft.addVertice(new Vector3(-0.20 - offset + 0.1, 0.15, 0));
    // 6
    geometryLeft.addVertice(new Vector3(-0.274 - offset + 0.1, 0.161, 0));
    geometryLeft.addVertice(new Vector3(-0.1949 - offset + 0.1, 0.161, 0));
    geometryLeft.addVertice(new Vector3(-0.20 - offset + 0.1, 0.15, 0));
    // 7
    geometryLeft.addVertice(new Vector3(-0.19 - offset + 0.1, 0.16, 0));
    geometryLeft.addVertice(new Vector3(-0.1949 - offset + 0.1, 0.161, 0));
    geometryLeft.addVertice(new Vector3(-0.20 - offset + 0.1, 0.15, 0));
    // 8
    geometryLeft.addVertice(new Vector3(-0.19 - offset + 0.1, 0.16, 0));
    geometryLeft.addVertice(new Vector3(-0.15 - offset + 0.1, 0.11, 0));
    geometryLeft.addVertice(new Vector3(-0.20 - offset + 0.1, 0.15, 0));
    // 9
    geometryLeft.addVertice(new Vector3(-0.20 - offset + 0.1, 0.04, 0));
    geometryLeft.addVertice(new Vector3(-0.15 - offset + 0.1, 0.11, 0));
    geometryLeft.addVertice(new Vector3(-0.20 - offset + 0.1, 0.15, 0));
    // 10
    geometryLeft.addVertice(new Vector3(-0.20 - offset + 0.1, 0.04, 0));
    geometryLeft.addVertice(new Vector3(-0.15 - offset + 0.1, 0.11, 0));
    geometryLeft.addVertice(new Vector3(-0.14 - offset + 0.1, 0.05, 0));
    // 11
    geometryLeft.addVertice(new Vector3(-0.20 - offset + 0.1, 0.04, 0));
    geometryLeft.addVertice(new Vector3(-0.14 - offset + 0.1, -0.05, 0));
    geometryLeft.addVertice(new Vector3(-0.14 - offset + 0.1, 0.05, 0));
    // 12
    geometryLeft.addVertice(new Vector3(-0.20 - offset + 0.1, 0.04, 0));
    geometryLeft.addVertice(new Vector3(-0.14 - offset + 0.1, -0.05, 0));
    geometryLeft.addVertice(new Vector3(-0.20 - offset + 0.1, -0.12, 0));
    // 13
    geometryLeft.addVertice(new Vector3(-0.15 - offset + 0.1, -0.10, 0));
    geometryLeft.addVertice(new Vector3(-0.14 - offset + 0.1, -0.05, 0));
    geometryLeft.addVertice(new Vector3(-0.20 - offset + 0.1, -0.12, 0));
    // 14
    geometryLeft.addVertice(new Vector3(-0.15 - offset + 0.1, -0.10, 0));
    geometryLeft.addVertice(new Vector3(-0.18 - offset + 0.1, -0.15, 0));
    geometryLeft.addVertice(new Vector3(-0.20 - offset + 0.1, -0.12, 0));
    // 15
    geometryLeft.addVertice(new Vector3(-0.20 - offset + 0.1, -0.15, 0));
    geometryLeft.addVertice(new Vector3(-0.18 - offset + 0.1, -0.15, 0));
    geometryLeft.addVertice(new Vector3(-0.20 - offset + 0.1, -0.12, 0));
    // 16 Start lengkung kiri
    geometryLeft.addVertice(new Vector3(-0.30 - offset + 0.1, 0.15, 0));
    geometryLeft.addVertice(new Vector3(-0.30 - offset + 0.1, 0.07, 0));
    geometryLeft.addVertice(new Vector3(-0.33 - offset + 0.1, 0.07, 0));
    // 17
    geometryLeft.addVertice(new Vector3(-0.34 - offset + 0.1, 0.03, 0));
    geometryLeft.addVertice(new Vector3(-0.30 - offset + 0.1, 0.07, 0));
    geometryLeft.addVertice(new Vector3(-0.33 - offset + 0.1, 0.07, 0));
    // 18
    geometryLeft.addVertice(new Vector3(-0.34 - offset + 0.1, 0.03, 0));
    geometryLeft.addVertice(new Vector3(-0.30 - offset + 0.1, 0.07, 0));
    geometryLeft.addVertice(new Vector3(-0.30 - offset + 0.1, 0.03, 0));
    // 19
    geometryLeft.addVertice(new Vector3(-0.34 - offset + 0.1, 0.03, 0));
    geometryLeft.addVertice(new Vector3(-0.30 - offset + 0.1, -0.03, 0));
    geometryLeft.addVertice(new Vector3(-0.30 - offset + 0.1, 0.03, 0));
    //20
    geometryLeft.addVertice(new Vector3(-0.34 - offset + 0.1, 0.03, 0));
    geometryLeft.addVertice(new Vector3(-0.30 - offset + 0.1, -0.03, 0));
    geometryLeft.addVertice(new Vector3(-0.34 - offset + 0.1, -0.03, 0));
    //21
    geometryLeft.addVertice(new Vector3(-0.30 - offset + 0.1, -0.07, 0));
    geometryLeft.addVertice(new Vector3(-0.30 - offset + 0.1, -0.03, 0));
    geometryLeft.addVertice(new Vector3(-0.34 - offset + 0.1, -0.03, 0));
    //22
    geometryLeft.addVertice(new Vector3(-0.30 - offset + 0.1, -0.07, 0));
    geometryLeft.addVertice(new Vector3(-0.33 - offset + 0.1, -0.07, 0));
    geometryLeft.addVertice(new Vector3(-0.34 - offset + 0.1, -0.03, 0));
    //23 akhir beban kiri
    geometryLeft.addVertice(new Vector3(-0.30 - offset + 0.1, -0.07, 0));
    geometryLeft.addVertice(new Vector3(-0.33 - offset + 0.1, -0.07, 0));
    geometryLeft.addVertice(new Vector3(-0.30 - offset + 0.1, -0.15, 0));
    //Beban kanan

    //1
    geometryLeft.addVertice(new Vector3(0.3 - offset, 0.15, 0));
    geometryLeft.addVertice(new Vector3(0.2 - offset, 0.15, 0));
    geometryLeft.addVertice(new Vector3(0.2 - offset, -0.15, 0));
    // 2
    geometryLeft.addVertice(new Vector3(0.3 - offset, 0.15, 0));
    geometryLeft.addVertice(new Vector3(0.3 - offset, -0.15, 0));
    geometryLeft.addVertice(new Vector3(0.2 - offset, -0.15, 0));
    // 3
    geometryLeft.addVertice(new Vector3(0.3 - offset, 0.15, 0));
    geometryLeft.addVertice(new Vector3(0.28 - offset, 0.15, 0));
    geometryLeft.addVertice(new Vector3(0.28 - offset, 0.16, 0));
    // 4
    geometryLeft.addVertice(new Vector3(0.274 - offset, 0.161, 0));
    geometryLeft.addVertice(new Vector3(0.28 - offset, 0.15, 0));
    geometryLeft.addVertice(new Vector3(0.28 - offset, 0.16, 0));
    // 5
    geometryLeft.addVertice(new Vector3(0.274 - offset, 0.161, 0));
    geometryLeft.addVertice(new Vector3(0.28 - offset, 0.15, 0));
    geometryLeft.addVertice(new Vector3(0.20 - offset, 0.15, 0));
    // 6
    geometryLeft.addVertice(new Vector3(0.274 - offset, 0.161, 0));
    geometryLeft.addVertice(new Vector3(0.1949 - offset, 0.161, 0));
    geometryLeft.addVertice(new Vector3(0.20 - offset, 0.15, 0));
    // 7
    geometryLeft.addVertice(new Vector3(0.19 - offset, 0.16, 0));
    geometryLeft.addVertice(new Vector3(0.1949 - offset, 0.161, 0));
    geometryLeft.addVertice(new Vector3(0.20 - offset, 0.15, 0));
    // 8
    geometryLeft.addVertice(new Vector3(0.19 - offset, 0.16, 0));
    geometryLeft.addVertice(new Vector3(0.15 - offset, 0.11, 0));
    geometryLeft.addVertice(new Vector3(0.20 - offset, 0.15, 0));
    // 9
    geometryLeft.addVertice(new Vector3(0.20 - offset, 0.04, 0));
    geometryLeft.addVertice(new Vector3(0.15 - offset, 0.11, 0));
    geometryLeft.addVertice(new Vector3(0.20 - offset, 0.15, 0));
    // 10
    geometryLeft.addVertice(new Vector3(0.20 - offset, 0.04, 0));
    geometryLeft.addVertice(new Vector3(0.15 - offset, 0.11, 0));
    geometryLeft.addVertice(new Vector3(0.14 - offset, 0.05, 0));
    // 11
    geometryLeft.addVertice(new Vector3(0.20 - offset, 0.04, 0));
    geometryLeft.addVertice(new Vector3(0.14 - offset, -0.05, 0));
    geometryLeft.addVertice(new Vector3(0.14 - offset, 0.05, 0));
    // 12
    geometryLeft.addVertice(new Vector3(0.20 - offset, 0.04, 0));
    geometryLeft.addVertice(new Vector3(0.14 - offset, -0.05, 0));
    geometryLeft.addVertice(new Vector3(0.20 - offset, -0.12, 0));
    // 13
    geometryLeft.addVertice(new Vector3(0.15 - offset, -0.10, 0));
    geometryLeft.addVertice(new Vector3(0.14 - offset, -0.05, 0));
    geometryLeft.addVertice(new Vector3(0.20 - offset, -0.12, 0));
    // 14
    geometryLeft.addVertice(new Vector3(0.15 - offset, -0.10, 0));
    geometryLeft.addVertice(new Vector3(0.18 - offset, -0.15, 0));
    geometryLeft.addVertice(new Vector3(0.20 - offset, -0.12, 0));
    // 15
    geometryLeft.addVertice(new Vector3(0.20 - offset, -0.15, 0));
    geometryLeft.addVertice(new Vector3(0.18 - offset, -0.15, 0));
    geometryLeft.addVertice(new Vector3(0.20 - offset, -0.12, 0));
    // 16 Start lengkung kiri
    geometryLeft.addVertice(new Vector3(0.30 - offset, 0.15, 0));
    geometryLeft.addVertice(new Vector3(0.30 - offset, 0.07, 0));
    geometryLeft.addVertice(new Vector3(0.33 - offset, 0.07, 0));
    // 17
    geometryLeft.addVertice(new Vector3(0.34 - offset, 0.03, 0));
    geometryLeft.addVertice(new Vector3(0.30 - offset, 0.07, 0));
    geometryLeft.addVertice(new Vector3(0.33 - offset, 0.07, 0));
    // 18
    geometryLeft.addVertice(new Vector3(0.34 - offset, 0.03, 0));
    geometryLeft.addVertice(new Vector3(0.30 - offset, 0.07, 0));
    geometryLeft.addVertice(new Vector3(0.30 - offset, 0.03, 0));
    // 19
    geometryLeft.addVertice(new Vector3(0.34 - offset, 0.03, 0));
    geometryLeft.addVertice(new Vector3(0.30 - offset, -0.03, 0));
    geometryLeft.addVertice(new Vector3(0.30 - offset, 0.03, 0));
    //20
    geometryLeft.addVertice(new Vector3(0.34 - offset, 0.03, 0));
    geometryLeft.addVertice(new Vector3(0.30 - offset, -0.03, 0));
    geometryLeft.addVertice(new Vector3(0.34 - offset, -0.03, 0));
    //21
    geometryLeft.addVertice(new Vector3(0.30 - offset, -0.07, 0));
    geometryLeft.addVertice(new Vector3(0.30 - offset, -0.03, 0));
    geometryLeft.addVertice(new Vector3(0.34 - offset, -0.03, 0));
    //22
    geometryLeft.addVertice(new Vector3(0.30 - offset, -0.07, 0));
    geometryLeft.addVertice(new Vector3(0.33 - offset, -0.07, 0));
    geometryLeft.addVertice(new Vector3(0.34 - offset, -0.03, 0));
    //23 akhir beban kanan
    geometryLeft.addVertice(new Vector3(0.30 - offset, -0.07, 0));
    geometryLeft.addVertice(new Vector3(0.33 - offset, -0.07, 0));
    geometryLeft.addVertice(new Vector3(0.30 - offset, -0.15, 0));

    //Pegangan
    //1
    geometryLeft.addVertice(new Vector3(-0.14 - offset + 0.1, 0.04, 0));
    geometryLeft.addVertice(new Vector3(0.02 - offset, 0.05, 0));
    geometryLeft.addVertice(new Vector3(0.02 - offset, -0.05, 0));
    //2
    geometryLeft.addVertice(new Vector3(-0.14 - offset + 0.1, 0.04, 0));
    geometryLeft.addVertice(new Vector3(-0.14 - offset + 0.1, -0.04, 0));
    geometryLeft.addVertice(new Vector3(0.02 - offset, -0.05, 0));
    //3
    geometryLeft.addVertice(new Vector3(0.02 - offset, 0.05, 0));
    geometryLeft.addVertice(new Vector3(0.02 - offset, -0.05, 0));
    geometryLeft.addVertice(new Vector3(0.08 - offset, 0.05, 0));
    //4
    geometryLeft.addVertice(new Vector3(0.08 - offset, 0.05, 0));
    geometryLeft.addVertice(new Vector3(0.08 - offset, -0.05, 0));
    geometryLeft.addVertice(new Vector3(0.02 - offset, -0.05, 0));
    //5
    geometryLeft.addVertice(new Vector3(0.14 - offset, 0.04, 0));
    geometryLeft.addVertice(new Vector3(0.08 - offset, 0.05, 0));
    geometryLeft.addVertice(new Vector3(0.08 - offset, -0.05, 0));
    //6
    geometryLeft.addVertice(new Vector3(0.14 - offset, 0.04, 0));
    geometryLeft.addVertice(new Vector3(0.14 - offset, -0.04, 0));
    geometryLeft.addVertice(new Vector3(0.08 - offset, -0.05, 0));

}

function addColorLeft() {
    //1
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.33));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.23));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.43));
    //2
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.33));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.43));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.43));
    //3
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.34));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.34));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.37));
    //4
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.39));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.34));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.37));
    //5
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.39));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.34));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.24));
    //6
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.39));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.36));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.24));
    //7
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.37));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.36));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.24));
    //8
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.37));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.34));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.24));
    //9
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.31));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.34));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.24));
    //10
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.31));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.34));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.3));
    //11
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.31));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.3));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.3));
    //12
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.31));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.3));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.4));
    //13
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.31));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.3));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.4));
    //14
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.36));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.43));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.4));
    //15
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.43));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.43));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.4));
    // 16 Start lengkung kiri
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.33));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.33));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.39));
    // 17 
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.35));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.33));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.39));
    // 18
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.35));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.33));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.4));
    // 19
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.35));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.4));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.4));
    // 20
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.35));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.4));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.35));
    // 21
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.41));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.4));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.35));
    // 22
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.41));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.42));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.35));
    // 23 akhir beban kiri
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.41));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.42));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.43));

    // Beban Kanan
    //1
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.33));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.23));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.43));
    //2
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.33));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.43));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.43));
    //3
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.34));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.34));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.37));
    //4
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.39));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.34));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.37));
    //5
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.39));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.34));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.24));
    //6
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.39));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.36));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.24));
    //7
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.37));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.36));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.24));
    //8
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.37));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.34));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.24));
    //9
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.31));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.34));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.24));
    //10
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.31));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.34));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.3));
    //11
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.31));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.3));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.3));
    //12
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.31));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.3));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.4));
    //13
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.31));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.3));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.4));
    //14
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.36));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.43));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.4));
    //15
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.43));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.43));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.4));
    // 16 Start lengkung kanan
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.33));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.33));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.39));
    // 17 
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.35));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.33));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.39));
    // 18
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.35));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.33));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.4));
    // 19
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.35));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.4));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.4));
    // 20
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.35));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.4));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.35));
    // 21
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.41));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.4));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.35));
    // 22
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.41));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.42));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.35));
    // 23 akhir beban kanan
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.41));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.42));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.43));

    //Pegangan
    // 1
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.3));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.23));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.23));
    // 2
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.3));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.3));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.23));
    // 3
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.22));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.22));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.22));
    // 4
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.22));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.22));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.22));
    // 5
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.3));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.23));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.23));
    // 6
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.3));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.3));
    geometryLeft.addColor(new Color(0.0, 0.0, 0.0, 0.25));

}

function addFaceLeft() {
    for(let i=0; i<(23+23+6)*3; i+=3) {
        geometryLeft.addFace(new Face(i, i+1, i+2));
    }
}

function addGeometryRight() {
    function verticesBawah() {
        //1
        geometryRight.addVertice(new Vector3(-0.20 + offset + 0.05 , -0.05, 0));
        geometryRight.addVertice(new Vector3(-0.17 + offset + 0.05 , -0.04, 0));
        geometryRight.addVertice(new Vector3(-0.14 + offset + 0.05 , -0.05, 0));
        // 2
        geometryRight.addVertice(new Vector3(-0.07 + offset + 0.05, -0.03, 0));
        geometryRight.addVertice(new Vector3(-0.17 + offset + 0.05 , -0.04, 0));
        geometryRight.addVertice(new Vector3(-0.14 + offset + 0.05 , -0.05, 0));
        // 3
        geometryRight.addVertice(new Vector3(-0.07 + offset + 0.05, -0.03, 0));
        geometryRight.addVertice(new Vector3(-0.07 + offset + 0.05 , -0.05, 0));
        geometryRight.addVertice(new Vector3(-0.14 + offset + 0.05 , -0.05, 0));
        // 4
        geometryRight.addVertice(new Vector3(-0.07 + offset + 0.05, -0.03, 0));
        geometryRight.addVertice(new Vector3(-0.07 + offset + 0.05 , -0.05, 0));
        geometryRight.addVertice(new Vector3(-0.03 + offset + 0.05 , -0.05, 0));
        // 5
        geometryRight.addVertice(new Vector3(-0.07 + offset + 0.05, -0.03, 0));
        geometryRight.addVertice(new Vector3(-0.03 + offset + 0.05 , -0.03, 0));
        geometryRight.addVertice(new Vector3(-0.03 + offset + 0.05 , -0.05, 0));
        // 6
        geometryRight.addVertice(new Vector3(0.04 + offset + 0.05, -0.05, 0));
        geometryRight.addVertice(new Vector3(-0.03 + offset + 0.05 , -0.03, 0));
        geometryRight.addVertice(new Vector3(-0.03 + offset + 0.05 , -0.05, 0));
        // 7
        geometryRight.addVertice(new Vector3(0.04 + offset + 0.05, -0.05, 0));
        geometryRight.addVertice(new Vector3(-0.03 + offset + 0.05 , -0.03, 0));
        geometryRight.addVertice(new Vector3(0.07 + offset + 0.05 , -0.04, 0));
        // 8
        geometryRight.addVertice(new Vector3(0.04 + offset + 0.05, -0.05, 0));
        geometryRight.addVertice(new Vector3(0.1 + offset + 0.05 , -0.05, 0));
        geometryRight.addVertice(new Vector3(0.07 + offset + 0.05 , -0.04, 0));
        // 9
        geometryRight.addVertice(new Vector3(0.1 + offset + 0.05 , -0.05, 0));
        geometryRight.addVertice(new Vector3(0.1 + offset + 0.05, -0.20, 0));
        geometryRight.addVertice(new Vector3(0.12 + offset + 0.05 , -0.10, 0));
        // 10
        geometryRight.addVertice(new Vector3(0.1 + offset + 0.05 , -0.05, 0));
        geometryRight.addVertice(new Vector3(0.1 + offset + 0.05, -0.20, 0));
        geometryRight.addVertice(new Vector3(0.0 + offset + 0.05 , -0.05, 0));
        // 11
        geometryRight.addVertice(new Vector3(0.0 + offset + 0.05 , -0.19, 0));
        geometryRight.addVertice(new Vector3(0.1 + offset + 0.05, -0.20, 0));
        geometryRight.addVertice(new Vector3(0.0 + offset + 0.05 , -0.05, 0));
        // 12
        geometryRight.addVertice(new Vector3(0.0 + offset + 0.05 , -0.19, 0));
        geometryRight.addVertice(new Vector3(-0.05 + offset + 0.05, -0.19, 0));
        geometryRight.addVertice(new Vector3(0.0 + offset + 0.05 , -0.05, 0));
        // 13
        geometryRight.addVertice(new Vector3(-0.1 + offset + 0.05 , -0.05, 0));
        geometryRight.addVertice(new Vector3(-0.05 + offset + 0.05, -0.19, 0));
        geometryRight.addVertice(new Vector3(0.0 + offset + 0.05 , -0.05, 0));
        // 14
        geometryRight.addVertice(new Vector3(-0.1 + offset + 0.05 , -0.05, 0));
        geometryRight.addVertice(new Vector3(-0.05 + offset + 0.05, -0.19, 0));
        geometryRight.addVertice(new Vector3(-0.1 + offset + 0.05 , -0.19, 0));
        // 15
        geometryRight.addVertice(new Vector3(-0.1 + offset + 0.05 , -0.05, 0));
        geometryRight.addVertice(new Vector3(-0.2 + offset + 0.05, -0.2, 0));
        geometryRight.addVertice(new Vector3(-0.1 + offset + 0.05 , -0.19, 0));
        // 16
        geometryRight.addVertice(new Vector3(-0.1 + offset + 0.05 , -0.05, 0));
        geometryRight.addVertice(new Vector3(-0.2 + offset + 0.05, -0.2, 0));
        geometryRight.addVertice(new Vector3(-0.2 + offset + 0.05 , -0.05, 0));
        // 17
        geometryRight.addVertice(new Vector3(-0.22 + offset + 0.05 , -0.10, 0));
        geometryRight.addVertice(new Vector3(-0.2 + offset + 0.05, -0.2, 0));
        geometryRight.addVertice(new Vector3(-0.2 + offset + 0.05 , -0.05, 0));
        // 18
        geometryRight.addVertice(new Vector3(-0.23 + offset + 0.05 , -0.21, 0));
        geometryRight.addVertice(new Vector3(-0.2 + offset + 0.05, -0.2, 0));
        geometryRight.addVertice(new Vector3(-0.22 + offset + 0.05 , -0.26, 0));
        // 19
        geometryRight.addVertice(new Vector3(-0.1 + offset + 0.05 , -0.19, 0));
        geometryRight.addVertice(new Vector3(-0.2 + offset + 0.05, -0.2, 0));
        geometryRight.addVertice(new Vector3(-0.22 + offset + 0.05 , -0.26, 0));
        // 20
        geometryRight.addVertice(new Vector3(-0.1 + offset + 0.05 , -0.19, 0));
        geometryRight.addVertice(new Vector3(-0.13 + offset + 0.05, -0.36, 0));
        geometryRight.addVertice(new Vector3(-0.22 + offset + 0.05 , -0.26, 0));
        // 21
        geometryRight.addVertice(new Vector3(-0.1 + offset + 0.05 , -0.19, 0));
        geometryRight.addVertice(new Vector3(-0.13 + offset + 0.05, -0.36, 0));
        geometryRight.addVertice(new Vector3(-0.09 + offset + 0.05 , -0.37, 0));
        // 22
        geometryRight.addVertice(new Vector3(-0.1 + offset + 0.05 , -0.19, 0));
        geometryRight.addVertice(new Vector3(-0.05 + offset + 0.05, -0.19, 0));
        geometryRight.addVertice(new Vector3(-0.09 + offset + 0.05 , -0.37, 0));
        // 23
        geometryRight.addVertice(new Vector3(-0.01 + offset + 0.05 , -0.37, 0));
        geometryRight.addVertice(new Vector3(-0.05 + offset + 0.05, -0.19, 0));
        geometryRight.addVertice(new Vector3(-0.09 + offset + 0.05 , -0.37, 0));
        // 24
        geometryRight.addVertice(new Vector3(-0.01 + offset + 0.05 , -0.37, 0));
        geometryRight.addVertice(new Vector3(-0.05 + offset + 0.05, -0.19, 0));
        geometryRight.addVertice(new Vector3(0.0 + offset + 0.05 , -0.19, 0));
        // 25
        geometryRight.addVertice(new Vector3(-0.01 + offset + 0.05 , -0.37, 0));
        geometryRight.addVertice(new Vector3(0.03 + offset + 0.05, -0.36, 0));
        geometryRight.addVertice(new Vector3(0.0 + offset + 0.05 , -0.19, 0));
        // 26
        geometryRight.addVertice(new Vector3(0.12 + offset + 0.05 , -0.26, 0));
        geometryRight.addVertice(new Vector3(0.03 + offset + 0.05, -0.36, 0));
        geometryRight.addVertice(new Vector3(0.0 + offset + 0.05 , -0.19, 0));
        // 27
        geometryRight.addVertice(new Vector3(0.12 + offset + 0.05 , -0.26, 0));
        geometryRight.addVertice(new Vector3(0.1 + offset + 0.05, -0.2, 0));
        geometryRight.addVertice(new Vector3(0.0 + offset + 0.05 , -0.19, 0));
        // 28
        geometryRight.addVertice(new Vector3(0.12 + offset + 0.05 , -0.26, 0));
        geometryRight.addVertice(new Vector3(0.1 + offset + 0.05, -0.2, 0));
        geometryRight.addVertice(new Vector3(0.13 + offset + 0.05 , -0.21, 0));
        // 29
        geometryRight.addVertice(new Vector3(-0.22 + offset + 0.05 , -0.10, 0));
        geometryRight.addVertice(new Vector3(-0.2 + offset + 0.05, -0.2, 0));
        geometryRight.addVertice(new Vector3(-0.23 + offset + 0.05 , -0.21, 0));
        // 30
        geometryRight.addVertice(new Vector3(0.12 + offset + 0.05 , -0.1, 0));
        geometryRight.addVertice(new Vector3(0.1 + offset + 0.05, -0.20, 0));
        geometryRight.addVertice(new Vector3(0.13 + offset + 0.05 , -0.21, 0));
    }
    
    function verticesAtas() {
        // 1
        geometryRight.addVertice(new Vector3(-0.15 + offset + 0.05 , 0.31, 0));
        geometryRight.addVertice(new Vector3(-0.13 + offset + 0.05, 0.35, 0));
        geometryRight.addVertice(new Vector3(-0.10 + offset + 0.05 , 0.33, 0));
        // 2
        geometryRight.addVertice(new Vector3(-0.10 + offset + 0.05 , 0.37, 0));
        geometryRight.addVertice(new Vector3(-0.13 + offset + 0.05, 0.35, 0));
        geometryRight.addVertice(new Vector3(-0.10 + offset + 0.05 , 0.33, 0));
        // 3
        geometryRight.addVertice(new Vector3(-0.10 + offset + 0.05 , 0.37, 0));
        geometryRight.addVertice(new Vector3(-0.06 + offset + 0.05, 0.34, 0));
        geometryRight.addVertice(new Vector3(-0.10 + offset + 0.05 , 0.33, 0));
        // 4
        geometryRight.addVertice(new Vector3(-0.10 + offset + 0.05 , 0.37, 0));
        geometryRight.addVertice(new Vector3(-0.06 + offset + 0.05, 0.34, 0));
        geometryRight.addVertice(new Vector3(-0.06 + offset + 0.05 , 0.38, 0));
        // 5
        geometryRight.addVertice(new Vector3(-0.04 + offset + 0.05 , 0.34, 0));
        geometryRight.addVertice(new Vector3(-0.06 + offset + 0.05, 0.34, 0));
        geometryRight.addVertice(new Vector3(-0.06 + offset + 0.05 , 0.38, 0));
        // 6
        geometryRight.addVertice(new Vector3(-0.04 + offset + 0.05 , 0.34, 0));
        geometryRight.addVertice(new Vector3(-0.04 + offset + 0.05, 0.38, 0));
        geometryRight.addVertice(new Vector3(-0.06 + offset + 0.05 , 0.38, 0));
        // 7
        geometryRight.addVertice(new Vector3(-0.04 + offset + 0.05 , 0.34, 0));
        geometryRight.addVertice(new Vector3(-0.04 + offset + 0.05, 0.38, 0));
        geometryRight.addVertice(new Vector3(0.0 + offset + 0.05 , 0.37, 0));
        // 8
        geometryRight.addVertice(new Vector3(-0.04 + offset + 0.05 , 0.34, 0));
        geometryRight.addVertice(new Vector3(0.0 + offset + 0.05, 0.33, 0));
        geometryRight.addVertice(new Vector3(0.0 + offset + 0.05 , 0.37, 0));
        // 9
        geometryRight.addVertice(new Vector3(0.03 + offset + 0.05 , 0.35, 0));
        geometryRight.addVertice(new Vector3(0.0 + offset + 0.05, 0.33, 0));
        geometryRight.addVertice(new Vector3(0.0 + offset + 0.05 , 0.37, 0));
        // 10
        geometryRight.addVertice(new Vector3(0.03 + offset + 0.05 , 0.35, 0));
        geometryRight.addVertice(new Vector3(0.0 + offset + 0.05, 0.33, 0));
        geometryRight.addVertice(new Vector3(0.05 + offset + 0.05 , 0.31, 0));
        // 11
        geometryRight.addVertice(new Vector3(0.03 + offset + 0.05 , 0.24, 0));
        geometryRight.addVertice(new Vector3(0.068 + offset + 0.05, 0.214, 0));
        geometryRight.addVertice(new Vector3(0.05 + offset + 0.05 , 0.31, 0));
        // 12
        geometryRight.addVertice(new Vector3(0.03 + offset + 0.05 , 0.24, 0));
        geometryRight.addVertice(new Vector3(0.01 + offset + 0.05, 0.25, 0));
        geometryRight.addVertice(new Vector3(0.05 + offset + 0.05 , 0.31, 0));
        // 13
        geometryRight.addVertice(new Vector3(0.03 + offset + 0.05 , 0.32, 0));
        geometryRight.addVertice(new Vector3(0.01 + offset + 0.05, 0.25, 0));
        geometryRight.addVertice(new Vector3(0.05 + offset + 0.05 , 0.31, 0));
        // 14
        geometryRight.addVertice(new Vector3(0.03 + offset + 0.05 , 0.32, 0));
        geometryRight.addVertice(new Vector3(0.01 + offset + 0.05, 0.25, 0));
        geometryRight.addVertice(new Vector3(0.0 + offset + 0.05 , 0.33, 0));
        // 15
        geometryRight.addVertice(new Vector3(-0.03 + offset + 0.05 , 0.26, 0));
        geometryRight.addVertice(new Vector3(0.01 + offset + 0.05, 0.25, 0));
        geometryRight.addVertice(new Vector3(0.0 + offset + 0.05 , 0.33, 0));
        // 16
        geometryRight.addVertice(new Vector3(-0.03 + offset + 0.05 , 0.26, 0));
        geometryRight.addVertice(new Vector3(-0.04 + offset + 0.05 , 0.34, 0));
        geometryRight.addVertice(new Vector3(0.0 + offset + 0.05 , 0.33, 0));
        // 17
        geometryRight.addVertice(new Vector3(-0.03 + offset + 0.05 , 0.26, 0));
        geometryRight.addVertice(new Vector3(-0.04 + offset + 0.05 , 0.34, 0));
        geometryRight.addVertice(new Vector3(-0.07 + offset + 0.05 , 0.26, 0));
        // 18
        geometryRight.addVertice(new Vector3(-0.06 + offset + 0.05 , 0.34, 0));
        geometryRight.addVertice(new Vector3(-0.04 + offset + 0.05 , 0.34, 0));
        geometryRight.addVertice(new Vector3(-0.07 + offset + 0.05 , 0.26, 0));
        // 19
        geometryRight.addVertice(new Vector3(-0.06 + offset + 0.05 , 0.34, 0));
        geometryRight.addVertice(new Vector3(-0.10 + offset + 0.05 , 0.33, 0));
        geometryRight.addVertice(new Vector3(-0.07 + offset + 0.05 , 0.26, 0));
        // 20
        geometryRight.addVertice(new Vector3(-0.11 + offset + 0.05 , 0.25, 0));
        geometryRight.addVertice(new Vector3(-0.10 + offset + 0.05 , 0.33, 0));
        geometryRight.addVertice(new Vector3(-0.07 + offset + 0.05 , 0.26, 0));
        // 21
        geometryRight.addVertice(new Vector3(-0.11 + offset + 0.05 , 0.25, 0));
        geometryRight.addVertice(new Vector3(-0.10 + offset + 0.05 , 0.33, 0));
        geometryRight.addVertice(new Vector3(-0.13 + offset + 0.05 , 0.32, 0));
        // 22
        geometryRight.addVertice(new Vector3(-0.11 + offset + 0.05 , 0.25, 0));
        geometryRight.addVertice(new Vector3(-0.15 + offset + 0.05 , 0.31, 0));
        geometryRight.addVertice(new Vector3(-0.13 + offset + 0.05 , 0.32, 0));
        // 23
        geometryRight.addVertice(new Vector3(-0.11 + offset + 0.05 , 0.25, 0));
        geometryRight.addVertice(new Vector3(-0.15 + offset + 0.05 , 0.31, 0));
        geometryRight.addVertice(new Vector3(-0.13 + offset + 0.05 , 0.24, 0));
        // 24
        geometryRight.addVertice(new Vector3(-0.168 + offset + 0.05 , 0.214, 0));
        geometryRight.addVertice(new Vector3(-0.15 + offset + 0.05 , 0.31, 0));
        geometryRight.addVertice(new Vector3(-0.13 + offset + 0.05 , 0.24, 0));
        // 25 dekat pegangan
        geometryRight.addVertice(new Vector3(-0.095 + offset + 0.05 , 0.1098, 0));
        geometryRight.addVertice(new Vector3(-0.09 + offset + 0.05 , 0.15, 0));
        geometryRight.addVertice(new Vector3(-0.13 + offset + 0.05 , 0.13, 0));
        // 26
        geometryRight.addVertice(new Vector3(-0.15 + offset + 0.05 , 0.15, 0));
        geometryRight.addVertice(new Vector3(-0.09 + offset + 0.05 , 0.15, 0));
        geometryRight.addVertice(new Vector3(-0.13 + offset + 0.05 , 0.13, 0));
        // 27
        geometryRight.addVertice(new Vector3(-0.15 + offset + 0.05 , 0.15, 0));
        geometryRight.addVertice(new Vector3(-0.09 + offset + 0.05 , 0.15, 0));
        geometryRight.addVertice(new Vector3(-0.16 + offset + 0.05 , 0.17, 0));
        // 28
        geometryRight.addVertice(new Vector3(-0.168 + offset + 0.05 , 0.214, 0));
        geometryRight.addVertice(new Vector3(-0.09 + offset + 0.05 , 0.15, 0));
        geometryRight.addVertice(new Vector3(-0.16 + offset + 0.05 , 0.17, 0));
        // 29
        geometryRight.addVertice(new Vector3(-0.168 + offset + 0.05 , 0.214, 0));
        geometryRight.addVertice(new Vector3(-0.09 + offset + 0.05 , 0.15, 0));
        geometryRight.addVertice(new Vector3(-0.13 + offset + 0.05 , 0.24, 0));
        // 30
        geometryRight.addVertice(new Vector3(-0.11 + offset + 0.05 , 0.25, 0));
        geometryRight.addVertice(new Vector3(-0.09 + offset + 0.05 , 0.15, 0));
        geometryRight.addVertice(new Vector3(-0.13 + offset + 0.05 , 0.24, 0));
        // 31
        geometryRight.addVertice(new Vector3(-0.11 + offset + 0.05 , 0.25, 0));
        geometryRight.addVertice(new Vector3(-0.09 + offset + 0.05 , 0.15, 0));
        geometryRight.addVertice(new Vector3(-0.07 + offset + 0.05 , 0.26, 0));
        // 32
        geometryRight.addVertice(new Vector3(-0.06 + offset + 0.05 , 0.16, 0));
        geometryRight.addVertice(new Vector3(-0.09 + offset + 0.05 , 0.15, 0));
        geometryRight.addVertice(new Vector3(-0.07 + offset + 0.05 , 0.26, 0));
        // 33
        geometryRight.addVertice(new Vector3(-0.06 + offset + 0.05 , 0.16, 0));
        geometryRight.addVertice(new Vector3(-0.03 + offset + 0.05 , 0.26, 0));
        geometryRight.addVertice(new Vector3(-0.07 + offset + 0.05 , 0.26, 0));
        // 34
        geometryRight.addVertice(new Vector3(-0.06 + offset + 0.05 , 0.16, 0));
        geometryRight.addVertice(new Vector3(-0.03 + offset + 0.05 , 0.26, 0));
        geometryRight.addVertice(new Vector3(-0.04 + offset + 0.05 , 0.16, 0));
        // 35
        geometryRight.addVertice(new Vector3(-0.01 + offset + 0.05 , 0.15, 0));
        geometryRight.addVertice(new Vector3(-0.03 + offset + 0.05 , 0.26, 0));
        geometryRight.addVertice(new Vector3(-0.04 + offset + 0.05 , 0.16, 0));
        // 36
        geometryRight.addVertice(new Vector3(-0.01 + offset + 0.05 , 0.15, 0));
        geometryRight.addVertice(new Vector3(-0.03 + offset + 0.05 , 0.26, 0));
        geometryRight.addVertice(new Vector3(0.01 + offset + 0.05 , 0.25, 0));
        // 37
        geometryRight.addVertice(new Vector3(-0.01 + offset + 0.05 , 0.15, 0));
        geometryRight.addVertice(new Vector3(0.03 + offset + 0.05 , 0.24, 0));
        geometryRight.addVertice(new Vector3(0.01 + offset + 0.05 , 0.25, 0));
        // 38
        geometryRight.addVertice(new Vector3(-0.01 + offset + 0.05 , 0.15, 0));
        geometryRight.addVertice(new Vector3(0.03 + offset + 0.05 , 0.24, 0));
        geometryRight.addVertice(new Vector3(0.068 + offset + 0.05, 0.214, 0));
        // 39
        geometryRight.addVertice(new Vector3(-0.01 + offset + 0.05 , 0.15, 0));
        geometryRight.addVertice(new Vector3(0.06 + offset + 0.05 , 0.17, 0));
        geometryRight.addVertice(new Vector3(0.068 + offset + 0.05, 0.214, 0));
        // 40
        geometryRight.addVertice(new Vector3(-0.01 + offset + 0.05 , 0.15, 0));
        geometryRight.addVertice(new Vector3(0.06 + offset + 0.05 , 0.17, 0));
        geometryRight.addVertice(new Vector3(0.05 + offset + 0.05, 0.15, 0));
        // 41
        geometryRight.addVertice(new Vector3(-0.01 + offset + 0.05 , 0.15, 0));
        geometryRight.addVertice(new Vector3(0.03 + offset + 0.05 , 0.13, 0));
        geometryRight.addVertice(new Vector3(0.05 + offset + 0.05, 0.15, 0));
        // 42
        geometryRight.addVertice(new Vector3(-0.01 + offset + 0.05 , 0.15, 0));
        geometryRight.addVertice(new Vector3(0.03 + offset + 0.05 , 0.13, 0));
        geometryRight.addVertice(new Vector3(-0.005 + offset + 0.05, 0.1098, 0));
    }

    function verticesPeganganKanan() {
        // 1
        geometryRight.addVertice(new Vector3(-0.1 + offset + 0.05 , -0.0331, 0));
        geometryRight.addVertice(new Vector3(-0.105 + offset + 0.05 , 0.03, 0));
        geometryRight.addVertice(new Vector3(-0.07 + offset + 0.05 , -0.03, 0));
        // 2
        geometryRight.addVertice(new Vector3(-0.07 + offset + 0.05 , 0.03, 0));
        geometryRight.addVertice(new Vector3(-0.105 + offset + 0.05 , 0.03, 0));
        geometryRight.addVertice(new Vector3(-0.07 + offset + 0.05 , -0.03, 0));
        // 3
        geometryRight.addVertice(new Vector3(-0.07 + offset + 0.05 , 0.03, 0));
        geometryRight.addVertice(new Vector3(-0.105 + offset + 0.05 , 0.03, 0));
        geometryRight.addVertice(new Vector3(-0.09 + offset + 0.05 , 0.15, 0));
        // 4
        geometryRight.addVertice(new Vector3(-0.07 + offset + 0.05 , 0.03, 0));
        geometryRight.addVertice(new Vector3(-0.065 + offset + 0.05 , 0.15, 0));
        geometryRight.addVertice(new Vector3(-0.09 + offset + 0.05 , 0.15, 0));
        // 5
        geometryRight.addVertice(new Vector3(-0.07 + offset + 0.05 , 0.03, 0));
        geometryRight.addVertice(new Vector3(-0.065 + offset + 0.05 , 0.15, 0));
        geometryRight.addVertice(new Vector3(-0.03 + offset + 0.05 , 0.03, 0));
        // 6
        geometryRight.addVertice(new Vector3(-0.035 + offset + 0.05 , 0.15, 0));
        geometryRight.addVertice(new Vector3(-0.065 + offset + 0.05 , 0.15, 0));
        geometryRight.addVertice(new Vector3(-0.03 + offset + 0.05 , 0.03, 0));
        // 7
        geometryRight.addVertice(new Vector3(-0.035 + offset + 0.05 , 0.15, 0));
        geometryRight.addVertice(new Vector3(-0.01 + offset + 0.05 , 0.15, 0));
        geometryRight.addVertice(new Vector3(-0.03 + offset + 0.05 , 0.03, 0));
        // 8  
        geometryRight.addVertice(new Vector3(0.005 + offset + 0.05 , 0.03, 0));
        geometryRight.addVertice(new Vector3(-0.01 + offset + 0.05 , 0.15, 0));
        geometryRight.addVertice(new Vector3(-0.03 + offset + 0.05 , 0.03, 0));
        // 9 
        geometryRight.addVertice(new Vector3(-0.07 + offset + 0.05 , 0.03, 0));
        geometryRight.addVertice(new Vector3(-0.03 + offset + 0.05 , -0.03, 0));
        geometryRight.addVertice(new Vector3(-0.03 + offset + 0.05 , 0.03, 0));
        // 10
        geometryRight.addVertice(new Vector3(-0.07 + offset + 0.05 , 0.03, 0));
        geometryRight.addVertice(new Vector3(-0.03 + offset + 0.05 , -0.03, 0));
        geometryRight.addVertice(new Vector3(-0.07 + offset + 0.05 , -0.03, 0));
        // 11
        geometryRight.addVertice(new Vector3(0.005 + offset + 0.05 , 0.03, 0));
        geometryRight.addVertice(new Vector3(-0.03 + offset + 0.05 , -0.03, 0));
        geometryRight.addVertice(new Vector3(-0.03 + offset + 0.05 , 0.03, 0));
        // 12
        geometryRight.addVertice(new Vector3(0.005 + offset + 0.05 , 0.03, 0));
        geometryRight.addVertice(new Vector3(-0.0 + offset + 0.05 , -0.0331, 0));
        geometryRight.addVertice(new Vector3(-0.03 + offset + 0.05 , -0.03, 0));
        // 13
        geometryRight.addVertice(new Vector3(-0.06 + offset + 0.05 , 0.16, 0));
        geometryRight.addVertice(new Vector3(-0.065 + offset + 0.05 , 0.15, 0));
        geometryRight.addVertice(new Vector3(-0.09 + offset + 0.05 , 0.15, 0));
        // 14
        geometryRight.addVertice(new Vector3(-0.06 + offset + 0.05 , 0.16, 0));
        geometryRight.addVertice(new Vector3(-0.065 + offset + 0.05 , 0.15, 0));
        geometryRight.addVertice(new Vector3(-0.045 + offset + 0.05 , 0.15, 0));
        // 15
        geometryRight.addVertice(new Vector3(-0.06 + offset + 0.05 , 0.16, 0));
        geometryRight.addVertice(new Vector3(-0.04 + offset + 0.05 , 0.16, 0));
        geometryRight.addVertice(new Vector3(-0.045 + offset + 0.05 , 0.15, 0));
        // 16
        geometryRight.addVertice(new Vector3(-0.01 + offset + 0.05 , 0.15, 0));
        geometryRight.addVertice(new Vector3(-0.04 + offset + 0.05 , 0.16, 0));
        geometryRight.addVertice(new Vector3(-0.045 + offset + 0.05 , 0.15, 0));
    }

    verticesBawah();
    verticesAtas();
    verticesPeganganKanan();
}

function addColorRight() {
    function colorBebanBawah() {
        //1
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.43));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.43));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.43));
        //2
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.27));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.43));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.43));
        //3
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.27));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.25));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.42));
        //4
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.27));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.25));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.24));
        //5
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.26));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.24));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.24));
        //6
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.39));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.24));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.24));
        //7
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.39));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.26));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.42));
        //8
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.39));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.43));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.42));
        //9
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.43));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.44));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.45));
        //10
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.42));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.43));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.35));
        //11
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.241));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.42));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.34));
        //12
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.24));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.22));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.32));
        //13
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.3));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.22));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.3));
        //14
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.3));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.22));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.24));
        //15
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.3));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.35));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.24));
        // 16 
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.31));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.36));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.43));
        // 17 
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.45));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.37));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.44));
        // 18
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.455));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.375));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.445));
        // 19
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.2));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.375));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.445));
        // 20
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.2));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.45));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.445));
        // 21
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.2));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.45));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.42));
        // 22
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.2));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.2));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.42));
        // 23
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.4));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.2));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.4));
        // 24
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.4));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.2));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.2));
        // 25
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.4));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.44));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.2));
        // 26
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.44));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.44));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.2));
        // 27
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.44));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.44));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.2));
        // 28
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.44));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.44));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.44));
        // 29
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.45));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.37));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.44));
        // 30
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.43));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.44));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.44));
    }

    function colorBebanAtas() {

        // 1
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.5));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.5));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.5));
        // 2
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.495));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.495));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.495));
        // 3
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.49));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.4));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.49));
        // 4
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.49));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.4));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.4));
        // 5
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.37));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.4));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.4));
        // 6
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.37));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.37));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.4));
        // 7
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.37));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.37));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.35));
        // 8
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.37));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.35));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.35));
        // 9
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.39));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.36));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.36));
        // 10
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.4));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.39));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.4));
        // 11
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.4));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.4));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.4));
        // 12
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.39));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.38));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.39));
        // 13
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.39));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.38));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.39));
        // 14
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.39));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.38));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.37));
        // 15
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.25));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.38));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.37));
        // 16
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.25));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.35));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.36));
        // 17
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.25));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.35));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.26));
        // 18
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.385));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.35));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.26));
        // 19
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.385));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.47));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.26));
        // 20
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.38));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.47));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.26));
        // 21
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.38));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.47));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.48));
        // 22
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.38));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.48));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.48));
        // 23
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.38));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.48));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.48));
        // 24
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.47));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.48));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.48));
        // 25
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.37));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.37));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.35));
        // 26
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.35));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.37));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.35));
        // 27
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.35));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.35));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.35));
        // 28
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.35));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.33));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.35));
        // 29
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.35));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.35));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.38));
        // 30
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.35));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.34));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.38));
        // 31
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.35));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.33));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.24));
        // 32
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.28));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.3));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.24));
        // 33
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.28));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.24));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.24));
        // 34
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.28));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.24));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.28));
        // 35
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.28));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.24));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.28));
        // 36
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.28));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.24));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.32));
        // 37
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.28));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.24));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.32));
        // 38
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.28));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.24));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.32));
        // 39
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.28));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.24));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.32));
        // 40
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.29));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.24));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.32));
        // 41
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.29));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.24));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.32));
        // 42
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.3));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.24));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.32));
    }

    function colorPegangan() {
        // 1
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.45));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.45));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.28));
        // 2
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.28));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.45));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.28));
        // 3
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.28));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.45));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.45));
        // 4
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.28));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.32));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.4));
        // 5
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.28));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.32));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.28));
        // 6
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.33));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.32));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.28));
        // 7
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.33));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.36));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.28));
        // 8  
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.33));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.36));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.33));
        // 9 
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.29));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.3));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.3));
        // 10
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.29));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.3));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.3));
        // 11
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.36));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.3));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.3));
        // 12
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.36));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.36));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.3));
        // 13
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.35));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.35));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.35));
        // 14
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.35));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.35));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.35));
        // 15
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.35));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.35));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.35));
        // 16
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.35));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.35));
        geometryRight.addColor(new Color(0.0, 0.0, 0.0, 0.35));
    }

    colorBebanBawah();
    colorBebanAtas();
    colorPegangan();
}

function addFaceRight() {
    for(let i=0; i<(30+42+16) * 3; i+=3) {
        geometryRight.addFace(new Face(i, i+1, i+2));
    }
}