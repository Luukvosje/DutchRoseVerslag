console.log("test");
import '../css/style.css';

// Setupd
const loader = new THREE.GLTFLoader();
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, 2, 0.1, 1000);



const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#test'),
  alpha: true,
});


renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(13);
camera.position.setY(5);

renderer.render(scene, camera);



let car;
// GLB file Car

//LoadModel function
loader.load(
	// resource URL
	'../car.glb',
	// called when the resource is loaded
	function ( gltf ) {

		car = scene.add( gltf.scene );

		gltf.animations; // Array<THREE.AnimationClip>
		gltf.scene; // THREE.Group
		gltf.scenes; // Array<THREE.Group>
		gltf.cameras; // Array<THREE.Camera>
		gltf.asset; // Object
	},
	// called while loading is progressing
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' );
  });

// Lights

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

{
  const color = 0xFFFFFF;
  const intensity = 1;
  const light = new THREE.DirectionalLight(color, intensity);
  light.position.set(-1, 2, 4);
  scene.add(light);
}

//Orbit Controlls



const controls = new THREE.OrbitControls(camera, renderer.domElement);

controls.autoRotate = true;

controls.enableDamping = true;

console.log("test");
// Animation Loop
function animate() {
  requestAnimationFrame(animate);
 	
	car.rotation.y += 0.01;
  renderer.render(scene, camera);
}

animate();

