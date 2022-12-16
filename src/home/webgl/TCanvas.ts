import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import * as THREE from 'three'
import { gl } from './core/WebGL'
import { effects } from './effects/Effects'
import { shaders } from './shaders'
import { gui } from './utils/gui'

gsap.registerPlugin(ScrollTrigger)

export class TCanvas {
	private animeID?: number

	private palette = {
		ball1: '#b9e3f9',
		ball2: '#fdeea5',
		mix: '#f9d3c3',
	}

	constructor(private parentNode: ParentNode) {
		this.init()
		this.createObjects()
		this.setAnimationFrame()
		this.ceateGsapAnimation()
	}

	private init() {
		gl.setup(this.parentNode.querySelector('.three-container')!)
		gl.camera.position.set(0, 0, 1.5)

		gl.setResizeCallback(() => effects.resize())
	}

	private createObjects() {
		{
			const geometry = new THREE.PlaneGeometry()
			const material = new THREE.ShaderMaterial({
				uniforms: {
					u_progress: { value: 0 },
					u_color: { value: new THREE.Color(this.palette.ball1) },
				},
				vertexShader: shaders.ball1.vertex,
				fragmentShader: shaders.ball1.fragment,
				transparent: true,
			})
			const mesh = new THREE.Mesh(geometry, material)
			mesh.scale.multiplyScalar(1.3)
			mesh.position.z = -0.01
			mesh.name = 'ball1'
			gl.scene.add(mesh)

			const folder = gui.addFolder('ball 1')
			folder.addColor(material.uniforms.u_color, 'value').name('color')
		}
		{
			const geometry = new THREE.PlaneGeometry()
			const material = new THREE.ShaderMaterial({
				uniforms: {
					u_progress: { value: 0 },
					u_color1: { value: new THREE.Color(this.palette.ball2) },
					u_color2: { value: new THREE.Color(this.palette.mix) },
				},
				vertexShader: shaders.ball2.vertex,
				fragmentShader: shaders.ball2.fragment,
				transparent: true,
			})
			const mesh = new THREE.Mesh(geometry, material)
			mesh.scale.multiplyScalar(1.3)
			mesh.position.y = -2.0
			mesh.name = 'ball2'
			gl.scene.add(mesh)

			const folder = gui.addFolder('ball 2')
			folder.addColor(material.uniforms.u_color1, 'value').name('color 1')
			folder.addColor(material.uniforms.u_color2, 'value').name('color 2')
		}
	}

	private ceateGsapAnimation() {
		const ball1 = gl.getMesh<THREE.ShaderMaterial>('ball1')
		const ball2 = gl.getMesh<THREE.ShaderMaterial>('ball2')

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: this.parentNode.querySelector('.section'),
				start: 'top top',
				end: 'bottom bottom',
				scrub: 0.3,
			},
		})

		tl.to(ball1.material.uniforms.u_progress, { value: 1 }, 0)
		tl.to(ball2.material.uniforms.u_progress, { value: 1 }, '<30%')
		tl.to(ball2.position, { y: 0 }, 0)
	}

	private setAnimationFrame() {
		const anime = () => {
			// gl.render()
			effects.render()
			requestAnimationFrame(anime)
		}
		this.animeID = requestAnimationFrame(anime)
	}

	dipose() {
		this.animeID && cancelAnimationFrame(this.animeID)
	}
}
