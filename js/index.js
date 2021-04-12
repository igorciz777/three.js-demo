let camera, scene, renderer;
let box, sphere, knot, material;
let boxmesh, spheremesh, knotmesh;
let light;

init();

function init() {

	camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight / 2, 0.01, 10 );
	camera.position.z = 1;

	scene = new THREE.Scene();

	box = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
	sphere = new THREE.SphereGeometry ( 0.25, 32, 32);
	knot = new THREE.TorusKnotGeometry(.15 , 0.05, 100 , 16);
	material = new THREE.MeshNormalMaterial();

	boxmesh = new THREE.Mesh( box, material );
	spheremesh = new THREE.Mesh( sphere, material );
	knotmesh = new THREE.Mesh( knot, material );

	light = new THREE.AmbientLight(0xffffff, 100);
	scene.add(light);
	scene.add( boxmesh );
	scene.add( spheremesh );
	scene.add( knotmesh );

	boxmesh.position.x = .3;
	boxmesh.position.y = .5;

	spheremesh.position.x = -.2;
	spheremesh.position.y = .1;

	knotmesh.position.x = .3;
	knotmesh.position.y = -.2;

	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( window.innerWidth / 2, window.innerHeight);
	renderer.setAnimationLoop( animation );
	document.body.appendChild( renderer.domElement );


}

function animation( time ) {

	knotmesh.rotation.x = time / 2000;
	knotmesh.rotation.y = time / 1000;
	boxmesh.rotation.x = time / 1000;
	spheremesh.rotation.y = time / 5000;

	renderer.render( scene, camera );

}

window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize(){

    camera.aspect = window.innerWidth / window.innerHeight / 2;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth / 2, window.innerHeight );

}