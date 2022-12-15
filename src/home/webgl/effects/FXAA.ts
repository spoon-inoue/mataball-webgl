import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass'
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader'
import { gl } from '../core/WebGL'
import { gui } from '../utils/gui'

class FXAA {
	public pass: ShaderPass

	constructor() {
		this.pass = this.createPass()
		this.update()
		this.setGui()
	}

	private createPass() {
		return new ShaderPass(FXAAShader)
	}

	private setGui() {
		const folder = gui.addFolder('FXAA')
		folder.close()
		folder.add(this.pass, 'enabled')
	}

	update() {
		this.pass.material.uniforms.resolution.value.set(1 / gl.size.width, 1 / gl.size.height)
	}
}

export const fxaa = new FXAA()
