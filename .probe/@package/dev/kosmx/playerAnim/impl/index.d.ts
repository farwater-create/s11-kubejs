import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $AnimationProcessor } from "@package/dev/kosmx/playerAnim/core/impl";
import { $AnimationApplier } from "@package/dev/kosmx/playerAnim/impl/animation";
import { $IPlayer } from "@package/dev/kosmx/playerAnim/api";
import { $SetableSupplier } from "@package/dev/kosmx/playerAnim/core/util";
import { $IAnimation } from "@package/dev/kosmx/playerAnim/api/layered";
export * as animation from "@package/dev/kosmx/playerAnim/impl/animation";

declare module "@package/dev/kosmx/playerAnim/impl" {
    export class $IPlayerModel {
    }
    export interface $IPlayerModel {
        playerAnimator_prepForFirstPersonRender(): void;
    }
    /**
     * Values that may be interpreted as {@link $IPlayerModel}.
     */
    export type $IPlayerModel_ = (() => void);
    export class $IMutableModel {
    }
    export interface $IMutableModel {
        setEmoteSupplier(arg0: $SetableSupplier<$AnimationProcessor>): void;
        getEmoteSupplier(): $SetableSupplier<$AnimationProcessor>;
    }
    export class $IUpperPartHelper {
    }
    export interface $IUpperPartHelper {
        setUpperPart(arg0: boolean): void;
        isUpperPart(): boolean;
    }
    export class $IAnimatedPlayer {
    }
    export interface $IAnimatedPlayer extends $IPlayer {
        /**
         * @deprecated
         */
        getAnimation(): $AnimationApplier;
        playerAnimator_getAnimation(arg0: $ResourceLocation_): $IAnimation;
        playerAnimator_getAnimation(): $AnimationApplier;
        playerAnimator_setAnimation(arg0: $ResourceLocation_, arg1: $IAnimation): $IAnimation;
        get animation(): $AnimationApplier;
    }
}
