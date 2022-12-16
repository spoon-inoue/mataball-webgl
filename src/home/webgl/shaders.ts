import ball1Frag from './shader/ball1Frag.glsl'
import ball1Vert from './shader/ball1Vert.glsl'
import ball2Frag from './shader/ball2Frag.glsl'
import ball2Vert from './shader/ball2Vert.glsl'
import alphaClipFrag from './shader/alphaClipFrag.glsl'
import alphaClipVert from './shader/alphaClipVert.glsl'

export const shaders = {
	ball1: {
		vertex: ball1Vert,
		fragment: ball1Frag,
	},
	ball2: {
		vertex: ball2Vert,
		fragment: ball2Frag,
	},
	alphaClip: {
		vertex: alphaClipVert,
		fragment: alphaClipFrag,
	},
}
