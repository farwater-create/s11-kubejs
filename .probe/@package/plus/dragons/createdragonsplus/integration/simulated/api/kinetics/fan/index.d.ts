import { $Level } from "@package/net/minecraft/world/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";

declare module "@package/plus/dragons/createdragonsplus/integration/simulated/api/kinetics/fan" {
    export class $FanProcessingTypeSimulatedExtension {
    }
    export interface $FanProcessingTypeSimulatedExtension {
        active(): boolean;
        canAffectBlock(arg0: $Level, arg1: $BlockPos_, arg2: $BlockState_): boolean;
        affectBlock(arg0: $Level, arg1: $BlockPos_, arg2: $BlockState_): void;
    }
}
