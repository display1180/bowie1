import * as THREE from "three";

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

let TEXTURE = new TextureLoader().load('../img/db-s5-02.jpg'); 
let mesh = new Mesh(
	new PlaneBufferGeometry(), 
	new MeshBasicMaterial({map: TEXTURE})
)


camera.position.z = 5;

var animate = function () {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render( scene, camera );
};

animate();

