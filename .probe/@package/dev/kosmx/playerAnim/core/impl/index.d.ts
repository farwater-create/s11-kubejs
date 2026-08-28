import { $TransformType_ } from "@package/dev/kosmx/playerAnim/api";
import { $FirstPersonConfiguration, $FirstPersonMode } from "@package/dev/kosmx/playerAnim/api/firstPerson";
import { $Vec3f, $Pair } from "@package/dev/kosmx/playerAnim/core/util";
import { $IAnimation } from "@package/dev/kosmx/playerAnim/api/layered";

declare module "@package/dev/kosmx/playerAnim/core/impl" {
    export class $AnimationProcessor {
        getBend(modelName: string): $Pair<number, number>;
        isActive(): boolean;
        tick(): void;
        get3DTransform(modelName: string, type: $TransformType_, value0: $Vec3f): $Vec3f;
        getFirstPersonMode(): $FirstPersonMode;
        getFirstPersonConfiguration(): $FirstPersonConfiguration;
        isFirstPersonAnimationDisabled(): boolean;
        setTickDelta(tickDelta: number): void;
        constructor(animation: $IAnimation);
        get active(): boolean;
        get firstPersonMode(): $FirstPersonMode;
        get firstPersonConfiguration(): $FirstPersonConfiguration;
        get firstPersonAnimationDisabled(): boolean;
        set tickDelta(value: number);
    }
}
