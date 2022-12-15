import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { gl } from '../core/WebGL'
import { alphaClip } from './AlphaClip'
import { fxaa } from './FXAA'

class Effects {
	private composer!: EffectComposer

	constructor() {
		this.init()
	}

	private init() {
		this.composer = new EffectComposer(gl.renderer)
		this.composer.addPass(new RenderPass(gl.scene, gl.camera))

		this.composer.addPass(alphaClip.pass)
		this.composer.addPass(fxaa.pass)
	}

	resize() {
		fxaa.update()
		this.composer.setSize(gl.size.width, gl.size.height)
	}

	render() {
		this.composer.render()
	}
}

export const effects = new Effects()
