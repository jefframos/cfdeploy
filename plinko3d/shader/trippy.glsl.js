#ifdef GL_ES
precision mediump float;
#endif

precision mediump float;

uniform float time;
uniform vec2 resolution;

varying vec2 fragCoord;

const float PI = 3.14159265;

void mainImage(out vec4 fragColor, in vec2 fragCoord) {

    float time = time * 0.2;

    float color1, color2, color;

    color1 = (sin(dot(fragCoord.xy, vec2(sin(time * 2.0), cos(time * 2.0))) * 0.02 + time * 3.0) + 1.0) / 2.0;

    vec2 center = vec2(resolution.x / 2.0, resolution.y / 2.0) + vec2(resolution.x / 2.0 * sin(-time * 3.0), resolution.y / 2.0 * cos(-time * 3.0));

    color2 = (cos(length(fragCoord.xy - center) * 0.03) + 1.0) / 2.0;

    color = (color1 + color2) / 2.0;

    float red = (cos(PI * color / 0.5 + time * 3.0) + 1.0) / 2.0;
    float green = (sin(PI * color / 0.5 + time * 3.0) + 1.0) / 10.0 * red;
    float blue = (sin(+time * 3.0) + 1.0) / 2.0;

    fragColor = vec4(red, green, blue, 1.0);
}

void main(void)
{
    mainImage(gl_FragColor, fragCoord.xy);
    gl_FragColor.a = 1.0;
}