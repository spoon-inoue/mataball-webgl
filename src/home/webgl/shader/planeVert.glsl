uniform float u_progress;
varying vec2 v_uv;

float rescale(float min, float max, float value) {
  return value * (max - min) + min;
}

float parabola(float value, float t) {
	return pow(value * (1.0 - value), t) * pow(4.0, t);
}

void main() {
  v_uv = uv;
  vec3 pos = position;

  pos.x *= rescale(0.5, 1.0, 1.0 - u_progress);
  pos.y += parabola(u_progress, 3.0) * 0.1;

  float scale = 1.0 - smoothstep(0.8, 1.0, u_progress);
  scale = rescale(0.8, 1.0, scale);
  pos.xy *= scale;

  gl_Position = projectionMatrix * modelViewMatrix * vec4( pos, 1.0 );
}