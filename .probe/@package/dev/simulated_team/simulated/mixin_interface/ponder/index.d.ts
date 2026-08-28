import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/dev/simulated_team/simulated/mixin_interface/ponder" {
    export class $PonderSceneExtension {
    }
    export interface $PonderSceneExtension {
        simulated$setOldShadowOffset(arg0: $Vec3_): void;
        simulated$setYOffset(arg0: number): void;
        simulated$setScaleFactor(arg0: number): void;
        simulated$getShadowOffset(arg0: number): $Vec3;
        simulated$moveShadowOffset(arg0: $Vec3_): void;
        simulated$setShadowOffset(arg0: $Vec3_): void;
        simulated$toggleRenderBasePlateShadow(): void;
        simulated$getBasePlateAnimationTimer(arg0: number): number;
        simulated$getYOffset(arg0: number): number;
        simulated$getScale(arg0: number): number;
    }
}
