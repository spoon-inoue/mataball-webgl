import { TCanvas } from './webgl/TCanvas'
import { gui } from './webgl/utils/gui'

const canvas = new TCanvas(document.body)

window.addEventListener('beforeunload', () => {
	canvas.dipose()
})

const obj = {
	toggleTitleColor: () => {
		const head = document.querySelector<HTMLElement>('.text__head')!
		head.classList.toggle('text__head--light')
	},
}
gui.add(obj, 'toggleTitleColor').name('toggle title color')
