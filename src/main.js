import Swiper from 'swiper';
import 'swiper/css';

	
	var swiper = new Swiper(".mySwiper", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

import './style.css'

import * as THREE from 'three/webgpu';
import { color, cos, float, mix, range, sin, time, uniform, uv, vec3, vec4, PI2 } from 'three/tsl';

import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// Création des paramètres couleurInterne et couleurExterne pour rendre les instances modifiables
function duplicate() {
	let camera, scene, renderer, controls;

	init();

	function init() {

		camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);

		// Permet la vision du dessus
		camera.position.set(0, 50, 0);
		camera.lookAt(0, 0, 0);



		scene = new THREE.Scene();

		// galaxy

		const material = new THREE.SpriteNodeMaterial({
			depthWrite: false,
			blending: THREE.AdditiveBlending
		});

		const size = uniform(0.08);
		material.scaleNode = range(0, 1).mul(size);

		const radiusRatio = range(0, 1);
		const radius = radiusRatio.pow(1.5).mul(5).toVar();

		const branches = 3;
		const branchAngle = range(0, branches).floor().mul(PI2.div(branches));
		const angle = branchAngle.add(time.mul(radiusRatio.oneMinus()));

		const position = vec3(
			cos(angle),
			0,
			sin(angle)
		).mul(radius);

		const randomOffset = range(vec3(- 1), vec3(1)).pow3().mul(radiusRatio).add(0.2);

		material.positionNode = position.add(randomOffset);

		// Ajout des paramètre couleurInterne et couleurExterne
		const colorInside = uniform(color('#ffa575'));
		const colorOutside = uniform(color('#311599'));
		const colorFinal = mix(colorInside, colorOutside, radiusRatio.oneMinus().pow(2).oneMinus());
		const alpha = float(0.1).div(uv().sub(0.5).length()).sub(0.2);
		material.colorNode = vec4(colorFinal, alpha);

		const mesh = new THREE.InstancedMesh(new THREE.PlaneGeometry(1, 1), material, 20000);
		scene.add(mesh);

		// renderer


		renderer = new THREE.WebGPURenderer({ antialias: true });
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.setAnimationLoop(animate);
		document.body.appendChild(renderer.domElement);

		controls = new OrbitControls(camera, renderer.domElement);

		// Desactive les controles de la camera 
		controls.enableDamping = true;
		controls.enabled = false;

		controls.minDistance = 0.1;
		controls.maxDistance = 50;

		window.addEventListener('resize', onWindowResize);

	}

	function onWindowResize() {

		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();

		renderer.setSize(window.innerWidth, window.innerHeight);

	}

	function animate() {

		controls.update();

		renderer.render(scene, camera);

	}

	// Modification de la taille du canvas
	renderer.setSize(1000, 600)
}





