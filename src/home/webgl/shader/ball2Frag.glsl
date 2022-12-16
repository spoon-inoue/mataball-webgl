uniform float u_progress;
uniform vec3 u_color1;
uniform vec3 u_color2;
varying vec2 v_uv;

void main() {
  vec3 color = mix(u_color2, u_color1, smoothstep(u_progress - 0.2, u_progress + 0.2, 1.0 - v_uv.y));

  float dist = distance(v_uv, vec2(0.5));
  float alpha = 1.0 - smoothstep(0.35, 0.5, dist);

  gl_FragColor = vec4(color, alpha);
}