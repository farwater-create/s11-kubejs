import { $Animator } from "@package/com/alrex/parcool/client/animation";
import { $Event } from "@package/net/neoforged/bus/api";
import { $AbstractClientPlayer } from "@package/net/minecraft/client/player";
import { $Enum } from "@package/java/lang";

declare module "@package/com/alrex/parcool/api/unstable/animation" {
    export class $AnimationOption {
        cancel(arg0: $AnimationPart_): void;
        isAnimationCanceled(): boolean;
        isCanceled(arg0: $AnimationPart_): boolean;
        cancelAnimation(): void;
        constructor();
        get animationCanceled(): boolean;
    }
    export class $ParCoolAnimationInfoEvent extends $Event {
        getOption(): $AnimationOption;
        getAnimator(): $Animator;
        getPlayer(): $AbstractClientPlayer;
        constructor(arg0: $AbstractClientPlayer, arg1: $Animator);
        get option(): $AnimationOption;
        get animator(): $Animator;
        get player(): $AbstractClientPlayer;
    }
    export class $AnimationPart extends $Enum<$AnimationPart> {
        static values(): $AnimationPart[];
        static valueOf(arg0: string): $AnimationPart;
        static LEFT_LEG: $AnimationPart;
        static ROTATION: $AnimationPart;
        static HEAD: $AnimationPart;
        static LEFT_ARM: $AnimationPart;
        static CAMERA: $AnimationPart;
        static RIGHT_ARM: $AnimationPart;
        static RIGHT_LEG: $AnimationPart;
    }
    /**
     * Values that may be interpreted as {@link $AnimationPart}.
     */
    export type $AnimationPart_ = "head" | "right_arm" | "left_arm" | "right_leg" | "left_leg" | "rotation" | "camera";
}
