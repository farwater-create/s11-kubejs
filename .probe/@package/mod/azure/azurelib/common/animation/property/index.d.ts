import { $AzAnimationPropertiesCodec } from "@package/mod/azure/azurelib/common/animation/property/codec";
import { $AzEasingType } from "@package/mod/azure/azurelib/common/animation/easing";
export * as codec from "@package/mod/azure/azurelib/common/animation/property/codec";

declare module "@package/mod/azure/azurelib/common/animation/property" {
    export class $AzAnimationProperties {
        easingType(): $AzEasingType;
        animationSpeed(): number;
        transitionLength(): number;
        freezeTickOffset(): number;
        startTickOffset(): number;
        repeatXTimes(): number;
        isReversing(): boolean;
        withRepeatXTimes(arg0: number): $AzAnimationProperties;
        withShouldReverse(arg0: boolean): $AzAnimationProperties;
        withStartTickOffset(arg0: number): $AzAnimationProperties;
        withTransitionLength(arg0: number): $AzAnimationProperties;
        withFreezeTickOffset(arg0: number): $AzAnimationProperties;
        withAnimationSpeed(arg0: number): $AzAnimationProperties;
        withEasingType(arg0: $AzEasingType): $AzAnimationProperties;
        hasFreezeTickOffset(): boolean;
        hasTransitionLength(): boolean;
        hasAnimationSpeed(): boolean;
        hasEasingType(): boolean;
        hasStartTickOffset(): boolean;
        hasRepeatXTimes(): boolean;
        hasReversing(): boolean;
        static CODEC: $AzAnimationPropertiesCodec;
        static EMPTY: $AzAnimationProperties;
        static DEFAULT: $AzAnimationProperties;
        constructor(arg0: number, arg1: $AzEasingType, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean);
        get reversing(): boolean;
    }
}
