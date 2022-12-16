uniform vec3 u_color;
varying vec2 v_uv;

void main() {
  float dist = distance(v_uv, vec2(0.5));
  float alpha = 1.0 - smoothstep(0.35, 0.5, dist);

  gl_FragColor = vec4(u_color, alpha);
}