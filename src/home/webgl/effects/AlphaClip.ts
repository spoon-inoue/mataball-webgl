import * as THREE from 'three'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass'
import fragmentShader from '../shader/alphaClipFrag.glsl'
import vertexShader from '../shader/alphaClipVert.glsl'
import { gui } from '../utils/gui'

class AlphaClip {
	public pass: ShaderPass

	constructor() {
		this.pass = this.createPass()
		this.setGui()
	}

	private createPass() {
		const shader: THREE.Shader = {
			uniforms: {
				tDiffuse: { value: null },
			},
			vertexShader,
			fragmentShader,
		}
		return new ShaderPass(shader)
	}

	private setGui() {
		const folder = gui.addFolder('AlphaClip')
		folder.close()
		folder.add(this.pass, 'enabled')
	}
}

export const alphaClip = new AlphaClip()
