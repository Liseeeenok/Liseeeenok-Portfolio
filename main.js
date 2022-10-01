let renderer;
let scene;
let camera;
let stars;

init();
animate();

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, parseInt(window.innerWidth) / parseInt(window.innerHeight), 1, 1000000);
    renderer = new THREE.WebGLRenderer();
    camera.position.z = 6300;
    camera.position.y = 2000;
    camera.rotation.x = -0.3;
    scene.background = new THREE.Color(0x000000);
    document.body.appendChild(renderer.domElement);

    stars = new THREE.Object3D();
    // fcf0b1 fceea4 fcec9a fcea90 fae57f fce674 fce468 fce158 fcdf4c fcdd3f fcd33f fcd135 f5c92c f2af29 ed9d24 
    for (i=0;i<5000;i++) {
        let star_geom = new THREE.SphereGeometry(20,4,4);
        let x = Math.random()*3000 - 1500;
        let absX = Math.abs(x)*Math.abs(x);
        let round = Math.sqrt(2250000 - x*x);
        let y = Math.random()*(round*2) - round;
        let absY = Math.abs(y)*Math.abs(y);
        let distance = Math.abs(Math.sqrt(absX + absY));
        let star_mat;
        if (distance < 100) star_mat = new THREE.MeshBasicMaterial({color: 0xfffce3});
        else if (distance < 200) star_mat = new THREE.MeshBasicMaterial({color: 0xfffbd9});
        else if (distance < 300) star_mat = new THREE.MeshBasicMaterial({color: 0xfffacc});
        else if (distance < 400) star_mat = new THREE.MeshBasicMaterial({color: 0xfcf4ac});
        else if (distance < 500) star_mat = new THREE.MeshBasicMaterial({color: 0xfcf297});
        else if (distance < 600) star_mat = new THREE.MeshBasicMaterial({color: 0xfcf188});
        else if (distance < 700) star_mat = new THREE.MeshBasicMaterial({color: 0xfcef77});
        else if (distance < 800) star_mat = new THREE.MeshBasicMaterial({color: 0xfced65});
        else if (distance < 900) star_mat = new THREE.MeshBasicMaterial({color: 0xfcec56});
        else if (distance < 1000) star_mat = new THREE.MeshBasicMaterial({color: 0xfcdd3f});
        else if (distance < 1100) star_mat = new THREE.MeshBasicMaterial({color: 0xfcd33f});
        else if (distance < 1200) star_mat = new THREE.MeshBasicMaterial({color: 0xfcd135});
        else if (distance < 1300) star_mat = new THREE.MeshBasicMaterial({color: 0xf5c92c});
        else if (distance < 1400) star_mat = new THREE.MeshBasicMaterial({color: 0xf2af29});
        else if (distance < 1500) star_mat = new THREE.MeshBasicMaterial({color: 0xed9d24});
        let star = new THREE.Mesh(star_geom, star_mat);
        star.position.x = x;
        star.position.z = y;
        stars.add(star);
    }

    scene.add(stars);
}

function animate() {
    requestAnimationFrame(animate);
    renderer.setSize(parseInt(window.innerWidth), parseInt(window.innerHeight));
    camera.aspect = parseInt(window.innerWidth) / parseInt(window.innerHeight);
    camera.updateProjectionMatrix();
    stars.rotation.y+=0.005;
    renderer.render(scene, camera);
}