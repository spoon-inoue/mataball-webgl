uniform sampler2D tDiffuse;
varying vec2 v_uv;

void main() {
  vec4 tex = texture2D(tDiffuse, v_uv);

  if (tex.a < 0.99) {
    discard;
  }

  gl_FragColor = tex;
}