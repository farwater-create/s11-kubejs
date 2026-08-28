import { $Level } from "@package/net/minecraft/world/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";

declare module "@package/com/simibubi/create/compat/farmersdelight" {
    export class $FarmersDelightCompat {
        static shouldHarvestMushroom(arg0: $Level, arg1: $BlockPos_, arg2: $BlockState_): boolean;
        constructor();
    }
}
