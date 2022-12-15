export function rescale(min: number, max: number, normalizedValue: number) {
	return normalizedValue * (max - min) + min
}

/**
 * 0.5で最大値を1とする往復する関数
 * @param normalizedValue 0 ~ 1（progress値やrandom値など）
 * @param t 指数（値が大きいほど急激に1に変化する）
 * @returns 0 ~ 1
 */
export function parabola(normalizedValue: number, t: number) {
	return Math.pow(normalizedValue * (1 - normalizedValue), t) * Math.pow(4, t)
}

export function smoothstep(edge0: number, edge1: number, value: number) {
	let t = (value - edge0) / (edge1 - edge0)
	t = Math.max(0.0, Math.min(t, 1.0))
	return t * t * (3 - 2 * t)
}

export function step(threshold: number, value: number) {
	return threshold < value ? 1 : 0
}
