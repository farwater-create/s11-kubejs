
declare module "@package/foundry/veil/api/client/color" {
    export class $Colorc {
    }
    export interface $Colorc {
        mix(arg0: $Colorc, arg1: number, arg2: $Color): $Color;
        red(): number;
        rgb(): number;
        maxComponent(): number;
        minComponent(): number;
        hue(): number;
        saturation(): number;
        lerp(arg0: $Colorc, arg1: number, arg2: $Color): $Color;
        blue(): number;
        alpha(): number;
        green(): number;
        setHSV(arg0: number, arg1: number, arg2: number, arg3: $Color): $Color;
        redInt(): number;
        grayscale(arg0: $Color): $Color;
        alphaInt(): number;
        sepia(arg0: $Color): $Color;
        lighten(arg0: number, arg1: $Color): $Color;
        darken(arg0: number, arg1: $Color): $Color;
        setHue(arg0: number, arg1: $Color): $Color;
        blueInt(): number;
        greenInt(): number;
        invert(arg0: $Color): $Color;
        setLuminance(arg0: number, arg1: $Color): $Color;
        luminance(): number;
        argb(): number;
        setSaturation(arg0: number, arg1: $Color): $Color;
    }
}
