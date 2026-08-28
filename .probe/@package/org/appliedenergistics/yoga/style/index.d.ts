import { $FloatOptional } from "@package/org/appliedenergistics/yoga/numeric";
import { $YogaValue } from "@package/org/appliedenergistics/yoga";

declare module "@package/org/appliedenergistics/yoga/style" {
    export class $StyleLength {
        value(): $FloatOptional;
        resolve(arg0: number): $FloatOptional;
        isDefined(): boolean;
        static percent(arg0: number): $StyleLength;
        inexactEquals(arg0: $StyleLength): boolean;
        static fromYogaValue(arg0: $YogaValue): $StyleLength;
        asYogaValue(): $YogaValue;
        isUndefined(): boolean;
        isPoints(): boolean;
        isPercent(): boolean;
        static ofAuto(): $StyleLength;
        isAuto(): boolean;
        static undefined(): $StyleLength;
        static points(arg0: number): $StyleLength;
        get defined(): boolean;
        get auto(): boolean;
    }
    export class $StyleSizeLength {
        value(): $FloatOptional;
        resolve(arg0: number): $FloatOptional;
        isDefined(): boolean;
        static percent(arg0: number): $StyleSizeLength;
        inexactEquals(arg0: $StyleSizeLength): boolean;
        static ofFitContent(): $StyleSizeLength;
        static fromYogaValue(arg0: $YogaValue): $StyleSizeLength;
        asYogaValue(): $YogaValue;
        static ofMaxContent(): $StyleSizeLength;
        isUndefined(): boolean;
        isPoints(): boolean;
        isPercent(): boolean;
        static ofAuto(): $StyleSizeLength;
        isAuto(): boolean;
        isStretch(): boolean;
        static undefined(): $StyleSizeLength;
        static points(arg0: number): $StyleSizeLength;
        static ofStretch(): $StyleSizeLength;
        isFitContent(): boolean;
        isMaxContent(): boolean;
        static AUTO: $StyleSizeLength;
        static STRETCH: $StyleSizeLength;
        static MAX_CONTENT: $StyleSizeLength;
        static UNDEFINED: $StyleSizeLength;
        static FIT_CONTENT: $StyleSizeLength;
        get defined(): boolean;
        get auto(): boolean;
        get stretch(): boolean;
        get fitContent(): boolean;
        get maxContent(): boolean;
    }
}
