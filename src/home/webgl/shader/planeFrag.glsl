uniform float u_progress;
uniform vec3 u_color1;
uniform vec3 u_color2;
varying vec2 v_uv;

void main() {
  // float p = smoothstep(0.5, 1.0, u_progress);
  // float threshold = smoothstep(p - 0.3, p, v_uv.y);
  // vec3 color = mix(u_color2, u_color1, threshold);
  vec3 color = mix(u_color2, u_color1, smoothstep(0.3, 0.7, v_uv.y));

  float dist = distance(v_uv, vec2(0.5));
  float alpha = 1.0 - smoothstep(0.35, 0.5, dist);

  gl_FragColor = vec4(color, alpha);
  // gl_FragColor = vec4(color, 1.0);
}