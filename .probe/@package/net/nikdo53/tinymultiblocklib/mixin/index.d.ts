import { $ClipContext$Fluid_, $Level } from "@package/net/minecraft/world/level";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";

declare module "@package/net/nikdo53/tinymultiblocklib/mixin" {
    export class $ItemAccessor {
        static getPlayerPOVHitResult(arg0: $Level, arg1: $Player, arg2: $ClipContext$Fluid_): $BlockHitResult;
    }
    export interface $ItemAccessor {
    }
}
