// Found this on GLSL sandbox. I really liked it, changed a few things and made it tileable.
// :)
// by David Hoskins.
// Original water turbulence effect by joltz0r


// Redefine below to see the tiling...
//#define SHOW_TILING
---
	name: CornerPin
type: fragment
author: ''
---

	precision mediump float;

        uniform vec2 resolution;
        uniform sampler2D iChannel0;

        varying vec2 fragCoord;

void main()
{
            vec2 uv = fragCoord / resolution.xy;

            vec4 pixel = texture2D(iChannel0, uv);

	gl_FragColor = vec4(uv.xyx * pixel.rgb, 1.0);
}
